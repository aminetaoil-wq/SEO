"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { company } from "@/lib/company";
import { navItems } from "@/lib/navigation";
import Logo from "./Logo";
import { IconPhone, IconMenu, IconClose } from "./Icons";

/**
 * Sticky header met prominent telefoonnummer (rechts) en CTA.
 * Mobiel: hamburgermenu. Wordt compacter/krijgt schaduw bij scrollen.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Voorkom scrollen van de achtergrond als het mobiele menu open is
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-card backdrop-blur"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Link
          href="/"
          aria-label={`${company.name} — naar home`}
          className="shrink-0"
        >
          <Logo />
        </Link>

        {/* Desktop navigatie */}
        <nav
          aria-label="Hoofdnavigatie"
          className="hidden items-center gap-7 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Rechterkant: telefoon + CTA (desktop) */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${company.phoneRaw}`}
            className="group flex items-center gap-2 text-right"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-50 text-ink-700 transition-colors group-hover:bg-ink-100">
              <IconPhone width={18} height={18} />
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] font-medium uppercase tracking-wide text-ink-400">
                Bel direct
              </span>
              <span className="block text-sm font-semibold text-ink-900">
                {company.phone}
              </span>
            </span>
          </a>
          <Link href="/contact" className="btn-primary">
            Offerte aanvragen
          </Link>
        </div>

        {/* Mobiel: snel bellen + hamburger */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <a
            href={`tel:${company.phoneRaw}`}
            aria-label={`Bel ${company.name}: ${company.phone}`}
            className="grid h-10 w-10 place-items-center rounded-lg bg-spark-400 text-ink-900"
          >
            <IconPhone width={20} height={20} />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Menu openen"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-lg text-ink-800 hover:bg-ink-50"
          >
            <IconMenu width={24} height={24} />
          </button>
        </div>
      </div>

      {/* Mobiel menu-overlay */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink-950/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 right-0 flex w-[min(20rem,85vw)] flex-col bg-white shadow-2xl">
            <div className="flex h-16 items-center justify-between border-b border-ink-100 px-5">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Menu sluiten"
                className="grid h-10 w-10 place-items-center rounded-lg text-ink-800 hover:bg-ink-50"
              >
                <IconClose width={24} height={24} />
              </button>
            </div>
            <nav
              aria-label="Mobiele navigatie"
              className="flex flex-1 flex-col gap-1 overflow-y-auto p-4"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink-800 hover:bg-ink-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="space-y-3 border-t border-ink-100 p-4">
              <a
                href={`tel:${company.phoneRaw}`}
                className="btn-secondary w-full"
                onClick={() => setOpen(false)}
              >
                <IconPhone width={18} height={18} /> {company.phone}
              </a>
              <Link
                href="/contact"
                className="btn-primary w-full"
                onClick={() => setOpen(false)}
              >
                Offerte aanvragen
              </Link>
              <a
                href={`tel:${company.emergencyPhoneRaw}`}
                className="block text-center text-sm font-medium text-volt-600"
                onClick={() => setOpen(false)}
              >
                24/7 storingsdienst: {company.emergencyPhone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
