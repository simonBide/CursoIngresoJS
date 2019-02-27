function Mostrar()
{
    var numero;
    var contador = 0;

         numero = parseInt(prompt("Ingrese un numero"));
       while(isNaN(numero))
       {
           numero = parseInt(prompt("Eso no es un numero.Ingrese un numero"));
       }

       for ( var i=1 ; i <= numero ; i++)
       {
           if ( i % 2 ==0)
           {
               contador++;
               console.log(i);
           }
       }

alert("Numeros pares encontrados: " + contador);


}//FIN DE LA FUNCIÓN