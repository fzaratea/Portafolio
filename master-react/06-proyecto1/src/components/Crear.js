import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

    const tituloComponente = "Agregar pelicula";

    const [ peliState, setPeliState ] = useState({
        titulo: '',
        descripcion: ''
    });

    const { titulo, descripcion } = peliState;
    
    const conseguirDatosForm = e => {
        //para prevenir el refresco de pantalla y que se corte nuestro evento rectivo
        e.preventDefault();

        //Conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //alert("Pelicula agregada");

        //Crear objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        // Guardar datos/estado
    
        setPeliState(peli);

         // console.log(peliState);

        // Actualizar el estado del listado principal
        setListadoState(elementos => {
            return [...elementos, peli];
        });

        // Guardar en el almacenamiento local
       GuardarEnStorage("pelis", peli);
       //guardarEnStorage("pelis", peli);


    }

    

  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>

        {(titulo && descripcion) && "Has creado la pelicula: "+titulo}

        <form onSubmit={conseguirDatosForm}>
            <input type="text" 
                    id="titulo"
                    name="titulo" 
                    placeholder="Titulo" />

            <textarea 
                    id="descripcion" 
                    name="descripcion"
                    placeholder="Descripción"></textarea>

            <input type="submit" 
                    id="save" 
                    value="Guardar" />
        </form>
    </div>
  )
}
