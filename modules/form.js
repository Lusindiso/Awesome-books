import { title, author, form } from './selectors.js';
import { newbook } from './bookShelf.js';

const handleSubmit = () => {
  // On submit
  form.onsubmit = () => {
    // Add the book
    newbook.addBook(title, author);
    // Update the html
    newbook.updateBookList();
    // Reset form
    form.reset();
  };

  newbook.updateBookList();
};

export default handleSubmit;