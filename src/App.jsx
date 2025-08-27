//WITHOUT LENIS VERSION

// import React, { useEffect, useRef } from "react"; 
// import NavBar from "./components/NavBar";
// import Hero from "./components/Hero";
// import AboutMe from "./components/AboutMe";
// import Work from "./components/Work";
// import Projects from "./sections/Projects";
// import Contactx from "./components/Contactx";
// import './fonts.css';
// import AOS from "aos";
// import "aos/dist/aos.css";

// const App = () => {
//   // Refs for all sections
//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const educationRef = useRef(null);
//   const projectsRef = useRef(null);
//   const contactRef = useRef(null);

//   // Scroll function
//   const scrollToSection = (ref) => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div className="relative min-h-screen">
//       {/* Radial background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,121,249,0.25),transparent_70%)]" />

//       {/* Navbar */}
//       <NavBar 
//         scrollToSection={scrollToSection} 
//         refs={{ homeRef, aboutRef, educationRef, projectsRef, contactRef }}
//       />

//       {/* Sections */}
//       <div ref={homeRef}><Hero /></div>
//       <div ref={aboutRef}><AboutMe /></div>
//       <div ref={educationRef}><Work /></div>
//       <div ref={projectsRef}><Projects /></div>
//       <div ref={contactRef}><Contactx /></div>
//     </div>
//   );
// };

// export default App;













//LENIS VERSION
import React, { useEffect, useRef } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Projects from "./sections/Projects";
import Contactx from "./components/Contactx";
import './fonts.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "@studio-freight/lenis";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => t * (2 - t),
      smooth: true,
    });

    const raf = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenisRef.current = null;
  }, []);

  const scrollToSection = (ref) => {
    if (ref.current && lenisRef.current) {
      lenisRef.current.scrollTo(ref.current, { offset: 0, immediate: false });
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,121,249,0.25),transparent_70%)]" />

      <NavBar scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, educationRef, projectsRef, contactRef }} />

      <div ref={homeRef}><Hero /></div>
      <div ref={aboutRef}><AboutMe /></div>
      <div ref={educationRef}><Work /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={contactRef}><Contactx /></div>
    </div>
  );
};

export default App;
