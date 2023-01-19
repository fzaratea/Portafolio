import React, { useEffect, useState } from 'react'

export const Empleados = () => {
    const [empleados,setEmpleados] = useState();

    useEffect(() => {
        conseguirEmpleados();
    }, []);

    const conseguirEmpleados = async() => {
        const url = "https://reqres.in/api/users?page=1";
        const peticion = await fetch(url);
        const {data: empleados} = await peticion.json();

        setEmpleados(empleados);

    }

    

  return (
    <div>
        <ul className="empleados">
            {empleados.map(empleado => {
                return <li key={empleado.id}>{empleado.first_name + " " + empleado.last_name}</li>
            })}
            
        </ul>
    </div>
  );
}
