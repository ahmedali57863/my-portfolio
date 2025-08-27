"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Testimonials from "../sections/Testimonials";


const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-11 bg-gradient-to-b from-[#f3aef0] via-[#e68ce4] to-[#d56ad6]">

      {/* Horizontal Testimonials Section */}
      <div className="w-full">
        <Testimonials />
      </div>

      {/* Scroll Animation Section */}
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl text-black font-Pixelify dark:text-black">
                Turning Ideas Into <br />
                <span className="text-5xl md:text-[7rem] font-Pixelify mt-1 leading-none">
                  Digital Reality
                </span>
              </h1>
            </>
          }>
          <img
            src={`/assets/my-work.png`}
            alt="hero"
            className="object-cover object-left-top w-full h-auto max-w-5xl mx-auto rounded-2xl"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
};

export default AboutMe;
