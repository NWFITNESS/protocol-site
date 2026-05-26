import Link from "next/link";
import { Mark } from "./Mark";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center gap-8 text-center">
        <Mark size={64} />

        <h1
          className="text-5xl font-bold tracking-tight md:text-7xl"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          PROTOCOL
        </h1>

        <p className="text-xl text-[#8A8A93]">
          The coaching protocol.
        </p>

        <div className="mt-4 flex h-px w-24 bg-[#2A2A2E]" />

        <p className="max-w-sm text-sm text-[#5A5A60]">
          The operating system for serious coaches. Built by a coach, for coaches.
        </p>

        <p
          className="mt-8 text-sm tracking-widest text-[#3B82F6]"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          COMING SOON
        </p>

        <p className="mt-2 text-xs text-[#5A5A60]">
          Precision programming. Auto-calculated loads. Complete athlete tracking.
        </p>
      </div>

      <footer className="absolute bottom-8 flex flex-col items-center gap-3">
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="text-xs text-[#5A5A60] hover:text-[#8A8A93]">
            Privacy policy
          </Link>
          <span className="text-[#2A2A2E]">|</span>
          <Link href="/terms" className="text-xs text-[#5A5A60] hover:text-[#8A8A93]">
            Terms of service
          </Link>
        </div>
      </footer>
    </div>
  );
}
