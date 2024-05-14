// Your code here
const borrowBook = (library, title, borrowedBooks) => {
  for (let i = 0; i < library.length; i++) {

    if (library[i].title === title && library[i].available === true) {
      library[i].available = false;
      
      borrowedBooks.push(library[i]);
    }
  }
}

const returnBook = (library, title, borrowedBooks) => {
  for (let i = 0; i < library.length; i++) {
    if (library[i].title === title) {
      library[i].available = true;

      removeBook(borrowedBooks, -1)
    }
  }
}



const library = [{
  title: 'Story of my life',
  author: 'Me',
  publishedYear: 2024,
  available: true
}, {
  title: 'Story of your life',
  author: 'You',
  publishedYear: 2024,
  available: false
}];

const title = 'Story of your life';

const borrowedBooks = [{
  title: 'Story of your life',
  author: 'You',
  publishedYear: 2024,
  available: false
}];

console.log(returnBook(library, title, borrowedBooks))



// Logic for removing a particular book from the array via the index. Don't change anything here. You will learn about this in module 5.
function removeBook(bookArray, bookIndex) {
	bookArray.splice(bookIndex, 1); 
}