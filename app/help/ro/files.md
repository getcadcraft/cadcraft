---
title: Fișiere: ce se deschide, ce se salvează
summary: Formatele pe care CadCraft le deschide, le salvează și le exportă, ce se păstrează sau se convertește și unde ajung fișierele.
keywords: xclip, clip, limită de decupare xclip, legare decupată, dwg, dxf, pdf, r12, deschidere, salvare, export, import, formate, conversie, descărcare, saveas, dxfout, salvare ca, salvare dwg, format, qsave, xref, xattach, desen legat, referință externă, legare, reîncărcare, detașare
from: b8c5778d
---

## Pe scurt

| Format | Deschidere | Salvare | Note |
|---|---|---|---|
| DXF (text sau binar, orice versiune) | Da | Da, ca DXF R12, DXF 2000 sau DXF 2000 (binar) | Un DXF binar se deschide ca unul text și se salvează înapoi ca binar. |
| DWG | Da | Da, ca DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 sau 2018) | Citit și scris de biblioteca DWG proprie a CadCraft (fișiere AutoCAD R13 până la 2018). Fișierul DWG nu se modifică niciodată. Fișierele deteriorate sau versiunile pe care cititorul nu le tratează sunt refuzate, cu un mesaj. |
| PDF | Aduce o pagină: ca substrat sau ca obiecte ([substraturi PDF](topic:pdf-underlay)) | Da, prin trasare | PDF vectorial al unei foi sau al modelului la o scară. |

Fiecare desen pe care îl deschideți (sau îl începeți cu {{ui:Nou}}) primește propriul tab deasupra zonei de desen; un desen nou, încă neatins, este folosit în locul adăugării unui tab. Faceți clic pe un tab ca să comutați, pe {{ui:×}} al acestuia ca să-l închideți (CadCraft întreabă întâi dacă există modificări nesalvate) sau aranjați desenele deschise alăturat: vezi [Împărțirea ecranului](topic:split-screen).

## Deschiderea unui desen

- Apăsați {{key:Mod+O}}, faceți clic pe {{ui:Deschidere}} sau tastați `OPEN`, apoi alegeți fișierul.
- Sau trageți un fișier `.dwg` sau `.dxf` pe zona de desen.

Fișierul este citit în browser. Nu este trimis nicăieri. Istoricul raportează câte obiecte și câte straturi au intrat și cât a durat, iar secțiunea {{ui:Desen}} din panoul din stânga arată formatul, de exemplu „DWG 2018 (AC1032)”.

Cititorul DWG face parte din CadCraft și este descărcat odată cu primul DWG deschis după încărcarea paginii (câteva sute de KB), deci nu există o descărcare separată de așteptat. Citește fișierul în fundal, astfel că pagina continuă să răspundă cât timp se deschide un DWG mare.

Un DXF este citit în bucăți de aproximativ 4 MB, niciodată ca un singur bloc de text, așa că un DXF de peste 512 MB se deschide și el. Ce limitează este memoria computerului: în timp ce se deschide un DXF, de așteptat este să folosească aproximativ de 16 până la 20 de ori dimensiunea fișierului (un DXF de 100 MB cu aproximativ 690,000 de obiecte a folosit circa 1.5 GB în testul nostru).

### Ce intră

- Linii, arce, cercuri, polilinii (cu segmente de arc), elipse, puncte, text și text pe mai multe rânduri, solide, hașuri (modelele standard desenate ca liniile lor, celelalte ca un ton plat), referințe la blocuri cu atributele lor (valori pe care le puteți edita; vezi [Atributele blocurilor](topic:attributes)), cote și foi (layouts) cu ferestrele lor de vizualizare.
- Splinele intră ca spline-uri (grad, puncte de control, noduri, greutăți, puncte de ajustare); vezi [Spline-uri și polilinii](topic:splines).
- Liniile de indicație multiple cu o linie de indicație și text intră ca linii de indicație multiple din CadCraft, pe care le puteți edita (vezi {{cmd:MLEADER}}). Celelalte (cu un bloc, mai multe linii de indicație sau linii curbe) sunt desenate așa cum le-a desenat celălalt program și se mișcă ca un tot; istoricul spune câte sunt.
- Imaginile (images) apar ca un cadru cu numele fișierului imaginii, până când dați CadCraft fișierul cu {{cmd:IMAGE}}: vezi [Imagini într-un desen](topic:pictures#show-the-pictures-a-dwg-uses). Mascările apar ca cadrul lor, iar ce se află sub ele rămâne vizibil.
- Tabelele dintr-un DWG intră așa cum le-a desenat celălalt program.
- Fețele 3D din spațiul modelului intră în fila {{ui:3D}}, nu ca obiecte 2D; la fel și cele din blocuri, o dată pentru fiecare referință la bloc din model. Într-un bloc și pe o foaie sunt desenate și plat, ca contururi. Vezi [Modelul în 3D](topic:3d-solids).
- Straturile își păstrează culoarea și setările activ, înghețat, blocat și de trasare. DEFPOINTS nu se trasează niciodată.
- Cotele devin cote reale, editabile în CadCraft, acolo unde le pot fi citite punctele. Mai întâi sunt afișate exact așa cum le-a desenat celălalt program; din momentul în care modificați una, CadCraft o redesenează în stilul propriu.
- Fiecare foaie (layout) devine o filă de foaie. În celălalt program, fiecare layout are o fereastră de vizualizare ascunsă, care este chiar foaia; CadCraft o lasă deoparte.

### Ce nu intră încă

Orice nu poate desena CadCraft este numărat, nu ghicit. Caseta „Despre acest fișier” din panoul din stânga o listează ca „Nu se afișează încă:”, urmat de fiecare tip de obiect și câte sunt. Cazurile tipice sunt tabelele dintr-un DXF, plasele și solidele 3D din blocuri. Solidele 3D, regiunile și corpurile din spațiul modelului apar în fila 3D (vezi [Modelul în 3D](topic:3d-solids#solids-from-other-programs)). Ferestrele de vizualizare răsucite în fișier apar răsucite, ca acolo, și își păstrează răsucirea la salvare; la fel și UCS-ul curent, UCS-urile denumite și o vedere rotită.

Textul este desenat cu un singur font în stil Helvetica. O etichetă care încape pe un rând în fontul mai îngust al programului original poate trece pe două rânduri în CadCraft.

## Salvarea

Există trei moduri de a salva. Fiecare descarcă o copie.

- **Salvare**: apăsați {{key:Mod+S}}, faceți clic pe {{ui:Salvare}} sau tastați `SAVE` (și `QSAVE`). Salvează în formatul desenului: DWG dacă ați deschis un DWG, DXF dacă ați deschis un DXF. Un DWG își păstrează versiunea cu care a venit (un fișier 2018 se salvează ca 2018). Un desen nou folosește formatul și versiunea DWG alese ultima dată în {{ui:Salvare ca}} în acest browser; dacă nu ați ales niciodată, DWG în formatul AutoCAD 2000.
- **Salvare ca**: apăsați {{key:Mod+Shift+S}}, faceți clic pe {{ui:Salvare ca}} sau tastați `SAVEAS`. Caseta {{ui:Salvare copie ca}} oferă {{ui:DWG}}, cu o listă {{ui:Versiune}} (AutoCAD 2018, 2013, 2010, 2007, 2004 sau 2000), {{ui:DXF R12}} și {{ui:DXF 2000}}, fiecare cu numele de fișier pe care îl va primi, iar formatul și versiunea curente ale desenului sunt deja alese. Faceți clic pe {{ui:Salvare}} ca să descărcați sau pe {{ui:Anulare}} (ori {{key:Esc}}) ca să nu salvați nimic; istoricul spune atunci „Nesalvat.” Ce alegeți rămâne: {{key:Mod+S}} îl folosește pentru acest desen de acum înainte, iar desenele noi din acest browser pornesc cu el.
- **DXFOUT**: tastați `DXFOUT`. Descarcă întotdeauna o copie DXF R12, iar următorul {{key:Mod+S}} salvează în continuare în formatul propriu al desenului.

Browserul descarcă `<drawing name>.dwg` sau `<drawing name>.dxf`. Fiecare salvare este o **descărcare nouă**; fișierul deschis nu este niciodată suprascris sau modificat. Istoricul confirmă, de exemplu: „Copie salvată ca Plan.dwg (DWG (AutoCAD 2018)). Originalul Plan.dxf nu este modificat.” Pentru un DXF scrie „(DXF R12, se deschide în orice program CAD)”. Liniile de sub ea listează tot ce s-a schimbat pe parcurs.

Când CadCraft rulează în aplicația desktop, salvarea funcționează ca în celelalte programe desktop: {{key:Mod+S}} scrie desenul înapoi în fișierul deschis, în formatul și versiunea proprii, iar istoricul arată unde a fost salvat. {{ui:Salvare ca}} și exporturile afișează fereastra de salvare a sistemului, iar un fișier `.dwg`, `.dxf` sau `.ccsheets` pe care îl faceți dublu clic se deschide în CadCraft.

Pentru un PDF, trasați desenul (vezi mai jos).

## Ce păstrează și ce schimbă un DWG

CadCraft scrie singur fișierul DWG, în browser, cu aceeași bibliotecă DWG cu care îl citește. Alegeți versiunea în {{ui:Salvare ca}}: formatul AutoCAD 2000 (versiunea fișierului AC1015) se deschide în cele mai multe programe, inclusiv cele vechi; formatele mai noi (2004, AC1018, până la 2018, AC1032) păstrează și culorile reale. Nimic nu este încărcat, iar salvarea unui DWG funcționează offline.

Fiecare versiune este verificată prin recitirea fișierelor salvate cu trei cititoare DWG ale altor programe și cu CadCraft însuși. Un DWG creat de CadCraft nu a fost încă deschis în AutoCAD însuși.

### Ce păstrează un DWG

- Linii, arce, cercuri, elipse, puncte și polilinii cu segmentele lor de arc.
- Text pe un singur rând, cu alinierea și factorul de lățime.
- Text pe mai multe rânduri și text încadrat, ca text pe mai multe rânduri. Celălalt program îl încadrează din nou după aceeași lățime.
- Culorile obiectelor: după strat, după bloc, cele 255 de culori standard și culorile reale din formatul 2004 și ulterioare.
- Straturi, cu culoarea, tipul de linie, grosimea de linie și setările activ, înghețat, blocat și de trasare; tipurile de linie, grosimile și scările proprii obiectelor, modelele tipurilor de linie și scara tipului de linie a desenului.
- Unitățile desenului și formatul de lungime (zecimal, picioare și inci, fracții…).
- Blocuri cu punctul lor de bază și definițiile atributelor, inclusiv cele invizibile, constante și presetate.
- Referințe la blocuri cu scara, rotirea și valorile atributelor.
- Umpleri pline și hașuri cu model, cu scară și unghi (liniile modelului însuși, deci celelalte programe desenează aceleași linii ca CadCraft).
- Cote, ca cote reale: celelalte programe le remăsoară când sunt întinse. Fiecare își păstrează propriile setări (înălțimea textului, mărimea săgeții, zecimale, formatul lungimii) și textul său și are copia desenată pe care o are fiecare cotă DWG.
- Foi (layouts): fiecare foaie cu mărimea hârtiei și unitățile sale, ce este desenat pe ea și ferestrele ei de vizualizare, cu vederea și scara lor.
- Vederi numite.
- Linii de indicație multiple, ca linii de indicație multiple.
- Numele straturilor și blocurilor așa cum le-ați tastat, cu litere mari și mici. (DXF R12 le scrie cu litere mari.)

### Ce schimbă un DWG

Fiecare dintre acestea este listată în istoric după ce salvați, atunci când se aplică desenului.

| În CadCraft | În DWG-ul salvat |
|---|---|
| Culori reale (alese cu pipeta de culoare), în formatul 2000 | Cea mai apropiată culoare standard: formatul 2000 are doar cele 255. Salvați ca 2004 sau mai nou ca să le păstrați |
| Vederi numite ale unei foi | Vederi în spațiul hârtiei: un DWG nu spune ce foaie este, deci, la redeschiderea fișierului în CadCraft, aparțin primei foi |
| Text pe mai multe rânduri cu factor de lățime | Lățime normală a literelor: într-un DWG factorul de lățime se aplică doar textului pe un singur rând |
| Numele straturilor sau blocurilor cu caractere pe care DWG nu le admite | Schimbat: un nume dintr-un desen legat, precum `Base\|Walls`, devine `Base$0$Walls` (așa cum îl numește legarea unui desen legat), iar celelalte caractere devin `_` |

### De ce R12 și ce se convertește

Când salvați ca DXF, CadCraft scrie DXF R12, versiunea pe care o poate deschide orice program CAD. Este mai veche decât unele funcții, așa că unele lucruri sunt scrise într-o formă mai simplă:

| În CadCraft | În fișierul R12 salvat |
|---|---|
| Text pe mai multe rânduri | Un obiect de text pentru fiecare rând |
| Elipse | Polilinii care urmează elipsa |
| Hașuri (din fișiere deschise) | Doar conturul lor |
| Culori reale (alese cu pipeta de culoare) | Cea mai apropiată culoare standard |
| Grosimi de linie și scările tipurilor de linie proprii obiectelor | Eliminate: R12 nu are niciuna (tipurile de linie se păstrează) |
| Nume de straturi și blocuri | Scrise cu litere mari; spațiile și celelalte caractere devin `_`, iar numele sunt tăiate la 31 de caractere („Title block” devine `TITLE_BLOCK`) |
| Straturi setate să nu se traseze | Celelalte programe le vor trasa (CadCraft reține setarea când desenul are o foaie) |
| Cote | Cote reale, cu propriul bloc desenat, ca celelalte programe să le afișeze așa cum le vedeți |
| Linii de indicație multiple | Liniile, săgeata și textul pe care le desenează |
| Vederi numite | Păstrate, cu nume scrise cu litere mari; vederile unei foi revin pe prima foaie |
| Mai multe foi | Prima foaie este spațiul hârtiei pe care îl arată orice program; celelalte sunt păstrate ca blocuri numite `CCLAYOUT_1`, `CCLAYOUT_2` … pe care CadCraft le transformă înapoi în foi când deschide fișierul |

Istoricul listează fiecare dintre acestea care s-a aplicat desenului.

:::tip
Ca să lucrați la un desen pe parcursul mai multor zile, salvați ca DXF și deschideți acel DXF data viitoare. Tot ce poate desena CadCraft supraviețuiește acestui ciclu, inclusiv cotele, blocurile și toate foile.
:::

## Legături la desene (referințe externe)

{{cmd:XATTACH}} (`XA`, sau {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Referință externă (Xref)}}) leagă un alt fișier DWG sau DXF: alegeți fișierul, apoi faceți clic unde trebuie să fie ({{key:Enter}} îl pune la 0,0). Intră ca un singur bloc, numit după fișier, la scara potrivită când cele două desene au unități diferite. Straturile și blocurile sale își păstrează numele, cu numele legăturii în față — `Plan|Walls`, `Plan|Door` — așa că nu se amestecă niciodată cu ale desenului: activați sau dezactivați, înghețați ori blocați straturile legate, la fel ca pe cele proprii. O legătură este doar pentru citire: modificați celălalt desen și reîncărcați-l. Ce setați pe straturile unei legături (culoare, tip de linie, grosime de linie, activ sau inactiv, înghețat, blocat, trasare) se păstrează la reîncărcare, la salvarea desenului ca DWG cât timp legătura este încă legătură și când alt desen leagă acesta.

{{cmd:XREF}} (`XR`): `?` listează legăturile (încărcate sau nu, ce fișier, câte referințe); `A` atașează; `R` reîncarcă una din fișierul ei (alegeți din nou fișierul: browserul nu poate accesa singur dosarele); `B` leagă una (devine blocuri și straturi obișnuite, numite `Plan$0$Walls`); `D` detașează una (referințele și straturile ei dispar). Fiecare este un pas de anulare.

{{cmd:XCLIP}} (`XC`) decupează referințele la blocuri și legăturile: selectați-le, `N` pentru o limită nouă, apoi `R` și două colțuri sau `P` și punctele unui poligon ({{key:Enter}} îl închide); `D` elimină decuparea. Se vede și se trasează doar ce se află în interior, iar decuparea se mută odată cu referința. DWG și DXF 2000 păstrează decupările; DXF R12 salvează referința întreagă și spune asta. Când legați o legătură care are referințe decupate, {{cmd:XREF}} `B` întreabă: `A` leagă totul, `C` păstrează doar partea decupată a fiecărei referințe (liniile și arcele sunt tăiate la limită; textele și blocurile imbricate rămân dacă punctul lor de inserare este în interior).

Un desen deschis poate avea legături către fișiere pe care CadCraft nu le vede: arată câte nu sunt încărcate. Folosiți {{cmd:XREF}}, `R` și alegeți fiecare fișier ca să le vedeți.

La salvare, o legătură încărcată este **legată** în fișier (celelalte programe văd blocuri și straturi obișnuite, numite `Plan$0$…`), iar istoricul o spune. O legătură care nu este încărcată rămâne legătură către fișierul ei, în DWG și DXF.

## Deschidere în 3D

{{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Deschidere în ModelCraft}} ({{cmd:OPENIN3D}}) deschide desenul în aplicația de modelare 3D, într-un tab nou, ca DWG, fără să-l încarce. Modificările făcute acolo rămân acolo; salvați-le acolo. Elementul de meniu apare doar acolo unde acea aplicație poate prelua un desen predat.

## Trasarea unui PDF

Apăsați {{key:Mod+P}}, faceți clic pe {{ui:Trasare}} sau tastați `PLOT`. PDF-ul este creat în browser și descărcat sau deschis într-un tab nou, pentru imprimare. Vezi [Trasare în PDF](topic:plot-pdf).

## Unde ajung fișierele

Fiecare salvare și fiecare trasare este o descărcare, deci fișierele ajung oriunde pune browserul descărcările: de obicei în dosarul Descărcări. Pentru a alege un dosar de fiecare dată, schimbați setarea de descărcare din browser; [Browsere și calculatoare](common:browsers) arată unde.

Nimic din ce deschideți sau salvați nu se trimite către noi. Vezi [Unde ajung fișierele](common:your-files).

## Fișierele de proiect PLN și PLA

CadCraft deschide desene DWG și DXF, nu fișierele proprii ale Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). La deschiderea unuia, CadCraft spune ce este. În Archicad, salvați ca DWG vederile sau foile de care aveți nevoie și deschideți-le aici, sau exportați modelul ca IFC și deschideți-l în BimCraft. Acolo unde BimCraft poate prelua fișierul, CadCraft oferă {{ui:Deschidere în BimCraft}}.

## Dacă pagina se închide înainte să salvați

CadCraft păstrează o copie a fiecărui desen pe care îl modificați, doar în acest browser, puțin după ce încetați să editați. Dacă tab-ul se închide, browserul se oprește sau calculatorul repornește înainte să salvați, CadCraft întreabă **Recuperați lucrarea?** la următoarea pornire: {{ui:Recuperare}} deschide din nou desenul, nesalvat, într-un tab propriu. Salvarea desenului elimină copia lui. Vezi [Recuperarea lucrării](common:recover).

## Online și offline

Deschiderea, desenarea, salvarea (DWG și DXF) și trasarea se fac toate pe calculator, deci funcționează fără conexiune odată ce CadCraft s-a încărcat.

Pentru a folosi CadCraft fără nicio conexiune, faceți clic pe {{ui:Salvare pentru offline}} din bara de sus, cât timp sunteți online. Eticheta numără în sus („Se salvează 40 din 212”) și se termină cu „Gata pentru offline”. Copia salvată include cititorul DWG, în total circa 5 MB, așa că **fișierele DWG se deschid și offline** odată ce este salvată. Faceți din nou clic pe buton pentru {{ui:Salvare din nou (obținere a celei mai noi versiuni)}} sau {{ui:Eliminare a copiei offline}}. „Nu s-a putut salva” înseamnă că unele fișiere nu s-au descărcat: verificați conexiunea și faceți clic din nou ca să încercați. „Offline nu este disponibil” înseamnă că această fereastră de browser nu poate păstra o copie (ferestrele private și unele calculatoare administrate).

Fără o copie salvată, cititorul DWG este descărcat la prima deschidere a unui DWG după încărcarea paginii, deci deschiderea unui DWG offline poate eșua; fișierele DXF nu au nevoie niciodată de el. Nu reîncărcați pagina offline dacă CadCraft nu este salvat.

Vezi [Lucrul offline](common:offline) pentru detalii.

:::offline
Sunteți offline acum. Desenele se salvează ca DWG sau DXF și se trasează normal, iar fișierele DXF se deschid. Fișierele DWG se deschid dacă CadCraft afișează „Gata pentru offline” sau dacă cititorul DWG a fost deja încărcat în acest tab.
:::

## Constrângeri în fișiere

Constrângerile și parametrii (vezi [Constrângerea unui desen](topic:constraints)) sunt salvați atât în DWG, cât și în DXF. Fiecare obiect constrâns poartă o mică notă CadCraft (date extinse), iar un bloc nefolosit, numit `CADCRAFT_PARAMETRIC`, conține constrângerile și tabelul de parametri. Celelalte programe deschid desenul normal și ignoră ambele; pot șterge blocul nefolosit când fac curățare. Notele se referă la obiecte prin cheia lor proprie, nu prin identificatorii fișierului, deci un program care renumerotează identificatorii nu le strică. Când alt program a șters sau a modificat un obiect constrâns, CadCraft renunță la constrângerile lui la deschiderea fișierului și spune câte. Un fișier fără ele se deschide fără constrângeri.

O schiță exportată dintr-un modelator de piese (`.json`) se deschide și ea: vezi [Mutarea schițelor către și de la alți modelatori de piese](topic:solidworks-sketches).

## Nu este disponibil încă

- Linii de indicație multiple ca obiecte, într-un DXF salvat (R12 nu are așa ceva: sunt salvate ca ceea ce desenează).
- Imagini într-un DXF salvat (se salvează ca cadrele lor; DWG le păstrează ca imagini) și mascări care ascund ce se află sub ele.
- Salvarea unei versiuni DXF mai noi decât 2000.
- Salvarea în cloud și sincronizarea între calculatoare.

Vezi [Încă nerealizat](topic:not-built-yet) pentru lista completă.
