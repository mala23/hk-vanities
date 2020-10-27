import Link from 'next/link'
import NavStyles from '../styles/NavStyles'

const Nav = () => (
	<NavStyles>
		<Link href="/create">
			<a>Create your poem</a>
		</Link>
		<Link href="/poems">
			<a>Poems</a>
		</Link>
		<Link href="/follow">
			<a>Follow</a>
		</Link>
	</NavStyles>
)

export default Nav
