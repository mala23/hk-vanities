import { Component } from 'react'
import Link from 'next/link'
import { slide as Menu  } from 'react-burger-menu'
import { StyledBurger } from './styles'

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '1rem',
    top: '1rem'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    width: '24px',
    display: 'none'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: 'white',
    fontSize: '1.15em',
    margin: '0',
    width: '100vw'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    margin: '5rem 0',
  },
  bmItem: {
    display: 'block',
    width: '100%'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

class Nav extends Component {

  constructor (props) {
    super(props)
    this.state = { menuOpen: false }
  }

	// This keeps your state in sync with the opening/closing of the menu
	// via the default means, e.g. clicking the X, pressing the ESC key etc.
	handleStateChange (state) {
		this.setState({menuOpen: state.isOpen})
	}

	// This can be used to close the menu, e.g. when a user clicks a menu item
	closeMenu () {
		this.setState({menuOpen: false})
	}

	// This can be used to toggle the menu, e.g. when using a custom icon
	// Tip: You probably want to hide either/both default icons if using a custom icon
	// See https://github.com/negomi/react-burger-menu#custom-icons
	toggleMenu () {
		this.setState(state => ({menuOpen: !state.menuOpen}))
	}

    render() {
      return(
        <Menu
          styles={ styles }
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          right
          width={ '100%' }
        >
          <a>
          <Link href="/create">
            <a onClick={() => this.closeMenu()}>Create your poem</a>
          </Link>
          </a>
          <a>
          <Link href="/see">
            <a onClick={() => this.closeMenu()}>See poems</a>
          </Link>
          </a>
          <a>
          <Link href="#">
            <a onClick={() => this.closeMenu()}>Follow</a>
          </Link>
          </a>
        </Menu>
  )}
}

export default Nav
