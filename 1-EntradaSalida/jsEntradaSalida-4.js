/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function mostrar()
{
	var dato;
	dato = prompt(dato);
	document.getElementById('elNombre').value = dato;
	
}

