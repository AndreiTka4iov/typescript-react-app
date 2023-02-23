import React, { FC, useRef, useState } from 'react'

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);

    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG');
        
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const LeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('drop')
    }
  return (
    <div>
        <input type="text" value={value} onChange={changeHandler} placeholder="Управляемый"/>
        <input ref={inputRef} type="text" placeholder="Неуправляемый"/>
        <button onClick={clickHandler}>test</button>
        <div onDrag={dragHandler} draggable style={{width: '200px', height: '200px', background: 'red', marginTop:'15px'}}></div>
        <div 
        onDrop={dropHandler} 
        onDragLeave={LeaveHandler} 
        onDragOver={dragWithPreventHandler}
        style={{width: '200px', height: '200px', background: isDrag ? 'blue' : 'red', marginTop:'15px'}}></div>
    </div>
  )
}

export default EventsExample