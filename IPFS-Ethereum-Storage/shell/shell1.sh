#!/bin/sh
mkdir /home/ydd/Documents/test
cd /home/ydd/Documents/test
mkdir shell1
cd shell1
for((i=0;i<10;i++));do
 touch test_$i.txt
done
