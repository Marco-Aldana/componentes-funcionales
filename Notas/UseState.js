//reglas de hooks
//no se deben llamar en loops, siempre en el nivel mas alto del componente
//Solo se deben llamar en 2 partes, componente de react y cuatom hooks

//UseEffect se usa cuando queremos hacer un cambio
//y queremos que se vea reflejado en nuestra interface
//se usa por lo regular en llamados a APIs


//cuando se crea un custom Hook se debe comenzar con el prefijo 'use'
import { useState } from 'react'

const useCounter = (init) => {
    const [count, setCount] = useState(init)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return [count, increment, decrement]
}

const App = () => {
    const [count, increment, decrement] = useCounter(0)

    return (
        <div>
            Counter: {count}
            <button onClick={increment}>Aumentar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>
    )
}

export default App