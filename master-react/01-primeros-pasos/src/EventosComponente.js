import React from 'react'

export const EventosComponente = () => {
  const hasdadoclick = (e) => {
    alert("Has dado click al boton !!");
  }

  function hasdadodobleclick(e){
    alert("Has dado doble click al boton !!");
  }

  const hasentrado = (e, accion) => {
    alert(`Has ${accion} la caja con el mouse!!`);
  }

  const estasdentro = e => {
    console.log("Estas dentro del input, ingresa tu nombre!!");
  }

  const estasfuera = e => {
    console.log("Estas fuera del input, Hasta la proxima!!");
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

        <div id="caja"
          onMouseEnter={ e => hasentrado(e, "entrado a") }
          onMouseLeave={ e => hasentrado(e, "salido de") }
        >
            {/*Evento onMouseEnter onMouseLeave*/}
            Pasa por encima !!
        </div>

            {/*Evento focus y blur */}
        <p>
            <input type="text" 
                    onFocus={ estasdentro } 
                    onBlur={ estasfuera }
                    placeholder="Introduce tu nombre..."/>
        </p>
    </div>
  )
}
