import axios from 'axios'

const getBooks = async () => {
    try {
        const res = await axios.get('wp-json/wp/v2/books')
        return res.data
    } catch (e) {
        throw e
    }
}

export {getBooks}
