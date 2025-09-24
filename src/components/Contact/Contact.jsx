import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f50d3186-1940-476d-95f8-05a304e837f3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a Message <img src={msg_icon} alt="" />
        </h3>
        <p>
          At Shiksha, we are always here to assist students, parents, and
          visitors. Whether you have queries about admissions, courses, or
          campus facilities, our support team is just a call or email away. You
          can reach us through our official phone number, email, or visit us at
          our campus in Bengaluru. Stay connected with us on our social media
          platforms for the latest updates and announcements.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            eaaditi14@gmail.com
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" />
            +91 8197764958
          </li>
          <li>
            <img src={location_icon} alt="" />
            reva university,560064
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>your name</label>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            required
          />

          <label>phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="enter your mobile nummber"
            required
          />

          <label>write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
