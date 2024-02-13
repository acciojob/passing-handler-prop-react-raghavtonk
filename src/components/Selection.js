import React,{useState} from "react";


const Selection=({applyColor})=>{
    const [currentColor, setCurrentColor] = useState({ background: "" });
    function changeColor(){
        applyColor(setCurrentColor)
    }
    return(
        <div className="fix-box" style={{ backgroundColor: currentColor.background }} onClick={changeColor}>
            <h1>Selection</h1>
        </div>
    )
}

export default Selection;
