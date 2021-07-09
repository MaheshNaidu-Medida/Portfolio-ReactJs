import './index.css'

const projectsData = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/advanced-technologies-img.png',
    name: 'Advanced Technologies',
  },
  {
    id: 1,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/your-moment-is-complete-img.png',
    name: 'Your Moment Is Complete',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/robotics-img.png',
    name: 'Robotics',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-meals-img.png',
    name: 'Happy Meals',
  },
]

const ProjectSection = () => {
  const renderProjectItem = eachProject => {
    const {imageUrl, name} = eachProject
    return (
      <li className="project-card" key={eachProject.id}>
        <img src={imageUrl} className="project-image" alt={name} />
        <p className="project-name">{name}</p>
      </li>
    )
  }

  return (
    <div className="project-container">
      <h1 className="heading">My Work</h1>
      <ul className="projects-list">
        {projectsData.map(eachProject => renderProjectItem(eachProject))}
      </ul>
    </div>
  )
}
export default ProjectSection
