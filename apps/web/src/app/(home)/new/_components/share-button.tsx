"use client";

import { Share2 } from "lucide-react";

import { ShareDialog } from "@/components/ui/share-dialog";
import type { StackState } from "@/lib/constant";

interface ShareButtonProps {
  stackUrl: string;
  stackState: StackState;
}

export function ShareButton({ stackUrl, stackState }: ShareButtonProps) {
  return (
    <ShareDialog stackUrl={stackUrl} stackState={stackState}>
      <button
        type="button"
        className="builder-focus-ring pointer-coarse:min-h-8 flex items-center justify-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium text-primary transition-colors duration-150 hover:border-primary"
        title="Share your stack"
      >
        <Share2 className="h-3 w-3" />
        Share
      </button>
    </ShareDialog>
  );
}
