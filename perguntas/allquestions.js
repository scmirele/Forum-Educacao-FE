const openModalButton = document.querySelector('#open-modal');
const closeModalButton = document.querySelector('#close-modal');
const fade = document.querySelector('#fade');
const modal = document.querySelector('#modal');

const div = document.querySelector('.questions')

// let openQuestion = document.querySelector('.btn-questions')

// openQuestion.setAttribute('href', 'http://127.0.0.1:5501/respostas/respostas.html')
// openQuestion.setAttribute('target', '_blank') 

const toggleModal = () => {
  [modal, fade].forEach((elemento) => elemento.classList.toggle("hide"));
};

[openModalButton, closeModalButton, fade].forEach((elemento) => {
  elemento.addEventListener('click', () => toggleModal());
});

async function listQuestions() {
  const url = 'https://backend-question-production.up.railway.app/perguntas'

    try {
      const data = await fetch(url)
      const questions = await data.json()
      console.log(questions)

      questions.forEach((pergunta) => {
        const { title, question, quantedadeDeResposta } = pergunta
        console.log(title, question, quantedadeDeResposta)

        let button = document.createElement('button')
        button.classList.add('btn-questions')

        let divInformations = document.createElement('div')
        divInformations.classList.add('informations')

        let img = document.createElement('img')
        img.classList.add('icon-check')
        img.setAttribute('src', '../assets/icon-status-disable.svg')

        let spanQuestion = document.createElement('span')
        spanQuestion.classList.add('question')

        let questionTitle = document.createElement('h2')
        questionTitle.classList.add('question-title')

        let questionSubtitle = document.createElement('p')
        questionSubtitle.classList.add('question-subtitle')

        let spanAnswer = document.createElement('span')
        spanAnswer.classList.add('question-answer')

        let paragrafoNumber = document.createElement('p')
        paragrafoNumber.classList.add('question-answer-number')
    
        let paragrafoWord = document.createElement('p')
        paragrafoWord.classList.add('question-answer-word')
        
        questionTitle.textContent = title
        questionSubtitle.textContent = question
        paragrafoNumber.textContent = quantedadeDeResposta
        paragrafoWord.textContent = 'Respostas'

        div.appendChild(button)
        button.append(divInformations, spanAnswer)
        divInformations.append(img, spanQuestion)
        spanQuestion.append(questionTitle, questionSubtitle)
        spanAnswer.append(paragrafoNumber, paragrafoWord)
      })
    } catch (error) {
      console.log(error)
    }
  }
  listQuestions()
