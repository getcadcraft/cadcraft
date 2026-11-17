---
title: Gira la vista i usa les teves pròpies coordenades (SCP)
summary: Gireu la vista 90° o a qualsevol angle sense moure res del dibuix, i definiu un sistema de coordenades d'usuari (SCP) perquè els punts, l'orto, el seguiment polar, la quadrícula i el text nou segueixin els eixos propis d'un edifici.
keywords: ucs, sistema de coordenades d'usuari, planta, gira la vista, torsió de la vista, ucs z, ucs 3point, ucs objecte, ucs món, scp amb nom, ucsfollow, turnleft, turnright, turnworld, edifici inclinat, quadrícula girada
from: 6f152c65
---

## Què aprendràs

Com mirar un dibuix girat, perquè un edifici dibuixat en angle es llegeixi quadrat a la pantalla, i com escriure punts seguint els seus propis eixos. Res del dibuix es mou mentre ho feu: els objectes conserven les seves coordenades, un gir no és una edició, i el dibuix no es marca com a canviat.

## Gira la vista un quart

1. Feu clic a {{ui:Vista}} › {{ui:Més}} › {{ui:Gira la vista 90° a l'esquerra}} o {{ui:Gira la vista 90° a la dreta}}.

El dibuix gira a la pantalla al voltant del centre de l'àrea de dibuix. Torneu a fer-ho per seguir girant.

2. Feu clic a {{ui:Vista}} › {{ui:Més}} › {{ui:Torna al SCG}} per tornar-lo a posar pla.

Les ordres darrere d'aquests són {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} i {{cmd:TURNWORLD}}. Per donar-ne una tecla, afegiu una línia com `TL=TURNLEFT` als vostres àlies amb {{cmd:ALIASEDIT}}.

## Alinea amb un edifici inclinat

1. Escriviu `UCS` i premeu {{key:Enter}}, després `OB` i {{key:Enter}}.
2. Feu clic a una línia de mur a prop de l'extrem que hauria de ser l'origen.

El SCP comença llavors en aquest extrem, amb el seu eix X al llarg del mur, i la vista gira de manera que el mur queda pla a la pantalla. La icona d'eixos a la cantonada inferior esquerra mostra cap on apunten els eixos del SCP.

3. Dibuixeu com de costum. Amb el SCP definit:
   - `x,y` i `@dx,dy` es mesuren al llarg dels eixos del SCP; `d<a` mesura l'angle des de l'eix X del SCP.
   - {{ui:Orto}}, el seguiment polar i la quadrícula segueixen els eixos del SCP, i també la creu.
   - El text nou i els paràgrafs nous segueixen l'eix X del SCP; l'horitzontal i la vertical de {{cmd:DIMLINEAR}} també el segueixen.
   - Les coordenades de la barra d'estat i les de {{cmd:ID}} són coordenades del SCP.
4. Per escriure un punt del món mentre hi ha un SCP definit, poseu `*` davant: `*0,0` o `@*100,0`.
5. Escriviu `UCS`, {{key:Enter}}, i després {{key:Enter}} de nou per tornar al món.

## Altres maneres de definir un SCP

A la indicació de {{cmd:UCS}}:

| Escriviu | Què fa |
|---|---|
| un punt | Una nova origen; després feu clic a un punt de l'eix X nou, o premeu {{key:Enter}} per mantenir l'angle |
| `Z` | Gira el SCP al voltant de la seva origen per un angle que escriviu (graus, en sentit antihorari) o trieu |
| `3` (3 punts) | Una origen, un punt al llarg de l'eix X positiu, i un punt al costat Y positiu |
| `OB` (Objecte) | A partir d'una línia, arc, cercle, segment de polilínia, text, referència de bloc, punt o línia de construcció |
| `P` (Anterior) | El SCP anterior a aquest (els últims deu es conserven mentre el dibuix és obert) |
| `W` (Món) | Torna al món |
| `NA` (Amb nom) | `S` desa el SCP actual amb un nom, `R` restaura'n un, `D` n'esborra un, `?` els llista |

Cada canvi gira la vista perquè el nou eix X del SCP quedi pla. {{cmd:PLAN}} gira la vista sense canviar el SCP: {{key:Enter}} per al SCP actual, `U` per a un de desat, `W` per al món.

## Bones de saber

- Cada panell d'una pantalla dividida conserva el seu propi gir. El SCP pertany al dibuix.
- Els fulls treballen en coordenades de paper; definiu un SCP a la pestanya {{ui:Model}}, o dins d'una finestra gràfica.
- Les finestres de selecció arrossegades en una vista girada seleccionen el que hi ha dins d'elles a la pantalla.
- Les rutines de LISP reben punts en el SCP des de `getpoint`, poden llegir `UCSORG`, `UCSXDIR`, `UCSYDIR` i `VIEWTWIST`, i `trans` converteix entre el món, el SCP i la pantalla.

:::note
Un fitxer desat conserva el SCP i el gir de la vista en una versió posterior; fins llavors es mantenen mentre el dibuix és obert.
:::
