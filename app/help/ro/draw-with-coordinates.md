---
title: Desenarea cu coordonate
summary: Desenați un contur exact al unei podele tastând coordonate absolute, relative și polare, precum și prin introducerea directă a distanței.
keywords: linie, pline, polilinie, coordonate, relativ, polar, absolut, distanță directă, @, introducerea punctelor, exact, ortogonal
from: 19e82350
---

## Ce veți realiza

Conturul unei încăperi în formă de L, de 6000 pe 4500, cu o nișă de 2000 pe 1500, desenat exact, plus un perete la 30 de grade. Veți folosi toate cele patru moduri de a tasta un punct. Lucrați în milimetri: o unitate de desen reprezintă un milimetru.

Referința rapidă pentru fiecare format se află în [Introducerea coordonatelor și a distanțelor](topic:coordinate-entry).

## Înainte de a începe

1. Deschideți CadCraft. Dacă este deschis un desen, faceți clic întâi pe {{ui:Nou}}.
2. Apăsați {{key:Esc}} ca să nu fie selectat nimic. Panoul din dreapta afișează {{ui:Setări curente}}.
3. Setați {{ui:Unități}} la {{ui:Milimetri}}. Nu se redimensionează nimic; aceasta doar indică foilor și trasărilor ce înseamnă o unitate.

## Coordonate absolute: primul punct

O coordonată absolută este o poziție măsurată față de origine, tastată ca `x,y`.

1. Tastați `L` și apăsați {{key:Enter}}. Solicitarea afișează `Specify first point:`.
2. Tastați `0,0` și apăsați {{key:Enter}}.

Linia se întinde acum elastic de la origine până la cursor. Coordonatele din bara de stare arată distanța și unghiul față de punctul de start, pe măsură ce vă mișcați.

## Coordonate relative: @dx,dy

O coordonată relativă se tastează ca `@dx,dy`: atât de mult pe orizontală, atât de mult pe verticală, de la ultimul punct. Numerele negative merg spre stânga sau în jos.

3. Tastați `@6000,0` și apăsați {{key:Enter}}. O linie de 6000 merge spre dreapta.
4. Tastați `@0,3000` și apăsați {{key:Enter}}.
5. Tastați `@-2000,0` și apăsați {{key:Enter}}.
6. Tastați `@0,1500` și apăsați {{key:Enter}}.

Ar trebui să vedeți patru linii conectate care urcă pe latura dreaptă a încăperii.

## Introducere directă a distanței: un număr simplu

Când tastați un singur număr, CadCraft parcurge acea distanță în direcția cursorului. Activați {{ui:Ortogonal}} ca direcția să se alinieze orizontal sau vertical.

7. Apăsați {{key:F8}}, sau faceți clic pe {{ui:Ortogonal}} din bara de stare. Bara de stare afișează „Ortogonal activat”.
8. Mutați cursorul în stânga ultimului punct. Linia elastică rămâne orizontală.
9. Tastați `4000` și apăsați {{key:Enter}}. Linia merge 4000 spre stânga.
10. Mutați cursorul sub ultimul punct.
11. Tastați `4500` și apăsați {{key:Enter}}. Ajungeți înapoi la punctul de start.
12. Apăsați {{key:Enter}} la solicitarea goală ca să încheiați comanda.

:::mac
Pe o tastatură de Mac, F8 poate controla redarea media. Țineți apăsat **fn** și apăsați F8, sau faceți clic pe {{ui:Ortogonal}}. Vezi [Taste, mouse-uri și trackpad-uri](common:keys).
:::

Acum aveți un contur închis în formă de L, format din șase linii separate.

13. Faceți clic pe {{ui:Extinderi}} ca să vedeți tot.

## Coordonate polare: @distanță<unghi

O coordonată polară se tastează ca `@distanță<unghi`. Unghiurile sunt în grade, măsurate în sens invers acelor de ceasornic de la direcția pozitivă X: 0 este dreapta, 90 este sus, 180 este stânga, 270 (sau -90) este jos.

14. Tastați `L` și apăsați {{key:Enter}}.
15. Tastați `6000,0` și apăsați {{key:Enter}} ca să porniți din colțul din dreapta jos.
16. Tastați `@2500<-30` și apăsați {{key:Enter}}. O linie de 2500 pleacă din colț, îndreptându-se în jos și spre dreapta, cu 30 de grade sub orizontală.
17. Apăsați {{key:Enter}} ca să încheiați comanda.

O coordonată polară fără `@`, precum `2500<30`, se măsoară de la origine, nu de la ultimul punct.

## Același contur ca o singură polilinie

Șase linii separate sunt suficiente pentru multe lucrări, dar o polilinie este un singur obiect: se decalează, se măsoară și se selectează ca întreg. Folosiți {{cmd:PLINE}} cu aceeași introducere.

1. Tastați `PL` și apăsați {{key:Enter}}.
2. Tastați `0,-6000` și apăsați {{key:Enter}} ca să porniți sub primul contur.
3. Tastați `@6000,0`, apoi apăsați {{key:Enter}}.
4. Tastați `@0,3000`, apoi apăsați {{key:Enter}}.
5. Tastați `@-2000,0`, apoi apăsați {{key:Enter}}.
6. Tastați `@0,1500`, apoi apăsați {{key:Enter}}.
7. Tastați `@-4000,0`, apoi apăsați {{key:Enter}}.
8. Tastați `C` și apăsați {{key:Enter}}. Polilinia se închide și comanda se încheie.
9. Faceți clic pe noul contur. Panoul din dreapta afișează „Polilinie”, {{ui:Vârfuri}}, {{ui:Lungime}} și, fiindcă este închisă, {{ui:Arie}}.

Arie ar trebui să afișeze 24000000 (milimetri pătrați, adică 24 de metri pătrați).

## Opțiuni în timpul desenării

- În {{cmd:LINE}} și {{cmd:PLINE}}, tastați `U` și apăsați {{key:Enter}} ca să anulați ultimul segment fără să părăsiți comanda.
- În {{cmd:LINE}}, `C` închide până la primul punct, odată ce există cel puțin două segmente.
- În {{cmd:PLINE}}, `A` trece la segmente de arc (fiecare arc continuă neted segmentul anterior), iar `L` revine la linii. În modul arc, opțiunea de închidere este `CL`.
- Apăsarea lui {{key:Enter}} la `Specify first point:` în {{cmd:LINE}} pornește de la ultimul punct dat, așa că puteți continua de unde ați rămas.

## Greșeli frecvente

- **Tastarea `6000,0` când ați vrut `@6000,0`.** Fără `@`, punctul se măsoară de la origine, nu de la ultimul punct, așa că linia ajunge în alt loc decât vă așteptați. În CadCraft, `x,y` este întotdeauna absolut. Apăsați `U` și {{key:Enter}} ca s-o anulați.
- **O virgulă folosită ca punct zecimal.** Zecimalele se scriu cu punct: `1250.5`. Virgula separă întotdeauna X de Y.
- **Distanța directă a mers în sens greșit.** Un număr simplu urmează cursorul. Mutați cursorul spre partea dorită înainte de a apăsa {{key:Enter}} și activați {{ui:Ortogonal}} pentru linii drepte.
- **„Se cere un punct sau un cuvânt-cheie de opțiune.”** CadCraft nu a înțeles ce ați tastat. Verificați spațiile din număr sau o virgulă lipsă și tastați din nou.
- **Picioare și inci.** CadCraft citește doar numere simple. Tastați `150` pentru 12'-6" într-un desen în inci sau `12.5` într-un desen în picioare.
