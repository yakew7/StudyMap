# Adding data to StudyMap

This guide covers the two data types contributors most often add: **places** and **resources**. For code or benefit guides, see the root [`CONTRIBUTING.md`](../CONTRIBUTING.md).

---

## Adding a place

Places live in `data/places/<type>.json` — one file per place type, one JSON object per place.

### 1. Pick the right file

| File | What goes here |
|------|---------------|
| `exam_centre.json` | SAT, IB, IGCSE, JEE, NEET test centres |
| `library.json` | Public and institutional libraries |
| `book_shop.json` | Book shops and book depots |
| `imp_locations.json` | Passport Seva, embassies, council offices |
| `stationery.json` | Stationery and print shops |
| `internet_cafe.json` | Cyber cafes and internet kiosks |
| `airport.json` | Airports |
| `train_station.json` | Railway stations |

### 2. Copy this record and fill it in

```json
{
  "id": "mum-library-07",
  "name": "City Library, Dadar branch",
  "type": "library",
  "city": "mumbai",
  "lat": 19.0176,
  "lng": 72.8562,
  "address": "Gate 2, Gokhale Road, Dadar West",
  "gmaps_link": "https://maps.app.goo.gl/xxxx",
  "added_by": "your-github-handle"
}
```

**Field notes:**
- `id` — format `<city-prefix>-<type>-<number>`. Prefixes: `mum`, `thane`, `navi`. Number must be unique within the file (check the highest existing number and increment).
- `city` — one of: `mumbai`, `thane`, `navi_mumbai`
- `type` — must match the filename exactly (e.g. `library` for `library.json`)
- `lat`/`lng` — copy from Google Maps. Right-click the pin → "What's here?" → coordinates appear at the bottom.
- `address` — optional, short, human-readable. Omit if you have nothing useful beyond the name.
- `gmaps_link` — use the short share link from Google Maps (Share → Copy link).
- Do **not** add rating, review count, citation, or verified date to the JSON. Those go in the PR description.

### 3. Quality gate (must pass before merge)

Include this in your pull request description:

- [ ] Source or citation showing the place is real and reputable
- [ ] Google Maps rating of **4.0 or higher**
- [ ] **50+ Google Maps reviews**
- [ ] Date you verified the place and coordinates

### 4. Commit and open a PR

```
feat(data): add library - City Library Dadar, Mumbai
```

One place per commit is fine. Multiple places of the same type in one commit is also fine.

---

## Adding a resource

Resources live in `data/resources/<board>.json`. The site only covers **IB, IGCSE, and SAT**. Each entry is a curated outbound link — StudyMap never hosts files.

### Supported boards

| File | Board |
|------|-------|
| `ib.json` | International Baccalaureate |
| `igcse.json` | Cambridge IGCSE |
| `sat.json` | SAT (College Board) |

### Copy this record and fill it in

```json
{
  "id": "ib-physics-pp-2023",
  "board": "IB",
  "subject": "Physics",
  "year": 2023,
  "kind": "past_paper",
  "title": "IB Physics HL Paper 1 — May 2023",
  "url": "https://www.example-official-source.org/path"
}
```

**Field notes:**
- `id` — format `<board-lowercase>-<subject-slug>-<kind-abbrev>-<year>`. Must be unique across the file.
- `board` — exactly `"IB"`, `"IGCSE"`, or `"SAT"` (uppercase, matches the type constant)
- `subject` — optional. Use the official subject name (e.g. `"Mathematics: Analysis and Approaches"`).
- `year` — optional integer. Use the exam year, not publication year.
- `kind` — one of: `"past_paper"`, `"portal"`, `"website"`
- `url` — must point to an **official source** (board website, official archive). Never a random third-party PDF host.

### Quality gate

Include in your PR description:

- [ ] URL points to an official board source (not a random PDF host)
- [ ] Link loads and the content matches the title
- [ ] No duplicate of an existing entry in the file

### Commit format

```
feat(data): add IB Physics HL past paper 2023
```

---

## Tips

- Run `npm run dev` and check the Resources page or the map before opening a PR.
- If adding many places at once, batch by type (one commit per file).
- For places: verify coordinates by dropping the pin on the map locally — if it lands wrong, the coords are off.
