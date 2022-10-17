import React from "react"
import Project from '/src/components/Project'
import ProjectsBackground from '/src/components/ProjectsBackground'

export default function ProjectSection() {
  return (
    <main>
      <ProjectsBackground />
      <h2 id="projects">Projects</h2>
      <div className="projects-container">
        <Project
          projectDate = "June 2022"
          projectImage = "public/assets/devder_image.png"
          projectTitle = "Devder"
          projectIdea = "Connecting bootcamp students with developers"
          projectCode = "Ruby on Rails, HTML, SCSS & JavaScript (ES6)"
          projectDuration = "2 weeks"
          projectUrl = "http://www.devder.me"
        />
        <Project
          projectDate = "May 2022"
          projectImage = "public/assets/rent-a-mon_image.png"
          projectTitle = "Rent-a-mon"
          projectIdea = "Battle with Pokémon trainers in your area"
          projectCode = "Ruby on Rails, HTML, SCSS & JavaScript (ES6)"
          projectDuration = "1 week"
          projectUrl = "https://rent-a-mon.herokuapp.com/"
        />
      </div>
    </main>
  )
}
