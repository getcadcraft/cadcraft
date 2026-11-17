---
title: Depanare
summary: Mesajele afișate de CadCraft și problemele pe care le puteți întâlni, fiecare cu cauza și remedierea.
keywords: problemă, eroare, nu funcționează, mesaj, nu se poate deschide, comandă necunoscută, nu se întâmplă nimic, blocat, tastele nu funcționează, gol, lipsă, remediere
from: 8299b222
---

## Deschiderea fișierelor

| Mesaj sau simptom | Cauză | Remediere |
|---|---|---|
| „CadCraft deschide desene DWG și DXF. „…” nu este.” | Fișierul nu este `.dwg` sau `.dxf`. | Deschideți chiar fișierul de desen. Un PDF poate fi adus (la Deschidere se întreabă: import sau atașare, vezi [Substraturi PDF](topic:pdf-underlay)); imaginile se adaugă cu `IMAGEATTACH`. |
| „Acest DXF binar se termină în mijlocul unui obiect: fișierul este tăiat sau deteriorat.” | DXF-ul binar se oprește înainte de sfârșitul lui. | Tastați RECOVER pentru a deschide ce poate fi citit, sau cereți din nou fișierul. |
| „Acest fișier nu este un DXF citibil (cod de grup greșit la linia …).” | DXF-ul este deteriorat sau nu este de fapt un DXF. | Cereți din nou fișierul, sau un DWG. |
| „Acest desen nu a putut fi citit. Poate fi deteriorat sau salvat într-o versiune pe care cititorul nu o acceptă încă (…).” | Cititorul DWG nu l-a putut citi. | Cereți un DWG salvat într-o versiune mai veche, sau un DXF. |
| „Acest desen este din AutoCAD R11 / R12 (DWG AC1009), mai vechi decât pot citi CadCraft …” | Fișierele DWG din Release 12 și din versiunile anterioare folosesc un format pe care CadCraft nu îl citește. | În programul care l-a făcut, salvați-l ca DXF (orice versiune) sau ca DWG mai nou, și deschideți-l pe acela. Salvare ca din CadCraft oferă DXF R12 pentru programele care cer acest format vechi. |
| „Nu s-a putut deschide …” urmat de un mesaj de rețea, la primul DWG | Cititorul DWG nu a putut fi descărcat: sunteți offline și CadCraft nu este salvat pentru utilizare offline, sau conexiunea s-a întrerupt. | Conectați-vă și încercați din nou, sau deschideți un DXF. Faceți clic pe {{ui:Salvare pentru offline}} și așteptați „Gata pentru offline”, ca fișierele DWG să se deschidă offline data viitoare. Vezi [Lucrul offline](common:offline). |
| Butonul offline spune „Nu s-a putut salva” | Unele fișiere nu s-au descărcat. | Verificați conexiunea și faceți clic din nou pe buton. |
| Butonul offline spune „Offline indisponibil” | Ferestrele private și unele calculatoare administrate nu pot păstra o copie offline. | Folosiți o fereastră normală sau rămâneți online. |
| CadCraft nu se deschide fără conexiune | Nu a fost salvat pentru utilizare offline în acest browser, sau browserul l-a șters. | Data viitoare când sunteți online, faceți clic pe {{ui:Salvare pentru offline}} și așteptați „Gata pentru offline”. |
| Desenul se deschide, dar lipsesc piese | Obiecte pe care CadCraft nu le poate desena încă, sau straturi oprite ori înghețate în fișier. | Citiți „Despre acest fișier” din panoul din stânga. Verificați panoul {{ui:Straturi}}. |
| Textul se încadrează pe două rânduri | CadCraft desenează textul cu un font de tip Helvetica, mai lat decât unele fonturi CAD. | Scurtați textul în {{ui:Proprietăți}}, sau acceptați rândul în plus. |
| Un cerc apare ca elipsă, sau textul oglindit se citește corect | Obiectul a fost desenat într-un plan înclinat sau privit de jos, în programul care a făcut fișierul. CadCraft îl arată privit de sus, cum îl arată vederea în plan a acelui program; textul rămâne citibil. | Nimic de remediat. Pentru a-l vedea cum îl arată celălalt program, cereți desenul aplatizat sau cu obiectele desenate de sus. |
| Un bloc, un cerc sau o cotă se află în alt loc decât în programul care a făcut fișierul | Un caz de desen pe care CadCraft îl citește greșit. | Spuneți-ne pe Discord, cu fișierul dacă îl puteți împărtăși. |

## Linia de comandă

| Mesaj sau simptom | Cauză | Remediere |
|---|---|---|
| „Comandă necunoscută „…”. Tastați HELP pentru listă.” | Nu există nicio comandă sau alias cu acest nume. | Tastați `HELP`, sau vedeți [Referința comenzilor](topic:commands). Unele comenzi familiare sunt [încă nerealizate](topic:not-built-yet). |
| „Nu există o asemenea comandă” lângă linia de comandă, în timp ce tastați | Ce tastați nu se potrivește cu nimic încă. | Continuați să tastați, sau verificați ortografia. |
| „Este necesar un punct sau o opțiune.” | Ce ați tastat nu este un punct sau o opțiune. | Verificați formatul: `x,y`, `@dx,dy`, `@d<a` sau un singur număr. Vezi [Introducerea coordonatelor și a distanțelor](topic:coordinate-entry). |
| „Este necesară o distanță pozitivă sau două puncte.” | O distanță a fost negativă sau nu era un număr. | Tastați un număr pozitiv, sau faceți clic pe două puncte. |
| „Este necesar un unghi în grade sau două puncte.” | Unghiul nu a fost un număr. | Tastați gradele ca număr simplu. |
| „Este necesar un număr.” | Se aștepta un număr. | Tastați doar cifre. |
| „Opțiune invalidă.” | Literele nu corespund unei opțiuni. | Tastați literele mari arătate între paranteze pătrate. |
| `*Anulare*` | Ați apăsat {{key:Esc}}, sau {{key:Enter}} acolo unde era necesar un punct. | Porniți comanda din nou. |
| Tastarea nu ajunge la linia de comandă | O casetă dintr-un panou sau dintr-o casetă de dialog are cursorul. | Apăsați {{key:Enter}} sau {{key:Esc}}, ori faceți clic pe desen. |
| Comanda folosește obiecte pe care nu le-ați ales | Ele erau selectate înainte să porniți comanda. | Apăsați {{key:Esc}} înainte de comandă. |
| O linie a mers spre un loc neașteptat | `x,y` este absolut. | Folosiți `@dx,dy` pentru puncte relative. |
| „Terminați sau anulați mai întâi comanda curentă (Esc).” | Ați apăsat {{key:Mod+S}} cât timp rula o comandă. | Apăsați {{key:Esc}}, apoi salvați. |
| „Nu s-a putut salva ca DWG (AutoCAD 2000): … Încercați Salvare ca, apoi DXF.” | Ceva din desen nu a putut fi scris ca DWG. | Apăsați {{key:Mod+Shift+S}}, alegeți {{ui:DXF R12}} și faceți clic pe {{ui:Salvare}}. |
| „Nesalvat.” | Ați închis caseta {{ui:Salvare copie ca}} cu {{ui:Anulare}} sau cu {{key:Esc}}. | Apăsați din nou {{key:Mod+Shift+S}} și faceți clic pe {{ui:Salvare}}. |

## Editarea

| Mesaj sau simptom | Cauză | Remediere |
|---|---|---|
| Un obiect nu se selectează | Stratul său este blocat, oprit sau înghețat; sau sunteți pe o foaie, iar el este modelul din interiorul unei ferestre de vizualizare. | Deblocați stratul, sau mergeți la fila {{ui:Model}}. |
| „Nimic găsit acolo.” | Niciun obiect sub clic. | Măriți zoom și faceți clic pe linia în sine. |
| „Nimic nu intersectează acel obiect acolo.” | {{cmd:TRIM}} nu a găsit niciun obiect care să intersecteze bucata aleasă. | Verificați că linia de tăiere chiar îl intersectează. |
| „Nu se poate tăia acel obiect.” | Tăierea funcționează pe linii, arce, cercuri și polilinii. | Descompuneți mai întâi blocurile, sau ștergeți și desenați din nou. |
| „Nicio frontieră în acea direcție.” | {{cmd:EXTEND}} nu a găsit nimic de întâlnit. | Alegeți mai aproape de capătul care trebuie să crească. |
| „Nu se poate decala acel obiect.” | Decalarea funcționează pe linii, arce, cercuri și polilinii. | Descompuneți-l mai întâi, sau desenați o linie paralelă. |
| „Nu se poate decala atât de departe.” | Decalarea ar întoarce forma pe dos. | Folosiți o distanță mai mică. |
| „Raza este prea mare.” sau „Distanța este prea mare.” | Racordarea sau șanfrenul ar trece de capătul unei linii. | Setați o rază mai mică cu `R`, sau distanțe mai mici cu `D`. |
| „Doar primul sau ultimul segment al unei polilinii deschise poate fi tăiat înapoi.” | Colțul ar tăia în mijlocul unei polilinii. | Alegeți două segmente vecine ale polilinii, sau folosiți `P` pentru fiecare colț. |
| „Alegeți a doua linie, diferită.” | A doua alegere era aceeași linie, sau nu era o linie. | Alegeți altă linie. |
| „Doar polilinii, referințe la blocuri și cote se descompun.” | Selecția nu avea ce să descompună. | Selectați o polilinie, o referință la bloc sau o cotă. |
| „Acesta este stratul curent. Faceți mai întâi curent alt strat.” | Ați încercat să opriți stratul curent. | Faceți clic pe numele altui strat, apoi opriți acesta. |
| „Există deja un strat numit …” | Numele straturilor trebuie să fie unice. | Alegeți alt nume. |
| „Nimic de anulat.” | Nu mai este nimic de anulat, sau ați deschis ori ați pornit un desen (asta șterge istoricul). | — |

## Cote și blocuri

| Mesaj sau simptom | Cauză | Remediere |
|---|---|---|
| Textul și săgețile cotei sunt minuscule sau uriașe | Dimensiunile sunt în unități de desen; scara generală nu se potrivește desenului. | Setați {{cmd:DIMSCALE}} la scara trasării; vezi [Setarea dimensiunilor cotelor](topic:dimension-settings). |
| „Alegeți un punct în interiorul unghiului pe care vreți să-l măsurați.” | Locul cotei unghiulare se află pe un braț. | Faceți clic în interiorul unghiului. |
| „Acele linii sunt paralele.” | Liniile paralele nu au un unghi între ele. | Alegeți două linii care se întâlnesc. |
| „Alegeți o cotă liniară sau aliniată.” | {{cmd:DIMCONTINUE}} sau {{cmd:DIMBASELINE}} are nevoie de una de la care să pornească. | Alegeți o cotă liniară sau aliniată. |
| „Acest desen nu are încă blocuri: F inserează unul dintr-un fișier, L din bibliotecă …” | Desenul nu are blocuri proprii. | Tastați `F` sau `L`, sau creați un bloc cu {{cmd:BLOCK}}. |
| „Niciun bloc numit „…”.” | Numele este greșit. | Mesajul listează blocurile care există. |
| „Un nume de bloc nu poate începe cu * sau să folosească …” urmat de o listă de caractere | Numele conține un caracter pe care blocurile nu îl pot folosi. | Folosiți litere, cifre, `-` și `_`. |
| „Un bloc nu poate conține el însuși.” | Selecția conține o referință la blocul care se creează. | Lăsați acea referință afară. |
| „Niciun obiect selectat; nimic creat.” | Ați apăsat {{key:Enter}} înainte să selectați. | Rulați din nou {{cmd:BLOCK}} și selectați obiectele. |

## Foi și trasare

| Mesaj sau simptom | Cauză | Remediere |
|---|---|---|
| „Ferestrele de vizualizare merg pe o aranjare în pagină. Deschideți mai întâi o filă de aranjare în pagină (sau creați una cu LAYOUT).” | {{cmd:MVIEW}} pe fila {{ui:Model}}. | Faceți clic mai întâi pe o filă de foaie. |
| „Deschideți mai întâi aranjarea cu fereastra de vizualizare.” | {{cmd:VPVIEW}} pe fila {{ui:Model}}. | Faceți clic mai întâi pe fila de foaie. |
| Scara unei ferestre de vizualizare pare de zece ori greșită | Unitățile desenului sunt greșite. | Setați {{ui:Unități}} în {{ui:Setări curente}}. |
| „Nu există nimic de trasat încă.” | Modelul este gol. | Desenați ceva, sau deschideți un desen. |
| „Alegeți fereastra de trasat.” | {{ui:O fereastră…}} este aleasă, iar nicio fereastră nu a fost aleasă. | Faceți clic pe {{ui:Alegere}} și alegeți două colțuri. |
| „… mai mare decât hârtia: marginile sunt tăiate.” | Zona nu încape la acea scară. | Alegeți o scară mai mică, o hârtie mai mare, sau {{ui:Potrivire la hârtie}}. |
| „Browserul a blocat fila nouă, așa că PDF-ul a fost descărcat.” | Ferestrele pop-up sunt blocate pentru sit. | Deschideți PDF-ul descărcat, sau permiteți ferestrele pop-up pentru sit. |
| Caracterele se tipăresc ca „?” | Fonturile PDF-ului nu au literă pentru ele (ideograme rare, hindi și alte scripturi care cer formare complexă, …), sau fontul mai mare nu a putut fi descărcat (offline). Scripturile europene, chirilicul, grecul, ebraica, araba, persana, urdu, thai, chineza, japoneza și coreeana se tipăresc ca atare. | Pentru arabă, thai, chineză, japoneză sau coreeană, trasați din nou cu conexiune. Celelalte scripturi nu sunt încă realizate. |
| Liniile de construcție apar în PDF | Stratul lor se trasează. | Faceți clic pe butonul de tipărire al stratului. |
| Toate liniile au aceeași grosime | Grosimea lor este {{ui:Implicit}}, deci se tipăresc cu lățimea stiloului din casetă. | Dați straturilor sau obiectelor o {{ui:Grosime de linie}} în panoul din dreapta, sau alegeți o {{ui:Grosime de linie}} în casetă. Pentru a vedea grosimile pe ecran, apăsați {{ui:LWT}} în bara de stare. |

## Taste și ecranul

| Simptom | Cauză | Remediere |
|---|---|---|
| F3, F7 sau F8 schimbă volumul sau deschide Mission Control | Tastele de funcție ale Mac. | Țineți apăsat **fn**, sau folosiți butoanele din bara de stare. Vezi [Taste, mouse-uri și trackpad-uri](common:keys). |
| F7 întreabă despre navigarea cu cursor | Folosirea proprie a lui F7 de către Firefox. | Alegeți Nu; folosiți butonul {{ui:Grilă}}. |
| {{key:Mod+N}} a deschis o fereastră de browser | Browserul păstrează tasta aceasta. | Faceți clic pe {{ui:Nou}} sau tastați `NEW`. |
| {{key:Mod+A}} a selectat textul din linia de comandă | Linia de comandă avea cursorul. | Faceți clic mai întâi pe un obiect, sau tastați `ALL` la promptul `Select objects`. |
| {{key:Delete}} nu șterge | Linia de comandă avea cursorul. | Tastați `E` și apăsați {{key:Enter}}. |
| Clicul dreapta nu face nimic pe trackpad-ul Mac | Control-clicul poate fi contat ca un clic obișnuit. | Faceți clic cu două degete. |
| Nu se panorează nimic pe trackpad | Nu există buton din mijloc, iar Spațiu nu panorează. | Glisați cu două degete: vederea 2D se panorează (ciupitul și rotița mouse-ului dau zoom). Sau trageți cu clic dreapta apăsat. |
| Prima {{key:Esc}} a ieșit din ecran complet | Browserul folosește Esc pentru a ieși din ecran complet. | Apăsați din nou {{key:Esc}} pentru a anula comanda. |
| {{key:F1}} nu face nimic pe Mac | F1 este tasta de luminozitate. | Țineți apăsat **fn**, sau faceți clic pe {{ui:Ajutor}}. |
| Tastarea merge în caseta de căutare a ajutorului | Panoul de ajutor are cursorul. | Faceți clic pe desen. |
| Desenul a devenit gol | Ați dat zoom foarte departe. | Faceți clic pe {{ui:Extinderi}}, sau faceți dublu clic pe rotiță. |
| „Părăsiți situl?” la închiderea filei | Există modificări nesalvate. | Rămâneți, salvați cu {{key:Mod+S}}, apoi închideți. |
