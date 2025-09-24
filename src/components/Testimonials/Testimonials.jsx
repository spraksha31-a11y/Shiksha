import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Ananya Sharma</h3>
                  <span>B.Tech,Computer Science, 2024 Batch</span>
                </div>
              </div>
              <p>
                "My MBA experience at \[University Name] was enriching both
                academically and professionally. The case-study approach,
                industry seminars, and internship opportunities helped me apply
                classroom knowledge to real business challenges. I gained
                valuable insights into financial markets and leadership. The
                dedicated career cell ensured I was well-prepared for
                placements, helping me land a rewarding role."
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Rohan Verma</h3>
                  <span>MBA Finance, 2023 Batch</span>
                </div>
              </div>
              <p>
                "Studying at Shiksha has been an incredible journey of learning
                and growth. The curriculum is well-structured, and the faculty
                always encouraged innovation through projects and research. With
                strong placement guidance, I secured an exciting role in
                software development. The supportive environment here shaped my
                skills and gave me the confidence to succeed in the industry."
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Sneha Iyer</h3>
                  <span>B.A.Psychology, 2025 Batch</span>
                </div>
              </div>
              <p>
                "Life at Shiksha has been transformative in many ways. The
                Psychology program is engaging, with a balance of theory and
                practical exposure through workshops and field visits. Faculty
                guidance and mentoring encouraged me to think critically and
                empathetically. Beyond academics, cultural and social activities
                helped me develop leadership qualities, teamwork skills, and
                lifelong friendships."
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Aditya Rao</h3>
                  <span>B.Tech Electronics & Communication, 2024 Batch</span>
                </div>
              </div>
              <p>
                "Choosing Shiksha for my ECE program was the best decision I
                made. The well-equipped labs and innovative curriculum gave me
                hands-on exposure to IoT and VLSI. Participation in
                national-level competitions boosted my confidence and
                problem-solving skills. Placement training sessions provided the
                right preparation, helping me secure a role in a reputed core
                electronics company."
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
