---
title: Desenare fără vedere
summary: Activați Access și CadCraft spune fiecare comandă și rezultat prin cititorul de ecran, descrie desenul și ce se află lângă cursor, lasă cursorul să fie mutat de la tastatură, redă un sunet pentru fiecare agățare și mâner și primește comenzi vocale acolo unde browserul poate face asta pe calculator.
keywords: accesibilitate, cititor de ecran, nevăzător, vedere slabă, NVDA, VoiceOver, JAWS, Orca, cursor de la tastatură, comenzi vocale, vorbire, sunete, sunete de agățare, descrie desenul, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Access** permite desenarea fără a vedea ecranul. Este dezactivat până la pornire, ca nimeni să nu-l obțină din greșeală.

## Pornire

Deschideți **Setări** (roata dințată, sau Ctrl+,), găsiți **Desenare fără vedere** și alegeți **Activ**. Sau tastați `ACCESS` în linia de comandă și răspundeți `Activ`. Alegerea este reținută pe acest calculator.

Cu Access pornit:

- **Tot ce spune linia de comandă este rostit** prin cititorul de ecran: ce ați tastat, promptul pe care îl cere, răspunsul și fiecare eroare. CadCraft folosește propriile regiuni live, politicoase și urgente, deci un cititor de ecran care citește regiunile live nu necesită nicio configurare. Erorile și anulările întrerup; restul așteaptă rândul.
- **Zona de desen este accesibilă.** Apăsați Tab până auziți „Desen”, sau Shift+Tab din linia de comandă. Este o regiune care transmite tastele către CadCraft.

## Taste pe desen

| Tastă | Ce face |
|---|---|
| Tastele săgeată | Mută cursorul de la tastatură. Un pas este cam a suta parte din ce arată ecranul, rotunjit la 1, 2 sau 5. Shift mută de zece ori mai departe, Ctrl de zece ori mai puțin. |
| Enter | Alege punctul de sub cursor, exact ca un clic. |
| Space | Apasă Enter în linia de comandă: încheie LINE, ia valoarea implicită. |
| Tab, Shift+Tab | Trece la următorul sau precedentul punct de agățare de lângă cursor, cel mai apropiat primul. |
| G | Parcurge mânerele obiectelor selectate. |
| D | Descrie desenul: câte obiecte, de ce fel, ce dimensiune, ce este selectat. |
| W | Spune unde este cursorul și cât de departe este de ultimul punct. |
| N | Spune ce se află lângă cursor, cel mai apropiat primul, cu distanța și partea. |
| S | Descrie obiectele selectate. |
| R | Repetă ultimul lucru spus. |
| V | Pornește sau oprește vocea. |
| / | Trece la linia de comandă. |
| ? | Listează aceste taste. |

Mutarea cu tastele spune unde ați ajuns. Când o comandă așteaptă un punct, se spune și cât de departe și în ce direcție se află cursorul față de ultimul punct, de exemplu „2400 de la ultimul punct, spre dreapta, la 0 grade”.

## Comenzi

- {{cmd:ACCESS}} pornește sau oprește Access, sunetele de agățare și vocea, și spune starea.
- {{cmd:DESCRIBE}} spune ce conține desenul.
- {{cmd:WHEREAMI}} spune unde este cursorul.
- {{cmd:NEARBY}} spune ce se află aproape de cursor.
- {{cmd:SAYSEL}} spune ce este selectat, câte o propoziție pentru fiecare obiect.
- {{cmd:VOICE}} pornește sau oprește comenzile rostite.

Aceste cinci citesc desenul și afișează un răspuns; nu schimbă nimic.

## Sunete pentru agățări și mânere

Activați **Sunete pentru agățare și mâner** în Setări. Fiecare tip de agățare are propriul ton și sunet, astfel încât să deosebiți un capăt de un mijloc, un centru, o intersecție și celelalte, iar un mâner are un dublu tic. Sunetul se mută la stânga sau la dreapta, ca să urmărească cursorul pe ecran. Sunetele sunt generate pe calculator; nimic nu este descărcat.

## Comenzi vocale

Activați **Comenzi vocale** în Setări. Spuneți numele unei comenzi („line”, „circle”, „move”), apoi spuneți numerele așa cum le-ați citi: „punct trei sute, virgulă, patru sute”, „distanță una mie două sute”, „unghi patruzeci și cinci”. „Enter”, „cancel”, „undo” și „redo” fac ce spun. Ce s-a auzit este repetat cu voce tare, iar o frază care nu este o comandă este raportată, nu ghicită.

**Unde se recunoaște vorbirea.** CadCraft nu are un serviciu de vorbire propriu și nu trimite audio nicăieri. Cere browserului să recunoască vorbirea pe acest calculator. Dacă browserul poate, alegerea este **Pe acest calculator**, și niciun audio nu părăsește calculatorul. Dacă nu poate, vocea rămâne oprită, cu excepția cazului în care alegeți **Serviciu online al browserului**, ceea ce îi permite browserului să trimită audio serviciului de vorbire al producătorului său. Setările spun care se aplică, înainte să decideți.

## Ce nu face încă

- Doar CadCraft are Access. Celelalte șapte aplicații urmează, cu aceleași taste și sunete.
- Textul dintr-un desen (o notă, un nume de bloc) este citit așa cum este scris; nu este luat niciodată drept instrucțiune.
- A fost testat cu verificări sintetice și cu testele din browser; verificările manuale cu NVDA, VoiceOver și un tester nevăzător sau cu vedere slabă sunt încă de făcut. Dacă este încercat, spuneți-ne ce lipsește.
