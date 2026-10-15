var boton = document.getElementById('btn-sol');
var zona = document.getElementById('zona');
boton.addEventListener('click', function () {
	zona.classList.toggle('sol');
	// pone o quita la clase "sol"
	if (zona.classList.contains('sol')) {
		boton.textContent = 'Volver a la normalidad';
	} else {
		boton.textContent = 'Simular sol fuerte';
	}
});