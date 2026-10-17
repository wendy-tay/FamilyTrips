window.TRIP_DATA = {
  itinerary: [
    { day: 1, date: "Sat, 21 Nov", stay: "Banqiao", moving: true, title: "Arrival and unwind", plan: "Arrive in Taipei, take a taxi to Banqiao and settle in. Relax and set a reminder to pre-order train bentos in the TRA app.", travel: "Airport → Banqiao · taxi", note: "Keep the evening free." },
    { day: 2, date: "Sun, 22 Nov", stay: "Hualien", moving: true, title: "The coastal drive", plan: "Take the train to Xincheng. Meet the private driver for Qingshui Cliff, a scenic Taroko-edge drive and pebble stacking at Qixingtan Beach.", travel: "TRA · Banqiao → Xincheng", note: "Continue by private hire to Hualien." },
    { day: 3, date: "Mon, 23 Nov", stay: "Hualien", moving: false, title: "Dolphins and bikes", plan: "Sunrise, a whale-and-dolphin-watching tour and harbour seafood lunch. Cycle the coastal path—or nap—then visit Dongdamen Night Market.", travel: "Local tour / bicycle / walking", note: "Sailing is weather and sea-condition dependent." },
    { day: 4, date: "Tue, 24 Nov", stay: "Chishang", moving: true, title: "Golden harvest slowdown", plan: "Travel south, rent a four-seater electric canopy bike and ride Mr. Brown Avenue during golden hour. Stargaze and enjoy a slow evening.", travel: "TRA · Hualien → Chishang · about 1.5 hrs", note: "A slow afternoon in rice country." },
    { day: 5, date: "Wed, 25 Nov", stay: "Taitung", moving: true, title: "Animals and art", plan: "Take the short train south. Visit Chulu Ranch for cow feeding and milk ice cream; stop for custard-apple picking if available. Walk around Tiehua in the evening.", travel: "TRA · Chishang → Taitung · about 35 mins", note: "Use a local taxi for the ranch loop." },
    { day: 6, date: "Thu, 26 Nov", stay: "Taitung", moving: false, title: "Rocks, forest and a breathing gap", plan: "Morning at Xiaoyeliu and Fushan Fish Reserve, then seafood near Fugang Harbor. Ride through Taitung Forest Park to Pipa Lake.", travel: "Local taxi / electric canopy bike", note: "Flat, shaded and easy-paced." },
    { day: 7, date: "Fri, 27 Nov", stay: "Tainan", moving: true, title: "The ocean rail", plan: "Take the scenic afternoon train west. Settle in, then enjoy a Shennong Street dusk walk and relaxed dinner.", travel: "TRA · Taitung → Tainan", note: "Choose ocean-view seats if available." },
    { day: 8, date: "Sat, 28 Nov", stay: "Tainan", moving: false, title: "Sicao and Anping", plan: "Take the first Sicao Green Tunnel boat, continue to Anping Tree House and have shrimp rolls for lunch. Return early for pool time or a nap.", travel: "Local taxi / walking", note: "Keep the afternoon activity-free." },
    { day: 9, date: "Sun, 29 Nov", stay: "Xiding", moving: true, title: "Tea mountains and sunset", plan: "Leave Tainan for Chiayi, continue uphill to Xiding, check into SunSweet House and enjoy Eryanping or Xiding Lookout near sunset.", travel: "Tainan → Chiayi by rail; uphill transfer · timing TBD", note: "SunSweet House is for this night only." },
    { day: 10, date: "Mon, 30 Nov", stay: "Alishan", moving: true, title: "Into the forest", plan: "Enjoy a gentle mountain morning, then transfer into the Alishan recreation area and check into ChinShan Villa from 2:00 PM. Explore nearby forest paths if energy allows.", travel: "Xiding → Alishan · pre-arranged transfer · time TBD", note: "First of two nights at ChinShan Villa." },
    { day: 11, date: "Tue, 1 Dec", stay: "Alishan", moving: false, title: "Sunrise and ancient trees", plan: "Sunrise and sea of clouds if weather permits, followed by an unhurried forest day with giant trees, short trails and forest-railway moments.", travel: "Walking / forest railway / shuttle", note: "Breakfast is included; keep the dawn plan weather-responsive." },
    { day: 12, date: "Wed, 2 Dec", stay: "Taipei", moving: true, title: "Return north", plan: "Check out by 11:00 AM, descend to Chiayi and travel north for the final Taipei stay. Keep the evening easy.", travel: "Alishan → Chiayi · transfer; rail north · times TBD", note: "Allow a generous connection buffer." },
    { day: 13, date: "Thu, 3 Dec", stay: "Taipei", moving: false, title: "Taipei family day", plan: "A flexible city day for a family favourite, with room to adjust for weather and energy.", travel: "MRT / walking", note: "Details remain open." },
    { day: 14, date: "Fri, 4 Dec", stay: "Taipei", moving: false, title: "Zoo and Maokong", plan: "Visit Taipei Zoo, then take the Maokong Gondola for tea and mountain views if weather and maintenance schedules allow.", travel: "MRT + gondola", note: "Weather-dependent afternoon." },
    { day: 15, date: "Sat, 5 Dec", stay: "Taipei", moving: false, title: "Friends and free time", plan: "Shopping, meetups and a generous unplanned block for discoveries or rest.", travel: "MRT / walking", note: "Keep the final full day light." },
    { day: 16, date: "Sun, 6 Dec", stay: "Home", moving: true, title: "Homeward", plan: "Enjoy a final slow morning, then transfer to the airport for the evening flight home.", travel: "Taipei → TPE → Singapore", note: "Allow ample airport time." }
  ],
  places: [
    { location: "Hualien", icon: "⛰️", name: "Qingshui Cliff", status: "Must-do", type: "outdoor", description: "Dramatic vertical cliffs and Pacific views during the private-driver transfer from Xincheng.", timing: "22 Nov · coastal drive", map: "https://www.google.com/maps/search/?api=1&query=Qingshui+Cliff+Hualien" },
    { location: "Hualien", icon: "🌊", name: "Qixingtan Beach", status: "Must-do", type: "outdoor", description: "A broad pebble beach for ocean views, a gentle stroll and pebble stacking.", timing: "22 Nov · coastal drive", map: "https://www.google.com/maps/search/?api=1&query=Qixingtan+Beach+Hualien" },
    { location: "Hualien", icon: "🐬", name: "Whale & dolphin watching", status: "Weather dependent", type: "weather", description: "An early harbour tour followed by a fresh seafood lunch, subject to sea conditions.", timing: "23 Nov · morning", map: "https://www.google.com/maps/search/?api=1&query=Hualien+whale+dolphin+watching" },
    { location: "Hualien", icon: "🚲", name: "Coastal cycle path", status: "Optional", type: "tentative", description: "A relaxed ride outside Kadda Hotel, with a nap as the equally valid alternative.", timing: "23 Nov · afternoon", map: "https://www.google.com/maps/search/?api=1&query=Hualien+Pacific+Park+bike+path" },
    { location: "Hualien", icon: "🏮", name: "Dongdamen Night Market", status: "Planned", type: "food", description: "An easy evening browse for local snacks after the coastal afternoon.", timing: "23 Nov · evening", map: "https://www.google.com/maps/search/?api=1&query=Dongdamen+Night+Market" },
    { location: "Chishang", icon: "🚲", name: "Mr. Brown Avenue", status: "Must-do", type: "outdoor", description: "Golden-hour rice-field cycling in a four-seater electric canopy bike.", timing: "24 Nov · golden hour", map: "https://www.google.com/maps/search/?api=1&query=Brown+Boulevard+Chishang" },
    { location: "Taitung", icon: "🐄", name: "Chulu Ranch", status: "Planned", type: "outdoor", description: "Feed the cows, enjoy the open grassland and stop for milk ice cream.", timing: "25 Nov · afternoon", map: "https://www.google.com/maps/search/?api=1&query=Chulu+Ranch+Taitung" },
    { location: "Taitung", icon: "🍈", name: "Custard-apple orchard", status: "Season dependent", type: "weather", description: "A fruit-picking stop on the ranch return, subject to harvest and orchard availability.", timing: "25 Nov · return drive", map: "https://www.google.com/maps/search/?api=1&query=Taitung+custard+apple+farm" },
    { location: "Taitung", icon: "🎨", name: "Tiehua village", status: "Planned", type: "outdoor", description: "A relaxed evening walk among lanterns, music and creative spaces.", timing: "25 Nov · evening", map: "https://www.google.com/maps/search/?api=1&query=Tiehua+Music+Village+Taitung" },
    { location: "Taitung", icon: "🪨", name: "Xiaoyeliu", status: "Must-do", type: "outdoor", description: "A compact coastal stop known for unusual sandstone rock formations.", timing: "26 Nov · morning", map: "https://www.google.com/maps/search/?api=1&query=Xiaoyeliu+Taitung" },
    { location: "Taitung", icon: "🐟", name: "Fushan Fish Reserve", status: "Planned", type: "outdoor", description: "A calm shoreline reserve paired naturally with Xiaoyeliu and Fugang Harbor.", timing: "26 Nov · morning", map: "https://www.google.com/maps/search/?api=1&query=Fushan+Fish+Reserve+Taitung" },
    { location: "Taitung", icon: "🌲", name: "Taitung Forest Park & Pipa Lake", status: "Must-do", type: "outdoor", description: "A flat, shaded electric-canopy-bike ride through the forest park to peaceful Pipa Lake.", timing: "26 Nov · afternoon", map: "https://www.google.com/maps/search/?api=1&query=Taitung+Forest+Park+Pipa+Lake" },
    { location: "Tainan", icon: "🏮", name: "Shennong Street", status: "Planned", type: "outdoor", description: "A low-key dusk walk along one of Tainan's characterful historic streets.", timing: "27 Nov · evening", map: "https://www.google.com/maps/search/?api=1&query=Shennong+Street+Tainan" },
    { location: "Tainan", icon: "🛶", name: "Sicao Green Tunnel", status: "Must-do", type: "outdoor", description: "Take the first mangrove boat of the day for cooler air and lighter crowds.", timing: "28 Nov · early morning", map: "https://www.google.com/maps/search/?api=1&query=Sicao+Green+Tunnel+Tainan" },
    { location: "Tainan", icon: "🌳", name: "Anping Tree House", status: "Planned", type: "outdoor", description: "Explore the banyan-covered warehouse before an Anping shrimp-roll lunch.", timing: "28 Nov · late morning", map: "https://www.google.com/maps/search/?api=1&query=Anping+Tree+House" },
    { location: "Xiding", icon: "🌄", name: "Eryanping & Xiding Lookout", status: "Planned", type: "outdoor", description: "Tea-mountain scenery and a sunset opportunity during the single SunSweet night.", timing: "29 Nov · sunset", map: "https://www.google.com/maps/search/?api=1&query=Eryanping+Trail+Xiding" },
    { location: "Alishan", icon: "🌲", name: "Alishan forest trails", status: "Must-do", type: "outdoor", description: "Giant trees, short trails and forest-railway moments at a relaxed family pace.", timing: "30 Nov–1 Dec", map: "https://www.google.com/maps/search/?api=1&query=Alishan+National+Forest+Recreation+Area" },
    { location: "Taipei", icon: "🐼", name: "Taipei Zoo & Maokong", status: "Weather dependent", type: "weather", description: "A full family day with the gondola and tea finish adjusted for weather and maintenance.", timing: "4 Dec · full day", map: "https://www.google.com/maps/search/?api=1&query=Taipei+Zoo+Maokong+Gondola" }
  ],
  accommodation: [
    { location: "Banqiao", hotel: "Boutech Hotel", dates: "21–22 Nov · 1 night", status: "Confirmed", detail: "Arrival-night base." },
    { location: "Hualien", hotel: "Kadda Hotel", dates: "22–24 Nov · 2 nights", status: "Confirmed", detail: "Coast and whale-watching base." },
    { location: "Chishang", hotel: "La Brume", dates: "24–25 Nov · 1 night", status: "Confirmed", detail: "Rice-country cycling stop." },
    { location: "Taitung", hotel: "Inn by the Village", dates: "25–27 Nov · 2 nights", status: "Confirmed", detail: "Easy city base for the local day trips." },
    { location: "Tainan", hotel: "Hotel to be decided", dates: "27–29 Nov · 2 nights", status: "Pending", detail: "Choose a convenient base for Sicao and Anping." },
    { location: "Xiding / Eryanping", hotel: "SunSweet House", dates: "29–30 Nov · 1 night", status: "Confirmed", detail: "One night only, for Xiding Lookout and Eryanping. No stay on 30 Nov–1 Dec." },
    { location: "Alishan", hotel: "ChinShan Villa 青山別館", dates: "30 Nov–2 Dec · 2 nights", status: "Confirmed", detail: "Deluxe Quad Room 豪華四人房 · two large beds · breakfast included · check-in 2:00 PM · check-out 11:00 AM." },
    { location: "Taipei (final stay)", hotel: "Hotel to be decided", dates: "2–6 Dec · 4 nights", status: "Pending", detail: "Choose for zoo, shopping, meetups and airport access." }
  ],
  highlights: [
    { title: "Whale & dolphin watching", location: "Hualien", status: "Weather dependent", detail: "Plan for the morning of 23 Nov, subject to the operator sailing and calm sea conditions." },
    { title: "Brown Avenue cycling", location: "Chishang", status: "Planned", detail: "A relaxed golden-hour ride with a four-seater electric canopy bike." },
    { title: "Sicao & Anping", location: "Tainan", status: "Planned", detail: "Early mangrove boat, Anping Tree House and a deliberately free afternoon." },
    { title: "Xiding & Eryanping", location: "Xiding", status: "Planned", detail: "Tea-mountain scenery and sunset during the single SunSweet night." },
    { title: "Alishan forest", location: "Alishan", status: "Planned", detail: "Two nights inside the recreation area for sunrise, giant trees, trails and the forest railway." },
    { title: "Zoo & Maokong", location: "Taipei", status: "Weather dependent", detail: "A full family day with a flexible gondola-and-tea finish." }
  ],
  transport: [
    { route: "Airport → Banqiao", mode: "Local taxi", time: "Travel time to confirm", status: "Planned" },
    { route: "Banqiao → Xincheng", mode: "TRA express", time: "Timetable to confirm", status: "Ticket required" },
    { route: "Hualien scenic route", mode: "Private hire for Qingshui Cliff, Taroko edge and Qixingtan", time: "22 Nov · full scenic transfer", status: "Driver required" },
    { route: "Hualien → Chishang", mode: "TRA express", time: "About 1.5 hours", status: "Ticket required" },
    { route: "Chishang → Taitung", mode: "TRA, then local taxi as needed", time: "About 35 minutes by train", status: "Planned" },
    { route: "Taitung local outings", mode: "Local taxi / public transport / electric canopy bike", time: "25–26 Nov", status: "Planned" },
    { route: "Taitung → Tainan", mode: "TRA", time: "Timetable to confirm", status: "Ticket required" },
    { route: "Tainan local outings", mode: "Local taxi / public transport / walking", time: "27–29 Nov", status: "Planned" },
    { route: "Xiding & Alishan area", mode: "Private hire or self-drive", time: "29 Nov–1 Dec", status: "Decision required" },
    { route: "Alishan → Chiayi → Taipei", mode: "Road transfer to Chiayi, then rail north", time: "2 Dec · times to confirm", status: "Confirm connection" },
    { route: "Taipei local travel", mode: "MRT / bus / local taxi / walking", time: "2–6 Dec", status: "Planned" }
  ],
  calendar: [
    { date: "26 Oct 2026", time: "00:00", action: "Book 22 Nov TRA", route: "Banqiao → Xincheng" },
    { date: "27 Oct 2026", time: "00:00", action: "Book 24 Nov TRA", route: "Hualien → Chishang" },
    { date: "28 Oct 2026", time: "00:00", action: "Book 25 Nov TRA", route: "Chishang → Taitung" },
    { date: "30 Oct 2026", time: "00:00", action: "Book 27 Nov TRA", route: "Taitung → Tainan · prefer ocean-view seats" },
    { date: "2 Nov 2026", time: "00:00", action: "Book 29 Nov TRA", route: "Tainan → Chiayi" },
    { date: "5 Nov 2026", time: "00:00", action: "Book 2 Dec northbound rail", route: "Chiayi → Taipei" }
  ]
};
