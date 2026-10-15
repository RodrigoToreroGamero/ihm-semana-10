// Esta función suma 1 al número que está dentro de la caja indicada
function sumarUno(idCaja) {
	var caja = document.getElementById(idCaja);
	caja.textContent = Number(caja.textContent) + 1;
}
// Los dos reaccionan al clic del ratón...
document.getElementById('boton-mal').addEventListener('click', function () {
	sumarUno('cuenta-mal');
});
document.getElementById('boton-bien').addEventListener('click', function () {
	sumarUno('cuenta-bien');
});
// ...pero solo el <button> verdadero recibe también Tab, Enter y Espacio.