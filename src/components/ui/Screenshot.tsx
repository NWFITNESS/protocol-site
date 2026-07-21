import Image from "next/image";
import { MockScreen } from "./MockScreen";
import { READY_SCREENS } from "@/lib/screens";

/**
 * Renders a real product screenshot when one exists (registered in
 * src/lib/screens.ts), otherwise a branded placeholder frame. Keeps the same
 * browser/phone framing either way so the layout never shifts when real
 * captures are dropped in.
 */
export function Screenshot({
  src,
  alt,
  variant = "browser",
  className = "",
}: {
  src?: string;
  alt: string;
  variant?: "browser" | "phone";
  className?: string;
}) {
  const ready = !!src && READY_SCREENS.has(src);
  if (!ready) {
    return <MockScreen src={src} alt={alt} variant={variant} className={className} />;
  }

  if (variant === "phone") {
    return (
      <div
        className={`relative mx-auto aspect-[9/19] w-full max-w-[240px] overflow-hidden rounded-[2rem] border border-border-strong bg-bg-surface card-elevation ${className}`}
      >
        <Image src={src!} alt={alt} fill sizes="240px" className="object-cover" />
      </div>
    );
  }
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-border-strong bg-bg-surface card-elevation ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-border-subtle bg-bg-surface-raised px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="ml-3 truncate text-[11px] text-text-tertiary">app.protocolapp.uk</span>
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={src!} alt={alt} fill sizes="(min-width: 1024px) 512px, 100vw" className="object-cover" />
      </div>
    </div>
  );
}
