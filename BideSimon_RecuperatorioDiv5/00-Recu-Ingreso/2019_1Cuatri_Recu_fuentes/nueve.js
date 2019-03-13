function mostrar()
{
    var nombre;
    var edad;
    var sexo;
    var notaFinal;
    var seguir;
    var contadorVaronesAprobados = 0;
    var acumuladorMenores = 0;
    var contadorMenores = 0;
    var promedioNotaMenores;
    var acumuladorAdolescentes = 0;
    var contadorAdolescentes = 0;
    var promedioAdolescentes;
    var acumuladorMayores = 0;
    var contadorMayores = 0;
    var promedioMayores;
    var acumuladorVarones = 0;
    var contadorVarones = 0;
    var acumuladorMujeres = 0;
    var contadorMujeres = 0;
    var promedioVarones;
    var promedioMujeres;

    do
    {
        nombre = prompt("Ingrese el nombre del estudiante.");

        edad = parseInt(prompt("Ingrese la edad del estudiante."));
        while ( isNaN(edad ) || edad > 200 || edad < 5 )
        {
            edad = parseInt(prompt("Error. Reingrese la edad."));
        }

        sexo = prompt("Ingrese el sexo del estudiante.");
        while ( sexo != "f" && sexo != "m" || isNaN(sexo) == false )
        {
            sexo = prompt("Error. Reingrese sexo ( f o m )");
        }

        notaFinal = parseInt(prompt("Ingrese la nota final."));
        while ( notaFinal > 10 || notaFinal < 0 )
        {
            notaFinal = parseInt(prompt("Reingrese la nota final. ( 0 - 10 )"));
        }

        if ( sexo == "m" && notaFinal >= 6 )
        {
            contadorVaronesAprobados++;
        }

        if ( edad < 13 )
        {
            acumuladorMenores = acumuladorMenores + notaFinal;
            contadorMenores++;
        }
        else if ( edad < 18 )
        {
            acumuladorAdolescentes = acumuladorAdolescentes + notaFinal;
            contadorAdolescentes++;
        }
        else 
        {
            acumuladorMayores = acumuladorMayores + notaFinal;
            contadorMayores++;
        }

        if ( sexo == "m" )
        {
            acumuladorVarones = acumuladorVarones + notaFinal;
            contadorVarones++;
        }

        if ( sexo == "f" )
        {
            acumuladorMujeres = acumuladorMujeres + notaFinal;
            contadorMujeres++;
        }


        seguir=confirm("Desea seguir ingresando datos?");
    }while(seguir);

    promedioNotaMenores = acumuladorMenores/contadorMenores;
    promedioAdolescentes = acumuladorAdolescentes/contadorAdolescentes;
    promedioMayores = acumuladorMayores/contadorMayores;
    promedioVarones = acumuladorVarones/contadorVarones;
    promedioMujeres = acumuladorMujeres/contadorMujeres;

    document.write("La cantidad de varones aprobados es: " + contadorVaronesAprobados + "<br>");
    document.write("El promedio de nota de los menores de edad es: " + promedioNotaMenores +"<br>");
    document.write("El promedio de nota de los adolescentes es: " + promedioAdolescentes + "<br>");
    document.write("El promedio de nota de los mayores es: " + promedioMayores + "<br>");
    document.write("El promedio de notas de las mujeres es: " + promedioMujeres + " y el de los varones es: " + promedioVarones + "<br>");

}
