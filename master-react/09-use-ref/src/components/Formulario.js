import React from 'react'

export const Formulario = () => {
  return (
    <div>
        <h1>Formulario</h1>

        <form>
            <input type="text" placeholder='Nombre' />
            <input type="text" placeholder='Apellidos' />
            <input type="email" placeholder='Correo electronico' />

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}
