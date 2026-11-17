---
title: Comprova en quines unitats està un dibuix
summary: Mira si un dibuix obert està en mil·límetres, polzades o una altra unitat, comprova-ho mesurant i saps per què un altre programa pot indicar unitats diferents per al mateix DXF.
keywords: unitats, quines unitats, quines unitats, comprova unitats, mil·límetres, mm, polzades, mètric, imperial, unitats DXF, STEP a DXF, unitats incorrectes, polzades o mm, INSUNITS, MEASUREMENT, unitats del dibuix, PartCraft DXF
from: c0ee75bb
---

## Què faràs

Esbrinar què representa una unitat en un dibuix obert, i assegurar-te que els números que llegeixes tenen la mida que esperes.

## Passos

1. Obre el dibuix i prem {{key:Esc}} perquè no hi hagi res seleccionat, a la pestanya {{ui:Model}}.
2. Al tauler de la dreta, sota {{ui:Configuració actual}}, llegeix {{ui:Unitats}}. Indica què representa una unitat del dibuix: {{ui:Mil·límetres}}, {{ui:Polzades}}, {{ui:Peus}} i així successivament. Un DXF desat des de PartCraft indica {{ui:Mil·límetres}}.
3. Comprova-ho mesurant alguna cosa de la qual coneixes la mida. Escriu {{cmd:DIST}} i tria els dos extrems d'una aresta o d'un forat. Si una peça que coneixes de 25 mm surt com a `25`, el dibuix és en mil·límetres; si surt amb un valor aproximat de `0.98`, és en polzades.

{{ui:Sense unitats}} vol dir que el fitxer no ho indica. Aleshores CadCraft ho tracta com la unitat del paper (mil·límetres en paper ISO, polzades en paper US), i els números només són tan correctes com ho sigui el programa que els va escriure.

## Si les unitats són incorrectes

Canviar {{ui:Unitats}} **no redimensiona res**: els números es mantenen igual i només canvia el que signifiquen. Per tant, configura-ho només per indicar el que el dibuix és realment. Si els números són en mil·límetres i {{ui:Unitats}} diu {{ui:Polzades}}, tria {{ui:Mil·límetres}}. Si necessites la geometria en altres unitats, escala-la amb {{cmd:SCALE}} (25.4 per passar de polzades a mil·límetres, 1/25.4 a la inversa) i després configura {{ui:Unitats}}.

Com s'escriuen les longituds (decimal, peus i polzades, fraccions) és una altra configuració, {{ui:Format de longitud}}: consulta [Unitats, mides de paper i escales](topic:units-papers-scales).

## Per què un altre programa pot indicar polzades

Un DXF indica les seves unitats a la capçalera. El DXF més antic, R12, no tenia cap variable d'unitats, així que un programa que llegeix R12 de manera estricta ignora la que hi ha escrita i usa el seu valor per defecte, que sovint són polzades. La geometria del fitxer és la mateixa en tots dos casos: només canvia l'etiqueta. PartCraft desa els seus DXF com a R12 i indica mil·límetres de dues maneres (`$INSUNITS` 4 i `$MEASUREMENT` 1) perquè més programes els llegeixin bé. Si un programa continua indicant polzades, configura les seves unitats a mil·límetres en obrir el fitxer.

Portar un fitxer dins d'un dibuix (en lloc d'obrir-lo) converteix les seves unitats: consulta [Unitats en importar](topic:units-on-import).
