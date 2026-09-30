import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── Artisans ──────────────────────────────────────────────────────────────
const artisans = [
  {
    id: 1,
    name: "Maya Chen",
    role: "HEAD OF ROASTING & GREEN BUYING",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80",
    description:
      "Q-Grader certified with a decade spent between Taiwan, Melbourne, and Portland. Maya curates our direct-farm micro-lots and crafts our seasonal flavor signatures with precision roast curves.",
    signature: "Sidama Honey Process",
    detail: "8 Yrs Roasting",
  },
  {
    id: 2,
    name: "Julien Vance",
    role: "EXECUTIVE PASTRY CHEF & BAKER",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&auto=format&fit=crop&q=80",
    description:
      "Trained in Lyon with an unyielding fascination for wild fermentation. Julien oversees our 6-year-old sourdough starter 'Orion', crafting laminated croissants and stone-ground heritage loaves every dawn.",
    signature: "Cardamom Sourdough Buns",
    detail: "5:30 AM Call",
  },
];

// ─── Farm origins ──────────────────────────────────────────────────────────
const origins = [
  { icon: "📍", name: "Huila, Colombia", detail: "1,950m • Washed • Peach, Panela, Jasmine" },
  { icon: "⛰", name: "Sidama, Ethiopia", detail: "2,100m • Natural • Bergamot, Wild Berry" },
  { icon: "🌿", name: "Antigua, Guatemala", detail: "1,800m • Honey • Cacao Nib, Tangerine" },
];

// ─── Hours ────────────────────────────────────────────────────────────────
const hours = [
  { label: "Monday – Friday", sub: "Full Espresso Bar & Kitchen", time: "7:00 AM – 6:00 PM" },
  { label: "Saturday – Sunday", sub: "Weekend Brunch & Pastry Specials", time: "8:00 AM – 7:00 PM" },
];

// ─── Amenities ────────────────────────────────────────────────────────────
const amenities = [
  { icon: "🐾", label: "Dog-Friendly Patio", sub: "Heated, covered veranda" },
  { icon: "📶", label: "Complimentary Fiber Wi-Fi", sub: "100 Mbps symmetrical" },
  { icon: "♿", label: "Wheelchair Accessible", sub: "Zero-step entry & rest facilities" },
  { icon: "💻", label: "Laptop Policy", sub: "Welcome Mon–Fri, screen-free weekends after 11 AM" },
];

// ─── Contact form ──────────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setError("Please fill all required fields."); return; }
    if (!form.email.includes("@")) { setError("Please enter a valid email."); return; }
    setError(""); setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <form className="ab-form" onSubmit={handleSubmit}>
      {sent && <p className="ab-form-success">✓ Message sent! We'll reply within 24 hours.</p>}
      <div className="form-row">
        <div className="form-group">
          <label>Name *</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" />
        </div>
      </div>
      <div className="form-group">
        <label>Subject</label>
        <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Collaboration, event, tasting…" />
      </div>
      <div className="form-group">
        <label>Message *</label>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your inquiry…" />
      </div>
      {error && <p className="form-error">{error}</p>}
      <button type="submit" className="inquiry-btn">Send Message →</button>
    </form>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────
function About() {
  return (
    <>
      <Navbar />

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="ab-hero">
        <div className="ab-hero-top">
          <div className="ab-hero-top-left">
            <p className="ab-eyebrow">LUMINA CHRONICLE & SANCTUARY</p>
            <h1 className="ab-hero-title">Our Story & Gatherings</h1>
            <p className="ab-hero-sub">
              Celebrating our humble evolution from an intimate micro-roasting garage in
              2017 to an airy, light-drenched neighborhood culinary sanctuary where slow
              craft meets human warmth.
            </p>
          </div>
          <div className="ab-hero-top-right">
            <div className="ab-batch-badge">
              <span className="ab-batch-label">CURRENT BATCH</span>
              <span className="ab-batch-name">Ethiopia Yirgacheffe G1</span>
            </div>
            <span className="ab-espresso-pill">
              <span className="ab-espresso-dot" />
              Espresso Bar Open
            </span>
          </div>
        </div>

        <div className="ab-hero-feature">
          {/* Large image */}
          <div className="ab-hero-img-wrap">
            <span className="ab-img-breadcrumb">About &amp; Visit</span>
            <img
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1000&auto=format&fit=crop&q=85"
              alt="Lumina café interior"
            />
            <div className="ab-img-caption">
              <span className="ab-img-address">412 MAPLE STREET</span>
              <p>A sunlit space designed around the calm,<br />aromatic, storied and communal pause.</p>
            </div>
          </div>

          {/* Right craft panel */}
          <div className="ab-hero-craft">
            <p className="ab-craft-label">THE SLOW CRAFT STANDARD</p>
            <h2 className="ab-craft-title">Every bean tells of elevation, rain, and careful hands.</h2>
            <p className="ab-craft-body">
              We never mask origin. Through tender roasting curves and naturally fermented
              levain, we honor the integrity of soil, seed, and season with uncompromising devotion.
            </p>
            <div className="ab-craft-stats">
              <div>
                <strong>100%</strong>
                <span>Single Origin</span>
              </div>
              <div>
                <strong>36h</strong>
                <span>Wild Ferment</span>
              </div>
              <div>
                <strong>Zero</strong>
                <span>Additives</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIRECT TRADE PHILOSOPHY ────────────────────────────────────── */}
      <section className="ab-philosophy">
        <div className="ab-philosophy-left">
          <p className="ab-eyebrow">ROASTERY PHILOSOPHY</p>
          <h2 className="ab-philosophy-title">
            Direct Trade with Radical Clarity &amp; Reverence
          </h2>
          <p className="ab-philosophy-body">
            Our roasting philosophy begins at the root. We bypass conventional intermediaries
            to partner directly with smallholder farming families across Colombia's Huila
            department, Ethiopia's high-altitude Sidama valleys, and the volcanic slopes of
            Antigua in Guatemala.
          </p>
          <p className="ab-philosophy-body">
            We pay an average of 42% above Fair Trade minimums, co-investing in clean washing
            stations and soil biodynamics. In Lumina's custom drum roaster, our roasting
            curves prioritize delicate sweetness, floral aromatics, and terroir clarity rather
            than aggressive caramelization.
          </p>

          <div className="ab-origins">
            {origins.map((o, i) => (
              <div key={i} className="ab-origin-item">
                <span>{o.icon}</span>
                <div>
                  <p className="ab-origin-name">{o.name}</p>
                  <p className="ab-origin-detail">{o.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <blockquote className="ab-quote">
            <span className="ab-quote-mark">❝</span>
            <em>"We don't reinvent coffee; we step out of the way of the grower's labor and let sunlight and soil sing in the cup."</em>
          </blockquote>
        </div>

        <div className="ab-philosophy-right">
          <div className="ab-roaster-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=700&auto=format&fit=crop&q=85"
              alt="Head roaster at work"
            />
            <div className="ab-roaster-card">
              <span className="ab-roaster-card-icon">🤝</span>
              <div>
                <p className="ab-roaster-card-title">Direct Farmer Partnership</p>
                <p className="ab-roaster-card-sub">Harvest season visits & pre-financed crop agreements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEET THE ARTISANS ─────────────────────────────────────────── */}
      <section className="ab-artisans">
        <div className="ab-artisans-header">
          <div>
            <p className="ab-eyebrow">THE ARTISANS</p>
            <h2 className="ab-artisans-title">Meet the Roasters & Bakers</h2>
          </div>
          <p className="ab-artisans-intro">
            The restless curiosity, early morning flour dust, and sensorial
            palate driving Lumina's day-to-day creations.
          </p>
        </div>

        <div className="ab-artisans-grid">
          {artisans.map((a) => (
            <div key={a.id} className="ab-artisan-card">
              <div className="ab-artisan-img">
                <img src={a.image} alt={a.name} loading="lazy" />
              </div>
              <div className="ab-artisan-body">
                <div className="ab-artisan-top">
                  <div>
                    <p className="ab-artisan-role">{a.role}</p>
                    <h3 className="ab-artisan-name">{a.name}</h3>
                  </div>
                  <button className="ab-artisan-share">△</button>
                </div>
                <p className="ab-artisan-desc">{a.description}</p>
                <div className="ab-artisan-footer">
                  <span>Signature: {a.signature}</span>
                  <span>{a.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINDING OUR SANCTUARY ─────────────────────────────────────── */}
      <section className="ab-visit">
        <div className="ab-visit-header">
          <p className="ab-eyebrow">PLAN YOUR VISIT</p>
          <h2 className="ab-visit-title">Finding Our Sanctuary</h2>
          <p className="ab-visit-sub">
            Situated in Portland's Historic Arts District, steps away from tree-lined
            sidewalks and independent galleries.
          </p>
        </div>

        <div className="ab-visit-grid">
          {/* Left: address + map */}
          <div className="ab-visit-left">
            <div className="ab-address-card">
              <div className="ab-address-top">
                <div className="ab-address-icon">📍</div>
                <div className="ab-address-info">
                  <h4>Downtown Flagship</h4>
                  <p>412 Maple Street, Historic Arts District</p>
                  <p>Portland, Oregon 97205</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="ab-directions-btn"
                >
                  Get Directions ↗
                </a>
              </div>
              <div className="ab-transit-row">
                <div className="ab-transit-item">
                  <span>🅿</span>
                  <div>
                    <p className="ab-transit-label">Parking Access</p>
                    <p className="ab-transit-detail">Free 90-min customer stalls behind the building via Maple Alley. Metered street parking along 4th Ave.</p>
                  </div>
                </div>
                <div className="ab-transit-item">
                  <span>🚇</span>
                  <div>
                    <p className="ab-transit-label">Public Transit</p>
                    <p className="ab-transit-detail">MAX Light Rail (Red & Blue Lines) Galleria/SW 10th station is a brief 3-block walk.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ab-map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29698.071095269268!2d83.87480390718672!3d21.497577259846377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a213db91fc99593%3A0xc23f076687d8c01!2sCoffee%20Day%20Beverages!5e0!3m2!1sen!2sin!4v1790520099519!5m2!1sen!2sin"
                title="Lumina Cafe Location"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>

          {/* Right: hours + amenities */}
          <div className="ab-visit-right">
            <div className="ab-hours-card">
              <h3 className="ab-hours-title">⏱ Hours of Operation</h3>
              {hours.map((h, i) => (
                <div key={i} className="ab-hours-row">
                  <div>
                    <p className="ab-hours-day">{h.label}</p>
                    <p className="ab-hours-sub">{h.sub}</p>
                  </div>
                  <span className="ab-hours-time">{h.time}</span>
                </div>
              ))}
              <div className="ab-hours-note">
                🔔 First warm sourdough loaves come out of the stone deck at 7:30 AM weekdays and 8:15 AM weekends.
              </div>
            </div>

            <div className="ab-amenities-card">
              <h3 className="ab-amenities-title">🏠 Cafe Amenities</h3>
              <div className="ab-amenities-grid">
                {amenities.map((a, i) => (
                  <div key={i} className="ab-amenity-item">
                    <span className="ab-amenity-icon">{a.icon}</span>
                    <div>
                      <p className="ab-amenity-label">{a.label}</p>
                      <p className="ab-amenity-sub">{a.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────── */}
      <section className="inquiry-section">
        <div className="inquiry-content">
          <div className="inquiry-text">
            <p className="eyebrow">LET'S CONNECT</p>
            <h2>Inquiries &amp; Collaboration</h2>
            <p>
              Planning an event, creative collaboration, private tasting or
              partnership? We'd love to hear from you.
            </p>
            <div className="av-contact-links">
              <div className="av-contact-item">
                <span className="av-contact-icon">✉</span>
                <div>
                  <p className="av-contact-label">Email Us</p>
                  <p className="av-contact-val">hello@luminacafe.com</p>
                </div>
              </div>
              <div className="av-contact-item">
                <span className="av-contact-icon">📞</span>
                <div>
                  <p className="av-contact-label">Call Us</p>
                  <p className="av-contact-val">(503) 555-0129</p>
                </div>
              </div>
              <div className="av-contact-item">
                <span className="av-contact-icon">📍</span>
                <div>
                  <p className="av-contact-label">Find Us</p>
                  <p className="av-contact-val">412 Maple St, Downtown</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
