import React from 'react'

export default ({
                    book,
                    getAuthor,
                    getMedia
                }) => {
    const [imageUrl, setImageUrl] = React.useState(null)
    const [author, setAuthor] = React.useState(null)
    const [isLoaded, setIsLoaded] = React.useState(false)
    React.useEffect(() => {
        getInfo()
    }, [])

    const getInfo = async () => {
        const promises = []
        promises.push(getAuthor())
        if (book.featured_media !== 0) {
            promises.push(getMedia())
        }
        const [author, imageUrl] = await Promise.all(promises)
        setAuthor(author.name)
        if (imageUrl) {
            setImageUrl(imageUrl.source_url)
        }
        setIsLoaded(true)
    }
    if (isLoaded)
        return (
            <div>
                <h2>{book.title.rendered}</h2>
                <div dangerouslySetInnerHTML={{__html: book.excerpt.rendered}}/>
                <h3>Author: {author}</h3>
                {imageUrl ? <img style={{width: '100%'}} src={imageUrl} alt={book.title.rendered}/> : null}
            </div>
        )
    return <h4>Loading</h4>
}
