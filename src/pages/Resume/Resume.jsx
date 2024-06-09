import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list" style={{textAlign: 'justify'}}>
          <TimelineItem
            title="B.Tech in Information Technology"
            date="RK University, 2021 — 2024"
            description="Completed Bachelor of Technology in Information Technology with a commendable Cumulative Grade Point Average (CGPA) of 7.22. Engaged in a diverse range of subjects and projects, demonstrating a strong foundation in IT concepts and practices."
          />
          <TimelineItem
            title="Diploma in Computer Engineering"
            date="Gujarat Technological University (GTU), 2018 — 2021"
            description="Successfully completed a comprehensive program in Computer Engineering with a remarkable Cumulative Grade Point Average (CGPA) of 8.89. Demonstrated strong aptitude and commitment to the field throughout the duration of the course."
          />
          <TimelineItem
            title="Shri Balakrishna Vidyalaya(GSEB)"
            date="10th SSC-2018"
            description="Achieved an outstanding result with an impressive 84 Pr score. Demonstrated consistent dedication and academic excellence throughout the academic year."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list" style={{textAlign: 'justify'}}>
          <TimelineItem
            title="React Js Developer(TechnoComet Solutions)."
            date="2023 — Present"
            description="As a React Js Developer at TechnoComet Solutions, I am responsible for designing and developing innovative web solutions using React.js framework. I actively contribute to creating functional, user-friendly, and visually appealing websites, ensuring seamless user experiences. Collaborating closely with cross-functional teams, I leverage my expertise in frontend development to translate client requirements into high-quality, scalable applications. Additionally, I remain committed to staying updated with the latest trends and best practices in React.js development to deliver cutting-edge solutions."
          />
         
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="HTML5" value={95} />
          <SkillItem title="CSS3" value={80} />
          <SkillItem title="TAILWIND CSS" value={70} />
          <SkillItem title="BOOTSTRAP" value={80} />
          <SkillItem title="REACT JS" value={80} />
          <SkillItem title="RESPONSIVE DESIGN" value={80} />
          <SkillItem title="PROBLEM SOLVING" value={70} />
          <SkillItem title="CREATIVE THINKING" value={80} />


        </ul>
      </div>
    </section>
  );
};

export default Resume;
