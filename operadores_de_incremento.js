alert("Código funcionando!") //Cria um alerta na tela do usuario ao abrir o site

const nomeUsuario = prompt("Olá forasteiro, qual seu nome?") 

//prompt mostra uma mensagem e abre uma caixa para o usuario digitar
// criando uma variavel que recebe o prompt pode se gravar oque foi digitado

alert("Welcome, " + nomeUsuario)

//O + cerve para concatenação

let num = Number(prompt("Olá, " + nomeUsuario + ". Digite algum número, por favor"))
//Number transforma strings em numeros por exemplo

//console.log(typeof num) //typeof diz o tipo que está gravado na variavel

// Operadores de incremento

//const sucessor = num++ // = num + 1

//alert("O sucessor de " + num + " é " + sucessor)


console.log(num++) // operador de pós-incremento
console.log(num)
console.log(++num) // operador de pré-incremento

// Operadores de decremento

console.log(num--)
console.log(--num)
