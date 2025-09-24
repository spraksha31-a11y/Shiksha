import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Program from "./components/Program/Program";
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
        <Title title="WHAT WE OFFER" subtitle="Our Program" />
        <Program />
        <Title title="ABOUT US" />
        <About setPlaystate={setPlaystate} />
        <Title title="CAMPUS PHOTOS" subtitle="Gallery" />
        <Campus />
        <Title title="TESTIMONIALS" subtitle="What Student says" />
        <Testimonials />
        <Title title="CONTACT US" subtitle="Get in touch" />
        <Contact />
        <Footer />
      </div>
      <Videoplayer Playstate={Playstate} setPlaystate={setPlaystate} />
    </div>
  );
};
export default App;
