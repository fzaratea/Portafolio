#!/bin/bash
read -p "Introduce un numero:" NUM
#RESTO=$(($NUM%2))
#if [ $RESTO -eq 0 ]; then
if [ $(($NUM%2)) -eq 0 ]; then
    echo "El numero $NUM es par"
else
    echo "El numero $NUM es impar"
fi 