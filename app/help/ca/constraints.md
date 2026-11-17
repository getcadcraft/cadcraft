---
title: Restringeix un dibuix
summary: Mantén les línies horitzontals, els extrems junts i les mides fixes amb restriccions geomètriques i dimensionals, i deixa que el dibuix segueixi quan canvieu una mida.
keywords: restricció, restriccions, paramètric, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, graus de llibertat, totalment restringit
from: f8f21fa4
---

## Què crearàs

Una placa l'amplada de la qual canvieu en un sol lloc: els costats es mantenen quadrats, una cantonada es queda al seu lloc, i l'alçada és sempre la meitat de l'amplada.

Les restriccions funcionen amb línies, polilínies, cercles, arcs i punts a la pestanya {{ui:Model}}. Cada una que afegiu és un pas de desfer.

## Dibuixa i restringeix el contorn

1. Escriviu `REC` i premeu {{key:Enter}}. Escriviu `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Escriviu `AUTOCONSTRAIN` i premeu {{key:Enter}}. Escriviu `ALL`, {{key:Enter}}, i després {{key:Enter}} una altra vegada.

   L'historial diu "4 restriccions aplicades". Apareixen petites caixes amb **H** i **V** al costat dels costats: són les barres de restricció.
3. Escriviu `GCFIX` i premeu {{key:Enter}}. Feu clic a prop de la cantonada inferior esquerra. Apareix una caixa amb ⊕: aquesta cantonada es queda on és.

`AUTOCONSTRAIN` afegeix restriccions de coincidència on els extrems gairebé es toquen, i restriccions horitzontals o verticals on les línies són gairebé planes o a plom. Escriviu `S` a la seva indicació per canviar com de a prop ha de ser (0.05 unitats de dibuix i 1° com a punt de partida).

## Afegeix les mides

1. Escriviu `DCHORIZONTAL` i premeu {{key:Enter}}.
2. Feu clic a prop de la cantonada inferior esquerra, i després a prop de la cantonada inferior dreta.
3. Feu clic sota el rectangle per a la línia de cota.
4. La indicació mostra `Text de la cota <d1=100>`. Escriviu `width=120` i premeu {{key:Enter}}.

   El rectangle ara fa 120 d'amplada, i l'etiqueta diu `width=120`.
5. Escriviu `DCVERTICAL` i premeu {{key:Enter}}, escriviu `O` i premeu {{key:Enter}}, i després feu clic al costat dret.
6. Feu clic a la dreta, escriviu `width/2` i premeu {{key:Enter}}.

   Fa 60 d'alçada. L'etiqueta diu `fx: d1=width/2`: una expressió el controla.

L'historial ara diu que el contorn està totalment restringit. Per canviar-ne la mida, canvieu `width` (vegeu [Utilitza paràmetres i equacions](topic:parameters)), o feu doble clic a l'etiqueta `width=120`, escriviu un valor nou i trieu {{ui:Aplica}}.

## Moure objectes restringits

Moure, girar, escalar, les nanses i el panell Propietats mantenen totes les restriccions: l'objecte que moveu queda subjectat, i la resta segueix. Quan les restriccions no poden seguir, l'edició no es fa i l'historial n'explica el motiu, per exemple "No fet: les restriccions mantenen aquest objecte on és". Esborrar un objecte també n'esborra les restriccions.

## Simetria i retall d'objectes restringits

- {{cmd:MIRROR}} copia les restriccions entre els objectes que simetritzeu cap a les còpies. Els costats (per quin costat toca una tangent, a quin costat es mesura una distància) es tornen a calcular per a la còpia simètrica, i les cotes copiades reben noms propis, igual que fa una enganxada. Amb `Esborra els objectes d'origen` `Y`, les restriccions es mantenen sobre els objectes simètrics. L'historial diu quantes n'han vingut amb ells.
- {{cmd:TRIM}} manté les restriccions d'una línia o d'un arc sobre el que queda: una restricció d'un extrem passa al tros que encara té aquest extrem, una regla de direcció ({{ui:Horitzontal}}, {{ui:Vertical}}, {{ui:Paral·lel}}, {{ui:Perpendicular}}) es manté en cada tros, i una cota entre els dos extrems exteriors continua mesurant-los. Les restriccions que subjectaven la part retallada, o una longitud que el retall ha canviat ({{ui:Igual}}, l'angle d'un arc), desapareixen. Un cercle retallat conserva les restriccions del seu centre i del seu radi. Les polilínies retallades les perden.

## Les restriccions

| Ordre | Manté |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | una línia o un segment a nivell o a plom (`2P`: dos punts a nivell o a plom) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | dues línies paral·leles, perpendiculars o sobre una mateixa recta |
| {{cmd:GCCOINCIDENT}} | dos punts junts; `O`: un punt sobre una línia, un cercle o un arc |
| {{cmd:GCTANGENT}} | una línia i un cercle o un arc, o dos d'ells, tocant-se |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | dos cercles o arcs amb un mateix centre; dues longituds o dos radis iguals |
| {{cmd:GCSYMMETRIC}} | dos punts, línies o cercles simètrics respecte a una línia |
| {{cmd:GCFIX}} | un punt (feu clic a prop) o un objecte sencer (`O`) on és |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | una distància |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | un radi, un diàmetre, un angle entre dues línies o l'angle d'un arc |

{{cmd:GEOMCONSTRAINT}} i {{cmd:DIMCONSTRAINT}} pregunten quina és; {{ui:Restringeix}} i {{ui:Cota}} del grup {{ui:Paramètric}} les executen, i {{ui:Més}} hi llista cadascuna. On feu clic tria la part: un clic a prop d'un extrem, al mig o en un centre agafa aquell punt; un clic sobre una polilínia agafa el segment que hi ha sota. El primer objecte es queda i el segon es mou per trobar-lo.

Una restricció que entra en conflicte amb les altres, o que no afegeix res perquè les altres ja la impliquen, es refusa amb un missatge i no es mou res.

## Veure, seleccionar i eliminar

- Feu clic a una caixa d'una barra de restricció (o a un quadrat de coincidència, o a una etiqueta de cota) per seleccionar aquella restricció; l'historial en diu el nom. Premeu {{key:Delete}} per eliminar-la.
- {{cmd:DELCONSTRAINT}} elimina totes les restriccions dels objectes que seleccioneu.
- {{cmd:CONSTRAINTBAR}}: `S` mostra totes les barres, `H` les amaga; seleccioneu primer els objectes per mostrar o amagar les seves. {{ui:Més}} té {{ui:Mostra les barres de restricció}} i {{ui:Amaga les barres de restricció}}.
- {{cmd:DCDISPLAY}} mostra o amaga les restriccions dimensionals. Mai no es tracen.
- {{cmd:DCCONVERT}} converteix les cotes dibuixades sobre línies, cercles i arcs en restriccions dimensionals.

:::note
Si heu fet servir el dibuix paramètric d'AutoCAD, els noms d'ordre i les indicacions són els mateixos. Les restriccions i els paràmetres es desen en fitxers DWG i DXF en una forma que altres programes ignoren; vegeu [Fitxers](topic:files#constraints-in-files).
:::
