function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById('edad').value;

edad = parseInt(edad);

if(edad >= 18) 
	{
		alert ("Usted es mayor de edad");
	}
    else if(edad <=12) 
	{
		alert ("Usted es niño");
	}
  
    else
	{
		alert ("Usted es adolescente");
	}
}//FIN DE LA FUNCIÓN