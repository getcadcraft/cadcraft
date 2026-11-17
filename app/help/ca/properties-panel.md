---
title: El tauler de propietats
summary: Veu i canvia tot el que hi ha als objectes seleccionats, molts alhora: coordenades amb Z, mides, text, configuració de cotes, transparència i més. Els camps accepten expressions i longituds amb unitats.
keywords: totals, longitud total, àrea total, suma, longitud de la selecció, propietats, paleta de propietats, ctrl+1, pr, ch, mo, ddmodify, varies, selecció ràpida, pickadd, coordenades, z, cota, gruix, transparència, material, hipervincle, expressió, quickcalc, vèrtex, estil de cota, tolerància, decimals
from: 10d6a829
---

## Què aprendràs

Com obrir el tauler de propietats, canviar un objecte o cent en un sol pas, escriure coordenades exactes (amb Z), usar expressions i unitats en qualsevol camp numèric, i què mostra cada tipus d'objecte.

## Obre'l

El tauler és a la dreta. Per portar-lo al davant:

- Prem {{key:Mod+1}}, o escriu {{cmd:PROPERTIES}} (o `PR`, `CH`, `MO`).
- Fes doble clic a un objecte (el text i les línies de crida múltiples obren el seu editor de text).

El tauler és un tauler mòbil com els altres: arrossega'n la nansa per acoblar-lo a l'esquerra, a la dreta o a la part inferior, o deixa'l anar sobre el dibuix per fer-lo flotant (vegeu [Organitza els taulers i usa un segon monitor](common:arrange-panels)).

### Plega'l

El botó de fixar a dalt a la dreta del tauler activa l'**ocultació automàtica**: el tauler es plega en una franja a la vora dreta i el dibuix guanya espai. Apunta la franja (o prem {{key:Mod+1}}) i s'obre sobre el dibuix; quan te'n vas, es torna a plegar. Fes clic al botó de nou per mantenir-lo obert. {{cmd:PROPERTIESCLOSE}} també el plega.

## Seccions

Les propietats s'agrupen en seccions que pots plegar: **General**, **Geometria**, **Text**, **Línies i fletxes**, **Ajust**, **Unitats principals**, **Unitats alternatives**, **Toleràncies**, **Patró**, **Diversos**, i per als blocs **Atributs** i **Element de biblioteca**. Fes clic al nom d'una secció per plegar-la o obrir-la; CadCraft recorda quines has plegat.

Arrossega la línia fina entre els noms i els valors per fer els noms més amples o més estrets. Fes-hi doble clic per restaurar-la. Amb el teclat, dona-li el focus i usa les tecles de fletxa.

## Canvia un valor

1. Fes clic a una línia. La capçalera diu "Línia".
2. Fes clic a {{ui:Length}}. Mentre edites, el camp mostra el valor complet, no l'arrodonit.
3. Escriu `2500` i prem {{key:Enter}}. La línia ara fa 2500 de llarg, mantenint el seu punt inicial i l'angle.

{{key:Enter}} o fer clic en un altre lloc aplica el valor; {{key:Esc}} torna a posar el valor antic. Cada canvi és un sol pas per desfer.

### Expressions i unitats

Cada camp numèric accepta més que un número simple:

| Escrius | Obtens |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (polzades, en un dibuix en peus i polzades) |
| `900mm`, `3.5m`, `2ft` | Convertit a les unitats del dibuix |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (camps d'angle) |
| `0.5r`, `100g` | Radians i grads, com a graus |

Una longitud amb unitat necessita que el dibuix tingui unitats: defineix primer {{ui:Units}} a {{ui:New objects}} (sense res seleccionat). Una entrada incorrecta es rebutja amb una nota sota el tauler i res no canvia; mai no es desa com a 0. Funcions: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; els angles en graus.

## Canvia molts objectes alhora

1. Selecciona diversos objectes, per exemple 8 línies i 4 cotes.
2. La capçalera diu "12 objectes", i una llista a dalt ofereix **Tots (12)**, **Línia (8)** i **Cota (4)**.
3. **Tots** mostra el que té cada objecte (capa, color, tipus de línia…). Tria **Cota (4)** per veure la configuració de cotes.
4. Canvia un valor, per exemple {{ui:Decimals}} a `1`.

Les quatre cotes canvien, en un sol pas per desfer. Un camp que diu **Varia** vol dir que els objectes són diferents; escriure-hi un valor el fixa a tots. Els objectes de capes bloquejades es deixen com estan, i la nota diu quants n'hi ha.

## Totals d'una selecció

Amb diversos objectes seleccionats, la secció {{ui:Totals}} a dalt diu:

- **Objectes**: quants n'hi ha de cada tipus, per exemple "8 línies, 2 polilínies, 1 cercle".
- **Longitud total**: les línies, arcs i polilínies sumades (les splines també hi compten), i quants objectes són.
- **Àrea total**: els tancats sumats: cercles, el·lipses senceres, polilínies tancades i trames (els forats d'una trama es resten).

Són en el format de longitud del dibuix (peus i polzades quan l'usa; les àrees, llavors, en polzades quadrades i peus quadrats). La barra d'estat mostra la mateixa longitud i àrea quan hi ha objectes seleccionats; {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Length and area of the selection}} › {{ui:Hidden}} ho desactiva. Per a un objecte, {{ui:Geometry}} mostra la seva pròpia longitud i àrea, com abans.

## Coordenades

Cada punt mostra **X**, **Y** i **Z**: l'inici i el final d'una línia, els centres, els punts d'inserció, les posicions del text, el vèrtex actual de la polilínia. Les línies també mostren **Delta X**, **Delta Y** i **Delta Z** (només de lectura). Les polilínies i les trames tenen una **Elevació** (una Z per a tot l'objecte).

El botó de la creu al costat del nom d'un punt et permet triar-lo al dibuix en lloc: fes-hi clic i després fes clic a la nova posició (les referències funcionen). Els valors són coordenades del món.

## General

| Camp | Què és |
|---|---|
| {{ui:Layer}}, {{ui:Color}}, {{ui:Linetype}}, {{ui:Linetype scale}}, {{ui:Lineweight}} | Com al panell de capes; {{ui:By layer}} segueix la capa |
| {{ui:Transparency}} | Per capa, per bloc, o 0 a 90 % |
| {{ui:Thickness}} | Fins on s'estenen en Z les línies, els cercles, els arcs, les polilínies, els punts i el text |
| {{ui:Material}} | Per capa, per bloc, Global o un nom que ha portat un dibuix |
| {{ui:Plot style}} | Només de lectura: els dibuixos es tracen per color, a través de la [taula d'estil de traçat](topic:plot-pdf#plot-style-tables) del full |
| {{ui:Hyperlink}} | Una adreça web guardada amb l'objecte |

## Què mostra cada tipus

| Seleccionat | Pots canviar |
|---|---|
| Línia | Inici i final X, Y, Z; longitud; angle |
| Cercle | Centre; radi; diàmetre; circumferència; àrea (cadascun fixa el radi) |
| Arc | Centre; radi; angle inicial i final; angle total; corda (mostra la longitud de l'arc i l'àrea) |
| El·lipse | Centre; radis major i menor; relació de radis; angle de l'eix major; angle inicial i final |
| Polilínia | El navegador de vèrtexs (més avall); amplada global; elevació; tancada; àrea quan és tancada (l'escala respecte al seu centre) |
| Text | Contingut; estil; justificació; alçada; gir; factor d'amplada; angle d'obliqüitat; amplada definida; interlineat; anotatiu; posició |
| Referència de bloc | Punt d'inserció; gir; escala X, Y, Z i escala uniforme; valors d'atributs |
| Trama | Patró; escala; angle; origen; associativa; detecció d'illes; color de fons; elevació |
| Cota | Vegeu més avall |
| Línia de crida múltiple | Text; alçada; amplada; cara del text; mida de la punta de fletxa; distància d'aterratge; punt de la punta de fletxa |
| Finestra gràfica | Escala; centre i mida al full; centre de la vista al model; activada; visualització bloquejada |

### Vèrtexs de polilínia

{{ui:Current vertex}} mostra a quin vèrtex pertanyen els camps de sota. Usa els botons de fletxa, o escriu un número, per anar a un altre vèrtex; no hi ha límit de quants. Cada vèrtex té X, Y, l'amplada de segment inicial i final, i el bombament del segment que hi comença (0 = recte).

## Cotes

Una cota mostra el seu **Estil de cota**, què mesura, els seus punts, i cada configuració:

- **Línies i fletxes:** punta de fletxa per a cada extrem, mida de la fletxa, mida de la marca, colors i gruixos de la línia de cota i de les línies d'extensió, amagar qualsevol de les dues meitats o qualsevol línia d'extensió, desplaçament i prolongació de la línia d'extensió.
- **Text:** substitució (deixa-ho buit per al valor mesurat; `<>` representa aquest valor dins del teu propi text), estil, color, alçada, desplaçament, posició vertical i horitzontal, sempre horitzontal, gir, farciment de fons.
- **Ajust:** escala global, espaiat de línies de base, què es mou quan falta espai, moviment del text.
- **Unitats principals:** format, decimals, arrodoniment, prefix, sufix, escala de mesura, separador decimal, suprimeix els zeros inicials i finals; per als angles, el format i els decimals d'angle.
- **Unitats alternatives:** activades o desactivades, format, decimals, multiplicador (25.4 converteix polzades en mil·límetres), arrodoniment, prefix i sufix.
- **Toleràncies:** cap, simètriques, desviació, límits o bàsiques, amb valors superior i inferior, decimals, alçada i posició.

Canviar qualsevol d'aquestes configuracions en una cota oberta elimina la representació que l'altre programa n'havia fet, i CadCraft la torna a dibuixar.

:::note
La posició horitzontal del text (al costat de la primera o la segona línia d'extensió) i el text sota la línia es dibuixen a les cotes lineals i alineades; en altres cotes es guarden i es desen, però encara no es dibuixen. Les opcions d'Ajust es guarden i es desen, però encara no es dibuixen: CadCraft col·loca el text segons la seva pròpia regla (sobre la línia, fora si no hi cap).
:::

## Cap selecció

Sense res seleccionat, el tauler mostra:

- **Objectes nous:** la capa, el color, el tipus de línia, el gruix de línia i l'alçada del text que tindran els objectes nous; les unitats i el format de longitud del dibuix; el tipus de línia i el gruix de la capa actual; les mides de les cotes noves. En un full, primer el nom, el paper i l'orientació del full.
- **Vista:** el centre, l'alçada i l'amplada del que hi ha a la pantalla. Escriu un valor per moure la vista allà.
- **Diversos:** la icona SCP activada o desactivada, el SCP (sempre Món: CadCraft encara no té sistemes de coordenades d'usuari) i l'escala d'anotació.

## Els botons de dalt

| Botó | Fa |
|---|---|
| Embut | {{cmd:QSELECT}}: selecciona per tipus i propietat |
| Punter | {{cmd:SELECT}}: selecciona objectes a la línia d'ordres |
| Més o 1 | Si un clic afegeix a la selecció (més) o la reemplaça (1); el mateix paràmetre que a {{ui:Settings}}, {{ui:CadCraft}} |
| Fixa | Ocultació automàtica, més amunt |

## Errors habituals

- **Escriure en un camp no ha fet res.** Prem {{key:Enter}} o fes clic en un altre lloc per aplicar-lo. Un camp en vermell i una nota volen dir que l'entrada s'ha rebutjat.
- **Una longitud amb unitat es rebutja.** El dibuix no té unitats. Defineix {{ui:Units}} sense res seleccionat.
- **Només es veuen Capa i Color.** Hi ha diversos tipus d'objectes seleccionats i s'ha triat **Tots**. Tria un tipus a la llista de dalt.
- **Alguns objectes no han canviat.** Són en una capa bloquejada. Desbloqueja la capa al panell de capes.
- **Les lletres escrites han anat a un camp.** Mentre un camp té el cursor, les tecles escriuen allà. Prem {{key:Enter}} o {{key:Esc}}, i després escriu l'ordre.
