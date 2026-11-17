---
title: Adăugarea textului și a etichetelor
summary: Plasați etichete de cameră cu text dintr-un singur rând, scrieți note încadrate cu text de paragraf tastat direct pe desen și editați textul ulterior.
keywords: text, dtext, mtext, mleader, multileader, leader, revcloud, revision cloud, nor, găsire, înlocuire, găsire și înlocuire, paragraf, încadrare, interlinie, etichetă, notă, adnotare, înălțime, aliniere, textmask, mască de fundal, mască, mascare, rotire, editare text, ddedit, textedit, font
from: 4b76be99
---

## Ce veți realiza

Două etichete de cameră, centrate în încăperile lor, o notă care se încadrează la lățimea ei, apoi o corectare a uneia dintre etichete.

## Înălțimea textului și scara desenului

Înălțimea textului se exprimă în unități de desen. Într-un desen în milimetri care va fi trasat la 1:50, un text înalt de 2,5 mm pe hârtie trebuie să aibă 2,5 × 50 = 125 de unități în model. Pe o filă de foaie, desenați în unități de hârtie, deci 2.5 acolo înseamnă 2,5 mm pe hârtie.

## Plasarea unei etichete centrate

1. Tastați `DT` și apăsați {{key:Enter}} (sau faceți clic pe {{ui:Text}} din bara de instrumente). Promptul citește `Specify start point of text [Justify]:`.
2. Tastați `J` și apăsați {{key:Enter}}.
3. La `Enter an option [Left/Center/Right/Middle/TL/MC] <L>:`, tastați `MC` și apăsați {{key:Enter}}.
4. La `Specify insertion point of text`, faceți clic pe mijlocul unei camere.
5. La `Specify height`, tastați `250` și apăsați {{key:Enter}}.
6. La `Specify rotation angle of text <0>`, apăsați {{key:Enter}}.
7. La `Enter text`, tastați `KITCHEN` și apăsați {{key:Enter}}.

Eticheta apare, centrată pe punctul pe care ați făcut clic.

8. Apăsați {{key:Enter}} la promptul gol `Enter text` pentru a încheia comanda.

## Scrierea unei note care se încadrează

Textul de paragraf ({{cmd:MTEXT}}) se încadrează la o lățime și se tastează direct pe desen.

1. Tastați `T` și apăsați {{key:Enter}}, sau faceți clic pe {{ui:Paragraph}} din bara de instrumente.
2. La `Specify first corner`, faceți clic unde trebuie să fie colțul stânga-sus al notei.
3. Pentru a schimba mai întâi înălțimea, tastați `H`, apăsați {{key:Enter}}, tastați `250` și apăsați {{key:Enter}}.
4. La `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`, faceți clic spre dreapta primului colț. Distanța pe orizontală este lățimea la care se încadrează textul; cât de jos coborâți nu o limitează.
5. Se deschide o casetă peste desen, cu cursorul în ea. Tastați `ALL DIMENSIONS ARE IN MILLIMETERS UNLESS NOTED`. Cuvintele se încadrează la lățime pe măsură ce tastați.
6. Apăsați {{key:Enter}} pentru a începe un nou paragraf și tastați `CHECK ON SITE`.
7. Apăsați {{key:Mod+Enter}}, faceți clic pe {{ui:OK}} sau faceți clic oriunde în afara casetei. Nota este un singur obiect.

Bara de deasupra casetei modifică {{ui:Înălțime}}, {{ui:Interlinie}} (1 este normal, 1,5 înseamnă cu jumătate mai mult), {{ui:Lățime}} (0 = fără încadrare) și {{ui:Aliniere}} pe măsură ce tastați. {{key:Esc}} sau {{ui:Anulare}} închide caseta fără să adauge nimic.

Opțiunile din al doilea colț: `H` înălțime, `J` aliniere (`TL` stânga-sus … `BR` dreapta-jos: colțul sau mijlocul casetei care rămâne pe loc), `L` interlinie, `R` rotire, `W` o lățime tastată în locul celui de-al doilea colț.

:::note
Cât timp caseta este deschisă, {{key:Space}} tastează un spațiu, iar {{key:Enter}} începe un nou paragraf. Un DWG salvat păstrează textul de paragraf ca MTEXT; un DXF R12 nu are text de paragraf, deci fiecare rând se salvează ca text separat.
:::

### Mai multe rânduri simple în loc

{{cmd:TEXT}} (`DT`) cere câte un rând pe rând: fiecare {{key:Enter}} începe rândul următor, cu de 1,667 de ori înălțimea textului mai jos, iar fiecare rând este un obiect propriu. Apăsați {{key:Enter}} pe un rând gol pentru a încheia.

## Opțiunile de aliniere

| Opțiune | Punctul pe care faceți clic este |
|---|---|
| Stânga (implicit) | Capătul stâng al liniei de bază |
| Centru | Mijlocul liniei de bază |
| Dreapta | Capătul drept al liniei de bază |
| Mijloc, MC | Mijlocul textului, atât pe orizontală, cât și pe verticală |
| TL | Colțul stânga-sus |

## Editarea textului

1. Faceți dublu clic pe un obiect text. Se deschide în aceeași casetă ca un text de paragraf nou, cu cursorul la sfârșit.
2. Modificați cuvintele.
3. Apăsați {{key:Mod+Enter}} sau faceți clic în afara casetei. Textul de pe desen se schimbă; {{key:Esc}} îl lasă cum era.

{{cmd:TEXTEDIT}} (`ED`) face același lucru: alegeți un text după altul și apăsați {{key:Enter}} când ați terminat.

Pentru a modifica un text din panoul din dreapta, selectați-l: {{ui:Text}}, {{ui:Înălțime}}, {{ui:Lățime de încadrare}} (0 = fără încadrare), {{ui:Interlinie}}, {{ui:Rotire}}, poziția X și Y și {{ui:Aliniere}}. Lista {{ui:Aliniere}} oferă și Stânga jos, pe care îl folosește uneori textul din alte programe.

## Formatarea din textul de paragraf al altor programe

Textul de paragraf dintr-un DWG sau DXF poate conține coduri în interiorul lui: culori pe cuvinte, litere îngroșate și cursive, subliniere, supraliniere și tăiere, fracții suprapuse precum 1/2 și o altă înălțime pentru un cuvânt. CadCraft păstrează aceste coduri, le desenează (pe ecran și în PDF-ul trasat) și le salvează înapoi neschimbate.

Când modificați un astfel de text (dublu clic, {{cmd:TEXTEDIT}}, câmpul Text din panoul din dreapta sau {{cmd:FIND}} cu înlocuire), modificați cuvintele sale simple. Un cuvânt pe care îl tastați intră în segmentul de lângă el și preia culoarea și stilul acestuia; celelalte coduri rămân unde sunt. Dacă rescrieți numerele unei fracții suprapuse, fracția devine text simplu. Setarea întregului text din câmpul Text păstrează codurile doar acolo unde se poate ști ce cuvinte au rămas.

Numele fonturilor (`\F`) sunt păstrate și salvate, dar totul se desenează cu un singur font de tip Helvetica. Nu există încă o bară de instrumente pentru tastarea codurilor.

## Indicarea unui element: linii de indicație multiple

{{ui:Leader}} din grupul {{ui:Annotate}} ({{cmd:MLEADER}}, `MLD`) desenează o săgeată, o linie de indicație, un palier scurt și o notă, ca un singur obiect.

1. Faceți clic pe {{ui:Leader}}. La `Specify leader arrowhead location`, faceți clic pe ceea ce privește nota.
2. La `Specify leader landing location`, faceți clic unde trebuie să fie nota. Paleierul se întoarce spre partea pe care ați făcut clic.
3. Tastați nota în caseta care se deschide și apăsați {{key:Mod+Enter}}.

`A` și `L` la prima întrebare stabilesc dimensiunea săgeții și lungimea paleierului; înălțimea textului vine din {{ui:Înălțime text}} pentru cote noi, înmulțită cu {{ui:Scară generală}}. Faceți dublu clic pe o linie de indicație multiplă pentru a-i modifica cuvintele. Mânerele mută săgeata și paleierul; nota urmează paleierul. În {{ui:Proprietăți}}: {{ui:Text}}, {{ui:Înălțime}}, {{ui:Lățime de încadrare}}, {{ui:Dimensiune vârf de săgeată}} și {{ui:Distanță de palier}}.

:::note
Liniile de indicație multiple se salvează ca linii de indicație reale în DWG. DXF nu are linie de indicație multiplă în R12 sau 2000, deci acolo se salvează ca liniile, săgeata și textul pe care le desenează.
:::

## Marcarea modificărilor cu un nor de revizuire

{{ui:Annotate}} › {{ui:More}} › {{ui:Revision cloud}} ({{cmd:REVCLOUD}}, `RC`) desenează un nor de arce în jurul a ceea ce s-a schimbat. Istoricul arată lungimea arcului și tipul pe care îl va folosi.

- **Dreptunghiular** (prima dată): faceți clic pe două colțuri.
- `P` **Poligonal**: faceți clic pe colțuri; {{key:Enter}} închide norul.
- `F` **Mână liberă**: faceți clic unde începe și mutați indicatorul în jurul zonei, fără să faceți clic; se adaugă un arc la fiecare lungime de arc. Faceți clic sau apăsați {{key:Enter}} pentru a-l închide.
- `O` **Obiect**: alegeți o polilinie închisă, un cerc sau o elipsă (sau o linie, un arc ori o polilinie deschisă); aceasta devine norul. `Reverse direction?` `Y` întoarce arcele spre interior.
- `A` **Lungimea arcului**: lungimea fiecărui arc. Alegeți una potrivită pentru scara trasării.

Norul este o polilinie închisă de arce, deci se salvează în orice format.

## Găsirea și înlocuirea cuvintelor

{{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}} ({{cmd:FIND}}) caută în text, în valorile atributelor blocurilor și în textul cotelor din fila deschisă (sau doar în obiectele selectate).

1. Tastați cuvintele în {{ui:Find}}. Lista arată fiecare loc în care apar și numărul lor.
2. Alegeți {{ui:Match case}}, {{ui:Whole words only}} sau {{ui:Use wildcards (* and ?)}} dacă aveți nevoie și debifați ce nu trebuie căutat.
3. Faceți clic pe {{ui:Select found}} pentru a selecta acele obiecte, sau tastați cuvintele noi în {{ui:Replace with}} (lista arată ce devine fiecare) și faceți clic pe {{ui:Replace all}}. Un singur {{key:Mod+Z}} anulează toate înlocuirile.

Valoarea măsurată a unei cote nu este text, deci nu se înlocuiește niciodată: în `<> TYP.`, poate fi înlocuit doar `TYP.`.

## Ascunderea liniilor din spatele unei etichete

1. Selectați textele, tastați {{cmd:TEXTMASK}} și apăsați {{key:Enter}}.
2. `B` pictează fundalul desenului în spatele lor; `C` cere un număr de culoare. `O` înlătură masca.
3. `Border offset factor`: {{key:Enter}} păstrează 1,5, adică o jumătate de înălțime de text în jurul textului.

Masca acoperă liniile de sub text, pe ecran și la trasare. DWG 2004 sau mai nou și DXF 2000 o păstrează; formatul DWG 2000 și DXF R12 nu pot, iar salvarea o spune.

## Font

Tot textul se desenează cu un font de tip Helvetica, pe ecran și în PDF-uri. Textul din desenele deschise își păstrează cuvintele, înălțimea și poziția, dar nu și fontul original (numele unui font din textul de paragraf se păstrează în fișier, vezi mai sus).

În PDF-urile trasate, textul în orice scriere europeană, chirilică sau greacă se tipărește ca atare (PDF-ul conține literele de care are nevoie, iar textul poate fi în continuare selectat și căutat). Textul în chineză, japoneză și coreeană se tipărește și el ca atare (trasarea descarcă un font mai mare prima dată când este nevoie). Textul în arabă, persană, urdu și ebraică se tipărește la fel (vezi secțiunea următoare). Caracterele pentru care niciun font nu are literă se tipăresc ca „?”, iar istoricul spune câte au fost.

## Text de la dreapta la stânga: arabă, persană, urdu, ebraică

Scrieți textul ca oriunde altundeva: {{cmd:TEXT}} și {{cmd:MTEXT}} desenează fiecare rând în ordinea de citire. Un rând a cărui primă literă este arabă sau ebraică se citește de la dreapta la stânga; cifrele și cuvintele latine din el își păstrează ordinea de la stânga la dreapta, iar literele în scriere arabă sunt legate. Un rând care începe cu o literă latină rămâne de la stânga la dreapta, cu cuvintele de la dreapta la stânga la locul lor în interior. Fiecare paragraf dintr-un text pe mai multe rânduri are propria direcție, iar un paragraf încadrat o păstrează pe fiecare rând.

Textul se stochează așa cum l-ați tastat, deci fișierele DWG și DXF îl schimbă cu alte programe neschimbat. Punctul de inserare și alinierea ({{ui:Stânga}}, {{ui:Centru}}, {{ui:Dreapta}}) înseamnă aceeași parte ca pentru orice text: o notă de la dreapta la stânga care trebuie să atârne de capătul ei drept are nevoie de {{ui:Dreapta}}.

Pe ecran, literele vin din fonturile sistemului dvs. Într-un PDF trasat, ebraica folosește același font încorporat ca textul latin; textul în scriere arabă face ca trasarea să descarce încă un font (sub 1 MB, o singură dată), iar întregul PDF se tipărește apoi cu acel font. Acel font nu are formă proprie pentru trei caractere urdu (heh goal, yeh barree și punctul final urdu): ele se tipăresc în forma celei mai apropiate litere arabe. Un desen care are și text în scriere arabă, și text în chineză, japoneză sau coreeană tipărește unul dintre ele ca „?”, deoarece o trasare conține un singur font. Textul dintr-un font SHX încărcat este ordonat și legat când fontul are literele la locurile lor Unicode; pentru fonturile vechi ale căror litere sunt deja formate, folosiți {{ui:Reverse}} în {{cmd:SHXFONTS}}, ca înainte.

## Greșeli frecvente

- **Textul este prea mic pentru a fi văzut.** Înălțimea se exprimă în unități de desen. Într-un desen mare, folosiți o înălțime mare (vezi mai sus) sau măriți zoom.
- **Comanda s-a încheiat după un rând.** Ați apăsat {{key:Enter}} pe un rând gol în {{cmd:TEXT}}. Porniți-o din nou sau folosiți textul de paragraf (`T`), unde {{key:Enter}} începe un nou paragraf.
- **`T` a deschis o casetă în loc să ceară un rând.** Ca în AutoCAD, `T` este text de paragraf ({{cmd:MTEXT}}); textul dintr-un singur rând este `DT`.
- **Textul se încadrează altfel decât în AutoCAD.** CadCraft încadrează cu lățimile fontului Helvetica; un alt font poate încadra un cuvânt mai mult sau mai puțin pe un rând.
- **Text într-o copie oglindită.** Este plasat oglindit, dar rămâne citibil de la stânga la dreapta.
