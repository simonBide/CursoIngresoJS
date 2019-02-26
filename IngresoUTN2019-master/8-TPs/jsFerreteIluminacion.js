/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var lamparas = parseInt(document.getElementById("Cantidad").value);
    var precio = 35;
    var empresa = document.getElementById("Marca").value;
    var descuento = parseInt(document.getElementById("precioDescuento").value);
    var total;
    var bruto;
    var importeFinal;
    var mensaje = "Importe a pagar en $";
    var flag = false;


   if (lamparas >= 6)
    {
        descuento = precio*50/100;
    }
   else if (lamparas == 5)
    {
        if(empresa == "ArgentinaLuz")
        {   
        descuento = precio*40/100;

        }
            else
            {
                descuento = precio*30/100;

            }
    }
    else if (lamparas == 4)
    {
        if ( empresa == "ArgentinaLuz" || empresa == "FelipeLamparas")
        descuento = precio*25/100;
            else
            {
                descuento = precio*20/100;
            }

    }
    else if (lamparas == 3)
    {
        if (empresa == "ArgentinaLuz")
        {
            descuento = precio*15/100;
        }

            else if ( empresa == "FelipeLamparas")
            {
                descuento = precio*10/100;
        
            }
                else
                {
                    descuento = precio*5/100;
                }

    }
    else 
    {
        descuento=0
    }

    total = precio - descuento;

    importeFinal = lamparas*total;

    if (importeFinal > 120)
    {
        bruto=importeFinal*10/100;
        importeFinal = importeFinal + bruto;
        flag = true;
    }
    
    document.getElementById("precioDescuento").value = total;
    mensaje = mensaje + importeFinal;

    if ( flag == true)
    {
        mensaje = mensaje + "IIBB usted pago $" + bruto;
    }
    alert(mensaje);
}
