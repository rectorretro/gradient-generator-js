import { HTMLInputs } from "../interfaces";
import { setGradient } from "./setGradient";

export const setOrientation = (
    orientation: string,
    newOrientation: string, 
    buttonElement: HTMLButtonElement,
    inputs: HTMLInputs
)=>{

    const body = document.querySelector('body');
    //console.log("antes de cambio"+orientation)
    orientation = newOrientation;
    //console.log("después del cambio" +orientation)
    const activeButton = document.querySelectorAll(".active");
    activeButton.forEach((button)=>{
        button.classList.remove("active")
    })

    if(buttonElement.classList.contains("active")){
        buttonElement.classList.remove("active")
    }else{
        buttonElement.classList.add("active");
    }
    
    
    body!.style.background = setGradient(
        inputs.first.value,
        inputs.second.value,
        orientation);

}
