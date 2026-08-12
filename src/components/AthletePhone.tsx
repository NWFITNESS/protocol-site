/** A clean phone frame wrapping the real Protocol athlete home screen. The
 *  screenshot already includes the in-app top bar (its system status bar was
 *  cropped), so no notch is drawn. Decorative. */
export function AthletePhone({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-[248px] shrink-0 rounded-[2.4rem] border border-border-strong bg-[#050506] p-2.5 shadow-2xl sm:w-[264px] ${className}`}
    >
      <div className="overflow-hidden rounded-[1.9rem]">
        <img
          src="/screens/athlete-home.webp"
          alt="The Protocol athlete app home screen"
          loading="lazy"
          className="block w-full"
        />
      </div>
    </div>
  );
}
