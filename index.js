// Ex: 1 

// let q1 = document.getElementById('q1')

// q1.addEventListener('click', function () {
//     if(q1.style.backgroundColor == 'blue')
//         q1.style.backgroundColor = 'red'
//     else 
//     q1.style.backgroundColor = 'blue'
// })

// let q2 = document.getElementById('q2')
// q2.addEventListener('click', function () {
//     if(q2.style.backgroundColor == 'blueviolet')
//         q2.style.backgroundColor = 'green'
//     else 
//     q2.style.backgroundColor = 'blueviolet'
// })
// let q3 = document.getElementById('q3')

// q3.addEventListener('click', function () {
//     if(q3.style.backgroundColor == 'orange')
//         q3.style.backgroundColor = 'aqua'
//     else 
//     q3.style.backgroundColor = 'orange'
// })


// Ex: 2

// let contador = document.getElementById("contador")
// const teclas = document.getElementById("teclas")
// const reset = document.getElementById("reset")
// let contador2 = 0 

// contador.addEventListener("click", function () {
//     contador2 ++ 
//     teclas.innerText = `Número de clicks: ${contador2}`
// })  
// reset.addEventListener("click", function () {
//     contador2 = 0
//     teclas.innerText = "Contador resetado"
// })


// Ex: 3

// let botao = document.getElementById('botao')
// let frase = document.getElementById('frase')
// frase.style.display = 'none'

// botao.addEventListener('click', function (){
//     if(frase.style.display == 'none'){
//         frase.style.display = 'block'
//     }
//     else {
//         frase.style.display = 'none'
//     }
// })


// Ex: 4

// let texto = document.getElementById("texto")
// let botao = document.getElementById('botao')

// botao.addEventListener('click', function () {
    
//   texto.innerText  = prompt("Escreva uma nova frase")
// })


// Ex: 5

// let frase = document.getElementById("frase")

// document.addEventListener('keypress', function (event) {
//     frase.innerText = `Você pressionou " ${event.key} "`
// })


// Ex:6

// let botao = document.getElementById('botao')
// let botao2 = document.getElementById('botao2')
// let c1 = document.getElementById('c1')
// let c2 = document.getElementById('c2')
// let dn = document.getElementById('dn')
// let fk = document.getElementById('fk')
// let pergunta
// botao2.style.display = 'none'
// fk.style.display = 'none'
// dn.style.display = 'none'
// dudu.style.display = 'none'
// fe.style.display = 'none'
// nulo.style.display = 'none'
// botao.addEventListener('click', function () {
//     pergunta = prompt('Digite o número do seu candidato')
//     if (pergunta == 22) {
//         c1.style.display = 'none'
//         c2.style.display = 'none'
//         dn.style.display = 'none'
//         fk.style.display = 'block'
//         botao.style.display = 'none'
//         botao2.style.display = 'block' 
//         fe.style.display = 'block'
//         nulo.style.display = 'none'
//     }
//     else {
//         c1.style.display = 'none'
//         c2.style.display = 'none'
//         fk.style.display = 'none'
//         botao.style.display = 'none'
//         botao2.style.display = 'block' 
//         dn.style.display = 'none'
//         dudu.style.display = 'none'
//         fe.style.display = 'none'
//         nulo.style.display = 'block'
//     } 
//         if (pergunta == 14) {
//             c1.style.display = 'none'
//             c2.style.display = 'none'
//             fk.style.display = 'none'
//             botao.style.display = 'none'
//             botao2.style.display = 'block' 
//             dn.style.display = 'block'
//             dudu.style.display = 'block'
//             fe.style.display = 'none'
//             nulo.style.display = 'none'
//     }

// })
// botao2.addEventListener('click', function () {
//     alert('Voto confirmado')
// })

// Desafio

// let adicionar = document.getElementById('adicionar')
// let lista = document.getElementById('lista')
// let arrayI = [];

// adicionar.addEventListener('click', function() {
// let add = prompt('deseja adicionar item a lista?');

//     if (add === 'sim') {
//         let item = prompt('qual item deseja adicionar?');
//         arrayI.push(item);
//         alert('item adicionado com sucesso');
//         lista.innerText = 'Esses são os itens presentes na lista:' + arrayI;
//     } else {
//         alert('Nenhum item adicionado!');
//         adicionar.style.display = 'none';
//         lista.innerText = 'nenhum item adicionado';
//     }
// })





