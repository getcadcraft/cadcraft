---
title: Ecranul CadCraft
summary: Un tur al fiecărei bare, al fiecărui panou și al fiecărei file din aplicația de desenare, după numele pe care îl are pe ecran.
keywords: ecran, interfață, bară de instrumente, panglică, panouri, linie de comandă, bară de stare, file, file de planșă, proprietăți, panou straturi, tur
from: b5a33388
---

Ecranul are șapte părți. De sus în jos: bara de aplicație, bara de instrumente, zona de desenare cu câte un panou pe fiecare latură, filele de sub desen, linia de comandă și bara de stare.

## Bara de aplicație

Bara subțire din vârful ecranului aparține site-ului, nu desenului. Afișează marca CadCraft, numele aplicației, versiunea pe care o rulați, un link către pagina aplicației, un buton {{ui:Ajutor}} (sau {{key:F1}}), un buton {{ui:Salvare pentru offline}}, un buton {{ui:Ecran complet}} și două butoane de temă, {{ui:Hârtie}} și {{ui:Model}}.

Butonul {{ui:Setări}} (roată dințată) conține setările proprii ale CadCraft și pe cele pe care le împart toate aplicațiile: vedeți [Setările CadCraft](topic:settings).

{{ui:Salvare pentru offline}} păstrează o copie a CadCraft, inclusiv cititorul DWG, în acest browser, ca să se deschidă fără conexiune. Eticheta lui arată starea: „Salvare N din M”, „Gata pentru offline”, „Nu s-a putut salva” sau „Offline indisponibil”. Vedeți [Lucrul offline](common:offline).

:::note
Butoanele {{ui:Hârtie}} și {{ui:Model}} din bara de aplicație schimbă doar culorile ecranului: {{ui:Hârtie}} este o temă luminoasă, {{ui:Model}} una întunecată. Nu au legătură cu fila {{ui:Model}} de sub desen, care comută între desen și planșele lui.
:::

Butonul {{ui:Ecran complet}}, sau {{key:Ctrl+Shift+F}} (tasta Ctrl de pe orice calculator, inclusiv pe Mac), trece prin trei moduri de ecran: normal, ecran complet și ecran complet cu barele ascunse. Cu barele ascunse, mutați indicatorul la marginea de sus a ecranului ca să le aduceți înapoi.

## Bara de instrumente

Sub bara de aplicație este bara de instrumente. Fiecare buton rulează o comandă, exact ca și cum ați fi tastat-o, deci linia de comandă pune aceleași întrebări oricum. Treceți cu indicatorul peste un buton ca să vedeți aliasul comenzii. Grupurile sunt:

| Grup | Butoane |
|---|---|
| {{ui:Fișier}} | {{ui:Nou}}, {{ui:Deschidere}}, {{ui:Salvare}}, {{ui:Salvare ca}}, {{ui:Trasare}} |
| Desen | {{ui:Linie}}, {{ui:Polilinie}}, {{ui:Cerc}}, {{ui:Arc}}, {{ui:Dreptunghi}}, {{ui:Poligon}}, {{ui:Elipsă}}, {{ui:Text}}, {{ui:Paragraf}}, {{ui:Hașură}}, și {{ui:Mai multe}}: {{ui:Punct}}, {{ui:Linie de construcție}} și {{ui:Rază}} (vedeți [Linii de construcție și raze](topic:construction-lines)) |
| {{ui:Modificare}} | {{ui:Mutare}}, {{ui:Copiere}}, {{ui:Rotire}}, {{ui:Scalare}}, {{ui:Oglindire}}, {{ui:Întindere}}, {{ui:Decalare}}, {{ui:Tăiere}}, {{ui:Prelungire}}, {{ui:Racordare}}, {{ui:Șanfren}}, {{ui:Descompunere}}, {{ui:Ștergere}}, și {{ui:Mai multe}}: {{ui:Matrice}}, {{ui:Unire}}, {{ui:Potrivire proprietăți}}, {{ui:Întrerupere}} și {{ui:Alungire}} |
| Adnotare | {{ui:Liniară}}, {{ui:Aliniată}}, {{ui:Unghi}}, {{ui:Raza}}, {{ui:Diametru}} (cote), {{ui:Indicație}} (multileader), și {{ui:Mai multe}}: {{ui:Cotare continuă}}, {{ui:Cotare de bază}} și {{ui:Nor de revizuire}} |
| Parametric | {{ui:Auto}}, {{ui:Constrângere}}, {{ui:Cotă}}, {{ui:Parametri}}, și {{ui:Mai multe}} cu fiecare constrângere (vedeți [Constrângerea unui desen](topic:constraints)) |
| Blocuri | {{ui:Creare}}, {{ui:Inserare}}, {{ui:Bibliotecă}}, și {{ui:Mai multe}}: {{ui:Modificare bloc}} și {{ui:Definire atribut}} |
| Planșe | {{ui:Planșă nouă}}, {{ui:Fereastră de vizualizare}} |
| Editare | {{ui:Anulare}}, {{ui:Refacere}}, {{ui:Copiere}} (în clipboard), {{ui:Lipire}}, și {{ui:Mai multe}}: un meniu cu {{ui:Decupare}}, {{ui:Copiere}}, {{ui:Lipire}}, {{ui:Lipire în aceeași poziție}}, {{ui:Duplicare și mutare}}, {{ui:Ștergere}}, {{ui:Selectare totală}}, {{ui:Anularea selecției}}, {{ui:Selectare rapidă}}, {{ui:Selectare obiecte similare}} și {{ui:Găsire și înlocuire}}, fiecare cu tasta ei |
| {{ui:Vizualizare}} | {{ui:Extinderi}}, {{ui:Fereastră (W)}}, {{ui:Precedent}}, și {{ui:Mai multe}}: {{ui:Măsurare distanță}}, {{ui:Arie}}, {{ui:Măsurare (rază, unghi …)}}, și ecranul împărțit: {{ui:Împărțire alăturată}}, {{ui:Împărțire suprapusă}}, {{ui:Patru panouri}}, {{ui:Un panou}} (vedeți [Împărțirea ecranului](topic:split-screen)), și {{ui:Rotire vizualizare 90° la stânga}}, {{ui:Rotire vizualizare 90° la dreapta}}, {{ui:Înapoi la global}} (vedeți [Rotirea vederii](topic:ucs-and-turned-view)) |

{{ui:Copiere}} din grupul {{ui:Modificare}} este comanda {{cmd:COPY}} (punct de bază, apoi unde merge fiecare copie); {{ui:Copiere}} din grupul {{ui:Editare}} pune obiectele în clipboard pentru {{ui:Lipire}}. Vedeți [Copiere, lipire și duplicare](topic:copy-paste). Butonul comenzii care rulează rămâne evidențiat până se termină comanda. Sfaturile numesc combinațiile de taste Windows („Ctrl+O”); pe Mac, {{key:Mod+O}} funcționează și el.

Pe o fereastră scurtă (un laptop cu afișajul scalat la 125 % sau mai mult, de exemplu) bara de instrumente nu ocupă niciodată locul desenului: când desenul ar primi prea puțină înălțime, butoanele lasă cuvintele de sub pictograme și numele grupurilor (treceți cu indicatorul peste un buton ca să vedeți numele lui), iar dacă tot nu ajunge, bara devine un singur rând care se derulează lateral. O fereastră mai înaltă aduce cuvintele înapoi.

## Panoul din stânga

Panoul din stânga are trei secțiuni.

- **{{ui:Straturi}}.** Fiecare strat din desen, cu un punct plin lângă cel curent. Faceți clic pe un nume ca să faceți stratul respectiv curent. Fiecare rând are o mostră de culoare (faceți clic pe ea ca să alegeți o culoare) și patru butoane: activ/inactiv (ochi), înghețare (fulg de zăpadă), blocare (lacăt) și trasare (imprimantă). {{ui:Strat nou}} deschide o casetă ca să adăugați unul. Vedeți [Organizarea unui desen cu straturi](topic:layers).
- **{{ui:Blocuri}}.** Blocurile definite în desen, de câte ori este folosit fiecare și câte un buton {{ui:Inserare}} pentru fiecare. Vedeți [Crearea și inserarea blocurilor](topic:blocks).
- **{{ui:Desen}}.** Fapte despre fișierul deschis: nume (cu „(modificat)” când există modificări nesalvate), format, dimensiune, unități, număr de obiecte, straturi, blocuri și planșe. După ce deschideți un fișier, o casetă „Despre fișier” listează tot ce CadCraft nu a putut afișa sau a trebuit să convertească.

## Zona de desenare

Mijlocul ecranului este desenul. Indicatorul este o cruce. Când CadCraft cere un punct, un mic marcaj și o etichetă („Capăt”, „Mijloc”) arată unde va ateriza o agățare la obiect. Când cere obiecte, crucea are o casetă de selecție, iar obiectele de sub ea se luminează.

Când desenul este gol, un card „Începeți un desen” arată câteva prime comenzi. Dispare de îndată ce rulați o comandă sau deschideți un fișier. Puteți lăsa un fișier DWG sau DXF oriunde pe această zonă ca să-l deschideți.

## Filele de sub desen

Sub desen sunt filele: {{ui:Model}} întâi, apoi {{ui:3D}}, apoi câte o filă pentru fiecare planșă (layout), apoi un buton {{ui:+}}.

- {{ui:Model}} este desenul însuși, la dimensiune reală, în unitățile desenului.
- {{ui:3D}} arată desenul culcat pe sol și solidele făcute din el. Cât timp este afișată, bara de instrumente are un grup {{ui:3D}} în locul grupurilor de desen. Vedeți [Model în 3D](topic:3d-solids).
- Fiecare filă de planșă este o foaie de hârtie cu un cartuș și ferestre de vizualizare spre model. Ce desenați acolo este în unități de hârtie (milimetri sau inci). Faceți dublu clic în interiorul unei ferestre de vizualizare ca să lucrați pe model prin ea (vedeți [Lucrul pe model printr-o fereastră de vizualizare](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Un nume lung de planșă este tăiat scurt pe filă; treceți cu indicatorul peste filă ca să vedeți numele întreg. Cu multe planșe, {{ui:Setări}} › {{ui:CadCraft}} › {{ui:Filele foilor}} › {{ui:Doar numerele foilor}} arată pe filă doar numărul fiecărei planșe (A-101).
- {{ui:+}} creează o planșă nouă cu un chenar, un cartuș și o fereastră de vizualizare. Este același lucru cu comanda {{cmd:LAYOUT}}.
- Faceți dublu clic pe o filă de planșă ca s-o redenumiți. Cu o filă selectată, {{key:Left}} și {{key:Right}} trec între file.

Fiecare filă își păstrează propriul zoom și propria panoramare. Vedeți [Configurarea unei planșe](topic:sheets-and-viewports).

## Panoul din dreapta: Proprietăți

Panoul din dreapta se schimbă după ce este selectat.

- **Nimic selectat, pe fila {{ui:Model}}:** titlul spune {{ui:Setările curente}}. Aici setați {{ui:Strat}}, Culoarea și {{ui:Înălțime text}} pentru obiectele noi, {{ui:Unități}} ale desenului și dimensiunile pentru cotele noi ({{ui:Înălțime text}}, {{ui:Dimensiunea săgeții}}, {{ui:Zecimale}}, {{ui:Scară generală}}).
- **Nimic selectat, pe o planșă:** titlul spune „Planșă:” și numele planșei. Puteți redenumi planșa, îi puteți schimba {{ui:Hârtie}} și {{ui:Orientare}}, {{ui:Trasați această planșă}} sau {{ui:Ștergeți această planșă}}. Setările pentru obiectele noi urmează mai jos.
- **Un obiect selectat:** tipul lui ca titlu (Linie, Cerc, Text, Cotă, Fereastră de vizualizare…), apoi stratul, culoarea și geometria lui. Tastați o valoare nouă și apăsați {{key:Enter}} ca s-o schimbați.
- **Mai multe obiecte selectate:** câte sunt și stratul și culoarea lor comune. Schimbarea oricăruia le schimbă pe toate. „Variază” înseamnă că diferă.

Vedeți [Editarea cu mânere și Proprietăți](topic:grips-and-properties).

Mai jos, panoul {{ui:Parametri}} se deschide când alegeți {{ui:Parametri}} sau tastați {{cmd:PARAMETERS}}: fiecare parametru și constrângere dimensională într-un singur tabel. Vedeți [Folosirea parametrilor și a ecuațiilor](topic:parameters).

## Linia de comandă

Jos este linia de comandă: istoricul a ceea ce ați făcut și, sub el, promptul.

- Eticheta promptului arată `Comandă:` când nu rulează nimic. Cât timp rulează o comandă, afișează întrebarea, opțiunile ei între paranteze drepte și valoarea implicită între paranteze unghiulare, de exemplu `Specificați raza cercului [Diametru] <500>:`.
- Pe măsură ce tastați un nume de comandă, o sugestie din dreapta arată comenzile care se potrivesc. Apăsați {{key:Tab}} ca s-o acceptați pe prima. „Nu există o astfel de comandă” înseamnă că nimic nu se potrivește.
- {{key:Up}} și {{key:Down}} aduc înapoi rândurile tastate înainte.
- Istoricul păstrează ultimele 400 de rânduri. Mesajele comenzilor, măsurătorile din {{cmd:DIST}} și {{cmd:LIST}}, precum și rapoartele de salvare și trasare apar aici.

## Bara de stare

Rândul de jos este bara de stare.

- **Coordonatele** în stânga: X și Y ale crucii. Cât timp o comandă are un punct de bază, arată și distanța și unghiul față de el, de exemplu `Δ 1200 < 90°`.
- **Mesajele** în mijloc, precum „Ortogonal activat” sau „Strat curent: Pereți”. Dispar după câteva secunde.
- **{{ui:Grilă}}**, **{{ui:Ortogonal}}**, **{{ui:Polar}}**, **{{ui:Agățare}}**, **{{ui:Urmărire}}**, **{{ui:Dyn}}** și **{{ui:LWT}}** în dreapta. Fiecare este un comutator; un buton apăsat este activat. {{ui:LWT}} arată grosimile liniilor pe ecran (vedeți [Grosimi de linie și tipuri de linie](topic:units-papers-scales#line-weights-and-linetypes)). Săgeata mică de lângă {{ui:Agățare}} deschide {{ui:Agățări la obiect}}, unde bifați care agățări sunt active. Vedeți [Agățarea la punctele de pe obiecte](topic:object-snaps).

## Caseta de dialog Trasare în PDF

{{ui:Trasare}} (sau {{key:Mod+P}}) deschide caseta {{ui:Trasare în PDF}}, cu setările în stânga și o previzualizare în timp real în dreapta. Vedeți [Trasare în PDF](topic:plot-pdf).

## Ajutorul

{{key:F1}} sau butonul {{ui:Ajutor}} deschide acest ajutor ca panou lateral; desenul rămâne utilizabil alături. Funcționează fără conexiune. {{key:F1}} din nou, sau {{key:Esc}} în interiorul panoului, îl închide. Vedeți [Folosirea acestui ajutor](common:help).
