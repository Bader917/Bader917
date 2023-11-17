import React, { useState } from 'react';
import Header from "../../Components/Header/Header";
import { FaLaptopCode } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from "../../Images/1.jpg";
import image2 from "../../Images/2.jpg";
import image3 from "../../Images/3.jpg";
import image4 from "../../Images/2.png";
import image5 from "../../Images/5.jpg";
import "./style.css";

const PortfilioData = [
  {
    id: 0,
    name: "E-commerce",
    image: image1,
    filtterId: 2,
  },
  {
    id: 1,
    name: "Notes App",
    image: image2,
    filtterId: 2,
  },
  {
    id: 2,
    name: "Supplier Degsin",
    image: image3,
    filtterId: 3,
  },
  {
    id: 3,
    name: "Restaurant Interface",
    image: image4,
    filtterId: 3,
    link: "https://bader917.github.io/res-app/"
  },
  {
    id: 4,
    name: "Shopping Card Degsin",
    image: image5,
    filtterId: 3,
  }
];


const FiltterData = [
  {
    filtterId: 1,
    label: "All"
  },
  {
    filtterId: 2,
    label: "HTML & CSS & JS"
  },
  {
    filtterId: 3,
    label: "React JS"
  },
];


const Portfolio = () => {
  const [filtterValue, SetfiltterValue] = useState(1);
  const [hoverdValue, SetHoverdValue] = useState(null);

  function HandleFilterId(currntId) {
    SetfiltterValue(currntId);
  }

  const filterItme = filtterValue === 1 ? PortfilioData :
    PortfilioData.filter((item) => item.filtterId === filtterValue);

  function HandleHover(index) {
    SetHoverdValue(index);
  }

  return (
    <section id='portfolio' className='portfolio'>
      <Header headerText="My Portfolio" icon={<FaLaptopCode size={40} />} />

      <div className="portfolio-content">
        <ul className='portfolio-content-filtter'>
          {
            FiltterData.map((item) => {
              return (
                <li className={`${item.filtterId === filtterValue ? "active" : ""} fs-5`} onClick={() => HandleFilterId(item.filtterId)} key={item.filtterId}>{item.label}</li>
              )
            })
          }
        </ul>

        <div className="portfolio-content-cards mt-2">
          {
            filterItme.map((item, index) => {
              return (
                <div className="portfolio-content-cards-item"
                  key={item.id}
                  onMouseEnter={() => HandleHover(index)}
                  onMouseLeave={() => HandleHover(null)}
                >
                  <div className="portfolio-content-cards-item-img-wrapper">
                    <a href='/'>
                      <img src={item.image} alt={item.name} />
                    </a>
                  </div>

                  <div className="overly">
                    {
                      index === hoverdValue &&
                      <div className='link-handle'>
                        <p>{item.name}</p>
                        <Button>
                          <Link to={item.link} target='_plunk'>Visit</Link>
                        </Button>
                      </div>
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio;