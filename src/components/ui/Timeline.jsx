"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="mb-12 text-4xl md:text-5xl font-Pixelify text-heading">
        Education & Technical Journey
      </h2>

      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col justify-start pt-10 md:flex-row md:pt-40 md:gap-10">
            
            {/* Left Sticky Side */}
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-900" />
              </div>
              <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl font-Vecna text-neutral-300">
                <h3>{item.date}</h3>
                <h3 className="text-base font-Pixelify2 text-neutral-700">{item.title}</h3>
                {item.institution && <h3 className="text-sm font-Pixelify2 text-neutral-800">{item.institution}</h3>}
                {item.job && <h3 className="text-sm font-Pixelify2 text-neutral-800">{item.job}</h3>}
              </div>
            </div>

            {/* Right Content Side */}
            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden">
                <h3>{item.date}</h3>
                {item.institution && <h3>{item.institution}</h3>}
                {item.job && <h3>{item.job}</h3>}
              </div>

              {/* Highlights */}
              {item.highlights?.map((highlight, idx) => (
                <p key={idx} className="mb-3 text-sm text-neutral-950 font-Pixelify2">
                  {highlight}
                </p>
              ))}

              {/* Skills Badges */}
              {item.skills && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-semibold text-white bg-purple-500 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Vertical Timeline Line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
