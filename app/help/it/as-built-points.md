---
title: Verificare i punti come costruito
summary: Leggere i punti misurati da una squadra di rilievo e confrontarli con i punti e i blocchi del disegno: entro o fuori tolleranza, non misurati, in eccesso, evidenziati nel disegno e riportati in un rapporto CSV.
keywords: come costruito, as built, asbuilt, rilievo, stazione totale, picchettamento, stake out, file di punti, csv, txt, pnezd, penzd, xyz, tolleranza, scostamento, verifica, confronta, exportpoints, punti di tracciamento
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) è la metà complementare di {{cmd:EXPORTPOINTS}}: si esportano i punti del disegno per il campo, la squadra li picchetta e misura ciò che è stato costruito, e ASBUILT confronta il loro file con il disegno.

1. Digitare {{cmd:ASBUILT}} e selezionare gli stessi punti e blocchi esportati (Invio prende tutti i POINT, come fa EXPORTPOINTS).
2. **Abbina i punti come costruiti per** **Numero** (la squadra ha mantenuto i numeri dei punti: indicare il primo numero esportato) oppure **Più vicino** (hanno numerato le proprie battute: ogni punto di progetto prende quello più vicino).
3. Indicare le unità e le coordinate del file così come le avete esportate (Disegno, Metri o Piedi; Globale o UCS), e la **tolleranza** in unità di disegno.
4. Scegliere il file CSV o TXT della squadra. CadCraft lo legge come lo legge CivilCraft: virgole, tabulazioni, punti e virgola o spazi, una riga di intestazione con i nomi delle colonne, oppure PNEZD in base al numero di colonne.

La riga di comando indica quanti punti sono stati abbinati, quanti sono entro la tolleranza, fuori, non misurati e in eccesso, e la distanza massima. **Evidenziarli nel disegno?** Sì li colloca sul layer **AS-BUILT** come un unico passo di annullamento: un punto per ogni battuta, il suo numero e la distanza accanto, e una linea rossa dal punto di progetto a ogni battuta fuori tolleranza. Viene scaricato un rapporto CSV con ogni punto: coordinate di progetto e come costruite, le differenze est, nord e in quota, e il risultato.

Vedere anche [Punti per i programmi BIM](topic:points-for-bim).
