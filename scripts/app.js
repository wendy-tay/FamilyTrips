(function () {
  "use strict";

  const data = window.TRIP_DATA;
  if (!data) return;

  const byId = (id) => document.getElementById(id);
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);

  const itineraryList = byId("itinerary-list");
  itineraryList.innerHTML = data.itinerary.map((day) => `
    <article class="day-card">
      <div class="day-index">Day<strong>${day.day}</strong></div>
      <div class="day-main">
        <div class="day-topline">
          <div>
            <h3>${escapeHtml(day.title)} · ${escapeHtml(day.stay)}</h3>
            <p class="day-date">${escapeHtml(day.date)}</p>
          </div>
          <span class="move-badge ${day.moving ? "" : "stay-badge"}">${day.moving ? "Moving day" : "Stay day"}</span>
        </div>
        <div class="day-details">
          <p class="activity-line"><strong>Plan:</strong> ${escapeHtml(day.plan)}</p>
          <div class="travel-box"><strong>${escapeHtml(day.travel)}</strong>${escapeHtml(day.note)}</div>
        </div>
      </div>
    </article>
  `).join("");

  const placeList = byId("place-list");
  const filterWrap = byId("place-filters");
  const locations = ["All", ...new Set(data.places.map((place) => place.location))];
  let activeLocation = "All";

  function tagClass(type) {
    if (type === "weather") return "tag tag-weather";
    if (type === "tentative") return "tag tag-tentative";
    return "tag";
  }

  function renderPlaces() {
    const places = activeLocation === "All"
      ? data.places
      : data.places.filter((place) => place.location === activeLocation);

    placeList.innerHTML = places.length ? places.map((place) => `
      <article class="place-card">
        <div class="place-card-top">
          <span class="place-icon" aria-hidden="true">${place.icon}</span>
          <span class="${tagClass(place.type)}">${escapeHtml(place.status)}</span>
        </div>
        <h3>${escapeHtml(place.name)} <span class="place-chinese">${escapeHtml(place.chinese)}</span></h3>
        <p>${escapeHtml(place.description)}</p>
        <div class="place-meta">
          <span><strong>Allow:</strong> ${escapeHtml(place.duration)}</span>
          <span><strong>From stay:</strong> ${escapeHtml(place.from)}</span>
        </div>
        <div class="card-links">
          <a class="mini-link" href="${place.map}" target="_blank" rel="noopener">Google Maps ↗</a>
          <span class="mini-link">${escapeHtml(place.location)}</span>
        </div>
      </article>
    `).join("") : '<p class="empty-state">No places in this category yet.</p>';
  }

  filterWrap.innerHTML = locations.map((location, index) => `
    <button class="filter-button" type="button" data-location="${escapeHtml(location)}" aria-pressed="${index === 0}">
      ${escapeHtml(location)}
    </button>
  `).join("");

  filterWrap.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-location]");
    if (!button) return;
    activeLocation = button.dataset.location;
    filterWrap.querySelectorAll("button").forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    renderPlaces();
  });
  renderPlaces();

  byId("food-list").innerHTML = data.food.map((item) => `
    <div class="food-item">
      <span aria-hidden="true">${item.icon}</span>
      <div><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.place)}</small></div>
    </div>
  `).join("");

  byId("booking-list").innerHTML = data.bookings.map((booking) => `
    <article class="booking-card">
      <span class="booking-status ${booking.status === "Tentative" ? "tentative" : ""}">${escapeHtml(booking.status)}</span>
      <h3>${escapeHtml(booking.name)}</h3>
      <p>${escapeHtml(booking.detail)}</p>
      <p>${escapeHtml(booking.note)}</p>
    </article>
  `).join("");

  const menuButton = document.querySelector(".menu-button");
  const nav = byId("trip-nav");
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
})();
