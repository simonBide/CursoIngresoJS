function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta;
	var numero;

	do
	{
		numero=parseInt(prompt("Ingrese un numero"));
	
		if(numero >= 0)
		{
			positivo = positivo + numero;
		}
		else
			 {
			 negativo=negativo*numero;
			 	 
			}

			respuesta=prompt("Quiere seguir ingresando numeros?").toLowerCase();
			contador++;
	}while(respuesta == "si")

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN