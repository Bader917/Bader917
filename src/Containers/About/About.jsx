import React from 'react';
import Header from '../../Components/Header/Header';
import { BsInfoCircleFill } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiAdobephotoshop } from "react-icons/si";
import { Animate } from 'react-simple-animate';
import "./style.css";



const PersonalDetails = [
  {
    label: "Name:",
    value: "Bader Mohammed"
  },
  {
    label: "Age:",
    value: "27 Years Old"
  },
  {
    label: "Adress:",
    value: "Al-minya | Egypt"
  },
  {
    label: "Email:",
    value: "Badermo917@gmail.com"
  },
  {
    label: "Mobile:",
    value: "+20 102 645 0424"
  },
];

const JobSummary =
`
  Beginner front-end developer. I learned html & Css & JS 
  from the Elzero Web School channel on YouTube, then I 
  learned React Js from some sources on YouTube, and
  currently I am trying to learn next Js.
`;

const About = () => {
  return (
    <section id='about' className='about'>
      <Header headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
      <div className='about-content d-flex gap-3 p-4'>
        <div className='about_personal_content w-50'>
          <Animate
            play
            duration={0.7}
            delay={0.7}
            start={{
              transform: "translateX(-900px)"
            }}
            end={{
              transform: "translateX(0)"
            }}
          >
            <h3 className='fs-2 mb-2'>Front End Developer</h3>
            <p className='pb-2 fs-4 ms-2'>{JobSummary}</p>
          </Animate>

          <Animate
            play
            duration={0.7}
            delay={0.7}
            start={{
              transform: "translateX(-500px)"
            }}
            end={{
              transform: "translateX(0)"
            }}
          >
            <h3 className='fs-2 pt-3'>Personal Information</h3>
            <ul className='p-0 ms-2'>
              {
                PersonalDetails.map((item, index) => {
                  return (
                    <li key={index} className='d-flex align-items-center w-100 text-right'>
                      <span className='title fs-5 me-4'>{item.label}</span>
                      <span className='value fs-5 ms-2 w-50'>{item.value}</span>
                    </li>
                  )
                })
              }
            </ul>
          </Animate>
        </div>
        <div className='about_services_content w-50 d-flex align-items-center justify-content-center'>
          <Animate
            play
            duration={0.7}
            delay={0.7}
            start={{
              transform: "translateX(500px)"
            }}
            end={{
              transform: "translateX(0)"
            }}
          >

            <div className='about_services_content_inner_content'>
              <div>
                <AiFillHtml5 size={50} color='var(--blue-theme-main-color)' />
              </div>
              <div>
                <FaBootstrap size={50} color='var(--blue-theme-main-color)' />
              </div>
              <div>
                <FaCss3Alt size={50} color='var(--blue-theme-main-color)' />
              </div>
              <div>
                <FaReact size={50} color='var(--blue-theme-main-color)' />
              </div>
              <div>
                <BiLogoJavascript size={50} color='var(--blue-theme-main-color)' />
              </div>
              <div>
                <SiAdobephotoshop size={40} color='var(--blue-theme-main-color)' />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  )
}

export default About;