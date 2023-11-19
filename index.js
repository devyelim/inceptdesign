

// Navbar Scroll

window.addEventListener("scroll", function(){
  let nav = document.querySelector('#menu')
  nav.classList.toggle('rolagem',window.scrollY > 150) 
})


// Mudança de logo conforme Scroll
jQuery("document").ready(function($){
	    	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$("#logo").attr("src", "img/incept-ligth.png");
		} else {
			$("#logo").attr("src", "img/incept-ligth.png");
		}      
	});

});



// Animações ao Scroll

const my0bserver = new IntersectionObserver((entries) => {
  entries.forEach( (entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    } else {
      entry.target.classList.remove('visible')
    }
  })
})

const elements = document.querySelectorAll('.ocult')

// elements.forEach( (element) => my0bserver.observe(element))


// var onda1 = document.getElementById('onda1')
// var onda2 = document.getElementById('onda2')
// var onda3 = document.getElementById('onda3')
// var onda4 = document.getElementById('onda4')


// Modo Escuro/Dark

// let trilho = document.getElementById('trilho')
// let body = document.querySelector('body')


// trilho.addEventListener('click',()=>{
//   trilho.classList.toggle('dark-mode')
//   body.classList.toggle('dark-mode')
// })


// Revelar ao Scrollar

window.revelar = ScrollReveal({reset:true})

// Topo do Site

revelar.reveal('.nocturne', {
  duration: 1000,
  distance: '90px'
})


// Efeito Cards de produtos

revelar.reveal('.efeito-card1', {
  duration: 2000,
  distance: '90px',
  delay: 500
})

revelar.reveal('.efeito-card2', {
  duration: 2000,
  distance: '90px',
  delay: 600
})

revelar.reveal('.efeito-card3', {
  duration: 2000,
  distance: '90px',
  delay: 700
})



// Efeito Card do Portifolio
revelar.reveal('.efeito-card4', {
  duration: 2000,
  distance: '90px',
  delay: 500
})

revelar.reveal('.efeito-card5', {
  duration: 2000,
  distance: '90px',
  delay: 600
})

revelar.reveal('.efeito-card6', {
  duration: 2000,
  distance: '90px',
  delay: 700
})

revelar.reveal('.efeito-card7', {
  duration: 2000,
  distance: '90px',
  delay: 800
})


// Efeito surgir das laterais

revelar.reveal('.esquerda-direita', {
  duration: 1000,
  distance: '90px',
  delay: 500,
  origin: 'left'
})

revelar.reveal('.direita-esquerda', {
  duration: 1000,
  distance: '90px',
  delay: 600,
  origin: 'right'
})


let list = document.querySelectorAll('.list');
let projeto = document.querySelectorAll('.projeto');

  for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function (){
      for(let j = 0; j<list.length; j++){
        list[j].classList.remove('active');
      }
      this.classList.add('active');

      let dataFilter = this.getAttribute('data-filter');
      for( let k = 0; k<projeto.length; k++){
        projeto[k].classList.remove('active');
        projeto[k].classList.add('hide');

        if(projeto[k].getAttribute('data-item') == dataFilter ||
        dataFilter == "tudo"){
          projeto[k].classList.remove('hide');
          projeto[k].classList.add('active');

        }
      }
    })
  }
