import React from 'react';
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "./style.css";

const Home = () => {

  const navigate = useNavigate();

  const HandleNavigateContactMe = () => {
    navigate("/contact")
  }
  return (
    <section id='home' className='home d-flex align-items-center justify-content-center flex-column'>
      <div className='home-text-wrapper d-flex align-items-center justify-content-center'>
        <h2>
          Hello I'm Bader .
          <br />
          Front End Developer
        </h2>
      </div>
      <div className='home-contact-me d-flex align-items-center justify-content-center'>
        <Button className='m-2' onClick={HandleNavigateContactMe} >Contact Me</Button>
        <Button className='m-2'>
          <a href="https://www.google.com/" target='_blank' rel="noreferrer">Download CV</a>
        </Button>
      </div>
    </section>
  )
}

export default Home;