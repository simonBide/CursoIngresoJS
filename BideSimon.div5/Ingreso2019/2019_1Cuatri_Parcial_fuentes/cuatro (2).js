function mostrar()
{
    var numUno;
    var numDos;
    var suma;
    var resta;


    numUno = parseInt(prompt("Ingrese un numero."));
    numDos = parseInt(prompt("Ingrese otro numero."));

    if ( numUno == numDos )
    {
        alert("Los numeros ingresados son: " + numUno + numDos );
    }
    else if  ( numUno > numDos)
    {
        resta = numUno - numDos;
        alert("La resta de los numeros ingresados es: " + resta );
    }
    else
    {
        suma = numUno + numDos;
        alert("La suma de los numeros ingresados es: " + suma );
    }

    if ( resta > 10 )
    {
        alert("La resta es: " + resta + " y supero el 10");
    }


}
