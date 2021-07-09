import {Component} from 'react'
import NavBar from '../NavBar'
import SocialMediaSection from '../SocialMediaSection'
import HomeSection from '../HomeSection'
import AboutSection from '../AboutSection'
import ContactSection from '../ContactSection'
import ProjectsSection from '../ProjectsSection'
import './index.css'

const navBarItems = [
  {
    id: 0,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/home-img.png',
    name: 'HOME',
  },
  {
    id: 1,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/about-img.png',
    name: 'ABOUT',
  },
  {
    id: 2,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/projects-img.png',
    name: 'PROJECTS',
  },
  {
    id: 3,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/person-img.png',
    name: 'CONTACT',
  },
]
const navigateToOptions = {
  home: 'HOME',
  about: 'ABOUT',
  contact: 'CONTACT',
  projects: 'PROJECTS',
}
class Portfolio extends Component {
  state = {navigateTo: navBarItems[0].name}

  onClickNavigation = name => {
    this.setState({navigateTo: name})
  }

  renderPageSection = () => {
    const {navigateTo} = this.state

    switch (navigateTo) {
      //   case navigateToOptions.home:
      //     return <HomeSection />
      case navigateToOptions.about:
        return <AboutSection />
      case navigateToOptions.contact:
        return <ContactSection />
      case navigateToOptions.products:
        return <ProjectsSection />
      default:
        return <HomeSection />
    }
  }

  render() {
    const {navigateTo} = this.state
    return (
      <div className="portfolio-container">
        <NavBar
          navBarItems={navBarItems}
          activeNavItem={navigateTo}
          onClickNavigation={this.onClickNavigation}
        />
        <div className="content-container">
          <div>{this.renderPageSection()}</div>
          <SocialMediaSection />
        </div>
      </div>
    )
  }
}
export default Portfolio
