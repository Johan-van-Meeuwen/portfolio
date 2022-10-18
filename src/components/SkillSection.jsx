import React from "react"
import MainSkill from "/src/components/MainSkill.jsx"
import OtherSkill from "/src/components/OtherSkill.jsx"
import htmlLogo from "/src/assets/html5.svg"
import cssLogo from "/src/assets/css3.svg"
import jsLogo from "/src/assets/javascript.svg"
import reactLogo from "/src/assets/react.svg"

export default function SkillSection() {
  return (
    <main>
      <div className="skills-section">
        <h1 id="skills">Skills</h1>
        <p>These are the things I enjoy doing the most</p>
        <div className="main-skills">
          <MainSkill
            skillIcon = {htmlLogo}
            skillText = "HTML5"
            skillHoverClass = "html-hover-class"
          />
          <MainSkill
            skillIcon = {cssLogo}
            skillText = "CSS3"
            skillHoverClass = "css-hover-class"
          />
          <MainSkill
            skillIcon = {jsLogo}
            skillText = "JS (ES6)"
            skillHoverClass = "js-hover-class"
          />
          <MainSkill
            skillIcon = {reactLogo}
            skillText = "React.js"
            skillHoverClass = "react-hover-class"
          />
        </div>
        <p>I also have experience in</p>
        <div className="secondary-skills">
          <OtherSkill />
          <OtherSkill />
          <OtherSkill />
          <OtherSkill />
          <OtherSkill />
        </div>
        <p>... and here are some other useful things I know how to use!</p>
        <div className="tools-skills">
          <OtherSkill />
          <OtherSkill />
          <OtherSkill />
          <OtherSkill />
          <OtherSkill />
          <OtherSkill />
        </div>
      </div>
    </main>
  )
}
