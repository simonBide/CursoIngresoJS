function Mostrar()
{
    var numero;

    for ( ;  ; )
    {
       numero = parseInt(prompt("Ingrese un numero"));
       while(isNaN(numero))
       {
           numero = parseInt(prompt("Eso no es un numero.Ingrese un numero"))
       }
       if ( numero == 9)
       {
           break ;
       }
    }

 alert(numero);



}//FIN DE LA FUNCIÓN