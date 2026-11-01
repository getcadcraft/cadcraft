---
title: Noutăți în 0.7
summary: Underlay-uri PDF și import PDF, desene scanate cu urmărire automată, spline-uri reale cu SPLINE, SPLINEDIT și PEDIT, un manager de stiluri de cotare, text care își păstrează formatarea, WBLOCK și scările proprii, solide 3D din alte programe, înregistrarea scanărilor, un panou Laser, export USD, Istoric și tipărire în CadCraft Studio, un prim desen ghidat, bara de instrumente pe orice latură sau în mai puține rânduri și altele pentru asistenții AI.
keywords: noutăți, ce este nou, note de lansare, jurnal de modificări, modificări, 0.7, versiune, funcții noi, pdf, pdfattach, pdfimport, underlay, scanare, scanattach, scantrace, urmărire, trace, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatare, wblock, scalelistedit, listă de scări, acis, solide 3d, registerscans, înregistrare scanări, icp, e57, las, laser, grbl, g-code, usd, usdout, istoric, versiuni, compară, tipărire, imprimantă, png, svg, stil de trasare, tip de linie, ghid, fișă rapidă, hartă a comenzilor, poziție bară de instrumente, rânduri bară de instrumente, toolbardock, regen, regenall, trackpad, glisare, pagină de cod, chirilică, coreeană, chineză, japoneză, electric, rcd, p&id, pid, acad.lsp, acaddoc.lsp, folder de suport, asistenți, mcp, unități, portugheză
from: b9258ca6
---

Aceasta este lista modificărilor din CadCraft 0.7, comparativ cu 0.6. Multe au fost cerute pe Discord. Lista este grupată pe zone, cu cele mai importante primele.

## Nou

### PDF-uri și desene scanate

- **Puneți o pagină PDF sub desen.** {{cmd:PDFATTACH}} (`PDFATT`) plasează o pagină la dimensiunea ei reală sau la o scară tastată. Agățați-vă de liniile ei, estompați-o, faceți-o monocromă ({{cmd:PDFADJUST}}), decupați-o ({{cmd:PDFCLIP}}) și comutați straturile PDF-ului ({{cmd:PDFLAYERS}}). Se trasează ca linii, umpleri și text, iar un DWG sau DXF 2000 o păstrează ca legătură către fișier. Deschiderea unui PDF cu {{ui:Deschidere}} întreabă dacă să-l atașați sau să-l importați. Vedeți [Fundaluri PDF și import PDF](topic:pdf-underlay).
- **Transformați o pagină PDF în obiecte de desen.** {{cmd:PDFIMPORT}} (`PDFIM`) creează linii, polilinii, cercuri, arce, hașuri pline și text pe straturi numite după PDF, la dimensiunea reală, la o scară tastată sau scalată din două puncte și o distanță reală, într-un singur pas de anulare. Vedeți [Importul unei pagini](topic:pdf-underlay#import-a-page).
- **Desene scanate.** {{cmd:SCANATTACH}} aduce un PNG, JPEG sau TIFF (o pagină sau toate) sau o pagină PDF care este o imagine. Apoi o scalați din două puncte ({{cmd:SCANSCALE}}), o aliniați ({{cmd:SCANALIGN}}), o îndreptați după propriile linii lungi ({{cmd:SCANDESKEW}}), o faceți alb-negru și eliminați petele ({{cmd:SCANCLEAN}}), o decupați și ștergeți părți din ea. Fiecare pas este un singur pas de anulare, iar fișierul original este păstrat. Vedeți [Desene scanate și urmărirea](topic:scanned-drawings).
- **Urmăriți o scanare în linii și arce.** {{cmd:SCANTRACE}} desenează liniile scanării ca linii și arce pe un strat nou, SCAN-TRACE, la o toleranță pe care o stabiliți, și lasă textul și hașurile neschimbate. Raportul spune ce a făcut și ce a lăsat, și nu este o garanție că rezultatul este corect: verificați-l față de planșă. {{cmd:RASTERSNAP}} lasă agățările la obiect să găsească capetele, colțurile și intersecțiile scanării. Nimic nu este trimis nicăieri și nu se folosește niciun model antrenat. Vedeți [Urmărirea](topic:scanned-drawings#the-trace).

### Desenare și editare

- **Spline-uri reale.** {{cmd:SPLINE}} (`SPL`) desenează o curbă prin puncte sau din puncte de control (grad 1 până la 5), cu tangente la capete; {{cmd:SPLINEDIT}} (`SPE`) mută, adaugă și șterge puncte de ajustare sau de control, stabilește greutăți, deschide, închide, inversează sau transformă un spline într-o polilinie. Spline-urile din fișierele DWG și DXF se deschid ca spline-uri, iar DWG și DXF 2000 le salvează ca spline-uri. Vedeți [Spline-uri și polilinii](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) închide și deschide polilinii, unește linii și arce de ele, stabilește o lățime, potrivește o curbă prin vârfuri sau un spline de-a lungul lor și o readuce cu Decurbare, inversează și editează mai multe deodată. Vedeți [Editarea unei polilinii](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) scrie un bloc, câteva obiecte sau tot desenul într-un DWG sau DXF nou, care conține doar straturile, stilurile și blocurile pe care le folosesc. Vedeți [Scrierea unui bloc sau a obiectelor într-un fișier propriu](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN și REGENALL.** {{cmd:REGEN}} (`RE`) redesenează fila pe care sunteți din desen, {{cmd:REGENALL}} (`REA`) pe fiecare filă, panou și desen deschis. Vedeți [REGEN și REGENALL](topic:commands#regen-and-regenall).

### Text și cote

- **Textul își păstrează formatarea.** Textul de paragraf din alte programe își păstrează culorile pe cuvânt, aldinele și cursivul, subliniatul, fracțiile suprapuse și înălțimile: sunt desenate pe ecran și în PDF-uri, păstrate când editați cuvintele și salvate înapoi. Vedeți [Formatarea în textul de paragraf din alte programe](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Un manager de stiluri de cotare.** {{cmd:DIMSTYLE}} (`D`) creează, modifică, compară și aplică stiluri de cotare denumite; modificarea unui stil schimbă fiecare cotă care îl folosește. {{cmd:DIMEDIT}} (`DED`) readuce textul în poziția inițială, scrie text nou, îl întoarce sau înclină liniile de ghidaj (de extensie); {{cmd:DIMTEDIT}} mută textul la stânga, la dreapta sau în centru. Vedeți [Stiluri de cotare denumite](topic:dimension-settings#named-dimension-styles).
- **Propriile scări.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) adaugă scări precum 1:75 la listele de scări ale ferestrelor de vizualizare și ale trasării; sunt salvate în desen (DWG și DXF 2000), iar un desen din alt program aduce propria listă. Vedeți [Scări](topic:units-papers-scales#scales).
- **Text în alte alfabete.** Fișierele DXF salvate în pagini de cod chirilice, coreene, chineze, japoneze sau vietnameze se deschid acum cu textul lor, iar textul chinezesc, japonez și coreean se tipărește în PDF-uri (trasarea descarcă un font mai mare prima dată când are nevoie de el). Vedeți [Font](topic:text#font).

### Trasare și tipărire

- **Mai mult în tabelele de stil de trasare.** Pentru fiecare culoare, un tabel poate seta acum și un tip de linie, capătul și îmbinarea liniei și un stil de umplere care tipărește umplerile pline ca linii de hașură; tabelul are propria listă de grosimi de linie și o scară a tipurilor de linie. Vedeți [Tabelele de stil de trasare](topic:plot-pdf#plot-style-tables).
- **Tipărire, și fișiere PNG și SVG.** Dialogul Trasare are {{ui:Imprimare…}}, {{ui:Descărcare PNG}} (300 dpi) și {{ui:Descărcare SVG}}. În CadCraft Studio listează imprimantele calculatorului, hârtia lor și numărul de copii. Vedeți [Tipărire](topic:plot-pdf#print) și [Fișiere imagine și SVG](topic:plot-pdf#picture-and-svg-files).

### 3D și nori de puncte

- **Solide 3D din alte programe.** Solidele, regiunile și corpurile din spațiul modelului unui desen apar pe fila 3D, doar pentru citire, iar salvarea ca DWG le scrie înapoi neschimbate. Fețele de pe suprafețe pe care CadCraft nu le desenează încă sunt listate, nu ghicite. Vedeți [Solide din alte programe](topic:3d-solids#solids-from-other-programs).
- **Înregistrarea mai multor scanări.** {{cmd:REGISTERSCANS}} (`REGSCAN`) așază scanări luate din poziții diferite într-un singur cadru, prin perechi de puncte sau coordonate țintă tastate, le rafinează cu ICP, salvează înregistrarea ca un mic fișier de proiect și scrie norul înregistrat ca un singur fișier LAS sau E57. Vedeți [Înregistrarea mai multor scanări într-una](topic:register-scans).
- **Export USD.** {{cmd:USDOUT}}, sau {{cmd:EXPORT3D}} › {{ui:USD}}, scrie solidele filei 3D ca `.usda`, `.usdc` sau `.usdz`. Vedeți [Exportul modelului 3D în USD](topic:usd).
- **Calcule pe fila 3D.** Acolo unde uneltele filei 3D cer o distanță, puteți tasta un calcul, ca la linia de comandă. Vedeți [Aritmetica într-o valoare tastată](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Realizarea de lucruri

- **Trimiteți un desen la laser.** {{cmd:LASER}}, sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Laser…}}, deschide un panou peste desen: fiecare strat taie, zgârie, gravează linii, umple forme, gravează o imagine sau nu este trimis, cu puterea, viteza și trecerile lui. Previzualizarea urmărește modificările, {{ui:Salvare cod G…}} scrie cod G GRBL în mod laser, iar în Chrome sau Edge panoul poate încadra lucrarea și o poate trimite prin USB. Setările se salvează în desen (DWG și DXF). Vedeți [Trimiterea unui desen la laser](topic:laser-cutting).
- **Simboluri de instalații pentru clădiri, în suplimentul Electric.** Prize de date, telefon și TV, întrerupătoare cu cheie și cu temporizare, un termostat, indicator de ieșire, detectoare, punct de apel și sirenă, un ventilator, boiler, aragaz, punct de încărcare a vehiculelor electrice, contor de energie și subtablou, plus simbolurile RCD și RCBO. Un circuit poate avea un RCD, tabelul tabloului are o coloană RCD, iar verificările numesc circuitele de prize fără RCD de 30 mA sau mai puțin. Este un memento de planificare, nu o verificare a normativului.
- **Un supliment P&ID.** P&ID desenează scheme de proces: simboluri cu puncte de conexiune, linii de proces și de semnal, etichete, numere de linii, liste de echipamente, de instrumente și de robinete (CSV sau un registru de lucru) și verificări. Vine odată cu CadCraft și este oprit până îl porniți din {{ui:Setări}} › {{ui:General}} › {{ui:Suplimente}}. Este un ajutor de desenare, nu o aprobare de inginerie, iar cuvintele lui sunt deocamdată doar în engleză.

### Pornirea și ecranul

- **Un prim desen ghidat.** {{cmd:TOUR}} (sau {{ui:Parcurgeți ghidul}} de pe cardul de pornire) vă ghidează prin șase pași în desenul real: o linie, un cerc, o mutare, o tăiere, o ștergere și o cotă. Pornește singur prima dată când CadCraft se deschide fără nimic în el. Vedeți [Preferați să fiți ghidat?](topic:getting-started#prefer-to-be-guided)
- **O fișă rapidă și o hartă a comenzilor.** [Fișa rapidă](topic:cheat-sheet) are cele 40 de comenzi zilnice pe o pagină, și ca PDF de tipărit, iar [harta comenzilor](topic:command-map) listează comenzile cu numele lor scurte, de la A la Z.
- **Bara de instrumente pe orice latură.** {{ui:Setări}} › {{ui:CadCraft}} › {{ui:Poziția barei de instrumente}}: sus (ca înainte), jos, stânga sau dreapta, sau tastați {{cmd:TOOLBARDOCK}}. Vedeți [Poziția barei de instrumente](topic:settings#toolbar-position).
- **Rândurile barei de instrumente.** {{ui:Setări}} › {{ui:CadCraft}} › {{ui:Rânduri de bară de instrumente}}: să se încadreze pe lățime, 2 rânduri sau 1 rând, pentru bara CadCraft și pentru stilurile Clasic și Panglică. {{key:Shift+Ctrl+F1}} trece prin ele, {{key:Ctrl+F1}} prin ce arată butoanele, iar {{cmd:TOOLBARROWS}} și {{cmd:TOOLBAR}} le setează. Indicația de pornire are un buton de închidere. Mulțumiri lui GJoe2, care a trimis asta ca cerere de integrare (pull request). Vedeți [Rândurile barei de instrumente](topic:settings#toolbar-rows).

### În CadCraft Studio

- **Istoric.** {{cmd:HISTORY}} (`HIST`), sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Istoric…}}: copiile pe care Studio le păstrează când deschideți și salvați un desen, și versiunile din cloud ale desenului, când l-ați deschis din cloud. Deschideți sau restaurați una, sau comparați două, cu ce s-a adăugat, s-a eliminat și s-a modificat arătat în culori. Vedeți [Istoric](topic:history).
- **acad.lsp și acaddoc.lsp.** Alegeți un folder de suport în {{cmd:APPLOAD}}: aceste două fișiere se încarcă la pornirea CadCraft (acaddoc.lsp din nou pentru fiecare filă nouă de desen), iar `S::STARTUP` rulează după ele. Vedeți [Încărcarea aplicațiilor](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Dialogul Trasare în fereastra lui.** Un buton din bara lui de titlu îl mută într-o fereastră pe care o puteți pune pe alt monitor. Vedeți [Mutarea unui dialog](common:arrange-panels#move-a-dialog).

### Pentru asistenți AI

- **Fișiere după nume, în dosare alese de dumneavoastră.** În CadCraft Studio un asistent poate deschide, salva și trasa fișiere după nume și poate da unei comenzi fișierul pe care îl cere (INSERT dintr-un fișier, exportul COUNT, SAVEAS, PLOT), dar doar în dosarele pe care le adăugați la {{ui:Setări}} › {{ui:CadCraft}} › {{ui:Asistenți}} › {{ui:Dosare pe care le poate folosi}}. Vedeți [Lăsați-l să folosească fișiere din dosarele alese](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Mai puține apeluri.** Un asistent poate tasta o linie de comandă întreagă dintr-o dată, poate menține o comandă deschisă între apeluri, poate număra obiectele pe tip și strat fără să le listeze și poate plasa un bloc cu valorile atributelor într-un singur pas.
- **Fără fereastră.** Linia de comandă `cadcraft` scrie trasări SVG și convertește, trasează, verifică sau descrie multe fișiere deodată. Pachetul MCP nu este publicat încă. Vedeți [Lucrul cu fișiere fără a deschide CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Modificat

- **Trackpad-ul derulează.** Mutați două degete pe trackpad și vederea 2D le urmează; ciupirea și rotița mouse-ului măresc. Vedeți [Mouse, trackpad și ecran tactil](topic:mouse-trackpad-touch).
- **Obiectele OLE sunt păstrate.** Obiectele încorporate ale unui DXF se afișează ca imagine sau ca un cadru etichetat și sunt salvate înapoi de DXF 2000. Cele ale unui DWG sunt păstrate și scrise înapoi când salvați ca DWG, dar nu se afișează încă. Înainte, se pierdeau la salvare. Vedeți [Obiecte din alte programe (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Unitățile unui desen nou** urmează unitatea pe care o marcați cu steluța în {{ui:Setări}} › {{ui:General}} › {{ui:Unități}}.

## Remediat

- Planșele care se deschideau goale sau care pierdeau o fereastră de vizualizare și arătau tot modelul în locul ei se deschid acum cu ferestrele lor reale. O planșă fără legătură cu conținutul ei este păstrată, iar raportul de deschidere o spune.
- Fișierele DXF în pagini de cod mai vechi afișau text chirilic și coreean alterat. Acum se citesc corect.
- Textul de paragraf din alte programe își pierdea formatarea la deschidere și era salvat înapoi simplu.

## În fiecare aplicație

- **Unități.** {{ui:Setări}} › {{ui:General}} › {{ui:Unități}} are câte o listă pentru lungime, arie, volum, unghi și pantă, cu dimensiunile exacte pe care le dau definițiile unităților (picioarea topografică din SUA este o unitate proprie). Dezactivați unitățile pe care nu le folosiți niciodată și ies din liste; unitatea marcată cu steluța o face pe cea nouă să pornească în ea. Un fișier păstrează întotdeauna propria unitate. În CadCraft, unitatea marcată cu steluța stabilește unitățile unui desen nou când este o unitate pe care o poate purta un desen; caseta proprie {{ui:Unități}} a CadCraft nu urmează încă comutatoarele. Odată ce un desen are unități, o lungime tastată poate purta semnul oricărei unități. Vedeți [Unități, valori tastate și listele de unități](common:unit-lists).
- **Un aspect mai dens și panouri care se ascund.** {{ui:Setări}} › {{ui:General}} › {{ui:Densitatea aspectului}} › {{ui:Compactă}} încape mai mult pe ecran (ecranele tactile și telefoanele păstrează butoanele lor mari). Fiecare panou lateral are o bară de titlu subțire: trageți-o ca să o ancorați sau să o detașați, lăsați-o pe bara altui panou ca să împărțiți un cadru în file, fixați-o ca să alunece spre margine sau ascundeți-o și aduceți-o înapoi de la margine. Vedeți [Aranjarea panourilor](common:arrange-panels#make-the-layout-denser).
- **Casetele de dialog se mută.** Trageți un dialog de bara lui de titlu ca să nu stea în calea desenului; revine unde l-ați lăsat. Faceți dublu clic pe bara de titlu ca să-l centrați din nou. Vedeți [Mutarea unui dialog](common:arrange-panels#move-a-dialog).
- **Rețete pentru asistenții AI.** Zece cereri lucrate pentru propriul asistent (ordonarea unui desen, trasarea unui set, verificarea desenelor, întrebări către un model, totalizarea unei extrageri de cantități, încercarea unei variante de piesă…), fiecare cu uneltele pe care le apelează și permisiunile de care are nevoie, și fiecare reluată de testele noastre. Aplicațiile nu conțin inteligență artificială. Vedeți [Rețete pentru asistenții AI](common:assistants-recipes).
- **Limbi.** {{ui:Setări}} › {{ui:General}} › {{ui:Limbă}} include acum **Português (Portugal)**. Împreună cu **Português (Brasil)**, **Español (México)** și **Bahasa Indonesia**, fiecare are acum cuvintele aplicațiilor, ca ciorne nerevizuite de un vorbitor nativ. Subiectele de ajutor sunt în engleză.
- **CadCraft Studio** spune de ce a eșuat verificarea unei actualizări (nu există încă un fișier pentru sistemul dumneavoastră, lipsă de rețea, semnătură greșită), în loc să afișeze doar „Gata”, și nu mai aduce înapoi un card Noutăți pe care l-ați închis până când nu există o versiune nouă.

## Nu este încă în această versiune

- **0.7 nu este semnat cu cod.** Semnarea și pachetul Microsoft Store au trecut la 0.8, pentru că validarea certificatului nu a sosit încă. Verificați SHA-256 de lângă fiecare fișier pe getcadcraft.com/download. Pe Windows, dacă SmartScreen oprește instalatorul, alegeți {{ui:Mai multe informații}}, apoi {{ui:Rulează oricum}}. Pe Mac, prima dată, faceți clic dreapta pe CadCraft Studio și alegeți {{ui:Deschidere}}. CadCraft Studio nu este încă într-un magazin de aplicații, iar nu există încă o versiune pentru iPad sau iPhone.
- Unghiul și lista pantelor din {{ui:Unități}} sunt salvate, dar nicio casetă nu le citește încă.
- Obiectele OLE ale unui DWG sunt păstrate, dar nu afișate, iar imaginile metafișier din obiectele OLE nu sunt desenate.
- Citirea tabelelor de stil de trasare (fișiere CTB) din alte programe așteaptă un fișier exemplu.
- Textul asiatic mai vechi scris ca coduri `\M+` este citit, dar nu a fost verificat încă față de un fișier dintr-un alt program.
- Underlay-urile PDF: imaginile din pagină se afișează pe ecran, dar nu se trasează; trasarea unui asistent lasă underlay-urile afară, iar felul în care alte programe citesc decupajul și scara salvate nu a fost verificat în ele.
- Istoric: CadCraft nu își trimite încă salvările în cloud, deci versiunile din cloud sunt cele salvate de pe alte dispozitive și din web. Istoricul există doar în CadCraft Studio.
- Dacă Studio păstrează folderul de suport acad.lsp după o repornire nu a fost verificat încă; dacă vă cere, alegeți din nou folderul în APPLOAD.
- Panoul Laser nu a fost încercat pe un laser real: testați fiecare setare pe o bucată de deșeu. CadCraft Studio nu are Web Serial, deci în Studio panoul salvează doar cod G.
- Înregistrarea scanărilor a fost testată pe scanări inventate, nu încă pe un set de la un scanner real.
- Panoramarea cu două degete a fost încercată cu evenimente simulate de trackpad, nu încă pe un trackpad real.
- {{cmd:PEDIT}} nu are opțiunea Edit vertex (folosiți mânerele sau Proprietăți). Decalarea, tăierea, prelungirea, racordarea, întreruperea și unirea nu acceptă încă spline-uri; înălțimea (Z) a unui spline nu se păstrează.
- Textul nou de paragraf nu poate primi încă coduri de formatare, iar trasările SVG afișează textul formatat într-o singură culoare.
- Opțiunea Întregul desen a WBLOCK scrie doar modelul, nu planșele. Stilul de cotare curent nu se salvează în fișier: un desen se deschide cu Standard curent.
- Stilurile de meniu panglică nu au încă liste de straturi, culori sau tipuri de linie: folosiți panoul {{ui:Straturi}} și {{ui:Proprietăți}}.
- Norii de puncte nu sunt încă salvați în desen sau trasați, iar fișierele E57 se deschid până la 6 milioane de puncte și 512 MB.
- DWG-urile salvate de CadCraft nu au fost verificate încă în AutoCAD însuși.

Tot restul este în [Încă nerealizat](topic:not-built-yet).
