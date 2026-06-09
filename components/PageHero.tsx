import Link from "next/link";
import type { ReactNode } from "react";
import { IconChevronDown } from "./Icons";

/**
 * Compacte hero voor binnenpagina's, met breadcrumb voor oriëntatie/SEO.
 */
export default function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumb,
  parent,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  breadcrumb: string;
  /** Optioneel tussenniveau, bijv. Home › Werkgebied › {Stad}. */
  parent?: { label: string; href: string };
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pt-16 text-white lg:pt-[4.5rem]">
      {/* Subtiel grid-patroon als achtergrond */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />
      <div className="absolute -right-24 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-spark-400/20 blur-3xl" />

      <div className="container py-14 lg:py-20">
        <nav aria-label="Kruimelpad" className="mb-5 text-sm text-ink-300">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <IconChevronDown
                width={16}
                height={16}
                className="-rotate-90 text-ink-500"
              />
            </li>
            {parent && (
              <>
                <li>
                  <Link href={parent.href} className="hover:text-white">
                    {parent.label}
                  </Link>
                </li>
                <li aria-hidden="true">
                  <IconChevronDown
                    width={16}
                    height={16}
                    className="-rotate-90 text-ink-500"
                  />
                </li>
              </>
            )}
            <li className="font-medium text-white" aria-current="page">
              {breadcrumb}
            </li>
          </ol>
        </nav>

        {eyebrow && (
          <span className="text-sm font-semibold uppercase tracking-wider text-spark-400">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-200">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
