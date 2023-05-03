import { useState } from 'react'
import StartPage from './startpage/starpage'
import MainPage from './mainpage/mainpage'



function App() {

  let [main ,setMain] = useState(false)
  
  function main_() {
    setMain(true)
  }

  return <div>
    <StartPage func={main_} />
    <MainPage render={main}  />
  </div> }

  

export default App
