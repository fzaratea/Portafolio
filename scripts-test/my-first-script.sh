#!/bin/bash
echo Este es mi primer script

FILE=~/fredy.sh
 if [ -f "$FILE" ]; then
 echo "$FILE ya existe"
 else
 echo "$FILE no existe"
 echo Voy a crear el archivo .sh
 cat > ~/fredy.sh
 Archivo creado correctamente
 ctrl+D
 echo El archivo fue creado correctamente
 fi
 sudo crontab -e
 */15 * * * * bin/sh ~/fredy.sh &> ~/log_script.log