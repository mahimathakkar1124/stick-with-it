import { Fragment } from 'react'

const DEFAULT_ITEMS = [
  'MAKE YOUR OWN WAFFLES',
  'PLATTER WAFFLES',
  'MINI PANCAKES',
  'GOLDEN SPIRALS',
  'FRENCH FRIES',
  'STICK WAFFLES',
  'POCKET OPEN WAFFLES',
]

type Props = {
  tickerText?: string
}

export default function Ticker({ tickerText }: Props) {
  const items = tickerText
    ? tickerText.split('·').map((s) => s.trim()).filter(Boolean)
    : DEFAULT_ITEMS

  return (
    <div className="ticker">
      <div className="ticker-inner">
        {items.map((item, i) => (
          <Fragment key={`a-${i}`}>
            <span>{item}</span>
            <span>·</span>
          </Fragment>
        ))}
        {items.map((item, i) => (
          <Fragment key={`b-${i}`}>
            <span aria-hidden="true">{item}</span>
            <span aria-hidden="true">·</span>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
