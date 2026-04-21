let myLibrary = [];

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return (
            `${this.title} by ${this.author},  ${this.pages} pages.`
        )
    }
}

const body = document.querySelector("body");
const bookshelfContainer = document.querySelector(".bookshelfContainer");

function display(container, contentArr) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }; //remove first child from container until there is no child left aka remove all books from bookshelf
    contentArr.forEach(element => {
        const bookInfo = document.createElement("p");
        bookInfo.setAttribute("class", "bookInfo") ;
        bookInfo.textContent = element.info();

        const readStatus = document.createElement("button") ;
        readStatus.textContent = element.read ;
        readStatus.setAttribute("class", "readStatus") ;

        const removeBtn = document.createElement("button") ;
        removeBtn.textContent = ("Remove this book from library") ;
        removeBtn.setAttribute("class" , "removeBtn") ;

        const bookContainer = document.createElement("div") ;
        bookContainer.setAttribute("id", `${element.id}`) ;
        
        bookContainer.appendChild(bookInfo) ;
        bookContainer.appendChild(readStatus) ;
        bookContainer.appendChild(removeBtn) ;

        container.appendChild(bookContainer) ;
    });
}

function addBookToLibrary(title, author, pages, read) {
    let bookId = crypto.randomUUID();
    let bookName = `book-${bookId}`
    const book = new Book(bookId, title, author, pages, read);
    myLibrary.push(book);
    display(bookshelfContainer, myLibrary);
}