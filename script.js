const toast=document.getElementById("toast")
document.querySelectorAll("[data-copy]").forEach(e=>{
e.addEventListener("click",()=>{
navigator.clipboard.writeText(e.getAttribute("data-copy"))
toast.classList.add("show")
setTimeout(()=>toast.classList.remove("show"),2000)
})
})