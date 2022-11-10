#!/bin/bash
read -p "Ingrese el priemr numero:" n1
read -p "Ingrese el segundo numero:" n2
echo "La suma es $(($n1+$n2))"
echo "La resta es $(($n1-$n2))"
echo "La multiplicaion es $(($n1*$n2))"
echo "La division es $(($n1/$n2))"
echo "El resto de la division es $(($n1%$n2))"