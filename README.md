# FamilyTrips

A mobile-first, plain HTML/CSS/JavaScript home for family travel plans.

## Current trip

- **Taiwan 2026:** `trips/taiwan-2026/`
- Dates: 21 November–6 December 2026
- Status: planning

The Taiwan page includes:

- a day-by-day itinerary with moving days clearly marked;
- destination-filtered activity cards;
- Google Maps search/direction links;
- accommodation, travel-time and booking placeholders;
- a family food passport;
- confirmed versus tentative booking labels.

## Reusable structure

```text
FamilyTrips/
├── index.html
├── styles.css
├── scripts/
│   └── app.js
└── trips/
    └── taiwan-2026/
        ├── index.html
        ├── trip.css
        └── data.js
```

To add another trip:

1. Copy `trips/taiwan-2026/` to a new trip folder.
2. Replace the content in that trip's `data.js`.
3. Add a new trip card to the root `index.html`.

## Editing the Taiwan plan

Most trip content lives in `trips/taiwan-2026/data.js`. Update the itinerary, places, food and booking arrays there. The page renders the cards automatically.

Unconfirmed hotels, restaurants, operators, timings and travel estimates should remain clearly labelled **Tentative**, **TBD** or **verify** until confirmed.
