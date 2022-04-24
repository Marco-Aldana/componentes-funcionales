//se usa para manipular y ver propiedades de elementos
//solo se necesita pasar al elemento una propirdad llamada ref=
//y en ella enviar el useRef inicializado anteriormente


import { useRef } from 'react'

const App = () => {
    const ref = useRef()
    const inputRef = useRef()

    const click = () => {

        console.log(ref.current)
        console.log(ref.current.__proto__)
        console.log(ref.current.clientHeight)
        ref.current.innerHTML = 'nuevo string'//no se debe hacer
    }
    const focus=()=>{
        inputRef.current.focus()
    }

    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={focus}>
                Focus
            </button>
            <button onClick={click} ref={ref}>
                TEXT
            </button>
        </div>
    )
}

export default App