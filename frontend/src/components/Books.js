import React from 'react'
import * as BookServices from '../services/book'

export default () => {
    const [books, setBooks] = React.useState([])
    const [isLoaded, setIsLoaded] = React.useState(false)

    React.useEffect(() => {
        getAllBooks()
    }, [])

    const getAllBooks = async () => {
        const books = await BookServices.getBooks()
        setBooks(books)
        setIsLoaded(true)
    }
    console.log(books)
    if (isLoaded)
        return (
            <div>
                {books.map(book => (
                    <h4>{book.title.rendered}</h4>
                ))}
            </div>
        )
    return <h3>Loading</h3>
}
