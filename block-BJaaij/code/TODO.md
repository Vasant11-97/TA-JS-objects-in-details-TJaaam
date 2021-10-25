## An object-oriented book-list!

- [ ] Create a class BookList
- [ ] Create another class called Book

#### Each Book should have several properties:

1. Title
2. Category
3. Author
4. isRead (default to `false`)
5. finishedDate

Book class will have the following methods:

- `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

#### BookList should have the following properties:

1. An array of all the Books
2. Current read book index

#### BookList Methods

- [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
- [] `getCurrentBook()` should return the current book using the `index` and the book array
- [] `getNextBook()` should return the next book using the `index` and the book array
- [] `getPrevBook()` should return the previous book using the `index` and the book array
- [] `changeCurrentBook` should accept one parameter and update the current index.

After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.

```js

class Book{
    constructor(title, category, author, isRead = false, finishedDate){
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = isRead;
        this.finishedDate = finishedDate;
    }
    markBookAsRead(){
        this.isRead = true;
        this.finishedDate = Data.now();
    }
}

let book1 = new Book ("You Can Win","Rich Dad and Poor Dad");

class BookList{
    constractor(){
        this.Books = []
    }
    add(books =[]){
    this.books = this.books.concat(books)
    return this.books;
    }
    getCurrentBook(){
        return this.books[this.currentIndexBook];
    }
    getNextBook(){
        this.currentIndexBook =this.currentIndexBook +1;
        return this.book[this.currentIndexBook];
    }
    getPreBook(){
        this.currentIndexBook =this.currentIndexBook -1;
        return this.book[this.currentIndexBook];
    }
}
let book2 = new Booklist("You Can Win","Rich Dad and Poor Dad")
   

```