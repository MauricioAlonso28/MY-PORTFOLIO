import {
  RiFirebaseFill,
} from "react-icons/ri";
import { SiNestjs, SiSwagger, SiTypeorm } from "react-icons/si";
import {
  TbBrandReactNative,
  TbBrandRedux,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandNodejs,
  TbBrandMysql,
} from "react-icons/tb";
import { motion } from "framer-motion"


const icons = [
  <TbBrandReact size={46} color="#61DAFB"/>,
  <TbBrandRedux size={46} color="#764ABC"/>,
  <TbBrandTailwind size={46} color="#06b6d4"/>,
  <TbBrandNodejs size={46} color="#8CC84B"/>,
  <SiNestjs size={46} color="#e9064f"/>,
  <SiTypeorm size={46} color="#f13e0b"/>,
  <TbBrandMysql size={46} color="#00758F"/>,
  <TbBrandReactNative size={46} color="#61DAFB"/>,
  <RiFirebaseFill size={46} color="#d32f2f"/>,
  <SiSwagger size={46} color="#85EA2D"/>
];

const iconsName = [
  "React",
  "Redux",
  "Tailwind",
  "Node.js",
  "Nest.js",
  "TypeORM",
  "MySQL",
  "React Native",
  "Firebase",
  "Swagger",
]

const StackSection = () => {
  return (
    <div
      id='stack'
      className={
        `flex flex-col items-center py-10`
      }
    >
      <h2
        className={
          "text-[28px] cursor-context-menu transition duration-300 hover:text-amber-50"
        }
      >
        Stack
      </h2>

      <div
        className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4 py-10 w-19/20 justify-center place-items-center"
      >
        {
          icons.map((icon, index) => (
            <motion.div
              key={iconsName[index]}
              className="flex flex-col items-center m-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <b>{icon}</b>
              <p className="text-white cursor-context-menu">{iconsName[index]}</p>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default StackSection

{/* CAROUSEL */}
{/* <div
  className="flex flex-col items-center p-10 text-white gap-1.5"
>
  <div className="icon">{icons[count]}</div>
  <p
    className="text-[18px]"
  >
    {iconsName[count]}
  </p>
</div> */}