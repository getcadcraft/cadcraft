---
title: HVAC: dimensionamento dei canali
summary: Dimensionamento dei canali a parità di perdita per attrito a partire dalla portata, le formule usate dal componente e la loro origine, e il calcolatore dei canali.
keywords: dimensionamento, perdita costante, perdita per attrito, portata, cfm, velocità, colebrook, darcy, diametro equivalente, huebscher, ovale piatto, ashrae, calcolatore
from: c739aec8
---

## Perdita costante

Ogni sezione è dimensionata per la stessa perdita di pressione per unità di lunghezza — la perdita per attrito. Impostarla in {{ui:Impostazioni}} › {{ui:CadCraft}} › {{ui:HVAC}}: 0.1 in. w.g. ogni 100 ft oppure 0.8 Pa/m come punto di partenza (una perdita di partenza comune, non una regola). Assegnare a una sezione la sua portata ({{cmd:DUCT}} › {{ui:Portata}}, oppure {{cmd:DUCTSIZE}}) e il componente:

1. trova il diametro circolare che perde esattamente quella perdita a quella portata;
2. lo arrotonda **per eccesso** a una dimensione commerciale, così che il canale non perda più della perdita prevista: canali circolari a passi di 1 in fino a 10 in, poi a passi di 2 in; metrici 63, 80, 100, 125, 160, 200, 250, 315, 355, 400 mm e oltre;
3. per un canale rettangolare o ovale piatto, mantiene l'altezza impostata (12 in o 300 mm, salvo modifica) e allarga a passi di 2 in o 50 mm finché il diametro equivalente non è almeno quello circolare.

Riporta poi la dimensione, la velocità e la perdita per attrito effettive. Un canale rettangolare con lati di rapporto superiore a 4 a 1 viene segnalato.

## Le formule

Il metodo e i valori sono quelli pubblici del capitolo sulla progettazione dei canali dell'ASHRAE Handbook—Fundamentals (2021):

- Perdita per attrito (Darcy–Weisbach): Δp/L = (f / D) × ρV²/2.
- Il fattore di attrito dall'equazione di Colebrook: 1/√f = −2 log₁₀(ε / 3.7D + 2.51 / (Re √f)), risolta per iterazione.
- Aria standard: densità 1.204 kg/m³ e viscosità cinematica 1.51 × 10⁻⁵ m²/s (20 °C, livello del mare); Re = V × D / ν.
- Rugosità: liscia 0.03 mm (alluminio, PVC, acciaio inox), medio-liscia 0.09 mm (acciaio zincato), medio-ruvida 0.9 mm (pannello di fibra di vetro), ruvida 3.0 mm (canale flessibile, completamente esteso). Scegliere il materiale in {{ui:Impostazioni}} o {{ui:Proprietà}}.
- Canali rettangolari: il diametro circolare equivalente per la stessa perdita e portata, Huebscher (1948): De = 1.30 (a × b)^0.625 / (a + b)^0.25.
- Canali ovali piatti: Heyt e Diaz (1975): De = 1.55 A^0.625 / P^0.25, con A = πb²/4 + b(a − b) e P = πb + 2(a − b).

Esempi svolti sui quali il componente è collaudato: 1000 cfm in un canale circolare da 12 in si muovono a 1273 fpm e perdono 0.189 in. w.g. ogni 100 ft; 24 × 12 in equivale a 18.3 in circolari; 1000 cfm a 0.1 in. w.g. ogni 100 ft richiedono esattamente 13.66 in, quindi 14 in circolari o 14 × 12 in rettangolari.

## Il calcolatore dei canali

{{cmd:DUCTCALC}} chiede una portata e una perdita per attrito ed elenca il diametro circolare esatto, poi le dimensioni commerciali circolari, rettangolari e ovali piatte con la loro velocità e il loro attrito. Non modifica nulla nel disegno.

## Cosa non fa il dimensionamento

Non somma le perdite nei raccordi, non bilancia le diramazioni e non verifica il ventilatore: dimensiona ogni sezione da sola in base alla perdita per attrito. Verificare le velocità rispetto ai limiti di rumore del progetto.
