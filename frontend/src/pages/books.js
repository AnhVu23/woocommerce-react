import React from 'react'
import * as BookServices from '../services/book'

import BookItem from '../components/BookItem'

export default () => {
    const [books, setBooks] = React.useState([])
    const [isLoaded, setIsLoaded] = React.useState(false)

    React.useEffect(() => {
        getAllBooks()
    }, [])

    const getBookAuthor = (id) => {
        return BookServices.getBookAuthor(id)
    }

    const getBookMedia = (id) => {
        return BookServices.getBookMedia(id)
    }

    const getAllBooks = async () => {
        const books = await BookServices.getBooks()
        setBooks(books)
        setIsLoaded(true)
    }
    if (isLoaded)
        return (
            <div>
                {books.map(book => <BookItem key={book.id} book={book} getAuthor={() => getBookAuthor(book.author)} getMedia={() => getBookMedia(book.featured_media)}/>)}
            </div>
        )
    return <h3>Loading</h3>
}
