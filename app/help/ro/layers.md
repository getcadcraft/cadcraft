---
title: Organizarea unui desen cu straturi
summary: Creați straturi pentru pereți, uși și note, setați culorile, faceți un strat curent și opriți, înghețați, blocați sau scoateți straturi din trasare.
keywords: strat, straturi, la, strat curent, îngheț, dezgheț, blocare, oprit, pornit, trasare, fără trasare, culoare, proprietăți strat, layiso, layuniso, izolare, layoff, layfrz, laymcur, layon, laythw, redenumire, laymrg, îmbinare, laydel, ștergere strat
from: ba9f0617
---

## Ce veți realiza

Trei straturi, Pereți, Uși și Note, fiecare cu propria culoare, cu obiecte desenate pe fiecare și mutate între ele.

## Panoul Straturi

Straturile se află în panoul din stânga, sub {{ui:Straturi}}. Fiecare rând arată, de la stânga la dreapta:

- un punct: plin pentru stratul **curent**, unde ajung obiectele noi;
- o mostră de culoare;
- numele stratului;
- patru butoane: pornit/oprit (ochi), îngheț (fulg de zăpadă), blocare (lacăt) și trasare (imprimantă).

Fiecare desen are un strat numit `0`. Tastarea `LA` și apăsarea lui {{key:Enter}} duc la panou.

## Crearea straturilor

1. Faceți clic pe {{ui:Strat nou}} deasupra listei. Se deschide o casetă pentru nume.
2. Tastați `Pereți` și apăsați {{key:Enter}} (sau faceți clic pe {{ui:Adăugare (A)}}).

Bara de stare spune „Strat Pereți adăugat și făcut curent.” Stratul nou primește culoarea 7 (negru pe tema deschisă, alb pe cea închisă).

3. Faceți clic din nou pe {{ui:Strat nou}}, tastați `Uși` și apăsați {{key:Enter}}.
4. Faceți clic din nou pe {{ui:Strat nou}}, tastați `Note` și apăsați {{key:Enter}}.

Note este acum curent.

## Culoarea fiecărui strat

1. Faceți clic pe mostra de culoare de pe rândul Pereți. Se deschide selectorul de culori al sistemului.
2. Alegeți o culoare și confirmați.

Mostra și tot ce este colorat {{ui:DupăStrat}} pe Pereți se schimbă.

:::note
O culoare aleasă care corespunde uneia dintre cele 255 de culori CAD standard este păstrată ca acel număr. Orice altă culoare se păstrează exact în CadCraft, dar se salvează ca cea mai apropiată culoare standard într-un fișier DWG sau DXF.
:::

## Desenarea pe un strat

1. Faceți clic pe numele **Pereți** din listă. Punctul său se umple, iar bara de stare spune „Strat curent: Pereți”.
2. Desenați un dreptunghi (`REC`). Acesta ajunge pe Pereți.
3. Faceți clic pe **Uși** și desenați un arc (`A`). Acesta ajunge pe Uși.

Puteți alege și stratul curent din {{ui:Setări curente}} din dreapta (când nu este nimic selectat), sub {{ui:Strat}}.

## Mutarea obiectelor pe alt strat

1. Selectați obiectele.
2. În panoul din dreapta, alegeți noul strat în {{ui:Strat}}.

Ele se mută pe acel strat și iau culoarea lui dacă propria culoare este {{ui:DupăStrat}}.

## Oprit, îngheț, blocare și trasare

| Buton | Ce face |
|---|---|
| Pornit/oprit (ochi) | Ascunde obiectele stratului. Nu pot fi văzute, selectate sau agățate. |
| Îngheț (fulg de zăpadă) | Același efect ca oprit în CadCraft. Păstrat separat pentru că alte programe le tratează diferit, iar setarea se salvează. |
| Blocare (lacăt) | Obiectele rămân vizibile și se poate agăța de ele, dar nu pot fi selectate sau modificate. Bun pentru un fundal peste care trasați. |
| Trasare (imprimantă) | Când este apăsat, stratul se vede pe ecran, dar este **lăsat afară din trasări** și din PDF-uri. Folosiți-l pentru linii de construcție și note pentru sine. |

Treceți cu mouse-ul peste un buton ca să vedeți ce va face („Oprire”, „Îngheț”, „Blocare”, „Nu trasa acest strat”).

Nu puteți opri stratul curent: bara de stare spune „Acesta este stratul curent. Mai întâi faceți curent alt strat.” Un clic pe numele unui strat ca să-l faceți curent îl și pornește și îl dezgheață.

Orice modificare a straturilor, din panou sau printr-o comandă, este un pas de anulare: {{key:Mod+Z}} o readuce.

## Lucrul cu straturile prin alegerea obiectelor

Nu trebuie să cunoașteți numele unui strat: alegeți un obiect de pe el. Tastați comanda sau deschideți {{ui:Instrumente}} din vârful panoului {{ui:Straturi}}.

| Comandă | Ce face |
|---|---|
| {{cmd:LAYISO}} | Selectați obiecte, apoi apăsați {{key:Enter}}: rămân pornite doar stratele lor, toate celelalte straturi sunt oprite. Dacă stratul curent este oprit, unul dintre stratele izolate devine curent. |
| {{cmd:LAYUNISO}} | Repornește stratele pe care le-a oprit ultimul {{cmd:LAYISO}} și dă înapoi stratul curent pe care l-a schimbat. |
| {{cmd:LAYOFF}} | Faceți clic pe obiecte unul după altul: stratul fiecăruia se oprește. Tastați `U` pentru a anula ultimul, {{key:Enter}} pentru a încheia. |
| {{cmd:LAYFRZ}} | La fel, înghețând fiecare strat. |
| {{cmd:LAYMCUR}} | Faceți clic pe un obiect: stratul lui devine curent (și este pornit și dezghețat). Cu un obiect deja selectat, se folosește acela. |
| {{cmd:LAYON}} | Pornește toate straturile. |
| {{cmd:LAYTHW}} | Dezgheață toate straturile. |

Stratul curent nu este niciodată oprit sau înghețat în acest fel: istoricul o spune, iar mai întâi puteți face alt strat curent cu {{cmd:LAYMCUR}}. Alegerea unei referințe de bloc folosește stratul propriu al referinței.

## Redenumirea, îmbinarea și ștergerea straturilor

- {{cmd:RENAME}}: tastați `LA`, numele vechi și cel nou. Fiecare obiect de pe strat urmează. (`B` redenumește un bloc în același fel, cu fiecare referință a lui.)
- {{cmd:LAYMRG}}: faceți clic pe un obiect de pe fiecare strat ca să le îmbinați (sau tastați `N` și un nume), apăsați {{key:Enter}}, apoi alegeți stratul țintă și răspundeți `Y`. Obiectele se mută pe țintă, în model, în foi și în blocuri, iar straturile îmbinate dispar.
- {{cmd:LAYDEL}}: alegeți un obiect de pe strat (sau `N` și numele lui) și răspundeți `Y`. Stratul dispare **împreună cu toate obiectele de pe el**, peste tot. Stratul 0, DEFPOINTS și stratul curent nu pot fi șterse.

Fiecare este un pas de anulare. Toate trei se află în {{ui:Instrumente}} din vârful panoului {{ui:Straturi}}.

1. Faceți clic pe o linie de perete, apoi tastați `LAYISO` și apăsați {{key:Enter}}. Rămâne doar Pereți.
2. Desenați sau modificați ce aveți nevoie pe Pereți.
3. Tastați `LAYUNISO` și apăsați {{key:Enter}}. Uși și Note revin.

## Greșeli frecvente

- **Liniile noi au mers pe stratul greșit.** Verificați ce punct este umplut înainte de a desena. Un strat nou devine curent imediat ce îl adăugați.
- **Un obiect nu se selectează.** Stratul său este blocat, oprit sau înghețat.
- **Stratul tot se tipărește în alt program.** DXF R12 nu poate păstra „nu trasa”. CadCraft păstrează setarea pentru sine când desenul are o foaie, dar alte programe vor trasa stratul respectiv.
- **Numele straturilor cu majuscule după salvare.** DXF R12 stochează numele cu majuscule, astfel încât `Pereți` revine ca `PEREȚI`, iar spațiile devin `_`. Un DWG salvat păstrează numele așa cum le-ați tastat.
- **Redenumirea, îmbinarea sau ștergerea unui strat.** Folosiți {{cmd:RENAME}}, {{cmd:LAYMRG}} sau {{cmd:LAYDEL}} (și în {{ui:Instrumente}}): vedeți mai jos.

## Gruparea straturilor

Păstrați lista scurtă punând straturile în dosare, cum ar fi Existent, Propus și Servicii. Fiecare dosar se strânge, iar comutatoarele lui pornesc sau opresc toate straturile sale, le îngheață sau le blochează împreună. Stratul curent nu este niciodată oprit.

În {{ui:Instrumente}} din panoul Straturi, alegeți {{ui:Adăugare grupuri gata făcute}} pentru un set făcut pentru lucrări rezidențiale mici, {{ui:Grupare după nume}} ca să grupați straturile care au același prefix (`E-Pereți`, `E-Uși`), sau {{ui:Grup nou}}. Trageți un strat pe un dosar sau folosiți lista de deasupra straturilor pentru stratul curent. Tastați în {{ui:Găsiți un strat}} ca să restrângeți lista. `LAYGROUP` (`LG`) face același lucru în linia de comandă.

Pentru a redenumi un grup, faceți dublu clic pe numele lui (sau selectați-l și apăsați {{key:F2}}), tastați noul nume și apăsați {{key:Enter}}; {{key:Esc}} păstrează numele vechi, iar {{cmd:UNDO}} îl readuce. {{ui:Grup nou}} se află în {{ui:Instrumente}} din panoul Straturi.

Straturile în sine nu se schimbă, astfel încât alte programe CAD le văd ca o listă plată obișnuită. CadCraft păstrează grupurile în fișier.
