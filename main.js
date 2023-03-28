// Variables
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const findLuck = document.querySelector('#findLuck')
const findLuckAgain = document.querySelector('#findLuckAgain')
let index = 0
let messageName
let listOfMessages = []
let randomNumber = Math.round(Math.random() * 20)

// Events
findLuck.addEventListener('click', tryLuck)
findLuckAgain.addEventListener('click', tryLuck)


// Functions
function tryLuck(event) {
    event.preventDefault()

    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')

    chooseMessage()    
}

function chooseMessage() {
    for(let MsgId of listOfMessages) {
        if(MsgId.id == randomNumber) {
            document.querySelector('.screen2 p').innerText = MsgId.message
        }
    }

    randomNumber = Math.round(Math.random() * 20)
}

function generateMsgName() {
    if(listOfMessages.length == 0) {
        index = 0
        messageName = `m_${index}`
    } else {
        index++
        messageName = `m_${index}`
    }

    return messageName
}

// List of messages and constructor
function LuckMessages(id, message) {
    this.id = id
    this.message = message
}

listOfMessages.push(window[generateMsgName()] = new LuckMessages(index, 'A vida trará coisas boas se tiver paciência.'))
listOfMessages.push (window[generateMsgName()] = new LuckMessages(index, 'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.'))
listOfMessages.push (window[generateMsgName()] = new LuckMessages(index, 'Não compense na ira o que lhe falta na razão.'))
listOfMessages.push (window[generateMsgName()] = new LuckMessages(index, 'Defeitos e virtudes são apenas dois lados da mesma moeda.'))
listOfMessages.push (window[generateMsgName()] = new LuckMessages(index, 'A maior de todas as torres começa no solo.'))
listOfMessages.push (window[generateMsgName()] = new LuckMessages(index, 'Não há que ser forte. Há que ser flexível.'))
listOfMessages.push (window[generateMsgName()] = new LuckMessages(index, 'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?'))
listOfMessages.push (window[generateMsgName()] = new LuckMessages(index, 'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.'))
listOfMessages.push (window[generateMsgName()] = new LuckMessages(index, 'A juventude não é uma época da vida, é um estado de espírito.'))
listOfMessages.push (window[generateMsgName()] = new LuckMessages(index, 'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos'))
listOfMessages.push (window[generateMsgName()] = new LuckMessages(index, 'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.'))
listOfMessages.push (window[generateMsgName()] = new LuckMessages(index, 'Siga os bons e aprenda com eles.'))
listOfMessages.push (window[generateMsgName()] = new LuckMessages(index, 'Não importa o tamanho da montanha, ela não pode tapar o sol.'))
listOfMessages.push (window[generateMsgName()] = new LuckMessages(index, 'O bom-senso vale mais do que muito conhecimento.'))
listOfMessages.push (window[generateMsgName()] = new LuckMessages(index, 'Quem quer colher rosas tem de estar preparado para suportar os espinhos.'))
listOfMessages.push (window[generateMsgName()] = new LuckMessages(index, 'São os nossos amigos que nos ensinam as mais valiosas lições.'))
listOfMessages.push (window[generateMsgName()] = new LuckMessages(index, 'Aquele que se importa com o sentimento dos outros, não é um tolo.'))
listOfMessages.push (window[generateMsgName()] = new LuckMessages(index, 'A adversidade é um espelho que reflete o verdadeiro eu.'))
listOfMessages.push (window[generateMsgName()] = new LuckMessages(index, 'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.'))
listOfMessages.push (window[generateMsgName()] = new LuckMessages(index, 'Uma bela flor é incompleta sem as suas folhas.'))
listOfMessages.push (window[generateMsgName()] = new LuckMessages(index, 'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'))