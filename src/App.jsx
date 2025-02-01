import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="header">
        <a href="#" className="logo">Hashimnihal</a>
        <nav className="navbar">
          <a href="#" className="active">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="home">
        <div className="home-content">
          <h1> I am Hashimnihal</h1>
          <h3>FullStack Developer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur mollitia fugiat ipsam exercitationem quaerat quo voluptates debitis animi cupiditate voluptate aspernatur vero totam, deserunt voluptatem voluptatum fuga velit omnis. Labore.</p>
          <div className="btn-box">
            <a href="#">Hire me</a>
            <a href="#">Let's talk</a>
          </div>
        </div>

        <div className="home-sci">
          <a href="#"><i className='bx bxl-instagram-alt bx-flip-horizontal'></i></a>
          <a href="#"><i className='bx bxl-gmail bx-flip-horizontal'></i></a>
          <a href="#"><i className='bx bxl-twitter'></i><box-icon></box-icon></a>
        </div>
        <span className="home-imgHover"></span>
      </section>
    </>
  )
}

export default App
