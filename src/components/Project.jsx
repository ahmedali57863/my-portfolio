import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
    title,
    description,
    subDescription,
    href,
    image,
    tags,
    setPreview,
}) => {
    const [isHidden, setIsHidden] = useState(false);
    return (
        <>
            <div
                className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
                onMouseEnter={() => setPreview(image)}
                onMouseLeave={() => setPreview(null)}
            >
                <div>
                    <p className="text-2xl font-Pixelify2 text-neutral-800">{title}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-2 py-1 text-xs font-semibold text-white bg-purple-500 rounded-md"
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>

                </div>
                <button
                    onClick={() => setIsHidden(true)}
                    className="flex items-center gap-1 cursor-pointer hover-animation"
                >
                    Read More
                    <img src="assets/arrow-right.svg" className="w-5" />
                </button>
            </div>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
            {isHidden && (
                <ProjectDetails
                    title={title}
                    description={description}
                    subDescription={subDescription}
                    image={image}
                    tags={tags}
                    href={href}
                    closeModal={() => setIsHidden(false)}
                />
            )}
        </>
    );
};

export default Project;
