import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};

        if (!form.name.trim()) newErrors.name = "Name is required";

        const emailRegex = /\S+@\S+\.\S+/;
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(form.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!form.message.trim()) {
            newErrors.message = "Message is required";
        } else if (form.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validate()) return;

        setStatus("sending");

        emailjs
            .send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                },
                "YOUR_PUBLIC_KEY"
            )
            .then(() => {
                setStatus("success");
                setForm({ name: "", email: "", message: "" });
            })
            .catch(() => {
                setStatus("error");
            });
    };

    return (
        <section id="contact" className="py-24 px-6 bg-surface-2 dark:bg-surface-2">
            <div className="max-w-3xl mx-auto">

                <SectionTitle
                    title="Contact Me"
                    icon={FaEnvelope}
                    colorClass="text-heading-contact"
                />

                <form onSubmit={sendEmail} className="mt-12 space-y-5">

                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full p-3 rounded-lg bg-surface border border-heading-contact/30 focus:border-heading-contact text-secondary placeholder:text-muted outline-none focus:ring-2 focus:ring-offset-0 focus:ring-heading-contact/50 transition-colors"
                    />
                    {errors.name && <p className="text-red-500">{errors.name}</p>}

                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full p-3 rounded-lg bg-surface border border-heading-contact/30 focus:border-heading-contact text-secondary placeholder:text-muted outline-none focus:ring-2 focus:ring-offset-0 focus:ring-heading-contact/50 transition-colors"
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}

                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="5"
                        className="w-full p-3 rounded-lg bg-surface border border-heading-contact/30 focus:border-heading-contact text-secondary placeholder:text-muted outline-none focus:ring-2 focus:ring-offset-0 focus:ring-heading-contact/50 transition-colors"
                    />
                    {errors.message && <p className="text-red-500">{errors.message}</p>}

                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-heading-contact text-white hover:bg-heading-contact/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-heading-contact/50 font-semibold flex items-center justify-center gap-2"
                    >
                        <FaEnvelope /> {status === "sending" ? "Sending..." : "Send Message"}
                    </button>

                    {status === "success" && (
                        <p className="text-green-500 text-center font-semibold">
                            Message sent successfully!
                        </p>
                    )}

                    {status === "error" && (
                        <p className="text-red-500 text-center font-semibold">
                            Something went wrong. Try again.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}




// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaPaperPlane } from "react-icons/fa";

// export default function Contact() {
//     const [form, setForm] = useState({
//         name: "",
//         email: "",
//         message: "",
//     });

//     const [errors, setErrors] = useState({});
//     const [submitted, setSubmitted] = useState(false);

//     const validate = () => {
//         let newErrors = {};

//         if (!form.name.trim()) {
//             newErrors.name = "Name is required";
//         }

//         if (!form.email.trim()) {
//             newErrors.email = "Email is required";
//         } else if (!/\S+@\S+\.\S+/.test(form.email)) {
//             newErrors.email = "Enter a valid email";
//         }

//         if (!form.message.trim()) {
//             newErrors.message = "Message cannot be empty";
//         } else if (form.message.length < 10) {
//             newErrors.message = "Message should be at least 10 characters";
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (validate()) {
//             setSubmitted(true);

//             // Simulate sending message
//             setTimeout(() => {
//                 setForm({ name: "", email: "", message: "" });
//                 setSubmitted(false);
//             }, 2000);
//         }
//     };

//     return (
//         <section
//             id="contact"
//             className="py-20 px-6 bg-gray-50 dark:bg-gray-950"
//         >
//             <div className="max-w-5xl mx-auto">

//                 {/* Heading */}
//                 <motion.h2
//                     initial={{ opacity: 0, y: -30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white"
//                 >
//                     Contact Me 📩
//                 </motion.h2>

//                 <p className="text-center text-gray-600 dark:text-gray-400 mt-3">
//                     Let’s build something amazing together
//                 </p>

//                 {/* Form */}
//                 <motion.form
//                     onSubmit={handleSubmit}
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="mt-12 bg-white/30 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-gray-800 p-8 rounded-2xl shadow-lg space-y-5"
//                 >

//                     {/* Name */}
//                     <div>
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Your Name"
//                             value={form.name}
//                             onChange={handleChange}
//                             className="w-full p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white outline-none"
//                         />
//                         {errors.name && (
//                             <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//                         )}
//                     </div>

//                     {/* Email */}
//                     <div>
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Your Email"
//                             value={form.email}
//                             onChange={handleChange}
//                             className="w-full p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white outline-none"
//                         />
//                         {errors.email && (
//                             <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//                         )}
//                     </div>

//                     {/* Message */}
//                     <div>
//                         <textarea
//                             name="message"
//                             placeholder="Your Message..."
//                             value={form.message}
//                             onChange={handleChange}
//                             rows="5"
//                             className="w-full p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white outline-none"
//                         ></textarea>
//                         {errors.message && (
//                             <p className="text-red-500 text-sm mt-1">{errors.message}</p>
//                         )}
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                         type="submit"
//                         disabled={submitted}
//                         className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition"
//                     >
//                         {submitted ? (
//                             "Sending..."
//                         ) : (
//                             <>
//                                 Send Message <FaPaperPlane />
//                             </>
//                         )}
//                     </button>

//                     {/* Success Message */}
//                     {submitted && (
//                         <p className="text-green-500 text-center text-sm mt-2">
//                             Message sent successfully!
//                         </p>
//                     )}
//                 </motion.form>
//             </div>
//         </section>
//     );
// }