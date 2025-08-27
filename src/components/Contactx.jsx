//WITH EMAIL-JS

// "use client";
// import { motion } from "framer-motion";
// import React, { useState } from "react";
// import { User, Mail, MessageSquare, Send, Loader2 } from "lucide-react";
// import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
// import { mySocials } from "../constants";
// import emailjs from "@emailjs/browser";

// const Contactx = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);                                                 //service_2oujt7x
//                                                                    // template ID : template_n0w7pib

//     try {
//       await emailjs.send(
//         "service_2oujt7x",       // replace with your EmailJS service ID
//         "template_n0w7pib",      // replace with your EmailJS template ID
//         {
//           from_name: formData.name,
//           to_name: "Ahmed",
//           from_email: formData.email,
//           to_email: "ahmedali57863@gmail.com",
//           message: formData.message,
//         },
//         "paMqnpFm1wt_Zx5vJ"     // replace with your EmailJS public key
//       );

//       setLoading(false);
//       setFormData({ name: "", email: "", message: "" });
//       alert("Your message has been sent! ✅");
//     } catch (error) {
//       setLoading(false);
//       console.error(error);
//       alert("Something went wrong! ❌");
//     }
//   };

//   return (
//     <section
//       id="extra"
//       className="relative flex py-10 flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-11 bg-gradient-to-b from-[#631f7a] via-[#4b1860] to-[#320f44]"
//     >
//       {/* Background beams */}
//       <div className="absolute inset-0 z-0">
//         <BackgroundBeamsWithCollision />
//       </div>

//       {/* Decorative floating image (behind form) */}
//       <motion.img
//         src="/assets/03.png"
//         alt="Decorative Background"
//         className="absolute z-0 object-contain w-[75%] max-w-2xl opacity-20 -translate-y-10"
//         animate={{ y: [0, -40, 0] }}
//         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="relative z-20 w-full max-w-lg p-8 bg-transparent border shadow-xl mt-14 border-white/20 rounded-2xl backdrop-blur-sm"
//       >
//         <h2 className="mb-4 text-4xl text-center text-white font-Pixelify">
//           Contact Us
//         </h2>

//         {/* Name */}
//         <div className="mb-4">
//           <label className="flex items-center gap-2 font-Pixelify2 text-white/80">
//             <User size={18} /> Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 mt-1 text-xs text-white placeholder-gray-300 border rounded-lg font-Pixelify2 bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
//             placeholder="Enter your name"
//           />
//         </div>

//         {/* Email */}
//         <div className="mb-4">
//           <label className="flex items-center gap-2 font-Pixelify2 text-white/80">
//             <Mail size={18} /> Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 mt-1 text-xs text-white placeholder-gray-300 border rounded-lg font-Pixelify2 bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
//             placeholder="Enter your email"
//           />
//         </div>

//         {/* Message */}
//         <div className="mb-6">
//           <label className="flex items-center gap-2 font-Pixelify2 text-white/80">
//             <MessageSquare size={18} /> Message
//           </label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             rows="4"
//             className="w-full px-4 py-2 mt-1 text-xs text-white placeholder-gray-300 border rounded-lg font-Pixelify2 bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
//             placeholder="Write your message..."
//           />
//         </div>

//         {/* Button */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="flex items-center justify-center w-full gap-2 px-6 py-3 text-base text-white transition rounded-lg font-Pixelify2 bg-fuchsia-600 hover:bg-fuchsia-700 focus:ring-4 focus:ring-fuchsia-400 disabled:opacity-70"
//         >
//           {loading ? (
//             <Loader2 className="w-5 h-5 animate-spin" />
//           ) : (
//             <Send size={18} />
//           )}
//           {loading ? "Sending..." : "Send Message"}
//         </button>
//       </form>

//       {/* Footer */}
//       <div className="relative z-20 w-full max-w-4xl -mb-10 text-center mt-14 text-neutral-300">
//         {/* Line */}
//         <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-500 to-transparent h-[1px] w-full" />

//         {/* Policies */}
//         <div className="flex justify-center gap-2 mb-3 text-sm">
//           <p className="cursor-pointer hover:text-white">Terms & Conditions</p>
//           <p>|</p>
//           <p className="cursor-pointer hover:text-white">Privacy Policy</p>
//         </div>

//         {/* Socials */}
//         <div className="flex justify-center gap-4 mb-3">
//           {mySocials.map((social, index) => {
//             if (index === 0) {
//               return (
//                 <span key={index} className="opacity-50 cursor-not-allowed">
//                   <img
//                     src={social.icon}
//                     alt={social.name}
//                     className="w-5 h-5 transition opacity-80 hover:opacity-100"
//                   />
//                 </span>
//               );
//             }
//             return (
//               <a
//                 key={index}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   src={social.icon}
//                   alt={social.name}
//                   className="w-5 h-5 transition opacity-80 hover:opacity-100"
//                 />
//               </a>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contactx;




















//WITHOUT EMAIL-JS

// "use client";
// import { motion } from "framer-motion";
// import React, { useState } from "react";
// import { User, Mail, MessageSquare, Send, Loader2 } from "lucide-react";
// import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
// import { mySocials } from "../constants";

// const Contactx = () => {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => setLoading(false), 2000); // fake loading
//   };

//   return (
//     <section
//       id="extra"
//       className="relative flex py-10 flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-11 bg-gradient-to-b from-[#631f7a] via-[#4b1860] to-[#320f44]"
//     >
//       {/* Background beams */}
//       <div className="absolute inset-0 z-0">
//         <BackgroundBeamsWithCollision />
//       </div>

//       {/* Decorative floating image (behind form) */}
//       <motion.img
//         src="/assets/03.png"
//         alt="Decorative Background"
//         className="absolute z-0 object-contain w-[75%] max-w-2xl opacity-20 -translate-y-10"
//         animate={{ y: [0, -40, 0] }}
//         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="relative z-20 w-full max-w-lg p-8 bg-transparent border shadow-xl mt-14 border-white/20 rounded-2xl backdrop-blur-sm"
//       >
//         <h2 className="mb-4 text-4xl text-center text-white font-Pixelify">
//           Contact Us
//         </h2>

//         {/* Name */}
//         <div className="mb-4">
//           <label className="flex items-center gap-2 font-Pixelify2 text-white/80">
//             <User size={18} /> Name
//           </label>
//           <input
//             type="text"
//             required
//             className="w-full px-4 py-2 mt-1 text-xs text-white placeholder-gray-300 border rounded-lg font-Pixelify2 bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
//             placeholder="Enter your name"
//           />
//         </div>

//         {/* Email */}
//         <div className="mb-4">
//           <label className="flex items-center gap-2 font-Pixelify2 text-white/80">
//             <Mail size={18} /> Email
//           </label>
//           <input
//             type="email"
//             required
//             className="w-full px-4 py-2 mt-1 text-xs text-white placeholder-gray-300 border rounded-lg font-Pixelify2 bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
//             placeholder="Enter your email"
//           />
//         </div>

//         {/* Message */}
//         <div className="mb-6">
//           <label className="flex items-center gap-2 font-Pixelify2 text-white/80">
//             <MessageSquare size={18} /> Message
//           </label>
//           <textarea
//             required
//             rows="4"
//             className="w-full px-4 py-2 mt-1 text-xs text-white placeholder-gray-300 border rounded-lg font-Pixelify2 bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
//             placeholder="Write your message..."
//           ></textarea>
//         </div>

//         {/* Button */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="flex items-center justify-center w-full gap-2 px-6 py-3 text-base text-white transition rounded-lg font-Pixelify2 bg-fuchsia-600 hover:bg-fuchsia-700 focus:ring-4 focus:ring-fuchsia-400 disabled:opacity-70"
//         >
//           {loading ? (
//             <Loader2 className="w-5 h-5 animate-spin" />
//           ) : (
//             <Send size={18} />
//           )}
//           {loading ? "Sending..." : "Send Message"}
//         </button>
//       </form>

//       {/* Footer */}
//       <div className="relative z-20 w-full max-w-4xl -mb-10 text-center mt-14 text-neutral-300">
//         {/* Line */}
//         <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-500 to-transparent h-[1px] w-full" />

//         {/* Policies */}
//         <div className="flex justify-center gap-2 mb-3 text-sm">
//           <p className="cursor-pointer hover:text-white">Terms & Conditions</p>
//           <p>|</p>
//           <p className="cursor-pointer hover:text-white">Privacy Policy</p>
//         </div>

//         {/* Socials */}
//         <div className="flex justify-center gap-4 mb-3">
//           {mySocials.map((social, index) => {
//             // Make first item (Watsapp) unclickable
//             if (index === 0) {
//               return (
//                 <span
//                   key={index}
//                   className="opacity-50 cursor-not-allowed"
//                 >
//                   <img
//                     src={social.icon}
//                     alt={social.name}
//                     className="w-5 h-5 transition opacity-80 hover:opacity-100"
//                   />
//                 </span>
//               );
//             }

//             // Other socials are clickable
//             return (
//               <a
//                 key={index}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   src={social.icon}
//                   alt={social.name}
//                   className="w-5 h-5 transition opacity-80 hover:opacity-100"
//                 />
//               </a>
//             );
//           })}
//         </div>

//         {/* Copyright */}
//         {/* <p className="text-xs">© 2025 Ali. All rights reserved.</p> */}
//       </div>
//     </section>
//   );
// };

// export default Contactx;






"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { User, Mail, MessageSquare, Send, Loader2 } from "lucide-react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { mySocials } from "../constants";
import emailjs from "@emailjs/browser";

const Contactx = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(""); // Success/Error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      await emailjs.send(
        "service_2oujt7x",       // Your EmailJS service ID
        "template_n0w7pib",      // Your EmailJS template ID
        {
          from_name: formData.name,
          to_name: "Ahmed",
          from_email: formData.email,
          to_email: "ahmedali57863@gmail.com",
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "paMqnpFm1wt_Zx5vJ"     // Your EmailJS public key
      );

      setFormData({ name: "", email: "", message: "" });
      setStatusMessage("✅ Your message has been sent successfully!");
    } catch (error) {
      console.error(error);
      setStatusMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="extra"
      className="relative flex py-10 flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-11 bg-gradient-to-b from-[#631f7a] via-[#4b1860] to-[#320f44]"
    >
      {/* Background beams */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeamsWithCollision />
      </div>

      {/* Decorative floating image */}
      <motion.img
        src="/assets/03.png"
        alt="Decorative Background"
        className="absolute z-0 object-contain w-[75%] max-w-2xl opacity-20 -translate-y-10"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-20 w-full max-w-lg p-8 bg-transparent border shadow-xl mt-14 border-white/20 rounded-2xl backdrop-blur-sm"
      >
        <h2 className="mb-4 text-4xl text-center text-white font-Pixelify">
          Contact Us
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="flex items-center gap-2 font-Pixelify2 text-white/80">
            <User size={18} /> Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-1 text-xs text-white placeholder-gray-300 border rounded-lg font-Pixelify2 bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="flex items-center gap-2 font-Pixelify2 text-white/80">
            <Mail size={18} /> Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-1 text-xs text-white placeholder-gray-300 border rounded-lg font-Pixelify2 bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            placeholder="Enter your email"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="flex items-center gap-2 font-Pixelify2 text-white/80">
            <MessageSquare size={18} /> Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 mt-1 text-xs text-white placeholder-gray-300 border rounded-lg font-Pixelify2 bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            placeholder="Write your message..."
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center w-full gap-2 px-6 py-3 text-base text-white transition rounded-lg font-Pixelify2 bg-fuchsia-600 hover:bg-fuchsia-700 focus:ring-4 focus:ring-fuchsia-400 disabled:opacity-70"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send size={18} />
          )}
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Status Message */}
        {statusMessage && (
          <p className="mt-4 text-center text-white font-Pixelify2">
            {statusMessage}
          </p>
        )}
      </form>

      {/* Footer */}
      <div className="relative z-20 w-full max-w-4xl -mb-10 text-center mt-14 text-neutral-300">
        <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-500 to-transparent h-[1px] w-full" />
        <div className="flex justify-center gap-2 mb-3 text-sm">
          <p className="cursor-pointer hover:text-white">Terms & Conditions</p>
          <p>|</p>
          <p className="cursor-pointer hover:text-white">Privacy Policy</p>
        </div>
        <div className="flex justify-center gap-4 mb-3">
          {mySocials.map((social, index) => {
            if (index === 0) {
              return (
                <span key={index} className="opacity-50 cursor-not-allowed">
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5 transition opacity-80 hover:opacity-100"
                  />
                </span>
              );
            }
            return (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-5 h-5 transition opacity-80 hover:opacity-100"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contactx;
