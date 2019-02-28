function Mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var contadorTemPar = 0;
	var marcaMasPesado;
	var contadorProdBajoCero = 0;
	var acumuladorPeso = 0;
	var contadorPeso = 0;
	var pesoMax;
	var pesoMin;
	var seguir;
	var flag = 0;


	do
	{
		marca = prompt("Ingrese la marca del producto.");

		peso = parseInt(prompt("Ingrese el peso del producto."));
			while( peso > 100 || peso < 0 || isNaN(peso) )
			{
				peso = parseInt(prompt("Error. Reingrese el peso. ( Entre 0 y 100 )"));
			}

		temperatura = parseInt(prompt("Ingrese la temperatura del producto."));
			while( temperatura > 30 || temperatura < -30 || isNaN(temperatura) )
			{
				temperatura = parseInt(prompt("Error. Reingrese la temperatura. (Entre 30 y -30)"));
			}

			acumuladorPeso = acumuladorPeso + peso;
			contadorPeso++;

	if( temperatura % 2 == 0 )
	{
		contadorTemPar++;
	}
	if( peso > pesoMax || flag == 0)
	{
		pesoMax = peso;
		marcaMasPesado = marca;
	}
	if( peso < pesoMin || flag == 0)
	{
		pesoMin = peso;
		flag == 1;
	}

	if( temperatura < 0 )
	{
		contadorProdBajoCero++;
	}



			seguir = confirm("Quiere seguir ingresando datos?");
	}while(seguir);	

	promedio = acumuladorPeso / contadorPeso; 
	



	document.write("La cantidad de productos con temperaturas pares es: " + contadorTemPar + "<br>");
	document.write("La marca del producto mas pesado es: " + marcaMasPesado + "<br>");
	document.write("La cantidad de productos que se conservan bajo cero es: " + contadorProdBajoCero +"<br>");
	document.write("El peso del producto mas pesado es: " + pesoMax + "<br>");
	document.write("El peso del producto mas liviano es: " + pesoMin + "<br>");
	document.write("El promedio del peso de todos los productos es: " + promedio + "<br>");

}
