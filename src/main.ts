import Swal from 'sweetalert2';

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'normalize.css/normalize.css'

import './style.css'

import { setGradient,setOrientation } from './helpers';
import { changeOrientation } from './orientation';


const firstColorInput = document.getElementById('firstcolor') as HTMLInputElement;
const secondColorInput = document.getElementById('secondcolor') as HTMLInputElement;
const body = document.querySelector('body');

const clipBoardButton = document.getElementById('btncopy') as HTMLButtonElement;
const orientationButtons = document.querySelectorAll('.btnOrientation');

let orientation_1 = "to right";

clipBoardButton.addEventListener("click",() => changeOrientation({first: firstColorInput, second: secondColorInput},orientation_1))






orientationButtons.forEach((button)=>{
    
    button.addEventListener("click",()=>{
        const currentButton = button as HTMLButtonElement;
        setOrientation(
            orientation_1,
            `${currentButton.dataset.value}`, 
            button as HTMLButtonElement,
            {first: firstColorInput,
             second: secondColorInput
            });
    }

    );
})

//topButton.addEventListener("click",()=>{
 //   setOrientation("to top",topButton);
//})



firstColorInput.addEventListener("input",(event)=>{
    const input: HTMLInputElement = event.target as HTMLInputElement;
    body!.style.background = setGradient(input.value,secondColorInput.value,orientation_1);
    //console.log(input.value);
});

secondColorInput.addEventListener("input",(event)=>{
    const input: HTMLInputElement = event.target as HTMLInputElement;
    body!.style.background = setGradient(firstColorInput.value,input.value,orientation_1);
    //console.log(input.value);
});

console.log(firstColorInput.value);
