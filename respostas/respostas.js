const url = new URLSearchParams(window.location.search)
const perguntaId = url.get('id')
console.log(perguntaId)

const content = document.querySelector('#content')
const div = document.querySelector('.publi')
const divQuestion = document.querySelector('.h1-ques')
const divAnswer = document.querySelector('.resposta-linha')

async function listAnswer(id) {

  const url = `https://backend-question-production.up.railway.app/respostas/pergunta/${id}`

  try {
    const data = await fetch(url)
    const pergunta = await data.json()
      
    let titleQuestion = document.querySelector('.h1-title')
    console.log(pergunta.question)
    titleQuestion.textContent = pergunta.title
    
    let name = document.querySelector('.name-people')
    name.textContent = pergunta.usuario.nome

    let questionDescription = document.querySelector('.description')
    questionDescription.textContent = pergunta.question

    const {respostasDTO} = pergunta
    respostasDTO.forEach(pergunta => {
      console.log(pergunta)
      const { usuario, answer} = pergunta

      let nameAnswer = document.createElement('h2')
      nameAnswer.classList.add('nome')
      nameAnswer.textContent = usuario.nome
  
      let answerTwo = document.createElement('p')
      answerTwo.classList.add('paragrafo')
      answerTwo.textContent = answer

      let divMae = document.createElement('div')
      divMae.classList.add('mae')
      
      let divFilho = document.createElement('div')
      divFilho.classList.add('filho-1')

      let img = document.createElement('img')
      img.setAttribute('src', '../assets/icon-user.png')
      img.style.width = '80px'
      img.style.height = '80px'
      
      let imgLike = document.createElement('img')
      imgLike.setAttribute('src', '../assets/icon-like.png')

      let imgComment = document.createElement('img')
      imgComment.setAttribute('src', '../assets/icon-comment.png')

      content.append(divMae)
      divMae.append(divFilho, answerTwo)
      divFilho.append(img, nameAnswer, imgLike, imgComment)
    });
    console.log(respostasDTO)
    

} catch (error) {
  console.log(error)
}
}

listAnswer(perguntaId)