---
title: Stabiliți dimensiunile cotelor, zecimalele și scara
summary: Alegeți înălțimea textului, dimensiunea săgeții, zecimalele și scara generală pentru cotele noi, schimbați cotele deja făcute și înțelegeți cum funcționează stilurile de cotare în CadCraft.
keywords: stil de cotare, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, scară generală, zecimale, dimensiunea săgeții, scară de adnotare, dimtextunit, unități în text, mm, cm, m, km, milimetri, metri, dimlfac, dimpost
from: 8ec82a07
---

## Ce veți învăța

Cât de mari sunt textul și săgețile cotelor, cum le setați pentru un desen tipărit la 1:50 sau 1:100 și cum schimbați cotele pe care le-ați făcut deja.

## Cum funcționează dimensiunile cotelor

Fiecare cotă poartă propriul set de dimensiuni: înălțimea textului, dimensiunea săgeții, zecimalele, spațiul din jurul textului, cât se prelungesc liniile de ghidaj dincolo de linia de cotă și cât de departe pornesc de la obiect. Valorile implicite sunt apropiate de stilul ISO obișnuit:

| Setare | Implicit | Comandă |
|---|---|---|
| Înălțime text | 2.5 | {{cmd:DIMTXT}} |
| Dimensiunea săgeții | 2.5 | {{cmd:DIMASZ}} |
| Zecimale | 2 (zerourile de la sfârșit se elimină) | {{cmd:DIMDEC}} |
| Spațiu în jurul textului | 0.625 | {{cmd:DIMGAP}} |
| Prelungire dincolo de linia de cotă | 1.25 | {{cmd:DIMEXE}} |
| Decalare față de obiect | 0.625 | {{cmd:DIMEXO}} |
| Scară generală | 1 | {{cmd:DIMSCALE}} |

Fiecare dimensiune se înmulțește cu **scara generală**. Setați dimensiunile așa cum le doriți pe hârtie (text de 2.5 mm), iar scara generală la scara de tipărire (50 pentru 1:50). Textul are atunci 2.5 × 50 = 125 unități de desen înălțime, care se tipărește la 2.5 mm.

:::note
Stilurile de cotare cu nume se administrează cu {{cmd:DIMSTYLE}}: vezi secțiunea de mai jos. Fiecare cotă își păstrează și setările cu care a fost făcută, astfel încât puteți schimba o singură cotă în {{ui:Proprietăți}}.
:::

## Setați dimensiunile pentru cotele noi

Oricare dintre modurile de mai jos schimbă doar cotele pe care le faceți ulterior.

### În panoul Setări curente

1. Apăsați {{key:Esc}} ca să nu fie nimic selectat. Pe fila {{ui:Model}}, panoul din dreapta arată {{ui:Setări curente}}.
2. Derulați panoul până la {{ui:Cote noi}}, trecând de rândurile pentru strat, culoare, unități și {{ui:Strat 0}} (pe un ecran mic începe sub marginea de jos). Faceți clic în {{ui:Scară generală}}, tastați `50` și apăsați {{key:Enter}}.
3. Setați {{ui:Înălțime text}}, {{ui:Dimensiunea săgeții}} și {{ui:Zecimale}} la fel, dacă doriți alte valori.

Bara de stare confirmă fiecare, de exemplu „Scară generală pentru cotele noi: 50”.

### În linia de comandă

1. Tastați `DIMSCALE` și apăsați {{key:Enter}}.
2. La `Enter new value for DIMSCALE <1>`, tastați `50` și apăsați {{key:Enter}}.

Istoricul confirmă „DIMSCALE = 50. Cotele noi o folosesc; selectați cele existente ca să le schimbați pe ale lor.” {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} și {{cmd:DIMEXO}} funcționează la fel. Apăsați {{key:Enter}} la solicitare ca să păstrați valoarea curentă.

### Picioare și inci în cote

Cotele noi folosesc formatul de lungime al desenului: setați-l cu {{ui:Format lungime}} din {{ui:Setări curente}} sau cu {{cmd:UNITS}} (vezi [Picioare și inci](topic:units-papers-scales#feet-and-inches-and-fractions)), iar următoarea cotă citește `12'-6 1/2"`. {{cmd:DIMLUNIT}} setează doar formatul cotelor (2 zecimal, 3 inginerie, 4 arhitectural, 5 fracționar). Pentru o cotă deja făcută, selectați-o și alegeți {{ui:Format}} din {{ui:Proprietăți}}; cu un format fracționar, caseta sa {{ui:Fracție}} primește puterea lui doi (4 = 1/16).

## Cote în mm, cm, m sau km

O cotă măsoară în unități de desen. Ea poate scrie acea lungime în milimetri, centimetri, metri sau kilometri, cu unitatea după număr: un perete de 1250 mm apare ca `1250 mm`, `125 cm`, `1.25 m` sau `0.00125 km`.

1. Setați mai întâi {{ui:Unități}} ale desenului în {{ui:Setări curente}} (vezi [Unități, dimensiuni ale hârtiei și scări](topic:units-papers-scales#drawing-units)), ca CadCraft să știe ce este o unitate de desen. Un desen fără unități este citit ca milimetri, iar {{cmd:DIMTEXTUNIT}} o spune.
2. Pentru cotele noi: apăsați {{key:Esc}} ca să nu fie nimic selectat și, sub {{ui:Cote noi}}, alegeți {{ui:Unități în text}}: {{ui:Unități ale desenului}}, `mm`, `cm`, `m` sau `km`.
3. Pentru cotele deja făcute: selectați-le și, în {{ui:Proprietăți}} › {{ui:Unități principale}}, alegeți {{ui:Unități în text}}.

Sau tastați {{cmd:DIMTEXTUNIT}} (`DTU`) și răspundeți `D`, `MM`, `CM`, `M` sau `KM`: cu cote selectate, le schimbă (un pas de anulare); fără nimic selectat, setează cotele noi.

{{ui:Zecimale}} ({{cmd:DIMDEC}}) tot stabilește câte zecimale apar: cu metri și 3 zecimale, 1234 mm apare ca `1.234 m`. Textul este scris ca număr zecimal. Pe o foaie, cotele se măsoară în unitatea de hârtie a foii (milimetri sau inci).

O DWG sau DXF salvată păstrează alegerea ca scară de măsurare a cotei (DIMLFAC) și un sufix (DIMPOST, ` m`), ca alte programe să arate același text. Dacă schimbați mai târziu {{ui:Unități}} ale desenului, cotele scrise în mm, cm, m sau km sunt reajustate, astfel încât să spună în continuare lungimea corectă. {{ui:Setată manual (scară sau sufix)}} înseamnă că {{ui:Scara de măsurare}} sau sufixul cotei a fost setat altfel; alegeți o unitate ca să le înlocuiți.

## Schimbați cotele deja făcute

1. Faceți clic pe o cotă. Titlul panoului din dreapta spune {{ui:Cotă}}.
2. Setările sunt în secțiuni; derulați panoul ca să ajungeți la cele de mai jos:
   - {{ui:General}}: {{ui:Stil de cotare}}
   - {{ui:Geometrie}}: {{ui:Tip}} și {{ui:Măsurătoare}} (doar citire)
   - {{ui:Text}}: {{ui:Text înlocuitor}} și {{ui:Înălțime text}}
   - {{ui:Linii și săgeți}}: {{ui:Dimensiunea săgeții}}
   - {{ui:Potrivire}}: {{ui:Scară generală}}
   - {{ui:Unități principale}}: {{ui:Zecimale}}
3. Tastați o valoare nouă și apăsați {{key:Enter}}.

Cota se redesenează imediat. Pentru cotele unghiulare, {{ui:Zecimale (°)}} stabilește zecimalele unghiului.

:::note
Cu mai multe cote selectate, panoul arată rândurile comune, iar o valoare care diferă între ele apare ca {{ui:Variabil}}. O valoare pe care o tastați schimbă toate cotele selectate dintr-un singur pas, astfel încât un {{key:Mod+Z}} le readuce pe toate.
:::

## Cote din desene deschise

O cotă dintr-un DWG sau DXF deschis se arată exact cum a desenat-o celălalt program. Panoul ei spune: „Afișată așa cum a desenat-o programul care a creat-o. Dacă o schimbați, CadCraft o redesenează în stilul propriu.” De îndată ce schimbați o valoare, mutați un mâner sau mutați cota, CadCraft o redesenează cu propriile săgeți și propriul font, folosind dimensiunile citite din fișier.

Unele cote pot fi citite doar ca desenate, nu ca cote editabile; panoul arată atunci „Desenată din” și un nume de bloc, iar caseta „Despre acest fișier” le numără.

## Greșeli frecvente

- **Schimbarea DIMSCALE n-a schimbat nimic pe ecran.** Setarea este pentru cotele noi. Selectați cele existente și schimbați {{ui:Scară generală}} în panou.
- **Zecimalele arată mai puține cifre decât ați setat.** Zerourile de la sfârșit se elimină: cu 2 zecimale se arată `1250` și `1250.5`, nu `1250.00`.
- **Textul are înălțimea corectă pe hârtie într-o fereastră de vizualizare, dar greșită într-o tipărire a modelului.** Scara generală trebuie să se potrivească cu scara la care tipăriți. Tipărirea la Potrivire pe hârtie dă o scară ciudată; alegeți o scară standard în caseta de tipărire.
- **Unități precum mm sau m în text.** Alegeți {{ui:Unități în text}} (vezi [Cote în mm, cm, m sau km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Pentru orice alt cuvânt după număr, scrieți-l într-un text înlocuitor: `<> TYP.`.

## Stiluri de cotare cu nume

Tastați `DIMSTYLE` (`D`) ca să deschideți {{ui:Manager stiluri de cotare}}. Listează stilurile desenului, câte cote folosește fiecare și care este cel curent. **Standard** este mereu acolo.

- {{ui:Setare curentă}}: cotele noi folosesc setările acelui stil și poartă numele lui.
- {{ui:Nou…}}: un stil nou, care începe ca o copie a celui pe care îl alegeți.
- {{ui:Modificare…}}: aceleași câmpuri ca secțiunea de cotă din {{ui:Proprietăți}} (linii și săgeți, text, potrivire, unități, unități alternative, toleranțe). Apăsați {{ui:OK}} și stilul se schimbă **și fiecare cotă care îl folosește se schimbă odată cu el**, setare cu setare. O setare schimbată pe o singură cotă rămâne cum este, dacă stilul nu a schimbat acea setare.
- {{ui:Redenumire…}} și {{ui:Ștergere}}: Standard nu poate fi redenumit sau șters, nici stilul curent și nici unul pe care îl folosesc cote.
- {{ui:Comparare…}}: ce diferă între două stiluri.
- {{ui:Aplicare la selecție}}: selectați întâi cotele; ele iau setările stilului și numele lui.

`-DIMSTYLE` face același lucru pe linia de comandă: `Restore`, `Save` (setările curente, inclusiv ce ați tastat cu {{cmd:DIMTXT}} și celelalte, sub un nume), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Stilurile se salvează într-un DWG sau DXF (în tabelul lor de stiluri de cotare) și se citesc din fișierele pe care le deschideți. Stilul *curent* nu se salvează: un desen se deschide cu Standard curent. Standard își păstrează propriile setări cât timp alt stil este curent.

## Schimbați textul și liniile de ghidaj

{{cmd:DIMEDIT}} (`DED`) lucrează pe cotele selectate: **Acasă** pune textul înapoi unde îl pune stilul, **Nou** tastează alt text (`<>` reprezintă măsura), **Rotire** rotește textul, **Oblic** înclină liniile de ghidaj ale cotelor liniare și aliniate la un unghi pe care îl tastați (apăsați {{key:Enter}} pentru niciunul). {{cmd:DIMTEDIT}} mută textul la **Stânga**, **Dreapta** sau **Centru** de linia de cotă, sau îl rotește (**Unghi**), sau îl trimite la **Acasă**. Textul stă mereu pe linia de cotă: nu poate fi tras într-un loc liber.
