function Mostrar()
{

	var contador=0;
	var numero=parseInt(prompt("Ingrese un numero"));
	var numeroMax;
	var numeroMin;	
	var respuesta;


	do
	{
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero))
		{
			numero = parseInt(prompt("Error. Ingrese un numero"))
		}
		
		if( numeroMax < numero )
		{
			numeroMax = numero;
		}

		if ( numeroMin > numero) 
		{
			numeroMin = numero;
		}
		respuesta = prompt("Quiere seguir ingresando numeros?");
	}while(respuesta != "no");
	
	document.getElementById("maximo").value=numeroMax
	document.getElementById("minimo").value=numeroMin
	




}//FIN DE LA FUNCIÓN