import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlaystate }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about_img" />
        <img
          src={play_icon}
          alt=""
          className="play_icon"
          onClick={() => {
            setPlaystate(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About University </h3>
        <h2>Nurturing tomorrow's leaders today</h2>
        <p>
          Shiksha University is a premier institution dedicated to excellence in
          education, research, and innovation. With a vision to nurture future
          leaders and professionals, Shiksha offers a wide range of
          undergraduate, postgraduate, and research programs across diverse
          disciplines. Our state-of-the-art infrastructure, experienced faculty,
          and student-focused approach create an environment that fosters
          learning and growth. At Shiksha, we emphasize not only academic
          excellence but also values, creativity, and practical skills,
          preparing students to meet global challenges. Committed to holistic
          development, Shiksha University stands as a hub of knowledge,
          innovation, and opportunities for aspiring learners.
        </p>
        <p>
          Our faculty mebers are renowned experts in their fields, dedicated to
          providing a supporti ve and engaging learning environment. The campus
          boasts state-of-the-art fac ilities, including modern classrooms,
          research labs, and recreational areas, ensuring students have access
          to the resources they need to succeed.
        </p>
      </div>
    </div>
  );
};

export default About;
