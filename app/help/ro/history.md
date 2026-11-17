---
title: Istoric: versiuni și modificări
summary: Vedeți versiunile unui desen (copiile pe care Studio le păstrează la salvare și cele din cloud), deschideți sau restaurați una și comparați două, cu modificările arătate în culoare.
keywords: istoric, versiuni, istoric versiuni, restaurare, versiune anterioară, anulare salvare, comparare, comparare desene, dwgcompare, modificări, adăugat, eliminat, modificat, instantaneu, copie de rezervă, versiuni din cloud
from: 141d37b3
---

## Ce veți face

O privire asupra unei versiuni mai vechi a unui desen și o listă cu ce este diferit față de acum: ce a fost adăugat, ce a fost eliminat și ce s-a modificat, marcat cu culori pe desen.

## Deschiderea Istoricului

Tastați `HISTORY` (sau `HIST`) și apăsați {{key:Enter}}, sau alegeți {{ui:Istoric…}} din meniul {{ui:Mai multe}} al grupului {{ui:Vizualizare}}. Panoul se deschide lângă desen și rămâne deschis cât lucrați, așa că desenul poate fi deplasat și mărit cu culorile de pe el.

Istoricul funcționează în CadCraft Studio. Într-un browser, panoul doar o spune.

## De unde vin versiunile

- **Pe acest computer.** De fiecare dată când un desen este deschis dintr-un fișier în Studio și de fiecare dată când este salvat, Studio păstrează o copie a fișierului în propriul spațiu de stocare de pe acest computer. Prima copie este {{ui:Ca deschisă}}: fișierul așa cum era înainte de prima salvare peste el. Studio păstrează cele mai noi 25 de copii ale fiecărui desen, iar cele mai vechi pleacă întâi când toate copiile la un loc depășesc 400 MB. O salvare care nu schimbă nimic nu păstrează nimic. Nimic nu este încărcat.
- **În cloud.** Când se deschide un desen din fișierele din cloud în Studio, panoul listează și {{ui:În cloud}}: fiecare versiune pe care o ține cloud-ul, cu numărul ei, cine a salvat-o și nota. Panoul doar le citește. CadCraft nu trimite încă propriile salvări în cloud, deci acestea sunt versiunile salvate de pe alte dispozitive și din web. Conectați-vă din nou în Studio dacă spune că sesiunea de conectare a expirat.

Un desen care nu a fost salvat încă nu are copii: salvați-l mai întâi.

## Deschiderea sau restaurarea unei versiuni

- {{ui:Deschidere}} pune versiunea aceea într-un tab propriu. Desenul nu este atins.
- {{ui:Restaurare}} înlocuiește acest desen cu versiunea respectivă. Întreabă mai întâi. Studio păstrează o copie a desenului așa cum este acum în Istoric (marcată {{ui:Înainte de o restaurare}}) înainte de a face asta, iar nimic nu se scrie în fișier până nu se salvează. O restaurare nu poate fi anulată cu {{key:Mod+Z}}; folosiți acea copie.

## Comparare

1. Faceți clic pe {{ui:Comparare}} la o versiune. Este comparată cu {{ui:Desenul așa cum este acum}}; ca să o comparați cu altă versiune, alegeți mai întâi pe aceasta în {{ui:Comparare cu}}.
2. Citiți rezultatul de sub listă: câte obiecte au fost adăugate, eliminate și modificate, și lista lor. Faceți clic pe un element din listă ca să mutați vederea la el.
3. Pe desen:
   - obiectele **verzi** au fost adăugate,
   - obiectele **roșii** au fost eliminate (există doar în versiunea mai veche),
   - obiectele **portocalii** s-au modificat: forma nouă este continuă, iar cea veche este punctată.
4. {{ui:Afișare pe desen}} pornește și oprește culorile; {{ui:Ștergeți culorile}} înlătură rezultatul. Închiderea panoului le șterge și pe ele.

Lista spune ce s-a schimbat la un obiect modificat: textul său, faptul că s-a mutat, forma sa, stratul, culoarea, tipul liniei sau grosimea liniei. Fiecare foaie este comparată separat; culorile apar pe foaia deschisă.

:::note
Un desen nu are un număr permanent pentru fiecare obiect, deci CadCraft potrivește obiectele după ceea ce sunt: același obiect în ambele părți este nemodificat; un obiect de același tip și strat, aflat în limitele propriei dimensiuni ale unui obiect vechi, este același obiect, modificat; ce rămâne este adăugat sau eliminat. Un obiect mutat departe de locul lui apare ca eliminat într-un loc și adăugat în altul. O referință la bloc contează conținutul blocului său.
:::

## Greșeli frecvente

- **„Nu există încă copii.”** Studio păstrează o copie la fiecare deschidere și salvare a unui desen care are un fișier pe acest computer. Un desen deschis dintr-un tab de browser sau care nu a fost niciodată salvat nu are niciuna.
- **Lista din cloud lipsește.** Apare pentru un desen deschis din cloud în Studio; un fișier deschis de pe disc nu este un desen din cloud.
- **Totul pare modificat.** Două versiuni salvate de programe diferite scriu același desen în moduri diferite (nume ale blocurilor anonime, rotunjiri). Comparați versiuni salvate de CadCraft.
