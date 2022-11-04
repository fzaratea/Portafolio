#!/bin/bash
echo Este es mi primer script

FILE=~/fredy.sh
 if [ -f "$FILE" ]; then
    echo "$FILE ya existe"
    cat << EOF >> ~/fredy.sh
        actuaizacion de archivo
        echo "Se agrega texto al archivo ya existente" >> ~/fredy.sh
EOF
    echo Se agrego texto al archivo existente
 else
    echo "$FILE no existe"
    echo Voy a crear el archivo .sh
    cat << EOF > ~/fredy.sh
        #!/bin/bash

        printf "Hola\n"
        printf "Mundo!\n"
EOF
    echo Se creo correctamente el archivo
 fi
 