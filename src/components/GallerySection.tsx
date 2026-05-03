import Image from 'next/image'
import { GalleryItem } from '../../sanity/lib/types'

const HARDCODED_GALLERY = [
  { src: '/images/extracted/image-009.jpg', alt: 'Red Velvet Waffle' },
  { src: '/images/extracted/image-010.jpg', alt: 'Chocolate Waffle' },
  { src: '/images/extracted/image-011.jpg', alt: 'Chocolate Factory' },
  { src: '/images/extracted/image-012.jpg', alt: 'Nutella Slice' },
  { src: '/images/extracted/image-013.jpg', alt: 'Churros Chocolate' },
  { src: '/images/extracted/image-014.jpg', alt: 'Pistachio Sticks' },
  { src: '/images/extracted/image-015.jpg', alt: 'Pistachio Pancakes' },
  { src: '/images/extracted/image-016.jpg', alt: 'Biscoff Waffle' },
]

type Props = {
  items?: GalleryItem[] | null
}

export default function GallerySection({ items }: Props) {
  const useSanity = items && items.length > 0

  const images = useSanity
    ? items.map((item) => ({ src: item.imageUrl, alt: item.caption || '' }))
    : HARDCODED_GALLERY

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <div>
          <p className="section-label">From Our Kitchen</p>
          <h2 className="section-title">
            THE GOOD
            <br />
            STUFF
          </h2>
        </div>
        <a
          href="https://instagram.com/stickwithit_in"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            textDecoration: 'none',
          }}
        >
          @stickwithit_in →
        </a>
      </div>
      <div className="gallery-grid">
        {images.map((img, idx) => {
          const isLarge = idx === 0 || idx === 4
          const imgHeight = isLarge ? 420 : 280
          return (
            <div className="gallery-item" key={img.src}>
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={imgHeight}
                style={{ objectFit: 'cover', width: '100%', height: `${imgHeight}px`, display: 'block' }}
              />
              <div className="gallery-item-overlay"></div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
