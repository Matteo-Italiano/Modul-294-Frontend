document.addEventListener('DOMContentLoaded', () => {
    const titleInput = document.getElementById('titleInput')
    const textInput = document.getElementById('textInput')
    const addNotesBtn = document.getElementById('addNote')
    const notesSection = document.getElementById('notes')

    addNotesBtn.addEventListener('click', () => {
        const title = titleInput.value
        const text = textInput.value

        let newNote = document.createElement('div')
        let titleParagraph = document.createElement('p')
        let textParagraph = document.createElement('p')

        titleParagraph.innerText = title
        textParagraph.innerText = text

        newNote.appendChild(titleParagraph)
        newNote.appendChild(textParagraph)
    })
})