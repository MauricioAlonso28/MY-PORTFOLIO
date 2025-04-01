import { buttonsSections } from "../assets/data/ButtonsSections"
import SectionButton from "./SectionButton"

type Props = {
  activeSection: string
  setActiveSection: (section: string) => void
}

const TopBar = (props: Props) => {
  return (
    <nav
      className={
        `sticky top-0 w-full flex flex-row justify-between px-3 py-5 rounded-b-lg border-b-1 border-x-1 shadow-md z-50 bg-[#18181b]`
      }
    >
      <div
        className={
          `flex flex-row items-center gap-1 hover:text-amber-50 
          cursor-context-menu transition duration-300`
        }
      >
        <h1
          className={
            "text-[20px]"
          }
        >
          Mauricio
        </h1>
        <h1
          className={
            "text-[20px]"
          }
        >
          Ayllón
        </h1>
      </div>
      <ul
        className={
          `flex flex-row gap-2 items-center`
        }
      >
        {
          buttonsSections.map((button, index) => {
            return <SectionButton
              key={index}
              label={button.label}
              ref={button.ref}
              isActive={button.ref === `#${props.activeSection}`}
              setActiveSection={props.setActiveSection}
            />
          })
        }
      </ul>
    </nav>
  )
}

export default TopBar