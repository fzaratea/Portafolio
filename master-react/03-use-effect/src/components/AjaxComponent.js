import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

const [usuarios, setUsuarios] = useState([]);

//Generico / Basico
const getUsuariosEstaticos = () => {
    setUsuarios([
        {
            "id": 1,
            "email": "fredy@reqres.in",
            "first_name": "Fredy",
            "last_name": "Zarate"
        },
        {
            "id": 2,
            "email": "juan@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 3,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
    ]);
}

const getUsuariosAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=1")
    .then(respuesta => respuesta.json())
    .then(
        resultado_final => {
            setUsuarios(resultado_final.data);
        },
        error => {
            console.log(error);
        }
    )
}
useEffect(() => {
    // getUsuariosEstaticos();
    getUsuariosAjaxPms();
}, []);

  return (
    <div>
        <h2>Listado de usuarios via Ajax</h2>
        <ol className='usuarios'>
            {
                usuarios.map(usuario => {
                    return <li key={usuario.id}>{usuario.first_name} {usuario.last_name}</li>
                })
            }
        </ol>
    </div>
  )
}
