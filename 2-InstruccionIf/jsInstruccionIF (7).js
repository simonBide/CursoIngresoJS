function mostrar()
{
//tomo la edad  

	var edad ;
	var estado ;

	edad = parseInt (document.getElementById('edad').value) ;
	estado = document.getElementById("estadoCivil").value ;

	if(edad <18 && estado != "Soltero")
	{
		alert ("Usted es muy joven para NO ser soltero") ;
	}


}//FIN DE LA FUNCIÓN