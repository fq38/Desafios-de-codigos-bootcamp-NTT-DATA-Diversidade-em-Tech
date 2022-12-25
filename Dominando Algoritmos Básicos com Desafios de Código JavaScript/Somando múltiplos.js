var a = parseInt(gets());
var N = parseInt(gets());
var soma = 0;
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

for (;a<(N+1);N--){
    if (N%a == 0){
        soma=soma+=N;
    }
}
print(soma);