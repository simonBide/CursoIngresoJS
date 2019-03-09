function mostrar()
{
  var hombre;
  var mujer;
  var pesoHombre;
  var pesoMujer;
  var promedioPeso;
  var acumnuladorPeso;

 hombre = prompt("Ingrese el nombre del hombre: ");
 mujer = prompt("Ingrese el nombre de la mujer: ");
 pesoHombre =  parseInt(prompt("Ingrese el peso del hombre: "));
 pesoMujer = parseInt(prompt("Ingrese el peso de la mujer: "));

acumuladorPeso = pesoHombre + pesoMujer;
promedioPeso = acumuladorPeso / 2;

 alert("Ustedes se llaman " + hombre + " y " + mujer + ".Su peso es " + pesoHombre + " y " + pesoMujer + ". Y el promedio de su peso es " + promedioPeso);
}
