let email = document.querySelector('#botaoEmail')
let senha = document.querySelector('#botaoSenha')
let button = document.querySelector('#botaoEntrar')
let confirme = document.querySelector('#botaoConfirme')
let form = document.querySelector('#formulario')


async function CreteUser(){
    const urlUsuario = 'https://backend-question-production.up.railway.app/usuarios'

    let dados = {
        email: email.value,
        senha: senha.value,
        confirme: confirme.value
    }

    try {
        const responseLogin = await fetch(urlUsuario, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
    } catch (error) {
        alert('Usuário não encontrado!')
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    loginUser()
 })

