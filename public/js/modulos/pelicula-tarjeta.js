const peliculasTarjetas = document.querySelectorAll('#peliculas-tarjetas .card');


peliculasTarjetas.forEach((tarjeta) => {

  tarjeta.addEventListener('mouseover', () => {
    tarjeta.children[1].classList.remove('animate__fadeOut');
    tarjeta.children[1].classList.add('animate__animated', 'animate__fadeIn', 'd-flex');
  })

  tarjeta.addEventListener('mouseout', () => {
    tarjeta.children[1].classList.remove('animate__fadeIn');
    tarjeta.children[1].classList.add('animate__fadeOut');
  });
})
