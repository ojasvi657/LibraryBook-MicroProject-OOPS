class Library{
    constructor(){
this.books = [];//saari books ka record yaha aata hai
   }

   addBooks(books){//in an array so that we do not need to write the function again for all the books
    this.books.push(...books);
   }

   ListAllBooks(){
    this.books.forEach(function(book){
        console.log(`${book.name}`);
    });
   }
}
class Book{//about that book
    constructor(name, isbn, price, author){
        this.name=name;
        this.price=price;
        this.isbn=isbn;
        this.author=author;
        this.readStatus=false;
    }
    info(){
        console.log(`${this.name} is written by ${this.author} and is available at a price of ${this.price} and you have ${this.readStatus ? "you have read it" : "you have not read it"}`)
    }
    changeReadStatus(){
        this.readStatus=!this.readStatus;
    }
}


let book1= new Book("Illusion of Palace", "bbc2hbsjb", 500, "Chitra Banerjee")
let book2= new Book("Sita", "dbxnhbsjb", 600, "Amish")
let book3= new Book("Ram", "2hxnjbsjb", 400, "Amish")
let book4= new Book("Ravan", "kbc2hbznn", 350, "Amish")
let book5= new Book("War of Lanka", "xgc2hbsjb", 200, "Amish")

let jhansiLibrary = new Library()
let bhopalLibrary = new Library();

jhansiLibrary.addBooks([book1, book2, book3, book4, book5])

