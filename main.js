let btnSlider = document.getElementById("slider-button")
let sliderOut = document.getElementById("slider-out")
let closeSlider = document.getElementById("close-slider")
btnSlider.addEventListener("click",()=>{
    sliderOut.style.display = "block"
})

closeSlider.addEventListener("click",()=>{
    sliderOut.style.display = "none"
})