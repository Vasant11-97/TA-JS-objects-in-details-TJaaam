class BookList{
    constructor(root,title = []){
        this.books = title;
        this.root = root;
    }
    add(text){
        let book = new Book(text);
        this.books.push(book);
        this.createUI();
        return this.books.length;
    }
    handleDelete(id){
        let index = this.books.findIndex(book => book.id == id);
        this.books.splice(index, 1);
        this.createUI();
        return this.books.length;
    }
    createUI(){
        this.root.innerHTML = "";
        this.books.forEach(book => {
            let ui = book.createUI();
            ui.querySelector('span').addEventListener("click", this.handleDelete.bind(this, book.id));
            console.log(book.createUI()); 
            this.root.append();
        });
    }
}

class Book{
    constructor(text){
        this.text = text;
        this.id = `id-${Date.now()}`;
    }
    createUI(){
        let ul = document.querySelector(".books")
        let li = document.createElement("li");
        let para = document.createElement("p");
        let span = document.createElement("span");
        span.innerText = "❌";
        li.append(para, span);
        ul.append(li);
        return li;
    }
}

let input = document.querySelector("input");

let myBook = new BookList(document.querySelector(".books"));

input.addEventListener("keyUp", () => {
    if(event.keyCode == 13){
        myBook.add(event.target.value);
        event.target.value = "";
    }
})