var boton = document.getElementById('btn-gris');
var zona = document.getElementById('zona');
boton.addEventListener('click', function () {
	zona.classList.toggle('sin-color');
	if (zona.classList.contains('sin-color')) {
		boton.textContent = 'Ver con colores';
	} else {
		boton.textContent = 'Ver sin colores';
	}
});