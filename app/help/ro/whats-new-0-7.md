---
title: Ce este nou în 0.7 (anterior)
summary: Suprapuneri PDF și import PDF, desene scanate cu vectorizare automată, splines reale cu SPLINE, SPLINEDIT și PEDIT, un manager de stiluri de cotare, text care își păstrează formatarea, WBLOCK și scările proprii, solide 3D din alte programe, înregistrarea scanărilor, un panou Laser, export USD, Istoric și tipărire în CadCraft Studio, un prim desen ghidat, bara de instrumente pe orice latură sau în mai puține rânduri și mai multe pentru asistenții AI.
keywords: noutăți 0.7, versiune anterioară, note de lansare, jurnal de modificări, modificări, 0.7, versiune, funcții noi, pdf, pdfattach, pdfimport, suprapunere, scanare, scanattach, scantrace, vectorizare, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatare, wblock, scalelistedit, listă de scări, acis, solide 3D, registerscans, înregistrarea scanărilor, icp, e57, las, laser, grbl, g-code, usd, usdout, istoric, versiuni, comparare, tipărire, imprimantă, png, svg, stil de trasare, tip de linie, ghid, foaie de comenzi, hartă de comenzi, poziție bară de instrumente, rânduri de bară de instrumente, toolbardock, regen, regenall, trackpad, glisare, pagină de cod, chirilic, coreean, chinez, japonez, electric, rcd, p&id, pid, acad.lsp, acaddoc.lsp, folder de suport, asistenți, mcp, unități, portugheză
from: d07ca034
---

Aceasta este lista modificărilor din CadCraft 0.7, față de 0.6. O mare parte a fost cerută pe Discord. Lista este grupată pe zone, cu cele mai importante primele.

## Noutăți

### PDF și desene scanate

- **Puneți o pagină PDF sub desen.** {{cmd:PDFATTACH}} (`PDFATT`) plasează o pagină la dimensiunea ei reală sau la o scară tastată. Agățați-vă de liniile ei, estompați-o, faceți-o monocromă ({{cmd:PDFADJUST}}), decupați-o ({{cmd:PDFCLIP}}) și comutați straturile proprii ale PDF-ului ({{cmd:PDFLAYERS}}). Se trasează ca linii, umpleri și text, iar un DWG sau DXF 2000 o păstrează ca legătură către fișier. Deschiderea unui PDF cu {{ui:Deschidere}} întreabă dacă să-l atașați sau să-l importați. Vezi [Suprapuneri PDF și import PDF](topic:pdf-underlay).
- **Transformați o pagină PDF în obiecte de desen.** {{cmd:PDFIMPORT}} (`PDFIM`) creează linii, polilinii, cercuri, arce, hașuri pline și text, pe straturi denumite după PDF, la dimensiunea reală, la o scară tastată sau scalate din două puncte și o distanță reală, într-un singur pas de anulare. Vezi [Importul unei pagini](topic:pdf-underlay#import-a-page).
- **Desene scanate.** {{cmd:SCANATTACH}} aduce un PNG, JPEG sau TIFF (o pagină sau toate) ori o pagină PDF care este o imagine. Apoi scalați-o din două puncte ({{cmd:SCANSCALE}}), aliniați-o ({{cmd:SCANALIGN}}), îndreptați-o după propriile linii lungi ({{cmd:SCANDESKEW}}), faceți-o alb-negru și eliminați petele ({{cmd:SCANCLEAN}}), decupați-o și ștergeți părți din ea. Fiecare pas este un singur pas de anulare, iar fișierul original se păstrează. Vezi [Desene scanate și vectorizarea](topic:scanned-drawings).
- **Vectorizați o scanare în linii și arce.** {{cmd:SCANTRACE}} desenează liniile scanării ca linii și arce pe un strat nou, SCAN-TRACE, la o toleranță pe care o setați, și lasă textul și hașurile cum sunt. Raportul spune ce a creat și ce a lăsat, și nu este o garanție că rezultatul este corect: verificați-l pe foaie. {{cmd:RASTERSNAP}} lasă agățările de obiecte să găsească capetele, colțurile și intersecțiile scanării. Nimic nu este trimis nicăieri și nu se folosește niciun model antrenat. Vezi [Vectorizarea](topic:scanned-drawings#the-trace).

### Desenare și editare

- **Splines reale.** {{cmd:SPLINE}} (`SPL`) desenează o curbă prin puncte sau din puncte de control (gradul de la 1 la 5), cu tangente la capete; {{cmd:SPLINEDIT}} (`SPE`) mută, adaugă și șterge puncte de ajustare sau de control, setează ponderile, deschide, închide, inversează sau transformă un spline într-o polilinie. Splines din fișiere DWG și DXF se deschid ca splines, iar DWG și DXF 2000 le salvează ca splines. Vezi [Splines și polilinii](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) închide și deschide polilinii, unește linii și arce cu ele, setează o singură lățime, trece o curbă prin vârfuri sau un spline de-a lungul lor și o readuce cu Decurbare, inversează și editează mai multe deodată. Vezi [Editarea unei polilinii](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) scrie un bloc, unele obiecte sau întreg desenul într-un fișier nou DWG sau DXF, care conține doar straturile, stilurile și blocurile folosite. Vezi [Scrierea unui bloc sau a unor obiecte într-un fișier propriu](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN și REGENALL.** {{cmd:REGEN}} (`RE`) redesenează fila pe care sunteți, din desen, iar {{cmd:REGENALL}} (`REA`) toate filele, panourile și desenele deschise. Vezi [REGEN și REGENALL](topic:commands#regen-and-regenall).

### Text și cotare

- **Textul își păstrează formatarea.** Textul de paragraf din alte programe își păstrează culorile pe cuvânt, aldinarea și cursivul, subliniera, fracțiile suprapuse și înălțimile: se desenează pe ecran și în PDF-uri, se păstrează când editați cuvintele și se salvează înapoi. Vezi [Formatarea din textul de paragraf din alte programe](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Un manager de stiluri de cotare.** {{cmd:DIMSTYLE}} (`D`) creează, modifică, compară și aplică stiluri de cotare cu nume; modificarea unui stil modifică toate cotele care îl folosesc. {{cmd:DIMEDIT}} (`DED`) readuce textul, tastează text nou, îl rotește sau înclină liniile de ghidaj; {{cmd:DIMTEDIT}} mută textul la stânga, la dreapta sau în centru. Vezi [Stiluri de cotare cu nume](topic:dimension-settings#named-dimension-styles).
- **Propriile scări.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) adaugă scări precum 1:75 la listele de scări ale ferestrelor de vizualizare și ale trasării; se salvează în desen (DWG și DXF 2000), iar un desen din alt program își aduce propria listă. Vezi [Scări](topic:units-papers-scales#scales).
- **Text în alte alfabete.** Fișierele DXF salvate în paginile de cod chirilice, coreene, chinezești, japoneze sau vietnameze se deschid acum cu textul lor, iar textul chinezesc, japonez și coreean se tipărește în PDF-uri (trasarea descarcă un font mai mare prima dată când are nevoie). Vezi [Font](topic:text#font).

### Trasare și tipărire

- **Mai multe în tabelele de stiluri de trasare.** Pentru fiecare culoare, un tabel poate seta acum și un tip de linie, capătul liniei și îmbinarea liniilor, și un stil de umplere care tipărește umpleri pline ca linii de hașură; tabelul are propria listă de grosimi de linie și o scară a tipului de linie. Vezi [Tabele de stiluri de trasare](topic:plot-pdf#plot-style-tables).
- **Tipărire, precum și fișiere PNG și SVG.** Caseta de trasare are {{ui:Imprimare…}}, {{ui:Descărcare PNG}} (300 dpi) și {{ui:Descărcare SVG}}. În CadCraft Studio listează imprimantele computerului, hârtia lor și numărul de copii. Vezi [Imprimare](topic:plot-pdf#print) și [Fișiere imagine și SVG](topic:plot-pdf#picture-and-svg-files).

### 3D și nori de puncte

- **Solide 3D din alte programe.** Solidele, regiunile și corpurile din spațiul modelului unui desen se afișează pe fila 3D, doar pentru citire, iar salvarea ca DWG le scrie înapoi neschimbate. Fețele de pe suprafețe pe care CadCraft nu le desenează încă sunt listate, nu ghicite. Vezi [Solide din alte programe](topic:3d-solids#solids-from-other-programs).
- **Înregistrarea mai multor scanări.** {{cmd:REGISTERSCANS}} (`REGSCAN`) plasează scanări luate din poziții diferite într-un singur cadru, prin perechi de puncte sau prin coordonate țintă tastate, le rafinează cu ICP, salvează înregistrarea ca un mic fișier de proiect și scrie norul înregistrat ca un singur fișier LAS sau E57. Vezi [Înregistrarea mai multor scanări într-una](topic:register-scans).
- **Export USD.** {{cmd:USDOUT}}, sau {{cmd:EXPORT3D}} › {{ui:USD}}, scrie solidele din fila 3D ca `.usda`, `.usdc` sau `.usdz`. Vezi [Exportul modelului 3D în USD](topic:usd).
- **Calcule pe fila 3D.** Acolo unde uneltele din fila 3D cer o distanță, puteți tasta un calcul, ca pe linia de comandă. Vezi [Aritmetica într-o valoare tastată](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Fabricare

- **Trimiteți un desen la un laser.** {{cmd:LASER}}, sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Laser…}}, deschide un panou peste desen: fiecare strat taie, zgârie, gravează linii, umple forme, gravează o imagine sau nu este trimis, cu puterea, viteza și trecerile lui. Previzualizarea urmează modificările făcute, {{ui:Salvare cod G…}} scrie codul G în modul laser GRBL, iar în Chrome sau Edge panoul poate încadra lucrarea și o poate trimite prin USB. Setările se salvează în desen (DWG și DXF). Vezi [Trimiterea unui desen la un laser](topic:laser-cutting).
- **Simboluri de instalații în suplimentul Electric.** Prize pentru date, telefon și TV, întrerupătoare cu cheie și cu temporizare, un termostat, indicator de ieșire, detectoare, punct de apel și sirenă, un ventilator, boiler, aragaz, punct de încărcare pentru vehicule electrice, contor de energie și subtablou, precum și simboluri RCD și RCBO. Un circuit poate avea un RCD, tabloul are o coloană RCD, iar verificările semnalează circuitele de prize fără RCD de 30 mA sau mai puțin. Este un memento pentru proiectare, nu o verificare de normă.
- **Un supliment P&ID.** P&ID desenează scheme de proces: simboluri cu puncte de conexiune, linii de proces și de semnal, etichete, numere de linii, liste de echipamente, instrumente și vane (CSV sau un registru de lucru) și verificări. Vine cu CadCraft și este dezactivat până îl porniți în {{ui:Setări}} › {{ui:General}} › {{ui:Suplimente}}. Este un ajutor de desen, nu o aprobare de inginerie, iar cuvintele lui sunt deocamdată doar în engleză.

### Primii pași și ecranul

- **Un prim desen ghidat.** {{cmd:TOUR}} (sau {{ui:Parcurgeți ghidul}} de pe cardul de pornire) vă parcurge șase pași în desenul real: o linie, un cerc, o mutare, o tăiere, o ștergere și o cotă. Pornește singur prima dată când CadCraft se deschide fără nimic în el. Vezi [Preferați să fiți ghidat?](topic:getting-started#prefer-to-be-guided)
- **Un ghid de comenzi și o hartă de comenzi.** [Foaia de comenzi](topic:cheat-sheet) are cele 40 de comenzi zilnice pe o pagină, și ca PDF pentru tipărire, iar [harta de comenzi](topic:command-map) listează comenzile cu numele lor scurte, de la A la Z.
- **Bara de instrumente pe orice latură.** {{ui:Setări}} › {{ui:CadCraft}} › {{ui:Poziția barei de instrumente}}: sus (ca înainte), jos, stânga sau dreapta, sau tastați {{cmd:TOOLBARDOCK}}. Vezi [Poziția barei de instrumente](topic:settings#toolbar-position).
- **Rândurile barei de instrumente.** {{ui:Setări}} › {{ui:CadCraft}} › {{ui:Rânduri de bară de instrumente}}: încadrare pentru potrivire, 2 rânduri sau 1 rând, pentru bara CadCraft și pentru stilurile Drafting classic și Ribbon. {{key:Shift+Ctrl+F1}} trece prin ele, {{key:Ctrl+F1}} prin ce arată butoanele, iar {{cmd:TOOLBARROWS}} și {{cmd:TOOLBAR}} le setează. Indicația de pornire are un buton de închidere. Mulțumiri lui GJoe2, care a trimis asta ca pull request. Vezi [Rândurile barei de instrumente](topic:settings#toolbar-rows).

### În CadCraft Studio

- **Istoric.** {{cmd:HISTORY}} (`HIST`), sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Istoric…}}: copiile pe care Studio le păstrează când deschideți și salvați un desen, și versiunile din cloud ale desenului, dacă l-ați deschis din cloud. Deschideți sau restaurați una, ori comparați două, cu adăugirile, eliminările și modificările arătate în culoare. Vezi [Istoric](topic:history).
- **acad.lsp și acaddoc.lsp.** Alegeți un folder de suport în {{cmd:APPLOAD}}: cele două fișiere se încarcă la pornirea CadCraft (acaddoc.lsp din nou pentru fiecare filă nouă de desen), iar `S::STARTUP` rulează după ele. Vezi [Încărcarea aplicațiilor](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Caseta de trasare în fereastra ei.** Un buton din bara de titlu o mută într-o fereastră pe care o puteți pune pe alt monitor. Vezi [Mutarea unei casete de dialog](common:arrange-panels#move-a-dialog).

### Pentru asistenții AI

- **Fișiere după nume, în dosarele alese.** În CadCraft Studio, un asistent poate deschide, salva și trasa fișiere după nume și poate da unei comenzi fișierul pe care îl cere (INSERT dintr-un fișier, exportul lui COUNT, SAVEAS, PLOT), dar numai în dosarele adăugate sub {{ui:Setări}} › {{ui:CadCraft}} › {{ui:Asistenți}} › {{ui:Dosare pe care le poate folosi}}. Vezi [Lăsați-l să folosească fișiere din dosarele alese](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Mai puține apeluri.** Un asistent poate tasta o linie de comandă întreagă dintr-o dată, poate ține o comandă deschisă între apeluri, poate număra obiectele pe tip și strat fără să le listeze și poate plasa un bloc cu valorile atributelor sale, într-un singur pas.
- **Fără fereastră.** Linia de comandă `cadcraft` scrie trasări SVG și convertește, trasează, verifică ori descrie multe fișiere deodată. Pachetul MCP nu este publicat încă. Vezi [Lucrul cu fișierele fără deschiderea CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Modificări

- **Touchpadul face pan.** Mutați două degete pe touchpad și vizualizarea 2D le urmează; ciupirea și rotița mouse-ului dau zoom. Vezi [Mouse, touchpad și atingere](topic:mouse-trackpad-touch).
- **Obiectele OLE se păstrează.** Obiectele incorporate dintr-un DXF se afișează ca imagine sau ca un cadru etichetat și se salvează înapoi prin DXF 2000. Cele dintr-un DWG se păstrează și se scriu înapoi la salvarea ca DWG, dar nu se afișează încă. Înainte, se pierdeau la salvare. Vezi [Obiecte din alte programe (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Unitățile unui desen nou** urmează unitatea pe care o stelați în {{ui:Setări}} › {{ui:General}} › {{ui:Unități}}.

## Remedieri

- Aranjările care se deschideau goale sau care pierdeau o fereastră de vizualizare și arătau întregul model în locul ei se deschid acum cu ferestrele reale. O aranjare fără legătură cu conținutul ei se păstrează, iar raportul de deschidere o spune.
- Fișierele DXF în paginile de cod mai vechi arătau text chirilic și coreean distorsionat. Acum se citesc corect.
- Textul de paragraf din alte programe își pierdea formatarea la deschidere și se salva înapoi simplu.

## În toate aplicațiile

- **Unități.** {{ui:Setări}} › {{ui:General}} › {{ui:Unități}} are câte o listă pentru lungime, arie, volum, unghi și pantă, cu dimensiunile exacte date de definițiile unităților (picioarul topografic american este o unitate proprie). Dezactivați unitățile pe care nu le folosiți și ies din liste; stelați una și lucrările noi încep în ea. Un fișier își păstrează întotdeauna propria unitate. În CadCraft, steaua setează unitățile unui desen nou atunci când este o unitate pe care o poate purta un desen; caseta proprie {{ui:Unități}} a CadCraft nu urmează încă comutatoarele. Odată ce un desen are unități, o lungime tastată poate purta semnul oricărei unități. Vezi [Unități, valori tastate și listele de unități](common:unit-lists).
- **Un aspect mai dens și panouri care se ascund.** {{ui:Setări}} › {{ui:General}} › {{ui:Densitatea aspectului}} › {{ui:Compactă}} încape mai mult pe ecran (ecranele tactile și telefoanele își păstrează butoanele mari). Fiecare panou lateral are o bară de titlu subțire: trageți-o ca să ancorați sau să detașați panoul, lăsați-l pe bara altui panou ca să împărțiți un cadru în file, fixați-l ca să alunece spre margine sau ascundeți-l și aduceți-l înapoi de la margine. Vezi [Aranjarea panourilor](common:arrange-panels#make-the-layout-denser).
- **Casetele de dialog se mută.** Trageți o casetă de dialog de bara de titlu, ca s-o scoateți din calea desenului; revine acolo unde ați lăsat-o. Faceți dublu clic pe bara de titlu ca s-o centrați din nou. Vezi [Mutarea unei casete de dialog](common:arrange-panels#move-a-dialog).
- **Rețete pentru asistenții AI.** Zece cereri lucrate pentru propriul asistent (curățarea unui desen, trasarea unui set, verificarea desenelor, întrebări despre un model, totalizarea unei extrageri de cantități, o variantă de piesă…), fiecare cu uneltele pe care le apelează și permisiunile de care are nevoie, și fiecare reluată de testele noastre. Aplicațiile nu conțin IA. Vezi [Rețete pentru asistenții AI](common:assistants-recipes).
- **Limbi.** **Português (Portugal)** este nouă în {{ui:Setări}} › {{ui:General}} › {{ui:Limbă}}. Aceasta, **Português (Brasil)**, **Español (México)** și **Bahasa Indonesia** au acum toate cuvintele aplicațiilor, ca ciorne încă nerevizuite de un vorbitor nativ. Subiectele de ajutor sunt în engleză.
- **CadCraft Studio** spune de ce a eșuat verificarea unei actualizări (nu există încă fișier pentru sistemul dumneavoastră, lipsă de rețea, semnătură greșită), în loc să scrie doar „Gata”, și nu mai readuce un card Noutăți pe care l-ați închis până când apare o versiune mai nouă.

## Încă nu în această versiune

- **0.7 nu este semnat digital.** Semnarea și pachetul Microsoft Store au trecut în 0.8, pentru că validarea certificatului nu a sosit încă. Verificați SHA-256 de lângă fiecare fișier de pe getcadcraft.com/download. Pe Windows, dacă SmartScreen oprește programul de instalare, alegeți {{ui:Mai multe informații}}, apoi {{ui:Rulați oricum}}. Pe Mac, prima dată, faceți clic dreapta pe CadCraft Studio și alegeți {{ui:Deschidere}}. CadCraft Studio nu este încă într-un magazin de aplicații, iar încă nu există versiune pentru iPad sau iPhone.
- Listele de unghiuri și pante din {{ui:Unități}} se salvează, dar niciun câmp nu le citește încă.
- Obiectele OLE dintr-un DWG se păstrează, dar nu se afișează, iar imaginile metafișier din obiectele OLE nu se desenează.
- Citirea tabelelor de stiluri de trasare (fișiere CTB) din alte programe așteaptă un fișier de probă.
- Textul asiatic mai vechi scris ca coduri `\M+` este citit, dar nu a fost verificat încă pe un fișier dintr-un alt program.
- Suprapunerile PDF: imaginile din pagină se afișează pe ecran, dar nu se trasează, trasarea unui asistent lasă suprapunerile afară, iar modul în care alte programe citesc decuparea și scara salvate nu a fost verificat în ele.
- Istoric: CadCraft nu trimite încă salvările în cloud, deci versiunile din cloud sunt cele salvate de pe alte dispozitive și din browser. Istoricul există doar în CadCraft Studio.
- Nu este clar dacă Studio păstrează folderul de suport acad.lsp după o repornire; dacă o cere, alegeți din nou folderul în APPLOAD.
- Panoul Laser nu a fost încercat pe un laser real: testați fiecare setare pe material de probă. CadCraft Studio nu are Web Serial, deci în Studio panoul salvează doar codul G.
- Înregistrarea scanărilor a fost testată pe scanări fictive, nu încă pe un set de la un scaner real.
- Panoramarea cu două degete a fost încercată cu evenimente simulate de touchpad, nu încă pe un touchpad real.
- {{cmd:PEDIT}} nu are opțiunea Editare vârf (folosiți mânerele sau Proprietăți). Decalarea, tăierea, prelungirea, racordarea, întreruperea și unirea nu acceptă încă splines; înălțimea (Z) a unui spline nu se păstrează.
- Textul de paragraf nou nu poate primi încă coduri de formatare, iar trasările SVG arată textul formatat într-o singură culoare.
- Opțiunea Întregul desen a lui WBLOCK scrie doar modelul, nu și foile. Stilul de cotare curent nu se salvează în fișier: un desen se deschide cu Standard curent.
- Stilurile de meniu cu panglică nu au încă liste de straturi, culori sau tipuri de linie: folosiți panoul {{ui:Straturi}} și {{ui:Proprietăți}}.
- Norii de puncte nu se salvează încă în desen și nu se trasează, iar fișierele E57 se deschid cu până la 6 milioane de puncte și 512 MB.
- Fișierele DWG salvate de CadCraft nu au fost verificate încă în AutoCAD însuși.

Restul este în [Nu este încă disponibil](topic:not-built-yet).
