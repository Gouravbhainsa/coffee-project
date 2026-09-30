import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LuminaStory from '../components/LuminaStory';
import Testimonials from '../components/Testimonials';
import TastingCTA from '../components/TastingCTA';
import Footer from '../components/Footer';

// ─── Home-page featured items ──────────────────────────────────────────────
const homeFeatured = [
  {
    id: 1,
    name: "Handcrafted Pour-Over & Single Origin",
    sub: "COFFEE RITUAL",
    price: "₹540",
    image: "public/images/pic3.jpeg",
    label: "Roaster's Pick",
    desc: "Precision Kalita Wave dripped cup celebrating high-elevation micro-lots. This rare clarity will command stage daily and become something great.",
    notes: "Jasmine, Stone Fruit, Cardamom Rose",
    roastedBy: "Roasted by: Clara Obi, Certified Roasters",
  },
  {
    id: 2,
    name: "Slow-Fermented Brioche & Croissants",
    sub: "LAMINATED PASTRY",
    price: "₹480",
    image: "public/images/pic4.jpeg",
    label: "Fresh 7:30 AM",
    desc: "Cultured butter laminations with crisp caramelized exteriors, featherweight crumb and toasted almond notes for the perfect morning break.",
    notes: "Normandy Butter, Fleur de Sel, Orange Blossom",
    roastedBy: "Handmade by: Ana, Clara Doe, Chang Sora",
  },
  {
    id: 3,
    name: "Lavender Honey Oat Latte",
    sub: "HOUSE SPECIALTY",
    price: "₹520",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700&auto=format&fit=crop&q=80",
    label: "Guest Favorite",
    desc: "Cold-extracted lavender with wildflower honey is sumptuous. Bringing my dog to sit under the olive trees outside makes my whole week.",
    notes: "Wildflower Honey, Lavender, Oat Milk",
    roastedBy: "Sourced from: Wildflower Farms, Lembang and Bali",
  },
];

// ─── Benefits ─────────────────────────────────────────────────────────────
const benefits = [
  { icon: "◎", title: "100% Direct-Trade", sub: "Single-origin organic beans" },
  { icon: "🍞", title: "Baked In-House Daily", sub: "Natural levain sourdough" },
  { icon: "🐾", title: "Pet-Friendly Patio", sub: "Sunny outdoor garden deck" },
  { icon: "📶", title: "High-Speed Fiber", sub: "Quiet morning work corners" },
];

// ─── Component ────────────────────────────────────────────────────────────
const Home = () => {
  return (
    <div className="home-page">
      <Navbar />

      {/* ── SPLIT HERO ─────────────────────────────────────────────────── */}
      <section className="sh-hero">
        {/* Left: text content */}
        <div className="sh-hero-left">
          <p className="sh-eyebrow">● MORNING BREWS &nbsp;•&nbsp; OVEN FRESH AT 7:30 AM</p>

          <h1 className="sh-hero-title">
            Artisan Brews &amp;<br /><em>Slow Mornings</em>
          </h1>

          <p className="sh-hero-desc">
            Every batch of single-origin coffee is roasted on-site in small copper
            drums, paired with heirloom sourdough and laminated pastries baked fresh
            at the first break of dawn.
          </p>

          <div className="sh-hero-btns">
            <NavLink to="/menu" className="sh-btn-primary">Explore Seasonal Menu →</NavLink>
            <NavLink to="/about" className="sh-btn-ghost">
              <span className="sh-btn-ghost-icon">⊙</span> Plan Your Visit
            </NavLink>
          </div>

          <div className="sh-hero-meta">
            <span className="sh-meta-item">☀ Sunlit Garden Open</span>
            <span className="sh-meta-sep">·</span>
            <span className="sh-meta-item">⊡ Roasting: Ethiopian Yirgacheffe</span>
          </div>
        </div>

        {/* Right: image with floating card */}
        <div className="sh-hero-right">
          <div className="sh-hero-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&auto=format&fit=crop&q=90"
              alt="Lumina Café interior"
            />
            {/* Floating roastery card */}
            <div className="sh-float-card">
              <span className="sh-float-icon">☕</span>
              <div className="sh-float-card-body">
                <p className="sh-float-title">The Roastery Hearth</p>
                <p className="sh-float-sub">412 Maple St &nbsp;•&nbsp; Seating for 48 guests</p>
              </div>
              <span className="sh-float-open">Open Now</span>
            </div>
            {/* Corner "DIRECT TRADE" badge */}
            <div className="sh-corner-badge">
              <span className="sh-corner-icon">☕</span>
              <span className="sh-corner-text">DIRECT TRADE</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS BAR ──────────────────────────────────────────────────── */}
      <section className="hb-benefits">
        {benefits.map((b, i) => (
          <div key={i} className="hb-benefit-item">
            <span className="hb-benefit-icon">{b.icon}</span>
            <div>
              <h4>{b.title}</h4>
              <p>{b.sub}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── FEATURED SPECIALTIES ──────────────────────────────────────────── */}
      <section className="hb-featured">
        <div className="hb-featured-header">
          <div className="hb-featured-header-left">
            <p className="eyebrow">CURATED DAILY RITUALS</p>
            <h2>Featured Specialties</h2>
          </div>
          <p className="hb-featured-intro">
            A rotating trio of seasonal harvest coffees and oven crafts developed
            by our head roaster and master viennoiserie baker.
          </p>
        </div>

        <div className="hb-cards-grid">
          {homeFeatured.map((item) => (
            <article key={item.id} className="hb-card">
              <div className="hb-card-img">
                <img src={item.image} alt={item.name} loading="lazy" />
                <span className="hb-card-label">{item.label}</span>
              </div>
              <div className="hb-card-body">
                <div className="hb-card-top">
                  <div>
                    <p className="hb-card-sub">{item.sub}</p>
                    <h3 className="hb-card-name">{item.name}</h3>
                  </div>
                  <span className="hb-card-price">{item.price}</span>
                </div>
                <p className="hb-card-desc">{item.desc}</p>
                <div className="hb-card-footer">
                  <p className="hb-card-notes">{item.notes}</p>
                  <button className="hb-card-save">♡</button>
                </div>
                <p className="hb-card-meta">{item.roastedBy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="hb-featured-cta">
          <NavLink to="/menu" className="hb-see-all">View Full Menu →</NavLink>
        </div>
      </section>

      {/* ── LUMINA STORY + STATS ──────────────────────────────────────────── */}
      <LuminaStory />

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <Testimonials />

      {/* ── TASTING CTA ───────────────────────────────────────────────────── */}
      <TastingCTA />

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
};

export default Home;
