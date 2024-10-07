const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const price = document.querySelector('#price')
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

btn.addEventListener('click', function (e) {
    e.preventDefault();

    //Basic Validation
    if (title.value == '' && author.value == '' && year.value == '' && price.value == ''){
        alert('Please input your information.');
    }else{
        const newRow = document.createElement('tr');

// Create new title
const newTitle = document.createElement('th');
newTitle.innerHTML = title.value;
newRow.appendChild(newTitle);

// Create new author
const newAuthor = document.createElement('th');
newAuthor.innerHTML = author.value;
newRow.appendChild(newAuthor);

// Create new year
const newYear = document.createElement('th');
newYear.innerHTML = year.value;
newRow.appendChild(newYear);

// Create price
const newPrice = document.createElement('th');
newPrice.innerHTML = price.value;
newRow.appendChild(newPrice);
// Display in UI
bookList.appendChild(newRow);
}
});