---
title: Agățarea la punctele obiectelor
summary: Folosiți agățările la obiect, ortogonalul și grila ca să alegeți cu mouse-ul capete, mijloace, centre și intersecții exacte.
keywords: osnap, agățare la obiect, capăt, mijloc, centru, intersecție, perpendicular, cadran, cel mai apropiat, nod, inserare, ortogonal, grilă, f3, f8, f7, urmărire polară, polar, polarang, urmărire agățare la obiect, otrack, urmărire, f10, f11
from: 3cf17f94
---

## Ce veți realiza

Un dreptunghi cu cele două diagonale, un cerc centrat acolo unde se intersectează ele și o linie de la mijlocul unei laturi până la cerc. Fiecare punct este ales cu mouse-ul, iar fiecare punct este exact.

## Cum funcționează agățarea

Cât timp o comandă cere un punct, CadCraft caută puncte de agățare în jurul a aproximativ 10 pixeli de cursor. Când găsește unul, apar un marcaj și o etichetă („Capăt”, „Intersecție”), iar un clic aterizează **exact** pe acel punct, nu acolo unde este cursorul.

Agățările sunt active când {{ui:Agățare}} din bara de stare este apăsat. {{key:F3}} le activează și le dezactivează.

Agățările pe care le puteți folosi sunt:

| Agățare | Aterizează pe |
|---|---|
| Capăt | Capetele liniilor, arcelor și segmentelor de polilinie |
| Mijloc | Mijlocul liniilor, arcelor și segmentelor de polilinie |
| Centru | Centrul cercurilor și arcelor, precum și al segmentelor de arc ale polilinilor |
| Cadran | Punctele de 0, 90, 180 și 270 de grade ale cercurilor și arcelor |
| Intersecție | Locul unde se intersectează două obiecte |
| Perpendicular | Punctul de pe un obiect, perpendicular pe ultimul punct (are nevoie de un punct de bază) |
| Tangent | Punctul de pe un cerc sau arc unde o linie din ultimul punct îl atinge doar. Fără ultim punct încă (primul punct al unei linii), marcajul spune „amânat”: punctul de atingere se calculează după ce se cunoaște următorul punct, așa că o linie de la Tangent la Tangent atinge ambele cercuri |
| Cel mai apropiat | Cel mai apropiat punct de pe orice obiect |
| Nod | Obiecte punct |
| Inserare | Punctul de inserare al textului și al referințelor la blocuri |

Toate sunt active implicit, cu excepția Tangent și Cel mai apropiat. Cel mai apropiat câștigă de obicei când doriți altceva; activați Tangent când aveți nevoie de el.

## Alegerea agățărilor

1. Faceți clic pe săgeata mică de lângă {{ui:Agățare}} din bara de stare. Se deschide lista {{ui:Agățări la obiect}}.
2. Bifați sau debifați agățări. Modificările se aplică imediat.
3. Faceți din nou clic pe săgeată ca să închideți lista.

CadCraft reține alegerea făcută, precum și setările {{ui:Grilă}}, {{ui:Ortogonal}} și {{ui:Agățare}}, în acest browser.

## Pași

1. Tastați `REC` și apăsați {{key:Enter}}.
2. Tastați `0,0` și apăsați {{key:Enter}}.
3. Tastați `@4000,3000` și apăsați {{key:Enter}}. Apare un dreptunghi.
4. Faceți clic pe {{ui:Extinderi}}.
5. Tastați `L` și apăsați {{key:Enter}}.
6. Mutați cursorul în colțul din stânga jos. Marcajul afișează „Capăt”. Faceți clic.
7. Mutați-l în colțul din dreapta sus, până apare „Capăt”. Faceți clic.
8. Apăsați {{key:Enter}} ca să încheiați linia.
9. Apăsați din nou {{key:Enter}} ca să repetați {{cmd:LINE}} și desenați cealaltă diagonală, din colțul din dreapta jos până în colțul din stânga sus, în același mod.
10. Tastați `C` și apăsați {{key:Enter}} ca să începeți un cerc.
11. Mutați cursorul acolo unde se intersectează diagonalele. Marcajul afișează „Intersecție”. Faceți clic.
12. Tastați `800` și apăsați {{key:Enter}}.

Ar trebui să vedeți un cerc centrat exact pe intersecție.

13. Tastați `L` și apăsați {{key:Enter}}.
14. Mutați-vă spre mijlocul laturii stângi a dreptunghiului, până apare „Mijloc”. Faceți clic.
15. Mutați cursorul pe cerc, pe partea lui stângă. Marcajul afișează „Perpendicular” sau „Cadran”; aici sunt același punct. Faceți clic.
16. Apăsați {{key:Enter}}.

Noua linie pornește de la mijlocul laturii stângi și se oprește exact pe cerc.

## Săriți o agățare pentru un singur clic

Țineți apăsat {{key:Shift}} în timp ce faceți clic. Agățările la obiect sunt ignorate pentru acel clic, iar punctul ajunge exact unde este cursorul (sau pe direcția {{ui:Ortogonal}}, dacă acesta este activ).

## Ortogonal

{{ui:Ortogonal}} ({{key:F8}}) păstrează următorul punct drept, pe orizontală sau pe verticală, față de punctul de bază. Se aplică la clicuri și la introducerea directă a distanței (un număr simplu tastat la solicitare). Agățările la obiect au prioritate față de ortogonal: dacă apare un marcaj de agățare, clicul merge la agățare.

## Urmărire polară

{{ui:Polar}} ({{key:F10}}) este ortogonal la mai multe unghiuri. Cât timp o comandă are un punct de bază (ultimul punct al unei linii, punctul de bază al unei mutări), indicatorul se aliniază ori de câte ori se apropie de o rază care pornește din acel punct, la un multiplu al pasului polar: apare o linie punctată, iar o etichetă lângă cursor afișează `Polar: 1200 < 30°`. Faceți clic pentru a folosi acel punct sau tastați o distanță: `1200` merge exact 1200 pe rază.

Pasul este de 90° până îl schimbați: tastați {{cmd:POLARANG}}, apăsați {{key:Enter}} și tastați `30` (sau 45, 22.5, 15 …). Polar și ortogonal se exclud reciproc: activarea unuia o dezactivează pe cealaltă.

## Urmărirea agățărilor la obiect

{{ui:Urmărire}} ({{key:F11}}) aliniază indicatorul cu punctele de agățare pe care v-ați oprit, ca să alegeți un punct la același nivel cu un colț și deasupra altuia, fără să desenați linii ajutătoare.

1. Activați {{ui:Agățare}} și {{ui:Urmărire}}, apoi porniți o comandă care cere un punct (`L`).
2. Opriți indicatorul pe un punct de agățare, precum un colț, timp de o jumătate de secundă, fără să faceți clic. Apare o cruce mică ce îl marchează: este reținut. Stați din nou pe el ca să-l eliminați.
3. Mutați indicatorul direct de la el, orizontal sau vertical. O linie punctată urmează indicatorul, iar eticheta afișează `Track: 600 < 90°`. Faceți clic sau tastați o distanță.
4. Rețineți un al doilea punct și mutați-vă acolo unde verticala printr-unul se întâlnește cu orizontala prin celălalt: indicatorul se agață de acea intersecție (`Track: where two lines meet`).

Cu {{ui:Polar}} activat și el, punctele reținute urmăresc la fiecare unghi polar. Până la șapte puncte sunt păstrate, până se încheie comanda. {{key:Shift}} oprește urmărirea pentru un singur clic, ca și agățările.

## Grila

{{ui:Grilă}} ({{key:F7}}) afișează o grilă de linii în spatele desenului, cu linii mai groase la fiecare a cincea linie; distanța se schimbă când faceți zoom. Este doar un ghid până activați {{ui:Agățare la grilă}} ({{key:F9}}): atunci clicurile aterizează pe cel mai apropiat punct de grilă, cu excepția cazului în care o agățare la obiect ia punctul primul.

## Tastele de funcție de pe calculator

{{key:F9}} este {{ui:Agățare la grilă}}, {{key:F10}} este {{ui:Polar}}, iar {{key:F11}} este {{ui:Urmărire}}.

:::mac
Pe un Mac, F3, F7, F8 și F9 controlează de obicei Mission Control și media. Țineți apăsat **fn** împreună cu tasta sau activați tastele funcționale standard, cum se descrie în [Taste, mouse-uri și trackpad-uri](common:keys). Butoanele din bara de stare funcționează mereu.
:::

:::firefox
În Firefox, F7 este și tasta pentru navigarea cu cursorul în text. Dacă Firefox întreabă dacă să activeze navigarea cu cursorul, alegeți **Nu**. Folosiți butonul {{ui:Grilă}} dacă întrebarea revine.
:::

:::touch
Pe un ecran tactil nu există indicator la trecerea peste, deci marcajul de agățare apare doar acolo unde atinge degetul. Măriți mult pentru ținte mici sau tastați coordonatele.
:::

## Greșeli frecvente

- **Clicul a mers în alt punct.** Uitați-vă la eticheta marcajului înainte de a face clic: Capăt câștigă în fața Mijlocului când amândouă sunt aproape. Măriți sau debifați agățările de care nu aveți nevoie.
- **Nu apare niciun marcaj.** {{ui:Agățare}} este oprit, sau agățarea dorită este debifată, sau obiectul se află pe un strat oprit sau înghețat.
- **Agățările iau lucrul greșit într-un desen aglomerat.** Măriți. Distanța de agățare se măsoară în pixeli de ecran, deci zoom-ul face distanța mai mică pe desen.
- **Așteptarea ca Shift să dea o linie dreaptă.** În CadCraft, Shift oprește agățările pentru un singur clic. Folosiți {{ui:Ortogonal}} pentru linii drepte.
- **Așteptarea ca punctele să cadă pe puncte de grilă.** Activați {{ui:Agățare la grilă}} ({{key:F9}}) sau tastați coordonatele pentru numere rotunde.
