import { company } from "@/lib/company";

/**
 * Tekst-gebaseerd logo met bliksem-mark. Snel, schaalbaar en toegankelijk.
 * TODO (eigenaar): vervang dit door jullie echte logo (bijv. een SVG/PNG in
 * /public en hier een next/image). Houd de alt-tekst = bedrijfsnaam.
 */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5 font-semibold tracking-tight">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-spark-400 text-ink-900 shadow-sm">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
        </svg>
      </span>
      <span
        className={`text-lg leading-tight ${light ? "text-white" : "text-ink-900"}`}
      >
        {company.name}
      </span>
    </span>
  );
}
