import React from 'react';
import Header from "../../Components/Header/Header";
import { FaIdBadge } from "react-icons/fa";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import "./style.css";


const Contact = () => {
  return (
    <section id='contact-me' className='contact-me'>
      <Header headerText="Contact Me" icon={<FaIdBadge size={40} />} />

      <div className='contact'>

          <div className="contact-title">
            <h3>LET'S TALK</h3>
          </div>

        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder='Your Message' />
          </Form.Group>
        </Form>

          <div className="send-message">
            <Button>
              <Link>Send</Link>
            </Button>
          </div>

          <div className="social-icons d-flex align-items-center justify-content-center pt-5">
            <Link to={"https://www.facebook.com/Sinbadr917"} target='_plunk'>
              <BiLogoFacebookSquare className='me-3 ms-3' size={45} color='var(--blue-theme-main-color)' />
            </Link>
            <Link>
              <FaInstagramSquare className='me-3 ms-3' size={40} color='var(--blue-theme-main-color)' />
            </Link>
            <Link>
              <FaTwitterSquare className='me-3 ms-3' size={40} color='var(--blue-theme-main-color)' />
            </Link>
          </div>

          <div className="copy-right mt-5 mb-3">
            <p>© 2023. Bader Mohammed. All rights reserved.</p>
          </div>
          
      </div>
    </section>
  )
}

export default Contact;