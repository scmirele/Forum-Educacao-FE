let send = document.querySelector('.send')
let form = document.querySelector('#formulario')
let res = document.querySelector('.res')
let icon = document.querySelector('.icon-send')


async function CadastrarResposta(){
  const urlReposta = 'https://backend-question-production.up.railway.app/respostas'

  let dados ={
    answer: res.value,
    pergunta: 3,
    usuario: 2
  }
 
  try {
    const responseResposta = await fetch(urlReposta, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
  })
  
  alert('Resposta enviada com sucesso!')
  

  } catch (error) {
    
  }
}
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  CadastrarResposta()
})