function Mostrar()
{
    var numero=parseInt(prompt("Ingrese un numero"));
    var divisores;
    var contador=0;


            while(isNaN(numero))
                {
                    numero=parseInt(prompt("Eso no es numero. Reingrese un numero."))
                }
      for( i=1 ; i<=numero ; i++)
        {
         if(numero%i==0)
        {
             console.log(i);
             contador++;
        }

     }
 

alert("Cantidad de divisores es " + contador);

}//FIN DE LA FUNCIÓN