window.addEventListener("scroll", function(){
  let nav = document.querySelector('#menu')
  nav.classList.toggle('rolagem',window.scrollY > 0)
})
