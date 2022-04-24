//useEffect (function, dependencies)
//Para actualizar siempre no se le pasa ningun arreglo de dependencias
//PAra actualizar una sola vez de le pasa una dependencia vacia []
//para actualizar solo con ciertos valosres se le pasan en el arreglo [value]


import { useState, useEffect } from 'react'

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

const Intervalo = ({count})=>{
    useEffect(()=>{
        const inter=setInterval(()=>console.log(count), 1000)
        return(()=>{
            clearInterval(inter)
        })
    },[count])
    return (
        <p>Intervalo</p>
    )
}

const App = () => {
    const [count, increment, decrement] = useCounter(0)
    useEffect(()=>{
        document.title=count
    },[count])

    return (
        <div>
            Counter: {count}
            <button onClick={increment}>Aumentar</button>
            <button onClick={decrement}>Decrementar</button>
            <Intervalo count={count}/>
        </div>
    )
}

export default App