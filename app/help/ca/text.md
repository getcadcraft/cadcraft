---
title: Afegeix text i etiquetes
summary: Col·loca etiquetes de sala amb text d'una sola línia, escriu notes ajustades amb text de paràgraf escrit directament al dibuix i edita el text després.
keywords: text, dtext, mtext, mleader, multileader, línia de crida, revcloud, núvol de revisió, núvol, cerca, reemplaça, cerca i reemplaça, paràgraf, ajust, interlineat, etiqueta, nota, anotació, alçada, justifica, textmask, màscara de fons, màscara, wipeout, rotació, edita el text, ddedit, textedit, tipus de lletra
from: 4b76be99
---

## Què obtindreu

Dues etiquetes de sala, centrades a les seves sales, una nota que s'ajusta a la seva amplada i, després, una correcció a una de les etiquetes.

## Alçada del text i escala del dibuix

L'alçada del text es mesura en unitats de dibuix. En un dibuix en mil·límetres que es traçarà a 1:50, un text de 2.5 mm d'alçada al paper ha de tenir 2.5 × 50 = 125 unitats d'alçada al model. En una pestanya de full, que dibuixeu en unitats de paper, el 2.5 d'allà són 2.5 mm al paper.

## Col·loqueu una etiqueta centrada

1. Escriviu `DT` i premeu {{key:Enter}} (o feu clic a {{ui:Text}} a la barra d'eines). La petició diu `Specify start point of text [Justify]:`.
2. Escriviu `J` i premeu {{key:Enter}}.
3. A `Enter an option [Left/Center/Right/Middle/TL/MC] <L>:`, escriviu `MC` i premeu {{key:Enter}}.
4. A `Specify insertion point of text`, feu clic al centre d'una sala.
5. A `Specify height`, escriviu `250` i premeu {{key:Enter}}.
6. A `Specify rotation angle of text <0>`, premeu {{key:Enter}}.
7. A `Enter text`, escriviu `CUINA` i premeu {{key:Enter}}.

L'etiqueta apareix, centrada al punt on heu fet clic.

8. Premeu {{key:Enter}} a la petició `Enter text` buida per acabar l'ordre.

## Escriviu una nota que s'ajusti

El text de paràgraf ({{cmd:MTEXT}}) s'ajusta a una amplada i s'escriu directament al dibuix.

1. Escriviu `T` i premeu {{key:Enter}}, o feu clic a {{ui:Paràgraf}} a la barra d'eines.
2. A `Specify first corner`, feu clic on ha d'anar el cantó superior esquerre de la nota.
3. Per canviar primer l'alçada, escriviu `H`, premeu {{key:Enter}}, escriviu `250` i premeu {{key:Enter}}.
4. A `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`, feu clic a la dreta del primer cantó. La distància entre tots dos és l'amplada a la qual s'ajusta el text; la distància cap avall no en limita l'amplada.
5. S'obre una caixa sobre el dibuix amb el cursor a dins. Escriviu `TOTES LES COTES SÓN EN MIL·LÍMETRES EXCEPTE QUE S'INDIQUI EL CONTRARI`. Les paraules s'ajusten a l'amplada mentre escriviu.
6. Premeu {{key:Enter}} per començar un paràgraf nou i escriviu `COMPROVAR A OBRA`.
7. Premeu {{key:Mod+Enter}}, feu clic a {{ui:D'acord}} o feu clic fora de la caixa. La nota és un sol objecte.

La barra que hi ha sobre la caixa permet canviar {{ui:Alçada}}, {{ui:Interlineat}} (1 és normal, 1.5 és la meitat més), {{ui:Amplada}} (0 = sense ajust) i {{ui:Justifica}} mentre escriviu. {{key:Esc}} o {{ui:Cancel·la}} la tanca sense afegir res.

Les opcions del segon cantó: `H` alçada, `J` justificació (`TL` cantó superior esquerre … `BR` cantó inferior dret: el cantó o el centre de la caixa que es manté fix), `L` interlineat, `R` rotació, `W` una amplada escrita en lloc del segon cantó.

:::note
Mentre la caixa és oberta, {{key:Space}} escriu un espai i {{key:Enter}} comença un paràgraf nou. Un DWG desat conserva el text de paràgraf com a MTEXT; un DXF R12 no té text de paràgraf, així que cada línia es desa com a text propi.
:::

### Diverses línies simples en lloc seu

{{cmd:TEXT}} (`DT`) demana una línia cada cop: cada {{key:Enter}} comença la línia següent, 1.667 vegades l'alçada del text més avall, i cada línia és un objecte propi. Premeu {{key:Enter}} en una línia buida per acabar.

## Opcions de justificació

| Opció | El punt on feu clic és |
|---|---|
| {{ui:Esquerra}} (per defecte) | L'extrem esquerre de la línia de base |
| {{ui:Centre}} | El centre de la línia de base |
| {{ui:Dreta}} | L'extrem dret de la línia de base |
| Mig, MC | El centre del text, tant horitzontal com verticalment |
| TL | El cantó superior esquerre |

## Editeu el text

1. Feu doble clic a un objecte de text. S'obre a la mateixa caixa que el text de paràgraf nou, amb el cursor al final.
2. Canvieu les paraules.
3. Premeu {{key:Mod+Enter}} o feu clic fora de la caixa. El text del dibuix canvia; {{key:Esc}} el deixa tal com estava.

{{cmd:TEXTEDIT}} (`ED`) fa el mateix: escolliu un text rere l'altre i premeu {{key:Enter}} quan acabeu.

Seleccioneu un text per canviar-lo al tauler de la dreta: {{ui:Text}}, {{ui:Alçada}}, {{ui:Amplada d'ajust}} (0 = sense ajust), {{ui:Interlineat}}, {{ui:Rotació}}, la posició X i Y i {{ui:Justifica}}. La llista {{ui:Justifica}} també ofereix Inferior esquerra, que de vegades fan servir els textos d'altres programes.

## Format dins del text de paràgraf d'altres programes

El text de paràgraf d'un DWG o DXF pot portar codis a dins: colors per paraula, negreta i cursiva, subratllat, sobrelínia i ratllat, fraccions apilades com 1/2, i una alçada diferent per a una paraula. CadCraft conserva aquests codis, els dibuixa (a la pantalla i en un PDF traçat) i els torna a desar sense canvis.

Quan editeu un text així (doble clic, {{cmd:TEXTEDIT}}, el camp Text del tauler de la dreta, o {{cmd:FIND}} amb Reemplaça), editeu les seves paraules sense format. Una paraula que escriviu va al tram de text del costat i en pren el color i l'estil; la resta de codis es queden on són. Si torneu a escriure els números d'una fracció apilada, aquesta fracció passa a ser text sense format. Si definiu tot el text des del camp Text, els codis es conserven només on es pot saber quines paraules s'han mantingut.

Els noms de tipus de lletra (`\F`) es conserven i es desen, però tot es dibuixa amb l'única font d'estil Helvetica. Encara no hi ha cap barra d'eines per escriure codis.

## Assenyaleu alguna cosa: línies de crida múltiples

{{ui:Línia de crida}} al grup {{ui:Anota}} ({{cmd:MLEADER}}, `MLD`) dibuixa una fletxa, una línia de crida, un tram final i una nota, com a un sol objecte.

1. Feu clic a {{ui:Línia de crida}}. A `Specify leader arrowhead location`, feu clic a allò de què tracta la nota.
2. A `Specify leader landing location`, feu clic on ha d'anar la nota. El tram final es gira cap al costat on heu fet clic.
3. Escriviu la nota a la caixa que s'obre i premeu {{key:Mod+Enter}}.

`A` i `L` a la primera pregunta fixen la mida de la punta de fletxa i la longitud del tram final; l'alçada del text prové de {{ui:Alçada del text}} per a les cotes noves, multiplicada per {{ui:Escala global}}. Feu doble clic a una línia de crida múltiple per canviar-ne les paraules. Les nanses mouen la punta de fletxa i el tram final; la nota segueix el tram final. A {{ui:Propietats}}: {{ui:Text}}, {{ui:Alçada}}, {{ui:Amplada d'ajust}}, {{ui:Mida de la punta de fletxa}} i {{ui:Distància del tram final}}.

:::note
Les línies de crida múltiples es desen com a línies de crida reals en DWG. El DXF no té línia de crida múltiple en R12 ni en 2000, així que allà es desen com les línies, la punta de fletxa i el text que dibuixen.
:::

## Marqueu els canvis amb un núvol de revisió

{{ui:Anota}} › {{ui:Més}} › {{ui:Núvol de revisió}} ({{cmd:REVCLOUD}}, `RC`) dibuixa un núvol d'arcs al voltant del que ha canviat. L'historial mostra la longitud de l'arc i el tipus que farà servir.

- **Rectangular** (la primera vegada): feu clic a dues cantonades.
- `P` **Poligonal**: feu clic a les cantonades; {{key:Enter}} tanca el núvol.
- `F` **A mà alçada**: feu clic on comença i moveu el punter al voltant de l'àrea sense fer clic; s'afegeix un arc a cada longitud d'arc. Feu clic o premeu {{key:Enter}} per tancar-lo.
- `O` **Objecte**: trieu una polilínia tancada, un cercle o una el·lipse (o una línia, un arc o una polilínia oberta); es converteix en el núvol. `Reverse direction?` `Y` fa que els arcs vagin cap a dins.
- `A` **Longitud d'arc**: la longitud de cada arc. Trieu-ne una que encaixi amb l'escala de traçat.

El núvol és una polilínia tancada d'arcs, així que es desa en qualsevol format.

## Cerqueu i reemplaceu paraules

{{ui:Edita}} › {{ui:Més}} › {{ui:Cerca i reemplaça}} ({{cmd:FIND}}) busca en el text, en els valors dels atributs de blocs i en el text de les cotes de la pestanya oberta (o només als objectes seleccionats).

1. Escriviu les paraules a {{ui:Cerca}}. La llista mostra on són i el recompte.
2. Trieu {{ui:Distingeix majúscules i minúscules}}, {{ui:Només paraules senceres}} o {{ui:Usa comodins (* i ?)}} si els necessiteu, i desmarqueu on no cal buscar.
3. Feu clic a {{ui:Selecciona els trobats}} per seleccionar aquests objectes, o escriviu les noves paraules a {{ui:Reemplaça amb}} (la llista mostra en què es converteix cadascuna) i feu clic a {{ui:Reemplaça-ho tot}}. Un {{key:Mod+Z}} desfà totes les substitucions.

El valor mesurat d'una cota no és text, així que mai no es reemplaça: a `<> TYP.`, només es pot reemplaçar `TYP.`.

## Amagueu les línies darrere d'una etiqueta

1. Seleccioneu els textos, escriviu {{cmd:TEXTMASK}} i premeu {{key:Enter}}.
2. `B` pinta el fons del dibuix darrere d'ells; `C` demana un número de color. `O` elimina la màscara.
3. `Border offset factor`: {{key:Enter}} manté 1.5, és a dir, mig alçada del text al voltant del text.

La màscara cobreix les línies que hi ha sota el text, a la pantalla i en traçar. El DWG de 2004 o posterior i el DXF 2000 la conserven; el DWG de 2000 i el DXF R12 no ho poden fer, i el desament ho indica.

## Tipus de lletra

Tot el text es dibuixa amb una font d'estil Helvetica, a la pantalla i als PDF. El text de dibuixos oberts conserva les seves paraules, alçada i posició, però no el seu tipus de lletra original (el nom d'un tipus de lletra dins del text de paràgraf es conserva al fitxer, vegeu més amunt).

En els PDF traçats, el text de qualsevol escriptura europea, ciríl·lica o grega s'imprimeix tal com és (el PDF porta les lletres que necessita, i encara podeu seleccionar i cercar el text). El text xinès, japonès i coreà també s'imprimeix tal com és (el traçat obté una font més gran la primera vegada que cal). El text àrab, persa, urdú i hebreu també s'imprimeix tal com és (vegeu la secció següent). Els caràcters que cap font no té lletra per a s'imprimeixen com a "?", i l'historial indica quants n'hi ha.

## Text de dreta a esquerra: àrab, persa, urdú, hebreu

Escriviu el text com ho faríeu en qualsevol altre lloc: {{cmd:TEXT}} i {{cmd:MTEXT}} dibuixen cada línia en ordre de lectura. Una línia que comença amb una lletra àrab o hebrea es llegeix de dreta a esquerra; els números i les paraules llatines que hi ha a dins mantenen el seu propi ordre d'esquerra a dreta, i les lletres d'escriptura àrab s'uneixen. Una línia que comença amb una lletra llatina es queda d'esquerra a dreta, amb les paraules de dreta a esquerra al seu lloc a dins. Cada paràgraf d'un text de diverses línies té la seva pròpia direcció, i un paràgraf ajustat la conserva a totes les línies.

El text es desa tal com l'heu escrit, de manera que els fitxers DWG i DXF l'intercanvien amb altres programes sense canvis. El punt d'inserció i la justificació ({{ui:Esquerra}}, {{ui:Centre}}, {{ui:Dreta}}) signifiquen el mateix costat que per a qualsevol text: una nota de dreta a esquerra que hagi de penjar del seu extrem dret necessita {{ui:Dreta}}.

A la pantalla, les lletres provenen de les fonts del vostre sistema. En un PDF traçat, l'hebreu fa servir la mateixa font incrustada que el text llatí; el text d'escriptura àrab fa que el traçat obtingui una font més (de menys d'1 MB, una sola vegada), i aleshores tot el PDF s'imprimeix amb aquesta font. Aquesta font no té forma pròpia per a tres caràcters urdús (heh goal, yeh barree i el punt complet urdú): s'imprimeixen amb la forma de la lletra àrab més propera. Un dibuix que té text d'escriptura àrab i text xinès, japonès o coreà n'imprimeix un dels dos com a "?", perquè un traçat porta una sola font. El text d'una font SHX carregada s'ordena i s'uneix quan la font té les lletres a les seves posicions Unicode; per a fonts antigues les lletres de les quals ja tenen forma, useu {{ui:Inverteix}} a {{cmd:SHXFONTS}} com abans.

## Errors habituals

- **El text és massa petit per veure'l.** L'alçada és en unitats de dibuix. En un dibuix gran, useu una alçada gran (vegeu més amunt), o feu zoom.
- **L'ordre ha acabat després d'una línia.** Heu premut {{key:Enter}} en una línia buida a {{cmd:TEXT}}. Torneu a iniciar-la, o useu text de paràgraf (`T`), on {{key:Enter}} comença un paràgraf nou.
- **`T` ha obert una caixa en lloc de demanar una línia.** Com a AutoCAD, `T` és text de paràgraf ({{cmd:MTEXT}}); el text d'una sola línia és `DT`.
- **El text s'ajusta en un altre lloc a AutoCAD.** CadCraft s'ajusta amb les amplades de Helvetica; una altra font pot fer que una paraula càpiga més o menys en una línia.
- **Text en una còpia mirallada.** Es col·loca mirallat, però es queda llegible d'esquerra a dreta.
