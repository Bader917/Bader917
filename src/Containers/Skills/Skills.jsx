import React from 'react';
import Header from "../../Components/Header/Header";
import { FaCode } from "react-icons/fa";
import { SkillsData } from "./SkilsData";
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress';
import "./style.css";

const Skills = () => {
  return (
    <section id='skills' className='skills'>
      <Header headerText="My Skills" icon={<FaCode size={40} />} />

      <div className="skills-content-wrapper">
        {
          SkillsData.map((item, index) => {
            return (
              <div key={index} className="skills-content-wrapper-inner-content w-100">
                <Animate
                  play
                  duration={0.7}
                  delay={0.7}
                  start={{
                    transform: "translateX(-200px)"
                  }}
                  end={{
                    transform: "translateX(0)"
                  }}
                >

                  <h3 key={index} className='skills-content-wrapper-inner-content-category-text fs-3'>{item.label}</h3>
                  <div className='Bader'>
                    {
                      item.data.map((item, index) => {
                        return (
                          <AnimateKeyframes
                            play
                            duration={1}
                            keyframes={["opacity: 1", "opacity: 0"]}
                            iterationCount={1}
                            key={index}
                          >
                            <div key={index} className="progress-wrapper">
                              <p className='fs-5'>{item.skillName}</p>
                              <Line                           
                                percent={item.skillPercntage}
                                strokeWidth={2}
                                strokeColor={"var(--blue-theme-main-color)"}
                                trailWidth={2}
                                strokeLinecap='square'
                              />
                            </div>
                          </AnimateKeyframes>
                        )
                      })
                    }
                  </div>
                </Animate>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Skills;