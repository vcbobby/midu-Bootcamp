import { useState } from 'react'
import './App.css'
import Note from './Note'

function App(props) {
    const [notes, setNotes] = useState(props.notes)
    const [titleValue, setTitleValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')

    const handleTitle = (event) => {
        const titulo = event.target.value
        setTitleValue(titulo)
    }
    const handleDescription = (event) => {
        setDescriptionValue(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newId = notes.length + 1
        const newNote = {
            userId: 1,
            id: newId,
            title: titleValue,
            body: descriptionValue,
        }
        setNotes([...notes, newNote])
        setTitleValue('') // Restablece el valor del título
        setDescriptionValue('') // Restablece el valor de la descripción
    }
    return (
        <main className="App">
            <h1>Notes</h1>
            {notes.length === 0 ? (
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

export default App
