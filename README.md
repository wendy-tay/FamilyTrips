# FamilyTrips

A mobile-first, plain HTML/CSS/JavaScript home for family travel plans.

## Current trip

- **Taiwan 2026:** `trips/taiwan-2026/`
- Dates: 21 November–6 December 2026
- Status: final planning
- Route: Banqiao → Hualien → Chishang → Taitung → Tainan → Xiding → Alishan → Taipei

The Taiwan page includes:

- a 16-day itinerary with moving and stay days;
- a full-loop Google Maps link;
- destination-filtered activity cards with individual map links;
- confirmed and pending accommodation;
- transport notes and travel-time placeholders;
- a train ticket-booking calendar;
- current trip highlights.

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

## Editing the Taiwan plan

Most trip content lives in `trips/taiwan-2026/data.js`. Update the itinerary, places, accommodation, highlights, transport and booking-calendar arrays there.

Unconfirmed hotels, operators, timings and travel estimates should remain clearly labelled **Pending**, **Weather dependent**, **TBD** or **confirm** until booked.
