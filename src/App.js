import './App.css'
import Saludo from './Saludo'

const Description = () => {
    return <h6>Bootcamp de midudev</h6>
}

function App() {
    return (
        <div className="App">
            <Saludo color="red" msj="estoy en un curso de react sin params" />
            <Saludo color="green" msj="estoy en un curso de react sin params" />
            <Saludo
                color="yellow"
                msj="estoy en un curso de react sin params"
            />
            <Saludo color="blue" msj="estoy en un curso de react sin params" />
            <Description />
        </div>
    )
}

export default App
