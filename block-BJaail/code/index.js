let form = document.querySelector('form');
let bookListRoot = document.querySelector('.book_list');

const nameElm = form.elements.title;
const authorElm = form.elements.author;
const imageElm = form.elements.image;

class Book {
    constructor(name, auhtor, img){
        this.name = name;
        this.author = auhtor;
        this.img = img;
        this.isRead = false;
    }

    toggleIsRead(){
        this.isRead = !this.isRead;
    }
}



class BookList {
    constructor(books = []){
        this.books = books;
    }
    addBook(name, author, img){
        let book = new Book(name, author, img);
        this.books.push(book);
        this.createUI();
    }
    createUI(){
        bookListRoot.innerHTML = "";
        this.books.forEach(book => {
            let li = document.createElement("li");
            let img = document.createElement("img");
            img.src = book.img;
            let h2 = document.createElement("h4");
            h2.innerText = book.name;
            let span = document.createElement("p");
            span.innerText = book.author;
            let button = document.createElement("button");
            button.innerText = book.isRead ? "Completed!" : "Mark As Read" ;
            button.addEventListener("click", () => {
                book.toggleIsRead();
                this.createUI;
            })
            li.append(img, h2, span, button);
            bookListRoot.append(li);
        })
    }
}

let library = new BookList();



function handleSubmit(){
    event.preventDefault();
    const name = nameElm.value;
    const author = authorElm.value;
    console.log(name, author);
    library.addBook(name, author);
    nameElm.value = "";
    authorElm.value = "";
    imageElm.value = "";
}

form.addEventListener('submit', handleSubmit)