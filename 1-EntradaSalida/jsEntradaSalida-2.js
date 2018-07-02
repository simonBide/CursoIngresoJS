/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function mostrar()
{
	// /* */ para abrir y cerrar comentarios
	// defino variable y ;
	var nombre;
	nombre=prompt("ingrese su nombre");
	// prompt no guarda el dato, siempre acompañando de la variable.
	alert("su nombre es "+ nombre);
	
/*todo entre comillas sera el valor literal, afuera de comillas, debe ser variable.
  afuera de las comillas no importan los espacios, adentro si.
	
var person = prompt("Please enter your name", "Harry Potter");
*/
}
