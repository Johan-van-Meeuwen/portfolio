import React from "react"
// import SkillSection from "/src/components/SkillSection.jsx";

export default function MainSkill(props) {

  const [isHighlighted, setIsHighlighted] = React.useState(false)

  const changeColor = () => {
    setIsHighlighted(prevState => !prevState)
  }

  return (
    <div className="main-skill-card" onMouseEnter={changeColor} onMouseLeave={changeColor}>
      <img className={`${isHighlighted ? `${props.skillHoverClass}` : ""}`} src={props.skillIcon} alt="skill-icon" />
      <h3 className={`${isHighlighted ? `${props.skillHoverClass}` : ""}`}>{props.skillText}</h3>
    </div>
  )
}
