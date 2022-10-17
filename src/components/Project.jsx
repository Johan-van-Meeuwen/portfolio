import React from "react"

export default function Project(props) {
  return (
    <div className="project-card-shadow">
      <div className="project-card">
        <div className="date-badge">
          <p>{props.projectDate}</p>
        </div>
        <img className="project-image" src={props.projectImage} alt="project-image" />
        <div className="project-info">
          <h2 className="project-title">{props.projectTitle}</h2>
          <i className="fa-solid fa-lightbulb"></i>
          <p>{props.projectIdea}</p>
          <i className="fa-solid fa-code"></i>
          <p>{props.projectCode}</p>
          <i className="fa-solid fa-rocket"></i>
          <p>{props.projectDuration}</p>
        </div>
        <a className="project-button" href={props.projectUrl} target="_">Go to site</a>
      </div>
    </div>
  )
}
