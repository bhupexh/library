const myLibrary = new Library();

function Library(){
  this.data = [];
  this.addBookToLibrary = function (){
    var i = 0;
    var readClass = ["block", "w-11/12", "p-2", "text-xl", "bg-green-400", "rounded-lg"];
    var removeClass = ["block", "w-11/12", "p-2", "text-xl", "bg-gray-200", "rounded-lg"];
    var bookClass = ["flex", "flex-col", "items-center", "justify-center", "gap-3", "bg-white", "border", "border-black", "border-solid", "rounded-lg"];
    
    var bookGrid = document.getElementById("book-grid");
    function addBookToLibrary(title, author, pages, haveRead){
      myLibrary[i] = new Book(title, author, pages, haveRead);
      createCard(myLibrary[i]);
      i++;
    }
  
    function createCard(book){
      var name = document.createElement("p");
      var author = document.createElement("p");
      var page = document.createElement("p");
      
      name.innerText = book.title;
      author.innerText = book.author;
      page.innerText = book.pages;
      var readBtn = document.createElement("button");
      var removeBtn = document.createElement("button");
      var bookDiv = document.createElement("div");

      readBtn.innerText = "Read";
      removeBtn.innerText = "Remove";

      appendClass(bookDiv, bookClass);
      appendClass(readBtn, readClass);
      appendClass(removeBtn, removeClass);

      bookDiv.append(name);
      bookDiv.append(author);
      bookDiv.append(page);
      bookDiv.append(readBtn);
      bookDiv.append(removeBtn);
      bookGrid.prepend(bookDiv);
    }

    function appendClass(item, classArray){
      classArray.forEach(className => {
        item.classList.add(className);
      });
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

myLibrary.addBookToLibrary("The Lord Of The Rings", "J.R.R. Tolkien", 1000, "Yes");
console.log(myLibrary[0].info());

(() => {
  const addButton = document.getElementById("add-button");
  const cancelButton = document.getElementById("cancel-btn");
  const dialog = document.getElementById("myDialog");

  addButton.addEventListener("click", () => {
    dialog.show();
  });

  cancelButton.addEventListener("click", () => {
    console.log("Cancel button clicked");
    dialog.close();
  });
})();

