type Props = {
  zomatoUrl?: string
}

export default function Navbar({ zomatoUrl }: Props) {
  const href = zomatoUrl || 'https://zomato.onelink.me/xqzv/szf2yger'

  return (
    <nav>
      <div className="nav-logo">
        <img src="/images/extracted/image-001.png" alt="Stick With It" />
      </div>
      <ul className="nav-links">
        <li><a href="#story">Our Story</a></li>
        <li><a href="#waffles">Waffles</a></li>
        <li><a href="#pancakes">Pancakes</a></li>
        <li><a href="#sides">Sides</a></li>
        <li>
          <a
            href={href}
            className="nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Now
          </a>
        </li>
      </ul>
    </nav>
  )
}
