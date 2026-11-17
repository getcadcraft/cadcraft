---
title: "Politici implicite: stabiliți cu ce pornește un desen nou"
summary: Spuneți o dată ce unități, format de lungime, precizie, înălțime de text și hârtie de foaie pornește un desen nou, pentru lucrări metrice și imperiale, și partajați politicile în tot biroul ca un fișier mic.
keywords: implicit, implicite, valori implicite, politici implicite, politică, standard de birou, șablon, desen nou, unități, insunits, format lungime, arhitectural, precizie, luprec, înălțime text, hârtie foaie, a1, partajare, export, import, json
from: 7b80fd13
---

## Ce veți face

Spuneți CadCraft cu ce trebuie să pornească un desen nou, ca nimeni din birou să nu mai ruleze UNITS și să schimbe aceleași lucruri de fiecare dată. Acesta este un supliment: este oprit până îl porniți, iar o politică pe care nu o setați lasă valoarea implicită a CadCraft exact cum este.

:::note
Acestea sunt valori implicite pentru desene **noi** și foi **noi**. Un desen deja început nu se schimbă, nici unul deschis.
:::

## Pași

1. Deschideți Setările, mergeți la {{ui:Suplimente}} și porniți {{ui:Politici implicite}}.
2. În Setări, deschideți fila **CadCraft** și alegeți {{ui:Politici implicite}} din lista din stânga.
3. Setați politicile dorite. Fiecare pornește de la **valoarea proprie a CadCraft**. O politică având o casetă **Metric** și una **Imperial** ia câte o valoare pentru fiecare tip de desen; completați doar pe cele de care aveți nevoie.
4. Nu există buton Salvare: fiecare modificare se salvează pe măsură ce o faceți.
5. Porniți un desen nou. Are unitățile, formatul de lungime, precizia și înălțimea de text pe care le-ați setat, iar prima sa foaie nouă este pe hârtia pe care ați ales-o.

## Politicile

- **Unitățile unui desen nou**: fără, milimetri, centimetri, metri, inci sau picioare.
- **Format lungime** și **Precizie lungime**: ce setează comanda UNITS, pentru un desen nou.
- **Înălțimea textului nou**, în unități de desen.
- **Hârtia unei foi noi**: hârtia pe care o folosește Foaie nouă.
- **Dimensiunile adnotărilor pe hârtie** (Setări › Global › Politici implicite): înălțimile biroului, în milimetri, așa cum se tipăresc. CadCraft folosește cea pentru note și etichete: {{cmd:ANNOSCALE}} stabilește înălțimea cu care începe textul nou la această înălțime, la scara de adnotare. Vezi [Unități, hârtii și scări](topic:units-papers-scales#annotate-by-scale).

Un desen în inci sau picioare folosește valorile Imperial; orice alt desen folosește valorile Metric. Un desen fără unități folosește sistemul de unități setat în Setări › Global › Politici implicite, sau Metric când nu este setat niciunul.

## Partajați-le în tot biroul

1. În Setări, deschideți fila **Global** și alegeți {{ui:Politici implicite}}.
2. Faceți clic pe {{ui:Salvare într-un fișier}}. Primiți un fișier mic care se termină în `.ccdefaults.json`.
3. Pe alt calculator, porniți suplimentul, deschideți același loc și faceți clic pe {{ui:Încărcare dintr-un fișier}}. Politicile din fișier înlocuiesc pe cele de pe acel calculator.

Un singur fișier conține politicile fiecărei aplicații CadCraft, deci același fișier funcționează și în BimCraft.

## De reținut

- Nu există politică pentru scara unei foi: vizualizarea unei foi noi se potrivește cu desenul, iar scara o setați pe foaie.
- Nu există politică pentru un stil de cotare: un desen nou nu are stiluri de cotare cu nume. Setați cotările cu DIMSTYLE sau porniți de la un desen care le conține deja.
- Fișierul este JSON simplu, deschis. O politică pe care fișierul o numește și pe care această versiune nu o cunoaște este lăsată afară și numită în mesaj; restul se încarcă.
- Politicile sunt păstrate în acest browser, nu în desen. Opriți suplimentul și totul revine la valorile proprii ale CadCraft.
