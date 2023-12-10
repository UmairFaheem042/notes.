const notesContainer = document.querySelector('.notes__container');
const createBtn = document.querySelector('.createBtn');
let notes = document.querySelectorAll('.note')

const showNotes =  () =>    {
    notesContainer.innerHTML = localStorage.getItem('notes');
}
const updateStorage = () => {
    localStorage.setItem('notes', notesContainer.innerHTML);
}
const createNote = () => {
    let inputBox = document.createElement('div');
    let deleteBtn = document.createElement('i');
    let textArea = document.createElement('p');
    inputBox.classList.add('note');
    deleteBtn.classList.add('ri-delete-bin-line');
    deleteBtn.id = 'deleteNote';
    textArea.classList.add('input__box');
    textArea.setAttribute("contenteditable", "true");
    inputBox.appendChild(deleteBtn);
    inputBox.appendChild(textArea);
    notesContainer.appendChild(inputBox)
    updateStorage(textArea.textContent);
}

createBtn.addEventListener('click', createNote);

notesContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'I'){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === 'P'){
        notes = document.querySelectorAll('.input__box');
        notes.forEach( note => {
            note.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

showNotes();