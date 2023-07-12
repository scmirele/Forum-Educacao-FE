const openModalButton = document.querySelector('#open-modal');
const closeModalButton = document.querySelector('#close-modal');
const fade = document.querySelector('#fade');
const modal = document.querySelector('#modal');

const toggleModal = () => {
  [modal, fade].forEach((elemento) => elemento.classList.toggle("hide"));
};

[openModalButton, closeModalButton, fade].forEach((elemento) => {
  elemento.addEventListener('click', () => toggleModal());
});


async function listQuestion() {
  const url = 'https://backend-question-production.up.railway.app/perguntas'
}

// let linkModal = document.querySelector('#link-modal')

// let changeCheck = document.querySelector('.icon-check')
// console.log(changeCheck)

// let checkoutEnable = "../assets/icon-status.svg" 
// let checkoutDisable = "../assets/icon-status-disable.svg"

// function DisableEnable() {
//   let check = document.querySelector('.icon-check')
//   check.src = checkoutEnable
//   checkoutEnable = checkoutDisable
//   checkoutDisable = check.src
// }

// changeCheck.addEventListener('click', DisableEnable)

// linkModal.setAttribute('href', 'http://127.0.0.1:5501/modal.html')
// linkModal.setAttribute('target', '_blank') 

