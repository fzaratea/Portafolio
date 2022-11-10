#!/bin/bash
#
# Programa para decir la calificiacion en funcion de un numero

read -p "Introduzca la calificacion numerica" nota

if [ $nota -ge 9 ]; then
    echo "Calificacion excelente"
elif [ $nota -ge 7 ]; then
    echo "Aprobado con buena calificacion"
elif [ $nota -ge 6 ]; then
    echo "Aprobado, pero debes esforzarte mas"
else
    echo "Has reprobado"
fi