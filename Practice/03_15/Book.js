class Book {
    constructor(
        title,
        author,
        publicationDate,
        genre,
        pages,
        binding,
        price,
        currentPage,
        finished
    ) {
        this.title = title;
        this.author = author;
        this.publicationDate = publicationDate;
        this.genre = genre;
        this.pages = pages;
        this.binding = binding;
        this.price = price;
        this.currentPage = currentPage;
        this.finished = finished;
    }
    setCurrentPage(pageNo) {
        this.currentPage = pageNo;
        if (this.currentPage === pages) {
            this.read = true;
        } else {
            this.read = false;
        }
    }
    readBook(readStatus) {
        if (readStatus == true) {
            this.finished = true;
            this.currentPage = this.pages;
        } else {
            this.finished = false;
        }
    }

}

export default Book;