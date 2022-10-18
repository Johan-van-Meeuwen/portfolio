import React from "react"
import MainSkill from "/src/components/MainSkill.jsx"
import OtherSkill from "/src/components/OtherSkill.jsx"
import htmlLogo from "/src/assets/html5.svg"
import cssLogo from "/src/assets/css3.svg"
import jsLogo from "/src/assets/javascript.svg"
import reactLogo from "/src/assets/react.svg"
import railsLogo from "/src/assets/rails.svg"
import rubyLogo from "/src/assets/ruby.svg"
import psqlLogo from "/src/assets/psql.svg"
import sqlLogo from "/src/assets/sql.svg"
import redisLogo from "/src/assets/redis.svg"

export default function SkillSection() {

  // TODO: Access sticky state in MainSkill component to enable sticky colors
  // const [sticky, setSticky] = React.useState(false)

  // const activateStickyColors = () => {
  //   setSticky(prevState => !prevState)
  // }

  return (
    <main>
      <div className="skills-section">
        <h1 id="skills">Skills</h1>
        {/* <button onClick={activateStickyColors}>Sticky colors?</button> */}
        <p>These are the things I enjoy doing the most</p>
        <div className="main-skills">
          <MainSkill
            skillIcon = {htmlLogo}
            skillText = "HTML5"
            skillHoverClass = "html-hover"
          />
          <MainSkill
            skillIcon = {cssLogo}
            skillText = "CSS3"
            skillHoverClass = "css-hover"
          />
          <MainSkill
            skillIcon = {jsLogo}
            skillText = "JS (ES6)"
            skillHoverClass = "js-hover"
          />
          <MainSkill
            skillIcon = {reactLogo}
            skillText = "React.js"
            skillHoverClass = "react-hover"
          />
        </div>
        <p>I also have experience in</p>
        <div className="secondary-skills">
          <OtherSkill
            skillIcon = {railsLogo}
            skillText = "Rails"
            skillHoverClass = "rails-hover"
          />
          <OtherSkill
            skillIcon = {rubyLogo}
            skillText = "Ruby"
            skillHoverClass = "ruby-hover"
          />
          <OtherSkill
            skillIcon = {psqlLogo}
            skillText = "PostgreSQL"
            skillHoverClass = "psql-hover"
          />
          <OtherSkill
            skillIcon = {sqlLogo}
            skillText = "SQL"
            skillHoverClass = "sql-hover"
          />
          <OtherSkill
            skillIcon = {redisLogo}
            skillText = "Redis"
            skillHoverClass = "redis-hover"
          />
        </div>
        <p>... and here are some other useful things I know how to use!</p>
        {/* <div className="tools-skills">
          <OtherSkill />
          <OtherSkill />
          <OtherSkill />
          <OtherSkill />
          <OtherSkill />
          <OtherSkill />
        </div> */}
      </div>
    </main>
  )
}
