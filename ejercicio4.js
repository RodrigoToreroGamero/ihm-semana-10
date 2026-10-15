// 1) Cada vez que se toca un botón de una tarjeta, se muestra cuál fue
function avisarCual(tarjeta, idMensaje) {
	var botones = document.querySelectorAll(tarjeta + ' button');
	for (var i = 0; i < botones.length; i++) {
		botones[i].addEventListener('click', function () {
			var nombre = this.getAttribute('aria-label');
			 // "Me gusta", "Compartir"...
			document.getElementById(idMensaje).textContent = 'Tocaste: ' + nombre;
		});
	}
}
avisarCual('.mal', 'mensaje-mal');
avisarCual('.bien', 'mensaje-bien');
// 2) Botón que muestra u oculta la zona táctil
var botonZona = document.getElementById('btn-zona');
botonZona.addEventListener('click', function () {
	document.getElementById('zona').classList.toggle('ver-zona');
});