export const metadata = {
  title: "Account",
};

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Account</h1>
        <p className="mt-4 text-muted-foreground">
          Sign in to save your favorite places and contribute to the map.
        </p>
        <div className="mt-8 rounded-lg border border-border bg-muted/30 p-8">
          <p className="text-muted-foreground">
            Authentication coming soon.
          </p>
        </div>
      </div>
    </main>
  );
}
