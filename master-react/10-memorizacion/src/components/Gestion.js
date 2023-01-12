import React, { useState } from 'react'

export const Gestion = () => {

    const [ nombre, setNombre ] = useState
  return (
    <div>
        <h1>Nombre del gestor: Fredy</h1>

        <h2>Listado de empleados:</h2>
        <p>Los usuarios vienen de jsonplaceholder...</p>
        <Empleados/>
    </div>
  )
}
