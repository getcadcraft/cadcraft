---
title: O punteiro salta ou vai con atraso sobre o debuxo
summary: Que facer cando a cruz non segue o rato con suavidade, nun ordenador antigo ou lento.
keywords: cursor salta, atraso do punteiro, cruz lenta, cursor a saltos, ordenador antigo, tarxeta gráfica antiga, gráficos integrados, aceleración por hardware, punteiro máis suave, portátil lento
from: 39dc9057
---

CadCraft funciona no navegador (CadCraft Studio tamén é unha vista do navegador), así que nada nel está feito para unha tarxeta gráfica ou outra. A cruz é debuxada pola aplicación, o que significa que só pode moverse tan rápido como a aplicación pode debuxar un fotograma.

## Deixar que CadCraft reduza os extras

1. Abra {{ui:Configuración}} (a engrenaxe arriba á dereita) e manteña a pestana {{ui:CadCraft}}.
2. Escolla {{ui:Punteiro máis suave en ordenadores lentos}}.
3. Escolla {{ui:Activada}}.

Con esta opción activada, úsase o punteiro de cruz do propio ordenador no lugar da cruz debuxada e da caixa de selección (tamén a cruz de pantalla completa), e o obxecto baixo o punteiro ilumínase cando o punteiro se detén, en vez de mentres se move. Os enganches a obxectos, o rastrexo e a goma elástica funcionan como antes.

A opción {{ui:Automática}} é a que usa CadCraft ao iniciarse: observa canto tardan os fotogramas mentres move o punteiro, e actívase por si mesma cando se mantén lenta durante uns segundos. Avísao unha vez cando o fai. {{ui:Desactivado}} mantén a cruz debuxada sexa cal sexa a velocidade.

## Se segue lento

- Comprobe que a aceleración por hardware está activada no seu navegador: abra `chrome://gpu` (ou `edge://gpu`) nunha nova pestana. Se as primeiras liñas din "Software only" ou "Disabled", o navegador debuxa sen a tarxeta gráfica. Actualizar o controlador da tarxeta gráfica adoita solucionalo.
- Peche outras pestanas e programas pesados e probe cunha xanela do navegador máis pequena.
- Infórmenos a través de {{ui:Axuda}}, {{ui:Informar dun problema}}: diga se usa o navegador ou CadCraft Studio, a súa versión e o que indica a páxina gpu.
