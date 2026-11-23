---
title: Croquis amb un llapis i obtenció de geometria precisa
summary: Dibuixa a mà alçada amb un llapis, ratolí o dit, i cada traç es converteix en una línia, cercle, arc, rectangle o polilínia nets en aixecar el llapis, cargolat a allò que ja està dibuixat, amb la mida a punt per escriure-hi a sobre.
keywords: croquis, llapis, llapis tàctil, mà alçada, dit, neteja, precís, pas, SKETCHLIVE, SKETCHFIX, mida, escriure a sobre, pressió, gruix de línia, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Inicia {{cmd:SKETCHLIVE}} (o tria **Dibuix › Més › Croquis amb un llapis**) i dibuixa un traç prement i arrossegant. En aixecar el llapis, CadCraft llegeix el que volies dir i ho posa al dibuix:

| El teu traç | Què obtens |
|---|---|
| Gairebé recte | Una línia. Una línia gairebé horitzontal o vertical es fa exactament horitzontal o vertical. |
| Tancat i rodó | Un cercle |
| Part d'una forma rodona | Un arc |
| Tancat amb quatre cantonades en angle recte | Un rectangle |
| Qualsevol altra cosa | Una polilínia amb costats en escaire |

Els extrems d'un traç s'estiren fins a l'extrem més proper del que ja està dibuixat, de manera que un mur dibuixat a mà alçada es troba amb el mur del costat.

## Escriu a sobre de la mida

Després de cada traç, la línia d'ordres mostra la seva mida (la **longitud** d'una línia, el **radi** d'un cercle o d'un arc, l'**amplada** d'un rectangle) com a valor per defecte. Prem {{key:Enter}} per conservar-la, o escriu un número o una longitud com `12'6"` per substituir-la. Una línia conserva el seu primer extrem, un cercle el seu centre, un rectangle la seva primera cantonada.

Prem {{key:Enter}} en una petició buida per acabar, o escriu `U` per desfer l'últim traç. Tota la sessió és un sol pas de desfer.

## Netejar diversos traços alhora

{{cmd:SKETCHFIX}} recull traços i els fa tots precisos en prémer {{key:Enter}}, cosa que va bé per a una distribució aproximada dibuixada de pressa.

:::note
Tot es calcula al teu ordinador amb regles, sense cap model i sense enviar res enlloc.
:::

## La pressió defineix el gruix de línia

Quan el llapis està activat per a les aplicacions ({{ui:Configuració}} › Global › Dispositius d'entrada › Llapis), un traç fet amb llapis porta cada punt que ha donat el llapis i la seva pressió. Un traç suau fa un objecte prim i un de ferm en fa un de gruixut: la pressió mitjana del traç tria 0,18, 0,25, 0,35 o 0,50 mm, i la línia d'ordres indica quin. Els traços fets amb ratolí o dit prenen el gruix de línia actual, com abans. {{cmd:PENPRESSURE}} ho desactiva (o ho torna a activar); l'elecció es manté en aquest navegador.
