import { Component } from 'react'
import Link from 'next/link'
import { slide as Menu  } from 'react-burger-menu'

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    width: '100%'
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
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

class Nav extends Component {
    showSettings (event) {
      event.preventDefault();
    }

    render() {
      return(
        <Menu styles={ styles }>
          <Link href="/create">
            <a>Create your poem</a>
          </Link>
          <Link href="/see">
            <a>See poems</a>
          </Link>
          <Link href="#">
            <a>Follow</a>
          </Link>
          <a onClick={ this.showSettings  } className="menu-item--small" href="">Settings</a>
        </Menu>
  )}
}

export default Nav
