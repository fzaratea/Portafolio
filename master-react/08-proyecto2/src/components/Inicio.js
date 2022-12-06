import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='home'>

      <h1>
        Hola, soy Fredy Zárate y soy informatico en Oaxaca, Mexico;
        ofrezco mis servicios de <strong>mantenimiento preventivo y correctivo 
        a equipo de computo, diseño y configuraciones de redes LAN y WiFi,
        sistemas de videovigilancia, etc.</strong>
      </h1>

      <h2>
        Te ayudo con tus proyectos, mejoras y resolucion de problemas en tu red o equipos. <Link to="/contacto">Contactame</Link>
      </h2>

      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web.</p>

        <div className='works'>

        </div>
      </section>
    </div>
  )
}
