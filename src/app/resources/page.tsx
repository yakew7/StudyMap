"use client";

import React from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

type Board = "ib" | "igcse" | "sat";

export default function ResourcesPage() {
  const [selectedBoard, setSelectedBoard] = React.useState<Board>("ib");

  const boards: Board[] = ["ib", "igcse", "sat"];

  const sampleResources = {
    ib: [
      {
        title: "IB Math Resources",
        kind: "Course",
        url: "https://example.com/ib-math",
      },
      {
        title: "IB Chemistry Guide",
        kind: "Study Guide",
        url: "https://example.com/ib-chem",
      },
      {
        title: "IB Essay Writing",
        kind: "Guide",
        url: "https://example.com/ib-essay",
      },
    ],
    igcse: [
      {
        title: "IGCSE English",
        kind: "Course",
        url: "https://example.com/igcse-english",
      },
      {
        title: "IGCSE Physics",
        kind: "Study Guide",
        url: "https://example.com/igcse-physics",
      },
    ],
    sat: [
      {
        title: "SAT Prep Course",
        kind: "Course",
        url: "https://example.com/sat-prep",
      },
      {
        title: "SAT Math Guide",
        kind: "Guide",
        url: "https://example.com/sat-math",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              Study Resources
            </h1>
            <p className="mt-2 text-muted-foreground">
              Curated resources for IB, IGCSE, and SAT
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <Filter className="size-4" />
            Filters
          </Button>
        </div>

        <div className="mb-8 flex gap-2">
          {boards.map((board) => (
            <button
              key={board}
              onClick={() => setSelectedBoard(board)}
              className={`rounded-lg px-4 py-2 font-medium transition-colors ${
                selectedBoard === board
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {board.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sampleResources[selectedBoard].map((resource) => (
            <a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-all hover:border-accent hover:shadow-md"
            >
              <div className="mb-2 inline-flex w-fit rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                {resource.kind}
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-accent">
                {resource.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Learn more →
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
