//Exercicio de calculo rapido do OBI 2021


//Entrada de dados
const s = 3; //Variavel que de comparação
const a = 10; //Variavel da soma
const b = 30; //Varaivel da soma


//Função de calculo da soma dos digitos
function somaDosDigitos(numero) {
  let soma = 0;
  while (numero) {
    soma += numero % 10;
    numero = Math.floor(numero / 10);
  }
  return soma;
}


//Função que conta os numeros e compara eles
function contarNumerosComSomaDeDigitos(s, a, b) {
  let contador = 0;
  for (let i = a; i <= b; i++) {
    if (somaDosDigitos(i) === s) {
      contador++;
    }
  }
  return contador;
}


//Saídade de dados
const quantidadeNumeros = contarNumerosComSomaDeDigitos(s, a, b);
console.log(`A quantidade de números no intervalo [${a}, ${b}] cuja soma dos dígitos é igual a ${s} é ${quantidadeNumeros}.`);
