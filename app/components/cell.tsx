import { Dispatch, MouseEventHandler, SetStateAction } from "react";

type CellProps = {
    go: string
    setGo: Dispatch<SetStateAction<string>>
    id :number
    cells:string[]
    setCells:Dispatch<SetStateAction<string[]>>
    cell:string
    winingMessage:string
}


const Cell=({go,setGo,id,cells,setCells,cell,winingMessage}:CellProps)=>{
    const handleClick=()=>{
        if(winingMessage ) return;
        const empty=!cells[id] 
        
        const handleChangeCross=()=>{
            const cells1=[...cells]
            cells1[id]="cross"
            setCells(cells1)
            setGo("circle")
            
        }
        const handleChangeCircle=()=>{
            const cells2=[...cells]
            cells2[id]="circle"
            setCells(cells2)
            setGo("cross")
        }
        if (go==="cross" && empty)  {handleChangeCross()}
        else if (go==="circle" && empty )  {handleChangeCircle()}
        
    }
    return (<div className="square" onClick={handleClick}>
        <div className={cell}>{cell ? (cell==="circle"?"O":"X" ): ""}</div>
    </div>)
}
export default Cell;