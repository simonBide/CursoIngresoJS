
function mostrar()
{
var nombre;
var peso =0;
var temperatura;
var contadorTempPares = 0;
var nombreMasPesado;
var temperaturaMasPesado= -30;
var contadorMenos0Grados = 0;
var promedio = 0;
var contadorAnimales = 0;
var acumaldorPeso = 0;
var minimoPesoBajoCero = 1001;
var maximoPesoBajoCero = 0;
var seguir = 's';


while(seguir == 's')
{
	nombre  = prompt("ingrese el nombre del animal");
	peso = prompt("ingrese el peso");
	if(peso<0 || peso > 1001)
	{
		alert("el peso no es valido ingrese entre 0 y mil");
		peso = prompt("ingrese el peso");
	}

	peso = parseInt(peso);
	temperatura = prompt("ingrese la temperatura");
	if(temperatura>30 || temperatura < -30)
	{
		alert("la temperatura no es valida");
		temperatura = prompt("ingrese la temperatura");
	}

	if(temperatura%2  == 0)
	{
		contadorTempPares++;
	}

	if(temperaturaMasPesado < temperatura){
		temperaturaMasPesado = temperatura;
		nombreMasPesado = nombre;
	}

	if(temperatura < 0)
	{
		contadorMenos0Grados++;
		if(peso > maximoPesoBajoCero)
		{
			maximoPesoBajoCero = peso;

		}

		if(peso < minimoPesoBajoCero)
		{

			minimoPesoBajoCero = peso;

		}
	}


	acumaldorPeso = acumaldorPeso + peso;
	contadorAnimales ++;
	
	seguir = prompt("desea seguir ingresando animales? s/n");


}
alert("termina");
promedio = acumaldorPeso / contadorAnimales;
alert("el promedio es " +  promedio);
alert("cantidad de temperaturas pares" + contadorTempPares);
alert("el nombre del mas pesado es " + nombreMasPesado + "temperatura" + temperaturaMasPesado);
alert("viven a menos de 0 grados " +  contadorMenos0Grados);
alert("el minimo de peso bajo cero " +  minimoPesoBajoCero + "el maximo bajo 0 " + maximoPesoBajoCero);









}
