import React from 'react';
import Header from "../../Components/Header/Header";
import { FaFileCode } from "react-icons/fa6";
import "./style.css";

const Resume = () => {
  return (
    <section id='resume' className='resume'>
    <Header headerText="Resume" icon={<FaFileCode size={40}/>} />

    <div className="timeline p-4 w-75">
      <p className='fs-4'>
        A beginning front-end developer. I have never worked in a company before.
        I am currently seeking to learn on my own and gain experience by working online.
      </p>
    </div>
  </section>
  )
}

export default Resume;