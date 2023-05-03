import React, { useState } from 'react'
import Question from './question'

const AnswerPage = () => {

  let data = [
    {
       question : 'How would one say goodbye in Spanish?' ,
       options  : ['Adios','Hola','Au Revoir','Sair'] ,
       ans : 'Adios'
   },
    {
       question : 'Which is the best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?' ,
       options  : ['Cabbage Patch Kids' ,'Transformers','Care Bears',"Rublk's Cube"] ,
       ans : 'Care Bears'
   },
    {
       question : 'What is the hottest planet in our Solar System?' ,
       options  : ['Mercury','Venus','Mars','Saturn'] ,
       ans : 'Venus'
   },
    {
       question : 'In which country was the caesar salad invented?' ,
       options  : ['Italy','Portugal','Mexico','France'] ,
       ans : 'Mexico'
   },
    {
       question : 'How Many Hearts Does An Octopus Have?' ,
       options  : ['One','Two','Three','Four'] ,
       ans : 'Three'
   }
  ]

  return (
    <div>
        
    </div>
  )
}

export default AnswerPage