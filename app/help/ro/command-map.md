---
title: Harta comenzilor: ce să tastați
summary: Fiecare comandă pe care o are CadCraft, cu prescurtările ei, de la A la Z, generată din programul însuși, și obiceiurile din alte programe de desenare care diferă.
keywords: harta comenzilor, comenzi, aliasuri, prescurtări, venind de la, listă de comenzi, ce să tastați, șterge, taie, echivalent, diferențe
from: 9426856f
---

CadCraft preia numele de comenzi și prescurtările pe care oamenii le cunosc din alte programe de desenare: tastați `L` pentru o linie, `TR` pentru tăiere, `E` pentru ștergere. Astfel, pentru majoritatea nu există un tabel de traducere de învățat: numele pe care îl cunoașteți este și aici. Lista de mai jos conține toate comenzile CadCraft, generată chiar din program. {{key:Enter}} repetă ultima comandă; `HELP` în linia de comandă afișează aceeași listă.

Câteva care diferă sau încă nu sunt realizate:

- **Salvare** descarcă o copie în browser ({{cmd:SAVE}}, {{cmd:SAVEAS}}); în CadCraft Studio scrie fișierul. Vedeți [Venind de la alt software de desenare](topic:coming-from).
- **PLOT** creează un PDF (și PNG și SVG), cu un tabel de stiluri de trasare; nu există un manager de configurare a paginii.
- **DIMSTYLE** și **PEDIT** sunt realizate; **PEDIT** nu are opțiunea Editare vârf (asta fac mânerele).
- **TABLE** nu este încă realizată; {{cmd:XREF}}, {{cmd:SPLINE}} și {{cmd:WBLOCK}} sunt.
- Comenzile proprii ale unei rutine (AutoLISP `C:NAME`) apar după ce o încărcați cu {{cmd:APPLOAD}}; nu sunt listate aici.

## Toate comenzile (402)

| Comandă | Prescurtări | Ce face |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbitează vederea 3D cu butonul din stânga |
| `ACCESS` | `AX` | Pornește sau oprește desenarea fără vedere: rezultatele sunt rostite prin cititorul de ecran, cursor de tastatură pe desen, sunete de agățare și comenzi rostite. |
| `ALIASEDIT` |  | Editează aliasurile de comenzi într-un singur fișier text (formatul familiar L, *LINE) |
| `ALIGN` | `AL` | Mută și întoarce obiectele astfel încât punctele sursă ajung pe punctele destinație (una, două sau trei perechi) și le scalează dacă doriți |
| `ALIGNPANEL` | `ALP` | Deschide panoul Aliniere și distribuire |
| `ALIGNTO` |  | Aliniază marginile stângi, centrale, drepte, de sus, de mijloc sau de jos ale obiectelor selectate, pe selecție, pe primul sau ultimul obiect ales, ori pe un punct |
| `ANNOALLVISIBLE` | `ANNOALL` | Arată obiectele adnotative la orice scară, sau doar acolo unde scara ferestrei (sau a desenului) se află în lista lor |
| `ANNOSCALE` | `CANNOSCALE` | Stabilește scara de adnotare a desenului: textul și cotele adnotative se redimensionează ca să se tipărească la aceeași dimensiune |
| `APPLOAD` | `AP` | Încarcă aplicații: rutine LISP (.lsp) și fișierele lor de dialog (.dcl); Suita de pornire (AP) |
| `ARC` | `A` | Arc: 3 puncte, Început/Centru/Sfârșit, Început/Centru/Unghi, Început/Centru/Lungime, Început/Sfârșit/Unghi, Început/Sfârșit/Direcție, Început/Sfârșit/Rază, Centru/Început/Sfârșit, Centru/Început/Unghi, Centru/Început/Lungime, Continuare |
| `AREA` | `AA` | Aria și perimetrul prin puncte sau al unui obiect; Adăugare și Scădere țin un total curent (AA) |
| `ARRAY` | `AR` | Copii pe rânduri și coloane, sau în jurul unui centru (AR) |
| `ARRAYASSOCIATIVITY` |  | Stabilește dacă comenzile ARRAY fac matrice care rămân editabile (1) sau copii simple (0) |
| `ARRAYCLOSE` |  | Încheie editarea obiectelor sursă ale unei matrice |
| `ARRAYEDIT` |  | Modifică o matrice făcută cu opțiunea Asociativ: numere, distanțe, obiecte sursă, un singur element |
| `ARRAYPATH` |  | Copii ale obiectelor de-a lungul unei linii, arc, polilinie sau altei curbe |
| `ARRAYPOLAR` |  | Copii în jurul unui punct central |
| `ARRAYRECT` |  | Copii pe rânduri și coloane |
| `ASBUILT` | `ASB` | ASBUILT citește punctele măsurate de o echipă (CSV / TXT, așa cum le scrie EXPORTPOINTS) și le compară cu punctele desenului: în sau în afara toleranței, nemăsurate, în plus. Le marchează pe stratul AS-BUILT și descarcă un raport CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definește un atribut (o etichetă pentru care un bloc cere o valoare) de pus într-un bloc (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Editează valorile atributelor unei referințe de bloc în linia de comandă, una după alta (Enter păstrează o valoare) |
| `ATTSYNC` |  | Aduce referințele unui bloc în linie cu definițiile sale de atribute: cele noi se adaugă cu valorile implicite, cele eliminate dispar, pozițiile și textul se resetează; valorile se păstrează |
| `AUDIT` |  | Verifică desenul deschis pentru defecte: numere care nu sunt finite, obiecte fără dimensiune, straturi, blocuri, stiluri și tipuri de linie lipsă, blocuri care se conțin pe ele însele, identificatori comuni, cote și hașuri defecte. Listează ce găsește pe fel și întreabă înainte să repare; reparația este un singur pas de anulare. |
| `AUNITS` | `ANGUNITS` | Cum se arată și se tastează unghiurile: grade zecimale, grade-minute-secunde sau orientări ca N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Autocompletarea desenului pornită sau oprită, sau listează ce sugerează acum tiparele desenului. |
| `AUTOCONSTRAIN` |  | Adaugă constrângeri de coincidență, orizontale și verticale acolo unde geometria este deja aproape |
| `AUTODIM` | `ADIM` | Cotare după reguli: dimensiune generală, lanțuri de-a lungul laturilor, goluri, diametrele găurilor și distanța liniilor de grilă, fără să repete ce este deja cotat. |
| `AUTOSHEET` | `ASH` | Aranjează foile singură: alege hârtia și scările standard și pune fiecare vedere cu o legendă și un cartuș. |
| `BATTMAN` |  | Managerul de atribute ale blocurilor: ordinea, etichetele, solicitările, valorile implicite și modurile atributelor unui bloc, apoi referințele sale actualizate |
| `BCLOSE` |  | Închide editorul de blocuri: salvează blocul sau renunță la modificări |
| `BCONVERT` |  | BCONVERT găsește geometrie care se repetă și o transformă în referințe de bloc. Selectați obiectele care se repetă: fiecare alt set de obiecte din spațiul deschis care are aceeași geometrie, mutat și întors cu orice unghi, este găsit; cu Oglindit și Scalat pornite se găsesc și imaginile oglindite și copiile la altă mărime. Dați noului bloc un nume și un punct de bază; selecția și fiecare copie devin referințe la el, fiecare cu propria rotație și scară. Sau alegeți Bloc și numiți un bloc existent ca să găsiți copii libere ale obiectelor sale. O copie trebuie să aibă același strat, culoare, tip de linie și grosime, dacă Proprietăți nu este setat pe Ignoră. Obiectele de pe straturi blocate sunt lăsate în pace. Un singur pas de anulare. |
| `BEDIT` | `BE` | Editorul de blocuri: editează obiectele și atributele unui bloc; BCLOSE salvează (BE) |
| `BLEND` |  | BLEND: o spline între capetele a două curbe deschise, alese aproape de capete ca să se unească. CONtinuitate: Tangent urmează ambele direcții, Neted urmează și cum se îndoaie. |
| `BLOCK` | `B`, `BMAKE` | Face un bloc din obiecte (devin o singură referință) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: fiecare referință la un bloc devine referință la alt bloc, în același loc, cu aceeași scară și rotație. Valorile atributelor pe care le au ambele blocuri se păstrează. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE arată panoul Blocuri cu cursorul în filtru. Panoul arată o imagine a fiecărui bloc (cele plasate cel mai recent primele), ca listă sau ca grilă; faceți clic pe o imagine sau trageți-o pe desen ca să plasați blocul cu INSERT. Sub Biblioteci, adăugați un fișier DWG sau DXF propriu: blocurile lui sunt listate cu imagini și se copiază în acest desen când plasați unul. În CadCraft Studio se poate adăuga și un dosar de desene, iar fișierele și dosarele se țin minte. |
| `BOMEDIT` | `BOMCOLUMNS` | Coloanele, gruparea, sortarea, titlul, totalurile și observațiile unui tabel de listă de materiale |
| `BOMEXPORT` |  | Salvează un tabel de listă de materiale ca fișier .csv |
| `BOMTABLE` | `BOM` | Un tabel viu de listă de materiale pentru o zonă, sau pentru tot desenul |
| `BOMUPDATE` |  | Actualizează acum toate tabelele de listă de materiale, și cele înghețate |
| `BOMZONE` | `BZONE` | O zonă denumită a desenului pentru o listă de materiale: două colțuri, un poligon sau conturul unui obiect închis |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): alegeți un punct în interiorul unei suprafețe închise și primiți o polilinie închisă în jurul ei. Arcele rămân arce. Insulele conturează și suprafețele din interior. |
| `BOX` |  | O cutie: două colțuri și o înălțime (3D) |
| `BPARAMETER` | `BPARAM` | Încă nerealizat: adăugarea unui parametru (cum ar fi Vizibilitate) la un bloc. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parametrii blocului: parametri denumiți cu formule și mai mulți parametri de vizibilitate într-un bloc. Funcționează în editorul de blocuri (atribuie obiectele selectate unei stări) și pe o referință selectată (propriile valori și stări). |
| `BREAK` | `BR` | Rupe o linie, un arc, un cerc sau o polilinie între două puncte (BR) |
| `BREAKATPOINT` |  | Împarte o linie, un arc sau o polilinie în două la un punct |
| `BREAKLINE` |  | Desenează o linie cu simbol de rupere; dimensiunea și prelungirea dincolo de capete se țin minte. |
| `BREPLACE` |  | BREPLACE schimbă un bloc cu altul. Selectat: alegeți referințe de bloc și numiți blocul de folosit în locul lor. Toate: numiți un bloc și înlocuitorul lui, iar fiecare referință din orice spațiu și din interiorul altor blocuri se schimbă. O referință își păstrează locul, scara, rotația și stratul, iar valorile atributelor pe care le au ambele blocuri se păstrează; valorile pentru care noul bloc nu are loc se elimină și sunt numite. |
| `BSEARCH` |  | BSEARCH găsește blocuri. Nume: o parte din numele unui bloc, sau un model cu * și ?. Atribut: o valoare (sau TAG=valoare) pe care o au atributele unei referințe. Geometrie: selectați obiecte sau o referință de bloc, și blocurile a căror formă se aseamănă cel puțin 85% sunt listate, cele mai bune primele; mărimea, rotația și oglindirea nu contează. Referințele găsite în spațiul deschis se selectează, gata pentru următoarea comandă. |
| `BURST` |  | Descompune referințele de bloc și păstrează ce spun atributele lor: fiecare valoare devine text pe stratul atributului. |
| `BVHIDE` | `BVH` | În editorul de blocuri: ascunde obiectele din starea de vizibilitate curentă. |
| `BVSHOW` | `BVSH` | În editorul de blocuri: arată obiectele pe care starea de vizibilitate curentă le ascunde (apar estompate, ca să le alegeți). |
| `BVSTATE` | `BVS` | În editorul de blocuri, pe un bloc cu stări de vizibilitate: trece la o stare, sau adaugă, redenumește ori șterge una. |
| `CAL` |  | Calculează o lungime sau un număr: + − * / și paranteze, așa cum le tastați oriunde |
| `CENTERLINE` | `CL` | Linie centrală între două linii: la jumătatea distanței dintre ele, sau de-a lungul bisectoarei când se întâlnesc (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Marcaj de centru: o cruce în centrul unui cerc sau arc, cu linii de centru care trec puțin peste el (CM) |
| `CHAMFER` | `CHA` | Teșește colțul dintre două linii (D două distanțe, A lungime și unghi, P fiecare colț al unei polilinii) |
| `CHSPACE` |  | CHSPACE: mută obiectele între o foaie și model printr-o fereastră de vizualizare. Sunt scalate și întoarse ca să arate la fel din cealaltă parte. Pe o foaie merg în model; când lucrați printr-o fereastră (MSPACE), vin pe foaie. |
| `CIRCLE` | `C` | Centru și rază, diametru, 2 sau 3 puncte |
| `CLASS` |  | Pune obiectele selectate într-o clasă, sau fără selecție setează clasa activă (? le listează) |
| `CLASSES` | `CLS` | Panoul Clase: clasele așază obiectele peste straturi; le arată, ascunde și stilizează, și le suprascrie pe fiecare fereastră (CLS) |
| `COMMANDLINE` | `CMDLINE` | Ancorează sau face plutitoare linia de comandă, o face un singur rând, stabilește câte rânduri de istoric are sau deschide istoricul (F2) |
| `COMPARESETTINGS` | `CMPSET` | Compară stilurile de cotare, stilurile de text, straturile, foile sau unitățile: două în acest desen, sau acest desen cu altul deschis, și copiază o valoare dintr-una în alta. |
| `CONSTRAINTBAR` | `CBAR` | Arată sau ascunde barele de constrângere (Arată tot / Ascunde tot, sau pe obiect) |
| `COPY` | `CO`, `CP` | Copiază obiectele, de câte ori faceți clic |
| `COPYBASE` |  | Copiază obiectele în clipboard cu un punct de bază ales |
| `COPYCLIP` |  | Copiază obiectele în clipboard (Ctrl+C); PASTECLIP le lipește |
| `COUNT` | `BCOUNT` | Numără referințele de bloc: alegeți una ca să selectați și să numărați fiecare referință a blocului ei |
| `COUNTTABLE` |  | Pune un tabel cu numărul blocurilor |
| `CREDITS` |  | Pune atribuirile din bibliotecă în desen ca tabel. Rulați-o din nou ca să actualizați tabelul cu elementele din desen de acum. |
| `CURSORSIZE` |  | Mărimea reticulului: 100 îl trage de la o margine la alta a desenului (Setări › Cursor › Ecran complet) |
| `CUTCLIP` |  | Taie obiectele în clipboard (Ctrl+X): copiază, apoi șterge |
| `CYLINDER` | `CYL` | Un cilindru: centru, rază și înălțime (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Listează blocuri, atributele lor și proprietățile obiectelor ca tabel în desen sau ca fișier CSV |
| `DATALINK` | `DL` | Un tabel dintr-un fișier CSV care ține minte fișierul, ca să poată fi citit din nou |
| `DATALINKUPDATE` | `DLU` | Citește din nou fișierul unei legături de date și reumple tabelele |
| `DCALIGNED` | `DCALI` | Constrângere dimensională: distanța reală între puncte, un punct și o linie, sau două linii |
| `DCANGULAR` | `DCANG` | Constrângere dimensională: unghiul dintre două linii sau al unui arc |
| `DCCONVERT` |  | Transformă cotele desenate pe geometrie constrângibilă în constrângeri dimensionale |
| `DCDIAMETER` | `DCDIA` | Constrângere dimensională: diametrul unui cerc sau arc |
| `DCDISPLAY` |  | Arată sau ascunde constrângerile dimensionale din desen |
| `DCHORIZONTAL` | `DCHOR` | Constrângere dimensională: distanța orizontală |
| `DCLINEAR` | `DCLIN` | Constrângere dimensională: distanța orizontală sau verticală, de unde o plasați |
| `DCRADIUS` | `DCRAD` | Constrângere dimensională: raza unui cerc sau arc |
| `DCVERTICAL` | `DCVER` | Constrângere dimensională: distanța verticală |
| `DELBLOCKS` |  | Șterge blocuri: fiecare referință (și cele imbricate, pe fiecare foaie) și definițiile |
| `DELCONSTRAINT` | `DELCON` | Elimină fiecare constrângere (geometrică și dimensională) de la obiectele selectate |
| `DELOPENING` |  | Scoate o ușă sau o fereastră dintr-un perete. |
| `DESCRIBE` | `DESC` | Spune ce conține desenul: câte obiecte, de ce fel, cât de mari, ce este selectat. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Golește selecția (Esc) |
| `DETAILS` | `DET` | Detaliile proprii ale firmei, găsite pentru ce desenați: căutați, adăugați un bloc, listați, eliminați, pornește sau opriți sugestiile. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Desenează o diagramă din text: o diagramă de flux Mermaid, o diagramă de componente PlantUML, D2, o listă de la-la sau XML draw.io, ca blocuri și conectori pe care îi puteți edita |
| `DIMALIGNED` | `DAL`, `DIMALI` | Distanța reală între două puncte |
| `DIMANGULAR` | `DAN`, `DIMANG` | Unghiul dintre două linii, al unui arc, sau prin trei puncte |
| `DIMARC` | `DAR` | Cotă de lungime a arcului: distanța de-a lungul unui arc, cu simbolul arcului (DAR) |
| `DIMASZ` |  | Setare de cotare: mărimea săgeții |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Cote înșiruite dintr-o linie de bază |
| `DIMBREAK` | `DBREAK` | Rupe liniile de cotă și de ghidaj acolo unde trec peste alte obiecte (Auto), între două puncte (Manual), sau elimină întreruperile |
| `DIMCONSTRAINT` | `DCON` | Constrângeri dimensionale: liniară, aliniată, unghiulară, rază, diametru, transformare |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Un lanț de cote, fiecare pornind de la capătul celei precedente |
| `DIMDEC` |  | Setare de cotare: zecimale |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diametrul unui arc sau cerc |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Eliberează cotele de obiectele de care erau legate (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Schimbă textul cotei (Acasă, Text nou, Rotire) sau înclină liniile de ghidaj (Oblic) |
| `DIMEXE` |  | Setare de cotare: prelungirea dincolo de linia de cotă |
| `DIMEXO` |  | Setare de cotare: decalajul față de origine |
| `DIMGAP` |  | Setare de cotare: spațiul din jurul textului |
| `DIMINSPECT` |  | Cotă de inspecție: un cadru în jurul valorii, cu o etichetă și cât de des se verifică piesa |
| `DIMJOGGED` | `DJO`, `JOG` | Cotă de rază frântă: o rază desenată dintr-un punct mai apropiat când centrul este departe (DJO) |
| `DIMJOGLINE` | `DJL` | Adaugă un simbol de frângere pe linia de cotă liniară sau aliniată, ca să arate că distanța nu este desenată la scară (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Distanță orizontală sau verticală (R pentru orice unghi) |
| `DIMLUNIT` |  | Setare de cotare: formatul lungimii (1 științific, 2 zecimal, 3 inginerie, 4 arhitectural, 5 fracționar) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Cotă de ordonată: distanța X sau Y a unui punct față de originea SCU, pe o indicație (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Suprascrie variabilele de cotare pe cotele selectate, fără să schimbe stilul lor; Șterge pune stilul la loc (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Raza unui arc sau cerc |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Leagă punctele unei cote de obiecte, ca să urmeze și să se măsoare din nou când se mută (DRE) |
| `DIMSCALE` |  | Setare de cotare: scara generală (mărimile × aceasta) |
| `DIMSPACE` |  | Distanță egală între cote paralele, măsurată dintr-o cotă de bază (0 le aliniază, Auto este dublul înălțimii textului) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Creează, schimbă, setează ca curent, șterge, aplică și compară stiluri de cotare denumite (caseta de dialog; -DIMSTYLE în linia de comandă) |
| `DIMTEDIT` | `DIMTED` | Mută textul cotei la stânga, dreapta sau centrul liniei de cotă, sau îl rotește |
| `DIMTEXTUNIT` | `DTU` | Textul cotei în mm, cm, m sau km, sau în unitățile desenului: cotele selectate, altfel cele noi (DTU) |
| `DIMTXT` |  | Setare de cotare: înălțimea textului |
| `DIST` | `DI` | Distanța și unghiul dintre două puncte |
| `DISTRIBUTE` |  | Așază obiectele selectate uniform, lateral sau sus și jos: pași egali între centre, sau spații egale; primele două de la margini rămân |
| `DIVIDE` | `DIV` | DIVIDE (DIV): semne care taie o linie, un arc, un cerc, o polilinie, o spline sau o elipsă în părți egale. Puncte, sau cu Bloc un bloc la fiecare semn. |
| `DOCUMENTS` | `DOCS` | Deschide panoul Documente: verificați desenele în și din afară, revizii, stări de lansare și aprobare pentru un dosar de proiect |
| `DOOR` | `DR` | Pune o ușă într-un perete. Partea pe care faceți clic este partea spre care se deschide. |
| `DRAWORDER` |  | Schimbă ordinea de desenare: aduce obiectele în față, le trimite în spate sau le pune deasupra ori sub alte obiecte. |
| `DUPLICATE` | `DUP` | O copie care se mută cu indicatorul: faceți clic ca s-o lăsați (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Proprietățile desenului: titlu, autor și restul, plus perechi de nume și valori proprii |
| `DXFOUT` |  | Descarcă desenul ca DXF R12 (Salvare își păstrează propriul format) |
| `EATTEDIT` | `DDATTE` | Editează atributele unei referințe de bloc: valori, text și proprietăți, câte un atribut o dată |
| `ELLIPSE` | `EL` | Capetele axei și cealaltă semiaxă |
| `ERASE` | `E`, `DELETE` | Elimină obiecte |
| `EXPLODE` | `X` | Descompune polilinii, blocuri și cote în părțile lor |
| `EXPORT` | `EXP` | Salvează o copie a desenului într-un tip de fișier pe care îl scrie un supliment |
| `EXPORT3D` | `3DEXPORT` | Exportă modelul 3D: GLB, OBJ sau STL |
| `EXPORTPOINTS` | `EXPPTS` | Scrie puncte, și punctele de inserare ale blocurilor cu un atribut ca descriere, într-un fișier CSV sau TXT (PNEZD, PENZD sau XYZ) pentru programe BIM și topografie |
| `EXTEND` | `EX` | Prelungește obiectele până întâlnesc altele: faceți clic aproape de un capăt, trageți prin mai multe, sau Shift+clic ca să tăiați |
| `EXTRIM` |  | EXTRIM: alegeți o muchie de tăiere, apoi o parte. Tot ce traversează muchia este tăiat pe partea aceea. Bucățile care ar dispărea se arată când mutați indicatorul. |
| `EXTRUDE` | `EXT` | Extrudează obiecte 2D închise în solide (3D) |
| `FIELD` |  | Pune un câmp într-un text, într-o celulă de tabel sau într-un atribut: o dată, numele fișierului, numărul foii, o proprietate a desenului, aria sau lungimea unui obiect, sau o formulă |
| `FILLET` | `F` | Rotunjește sau pătrează colțul dintre două obiecte (R rază, P fiecare colț al unei polilinii, M mai multe) |
| `FIND` |  | Caută și înlocuiește cuvinte în text, în valorile atributelor și în textul cotelor |
| `FLATTEN` |  | Stabilește înălțimea (Z) și grosimea obiectelor selectate la 0, și în blocurile pe care le folosesc. |
| `FLOOR` |  | Alegeți etajul pe care desenați, adăugați unul, sau mutați ori copiați selecția pe el. |
| `FLOORLAYERS` |  | Transformă etajele în straturi denumite Etaj-Strat, pentru un fișier care merge la cineva fără etaje. |
| `FLOORS` | `FLR` | Deschide panoul Etaje: stivuiește etaje într-un singur spațiu model. |
| `GCCOINCIDENT` |  | Constrângere: două puncte se întâlnesc, sau un punct rămâne pe un obiect |
| `GCCOLLINEAR` |  | Constrângere: două linii rămân pe aceeași linie |
| `GCCONCENTRIC` |  | Constrângere: două cercuri sau arce au același centru |
| `GCEQUAL` |  | Constrângere: două linii rămân de aceeași lungime, sau două cercuri/arce de aceeași rază |
| `GCFIX` |  | Constrângere: un punct sau un obiect întreg rămâne unde este |
| `GCHORIZONTAL` |  | Constrângere: o linie (sau două puncte) rămâne orizontală |
| `GCPARALLEL` |  | Constrângere: două linii rămân paralele |
| `GCPERPENDICULAR` |  | Constrângere: două linii rămân la unghi drept |
| `GCSYMMETRIC` |  | Constrângere: două puncte, linii sau cercuri se oglindesc peste o linie |
| `GCTANGENT` |  | Constrângere: o linie și un cerc sau arc (sau două dintre ele) rămân tangente |
| `GCVERTICAL` |  | Constrângere: o linie (sau două puncte) rămâne verticală |
| `GDSIN` | `GDS` | Vizualizează un plan de circuit integrat (un fișier flux GDSII): fiecare strat și tip de date ca strat de desen, plat, în unități utilizator; doar pentru vizualizare și măsurare (test de laborator) |
| `GEOMCONSTRAINT` | `GCON` | Constrângeri geometrice: orizontală, verticală, paralelă, tangentă, coincidentă… |
| `GLBOUT` |  | Exportă modelul 3D ca GLB (glTF) |
| `GRADIENT` | `GD` | Umple o suprafață cu un gradient de una sau două culori |
| `GRID` |  | Stabilește grila: distanța dintre linii, fiecare a N-a linie ca linie principală, PORNIT sau OPRIT, sau Auto ca să urmeze din nou zoomul |
| `GRIDMOVE` | `GM` | Mută o linie de grilă și duce ce atârnă de ea: pereții se întind, coloanele, bulele și etichetele se mută, cotele urmează. |
| `GROUP` | `G` | GROUP (G): dă obiectelor selectate un nume comun. Un clic pe unul dintre ele le selectează apoi pe toate. Enter la nume face un grup fără nume. |
| `GROUPEDIT` |  | GROUPEDIT: schimbă un grup. Alegeți unul dintre obiecte sau dați numele, apoi Adăugați sau Eliminați obiecte, REDenumiți-l, schimbați descrierea sau spuneți dacă un clic îl selectează întreg. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Umple o suprafață cu o umplere plină sau cu un model: faceți clic înăuntru, sau selectați obiecte închise (H) |
| `HATCHEDIT` | `HE` | Schimbă o hașură: model, scară, unghi, origine și legătura cu un contur. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Refă conturul din o hașură, legat de ea sau nu |
| `HATCHTOBACK` |  | Trimite fiecare hașură în spatele tuturor celorlalte. |
| `HELP` | `?` | Această listă |
| `HIDEOBJECTS` |  | Ascunde obiectele selectate până la UNISOLATEOBJECTS. Nu se salvează cu desenul. |
| `HISTORY` | `HIST` | HISTORY (HIST): versiunile acestui desen — copii păstrate pe acest computer când Studio îl salvează, și versiunile din cloud — ca să le deschideți, restaurați și comparați cu ce s-a schimbat, arătat în culoare. |
| `ID` |  | Coordonatele unui punct |
| `IMAGE` | `IM` | Dă CadCraft fișierele de imagini pe care le folosește un desen (un DWG le reține doar locul) |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Plasează o imagine (PNG sau JPEG) dintr-un fișier. |
| `IMAGECLIP` | `ICL` | Taie o imagine la un dreptunghi sau un poligon, sau îi scoate tăietura. |
| `IMPORT` | `IMP` | Importă un fișier de un tip pe care îl citește un supliment, în acest desen |
| `INSERT` | `I`, `DDINSERT` | Plasează un bloc (S scară, R rotire); F dintr-un fișier DWG/DXF, L din bibliotecă |
| `INTERSECT` | `IN` | Păstrează doar ce au în comun solidele (3D), sau suprafața comună a regiunilor 2D |
| `ISODRAFT` |  | ISODRAFT: desenare izometrică pornită sau oprită, sau direct pe planul Stânga, Sus sau Dreapta. Cât timp este pornită, Ortogonal și urmărirea polară urmează cele două axe ale planului, grila se desenează izometric, iar ELLIPSE are Izocerc. |
| `ISOLATEOBJECTS` | `ISOLATE` | Arată doar obiectele selectate; restul din acest spațiu este ascuns până la UNISOLATEOBJECTS. Nu se salvează cu desenul. |
| `ISOPLANE` |  | ISOPLANE: alegeți planul izometric în care desenați: Stânga, Sus sau Dreapta. Enter trece la următorul, așa cum face F5 cât timp desenarea izometrică este pornită. |
| `JOIN` | `J` | Unește linii, arce și polilinii care se întâlnesc cap la cap într-o singură polilinie; linii pe aceeași dreaptă într-o linie (J) |
| `LASER` | `LASERCUT` | Deschide panoul Laser: trimite straturi către un aparat de tăiat sau gravat cu laser (cod G GRBL) |
| `LASSOMODE` |  | Apăsarea și trăgerea desenează un lasou (1) sau un dreptunghi (0) |
| `LAYDEL` |  | Șterge un strat și fiecare obiect de pe el (în model, pe foi și în blocuri) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Deschide managerul de straturi: fiecare strat într-un singur tabel |
| `LAYERPANEL` |  | Arată panoul straturilor |
| `LAYFRZ` |  | Înghață stratul fiecărui obiect ales |
| `LAYGROUP` | `LG` | Grupează straturile în dosare din panoul Straturi. |
| `LAYISO` |  | Izolează straturile obiectelor selectate (toate celelalte straturi oprite) |
| `LAYLOCKFADE` |  | Stabilește cât se estompează obiectele de pe straturile blocate și dacă un clic le poate selecta. |
| `LAYMCUR` |  | Face curent stratul obiectului ales |
| `LAYMRG` |  | Îmbină straturi: obiectele lor se mută pe un strat țintă, iar straturile îmbinate dispar |
| `LAYOFF` |  | Oprește stratul fiecărui obiect ales |
| `LAYON` |  | Pornește fiecare strat |
| `LAYOUT` | `LO`, `NEWLAYOUT` | O foaie nouă cu un cartuș și o fereastră de vizualizare |
| `LAYTHW` |  | Dezgheață fiecare strat |
| `LAYUNISO` |  | Repornește straturile pe care LAYISO le-a oprit |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Transformă textul tastat cu fonturi vietnameze vechi (fonturi TCVN3 / ABC, precum .VnTime, și fonturi VNI, precum VNI-Times) în Unicode. Un astfel de text se arată deja cum se citește; aceasta îl rescrie definitiv, cu un număr și un pas de anulare. |
| `LENGTHEN` | `LEN` | Lungește sau scurtează linii, arce și polilinii: cu o cantitate, un procent, până la un total, sau trăgând (LEN) |
| `LIBRARY` | `LIB` | Panoul bibliotecii: plasează elemente, verifică actualizările, atribuirile |
| `LIMITS` |  | Stabilește limitele desenului: PORNIT, OPRIT, sau colțurile din stânga jos și dreapta sus. Cu limitele PORNITE, punctele din afara lor sunt refuzate |
| `LINE` | `L` | Segmente drepte, fiecare obiect propriu |
| `LINETYPE` | `LT`, `CELTYPE` | Tipul de linie pe care îl primesc obiectele noi (după strat, după bloc sau un nume) |
| `LINKVIEWS` | `SYNCVIEWS` | Deplasează și mărește toate panourile împreună (ecran împărțit), ca să comparați două desene sau revizii |
| `LISPEDIT` | `VLIDE` | LISPEDIT (sau VLIDE) deschide editorul LISP: o fereastră în care scrieți, încărcați și încercați o rutină. Încarcă în desen citește fiecare formă, ca la încărcarea fișierului cu APPLOAD, și creează comenzile ei. Rulează selecția evaluează formele selectate, sau forma în care este cursorul. Consola arată ce a tipărit rutina și fiecare eroare cu linia ei. Parantezele corespondente se marchează cât tastați, iar Enter indentează linia nouă. Nou, Deschidere și Salvare lucrează cu un fișier .lsp. Listele de lângă text arată funcțiile definite de rutină, cele pe care le apelează și LISP-ul acesta nu le are încă și toate cele pe care le are. Fereastra nu blochează desenul, așa că o rutină poate cere puncte; Oprire sau Esc termină o rutină care rulează. |
| `LIST` | `LI`, `LS` | Descrie obiectele din istoric |
| `LTSCALE` | `LTS` | Scara tipurilor de linie a desenului (fiecare liniuță și spațiu se înmulțește cu ea) |
| `LWDISPLAY` | `LWT` | Arată sau ascunde grosimile de linie pe ecran (butonul LWT din bara de stare) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Grosimea de linie pe care o primesc obiectele noi (după strat, după bloc, implicit sau mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | straturi de hartă sub spațiul model: sistemul de coordonate al desenului, plăci, WMS, WMTS, ArcGIS, imagini |
| `MASSPROP` |  | MASSPROP: proprietățile secțiunii regiunilor și obiectelor închise: arie, perimetru, centroid, momente și produs de inerție, raze de giro și axele principale. Exact pentru linii și arce. Poate scrie raportul într-un fișier text. |
| `MATCHPROP` | `MA`, `PAINTER` | Potrivește proprietățile: copiază stratul, culoarea și altele de la un obiect pe altele (MA) |
| `MEASURE` | `ME` | MEASURE (ME): un semn la fiecare lungime dată de-a lungul unei linii, arc, cerc, polilinii, spline sau elipse, de la capătul cel mai apropiat de alegerea dumneavoastră. Puncte, sau cu Bloc un bloc la fiecare semn. |
| `MEASUREGEOM` | `MEA` | Măsoară o distanță, o rază, un unghi sau o arie (MEA) |
| `MINSERT` |  | MINSERT: plasează un bloc pe rânduri și coloane dintr-o dată. Fiecare este propria referință, astfel încât oricare poate fi mutată sau ștearsă. |
| `MIRROR` | `MI` | Oglindește obiectele peste o linie |
| `MLEADER` | `MLD`, `MLEAD` | Indicație multiplă: o săgeată, o linie de indicație și o notă, ca un singur obiect (MLD) |
| `MLEADERALIGN` | `MLA` | Aliniază indicațiile multiple cu una dintre ele, pe o direcție, la distanțe egale, sau distribuite între două puncte (MLA) |
| `MLEADERCOLLECT` | `MLC` | Adună mai multe indicații multiple într-una: blocurile lor pe un rând sau o coloană, sau notele una sub alta (MLC) |
| `MLEADEREDIT` | `MLE` | Adaugă linii de indicație la o indicație multiplă sau le elimină; schimbă conținutul între text și bloc (MLE) |
| `MLINE` |  | Desenează linii paralele împreună, unite la colțuri. |
| `MOVE` | `M` | Mută obiectele după un punct de bază și un al doilea punct |
| `MSPACE` | `MS` | Lucrează pe model printr-o fereastră de vizualizare a foii deschise (sau dublu clic în fereastră). |
| `MTEXT` | `MT`, `T` | Text de paragraf: trageți lățimea, apoi tastați pe loc; Enter începe un paragraf nou (T) |
| `MVIEW` | `MV` | O fereastră de vizualizare pe model, pe o foaie |
| `NAMEDVIEW` | `NV`, `VIEWS` | Vederi denumite: salvează vederea de pe ecran (sau o fereastră) sub un nume și reveniți la ea (NV) |
| `NCOPY` |  | Copiază obiecte dintr-o referință de bloc sau dintr-un desen legat în desen, fără să le descompună. |
| `NEARBY` |  | Spune ce se află aproape de cursor, cel mai apropiat primul, cu distanța și partea. |
| `NEW` |  | Pornește un desen nou |
| `OBJECTSCALE` | `OBJSCALE` | Scările de adnotare ale textului și cotelor adnotative: adaugă o scară, șterge una, adaugă scara curentă sau le listează (fiecare fereastră le arată la mărimea scării sale) |
| `OBJOUT` |  | Exportă modelul 3D ca OBJ |
| `OFFICESTANDARD` | `OFFSTD` | Standardul de birou: înălțimile textului pe hârtie, straturile, câmpurile cartușului și șabloanele într-o singură înregistrare. Arată cel în vigoare și de unde vine; Importă o înregistrare .json în acest desen, adaugă straturile de birou lipsă, listează câmpurile cartușului. |
| `OFFSET` | `O` | Copii paralele la o distanță |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: cum închide DECALARE golurile din colțurile exterioare ale unei polilinii. 0 prelungește segmentele, 1 adaugă un arc, 2 adaugă o tăietură dreaptă. Se păstrează pentru această sesiune. |
| `OLELIST` | `OLES` | Listează obiectele OLE pe care le are un desen și pune o copie a imaginii uneia acolo unde alegeți |
| `OPEN` |  | Deschide un DWG sau DXF de pe acest computer |
| `OPENIN3D` |  | Deschide acest desen în aplicația de modelare 3D, într-o filă nouă (nu se încarcă nimic) |
| `OPTIONKEYS` | `OPTKEYS` | Dă opțiunilor comenzilor litere proprii (ARRAY.PO, P), într-un fișier text |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Deschide meniul agățărilor de obiecte: alegeți ce agățări sunt pornite. Și clic dreapta pe Agățare din bara de stare. |
| `OVERKILL` |  | Șterge obiectele duplicate și îmbină liniile și arcele care se suprapun sau se întâlnesc cap la cap, în limita unei toleranțe. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Panoul Parametri: parametri utilizatorului și constrângeri dimensionale într-un singur tabel |
| `PARTSLIST` | `PLIST` | Un tabel cu lista pieselor pentru fiecare piesă standard și profil de oțel plasat din Bibliotecă |
| `PASTEAREA` | `PAREA` | Lipește o zonă copiată în MarkupCraft (Copiere zonă) la dimensiunea ei reală, ca imagine. |
| `PASTEBLOCK` |  | PASTEBLOCK: lipește ce ați copiat ca un singur bloc. Blocul primește un nume propriu; RENAME îi dă al dumneavoastră. |
| `PASTECLIP` |  | Lipește clipboardul: urmează cursorul, faceți clic unde trebuie să ajungă (Ctrl+V) |
| `PASTEORIG` |  | Lipește clipboardul la coordonatele de unde a fost copiat (Ctrl+Shift+V) |
| `PDF` |  | Dă CadCraft fișierele PDF pe care le folosesc sub-desenele |
| `PDFADJUST` |  | Estompează, schimbă contrastul, face monocrom sau oprește un sub-desen PDF |
| `PDFATTACH` | `PDFATT` | Atașează o pagină PDF ca sub-desen (PDFATTACH) |
| `PDFCLIP` |  | Taie un sub-desen PDF la un dreptunghi sau poligon |
| `PDFIMPORT` | `PDFIM` | Transformă liniile, umplerile și textul unei pagini PDF în obiecte de desen (PDFIMPORT) |
| `PDFLAYERS` |  | Pornește sau oprește straturile proprii ale unui sub-desen PDF |
| `PEDIT` | `PE` | Editează o polilinie: închide, deschide, unește, lățime, curbă potrivită, curbă spline, decurbare, generare tip de linie, inversare; liniile, arcele și splinele pot deveni polilinii |
| `PENPRESSURE` |  | Dacă presiunea unei linii trasate cu creionul stabilește grosimea a ceea ce fac SKETCHFIX și SKETCHLIVE (pornit implicit). Se păstrează în acest browser. |
| `PHOTOSKETCH` | `PSK` | Transformă o fotografie a unei schițe de mână de pe hârtie în linii și arce la o scară, îndreptând perspectiva și dând fiecărei culori de creion propriul strat. |
| `PICKSTYLE` |  | PICKSTYLE: dacă alegerea unui obiect dintr-un grup selectează tot grupul (1, setarea de pornire) sau doar acel obiect (0). Se păstrează pentru această sesiune. |
| `PLAN` |  | Întoarce vederea astfel încât axa X a SCU (SCU curent, un SCU salvat sau cel global) să fie orizontală pe ecran. Nimic din desen nu se mută. |
| `PLINE` | `PL` | O polilinie cu segmente de linie și de arc |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Trasare în PDF: o foaie, sau modelul la o scară |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabele de stiluri de trasare: stabiliți cum se tipărește fiecare culoare (culoare, negru, gri, cerneală, grosime de linie); se păstrează cu desenul (STYLESMANAGER) |
| `POINT` | `PO` | Obiecte punct |
| `POINTCLOUD` | `PC` | norul de puncte atașat: felie, înălțime, grosime, culoare, mărime, vizibil, zoom, detașare |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | atașează un nor de puncte (LAS, LAZ, XYZ, PTS) sub desen |
| `POLARANG` |  | Pasul de urmărire polară în grade (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Un poligon regulat |
| `PRESSPULL` |  | Împinge sau trage o față a unui solid (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Deschide panoul Proprietăți (sau Ctrl+1, ori dublu clic pe un obiect) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Strânge panoul Proprietăți la marginea ferestrei |
| `PSPACE` | `PS` | Părăsiți fereastra de vizualizare și reveniți la foaie (sau dublu clic în afara ei). |
| `PUBLISH` | `-PUBLISH` | Trasează mai multe sau toate foile într-un singur PDF (o pagină și un semn de carte pe foaie) |
| `PURGE` | `PU` | Șterge definițiile de blocuri pe care nimic nu le folosește |
| `QDIM` |  | Cotare rapidă: cotează mai multe obiecte deodată (continuu, de bază, decalat, ordonată, rază sau diametru) |
| `QPMODE` | `QP` | Proprietăți rapide lângă cursor pornite sau oprite |
| `QSELECT` | `QS` | Selectare rapidă: fiecare obiect de un tip al cărui strat, culoare, mărime sau nume se potrivește (QS) |
| `RASTERSNAP` |  | Pornește sau oprește agățarea de liniile foilor scanate. |
| `RAY` |  | Rază: o linie de construcție dintr-un punct, nelimitată într-o direcție. |
| `RECOVER` |  | Deschide un DXF sau DWG deteriorat: sare peste ce nu poate fi citit în loc să refuze fișierul, spune ce a sărit, apoi verifică și repară desenul ca AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | O polilinie închisă din două colțuri |
| `REDLINE` | `RDL` | Adnotare în revizie: citește un pachet de adnotări MarkupCraft, acceptă sau respinge fiecare modificare, adaugă un nor de revizie pentru cele acceptate cu un jurnal de revizie și salvează fișierul de răspunsuri (RDL) |
| `REDO` |  | Refă ce a fost anulat |
| `REFCLOSE` |  | Termină editarea unui bloc pe loc: îl salvează sau renunță la modificări |
| `REFEDIT` |  | Editează un bloc pe loc, acolo unde se află o referință a sa, cu restul desenului estompat; REFCLOSE salvează |
| `REGEN` | `RE` | Refă ce este desenat în această filă din desen |
| `REGENALL` | `REA` | Refă ce este desenat în fiecare filă, panou și desen deschis |
| `REGION` | `REG` | REGION (REG): face regiuni plate din obiecte închise, sau din linii, arce și polilinii care se închid cap la cap. UNION, SUBTRACT și INTERSECT combină apoi regiunile, iar MASSPROP dă proprietățile lor de secțiune. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Înregistrează mai multe scanări: le așază într-un cadru prin perechi de puncte alese sau ținte, le rafinează cu ICP, exportă un LAS sau E57 |
| `REINIT` |  | Reîncarcă fișierul de aliasuri |
| `RENAME` | `-RENAME`, `REN` | Redenumește un strat sau un bloc (fiecare obiect sau referință urmează) |
| `REVCLOUD` | `RC` | Nor de revizie: rotunjește un dreptunghi, un poligon, un traseu liber sau un obiect (RC) |
| `REVOLVE` | `REV` | Rotește obiecte 2D închise în jurul unei axe, în solide (3D) |
| `ROTATE` | `RO` | Rotește obiectele în jurul unui punct de bază |
| `SAMPLES` | `SAMPLE` | Deschide unul dintre desenele exemplu CadCraft (un set arhitectural, un plan executat) ca să învățați din ele |
| `SAVE` | `QSAVE` | Descarcă desenul în formatul său (DWG sau DXF) |
| `SAVEAS` |  | Descarcă desenul ca DWG sau DXF: alegeți care |
| `SAYSEL` |  | Spune ce este selectat, câte o propoziție pentru fiecare obiect. |
| `SCALE` | `SC` | Scalează obiectele în jurul unui punct de bază |
| `SCALELISTEDIT` | `SCALELIST` | Adaugă, editează și șterge scările proprii ale desenului; apar în listele de scări ale ferestrelor și trasărilor și se salvează în fișier (SCALELIST) |
| `SCANALIGN` | `SCL` | Aliniază o foaie scanată după două puncte: o mută, o întoarce și, dacă alegeți, o scalează. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Inserează un desen scanat: PNG, JPEG sau TIFF (o pagină sau toate paginile unui fișier cu mai multe pagini) sau o pagină PDF care este o imagine. |
| `SCANCLEAN` | `SCC` | Face o foaie scanată alb-negru și îndepărtează petele. |
| `SCANCROP` | `SCR` | Decupează o foaie scanată la o fereastră. |
| `SCANDESKEW` | `SCD` | Găsește unghiul în care stau liniile lungi ale unei foi scanate și o întoarce drept după ce acceptați unghiul. |
| `SCANERASE` | `SCE` | Șterge o suprafață a unei foi scanate: un dreptunghi, un poligon sau un lasou. |
| `SCANINFO` | `SCI` | Arată fișierul original al unei foi scanate și pașii făcuți de atunci. |
| `SCANSCALE` | `SCS` | Scalează o foaie scanată: alegeți două puncte pe ea și tastați distanța reală dintre ele. |
| `SCANTRACE` | `SCT` | Trasează o foaie scanată în linii și arce pe un strat nou, la o toleranță pe care o stabiliți. Textul și hașurile rămân ca raster. |
| `SELECT` |  | Selectează obiecte acum (pentru P, Precedent, în următoarea comandă) |
| `SELECTALL` | `AI_SELALL` | Selectează fiecare obiect pe care îl puteți edita în această filă (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Selectează fiecare obiect ca cele alese: același tip, strat și culoare (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Arată panoul Set de planșe: foi din multe desene, numerotate, publicate ca un singur PDF. |
| `SHORTCUTS` | `KEYS` | Dă oricărei comenzi o tastă proprie (Ctrl sau Alt cu o literă, sau o tastă de funcție liberă), păstrată în acest browser sau în aplicația desktop. |
| `SHXFONTS` | `SHX` | Dă CadCraft fonturi SHX dintr-un dosar sau din fișiere, astfel încât stilurile de text care le numesc să deseneze cu ele (listează, elimină, inversează) |
| `SKETCHFIX` | `SKF` | Desenează traseele libere; fiecare devine o linie, un cerc, un arc, un dreptunghi sau o polilinie curată, pătrată și unită cu celelalte. |
| `SKETCHLIVE` | `SKL` | Schițează cu un creion: fiecare traseu devine o linie, un cerc, un arc sau un dreptunghi precis când ridicați creionul, lipit de desen, cu mărimea ei de suprascris. |
| `SPLINE` | `SPL` | Desenează o spline prin puncte (sau cu un poligon de control), ori transformă o polilinie într-una |
| `SPLINEDIT` | `SPE` | Editează o spline: puncte de potrivire, puncte de control și greutăți, deschide sau închide, inversează sau transformă în polilinie |
| `SPLIT` |  | Împarte zona de desen în panouri (ca VPORTS pe model; și de pe o foaie) |
| `STEELMEMBER` | `SMEMBER` | O bară de oțel în 3D dintr-un profil standard: două puncte (o grindă) sau un punct de bază și o înălțime (Stâlp) |
| `STLOUT` |  | Exportă modelul 3D ca STL (milimetri) |
| `STRETCH` | `S` | Întinde: trageți o fereastră de intersectare peste capete ca să mutați; ce este înăuntru se mută, restul rămâne (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Stiluri de text: fontul, înălțimea, lățimea și înclinarea pe care le primește textul nou (caseta de dialog; -STYLE în linia de comandă) |
| `SUBTRACT` | `SU` | Scoate solide din altele (3D), sau regiuni 2D din regiuni |
| `SWBOUT` | `SWMACRO` | Descarcă o macro pentru SolidWorks (.swb) care reconstruiește modelul ca o singură schiță constrânsă |
| `SWEEP` |  | Mătură obiecte 2D închise de-a lungul unei căi (linie, polilinie, arc, cerc) în solide (3D) |
| `TABLE` | `TB` | Face un tabel: rânduri și coloane, sau din celule de foaie de calcul din clipboard sau dintr-un fișier CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Editează un tabel: tastați într-o celulă, inserați și ștergeți rânduri și coloane, mărimi, celule îmbinate, aliniere |
| `TABLEEXPORT` |  | Salvează ce arată un tabel ca fișier CSV |
| `TABLEPASTE` | `PASTETABLE` | Face un tabel din celule de foaie de calcul din clipboard |
| `TABLESTYLE` | `TS` | Stiluri de tabel: înălțimi ale textului, aliniere, margine și chenare pentru rândurile de titlu, antet și date |
| `TAGS` |  | Etichete pe referințele de bloc: definește o etichetă (tip, valori permise, blocuri la care se aplică), o setează pe referințele selectate și le listează ca un tabel pe care îl puteți salva ca CSV |
| `TEXT` | `DT`, `DTEXT` | Text pe un rând; Enter începe rândul următor |
| `TEXTEDIT` | `ED`, `DDEDIT` | Editează textul pe loc: alegeți un text (sau dublu clic pe el) (ED) |
| `TEXTMASK` | `TMASK` | Pune o mască de fundal în spatele textelor (fundalul desenului sau o culoare), sau o scoate. |
| `TEXTTOFRONT` |  | Aduce tot textul, cotele și indicațiile în fața tuturor celorlalte. |
| `TOOLBAR` |  | Alegeți ce arată butoanele barei de instrumente: pictograme și text, doar pictograme sau doar text (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Pune bara de instrumente sus, jos, în stânga sau în dreapta ferestrei |
| `TOOLBARROWS` |  | Alegeți câte rânduri folosește bara de instrumente: se încadrează, 2 sau 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Face barele de deasupra desenului standard sau compacte |
| `TOUCHCROSSHAIR` | `TCX` | Reticul decalat pentru desenare cu degetul: un deget mută un reticul care stă deasupra și alături de el, astfel încât degetul nu acoperă punctul ales. Ridicarea degetului nu alege nimic; butonul Clic sau o atingere cu al doilea deget alege la reticul, iar ținând Clic apăsat la mutare trage. O apăsare lungă sau butonul Enter este Enter. Două degete mută și măresc vederea. Opțiuni: PORNIT, OPRIT, Auto (pornit doar acolo unde un deget este singurul indicator), Distanță, Parte. |
| `TOUR` | `TUTORIAL` | Refă turul în șase pași al primului desen |
| `TRIM` | `TR` | Taie obiectele până unde le traversează altele: faceți clic pe o bucată, trageți prin mai multe, sau Shift+clic ca să prelungiți |
| `TRIMEXTENDMODE` |  | Cum pornesc TRIM și EXTEND: 1 Rapid (fiecare obiect este muchie de tăiere sau margine), 0 Standard (alegeți muchiile întâi) |
| `TTR` |  | Un cerc tangent la două obiecte, cu o rază pe care o dați (la fel ca CIRCLE T). |
| `TURNLEFT` |  | Întoarce vederea cu 90° la stânga (în sens invers acelor de ceasornic): SCU Z -90, iar vederea urmează. Nimic din desen nu se mută. |
| `TURNRIGHT` |  | Întoarce vederea cu 90° la dreapta (în sensul acelor de ceasornic): SCU Z 90, iar vederea urmează. Nimic din desen nu se mută. |
| `TURNWORLD` |  | Înapoi la global: SCU Global, iar vederea este din nou orizontală. |
| `TXT2MTXT` | `T2M` | Unește texte de un rând într-un text de paragraf, de sus în jos. |
| `UCS` |  | Propriul sistem de coordonate: o origine și o axă X (origine, unghi Z, 3punct, OBiect, Precedent, Global, NAmed). Punctele pe care le tastați, ortogonalul, urmărirea polară, grila și textul nou îl urmează; vederea se întoarce ca axa lui X să fie orizontală. Nimic din desen nu se mută. |
| `UNDO` | `U` | Anulează ultima comandă |
| `UNGROUP` |  | UNGROUP: desface grupurile. Selectați obiecte din grupuri, sau dați un Nume. Obiectele rămân în desen. |
| `UNION` | `UNI` | Unește solide într-unul (3D), sau regiuni 2D într-o regiune |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Arată din nou fiecare obiect ascuns de ISOLATEOBJECTS sau HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Cum se arată și se tastează lungimile: zecimal, picioare și inci, fracții (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Recalculează câmpurile și alegeți când se actualizează singure |
| `USDOUT` |  | Exportă modelul 3D ca USD (text .usda, binar .usdc sau un pachet .usdz) |
| `VIEW` | `-VIEW`, `V` | Vederi 3D standard, în perspectivă sau paralele (3D) |
| `VIEWBASE` | `FLATSHOT` | Plasează o vedere 2D plată a solidelor 3D (față, sus, lateral sau izometrică, cu muchiile ascunse punctate) pe o foaie sau în model |
| `VIEWLABEL` | `VL` | Un titlu de vedere pe o foaie care arată numele vederii din fereastra sa și se schimbă odată cu ea. |
| `VOICE` |  | Pornește sau oprește comenzile rostite. Sunt recunoscute pe acest computer. |
| `VPCLIP` |  | Taie o fereastră de vizualizare de pe foaie la un obiect închis sau un poligon desenat; Delete o face din nou dreptunghi |
| `VPLAYER` |  | Înghață sau dezgheață straturi doar în unele ferestre (Înghețare, Dezghețare, Resetare) și alege ce straturi încep înghețate în ferestrele noi (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Împarte zona de desen în panouri, fiecare cu propria vedere (pe o foaie: o fereastră de vizualizare, ca MVIEW) |
| `VPVIEW` |  | Stabilește ce arată o fereastră de vizualizare: alegeți o fereastră pe model |
| `VSCURRENT` | `VS`, `SHADEMODE` | Stil vizual al vederii 3D: umbrit, muchii, linie ascunsă, cadru de sârmă, raze X |
| `WALL` | `WA` | Desenează pereți 2D ca o polilinie. Se unesc și poartă uși și ferestre. |
| `WALLARC` | `WARC` | Desenează un arc de pereți. Pereții din plan sunt drepți, așa că arcul se desenează ca pereți drepți scurți (15 grade fiecare) care se unesc. |
| `WALLDELSEG` |  | Șterge o bucată de perete între două puncte. Ce rămâne rămâne ca unul sau doi pereți. |
| `WALLDIM` |  | Tastați o valoare nouă pentru o cotă: peretele de la capătul îndepărtat se mută pătrat față de el însuși, peretele de la primul capăt rămâne, iar pereții uniți de el urmează. |
| `WALLDISJOIN` |  | Alegeți un perete aproape de un capăt ca să interziceți unirile la acel capăt: capătul se desenează drept și nimic nu îl urmează. Alegeți-l din nou ca să le permiteți. |
| `WALLGRID` |  | Blochează un perete pe o linie de grilă: de-a lungul ei, sau un capăt pe ea. Mutați linia cu GRIDMOVE și peretele urmează. |
| `WALLHOLD` |  | Aliniază și blochează: un perete își păstrează locul față de alt perete (pe linia lui, sau la distanța pe care o are). Dacă unul se mută, celălalt urmează. |
| `WALLHOLDDIM` |  | Blochează distanța dintre doi pereți paraleli. Dacă unul se mută, celălalt urmează ca să o păstreze. |
| `WALLHOLDS` |  | Listează blocările pereților. |
| `WALLJOINS` |  | Dă fiecărui perete al unui desen mai vechi identificatorul și salvează îmbinările dintre ei. Se întâmplă și la prima modificare pe care o faceți. |
| `WALLJOINSTYLE` |  | Faceți clic pe un colț unde doi pereți se întâlnesc cap la cap ca să schimbați cum se desenează: îmbinare în unghi, tăiere dreaptă, drept. T schimbă peretele care trece prin. |
| `WALLOFFSET` | `WO` | Mută un perete drept față de el însuși la o distanță (pereții uniți cu el urmează), sau face o copie la acea distanță. |
| `WALLPICK` |  | Face pereți pe o linie sau polilinie din desen, cu liniile unite cu ea dacă spuneți Da. |
| `WALLPOLY` | `WP` | Desenează pereți în jurul unui poligon regulat cu 3 până la 64 de laturi, ca POLYGON. |
| `WALLRECT` | `WR` | Desenează patru pereți uniți din două colțuri opuse, ca RECTANG. |
| `WALLREJOIN` |  | Face din nou un singur perete din două părți ale unui perete. Prima păstrează locul din desen. |
| `WALLROT` |  | Desenează patru pereți uniți ca un dreptunghi întors la orice unghi: prima latură, apoi cât de departe merge cealaltă. |
| `WALLSPLIT` | `WS` | Împarte un perete în două la un punct sau acolo unde îl traversează alt perete. Părțile rămân unite dacă nu cereți un interval sau capete libere. Ușile și ferestrele merg cu partea lor. |
| `WALLSPLITGAP` |  | Împarte un perete lăsând un interval: tastați intervalul, alegeți peretele, apoi punctul. Părțile păstrează capete libere și pot fi unite din nou. |
| `WALLSTRETCH` |  | Întinde cu o fereastră: capetele de perete din ea se mută, pereții complet în interior se mută întregi, iar cei care intră în laterale alunecă odată cu ele. |
| `WALLTAN` |  | Continuă un perete cu un arc care pleacă din el de-a lungul peretelui (desenat ca pereți drepți scurți). |
| `WALLTRACE` |  | Face pereți în jurul celei mai mici suprafețe închise de linii și pereți din jurul punctului pe care faceți clic. |
| `WALLUNHOLD` |  | Scoate blocările de pe un perete (și blocările altor pereți față de el). |
| `WBLOCK` | `W`, `-WBLOCK` | Scrie un bloc, câteva obiecte sau tot desenul într-un fișier nou DWG sau DXF (W) |
| `WEDGE` | `WE` | O pană: două colțuri și o înălțime; coboară dinspre primul colț (3D) |
| `WHEREAMI` | `WHERE` | Spune unde este cursorul. |
| `WHOHAS` |  | Spune cine are un desen deschis. CadCraft Studio păstrează un mic fișier de blocare lângă fiecare desen deschis (Plan.dwg.cclock: cine, din ce moment, ce versiune) și îl șterge la închidere. Opțiuni: Curent (desenul deschis), Fișier (alegeți unul), Dosar (fiecare desen dintr-un dosar care este deschis undeva; asta permite și Studio să păstreze fișiere de blocare în acel dosar), Cale (tastați una), Nume (numele pe care îl văd ceilalți). O blocare nereîmprospătată timp de cinci minute este considerată veche. Nu este disponibil într-un browser. |
| `WINDOW` | `WN` | Pune o fereastră într-un perete. |
| `XATTACH` | `XA` | Leagă un alt DWG sau DXF în acest desen, arătat doar pentru citire (XREF le listează și le reîncarcă) |
| `XCLIP` | `XC` | Taie referințele de bloc și desenele legate la un dreptunghi sau un poligon, sau îi scoate tăietura. |
| `XLINE` | `XL` | Linie de construcție, nelimitată în ambele direcții: prin două puncte, orizontală, verticală, sub un unghi, bisectoare sau decalată față de o linie. |
| `XREF` | `XR`, `-XREF` | Desene legate (referințe externe): listare, atașare, reîncărcare, legare, detașare |
| `ZOOM` | `Z` | Extinderi, sau o fereastră |
