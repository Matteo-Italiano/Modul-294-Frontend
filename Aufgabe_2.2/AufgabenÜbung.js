let Hauptstadt = document.getElementsByClassName('voy-qb-item-capital')[0].lastElementChild.firstChild.innerHTML; 

let NordOstBulgarienCount = document.getElementsByClassName('voy-regionHeader')[0].nextSibling.children;

let Namen = document.querySelectorAll('*[data-group="nature"] .p-name').forEach(element => {
    console.log(element.innerText);
})

let AreaOfBulgaria = document.querySelector('.voy-qb-item-area').lastChild.innerText;