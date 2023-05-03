import React, { useState } from 'react'
import Question from './question'
import Data from './questions'

const MainPage = (props) => {
    
    
    let render =props.render 

    let data = Data

    let [score , setScore] = useState(0)

    const total_score = data.length

    function sample() {
        setScore(prev => prev + 1)
    }
    
    let [show_answer, setShow_answer ] = useState(false)

    let elements = data.map(param => {
        return <Question question = {param.question} options={param.options} ans={param.ans} key={param.ans} func = {sample} show={show_answer}  a />
    })
    
    let style = render ? ' flex flex-col gap-3 my-10 mx-2' : 'fixed -top-80 invisible'
    
    return (
    <div className='flex flex-col justify-center items-center mb-20'>
    <div className={style}>
        {elements}
        
    </div>
    <div className='flex items-center justify-evenly w-5xl'>
        {show_answer && <p className='font-bold text-xl mr-8'>{`You Scored ${score} out of ${total_score}!`}</p> }
    <button className={render ? (show_answer ?  'invisible fixed bottom-0' : 'font-semibold text-white bg-blue-950 px-8 py-3 rounded-lg') : 'invisible fixed bottom-0' } onClick={()=>{
        setShow_answer(true)
    }} >Check Answers</button>

    <button className={show_answer ? 'font-semibold text-white bg-blue-950 px-8 py-3 rounded-lg' : 'invisible fixed bottom-0'} onClick={()=>{
        window.location.reload()
    }}>Restart</button>

    </div>
    </div>
  )
}

export default MainPage