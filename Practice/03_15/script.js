/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());


// David Bruce 02/03/2021 - Created empty array for books. Created books from the Book class
let myBooks = [];

const octoberBook = new Book(
  "Cat's Cradle",
  "Kurt Vonnegut, Jr.",
  "May 1999",
  "Fiction",
  304,
  "Paperback",
  "9.22",
  274,
  false
);

myBooks.push(octoberBook);

const novemberBook = new Book(
  "Breakfast of Champions",
  "Kurt Vonnegut, Jr.",
  "May 1999",
  "Fiction",
  303,
  "Paperback",
  "12.99",
  293,
  false
);

myBooks.push(novemberBook);

const decemberBook = new Book(
  "Galopagos",
  "Kurt Vonnegut, Jr.",
  "January 1999",
  "Fiction",
  336,
  "Hardcover",
  "14.06",
  336,
  false
);


myBooks.push(decemberBook);

const januaryBook = new Book(
  "Palm Sunday",
  "Kurt Vonnegut, Jr.",
  "May 1999",
  "Nonfiction",
  320,
  "Paperback",
  "12.99",
  293,
  false
);

myBooks.push(januaryBook);

const februaryBook = new Book(
  "Wampeters, Foma, and Granfalloons",
  "Kurt Vonnegut, Jr.",
  "May 1974",
  "Nonfiction",
  285,
  "Paperback",
  "18.00",
  42,
  false
);

myBooks.push(februaryBook);

// David Bruce 02/03/2021 - Loop thru books, if current page === total pages, use readBook method to set finished to true.

myBooks.forEach((book, i) => {

  console.log("Book: " + i + ":" + book.title)
  console.log("Read?: " + book.finished)
  console.log("Current Page:" + book.currentPage + " of pages: " + book.pages)
  if (book.currentPage === book.pages) { book.readBook(true) };
  console.log("Read?: " + book.finished)
});


