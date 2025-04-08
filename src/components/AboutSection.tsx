import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div
      id='about'
      className={
        `w-full px-4 pb-15 flex flex-col items-center gap-8 py-10`
      }
    >
      <div
        className={
          "w-6/7 flex items-center flex-col gap-2 xl:w-6/7"
        }
      >
        <h2
          className={
            "text-[28px] cursor-context-menu transition duration-300 hover:text-amber-50"
          }
        >
          Software Developer
        </h2>
        <p
          className={
            "text-justify"
          }
        >
          +1 year of experience as software developer, I have worked on personal, freelance projects and as
          mobile developer. I excel in innovative functions, problem-solving, effective team communication, and
          adaptability to different environments. These skills enable me to provide significant value to your
          company.
        </p>
      </div>
      <div
        className={
          "flex flex-row justify-between w-6/7 xl:w-6/7"
        }
      >
        <ul
          className={
            `flex flex-row gap-5 items-center`
          }
        >
          <a
            className="transition duration-300 hover:text-[#fff]"
            href="https://www.linkedin.com/in/mauricio-ayllon28/"
            target="_blank"
          >
            <FaLinkedin
              size={24}
            />
          </a>
          <a
            className="transition duration-300 hover:text-[#fff]"
            href="https://github.com/MauricioAlonso28"
            target="_blank"
          >
            <FaGithub
              size={24}
              href="https://github.com/MauricioAlonso28"
            />
          </a>
          <a
            className="transition duration-300 hover:text-[#fff]"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mauri051928@gmail.com"
            target="_blank"
          >
            <FaEnvelope
              size={24}
            />
          </a>
        </ul>
        <button
          type='button'
          className={
            `bg-[#cdcabb] text-[#18181b] font-bold px-3 py-1 rounded-2xl 
            cursor-pointer transition duration-300 hover:bg-[#fff]`
          }
        >
          <a
            href="/MauricioAyllón-CV.pdf"
            download={"MauricioAyllón.pdf"}
          >
            Download CV
          </a>
        </button>
      </div>
    </div>
  )
}

export default AboutSection