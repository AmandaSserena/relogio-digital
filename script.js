function updateClock() {
    const now = new Date(); //cria um objeto Date com a data e hora atual
    const hours = String(now.getHours()).padStart(2, '0'); //pega a hora atual e adiciona um 0 a esquerda se for menor que 10
    const minutes = String(now.getMinutes()).padStart(2, '0'); //pega os minutos atuais e adiciona um 0 a esquerda se for menor que 10
    const seconds = String(now.getSeconds()).padStart(2, '0'); //pega os segundos atuais e adiciona um 0 a esquerda se for

    document.getElementById('hours').textContent = hours; //pega o elemento com id hours e adiciona o valor da variavel hours
    document.getElementById('minutes').textContent = minutes; //pega o elemento com id minutes e adiciona o valor da variavel minutes
    document.getElementById('seconds').textContent = seconds; //pega o elemento com id seconds e adiciona o valor da variavel seconds
}

setInterval(updateClock, 1000); //chama a função updateClock a cada 1000 milisegundos (1 segundo)
updateClock(); //chama a função updateClock para atualizar o relogio assim que a pagina for carregada