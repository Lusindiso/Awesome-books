import { bookList } from './selectors.js';

const isStorageAvailable = (type) => {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
      // 1) everything except Firefox
      // 2) Firefox
      // test name field too, because code might not be present
      // 3) everything except Firefox
      // 4) Firefox
      // 5) acknowledge QuotaExceededError only if there's something already stored
      e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0);
  }
}

let books = [];

export default class Bookshelf {
  constructor(books) {
    this.books = books;
  }

  addBook(title, author) {
    const book = {
      id: Math.floor(Math.random() * 1000000),
      title: title.value,
      author: author.value,
    };

    this.books.push(book);

    if (isStorageAvailable('localStorage')) {
      localStorage.setItem('bookList', JSON.stringify(this.books));
    }
  }

  remove(id) {
    this.books = this.books.filter((book) => book.id !== parseInt(id, 10));
    localStorage.setItem('bookList', JSON.stringify(this.books));
    this.updateBookList();
  }

  updateBookList() {
    bookList.innerHTML = '';

    this.books.forEach((el) => {
      bookList.innerHTML += `<div>
      <p>"<span class="title">${el.title}</span>" by <span class="author">${el.author}</span></p>
      <button id="${el.id}" class="remove">Remove</button>
      </div>`;
    });
  }
}

if (isStorageAvailable('localStorage')) {
  const data = JSON.parse(localStorage.getItem('bookList'));
  // and if it's not empty, update it
  if (data) {
    books = JSON.parse(localStorage.getItem('bookList'));
  }
}

export const newbook = new Bookshelf(books);