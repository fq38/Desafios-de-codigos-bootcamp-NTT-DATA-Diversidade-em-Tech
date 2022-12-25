let x = parseInt(gets());
while (x != 0)
{
//Condição para caso o número informado for PAR, ele irá somar os 5 pares consecutivos até o seu número.
    if  (x % 2 != 0)
    {
        x = x + 1      ;
    }
//Imprima a soma:
    x = x = (x + (x+2) + (x+4) + (x+6) + (x+8)) 
    print(x);
    x = parseInt(gets());
}