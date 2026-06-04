import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { IconArrowRight } from "@/components/Icons";

/**
 * Projecten / referenties-grid.
 * `limit` beperkt het aantal kaarten (homepage toont er bijv. 3).
 */
export default function Projects({ limit }: { limit?: number }) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projecten" className="bg-white py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Projecten & referenties"
            title="Een greep uit ons werk"
            intro="Van particuliere woningen tot bedrijfspanden — bekijk een aantal recent uitgevoerde projecten."
          />
          {limit && (
            <Link
              href="/projecten"
              className="btn-outline shrink-0"
            >
              Alle projecten <IconArrowRight width={18} height={18} />
            </Link>
          )}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((project, i) => (
            <ScrollReveal key={project.title} delay={(i % 3) * 80}>
              <article className="group h-full overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
                  {/* TODO: vervang door echte projectfoto */}
                  <Image
                    src={project.image}
                    alt={`${project.title} in ${project.location}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-ink-950/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-ink-900">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-volt-600">
                    {project.location}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {project.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
