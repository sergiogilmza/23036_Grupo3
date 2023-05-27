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

closeMenu.onclick = ()=>{
  nav.animate([{transform:'translateX(100%)'}],{duration:300,fill:'both'})
  setTimeout(() => nav.style.display = 'none',300)
}
openMenu.onclick = ()=>{
  nav.style.display = 'block'
  nav.animate(
  [
    {transform:'translateX(0)'}
  ], 
    {duration:300,fill:'both'}
  )
}
productResponsive.addEventListener('click' ,e=>{
  productResponsive.children[1].classList.toggle('arrow-right')
  if(productResponsive.children[1].classList.contains('arrow-right')) secondListResponsive.style.display='flex'
  else secondListResponsive.style.display = 'none'
})
product.addEventListener('click', e => {
  product.children[1].classList.toggle('arrow-right')
  if(product.children[1].classList.contains('arrow-right')) secondList.style.display='flex'
  else secondList.style.display = 'none'
})
const map = L.map('map').setView([51.505, -0.09], 13);

 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  L.marker([51.5, -0.09]).addTo(map).bindPopup('SDG').openPopup();


