import { useEffect, useState } from "react"
import AboutSection from "../components/AboutSection"
import ContactSection from "../components/ContactSection"
import ExperienceSection from "../components/ExperienceSection"
import ProjectsSection from "../components/ProjectsSection"
import StackSection from "../components/StackSection"
import TopBar from "../components/TopBar"
import {motion} from "framer-motion"

const sections = ["about", "experience", "projects", "stack", "contact"];

const Landing = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const currentHash = window.location.hash.substring(1);
    if (sections.includes(currentHash)) {
      setActiveSection(currentHash);
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
          window.history.replaceState(null, "", `#${sectionId}`); 
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <div
      className={"w-full flex flex-col items-center"}
    >
      <div
        className={
          "w-4/7 h-screen"
        }
      >
        <TopBar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <AboutSection />
        <ExperienceSection />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <ProjectsSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <StackSection />
        </motion.div>
        <ContactSection />
      </div>
    </div>
  )
}

export default Landing