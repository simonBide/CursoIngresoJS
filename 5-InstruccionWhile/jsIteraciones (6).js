function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var i = 1;
	
	while( i <= 5 )
{
	numero=parseInt(prompt("Ingrese un numero"));
i++
acumulador = acumulador + numero;
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN