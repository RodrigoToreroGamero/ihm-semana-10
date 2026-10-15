// Formulario mal hecho: si está vacío, solo pinta el borde de rojo
document.getElementById('enviar-mal').addEventListener('click', function () {
	var campo = document.getElementById('correo-mal');
	if (campo.value === '') {
		campo.classList.add('con-error');
	} else {
		campo.classList.remove('con-error');
	}
});

// Formulario bien hecho: explica el error y lleva el cursor al campo
document.getElementById('enviar-bien').addEventListener('click', function () {
	var campo = document.getElementById('correo-bien');
	var mensaje = document.getElementById('error');
	if (campo.value === '') {
		mensaje.textContent = '✕ Falta tu correo. Escríbelo para continuar.';
		mensaje.className = 'error';
		campo.classList.add('con-error');
		campo.focus(); // pone el cursor en el campo
	} else if (campo.value.indexOf('@') === -1) { // ¿le falta la arroba?
		mensaje.textContent = '✕ Al correo le falta la @. Ejemplo: ana@universidad.edu.pe';
		mensaje.className = 'error';
		campo.classList.add('con-error');
		campo.focus();
	} else {
		mensaje.textContent = '✓ ¡Listo! Datos enviados.';
		mensaje.className = 'exito';
		campo.classList.remove('con-error');
	}
});