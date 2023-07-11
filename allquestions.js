let linkModal = document.querySelector('#link-modal')

let changeCheck = document.querySelector('.icon-check')
console.log(changeCheck)

let checkoutEnable = "./assets/icon-status.svg" 
let checkoutDisable = "./assets/icon-status-disable.svg"

function DisableEnable() {
  let check = document.querySelector('.icon-check')
  check.src = checkoutEnable
  checkoutEnable = checkoutDisable
  checkoutDisable = check.src
}

changeCheck.addEventListener('click', DisableEnable)

linkModal.setAttribute('href', 'http://127.0.0.1:5500/modal.html')
linkModal.setAttribute('target', '_blank') 

