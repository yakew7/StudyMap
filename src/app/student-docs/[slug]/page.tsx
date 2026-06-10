import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBenefitGuide, getBenefitSlugs } from "@/lib/student-docs";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBenefitSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const guide = getBenefitGuide(params.slug);
  return {
    title: guide?.meta.title ?? "Not found",
  };
}

export default async function GuidePage(props: Props) {
  const params = await props.params;
  const guide = getBenefitGuide(params.slug);

  if (!guide) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <Link
          href="/student-docs"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="size-4" />
          Back to guides
        </Link>

        <article className="mt-8">
          <h1 className="text-4xl font-bold tracking-tight">
            {guide.meta.title}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            {guide.meta.summary}
          </p>

          <div className="prose prose-sm dark:prose-invert mt-8 max-w-none">
            <MDXRemote source={guide.content} />
          </div>
        </article>
      </div>
    </main>
  );
}
