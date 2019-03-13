function mostrar()
{
    var colorVehiculo;
    var valorVehiculo;
    var seguir;
    var contadorRojos = 0;
    var contadorRojosCaros = 0;
    var contadorVehiculosBaratos = 0;
    var acumuladorValor = 0;
    var contadorVehiculos = 0;
    var promedioVehiculos;
    var vehiculoMasCaro;
    var colorVehiculoMasCaro;



    do
    {
        colorVehiculo = prompt("Ingrese el color del vehiculo.");
        while ( colorVehiculo != "rojo" && colorVehiculo != "verde" && colorVehiculo != "amarillo" || isNaN(colorVehiculo) == false )
        {
            colorVehiculo = prompt("Error. Reingrese el color del vehiculo. ( rojo - amarillo - verde )");
        }

        valorVehiculo = parseInt(prompt("Ingrese el valor del vehiculo."));
        while ( valorVehiculo > 10000 || valorVehiculo < 0 || isNaN(valorVehiculo) )
        {
            valorVehiculo = parseInt(prompt("Error. Reingrese el valor del vehiculo."));
        }

        acumuladorValor = acumuladorValor + valorVehiculo;
        

        if ( colorVehiculo == "rojo" )
        {
            contadorRojos++;
        }

        if ( colorVehiculo == "rojo" && valorVehiculo > 5000 )
        {
            contadorRojosCaros++;
        }

        if ( valorVehiculo < 5000 )
        {
            contadorVehiculosBaratos++;
        }

        if ( valorVehiculo > acumuladorValor || contadorVehiculos == 0 )
        {
            vehiculoMasCaro = valorVehiculo;
            colorVehiculoMasCaro = colorVehiculo;
        }

        contadorVehiculos++;

        seguir = confirm("Desea seguir ingresando datos?");
    }while(seguir);

    promedioVehiculos = acumuladorValor/contadorVehiculos;


document.write("La cantidad de vehiculos rojos es: " + contadorRojos + "<br>");
document.write("La cantidad de vehiculos rojos con valor mayor a 5000 es: " + contadorRojosCaros + "<br>");
document.write("La cantidad de vehiculos con valor menor a 5000 es: " + contadorVehiculosBaratos + "<br>");
document.write("El promedio de valor de los vehiculos es: " + promedioVehiculos + "<br>");
document.write("El vehiculo mas caro vale " + vehiculoMasCaro + " y su color es " + colorVehiculoMasCaro + "<br>");
}
