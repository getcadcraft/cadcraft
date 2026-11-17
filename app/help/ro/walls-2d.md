---
title: Desenarea pereților inteligenți, a ușilor și a ferestrelor în 2D
summary: Desenați pereți ca o polilinie, uniți-i curat și adăugați uși și ferestre care se mută odată cu peretele. Totul 2D, fără model 3D.
keywords: perete, pereți, WALL, WA, ușă, DOOR, DR, fereastră, WINDOW, WN, DELOPENING, perete inteligent, plan de etaj, deschidere în perete, batant, balama, gol
from: 45845d49
---

Pereții de aici sunt obiecte de desen 2D. Nu creează un model 3D, deci un plan rămâne la fel de ușor ca un desen cu linii. Pentru un model de clădire, folosiți BimCraft.

## Desenați pereți

Tastați `WALL` (`WA`) sau alegeți {{ui:Perete}} din meniul {{ui:Mai multe}} al grupului {{ui:Desen}}, apoi faceți clic pe puncte, ca pentru o polilinie. Apăsați {{key:Enter}} ca să terminați sau tastați `C` ca să închideți încăperea.

- `T` setează grosimea.
- `J` alege ce urmează clicurile: centrul peretelui, sau fața lui stângă ori dreaptă.
- `F` setează umplerea: fără umplere, umplere plină sau hașură.

Colțurile se îmbină singure. Un perete care se termină în grosimea altui perete se unește cu el într-un T curat, iar pereții care se intersectează se deschid unul spre altul. Unirile se salvează împreună cu pereții. Pentru dreptunghiuri, poligoane, arce, divizare, blocări și restul, vezi „Forme, tăieturi, decalări și blocări pentru pereții 2D”.

## Adăugați uși și ferestre

Tastați `DOOR` (`DR`) sau `WINDOW` (`WN`) și faceți clic pe un perete. O ușă se deschide spre latura peretelui pe care faceți clic. `W` setează lățimea, `Y` tipul și `H` latura balamalei. Continuați să faceți clic ca să plasați mai multe și apăsați {{key:Enter}} ca să terminați. Ușile pot fi simple, duble, glisante sau o trecere liberă. Ferestrele pot fi fixe, batante sau glisante.

## Modificarea lor

Selectați un perete ca să-i vedeți mânerele:

- Mânerele de capăt întind peretele. Pereții uniți cu el îl urmează.
- Mânerul din mijloc mută peretele.
- Un mâner de pe un gol îl glisează de-a lungul peretelui.
- Săgețile schimbă latura balamalei și sensul de deschidere al unei uși.

{{ui:Proprietăți}} arată grosimea, umplerea și fiecare gol: tipul, lățimea, poziția, balamaua, sensul de deschidere, dacă este afișat deschis sau închis, și Eliminare (R). `DELOPENING` scoate golul cel mai apropiat de locul pe care faceți clic.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` și `ERASE` funcționează ca de obicei. Ușile și ferestrele merg cu peretele lor, pereții uniți își păstrează unirile, iar o singură anulare le ia pe toate înapoi.

## În alte programe

Fiecare perete este salvat ca un bloc obișnuit, deci alte programe CAD îl afișează corect și îl pot muta, dar nu îl pot edita ca perete. `EXPLODE` transformă un perete în linii și arce simple, iar acesta încetează să mai fie perete.
