let pi = 3.14159265358979323846;
 
let a = gets();

//TODO: Retorne a área do perímetro do triângulo
let raio = a * Math.sqrt(3) / 3;
let area = pi * Math.pow(raio,2)
print('A area da circunferencia eh: ' +  area.toFixed(2))