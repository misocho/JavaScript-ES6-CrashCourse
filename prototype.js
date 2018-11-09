// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

}

//getSummary
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}
//Instantiate an object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book two', 'Jane Doe', '2016');
//getAge
Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`
};

// Revise / Change year
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
};

console.log(book1.getAge());
book1.revise(2016);
console.log(book1)