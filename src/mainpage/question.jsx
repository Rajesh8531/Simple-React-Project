import React, {  useState } from 'react'

const Question = ({ans,options,question,show,func}) => {

    let style = 'px-3 mx-3 py-1.5 pb-2.5 my-2 rounded-full hover:bg-blue-600 font-bold bg-blue-600 '

    let [clicked, setClicked] = useState(false)

    let clicked_style = style + 'bg-white'

    let elements = options.map(param => {
        return (<button className={show ? (param == ans ? (style + 'bg-green-500'): clicked_style) : clicked_style} key={param} onClick={show ? null : clicked ? null : (event)=>{event.target.className = style + 'bg-blue-600'
            if (event.target.innerText == ans) {
              func()
            }
            setClicked(true)
           }}>{param}</button>)
    })

   
  return (
    <div className='flex flex-col justify-start mx-40 mt-1 px-2'>
        <h2 className='text-2xl font-semibold pl-4 '>{question}</h2>
        <div className='flex'>{elements}</div>
    </div>
  )
}

export default Question