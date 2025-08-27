import { motion } from "motion/react";
import closeIcon from "../assets/close3.svg";

const ProjectDetails = ({
    title,
    description,
    subDescription,
    image,
    tags,
    href,
    closeModal,
}) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
            <motion.div
                className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <button
                    onClick={closeModal}
                    className="absolute p-1 rounded-sm top-3 right-5 bg-midnight hover:bg-gray-500"
                >
                    <img src={closeIcon} alt="close" className="w-6 h-6" />
                </button>
                <img src={image} alt={title} className="w-full rounded-t-2xl" />
                <div className="p-1">
                    <h5 className="mb-1 text-xl text-white font-Pixelify2">{title}</h5>
                    <p className="mb-2 text-xs font-Pixelify2 text-neutral-400">{description}</p>
                    {subDescription.map((subDesc, index) => (
                        <p className="mb-2 text-xs font-Pixelify2 text-neutral-400">{subDesc}</p>
                    ))}
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex gap-3">
                            {tags.map((tag) => (
                                <img
                                    key={tag.id}
                                    src={tag.path}
                                    alt={tag.name}
                                    className="transition-transform duration-200 rounded-lg size-6 hover:scale-110"
                                />
                            ))}
                        </div>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium cursor-pointer font-Pixelify2 hover-animation"
                        >
                            View Project <i className='bx bx-link'></i>
                        </a>

                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetails;
