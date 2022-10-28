#!/bin/bash
echo Este es mi primer script

FILE=~/fredy.sh
 if [ -f "$FILE" ]; then
 echo "$FILE ya existe"
 #cat >> ~/fredy.sh
 #actuaizacion de archivo
 else
 echo "$FILE no existe"
 echo Voy a crear el archivo .sh
 #cat > ~/fredy.sh
 #Archivo creado correctamente
 #ctrl+d
 echo "El archivo fue creado correctamente" >> ~/fredy.sh
 fi
 sudo crontab -e
 */1 * * * * bin/sh ~/fredy.sh &> ~/log_script.log