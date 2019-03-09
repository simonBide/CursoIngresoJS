function mostrar()
{
	var sexo;
	var altura;
	var acumuladorAltura = 0;
	var promedioAltura;
	var alturaMin;
	var alturaSexoMin;;
	var contadorMujeresAltas = 0;

	for ( i = 0 ; i < 5 ; i++)
	{
			sexo=prompt("Ingrese el sexo.");

		while ( isNaN(sexo) == false || sexo != "f" && sexo != "m")
		{
			sexo = prompt("Error. Reingrese sexo. ( f o m)");
		}
			altura=parseInt(prompt("Ingrese la altura"));
		while ( altura < 0 || altura > 250 || isNaN(altura))
		{
			altura=parseInt(prompt("Error. Reingrese la altura"));
		}
		

	acumuladorAltura = acumuladorAltura + altura;

		if ( altura < alturaMin || i == 0)
			 {
			 	alturaMin = altura;
			 	alturaSexoMin = sexo;
			 }
		if ( altura > 190 && sexo == "f" )
		{
			contadorMujeresAltas++;
		}

	}

	promedio = acumuladorAltura/i;

	alert("El promedio de las alturas es: " + promedio);
	alert("La persona mas baja mide: " + alturaMin + " y su sexo es: " + sexoMin);
	alert("La cantidad de mujeres mas altas de 190: " + contadorMujeresAltas);
}
