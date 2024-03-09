const myLibrary = new Library();

function Library(){
  this.data = [];
  this.addBookToLibrary = function (){
    var i = 0;
    var bookGrid = document.getElementById("book-grid");

    function addBookToLibrary(title, author, pages, haveRead){
      myLibrary[i] = new Book(title, author, pages, haveRead);
      createCard(myLibrary[i]);
      i++;
    }
  
    function createCard(book){
      var title = document.createElement("p");
      var author = document.createElement("p");
      var page = document.createElement("p");
      
      title.innerText = `\"${book.title}\"`;
      author.innerText = book.author;
      page.innerText = `${book.pages} pages`;

      var readBtn = document.createElement("button");
      var removeBtn = document.createElement("button");
      var bookDiv = document.createElement("div");
      bookDiv.dataset.index = i;

      readBtn.addEventListener("click", (event) => {
        var list = event.currentTarget.classList;
        if(list.contains("read")){
          list.add("unread");
          list.remove("read");
          event.currentTarget.innerText = "Not Read";
        }
        else{
          list.add("read");
          list.remove("unread");
          event.currentTarget.innerText = "Read";
        }
      })

      removeBtn.addEventListener("click", function() {
        bookGrid.removeChild(bookDiv);
        myLibrary.remove(bookDiv.dataset.index);
      })

      if(book.haveRead){
        readBtn.classList.add("read");
        readBtn.innerText = "Read";
      }
      else{
        readBtn.classList.add("unread");
        readBtn.innerText = "Not Read";
      }

      removeBtn.classList.add("remove");

      removeBtn.innerText = "Remove";

      bookDiv.classList.add("bookDiv")

      bookDiv.append(title, author, page, readBtn, removeBtn);
      bookGrid.prepend(bookDiv);
    }

    function Book(title, author, pages, haveRead) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.haveRead = haveRead;
      this.info =  () => {
        return this.title + " by " + this.author + ", " + this.pages + ", " + this.haveRead + " read yet."
      }
    }
  
    return addBookToLibrary;
  }(); 
}

myLibrary.addBookToLibrary("The Lord Of The Rings", "J.R.R. Tolkien", 1000, "true");

(() => {
  const addButton = document.getElementById("add-button");
  const cancelButton = document.getElementById("cancel-btn");
  const dialog = document.getElementById("myDialog");

  addButton.addEventListener("click", () => {
    dialog.show();
  });

  cancelButton.addEventListener("click", () => {
    dialog.close();
  });

  const submitBtn = document.getElementsByClassName("btn-submit")[0];
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    if(!formValidate(title, author, pages)){
      return;
    }
    myLibrary.addBookToLibrary(title, author, pages, read);
    dialog.close();
  })

  function formValidate(title, author, pages){
    var error = [];
    if(!title){
      error.push("Title");
    }
    if(!author){
      error.push("Author");
    }
    if(!pages){
      error.push("Pages");
    }
    if(error.length !== 0){
      const result = error.join(", ");
      alert(`please enter ${result} !`);
      return false;
    }

    return true;
  }

})();

