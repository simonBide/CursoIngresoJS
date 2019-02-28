//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    //alert ("esto funciona de maravilla");
	/*realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) y el sexo
(validar el sexo “f” o “m”) de 100 alumnos, informar por alert:
a) el promedio de las notas totales.
b) la nota más baja.
c) la cantidad de varones que su nota haya sido mayor o igual a 6.*/

var notas;
var sexo;
var promNotas;
var acumuladorNotas = 0;
var notaMin;
var contadorVaronesMas5 = 0;
var flag = 0;
var sexoNotaBaja;
var cantidad = 100;

    for (var i = 0  ; i < cantidad ; i++ )
    {
        notas=parseInt(prompt("Ingrese una nota."));
            while( notas < 0 || notas > 10 || isNaN(notas))
            {
                notas=parseInt(prompt("Error. Reingrese una nota."));
            }
            
            sexo=prompt("Ingrese un sexo.")
            while(sexo != "f" && sexo != "m")
            {
                sexo = prompt("Error. Reingrese sexo.");
            }

        acumuladorNotas = acumuladorNotas + notas;

        if ( sexo == "m" && notas >= 6)
        {
            contadorVaronesMas5++;
        }
        if ( notas < notaMin || flag == 0)
        {
            notaMin = notas;
            sexoNotaBaja = sexo;
            flag = 1;
        }

     }

promedio = acumuladorNotas / cantidad;

alert("Promedio de las notas: " + promedio + "\nVarones con notas mayor a 5: " + contadorVaronesMas5 + "\nNota mas baja: " + notaMin + "\nEl sexo de la nota mas baja es: " + sexoNotaBaja);


}

