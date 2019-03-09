function mostrar()
{
    var pais;
    var habitantes;
    var temperatura;
    var temperaturaMin;
    var seguir;
    var contadorTempPar = 0;
    var paisMenosHab;
    var flag = 0;
    var contadorPaisTempAlta = 0;
    var contadorPaises = 0;
    var acumuladorHabitantes = 0;
    var promedioHab;
    var paisMenosTemp;

    do
    {
        pais = prompt("Ingrese un pais.");
        contadorPaises++;

        habitantes = parseInt(prompt("Ingrese la cantidad de habitantes en millones. ( 1 a 7000 )"));
        while( habitantes < 1 || habitantes > 7000 || isNaN(habitantes))
        {
            habitantes = parseInt(prompt("Error. Reingresar habitantes."))
        }
        acumuladorHabitantes = acumuladorHabitantes + habitantes;
        
        temperatura = parseInt(prompt("Ingrese la temperatura minima del Pais. entre - 50 y 50)"));
        while ( temperatura < -50 || temperatura > 50 || isNaN(temperatura) )
        {
            temperatura = parseInt(prompt("Error. Reingrese temperatura minima. ( Entre - 50 y 50)."))
        }

        if ( temperatura % 2 == 0 )
        {
            contadorTempPar++;
        }
        if ( habitantes < paisMenosHab || flag == 0 )
        {
            paisMenosHab = pais;
        }
        if ( temperatura > 40 )
        {
            contadorPaisTempAlta++;
        }
        if ( temperatura < temperaturaMin || flag == 0 )
        {
            temperaturaMin = temperatura;
            paisMenosTemp = pais;
        }




    seguir = confirm("Desea seguir ingresando datos?");
    }while(seguir);

    promedioHab = acumuladorHabitantes / contadorPaises;


document.write("La cantidad de temperaturas pares es: " + contadorTempPar + "<br>");
document.write("El pais con menos habitantes es: " + paisMenosHab + "<br>");
document.write("La cantidad de paises que superan los 40 grados son: " + contadorPaisTempAlta + "<br>");
document.write("El promedio de habitantes de los paises es: " + promedioHab +"<br>");
document.write("El pais que tiene la menor temperatura es: " + paisMenosTemp + " y su temperatura es : " + temperaturaMin + "<br>");
}
