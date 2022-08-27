#!/usr/bin/env bash

cd gui || exit
ng build --configuration production --base-href=''
cd ..
