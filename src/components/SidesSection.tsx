export default function SidesSection() {
  return (
    <section className="sides" id="sides">
      <p className="section-label" style={{ color: 'var(--gold)' }}>Something On The Side</p>
      <h2 className="section-title" style={{ color: 'var(--cream)' }}>
        GOLDEN SPIRALS
        <br />
        <span style={{ color: 'var(--gold)' }}>&amp; FRIES</span>
      </h2>
      <div className="sides-grid">
        {/* Golden Spiral */}
        <div className="side-section">
          <div className="side-section-title">GOLDEN SPIRAL</div>
          <div className="side-section-sub">Dry Crispy (80g) · Saucy (150g)</div>

          <>
              <div className="side-item">
                <span className="side-item-name">Crispy Salted</span>
                <span className="side-item-price">₹130</span>
              </div>
              <div className="side-item">
                <span className="side-item-name">Salt &amp; Pepper</span>
                <span className="side-item-price">₹130</span>
              </div>
              <div className="side-item">
                <span className="side-item-name">Chaat Masala</span>
                <span className="side-item-price">₹130</span>
              </div>
              <div className="side-item">
                <span className="side-item-name">Peri Peri 👍</span>
                <span className="side-item-price">₹150</span>
              </div>
              <div className="side-item">
                <span className="side-item-name">Cheese Cheddar</span>
                <span className="side-item-price">₹150</span>
              </div>
              <div className="side-item">
                <span className="side-item-name">Cheddar Jalapeño</span>
                <span className="side-item-price">₹150</span>
              </div>
              <div className="side-item" style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="side-item-name" style={{ color: 'var(--gold)', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Saucy Spirals from</span>
                <span className="side-item-price">₹170</span>
              </div>
              <div className="side-item">
                <span className="side-item-name">Mayonnaise / Chipotle</span>
                <span className="side-item-price">₹170</span>
              </div>
              <div className="side-item">
                <span className="side-item-name">Cheese Chilly / Thousand Island</span>
                <span className="side-item-price">₹170</span>
              </div>
              <div className="side-item">
                <span className="side-item-name">Sriracha <span className="side-item-spicy">🌶</span></span>
                <span className="side-item-price">₹170</span>
              </div>
              <div className="side-item">
                <span className="side-item-name">Cheese Chipotle / Schezwan</span>
                <span className="side-item-price">₹190</span>
              </div>
            </>
        </div>

        {/* French Fries */}
        <div className="side-section">
          <div className="side-section-title">FRENCH FRIES</div>
          <div className="side-section-sub">Dry (150g) · Saucy (250g)</div>

          <>
              <div className="side-item">
                <span className="side-item-name">Classic Salted</span>
                <span className="side-item-price">₹130</span>
              </div>
              <div className="side-item">
                <span className="side-item-name">Salt &amp; Pepper</span>
                <span className="side-item-price">₹130</span>
              </div>
              <div className="side-item">
                <span className="side-item-name">Chaat Masala</span>
                <span className="side-item-price">₹130</span>
              </div>
              <div className="side-item">
                <span className="side-item-name">Peri Peri 👍</span>
                <span className="side-item-price">₹150</span>
              </div>
              <div className="side-item">
                <span className="side-item-name">Cheese Dry w/ Mayo dip</span>
                <span className="side-item-price">₹170</span>
              </div>
              <div className="side-item">
                <span className="side-item-name">Butter Garlic Fries 👍</span>
                <span className="side-item-price">₹190</span>
              </div>
              <div className="side-item" style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="side-item-name" style={{ color: 'var(--gold)', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Saucy Fries from</span>
                <span className="side-item-price">₹210</span>
              </div>
              <div className="side-item">
                <span className="side-item-name">Cheese Chilly Fries 👍</span>
                <span className="side-item-price">₹210</span>
              </div>
              <div className="side-item">
                <span className="side-item-name">Cheese Jalapeño Fries</span>
                <span className="side-item-price">₹210</span>
              </div>
              <div className="side-item">
                <span className="side-item-name">Cheese Chipotle Fries</span>
                <span className="side-item-price">₹220</span>
              </div>
              <div className="side-item">
                <span className="side-item-name">Cheese Melt Fries 🆕</span>
                <span className="side-item-price">₹250</span>
              </div>
              <div className="side-item">
                <span className="side-item-name">Fire In The Hole 🔥🔥🔥</span>
                <span className="side-item-price">₹250</span>
              </div>
            </>
        </div>
      </div>
    </section>
  )
}
