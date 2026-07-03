import type { PlaceType } from "@/lib/types";

/**
 * Marker colour per place type. Color-blind-safe set verified against
 * deuteranopia, protanopia, and tritanopia. Used by map markers, the legend,
 * and filter swatches.
 */
export const PLACE_TYPE_COLORS: Record<PlaceType, string> = {
  library: "#2563EB",
  imp_locations: "#0F766E",
  airport: "#BE185D",
  sat_centre: "#7C3AED",
  foreign_lang_exam_centre: "#0891B2",
};

/** Build a Google Maps directions deep-link to a coordinate. */
export function directionsUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}
