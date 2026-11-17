---
title: Desfasa, retalla, allarga, empalma i xamfrana murs
summary: Convertiu línies simples en murs dobles amb Desfasa, netegeu els cantons amb Empalma, i talleu i allargueu línies amb Retalla i Allarga.
keywords: desfasa, retalla, allarga, empalma, xamfrà, bisell, trenca, breakatpoint, LEN, murs, cantó, tall, paral·lel, radi, neteja
from: c6c5cbd0
---

## Què creareu

Una petita habitació amb murs de 200 de gruix: es dibuixa la cara interior, es desfasa la cara exterior, es netegen els cantons, i es talla una porta en un dels murs.

## Dibuixeu la cara interior

1. Escriviu `L` i premeu {{key:Enter}}.
2. Escriviu `0,0` i premeu {{key:Enter}}.
3. Escriviu `@5000,0` i premeu {{key:Enter}}.
4. Escriviu `@0,4000` i premeu {{key:Enter}}.
5. Escriviu `@-5000,0` i premeu {{key:Enter}}.
6. Escriviu `C` i premeu {{key:Enter}}.
7. Feu clic a {{ui:Extensió}}.

Teniu quatre línies separades. (Una polilínia tancada es desfasaria de cop; les línies separades mostren com Empalma neteja els cantons.)

## Desfaseu la cara exterior

1. Escriviu `O` i premeu {{key:Enter}}. La petició diu `Especifiqueu la distància de desfasament [Travessa] <Travessa>:`.
2. Escriviu `200` i premeu {{key:Enter}}.
3. A `Seleccioneu l'objecte a desfasar`, feu clic a la línia inferior.
4. A `Especifiqueu un punt al costat per desfasar`, feu clic en qualsevol lloc per sota. Apareix una línia paral·lela 200 per sota.
5. Feu clic a la línia dreta, després feu clic a la seva dreta.
6. Feu clic a la línia superior, després feu clic per sobre.
7. Feu clic a la línia esquerra, després feu clic a la seva esquerra.
8. Premeu {{key:Enter}} per acabar l'ordre.

Veureu quatre línies exteriors, cadascuna de la mateixa longitud que la seva interior, de manera que els cantons exteriors no es troben.

:::tip
Premeu {{key:Enter}} a la petició de distància per tornar a usar l'última distància. Escriviu `T` per a Travessa: llavors cada còpia passa pel punt en què feu clic, a la distància que sigui.
:::

{{cmd:OFFSET}} funciona amb línies, arcs, cercles i polilínies. Desfasar una polilínia tancada desfasa tot el contorn, inclosos els cantons.

## Neteja els cantons exteriors amb Empalma

{{cmd:FILLET}} uneix dues línies en un cantó: les retalla o les allarga perquè es trobin. Amb un radi de 0, el cantó és quadrat.

1. Escriviu `F` i premeu {{key:Enter}}. La petició diu `Seleccioneu la primera línia [Radi]:`.
2. Si l'últim empalme que heu fet usava un radi, escriviu `R`, premeu {{key:Enter}}, escriviu `0` i premeu {{key:Enter}}.
3. Feu clic a la línia inferior exterior prop del seu extrem dret.
4. A `Seleccioneu la segona línia`, feu clic a la línia dreta exterior prop del seu extrem inferior.

Les dues línies ara es troben en un cantó viu, i l'ordre acaba.

5. Premeu {{key:Enter}} per repetir {{cmd:FILLET}}, i feu el següent cantó.
6. Repetiu fins que els quatre cantons exteriors es trobin.

Feu clic a cada línia a la part que voleu **conservar**. Amb un radi superior a 0, Empalma afegeix un arc entre les línies.

:::tip
Escriviu `M` a la primera petició per fer els quatre cantons d'una vegada, o dibuixeu la cara exterior com una sola polilínia tancada i escriviu `P`: tots els cantons es fan de cop. Manteniu {{key:Shift}} mentre feu clic a la segona línia per obtenir un cantó viu sense canviar el radi.
:::

## Bisell un cantó amb Xamfrà

{{cmd:CHAMFER}} talla un cantó amb una línia recta.

1. Escriviu `CHA` i premeu {{key:Enter}}.
2. Escriviu `D` i premeu {{key:Enter}}. Escriviu `300` i premeu {{key:Enter}} per a la primera distància, després premeu {{key:Enter}} per usar 300 també per a la segona.
3. Feu clic a la línia superior interior prop del seu extrem esquerre, després a la línia esquerra interior prop del seu extrem superior.

El cantó es talla 300 al llarg de cada línia i una línia de bisell els uneix. Escriviu `A` en lloc de `D` per donar una longitud a la primera línia i un angle.

## Talleu una porta amb Retalla

Primer dibuixeu les dues jambes de porta a través del mur inferior, després retalleu les línies del mur entre elles.

1. Escriviu `L` i premeu {{key:Enter}}.
2. Escriviu `1000,200` i premeu {{key:Enter}}.
3. Escriviu `@0,-600` i premeu {{key:Enter}}, després premeu {{key:Enter}} de nou.
4. Premeu {{key:Enter}} per repetir {{cmd:LINE}}.
5. Escriviu `1900,200` i premeu {{key:Enter}}.
6. Escriviu `@0,-600` i premeu {{key:Enter}}, després premeu {{key:Enter}} de nou.

Ara teniu dues línies curtes que creuen el mur inferior a 900 de distància.

7. Escriviu `TR` i premeu {{key:Enter}}. L'historial diu `Configuració actual: mode Ràpid, vores: sense allargar`.
8. Feu clic a la línia inferior interior entre les dues jambes. Aquell tros desapareix. (Deixeu primer el punter sobre ell: el tros que se n'anirà es torna gris i discontinu.)
9. Feu clic a la línia inferior exterior entre les dues jambes. Aquest tros també desapareix.
10. Feu clic a la part de cada jamba que sobresurt per sobre del mur, i a la part que hi ha per sota.
11. Premeu {{key:Enter}} per acabar l'ordre.

Veureu una obertura de 900 al mur inferior, amb les jambes tancant els extrems del mur.

En mode Ràpid (el predeterminat) Retalla no us demana primer triar les vores de tall: cada objecte visible és una vora de tall. Trieu el tros que voleu eliminar, o arrossegueu un camí per diversos trossos per retallar-los tots de cop. Escriviu `U` i premeu {{key:Enter}} per recuperar l'última selecció o arrossegament sense sortir de l'ordre. Finestra, intersecció, vores triades i {{key:Shift}} per allargar són a [Retalla i allarga](topic:trim-and-extend).

## Allarga una línia fins a tocar-ne una altra

{{cmd:EXTEND}} allarga l'extrem d'una línia, arc o polilínia fins que toca el següent objecte en aquella direcció.

1. Escriviu `L` i premeu {{key:Enter}}.
2. Escriviu `1000,2000` i premeu {{key:Enter}}.
3. Escriviu `@2000,0` i premeu {{key:Enter}}, després premeu {{key:Enter}} de nou. La línia s'atura 2000 abans del mur dret.
4. Escriviu `EX` i premeu {{key:Enter}}.
5. Feu clic a la línia nova prop del seu extrem dret.
6. Premeu {{key:Enter}} per acabar l'ordre.

La línia ara arriba fins a la cara interior del mur dret. Cada objecte visible és un límit; trieu prop de l'extrem que ha de créixer. Dins de {{cmd:TRIM}}, {{key:Shift}}+clic fa el mateix.

## Trenca i allarga

{{cmd:BREAK}} (`BR`, o {{ui:Modifica}} › {{ui:Més}} › {{ui:Trenca}}) talla un buit sense vora de tall: feu clic a l'objecte on comença el buit (aquest clic és el primer punt), després feu clic on acaba. En un cercle, la part en sentit antihorari des del primer punt fins al segon és la que se'n va. L'opció `F` (Primer punt) a la segona pregunta permet donar de nou el primer punt, i {{cmd:BREAKATPOINT}} divideix un objecte en dos en un punt, sense buit.

{{cmd:LENGTHEN}} (`LEN`) canvia una longitud en un extrem:

1. Escriviu `LEN` i premeu {{key:Enter}}. Feu clic a una línia per veure la seva longitud actual; la petició torna a preguntar.
2. Trieu com: `DE` (Delta: una quantitat a afegir, negativa per treure; `A` per a l'angle d'un arc), `P` (Percentatge: 50 la divideix per la meitat), `T` (Total: la longitud que hauria de tenir) o `DY` (Dinàmic: arrossegueu l'extrem).
3. Feu clic a cada objecte prop de l'extrem que ha de canviar. `U` recupera l'últim; {{key:Enter}} acaba.

Es poden allargar línies, arcs i polilínies obertes (el seu segment final).

## Errors habituals

- **Ha desaparegut una línia sencera.** Cap objecte la creuava, així que el mode Ràpid l'ha esborrat. Escriviu `U` per recuperar-la; comproveu que la línia de tall la creua de debò (feu zoom) i que no és en una capa desactivada.
- **«No hi ha cap límit en aquesta direcció».** Allarga no ha trobat res on arribar. Trieu més a prop de l'extrem que ha de créixer.
- **«El radi és massa gran».** L'arc passaria més enllà de l'extrem d'una de les línies. Useu un radi més petit.
- **«Només es pot retallar el primer o l'últim segment d'una polilínia oberta».** Trieu dos segments de la polilínia un al costat de l'altre, o escriviu `P` per arrodonir cada cantó.
- **El desfasament ha anat al costat equivocat.** El costat és on feu clic després de triar l'objecte. Desfeu amb {{key:Mod+Z}} i feu clic a l'altre costat.
- **«No es pot desfasar tant».** El desfasament giraria l'arc, el cercle o la polilínia de dins a fora. Useu una distància més petita.
