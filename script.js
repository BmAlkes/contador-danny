const hora1 = document.querySelector('#hora1')
const hora2 = document.querySelector('#hora2')
const total = document.querySelector('.total')
const button = document.querySelector('button')
const dinheiro = document.querySelector('.dinheiro')


function calcular (){
    total.innerHTML = `${hora2.value - hora1.value}`
    dinheiro.innerHTML =`${(hora2.value - hora1.value)* 60 }`
}

button.addEventListener('click',calcular)