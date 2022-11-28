import React, { useEffect } from 'react'

export const AvisoComponent = () => {

  useEffect(() => {
    //Cuando el componente se monta
    alert("El componente AvisoComponent esta montado!!");

    //Cuando el componente se desmonta
    return () => {
      alert("Componente desmontado!!!");
    };
  }, []); // Se ejecuta una vez porque le paso el array vacio
  return (
    <div>
      <hr />
        <h3>Saludos Fredy ¿Como te va?</h3>
        <button onClick={e => {
          alert("Bienvenido!! ")
        }}>Mostrar alerta</button>
    </div>
  )
}
