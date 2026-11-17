---
title: Îmbinarea modificărilor a două persoane într-un desen
summary: Lăsați git, Fossil sau Mercurial să îmbine două copii ale unui obiect DWG sau DXF, obiect cu obiect, folosind cheia pe care CadCraft o păstrează pe fiecare obiect.
keywords: îmbinare, merge, git, fossil, mercurial, control al versiunilor, diff, conflict, trei căi, îmbinare CadCraft, cheie, gitattributes, DWG, DXF
from: 71482bf9
---

Două persoane modifică același desen. Dacă au schimbat obiecte diferite, îmbinarea poate fi automată: nu trebuie refăcut nimic manual.

## Ce face să funcționeze

CadCraft dă fiecărui obiect desenat o **cheie** scurtă, care nu se schimbă niciodată și nu este dată la două obiecte. Ea este salvată împreună cu obiectul în DWG sau DXF (ca date suplimentare pe care alte programe le păstrează). Îmbinarea caută obiectele după cheie, nu după poziția lor în fișier, deoarece fiecare program renumerotează pozițiile la salvare. Dezactivați asta în {{ui:Settings}} › CadCraft › Fișiere pregătite pentru îmbinare, dacă nu îmbinați niciodată; fișierele devin cu circa 10 la sută mai mici.

Un desen salvat înainte ca cheile să existe se îmbină în continuare: obiectele lui primesc o cheie după locul lor în fișier, aceeași pentru toți cei care îl deschid.

## Configurare

Git are nevoie de două linii, o singură dată pe depozit:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# o singură dată, pe fiecare calculator
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Fără git, rulați-l manual: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil și Mercurial iau aceleași trei fișiere în propria lor setare de unealtă de îmbinare.

## Regulile

- Un obiect schimbat doar de o parte este preluat. Aceeași modificare de ambele părți este preluată o singură dată.
- Aceeași proprietate schimbată în două feluri este un **conflict**: varianta locală rămâne, iar raportul listează ambele valori. Deschideți rezultatul, uitați-vă la acel obiect și reparați-l manual.
- Un obiect adăugat de oricare parte este păstrat. Un obiect șters de o parte și neatins de cealaltă este șters. Șters de o parte și modificat de cealaltă: șters și raportat.
- Straturile, blocurile, stilurile de text și de cotare, planșele și vederile numite se îmbină la fel. Constrângerile urmează obiectele pe care le numesc.
- Rezultatul este scris în același format și aceeași versiune de fișier ca cel local.

Neîmbinate: ordinea în care sunt desenate obiectele rămâne cea locală, urmată de obiectele adăugate de cealaltă parte. Modificările aceleiași definiții de bloc, făcute de ambele părți, sunt un conflict, niciodată amestecate. Nimic nu este trimis; totul rulează pe calculator.
