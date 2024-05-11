import Swal from "sweetalert2";
import { setGradient } from "../helpers";
import { HTMLInputs } from "../interfaces";

export const changeOrientation = async(inputs: HTMLInputs,orientation:string)=>{
    const gradient =  setGradient(
        inputs.first.value,
        inputs.second.value,
        orientation
    );
    if (!navigator.clipboard){
        ///console.log("API unsopported")
        Swal.fire("Error", "API Unsopported","error");
        return;
    }

    
    await navigator.clipboard.writeText(gradient);

    Swal.fire({
        title: "Succress",
        text: "Gradien Copy to clipboard",
        icon: "success",
        toast: true,
        position: "top-end",
        timer: 3000,
        timerProgressBar: true
    });
    
    //console.log(gradient);
}