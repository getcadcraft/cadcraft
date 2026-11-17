---
title: Defineix els límits del dibuix
summary: LIMITS defineix un rectangle per al dibuix: la quadrícula l'omple, ZOOM Tot el mostra, i amb els límits activats, els punts fora es rebutgen. Es desen en fitxers DWG i DXF.
keywords: límits, límits del dibuix, LIMITS, LIMMIN, LIMMAX, LIMCHECK, quadrícula, fora dels límits, mida del full, àrea de dibuix, zoom tot, contorn
from: 9e97b30d
---

Els **límits del dibuix** són un rectangle que indica com de gran es pretén que sigui el dibuix: l'àrea on teniu previst dibuixar, com un full de 420 × 297. Un dibuix nou no en té, de manera que la quadrícula i l'àrea de dibuix són il·limitades, com abans.

## Establiu-los

Escriviu {{cmd:LIMITS}} i responeu:

- `Especifiqueu el cantó inferior esquerre o [Activa (ON)/Desactiva (OFF)] <0,0>`: un punt, o {{key:Enter}} per mantenir l'actual.
- `Especifiqueu el cantó superior dret <420,297>`: un punt, o {{key:Enter}} per mantenir l'actual. Ha d'estar per sobre i a la dreta del primer.

O escriviu `ON` o `OFF` a la primera pregunta per canviar la comprovació sense modificar el rectangle. Establir els cantons és un sol pas de desfer, i també ho és cada ON i cada OFF.

## Què fan

- **La quadrícula omple els límits** i s'atura a la seva vora. És una imatge de l'àrea, de manera que activeu {{ui:Quadrícula}} per veure-la.
- **ZOOM Tot** ({{cmd:ZOOM}}, després {{ui:Tot}}) mostra els límits i el dibuix junts; {{ui:Extensió}} encara mostra només el dibuix.
- **Amb els límits activats (ON)**, un punt que escriviu o feu clic fora d'ells es rebutja amb `**Fora dels límits` i la indicació es manté. Afecta les ordres que creen objectes: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, les ordres de cota i unes quantes més. Les ordres que només mouen, seleccionen o mesuren no estan limitades, ni tampoc enganxar, l'arrossegament d'una nansa, ni un objecte que crea una rutina LISP: els límits són una guia per dibuixar, no una paret. Amb els límits desactivats (OFF) no es rebutja res.
- Els objectes que ja són fora es queden on són.

## En fitxers i LISP

Es desen en DWG i DXF com `$LIMMIN`, `$LIMMAX` i `$LIMCHECK`. Un fitxer d'un altre programa que només té els límits per defecte d'aquell programa (0,0 a 12,9 o 420,297, comprovació desactivada) s'obre sense cap límit, perquè la seva quadrícula no quedi comprimida en un rectangle petit; un fitxer amb límits propis, o amb la comprovació activada, els conserva. En LISP, `(getvar "LIMMIN")`, `LIMMAX` i `LIMCHECK` els llegeixen i `setvar` els escriu, com a un sol pas de desfer.

Els límits pertanyen al model. Un full (una presentació) té la seva pròpia mida de paper.
