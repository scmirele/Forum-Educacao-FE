let email = document.querySelector('#botaoEmail')
let senha = document.querySelector('#botaoSenha')
let nome = document.querySelector('#botaoNome')
let button = document.querySelector('#botaoEntrar')
let form = document.querySelector('#formulario')



async function CreateUser(){
    const urlCadastros = 'https://backend-question-production.up.railway.app/usuarios'

    const imagem = Math.floor(Math.random() * 5);
    let img = document.createElement('img')
    switch(imagem){
        case 1 :
             img.setAttribute('src', '../assets/1.svg');
        case 2 :
            img.setAttribute('src', '../assets/2.svg');
        case 3 :
            img.setAttribute('src', '../assets/3.svg');
        case 4 : 
            img.setAttribute('src', '../assets/4.svg');
        case 5 : 
            img.setAttribute('src', '../assets/5.svg');
        
    }

    let dados = {
        email: email.value,
        senha: senha.value,
        nome : nome.value,
        img : img.value
        
    }

    try {
        const responseCadastro = await fetch(urlCadastros, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        if(email.value && senha.value && nome.value){
            alert('Usuário cadastrado com sucesso!')
            window.location.href="http://127.0.0.1:5501/login/index.html"
            form.reset();
        }else{
            alert('Preencha todos os campos vazios!')
        }

       return responseCadastro
    } catch (error) {
        alert('Usuário não encontrado!')
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    CreateUser()
 })

