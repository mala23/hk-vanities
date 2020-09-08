import Link from 'next/link'

const Nav = () => (
	<div>
		<Link href="/">
			<a>Home</a>
		</Link>
		<Link href="/plates">
			<a>Plates</a>
		</Link>
	</div>
)

export default Nav
