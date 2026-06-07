import type { City, Place, PlaceType } from "@/lib/types";

import airport from "../../data/places/airport.json";
import bookDepot from "../../data/places/book_depot.json";
import communitySpot from "../../data/places/community_spot.json";
import examCentre from "../../data/places/exam_centre.json";
import internetCafe from "../../data/places/internet_cafe.json";
import library from "../../data/places/library.json";
import passportOffice from "../../data/places/passport_office.json";
import trainStation from "../../data/places/train_station.json";

/** Approximate centre of the Mumbai Metropolitan Region, for the initial map view. */
export const MMR_CENTER: [number, number] = [19.08, 72.95];
export const MMR_DEFAULT_ZOOM = 11;

const ALL: Place[] = [
  ...(airport as Place[]),
  ...(bookDepot as Place[]),
  ...(communitySpot as Place[]),
  ...(examCentre as Place[]),
  ...(internetCafe as Place[]),
  ...(library as Place[]),
  ...(passportOffice as Place[]),
  ...(trainStation as Place[]),
];

/** All public places, merged from the per-type JSON files. */
export function getPlaces(): Place[] {
  return ALL;
}

export function filterPlaces(
  places: Place[],
  opts: { types?: PlaceType[]; cities?: City[] },
): Place[] {
  return places.filter((place) => {
    if (opts.types && opts.types.length > 0 && !opts.types.includes(place.type)) {
      return false;
    }
    if (opts.cities && opts.cities.length > 0 && !opts.cities.includes(place.city)) {
      return false;
    }
    return true;
  });
}
