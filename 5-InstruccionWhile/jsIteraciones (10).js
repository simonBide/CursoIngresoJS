function Mostrar()
{

	var num;
	var seguir;
	var acumuladorNeg = 0;
	var acumuladorPos = 0;
	var contadorPos = 0;
	var contadorNeg = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promNeg = 0;
	var promPos = 0;
	var diferencia; 
	var flag = true;


	do
		{
			num=parseInt(prompt("Ingrese un numero."));
			while(isNaN(num))
			{
				num=parseInt(prompt("Eso no es un numero. Ingrese un numero."));
			}
				if(num > 0)
				{
					//positivos
					acumuladorPos = acumuladorPos + num;
					contadorPos++;
				}
				  else if(num == 0)
				  {
					  // ceros
					  contadorCeros++;
				  }
				    else
					{
						// negativos
						acumuladorNeg = acumuladorNeg + num;
						contadorNeg++;
					}
		
				if(num%2 == 0)
				{
					contadorPares++;
				}


			seguir = confirm("Quiere seguir ingresando numeros?")
		}while( seguir );

			if(contadorNeg != 0)
			{
				promNeg = acumuladorNeg / contadorNeg;
			}
			if(contadorPares != 0)
			{
				promPos= acumuladorPos / contadorPos;
			}

		diferencia = contadorPos - contadorNeg;

		document.write("1-Suma de negativos: " + acumuladorNeg + "<br>");
		document.write("2-Suma de positivos: " + acumuladorPos + "<br>");
		document.write("3-Cantidad de negativos: " + contadorNeg + "<br>");
		document.write("4-Cantidad de positivos: " + contadorPos+ "<br>");
		document.write("5-Cantidad de ceros: " + contadorCeros + "<br>");
		document.write("6-Cantidad de numeros pares: " + contadorPares+ "<br>");
		document.write("7-Promedio de negativos: " + promNeg+ "<br>");
		document.write("8-Promedio de positivos: " + promPos+ "<br>");
		document.write("9-Diferencia entre positivos: " + diferencia + "<br>");

		//1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos. 4-Cantidad de negativos. 5-Cantidad de ceros. 6-Cantidad de números pares. 7-Promedio de positivos. 8-Promedios de negativos. 9-Diferencia entre positivos y negativos, (positvos-negativos).






}//FIN DE LA FUNCIÓN