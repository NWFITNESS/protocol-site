import Image from "next/image";

/**
 * A full-bleed lifestyle/product photograph (real device-in-situ shots), shown
 * as a rounded, bordered surface with card elevation. Unlike Screenshot, it adds
 * no browser/phone chrome - the photo already has the device in frame.
 */
export function LifestyleShot({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 900px, 100vw",
  className = "aspect-video",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-border-strong card-elevation ${className}`}
    >
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
    </div>
  );
}
