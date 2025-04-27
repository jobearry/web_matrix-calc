import { faAngleUp, faAngleDown, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export const ScreenInput = () => {
  // const [input, setInput] = useState('')
  const [grid, setGrid] = useState({
    col: [""],
    row: [""]
  })
  console.log(grid.col)
  const onInputChange = (inputValue:string, index: number) => {
    setGrid(currentState => {
      return {
        ...currentState,
        col: currentState.col.map((item, i) => i === index ? inputValue : item )
      }
    })
  }

  const addCol = () => {
    setGrid(currState => {
      if(currState.col.length < 4){
        const newState = {
          ...currState,
          col: [...currState.col, ""]
        };
        return newState
      }else{
        console.log("🚀 ~ addCol ~ currState:", currState)
        return currState
      }
    })
  }

  const reduceCol = () => {
    setGrid(currState => {
      if(currState.col.length > 1){
        return { 
          ...currState, 
          col: currState.col.slice(0, currState.col.length - 1) 
        }
      }else{
        return currState
      }
    })
  }

  const reduceRow = () => {
    setGrid(currState => {
      if(currState.row.length > 1){
        return { 
          ...currState, 
          row: currState.row.slice(0, currState.row.length - 1) 
        }
      }else{
        return currState
      }
    })
  }

  const addRow = () => {
    setGrid(currState => {
      if(currState.row.length < 4){
        return {
          ...currState,
          row:  [...currState.row, ""]
        }
      }else{
        return currState
      }
    })
  }

  return (
    <div className='grid place-items-center border rounded-md border-[#747474] bg-[#ffffff] shadow shadow-[#d1d1d1]
      w-fit'>
      {/* vertical control */}
      <div className='flex'>
        <div className='flex flex-col order-last gap-2.5 mx-2.5 w-[2rem] h-full self-end'>
          <button className='border border-[#747474] h-[2rem] grid place-items-center rounded-sm
          hover:bg-[#d1d1d1]'
            onClick={() => reduceRow()}>
            <FontAwesomeIcon icon={faAngleUp}/>
          </button>
          <button className='border border-[#747474] h-[2rem] grid place-items-center rounded-sm
          hover:bg-[#d1d1d1]'
            onClick={() => addRow()}>
            <FontAwesomeIcon icon={faAngleDown}/>
          </button>
        </div>

        {/* input controls */}
        <div className='h-[12rem] w-[23rem] '>
          <div className='grid h-fit w-full place-items-center'>
            
            <div className="h-fit w-full flex flex-col justify-evenly">
              {grid.row.map((_,index) => (
                <div key={index} className="flex justify-evenly my-2">
                  {grid.col.map((x, index) => (
                    <input
                      className='border border-[#747474] w-[5.5rem] h-[2rem] rounded-sm'
                      key={index}
                      type="text"
                      name=""
                      id=""
                      onChange={(e) => onInputChange(e.target.value, index)}
                      value={x}
                      placeholder="0"/>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* horizontal control */}
      <div className='flex gap-2.5 my-2.5 h-[2rem] mx-2.5 justify-self-end'>
        <button className='border border-[#747474] w-[2rem] grid place-items-center rounded-sm
          hover:bg-[#d1d1d1]'
          onClick={() => reduceCol()}>
          <FontAwesomeIcon icon={faChevronLeft}/>
        </button>
        <button className='border border-[#747474] w-[2rem] grid place-items-center rounded-sm
          hover:bg-[#d1d1d1]'
          onClick={() => addCol()}>
          <FontAwesomeIcon icon={faChevronRight}/>
        </button>
      </div>
    </div>
)
}