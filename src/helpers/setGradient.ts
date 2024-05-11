export const setGradient = (
    firstColor: string, 
    secondColor: string, 
    orientation: string = "to right"
) =>{
    const text = document.getElementById('text') as HTMLParagraphElement;

    const gradient =  `linear-gradient(${orientation}, ${firstColor}, ${secondColor})`;
    text!.innerText = gradient;
    return gradient;
}