
function mostrar()
{
    var base;
    var altura;
    var perimetro;

        base = parseInt(prompt("Ingrese la base del triangulo."));
        altura = parseInt(prompt("Ingrese la altura del triangulo."));

        perimetro = base*altura/2;
        alert("El perimetro del triangulo es: " + perimetro);
}
