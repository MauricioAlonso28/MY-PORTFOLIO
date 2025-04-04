import { ProjectInterface } from '../types/project'
import ImageSoon from "../assets/images/img-soon.png" 
import { FaGithub } from 'react-icons/fa'
import { CiGlobe } from 'react-icons/ci'
import { motion } from "framer-motion"

type Props = {
  item: ProjectInterface
}

const ProjectCard = (props: Props) => {
  return (
    <motion.div
      key={props.item.name}
      className="w-[270px] xl:w-[310px] h-[540px] bg-[#183D5D] rounded-md border-[#ffffff] border-1"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div
        className="relative"
      >
        <img
          src={props.item.image ? props.item.image : ImageSoon}
          alt={props.item.name}
          className="w-full h-auto rounded-t-md"
        />
        <span
          className="block text-sm absolute right-2 top-2 text-[#061425]"
        >
          {props.item.date}
        </span>
        <h3
          className="text-[18px] font-bold absolute text-[#061425] bottom-2 left-2"
        >
          {props.item.name}
        </h3>
      </div>
      <div
        className='p-2 flex flex-col gap-2 rounded-b-md relative h-[270px] xl:h-[230px]'
      >
        <p
          className="text-[14px] text-white"
        >
          {props.item.description}
        </p>
        <div
          className='break-words text-white'
        >
          <h4
            className='text-[13px]'
          >
            Stack:
          </h4>
          {
            props.item.stack.map((stack, index) => { 
              return (
                <span
                  key={index}
                  className="text-[12px] inline-block mr-1.5"
                >
                  {
                    index > 0 && index < props.item.stack.length
                      ? `- ${stack}`
                      : stack
                  }
                </span>
              )
            })
          }
        </div> 
        <div
          className="absolute bottom-2 left-0 w-full flex flex-row justify-center gap-6"
        >
          <a 
            href={props.item.github_url && props.item.github_url}
            target='_blank'
            className={
              `transition duration-300 text-[#fbf9f9e2]
              ${props.item.github_url && "cursor-pointer hover:text-[#fff]"}`
            }
          >
            <FaGithub
              size={32}
            />
          </a>
          <a 
            href={props.item.deploy_url && props.item.deploy_url}
            target='_blank'
            className={
              `transition duration-300 text-[#fbf9f9e2]
              ${props.item.deploy_url && "cursor-pointer hover:text-[#fff]"}`
            }
          >
            <CiGlobe
              size={32}
            />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard