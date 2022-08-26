import BookList from "./class.js";


//Select Each Input Container
const inputContainer = document.querySelector('.my-input')
//const inputContainer2 = document.querySelector('.input-container')

//Select add book button
const addBookBtn = document.querySelector('#add-new-book')

//Select Clear All Books Button
const clearBooksBtn = document.querySelector('#clear')


//Select Author Name
const author = document.querySelector('#author')
//Select Book Name
const book = document.querySelector('#book')
//Select ISBN Number
const isbnNum = document.querySelector('#isbn')

//Select container that will hold the added books
const booksContainer = document.querySelector('.display-added-books')

//SELECT ERRORS
const authorError = document.querySelector('#author-name-error')
const bookError = document.querySelector('#book-name-error')
const isbnError = document.querySelector('#isbn-name-error')



//Instantiate the BookList class
const bookListA = new BookList(inputContainer,booksContainer)
console.log(bookListA)

//Function to display the added books on the webpage
function displayUi(){
    booksContainer.innerHTML = ''
    bookListA.bookList.map(function(books){
        booksContainer.innerHTML += `<div class="books-container">
        <p>${books.author}</p>
        <p>${books.book}</p>
        <p>${books.isbnNum}</p>
        <button class="delete-btn" onclick = "deleteBooks(${books.id})">delete</button></div>`
    })
}

//EventListeners
addBookBtn.addEventListener('click',()=>{
   if(author.value.length === 0){
    alert('empty form')
   }
   else{
    bookListA.pushToBookArray(author.value,book.value,isbn.value)
    bookListA.pushToLocaleStorage()
    displayUi()
   }

   author.value = ""
   book.value = ""
   isbn.value = ""
})
window.addEventListener('load',()=>{
    bookListA.fetchLocalStorageItems(booksContainer)
})
author.addEventListener('input',()=>{
    bookListA.showAuthorNameError(author.value,authorError)
})

book.addEventListener('input',()=>{
    bookListA.showBookNameError(book.value,bookError)
})
isbnNum.addEventListener('input',()=>{
    bookListA.showIsbnError(isbnNum.value,isbnError)
})

booksContainer.addEventListener('click',(e)=>{
    let target = e.target
    let cover = target.parentElement
   if(target.classList.contains('delete-btn')){
      cover.remove()
   }
})

clearBooksBtn.addEventListener('click',()=>{
    bookListA.clearAllBooks()
})