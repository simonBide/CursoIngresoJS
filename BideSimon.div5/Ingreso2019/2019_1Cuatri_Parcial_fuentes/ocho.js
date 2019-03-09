function mostrar()
{
    var seguir;
    var letra;
    var numero;
    var acumuladorNumero = 0;
    var contadorNumero = 0;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var acumuladorPositivos = 0;
    var contadorPositivos = 0;
    var promedioPositivos;
    var acumuladorNegativos = 0;
    var numMax;
    var numMin;
    var letraMin;
    var letraMax;
    var flag = 0;


    do {
        letra = prompt("Ingrese una letra.")
        numero = parseInt(prompt("Ingrese un numero."))
        while( numero < -100 || numero > 100 || isNaN(numero) )
        {
            numero = parseInt(prompt("Error. Reingrese un numero."));
        }

        if ( numero % 2 == 0 )
        {
            contadorPares++;
        }
        else
        {
            contadorImpares++;
        }
        if ( numero == 0 )
        {
            contadorCeros++;
        }
        else if ( numero > 0 )
        {
            acumuladorPositivos = acumuladorPositivos + numero;
            contadorPositivos++;
        }
        else
        {
            acumuladorNegativos = acumuladorNegativos - numero;
        
        }

        if( numero < numMin || flag == 0 )
        {
            numMin = numero;
            letraMin = letra;
        }
        if ( numero > numMax || flag == 0 )
        {
            numMax = numero;
            letraMax = letra;
            flag = 1;
        }




      seguir = confirm("Desea seguir ingresando datos?")  
    }while (seguir);

    promedioPositivos = acumuladorPositivos/contadorPositivos;


document.write("La cantidad de numeros pares es: " + contadorPares + "<br>");
document.write("La cantidad de numeros impares es: " + contadorImpares + "<br>");
document.write("La cantidad de ceros es: " + contadorCeros + "<br>");
document.write("El promedio de los numeros positivos es: " + promedioPositivos + "<br>");
document.write("La resta de los numeros negativos es: " + acumuladorNegativos + "<br>");
document.write("El numero minimo ingresado es: " + numMin + " y su letra es: " + letraMin + "<br>");
document.write("El numero maximo ingresado es: " + numMax + " y su letra es: " + letraMax + "<br>");
}
