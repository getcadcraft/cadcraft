---
title: Forme, tăieturi, decalări și blocări pentru pereții 2D
summary: Desenați pereți ca dreptunghiuri, poligoane și arce, divizați-i și uniți-i din nou, mutați-i cu o cotă și blocați un perete de altul sau de o linie de grilă. Aceleași unelte ca pereții din BimCraft.
keywords: perete, pereți, bară pereți, butoane perete, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, stil de unire, îmbinare în unghi, tăiat drept, lacăt, mâner, tragere de capăt, rotire, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, unire, interzicere unire, blocare, linie de grilă, divizare, interval, decalare, linie de amplasare
from: f41e7433
---

Aceste unelte lucrează pe pereții 2D creați cu `WALL` (vezi „Desenarea pereților inteligenți, a ușilor și a ferestrelor în 2D”). Ele folosesc aceleași reguli ca uneltele de pereți din BimCraft, astfel încât un perete se comportă la fel în ambele.

## Unde sunt uneltele

- Pe bara de instrumente, grupul {{ui:Pereți}} are {{ui:Perete}}, {{ui:Dreptunghi}}, {{ui:Divizare}} și {{ui:Decalare}}. Meniul său {{ui:Mai multe}} are toate celelalte unelte de perete, fiecare cu pictograma sa.
- În stilurile de meniu cu panglică, fila {{ui:Pereți}} are panourile {{ui:Desenare pereți}}, {{ui:Decupare}}, {{ui:Setare și modificare}}, {{ui:Menținere}} și {{ui:Unire}}.
- În aranjarea în pagină (Layout), rândurile de bare de instrumente și caseta cu instrumente arată același grup {{ui:Pereți}}.
- Puteți tasta și orice comandă numită mai jos.

## Unirile sunt stocate

Când capătul unui perete ajunge pe alt perete, CadCraft salvează această unire împreună cu ambii pereți. Nu mai calculează unirile din nou după locul în care se află capetele. Deci:

- Pereții uniți cu un perete pe care îl mutați îl urmează și rămân uniți. Capetele lor alunecă de-a lungul propriilor linii, deci nimic nu se întoarce.
- Trageți un capăt al unui perete de mânerul său, iar peretele unit acolo își păstrează direcția. Capătul lui alunecă de-a lungul propriei linii până la peretele tras, deci capătul tras ajunge pe acea linie, nu întotdeauna sub cursor. Previzualizarea arată unde. Un perete care se sprijină pe peretele tras urmează pe propria linie. Tragerea capătului drept de-a lungul peretelui schimbă lungimea acestuia, iar peretele unit acolo se mută odată cu el.
- `ROTATE` pe un perete unit funcționează la fel: capetele vecinilor alunecă de-a lungul propriilor linii până la peretele rotit.
- Ca să mutați un colț, selectați ambii pereți care se întâlnesc acolo și trageți mânerul de pe colț. Ambii pereți rămân pe colț și se rotesc. Pereții mai departe rămân cum erau.
- Țineți {{key:Alt}} când faceți clic pe noul loc al mânerului, ca să rupeți intenționat unirile: peretele merge unde l-ați pus, iar nimic nu îl urmează.
- Dacă o tragere ar întoarce un perete unit înapoi prin propriul capăt îndepărtat, este refuzată și nimic nu se schimbă.
- Un perete desenat cu {{ui:Fără unire}} (`D` în `WALL`) sau dezactivat în {{ui:Proprietăți}} ({{ui:Fără unire la început}}, {{ui:Fără unire la sfârșit}}) rămâne liber la acel capăt, chiar dacă atinge alt perete, până când îi permiteți din nou unirea.
- `WALLDISJOIN` ({{ui:Interzicere unire}} din grupul {{ui:Pereți}}) face același lucru dintr-un clic: faceți clic pe un perete aproape de un capăt ca să interziceți unirea la acel capăt și faceți clic din nou ca să o permiteți.
- Un desen mai vechi nu are încă uniri stocate. Prima modificare pe care o faceți le găsește o dată, din modul în care stăteau pereții înainte de modificare, și le salvează. `WALLJOINS` face asta imediat.
- Fișierele DWG și DXF transportă unirile în interiorul fiecărui perete. CadCraft le citește așa cum au fost salvate. Un program care nu păstrează date extinse arată pereții ca blocuri simple și pierde unirile, iar o unire ale cărei pereți au fost mutați în alt program este pierdută la următoarea modificare a oricăruia dintre pereți.

## Stilul de unire al unui colț

Un colț în care doi pereți se întâlnesc cap la cap este desenat ca îmbinare în unghi, dacă nu alegeți alt stil.

- `WALLJOINSTYLE` ({{ui:Stil de unire}} din grupul {{ui:Pereți}}): faceți clic pe colț. Fiecare clic trece la stilul următor: {{ui:Îmbinare în unghi}}, {{ui:Tăiat drept}}, {{ui:Drept}}, apoi din nou {{ui:Îmbinare în unghi}}. Tastați `T` ca să schimbați care dintre cei doi pereți trece prin colțul pe care l-ați apăsat ultima dată. Apăsați {{key:Enter}} ca să terminați. O rulare a comandei este un singur pas de anulare.
- {{ui:Tăiat drept}}: un perete trece până la fața îndepărtată a celuilalt, iar celălalt se oprește lângă latura lui. {{ui:Drept}}: la fel, dar peretele care trece se termină drept față de el însuși. Într-un unghi drept, cele două arată la fel.
- În proprietățile unui perete: {{ui:Stil de unire la început}}, {{ui:Stil de unire la sfârșit}} și {{ui:Trece prin la început}}, {{ui:Trece prin la sfârșit}}.
- Stilul se salvează cu ambii pereți și se transmite în fișierele DWG și DXF. O copie a unui perete începe fără el.
- O unire în T nu are stil de ales: peretele a cărui latură este atinsă trece prin. Un colț în care se întâlnesc trei sau mai mulți pereți rămâne îmbinare în unghi. La fel și un colț foarte ascuțit (sub circa 30 de grade) și doi pereți pe o singură linie.

## Desenați forme de pereți

Fiecare creează pereții într-un singur pas de anulare, cu colțurile unite. În `WALL`, `O` setează o decalare de plasare (cât de departe la stânga clicurilor merge peretele), iar `D` dezactivează unirea pentru pereții pe care îi desenați în continuare.

- `WALLRECT` (`WR`): două colțuri opuse, ca `RECTANG`.
- `WALLROT`: prima latură, apoi cât de departe merge cealaltă latură, pentru un dreptunghi la orice unghi.
- `WALLPOLY` (`WP`): numărul de laturi (de la 3 la 64), centrul, `I` pentru înscris sau `C` pentru circumscris, apoi raza, ca la `POLYGON`.
- `WALLARC` (`WARC`): centru, început, sfârșit. `D` întoarce arcul în sens invers.
- `WALLTAN`: faceți clic lângă capătul unui perete, apoi pe capătul arcului, care pleacă de-a lungul acelui perete.
- `WALLPICK`: faceți clic pe o linie sau o polilinie și spuneți dacă să luați și liniile unite cu ea.
- `WALLTRACE`: faceți clic într-o zonă închisă de linii și pereți ca să puneți pereți în jurul celei mai mici.

Pereții de plan sunt drepți, deci un arc este desenat ca pereți drepți scurți, de câte 15 grade fiecare. Se unesc ca orice colț.

## Tăiați pereții

- `WALLSPLIT` (`WS`): faceți clic pe perete, apoi pe punct. `C` taie unde îl intersectează alt perete, `G` lasă un interval între părți, `F` face capetele tăiate libere în loc de unite. Prima parte păstrează locul peretelui în desen, iar ușile și ferestrele merg cu partea lor. O tăiere prin o ușă sau o fereastră este refuzată.
- `WALLSPLITGAP` ({{ui:Divizare cu interval}}): aceeași divizare, dar cere întâi intervalul.
- `WALLDELSEG`: faceți clic pe perete, apoi pe cele două capete ale bucății de șters.
- `WALLREJOIN`: faceți clic pe două părți ale aceluiași perete ca să le faceți din nou un singur perete.

## Mutați pereții după distanță

- `WALLDIM`: faceți clic pe o {{ui:Cotă liniară}} sau aliniată care merge de la un perete la altul, apoi tastați noua valoare. Peretele de la capătul îndepărtat se mută păstrându-și unghiul drept față de el însuși, peretele de la primul capăt rămâne pe loc, iar pereții uniți de el urmează.
- `WALLOFFSET` (`WO`): faceți clic pe un perete, apoi pe latura unde să-l mutați (`D` tastează o distanță, `C` face în schimb o copie).
- `WALLSTRETCH`: o fereastră în jurul capetelor peretelui, apoi un punct de bază și un al doilea punct.
- În {{ui:Proprietăți}}, o {{ui:Lungime}} tastată păstrează capătul de început și ia cu ea peretele unit de capătul îndepărtat, iar o {{ui:Grosime}} nouă crește departe de {{ui:Linia de amplasare}} aleasă (fața stângă, fața dreaptă sau centrul).

## Blocați pereții

O blocare rămâne cu peretele în fișier. Dacă mutați un perete blocat, celălalt îl urmează. Dacă o modificare mută cei doi pereți diferit, este refuzată și nimic nu se schimbă.

- `WALLHOLD`: blochează un perete de alt perete. `A` îl mută mai întâi pe linia celuilalt perete, `K` păstrează distanța pe care o are.
- `WALLHOLDDIM`: blochează distanța dintre doi pereți paraleli.
- `WALLGRID`: blochează un perete de o linie de grilă (o linie pe stratul de grilă, cu eticheta ei în text la un capăt), fie de-a lungul ei, fie cu un capăt pe ea. Un perete blocat de-a lungul liniei păstrează distanța pe care o are față de ea. Mutați linia de grilă cu `GRIDMOVE` și peretele urmează întreg, cu pereții uniți lui. Un perete care stă de-a lungul unei linii de grilă se mută întreg odată cu ea chiar și fără blocare, iar un perete care doar se termină pe linie este întins de acel capăt.
- `WALLHOLDS` listează blocările. `WALLUNHOLD` scoate blocările de pe un perete.
- Fiecare blocare arată pe plan un mic lacăt: lângă mijlocul peretelui blocat sau lângă capătul blocat de o linie de grilă. Faceți clic pe un lacăt ca să scoateți acea blocare.

## Ce nu este încă aici

Blocările folosesc liniile centrale ale pereților. Pereții de aici nu au straturi, deci nu există prioritate de strat la o joncțiune, iar pereții nu se curbează (vezi arcurile de mai sus). Nimeni nu a încercat aceste unelte pe un desen mare, iar ele nu au fost verificate într-un alt program CAD.
