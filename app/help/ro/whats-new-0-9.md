---
title: Ce este nou în 0.9 (anterior)
summary: Hașuri care urmează conturul lor, grupuri de straturi, etaje suprapuse, pereți inteligenți 2D cu uși și ferestre, stiluri de text și un editor de text formatat, o linie de comandă plutitoare, agățare de grilă, zece moduri de a desena un arc și panoul Documente.
keywords: ce este nou 0.9, versiune anterioară, ce este nou, 0.9, note de versiune, jurnal de modificări, hașură, hașură asociativă, hatchedit, fișier pat, fișier de model, grupuri de straturi, laygroup, etaje, etaje suprapuse, floorlayers, pereți inteligenți, perete, ușă, fereastră, unelte de perete, stil de text, style, editor mtext, text de paragraf, formatare, linie de comandă plutitoare, linie de comandă, zonă de sus, compact, agățare de grilă, grid snap, f9, arc, panou documente, check out, dimensiuni britanice oțel, draw.io, text thailandez, dxf r12, modificări, 0.8, 0.8.1, versiune, funcții noi, autocompletare, fantomă, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, etichete, redline, îmbinare, git, fossil, access, desenare fără vedere, cititor de ecran, limite, unghiuri de orientare, aunits, shx, diagramă, ole, istoric, comparare, în cuvinte, proprietăți, picioare și inci, întindere, limbi, dispozitive de intrare, probleme, live, asistenți
from: 3451e64c
---

Aceasta este lista modificărilor din CadCraft 0.9, comparativ cu 0.8.1. CadCraft este aplicația de desenare 2D și 3D din CadCraft Studio 0.9 și din cele opt aplicații ale sale. 0.9 încheie desenul în plan, adaugă stiluri de text și un editor de text real și oferă mai mult spațiu pe ecran.

## Nou

### Desenul în plan

- **Hașuri care urmează conturul lor.** {{cmd:HATCH}} se leagă de ce o mărginește. Mutați, rotiți sau scalați conturul și hașura, cu modelul ei, îl urmează; remodelați-l și hașura se recalculează. {{cmd:HATCHEDIT}} (`HE`) schimbă o hașură după aceea și face sau oprește legătura. Vedeți [Hașuri și suprafețe de umplere](topic:hatch).
- **Fișiere de model pentru hașuri.** La întrebarea {{cmd:HATCH}} `Specificați punctul interior`, tastați `F` (Fișier de model) și alegeți un fișier `.pat`. Doar fișierele scrise în formatul obișnuit au fost încercate.
- **Grupuri de straturi.** În {{ui:Instrumente}} din panoul {{ui:Straturi}}: {{ui:Grup nou}}, {{ui:Adăugare grupuri gata făcute}}, {{ui:Grupare după nume}} și {{ui:Găsiți un strat}}; sau tastați {{cmd:LAYGROUP}} (`LG`). Vedeți [Organizarea unui desen cu straturi](topic:layers#group-layers).
- **Etaje suprapuse.** {{cmd:FLOORS}} (`FLR`), sau {{ui:Etaje…}} din meniul {{ui:Mai multe}} al grupului {{ui:Vizualizare}}. O fereastră de vizualizare pe o foaie poate arăta un etaj sub {{ui:Etaj afișat}} din Proprietăți. {{cmd:FLOORLAYERS}} transformă etajele în straturi pentru un fișier destinat altcuiva. Vedeți [Stivuirea etajelor într-un desen](topic:floors).
- **Pereți inteligenți 2D, uși și ferestre.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) și {{cmd:DELOPENING}}. Colțurile, îmbinările în T și intersecțiile sunt calculate automat. Pereții țin o evidență a modului în care se unesc, iar în Proprietăți apar Fără unire la început și la sfârșit, o Linie de locație și o Lungime editabilă. Vedeți [Desenarea pereților 2D, a ușilor și a ferestrelor](topic:walls-2d).
- **Unelte de perete pe pereții din plan.** Tastați {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} și restul. Încă nu au butoane pe bara de instrumente. Vedeți [Forme de pereți, tăieturi, decalări și blocări pentru pereții 2D](topic:wall-tools-2d).

### Text

- **Stiluri de text.** {{cmd:STYLE}} (`ST`), sau {{ui:Stil de text}} din bara {{ui:Desen}}: stiluri cu nume, cu font, înălțime, factor de lățime și înclinare. Vedeți [Setarea fontului și a dimensiunii textului cu stiluri de text](topic:text-styles).
- **Un editor de text de paragraf formatat.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} sau un dublu clic pe text deschid o casetă cu font, dimensiune, îngroșat, cursiv, subliniat, tăiat, culoare, aliniere și semnele de grad, plus-minus și diametru, plus {{ui:OK}} și {{ui:Anulare}}. Vedeți [Formatarea textului de paragraf](topic:format-paragraph-text).
- **O diagramă din XML draw.io.** {{cmd:DIAGRAM}} (`T2D`) citește și XML draw.io lipit. Vedeți [Desenarea unei diagrame din text](topic:text-to-diagram).
- **Text thailandez într-o trasare PDF.** Înainte se tipărea ca semne de întrebare.

### Mai mult spațiu și ajutoare de desen

- **O linie de comandă plutitoare, mai subțire, și o zonă de sus compactă.** Trageți mânerul liniei de comandă ca s-o faceți plutitoare, trageți marginea de sus pentru mai puține rânduri, {{key:F2}} deschide istoricul. {{ui:Setări}} › {{ui:CadCraft}} › {{ui:Linie de comandă}} și alegerile zonei de sus au aceleași setări. Vedeți [Setările](topic:settings#command-line).
- **Meniul agățărilor de obiecte.** Faceți clic dreapta pe {{ui:Agățare}} din bara de stare, sau tastați {{cmd:OSNAP}}.
- **Agățare de grilă.** Butonul {{ui:Agățare la grilă}} din bara de stare, sau {{key:F9}}: punctele alese merg la cel mai apropiat punct de grilă când nicio agățare de obiect nu a luat punctul.
- **Arc în zece moduri, și Continuare.** {{ui:Arc}} din bara {{ui:Desen}} sau {{cmd:ARC}}: 3 puncte, familia Început/Centru/Sfârșit, familia Centru/Început/Sfârșit și Continuare (apăsați {{key:Enter}} la punctul de început) de la ultima linie, arc sau polilinie.
- **Panoul Documente.** {{cmd:DOCUMENTS}} (`DOCS`) sau {{ui:Documente…}} din meniul {{ui:Mai multe}} al grupului {{ui:Vizualizare}}: revizie, stare și extragere pentru fiecare desen dintr-un dosar de proiect. Se deschide ca o casetă de dialog centrată. Vedeți [Documente](topic:documents).

### Fișiere

- **Dimensiuni britanice de oțel.** 976 de secțiuni în panoul Standard, tastate ca pe desene (de exemplu `305x165x40 UB`).
- **Pachete sud-africane** (practica de desen și reglementările de construcție), ca pachete ale suplimentului Reglementări de construcție. Cifrele nu sunt verificate.
- **Suplimente pentru CadCraft,** adăugate la cerere și oprite implicit: proiectarea iluminatului interior, proiectarea cipurilor (de la HDL la plan), gravarea cu router, simularea circuitelor, roți dințate pentru lanțuri cu role și pachete de țară pentru Reglementări de construcție.

## Corectate

- Mutarea, rotirea sau scalarea unei hașuri lăsa în urmă modelul.
- {{cmd:GRIDMOVE}} ducea un perete de plan întreg care începe doar pe linia de grilă. Acum un perete este judecat după capetele sale.
- Grila se arăta doar în interiorul limitelor desenului, chiar cu limitele oprite.
- Lista de blocuri din panoul lateral derulează, iar un nume care nu este un bloc listează blocurile care încep cu el („Ați vrut să spuneți”).
- Fișierele DXF R12 pe care AutoCAD le refuza („Unknown group 1001 for table”) se deschid acum aici.
- Fișierele foarte mari (circa 70.000 de entități și mai mult) nu se deschideau, cu „Maximum call stack size exceeded”.
- Fișierele DWG din AutoCAD 2018 și mai noi, cu o versiune de întreținere mare, nu se deschideau cu „bad BITLONG code 11”.
- În caseta de text de paragraf, o dimensiune nouă tastată pentru o parte selectată păstrează selecția.

## În fiecare aplicație

Sfaturi Bootstrap pentru fiecare control cu un indiciu, un sfat de pornire pe care îl puteți închide, file care derulează când nu încap și un titlu de filă de browser care urmează desenul deschis (`<drawing> - CadCraft | CadCraft`). {{ui:Setări}} › {{ui:Aspect}} este acum o listă derulantă cu alegeri de două rânduri. Lista de limbi din {{ui:Setări}} este mai lungă decât în 0.8. Co-editarea live, colecțiile din Bibliotecă și unitățile de greutate și temperatură sunt descrise în notele Studio.

## Limite cinstite

- Textul de paragraf nu are liste cu marcatori sau numerotate, riglă de tabulare sau justificare. PDF-urile trasate setează textul în Helvetica.
- Pereții din plan sunt drepți, așa că un arc se desenează ca pereți scurți. Verificarea de către comunitate a uneltei de perete este în așteptare.
- Grupurile de straturi nu sunt scrise în formatul propriu AutoCAD, deci AutoCAD arată o listă plată. Alte programe arată toate etajele împreună, dacă nu rulați {{cmd:FLOORLAYERS}}.
- Panoul Documente nu a fost încercat de două persoane pe un share real. Gravarea cu router nu a rulat pe niciun calculator real. Estimarea iluminatului a fost verificată față de o trasare de fotoni, nu față de alt program. Suplimentele de inginerie sunt instrumente de verificare, nu un înlocuitor pentru revizia unui inginer.
- Limbile în afara englezei sunt ciorne automate până când le citește un vorbitor nativ, iar unele dintre cuvintele noi sunt doar în engleză.

## Anterior: 0.8 și 0.8.1

Aceasta este lista modificărilor din CadCraft 0.8 și 0.8.1, comparativ cu 0.7. 0.8 (1 noiembrie 2026) adaugă ajutoare de desen care lucrează din desenul propriu, prin reguli pe computer și fără model, iar 0.8.1 (2 noiembrie 2026) repară erorile raportate după el.

### Nou

**Desenul care îți termină gândul**

- **O fantomă arată ce urmează.** Fără nicio comandă în curs, o fantomă gri punctată arată ce spun modelele desenului: următorul stâlp la aceeași distanță, următoarea treaptă a unei scări, peretele lipsă al unei camere. Apăsați {{key:Tab}} ca să o desenați ca un singur pas de anulare, sau {{key:Esc}} ca s-o înlăturați. Se uită doar la cele mai noi obiecte, astfel încât rămâne fluidă pe un desen mare. O opriți în {{ui:Setări}} › {{ui:CadCraft}} sau cu {{cmd:AUTOCOMPLETE}} `Off`.
- **Următorul punct la desenarea unei linii.** În mijlocul {{cmd:LINE}} sau {{cmd:PLINE}}, fantoma este următorul punct: următoarea treaptă a unei scări, al patrulea colț al unui dreptunghi sau punctul care îl închide. Aduceți cursorul aproape de ea și apăsați {{key:Tab}}, ca și cum ați fi făcut clic acolo.
- **Schițele cu creionul devin geometrie precisă.** {{cmd:SKETCHFIX}}: desenați trasee aproximative cu creionul, mouse-ul sau degetul, iar fiecare devine o linie, un cerc, un arc, un dreptunghi sau o polilinie curată, lipită de ce este deja desenat. Vedeți [Schițați cu un creion și obțineți geometrie precisă](topic:sketch-with-a-pen).
- **O fotografie a unei schițe devine un desen.** {{cmd:PHOTOSKETCH}} (`PSK`) găsește hârtia într-o fotografie, îndreaptă perspectiva, aplică dimensiunea de hârtie și scara pe care le dați și trasează liniile creionului pe un strat pentru fiecare culoare de creion. Scrisul nu se trasează.
- **Cotare după reguli.** {{cmd:AUTODIM}} (`ADIM`) face lanțuri de cote de-a lungul laturilor alese, o dimensiune generală, lățimile golurilor, diametrele găurilor și, cu `Grid`, distanța dintre liniile de grilă. Nu repetă niciodată o cotă care există deja.
- **Mutați o linie de grilă și setul o urmează.** {{cmd:GRIDMOVE}} (`GM`): pereții care se termină pe linia de grilă se întind odată cu ea, pereții de-a lungul ei, coloanele, bula și eticheta ei se mută, iar cotele de pe ea măsoară noua distanță. Un pas de anulare.

**Foi, detalii și etichete**

- **Foi care se aranjează singure.** {{cmd:AUTOSHEET}} ia vederile dumneavoastră denumite (sau bucățile separate ale modelului), alege o dimensiune de hârtie și o scară standard și pune vederile pe foi noi, cu un cartuș și o legendă de nume și scară sub fiecare. Totul rămâne editabil. Vedeți [Aranjați foile pentru mine](topic:lay-out-sheets-for-me).
- **Detaliile firmei, oferite pe măsură ce desenați.** {{cmd:DETAILS}} (`DET`) păstrează detaliile proprii ale firmei sub formă de blocuri. Când ce selectați se potrivește cu unul prin cuvintele din straturile, numele blocurilor și notele lui, bara de stare o spune; îl alegeți și îl plasați. {{cmd:DETAILS}} › Partajare pune lista în dosarul dumneavoastră de Documente și aduce ce a adăugat echipa. Setările opresc sugestiile.
- **Etichete pe blocuri.** {{cmd:TAGS}} definește o etichetă (tipul, valorile permise, blocurile la care se aplică), o setează pe referințele de bloc selectate și le listează ca un tabel pe care îl puteți salva ca CSV. Definițiile se păstrează în DWG. Vedeți [Etichete](topic:tags).
- **Limitele desenului.** {{cmd:LIMITS}} stabilește un dreptunghi pentru desen: grila îl umple, iar zoomul Tot îl arată. Limitele apar ca un contur și se salvează în DWG și DXF, împreună cu limitele hârtiei. Vedeți [Stabilirea limitelor desenului](topic:drawing-limits).

**Lucrul cu alți oameni și cu alte programe**

- **Transformați o adnotare într-o revizie.** {{cmd:REDLINE}} citește pachetul scris de MarkupCraft și listează fiecare modificare. Acceptați sau respingeți fiecare cu o notă; cele acceptate primesc un nor de revizie și un jurnal de revizie într-un singur pas de anulare, iar salvați fișierul de răspunsuri care închide adnotările în MarkupCraft. Vedeți [Transformarea unei adnotări într-o revizie](topic:redline-to-revision).
- **Desene pe care git și Fossil le pot îmbina.** Cu {{ui:Fișiere compatibile cu îmbinarea}} pornit în {{ui:Setări}} › {{ui:CadCraft}}, fiecare obiect primește o cheie care nu se schimbă (fișierele sunt cu circa 10 procente mai mari). `cadcraft merge base ours theirs` îmbină două seturi de modificări ale aceluiași obiect DWG sau DXF, obiect cu obiect, și raportează doar unde două persoane au schimbat același lucru. Vedeți [Îmbinarea modificărilor a două persoane dintr-un desen](topic:merge-drawings).
- **Ce s-a schimbat, în cuvinte.** În Istoric, {{ui:Comparare}} dă o listă simplă: unde s-au schimbat lucrurile, cât de mari sunt locurile, ce a fost adăugat, eliminat sau modificat și textul editat. Vedeți [Spunerea în cuvinte a modificărilor](topic:changes-in-words).
- **Orientări și unghiuri.** Tastați o direcție ca orientare de topograf, precum N45°23'30"E, sau în grade, minute și secunde, oriunde se cere un unghi; AUNITS stabilește cum se arată unghiurile. Vedeți [Tastarea și afișarea orientărilor și a unghiurilor](topic:bearings-and-angles).
- **Propriile fonturi SHX.** Dați CadCraft un dosar de fonturi SHX, iar stilurile de text care le numesc se desenează cu ele, pe ecran și în trasări. Vedeți [Desenarea textului cu propriile fonturi SHX](topic:shx-fonts).
- **O diagramă din text.** {{cmd:DIAGRAM}} citește o diagramă de flux Mermaid, o diagramă de componente PlantUML, D2 sau o listă de la-la și desenează blocuri și conectori pe care îi puteți edita. Vedeți [Desenarea unei diagrame din text](topic:text-to-diagram).
- **Obiecte OLE într-un DWG.** {{cmd:OLELIST}} listează obiectele OLE pe care le are un DWG și pe care CadCraft nu le poate plasa singur și plasează o copie a imaginii acolo unde spuneți. Vedeți [Imagini](topic:pictures#objects-from-other-programs-ole).
- **Calculele rămân cu desenul.** Foile de calcul și motivele de proiectare se păstrează în DWG, împreună cu tabelul de clase.

**Desenarea fără vedere**

- Porniți {{ui:Desenare fără vedere}} în {{ui:Setări}} (sau tastați {{cmd:ACCESS}} și răspundeți `On`). CadCraft spune fiecare comandă și rezultat prin cititorul de ecran, descrie desenul și ce se află lângă cursor, vă lasă să mutați cursorul și să alegeți puncte de la tastatură, și redă un sunet pentru fiecare agățare și mâner. Acolo unde browserul poate recunoaște vorbirea pe computer, comenzile pot fi rostite. Vedeți [Desenarea fără vedere](topic:draft-without-sight).

**În fiecare aplicație**

- **Limbi.** 54 de limbi; zece sunt noi (lituaniană, letonă, bosniacă, marathi, telugu, albaneză, afrikaans, filipineză, swahili, uzbeacă). Limbile în afara englezei sunt ciorne automate până când le citește un vorbitor nativ.
- **Dispozitive de intrare.** Trackpad, creion, mouse 3D, controler de joc și comenzi MIDI.
- **Rândurile barei de instrumente și grila de proprietăți.** {{ui:Setări}} › {{ui:General}} › {{ui:Rânduri de bară de instrumente}} oferă Încadrare, 2 rânduri sau 1 rând în celelalte aplicații. CadCraft își păstrează propria setare în {{ui:Setări}} › {{ui:CadCraft}} (vedeți [Rândurile barei de instrumente](topic:settings#toolbar-rows)). Grila de proprietăți comună se află în trei alte aplicații, nu în CadCraft.
- **Probleme, Live și suplimente.** Un panou comun de Probleme care avertizează în fiecare aplicație, o vedere Live a locului în care se află fiecare în CadCraft Studio (vedeți [Lucrați împreună la un desen](topic:work-live)) și o listă a suplimentelor.
- **Conectați-vă AI-ul.** O singură conexiune din CadCraft Studio către toate cele opt aplicații, cu un nivel de doar citire, de sugerare sau de editare pentru fiecare aplicație și un jurnal în cuvinte simple al acțiunilor asistentului. CadCraft nu are AI propriu, iar „Întrebați în fiecare aplicație” folosește AI-ul pe care îl conectați.

### Corectate în 0.8.1

- **Proprietățile arătau 150 în loc de 12'-6"** în desenele cu picioare și inci. Câmpurile pe care aplicația le citește singură își păstrează din nou textul.
- **Fișierele DWG a căror secțiune de clase era citită ca tip greșit** (GitHub cadcraft#5) se deschid acum corect.
- **Cursorul cu reticul nu mai apare în spatele ferestrelor pop-up.**
- **Studio și edițiile împachetate pot schimba limba în timpul rulării.** Înainte erau doar în engleză. Nu este încă testat pe fiecare platformă: spuneți-ne dacă limba nu se schimbă.
- **Tabletele în portret dau înălțimea rămasă a grilei pânzei**, iar modul foi pornește la 760 px sau mai puțin.
- **STRETCH cu o fereastră de tip intersectare și LIMITS** au fost raportate în Studio 0.8.0, dar erau deja corecte în versiunea web 0.8; instalatorul celui care a raportat era mai vechi. Studio 0.8.1 le include.

### Încă nu sunt în această versiune

- **0.8 și 0.8.1 nu sunt semnate digital.** Windows poate avertiza (alegeți {{ui:Mai multe informații}}, apoi {{ui:Rulați oricum}}); pe Mac, faceți clic dreapta pe CadCraft Studio și alegeți {{ui:Deschidere}}. Versiunile pentru magazine sunt în așteptare, iar versiunea pentru iPad și iPhone nu a fost reconstruită pentru 0.8.1.
- **Schițele cu creionul și schițele din fotografii** au fost încercate doar pe fotografii inventate și cu mouse-ul, nu încă cu un creion real, un ecran tactil sau o schiță de mână pe hârtie.
- **Desenarea fără vedere** a fost testată cu verificări automate, nu încă cu un cititor de ecran sau cu un tester nevăzător.
- **Partajarea detaliilor** nu a avut o verificare cu două persoane, iar un dosar Team Cloud Plan ca dosar de Documente nu este realizat.
- **Îmbinarea** funcționează pentru fișierele DWG și DXF ale CadCraft; pentru fișierele celorlalte aplicații nu este realizată.
- **Anularea între ferestre:** CadCraft raportează fiecare pas terminat, dar Studio nu are încă o singură Anulare pentru toate aplicațiile; fiecare aplicație își anulează propriii pași.
- **Obiectele OLE dintr-un DWG** sunt păstrate, dar nu sunt desenate la locul lor.
- **Citirea tabelelor de stiluri de trasare (fișiere CTB)** din alte programe este realizată, dar nu a fost verificată față de un fișier din alt program.
- **Conectați-vă AI-ul:** conectarea dintr-un clic în Studio, conectorul găzduit pentru AI-ul din browser, cheia proprie de API în Studio și pachetul MCP publicat nu sunt promise în această versiune.

Pentru versiunea dinaintea acesteia, vedeți [Ce este nou în 0.7](topic:whats-new-0-7).
