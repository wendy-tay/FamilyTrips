(function () {
  "use strict";
  const data = window.TRIP_DATA;
  if (!data) return;
  const byId = (id) => document.getElementById(id);
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);
  const statusBadge = (status) => `<span class="booking-status ${status === "Pending" ? "tentative" : ""}">${status === "Pending" ? "&#x1F7E1;" : "&#x1F7E2;"} ${escapeHtml(status)}</span>`;

  byId("itinerary-list").innerHTML = data.itinerary.map((day) => `
    <article class="day-card"><div class="day-index">Day<strong>${day.day}</strong></div><div class="day-main">
      <div class="day-topline"><div><h3>${escapeHtml(day.title)} | ${escapeHtml(day.stay)}</h3><p class="day-date">${escapeHtml(day.date)}</p></div><span class="move-badge ${day.moving ? "" : "stay-badge"}">${day.moving ? "Moving day" : "Stay day"}</span></div>
      <div class="day-details"><p class="activity-line"><strong>Plan:</strong> ${escapeHtml(day.plan)}</p><div class="travel-box"><strong>${escapeHtml(day.travel)}</strong>${escapeHtml(day.note)}</div></div>
    </div></article>`).join("");

  byId("accommodation-list").innerHTML = data.accommodation.map((stay) => `
    <article class="booking-card">${statusBadge(stay.status)}<h3>${escapeHtml(stay.location)}</h3><p><strong>${escapeHtml(stay.hotel)}</strong></p><p>${escapeHtml(stay.dates)}</p></article>`).join("");

  const placeList = byId("place-list");
  const filterWrap = byId("place-filters");
  const locations = ["All", ...new Set(data.places.map((place) => place.location))];
  let activeLocation = "All";
  const tagClass = (type) => type === "weather" ? "tag tag-weather" : type === "tentative" ? "tag tag-tentative" : "tag";

  function renderPlaces() {
    const places = activeLocation === "All" ? data.places : data.places.filter((place) => place.location === activeLocation);
    placeList.innerHTML = places.map((place) => `
      <article class="place-card"><div class="place-card-top"><span class="place-icon" aria-hidden="true">${place.icon}</span><span class="${tagClass(place.type)}">${escapeHtml(place.status)}</span></div>
      <h3>${escapeHtml(place.name)}</h3><p>${escapeHtml(place.description)}</p><div class="place-meta"><span><strong>When:</strong> ${escapeHtml(place.timing)}</span></div>
      <div class="card-links"><a class="mini-link" href="${place.map}" target="_blank" rel="noopener">Google Maps &#8599;</a><span class="mini-link">${escapeHtml(place.location)}</span></div></article>`).join("");
  }

  filterWrap.innerHTML = locations.map((location, index) => `<button class="filter-button" type="button" data-location="${escapeHtml(location)}" aria-pressed="${index === 0}">${escapeHtml(location)}</button>`).join("");
  filterWrap.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-location]");
    if (!button) return;
    activeLocation = button.dataset.location;
    filterWrap.querySelectorAll("button").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    renderPlaces();
  });
  renderPlaces();

  byId("transport-list").innerHTML = data.transport.map((leg, index) => `
    <article class="transport-card"><span class="transport-index">${String(index + 1).padStart(2, "0")}</span><div><h3>${escapeHtml(leg.route)}</h3><p>${escapeHtml(leg.mode)}</p></div><span class="transport-status">${escapeHtml(leg.status)}</span></article>`).join("");

  byId("calendar-list").innerHTML = data.calendar.map((item) => `
    <article class="calendar-card"><div class="calendar-date"><strong>${escapeHtml(item.date)}</strong><span>${escapeHtml(item.time)} Taiwan time</span></div><div><h3>${escapeHtml(item.action)}</h3><p>${escapeHtml(item.route)}</p></div></article>`).join("");

  const confirmed = data.accommodation.filter((stay) => stay.status === "Confirmed").length;
  byId("progress-summary").innerHTML = `<div class="progress-copy"><strong>${confirmed} of ${data.accommodation.length} stays confirmed</strong><span>Train tickets and two hotels remain the key Phase 1 actions.</span></div><div class="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="${data.accommodation.length}" aria-valuenow="${confirmed}"><span style="width:${(confirmed / data.accommodation.length) * 100}%"></span></div>`;
  byId("progress-list").innerHTML = data.progress.map((item) => `<article class="progress-card">${statusBadge(item.status)}<h3>${escapeHtml(item.area)}</h3><p>${escapeHtml(item.detail)}</p></article>`).join("");

  const menuButton = document.querySelector(".menu-button");
  const nav = byId("trip-nav");
  menuButton.addEventListener("click", () => { const open = nav.classList.toggle("open"); menuButton.setAttribute("aria-expanded", String(open)); });
  nav.addEventListener("click", () => { nav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false"); });
})();
