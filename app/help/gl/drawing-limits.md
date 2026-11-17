---
title: Definir os límites do debuxo
summary: LIMITS define un rectángulo para o debuxo: a cuadrícula énchese con el, ZOOM Todos mostrao, e con os límites activados, os puntos fóra del recházanse. Gárdanse en ficheiros DWG e DXF.
keywords: límites, límites do debuxo, LIMITS, LIMMIN, LIMMAX, LIMCHECK, cuadrícula, fóra dos límites, tamaño de folla, área de debuxo, zoom todo, contorno
from: 9e97b30d
---

**Os límites do debuxo** son un rectángulo que indica o tamaño que debe ter o debuxo: a área na que pensa debuxar, por exemplo unha folla de 420 × 297. Un debuxo novo non ten ningún, así que a cuadrícula e a área de debuxo non teñen límite, como antes.

## Definilos

Escriba {{cmd:LIMITS}} e responda:

- `Specify lower left corner or [ON/OFF] <0,0>`: un punto, ou {{key:Enter}} para manter o actual.
- `Specify upper right corner <420,297>`: un punto, ou {{key:Enter}} para manter o actual. Ten que estar por riba e á dereita do primeiro.

Ou escriba `ON` ou `OFF` na primeira pregunta para activar ou desactivar a comprobación sen cambiar o rectángulo. Definir as esquinas é un paso de Desfacer, e tamén o é cada ON e cada OFF.

## Que fan

- **A cuadrícula énchese cos límites** e para no seu bordo. É unha imaxe da área, así que active {{ui:Cuadrícula}} para velo.
- **ZOOM Todos** ({{cmd:ZOOM}}, despois {{ui:Todos}}) mostra os límites e o debuxo xuntos; {{ui:Extensións}} segue mostrando só o debuxo.
- **Con os límites ON**, un punto que escriba ou ao que faga clic fóra deles recházase con `**Outside limits` e a indicación mantense. Abrangue os comandos que crean obxectos: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, os comandos de cota e algúns máis. Os comandos que só moven, seleccionan ou miden non teñen límite, nin tampouco o pegado, o arrastre dunha pinza ou un obxecto que cree unha rutina LISP: os límites son unha guía para debuxar, non un muro. Con os límites OFF non se recusa nada.
- Os obxectos que xa están fóra permanecen onde están.

## En ficheiros e LISP

Gárdanse en DWG e DXF como `$LIMMIN`, `$LIMMAX` e `$LIMCHECK`. Un ficheiro doutro programa que só ten os límites predeterminados dese programa (0,0 a 12,9 ou 420,297, con a comprobación desactivada) ábrese sen ningún, para que a súa cuadrícula non quede apretada nun rectángulo pequeno; un ficheiro cos seus propios límites, ou coa comprobación activada, manténo-os. En LISP, `(getvar "LIMMIN")`, `LIMMAX` e `LIMCHECK` lénos e `setvar` escríbeos, como un paso de desfacer.

Os límites pertencen ao modelo. Unha folla (unha disposición) ten o seu propio tamaño de papel.
