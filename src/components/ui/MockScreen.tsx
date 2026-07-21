import { Mark } from "@/app/Mark";

/**
 * Branded placeholder for a product screenshot. Renders a dark browser/phone
 * frame with a caption so the layout reads as intentional until real captures
 * are added.
 *
 * TODO(marketing): drop real screenshots into /public/screens and swap this for
 * next/image (the `src` prop already carries the intended path).
 */
export function MockScreen({
  alt,
  variant = "browser",
  className = "",
}: {
  src?: string;
  alt: string;
  variant?: "browser" | "phone";
  className?: string;
}) {
  if (variant === "phone") {
    return (
      <div
        className={`relative mx-auto aspect-[9/19] w-full max-w-[240px] overflow-hidden rounded-[2rem] border border-border-strong bg-bg-surface card-elevation ${className}`}
      >
        <FrameBody alt={alt} />
      </div>
    );
  }
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-border-strong bg-bg-surface card-elevation ${className}`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-border-subtle bg-bg-surface-raised px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="ml-3 truncate text-[11px] text-text-tertiary">app.protocolapp.uk</span>
      </div>
      <div className="aspect-[16/10]">
        <FrameBody alt={alt} />
      </div>
    </div>
  );
}

function FrameBody({ alt }: { alt: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.10),transparent_60%)] p-6 text-center">
      <Mark size={32} className="opacity-70" />
      <p className="max-w-[80%] text-xs text-text-tertiary">{alt}</p>
      <span className="rounded-full border border-border-subtle px-2 py-0.5 text-[10px] uppercase tracking-widest text-text-tertiary">
        Preview
      </span>
    </div>
  );
}
