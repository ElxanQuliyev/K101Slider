const next=document.querySelector(".next")
const prev=document.querySelector(".prev")

const slider = document.getElementById("slider")
const sliderMiddle=document.querySelector(".slider-middle")
const sliderItem=document.querySelectorAll(".slider-item")
const firstClone= sliderItem[0].cloneNode(true)
const lastClone=sliderItem[sliderItem.length-1].cloneNode(true)
sliderMiddle.appendChild(firstClone)
sliderMiddle.prepend(lastClone)

let sliderWidth = slider.offsetWidth * slider.querySelectorAll(".slider-item").length
sliderMiddle.style.width=sliderWidth+"px"

//Cloned add Class Last
slider.querySelectorAll(".slider-item")[slider.querySelectorAll(".slider-item").length-1]
.setAttribute("id","lastClone")

//Cloned add Class First
slider.querySelectorAll(".slider-item")[0].setAttribute("id","firstClone")



var currentSlide=1;

Update()

function Update(){
    sliderMiddle.style.transform="translateX("+-(currentSlide * slider.offsetWidth)+"px"+")"
}

next.addEventListener("click",function(){
    NextSLider();
    slide()
})
prev.addEventListener("click",function(){
    PrevSlider();
})

function NextSLider(){
    currentSlide=(currentSlide+1+sliderItem.length)%sliderItem.length
    Update()  
    slide()

}
function PrevSlider(){
    currentSlide=(currentSlide-1+sliderItem.length)%sliderItem.length
    Update()    
    slide()
    
}
// function slide() {
//     sliderMiddle.style.transition="transform .5s ease-in-out"

//     sliderMiddle    
//     .addEventListener("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){
//         console.log("asdasd")
//         if(sliderItem[currentSlide].id==="lastClone"){
//             console.log("last slider ")
//         }
//     })
//     Update()
// }


