export const DISPATCH_EVENT = "intentlock-hold-resolved";
export const SIGNATURE_HEADER = "intentlock-signature";

export type HoldEvent = { id: string; holdId: string; planId: string; status: string };

export type Verify = (
  secret: string,
  body: string,
  header: string | null,
  now: Date,
) => Promise<HoldEvent | null>;

export interface RelayConfig {
  webhookSecret: string;
  githubToken: string;
  repo: string;
}

export async function relayHoldEvent(
  req: Request,
  config: RelayConfig,
  verify: Verify,
  fetchFn: typeof fetch = fetch,
  now: Date = new Date(),
): Promise<Response> {
  if (req.method !== "POST") return new Response("method not allowed", { status: 405 });
  const body = await req.text();
  const event = await verify(config.webhookSecret, body, req.headers.get(SIGNATURE_HEADER), now);
  if (!event) return new Response("bad signature", { status: 401 });

  const res = await fetchFn(`https://api.github.com/repos/${config.repo}/dispatches`, {
    method: "POST",
    headers: {
      accept: "application/vnd.github+json",
      authorization: `Bearer ${config.githubToken}`,
      "content-type": "application/json",
      "x-github-api-version": "2022-11-28",
    },
    body: JSON.stringify({
      event_type: DISPATCH_EVENT,
      client_payload: {
        planId: event.planId,
        holdId: event.holdId,
        status: event.status,
        eventId: event.id,
      },
    }),
  });
  if (!res.ok) return new Response(`GitHub answered ${res.status}`, { status: 502 });
  return new Response(null, { status: 204 });
}
