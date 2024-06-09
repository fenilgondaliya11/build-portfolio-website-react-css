import { useEffect, useState } from "react";
import { FaLinkedin, FaSkype, FaEnvelope } from 'react-icons/fa';
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description: "The most modern and high-quality design made at a professional level."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level."
  },
  {
    icon: "/images/icon-app.svg",
    title: "frontend development",
    description: "Professional development of frontend applications at the professional level."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Photography",
    description: "I make high-quality photos of any category at a professional level."
  }
];

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])

  const contactInfoStyle = {
    display: 'flex',
  };

  const contactIconStyle = {
    marginRight: '20px',
  };

  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p style={{textAlign: 'justify'}}>
          Highly motivated React.js Developer with a Bachelor's degree in Information Technology. Currently honing my skills as
          a Frontend Developer through an internship at TechnoComet Solutions. Proficient in developing interactive and responsive
          web applications using React.js, HTML, CSS, and JavaScript. Passionate about staying updated with the latest technologies
          and trends in frontend development to deliver innovative solutions.
        </p>

        <p style={{textAlign: 'justify'}}>
          As a dedicated React.js Developer, I specialize in crafting websites that are not only functional and user-friendly but
          also visually captivating. With a keen eye for design, I infuse a personal touch into every project to ensure it's both
          eye-catching and intuitive to navigate. My primary goal is to effectively convey your message and brand identity through creative
          and innovative web designs. I have had the privilege of creating web solutions for numerous renowned brand companies, leveraging my
          expertise in frontend development to deliver exceptional results.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}
        </ul>
      </section>

      <h2 style={{ color: 'white' }}>Contact Me </h2>
      <section className="contact-info" style={contactInfoStyle}>
        <div className="contact-icon" style={contactIconStyle}>
          <FaLinkedin color="#0077B5" size={30} />
          <a href="https://www.linkedin.com/in/fenil-gondaliya-78236421b">LinkedIn</a>
        </div>
        <div className="contact-icon" style={contactIconStyle}>
          <FaSkype color="#0077B5" size={30} />
          <a href="https://join.skype.com/invite/tCuno8LDppLN">Skype</a>
        </div>
        <div className="contact-icon" style={contactIconStyle}>
          <FaEnvelope color="#0077B5" size={30} />
          <a href="mailto:fenilgondaliya2002@gmail.com" style={{color:'hsl(271.33deg 68.48% 32.35%)'}}>Email</a>
        </div>
      </section>
    </article>
  );
};

export default About;
