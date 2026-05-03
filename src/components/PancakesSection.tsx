import Image from 'next/image'

const HARDCODED_PANCAKES = [
  {
    name: 'CLASSIC MAPLE',
    price: '₹170 / ₹210',
    desc: 'Authentic American style with butter & maple syrup',
  },
  {
    name: 'TRIPLE CHOCOLATE',
    price: '₹240 / ₹300',
    desc: 'Belgian White, Milk & Dark drizzle',
  },
  {
    name: 'NUTS OVER NUTELLA',
    price: '₹270 / ₹330',
    desc: 'Nutella & roasted almonds',
  },
  {
    name: 'KITKAT BREAK',
    price: '₹210 / ₹260',
    desc: 'Belgian Milk chocolate & KitKat crush',
  },
  {
    name: 'LOTUS BISCOFF',
    price: '₹250 / ₹300',
    desc: 'Biscoff spread with crumbs & cream cheese',
  },
  {
    name: 'RED CARPET',
    price: '₹230 / ₹280',
    desc: 'Red Velvet pancakes with white chocolate cream cheese',
  },
  {
    name: 'NUTELLA STRAWBERRY',
    price: '₹290 / ₹330',
    desc: 'Nutella & fresh strawberries',
  },
  {
    name: 'VERRY BERRY',
    price: '₹210 / ₹250',
    desc: 'Blueberry & cream cheese',
  },
]

export default function PancakesSection() {
  const pancakes = HARDCODED_PANCAKES

  return (
    <section className="pancakes" id="pancakes">
      <p className="section-label">Best of Its Kind</p>
      <h2 className="section-title">
        MINI
        <br />
        PANCAKES
      </h2>
      <div className="pancake-grid">
        <div className="pancake-visual">
          <Image
            src="/images/extracted/image-017.jpg"
            alt="Mini Pancakes"
            width={600}
            height={500}
            style={{ height: '500px', width: '100%', objectFit: 'cover' }}
          />
          <div className="accent-box">
            8pc
            <br />
            /12pc
          </div>
        </div>
        <div>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.9', marginBottom: '36px' }}>
            Bite-sized bliss. Our mini pancakes come in 8 or 12 piece servings, loaded with your favourite flavour combinations. Perfect to share — or not.
          </p>
          <div className="pancake-items">
            {pancakes.map((item) => (
              <div className="pancake-card" key={item.name}>
                <div className="pancake-card-name">{item.name}</div>
                <div className="pancake-card-price">{item.price}</div>
                <div className="pancake-card-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
