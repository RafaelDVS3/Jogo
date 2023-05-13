function verificaSeOChutePossuiUmValorVálido(chute){
    const numero = + chute

    if (ChuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Inválido<div>'
        return
    }

    if (numeroMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!<h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="JogarNovamente" class="btn-jogar">Jogar Novamente</button
        `

    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }

}

function ChuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogarNovamente') {
        window.location.reload()
    }
})