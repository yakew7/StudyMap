"use client";

import * as React from "react";
import { Drawer } from "vaul";

export const SHEET_SNAP_POINTS = ["48%", "92%"] as const;

interface MapSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  snap: number | string | null;
  onSnapChange: (snap: number | string | null) => void;
  children: React.ReactNode;
}

/**
 * Mobile-only bottom sheet (vaul), opened from the peek bar or Filters button.
 * Non-modal so the map underneath stays pannable; draggable between two snap
 * points (half / full) and dismissible back down to the peek bar. Hidden at lg
 * and up, where the desktop sidebar takes over.
 */
export function MapSheet({
  open,
  onOpenChange,
  snap,
  onSnapChange,
  children,
}: MapSheetProps) {
  return (
    <Drawer.Root
      open={open}
      onOpenChange={onOpenChange}
      modal={false}
      snapPoints={[...SHEET_SNAP_POINTS]}
      activeSnapPoint={snap}
      setActiveSnapPoint={onSnapChange}
    >
      <Drawer.Portal>
        <Drawer.Content
          aria-describedby={undefined}
          className="fixed inset-x-0 bottom-0 z-[1100] flex h-full max-h-[92dvh] flex-col rounded-t-2xl border border-border bg-card shadow-[0_-8px_32px_-12px_rgba(0,0,0,0.45)] outline-none lg:hidden"
        >
          <Drawer.Handle className="my-3 shrink-0 bg-border" />
          <Drawer.Title className="sr-only">Places and filters</Drawer.Title>
          <div className="flex min-h-0 flex-1 flex-col px-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
