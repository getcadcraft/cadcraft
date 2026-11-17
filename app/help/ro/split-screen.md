---
title: Împărțirea ecranului
summary: Afișați desenul în două, trei sau patru panouri, fiecare cu propriul zoom, puneți o foaie lângă model și deschideți mai multe desene alăturat.
keywords: împărțire, ecran împărțit, panouri, vports, ferestre de vizualizare, așezat, alăturat, suprapus, două desene, file, file de document, comparare, separator, model și foaie, mai multe desene, desene deschise
from: ee2f034b
---

## Ce veți învăța

Cum să vedeți un desen în mai multe panouri deodată, fiecare cu propriul zoom, și cum să deschideți mai multe desene și să le vedeți alăturat.

## Împărțiți un desen în panouri

1. Deschideți un desen sau desenați câteva linii și cercuri.
2. Deschideți {{ui:Vizualizare}} › {{ui:Mai multe}} și alegeți {{ui:Împărțire alăturată}} (sau tastați {{cmd:VPORTS}}, apoi `2`, apoi {{key:Enter}}).

Zona de desen se împarte în două panouri, ambele arătând aceeași vizualizare. Panoul activ are un cadru albastru și primește crucea.

3. Faceți clic în celălalt panou. Acesta devine activ. (Primul clic doar schimbă panoul; faceți din nou clic ca să alegeți.)
4. Măriți cu rotița. Se mărește doar acel panou.
5. Trageți linia dintre panouri ca s-o lățiți pe una. {{key:Home}} pe un separator selectat îl readuce la mijloc.

{{cmd:VPORTS}} acceptă și `3` (două panouri pe o parte și unul mare pe cealaltă: `L` sau `R`), `4` și `SI` ca să rămână un singur panou. Vizualizarea panoului activ umple atunci zona. Pe o foaie, {{cmd:VPORTS}} adaugă în schimb o fereastră de vizualizare foii (ca în AutoCAD); tastați acolo {{cmd:SPLIT}}, sau folosiți meniul Vizualizare.

## Desenați dintr-un panou în altul

1. Împărțiți alăturat și măriți fiecare panou pe alt colț al desenului.
2. Tastați `L` și apăsați {{key:Enter}}, apoi faceți clic pe primul punct în panoul din stânga.
3. Faceți clic o dată în panoul din dreapta ca să-l activați, apoi faceți clic acolo pe al doilea punct.

Linia merge între cele două locuri. O comandă continuă pe măsură ce schimbați panourile, iar banda elastică apare în fiecare panou.

## Modelul lângă o foaie

1. Împărțiți alăturat.
2. Faceți clic pe panoul din dreapta, apoi pe fila unei foi de sub desen.

Panoul din dreapta arată foaia; cel din stânga arată în continuare modelul. Fiecare panou își păstrează propriul spațiu, astfel încât puteți desena pe model și urmări cum urmează fereastra de vizualizare a foii.

## Mai multe desene într-o fereastră

1. Deschideți un desen. Apoi deschideți altul (sau apăsați {{ui:Nou}}).

Fiecare desen se deschide în propria filă deasupra zonei de desen. Faceți clic pe o filă ca să comutați; linia de comandă, panourile și anularea urmează desenul la care comutați. {{key:Mod+C}} într-un desen și {{key:Mod+V}} în altul copiază obiecte între ele.

2. Faceți clic pe {{ui:Așezați desenele deschise alăturat}} (pictograma de împărțire de la capătul filelor) sau pe pictograma suprapusă de lângă ea.

Fiecare panou arată acum unul dintre desenele deschise, până la patru. Faceți clic pe un panou ca să lucrați în acel desen.

3. Faceți clic pe {{ui:×}} de pe o filă ca să închideți acel desen. Dacă are modificări nesalvate, CadCraft întreabă mai întâi.

:::tip
Deschiderea unui desen cât fereastra conține doar un desen nou, nemodificat, folosește acea filă în loc să adauge una.
:::

## Derulați și măriți împreună

Ca să comparați două revizii, așezați-le alăturat, apoi faceți clic pe {{ui:Legare a vizualizărilor panourilor}} (pictograma de legătură de la capătul filelor), sau alegeți-o din {{ui:Vizualizare}} › {{ui:Mai multe}}, sau tastați {{cmd:LINKVIEWS}} și `ON`. Acum o derulare sau un zoom într-un panou mută fiecare panou care arată modelul (sau fiecare panou care arată o foaie) în același loc, astfel încât cele două desene rămân aliniate. {{cmd:LINKVIEWS}} `OFF` lasă fiecare panou să se miște din nou independent.

## Greșeli frecvente

- **Clicul meu n-a făcut nimic.** A activat acel panou. Faceți din nou clic ca să alegeți sau să desenați.
- **Rotița a mărit panoul greșit.** Rotița mărește panoul de sub cursor și îl activează.
- **Panourile au revenit la unul.** La deschiderea unui desen se arată așa cum a fost salvat; un desen salvat fără panouri se deschide într-unul singur.
- **Părăsirea paginii avertizează despre modificări nesalvate pe care nu le văd.** Altă filă conține un desen cu modificări. Comutați la ea și salvați sau plecați fără salvare.
