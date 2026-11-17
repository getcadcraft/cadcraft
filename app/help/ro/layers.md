---
title: Organizarea unui desen cu straturi
summary: Creați straturi pentru pereți, uși și note, setați culori, faceți un strat curent și dezactivați, înghețați, blocați sau împiedicați trasarea straturilor.
keywords: strat, straturi, la, strat curent, înghețare, dezghețare, blocare, inactiv, activ, trasare, fără trasare, culoare, proprietăți strat, layiso, layuniso, izolare, layoff, layfrz, laymcur, layon, laythw, redenumire, laymrg, combinare, laydel, ștergere strat
from: cd033591
---

## Ce veți crea

Trei straturi, Walls, Doors și Notes, fiecare cu propria culoare, cu obiecte desenate pe fiecare și mutate între ele.

## Panoul Straturi

Straturile se află în panoul din stânga, sub {{ui:Layers}}. Fiecare rând arată, de la stânga la dreapta:

- un punct: plin pentru stratul **curent**, unde merg obiectele noi;
- o mostră de culoare;
- numele stratului;
- patru butoane: activ/inactiv (ochi), înghețare (fulg de zăpadă), blocare (lacăt) și trasare (imprimantă).

Fiecare desen are un strat numit `0`. Tastarea `LA` și apăsarea {{key:Enter}} duc la panou.

## Creați straturi

1. Faceți clic pe {{ui:New layer}} deasupra listei. Se deschide o casetă pentru nume.
2. Tastați `Walls` și apăsați {{key:Enter}} (sau faceți clic pe {{ui:Add}}).

Bara de stare afișează „Stratul Walls a fost adăugat și făcut curent.” Noul strat primește culoarea 7 (negru pe tema luminoasă, alb pe cea întunecată).

3. Faceți clic din nou pe {{ui:New layer}}, tastați `Doors` și apăsați {{key:Enter}}.
4. Faceți clic din nou pe {{ui:New layer}}, tastați `Notes` și apăsați {{key:Enter}}.

Notes este acum curent.

## Dați fiecărui strat o culoare

1. Faceți clic pe mostra de culoare din rândul Walls. Se deschide selectorul de culori al sistemului.
2. Alegeți o culoare și confirmați.

Mostra și tot ce este pe Walls și are culoarea {{ui:By layer}} se schimbă.

:::note
O culoare aleasă care corespunde uneia dintre cele 255 de culori standard CAD este salvată ca acel număr. Orice altă culoare este păstrată exact în CadCraft, dar este salvată ca cea mai apropiată culoare standard într-un fișier DWG sau DXF.
:::

## Desenați pe un strat

1. Faceți clic pe numele **Walls** din listă. Punctul său se umple, iar bara de stare afișează „Strat curent: Walls”.
2. Desenați un dreptunghi (`REC`). Acesta ajunge pe Walls.
3. Faceți clic pe **Doors** și desenați un arc (`A`). Acesta ajunge pe Doors.

Puteți alege și stratul curent în {{ui:Current settings}}, din dreapta (fără nimic selectat), la {{ui:Layer}}.

## Mutați obiecte pe alt strat

1. Selectați obiectele.
2. În panoul din dreapta, alegeți noul strat la {{ui:Layer}}.

Ele trec pe acel strat și preiau culoarea lui dacă au culoarea {{ui:By layer}}.

## Inactiv, înghețat, blocat și trasare

| Buton | Ce face |
|---|---|
| Activ/inactiv (ochi) | Ascunde obiectele stratului. Nu pot fi văzute, selectate sau agățate. |
| Înghețare (fulg de zăpadă) | Același efect ca inactiv în CadCraft. Este păstrat separat, deoarece alte programe le tratează diferit, iar setarea este salvată. |
| Blocare (lacăt) | Obiectele rămân vizibile și puteți să le agățați, dar nu pot fi selectate sau modificate. Util pentru un fundal peste care trasați. |
| Trasare (imprimantă) | Când este apăsat, stratul rămâne afișat pe ecran, dar **nu este inclus** în trasări și PDF-uri. Folosiți-l pentru linii de construcție și note personale. |

Treceți cu cursorul peste un buton pentru a vedea ce va face („Dezactivare”, „Înghețare”, „Blocare”, „Nu include acest strat la trasare”).

Nu puteți dezactiva stratul curent: bara de stare afișează „Acesta este stratul curent. Faceți mai întâi alt strat curent.” Dacă faceți clic pe numele unui strat pentru a-l face curent, acesta se și activează și se dezghețează.

Fiecare modificare a straturilor, din panou sau printr-o comandă, este un singur pas de anulare: {{key:Mod+Z}} o readuce.

## Lucrați cu straturile prin selectarea obiectelor

Nu trebuie să cunoașteți numele unui strat: selectați un obiect de pe el. Tastați comanda sau deschideți {{ui:Tools}} din partea de sus a panoului {{ui:Layers}}.

| Comandă | Ce face |
|---|---|
| {{cmd:LAYISO}} | Selectați obiecte, apoi apăsați {{key:Enter}}: rămân active numai straturile lor, toate celelalte straturi sunt dezactivate. Dacă stratul curent este dezactivat, unul dintre straturile izolate devine curent. |
| {{cmd:LAYUNISO}} | Reactivează straturile pe care le-a dezactivat ultima comandă {{cmd:LAYISO}} și redă stratul curent pe care îl modificase. |
| {{cmd:LAYOFF}} | Faceți clic pe obiecte unul după altul: stratul fiecăruia este dezactivat. Tastați `U` pentru a anula ultimul, {{key:Enter}} pentru a încheia. |
| {{cmd:LAYFRZ}} | Același lucru, înghețând fiecare strat. |
| {{cmd:LAYMCUR}} | Faceți clic pe un obiect: stratul lui devine curent (și este activat și dezghețat). Dacă un obiect este deja selectat, acesta este folosit. |
| {{cmd:LAYON}} | Activează toate straturile. |
| {{cmd:LAYTHW}} | Dezghețează toate straturile. |

Stratul curent nu este niciodată dezactivat sau înghețat în acest mod: istoricul o spune, iar stratul curent îl puteți schimba întâi cu {{cmd:LAYMCUR}}. Selectarea unei referințe la bloc folosește stratul propriu al referinței.

## Redenumire, combinare și ștergere straturi

- {{cmd:RENAME}}: tastați `LA`, vechiul nume și noul nume. Fiecare obiect de pe strat urmează. (`B` redenumește un bloc în același mod, cu toate referințele la el.)
- {{cmd:LAYMRG}}: faceți clic pe un obiect de pe fiecare strat pentru a combina (sau tastați `N` și un nume), apăsați {{key:Enter}}, apoi alegeți stratul-țintă și răspundeți `Y`. Obiectele trec pe stratul-țintă — în model, pe planșe și în blocuri — iar straturile combinate dispar.
- {{cmd:LAYDEL}}: alegeți un obiect de pe strat (sau `N` și numele lui) și răspundeți `Y`. Stratul dispare **împreună cu fiecare obiect de pe el**, peste tot. Stratul 0, DEFPOINTS și stratul curent nu pot fi șterse.

Fiecare este un singur pas de anulare. Toate trei sunt în {{ui:Tools}}, din partea de sus a panoului {{ui:Layers}}.

1. Faceți clic pe o linie de perete, apoi tastați `LAYISO` și apăsați {{key:Enter}}. Rămâne activ doar Walls.
2. Desenați sau modificați ce aveți nevoie pe Walls.
3. Tastați `LAYUNISO` și apăsați {{key:Enter}}. Doors și Notes revin.

## Greșeli frecvente

- **Liniile noi au ajuns pe stratul greșit.** Verificați ce punct este plin înainte de a desena. Un strat nou devine curent imediat ce îl adăugați.
- **Un obiect nu se selectează.** Stratul său este blocat, inactiv sau înghețat.
- **Stratul tot se trasează în alt program.** DXF R12 nu poate stoca „fără trasare”. CadCraft păstrează setarea pentru sine când desenul are o planșă, dar alte programe vor trasa stratul respectiv.
- **Numele straturilor apar cu majuscule după salvare.** DXF R12 stochează numele cu majuscule, astfel că `Walls` revine ca `WALLS`, iar spațiile devin `_`. Un DWG salvat păstrează numele așa cum le-ați tastat.
- **Redenumirea, combinarea sau ștergerea unui strat.** Folosiți {{cmd:RENAME}}, {{cmd:LAYMRG}} sau {{cmd:LAYDEL}} (și în {{ui:Tools}}): vezi mai jos.

## Grupați straturile

Mențineți lista scurtă punând straturile în dosare, precum Existent, Propus și Servicii. Fiecare dosar se restrânge, iar comutatoarele lui activează sau dezactivează toate straturile, le înghețează sau le blochează împreună. Stratul curent nu este niciodată dezactivat.

În {{ui:Tools}} din panoul Straturi, alegeți {{ui:Add ready-made groups}} pentru un set făcut pentru lucrări rezidențiale mici, {{ui:Group by name}} pentru a grupa straturile care au același prefix (`E-Walls`, `E-Doors`) sau {{ui:New group}}. Trageți un strat pe un dosar sau folosiți lista de deasupra straturilor pentru stratul curent. Tastați în {{ui:Find a layer}} pentru a restrânge lista. `LAYGROUP` (`LG`) face același lucru din linia de comandă.

Straturile în sine nu se schimbă, așa că alte programe CAD le văd ca o listă plată obișnuită. CadCraft păstrează grupurile în fișier.
