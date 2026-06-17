import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <main className="overflow-x-visible">

            <section id="home">
                <Hero />
            </section>

            <section id="about" className="scroll-mt-20">
                <About />
            </section>

            <section id="skills" className="scroll-mt-20">
                <Skills />
            </section>

            <section id="projects" className="scroll-mt-20">
                <Projects />
            </section>

            <section id="education" className="scroll-mt-20">
                <Education />
            </section>

            <section id="experience" className="scroll-mt-20">
                <Experience />
            </section>

            <section id="certifications" className="scroll-mt-20">
                <Certifications />
            </section>

            <section id="contact" className="scroll-mt-20">
                <Contact />
            </section>

            <Footer />
        </main>
    );
}