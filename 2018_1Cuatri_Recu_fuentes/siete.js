function mostrar()
{
var edad;
var notas;
var sexo;
var cantAlumnos = 0;
var acumuladorNotas = 0;
var contadorNotas = 0;
var promedio;
var contadorVarones = 0;
var contadorMayoresAprobados = 0;
var edadMinima = 1000;
var sexoMinimo;
var notaMinima;
var edadPrimerF;
var notaPrimerF;
var bandera = 1;
while ( cantAlumnos != 5)
{
	edad=prompt("ingrese edad");
	edad=parseInt(edad);
	notas=prompt("ingrese notas");
	notas= parseInt(notas);
	sexo=prompt("ingrese sexo");

 while (notas >10 && notas <0)
 { 
 	alert("Nota no valida, reingrese");
 	notas=prompt("Ingrese nota");
 	notas=parseInt(notas);
 }
while (sexo != 'm' && sexo != 'f')
{
	alert("Sexo no valido usted esta enfermo");
	sexo=prompt("Reingrese sexo F/M");
}

acumuladorNotas = acumuladorNotas+notas;
contadorNotas++;


	cantAlumnos++;

	if(edad >17 && notas > 5);
	{
		if(sexo == 'm'){
			contadorMayoresAprobados++
		}

	}
	if( edadMinima > edad)
{
	edadMinima = edad;
	notaMinima=notas;
	sexoMinimo=sexo;
}

if (sexo == 'f' && bandera == 1)
{	notaPrimerF=notas
    edadPrimerF=edad
    bandera = 0;
}

}


if(bandera == 1)
{
	alert("No hay mujeres");
}

	promedio = acumuladorNotas/contadorNotas;
document.write("El promedio de las notas es " +promedio + ". La nota mas baja es " +notaMinima + " y el sexo de esta persona es "+ sexoMinimo+ ". Varones mayores aprobados hay " +contadorMayoresAprobados+ ". La persona mas joven es de " +sexoMinimo+ "con una nota de " +notaMinima+ " y la edad de la primer mujer ingresada es " +edadPrimerF+ " y su nota" +notaPrimerF);
}
