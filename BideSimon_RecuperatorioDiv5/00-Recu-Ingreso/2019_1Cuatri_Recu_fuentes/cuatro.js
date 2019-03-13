function mostrar()
{
	var numUno;
	var numDos;
	var cuadradoAmbos;
	var resta;
	var restoDivision;

	numUno = parseInt(prompt("Ingrese un numero"));
	numDos = parseInt(prompt("Ingrese un numero"));


	if ( numUno == numDos )
	{
		cuadradoAmbos = numUno*numDos;
		alert("El cuadrado de los numeros es: " + cuadradoAmbos);
	}

	if ( numUno % numDos == 0 )
	{
		resta = numUno - numDos;
		alert("La resta de los numeros es: " + resta );
	}
	else 
	{
		restoDivision = numUno % numDos;
		
		if ( restoDivision > 3 )
		{
			document.write("El resto de la divicion de los numeros entre si es: " + restoDivision );
		}
		else 
		{
			alert("El resto de los numeros divididos es: " + restoDivision );
		}

	}

}
