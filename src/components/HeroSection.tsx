export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-tag">&#x2665; Crafted with love &nbsp;·&nbsp; All Veg</p>
        <h1 className="hero-title">
          STICK<br />
          WITH<br />
          <span>IT.</span>
        </h1>
        <p className="hero-desc">
          Waffles the way they were meant to be — bold, indulgent, and made to share. Choose your shape, pick your sauce, stack your toppings.
        </p>
        <div className="hero-btns">
          <a href="#waffles" className="btn-primary">Explore Menu</a>
          <a href="#story" className="btn-outline">Our Story</a>
        </div>
      </div>
      <div className="hero-right">
        <img src="/images/extracted/image-002.jpg" alt="Nutella Waffle" />
        <div className="hero-right-overlay"></div>
      </div>
    </section>
  )
}
