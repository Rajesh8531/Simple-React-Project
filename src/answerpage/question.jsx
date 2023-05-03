import React, { useState } from 'react'

const Question = (props) => {

    let ans = props.ans
    let options = props.options
    let question = props.question

    let style = 'px-3 mx-3 py-1.5 my-2 rounded-lg hover:bg-teal-400 font-bold '

    let button__style = style + 'bg-gray-300'

    let [clicked, setClicked] = useState(false)

    let elements = options.map(param => {
        return (<button className={button__style} key={param} onClick={clicked ? null : (event)=>{event.target.className = style + 'bg-blue-600'
            if (event.target.innerText == ans) {
              props.func()
                        }
            setClicked(true)
           }}>{param}</button>)
    })

   
  return (
    <div className='flex flex-col justify-start mx-40   bg-orange-300 px-2'>
        <h2 className='text-2xl font-semibold pl-4'>{question}</h2>
        <div className='flex'>{elements}</div>
    </div>
  )
}

export default Question