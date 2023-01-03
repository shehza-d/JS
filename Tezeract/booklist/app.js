class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
class UI {
  addBookToList(book) {
    const list = document.querySelector("#bookList");
    const row = document.createElement("tr");
    //insert columns
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">Delete</a></td>`;
    list.appendChild(row);
  }
  showAlert(msg, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(msg));
    const container = document.querySelector(".container");
    const form = document.querySelector("#bookForm");
    container.insertBefore(div, form);
    setTimeout(() => document.querySelector(".alert").remove(), 3500);
  }
  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }
  clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

// DOM Load Event
// document.addEventListener("DOMContentLoaded", Store.displayBooks);

//Event listeners for book add
document.querySelector("#bookForm").addEventListener("submit", (e) => {
  //getting form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;
  // Instantiate book and UI
  const book = new Book(title, author, isbn);
  const ui = new UI();

  console.log(Book, ui);

  // Validate
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill in all fields", "error");
  } else {
    ui.addBookToList(book); // Add book to list
    // Store.addBook(book); // Add to LS
    ui.showAlert("Book Added!", "success");
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener for delete
document.getElementById("bookList").addEventListener("click", (e) => {
  const ui = new UI(); // Instantiate UI
  ui.deleteBook(e.target); // Delete book
  //   Store.removeBook(e.target.parentElement.previousElementSibling.textContent); // Remove from LS
  ui.deleteBook(e.target); //delete
  ui.showAlert("Book Removed!", "success");
  e.preventDefault();
});

// Local Storage Class
// class Store {
//   static getBooks() {
//     let books;
//     if (localStorage.getItem("books") === null) {
//       books = [];
//     } else {
//       books = JSON.parse(localStorage.getItem("books"));
//     }

//     return books;
//   }

//   static displayBooks() {
//     const books = Store.getBooks();

//     books.forEach(function (book) {
//       const ui = new UI();

//       // Add book to UI
//       ui.addBookToList(book);
//     });
//   }

//   static addBook(book) {
//     const books = Store.getBooks();

//     books.push(book);

//     localStorage.setItem("books", JSON.stringify(books));
//   }

//   static removeBook(isbn) {
//     const books = Store.getBooks();

//     books.forEach(function (book, index) {
//       if (book.isbn === isbn) {
//         books.splice(index, 1);
//       }
//     });

//     localStorage.setItem("books", JSON.stringify(books));
//   }
// }
