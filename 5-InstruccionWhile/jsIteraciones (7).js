function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;

	do
	{
		numero=parseInt(prompt("Ingrese un numero"));
		while (isNaN(numero) == true)
		{
			numero=parseInt(prompt("Eso no es un numero.Ingrese un numero"));
		}
		acumulador=acumulador+numero;
		respuesta=prompt("Quiere seguir ingresando numeros? SI/NO").toLowerCase();
		contador++;

	}while(respuesta == "si");


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN