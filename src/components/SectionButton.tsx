type Props = {
  label: string
  ref?: string
  isActive: boolean
  setActiveSection: Function
}

const SectionButton = (props: Props) => {
  const handleClick = () => {
    const sectionId = props.ref?.replace("#", "")
    props.setActiveSection(sectionId)
  }

  return (
    <li
      className={
        `px-3 rounded-md transition-colors duration-300 cursor-pointer text-[16px]
        ${props.isActive && "underline underline-offset-4 text-[#72d7ff] [text-shadow:_0_3px_7px_#72d7ff]"}`
      }
      onClick={() => handleClick()}
    >
      {
        props.ref ? (
          <a
            href={props.ref}
          >
            {props.label}
          </a>
        ) : (
            <span>
              {props.label}
            </span>
        )
      }
    </li>
  )
}

export default SectionButton