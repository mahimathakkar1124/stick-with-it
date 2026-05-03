const HARDCODED_PLATTERS = [
  {
    name: 'CHOCOLATE FACTORY',
    price: '₹420',
    desc: 'Chocolate waffle with Belgian dark and milk chocolate drizzle with choco balls and 3 scoops of vanilla ice cream',
    badge: null as string | null,
  },
  {
    name: 'TRIPLE CHOCOLATE DELIGHT',
    price: '₹480',
    desc: 'Chocolate based waffle with Belgian dark, white and milk chocolate drizzle and 3 scoops of vanilla ice cream',
    badge: null as string | null,
  },
  {
    name: 'NUTS OVER NUTELLA',
    price: '₹480',
    desc: 'Chocolate based waffle with Nutella and roasted almonds topped with 3 scoops of vanilla ice cream',
    badge: null as string | null,
  },
  {
    name: 'SINFULLY RED',
    price: '₹430',
    desc: 'Red velvet based waffle with Belgian white chocolate drizzle with brownie crumbs and cream cheese',
    badge: null as string | null,
  },
  {
    name: 'CHECK MATE',
    price: '₹420',
    desc: 'Classic waffle with Belgian dark & white chocolate drizzle topped with dark & white chips and 3 scoops vanilla ice cream',
    badge: null as string | null,
  },
  {
    name: 'NUTELLA STRAWBERRY ❄',
    price: '₹530',
    desc: 'Classic waffle with Nutella and fresh strawberries with whipped cream — the ultimate combination',
    badge: 'Signature',
  },
  {
    name: 'FERRERO ROCHER NUTELLA',
    price: '₹530',
    desc: 'Chocolate waffle topped with Nutella, Ferrero Rocher, roasted hazelnuts and white chocolate with vanilla ice cream',
    badge: null as string | null,
  },
  {
    name: 'LOTUS BISCOFF DELIGHT',
    price: '₹500',
    desc: 'Classic waffle topped with lotus biscoff & white chocolate with white choco chips & vanilla ice cream',
    badge: 'New!',
  },
]

export default function PlattersSection() {
  const platters = HARDCODED_PLATTERS

  return (
    <section className="platters" id="platters">
      <div className="platters-header">
        <div>
          <p className="section-label">Best of Combinations</p>
          <h2 className="section-title">
            PLATTER
            <br />
            <span>WAFFLES</span>
          </h2>
        </div>
        <p style={{ fontSize: '14px', color: 'rgba(250,246,239,0.45)', lineHeight: '1.9', maxWidth: '360px' }}>
          Our signature platters are chef-curated combinations — every waffle thoughtfully topped and ready to impress. All served in a generous platter format.
        </p>
      </div>

      <div className="platters-grid">
        {platters.map((platter) => (
          <div className="platter-item" key={platter.name}>
            {platter.badge && <span className="platter-badge">{platter.badge}</span>}
            <div className="platter-item-header">
              <div className="platter-name">{platter.name}</div>
              <div className="platter-price">{platter.price}</div>
            </div>
            <p className="platter-desc">{platter.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
