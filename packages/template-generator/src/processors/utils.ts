export interface RewriteHunk {
  find: string;
  replace: string;
}

export function applyHunks(content: string, hunks: RewriteHunk[]): string {
  let result = content;
  for (const hunk of hunks) {
    result = result.split(hunk.find).join(hunk.replace);
  }
  return result;
}

export function append(content: string, addition: string): string {
  return content.trimEnd() + "\n" + addition;
}
