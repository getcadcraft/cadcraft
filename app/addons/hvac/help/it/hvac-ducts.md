---
title: HVAC: disegno delle tratte di canale
summary: Disegnare tratte di canale rettangolari, circolari e ovali piatte sulla loro mezzeria; curve, transizioni, raccordi a T, derivazioni e diramazioni si creano da soli.
keywords: canale, tratta, mezzeria, curva, curva a raggio, curva a settori, transizione, riduzione, raccordo a T, derivazione, diramazione laterale, quota, fondo del canale
from: 56124011
---

## Disegnare una tratta

Digitare {{cmd:DUCT}} e fare clic sui punti della mezzeria della tratta. Mentre si fa clic, queste opzioni cambiano ciò che segue:

- {{ui:Forma}} — rettangolare, circolare o ovale piatto (un ovale piatto giace con i lati piatti in alto e in basso).
- {{ui:Dimensione}} — larghezza × altezza (`24x12`, `600x300`) oppure un diametro (`14`). Le sezioni successive la ricevono; un cambio di dimensione crea una transizione.
- {{ui:Portata}} — la portata della sezione; il componente la dimensiona a parità di perdita per attrito (vedi [Dimensionamento dei canali](topic:hvac-sizing)).
- {{ui:Quota}} — il fondo del canale, prima del primo punto (9 ft o 2700 mm, salvo modifica in {{ui:Impostazioni}}).
- {{ui:Sistema}} — mandata, ripresa, espulsione, aria esterna o altro. Ognuno ha il suo layer (`M-HVAC-SUPP`, `M-HVAC-RETN`, `M-HVAC-EXHS`, `M-HVAC-OAIR`, `M-HVAC-DUCT`) e il suo colore nella scheda {{ui:3D}}.
- {{ui:Etichetta}} — un nome come `S-1`, usato dall'abaco e dalla scheda 3D.
- {{ui:Annulla}} — riprende l'ultimo punto.

Una tratta contiene fino a 100 punti; per averne di più, iniziare un'altra tratta dal suo ultimo punto.

## Gli accessori creati

- **Curve** a ogni angolo. Il raggio della mezzeria di una curva a raggio è la larghezza del canale per il rapporto della tratta (1 per il rettangolare, 1.5 per il circolare e l'ovale piatto, come è d'uso; modificarlo in {{ui:Proprietà}}). Una curva a settori ha la gola quadrata e una linea di taglio; sceglierla in {{ui:Impostazioni}} o {{ui:Proprietà}}.
- **Transizioni** dove cambiano dimensione o forma, subito dopo l'angolo (dopo la sua curva). Ogni lato ha una pendenza massima di 15° (valore predefinito usato dal componente, non un valore di norma), e nessuna è più corta di 6 in o 150 mm. Da circolare a circolare si chiama riduzione. Il fondo resta piatto; la parte superiore fa un gradino.
- **Diramazioni**: iniziare una tratta dentro un'altra, oppure terminarla dentro una, e il punto si sposta sulla mezzeria di quella tratta. La diramazione viene tagliata fino al lato della principale, riceve un collare da 2 in o 50 mm, e la principale riceve un'apertura in quel punto. Una diramazione circolare o ovale piatta è una derivazione; una rettangolare è un raccordo a T quando incontra la principale a squadra (entro 15°) e una diramazione laterale altrimenti.

## Modificare una tratta

- Trascinare il grip di un punto per spostarlo; i raccordi lo seguono.
- {{ui:Proprietà}} › {{ui:Tratta di canale}}: etichetta, sistema, forma, dimensione (dell'intera tratta), fondo del canale, curve, rapporto del raggio, materiale ed etichette delle dimensioni.
- {{cmd:DUCTSIZE}}: scegliere una sezione, poi dimensionarla dalla sua portata, digitare una dimensione o cambiarne la forma — per quella sezione o per l'intera tratta.
- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:COPY}} e {{cmd:ERASE}} funzionano come per qualsiasi oggetto. Una copia riceve una propria identità. Una diramazione la cui principale si allontana non è più collegata: disegnarla di nuovo sulla principale.
