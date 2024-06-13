import { useState, useEffect } from 'react'
import Note from './Note'
import { getAllNotes } from './services/notes/getAllNotes'
import { createNote } from './services/notes/createNote'

export function App() {
    const [notes, setNotes] = useState([])
    const [titleValue, setTitleValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        setTimeout(() => {
            getAllNotes().then((notes) => {
                setNotes(notes)
                setLoading(false)
            })
        }, 500)
    }, [])

    const handleTitle = (event) => {
        const titulo = event.target.value
        setTitleValue(titulo)
    }
    const handleDescription = (event) => {
        setDescriptionValue(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newNote = {
            title: titleValue,
            body: descriptionValue,
            userId: 1,
        }

        createNote(newNote).then((note) => {
            // setNotes((prevNotes) => prevNotes.concat(newNote))
            setNotes((prevNotes) => [...prevNotes, note])
        })

        setTitleValue('') // Restablece el valor del título
        setDescriptionValue('') // Restablece el valor de la descripción
    }
    return (
        <main className="App">
            <h1>Notes</h1>
            {loading ? <p>Cargando...</p> : ''}
            {notes.length === 0 && loading === false ? (
                'No hay notas que mostrar'
            ) : (
                <ul>
                    {notes.map((note) => {
                        return (
                            <li key={note.id}>
                                <Note note={note} />
                            </li>
                        )
                    })}
                </ul>
            )}

            <form style={{ paddingBottom: '50px' }} onSubmit={handleSubmit}>
                <input
                    onChange={handleTitle}
                    type="text"
                    placeholder="Escribe el titulo de tu nota"
                    value={titleValue}
                />
                <input
                    onChange={handleDescription}
                    type="text"
                    placeholder="Escribe la descripcion de tu nota"
                    value={descriptionValue}
                />
                <button>Crear nota</button>
            </form>
        </main>
    )
}
