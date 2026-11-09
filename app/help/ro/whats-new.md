---
title: Noutăți în 0.8 și 0.8.1
summary: O fantomă care termină desenul, schițe cu creionul și fotografii de schițe transformate în geometrie, planșe care se aranjează singure, detalii oferite pe măsură ce desenați, GRIDMOVE și AUTODIM, etichete, fișiere compatibile cu îmbinarea, revizuiri transformate din marcaje, desenare fără vedere, limite de desen, orientări, fonturi SHX, diagrame din text și corecturi în 0.8.1.
keywords: noutăți, ce este nou, note de lansare, jurnal de modificări, modificări, 0.8, 0.8.1, versiune, funcții noi, completare automată, autocomplete, fantomă, ghost, tab, sketchfix, photosketch, autosheet, detalii, details, gridmove, autodim, etichete, tags, revizuire, redline, îmbinare, merge, git, fossil, acces, access, desenare fără vedere, draft without sight, cititor de ecran, screen reader, limite, limits, orientări, bearings, aunits, shx, diagramă, diagram, ole, istoric, history, comparare, compare, în cuvinte, in words, proprietăți, properties, picioare și inch, feet and inches, întindere, stretch, limbi, languages, dispozitive de intrare, input devices, probleme, problems, live, asistenți, assistants
from: 9dd82db5
---

Acestea sunt modificările din CadCraft 0.8 și 0.8.1, comparativ cu 0.7. Versiunea 0.8 (1 noiembrie 2026) adaugă instrumente de desenare care lucrează din propriul dvs. desen, prin reguli de pe computerul dvs. și fără model, iar 0.8.1 (2 noiembrie 2026) corectează erorile raportate după aceasta.

## Noutăți

### Desenul care vă termină gândul

- **O fantomă arată ce urmează.** Fără nicio comandă în curs, o fantomă gri, cu linie întreruptă, arată ce spun modelele proprii ale desenului dvs. că urmează: următorul montant la aceeași distanță, următoarea treaptă a unei scări, peretele lipsă al unei camere. Apăsați {{key:Tab}} pentru a-l desena ca un singur pas de anulare sau {{key:Esc}} pentru a o închide. Ia în considerare doar cele mai noi obiecte, așa că rămâne fluidă pe un desen mare. Dezactivați-o în {{ui:Setări}} › {{ui:CadCraft}} sau cu {{cmd:AUTOCOMPLETE}} `Off`.
- **Următorul punct în timp ce desenați o linie.** În timpul comenzii {{cmd:LINE}} sau {{cmd:PLINE}}, fantoma este următorul punct: următoarea treaptă a unei scări, al patrulea colț al unui dreptunghi sau punctul care îl închide. Aduceți cursorul aproape de ea și apăsați {{key:Tab}}, ca și cum ați fi dat clic acolo.
- **Schițele cu creionul devin geometrie precisă.** {{cmd:SKETCHFIX}}: desenați trasee aproximative cu un creion, mouse-ul sau degetul, iar fiecare devine o linie, un cerc, un arc, un dreptunghi sau o polilinie curată, agățată de ceea ce este deja desenat. Vedeți [Schițați cu un creion și obțineți geometrie precisă](topic:sketch-with-a-pen).
- **O fotografie a unei schițe devine desen.** {{cmd:PHOTOSKETCH}} (`PSK`) găsește hârtia dintr-o fotografie, îndreaptă perspectiva, aplică dimensiunea hârtiei și scara pe care le indicați și trasează liniile creionului pe un strat pentru fiecare culoare de creion. Inscripțiile nu sunt trasate.
- **Cotați pe baza regulilor.** {{cmd:AUTODIM}} (`ADIM`) realizează lanțuri de cote de-a lungul laturilor pe care le alegeți, o dimensiune totală, lățimi de deschideri, diametre de găuri și, cu `Grid`, distanța dintre axe. Nu repetă niciodată o cotă care există deja.
- **Mutați o linie de axă și ansamblul urmează.** {{cmd:GRIDMOVE}} (`GM`): pereții care se termină pe linia de axă se întind odată cu aceasta, pereții de-a lungul ei, stâlpii, cercul de la capăt și eticheta se mută, iar cotele de pe ea măsoară noua distanță. Un singur pas de anulare.

### Planșe, detalii și etichete

- **Planșe care se aranjează singure.** {{cmd:AUTOSHEET}} ia vederile dvs. denumite (sau piesele separate ale modelului), alege o dimensiune a hârtiei și o scară standard și așază vederile pe planșe noi, cu un cartuș și o legendă cu nume și scară. Totul rămâne editabil. Vedeți [Aranjați planșele pentru mine](topic:lay-out-sheets-for-me).
- **Detaliile firmei dvs., oferite pe măsură ce desenați.** {{cmd:DETAILS}} (`DET`) păstrează blocurile dvs. de detalii. Când ceea ce selectați corespunde unuia după cuvintele din straturile, numele blocurilor și notele sale, bara de stare o anunță; îl alegeți și îl plasați. {{cmd:DETAILS}} › Share pune lista dvs. în dosarul Documente și aduce ce a adăugat echipa dvs. Setările dezactivează ofertele.
- **Etichete pe blocuri.** {{cmd:TAGS}} definește o etichetă (tipul ei, valorile pe care le poate lua, blocurile la care se aplică), o setează pe referințele de bloc selectate și le listează ca un tabel centralizator pe care îl puteți salva ca CSV. Definițiile sunt păstrate în DWG. Vedeți [Etichete](topic:tags).
- **Limitele desenului.** {{cmd:LIMITS}} stabilește un dreptunghi pentru desen: grila îl umple, iar zoom Toate îl arată. Limitele apar ca un contur și sunt salvate în DWG și DXF, împreună cu limitele hârtiei. Vedeți [Setați limitele desenului](topic:drawing-limits).

### Lucrul cu alți oameni și cu alte programe

- **Transformați un marcaj într-o revizuire.** {{cmd:REDLINE}} citește pachetul scris de MarkupCraft și listează fiecare modificare. Acceptați sau respingeți fiecare cu o notă; cele acceptate primesc un nor de revizuire și un jurnal de revizuire într-un singur pas de anulare, iar dvs. salvați fișierul de răspunsuri care închide marcajele din MarkupCraft. Vedeți [Transformați un marcaj într-o revizuire](topic:redline-to-revision).
- **Desene pe care git și Fossil le pot îmbina.** Cu {{ui:Fișiere compatibile cu îmbinarea}} activat în {{ui:Setări}} › {{ui:CadCraft}}, fiecare obiect primește o cheie care nu se schimbă niciodată (fișierele sunt cu aproximativ 10 la sută mai mari). `cadcraft merge base ours theirs` îmbină apoi modificările a două persoane asupra unui obiect DWG sau DXF, obiect cu obiect, și raportează doar unde două persoane au modificat același lucru. Vedeți [Îmbinați modificările a două persoane într-un singur desen](topic:merge-drawings).
- **Ce s-a schimbat, în cuvinte.** În Istoric, Comparare oferă o listă simplă: unde s-au schimbat lucrurile, cât de mari sunt zonele, ce a fost adăugat, eliminat sau modificat și textul care a fost editat. Vedeți [Spuneți în cuvinte ce s-a schimbat](topic:changes-in-words).
- **Orientări și unghiuri.** Scrieți o direcție ca orientare de topograf, cum ar fi N45°23'30"E, sau în grade, minute și secunde, oriunde se cere un unghi; AUNITS stabilește cum se afișează unghiurile. Vedeți [Scrieți și afișați orientări și unghiuri](topic:bearings-and-angles).
- **Propriile fonturi SHX.** Dați CadCraft un dosar cu fonturi SHX, iar stilurile de text care le denumesc sunt desenate cu ele, pe ecran și în trasări. Vedeți [Desenați text cu propriile fonturi SHX](topic:shx-fonts).
- **O diagramă din text.** {{cmd:DIAGRAM}} citește o diagramă de flux Mermaid, o diagramă de componente PlantUML, D2 sau o listă de la-la și desenează blocuri și conectori pe care îi puteți edita. Vedeți [Desenați o diagramă din text](topic:text-to-diagram).
- **Obiecte OLE într-un DWG.** {{cmd:OLELIST}} listează obiectele OLE pe care le conține un DWG și pe care CadCraft nu le poate plasa singur și plasează o copie a unei imagini acolo unde indicați. Vedeți [Imagini](topic:pictures#objects-from-other-programs-ole).
- **Calculele dvs. rămân cu desenul.** Foile de calcul și motivele de proiectare sunt păstrate în DWG, împreună cu tabelul de clase.

### Desenare fără vedere

- Activați {{ui:Desenare fără vedere}} în {{ui:Setări}} (sau scrieți {{cmd:ACCESS}} și răspundeți `On`). CadCraft anunță prin cititorul de ecran fiecare comandă și rezultat, descrie desenul și ce se află lângă cursor, vă lasă să mutați cursorul și să alegeți puncte de la tastatură și redă un sunet pentru fiecare agățare și mâner. Acolo unde browserul dvs. poate recunoaște vorbirea pe computerul dvs., comenzile pot fi rostite. Vedeți [Desenați fără vedere](topic:draft-without-sight).

### În toate aplicațiile

- **Limbi.** 54 de limbi; zece sunt noi (lituaniana, letona, bosniaca, marathi, telugu, albaneza, afrikaans, filipineza, swahili, uzbeca). Limbile în afara englezei sunt ciorne automate până când le citește un vorbitor nativ.
- **Dispozitive de intrare.** Trackpad, creion, mouse 3D, controler de joc și comenzi MIDI.
- **Rânduri de bară de instrumente și grila de proprietăți.** {{ui:Setări}} › {{ui:General}} › {{ui:Rânduri de bară de instrumente}} oferă Încadrare, 2 rânduri sau 1 rând în celelalte aplicații. CadCraft își păstrează propria setare în {{ui:Setări}} › {{ui:CadCraft}} (vedeți [Rânduri de bară de instrumente](topic:settings#toolbar-rows)). Grila de proprietăți comună se află în alte trei aplicații, nu în CadCraft.
- **Probleme, Live și suplimente.** Un panou comun Probleme care avertizează în fiecare aplicație, o vedere Live a celor care sunt unde în CadCraft Studio (vedeți [Lucrați la un desen împreună](topic:work-live)) și o listă de suplimente.
- **Conectați-vă AI-ul.** O singură conexiune de la CadCraft Studio la toate cele opt aplicații, cu un nivel doar citire, sugerare sau editare pentru fiecare aplicație și un jurnal în cuvinte simple al celor făcute de asistent. CadCraft nu are AI propriu, iar Întreabă în fiecare aplicație folosește AI-ul pe care îl conectați.

## Corectate în 0.8.1

- **Proprietățile afișau 150 în loc de 12'-6"** în desenele în picioare și inch. Câmpurile pe care aplicația le citește singură își păstrează din nou textul.
- **Fișiere DWG a căror secțiune de clase era citită ca tip greșit** (GitHub cadcraft#5) se deschid acum corect.
- **Cursorul în cruce nu mai apare în spatele ferestrelor pop-up.**
- **Studio și edițiile împachetate pot schimba limba în timpul rulării.** Înainte, erau doar în engleză. Nu este încă testat pe toate platformele: spuneți-ne dacă limba nu se schimbă.
- **Tabletele în portret** dau spațiu suplimentar de grilă pentru pânză, iar modul planșe începe la 760 px sau mai puțin.
- **STRETCH cu o fereastră de intersectare, și LIMITS,** au fost raportate în Studio 0.8.0 și erau deja corecte în versiunea web 0.8; programul de instalare al celui care a raportat era mai vechi. Studio 0.8.1 le include.

## Nu este încă în această versiune

- **0.8 și 0.8.1 nu sunt semnate digital.** Windows poate avertiza (alegeți {{ui:Mai multe informații}}, apoi {{ui:Rulare oricum}}); pe Mac, faceți clic dreapta pe CadCraft Studio și alegeți {{ui:Deschidere}}. Versiunile pentru magazine sunt suspendate, iar versiunea pentru iPad și iPhone nu a fost reconstruită pentru 0.8.1.
- **Schițele cu creionul și fotografiile de schițe** au fost încercate doar pe fotografii inventate și cu un mouse, nu încă cu un creion real, un ecran tactil sau o schiță de mână pe hârtie.
- **Desenarea fără vedere** a fost testată cu verificări automate, nu încă cu un cititor de ecran sau cu un tester nevăzător.
- **Partajarea detaliilor** nu a avut o verificare cu două persoane, iar un dosar Team Cloud Plan ca dosar Documente nu este realizat.
- **Îmbinarea** funcționează pentru fișierele DWG și DXF ale CadCraft; pentru fișierele celorlalte aplicații nu este realizată.
- **Anularea între ferestre:** CadCraft raportează fiecare pas terminat, dar Studio nu are încă o singură Anulare pentru toate aplicațiile; fiecare aplicație își anulează propriii pași.
- **Obiectele OLE ale unui DWG** sunt păstrate, dar nu sunt desenate la locul lor.
- **Citirea tabelelor de stiluri de trasare (fișiere CTB)** din alte programe este realizată, dar nu a fost verificată pe un fișier din alt program.
- **Conectați-vă AI-ul:** conectarea dintr-un clic în Studio, conectorul găzduit pentru AI-ul din browser, propria cheie API în Studio și pachetul MCP publicat nu sunt promise în această versiune.

Pentru versiunea dinaintea acesteia, vedeți [Noutăți în 0.7](topic:whats-new-0-7).
