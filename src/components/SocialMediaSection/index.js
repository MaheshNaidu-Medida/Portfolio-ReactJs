const socialMediaAppsData = [
  {
    id: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-logo-img.png',
    name: 'linkedIn',
    siteUrl: 'https://www.linkedin.com/',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/reddit-logo-img.png',
    name: 'reddit',
    siteUrl: 'https://www.reddit.com/',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-logo-img.png',
    name: 'instagram',
    siteUrl: 'https://www.instagram.com/',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-logo-img.png',
    name: 'facebook',
    siteUrl: 'https://www.facebook.com/',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/pintrest-logo-img.png',
    name: 'pinterest',
    siteUrl: 'https://www.pinterest.com/',
  },
]

const SocialMediaSection = () => {
  const renderSocialMediaApp = eachApp => {
    const {imageUrl, name, siteUrl} = eachApp

    return (
      <li key={eachApp.id}>
        <a className="app-item" href={siteUrl}>
          <img src={imageUrl} className="app-image" alt={name} />
        </a>
      </li>
    )
  }

  return (
    <div className="social-media-container">
      <ul className="apps-list">
        {socialMediaAppsData.map(eachApp => renderSocialMediaApp(eachApp))}
      </ul>
    </div>
  )
}
export default SocialMediaSection
