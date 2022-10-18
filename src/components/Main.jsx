import Reach from "react"
import headshotImgUrl from '/src/assets/main_headshot.png'

export default function Main() {

  const arrowDown = () => {
    event.target.classList.add('transform-active');
    setTimeout(() => {
      const downArrow = document.getElementById('down-arrow')
      downArrow.classList.remove('transform-active')
    }, 500);
  }

  return (
    <main>
      <div className="main-image-container">
        <img src={headshotImgUrl} alt="johan" className="main-image"/>
      </div>
      <div className="green-blur blur"></div>
      <div className="main-text">
        <h1>Hi, I'm Johan</h1>
        <p>
          I’m a skilled frontend engineer who graduated
          from Le Wagon’s full stack web development
          bootcamp in the spring of 2022.
        </p>
      </div>
      <div className="scroll-button">
        <a href="#projects"><i id="down-arrow" className="fa-solid fa-angle-down" onClick={arrowDown} /></a>
      </div>
      <div className="orange-blur blur"></div>
    </main>
  )
}
