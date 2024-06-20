import React,{useState} from "react";
import './ColorPicker.css';

const ColorPicker = ({ changeColor }) => {

    const colors = ["red" , "green" , "blue" , "grey" , "black" , "pink" , "purple" , "yellow"]

    return(
        <div className="color-picker" >
            <h1>Choose a Background Color</h1>
            <div className="color-btns">
                {colors.map((color) => (
                    <button key={color} className={`color-btn ${color}`} onClick={() => changeColor(color)}>
                        {color}
                    </button>
                ))}
            </div>
        </div>
    )
}
export default ColorPicker