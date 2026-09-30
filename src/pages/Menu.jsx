import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  featuredItems,
  coffeeItems,
  teaItems,
  bakeryItems,
  breakfastItems,
} from "../data/menuData";

// ─── Diet badge icons ──────────────────────────────────────────────────────────
const DietBadge = ({ label }) => (
  <span className="diet-badge">{label}</span>
);

// ─── Inline list item for coffee / tea sections ────────────────────────────────
function InlineMenuItem({ item }) {
  return (
    <div className="inline-menu-item">
      <div className="inline-menu-top">
        <div className="inline-menu-left">
          <div className="inline-menu-name-row">
            <h4>{item.name}</h4>
            {item.tag && <span className="item-tag">{item.tag}</span>}
          </div>
          <p className="inline-menu-desc">{item.description}</p>
          <p className="inline-menu-notes">{item.notes}</p>
        </div>
        <span className="inline-menu-price">{item.price}</span>
      </div>
    </div>
  );
}

// ─── Bakery / Breakfast grid card ─────────────────────────────────────────────
function GridMenuItem({ item, showAddOn }) {
  return (
    <div className="grid-menu-item">
      <div className="grid-menu-header">
        <h4>{item.name}</h4>
        <span className="grid-menu-price">{item.price}</span>
      </div>
      <p className="grid-menu-desc">{item.description}</p>
      <div className="grid-menu-footer">
        <span className="grid-menu-notes">{item.notes}</span>
        {showAddOn && item.addOn && (
          <span className="grid-menu-addon">{item.addOn}</span>
        )}
        {item.tag && <span className="item-tag item-tag--sm">{item.tag}</span>}
      </div>
    </div>
  );
}

// ─── Filter pills ──────────────────────────────────────────────────────────────
const FILTERS = [
  { id: "all", label: "All Offerings" },
  { id: "coffee", label: "Espresso & Coffees" },
  { id: "tea", label: "Specialty Teas & Tonics" },
  { id: "bakery", label: "Artisan Bakery" },
  { id: "breakfast", label: "Breakfast & Brunch" },
];

function Menu() {
  const [activeFilter, setActiveFilter] = useState("all");

  const show = (cat) => activeFilter === "all" || activeFilter === cat;

  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="menu-page-hero">
        <div className="menu-page-breadcrumb">
          <span>↖ Return to Main Offerings</span>
        </div>
        <div className="menu-page-hero-content">
          <p className="eyebrow">OUR SEASONAL MENU</p>
          <h1>Our Seasonal Menu</h1>
          <p className="menu-page-subtitle">
            Thoughtfully crafted with organic milk, heirloom syrups, and single-origin
            microlots roasted in-house daily.
          </p>
        </div>
        <div className="menu-page-badges">
          <span className="open-now-badge">● Open Until the Season</span>
          <span className="artisan-badge">Roaster: Virginia & Mara</span>
        </div>
      </section>

      {/* ── FILTER BAR ───────────────────────────────────────────────────── */}
      <section className="menu-filter-bar">
        <div className="menu-filter-pills">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              className={`filter-pill ${activeFilter === f.id ? "active" : ""}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="menu-diet-badges">
          <DietBadge label="🌱 Vegan" />
          <DietBadge label="🌾 Gluten Free" />
          <DietBadge label="🥛 Dairy Free" />
        </div>
      </section>

      {/* ── FEATURED SEASONAL SHOWCASE ───────────────────────────────────── */}
      {show("all") && (
        <section className="menu-featured-section">
          <div className="menu-section-header">
            <p className="eyebrow">CURATED BY THE SEASON</p>
            <h2>Featured Seasonal Showcase</h2>
            <p className="menu-section-sub">
              Limited rotating daily brews &amp; reserve lot selections
            </p>
          </div>

          <div className="featured-showcase-grid">
            {featuredItems.map((item) => (
              <div key={item.id} className="featured-showcase-card">
                {item.label && (
                  <span className="showcase-label">{item.label}</span>
                )}
                {item.badge && (
                  <span className="showcase-badge">{item.badge}</span>
                )}
                <div className="showcase-img-wrap">
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>
                <div className="showcase-content">
                  <div className="showcase-top">
                    <h3>{item.name}</h3>
                    <span className="showcase-price">{item.price}</span>
                  </div>
                  <p className="showcase-desc">{item.description}</p>
                  <div className="showcase-details">
                    <div className="showcase-detail-row">
                      <span className="detail-label">SENSORY PROFILE</span>
                      <span className="detail-val">{item.profile}</span>
                    </div>
                    <div className="showcase-detail-row">
                      <span className="detail-label">ORIGIN</span>
                      <span className="detail-val">{item.origin}</span>
                    </div>
                  </div>
                  <div className="showcase-diet">
                    {item.vegan && <DietBadge label="🌱 Vegan" />}
                    {item.glutenFree && <DietBadge label="🌾 GF" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── COFFEE & ESPRESSO ────────────────────────────────────────────── */}
      {show("coffee") && (
        <section className="menu-category-section">
          <div className="menu-category-header">
            <div className="menu-category-title">
              <span className="category-number">01</span>
              <h2>Coffee &amp; Espresso</h2>
            </div>
            <p className="category-note">
              Featuring a smooth layer &amp; Latte UP+ Oat milk substitute for complimentary
            </p>
          </div>
          <div className="inline-menu-list">
            {coffeeItems.map((item) => (
              <InlineMenuItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      {/* ── SPECIALTY TEAS & TONICS ──────────────────────────────────────── */}
      {show("tea") && (
        <section className="menu-category-section menu-category-section--alt">
          <div className="menu-category-header">
            <div className="menu-category-title">
              <span className="category-number">02</span>
              <h2>Specialty Teas &amp; Tonics</h2>
            </div>
            <p className="category-note">
              Dinner: housemade botanical, ceremonial matcha, small-batch sparkling tonics
            </p>
          </div>
          <div className="inline-menu-list">
            {teaItems.map((item) => (
              <InlineMenuItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      {/* ── ARTISAN BAKERY & SWEETS ──────────────────────────────────────── */}
      {show("bakery") && (
        <section className="menu-category-section">
          <div className="menu-category-header">
            <div className="menu-category-title">
              <span className="category-number">03</span>
              <h2>Artisan Bakery &amp; Sweets</h2>
            </div>
            <p className="category-note">
              Stone-milled heritage grains · Natural sourdough cultures
            </p>
          </div>
          <div className="grid-menu-list">
            {bakeryItems.map((item) => (
              <GridMenuItem key={item.id} item={item} showAddOn={false} />
            ))}
          </div>
        </section>
      )}

      {/* ── BREAKFAST & SAVORY KITCHEN ───────────────────────────────────── */}
      {show("breakfast") && (
        <section className="menu-category-section menu-category-section--alt">
          <div className="menu-category-header">
            <div className="menu-category-title">
              <span className="category-number">04</span>
              <h2>Breakfast &amp; Savory Kitchen</h2>
            </div>
            <p className="category-note">
              Available daily until 2:30 PM · Local farm partnerships
            </p>
          </div>
          <div className="grid-menu-list grid-menu-list--3">
            {breakfastItems.map((item) => (
              <GridMenuItem key={item.id} item={item} showAddOn />
            ))}
          </div>
        </section>
      )}

      {/* ── MILK & CRAFT CUSTOMIZATION BAR ──────────────────────────────── */}
      <section className="customization-section">
        <div className="customization-header">
          <div>
            <h2>Milk &amp; Craft Customization Bar</h2>
            <p className="customization-sub">
              Select your preferred dairy profile and small-batch house-made botanical reductions.
            </p>
          </div>
          <span className="customization-note">
            🌱 All syrups made from pure cane &amp; friendly options
          </span>
        </div>

        <div className="customization-grid">
          {/* Plant-based milks */}
          <div className="custom-column">
            <p className="custom-col-title">PLANT-BASED &amp; PREMIUM MILKS</p>
            <p className="custom-col-sub">Standard Milks (no charge average)</p>
            <div className="custom-items">
              <div className="custom-item">
                <span>Maca Ogunna Oat</span><span>Housemade daily</span>
              </div>
              <div className="custom-item">
                <span>Hazel Almond</span><span>+ ₹42</span>
              </div>
              <div className="custom-item">
                <span>Sicilian Pistachio</span><span>+ ₹42</span>
              </div>
              <div className="custom-item">
                <span>Coconut Oat blend</span><span>₹50</span>
              </div>
              <div className="custom-item custom-item--last">
                <span>Full 2% Cream</span><span>+ ₹0</span>
              </div>
            </div>
          </div>

          {/* House botanical reductions */}
          <div className="custom-column">
            <p className="custom-col-title">HOUSE BOTANICAL REDUCTIONS &amp; ENHANCEMENTS</p>
            <p className="custom-col-sub">Single / Shot</p>
            <div className="custom-items">
              <div className="custom-item">
                <span>Madagascar Vanilla</span><span>+ ₹62</span>
              </div>
              <div className="custom-item">
                <span>Spiced Cardamom</span><span>single</span>
              </div>
              <div className="custom-item">
                <span>&nbsp;</span><span>+ ₹70</span>
              </div>
            </div>
          </div>

          {/* Micro-blends */}
          <div className="custom-column">
            <p className="custom-col-title">MICRO-BLEND ENHANCEMENTS</p>
            <p className="custom-col-sub">Single Shot / Shot</p>
            <div className="custom-items">
              <div className="custom-item">
                <span>Single Reserve Élixir</span><span>Single / double</span>
              </div>
              <div className="custom-item">
                <span>&nbsp;</span><span>extraction</span>
              </div>
              <div className="custom-item">
                <span>&nbsp;</span><span>+ ₹83</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOURCING COMMITMENT ──────────────────────────────────────────── */}
      <section className="sourcing-section">
        <div className="sourcing-content">
          <h3>Our Sourcing Commitment</h3>
          <p>
            We work directly with certified smallholder cooperatives across Nariño, Colombia, and Guatemala to ensure long-
            term premiums shared as "trade minimums." Every item on our offering and seasonal menu are ingredients we are
            proud to serve in our community.
          </p>
          <div className="sourcing-badges">
            <span className="sourcing-badge">✦ Organic</span>
            <span className="sourcing-badge">🌾 Gluten Free</span>
            <span className="sourcing-badge">🥛 Dairy Free</span>
          </div>
        </div>
        <button className="sourcing-btn">Reserve Tasting Table →</button>
      </section>

      <Footer />
    </>
  );
}

export default Menu;