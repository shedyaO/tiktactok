// import Image from 'next/image'

"use client";
import Cell from "./components/cell";
import {useEffect, useState} from "react"
const winningCombos=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
export default function Home() {
  
  const [cells,setCells] = useState (["","","","","","","","",""])
  
  const [go,setGo]=useState("circle") 
  const [winingMessage,setWiningMessage]=useState("")
  
  console.log(`*********************************************`)
  console.log(`before return winigMessage= ${winingMessage}`)
  console.log(`cells ${cells}`)
  useEffect(()=>{
    winningCombos.forEach((combo)=>{
      const circlewins = combo.every((cell)=>cells[cell]==="circle")
      const crosswins = combo.every((cell)=>cells[cell]==="cross")
      if (crosswins) {
        setWiningMessage("Cross Wins!")} else if (circlewins) {
           setWiningMessage("Circle Wins!") }
    })
     console.log(`useEffect1 ${winingMessage}`)
  },[cells,winingMessage])
  
  useEffect(()=>{
    if (!winingMessage && cells.every((cell)=>cell!==""))
           { setWiningMessage("NO WINNERS !!!")
             }
    console.log(`useEffect2 ${winingMessage}`)
    console.log(`*********************************************`)
  },[cells,winingMessage])
  
  return (
    <div className="container">
      <div className="gameboard">
        { cells.map((cell,index)=>(
                <Cell 
                   id={index}
                   go={go}
                   setGo={setGo}
                   cells={cells}
                   setCells={setCells} 
                   key={index} 
                   cell={cell}
                   winingMessage={winingMessage}
                />
              )
              ) 
           
        }
        
      </div>
      <div> { winingMessage}</div>
      <div>{  !winingMessage && `It's now ${go} turn` }</div>
      
      
    </div>
  )
}
