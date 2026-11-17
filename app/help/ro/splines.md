---
title: Spline-uri și polilinii: SPLINE, SPLINEDIT, PEDIT
summary: Desenați o curbă netedă prin puncte sau dintr-un poligon de control, editați-i punctele de potrivire și de control și editați polilinii (unire, închidere, lățime, potrivire, spline, decurbare) sau transformați un spline într-o polilinie.
keywords: spline, splinedit, spl, spe, pedit, pe, puncte de potrivire, puncte de control, ponderi, nurbs, editare polilinie, unire, curbă de potrivire, decurbare, conversie în polilinie, precizie, tangentă, curbă, toleranță de potrivire
from: d31f72d8
---

## Ce veți realiza

O curbă prin cinci puncte, apoi aceeași curbă editată în trei moduri și o polilinie construită din trei linii.

## Desenați un spline prin puncte

1. Tastați `SPL` și apăsați {{key:Enter}}.
2. Faceți clic sau tastați punctele prin care trebuie să treacă curba: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Apăsați {{key:Enter}} după ultimul.
3. {{ui:Tangentă de start}}: faceți clic pe un punct spre care trebuie să plece curba sau apăsați {{key:Enter}} ca s-o decidă aplicația. Faceți la fel pentru tangenta de final.

Curba trece prin fiecare punct. Tastați `C` în loc de {{key:Enter}} ca s-o închideți (curba revine la primul punct). {{key:U}} (`Anulare`) ia înapoi ultimul punct cât desenați.

### Desenați dintr-un poligon de control

Tastați `M` la primul prompt, apoi `C` (Vârfuri de control) și un grad de la 1 la 5 (3 este cel obișnuit). Acum punctele alese sunt colțurile unui poligon care trage curba spre ele; curba începe din primul și se termină în ultimul. Una închisă se înfășoară, fără colț la îmbinare.

### Transformați o polilinie într-un spline

La primul prompt tastați `O` (Obiect) și selectați polilinii sau linii. Ele devin spline-uri prin vârfurile lor; originalele dispar.

## Editați un spline

Selectați-l și tastați `SPE` (sau tastați `SPE` și faceți clic pe el). Mânerele arată punctele de potrivire (sau punctele de control ale unui spline care nu are); trageți unul ca să remodelați curba. La prompt:

- **Date de potrivire** (un spline desenat prin puncte): `A` adaugă un punct de potrivire (faceți clic unde), `D` șterge unul (faceți clic lângă el), `M` mută unul (faceți clic lângă el, apoi pe noul loc), `T` setează tangentele de capăt, `P` șterge punctele de potrivire, astfel că de atunci spline-ul se editează prin punctele sale de control.
- **Editare vârf**: `A` adaugă un punct de control fără să schimbe curba, `M` mută unul, `W` îi dă o **pondere** (peste 1 trage curba mai aproape de el, sub 1 o lasă să plece).
- **Deschidere** sau **Închidere**, și **Inversare** (curba merge în sens invers).
- **Conversie în Polilinie** (`P`): spline-ul devine polilinie; precizia este numărul de segmente pentru fiecare deschidere (10 este cel obișnuit).
- **Anulare** (U) ia înapoi ultima modificare; **Ieșire** (X) încheie.

{{ui:Proprietăți}} arată gradul unui spline, câte puncte de potrivire și de control are, lungimea sa și vă lasă să-l deschideți sau închideți.

## Editați o polilinie

Selectați o polilinie și tastați `PE`. O linie, un arc sau un spline pe care îl alegeți este oferit întâi ca polilinie în care să fie transformat (un spline cere precizia).

- **Închidere** / **Deschidere** unește sau separă capetele.
- **Unire** adaugă linii, arcuri și polilinii ale căror capete se întâlnesc cu capătul polilinie. `Distanță Fuzz` este cât de depărtate pot fi capetele și tot se unesc (0 înseamnă că trebuie să se întâlnească).
- **Lățime** dă întregii polilinii o singură lățime (0 o elimină).
- **Potrivire** înlocuiește polilinia cu o curbă netedă care trece prin vârfurile sale; **Spline** cu un B-spline cubic care le urmează (pornește și se termină în primul și ultimul vârf și rămâne aproape de celelalte). Ambele devin o polilinie de segmente scurte, iar colțurile originale se păstrează, astfel că **Decurbare** le aduce înapoi.
- **Generare tip de linie** spune dacă un tip de linie întreruptă continuă de-a lungul întregii polilinii sau începe din nou la fiecare vârf.
- **Inversare** schimbă ordinea vârfurilor sale. **Multiple** (`M` la primul prompt) editează mai multe polilinii cu aceleași opțiuni.

Editarea vârfurilor unei polilinii în {{ui:Proprietăți}} sau cu mânere rămâne cum era: PEDIT nu are editor de vârfuri.

## În fișiere

DWG și DXF 2000 păstrează un spline ca spline: grad, puncte de control, noduri, ponderi, puncte de potrivire și tangente. Un spline pe care îl deschideți și nu-l modificați este scris înapoi exact cum a venit. DXF R12 nu are spline: este salvat ca o polilinie de-a lungul curbei, iar istoricul spune câte segmente.

Decalarea, tăierea, prelungirea, racordarea, ruperea și unirea nu funcționează pe spline-uri. Folosiți {{cmd:EXPLODE}} pe un spline sau {{cmd:PEDIT}} pe el, ca să obțineți o polilinie pe care le acceptă aceste comenzi.

## Greșeli frecvente

- **Curba depășește între puncte apropiate.** O curbă prin puncte se îndoaie acolo unde se îndoaie punctele. Folosiți mai puține puncte sau un poligon de control.
- **„Acesta nu este un spline.”** SPLINEDIT acceptă doar spline-uri; {{cmd:PEDIT}} editează polilinii.
- **Un spline închis prin puncte de potrivire arată altfel în alt program.** CadCraft îl închide cu o îmbinare netedă în primul punct; alt program poate să-l închidă cu o curbă periodică. Un spline închis prin puncte de control este același în ambele.
