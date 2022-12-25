let N = parseInt(gets()); 

// let n = 1 + 8*N; 

//TODO: Retorne a altura máxima que o triângulos de moedas terá
let valorSubtraito = N;
let altura = 0;
for(let i = 1; i <=N; i++){
  if(valorSubtraito - i >= 0){
    valorSubtraito -= i;
    altura++
  }
}
print(altura)