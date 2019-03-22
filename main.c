#include <stdio.h>
#include <stdlib.h>
int pedirMostrarMayor(void);
int main()
{
    pedirMostrarMayor();
    return 0;
}
int pedirMostrarMayor(void)
{
    int numero;
    int numMax;
    int flag=0;
        do
        {
            printf("Ingrese un numero:");
            scanf("%d",&numero);
                if( numero>numMax || flag == 0)
                {
                numMax=numero;
                flag=1;
                }
        }while(numero!=-1);

        printf("El maximo es: %d",numMax);
    return 0;
}
