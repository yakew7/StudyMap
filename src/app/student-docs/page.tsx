import Link from "next/link";
import { getBenefitGuides } from "@/lib/student-docs";

export const metadata = {
  title: "Student Docs",
};

export default function StudentDocsPage() {
  const guides = getBenefitGuides();

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Student Resources</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Free tools, funding, and guides for students
        </p>

        <div className="mt-12 grid gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/student-docs/${guide.slug}`}
              className="group block rounded-lg border border-border bg-muted/30 p-6 transition-colors hover:bg-muted/50"
            >
              <h2 className="text-xl font-semibold group-hover:text-foreground">
                {guide.meta.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {guide.meta.summary}
              </p>
            </Link>
          ))}
        </div>

        {guides.length === 0 && (
          <div className="mt-12 rounded-lg border border-border bg-muted/30 p-8 text-center">
            <p className="text-muted-foreground">No guides available yet.</p>
          </div>
        )}
      </div>
    </main>
  );
}
