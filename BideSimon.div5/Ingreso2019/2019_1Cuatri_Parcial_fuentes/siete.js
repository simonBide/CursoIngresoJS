function mostrar()
{
    var altura;
    var sexo;
    var promedioAltura;
    var acumuladorAltura = 0;
    var alturaBaja;
    var sexoAlturaBaja;
    var contadorMujeresAltas = 0;
    var flag = 0;


    for ( var i = 1 ; i <= 5 ; i++)
    {
    altura = parseInt(prompt("Ingrese la altura del jugador."));
    while( altura < 0 || altura > 250 || isNaN(altura) )
        {
        altura = parseInt(prompt("Error. La altura debe estar entre 0 y 250. Reingrese."));
        }
    acumuladorAltura = acumuladorAltura + altura;

    sexo = prompt("Ingrese el sexo del jugador: ").toLowerCase();
    while ( sexo != "f" && sexo !=  "m" )
    {
        sexo = prompt("Error. Reingrese sexo ( f o m ). ");
    }
    
    if ( altura < alturaBaja || flag == 0 )
    {
        alturaBaja = altura;
        sexoAlturaBaja = sexo;
        flag = 1
    }
    if ( altura > 190 && sexo == "f" )
    {
        contadorMujeresAltas++;
    }




    }
promedioAltura = acumuladorAltura/5;

alert("El promedio de las alturas es: " + promedioAltura );
alert("La altura mas baja es: " + alturaBaja + " y el sexo de esa persona es: " + sexoAlturaBaja );
alert("La cantidad de mujeres de mas de 190cm es: " + contadorMujeresAltas );


}
