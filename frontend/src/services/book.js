import axios from 'axios'

const getBooks = async () => {
    try {
        const res = await axios.get('wp-json/wp/v2/books')
        return res.data
    } catch (e) {
        throw e
    }
}

const getBookAuthor = async (id) => {
    try {
        const res = await axios.get(`wp-json/wp/v2/users/${id}`)
        return res.data
    } catch (e) {
        throw e
    }
}

const getBookMedia = async (id) => {
    try {
        const res = await axios.get(`wp-json/wp/v2/media/${id}`)
        return res.data
    } catch (e) {
        throw e
    }
}
export {getBooks, getBookAuthor, getBookMedia}
