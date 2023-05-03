import React, { useState } from 'react'

const StartPage = (props) => {
    const [div_style,setDiv_style] = useState('flex flex-col items-center justify-center mt-52')
    
  return (
    <div className={div_style}>
        <h1 className='text-5xl font-bold p-3 '>Quizzical</h1>
        <p className='text-3xl p-2'>Welcome!</p>
        <button className='bg-blue-500 text-white text-2xl px-8 pb-3 py-2 rounded-lg m-2 opacity-80 hover:opacity-100' onClick={()=>{
            setDiv_style('fixed -top-1/2 invisible');
            props.func()
        }}>Start Quiz</button>
    </div>
  )
}

export default StartPage