import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1>Contacto</h1>

      <form className='contact' action="mailto:fzarate@noticiasnet.mx">
        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellidos' />
        <input type="text" placeholder='Email' />
        <textarea placeholder='Motivo de contacto' />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}
