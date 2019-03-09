function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;
    var montoDescuento;

precio = parseInt(prompt("Ingrese el precio."));
descuento = parseInt(prompt("Ingrese el % de descuento."));

montoDescuento = precio*descuento/100;
precioFinal = precio - montoDescuento;

document.getElementById("elPrecioFinal").value = precioFinal;

}
