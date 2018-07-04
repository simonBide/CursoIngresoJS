/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
     var uno;
     var dos;
     var resultado;

     uno=document.getElementById('numeroUno').value;
     uno=parseInt(uno);
     dos=document.getElementById("numeroDos").value;
     dos=parseInt(dos);
    resultado = uno + dos;

    alert("la suma es "+resultado);
}

/*Para sumar parseInt transforma el texto a numero*/