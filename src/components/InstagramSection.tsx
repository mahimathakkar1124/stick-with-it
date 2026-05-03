import Image from 'next/image'

const INSTA_IMAGES = [
  { src: '/images/extracted/image-018.jpg', alt: '' },
  { src: '/images/extracted/image-019.jpg', alt: '' },
  { src: '/images/extracted/image-020.jpg', alt: '' },
  { src: '/images/extracted/image-021.jpg', alt: '' },
]

type Props = {
  instagramUrl?: string
  instagramHandle?: string
}

export default function InstagramSection({ instagramUrl, instagramHandle }: Props) {
  const url = instagramUrl || 'https://instagram.com/stickwithit.in'
  const handle = instagramHandle ? `@${instagramHandle}` : '@stickwithit.in'

  return (
    <section className="instagram" id="ig">
      <p className="section-label" style={{ textAlign: 'center' }}>Follow Our Journey</p>
      <div className="instagram-handle">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {handle}
        </a>
      </div>
      <p>Tag us in your waffles for a chance to be featured</p>
      <div className="insta-grid">
        {INSTA_IMAGES.map((img, i) => (
          <div className="insta-item" key={img.src}>
            <Image
              src={img.src}
              alt={`Stick With It Instagram post ${i + 1}`}
              width={400}
              height={400}
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
