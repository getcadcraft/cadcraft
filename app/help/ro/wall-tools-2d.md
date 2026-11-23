---
title: Forme de pereți, tăieturi, decalări și blocări pentru pereții 2D
summary: Desenați pereți ca dreptunghiuri, poligoane și arce, îi despicați și îi reuniți, îi mutați după o cotă și blocați un perete de altul sau de o linie de grilă. Aceleași unelte ca pereții din BimCraft.
keywords: perete, bara pereților, butoane pereți, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, stil de unire, îmbinare în unghi, tăiat drept, drept, lacăt, mâner, trage capătul, rotire, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, unire, interzicere unire, blocare, linie de grilă, despicare, interval, decalare, linie de locație
from: 49044181
---

Aceste unelte lucrează pe pereții 2D din `WALL` (vedeți „Desenarea pereților 2D, a ușilor și a ferestrelor”). Ele folosesc aceleași reguli ca uneltele de perete din BimCraft, astfel încât un perete se comportă la fel în ambele.

## Unde sunt uneltele

- Pe bara de instrumente, grupul {{ui:Pereți}} are {{ui:Perete}}, {{ui:Dreptunghi}}, {{ui:Divizare}} și {{ui:Decalare}}. Meniul său {{ui:Mai multe}} are toate celelalte unelte de perete, fiecare cu pictograma ei.
- În stilurile de meniu panglică, fila {{ui:Pereți}} are panourile {{ui:Desenare pereți}}, {{ui:Decupare}}, {{ui:Setare și modificare}}, {{ui:Menținere}} și {{ui:Unire}}.
- Într-o aranjare de foaie, rândurile de instrumente și cutia de unelte arată același grup {{ui:Pereți}}.
- Puteți tasta și orice comandă numită mai jos.

## Îmbinările se păstrează

Când capătul unui perete ajunge pe alt perete, CadCraft salvează această îmbinare la ambii pereți. Nu mai calculează îmbinările din locul în care se află capetele. Deci:

- Pereții îmbinați cu un perete pe care îl mutați îl urmează și rămân îmbinați. Capetele lor alunecă de-a lungul propriilor linii, astfel încât nimic nu se întoarce.
- Trăgând un capăt al unui perete de mâner, peretele îmbinat acolo își păstrează direcția. Capătul lui alunecă de-a lungul propriei linii până întâlnește peretele tras, astfel încât capătul tras ajunge pe acea linie, nu întotdeauna sub cursor. Previzualizarea arată unde. Un perete care intră în peretele tras îl urmează de-a lungul propriei linii. Trăgând capătul drept de-a lungul peretelui se schimbă lungimea lui, iar peretele îmbinat acolo se mută cu el.
- `ROTATE` pe un perete îmbinat funcționează la fel: capetele vecinilor alunecă de-a lungul propriilor linii până la peretele întors.
- Pentru a muta un colț, selectați ambii pereți care se întâlnesc acolo și trageți mânerul din colț. Ambii pereți rămân în colț și se întorc amândoi. Pereții mai departe rămân cum erau.
- Țineți {{key:Alt}} apăsat când faceți clic pe noul loc al mânerului, ca să rupeți intenționat îmbinările: peretele merge unde l-ați pus, iar nimic nu urmează.
- Dacă o tragere ar întoarce un perete îmbinat înapoi prin propriul capăt îndepărtat, este refuzată și nimic nu se schimbă.
- Un perete desenat cu {{ui:Fără unire}} (`D` în `WALL`), sau oprit din Proprietăți ({{ui:Fără unire la început}}, {{ui:Fără unire la sfârșit}}), rămâne liber la acel capăt, chiar dacă atinge alt perete, până îl permiteți din nou.
- `WALLDISJOIN` ({{ui:Interzicere unire}} în grupul {{ui:Pereți}}) face același lucru cu un clic: faceți clic pe un perete aproape de un capăt ca să interziceți unirile la acel capăt, și din nou ca să le permiteți.
- Un desen mai vechi nu are încă îmbinări salvate. Prima modificare pe care o faceți le găsește o dată, din cum stăteau pereții înainte de modificare, și le salvează. `WALLJOINS` face asta imediat.
- Fișierele DWG și DXF transportă îmbinările în interiorul fiecărui perete. CadCraft le citește așa cum au fost salvate. Un program care nu păstrează date extinse arată pereții ca blocuri simple și pierde îmbinările, iar o îmbinare ale cărei pereți au fost mutați în alt program se pierde la următoarea modificare a oricăruia dintre ei.

## Stilul de îmbinare al unui colț

Un colț unde doi pereți se întâlnesc cap la cap este desenat ca îmbinare în unghi, dacă nu alegeți alt stil.

- `WALLJOINSTYLE` ({{ui:Stil de unire}} în grupul {{ui:Pereți}}): faceți clic pe colț. Fiecare clic trece la stilul următor: {{ui:Îmbinare în unghi}}, {{ui:Tăiat drept}}, {{ui:Drept}}, apoi din nou {{ui:Îmbinare în unghi}}. Tastați `T` ca să schimbați care dintre cei doi pereți trece prin colț, la colțul pe care l-ați ales ultimul. Apăsați {{key:Enter}} ca să încheiați. O rulare a comenzii este un pas de anulare.
- {{ui:Tăiat drept}}: un perete trece până la fața îndepărtată a celuilalt, iar celălalt se oprește lângă latura lui. {{ui:Drept}}: la fel, dar peretele care trece se încheie drept față de el însuși. La un unghi drept, cele două arată la fel.
- În Proprietățile unui perete: {{ui:Stil de unire la început}}, {{ui:Stil de unire la sfârșit}}, și {{ui:Trece prin la început}}, {{ui:Trece prin la sfârșit}}.
- Stilul se salvează cu ambii pereți și călătorește în fișierele DWG și DXF. O copie a unui perete începe fără el.
- O îmbinare în T nu are stil de ales: peretele a cărui latură este întâlnită trece prin. Un colț unde se întâlnesc trei sau mai mulți pereți rămâne îmbinare în unghi. La fel și un colț foarte ascuțit (sub circa 30 de grade) și doi pereți pe aceeași linie.

## Desenați forme de pereți

Fiecare face pereții dintr-un singur pas de anulare, cu colțurile îmbinate. În `WALL`, `O` setează o decalare de plasare (cât de mult la stânga clicurilor merge peretele), iar `D` oprește unirea pentru pereții pe care îi desenați în continuare.

- `WALLRECT` (`WR`): două colțuri opuse, ca la `RECTANG`.
- `WALLROT`: prima latură, apoi cât de departe merge cealaltă latură, pentru un dreptunghi la orice unghi.
- `WALLPOLY` (`WP`): numărul de laturi (3 până la 64), centrul, `I` pentru înscris sau `C` pentru circumscris, apoi raza, ca la `POLYGON`: faceți clic pe ea sau tastați-o (o rază tastată merge spre cursor, sau de-a lungul lui X când cursorul este încă pe centru).
- `WALLARC` (`WARC`): centrul, începutul, sfârșitul. `D` întoarce arcul în sens invers.
- `WALLTAN`: faceți clic aproape de capătul unui perete, apoi pe sfârșitul arcului, care pleacă de-a lungul peretelui.
- `WALLPICK`: faceți clic pe o linie sau polilinie și spuneți dacă să luați și liniile îmbinate de ea.
- `WALLTRACE`: faceți clic într-o suprafață închisă de linii și pereți ca să puneți pereți în jurul celei mai mici.

Pereții din plan sunt drepți, așa că un arc se desenează ca pereți scurți drepți de câte 15 grade fiecare. Se îmbină ca orice colț.

## Tăierea pereților

- `WALLSPLIT` (`WS`): faceți clic pe perete, apoi pe punct. `C` taie unde îl traversează alt perete, `G` lasă un interval între părți, `F` face capetele tăiate libere în loc de unite. Prima parte păstrează locul peretelui în desen, iar ușile și ferestrele merg cu partea lor. O tăietură prin o ușă sau o fereastră este refuzată.
- `WALLSPLITGAP` ({{ui:Divizare cu interval}}): aceeași despicare, dar întreabă întâi intervalul.
- `WALLDELSEG`: faceți clic pe perete, apoi pe cele două capete ale bucății de șters.
- `WALLREJOIN`: faceți clic pe două părți ale aceluiași perete ca să le faceți din nou un singur perete.

## Mutarea pereților după distanță

- `WALLDIM` ({{ui:Editare după cotă}}): faceți clic pe o cotă liniară sau aliniată care merge de la un perete la altul, apoi tastați noua valoare. Peretele de la capătul îndepărtat se mută pătrat față de el însuși, peretele de la primul capăt rămâne, iar pereții uniți de el urmează. Punctul îndepărtat al cotei se mută cu peretele său, astfel încât cota arată valoarea pe care ați tastat-o.
- `WALLOFFSET` (`WO`): faceți clic pe un perete, apoi pe partea în care să-l mutați (`D` tastează o distanță, `C` face în schimb o copie).
- `WALLSTRETCH`: o fereastră în jurul capetelor de perete, apoi un punct de bază și un al doilea punct.
- În Proprietăți, o {{ui:Lungime}} tastată păstrează începutul și ia cu el peretele unit la capătul îndepărtat, iar o {{ui:Grosime}} nouă crește dinspre {{ui:Linie de locație}} aleasă (fața stângă, fața dreaptă sau centrul).

## Cotarea între liniile de centru ale pereților

Linia centrală a unui perete nu este desenată, dar agățarea de obiecte o găsește. Cu agățarea de obiecte pornită ({{key:F3}}), treceți cursorul peste mijlocul grosimii unui perete: marcajul spune `Centrul peretelui: capăt` sau `Centrul peretelui: mijloc`, iar linia centrală apare punctată cât timp marcajul este pe ea. Cu {{ui:Perpendicular}} sau {{ui:Cel mai apropiat}} pornite în lista agățărilor de obiecte, acestea funcționează și pe linia centrală.

1. Porniți `DIMLINEAR` (sau `DIMALIGNED`).
2. Faceți clic pe primul perete unde marcajul spune `Centrul peretelui: mijloc` sau `Centrul peretelui: capăt`.
3. Faceți clic pe al doilea perete la fel, apoi faceți clic unde merge linia de cotă.
4. Ca să schimbați distanța, porniți `WALLDIM`, faceți clic pe cotă și tastați noua valoare. Al doilea perete se mută.

Agățarea de linia centrală funcționează în fiecare comandă care cere un punct.

## Blocarea pereților

O blocare rămâne cu peretele în fișier. Dacă mutați un perete blocat, celălalt îl urmează. Dacă o modificare mută cei doi pereți diferit, este refuzată și nimic nu se schimbă.

- `WALLHOLD`: blocați un perete de alt perete. `A` îl mută mai întâi pe linia celuilalt perete, `K` păstrează distanța pe care o are.
- `WALLHOLDDIM`: blocați distanța dintre doi pereți paraleli.
- `WALLGRID`: blocați un perete de o linie de grilă (o linie pe un strat de grilă, cu eticheta ei în text la un capăt), fie de-a lungul ei, fie cu un capăt pe ea. Un perete blocat de-a lungul liniei păstrează distanța pe care o are față de ea. Mutați linia de grilă cu `GRIDMOVE` și peretele o urmează întreg, cu pereții uniți. Un perete care stă de-a lungul unei linii de grilă se mută întreg odată cu ea chiar fără blocare, iar un perete care doar se termină pe linie este întins de acel capăt.
- `WALLHOLDS` listează blocările. `WALLUNHOLD` scoate blocările de pe un perete.
- Fiecare blocare arată un mic lacăt în plan: lângă mijlocul peretelui blocat, sau lângă capătul blocat de o linie de grilă. Faceți clic pe un lacăt ca să scoateți acea blocare.

## Ce nu este încă aici

Blocările folosesc liniile centrale ale pereților. Pereții de aici nu au straturi, deci nu există prioritate de straturi la o joncțiune, iar pereții nu se curbează (vedeți arcele de mai sus). Nimeni nu a încercat aceste unelte pe un desen mare, iar ele nu au fost verificate într-un alt program CAD.
