import Link from 'next/link'

const Nav = () => (
  <nav>
    <Link href="/create">
      <a>Create your poem</a>
    </Link>
    <Link href="/Poems">
      <a>Poems</a>
    </Link>
    <Link href="#">
      <a>Follow</a>
    </Link>
  </nav>
)

export default Nav
