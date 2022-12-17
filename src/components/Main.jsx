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
      <div className="green-blur blur"></div>
      <div className="main-text">
        <div className="main-image-container">
          <img src={headshotImgUrl} alt="johan" className="main-image"/>
        </div>
        <h1>Hi, I'm Johan</h1>
        <p>
          I'm a recent graduate of <strong><a className="main-text-link" href="https://www.lewagon.com/" target="_blank">Le Wagon's</a></strong> full stack web development bootcamp (June 2022). I currently work
          as a customer support engineer at <strong><a className="main-text-link" href="https://www.paddle.com/" target="_blank">Paddle</a></strong>.
        </p>
      </div>
      <div className="scroll-button">
        <a href="#projects"><i id="down-arrow" className="fa-solid fa-angle-down" onClick={arrowDown} /></a>
      </div>
      <div className="orange-blur blur"></div>
    </main>
  )
}
