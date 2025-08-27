"use client";
import { useState } from "react";

import Project from "../components/Project";
import { myProjects } from "../constants";
import { items } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
import { DraggableCardBody, DraggableCardContainer } from "../components/ui/draggable-card";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  // state for preview
  const [preview, setPreview] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex flex-col min-h-screen px-4 sm:px-6 md:px-11 bg-gradient-to-b from-[#a33ab3] via-[#822d97] to-[#631f7a]"
    >
      <h2 className="text-3xl mt-14 md:text-4xl font-Pixelify2">My Projects</h2>
      <div className="mt-12 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      {/* Projects List */}
      {myProjects.map((project) => (
        <Project
          key={project.id}
          {...project}
          setPreview={setPreview}
          setModalOpen={setModalOpen}
        />
      ))}

      {/* Hover Preview */}
      {preview && !modalOpen && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-48 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}

      {/* Fullscreen Modal */}
      {modalOpen && preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative">
            <img
              src={preview}
              alt="Preview"
              className="w-[800px] h-[500px] object-contain rounded-lg"
            />
            <button
              onClick={() => setModalOpen(false)}
              className="absolute px-3 py-1 text-black bg-red-600 rounded top-2 right-2"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Draggable Cards */}
      <DraggableCardContainer className="relative flex items-center justify-center w-full min-h-screen overflow-clip">
        <p className="absolute max-w-sm mx-auto text-2xl font-black text-center top-1/2 -translate-y-3/4 text-neutral-400 md:text-4xl dark:text-neutral-800">
          Some of the work I’ve built and loved working on ✨
        </p>
        {items.map((item, index) => (
          <DraggableCardBody key={index} className={item.className}>
            <img
              src={item.image}
              alt={item.title}
              className="relative z-10 object-cover pointer-events-none h-80 w-80"
            />
            <h3 className="mt-4 text-2xl font-bold text-center text-neutral-700 dark:text-neutral-300">
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </section>
  );
};

export default Projects;
