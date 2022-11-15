import React from 'react'

export const EventosComponente = () => {
  const hasdadoclick = (e) => {
    alert("Has dado click al boton !!");
  }

  function hasdadodobleclick(e){
    alert("Has dado doble click al boton !!");
  }

  return (
    <div>
        <h1>Eventos en React</h1>

        <p>
          {/*Evento click*/}
          <button onClick={ hasdadoclick }>Dame click!</button>
        </p>
        
        <p>
          {/*Evento doble click*/}
          <button onDoubleClick={ hasdadodobleclick }>Dame doble click!</button>
        </p>
    </div>
  )
}
