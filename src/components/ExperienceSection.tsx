import { useState } from "react";
import { experiencesObject } from "../assets/data/Experiences"
import CardExperience from "./CardExperience"
import { motion } from "framer-motion"

const ExperienceSection = () => {
  const [openCard, setOpenCard] = useState<number | null>(null);
  
  return (
    <div
      id='experience'
      className={
        `w-full px-4 py-5 flex flex-col items-center gap-8`
      }
    >
      <h2
        className={
          "text-[28px] cursor-context-menu transition duration-300 hover:text-amber-50"
        }
      >
        Experience
      </h2>

      <div className="relative w-full max-w-4xl">
        {/* CENTER LINE */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sky-300 hidden sm:block" />

        {experiencesObject.map((item, index) => (
          <div key={index} className="relative mb-16 flex flex-col items-center text-white space-y-1">

            {/* CIRCULAR POINT */}
            <div
              className={
                "absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-sky-400 rounded-full border-4 border-[#030B26] z-10 hidden sm:block"
              }
            />

            <motion.div
              key={index}
              className="relative flex flex-col items-center text-white space-y-1 w-full"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3
                className={
                  `w-full flex sm:items-center ${
                    index % 2 === 0 ? "sm:justify-start md:pr-8" : "sm:justify-end md:pl-8"
                  }`
                }
              >
                {item.date}
              </h3>
              {/* CARD CONTAINER */}
              <CardExperience
                key={index}
                index={index}
                item={item}
                isOpen={openCard === index}
                toggleOpen={() => setOpenCard(openCard === index ? null : index)}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceSection