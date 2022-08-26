class BookList{
    bookList = []
  
    constructor(element,element2){
        this.element = element;
        this.element2 = element2;
        //Create Empty Array
        this.bookList = []
    }
    pushToBookArray(author,book,isbn){
        this.bookList.push({
            id:Math.floor(Math.random()*3000),
            author:author,
            book:book,
            isbnNum:isbn,
        })
    }
    pushToLocaleStorage(){
        localStorage.setItem('BOOK',JSON.stringify(this.bookList))
    }
    fetchLocalStorageItems(container){
     
        this.bookList = JSON.parse(localStorage.getItem('BOOK'))|| []
        this.bookList.map(function(books){
            container.innerHTML += `<div class="books-container">
            <p>${books.author}</p>
            <p>${books.book}</p>
            <p>${books.isbnNum}</p>
            <button class="delete-btn" id="${books.id}" ">delete</button></div>`
        })
      
    }
    showAuthorNameError(author,error){
        if(author.length === 0 ){
            error.innerText = "Input a valid Author name"
           error.style.display = "block"
           setTimeout(function(){
            error.style.display = "none"
           },1000)
        }
        else if(author.length > 0){

            error.style.display = "none"
        }
    }

    showBookNameError(book,error){
        if(book.length === 0 ){
            error.innerText = "Input a valid Book name"
           error.style.display = "block"
           setTimeout(function(){
            error.style.display = "none"
           },1000)
        }
        else if(book.length > 0){

            error.style.display = "none"
        }
    }

    showIsbnError(isbn,error){
        if(isNaN(isbn)){
            error.innerText = "invalid number"
            error.style.display = "block"
            setTimeout(function(){
                error.style.display = "none"
               },1000)
        }
        else{
            error.style.display = "none"
        }
    }
   clearAllBooks(){
    localStorage.clear()
    this.bookList.splice(0)
    this.element2.remove()
   }
}

export default BookList