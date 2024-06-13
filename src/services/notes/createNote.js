import axios from 'axios'

export const createNote = async ({ title, body, userId }) => {
    const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            title,
            body,
            userId,
        }
    )
    const { data } = response
    return data
}
