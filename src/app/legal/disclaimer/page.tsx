export const metadata = {
  title: "Disclaimer",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Disclaimer</h1>

        <div className="prose prose-sm dark:prose-invert mt-8 max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold">Information accuracy</h2>
            <p>
              StudyMap is built by students for students. While we try to keep information accurate, places may have changed hours, moved, or closed.
            </p>
            <p className="mt-2">
              <strong>Always verify details before visiting:</strong> call ahead, check Google Maps, or visit the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Not responsible for</h2>
            <ul className="mt-2 list-inside space-y-1 text-muted-foreground">
              <li>Places being open or available</li>
              <li>Pricing or service changes</li>
              <li>Safety or quality of venues</li>
              <li>Your experience at any location</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Community contributions</h2>
            <p>
              Places are added by our community. We moderate but can't check every entry. Report issues and we'll investigate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Use at your own risk</h2>
            <p>
              StudyMap is a tool to help you find places. Make your own decisions and stay safe.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
