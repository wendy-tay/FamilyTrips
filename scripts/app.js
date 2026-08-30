(function () {
  "use strict";
  const data = window.TRIP_DATA;
  if (!data) return;
  const byId = (id) => document.getElementById(id);
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);
  const statusClass = (status) => ["Pending", "Weather dependent"].includes(status) ? "tentative" : "";
  const statusBadge = (status) => `<span class="booking-status ${statusClass(status)}">${escapeHtml(status)}</span>`;

  byId("itinerary-list").innerHTML = data.itinerary.map((day) => `
    <article class="day-card"><div class="day-index">Day<strong>${day.day}</strong></div><div class="day-main">
      <div class="day-topline"><div><h3>${escapeHtml(day.title)} · ${escapeHtml(day.stay)}</h3><p class="day-date">${escapeHtml(day.date)}</p></div><span class="move-badge ${day.moving ? "" : "stay-badge"}">${day.moving ? "Moving day" : "Stay day"}</span></div>
      <div class="day-details"><p class="activity-line"><strong>Plan:</strong> ${escapeHtml(day.plan)}</p><div class="travel-box"><strong>${escapeHtml(day.travel)}</strong>${escapeHtml(day.note)}</div></div>
    </div></article>`).join("");

  byId("accommodation-list").innerHTML = data.accommodation.map((stay) => `
    <article class="booking-card">${statusBadge(stay.status)}<h3>${escapeHtml(stay.location)}</h3><p><strong>${escapeHtml(stay.hotel)}</strong></p><p>${escapeHtml(stay.dates)}</p><p>${escapeHtml(stay.detail)}</p></article>`).join("");

  byId("highlight-list").innerHTML = data.highlights.map((item) => `
    <article class="booking-card">${statusBadge(item.status)}<h3>${escapeHtml(item.title)}</h3><p><strong>${escapeHtml(item.location)}</strong></p><p>${escapeHtml(item.detail)}</p></article>`).join("");

  byId("transport-list").innerHTML = data.transport.map((leg, index) => `
    <article class="transport-card"><span class="transport-index">${String(index + 1).padStart(2, "0")}</span><div><h3>${escapeHtml(leg.route)}</h3><p>${escapeHtml(leg.mode)} · ${escapeHtml(leg.time)}</p></div><span class="transport-status">${escapeHtml(leg.status)}</span></article>`).join("");

  byId("calendar-list").innerHTML = data.calendar.map((item) => `
    <article class="calendar-card"><div class="calendar-date"><strong>${escapeHtml(item.date)}</strong><span>${escapeHtml(item.time)} Taiwan time</span></div><div><h3>${escapeHtml(item.action)}</h3><p>${escapeHtml(item.route)}</p></div></article>`).join("");

  byId("regional-map-list").innerHTML = data.regionalMaps.map((item) => `
    <article class="regional-map-card"><div class="regional-map-placeholder" aria-hidden="true"><span>Map coming next</span></div><div><span class="booking-status tentative">${escapeHtml(item.status)}</span><h3>${escapeHtml(item.region)}</h3><p>${escapeHtml(item.detail)}</p></div></article>`).join("");

  const menuButton = document.querySelector(".menu-button");
  const nav = byId("trip-nav");
  menuButton.addEventListener("click", () => { const open = nav.classList.toggle("open"); menuButton.setAttribute("aria-expanded", String(open)); });
  nav.addEventListener("click", () => { nav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false"); });
})();
