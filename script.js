const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

var i = setInterval(function () {
  clearInterval(i);

  document.getElementById("loading").style.display = "none";
  document.getElementById("content").style.display = "block";
 
}, 1000);



function colorirImgs(){
  let colorir = document.querySelectorAll('.container-align');
  colorir[0].setAttribute('class', 'container-align-color')
  colorir[1].setAttribute('class', 'container-align-color')
  colorir[2].setAttribute('class', 'container-align-color')
  colorir[3].setAttribute('class', 'container-align-color')
  colorir[4].setAttribute('class', 'container-align-color')
  colorir[5].setAttribute('class', 'container-align-color')
  colorir[6].setAttribute('class', 'container-align-color')
  colorir[7].setAttribute('class', 'container-align-color')
  colorir[8].setAttribute('class', 'container-align-color')
  colorir[9].setAttribute('class', 'container-align-color')
  colorir[10].setAttribute('class', 'container-align-color')
  colorir[11].setAttribute('class', 'container-align-color')
  colorir[12].setAttribute('class', 'container-align-color')
  colorir[13].setAttribute('class', 'container-align-color')
}

function descolorirImgs(){
  let colorir = document.querySelectorAll('.container-align-color');
  colorir[0].setAttribute('class', 'container-align')
  colorir[1].setAttribute('class', 'container-align')
  colorir[2].setAttribute('class', 'container-align')
  colorir[3].setAttribute('class', 'container-align')
  colorir[4].setAttribute('class', 'container-align')
  colorir[5].setAttribute('class', 'container-align')
  colorir[6].setAttribute('class', 'container-align')
  colorir[7].setAttribute('class', 'container-align')
  colorir[8].setAttribute('class', 'container-align')
  colorir[9].setAttribute('class', 'container-align')
  colorir[10].setAttribute('class', 'container-align')
  colorir[11].setAttribute('class', 'container-align')
  colorir[12].setAttribute('class', 'container-align')
  colorir[13].setAttribute('class', 'container-align')
}

document.onmousedown=disableclick;
function disableclick(event)
{
  if(event.button==2)
   {
     return false;    
   }
}


