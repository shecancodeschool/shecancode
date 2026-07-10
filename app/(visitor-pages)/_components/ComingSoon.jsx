"use client";

import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import WatchBackground from "./WatchBackground";

const ComingSoon = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-sky-950 text-white">
      {/* Background footage — blurred */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-md grayscale"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/learning.mp4" type="video/mp4" />
      </video>

      {/* Brand-blue tint over the footage */}
      <div className="pointer-events-none absolute inset-0 bg-sky-800/40 mix-blend-color" />
      <div className="pointer-events-none absolute inset-0 bg-sky-950/60" />

      {/* Cinematic depth: vignette + faint spotlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,116,144,0.35),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(3,26,47,0.92))]" />

      {/* Header */}
      <header className="relative z-10 w-full">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-7 md:px-10">
          <Image
            src={"/logo/logo3.png"}
            alt="SheCanCODE"
            width={50}
            height={30}
            className="cs-fade-in h-8 w-auto"
          />
          <div className="cs-fade-in flex items-center gap-6 [animation-delay:200ms]">
            <div className="flex items-center gap-4 text-white/70">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="transition duration-300 hover:scale-110 hover:text-white"
                >
                  <Icon className="h-[15px] w-[15px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero — type layered over the ticking clock */}
      <main className="relative z-10 flex flex-1 items-center justify-center px-6">
        <div className="relative flex aspect-square w-full max-w-[560px] items-center justify-center">
          {/* Ticking clock behind the words */}
          <WatchBackground />

          {/* Overlaid type */}
          <div className="relative z-10 flex flex-col items-center text-center [text-shadow:0_2px_20px_rgba(3,26,47,0.9)]">
            <p className="cs-fade-up text-[11px] font-medium uppercase tracking-[0.45em] text-white/90 md:text-sm">
              Our new site is
            </p>

            <h1 className="cs-fade-up my-4 font-extrabold uppercase leading-[0.95] tracking-[0.12em] text-[#6AACE8] drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)] [animation-delay:120ms]">
              <span className="block text-6xl sm:text-7xl md:text-8xl">Coming</span>
              <span className="block text-6xl sm:text-7xl md:text-8xl">Soon</span>
            </h1>

            <p className="cs-fade-up text-[11px] font-medium uppercase tracking-[0.45em] text-white/90 md:text-sm [animation-delay:240ms]">
              Stay tuned!
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-2 px-6 py-6 text-[11px] uppercase tracking-[0.2em] text-white/40 md:flex-row md:px-10">
          <p>&copy; {new Date().getFullYear()} SheCanCODE Bootcamp</p>
          <p>KG 549 St, Kacyiru · Kigali, Rwanda</p>
        </div>
      </footer>

      {/* Scoped animation styles */}
      <style>{`
        @keyframes cs-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cs-fade-up {
          opacity: 0;
          animation: cs-fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes cs-fade-in { from { opacity: 0; } to { opacity: 1; } }
        .cs-fade-in { opacity: 0; animation: cs-fade-in 1.1s ease forwards; }

        @media (prefers-reduced-motion: reduce) {
          .cs-fade-up, .cs-fade-in { opacity: 1; animation: none; }
        }
      `}</style>
    </div>
  );
};

const SOCIALS = [
  {
    href: "https://x.com/igirerwanda",
    label: "Twitter / X",
    Icon: FaXTwitter,
  },
  {
    href: "https://www.instagram.com/igire_rwanda/",
    label: "Instagram",
    Icon: AiFillInstagram,
  },
  {
    href: "https://www.linkedin.com/company/igirerwanda/",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
  },
  {
    href: "https://www.facebook.com/igirerwandaorganization",
    label: "Facebook",
    Icon: FaFacebookF,
  },
];

export default ComingSoon;
