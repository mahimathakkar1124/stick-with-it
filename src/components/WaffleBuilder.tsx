'use client'

import Image from 'next/image'
import { useState } from 'react'
import { WaffleOption } from '../../sanity/lib/types'

interface Selection {
  shape: string
  base: string
  sauce: string
  toppings: string[]
  extras: string[]
}

const DEFAULT_SHAPES = [
  { label: 'Stick Waffle' },
  { label: 'Pocket Open Waffle' },
]

const DEFAULT_BASES = [
  { label: 'Classic', price: '₹80' },
  { label: 'Chocolate', price: '₹90' },
  { label: 'Dark Chocolate', price: '₹100' },
  { label: 'Red Velvet', price: '₹100' },
]

const DEFAULT_SAUCES = [
  { label: 'Maple Syrup', price: '₹90' },
  { label: 'Belgian Milk Chocolate', price: '₹90' },
  { label: 'Belgian Dark Chocolate', price: '₹90' },
  { label: 'Belgian White Chocolate', price: '₹90' },
  { label: 'Nutella ♥', price: '₹110' },
  { label: 'Pistachio', tag: 'NEW', price: '₹110' },
  { label: 'Nutella & White', price: '₹160' },
  { label: 'Nutella & Dark', price: '₹160' },
  { label: 'Lotus Biscoff ♥', price: '₹110' },
  { label: 'Choco Butterscotch', price: '₹90' },
  { label: 'Cookie & Cream', price: '₹90' },
  { label: 'Blueberry Cream Cheese', price: '₹90' },
  { label: 'Strawberry Cream Cheese', price: '₹90' },
  { label: 'Mixed Berry Cream Cheese', tag: 'NEW', price: '₹90' },
  { label: 'Choco Fudge', price: '₹90' },
  { label: 'Dark & White Chocolate', price: '₹130' },
  { label: 'Dark & Milk Chocolate ♥', price: '₹130' },
  { label: 'Milk & White Chocolate', price: '₹130' },
  { label: 'White & Fudge', price: '₹130' },
  { label: 'White & Blueberry ♥', price: '₹130' },
  { label: 'Dark & Butterscotch', price: '₹130' },
  { label: 'Triple Chocolate', price: '₹150' },
]

const DEFAULT_TOPPINGS = [
  { label: 'Rainbow Sprinkles', price: '₹20' },
  { label: 'Kitkat Crush ♥', price: '₹50' },
  { label: 'Brownie Crumbs ♥', price: '₹50' },
  { label: 'Dark Choco Chips', price: '₹30' },
  { label: 'White Choco Chips', price: '₹30' },
  { label: 'Dark & White Chips', price: '₹30' },
  { label: 'Oreo Bites', price: '₹30' },
  { label: 'Choco Balls', price: '₹30' },
  { label: 'Cadbury Gems', price: '₹30' },
  { label: 'Roasted Almonds ♥', price: '₹50' },
  { label: 'Roasted Walnuts', price: '₹40' },
  { label: 'Roasted Hazelnuts', price: '₹50' },
  { label: 'Fresh Strawberries (Seasonal) ♥', price: '₹60' },
  { label: 'Lotus Biscoff Crumbs', price: '₹40' },
  { label: 'Ferrero Rocher', price: '₹80' },
  { label: 'Fresh Banana', tag: 'NEW', price: '₹30' },
  { label: 'Pistachio Crumbs', tag: 'NEW', price: '₹50' },
  { label: 'Fresh Mangoes (Seasonal) ♥', price: '₹70' },
]

const DEFAULT_EXTRAS = [
  { label: 'Whipped Cream', price: '₹30' },
  { label: 'Icing Sugar', price: '' },
  { label: 'Cinnamon Powder', price: '' },
  { label: 'Vanilla Ice Cream ♥', price: '₹40' },
  { label: 'Cream Cheese', price: '₹40' },
  { label: 'Chocolate Ice Cream', price: '₹50' },
]

type Props = {
  waffleOptions?: WaffleOption[] | null
  zomatoUrl?: string
}

export default function WaffleBuilder({ waffleOptions }: Props) {
  const [selection, setSelection] = useState<Selection>({
    shape: '',
    base: '',
    sauce: '',
    toppings: [],
    extras: [],
  })

  const hasOptions = waffleOptions && waffleOptions.length > 0

  const shapes = hasOptions
    ? waffleOptions.filter((o) => o.step === 'shape').map((o) => ({ label: o.name, imageUrl: o.imageUrl }))
    : DEFAULT_SHAPES.map((s) => ({ ...s, imageUrl: undefined }))

  const bases = hasOptions
    ? waffleOptions.filter((o) => o.step === 'base').map((o) => ({
        label: o.name,
        price: o.price !== undefined ? `₹${o.price}` : '',
        imageUrl: o.imageUrl,
      }))
    : DEFAULT_BASES.map((b) => ({ ...b, imageUrl: undefined }))

  const sauces = hasOptions
    ? waffleOptions.filter((o) => o.step === 'sauce').map((o) => ({
        label: o.name,
        price: o.price !== undefined ? `₹${o.price}` : '',
        tag: undefined as string | undefined,
        imageUrl: o.imageUrl,
      }))
    : DEFAULT_SAUCES.map((s) => ({ ...s, imageUrl: undefined }))

  const toppings = hasOptions
    ? waffleOptions.filter((o) => o.step === 'topping').map((o) => ({
        label: o.name,
        price: o.price !== undefined ? `₹${o.price}` : '',
        tag: undefined as string | undefined,
      }))
    : DEFAULT_TOPPINGS

  const extras = hasOptions
    ? waffleOptions.filter((o) => o.step === 'extra').map((o) => ({
        label: o.name,
        price: o.price !== undefined ? `₹${o.price}` : '',
        tag: undefined as string | undefined,
      }))
    : DEFAULT_EXTRAS

  // First image from each step's options, or fallback
  const shapeImg = shapes[0]?.imageUrl || '/images/extracted/image-006.jpg'
  const baseImg = bases[0]?.imageUrl || '/images/extracted/image-007.jpg'
  const sauceImg = sauces[0]?.imageUrl || '/images/extracted/image-008.jpg'

  function toggleTopping(label: string) {
    setSelection((s) => ({
      ...s,
      toppings: s.toppings.includes(label)
        ? s.toppings.filter((t) => t !== label)
        : [...s.toppings, label],
    }))
  }

  function toggleExtra(label: string) {
    setSelection((s) => ({
      ...s,
      extras: s.extras.includes(label)
        ? s.extras.filter((e) => e !== label)
        : [...s.extras, label],
    }))
  }

  const hasSummary = selection.shape && selection.base && selection.sauce

  return (
    <section className="waffle-builder" id="waffles">
      <div className="builder-header">
        <div>
          <p className="section-label">Make Your Own</p>
          <h2 className="section-title">
            BUILD YOUR
            <br />
            PERFECT WAFFLE
          </h2>
        </div>
        <p style={{ maxWidth: '320px', fontSize: '14px', color: '#777', lineHeight: '1.8' }}>
          Start with a shape, pick a base, load up on sauce, then go wild with toppings. Prices
          start from ₹80.
        </p>
      </div>

      {/* 4 cards side by side — Shape, Base, Sauce, Toppings */}
      <div className="builder-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>

        {/* Shape */}
        <div className="builder-card">
          <Image
            src={shapeImg}
            alt="Choose a Shape"
            width={600}
            height={280}
            priority
            style={{ objectFit: 'cover', width: '100%', height: '280px', display: 'block' }}
          />
          <div className="builder-card-content">
            <p className="builder-card-step">Step 01</p>
            <h3 className="builder-card-title">CHOOSE A SHAPE</h3>
            <p className="builder-card-desc">
              Two iconic formats — the fun Stick Waffle or the shareable Pocket Open Waffle.
            </p>
            <div className="tag-list">
              {shapes.map((s) => (
                <span
                  key={s.label}
                  className={`tag${selection.shape === s.label ? ' highlight' : ''}`}
                  role="button"
                  tabIndex={0}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelection((sel) => ({ ...sel, shape: s.label }))}
                  onKeyDown={(e) =>
                    (e.key === 'Enter' || e.key === ' ') &&
                    setSelection((sel) => ({ ...sel, shape: s.label }))
                  }
                >
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Base */}
        <div className="builder-card">
          <Image
            src={baseImg}
            alt="Choose a Base"
            width={600}
            height={280}
            style={{ objectFit: 'cover', width: '100%', height: '280px', display: 'block' }}
          />
          <div className="builder-card-content">
            <p className="builder-card-step">Step 02</p>
            <h3 className="builder-card-title">CHOOSE A BASE</h3>
            <p className="builder-card-desc">
              Classic, Chocolate, Dark Chocolate, or Red Velvet. Four characters, each more
              delicious than the last.
            </p>
            <div className="tag-list">
              {bases.map((b) => (
                <span
                  key={b.label}
                  className={`tag${selection.base === b.label ? ' highlight' : ''}`}
                  role="button"
                  tabIndex={0}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelection((sel) => ({ ...sel, base: b.label }))}
                  onKeyDown={(e) =>
                    (e.key === 'Enter' || e.key === ' ') &&
                    setSelection((sel) => ({ ...sel, base: b.label }))
                  }
                >
                  {b.label} {b.price}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sauce */}
        <div className="builder-card">
          <Image
            src={sauceImg}
            alt="Pick a Sauce"
            width={600}
            height={280}
            priority
            style={{ objectFit: 'cover', width: '100%', height: '280px', display: 'block' }}
          />
          <div className="builder-card-content">
            <p className="builder-card-step">Step 03</p>
            <h3 className="builder-card-title">PICK A SAUCE</h3>
            <p className="builder-card-desc">
              Over 20 sauces from Belgian Milk Chocolate to Pistachio, Lotus Biscoff to Triple
              Chocolate. ₹90–₹160.
            </p>
            <div className="tag-list">
              {sauces.map((s) => (
                <span
                  key={s.label}
                  className={`tag${selection.sauce === s.label ? ' highlight' : ''}`}
                  role="button"
                  tabIndex={0}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelection((sel) => ({ ...sel, sauce: s.label }))}
                  onKeyDown={(e) =>
                    (e.key === 'Enter' || e.key === ' ') &&
                    setSelection((sel) => ({ ...sel, sauce: s.label }))
                  }
                >
                  {s.tag && (
                    <em style={{ fontStyle: 'normal', color: 'var(--gold)', marginRight: '4px' }}>
                      {s.tag}{' '}
                    </em>
                  )}
                  {s.label} {s.price}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Toppings + Extras */}
        <div className="builder-card">
          <div className="builder-card-content">
            <p className="builder-card-step">Step 04</p>
            <h3 className="builder-card-title">ADD TOPPINGS</h3>
            <p className="builder-card-desc">Pick as many as you like.</p>
            <div className="tag-list">
              {toppings.map((t) => (
                <span
                  key={t.label}
                  className={`tag${selection.toppings.includes(t.label) ? ' highlight' : ''}`}
                  role="button"
                  tabIndex={0}
                  style={{ cursor: 'pointer' }}
                  onClick={() => toggleTopping(t.label)}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleTopping(t.label)}
                >
                  {t.tag && <em style={{ fontStyle: 'normal', color: 'var(--gold)', marginRight: '4px' }}>{t.tag} </em>}
                  {t.label}{t.price ? ` ${t.price}` : ''}
                </span>
              ))}
            </div>
            <h3 className="builder-card-title" style={{ marginTop: '28px', marginBottom: '8px' }}>EXTRAAAAAAS</h3>
            <div className="tag-list">
              {extras.map((e) => (
                <span
                  key={e.label}
                  className={`tag${selection.extras.includes(e.label) ? ' highlight' : ''}`}
                  role="button"
                  tabIndex={0}
                  style={{ cursor: 'pointer' }}
                  onClick={() => toggleExtra(e.label)}
                  onKeyDown={(ev) => (ev.key === 'Enter' || ev.key === ' ') && toggleExtra(e.label)}
                >
                  {e.label}{e.price ? ` ${e.price}` : ''}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Summary */}
      {hasSummary && (
        <div className="builder-summary-bar builder-step-content">
          <div className="builder-summary-inner">
            <p style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>
              Your Waffle
            </p>
            <div className="builder-summary-fields">
              <span><strong>{selection.shape}</strong></span>
              <span className="builder-summary-sep">·</span>
              <span><strong>{selection.base}</strong> base</span>
              <span className="builder-summary-sep">·</span>
              <span><strong>{selection.sauce}</strong> sauce</span>
              {selection.toppings.length > 0 && (
                <>
                  <span className="builder-summary-sep">·</span>
                  <span>{selection.toppings.join(', ')}</span>
                </>
              )}
              {selection.extras.length > 0 && (
                <>
                  <span className="builder-summary-sep">·</span>
                  <span>{selection.extras.join(', ')}</span>
                </>
              )}
            </div>
          </div>
          <button
            className="builder-nav-btn"
            onClick={() => setSelection({ shape: '', base: '', sauce: '', toppings: [], extras: [] })}
          >
            Start Over
          </button>
        </div>
      )}
    </section>
  )
}
