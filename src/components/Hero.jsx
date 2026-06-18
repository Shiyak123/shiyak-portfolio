import profileImage from "../assets/images/profile.jpg";
import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaDownload,
    FaMapMarkerAlt,
    FaCheckCircle,
} from "react-icons/fa";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950/90" />
            <div className="pointer-events-none absolute -top-16 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative mx-auto min-h-screen w-full max-w-7xl px-6 py-20 md:px-8">
                <div className="grid w-full gap-8 md:grid-cols-12 md:items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative col-span-12 md:col-span-4"
                    >
                        <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-white/5 shadow-[0_40px_120px_-80px_rgba(14,165,233,0.35)] backdrop-blur-xl" />
                        <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/10 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/5" />
                            <div className="relative flex flex-col items-center gap-5 text-center">
                                <img
                                    src={profileImage}
                                    alt="Muhammadu N. Shiyak"
                                    className="h-44 w-44 rounded-full border-4 border-cyan-400/30 object-cover shadow-2xl shadow-cyan-500/20"
                                />
                                <div>
                                    <p className="text-2xl font-semibold text-white">
                                        Muhammadu N. Shiyak
                                    </p>
                                    <p className="mt-2 text-sm font-medium uppercase tracking-[0.26em] text-cyan-200">
                                        Software Engineer | Full Stack Developer
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-300">
                                    <FaMapMarkerAlt className="text-cyan-300" />
                                    Sri Lanka
                                </div>
                                <div className="flex flex-wrap justify-center gap-3 pt-4">
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100 transition duration-300 hover:bg-cyan-400/20"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-3 text-sm text-cyan-100 transition duration-300 hover:bg-cyan-400/15"
                                    >
                                        <FaLinkedin /> LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="col-span-12 md:col-span-8 space-y-6"
                    >
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-sm backdrop-blur-sm">
                                <FaCheckCircle className="text-cyan-300" />
                                Available for Internship
                            </span>
                            <span className="text-sm text-slate-400">Sri Lanka</span>
                        </div>

                        <div className="space-y-4">
                            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">
                                Software Engineer | Full Stack Developer
                            </p>
                            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
                                Muhammadu N. Shiyak
                            </h1>
                            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                                Final-Year Information Technology Undergraduate passionate about building scalable web applications, solving real-world problems, and creating user-focused digital experiences. Skilled in React, Node.js, MongoDB, Express.js, and modern web technologies, with a strong interest in Software Engineering and Full-Stack Development.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/cv.pdf"
                                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:scale-[1.01]"
                            >
                                <FaDownload />
                                Download CV
                            </a>
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-6 py-3 text-sm font-semibold text-cyan-200 transition duration-300 hover:bg-cyan-500/10 hover:text-white"
                            >
                                🚀 View Projects
                            </a>
                        </div>

                        <div className="space-y-4">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                                Core technologies
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "React",
                                    "Node.js",
                                    "MongoDB",
                                    "Express.js",
                                    "Tailwind CSS",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-slate-700/70 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-100 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-slate-900"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-slate-400">
                            <span className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
                                Connect
                            </span>
                            <a
                                href="#"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/80 bg-white/5 text-slate-200 transition duration-300 hover:bg-cyan-500/15 hover:text-cyan-200"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="#"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/80 bg-white/5 text-slate-200 transition duration-300 hover:bg-cyan-500/15 hover:text-cyan-200"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="mailto:example@email.com"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/80 bg-white/5 text-slate-200 transition duration-300 hover:bg-cyan-500/15 hover:text-cyan-200"
                                aria-label="Email"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </motion.div>
                </div>
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