export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-muted-foreground">Last updated: June 2026</p>

        <div className="prose prose-sm dark:prose-invert mt-8 max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold">What we collect</h2>
            <p>
              StudyMap collects minimal data. We track:
            </p>
            <ul className="mt-2 list-inside space-y-1 text-muted-foreground">
              <li>Places you add to the map (name, location, category)</li>
              <li>Your GitHub username (if you contribute)</li>
              <li>Basic analytics (pages visited, not personal data)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">How we use it</h2>
            <p>We use your data to:</p>
            <ul className="mt-2 list-inside space-y-1 text-muted-foreground">
              <li>Improve the map and user experience</li>
              <li>Credit contributors</li>
              <li>Prevent abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Who we share it with</h2>
            <p>
              We don't sell or share your data. It's stored privately on our servers and shown on the public map only as you intended.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Your rights</h2>
            <p>
              You can request to see, edit, or delete your data anytime. Email us and we'll help.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
