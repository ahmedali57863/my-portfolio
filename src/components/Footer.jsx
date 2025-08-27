import React from 'react'
import { mySocials } from "../constants";

const Footer = () => {
    return (
        <>
            {/* Footer line + socials + copyright */}
            <div className="relative z-20 w-full max-w-4xl mt-10 text-center text-neutral-300">
                {/* Thin gradient line */}
                <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-500 to-transparent h-[1px] w-full" />

                {/* Policies */}
                <div className="flex justify-center gap-2 mb-3 text-sm">
                    <p className="cursor-pointer hover:text-white">Terms & Conditions</p>
                    <p>|</p>
                    <p className="cursor-pointer hover:text-white">Privacy Policy</p>
                </div>

                {/* Socials */}
                <div className="flex justify-center gap-4 mb-3">
                    {mySocials.map((social, index) => (
                        <a href={social.href} key={index} target="_blank" rel="noopener noreferrer">
                            <img src={social.icon} alt={social.name} className="w-5 h-5 opacity-80 hover:opacity-100" />
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <p className="text-xs">© 2025 Ali. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer
