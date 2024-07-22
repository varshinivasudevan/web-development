// script.js
document.getElementById('addBookButton').addEventListener('click', addBook);

function addBook() {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;

    if (title && author) {
        const bookList = document.getElementById('bookList');
        const li = document.createElement('li');
        li.innerHTML = `${title} by ${author} <button class="borrow">Borrow</button>`;
        bookList.appendChild(li);

        document.getElementById('bookTitle').value = '';
        document.getElementById('bookAuthor').value = '';
    }
}

document.getElementById('bookList').addEventListener('click', function(e) {
    if (e.target.classList.contains('borrow')) {
        borrowBook(e.target.parentElement);
    }
});

document.getElementById('borrowedBooksSection').addEventListener('click', function(e) {
    if (e.target.classList.contains('return')) {
        returnBook(e.target.parentElement);
    }
});

function borrowBook(bookItem) {
    const borrowedList = document.getElementById('borrowedList');
    bookItem.querySelector('.borrow').classList.replace('borrow', 'return');
    bookItem.querySelector('.return').textContent = 'Return';
    borrowedList.appendChild(bookItem);
}

function returnBook(bookItem) {
    const bookList = document.getElementById('bookList');
    bookItem.querySelector('.return').classList.replace('return', 'borrow');
    bookItem.querySelector('.borrow').textContent = 'Borrow';
    bookList.appendChild(bookItem);
}
