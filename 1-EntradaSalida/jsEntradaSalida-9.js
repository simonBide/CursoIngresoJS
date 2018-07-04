/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var sueldo;
	var resultado;
	var total;

	sueldo = document.getElementById('sueldo').value;
	sueldo = parseInt(sueldo);
	resultado= (sueldo*10)/100;
    total= resultado+sueldo;
    document.getElementById("resultado").value =sueldo/10;
}
