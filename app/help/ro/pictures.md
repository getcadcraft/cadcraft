---
title: Imagini într-un desen
summary: Plasați o imagine PNG sau JPEG, decupați-o după un dreptunghi sau un poligon, arătați imaginile pe care le folosește un DWG și trasați-le clare.
keywords: pastearea, parea, zonă copiată, markupcraft, mărime reală, suprapunere, ole, ole2frame, obiect încorporat, lipire imagine, captură de ecran, ctrl+v, imagine din clipboard, captură, imagine, imageattach, iat, image, imageclip, decupare, clip, png, jpeg, jpg, siglă, fotografie, raster, imagedef, xref, trasare, pdf, rezoluție
from: 4025ac97
---

## Ce veți realiza

Un logo al companiei plasat într-un cartuș, decupat pe partea dorită, și un PDF în care se imprimă la propria rezoluție.

## Plasarea unei imagini

1. Tastați {{cmd:IMAGEATTACH}} (sau `IAT`) și apăsați {{key:Enter}}. Alegeți un fișier PNG sau JPEG.
2. `Specify the lower-left corner`: faceți clic sau tastați un punct.
3. `Specify its width`: lățimea în unități de desen. {{key:Enter}} păstrează lățimea propusă: o unitate pe pixel, sau lățimea pe care ați dat-o acestui fișier data trecută (solicitarea spune care).
4. `Specify its rotation angle`: {{key:Enter}} pentru niciuna.

Imaginea este un singur obiect: o selectați după cadrul ei și o puteți muta, copia, roti, scala sau șterge ca orice bloc.

:::note
Fișierul imaginii rămâne alături de desen cât timp este deschis. Un DWG salvat reține numele fișierului, ca alte programe; nu conține pixelii. Păstrați imaginea lângă desen.
:::

## Lipirea unei capturi de ecran sau a unei imagini copiate

1. Copiați imaginea (o captură de ecran cu {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=instrumentul de captură de ecran}}, sau {{ui:Copiere imagine}} dintr-un alt program ori dintr-un browser).
2. Indicați locul din desen unde trebuie să ajungă și apăsați {{key:Mod+V}}.

Colțul din stânga jos al imaginii ajunge la cursor (sau în mijlocul vederii), cu o lățime de 40 % din ce vedeți; mutați, scalați și decupați-o ca pe orice imagine. Numele său este numele desenului cu `-picture-1.png` (apoi `-2`, …), iar istoricul o spune. {{ui:Editare}} › {{ui:Mai multe}} › {{ui:Lipire o imagine}} face același lucru din meniu (browserul poate întreba întâi).

Un DWG păstrează doar numele fișierului unei imagini, deci salvarea desenului salvează și imaginea ca fișier separat. Păstrați cele două în același dosar: desenul arată imaginea de acolo. În browser aceasta este o a doua descărcare, iar istoricul o spune. Dacă pe clipboard există doar obiecte CadCraft, {{key:Mod+V}} le lipește pe acestea, ca înainte.

## Lipirea unei zone copiate în MarkupCraft

{{ui:Copiere zonă}} din MarkupCraft copiază o parte dintr-o foaie ca o imagine care știe ce mărime are. CadCraft o lipește la acea mărime.

1. În MarkupCraft, copiați zona (un dreptunghi, un cerc sau o formă liberă; {{ui:Copiere ca suprapunere}} dacă vreți să vedeți desenul prin ea).
2. În CadCraft, apăsați {{key:Mod+V}}, sau tastați {{cmd:PASTEAREA}} (sau `PAREA`), sau alegeți {{ui:Editare}} › {{ui:Mai multe}} › {{ui:Lipire zonă copiată}}.
3. `Specify the lower-left corner of the copied area`: faceți clic sau tastați un punct. Un cadru de mărimea zonei urmează cursorul.

Cât de mare ajunge:

- **Foaia avea o scară de desen:** la mărimea ei reală, în unitățile desenului (un detaliu 1:50 al unei scări de 2 m are 2 m lungime într-un desen în metri, 78.74 într-un desen în inci). Nu se mai cere nimic.
- **Foaia nu avea scară:** CadCraft spune mărimea ei pe hârtie și cere o scară: tastați `100` pentru o foaie 1:100, apăsați {{key:Enter}} pentru mărimea hârtiei sau tastați `P`, faceți clic pe două puncte ale imaginii lipite și tastați cât de departe sunt în realitate (cum face și {{cmd:SCANSCALE}}). Colțul din stânga jos rămâne unde l-ați pus.

Un desen fără unități ia milimetri, ca un fundal PDF. O suprapunere își păstrează hârtia transparentă și începe la fel de estompată cum a fost copiată; în afara unui cerc sau a unei forme libere este și ea transparentă. Zona lipită este o imagine ca oricare alta: mutați, rotiți, scalați, decupați sau ștergeți-o, iar întreaga lipire este un singur pas de anulare. Salvată ca DWG, devine un IMAGE cu estomparea și transparența ei.

{{key:Mod+V}} lipește zona când imaginea de pe clipboard este a zonei sau când zona a fost copiată după orice ați copiat în CadCraft (și în ultimele 6 ore). În caz contrar, lipește ca înainte. {{cmd:PASTEAREA}} lipește ultima zonă copiată, oricând.

## Arătarea imaginilor pe care le folosește un DWG

Un DWG stochează doar unde se aflau imaginile sale, deci CadCraft arată fiecare imagine ca un cadru cu numele fișierului ei.

1. Tastați {{cmd:IMAGE}} (sau `IM`). Linia de comandă listează fiecare fișier de imagine și dacă se afișează.
2. Alegeți fișierele (mai multe deodată). Un fișier al cărui nume conține numele indicat de desen se consideră și el, pentru că exporturile adaugă adesea un prefix de proiect.

## Decuparea unei imagini

1. Tastați {{cmd:IMAGECLIP}} (sau `ICL`) și selectați imaginea.
2. Alegeți `R` și faceți clic pe două colțuri, sau `P` și faceți clic pe punctele unui poligon, apoi apăsați {{key:Enter}}. `D` elimină decuparea.

## Trasarea imaginilor

Imaginile intră în PDF ca imagini, la propria rezoluție și sub linii. În caseta {{ui:Trasare}}, {{ui:Imagini}} le poate limita la 600, 300 sau 150 dpi, ca fișierul să fie mai mic. Un JPEG intră așa cum este.

## Ce se salvează unde

| Format | Imagini |
|---|---|
| DWG (orice versiune) | Ca imagini (IMAGE), cu decuparea lor |
| DXF | Ca cadrele lor, cu numele fișierului; salvarea o spune |

## Obiecte din alte programe (OLE)

Un desen poate conține obiecte create de alt program, precum o imagine dintr-un program de pictură sau o zonă dintr-o foaie de calcul (obiecte OLE). CadCraft nu le rulează, nu le editează și nu poate insera obiecte noi. Ce face:

- **Într-un DXF**, un obiect OLE se deschide ca un cadru. Dacă obiectul și-a salvat o imagine a sa și acea imagine este o bitmap, imaginea este desenată în cadru; altfel, cadrul poartă o etichetă cu tipul obiectului, precum „Microsoft Excel Worksheet (OLE)”. Puteți muta, copia și șterge cadrul ca pe un bloc. {{cmd:SAVEAS}} în DXF 2000 îl scrie din nou ca obiect OLE, cu datele neschimbate.
- **Într-un DWG**, obiectele sunt păstrate și scrise înapoi la salvarea ca DWG, octet cu octet, dar **nu sunt afișate**: un DWG păstrează locul unui obiect în propriile date, iar CadCraft nu le citește încă. Istoricul spune câte au fost păstrate. Tastați {{cmd:OLELIST}} ca să vedeți ce sunt (tip, mărime, dacă și-a salvat o imagine) și ca să puneți o copie a unei imagini unde alegeți: **Plasare** cere numărul, colțul din stânga jos și lățimea, și desenează un cadru cu imaginea în el. Acea copie este un cadru pe care îl puteți muta sau șterge; obiectul în sine rămâne în desen și este scris înapoi la salvare.
- Un obiect care a venit dintr-un DXF este salvat într-un DWG doar ca cadru și etichetă; istoricul o spune. Salvați ca DXF 2000 ca să păstrați obiectul în sine.
- Imaginile de tip metafile (ce salvează multe programe) nu sunt desenate: apar cadrul și eticheta.

## Greșeli frecvente

| Vedeți | De ce | Remediu |
|---|---|---|
| Un cadru cu un nume de fișier | CadCraft nu are fișierul | {{cmd:IMAGE}}, apoi alegeți fișierul |
| „Aceasta nu este o imagine” | Obiectul ales nu este o imagine | Alegeți cadrul imaginii |
