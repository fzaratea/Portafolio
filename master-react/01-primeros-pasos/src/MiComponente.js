//Importar modulos de react / dependencias
import React from "react";

// Funcion del componente
const MiComponente = () => {

    let usuario = {
        nombre: "Fredy",
        apellidos: "Zárate",
        correo: "fzarate@noticiasnet.mx"
    };

    return (
        <div className="mi-componente">
            
            <h2>Componente creado</h2>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>Nombre: <strong>{usuario.nombre}</strong></li>
                <li>Apellidos: <strong>{usuario.apellidos}</strong></li>
                <li>Correo-e: <strong>{usuario.correo}</strong></li>
            </ul>
            <p>Este es mi primer componente</p>
            <ul>
                <li>
                    React
                </li>
                <li>
                    Angular
                </li>
                <li>
                    Vue
                </li>
            </ul>
        </div>
    );
};
// Export
export default MiComponente;