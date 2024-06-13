import axios from 'axios'

export const getAllNotes = async () => {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
    )
    const { data } = response
    return data
}
