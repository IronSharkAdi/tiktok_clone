// 404.js
import Link from 'next/link'

export default function FourOhFour() {
  return(
  <div className="four">
  <h1 className="four_text">Coming soon</h1>
    <Link href="/">
      <a >
        Go back home
      </a>
    </Link>
  </div>
  )
}