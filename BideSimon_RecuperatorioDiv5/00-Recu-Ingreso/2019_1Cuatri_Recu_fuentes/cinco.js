function mostrar()
{
	var continente;
	var dias;
	var formaPago;
	var precio = 100;
	var precioDescuento;
	var precioFinal;

	continente = document.getElementById('selecContinente').value;
	formaPago = document.getElementById("selecPago").value;
	dias = parseInt(prompt("Ingrese la cantidad de dias que desea."));

	switch(continente)
	{
		case: "America";
		alert(continente)
		break;

		case: "África"
		alert(continente)
		break;

		case: "Oceanía"
		alert(continente);
		break;

		case: "Europa"
		alert(continente);
		break;
		

	}


}
