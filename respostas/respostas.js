const url = new URLSearchParams(window.location.search)
const perguntaId = url.get('id')

const content = document.querySelector('#content')
const div = document.querySelector('.publi')
const divQuestion = document.querySelector('.h1-ques')
const divAnswer = document.querySelector('.resposta-linha')

async function listAnswer(id) {


  const url = `https://backend-question-production.up.railway.app/respostas/pergunta/${id}`

  try {
    const data = await fetch(url)
    let pergunta = await data.json()
      
    let titleQuestion = document.querySelector('.h1-title')
    titleQuestion.textContent = pergunta.title
    
    let name = document.querySelector('.name-people')
    name.textContent = pergunta.usuario.nome


    let questionDescription = document.querySelector('.description')
    questionDescription.textContent = pergunta.question

    const {respostasDTO} = pergunta
    respostasDTO.forEach(pergunta => {
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
      img.setAttribute('src', '../assets/icon-user.svg')
      img.style.width = '60px'
      img.style.height = '60px'
      
      let imgLike = document.createElement('img')
      imgLike.setAttribute('src', '../assets/icon-like.png')

      // let imgComment = document.createElement('img')
      // imgComment.setAttribute('src', '../assets/icon-comment.png')

      content.append(divMae)
      divMae.append(divFilho, answerTwo)
      divFilho.append(img, nameAnswer , imgLike)
    });
    

} catch (error) {
  console.log(error)
}
}
listAnswer(perguntaId)


let send = document.querySelector('.send')
let form = document.querySelector('#formulario')
let res = document.querySelector('.res')
let icon = document.querySelector('.icon-send')

async function CadastrarResposta(pergunta){
  const urlReposta = 'https://backend-question-production.up.railway.app/respostas'

  let user = JSON.parse(localStorage.getItem('info'));

  let dados ={
    answer: res.value,
    pergunta: pergunta,
    usuario: user.id
  }
 
  try {
    const responseResposta = await fetch(urlReposta, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
  })
  console.log(responseResposta)
  
  alert('Resposta enviada com sucesso!')
  window.location.reload(true);
  form.reset();
  


  } catch (error) {
    
  }
}
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  CadastrarResposta(perguntaId)
})