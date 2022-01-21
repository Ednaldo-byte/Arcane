
function show_hide(){
  let modal = document.querySelector(".modal")
  if (modal.classList.contains("sr-only")){
    modal.classList.remove("sr-only")
  }
  else{
    modal.classList.add("sr-only")
  }
  console.log("olá, mundo")
}
