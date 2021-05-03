const peliculasTarjetas = document.querySelectorAll('#peliculas-tarjetas .card');


peliculasTarjetas.forEach((tarjeta) => {

  tarjeta.addEventListener('mouseover', () => {
    tarjeta.children[1].classList.remove('animate__fadeOut');
    tarjeta.children[1].classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-0.5s', 'd-flex');
  });

  tarjeta.addEventListener('mouseout', () => {
    tarjeta.children[1].classList.remove('animate__fadeIn');
    tarjeta.children[1].classList.add('animate__fadeOut', 'animate__delay-0.5s');
  });
});
