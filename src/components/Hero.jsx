import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaDownload,
} from "react-icons/fa";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center bg-white dark:bg-gray-950 px-6 pt-24"
        >
            <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-blue-500 font-medium">
                        Full Stack Developer
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
                        Mohamed Shiyak
                    </h1>

                    <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                        I build scalable MERN applications with clean UI/UX and strong backend
                        architecture focused on performance and usability.
                    </p>

                    {/* TECH BADGES */}
                    <div className="flex flex-wrap gap-2 mt-6">
                        {["React", "Node", "MongoDB", "Express", "Tailwind"].map((t) => (
                            <span
                                key={t}
                                className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-400/20"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        <a
                            href="/cv.pdf"
                            className="flex items-center gap-2 px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        >
                            <FaDownload /> Download CV
                        </a>

                        <a
                            href="#projects"
                            className="px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-white"
                        >
                            View Projects
                        </a>
                    </div>

                    {/* SOCIALS */}
                    <div className="flex gap-4 mt-6 text-xl text-gray-600 dark:text-gray-300">
                        <a href="#"><FaGithub /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="mailto:example@email.com"><FaEnvelope /></a>
                    </div>
                </motion.div>

                {/* RIGHT VISUAL BLOCK */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="h-[380px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-xl border border-white/10"
                />
            </div>
        </section>
    );
}


// import profileImage from "../assets/images/profile.jpg";
// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// export default function Hero() {
//     return (
//         <section
//             id="home"
//             className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
//         >
//             {/* Background Blur Effects */}
//             <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 blur-[120px] rounded-full"></div>
//             <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

//             <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">

//                 {/* Left Content */}
//                 <motion.div
//                     initial={{ opacity: 0, x: -60 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     {/* Status Badge */}
//                     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm mb-6">
//                         <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
//                         Available for Internships
//                     </div>

//                     {/* Heading */}
//                     <h1 className="text-5xl md:text-7xl font-bold leading-tight">
//                         Muhammadu N.
//                         <span className="block text-emerald-400">
//                             Shiyak
//                         </span>
//                     </h1>

//                     {/* Subtitle */}
//                     <h2 className="mt-6 text-xl md:text-2xl text-slate-300 font-medium">
//                         Final-Year ICT Undergraduate
//                         <br />
//                         Full-Stack MERN Developer
//                     </h2>

//                     {/* Description */}
//                     <p className="mt-6 text-slate-400 text-lg max-w-xl leading-relaxed">
//                         Passionate developer focused on building secure,
//                         scalable, and user-friendly web applications using
//                         React.js, Node.js, Express.js, and MongoDB.
//                         Turning ideas into modern digital solutions.
//                     </p>

//                     {/* Tech Stack */}
//                     <div className="flex flex-wrap gap-3 mt-8">
//                         {[
//                             "React",
//                             "Node.js",
//                             "Express",
//                             "MongoDB",
//                             "MySQL",
//                             "Tailwind CSS",
//                         ].map((tech) => (
//                             <span
//                                 key={tech}
//                                 className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm"
//                             >
//                                 {tech}
//                             </span>
//                         ))}
//                     </div>

//                     {/* Buttons */}
//                     <div className="flex flex-wrap gap-4 mt-10">
//                         <a
//                             href="#projects"
//                             className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 text-white font-medium"
//                         >
//                             View Projects
//                         </a>

//                         <a
//                             href="/cv.pdf"
//                             target="_blank"
//                             rel="noreferrer"
//                             className="px-8 py-4 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300"
//                         >
//                             Download CV
//                         </a>
//                     </div>

//                     {/* Social Icons */}
//                     <div className="flex gap-5 mt-10">
//                         <a
//                             href="https://github.com/"
//                             target="_blank"
//                             rel="noreferrer"
//                             className="text-2xl text-slate-400 hover:text-emerald-400 transition"
//                         >
//                             <FaGithub />
//                         </a>

//                         <a
//                             href="https://linkedin.com/"
//                             target="_blank"
//                             rel="noreferrer"
//                             className="text-2xl text-slate-400 hover:text-emerald-400 transition"
//                         >
//                             <FaLinkedin />
//                         </a>

//                         <a
//                             href="mailto:mohamedsyk1@gmail.com"
//                             className="text-2xl text-slate-400 hover:text-emerald-400 transition"
//                         >
//                             <FaEnvelope />
//                         </a>
//                     </div>
//                 </motion.div>

//                 {/* Right Side Profile Card */}
//                 <motion.div
//                     initial={{ opacity: 0, x: 60 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="flex justify-center"
//                 >
//                     <div className="relative">
//                         {/* Glow */}
//                         <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full"></div>

//                         {/* Glass Card */}
//                         <div className="relative w-[320px] h-105 rounded-3xl backdrop-blur-xl border border-white/10 bg-white/5 shadow-2xl overflow-hidden">

//                             <img
//                                 src={profileImage}
//                                 alt="Muhammadu N. Shiyak"
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>

//             {/* Scroll Indicator */}
//             <motion.div
//                 animate={{ y: [0, 10, 0] }}
//                 transition={{
//                     repeat: Infinity,
//                     duration: 1.5,
//                 }}
//                 className="absolute bottom-10 left-1/2 -translate-x-1/2"
//             >
//                 <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
//                     <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
//                 </div>
//             </motion.div>
//         </section>
//     );
// }

// import { motion } from "framer-motion";
// import profileImage from "../assets/images/My Profile.jpg";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6 pt-20"
//     >
//       <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

//         {/* LEFT TEXT SECTION */}
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <p className="text-blue-500 font-medium mb-2">
//             Hello, I'm
//           </p>

//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
//             Mohamed Shiyak
//           </h1>

//           <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-3">
//             Full Stack Developer (MERN) 🚀
//           </h2>

//           <p className="mt-5 text-gray-600 dark:text-gray-400 leading-relaxed">
//             I build modern, scalable, and high-performance web applications using
//             React, Node.js, Express, and MongoDB. I love turning ideas into real
//             digital products that solve problems.
//           </p>

//           {/* Buttons */}
//           <div className="flex gap-4 mt-6">
//             <a
//               href="#projects"
//               className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
//             >
//               View Projects
//             </a>

//             <a
//               href="#contact"
//               className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition"
//             >
//               Contact Me
//             </a>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-5 mt-6 text-2xl text-gray-600 dark:text-gray-300">
//             <a href="#" className="hover:text-blue-500 transition">
//               <FaGithub />
//             </a>
//             <a href="#" className="hover:text-blue-500 transition">
//               <FaLinkedin />
//             </a>
//             <a href="mailto:yourmail@gmail.com" className="hover:text-blue-500 transition">
//               <FaEnvelope />
//             </a>
//           </div>
//         </motion.div>

//         {/* RIGHT IMAGE SECTION */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="flex justify-center"
//         >
//           <div className="relative">
//             {/* Glow effect */}
//             <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

//             <img
//               src={profileImage}
//               alt="Profile"
//               className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-blue-500 relative z-10"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }