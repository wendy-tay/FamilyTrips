window.TRIP_DATA = {
  itinerary: [
    { day: 1, date: "Sat, 21 Nov", stay: "Banqiao", moving: true, title: "Arrival and unwind", plan: "Arrive in Taipei, take a taxi to Banqiao and settle into Boutech Hotel. Relax and set a 5:00 PM reminder to pre-order train bentos in the TRA app.", travel: "Airport to Banqiao | taxi", note: "Keep the evening free." },
    { day: 2, date: "Sun, 22 Nov", stay: "Hualien", moving: true, title: "The coastal drive", plan: "Take TRA Express #412 to Xincheng. Meet the private driver for Qingshui Cliff, a scenic Taroko-edge drive and pebble stacking at Qixingtan Beach.", travel: "TRA #412 | Banqiao 09:12  Xincheng", note: "Stay at Kadda Hotel, Hualien City." },
    { day: 3, date: "Mon, 23 Nov", stay: "Hualien", moving: false, title: "Dolphins and bikes", plan: "06:15 sunrise, dolphin-watching tour and harbour seafood lunch. Cycle the coastal path outside the hotel--or nap--then visit Dongdamen Night Market.", travel: "Local tour / bicycle / walking", note: "Afternoon deliberately flexible." },
    { day: 4, date: "Tue, 24 Nov", stay: "Chishang", moving: true, title: "Golden harvest slowdown", plan: "Check into La Brume, rent a four-seater electric canopy bike and ride Mr. Brown Avenue during golden hour. Stargaze and soak in the room tub.", travel: "TRA #412 | Hualien 11:51  Chishang | about 1.5 hrs", note: "A slow afternoon in rice country." },
    { day: 5, date: "Wed, 25 Nov", stay: "Taitung", moving: true, title: "Animals and art", plan: "Taxi into the city after the train. Visit Chulu Ranch for cow feeding and milk ice cream; stop for custard-apple picking on the return. Walk to Tiehua Old Railway Art Village in the evening.", travel: "TRA | Chishang  Taitung | about 35 mins; local taxi", note: "Stay at Inn by the Village." },
    { day: 6, date: "Thu, 26 Nov", stay: "Taitung", moving: false, title: "Rocks, forest and a breathing gap", plan: "Morning at Xiaoyeliu and Fushan Fish Reserve, then seafood near Fugang Harbor. Ride a four-seater electric canopy bike through Taitung Forest Park to Pipa Lake. Local dinner.", travel: "Local taxi / electric canopy bike", note: "Flat, shaded and easy-paced." },
    { day: 7, date: "Fri, 27 Nov", stay: "Tainan", moving: true, title: "The ocean rail", plan: "Take the scenic afternoon train west. Settle in, then enjoy a Shennong Street dusk walk and relaxed dinner.", travel: "TRA Ziqiang #374 | Taitung 13:20  Tainan", note: "Book even-numbered seats for ocean views." },
    { day: 8, date: "Sat, 28 Nov", stay: "Tainan", moving: false, title: "Sicao and Anping", plan: "Arrive at Sicao Green Tunnel by 08:15 for the first boat. Continue to Anping Tree House and shrimp-roll lunch. Return by 14:00 for pool time or a nap.", travel: "Local taxi / walking", note: "Dinner nearby or room service; afternoon activity-free." },
    { day: 9, date: "Sun, 29 Nov", stay: "Tainan", moving: false, title: "Sanctuary day", plan: "Zero plans. Sleep in, rest and perhaps go out for Tainan beef soup.", travel: "No planned transport", note: "A true holiday rest day." },
    { day: 10, date: "Mon, 30 Nov", stay: "Chiayi", moving: true, title: "To Chiayi", plan: "Take a morning train to Chiayi, have turkey rice for lunch and check into SunSweet Hotel.", travel: "TRA | Tainan  Chiayi | about 40 mins", note: "Transition day." },
    { day: 11, date: "Tue, 1 Dec", stay: "Alishan", moving: true, title: "Into the mountains", plan: "Collect the self-drive car and travel into the Alishan area. Settle into ChinShan Hotel and keep the mountain afternoon flexible.", travel: "Chiayi  Alishan | self-drive planned", note: "Private hire remains the backup." },
    { day: 12, date: "Wed, 2 Dec", stay: "Alishan", moving: false, title: "Forest day", plan: "Explore the forest recreation area at an easy pace, with giant trees, short trails and forest-railway moments.", travel: "Walking / forest railway / shuttle", note: "Keep plans weather-responsive." },
    { day: 13, date: "Thu, 3 Dec", stay: "Taipei", moving: true, title: "Return north", plan: "Descend to Chiayi, return the car and travel north for the final Taipei stay. Enjoy an easy city evening.", travel: "Alishan  Chiayi | self-drive; rail north", note: "Final Taipei hotel is pending." },
    { day: 14, date: "Fri, 4 Dec", stay: "Taipei", moving: false, title: "Taipei family day", plan: "A flexible city day for a family favourite, with room to adjust for weather and energy.", travel: "MRT / walking", note: "Details remain open for Phase 2.1." },
    { day: 15, date: "Sat, 5 Dec", stay: "Taipei", moving: false, title: "Friends and free time", plan: "Shopping, meetups and a generous unplanned block for discoveries or rest.", travel: "MRT / walking", note: "Keep the final full day light." },
    { day: 16, date: "Sun, 6 Dec", stay: "Home", moving: true, title: "Homeward", plan: "Enjoy a final slow morning, then transfer to the airport for the flight home.", travel: "Taipei  TPE  Singapore", note: "Allow ample airport time." }
  ],
  places: [
    { location: "Hualien", icon: "&#9968;", name: "Qingshui Cliff", status: "Must-do", type: "outdoor", description: "Dramatic vertical cliffs and Pacific views during the private-driver transfer from Xincheng.", timing: "22 Nov | coastal drive", map: "https://www.google.com/maps/search/?api=1&query=Qingshui+Cliff+Hualien" },
    { location: "Hualien", icon: "&#127748;", name: "Taroko edge scenic drive", status: "Planned", type: "outdoor", description: "A scenic drive along the accessible edge of Taroko, adjusted to current road access and conditions.", timing: "22 Nov | private driver", map: "https://www.google.com/maps/search/?api=1&query=Taroko+National+Park+Visitor+Center" },
    { location: "Hualien", icon: "&#127754;", name: "Qixingtan Beach", status: "Must-do", type: "outdoor", description: "A broad pebble beach for ocean views, a gentle stroll and pebble stacking.", timing: "22 Nov | coastal drive", map: "https://www.google.com/maps/search/?api=1&query=Qixingtan+Beach+Hualien" },
    { location: "Hualien", icon: "&#128044;", name: "Dolphin-watching tour", status: "Weather dependent", type: "weather", description: "An early harbour tour followed by a fresh seafood lunch, subject to sea conditions.", timing: "23 Nov | morning", map: "https://www.google.com/maps/search/?api=1&query=Hualien+dolphin+watching+harbor" },
    { location: "Hualien", icon: "&#128692;", name: "Hualien coastal cycle path", status: "Optional", type: "tentative", description: "A relaxed ride outside Kadda Hotel, with a nap as the equally valid alternative.", timing: "23 Nov | afternoon", map: "https://www.google.com/maps/search/?api=1&query=Hualien+Pacific+Park+bike+path" },
    { location: "Hualien", icon: "&#127982;", name: "Dongdamen Night Market", status: "Planned", type: "food", description: "An easy evening browse for local snacks after the coastal afternoon.", timing: "23 Nov | evening", map: "https://www.google.com/maps/search/?api=1&query=Dongdamen+Night+Market" },
    { location: "Chishang", icon: "&#128692;", name: "Mr. Brown Avenue", status: "Must-do", type: "outdoor", description: "Golden-hour rice-field cycling in a four-seater electric canopy bike.", timing: "24 Nov | golden hour", map: "https://www.google.com/maps/search/?api=1&query=Brown+Boulevard+Chishang" },
    { location: "Taitung", icon: "&#128004;", name: "Chulu Ranch", status: "Planned", type: "outdoor", description: "Feed the cows, enjoy the open grassland and stop for milk ice cream.", timing: "25 Nov | afternoon", map: "https://www.google.com/maps/search/?api=1&query=Chulu+Ranch+Taitung" },
    { location: "Taitung", icon: "&#127818;", name: "Custard-apple orchard", status: "Season dependent", type: "weather", description: "A fruit-picking stop on the drive back from Chulu, subject to harvest and orchard availability.", timing: "25 Nov | return drive", map: "https://www.google.com/maps/search/?api=1&query=Taitung+custard+apple+farm" },
    { location: "Taitung", icon: "&#127912;", name: "Tiehua Old Railway Art Village", status: "Planned", type: "outdoor", description: "A relaxed evening walk among lanterns, music and creative spaces near the hotel.", timing: "25 Nov | evening", map: "https://www.google.com/maps/search/?api=1&query=Tiehua+Music+Village+Taitung" },
    { location: "Taitung", icon: "&#129704;", name: "Xiaoyeliu", status: "Must-do", type: "outdoor", description: "A compact coastal stop known for its unusual sandstone rock formations.", timing: "26 Nov | morning", map: "https://www.google.com/maps/search/?api=1&query=Xiaoyeliu+Taitung" },
    { location: "Taitung", icon: "&#128031;", name: "Fushan Fish Reserve", status: "Planned", type: "outdoor", description: "A calm shoreline reserve paired naturally with Xiaoyeliu and Fugang Harbor.", timing: "26 Nov | morning", map: "https://www.google.com/maps/search/?api=1&query=Fushan+Fish+Reserve+Taitung" },
    { location: "Taitung", icon: "&#127795;", name: "Taitung Forest Park & Pipa Lake", status: "Must-do", type: "outdoor", description: "A flat, shaded electric-canopy-bike ride through the forest park to peaceful Pipa Lake.", timing: "26 Nov | afternoon", map: "https://www.google.com/maps/search/?api=1&query=Taitung+Forest+Park+Pipa+Lake" },
    { location: "Tainan", icon: "&#128675;", name: "Sicao Green Tunnel", status: "Must-do", type: "outdoor", description: "Take the first mangrove boat of the day to enjoy cooler air and lighter crowds.", timing: "28 Nov | arrive 08:15", map: "https://www.google.com/maps/search/?api=1&query=Sicao+Green+Tunnel+Tainan" },
    { location: "Tainan", icon: "&#127795;", name: "Anping Tree House", status: "Planned", type: "outdoor", description: "Explore the banyan-covered former warehouse before an Anping shrimp-roll lunch.", timing: "28 Nov | late morning", map: "https://www.google.com/maps/search/?api=1&query=Anping+Tree+House" },
    { location: "Tainan", icon: "&#127963;", name: "Shennong Street", status: "Planned", type: "outdoor", description: "A low-key dusk walk along one of Tainan's characterful historic streets.", timing: "27 Nov | evening", map: "https://www.google.com/maps/search/?api=1&query=Shennong+Street+Tainan" },
    { location: "Alishan", icon: "&#127794;", name: "Alishan forest trails", status: "Must-do", type: "outdoor", description: "Giant trees, short trails and forest-railway moments at a relaxed family pace.", timing: "2 Dec | full day", map: "https://www.google.com/maps/search/?api=1&query=Alishan+National+Forest+Recreation+Area" },
    { location: "Taipei", icon: "&#127961;", name: "Flexible Taipei day", status: "Open", type: "tentative", description: "A weather- and energy-responsive family day, deliberately left open for the next planning phase.", timing: "4 Dec | flexible", map: "https://www.google.com/maps/search/?api=1&query=Taipei+City" }
  ],
  accommodation: [
    { location: "Taipei (arrival)", hotel: "Boutech Hotel", dates: "21-22 Nov", status: "Confirmed" },
    { location: "Hualien", hotel: "Kadda Hotel", dates: "22-24 Nov", status: "Confirmed" },
    { location: "Chishang", hotel: "La Brume", dates: "24-25 Nov", status: "Confirmed" },
    { location: "Taitung", hotel: "Inn by the Village", dates: "25-27 Nov", status: "Confirmed" },
    { location: "Tainan", hotel: "Hotel to be decided", dates: "27-30 Nov", status: "Pending" },
    { location: "Chiayi", hotel: "SunSweet Hotel", dates: "30 Nov-1 Dec", status: "Confirmed" },
    { location: "Alishan", hotel: "ChinShan Hotel", dates: "1-3 Dec", status: "Confirmed" },
    { location: "Taipei (final stay)", hotel: "Hotel to be decided", dates: "3-6 Dec", status: "Pending" }
  ],
  transport: [
    { route: "Airport to Banqiao", mode: "Taxi", status: "Planned" },
    { route: "Banqiao to Xincheng", mode: "TRA Express #412", status: "Book 26 Oct" },
    { route: "Xincheng to Hualien", mode: "Private hire via Qingshui Cliff, Taroko edge and Qixingtan", status: "Planned" },
    { route: "Hualien to Chishang", mode: "TRA Express #412", status: "Book 27 Oct" },
    { route: "Chishang to Taitung", mode: "TRA", status: "Planned" },
    { route: "Taitung to Tainan", mode: "TRA Ziqiang #374", status: "Book 30 Oct" },
    { route: "Chiayi to/from Alishan", mode: "Self-drive planned; private hire as backup", status: "Pending" }
  ],
  calendar: [
    { date: "26 Oct 2026", time: "00:00", action: "Book 22 Nov TRA #412", route: "Banqiao to Xincheng" },
    { date: "27 Oct 2026", time: "00:00", action: "Book 24 Nov TRA #412", route: "Hualien to Chishang" },
    { date: "30 Oct 2026", time: "00:00", action: "Book 27 Nov TRA #374", route: "Taitung to Tainan | even-numbered seats" }
  ],
  progress: [
    { area: "Itinerary", status: "Confirmed", detail: "The relaxed 16-day route and breathing-gap pacing are set." },
    { area: "Accommodation", status: "Confirmed", detail: "Six of eight stays are booked." },
    { area: "Tainan hotel", status: "Pending", detail: "Choose accommodation for 27-30 Nov." },
    { area: "Final Taipei hotel", status: "Pending", detail: "Choose accommodation for 3-6 Dec." },
    { area: "TRA tickets", status: "Pending", detail: "Book the three dated services when sales open." },
    { area: "Chiayi-Alishan transport", status: "Pending", detail: "Confirm self-drive; retain private hire as backup." }
  ]
};
