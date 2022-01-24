// prop to change title, averge_rating, pages, bookId

import styled from 'styled-components';

const default_data = {
    "bookID": 1,
   "title": "Harry Potter and the Half-Blood Prince (Harry Potter  #6)",
   "authors": "J.K. Rowling/Mary GrandPré",
   "average_rating": "4.57",
   "isbn": "0439785960",
   "isbn13": "9780439785969",
   "language_code": "eng",
   "num_pages": "652",
   "ratings_count": 2095690,
   "text_reviews_count": 27591,
   "publication_date": "9/16/2006",
   "publisher": "Scholastic Inc.",
   "FIELD13": ""
}

const Book = ({
    title=default_data.title,
    avg=default_data.average_rating,
    pages=default_data.pages,
    id=default_data.bookID,
    onBookClick=()=>{},
}) => {
    return (
        <div>
            Book - {id} - {title} - {avg} - {pages}
            <button onClick={onBookClick}>details.....</button>
        </div>
    )    
}
export default Book;