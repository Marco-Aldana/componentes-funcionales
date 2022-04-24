//const reducer = (preview, current){}
//const state = {contador:0}
//action = {type: string, payload: any}

import { useReducer, useState } from 'react'

const inicial = { contador: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case 'incrementar':
            return { contador: state.contador + 1 }
        case 'decrementar':
            return { contador: state.contador - 1 }
        case 'set':
            return { contador: action.payload }
        default:
            return state
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, inicial)
    const [valor, setValor] = useState(0)
    return (
        <div>
            Contador: {state.contador}
            <input value={valor} onChange={(e) => setValor(e.target.value)}></input>
            <button onClick={() => dispatch({ type: 'incrementar' })}>Aumentar</button>
            <button onClick={() => dispatch({ type: 'decrementar' })}>Decrementar</button>
            <button onClick={() => dispatch({ type: 'set', payload: valor })}>Set value</button>
        </div>
    )
}

export default App