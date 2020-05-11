//my book list class
class Mybooklist{
    constructor(){
        this.books = [];
    }  
    addBook(book){
        this.books.push(book);
        console.log(this.books);
    } 
    removeBook(isbn){
        isbn=Number.parseInt(isbn);
        this.books = this.books.filter(x => x.isbn !== isbn);
    }
}
//book object constructor
class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        console.log(this.title);
    }
}

function init() {
var myBook= new Mybooklist;
window.bookList = myBook;
document.getElementById("submit").addEventListener("click",function(){
    var title= document.getElementById("title").value;
    var author= document.getElementById("author").value;
    var isbn = document.getElementById("isbn").value;
     var book = new Book(title,author,isbn);
     window.bookList.addBook(book);
     document.getElementById("title").value='';
     document.getElementById("author").value='';
     document.getElementById("isbn").value='';
     updateUserInterface();
    })
    
    }
//User interface
   function updateUserInterface() {
    buildBooksUi()
    }
    function  buildBooksUi() {
    var myBookList = document.getElementById("booklistTemplate1");
     myBookList.innerHTML ='';
    window.bookList.books.forEach(x => {
     var bookRow= document.createElement('tr');
     //building title div
     var titleTd= document.createElement('td');
     titleTd.innerText = x.title;
     //author td
     var authorTd = document.createElement('td');
     authorTd.innerText = x.author;
     // ISBN td
     var isbnTd = document.createElement('td');
     isbnTd.innerText = x.isbn;
     //action
     var actionTd = document.createElement('td');
     var deleteButton=document.createElement('svg');
     deleteButton.width="1.2em";
     deleteButton. height="2em";
     deleteButton.viewBox="0 0 16 16";
     deleteButton. fill="rgb(187, 6, 6)";
     deleteButton.xmlns="http://www.w3.org/2000/svg";
     deleteButton.d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm9.854 4.854a.5.5 0 00-.708-.708L8 7.293 4.854 4.146a.5.5 0 10-.708.708L7.293 8l-3.147 3.146a.5.5 0 00.708.708L8 8.707l3.146 3.147a.5.5 0 00.708-.708L8.707 8l3.147-3.146z" ;
     deleteButton.className = 'bi bi-x-square-fill';
    
     deleteButton.dataset.bookIsbn= x.isbn;
     deleteButton.addEventListener('click', function (e){
         var bookIsbn = e.target.dataset.bookIsbn;
         window.bookList.removeBook(bookIsbn);
         updateUserInterface(window.bookList);
     })
     actionTd.appendChild(deleteButton);
   bookRow.appendChild(titleTd);
   bookRow.appendChild(authorTd);
   bookRow.appendChild(isbnTd);
   bookRow.appendChild(actionTd);
   myBookList.appendChild(bookRow);

 })
}
