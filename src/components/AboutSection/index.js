import './index.css'

const skillsData = [
  {
    id: 0,
    name: 'HTML',
  },
  {
    id: 1,
    name: 'Java Script',
  },
  {
    id: 2,
    name: 'CSS',
  },
  {
    id: 3,
    name: 'Java',
  },
  {
    id: 4,
    name: 'Python',
  },
  {
    id: 5,
    name: 'React',
  },
  {
    id: 6,
    name: 'Node',
  },

  {
    id: 7,
    name: 'Bootstrap',
  },
]

const educationData = [
  {
    id: 0,
    qualification: 'Graduation',
    qualificationSource: 'B.Tech(Computer Science)',
  },
  {
    id: 1,
    qualification: 'Intermediate',
    qualificationSource: 'St.Ann’s Jr College',
  },
  {
    id: 2,
    qualification: 'High School',
    qualificationSource: 'Kimberley EM School',
  },
]

const AboutSection = () => {
  const renderEducationItem = eachQualification => {
    const {qualification, qualificationSource} = eachQualification
    return (
      <li className="qualification-item" key={eachQualification.id}>
        <img src="" className="checkbox-image" alt={qualification} />
        <div className="qualification-container">
          <h1 className="qualification">{qualification}</h1>
          <p className="qualification-source">{qualificationSource}</p>
        </div>
      </li>
    )
  }
  const renderSkillItem = eachSkill => {
    const {name} = eachSkill
    return (
      <li className="skill-item" key={eachSkill.id}>
        <p className="skill">{name}</p>
      </li>
    )
  }

  return (
    <div className="about-container">
      <div className="description-container">
        <h1 className="heading">About</h1>
        <p className="description">
          I started my journey in the world of computers from a young age, now
          I'm 21 years old, pursuing my Computer Science majors at Santa Clara
          University, USA. Web Development is my center of interest.
        </p>
      </div>
      <div className="skills-container">
        <div>
          <h1 className="skill-type">Education</h1>
          <ul className="education-list">
            {educationData.map(eachQualification =>
              renderEducationItem(eachQualification),
            )}
          </ul>
        </div>
        <div>
          <h1 className="skill-type">Skill</h1>
          <ul className="skill-list">
            {skillsData.map(eachSkill => renderSkillItem(eachSkill))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default AboutSection
