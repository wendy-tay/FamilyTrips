"use client";

import { useMemo, useState } from "react";

const trips = [
  {
    month: "DEC",
    day: "06",
    place: "Taiwan",
    detail: "8 days · Taipei, Taichung & Alishan",
    status: "Planning",
    tone: "coral",
    budget: 68,
  },
  {
    month: "MAR",
    day: "14",
    place: "Kyoto",
    detail: "6 days · Temples, trains & treats",
    status: "Ideas",
    tone: "sage",
    budget: 34,
  },
  {
    month: "JUN",
    day: "20",
    place: "Perth",
    detail: "7 days · Coast, wildlife & road trips",
    status: "Someday",
    tone: "sky",
    budget: 12,
  },
];

const packingItems = [
  "Passports & travel documents",
  "Family medicines",
  "Power adapters",
  "Weather-ready layers",
];

export default function Home() {
  const [activeTrip, setActiveTrip] = useState(0);
  const [packed, setPacked] = useState([true, true, false, false]);
  const [idea, setIdea] = useState("");
  const [savedIdeas, setSavedIdeas] = useState<string[]>([
    "Ride the Alishan forest railway",
    "Try a family cooking class",
  ]);

  const packedCount = useMemo(
    () => packed.filter(Boolean).length,
    [packed],
  );

  function addIdea() {
    const nextIdea = idea.trim();
    if (!nextIdea) return;
    setSavedIdeas((current) => [...current, nextIdea]);
    setIdea("");
  }

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Family Trips home">
          <span className="brand-mark" aria-hidden="true">F</span>
          <span>Family Trips</span>
        </a>
        <div className="nav-links" aria-label="Primary navigation">
          <a href="#trips">Trips</a>
          <a href="#planner">Planner</a>
          <a href="#memories">Memories</a>
        </div>
        <button className="avatar" aria-label="Open family profile">WT</button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">YOUR FAMILY ADVENTURE BOOK</p>
          <h1>More moments.<br /><em>Less planning stress.</em></h1>
          <p className="intro">
            Keep every destination, booking, budget, and bright idea together—
            so your family can focus on the fun part.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#trips">Plan our next trip</a>
            <a className="button quiet" href="#planner">See the planner <span>→</span></a>
          </div>
          <div className="family-note">
            <div className="faces" aria-hidden="true">
              <span>W</span><span>T</span><span>+2</span>
            </div>
            <p><strong>Made for the whole family</strong><br />One shared place for everyone’s ideas.</p>
          </div>
        </div>

        <div className="postcard" aria-label="Illustration of a family trip">
          <div className="sun" />
          <div className="cloud cloud-one" />
          <div className="cloud cloud-two" />
          <div className="mountain mountain-back" />
          <div className="mountain mountain-front" />
          <div className="train">
            <span /><span /><span />
          </div>
          <p className="postcard-label">NEXT STOP</p>
          <h2>Somewhere<br />wonderful</h2>
          <p className="postcard-script">together!</p>
          <div className="stamp">FAMILY<br />EXPRESS</div>
        </div>
      </section>

      <section className="section" id="trips">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ON THE HORIZON</p>
            <h2>Trips we&apos;re dreaming about</h2>
          </div>
          <button className="text-button" onClick={() => setActiveTrip((activeTrip + 1) % trips.length)}>
            Explore next trip →
          </button>
        </div>

        <div className="trip-grid">
          {trips.map((trip, index) => (
            <button
              className={`trip-card ${trip.tone} ${activeTrip === index ? "active" : ""}`}
              key={trip.place}
              onClick={() => setActiveTrip(index)}
              aria-pressed={activeTrip === index}
            >
              <span className="date-tile"><strong>{trip.month}</strong>{trip.day}</span>
              <span className="trip-copy">
                <span className="status">{trip.status}</span>
                <strong>{trip.place}</strong>
                <small>{trip.detail}</small>
              </span>
              <span className="trip-arrow">↗</span>
            </button>
          ))}
        </div>
      </section>

      <section className="planner section" id="planner">
        <div className="planner-intro">
          <p className="eyebrow">TAIWAN · DECEMBER 2026</p>
          <h2>Today&apos;s little wins</h2>
          <p>Small steps add up to a wonderful trip. Here&apos;s where your Taiwan planning stands.</p>
          <div className="progress-row">
            <div>
              <span>Trip readiness</span>
              <strong>68%</strong>
            </div>
            <div className="progress"><span style={{ width: "68%" }} /></div>
          </div>
        </div>

        <div className="checklist-card">
          <div className="card-title">
            <div>
              <p className="eyebrow">PACKING LIST</p>
              <h3>{packedCount} of {packingItems.length} ready</h3>
            </div>
            <span className="round-icon">✓</span>
          </div>
          <div className="checklist">
            {packingItems.map((item, index) => (
              <label key={item}>
                <input
                  type="checkbox"
                  checked={packed[index]}
                  onChange={() => setPacked((items) => items.map((value, itemIndex) => itemIndex === index ? !value : value))}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="budget-card">
          <p className="eyebrow">TRIP BUDGET</p>
          <h3>S$4,080 <span>of S$6,000</span></h3>
          <div className="donut" aria-label="68 percent of budget planned"><span>68%</span></div>
          <div className="budget-legend">
            <p><i className="booked" /> Booked <strong>S$2,720</strong></p>
            <p><i className="planned" /> Planned <strong>S$1,360</strong></p>
            <p><i className="left" /> Remaining <strong>S$1,920</strong></p>
          </div>
        </div>
      </section>

      <section className="idea-section section" id="memories">
        <div>
          <p className="eyebrow">THE FAMILY WISH LIST</p>
          <h2>Save the ideas that make everyone smile.</h2>
        </div>
        <div className="idea-box">
          <div className="idea-input">
            <input
              value={idea}
              onChange={(event) => setIdea(event.target.value)}
              onKeyDown={(event) => event.key === "Enter" && addIdea()}
              placeholder="Add a place, food, or experience…"
              aria-label="New family trip idea"
            />
            <button onClick={addIdea}>Add idea</button>
          </div>
          <div className="idea-list">
            {savedIdeas.map((savedIdea) => <span key={savedIdea}>{savedIdea}</span>)}
          </div>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">F</span><span>Family Trips</span></a>
        <p>Plan gently. Travel joyfully. Remember everything.</p>
        <span>Made with ♥ for family adventures.</span>
      </footer>
    </main>
  );
}
