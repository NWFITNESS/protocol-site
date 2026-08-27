/**
 * A full-bleed lifestyle/product photograph (real device-in-situ shots), shown
 * at its natural aspect ratio as a rounded, bordered surface with card elevation.
 * Unlike Screenshot, it adds no browser/phone chrome - the device is already in
 * the shot.
 *
 * Pass `mobileSrc` for art direction: the portrait phone shot is served on small
 * screens and the wide desktop shot from the `sm` breakpoint up, so a landscape
 * image is never stretched thin on a phone.
 */
export function LifestyleShot({
  src,
  mobileSrc,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  mobileSrc?: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  const imgClass = `block h-auto w-full rounded-2xl border border-border-strong object-cover card-elevation ${className}`;
  const loading = priority ? "eager" : "lazy";

  if (!mobileSrc) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} loading={loading} className={imgClass} />;
  }

  return (
    <picture>
      <source media="(min-width: 640px)" srcSet={src} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={mobileSrc} alt={alt} loading={loading} className={imgClass} />
    </picture>
  );
}
