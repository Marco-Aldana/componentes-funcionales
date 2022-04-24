//rafce, rafc, rfc o rfce

//funcion pura es una funcion que nunca cambia el valor de retorno, dependiendo solo de los valores de entrada
import React from 'react'



const MyComponent = ({myProp}) => {
  return (
    <div>
      Name:{myProp}
    </div>
  )
}



const App = () => {
  return (
    <MyComponent miProp={'string'}/>
  )
}

export default App

