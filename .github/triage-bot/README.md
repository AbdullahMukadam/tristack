# Triage bot

Labels new issues and drafts one comment, guarded by [Intentlock](https://intentlock.space). The comment is held for a maintainer's approval in the Intentlock inbox.

## Pausing on the held comment

Without checkpoint storage the job waits for the approval (up to 30 minutes, the hold timeout in `policy.yaml`). With storage configured it pauses instead:

1. The triage job labels the issue, saves an encrypted checkpoint to a private Supabase Storage bucket and exits.
2. When the hold is approved, rejected or expires, Intentlock posts a signed event to the `intentlock-relay` Supabase Edge Function.
3. The relay checks the signature and calls GitHub `repository_dispatch` (`intentlock-hold-resolved`).
4. The same workflow starts a short resume job: it loads the checkpoint, posts the comment only if it was approved, and deletes the checkpoint.

## Setup

1. **Bucket.** Supabase → Storage → new **private** bucket, e.g. `intentlock-checkpoints`. Storage → Settings → S3 Connection: note the endpoint and region, create an access key.
2. **Encryption key.** `openssl rand -base64 32`.
3. **Repository settings** (Settings → Secrets and variables → Actions):
   - Variables: `CHECKPOINT_S3_ENDPOINT`, `CHECKPOINT_S3_REGION`, `CHECKPOINT_S3_BUCKET`
   - Secrets: `CHECKPOINT_S3_ACCESS_KEY_ID`, `CHECKPOINT_S3_SECRET_ACCESS_KEY`, `CHECKPOINT_KEY`
   Set all six or none; the job refuses a partial setup.
4. **Dispatch token.** A fine-grained GitHub token for this repository only, with **Contents: Read and write** (needed for `repository_dispatch`).
5. **Webhook.** In the Intentlock inbox: Agents → the triage agent → Overview → Hold webhook. URL: `https://<project-ref>.supabase.co/functions/v1/intentlock-relay`. Copy the signing secret it shows once.
6. **Relay.** From `.github/triage-bot`:
   ```bash
   supabase functions deploy intentlock-relay --no-verify-jwt --project-ref <project-ref>
   supabase secrets set --project-ref <project-ref> \
     INTENTLOCK_WEBHOOK_SECRET=<signing secret> \
     GITHUB_DISPATCH_TOKEN=<token from step 4> \
     GITHUB_REPOSITORY=AbdullahMukadam/tristack
   ```
   `--no-verify-jwt` is required: Intentlock signs its own requests and does not send a Supabase JWT.

`repository_dispatch` only runs workflows on the default branch, so pausing works after this is merged to `main`.

## Notes

- Two events for the same plan never resume at the same time: the workflow's concurrency group is per plan.
- A checkpoint holds the issue text the bot read and a plan token; it is encrypted with `CHECKPOINT_KEY` and bound to its key, so an edited or swapped checkpoint fails to load. Resume also checks the held call against the Intentlock server before running it.
- Every hold ends in an event (approved, rejected or expired), so checkpoints are deleted by the resume job. One is left behind only if the webhook fails for about four hours; Supabase Storage has no lifecycle rules, so delete such files by hand.
- Tests: `npm test` (FakeProvider, no network).
