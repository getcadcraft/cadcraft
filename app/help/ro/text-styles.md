---
title: Setarea fontului și a dimensiunii textului cu stiluri de text
summary: Creați stiluri de text cu nume, cu font, înălțime, lățime și înclinare, setați unul curent pentru text nou și schimbați un stil ca să schimbați tot textul care îl folosește.
keywords: stil de text, stil, STYLE, ST, TEXTSTYLE, -STYLE, font, înălțime text, factor de lățime, oblic, înclinare, schimbare font, stil standard, aplicare stil, DDSTYLE
from: bd5a4883
---

## Ce veți face

Creați un stil de text numit `Notes`, cu propriul font și înălțime, folosiți-l pentru text nou și apoi schimbați stilul, ca fiecare notă care îl folosește să se schimbe deodată.

## Pași

1. Tastați {{cmd:STYLE}} (`ST`) și apăsați {{key:Enter}}, sau faceți clic pe {{ui:Stil de text}} din bara {{ui:Desen}}. Caseta {{ui:Stil de text}} listează stilurile din desen. Fiecare desen are `Standard`.
2. Faceți clic pe {{ui:Nou…}}, tastați `Notes` ca nume al noului stil și faceți clic pe {{ui:OK}}. Bara de stare spune „Stilul de text Notes creat și setat ca curent.”
3. La {{ui:Font}}, alegeți sau tastați un nume de font. Setați {{ui:Înălțime (0 = se cere de fiecare dată)}} la un număr, de exemplu `2.5`, ca fiecare text nou să aibă acea înălțime. Lăsați `0` ca aplicația să ceară înălțimea de fiecare dată.
4. Setați {{ui:Factor de lățime}} și {{ui:Unghi de înclinare (°)}} dacă doriți litere mai înguste, mai late sau înclinate. Linia-eșantion arată rezultatul.
5. Faceți clic pe {{ui:Închidere}}. Desenați text cu {{cmd:TEXT}} sau {{cmd:MTEXT}}: textul nou ia stilul curent.
6. Ca să folosiți un stil deja creat, deschideți din nou caseta, alegeți-l în listă și faceți clic pe {{ui:Setare curentă}}.
7. Ca să puneți un stil pe text deja desenat, selectați textul, deschideți caseta, alegeți stilul și faceți clic pe {{ui:Aplicare la textul selectat}}.

## Schimbați un stil mai târziu

Schimbați fontul, înălțimea, lățimea sau înclinarea unui stil în caseta de dialog și fiecare text care îl folosește urmează, într-un singur pas de anulare ({{key:Mod+Z}}). Bara de stare spune câte texte au urmat.

## Note

- {{ui:Ștergere}} refuză `Standard` și un stil pe care îl mai folosește un text: schimbați întâi acel text pe alt stil.
- Stilurile sunt salvate în tabelul STYLE al desenului, deci fișierele DXF și DWG le păstrează.
- În linia de comandă, `-STYLE` face același lucru cu opțiuni (Current, New, Font, Height, Width, Oblique, Delete, List).
- Un font care nu există pe calculatorul care citește desenul este afișat cu alt aspect.
