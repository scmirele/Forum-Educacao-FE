let email = document.querySelector('#botaoEmail')
let senha = document.querySelector('#botaoSenha')
let button = document.querySelector('#botaoEntrar')
let form = document.querySelector('#formulario')

const storedUser = JSON.parse(localStorage.getItem('info'));

async function loginUser(){
    const urlUsuario = 'https://backend-question-production.up.railway.app/usuarios/login'

    let dados = {
        email: email.value,
        senha: senha.value
    }

    try {
        const responseLogin = await fetch(urlUsuario, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })

        const dataLogin = await responseLogin.json()
        console.log(dataLogin)
        
    } catch (error) {
        alert('Usuário não encontrado')
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    loginUser()

     

 })
 