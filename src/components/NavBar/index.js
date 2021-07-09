import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  // state = {menuSelected: 'HOME'}

  onClickNavItem = name => {
    const {onClickNavigation} = this.props
    onClickNavigation(name)
  }

  renderNavButtons = eachItem => {
    const {iconUrl, name} = eachItem
    const {activeNavItem} = this.props
    const menuStyle = activeNavItem === name ? 'select' : ''
    return (
      <li className={`menu-item ${menuStyle}`} key={eachItem.id}>
        <button
          className="nav-button"
          type="button"
          onClick={this.onClickNavItem(name)}
        >
          <img src={iconUrl} className="nav-btn-img" alt={name} />
          <p className="nav-menu-name">{name}</p>
        </button>
      </li>
    )
  }

  render() {
    const {navBarItems} = this.props
    return (
      <nav className="navbar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/portfolio-profile-img.png"
          className="nav-logo"
          alt="profile"
        />
        <div className="nav-bar-menu">
          <ul className="menu">
            {navBarItems.map(eachItem => this.renderNavButtons(eachItem))}
          </ul>
        </div>
      </nav>
    )
  }
}
export default NavBar
