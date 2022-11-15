import React, {useState} from 'react'

export const MiPrimerEstado = () => {

    /*
    // Problematica

    let nombre = "Fredy Zárate";

    const cambiarNombre = e => {
        nombre = "Paquito Fernandez";
    };
    */

    const [ nombre, setNombre ] = useState("Fredy Zárate");

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
    }

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong className='label'>
            {nombre}
        </strong>

        &nbsp;
        <button onClick={ e => cambiarNombre(e, "Francisco") }>Cambiar Nombre</button>

        &nbsp;
        <input type="text" onChange={ e => cambiarNombre(e, e.target.value) } placeholder='Cambia el nombre' />

    </div>
  )
}
