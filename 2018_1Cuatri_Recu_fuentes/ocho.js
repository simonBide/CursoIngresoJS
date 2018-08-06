function mostrar()
{
var nombre;
var tema;
var paginas;
var ventas;
var acumuladorCantPagRobotica = 0;
var acumuladorCantPagProgramacion = 0;
var acumuladorCantPagBase = 0;
var acumuladorCantPagPatron = 0;
var seguir = 's';
var contadorPagPar = 0;
var contadorPagImpar = 0;
var contadorCeroVentas = 0;
var promedio;
var acumuladorVentas = 0;
var contadorLibros = 0;




while(seguir=='s')
{
nombre=prompt("Ingrese el nombre del libro");

paginas=prompt("Cuantas paginas tiene su libro?");
paginas=parseInt(paginas);

ventas=prompt("Cuantas ventas tiene el mismo?");
ventas=parseInt(ventas);

while( ventas <-1)
	{ 
		alert("Error, reingrese cantidad ventas");
		ventas=prompt("Cuantas ventas tiene el libro?");
	}
tema=prompt("Ingrese el tema: 1-Robotica 2-Programacion 3-Base de datos 4-Patrones");

tema=parseInt(tema);
switch(tema)
{
	case 1 : acumuladorCantPagRobotica = acumuladorCantPagRobotica + paginas;
	break;
	case 2 : acumuladorCantPagProgramacion = acumuladorCantPagProgramacion + paginas;
	break;
	case 3 : acumuladorCantPagBase = acumuladorCantPagBase + paginas;
	break;
	case 4 : acumuladorCantPagPatron = acumuladorCantPagPatron + paginas;
	break;
	default : while(tema != 1 && tema != 2 && tema != 3 && tema != 4)
	{
		alert("Tema no valido");
		tema=prompt("Reingrese un tema");

	} 
}

if (paginas % 2 == 0 )
{
 contadorPagPar++;
}
else
{
contadorPagImpar++;
}

if(ventas == 0)
{
	contadorCeroVentas++;
}
contadorLibros++;
acumuladorVentas= ventas+acumuladorVentas;
seguir = prompt("Desea seguir ingresando? s/n");
}
promedio= acumuladorVentas/contadorLibros;
alert("El promedio de ventas es " +promedio);
document.write("La cantidad de libros con paginas pares es " +contadorPagPar + " los libros con paginas impares son" +contadorPagImpar + ". La cantidad con 0 ventas es " +contadorCeroVentas+ ". El promedio de ls ventas es " +promedio + "La cantidad de paginas de programacion es " +acumuladorCantPagProgramacion);
}

