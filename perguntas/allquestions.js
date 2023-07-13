const openModalButton = document.querySelector('#open-modal');
const closeModalButton = document.querySelector('#close-modal');
const fade = document.querySelector('#fade');
const modal = document.querySelector('#modal');

const div = document.querySelector('.questions')

const toggleModal = () => {
  [modal, fade].forEach((elemento) => elemento.classList.toggle("hide"));
};

[openModalButton, closeModalButton, fade].forEach((elemento) => {
  elemento.addEventListener('click', () => toggleModal());
});



let myInit = { method: 'GET',
               mode: 'cors',
               cache: 'default' };

            

async function listQuestions() {
  const url = 'https://backend-question-production.up.railway.app/perguntas'

    try {
      const data = await fetch(url)
      const questions = await data.json()
      console.log(questions)

      questions.forEach((pergunta) => {
        const { title, question } = pergunta
        console.log(title, question)

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
        paragrafoNumber.textContent = '2'
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

    // const { usuario } = perguntas

  

  listQuestions()

//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//       const perguntas = response.json()
//     }
//   })
  
  
// }




// listQuestions()