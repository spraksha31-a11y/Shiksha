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
        <h2>nurturing tomorrow's leaders tpday</h2>
        <p>
          lorem 50 years of excellence in education and research, t he
          university has been a beacon of knowledge and innovation. With a
          diverse student body and a commitment to fostering critical thinking,
          the universit y offers a wide range of programs across various
          disciplines.
        </p>
        <p>
          Our faculty mebers are renowned experts in their fields, dedicated to
          providing a supporti ve and engaging learning environment. The campus
          boasts state-of-the-art fac ilities, including modern classrooms,
          research labs, and recreational areas, ensuring students have access
          to the resources they need to succeed.
        </p>
        <p>
          Beyond academics, the university encourages students to participate in
          extracurricula r activities, community service, and global exchange
          programs, promoting holist ic development. Join us at the university
          to embark on a transformative educati onal journey that prepares you
          for a successful future.
        </p>
      </div>
    </div>
  );
};

export default About;
