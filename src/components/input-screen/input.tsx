import { faAngleUp, faAngleDown, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export const ScreenInput = () => {
  const [screen1, setScreen1] = useState([0])

  const addCol = (x:number) => {
    setScreen1(currState => {
      const newState = [
        ...currState,
        x
      ];
      return newState
    })
  }

  return (
    <div>
      <div className='grid place-items-end'>

      {/* vertical control */}
      <div className='flex'>
        <div className='flex flex-col order-last gap-2.5 mx-2.5 w-[2rem] justify-end'>
          <button className='border h-[2rem] grid place-items-center '>
            <FontAwesomeIcon icon={faAngleUp}/>
          </button>
          <button className='border h-[2rem] grid place-items-center'>
            <FontAwesomeIcon icon={faAngleDown}/>
          </button>
        </div>

        {/* input controls */}
        <div className='h-[20rem] w-[25rem] border'>
          <div className='grid grid-cols-4  place-items-center h-full mx-2'>
            {screen1.map((x, index) => (
              <input
                className='border w-[5rem]'
                key={index}
                type="text"
                name=""
                id=""
                value={`input ${x}`}/>
            ))}
          </div>
        </div>
      </div>

      {/* horizontal control */}
      <div className='flex gap-2.5 my-2.5 h-[2rem] mr-[3.2rem]'>
        <button className='border w-[2rem] grid place-items-center '>
          <FontAwesomeIcon icon={faChevronLeft}/>
        </button>
        <button
          className='border w-[2rem] grid place-items-center'
          onClick={() => addCol(1)}>
          <FontAwesomeIcon icon={faChevronRight}/>
        </button>
      </div>
      </div>
    </div>
  )
}