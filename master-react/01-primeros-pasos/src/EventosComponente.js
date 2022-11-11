import React from 'react'

export const EventosComponente = () => {
  return (
    <div>
        <h1>Eventos en React</h1>

        {/*Evento click*/}
        <button onClick={ () =>{
            console.log("Hola, soy un evento click");
        }}>Dame click!</button>
    </div>
  )
}
