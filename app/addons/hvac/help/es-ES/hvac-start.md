---
title: Climatización: primeros pasos
summary: Qué hace el complemento de climatización en CadCraft, cómo activarlo y cómo se guarda la red de conductos en un archivo DWG o DXF corriente.
keywords: climatización, complemento, conductos, conducto, mecánica, chapa, caudal, cfm, pérdida de carga constante, tabla
from: a9ad5492
---

## Qué es

La climatización es un complemento de CadCraft que viene incluido y es gratuito. Dibuja conductos: usted hace clic en el eje de un tramo de conducto, y el complemento dibuja los dos lados del conducto con sus codos, transiciones y accesorios de derivación, lo dimensiona a partir del caudal, lo construye como un sólido en la pestaña {{ui:3D}} y lo incluye en una tabla de conductos con el área de su chapa.

Está desactivado hasta que lo active: {{ui:Ajustes}} › {{ui:General}} › {{ui:Complementos}} › {{ui:Climatización}}. Sus herramientas están en la sección {{ui:Climatización}} del panel derecho, como comandos (más abajo), y, si lo pide en {{ui:Ajustes}} › {{ui:CadCraft}} › {{ui:Climatización}}, como un grupo al final de la barra de herramientas.

Los tamaños siguen las unidades del dibujo: un dibujo en pulgadas o pies obtiene tamaños en pulgadas, caudal en cfm y pérdida unitaria en pulgadas de columna de agua por 100 pies; cualquier otro dibujo obtiene milímetros, litros por segundo y pascales por metro.

## Su primer tramo de conducto

1. Escriba {{cmd:DUCT}}. Escriba {{ui:Z}} y un tamaño, por ejemplo `24x12` (ancho × alto), o {{ui:A}} y el caudal, y el complemento elige el tamaño.
2. Haga clic en los puntos del tramo. Cada esquina recibe un codo por sí misma. Pulse Intro para terminar.
3. Para derivar, empiece el tramo siguiente dentro del primero: el punto se mueve sobre su eje y la derivación recibe allí una te o una toma.
4. Escriba {{cmd:DUCTSCHED}} y haga clic donde va la tabla.

Véase [Dibujar tramos de conducto](topic:hvac-ducts) para todo lo que puede hacer un tramo.

## Archivos que se abren en cualquier parte

Un tramo de conducto se guarda como una referencia de bloque con su dibujo dentro, y sus datos se conservan con él bajo el nombre de aplicación `CC_HVAC`. Así, una red de conductos guardada como DWG o DXF se abre en cualquier programa CAD como el conducto dibujado, y se abre en CadCraft sin el complemento sin perder nada. Sus sólidos son grupos 3D corrientes en la pestaña {{ui:3D}}. Con la climatización activada, los tramos vuelven a ser tramos de conducto.
