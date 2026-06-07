export const PLACE_TYPES = [
  "book_depot",
  "library",
  "exam_centre",
  "passport_office",
  "community_spot",
  "internet_cafe",
  "airport",
  "train_station",
] as const;

export type PlaceType = (typeof PLACE_TYPES)[number];

export const CITIES = ["mumbai", "thane", "navi_mumbai"] as const;

export type City = (typeof CITIES)[number];

export const PLACE_TYPE_LABELS: Record<PlaceType, string> = {
  book_depot: "Book depot",
  library: "Library",
  exam_centre: "Exam centre",
  passport_office: "Passport office",
  community_spot: "Community spot",
  internet_cafe: "Internet cafe",
  airport: "Airport",
  train_station: "Train station",
};

export const CITY_LABELS: Record<City, string> = {
  mumbai: "Mumbai",
  thane: "Thane",
  navi_mumbai: "Navi Mumbai",
};

/**
 * A public place pin. This is the entire committed record shape.
 * Proof of quality (source citation, Google Maps rating and review count,
 * verified date) lives in the contribution PR, not in this dataset.
 */
export interface Place {
  id: string;
  name: string;
  type: PlaceType;
  city: City;
  lat: number;
  lng: number;
  address?: string;
  gmaps_link: string;
  added_by: string;
}

/** A private place saved by a signed-in user. Never exposed publicly. */
export const PERSONAL_PIN_TYPES = [
  "home",
  "school",
  "office",
  "coaching",
  "custom",
] as const;

export type PersonalPinType = (typeof PERSONAL_PIN_TYPES)[number];

export interface PersonalPin {
  id: string;
  owner_id: string;
  name: string;
  type: PersonalPinType;
  lat: number;
  lng: number;
  note?: string;
  created_at: string;
}
