import Image from 'next/image'
import { SiteSettings } from '../../sanity/lib/types'

type Props = {
  settings?: SiteSettings | null
  menuPdfUrl?: string
}

export default function Footer({ settings, menuPdfUrl }: Props) {
  const address = settings?.address || 'Urban Chowk, Rajpath Rangoli Rd,\nThaltej, Ahmedabad, Gujarat 380058'
  const mapsUrl = settings?.mapsUrl || 'https://maps.google.com/?q=Urban+Chowk,+Rajpath+Rangoli+Rd,+Thaltej,+Ahmedabad,+Gujarat+380058'
  const instagramUrl = settings?.instagramUrl || 'https://instagram.com/stickwithit.in'
  const instagramHandle = settings?.instagramHandle
    ? `@${settings.instagramHandle}`
    : '@stickwithit.in'
  const zomatoUrl = settings?.zomatoUrl || 'https://zomato.onelink.me/xqzv/szf2yger'
  const phone = settings?.phone || '+91 78747 77086'
  const openingHours = settings?.openingHours || 'Open Daily: 7:00 PM – 12:30 AM'

  return (
    <footer>
      <div className="footer-top">
        {/* Column 1: Brand */}
        <div className="footer-brand">
          <Image
            src="/images/extracted/image-022.png"
            alt="Stick With It"
            width={120}
            height={40}
            style={{ objectFit: 'contain', width: '120px', height: '40px' }}
          />
          <p>Waffles your way — choose your shape, sauce, and toppings. All vegetarian. Made with love.</p>
          <div className="footer-contact-item" style={{ marginTop: '16px' }}>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '13px', whiteSpace: 'pre-line' }}
            >
              📍 {address}
            </a>
          </div>
          <div className="footer-contact-item" style={{ marginTop: '8px' }}>
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '13px' }}
            >
              📞 {phone}
            </a>
          </div>
          <div className="footer-contact-item" style={{ marginTop: '12px' }}>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}
            >
              {instagramHandle} →
            </a>
          </div>
        </div>

        {/* Column 2: Navigate */}
        <div>
          <p className="footer-col-title">Navigate</p>
          <ul className="footer-links">
            <li><a href="#story">Our Story</a></li>
            <li><a href="#waffles">Make Your Waffle</a></li>
            <li><a href="#platters">Platter Waffles</a></li>
            <li><a href="#pancakes">Mini Pancakes</a></li>
            <li><a href="#sides">Spirals &amp; Fries</a></li>
          </ul>
        </div>

        {/* Column 3: Connect + PDF button */}
        <div>
          <p className="footer-col-title">Connect</p>
          <ul className="footer-links">
            <li><a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href={zomatoUrl} target="_blank" rel="noopener noreferrer">Zomato</a></li>
          </ul>
          <div style={{ marginTop: '24px' }}>
            {menuPdfUrl ? (
              <a
                href={menuPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pdf"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(250,246,239,0.2)',
                  color: 'var(--cream)',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  padding: '10px 20px',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                View Menu PDF
              </a>
            ) : (
              <button
                className="btn-pdf"
                disabled
                style={{
                  opacity: 0.5,
                  cursor: 'not-allowed',
                  background: 'transparent',
                  border: '1px solid rgba(250,246,239,0.2)',
                  color: 'var(--cream)',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  padding: '10px 20px',
                }}
              >
                View Menu PDF
              </button>
            )}
          </div>
        </div>

        {/* Column 4: Info */}
        <div>
          <p className="footer-col-title">Info</p>
          <div className="footer-contact-item">
            All prices inclusive of GST
            <br />
            GSTIN: 24AFAFS5835E1Z7
          </div>
          <div className="footer-contact-item" style={{ marginTop: '12px' }}>
            {openingHours}
          </div>
          <div className="footer-contact-item">100% Vegetarian 🟢</div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Stick With It. All rights reserved.</p>
        <span>Made with ♥</span>
      </div>
    </footer>
  )
}
