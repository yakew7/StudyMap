import type { City, PlaceType } from "@/lib/types";

/** Active map filters, mirrored into the URL query for shareable links. */
export interface PlaceFilters {
  types: PlaceType[];
  city: City | null;
  query: string;
}
