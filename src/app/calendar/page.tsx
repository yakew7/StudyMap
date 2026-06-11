import type { Metadata } from "next";
import { CalendarDays, ExternalLink } from "lucide-react";

import {
  BOARD_LABELS,
  EXAM_EVENTS,
  eventsByBoard,
  nextUpcomingEvent,
  type ExamBoard,
  type ExamEvent,
} from "@/lib/exam-dates";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Exam Calendar",
  description:
    "Upcoming SAT, IB, and Cambridge IGCSE exam and result dates, sourced from the official boards.",
};

const BOARDS: ExamBoard[] = ["SAT", "IB", "IGCSE"];

function formatDate(iso: string): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return iso;
  return new Date(iso + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatExamWindow(event: ExamEvent): string {
  return event.examStart === event.examEnd
    ? formatDate(event.examStart)
    : `${formatDate(event.examStart)} – ${formatDate(event.examEnd)}`;
}

function EventRow({ event, isNext }: { event: ExamEvent; isNext: boolean }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <div className="flex flex-wrap items-center gap-2">
        <p className="font-medium text-foreground">{event.session}</p>
        {isNext && <Badge>Next up</Badge>}
        {!event.confirmed && (
          <Badge variant="outline" className="text-muted-foreground">
            Provisional
          </Badge>
        )}
      </div>

      <dl className="mt-3 grid gap-x-8 gap-y-1.5 text-sm sm:grid-cols-2">
        <div className="flex gap-2">
          <dt className="text-muted-foreground">Exam:</dt>
          <dd className="font-medium">{formatExamWindow(event)}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="text-muted-foreground">Results:</dt>
          <dd className="font-medium">
            {formatDate(event.results)}
            {event.resultsEstimated && (
              <span className="ml-1 text-xs text-muted-foreground">(expected)</span>
            )}
          </dd>
        </div>
      </dl>

      {event.notes && (
        <p className="mt-2 text-xs text-muted-foreground">{event.notes}</p>
      )}

      <a
        href={event.source.url}
        target="_blank"
        rel="noreferrer"
        className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
      >
        Source: {event.source.label}
        <ExternalLink className="size-3" />
      </a>
    </div>
  );
}

export default function CalendarPage() {
  const next = nextUpcomingEvent(new Date());

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <div className="flex items-center gap-3">
        <CalendarDays className="size-7 text-primary" />
        <h1 className="font-heading text-3xl font-bold tracking-tight">Exam Calendar</h1>
      </div>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Upcoming SAT, IB, and Cambridge IGCSE exam windows and result dates. Every
        date links back to the official board source. Provisional entries are
        marked until the board confirms its timetable.
      </p>

      <div className="mt-8 space-y-6">
        {BOARDS.map((board) => {
          const events = eventsByBoard(board);
          if (events.length === 0) return null;
          return (
            <Card key={board}>
              <CardHeader>
                <CardTitle>{BOARD_LABELS[board]}</CardTitle>
                <CardDescription>
                  {board === "SAT" && "Next four international administrations with score-release dates."}
                  {board === "IB" && "Upcoming Diploma Programme sessions and result releases."}
                  {board === "IGCSE" && "Upcoming Cambridge exam series and result releases."}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {events.map((event) => (
                  <EventRow key={event.id} event={event} isNext={event.id === next?.id} />
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <p className="mt-8 text-xs text-muted-foreground">
        Dates last verified 11 June 2026 against College Board, IBO, and Cambridge
        International. Always confirm with your school or test centre before
        planning — boards occasionally revise timetables.{" "}
        <span className="font-medium">{EXAM_EVENTS.length} sessions tracked.</span>
      </p>
    </div>
  );
}
