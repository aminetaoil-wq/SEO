import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="container flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <span className="text-6xl font-bold text-spark-400">404</span>
        <h1 className="mt-4 text-2xl font-bold text-ink-900">
          Pagina niet gevonden
        </h1>
        <p className="mt-2 max-w-md text-ink-500">
          De pagina die u zoekt bestaat niet (meer). Ga terug naar de homepage of
          neem contact met ons op.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Naar de homepage <IconArrowRight width={18} height={18} />
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact opnemen
          </Link>
        </div>
      </div>
    </section>
  );
}
