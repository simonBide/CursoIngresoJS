function Mostrar()
{
    var numero=parseInt(prompt("Ingrese un numero"));
    var divisores;
    var cantidad=0;


 while(isNaN(numero))
 {
     numero=parseInt(prompt("Eso no es numero. Reingrese un numero."))
 }
     for( i=1 ; i<=numero ; i++)
     {
         if(numero%i==0)
         {
             document.write(i+"<br>");
             cantidad++;
         }

     }
 

document.write("<br>Cantidad de divisores es "+cantidad);

}//FIN DE LA FUNCIÓN