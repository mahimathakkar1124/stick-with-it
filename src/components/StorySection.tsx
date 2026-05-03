import Image from 'next/image'
import { StoryData } from '../../sanity/lib/types'

type Props = {
  story?: StoryData | null
}

export default function StorySection({ story }: Props) {
  const image1Url = story?.image1Url || '/images/extracted/image-003.jpg'
  const image2Url = story?.image2Url || '/images/extracted/image-004.jpg'
  const image3Url = story?.image3Url || '/images/extracted/image-005.jpg'
  const heading = story?.heading || 'BORN TO\nINDULGE'
  const body1 =
    story?.body1 ||
    'Stick With It is your neighbourhood waffle destination — where every order is built from scratch, your way. From classic Belgian bases to bold red velvet, layered with your choice of over 20 sauces and 20 toppings, no two waffles are the same.'
  const body2 =
    story?.body2 ||
    'We believe in quality you can taste: Belgian chocolate, real Nutella, Lotus Biscoff, fresh seasonal fruits, and handcrafted whipped cream — every single time.'

  const [headingLine1, headingLine2] = heading.includes('\n')
    ? heading.split('\n')
    : [heading, '']

  return (
    <section className="story" id="story">
      <div className="story-images" style={{ overflow: 'hidden' }}>
        <Image
          className="tall"
          src={image1Url}
          alt="Biscoff Waffle"
          width={400}
          height={643}
          style={{ objectFit: 'cover', width: '100%', height: '643px' }}
        />
        <Image
          src={image2Url}
          alt="Pistachio Sticks"
          width={400}
          height={320}
          style={{ objectFit: 'cover', width: '100%', height: '320px' }}
        />
        <Image
          src={image3Url}
          alt="Pistachio Pancakes"
          width={400}
          height={320}
          style={{ objectFit: 'cover', width: '100%', height: '320px' }}
        />
      </div>
      <div className="story-content">
        <p className="section-label">Who We Are</p>
        <h2 className="section-title">
          {headingLine1}
          {headingLine2 && (
            <>
              <br />
              {headingLine2}
            </>
          )}
        </h2>
        <p className="section-body">{body1}</p>
        <p className="section-body">{body2}</p>
        <div className="stats">
          <div>
            <div className="stat-num">20+</div>
            <div className="stat-label">Sauces</div>
          </div>
          <div>
            <div className="stat-num">20+</div>
            <div className="stat-label">Toppings</div>
          </div>
          <div>
            <div className="stat-num">∞</div>
            <div className="stat-label">Combinations</div>
          </div>
        </div>
      </div>
    </section>
  )
}
