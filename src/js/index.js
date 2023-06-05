const readMoreButton = document.getElementById('readMore')
const parrafo = document.querySelector('p[class="read-more"]')
const presentacion = document.getElementById('presentation');
const productResponsive = document.getElementById('productResponsive')
const product = document.getElementById('product')
const secondList = document.getElementById('secondList');
const secondListResponsive = document.getElementById('secondListResponsive');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const nav = document.getElementById('navResponsive');
const app = document.querySelector('.app')
console.log(app)

// al hacer click en leer más se ejecuta este evento
readMoreButton.addEventListener ('click', e => {
  let text = readMoreButton.textContent
    if(text == 'Leer Más'){
      readMoreButton.textContent = 'Ocultar'
      parrafo.classList.remove('read-more');
    }
    else{
      readMoreButton.textContent = 'Leer Más'
      parrafo.classList.add('read-more');
    }
})

// cerrar menu
closeMenu.onclick = ()=>{
  nav.animate([{transform:'translateX(100%)'}],{duration:300,fill:'both'})
  setTimeout(() => nav.style.display = 'none',300)
}

// abrir menu
openMenu.onclick = ()=>{
  nav.style.display = 'block'
  nav.animate(
  [
    {transform:'translateX(0)'}
  ], 
    {duration:300,fill:'both'}
  )
}
// al hacer clik en el enlace producto cuando el menu es responsive, se ejecuta este evento.
productResponsive.addEventListener('click' ,e=>{
  productResponsive.children[1].classList.toggle('arrow-right')
  if(productResponsive.children[1].classList.contains('arrow-right')) secondListResponsive.style.display='flex'
  else secondListResponsive.style.display = 'none'
})
app.addEventListener('scroll', e=>{
  secondList.style.display='none'
  product.children[1].classList.remove('arrow-right')
})
// al hacer clik en el enlace producto cuando el menu es de escritorio, se ejecuta este evento.
product.addEventListener('click', e => {
  product.children[1].classList.toggle('arrow-right')
  if(product.children[1].classList.contains('arrow-right')) secondList.style.display='flex'
  else secondList.style.display = 'none'
})
window.addEventListener('resize', e=>{
  nav.animate([{transform:'translateX(100%)'}],{duration:300,fill:'both'})
  setTimeout(() => nav.style.display = 'none',300)
})

// api de mapa
const map = L.map('map').setView([-33.07666642175081, -68.48266938207793], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.marker([-33.07666642175081, -68.48266938207793]).addTo(map).bindPopup('SDG').openPopup();

