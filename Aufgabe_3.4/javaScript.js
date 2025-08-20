const chooseButton = document.getElementById('choose')

const destinationList = document.getElementById('destinations')

chooseButton.addEventListener('click', () => {
    destinationList.querySelectorAll('.selected').forEach((el) => {
        el.classList.remove('selected')
    })

    const numberOfDestinations = destinationList.childElementCount
    let randomIndex = Math.floor(Math.random() * numberOfDestinations)

    destinationList.children[randomIndex].classList.add('selected')
})