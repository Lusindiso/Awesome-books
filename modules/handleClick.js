import {
  allBooks, addBook, contact, navList, navAdd, navContact, bookList,
} from './selectors.js';
import { newbook } from './bookShelf.js';

const handleClick = () => {
  navList.onclick = () => {
    navList.style.color = 'darkblue';
    navAdd.style.removeProperty('color');
    navContact.style.removeProperty('color');
    allBooks.classList.remove('hide');
    addBook.classList.add('hide');
    contact.classList.add('hide');
  };

  navAdd.onclick = () => {
    navAdd.style.color = 'darkblue';
    navList.style.removeProperty('color');
    navContact.style.removeProperty('color');
    addBook.classList.remove('hide');
    allBooks.classList.add('hide');
    contact.classList.add('hide');
  };

  navContact.onclick = () => {
    navContact.style.color = 'darkblue';
    navList.style.removeProperty('color');
    navAdd.style.removeProperty('color');
    contact.classList.remove('hide');
    addBook.classList.add('hide');
    allBooks.classList.add('hide');
  };

  bookList.onclick = (e) => {
    if (e.target.className === 'remove') {
      newbook.remove(e.target.id);
    }
  };
};

export default handleClick;