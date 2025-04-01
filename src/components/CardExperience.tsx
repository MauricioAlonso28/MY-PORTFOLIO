import { ExperienceCardInterface } from '../types/experience'

type Props = {
  item: ExperienceCardInterface,
  index: number
  isOpen: boolean;
  toggleOpen: () => void;
}

const CardExperience = (props: Props) => {
  return (
    <div
      className={`w-full flex sm:items-center ${
        props.index % 2 === 0 ? "sm:justify-start md:pr-8" : "sm:justify-end md:pl-8"
      }`}
    >
      <div
        className="bg-[#183D5D] border border-gray-200 rounded-md p-4 w-4/9 sm:max-w-[90%] md:max-w-[75%] lg:max-w-md relative"
      >
        <div
          className={
            "flex flex-col"
          }
        >
          <h3
            className='text-[18px]'
          >
            {props.item.role}
          </h3>
          <small
            className='text-[12px]'
          >
            {props.item.location}
          </small>
          <small
            className='text-[12px]'
          >
            {props.item.company}  
          </small>
        </div>
        <div
          className='flex flex-col gap-4 py-4'
        >
          <ol
            className="list-disc list-inside text-sm text-[13px]"
          >
            <h4>
              Tasks:
            </h4>
            {
              props.item.tasks.length > 0 && props.item.tasks.map((item, index) => {
                
                return (
                  <li
                    key={index}
                    className='py-1'
                  >
                    {item}
                  </li>
                )
              })
            }  
          </ol>
          {
            props.isOpen && (
              <ol className="list-disc list-inside text-sm text-[13px]">
                <h4>Achievements:</h4>
                {props.item.achievements.length > 0 && props.item.achievements.map((item, index) => (
                  <li key={index} className='py-1'>{item}</li>
                ))}
              </ol>
            )
          }
        </div>
        {
          props.isOpen && 
            <div
              className={
                "break-words"
              }
            >
              {
                props.item.skills.length > 0 && props.item.skills.map((item, index) => {
                  return (
                    <small
                      key={index}
                      className="text-[12px] inline-block mr-1.5"
                    >
                      #{item}
                    </small>
                  )
                })
              }
            </div>
        }
        {!props.isOpen && (
          <div
            className={
              `absolute bottom-0 left-0 w-full h-30 bg-gradient-to-t from-[#183D5D] to-transparent`
            }
          />
        )}
        
        <button
          className={
            `absolute bottom-2 right-2 text-white px-3 py-1 rounded-md cursor-pointer`
          }
          onClick={props.toggleOpen}
        >
          {props.isOpen ? "▲" : "..."}
        </button>
      </div>
    </div>
  )
}

export default CardExperience