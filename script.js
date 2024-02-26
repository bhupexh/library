const myLibrary = [];

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  this.info =  () => {
    return this.title + " by " + this.author + ", " + this.pages + ", " + this.haveRead + " read yet."
  }
}

const addBookToLibrary = function (){
  var i = 0;
  function addBookToLibrary(title, author, pages, haveRead){
    myLibrary[i] = new Book(title, author, pages, haveRead);
    i++;
  }
  return addBookToLibrary;
}();

addBookToLibrary("The Lord Of The Rings", "J.R.R. Tolkien", 1000, "Yes");
console.log(myLibrary);
console.log(addBookToLibrary);

(() => {
  const addButton = document.getElementById("add-button");
  const cancelButton = document.getElementById("cancel");
  const dialog = document.getElementById("myDialog");

  addButton.addEventListener("click", () => {
    dialog.show();
  });

  cancelButton.addEventListener("click", () => {
    dialog.close();
  });
})();

