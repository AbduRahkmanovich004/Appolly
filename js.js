const downloud =  document.querySelector(".downloud")
const times = document.querySelector(".times")
downloud.addEventListener("click",()=>{
    document.querySelector(".modal").style.display=("flex")
    document.querySelector("aside").classList.remove("aside")
})
times.addEventListener("click",()=>{
    document.querySelector(".modal").style.display=("none")
})
document.addEventListener("keydown",(e)=>{
    if(e.key=="Escape") document.querySelector(".modal").style.display=("none")
})


const menuOpen = document.querySelector(".bottomNav svg")
const menuClose = document.querySelector("aside img")
menuOpen.addEventListener("click",()=>{
    document.querySelector("aside").classList.add("aside")
})
menuClose.addEventListener("click",()=>{
    document.querySelector("aside").classList.remove("aside")
})