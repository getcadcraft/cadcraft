---
title: Tastatură și mouse
summary: Fiecare tastă, acțiune de mouse și tastă din linia de comandă din aplicația de desen CadCraft, așa cum le tratează codul.
keywords: tastatură, mouse, scurtături, taste, roată, deplasare, zoom, clic dreapta, buton din mijloc, f3, f7, f8, ctrl, tasta de comandă, taste rapide, copiere, decupare, lipire, duplicare, clipboard, selectare totală
from: a2608a29
---

Scurtăturile sunt afișate pentru acest computer. Pe Mac, fiecare scurtătură {{key:Mod}} de mai jos folosește tasta Command, iar tasta Control funcționează și ea. Cum se scriu tastele și cum se folosesc tastele F pe Mac este descris în [Taste, mouse-uri și trackpad-uri](common:keys).

## Tastarea comenzilor

| Tastă | Ce face |
|---|---|
| Orice literă, cifră sau simbol | Merge în linia de comandă, oriunde se află indicatorul, cu excepția cazului în care o casetă dintr-un panou are cursorul |
| {{key:Enter}} | Trimite ce ați tastat. Pe un prompt gol: repetă ultima comandă, încheie o comandă, finalizează o selecție sau acceptă valoarea implicită din `<…>` |
| {{key:Space}} | La fel ca {{key:Enter}}, doar că atunci când CadCraft cere text (text, nume de blocuri, text de cotă) tastează un spațiu |
| {{key:Esc}} | Anulează comanda. Fără comandă în execuție: anulează o mutare de mâner sau o casetă de selecție, apoi golește selecția |
| {{key:Tab}} | Acceptă comanda sugerată afișată în dreapta liniei de comandă. Fără nimic tastat și cu indicatorul peste obiecte suprapuse: evidențiază următorul obiect de acolo (faceți clic pentru a-l alege) |
| {{key:Up}} {{key:Down}} | Parcurge liniile tastate înainte (ultimele 100) |

## Desenare și editare

| Tastă | Ce face |
|---|---|
| {{key:Mod+Z}} | Anulează ultima comandă |
| {{key:Mod+Y}} sau {{key:Mod+Shift+Z}} | Refacere |
| {{key:Mod+A}} | Selectează fiecare obiect pe care îl puteți edita în tabul deschis ({{cmd:SELECTALL}}). Dacă ați tastat ceva în linia de comandă, selectează acel text |
| {{key:Delete}} | Șterge obiectele selectate ({{cmd:ERASE}}), cu excepția cazului în care ați tastat ceva în linia de comandă |
| {{key:Backspace}} | Șterge obiectele selectate când linia de comandă nu are cursorul; în linia de comandă șterge ce ați tastat |
| {{key:Esc}} | Fără comandă în execuție: golește selecția ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Salvează o copie în formatul desenului (DWG sau DXF) |
| {{key:Mod+Shift+S}} | Salvare ca: alegeți DWG sau DXF, apoi salvați o copie |
| {{key:Mod+O}} | Deschide un DWG sau DXF |
| {{key:Mod+P}} | Trasare în PDF |

Anularea, refacerea, selectarea totală și trasarea nu fac nimic cât timp rulează o comandă: apăsați mai întâi {{key:Esc}}.

## Copiere, decupare și lipire

| Tastă | Ce face |
|---|---|
| {{key:Mod+C}} | Copiază selecția în clipboard ({{cmd:COPYCLIP}}). Nimic selectat: CadCraft cere obiecte |
| {{key:Mod+X}} | Decupare: copiază selecția, apoi o șterge ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Lipire: copia urmează indicatorul; faceți clic, sau tastați un punct, ca s-o puneți jos ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Lipire în aceeași poziție: la coordonatele de unde a fost copiată ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Duplicare: o copie a selecției se mută cu indicatorul; faceți clic ca s-o puneți jos, {{key:Esc}} nu lasă nimic ({{cmd:DUPLICATE}}) |

Acțiunile sunt în grupul {{ui:Editare}} din bara de instrumente ({{ui:Copiere}}, {{ui:Lipire}}) și în meniul {{ui:Mai multe}}. Cât timp rulează altă comandă, terminați-o sau apăsați mai întâi {{key:Esc}}; apăsarea din nou a {{key:Mod+V}} sau {{key:Mod+D}} cât timp o copie urmează indicatorul începe de la capăt. Când ați tastat ceva în linia de comandă sau când o comandă cere text, aceste taste copiază, decupează și lipesc acel text. Vedeți [Copiere, lipire și duplicare](topic:copy-paste).

## Comutatoare

| Tastă | Comutator | Buton din bara de stare |
|---|---|---|
| {{key:F3}} | Agățări la obiecte pornite sau oprite | {{ui:Agățare}} |
| {{key:F7}} | Grilă pornită sau oprită | {{ui:Grilă}} |
| {{key:F8}} | Ortogonal pornit sau oprit | {{ui:Ortogonal}} |
| {{key:F10}} | Urmărire polară pornită sau oprită | {{ui:Polar}} |
| {{key:F11}} | Urmărire a agățării la obiecte pornită sau oprită | {{ui:Urmărire}} |
| {{key:F12}} | Introducere dinamică pornită sau oprită | {{ui:Dyn}} |

:::mac
Pe Mac, F3, F7 și F8 sunt de obicei Mission Control și taste media. Țineți apăsat **fn** împreună cu ele sau activați tastele funcționale standard din Setări sistem, cum se descrie în [Taste, mouse-uri și trackpad-uri](common:keys). Butoanele din bara de stare funcționează mereu.
:::

:::firefox
În Firefox, F7 poate cere și să activați navigarea cu cursor. Alegeți **Nu** și folosiți butonul {{ui:Grilă}} dacă tot întreabă.
:::

## Ajutor

| Tastă | Ce face |
|---|---|
| {{key:F1}} | Deschide sau închide acest ajutor, lângă desen. Funcționează chiar și cât rulează o comandă și nu ajunge niciodată în linia de comandă. |
| {{key:Esc}} | Cu cursorul în panoul de ajutor: șterge căutarea sau închide panoul |

Butonul {{ui:Ajutor}} din bara de sus face același lucru ca {{key:F1}}. Cât tastați în caseta de căutare a ajutorului, nimic nu ajunge în linia de comandă. Faceți clic pe desen ca să redați tastele CadCraft; panoul rămâne deschis lângă el.

:::mac
Pe o tastatură de Mac, țineți apăsat **fn** și apăsați F1, sau faceți clic pe {{ui:Ajutor}}.
:::

## Ecran

| Tastă | Ce face |
|---|---|
| {{key:Ctrl+Shift+F}} | Trece prin: normal, ecran complet și ecran complet cu barele ascunse. Folosește tasta Control pe orice computer, inclusiv pe Mac. |
| {{key:Left}} {{key:Right}} | Cu un tab de sub desen focalizat: tabul anterior sau următor |

În ecran complet, browserul poate folosi prima {{key:Esc}} ca să iasă din ecranul complet. Apăsați {{key:Esc}} din nou ca să anulați o comandă.

## Casete de dialog

| Tastă | Ce face |
|---|---|
| {{key:Esc}} | Închide caseta de dialog ({{ui:Trasare în PDF}}, sau o întrebare precum „Modificări nesalvate”, unde înseamnă {{ui:Anulare}}) |
| {{key:Tab}} | Trece între setările și butoanele casetei de dialog |

Cât timp o casetă de dialog este deschisă, tastele desenului sunt dezactivate.

## Câmpuri din panou

În caseta din panoul din dreapta sau din stânga:

| Tastă | Ce face |
|---|---|
| {{key:Enter}} | Aplică valoarea și părăsește caseta |
| {{key:Esc}} | Pune vechea valoare înapoi și părăsește caseta |
| {{key:Tab}} | Aplică și trece la caseta următoare |

Cât timp o casetă are cursorul, literele se scriu în ea, nu în linia de comandă.

## Mouse

| Acțiune | Ce face |
|---|---|
| Clic | Alege un punct când o comandă cere unul; alege un obiect când cere obiecte; altfel selectează un obiect sau un mâner |
| Shift+clic | Scoate un obiect selectat din selecție (cu {{ui:Clic pe obiecte}} setat pe {{ui:Înlocuiește selecția}} în [Setări](topic:settings): îl adaugă). Când se alege un punct: ignoră agățările la obiecte pentru acel clic |
| Clic pe spațiu gol, apoi clic din nou | O casetă de selecție: de la stânga la dreapta este o fereastră, de la dreapta la stânga o intersecție |
| Trageți pe spațiu gol | Un lasou: dacă mergeți mai întâi la dreapta, este o fereastră; mai întâi la stânga, o intersecție. {{key:Space}} în timpul trasării parcurge fereastră, intersecție și gard; {{key:Esc}} îl renunță (LASSOMODE 0, sau Setările, îl face din nou dreptunghi) |
| Trageți prin bucăți în TRIM sau EXTEND | Taie (sau prelungește) fiecare bucată traversată de traseu; țineți {{key:Shift}} pentru celălalt mod |
| Trageți un mâner | Mută mânerul (sau faceți clic pe mâner, apoi clic unde trebuie să ajungă) |
| Dublu clic pe text | Îl selectează și pune cursorul în caseta sa {{ui:Text}} din panoul din dreapta |
| Clic dreapta | Enter. În timpul mutării unui mâner sau al unei casete de selecție: o anulează |
| Trageți cu butonul din dreapta | Deplasează vederea |
| Roata | Mărește și micșorează în jurul crucii |
| Trageți cu roata (butonul din mijloc) | Deplasează vederea |
| Dublu clic pe roată | Mărește la tot desenul (extinderi) |
| Trageți un DWG sau DXF pe desen | Îl deschide |

Pe trackpad sau pe ecran tactil, vedeți [Mouse, trackpad și atingere](topic:mouse-trackpad-touch).

## Tastele pe care le păstrează browserul

{{key:Mod+N}}, {{key:Mod+W}} și {{key:Mod+T}} aparțin mereu browserului. CadCraft nu le folosește: folosiți {{ui:Nou}} sau tastați `NEW` pentru un desen nou. Clipboard-ul CadCraft este propriu: {{key:Mod+C}} și {{key:Mod+V}} copiază obiecte între desene și taburi CadCraft, nu către sau dinspre alte programe.

:::mac
Dacă {{key:Mod+Y}} deschide istoricul browserului în loc să refacă, folosiți {{key:Mod+Shift+Z}} sau butonul {{ui:Refacere}}.
:::

## Unde este Mutare

Mutarea este comanda `MOVE` (tasta {{key:M}}): alegeți obiectele, apoi un punct de bază și un al doilea punct sau o distanță tastată. `ALIGN` și `DISTRIBUTE` sunt și ele acolo. BimCraft folosește aceleași nume pentru aceleași lucrări la elementele clădirii, dar tasta lui {{key:M}} este Măsurare: Mutarea lui este {{key:Shift+M}}.
