---
title: Comprovar els punts replantejats
summary: Llegir els punts que ha mesurat una brigada topogràfica i comparar-los amb els punts i blocs del dibuix: dins o fora d'una tolerància, no mesurats, sobrants; marcats al dibuix i escrits en un informe CSV.
keywords: as built, as-built, asbuilt, topografia, estació total, replanteig, fitxer de punts, csv, txt, pnezd, penzd, xyz, tolerància, desviació, comprovar, comparar, exportpoints, punts de replanteig
from: f7c35208
---

{{cmd:ASBUILT}} (àlies ASB) és l'altra meitat de {{cmd:EXPORTPOINTS}}: exporteu els punts del dibuix per al camp, la brigada els replanteja i mesura el que s'ha construït, i ASBUILT compara el seu fitxer amb el dibuix.

1. Escriviu {{cmd:ASBUILT}} i seleccioneu els mateixos punts i blocs que vau exportar ({{key:Enter}} pren tots els POINT, com fa EXPORTPOINTS).
2. **Aparella els punts replantejats per** **Número** (la brigada va conservar els números de punt: indiqueu el primer número que vau exportar) o **Més proper** (ells van numerar les seves pròpies mesures: cada punt de projecte pren el més proper).
3. Indiqueu les unitats i les coordenades del fitxer tal com les vau exportar (Dibuix, Metres o Peus; Món o SCP), i la **tolerància** en unitats del dibuix.
4. Trieu el fitxer CSV o TXT de la brigada. CadCraft el llegeix com ho fa CivilCraft: comes, tabuladors, punts i coma o espais, una fila de capçalera que indica les seves columnes, o PNEZD pel nombre de columnes.

La línia d'ordres indica quants punts s'han aparellat, quants són dins de la tolerància, fora, no mesurats i sobrants, i la distància més gran. **Marcar-los al dibuix?** Sí els posa a la capa **AS-BUILT** com un sol pas per desfer: un punt a cada mesura, amb el seu número i distància al costat, i una línia vermella des del punt de projecte fins a cada mesura fora de la tolerància. Es baixa un informe CSV amb tots els punts: coordenades de projecte i replantejades, les diferències est, nord i en alçada, i el resultat.

Vegeu també [Punts per a programes BIM](topic:points-for-bim).
