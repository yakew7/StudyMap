import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, MapPin, GitFork, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Docs",
  description: "Student guides for StudyMap and the tools around it.",
};

const DOCS = [
  {
    href: "/docs/github-student-pack",
    icon: GraduationCap,
    title: "GitHub Student Developer Pack",
    description:
      "Claim free developer tools worth hundreds of dollars. Step-by-step guide for Indian students.",
  },
  {
    href: "/docs/exam-centres",
    icon: MapPin,
    title: "Finding Exam Centres",
    description:
      "Use the map to locate SAT, IB, and IGCSE exam centres across Mumbai, Thane, and Navi Mumbai.",
  },
  {
    href: "/docs/contributing",
    icon: GitFork,
    title: "Contributing Places",
    description:
      "Add a missing location or fix stale data. JSON or GitHub issue, both work.",
  },
];

export default function DocsIndexPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <h1 className="font-heading text-3xl font-bold tracking-tight">Docs</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Student guides for StudyMap and the tools around it.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {DOCS.map(({ href, icon: Icon, title, description }) => (
          <Link
            key={href}
            href={href}
            className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="size-5 text-primary" />
              </div>
              <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 mt-1" />
            </div>
            <div>
              <h2 className="font-heading font-semibold text-foreground leading-snug">{title}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
