function Mostrar()
{

	var contador=0;
	var numero;
	var numeroMax=numero;
	var numeroMin=numero;	
	var respuesta;


	while(respuesta!='no')
	{
		numero = parseInt(prompt("Ingrese un numero"));
		respuesta = prompt("Quiere seguir ingresando numeros?");

		if( numeroMax < numero )
		{
			numeroMax = numero;
		}

		else if ( numeroMin > numero) 
		{
			numeroMin = numero;

		}
	
	document.getElementById("maximo").value=numeroMax
	document.getElementById("minimo").value=numeroMin
	}




}//FIN DE LA FUNCIÓN