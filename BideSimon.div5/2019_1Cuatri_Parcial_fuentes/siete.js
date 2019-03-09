function mostrar()
{
    var altura;
    var sexo;

    for ( var i = 1 ; i <= 5 ; i++)
    {
    altura = parseInt(prompt("Ingrese la altura del jugador."));
    while( altura < 0 || altura > 250 || isNaN(altura) )
        {
        altura = parseInt(prompt("Error. La altura debe estar entre 0 y 250. Reingrese."));
        }
    sexo = prompt("Ingrese el sexo del jugador: ").toLowerCase();
    while( sexo != f && sexo != m )
    {
        sexo = prompt("Error. Reingrese sexo ( f o m ). ");
    }
    }

}
