let openModalButton = document.querySelector('#open-modal');
let closeModalButton = document.querySelector('#close-modal');
let fade = document.querySelector('#fade');
let modal = document.querySelector('#modal');

let div = document.querySelector('.questions')

let btnQuestion = document.querySelector('.btn-questions')

const respostas = 'http://127.0.0.1:5501/respostas/respostas.html'

function openAnswer(respostas) {
   window.open(respostas, '_blank')
}
btnQuestion.addEventListener('click', () => {
  openAnswer(respostas)
})

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
        console.log(pergunta.id)
        const { title, question, quantidadeDeRespostas } = pergunta
        console.log(title, question, quantidadeDeRespostas)

        let a = document.createElement('a')
        // window.location.href=`../respostas/respostas.html?id=${pergunta.id}`
        a.setAttribute("href", `../respostas/respostas.html?id=${pergunta.id}`);
        a.classList.add('btn-questions')

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
        paragrafoNumber.textContent = quantidadeDeRespostas
        paragrafoWord.textContent = 'Respostas'

        div.appendChild(a)
        a.append(divInformations, spanAnswer)
        divInformations.append(img, spanQuestion)
        spanQuestion.append(questionTitle, questionSubtitle)
        spanAnswer.append(paragrafoNumber, paragrafoWord)
      })
    } catch (error) {
      console.log(error)
    }
  }
  listQuestions()

  // async function addQuestions() {
    
  //      let newQuestion = {
  //       "id": 2,
  //       "question": "Por qual linguagem de programação eu devo começar?",
  //       "title": "JavaScript ou Java",
  //       "usuario": "mirele",
  //       "quantidadeDeRespostas": 1
  //       }
    
  //       const url = 'https://backend-question-production.up.railway.app/perguntas'
  //       try {
  //         const data = await fetch(url, {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json'
  //           },
  //           body: JSON.stringify(newQuestion),
  //         })
  //         const questions = await data.json()
  //         console.log(questions)
          
  //         // questions.forEach((pergunta) => {
  //         //   const { title, question, quantidadeDeRespostas } = pergunta
  //         //   console.log(title, question, quantidadeDeRespostas)
  //         // })

  //         alert('questao criada')
  //         return data;
  //       } catch (error) {
  //         console.log(error)
  //       }
  //   }
    
  //   addQuestions()