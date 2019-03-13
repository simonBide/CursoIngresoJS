function mostrar()
{
    var kilos;
    var sabor;
    var promedioKilos;
    var acumuladorKilos = 0;
    var bolsaLiviana;
    var bolsaLivianaSabor;
    var contadorCarne = 0;
    var acumuladorKilosCarne = 0;
    var promedioKilosCarne;


    for ( contador = 0 ; contador < 10 ; contador++ )
    {
        kilos = parseInt(prompt("Ingrese el peso de la bolsa en kilos"));
        while( kilos > 500 || kilos < 0 || isNaN(kilos) )
        {
            kilos = parseInt(prompt("Error. Reingrese el peso. ( 0 a 500 )"));
        }

    acumuladorKilos = acumuladorKilos + kilos;

        sabor = prompt("Ingrese el sabor de la bolsa.");
        while( sabor != "carne" && sabor != "vegetales" && sabor != "pollo" || isNaN(sabor) == false )
        {
            sabor = prompt("Error. Reingrese sabor. ( carne - vegetales - pollo)");
        }

        if ( kilos < bolsaLiviana || contador == 0 )
        {
            bolsaLiviana = kilos;
            bolsaLivianaSabor = sabor;
        }

        if ( sabor == "carne" )
        {
            contadorCarne++;
            acumuladorKilosCarne = acumuladorKilosCarne + kilos;
        }
    }

    promedioKilos = acumuladorKilos/contador;
    promedioKilosCarne = acumuladorKilosCarne/contadorCarne;


    alert("El promedio de los kilos es: " + promedioKilos );
    alert("La bolsa mas liviana pesa " + bolsaLiviana + " y su sabor es " + bolsaLivianaSabor );
    alert("La cantidad de bolsas sabor carne es: " + contadorCarne + " y el promedio de su peso es: " + promedioKilosCarne );


}
