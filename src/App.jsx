import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Program from "./components/program/program";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/contact/contact";
import Footer from "./components/Footer/footer";
import Videoplayer from "./components/Videoplayer/Videoplayer";

const App = () => {
  const [Playstate, setPlaystate] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="what we offer" subtitle="our program" />
        <Program />
        <Title title="About Us" />
        <About setPlaystate={setPlaystate} />
        <Title title="Campus Photos" subtitle="Gallery" />
        <Campus />
        <Title title="TESTIMONIALS" subtitle="What student says" />
        <Testimonials />
        <Title title="contact us" subtitle="get in touch" />
        <Contact />
        <Footer />
      </div>
      <Videoplayer Playstate={Playstate} setPlaystate={setPlaystate} />
    </div>
  );
};
export default App;
