/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostrar()
{ 
    var num;
    var contadorPares=0;
    var contador=0;
    var promedio;
    var acumuladorNum=0;
    var numMax;
    var numMin;
    var seguir;
    var flag = 0;
    var contadorImpares=0;

do{
    num = parseInt(prompt("Ingrese un numero."));

    while(num < 0 || isNaN(num))
    {
    num = parseInt(prompt("Ingrese un numero. "));
    }

    if( num % 2 == 0 )
    {
        contadorPares++;
    }
    else
    {
        contadorImpares++;
    }

    acumuladorNum = acumuladorNum + num;

    if( num > numMin )
    {
        numMin = num;
    }
    if( num < numMax || flag == 0 )
    {
        numMax = num;
        flag = 1;
    }

    contador++;
    seguir=confirm("Quiere seguir ingresando numeros?");
}while(seguir)    

promedio = acumuladorNum/contador;
    
    


    document.write("A-Cantidad de numeros pares: " + contadorPares + "<br>");
    document.write("B-Cantidad de numeros impares: " + contadorImpares + "<br>");
    document.write("C-El promedio de los numeros es: " + promedio + "<br>");
    document.write("D-La suma de todos los num es: " + acumuladorNum + "<br>");
    document.write("E-El num max es: " + numMax + "<br>");
    document.write("F-El num min es: " + numMin + "<br>");
	
}




