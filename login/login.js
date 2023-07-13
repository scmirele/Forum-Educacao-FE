let email = document.querySelector('#botaoEmail')
let senha = document.querySelector('#botaoSenha')
let button = document.querySelector('#botaoEntrar')

fetch('https://backend-question-production.up.railway.app/usuarios').then(resposta =>{
    return resposta.json()
}).then((usuarios)=>{
    listUsers(usuarios)
}).catch((error) =>{
    console.log('erro foi:' , error)
})

const storedUser = JSON.parse(localStorage.getItem('info'));
function listUsers(usuarios){
    
    usuarios.forEach((usuario) => {
       const {email, senha } = usuario
      
        if (storedUser.botaoEmail === email && storedUser.botaoSenha === senha ){
             
        }else{
            alert ('Usuário não cadastrado')
        }
    }); 
}

button.addEventListener('click',()=>{
    const info ={
        botaoEmail:email.value,
        botaoSenha:senha.value
    }
localStorage.setItem('info',JSON.stringify(info))
})



