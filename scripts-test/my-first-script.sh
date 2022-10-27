#!/bin/bash
echo Este es mi primer script

FILE=/Users/fzarate/fredy.sh
 if [ -f "$FILE" ]; then
 echo "$FILE existe"
 else
 echo "$FILE no existe"
 echo Voy a crear el archivo .sh
 fi