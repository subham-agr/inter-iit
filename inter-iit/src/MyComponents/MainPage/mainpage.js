import React from 'react'
import Skill from '../Skills/skills';
import Resume from '../Resume/resume'
import Otherskill from '../otherskills/otherskills';
// import Navbar from './MyComponents/Navbar/navbar';
import Navbar from '../Navbar/navbar'
import Footer from '../footer/footer';
import './mainpage.css'

function Mainpage() {
  return (
    <div className='mainpage'>
      <Navbar />
      <div className="card3">
        <h1>Welcome!</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat deserunt itaque accusantium, amet commodi veritatis tempora nobis doloribus nostrum laborum, dignissimos natus iusto iure debitis! Nobis voluptates sapiente esse odit quas laborum, quibusdam suscipit!</p>
      </div>
      <div className="skill">
        <h2>Please select your top 3 skills</h2>
        <Skill />
      </div>
      <div className="skill">
      <h2>Add your other skills</h2>
        <Otherskill />
      </div>
      <div className="resume">
        <Resume />
      </div>
      <Footer />
    </div>
  )
}

export default Mainpage
