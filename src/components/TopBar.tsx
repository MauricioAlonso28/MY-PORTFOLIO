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
        `w-full flex flex-row justify-between px-3 py-5 rounded-b-lg
        border-b-1 border-x-1`
      }
    >
      <div
        className={
          `flex flex-row items-center gap-1`
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
            "text-[20px] text-[#72d7ff]"
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