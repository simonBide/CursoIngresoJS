function Mostrar()
{

var repeticiones = parseInt(prompt("ingrese el número de repeticiones"));

while (isNaN(repeticiones))
{
    repeticiones = parseInt(prompt("Eso no es un numero. Ingrese el numero de repeticiones"))
}

for ( i = 0; i < repeticiones ; i++)
{
    alert("Hola UTN FRA");
}


}//FIN DE LA FUNCIÓN