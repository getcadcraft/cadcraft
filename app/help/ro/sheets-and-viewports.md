---
title: Pregătirea unei foi cu cartuș și ferestre de vizualizare
summary: Creați o foaie (layout) cu cadru și cartuș, setați scara ferestrei de vizualizare, adăugați o a doua fereastră pentru un detaliu și completați cartușul.
keywords: layout, foaie, spațiul hârtiei, fereastră de vizualizare, mview, vpview, cartuș, scară, mărime hârtie, cadru, vports, scară de trasare, mspace, pspace, spațiul modelului, intrare în fereastră, dublu clic pe fereastră
from: 45a45de8
---

## Ce veți realiza

O foaie A3 cu cartuș, întregul plan într-o fereastră de vizualizare la 1:100 și o a doua fereastră care arată un colț la 1:20.

## Modelul și foile

Desenați clădirea pe fila {{ui:Model}}, la mărime reală: un perete de 6 m are 6000 de unități, în milimetri. O **foaie** (layout) este o bucată de hârtie, măsurată în milimetri sau în inci. O **fereastră de vizualizare** este o decupare în foaie, care arată modelul la o scară.

## Înainte de a începe

1. Deschideți sau desenați un plan pe fila {{ui:Model}}.
2. Apăsați {{key:Esc}} ca să nu fie selectat nimic.
3. În {{ui:Setări curente}}, setați {{ui:Unități}} la unitatea în care ați desenat, de exemplu {{ui:Milimetri}}.

Unitățile contează: o scară de fereastră, precum 1:100, înseamnă că un milimetru pe hârtie arată 100 de milimetri reali, deci CadCraft trebuie să știe ce reprezintă o unitate de desen. Un desen lăsat pe {{ui:Fără unități}} este considerat în unitatea hârtiei (milimetri pe hârtie ISO, inci pe hârtie US).

## Crearea foii

1. Faceți clic pe butonul {{ui:+}} din dreapta filelor de sub desen, sau tastați `LAYOUT` și apăsați {{key:Enter}}, sau faceți clic pe {{ui:Planșă nouă}}.

Se deschide fila `Layout1`. Ar trebui să vedeți o foaie pe un fundal mai închis: un cadru, un cartuș în colțul din dreapta jos și o fereastră de vizualizare deasupra lui, care arată întregul model la cea mai mare scară standard care încape. Istoricul numește hârtia: ISO A3 pentru desenele metrice și fără unități, Tabloid (ANSI B) pentru desenele în inci sau picioare.

2. Faceți clic pe {{ui:Extinderi}} ca să încadrați foaia pe ecran.

## Alegerea hârtiei

1. Apăsați {{key:Esc}} ca să nu fie selectat nimic. Titlul panoului din dreapta spune „Foaie: Layout1”.
2. În {{ui:Nume}}, tastați `A-101 Plan` și apăsați {{key:Enter}}. Fila se redenumește.
3. În {{ui:Hârtie}}, alegeți o mărime.
4. În {{ui:Orientare}}, alegeți {{ui:Peisaj}} sau {{ui:Portret}}.

:::warning
Schimbarea hârtiei nu mută și nu redimensionează ce există deja pe foaie. După schimbare, verificați dacă cadrul, cartușul și fereastra de vizualizare încă încap și mutați-le sau redimensionați-le cu mânerele. Trecerea între hârtie în milimetri și hârtie în inci păstrează numerele, deci totul își schimbă mărimea: bara de stare vă avertizează.
:::

## Setarea scării ferestrei de vizualizare

1. Faceți clic pe cadrul ferestrei (marginea ei). Titlul panoului spune „Fereastră de vizualizare”.
2. În {{ui:Scară}}, alegeți `1:100`.

Modelul din fereastră se redesenează la 1:100, centrat acolo unde era. Lista oferă scări metrice, de la 10:1 la 1:10000; desenele în inci sau picioare primesc și scări arhitecturale (1/4" = 1'-0" și altele asemenea) și scări de inginerie (1" = 20' și altele asemenea). {{ui:Potrivire la tot modelul}} stabilește o scară exactă, nestandard, care cuprinde tot.

3. Dacă planul nu mai este centrat, schimbați {{ui:X}} și {{ui:Y}} de sub {{ui:Centrul vederii (model)}} din panoul din dreapta: acestea sunt punctul modelului afișat la mijlocul ferestrei.

## Afișarea unei părți din model într-o fereastră

1. Cu fereastra selectată, faceți clic pe {{ui:Alegeți o fereastră pe model…}} în panoul din dreapta (sau tastați `VPVIEW` și apăsați {{key:Enter}}).
2. CadCraft trece la fila {{ui:Model}}. Faceți clic pe un colț al zonei de afișat.
3. Faceți clic pe colțul opus.

Reveniți pe foaie, iar fereastra arată zona aceea la cea mai mare scară standard care încape; istoricul spune care. {{ui:Afișare întreg modelul}} revine la planul întreg, la o scară standard.

## Adăugarea unei a doua ferestre pentru un detaliu

1. Faceți loc pe foaie: selectați prima fereastră și trageți de un mâner de colț ca s-o micșorați.
2. Tastați `MV` și apăsați {{key:Enter}}, sau faceți clic pe {{ui:Fereastră de vizualizare}} din grupul Foi.
3. Faceți clic pe un colț al noii ferestre, pe foaie.
4. Faceți clic pe colțul opus.

Noua fereastră arată întregul model. Istoricul spune scara ei.

5. Faceți clic pe cadrul noii ferestre.
6. Faceți clic pe {{ui:Alegeți o fereastră pe model…}} și alegeți o zonă mică în jurul unui colț al planului.
7. În {{ui:Scară}}, alegeți `1:20`.

Cadrele ferestrelor sunt pe stratul `Viewports`, care este setat să nu se traseze, deci cadrele apar pe ecran, dar nu și în PDF.

## Completarea cartușului

Cartușul este format din linii și text obișnuite, pe stratul `Title block`. Începe cu numele desenului, scara primei ferestre, data de azi și numărul foii.

1. Faceți dublu clic pe titlul mare. Se deschide o casetă de editare peste el.
2. Tastați titlul foii.
3. Faceți clic pe {{ui:OK}} sau apăsați {{key:Mod+Enter}}.

Faceți la fel pentru celelalte câmpuri. Folosiți {{cmd:TEXT}} ca să scrieți în celula goală „DRAWN BY”. Textul SCALE nu se actualizează singur când schimbați scara unei ferestre: editați-l manual.

## Desenarea pe foaie

Orice desenați pe o filă de foaie se află pe hârtie, în unități de hârtie: un text de înălțime 3.5 înseamnă 3.5 mm pe o foaie ISO. Notele, săgețile de nord și cadrele foii se pun aici.

Ca să modificați chiar planul, mergeți pe fila {{ui:Model}} sau lucrați printr-o fereastră (secțiunea următoare); fiecare fereastră arată schimbarea.

## Lucrul pe model printr-o fereastră

1. Faceți dublu clic în interiorul unei ferestre, departe de cadru. Sau tastați `MS` și apăsați {{key:Enter}}: dacă există o singură fereastră pe foaie, intrați direct; dacă sunt mai multe, faceți clic în cea dorită.

Cadrul apare mai gros, istoricul spune că sunteți înăuntru, iar fila foii rămâne selectată. Tot ce desenați sau modificați acum se află pe model, în unități de model, ca pe fila {{ui:Model}}: o linie desenată într-o fereastră la 1:100 este în milimetri reali. Straturile înghețate în această fereastră nu pot fi selectate aici.

2. Rotiți rotița mouse-ului sau trageți cu butonul din mijloc ca să măriți și să deplasați ce arată fereastra. Foaia rămâne unde este.
3. Faceți dublu clic oriunde în afara cadrului sau tastați `PS` și apăsați {{key:Enter}}.

Reveniți pe foaie. Fereastra păstrează vederea cu care ați plecat; {{key:Mod+Z}} readuce vederea veche, într-un pas. Un clic pe orice filă de sub desen părăsește și el fereastra.

:::note
O fereastră al cărei afișaj este blocat ({{ui:Afișare blocată}} din {{ui:Proprietăți}}) își păstrează vederea: înăuntrul ei, panoramarea și zoom-ul mută toată foaia. O fereastră oprită nu poate fi intrată.
:::

## Etichetarea unei vederi cu numele ei

Un titlu de vedere sub o fereastră poate arăta numele vederii ferestrei și se poate actualiza odată cu ea:

1. Dați vederii un nume: selectați cadrul ferestrei și completați {{ui:Nume vizualizare}} din {{ui:Proprietăți}}, sau salvați vederea pe fila {{ui:Model}} cu {{cmd:NAMEDVIEW}} și, cu fereastra selectată, tastați `VPVIEW`, `V` și numele vederii: fereastra arată acea vedere și îi preia numele.
2. Tastați `VIEWLABEL` (`VL`) și apăsați {{key:Enter}}, apoi faceți clic unde trebuie să fie eticheta ({{key:Enter}} o pune sub colțul din stânga jos al ferestrei).

Când se schimbă numele vederii, eticheta se schimbă odată cu el, în același pas de anulare.

## Înghețarea unui strat într-o singură fereastră

Ca să ascundeți un strat într-o fereastră, dar nu în celelalte (mobilierul dintr-un detaliu, de exemplu):

1. Selectați cadrul ferestrei sau lucrați în interiorul ei (dublu clic).

Panoul {{ui:Straturi}} primește un buton în plus pe fiecare rând, iar o linie deasupra listei o spune.

2. Faceți clic pe butonul de pe rândul stratului.

Stratul dispare doar din acea fereastră. Faceți din nou clic ca să-l dezghețați; {{key:Mod+Z}} anulează oricare dintre ele. Pentru mai multe straturi sau ferestre deodată, tastați `VPLAYER`, apoi `F` (înghețare) sau `T` (dezghețare), numele straturilor (`A-*` ia fiecare strat care începe cu A-), apoi `C` (curent), `A` (toate) sau `S` (selectare). `VPLAYER` `V` (Vpvisdflt) alege straturile cu care pornesc înghețate ferestrele noi.

## Mai multe foi

Fiecare {{ui:+}} adaugă o altă foaie (`Layout2`, `Layout3` …), cu următorul număr de foaie. Pentru a șterge foaia deschisă, apăsați {{key:Esc}} și faceți clic pe {{ui:Ștergeți această planșă}} în panoul din dreapta. Se șterge fără întrebare; {{key:Mod+Z}} o readuce.

Trasați o foaie cu {{ui:Trasați această planșă}} sau cu {{key:Mod+P}}; vezi [Trasare în PDF](topic:plot-pdf).

## Greșeli frecvente

- **Fereastra nu arată nimic.** Modelul este gol, sau vederea este îndreptată în altă parte. Selectați cadrul și faceți clic pe {{ui:Afișare întreg modelul}}.
- **Lista de scări arată doar rapoarte, fără scări în picioare și inci.** Setați {{ui:Unități}} la {{ui:Inchi}} sau {{ui:Picioare}} pe fila {{ui:Model}}.
- **1:100 arată de zece ori prea mare sau prea mic.** Unitățile desenului sunt greșite. Setați {{ui:Unități}} la ce reprezintă cu adevărat o unitate.
- **Un clic pe plan din interiorul ferestrei nu selectează nimic.** Pe o foaie selectați obiectele foii. Faceți dublu clic în interiorul ferestrei întâi, ca să lucrați pe plan prin ea.
- **Clicurile din afara ferestrei nu fac nimic.** Sunteți în interiorul unei ferestre: faceți dublu clic în afara ei sau tastați `PS`, ca să lucrați din nou pe foaie.
- **„Ferestrele de vizualizare merg pe o foaie. Deschideți mai întâi o filă de foaie (sau creați una cu LAYOUT).”** {{cmd:MVIEW}} funcționează doar pe o filă de foaie.
