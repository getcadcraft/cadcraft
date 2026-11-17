---
title: Copiere, lipire și duplicare
summary: Copiați obiecte în clipboardul CadCraft, lipiți-le acolo unde faceți clic sau în aceeași poziție, duplicați cu indicatorul și aduceți lucrul dintr-un alt desen sau dintr-o altă filă.
keywords: copiere, copy, decupare, lipire, lipire în aceeași poziție, duplicare, clipboard, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, între desene, altă filă, punct de bază
from: 4b9f29d3
---

## Ce veți învăța

Cum copiați obiecte în clipboard și le lipiți acolo unde faceți clic, le lipiți la propriile coordonate, le duplicați cu indicatorul, le decupați și le duceți într-un alt desen. Totul de aici se află și în grupul {{ui:Editare}} din bara de instrumente: {{ui:Copiere}}, {{ui:Lipire}} și meniul {{ui:Mai multe}}.

## Copiați și lipiți acolo unde faceți clic

1. Selectați obiectele: faceți clic pe ele sau trageți o fereastră.
2. Apăsați {{key:Mod+C}} sau faceți clic pe {{ui:Copiere}} din grupul {{ui:Editare}}. Linia de comandă spune câte obiecte au fost copiate. Ele rămân selectate.
3. Apăsați {{key:Mod+V}} sau faceți clic pe {{ui:Lipire}}. Copia apare sub cursor, atârnând de colțul din stânga-jos al obiectelor copiate.
4. Faceți clic unde trebuie să ajungă acel colț sau tastați un punct, de exemplu `2000,500`, și apăsați {{key:Enter}}. Agățările de obiecte și Ortogonal funcționează ca de obicei.

Obiectele lipite sunt selectate, deci le puteți muta sau modifica imediat. Un {{key:Mod+Z}} înlătură toată lipirea.

:::tip
Doriți ca o copie să atârne de un punct ales, de exemplu colțul unui perete? Tastați `COPYBASE`, faceți clic pe punctul de bază, selectați obiectele și apăsați {{key:Enter}}. Lipirea plasează atunci acel punct acolo unde faceți clic. Ca fiecare copie să atârne de centrul ei în loc de colțul din stânga-jos, schimbați {{ui:Punct de lipire}} în [Setările CadCraft](topic:settings).
:::

## Lipire în aceeași poziție

Apăsați {{key:Mod+Shift+V}} sau alegeți {{ui:Lipire în aceeași poziție}} din meniul {{ui:Mai multe}}. Copia intră exact la coordonatele de unde a fost copiată, fără niciun clic. Folosiți-o ca să duceți obiecte într-un alt desen, în același loc, sau de pe o foaie pe alta.

## Duplicare și mutare

1. Selectați obiectele.
2. Apăsați {{key:Mod+D}} sau alegeți {{ui:Duplicare și mutare}} din meniul {{ui:Mai multe}}.
3. O copie stă peste original și se mișcă odată cu indicatorul. Faceți clic unde trebuie să ajungă. Puteți tasta și o deplasare, de exemplu `@0,-600`, sau o distanță spre cursor.

{{key:Esc}} înainte de clic nu lasă nimic în urmă. Duplicatul este un singur pas de anulare și nu atinge clipboardul.

## Decupare

Apăsați {{key:Mod+X}} sau alegeți {{ui:Decupare}} din meniul {{ui:Mai multe}}. Obiectele ajung în clipboard și sunt șterse din desen, într-un singur pas de anulare. Lipiți-le înapoi cu {{key:Mod+V}} sau {{key:Mod+Shift+V}}.

## Între desene și file

Clipboardul își păstrează copia când deschideți alt desen și este partajat de fiecare filă CadCraft din acest browser. Copiați într-o filă, apoi apăsați {{key:Mod+V}} în alta.

- Blocurile folosite de obiecte vin odată cu ele. Dacă desenul în care lipiți are deja un bloc cu același nume, se folosește definiția lui, ca în AutoCAD.
- Straturile folosite de obiecte se adaugă, cu culoarea și setările pe care le aveau.
- Copia nu se rescalează când cele două desene folosesc unități diferite: CadCraft o spune, iar după aceea puteți folosi {{cmd:SCALE}}.
- Ferestrele de vizualizare rămân pe foaia lor; ele sunt excluse din copie.

:::note
Clipboardul este propriul clipboard al CadCraft. Nu puteți lipi obiecte CadCraft în alt program și nici lipi din alt program în CadCraft: salvați ca DWG sau DXF. O copie foarte mare poate fi prea mare ca să fie partajată între file; linia de comandă spune atunci că doar această filă o poate lipi.
:::

## Greșeli frecvente

- **{{key:Mod+V}} a lipit text în linia de comandă.** Tastaseți ceva acolo, deci tastele au lucrat asupra textului. Apăsați {{key:Esc}} ca să îl ștergeți, apoi apăsați din nou {{key:Mod+V}}.
- **Nu s-a întâmplat nimic, iar bara de stare cere să terminați comanda curentă.** Rulează altă comandă. Apăsați întâi {{key:Esc}}.
- **Lipirea a ajuns departe.** Atârnă de colțul din stânga-jos al ceea ce ați copiat, care poate fi un obiect îndepărtat selectat din greșeală. Folosiți {{ui:Lipire în aceeași poziție}} sau copiați cu `COPYBASE`.
- **„Nimic lipit” cu un motiv.** Ce a lăsat o altă filă în clipboard nu a putut fi citit (era deteriorat sau modificat manual). Copiați din nou obiectele.

Lista completă a tastelor este în [Tastatură și mouse](topic:keyboard), iar fiecare solicitare în [Referința comenzilor](topic:commands#clipboard).
