---
title: Ce este nou în 0.9
summary: Hașuri care urmează conturul lor, grupuri de straturi, etaje suprapuse, pereți inteligenți 2D cu uși și ferestre, stiluri de text și un editor de text formatat, o linie de comandă plutitoare, agățare la grilă, zece moduri de a desena un arc și panoul Documente.
keywords: ce este nou, 0.9, note de lansare, jurnal de modificări, haș, haș asociativ, hatchedit, fișier pat, fișier de model, grupuri de straturi, laygroup, etaje, etaje suprapuse, floorlayers, pereți inteligenți, perete, ușă, fereastră, unelte de perete, stil de text, stil, editor mtext, text de paragraf, formatare, linie de comandă plutitoare, linie de comandă, zona de sus, compact, agățare la grilă, grilă, f9, arc, panoul documente, check out, dimensiuni oțel UK, draw.io, text thai, dxf r12, ce este nou, 0.8, 0.8.1, versiune, funcții noi, autocomplete, fantomă, tab, sketchfix, photosketch, autosheet, detalii, gridmove, autodim, etichete, redline, merge, git, fossil, access, desenare fără vedere, cititor de ecran, limite, orientări, aunits, shx, diagramă, ole, istoric, comparare, în cuvinte, proprietăți, picioare și țoli, întindere, limbi, dispozitive de intrare, probleme, live, asistenți
from: 8b6dea0b
---

Aceasta este lista modificărilor din CadCraft 0.9, față de 0.8.1. CadCraft este aplicația de desen 2D și 3D din CadCraft Studio 0.9 și din cele opt aplicații ale sale. 0.9 încheie desenarea planurilor, adaugă stiluri de text și un editor real de text și oferă mai mult spațiu pe ecran.

## Noutăți

### Desenarea planurilor

- **Hașuri care urmează conturul lor.** {{cmd:HATCH}} se leagă de ceea ce le mărginește. Mutați, rotiți sau scalați conturul și hașura și modelul ei îl urmează; îi schimbați forma și hașura se calculează din nou. {{cmd:HATCHEDIT}} (`HE`) modifică o haș după aceea și creează sau încheie legătura. Vezi [Hașuri și zone de umplere](topic:hatch).
- **Fișiere de model pentru haș.** La întrebarea {{cmd:HATCH}} `Pick internal point`, tastați `F` (Fișier de model) și alegeți un fișier `.pat`. Au fost încercate doar fișiere scrise în formatul obișnuit.
- **Grupuri de straturi.** În {{ui:Instrumente}} din panoul {{ui:Straturi}}: {{ui:Grup nou}}, {{ui:Adăugare grupuri gata făcute}}, {{ui:Grupare după nume}} și {{ui:Găsiți un strat}}; sau tastați {{cmd:LAYGROUP}} (`LG`). Vezi [Organizarea unui desen cu straturi](topic:layers#group-layers).
- **Etaje suprapuse.** {{cmd:FLOORS}} (`FLR`), sau {{ui:Etaje…}} din meniul {{ui:Mai multe}} al grupului {{ui:Vizualizare}}. O fereastră de vizualizare de pe o foaie poate arăta un etaj, la {{ui:Etaj afișat}} din {{ui:Proprietăți}}. {{cmd:FLOORLAYERS}} transformă etajele în straturi, pentru un fișier care merge la altcineva. Vezi [Suprapunerea etajelor într-un desen](topic:floors).
- **Pereți inteligenți 2D, uși și ferestre.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) și {{cmd:DELOPENING}}. Colțurile, joncțiunile în T și intersecțiile sunt calculate pentru dvs. Pereții păstrează o evidență a modului în care se unesc, iar {{ui:Proprietăți}} primește {{ui:Fără unire la început}} / {{ui:Fără unire la sfârșit}}, o {{ui:Linie de amplasare}} și o {{ui:Lungime}} editabilă. Vezi [Desenarea pereților 2D, a ușilor și a ferestrelor](topic:walls-2d).
- **Unealta de perete pe pereții de plan.** Tastați {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} și restul. Nu au încă butoane pe bara de instrumente. Vezi [Forme, tăieturi, decalări și blocări pentru pereții 2D](topic:wall-tools-2d).

### Text

- **Stiluri de text.** {{cmd:STYLE}} (`ST`), sau {{ui:Stil de text}} de pe bara {{ui:Desen}}: stiluri cu nume, cu font, înălțime, factor de lățime și înclinare. Vezi [Setarea fontului și a dimensiunii textului cu stiluri de text](topic:text-styles).
- **Un editor de text de paragraf formatat.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} sau un dublu clic pe text deschide o casetă cu font, dimensiune, aldine, cursiv, subliniere, tăiere, culoare, aliniere și semnele gradului, plus-minus și diametrului, plus {{ui:OK}} și {{ui:Anulare}}. Vezi [Formatarea textului de paragraf](topic:format-paragraph-text).
- **O diagramă din XML draw.io.** {{cmd:DIAGRAM}} (`T2D`) citește și XML-ul draw.io lipit. Vezi [Desenarea unei diagrame din text](topic:text-to-diagram).
- **Text thai într-o trasare PDF.** Înainte se tipărea ca semne de întrebare.

### Mai mult spațiu și ajutoare de desen

- **O linie de comandă plutitoare, mai subțire, și o zonă de sus compactă.** Trageți mânerul liniei de comandă ca s-o faceți plutitoare, trageți-i marginea de sus pentru mai puține rânduri, {{key:F2}} deschide istoricul. {{ui:Setări}} › {{ui:CadCraft}} › {{ui:Linie de comandă}} și alegerile zonei de sus au aceleași setări. Vezi [Setări](topic:settings#command-line).
- **Meniul agățării de obiecte.** Faceți clic dreapta pe {{ui:Agățare}} din bara de stare sau tastați {{cmd:OSNAP}}.
- **Agățare la grilă.** Butonul {{ui:Agățare la grilă}} din bara de stare, sau {{key:F9}}: punctele alese merg la cel mai apropiat punct al grilei, când nicio agățare de obiect nu a luat punctul.
- **Arc în zece moduri, și Continuare.** {{ui:Arc}} de pe bara {{ui:Desen}} sau {{cmd:ARC}}: din 3 puncte, familia Început/Centru/Sfârșit și familia Centru/Început/Sfârșit, și Continuare (apăsați {{key:Enter}} în punctul de început) de la ultima linie, din ultimul arc sau din ultima polilinie.
- **Panoul Documente.** {{cmd:DOCUMENTS}} (`DOCS`) sau {{ui:Documente…}} din meniul {{ui:Mai multe}} al grupului {{ui:Vizualizare}}: revizia, starea și extragerea pentru fiecare desen dintr-un folder de proiect. Se deschide ca o casetă de dialog centrată. Vezi [Documente](topic:documents).

### Fișiere

- **Dimensiuni de oțel UK.** 976 de secțiuni în panoul Standard, tastate ca în desene (de exemplu `305x165x40 UB`).
- **Pachete sud-africane** (practica de desen și reglementările de construcții) ca pachete ale suplimentului Reglementări de construcție. Cifrele nu sunt verificate.
- **Suplimente pentru CadCraft,** adăugate la cerere și dezactivate implicit: proiectarea iluminatului interior, proiectarea cipurilor (de la HDL la plan), gravarea cu router, simularea circuitelor, roți dințate pentru lanțuri cu role și pachete de țară pentru Reglementări de construcție.

## Remedieri

- Mutarea, rotirea sau scalarea unei haș lăsa modelul în urmă.
- {{cmd:GRIDMOVE}} ducea cu el un perete de plan care începe doar pe linia de grilă. Acum un perete este judecat după capete.
- Grila apărea doar în limitele desenului, chiar cu limitele oprite.
- Lista de blocuri din panoul lateral se derulează, iar un nume care nu este un bloc listează blocurile care încep cu el („Ați vrut să spuneți”).
- Fișierele DXF R12 pe care AutoCAD le refuza („Unknown group 1001 for table”) se deschid acum acolo.
- Fișierele foarte mari (de la circa 70.000 de entități în sus) nu se deschideau cu „Maximum call stack size exceeded”.
- Fișierele DWG din AutoCAD 2018 și mai noi, cu o versiune de întreținere ridicată, nu se deschideau cu „bad BITLONG code 11”.
- În caseta de text de paragraf, o dimensiune nouă tastată pentru o parte selectată păstrează selecția.

## În toate aplicațiile

Sfaturi Bootstrap la fiecare control cu indiciu, un sfat de pornire pe care îl puteți închide, benzi de file care se derulează când nu încap, și un titlu de filă de browser care urmează desenul deschis (`<drawing> - CadCraft | CadCraft`). {{ui:Setări}} › {{ui:Aspect}} este acum o listă derulantă cu alegeri de două rânduri. Lista de limbi din {{ui:Setări}} este mai lungă decât în 0.8. Co-editarea live, colecțiile din Bibliotecă și unitățile de greutate și temperatură sunt descrise în notele Studio.

## Limite recunoscute

- Textul de paragraf nu are liste cu marcatori sau numerotate, riglă de tabulatori sau justificare. Trasările PDF setează textul în Helvetica.
- Pereții de plan sunt drepți, deci un arc se desenează ca pereți scurți. Verificarea de către comunitate a uneltei de perete este în așteptare.
- Grupurile de straturi nu sunt scrise în formatul propriu AutoCAD, deci AutoCAD arată o listă plată. Celelalte programe arată toate etajele împreună, dacă nu rulați {{cmd:FLOORLAYERS}}.
- Panoul Documente nu a fost încercat de două persoane pe un folder partajat real. Gravarea cu router nu a rulat pe nicio mașină reală. Estimarea iluminatului a fost verificată față de o trasare a fotonilor, nu față de alt program. Suplimentele de inginerie sunt ajutoare de verificare, nu un înlocuitor al revizuirii de către un inginer.
- Limbile diferite de engleză sunt ciorne făcute de mașină, iar unele dintre cuvintele noi sunt doar în engleză.

## Anterior: 0.8 și 0.8.1

Aceasta este lista modificărilor din CadCraft 0.8 și 0.8.1, față de 0.7. 0.8 (1 noiembrie 2026) adaugă ajutoare de desen care lucrează după propriul desen, după reguli de pe computer și fără model, iar 0.8.1 (2 noiembrie 2026) corectează erorile raportate după el.

### Noutăți

**Desen care completează ce urmează**

- **O fantomă arată ce urmează.** Fără nicio comandă în curs, o fantomă punctată, gri, arată ce spun modelele desenului dvs. că urmează: următorul montant la aceeași distanță, următoarea treaptă a unei scări, peretele lipsă al unei încăperi. Apăsați {{key:Tab}} ca s-o desenați într-un singur pas de anulare, sau {{key:Esc}} ca s-o înlăturați. Se uită doar la cele mai noi obiecte, deci rămâne fluidă pe un desen mare. O opriți în {{ui:Setări}} › {{ui:CadCraft}} sau cu {{cmd:AUTOCOMPLETE}} `Off`.
- **Următorul punct cât desenați o linie.** În mijlocul {{cmd:LINE}} sau {{cmd:PLINE}}, fantoma este următorul punct: următoarea treaptă a unei scări, al patrulea colț al unui dreptunghi sau punctul care îl închide. Aduceți cursorul aproape de ea și apăsați {{key:Tab}}, ca și cum ați fi făcut clic acolo.
- **Schițele cu creionul devin geometrie precisă.** {{cmd:SKETCHFIX}}: desenați trasee aproximative cu un creion, mouse sau deget și fiecare devine o linie, un cerc, un arc, un dreptunghi sau o polilinie curată, agățată de ce este deja desenat. Vezi [Schițați cu un creion și obțineți geometrie precisă](topic:sketch-with-a-pen).
- **O fotografie a unei schițe devine desen.** {{cmd:PHOTOSKETCH}} (`PSK`) găsește hârtia dintr-o fotografie, îndreaptă perspectiva, aplică dimensiunea hârtiei și scara pe care le dați și trasează liniile de creion pe un strat pentru fiecare culoare de creion. Literele nu sunt trasate.
- **Cotați după reguli.** {{cmd:AUTODIM}} (`ADIM`) face lanțuri de cote de-a lungul laturilor alese, o dimensiune de ansamblu, lățimi de deschideri, diametre de găuri și, cu `Grid`, distanțele dintre grile. Nu repetă niciodată o cotă care există deja.
- **Mutați o linie de grilă și setul urmează.** {{cmd:GRIDMOVE}} (`GM`): pereții care se termină pe linia de grilă se întind odată cu ea, pereții de-a lungul ei, stâlpii, cercul ei și eticheta se mută, iar cotele pe ea măsoară noua distanță. Un singur pas de anulare.

**Foi, detalii și etichete**

- **Foi care se aranjează singure.** {{cmd:AUTOSHEET}} ia vederile dvs. numite (sau bucățile separate ale modelului), alege un format de hârtie și o scară standard și pune vederile pe foi noi, cu un cartuș și o legendă cu nume și scară. Totul rămâne editabil. Vezi [Aranjați foile în locul meu](topic:lay-out-sheets-for-me).
- **Detaliile firmei, oferite cât desenați.** {{cmd:DETAILS}} (`DET`) păstrează propriile blocuri de detalii. Când ce selectați se potrivește cu unul după cuvintele din straturile, numele blocurilor și notele sale, bara de stare o spune; îl alegeți și îl plasați. {{cmd:DETAILS}} › Partajare pune lista în folderul Documente și aduce ce a adăugat echipa. Setările opresc sugestiile. 
- **Etichete pe blocuri.** {{cmd:TAGS}} definește o etichetă (tipul ei, valorile pe care le poate lua, blocurile la care se aplică), o setează pe referințele de bloc selectate și le listează ca un tabel pe care îl puteți salva ca CSV. Definițiile se păstrează în DWG. Vezi [Etichete](topic:tags).
- **Limitele desenului.** {{cmd:LIMITS}} setează un dreptunghi pentru desen: grila îl umple, iar zoomul Tot îl arată. Limitele apar ca un contur și se salvează în DWG și DXF, împreună cu limitele hârtiei. Vezi [Setarea limitelor desenului](topic:drawing-limits).

**Lucrul cu alte persoane și cu alte programe**

- **Transformați o adnotare într-o revizie.** {{cmd:REDLINE}} citește pachetul scris de MarkupCraft și listează fiecare modificare. Acceptați sau respingeți fiecare cu o notă; cele acceptate primesc un nor de revizie și un jurnal de revizie într-un singur pas de anulare, iar salvați fișierul de răspunsuri care închide adnotările în MarkupCraft. Vezi [Transformarea unei adnotări într-o revizie](topic:redline-to-revision).
- **Desene pe care git și Fossil le pot uni.** Cu {{ui:Fișiere compatibile cu îmbinarea}} pornit în {{ui:Setări}} › {{ui:CadCraft}}, fiecare obiect primește o cheie care nu se schimbă niciodată (fișierele sunt cu circa 10 procente mai mari). `cadcraft merge base ours theirs` unește apoi modificările a două persoane la un obiect DWG sau DXF, obiect cu obiect, și raportează doar unde două persoane au schimbat același lucru. Vezi [Unirea modificărilor a două persoane la un desen](topic:merge-drawings).
- **Ce s-a schimbat, în cuvinte.** În Istoric, Comparare dă o listă simplă: unde s-au schimbat lucrurile, cât de mari sunt locurile, ce a fost adăugat, eliminat sau modificat și textul care a fost editat. Vezi [Spuneți în cuvinte ce s-a schimbat](topic:changes-in-words).
- **Orientări și unghiuri.** Tastați o direcție ca orientare de topograf, precum N45°23'30"E, sau în grade, minute și secunde, oriunde se cere un unghi; AUNITS setează cum se arată unghiurile. Vezi [Tastarea și afișarea orientărilor și unghiurilor](topic:bearings-and-angles).
- **Propriile fonturi SHX.** Dați CadCraft un folder de fonturi SHX, iar stilurile de text care le numesc sunt desenate cu ele, pe ecran și în trasări. Vezi [Desenarea textului în propriile fonturi SHX](topic:shx-fonts).
- **O diagramă din text.** {{cmd:DIAGRAM}} citește o diagramă de flux Mermaid, o diagramă de componente PlantUML, D2 sau o listă de la-la și desenează blocuri și conectori pe care îi puteți edita. Vezi [Desenarea unei diagrame din text](topic:text-to-diagram).
- **Obiecte OLE într-un DWG.** {{cmd:OLELIST}} listează obiectele OLE pe care le are un DWG și pe care CadCraft nu le poate plasa singur și plasează o copie a unei imagini unde spuneți. Vezi [Imagini](topic:pictures#objects-from-other-programs-ole).
- **Calculele dvs. rămân cu desenul.** Foile de calcul și motivele de proiectare se păstrează în DWG, împreună cu tabelul de clase.

**Desenarea fără vedere**

- Porniți {{ui:Desenarea fără vedere}} în {{ui:Setări}} (sau tastați {{cmd:ACCESS}} și răspundeți `On`). CadCraft rostește fiecare comandă și rezultat prin cititorul de ecran, descrie desenul și ce este lângă cursor, vă lasă să mutați cursorul și să alegeți puncte de la tastatură și scoate un sunet pentru fiecare agățare și mâner. Acolo unde browserul poate recunoaște vorbirea pe computer, comenzile pot fi rostite. Vezi [Desenarea fără vedere](topic:draft-without-sight).

**În toate aplicațiile**

- **Limbi.** 54 de limbi; zece sunt noi (lituaniana, letona, bosniaca, marathi, telugu, albaneza, afrikaans, filipineza, swahili, uzbeka). Limbile diferite de engleză sunt ciorne făcute de mașină până le citește un vorbitor nativ.
- **Dispozitive de intrare.** Comenzi pentru touchpad, creion, mouse 3D, controler de joc și MIDI.
- **Rânduri de bară de instrumente și grila de proprietăți.** {{ui:Setări}} › {{ui:General}} › {{ui:Rânduri de bară de instrumente}} oferă Încadrare, 2 rânduri sau 1 rând în celelalte aplicații. CadCraft își păstrează propria setare în {{ui:Setări}} › {{ui:CadCraft}} (vezi [Rânduri de bară de instrumente](topic:settings#toolbar-rows)). Grila de proprietăți comună se află în alte trei aplicații, nu în CadCraft.
- **Probleme, Live și suplimente.** Un panou comun de Probleme care avertizează în fiecare aplicație, o vizualizare Live a locului în care se află fiecare persoană în CadCraft Studio (vezi [Lucrul la un desen împreună](topic:work-live)) și o listă de suplimente.
- **Conectați-vă IA.** O singură conexiune din CadCraft Studio către toate cele opt aplicații, cu un nivel de doar citire, de sugerare sau de editare pentru fiecare aplicație și un jurnal în cuvinte simple al celor făcute de asistent. CadCraft nu are IA proprie, iar Întrebare în fiecare aplicație folosește IA pe care o conectați.

### Remedieri în 0.8.1

- **Proprietățile afișau 150 în loc de 12'-6"** în desenele în picioare și țoli. Câmpurile pe care aplicația le citește singură își păstrează din nou textul.
- **Fișierele DWG a căror secțiune de clase era citită ca tip greșit** (GitHub cadcraft#5) se deschid acum corect.
- **Cursorul în cruce nu mai apare în spatele ferestrelor pop-up.**
- **Studio și edițiile împachetate pot schimba limba în timpul rulării.** Înainte, erau doar în engleză. Nu este încă testat pe fiecare platformă: spuneți-ne dacă limba nu se schimbă.
- **Tabletele în portret dau înălțimea rămasă a grilei pânzei.** Modul foi pornește la 760 px sau mai puțin.
- **STRETCH cu o fereastră de intersecție, și LIMITS,** au fost raportate pe Studio 0.8.0 și erau deja corecte în versiunea web 0.8; programul de instalare al raportorului era mai vechi. Studio 0.8.1 le include.

### Încă nu în această versiune

- **0.8 și 0.8.1 nu sunt semnate digital.** Windows poate avertiza (alegeți {{ui:Mai multe informații}}, apoi {{ui:Rulați oricum}}); pe Mac, faceți clic dreapta pe CadCraft Studio și alegeți {{ui:Deschidere}}. Versiunile pentru magazine sunt suspendate, iar versiunea pentru iPad și iPhone nu a fost reconstruită pentru 0.8.1.
- **Schițele cu creionul și fotografiile schițelor** au fost încercate doar pe fotografii fictive și cu mouse, nu încă cu un creion real, un ecran tactil sau o schiță făcută de mână pe hârtie.
- **Desenarea fără vedere** a fost testată cu verificări automate, nu încă cu un cititor de ecran sau cu un tester nevăzător.
- **Partajarea detaliilor** nu a avut o verificare de două persoane, iar un folder Team Cloud Plan ca folder Documente nu este construit.
- **Unirea** funcționează pentru fișierele DWG și DXF ale CadCraft; pentru fișierele celorlalte aplicații nu este construită încă.
- **Anularea între ferestre:** CadCraft raportează fiecare pas terminat, dar Studio nu are încă o singură Anulare pentru toate aplicațiile; fiecare aplicație își anulează propriii pași.
- **Obiectele OLE dintr-un DWG** se păstrează, dar nu se desenează pe loc.
- **Citirea tabelelor de stiluri de trasare (fișiere CTB)** din alte programe este construită, dar nu a fost verificată față de un fișier dintr-un alt program.
- **Conectați-vă IA:** conectarea dintr-un clic în Studio, conectorul găzduit pentru IA din browser, propria cheie API în Studio și pachetul MCP publicat nu sunt promise în această versiune.

Pentru versiunea dinaintea acesteia, vezi [Ce este nou în 0.7](topic:whats-new-0-7).
