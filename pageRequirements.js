// 3 . page requirements for books / paperRequirements ||
//  book1 has 100 pages
//  book2 has 200 pages
// book3 has 300 pages

function paperRequirements(book1, book2, book3) {
    // book pages require
    const pagesNeedForBook1 = 100;
    const pagesNeedForBook2 = 200;
    const pagesNeedForBook3 = 300;

    // total pages require each book
    const firstBookPages = book1 * pagesNeedForBook1;
    const secondBookPages = book2 * pagesNeedForBook2;
    const thirdBookPages = book3 * pagesNeedForBook3;

    // total pages required
    const totalPages = firstBookPages + secondBookPages + thirdBookPages;
    return totalPages;
};
const book1 = 5;
const book2 = 4;
const book3 = 3;
const totalPagesNeed = paperRequirements(book1, book2, book3);
console.log("Total Pages Needed", totalPagesNeed);