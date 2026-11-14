---
title: Fișiere: ce se deschide, ce se salvează
summary: Formatele pe care CadCraft le deschide, le salvează și le exportă, ce se păstrează sau se convertește și unde ajung fișierele.
keywords: xclip, clip, limită xclip, legare decupată, dwg, dxf, pdf, r12, deschidere, salvare, export, import, formate, conversie, descărcare, saveas, dxfout, salvare ca, salvare dwg, format, qsave, xref, xattach, desen legat, referință externă, legare, reîncărcare, detașare
from: 6d68b34e
---

## Pe scurt

| Format | Deschidere | Salvare | Observații |
|---|---|---|---|
| DXF (text, orice versiune) | Da | Da, ca DXF R12 sau DXF 2000 | DXF binar este refuzat: salvați-l mai întâi ca DXF text. |
| DWG | Da | Da, ca DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 sau 2018) | Citit și scris de biblioteca DWG proprie CadCraft (fișiere AutoCAD R13 până la 2018). Fișierul DWG nu este modificat niciodată. Fișierele deteriorate sau versiunile pe care cititorul nu le tratează sunt refuzate, cu un mesaj. |
| PDF | Aduce o pagină: ca fundal sau ca obiecte ([Fundaluri PDF](topic:pdf-underlay)) | Da, prin trasare | PDF vectorial al unei planșe sau al modelului la o scară. |

Fiecare desen deschis (sau pornit cu {{ui:Nou}}) primește propria filă deasupra zonei de desenare; un desen nou, încă neatins, este folosit în locul adăugării unei file. Faceți clic pe o filă ca s-o comutați, pe {{ui:×}} ca s-o închideți (CadCraft întreabă mai întâi dacă există modificări nesalvate) sau așezați desenele deschise unul lângă altul: vedeți [Împărțirea ecranului](topic:split-screen).

## Deschiderea unui desen

- Apăsați {{key:Mod+O}}, faceți clic pe {{ui:Deschidere}} sau tastați `OPEN`, apoi alegeți fișierul.
- Sau trageți un fișier `.dwg` sau `.dxf` în zona de desenare.

Fișierul este citit în browserul dumneavoastră. Nu este încărcat nicăieri. Istoricul indică câte obiecte și straturi au fost aduse și cât timp a durat, iar secțiunea {{ui:Desen}} din panoul din stânga arată formatul, de exemplu „DWG 2018 (AC1032)”.

Cititorul DWG face parte din CadCraft și este descărcat odată cu primul DWG pe care îl deschideți după încărcarea paginii (câteva sute de KB), deci nu există o descărcare separată de așteptat. Citește fișierul în fundal, astfel încât pagina răspunde în continuare cât timp se deschide un DWG mare.

### Ce intră

- Linii, arce, cercuri, polilinii (cu segmente de arc), elipse, puncte, text și text pe mai multe rânduri, solide, hașuri (modelele standard desenate ca liniile lor, celelalte ca un ton plat), referințe de bloc cu atributele lor (valori pe care le puteți edita; vedeți [Atributele blocurilor](topic:attributes)), cote și planșe cu ferestrele lor de vizualizare.
- Splinele intră ca spline-uri (grad, puncte de control, noduri, greutăți, puncte de ajustare); vedeți [Spline-uri și polilinii](topic:splines).
- Multileaderele cu o linie de indicație și text intră ca multileadere CadCraft pe care le puteți edita (vedeți {{cmd:MLEADER}}). Celelalte (cu un bloc, mai multe linii de indicație sau linii curbe) sunt desenate așa cum le-a desenat celălalt program și se mișcă împreună; istoricul spune câte sunt.
- Imaginile apar ca un cadru cu numele fișierului până când dați CadCraft fișierul cu {{cmd:IMAGE}}: vedeți [Imagini într-un desen](topic:pictures#show-the-pictures-a-dwg-uses). Mascările apar ca cadrul lor, iar ce se află sub ele rămâne vizibil.
- Tabelele dintr-un DWG intră așa cum le-a desenat celălalt program.
- Fețele 3D din spațiul modelului intră pe fila {{ui:3D}}, nu ca obiecte 2D; la fel și cele din blocuri, o dată pentru fiecare referință de bloc din model. Într-un bloc și pe o planșă sunt desenate tot plat, ca contururi. Vedeți [Model în 3D](topic:3d-solids).
- Straturile își păstrează culoarea, setările activ, înghețat, blocat și trasare. DEFPOINTS nu se trasează niciodată.
- Cotele devin cote CadCraft reale, editabile, acolo unde punctele lor pot fi citite. Mai întâi sunt afișate exact cum le-a desenat celălalt program; din momentul în care modificați una, CadCraft o redesenează în stilul propriu.
- Fiecare planșă devine o filă de planșă. În celălalt program, fiecare planșă are o primă fereastră de vizualizare ascunsă, care este chiar planșa; CadCraft o lasă deoparte.

### Ce nu intră încă

Orice nu poate desena CadCraft este numărat, nu ghicit. Caseta „Despre fișier” din panoul din stânga îl listează ca „Nu se afișează încă:” urmat de fiecare tip de obiect și câte sunt. Cazurile tipice sunt tabelele dintr-un DXF, plasele și solidele 3D din blocuri. Solidele 3D, regiunile și corpurile din spațiul modelului apar pe fila 3D (vedeți [Model în 3D](topic:3d-solids#solids-from-other-programs)). Ferestrele de vizualizare răsucite în fișier apar răsucite, așa cum sunt acolo, și își păstrează răsucirea la salvare; la fel și SCU-ul curent, SCU-urile denumite și o vedere rotită.

Textul este desenat cu un singur font în stil Helvetica. O etichetă care încape pe un rând în fontul mai îngust al programului original poate trece pe două rânduri în CadCraft.

## Salvarea

Există trei moduri de a salva. Fiecare descarcă o copie.

- **Salvare**: apăsați {{key:Mod+S}}, faceți clic pe {{ui:Salvare}} sau tastați `SAVE` (și `QSAVE`). Salvează în formatul desenului: DWG dacă ați deschis un DWG, DXF dacă ați deschis un DXF. Un DWG păstrează versiunea cu care a venit (un fișier 2018 se salvează ca 2018). Un desen nou folosește formatul și versiunea DWG alese ultima dată la {{ui:Salvare ca}} în acest browser; dacă nu ați ales niciodată, DWG în formatul AutoCAD 2000.
- **Salvare ca**: apăsați {{key:Mod+Shift+S}}, faceți clic pe {{ui:Salvare ca}} sau tastați `SAVEAS`. Caseta de dialog {{ui:Salvare copie ca}} oferă {{ui:DWG}}, cu lista {{ui:Versiune}} (AutoCAD 2018, 2013, 2010, 2007, 2004 sau 2000), {{ui:DXF R12}} și {{ui:DXF 2000}}, fiecare cu numele de fișier pe care îl va primi, iar formatul și versiunea actuale ale desenului sunt deja alese. Faceți clic pe {{ui:Salvare}} ca să descărcați sau pe {{ui:Anulare}} (sau {{key:Esc}}) ca să nu salvați nimic; istoricul spune atunci „Nesalvat.” Alegerea pe care o faceți rămâne: {{key:Mod+S}} o folosește de acum pentru acest desen, iar desenele noi din acest browser pornesc cu ea.
- **DXFOUT**: tastați `DXFOUT`. Descarcă întotdeauna o copie DXF R12, iar următoarea {{key:Mod+S}} salvează tot în formatul propriu al desenului.

Fiecare salvare este o **descărcare nouă**. Browserul descarcă `<numele desenului>.dwg` sau `<numele desenului>.dxf`. Fișierul pe care l-ați deschis nu este suprascris și nu este modificat niciodată. Istoricul confirmă, de exemplu: „Copie salvată ca Plan.dwg (DWG (AutoCAD 2018)). Originalul Plan.dxf nu s-a modificat.” Pentru un DXF scrie „(DXF R12, se deschide în orice program CAD)”. Liniile de sub el listează tot ce s-a schimbat pe drum.

Când CadCraft rulează în aplicația desktop, salvarea funcționează ca în celelalte programe desktop: {{key:Mod+S}} scrie desenul înapoi în fișierul deschis, în formatul și versiunea lui, iar istoricul spune unde a fost salvat. {{ui:Salvare ca}} și exporturile arată caseta de salvare a sistemului, iar un fișier `.dwg`, `.dxf` sau `.ccsheets` pe care îl deschideți cu dublu clic se deschide în CadCraft.

Pentru un PDF, trasați în schimb (vedeți mai jos).

## Ce păstrează și ce modifică un DWG

CadCraft scrie DWG-ul singur, în browserul dumneavoastră, cu aceeași bibliotecă DWG cu care îl citește. Alegeți versiunea în {{ui:Salvare ca}}: formatul AutoCAD 2000 (versiunea fișierului AC1015) se deschide în cele mai multe programe, inclusiv cele vechi; formatele mai noi (2004, AC1018, până la 2018, AC1032) păstrează și culori adevărate. Nimic nu este încărcat, iar salvarea unui DWG funcționează offline.

Fiecare versiune este verificată prin recitirea fișierelor salvate cu cititoarele DWG ale altor trei programe și cu CadCraft însuși. Un DWG salvat de CadCraft nu a fost deschis încă în AutoCAD propriu-zis.

### Ce păstrează un DWG

- Linii, arce, cercuri, elipse, puncte și polilinii cu segmentele lor de arc.
- Text pe un singur rând cu alinierea și factorul de lățime.
- Text pe mai multe rânduri și încadrat, ca text pe mai multe rânduri. Celălalt program îl încadrează din nou la aceeași lățime.
- Culorile obiectelor: după strat, după bloc, cele 255 de culori standard și culori adevărate în formatul 2004 și ulterior.
- Straturi cu culoarea, tipul de linie, grosimea de linie și setările activ, înghețat, blocat și trasare; tipurile de linie, grosimile și scările tipurilor de linie proprii obiectelor, modelele tipurilor de linie și scara tipurilor de linie a desenului.
- Unitățile desenului și formatul lungimilor (zecimal, picioare și inci, fracții…).
- Blocuri cu punctul lor de bază și definițiile atributelor, inclusiv cele invizibile, constante și presetate.
- Referințe de bloc cu scara, rotația și valorile atributelor.
- Umpleri pline și hașuri cu model, cu modelul, scara și unghiul lor (liniile modelului însuși, astfel încât celelalte programe desenează aceleași linii pe care le desenează CadCraft).
- Cote, ca cote reale: celelalte programe le măsoară din nou când sunt întinse. Fiecare își păstrează propriile setări (înălțimea textului, dimensiunea săgeții, zecimalele, formatul lungimii) și textul, și poartă copia desenată pe care o are fiecare cotă DWG.
- Planșe: fiecare planșă cu dimensiunea hârtiei și unitățile ei, ce este desenat pe ea și ferestrele de vizualizare cu vederea și scara lor.
- Vederi denumite.
- Multileadere, ca multileadere.
- Numele straturilor și blocurilor așa cum le-ați scris, cu majuscule și minuscule. (DXF R12 le scrie cu majuscule.)

### Ce modifică un DWG

Fiecare dintre acestea este listată în istoric după salvare, când se aplică desenului dumneavoastră.

| În CadCraft | În DWG salvat |
|---|---|
| Culori adevărate (alese cu selectorul de culoare), în formatul 2000 | Cea mai apropiată culoare standard: formatul 2000 are doar cele 255. Salvați ca 2004 sau ulterior pentru a le păstra |
| Vederi denumite ale unei planșe | Vederi din spațiul hârtiei: un DWG nu spune pe ce planșă sunt, așa că la redeschiderea fișierului în CadCraft aparțin primei planșe |
| Text pe mai multe rânduri cu factor de lățime | Lățime normală a literelor: într-un DWG factorul de lățime se aplică doar textului pe un singur rând |
| Nume de straturi sau blocuri cu caractere pe care DWG nu le admite | Schimbat: un nume dintr-un desen legat, precum `Base\|Walls`, devine `Base$0$Walls` (cum îl denumește legarea unui desen legat), iar celelalte caractere devin `_` |

### De ce R12 și ce se convertește

Când salvați ca DXF, CadCraft scrie DXF R12, versiunea pe care o poate deschide orice program CAD. Este mai veche decât unele funcții, așa că unele lucruri sunt scrise într-o formă mai simplă:

| În CadCraft | În fișierul R12 salvat |
|---|---|
| Text pe mai multe rânduri | Un obiect text pentru fiecare rând |
| Elipse | Polilinii care urmează elipsa |
| Hașuri (din fișiere deschise) | Doar conturul lor |
| Culori adevărate (alese cu selectorul de culoare) | Cea mai apropiată culoare standard |
| Grosimi de linie și scările tipurilor de linie proprii obiectelor | Lăsate deoparte: R12 nu are niciuna (tipurile de linie se păstrează) |
| Nume de straturi și blocuri | Scrise cu majuscule; spațiile și celelalte caractere devin `_`, iar numele sunt tăiate la 31 de caractere („Title block” devine `TITLE_BLOCK`) |
| Straturi setate să nu se traseze | Celelalte programe le vor trasa (CadCraft ține minte setarea când desenul are o planșă) |
| Cote | Cote reale cu propriul bloc desenat, astfel încât celelalte programe le arată cum le vedeți |
| Multileadere | Liniile, săgeata și textul pe care le desenează |
| Vederi denumite | Păstrate, cu nume scrise cu majuscule; vederile unei planșe revin pe prima planșă |
| Mai multe planșe | Prima planșă este spațiul hârtiei pe care îl arată fiecare program; celelalte sunt păstrate ca blocuri numite `CCLAYOUT_1`, `CCLAYOUT_2` … pe care CadCraft le transformă înapoi în planșe când deschide fișierul |

Istoricul listează fiecare dintre acestea care s-a aplicat desenului dumneavoastră.

:::tip
Pentru a lucra la un desen de-a lungul mai multor zile, salvați ca DXF și deschideți acel DXF data viitoare. Tot ce poate desena CadCraft supraviețuiește acestui ciclu dus-întors, inclusiv cotele, blocurile și toate planșele.
:::

## Referințe externe (desene legate)

{{cmd:XATTACH}} (`XA`, sau {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Referință externă (Xref)}}) leagă un alt DWG sau DXF: alegeți fișierul, apoi faceți clic unde trebuie să ajungă ({{key:Enter}} îl pune la 0,0). Intră ca un singur bloc, numit după fișier, la scara corectă când cele două desene au unități diferite. Straturile și blocurile lui își păstrează numele, cu numele legăturii în față: `Plan|Walls`, `Plan|Door`, astfel încât nu se amestecă niciodată cu ale dumneavoastră. Aprindeți și stingeți straturile legate, înghețați-le sau blocați-le ca pe ale dumneavoastră. O legătură este doar pentru citire: modificați celălalt desen și reîncărcați-l. Ce setați pe straturile unei legături (culoare, tip de linie, grosime, activ/inactiv, înghețare, blocare, trasare) se păstrează la reîncărcare, la salvarea desenului ca DWG cât timp legătura rămâne legătură și când alt desen leagă acesta.

{{cmd:XREF}} (`XR`): `?` listează legăturile (încărcate sau nu, ce fișier, câte referințe); `A` atașează; `R` reîncarcă una din fișierul ei (alegeți din nou fișierul: browserul nu poate ajunge singur la dosarele dumneavoastră); `B` leagă una (devine blocuri și straturi obișnuite numite `Plan$0$Walls`); `D` detașează una (referințele și straturile ei dispar). Fiecare este un pas de anulare.

{{cmd:XCLIP}} (`XC`) decupează referințele de bloc și legăturile: selectați-le, `N` pentru un contur nou, apoi `R` și două colțuri sau `P` și punctele unui poligon ({{key:Enter}} îl închide); `D` elimină decupajul. Se afișează și se trasează doar ce se află în interiorul conturului, iar decupajul se mută împreună cu referința. DWG și DXF 2000 păstrează decupajele; DXF R12 salvează referința întreagă și o spune. Când legați o legătură care are referințe decupate, {{cmd:XREF}} `B` întreabă: `A` leagă totul, `C` păstrează doar partea decupată a fiecărei referințe (liniile și arcele sunt tăiate la contur; textele și blocurile imbricate rămân dacă punctul lor de inserare este în interior).

Un desen deschis poate lega fișiere pe care CadCraft nu le poate vedea: spune câte nu sunt încărcate. Folosiți {{cmd:XREF}}, `R` și alegeți fiecare fișier ca să le vedeți.

La salvare, o legătură încărcată este **legată** în fișier (alte programe văd blocuri și straturi obișnuite numite `Plan$0$…`), iar istoricul o spune. O legătură care nu este încărcată rămâne legătură către fișierul ei, în DWG și în DXF.

## Deschidere în 3D

{{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Deschidere în ModelCraft}} ({{cmd:OPENIN3D}}) deschide desenul în aplicația de modelare 3D, într-o filă nouă, ca DWG, fără să-l încarce. Modificările făcute acolo rămân acolo; salvați-le acolo. Elementul de meniu apare doar acolo unde aplicația respectivă poate prelua un desen transmis.

## Trasarea unui PDF

Apăsați {{key:Mod+P}}, faceți clic pe {{ui:Trasare}} sau tastați `PLOT`. PDF-ul este creat în browser și descărcat, sau deschis într-o filă nouă pentru imprimare. Vedeți [Trasare în PDF](topic:plot-pdf).

## Unde ajung fișierele

Fiecare salvare și fiecare trasare este o descărcare, deci fișierele ajung unde pune browserul descărcările: de obicei în dosarul Descărcări. Ca să alegeți un dosar de fiecare dată, schimbați setarea de descărcare din browser; [Browsere și calculatoare](common:browsers) arată unde.

Nimic din ce deschideți sau salvați nu ajunge la noi. Vedeți [Unde ajung fișierele dumneavoastră](common:your-files).

## Fișiere de proiect PLN și PLA

CadCraft deschide desene DWG și DXF, nu fișierele proprii Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Deschiderea unuia vă spune ce este. În Archicad, salvați vederile sau planșele de care aveți nevoie ca DWG și deschideți-le aici, sau exportați modelul ca IFC și deschideți-l în BimCraft. Acolo unde BimCraft poate prelua fișierul, CadCraft oferă {{ui:Deschidere în BimCraft}}.

## Dacă pagina se închide înainte de salvare

CadCraft păstrează o copie a fiecărui desen pe care îl modificați, doar în acest browser, la scurt timp după ce încetați să editați. Dacă fila se închide, browserul se oprește sau calculatorul repornește înainte să salvați, CadCraft întreabă **Recuperarea lucrării?** la următoarea pornire: {{ui:Recuperare}} redeschide desenul, nesalvat, într-o filă proprie. Salvarea desenului îi șterge copia. Vedeți [Recuperarea lucrării](common:recover).

## Online și offline

Deschiderea, desenarea, salvarea (DWG și DXF) și trasarea se întâmplă toate pe calculatorul dumneavoastră, deci funcționează fără conexiune odată ce CadCraft s-a încărcat.

Ca să folosiți CadCraft fără nicio conexiune, faceți clic pe {{ui:Salvare pentru offline}} din bara de sus cât timp sunteți online. Eticheta numără („Salvare 40 din 212”) și se termină cu „Gata pentru offline”. Copia salvată include cititorul DWG, în total aproximativ 5 MB, astfel încât **fișierele DWG se deschid și offline** după ce este salvată. Apăsați din nou butonul pentru {{ui:Salvare din nou (obținere a celei mai noi versiuni)}} sau {{ui:Eliminare a copiei offline}}. „Nu s-a putut salva” înseamnă că unele fișiere nu s-au descărcat: verificați conexiunea și apăsați ca să încercați din nou. „Offline indisponibil” înseamnă că această fereastră de browser nu poate păstra o copie (ferestrele private și unele calculatoare administrate).

Fără o copie salvată, cititorul DWG este descărcat prima dată când deschideți un DWG după încărcarea paginii, deci deschiderea unui DWG offline poate eșua; fișierele DXF nu au nevoie niciodată de el. Nu reîncărcați pagina offline dacă CadCraft nu este salvat.

Vedeți [Lucrul offline](common:offline) pentru detalii.

:::offline
Sunteți offline acum. Desenele se salvează ca DWG sau DXF și se trasează normal, iar fișierele DXF se deschid. Fișierele DWG se deschid dacă CadCraft afișează „Gata pentru offline”, sau dacă cititorul DWG s-a încărcat deja în această filă.
:::

## Constrângeri în fișiere

Constrângerile și parametrii (vedeți [Constrângerea unui desen](topic:constraints)) sunt salvați atât în DWG, cât și în DXF. Fiecare obiect constrâns poartă o mică notă CadCraft (date extinse), iar un bloc nefolosit numit `CADCRAFT_PARAMETRIC` ține constrângerile și tabelul de parametri. Celelalte programe deschid desenul normal și ignoră ambele; ele pot șterge blocul nefolosit când fac curățarea (purge). Notele se referă la obiecte prin cheia lor proprie, nu prin identificatorii (handle) fișierului, astfel încât un program care renumerotează identificatorii nu le strică. Când alt program a șters sau a modificat un obiect constrâns, CadCraft elimină constrângerile de pe el la deschiderea fișierului și spune câte. Un fișier fără ele se deschide fără constrângeri.

O schiță exportată dintr-un modelator de piese (`.json`) se deschide și ea: vedeți [Mutarea schițelor către și de la alte modelatoare de piese](topic:solidworks-sketches).

## Nedisponibile încă

- Multileadere ca obiecte multileader într-un DXF salvat (R12 nu are așa ceva: sunt salvate ca ceea ce desenează).
- Imagini într-un DXF salvat (se salvează ca cadrele lor; DWG le păstrează ca imagini) și mascări care ascund ce se află sub ele.
- Salvarea unei versiuni DXF mai noi decât 2000.
- Salvarea în cloud și sincronizarea între calculatoare.

Vedeți lista completă de [funcții încă nerealizate](topic:not-built-yet).
