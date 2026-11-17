---
title: Lucrul la un desen împreună, cu Live TeamWork
summary: Ce se schimbă în CadCraft cât timp sunteți într-o sesiune Live TeamWork din CadCraft Studio: cursoarele și selecțiile altora, obiectele pe care le editează cineva, blocările gazdei, propria anulare și alăturarea dintr-un browser din aceeași rețea.
keywords: live, live teamwork, studio live, împreună, colaborare, editare comună, sesiune, partajare live, alăturare, cursor, menținut, editare, blocare, livelock, liveunlock, livehold, menținere strat, menținere zonă, lacăt, anulare, gazdă, asistent, același fișier, mulți oameni, lent, limită, cine a modificat, modificări recente, jurnal de modificări
from: 0497d2a3
---

## Ce veți învăța

Ce vedeți și ce se întâmplă cu modificările făcute cât mai multe persoane lucrează simultan la același desen. CadCraft Studio pornește și alătură sesiunea Live TeamWork (Partajare live, Alăturare); această pagină tratează desenul în sine.

## Toată lumea desenează simultan

Desenați și editați ca de obicei. Propriile modificări apar imediat, chiar înainte ca ceilalți să le aibă, iar ale celorlalți apar pe ecran puțin după ce le fac. Orice comandă funcționează: desenare, modificare, straturi, blocuri, foi, cotări, constrângeri.

Două persoane pot modifica același obiect. Dacă schimbați lucruri diferite, de exemplu culoarea și un capăt al unei linii, ambele modificări se păstrează. Dacă schimbați același lucru, modificarea mai recentă câștigă.

Rămân ale fiecăruia în parte: stratul curent, culoarea și înălțimea textului pentru obiecte noi, setările de cotare, vizualizarea, ecranul divizat și SCU. Desenul este comun; felul în care îl priviți nu.

## Alte persoane pe desen

- **Cursoare:** indicatorul fiecărei persoane apare cu numele ei, în culoarea ei, și cu comanda pe care o rulează. Vedeți cursoarele persoanelor care lucrează lângă ce este pe ecran.
- **Selecții:** ce a selectat cineva este conturat în culoarea lui.
- **În editare:** un obiect selectat de cineva are o etichetă de tipul „Ana editează”. Îi puteți schimba în continuare culoarea sau îl puteți muta, dar nu îl puteți șterge, descompune sau schimba tipul până când persoana îl eliberează. Selectându-l, aflați cine îl are.
- **Cine l-a modificat ultimul:** selectați un obiect pe care altcineva l-a modificat în această sesiune, iar linia de comandă spune cine și ce modificare a fost („Ben l-a modificat ultimul: CIRCLE.”). Panoul Live din Studio listează fiecare modificare recentă sub {{ui:Modificări recente}}. Nimic din toate acestea nu se salvează în desen: ține cât ține sesiunea.

## Menținerea unui strat sau a unei zone cât lucrați acolo

Pe un desen mare, cu mai multe persoane, spuneți ce parte vă aparține deocamdată:

1. Tastați `LIVEHOLD` și apăsați {{key:Enter}}.
2. Alegeți `L` și tastați numele unui strat (Enter păstrează stratul curent), sau alegeți `A` și selectați două colțuri ale unei zone.
3. Modificările altora pe acel strat sau asupra obiectelor din zonă sunt anulate, iar aceștia sunt anunțați că cineva lucrează acolo. Zona proprie apare ca un cadru punctat; ceilalți o văd în culoarea celui care lucrează și cu numele lui, iar straturile menținute sunt listate în colțul stânga-sus al desenului lor.
4. `LIVEHOLD`, apoi `R`, eliberează tot ce este menținut. Părăsirea sesiunii îl eliberează și ea.

Oricine din sesiune poate menține, inclusiv gazda; blocările gazdei se aplică în plus. O menținere nu se salvează niciodată în fișier.

## Când o modificare este anulată

Copia desenului de la gazdă verifică fiecare modificare. Unele nu pot intra, iar CadCraft le anulează pe ecran și spune motivul pe linia de comandă, de exemplu:

- cineva a șters obiectul, sau stratul ori blocul de care are nevoie, chiar înaintea acesteia;
- cineva editează obiectul respectiv sau îi ține stratul ori zona în care se află;
- gazda l-a blocat;
- blocul pe care îl plasați a fost eliminat din desen, sau un strat pe care îl ștergeți mai are obiecte pe el.

## Anularea anulează lucrarea proprie

{{key:Mod+Z}} și {{ui:Anulare}} anulează ultima comandă proprie, în întregime, și lasă neatinsă lucrarea celorlalți. Dacă între timp cineva a modificat același lucru, nu se anulează nimic, iar linia de comandă spune cine l-a modificat. {{key:Mod+Y}} refac comanda anulată.

## Blocări (gazda)

Gazda poate proteja obiecte sau un întreg strat, astfel încât nimeni să nu le modifice, nici chiar gazda, până când sunt deblocate:

1. Selectați obiectele, apoi tastați `LIVELOCK` și apăsați {{key:Enter}}. Sau tastați `LIVELOCK` fără nimic selectat și alegeți `L` ca să blocați un strat după nume: obiectele adăugate ulterior pe acel strat sunt blocate și ele.
2. Obiectele blocate apar punctate, cu eticheta „Blocat de gazdă” pe ecranul tuturor.
3. `LIVEUNLOCK` le deblochează în același mod.

Blocările țin de sesiune: se încheie odată cu ea și nu se salvează niciodată în fișier.

## Alăturarea la același fișier

Dacă ați deschis chiar fișierul pe care l-a deschis gazda (dintr-un folder partajat sau din aceeași copie), alăturați-vă din propria fereastră CadCraft din Studio: deschideți panoul {{ui:Utilă}} și folosiți {{ui:Alăturare aici}} cu codul gazdei. Circulă doar modificările făcute de când gazda l-a deschis, deci un desen mare este gata imediat. Dacă fișierul propriu este altul, desenul gazdei îl înlocuiește pe ecran (fișierul propriu rămâne neschimbat). Funcționează doar cât timp desenul propriu nu a fost modificat de la deschidere.

## Asistenții într-o sesiune live

Un asistent conectat la fereastra CadCraft (vezi ajutorul despre lucrul cu asistenți AI) se alătură sesiunii ca participant propriu, afișat tuturor drept „Asistent (prin <numele utilizatorului>)”. Gazda îl admite, ca pe o persoană; asistentul propriu al gazdei se alătură imediat. Modificările lui au propria anulare: {{key:Mod+Z}} anulează lucrarea proprie, iar anularea asistentului anulează doar ce a făcut el. Părăsește sesiunea când îl deconectați sau când plecați, și poate lucra în sesiune doar cât timp puteți edita.

## Alăturarea dintr-un browser

Un coleg fără Studio poate scana imaginea de sub codul gazdei cu un telefon, o tabletă sau un computer din aceeași rețea. CadCraft se deschide în browser, cere numele pe linia de comandă și se umple cu desenul gazdei după ce gazda îl admite. Un link de invitație permite cuiva să se alăture dintr-o altă rețea: gazda are nevoie de un loc de utilizator în Team Cloud Plan pentru aplicație, ceilalți se alătură gratuit, iar linkul funcționează doar cât timp sesiunea gazdei este deschisă.

## Mulți oameni pe același desen

Fiecare modificare ajunge la toți cei din sesiune, deci cu cât sunt mai mulți, cu atât fiecare modificare durează mai mult până ajunge la fiecare, iar laptopurile și conexiunile mai lente rămân în urmă primele. Mărimea obișnuită a unei sesiuni este de 20 de persoane; gazda poate permite mai multe pentru o sesiune (vezi ajutorul despre lucrul împreună live). Dacă desenul pare lent cu mulți oameni, ajută mai puține persoane, mai puține care editează în același moment sau o conexiune mai bună.

## Când se încheie sesiunea

Doar gazda salvează desenul. Când gazda încheie sesiunea, ceilalți păstrează o copie nesalvată: salvați-o dacă doriți să o păstrați.

:::note
Ceea ce a fost anulat este desenat deasupra obiectelor din jur pe ecranul propriu, până când redeschideți desenul. Hașurile și obiectele umplute care se suprapun pot arăta diferit față de copia gazdei; desenul în sine este același.
:::
