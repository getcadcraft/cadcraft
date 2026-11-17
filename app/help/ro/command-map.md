---
title: Harta comenzilor: ce să tastați
summary: Fiecare comandă pe care o are CadCraft, cu numele scurte, de la A la Z, făcută din program însuși, și obiceiurile din alte programe de desen care diferă.
keywords: harta comenzilor, comenzi, aliasuri, nume scurte, de unde vin, lista comenzilor, ce să tastați, ștergere, tăiere, echivalent, diferențe
from: 3bdfd3e6
---

CadCraft preia numele de comenzi și numele scurte pe care oamenii le cunosc din alte programe de desen: tastați `L` pentru o linie, `TR` pentru tăiere, `E` pentru ștergere. Așadar nu există un tabel de traduceri de învățat pentru majoritatea: numele pe care îl cunoașteți este și aici numele. Lista de mai jos este fiecare comandă pe care o are CadCraft, făcută din program însuși. {{key:Enter}} repetă ultima comandă; `HELP` în linia de comandă afișează aceeași listă.

Puținele care nu sunt la fel sau încă nerealizate:

- **Salvare** descarcă o copie în browser ({{cmd:SAVE}}, {{cmd:SAVEAS}}); în CadCraft Studio scrie fișierul. Vezi [Venit de la alte programe de desen](topic:coming-from).
- **PLOT** face un PDF (și PNG și SVG), cu un tabel de stiluri de trasare; nu există manager de configurare a paginii.
- **DIMSTYLE** și **PEDIT** sunt realizate; **PEDIT** nu are opțiunea Editare vârf (asta fac mânerele).
- **TABLE** nu este încă realizată; {{cmd:XREF}}, {{cmd:SPLINE}} și {{cmd:WBLOCK}} sunt.
- Comenzile proprii ale unei rutine (AutoLISP `C:NAME`) apar după ce o încărcați cu {{cmd:APPLOAD}}; nu sunt listate aici.

## Toate comenzile (398)

| Comandă | Nume scurte | Ce face |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbitează vizualizarea 3D cu butonul din stânga |
| `ACCESS` | `AX` | Pornește sau oprește desenarea fără vedere: rezultatele sunt citite prin cititorul de ecran, cu un cursor de tastatură pe desen, sunete de agățare și comenzi rostite. |
| `ALIASEDIT` |  | Editează aliasurile comenzilor într-un singur fișier text (formatul familiar L, *LINE) |
| `ALIGN` | `AL` | Mută și rotește obiectele astfel încât punctele sursă să ajungă pe punctele destinație (una, două sau trei perechi) și le scalează dacă doriți |
| `ALIGNPANEL` | `ALP` | Deschide panoul Aliniere și distribuire |
| `ALIGNTO` |  | Aliniază marginile stângă, centrală, dreaptă, de sus, de pe mijloc sau de jos ale obiectelor selectate, pe selecție, pe primul sau ultimul obiect ales ori pe un punct |
| `ANNOALLVISIBLE` | `ANNOALL` | Arată obiectele adnotative la orice scară, sau doar acolo unde scara ferestrei de vizualizare (sau a desenului) este în lista lor |
| `ANNOSCALE` | `CANNOSCALE` | Stabilește scara de adnotare a desenului: textul și cotele adnotative sunt redimensionate ca să se imprime la aceeași dimensiune |
| `APPLOAD` | `AP` | Încarcă aplicații: rutine LISP (.lsp) și fișierele lor de dialog (.dcl); Suita de pornire (AP) |
| `ARC` | `A` | Arc: 3 puncte, Început/Centru/Sfârșit, Început/Centru/Unghi, Început/Centru/Lungime, Început/Sfârșit/Unghi, Început/Sfârșit/Direcție, Început/Sfârșit/Rază, Centru/Început/Sfârșit, Centru/Început/Unghi, Centru/Început/Lungime, Continuare |
| `AREA` | `AA` | Arie și perimetru prin puncte sau al unui obiect; Adăugare și Scădere păstrează un total parțial (AA) |
| `ARRAY` | `AR` | Copii în rânduri și coloane, sau în jurul unui centru (AR) |
| `ARRAYASSOCIATIVITY` |  | Stabilește dacă comenzile ARRAY fac matrice care rămân editabile (1) sau copii simple (0) |
| `ARRAYCLOSE` |  | Încheie editarea obiectelor sursă ale unei matrice |
| `ARRAYEDIT` |  | Modifică o matrice făcută cu opțiunea Asociativ: numere, distanțe, obiecte sursă, un singur element |
| `ARRAYPATH` |  | Copii ale obiectelor de-a lungul unei linii, unui arc, unei polilinii sau al altei curbe |
| `ARRAYPOLAR` |  | Copii în jurul unui punct central |
| `ARRAYRECT` |  | Copii în rânduri și coloane |
| `ASBUILT` | `ASB` | ASBUILT citește punctele as-built măsurate de o echipă (CSV / TXT, așa cum le scrie EXPORTPOINTS) și le compară cu punctele desenului: în toleranță sau în afara ei, nemăsurate, în plus. Le marchează pe stratul AS-BUILT și descarcă un raport CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definește un atribut (o etichetă pentru care un bloc cere o valoare) de pus într-un bloc (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Editează valorile atributelor unei referințe la bloc în linia de comandă, unul după altul (Enter păstrează o valoare) |
| `ATTSYNC` |  | Aduce referințele unui bloc în acord cu definițiile atributelor: cele noi sunt adăugate cu valorile implicite, cele eliminate sunt scoase, pozițiile și textul sunt resetate; valorile sunt păstrate |
| `AUDIT` |  | Verifică desenul deschis pentru defecte: numere care nu sunt finite, obiecte fără dimensiune, straturi, blocuri, stiluri și tipuri de linie lipsă, blocuri care se conțin pe ele însele, identificatori comuni, cote și hașuri defecte. Listează ce găsește pe categorii și întreabă înainte de remediere; remedierea este un singur pas de anulare. |
| `AUNITS` | `ANGUNITS` | Cum se afișează și se tastează unghiurile: grade zecimale, grade-minute-secunde sau orientări ca N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Autocompletarea desenului pornită sau oprită, sau listează ce sugerează acum modelele desenului. |
| `AUTOCONSTRAIN` |  | Adaugă constrângeri de coincidență, orizontale și verticale acolo unde geometria este deja apropiată |
| `AUTODIM` | `ADIM` | Cotează după reguli: dimensiune totală, lanțuri de-a lungul laturilor, deschideri, diametre de găuri și distanța dintre axe, fără a repeta ce este deja cotat. |
| `AUTOSHEET` | `ASH` | Așază planșele singur: alege hârtia și scările standard și plasează fiecare vedere cu legendă și cartuș. |
| `BATTMAN` |  | Managerul atributelor de bloc: ordinea, etichetele, solicitările, valorile implicite și modurile atributelor unui bloc, apoi actualizarea referințelor sale |
| `BCLOSE` |  | Închide editorul de blocuri: salvează blocul sau renunță la modificări |
| `BCONVERT` |  | BCONVERT găsește geometrie care se repetă și o transformă în referințe la blocuri. Selectați obiectele care se repetă: sunt găsite toate celelalte seturi de obiecte din spațiul deschis cu aceeași geometrie, mutate și rotite la orice unghi; cu Oglindit și Scalat activate sunt găsite și imagini oglindite și copii la altă dimensiune. Dați noului bloc un nume și un punct de bază; selecția și fiecare copie devin referințe la el, fiecare cu propria rotație și scară. Sau alegeți Bloc și numiți un bloc existent, ca să găsiți copii libere ale obiectelor sale. O copie trebuie să aibă același strat, aceeași culoare, același tip de linie și aceeași grosime de linie, dacă Proprietăți este pus pe Ignoră. Obiectele de pe straturi blocate rămân neatinse. Un singur pas de anulare. |
| `BEDIT` | `BE` | Editorul de blocuri: editează obiectele și atributele unui bloc; BCLOSE salvează (BE) |
| `BLEND` |  | BLEND: o spline între capetele a două curbe deschise, alese aproape de capete ca să se unească. CONtinuity: Tangent urmărește ambele direcții, Neted (S) urmărește și cum se curbează. |
| `BLOCK` | `B`, `BMAKE` | Creează un bloc din obiecte (devin o singură referință) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: fiecare referință la un bloc devine o referință la alt bloc, în același loc, cu aceeași scară și rotație. Valorile atributelor pe care le au ambele blocuri sunt păstrate. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE afișează panoul Blocuri cu cursorul în filtru. Panoul arată o imagine a fiecărui bloc (cele plasate cel mai recent primele), ca listă sau grilă; faceți clic pe o imagine sau trageți-o pe desen ca să plasați blocul cu INSERT. Sub Biblioteci, adăugați un fișier DWG sau DXF propriu: blocurile sale sunt listate cu imagini și sunt copiate în acest desen când plasați unul. În CadCraft Studio poate fi adăugat și un dosar de desene; fișierele și dosarele sunt reținute. |
| `BOMEDIT` | `BOMCOLUMNS` | Coloanele, gruparea, sortarea, titlul, totalurile și observațiile unui tabel de listă de materiale |
| `BOMEXPORT` |  | Salvează un tabel de listă de materiale ca fișier .csv |
| `BOMTABLE` | `BOM` | Un tabel activ de listă de materiale pentru o zonă sau pentru întregul desen |
| `BOMUPDATE` |  | Actualizează acum toate tabelele de listă de materiale, inclusiv cele înghețate |
| `BOMZONE` | `BZONE` | O zonă numită a desenului pentru o listă de materiale: două colțuri, un poligon sau conturul unui obiect închis |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): alegeți un punct în interiorul unei zone închise și obțineți în jurul ei o polilinie închisă. Arcele rămân arce. Insule conturează și zonele din interiorul ei. |
| `BOX` |  | O cutie: două colțuri și o înălțime (3D) |
| `BPARAMETER` | `BPARAM` | Încă nerealizată: adăugarea unui parametru (cum este Vizibilitate) la un bloc. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parametrii blocului: parametri denumiți cu formule și mai mulți parametri de vizibilitate într-un singur bloc. Funcționează în editorul de blocuri (atribuie obiectele selectate unei stări) și pe o referință selectată (propriile valori și stări). |
| `BREAK` | `BR` | Întrerupe o linie, un arc, un cerc sau o polilinie între două puncte (BR) |
| `BREAKATPOINT` |  | Împarte o linie, un arc sau o polilinie în două la un punct |
| `BREAKLINE` |  | Desenează o linie cu simbol de întrerupere; dimensiunea sa și prelungirea dincolo de capete sunt reținute. |
| `BREPLACE` |  | BREPLACE înlocuiește un bloc cu altul. Selectate: alegeți referințe la blocuri și numiți blocul de folosit în locul lor. Toate (A): numiți un bloc și înlocuitorul său, iar fiecare referință din fiecare spațiu și din interiorul altor blocuri se schimbă. O referință își păstrează locul, scara, rotația și stratul, precum și valorile atributelor pe care le au ambele blocuri; valorile pentru care noul bloc nu are loc sunt eliminate și numite. |
| `BSEARCH` |  | BSEARCH găsește blocuri. Nume: o parte din numele unui bloc sau un model cu * și ?. Atribut: o valoare (sau TAG=valoare) deținută de atributele unei referințe. Geometrie: selectați obiecte sau o singură referință la bloc, iar blocurile a căror formă se aseamănă în proporție de cel puțin 85% sunt listate, cele mai bune primele; dimensiunea, rotația și oglindirea nu contează. Referințele găsite în spațiul deschis sunt selectate, gata pentru următoarea comandă. |
| `BURST` |  | Descompune referințele la blocuri și păstrează ce spun atributele: fiecare valoare devine text pe stratul atributului. |
| `BVHIDE` | `BVH` | În editorul de blocuri: ascunde obiectele din starea de vizibilitate curentă. |
| `BVSHOW` | `BVSH` | În editorul de blocuri: arată obiectele pe care starea de vizibilitate curentă le ascunde (apar estompate, ca să le alegeți). |
| `BVSTATE` | `BVS` | În editorul de blocuri, la un bloc cu stări de vizibilitate: treceți la o stare sau adăugați, redenumiți ori ștergeți una. |
| `CAL` |  | Calculează o lungime sau un număr: + − * / și paranteze, așa cum le tastați oriunde |
| `CENTERLINE` | `CL` | Linie de axă între două linii: la jumătatea distanței dintre ele sau de-a lungul bisectoarei când se întâlnesc (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Marcaj de centru: o cruce în centrul unui cerc sau arc, cu linii de axă până puțin dincolo de el (CM) |
| `CHAMFER` | `CHA` | Teșește colțul dintre două linii (D două distanțe, Lungime și unghi (A), P fiecare colț al unei polilinii) |
| `CHSPACE` |  | CHSPACE: mută obiectele între o foaie și model printr-o fereastră de vizualizare. Sunt scalate și rotite ca să arate la fel din cealaltă parte. Pe o foaie merg la model; cât lucrați printr-o fereastră (MSPACE) ajung pe foaie. |
| `CIRCLE` | `C` | Centru și rază, diametru, 2 sau 3 puncte |
| `CLASS` |  | Pune obiectele selectate într-o clasă sau, fără selecție, stabilește clasa activă (? le listează) |
| `CLASSES` | `CLS` | Panoul Clase: clasele grupează obiectele pe straturi; le arată, le ascunde și le stilizează și le modifică pe fiecare fereastră de vizualizare (CLS) |
| `COMMANDLINE` | `CMDLINE` | Ancorează sau detașează linia de comandă, o face o singură linie, stabilește câte linii de istoric păstrează sau deschide istoricul (F2) |
| `COMPARESETTINGS` | `CMPSET` | Compară stiluri de cotare, stiluri de text, straturi, foi sau unități: două din acest desen sau acest desen cu un altul deschis și copiază o valoare dintr-o parte în alta. |
| `CONSTRAINTBAR` | `CBAR` | Arată sau ascunde barele de constrângeri (Arată tot (S) / Ascunde tot (H), sau pe obiect) |
| `COPY` | `CO`, `CP` | Copiază obiectele, de câte ori faceți clic |
| `COPYBASE` |  | Copiază obiectele în clipboard cu un punct de bază ales de dumneavoastră |
| `COPYCLIP` |  | Copiază obiectele în clipboard (Ctrl+C); PASTECLIP le plasează |
| `COUNT` | `BCOUNT` | Numără referințele la blocuri: alegeți una ca să selectați și să numărați fiecare referință a blocului ei |
| `COUNTTABLE` |  | Plasează un tabel cu numărul blocurilor |
| `CREDITS` |  | Pune creditele Bibliotecii în desen, sub formă de tabel. Rulați-o din nou ca să actualizați tabelul cu elementele din desen de acum. |
| `CURSORSIZE` |  | Mărimea crucii cursorului: 100 o întinde de la margine la margine a desenului (Setări › Cursor › Ecran complet) |
| `CUTCLIP` |  | Decupează obiectele în clipboard (Ctrl+X): copiază, apoi șterge |
| `CYLINDER` | `CYL` | Un cilindru: centru, rază și înălțime (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Listează blocurile, atributele lor și proprietățile obiectelor ca tabel în desen sau într-un fișier CSV |
| `DATALINK` | `DL` | Un tabel dintr-un fișier CSV care reține fișierul, ca să poată fi citit din nou |
| `DATALINKUPDATE` | `DLU` | Citește din nou fișierul unei legături de date și reumple tabelele sale |
| `DCALIGNED` | `DCALI` | Constrângere dimensională: distanța reală între puncte, între un punct și o linie sau între două linii |
| `DCANGULAR` | `DCANG` | Constrângere dimensională: unghiul dintre două linii sau al unui arc |
| `DCCONVERT` |  | Transformă cotele desenate pe geometrie care poate fi constrânsă în constrângeri dimensionale |
| `DCDIAMETER` | `DCDIA` | Constrângere dimensională: diametrul unui cerc sau arc |
| `DCDISPLAY` |  | Arată sau ascunde constrângerile dimensionale din desen |
| `DCHORIZONTAL` | `DCHOR` | Constrângere dimensională: distanță orizontală |
| `DCLINEAR` | `DCLIN` | Constrângere dimensională: distanță orizontală sau verticală, din locul în care o plasați |
| `DCRADIUS` | `DCRAD` | Constrângere dimensională: raza unui cerc sau arc |
| `DCVERTICAL` | `DCVER` | Constrângere dimensională: distanță verticală |
| `DELBLOCKS` |  | Șterge blocuri: fiecare referință (și cele imbricate, pe fiecare foaie) și definițiile |
| `DELCONSTRAINT` | `DELCON` | Elimină fiecare constrângere (geometrică și dimensională) de la obiectele selectate |
| `DELOPENING` |  | Scoate o ușă sau o fereastră dintr-un perete. |
| `DESCRIBE` | `DESC` | Spune ce conține desenul: câte obiecte, de ce fel, ce dimensiune au, ce este selectat. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Golește selecția (Esc) |
| `DETAILS` | `DET` | Detaliile proprii ale firmei, găsite pentru ce desenați: căutare, adăugare de bloc, listare, eliminare, pornire sau oprire a sugestiilor. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Desenează o diagramă din text: o diagramă de flux Mermaid, o diagramă de componente PlantUML, D2, o listă de la-la sau XML draw.io, ca blocuri și conectori pe care îi puteți edita |
| `DIMALIGNED` | `DAL`, `DIMALI` | Distanța reală între două puncte |
| `DIMANGULAR` | `DAN`, `DIMANG` | Unghiul dintre două linii, al unui arc sau după trei puncte |
| `DIMARC` | `DAR` | Cotă pentru lungimea arcului: distanța de-a lungul unui arc, cu simbolul arcului (DAR) |
| `DIMASZ` |  | Setare de cotare: dimensiunea săgeții |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Cote înșirate dintr-o singură linie de bază |
| `DIMBREAK` | `DBREAK` | Întrerupe liniile de cotă și de ghidaj acolo unde trec peste alte obiecte (Automat), între două puncte (Manual) sau elimină întreruperile |
| `DIMCONSTRAINT` | `DCON` | Constrângeri dimensionale: liniare, aliniate, unghiulare, rază, diametru, Transformare (C) |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Un lanț de cote, fiecare pornind de la capătul ultimei |
| `DIMDEC` |  | Setare de cotare: numărul de zecimale |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diametrul unui arc sau cerc |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Eliberează cotele de obiectele de care sunt legate (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Modifică textul cotei (Acasă, Text nou, Rotire) sau înclină liniile de extensie (Oblic) |
| `DIMEXE` |  | Setare de cotare: prelungirea dincolo de linia de cotă |
| `DIMEXO` |  | Setare de cotare: decalajul față de origine |
| `DIMGAP` |  | Setare de cotare: spațiul în jurul textului |
| `DIMINSPECT` |  | Cotă de inspecție: un cadru în jurul valorii, cu o etichetă și cât de des este verificată piesa |
| `DIMJOGGED` | `DJO`, `JOG` | Cotă de rază frântă: o rază trasată dintr-un punct mai apropiat când centrul este departe (DJO) |
| `DIMJOGLINE` | `DJL` | Adaugă un simbol de frângere pe linia de cotă liniară sau aliniată, ca să arate că distanța nu este desenată la scară (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Distanță orizontală sau verticală (R pentru orice unghi) |
| `DIMLUNIT` |  | Setare de cotare: formatul lungimii (1 științific, 2 zecimal, 3 inginerie, 4 arhitectural, 5 fracționar) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Cotă de ordonată: distanța X sau Y a unui punct față de originea SCU, pe o linie de indicație (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Suprascrie variabilele de cotare pe cotele selectate, fără a schimba stilul; Golire (C) readuce stilul (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Raza unui arc sau cerc |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Leagă punctele unei cote de obiecte, ca să urmeze și să se măsoare din nou când acestea se mută (DRE) |
| `DIMSCALE` |  | Setare de cotare: scara generală (dimensiuni × aceasta) |
| `DIMSPACE` |  | Distanță egală între cote paralele, măsurată dintr-o cotă de bază (0 le aliniază, Automat este de două ori înălțimea textului) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Creează, modifică, stabilește ca fiind curent, șterge, aplică și compară stiluri de cotare denumite (caseta de dialog; -DIMSTYLE în linia de comandă) |
| `DIMTEDIT` | `DIMTED` | Mută textul cotei la stânga, la dreapta sau în centrul liniei de cotă ori îl rotește |
| `DIMTEXTUNIT` | `DTU` | Textul cotei în mm, cm, m sau km, sau în unitățile proprii ale desenului: cotele selectate, altfel cele noi (DTU) |
| `DIMTXT` |  | Setare de cotare: înălțimea textului |
| `DIST` | `DI` | Distanța și unghiul dintre două puncte |
| `DISTRIBUTE` |  | Distribuie uniform obiectele selectate, pe lateral sau sus și jos: pași egali între centre sau spații egale; cele două exterioare rămân |
| `DIVIDE` | `DIV` | DIVIDE (DIV): marcaje care taie o linie, un arc, un cerc, o polilinie, o spline sau o elipsă în părți egale. Puncte sau, cu Bloc, un bloc la fiecare marcaj. |
| `DOCUMENTS` | `DOCS` | Deschide panoul Documente: extrage și depune desene, revizii, stări de lansare și aprobare pentru un dosar de proiect |
| `DOOR` | `DR` | Pune o ușă într-un perete. Partea pe care faceți clic este partea spre care se deschide. |
| `DRAWORDER` |  | Schimbă ordinea de desenare: aduce obiectele în față, le trimite în spate sau le pune deasupra ori sub alte obiecte. |
| `DUPLICATE` | `DUP` | O copie care se mută odată cu indicatorul: faceți clic ca s-o plasați (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Proprietățile desenului: titlu, autor și restul, plus propriile perechi nume și valoare |
| `DXFOUT` |  | Descarcă desenul ca DXF R12 (Salvare păstrează propriul format) |
| `EATTEDIT` | `DDATTE` | Editează atributele unei referințe la bloc: valori, text și proprietăți, câte un atribut pe rând |
| `ELLIPSE` | `EL` | Capetele axei și cealaltă semiaxă |
| `ERASE` | `E`, `DELETE` | Șterge obiecte |
| `EXPLODE` | `X` | Descompune polilinii, blocuri și cote în părțile lor |
| `EXPORT` | `EXP` | Salvează o copie a desenului într-un tip de fișier pe care îl scrie un supliment |
| `EXPORT3D` | `3DEXPORT` | Exportă modelul 3D: GLB, OBJ sau STL |
| `EXPORTPOINTS` | `EXPPTS` | Scrie puncte, și punctele de inserare ale blocurilor cu un atribut ca descriere, într-un fișier CSV sau TXT (PNEZD, PENZD sau XYZ), pentru programe BIM și de topografie |
| `EXTEND` | `EX` | Prelungește obiecte până la altele: faceți clic aproape de un capăt, trageți prin mai multe sau Shift+clic pentru a tăia |
| `EXTRIM` |  | EXTRIM: alegeți o muchie de tăiere, apoi o parte. Tot ce trece prin muchie este tăiat pe partea respectivă. Bucățile care ar dispărea se arată pe măsură ce mișcați indicatorul. |
| `EXTRUDE` | `EXT` | Extrudează obiecte 2D închise în solide (3D) |
| `FIELD` |  | Pune un câmp într-un text, o celulă de tabel sau un atribut: o dată, numele fișierului, numărul foii, o proprietate a desenului, aria sau lungimea unui obiect sau o formulă |
| `FILLET` | `F` | Racordează colțul dintre două obiecte (R rază, P fiecare colț al unei polilinii, Mai multe (M)) |
| `FIND` |  | Caută și înlocuiește cuvinte în text, valori de atribute și text de cotă |
| `FLATTEN` |  | Setează înălțimea (Z) și grosimea obiectelor selectate la 0, și în blocurile pe care le folosesc |
| `FLOOR` |  | Alege etajul pe care să desenați, adaugă unul sau mută ori copiază selecția pe unul |
| `FLOORLAYERS` |  | Transformă etajele în straturi numite Floor-Layer, pentru un fișier trimis cuiva fără etaje. |
| `FLOORS` | `FLR` | Deschide panoul Etaje: suprapune etaje într-un singur spațiu model. |
| `GCCOINCIDENT` |  | Constrângere: două puncte se întâlnesc, sau un punct rămâne pe un obiect |
| `GCCOLLINEAR` |  | Constrângere: două linii rămân pe aceeași dreaptă |
| `GCCONCENTRIC` |  | Constrângere: două cercuri sau arce au același centru |
| `GCEQUAL` |  | Constrângere: două linii rămân de aceeași lungime, sau două cercuri/arce de aceeași rază |
| `GCFIX` |  | Constrângere: un punct sau un obiect întreg rămâne unde este |
| `GCHORIZONTAL` |  | Constrângere: o linie (sau două puncte) rămâne orizontală |
| `GCPARALLEL` |  | Constrângere: două linii rămân paralele |
| `GCPERPENDICULAR` |  | Constrângere: două linii rămân perpendiculare |
| `GCSYMMETRIC` |  | Constrângere: două puncte, linii sau cercuri se oglindesc unul pe altul față de o linie |
| `GCTANGENT` |  | Constrângere: o linie și un cerc sau arc (sau două dintre ele) rămân tangente |
| `GCVERTICAL` |  | Constrângere: o linie (sau două puncte) rămâne verticală |
| `GDSIN` | `GDS` | Vizualizează un layout de circuit integrat (un fișier GDSII stream): fiecare strat și tip de date ca strat de desen, plat, în unități de utilizator; doar pentru vizualizare și măsurare (test de laborator) |
| `GEOMCONSTRAINT` | `GCON` | Constrângeri geometrice: orizontală, verticală, paralelă, tangentă, coincidentă… |
| `GLBOUT` |  | Exportă modelul 3D ca GLB (glTF) |
| `GRADIENT` | `GD` | Umple o zonă cu un gradient de una sau două culori |
| `GRIDMOVE` | `GM` | Mută o linie de axă și duce cu ea ce atârnă de ea: pereții se întind, stâlpii, cercurile de axă și etichetele se mută, cotele urmează. |
| `GROUP` | `G` | GROUP (G): dă obiectelor selectate un nume comun. Un clic pe unul dintre ele le selectează apoi pe toate. Enter la nume creează un grup fără nume. |
| `GROUPEDIT` |  | GROUPEDIT: modifică un grup. Alegeți unul dintre obiecte sau dați-i numele, apoi Adăugare sau Eliminare (R) de obiecte, REdenumire, Descriere (D) sau spuneți dacă un clic îl selectează întreg. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Umple o zonă cu o umplere plină sau cu un model: faceți clic în interiorul ei sau selectați obiecte închise (H) |
| `HATCHEDIT` | `HE` | Modifică o hașură: model, scară, unghi, origine și legătura sa cu un contur. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Refă conturile polilinii dintr-o hașură, legate de ea sau nu |
| `HATCHTOBACK` |  | Trimite fiecare hașură în spatele tuturor celorlalte obiecte. |
| `HELP` | `?` | Această listă |
| `HIDEOBJECTS` |  | Ascunde obiectele selectate până la UNISOLATEOBJECTS. Nu se salvează cu desenul. |
| `HISTORY` | `HIST` | HISTORY (HIST): versiunile acestui desen — copii păstrate pe acest computer când Studio îl salvează, și versiunile din cloud — ca să le deschideți, restaurați și comparați, cu modificările arătate în culoare. |
| `ID` |  | Coordonatele unui punct |
| `IMAGE` | `IM` | Indicați programului CadCraft fișierele de imagine pe care le folosește un desen (un DWG stochează doar unde se aflau). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Plasează o imagine (PNG sau JPEG) dintr-un fișier. |
| `IMAGECLIP` | `ICL` | Decupează o imagine într-un dreptunghi sau un poligon, sau elimină decuparea. |
| `IMPORT` | `IMP` | Importă într-un desen un fișier de un tip citit de un supliment |
| `INSERT` | `I`, `DDINSERT` | Plasează un bloc (S scară, R rotire); F din fișier DWG/DXF, Bibliotecă (L) |
| `INTERSECT` | `IN` | Păstrează doar ce au solidele în comun (3D), sau zona pe care o au regiunile 2D în comun |
| `ISODRAFT` |  | ISODRAFT: desenul izometric pornit sau oprit, sau direct pe planul Stânga (L), Sus (T) sau Dreapta (R). Cât este pornit, Ortogonal și urmărirea polară urmează cele două axe ale planului, grila este desenată izometric, iar ELLIPSE are Izocerc. |
| `ISOLATEOBJECTS` | `ISOLATE` | Arată doar obiectele selectate; tot restul din acest spațiu este ascuns până la UNISOLATEOBJECTS. Nu se salvează cu desenul. |
| `ISOPLANE` |  | ISOPLANE: alegeți planul izometric în care să desenați: Stânga (L), Sus (T) sau Dreapta (R). Enter trece la următorul, cum face F5 cât desenul izometric este pornit. |
| `JOIN` | `J` | Unește linii, arce și polilinii care se întâlnesc cap la cap într-o singură polilinie; linii pe aceeași dreaptă într-o singură linie (J) |
| `LASER` | `LASERCUT` | Deschide panoul Laser: trimite straturi către un aparat de tăiat cu laser sau de gravat (cod G, GRBL) |
| `LASSOMODE` |  | Apăsați și trageți desenează un lasou (1) sau un dreptunghi (0) |
| `LAYDEL` |  | Șterge un strat și fiecare obiect de pe el (în model, pe foi și în blocuri) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Deschide managerul de straturi: fiecare strat într-un singur tabel |
| `LAYERPANEL` |  | Arată panoul de straturi |
| `LAYFRZ` |  | Îngheață stratul fiecărui obiect ales |
| `LAYGROUP` | `LG` | Grupează straturile în dosare din panoul Straturi. |
| `LAYISO` |  | Izolează straturile obiectelor selectate (toate celelalte straturi sunt oprite) |
| `LAYLOCKFADE` |  | Stabilește cât se estompează obiectele de pe straturile blocate și dacă un clic le poate selecta. |
| `LAYMCUR` |  | Face curent stratul obiectului ales |
| `LAYMRG` |  | Îmbină straturi: obiectele lor se mută pe un strat țintă, iar straturile îmbinate dispar |
| `LAYOFF` |  | Oprește stratul fiecărui obiect ales |
| `LAYON` |  | Pornește fiecare strat |
| `LAYOUT` | `LO`, `NEWLAYOUT` | O foaie nouă cu cartuș și o fereastră de vizualizare |
| `LAYTHW` |  | Dezgheață fiecare strat |
| `LAYUNISO` |  | Pornește la loc straturile pe care LAYISO le-a oprit |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Convertește textul scris cu vechi fonturi vietnameze (fonturi TCVN3 / ABC, ca .VnTime, și fonturi VNI, ca VNI-Times) în Unicode. Un astfel de text este deja afișat cum se citește; comanda îl rescrie definitiv, cu un număr și un singur pas de anulare. |
| `LENGTHEN` | `LEN` | Prelungește sau scurtează linii, arce și polilinii: cu o valoare, cu un procent, până la un total sau prin tragere (LEN) |
| `LIBRARY` | `LIB` | Panoul bibliotecii: plasează elemente, verifică actualizările, creditele (LIB) |
| `LIMITS` |  | Stabilește limitele desenului: ON, OFF, sau colțurile stânga-jos și dreapta-sus. Cu limitele ON, punctele din afara lor sunt refuzate |
| `LINE` | `L` | Segmente drepte, fiecare obiect propriu |
| `LINETYPE` | `LT`, `CELTYPE` | Tipul de linie pe care îl primesc obiectele noi (DupăStrat, DupăBloc sau unul denumit) |
| `LINKVIEWS` | `SYNCVIEWS` | Deplasează și mărește împreună toate panourile (ecran divizat), ca să comparați două desene sau revizii |
| `LISPEDIT` | `VLIDE` | LISPEDIT (sau VLIDE) deschide editorul LISP: o fereastră pentru a scrie, încărca și încerca o rutină. Încărcare în desen citește fiecare formă, ca la încărcarea fișierului cu APPLOAD, și creează comenzile sale. Rulare selecție evaluează formele selectate sau forma în care se află cursorul. Consola arată ce a afișat rutina și fiecare eroare, cu rândul ei. Parantezele corespunzătoare sunt marcate pe măsură ce tastați, iar Enter indentează rândul nou. Nou, Deschidere și Salvare funcționează pe un fișier .lsp. Listele de lângă text arată funcțiile definite de rutină, cele pe care le apelează și pe care acest LISP nu le are încă și toate funcțiile pe care le are. Fereastra nu blochează desenul, deci o rutină poate cere puncte; Stop sau Esc oprește o rutină care rulează. |
| `LIST` | `LI`, `LS` | Descrie obiectele din istoric |
| `LTSCALE` | `LTS` | Scara tipurilor de linie ale desenului (fiecare liniuță și spațiu este înmulțit cu ea) |
| `LWDISPLAY` | `LWT` | Arată sau ascunde grosimile de linie pe ecran (butonul LWT din bara de stare) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Grosimea de linie pe care o primesc obiectele noi (după strat, după bloc, implicită sau mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Straturi de hartă sub spațiul model: sistemul de coordonate al desenului, plăci, WMS, WMTS, ArcGIS, imagini |
| `MASSPROP` |  | MASSPROP: proprietățile de secțiune ale regiunilor și obiectelor închise: arie, perimetru, centroid, momente și produs de inerție, raze de girație și axele principale. Exacte pentru linii și arce. Poate scrie raportul într-un fișier text. |
| `MATCHPROP` | `MA`, `PAINTER` | Potrivește proprietățile: copiază stratul, culoarea și altele ale unui obiect pe altele (MA) |
| `MEASURE` | `ME` | MEASURE (ME): un marcaj la fiecare lungime dată, de-a lungul unei linii, unui arc, unui cerc, unei polilinii, unei spline sau unei elipse, din capătul cel mai apropiat de punctul ales. Puncte sau, cu Bloc, un bloc la fiecare marcaj. |
| `MEASUREGEOM` | `MEA` | Măsoară o distanță, o rază, un unghi sau o arie (MEA) |
| `MINSERT` |  | MINSERT: plasează un bloc în rânduri și coloane dintr-o dată. Fiecare este propria referință, deci puteți muta sau șterge oricare dintre ele. |
| `MIRROR` | `MI` | Oglindește obiectele față de o linie (MI) |
| `MLEADER` | `MLD`, `MLEAD` | Linie de indicație multiplă: o săgeată, o linie de indicație și o notă, ca un singur obiect (MLD) |
| `MLEADERALIGN` | `MLA` | Aliniază liniile de indicație multiple cu una dintre ele pe o direcție, la distanțe egale sau distribuite între două puncte (MLA) |
| `MLEADERCOLLECT` | `MLC` | Adună mai multe linii de indicație multiple într-una: blocurile lor într-un rând sau o coloană, ori notele lor una sub alta (MLC) |
| `MLEADEREDIT` | `MLE` | Adaugă linii de indicație la o linie multiplă sau le elimină; schimbă conținutul între text și bloc (MLE) |
| `MLINE` |  | Desenează linii paralele împreună, unite în colțuri. |
| `MOVE` | `M` | Mută obiectele după un punct de bază și un al doilea punct |
| `MSPACE` | `MS` | Lucrează pe model printr-o fereastră de vizualizare a foii deschise (sau faceți dublu clic în interiorul ferestrei). |
| `MTEXT` | `MT`, `T` | Text de paragraf: trageți lățimea, apoi scrieți pe loc; Enter începe un paragraf nou (T) |
| `MVIEW` | `MV` | O fereastră de vizualizare pe model, pe o foaie (MV) |
| `NAMEDVIEW` | `NV`, `VIEWS` | Vederi numite: salvează vederea de pe ecran (sau o fereastră) sub un nume și reveniți la ea (NV) |
| `NCOPY` |  | Copiază obiecte dintr-o referință la bloc sau dintr-un desen legat în desen, fără a-l descompune. |
| `NEARBY` |  | Spune ce se află aproape de cursor, cel mai apropiat primul, cu distanța și partea. |
| `NEW` |  | Începe un desen nou |
| `OBJECTSCALE` | `OBJSCALE` | Scările de adnotare ale textului și cotelor adnotative: adaugă o scară, șterge una, adaugă scara curentă sau le listează (fiecare fereastră le arată la dimensiunea scării sale) |
| `OBJOUT` |  | Exportă modelul 3D ca OBJ |
| `OFFSET` | `O` | Copii paralele la o distanță (O) |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: cum închide OFFSET spațiile din colțurile exterioare ale unei polilinii. 0 prelungește segmentele, 1 adaugă un arc, 2 adaugă o tăietură dreaptă. Păstrat pentru această sesiune. |
| `OLELIST` | `OLES` | Listează obiectele OLE ale unui desen și pune o copie a imaginii unuia dintre ele acolo unde alegeți |
| `OPEN` |  | Deschide un fișier DWG sau DXF de pe acest computer |
| `OPENIN3D` |  | Deschide acest desen în aplicația de modelare 3D, într-o filă nouă (nimic nu este încărcat) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Deschide meniul agățării la obiect: alegeți care agățări sunt pornite. Și clic dreapta pe Agățare din bara de stare. |
| `OVERKILL` |  | Șterge obiectele duplicate și îmbină liniile și arcele care se suprapun sau sunt cap la cap, într-o toleranță. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Panoul Parametri: parametri utilizator și constrângeri dimensionale într-un singur tabel |
| `PARTSLIST` | `PLIST` | Un tabel cu lista pieselor pentru fiecare piesă standard și profil de oțel plasat din bibliotecă |
| `PASTEAREA` | `PAREA` | Lipește o zonă copiată în MarkupCraft (Copiere zonă) la dimensiunea ei reală, ca imagine. |
| `PASTEBLOCK` |  | PASTEBLOCK: lipește ce ați copiat ca un singur bloc. Blocul primește un nume propriu; RENAME îi dă un nume ales de dumneavoastră. |
| `PASTECLIP` |  | Lipește din clipboard: urmează cursorul, faceți clic unde trebuie să ajungă (Ctrl+V) |
| `PASTEORIG` |  | Lipește clipboardul la coordonatele de unde a fost copiat (Ctrl+Shift+V) |
| `PDF` |  | Dă CadCraft fișierele PDF pe care le folosesc subfondurile desenului |
| `PDFADJUST` |  | Estompează, schimbă contrastul, face monocrom sau oprește un subfond PDF |
| `PDFATTACH` | `PDFATT` | Atașează o pagină PDF ca subfond (PDFATTACH) |
| `PDFCLIP` |  | Decupează un subfond PDF într-un dreptunghi sau poligon |
| `PDFIMPORT` | `PDFIM` | Transformă liniile, umplerile și textul unei pagini PDF în obiecte ale desenului (PDFIMPORT) |
| `PDFLAYERS` |  | Pornește sau oprește straturile unui subfond PDF |
| `PEDIT` | `PE` | Editează o polilinie: închide, deschide, unește, lățime, curbă ajustată, curbă spline, decurbare, generarea tipului de linie, inversare; liniile, arcele și splinele pot fi transformate în polilinii |
| `PHOTOSKETCH` | `PSK` | Transformă o fotografie a unei schițe de mână pe hârtie în linii și arce la o scară, îndreptând perspectiva și dând fiecărei culori de pix propriul strat. |
| `PICKSTYLE` |  | PICKSTYLE: dacă selectarea unui obiect dintr-un grup selectează tot grupul (1, valoarea de pornire) sau doar acel obiect (0). Păstrat pentru această sesiune. |
| `PLAN` |  | Rotește vederea astfel încât axa X a SCU (SCU curent, un SCU salvat sau cel Global) să fie orizontală pe ecran. Nimic din desen nu se mută. |
| `PLINE` | `PL` | O polilinie din segmente de linie și arc (PL) |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Trasează în PDF: o foaie, sau modelul la o scară |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabele de stiluri de trasare: stabilesc cum se imprimă fiecare culoare (culoare, negru, gri, cerneală, grosime de linie); păstrate cu desenul (STYLESMANAGER) |
| `POINT` | `PO` | Obiecte punct |
| `POINTCLOUD` | `PC` | Norul de puncte atașat: felie, înălțime, grosime, culoare, mărime, vizibil, zoom, detașare |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Atașează un nor de puncte (LAS, LAZ, XYZ, PTS) sub desen |
| `POLARANG` |  | Pasul urmăririi polare în grade (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Un poligon regulat |
| `PRESSPULL` |  | Împinge sau trage o față a unui solid (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Deschide panoul Proprietăți (și Ctrl+1, sau dublu clic pe un obiect) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Pliază panoul Proprietăți la marginea ferestrei |
| `PSPACE` | `PS` | Părăsește fereastra de vizualizare în care lucrați și revine la foaie (sau faceți dublu clic în afara ei). |
| `PUBLISH` | `-PUBLISH` | Trasează mai multe sau toate foile într-un singur PDF (o pagină și un semn de carte pentru fiecare foaie) |
| `PURGE` | `PU` | Șterge definițiile de blocuri pe care nimic nu le folosește |
| `QDIM` |  | Cotă rapidă: cotează mai multe obiecte deodată (continuă, de bază, decalată, ordonată, rază sau diametru) |
| `QPMODE` | `QP` | Proprietăți rapide la cursor, pornit sau oprit (QP) |
| `QSELECT` | `QS` | Selectare rapidă: fiecare obiect de un tip al cărui strat, culoare, dimensiune sau nume se potrivește (QS) |
| `RASTERSNAP` |  | Pornește sau oprește agățarea de liniile foilor scanate. |
| `RAY` |  | Rază: o linie de construcție dintr-un punct, nelimitată pe o parte. |
| `RECOVER` |  | Deschide un DXF sau DWG deteriorat: sare peste ce nu poate fi citit în loc să refuze fișierul, spune ce a sărit, apoi verifică și repară desenul ca AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | O polilinie închisă din două colțuri |
| `REDLINE` | `RDL` | Redline în revizuire: citește un pachet de redline MarkupCraft, acceptă sau respinge fiecare modificare, încercuiește cu un nor de revizuire cele acceptate, cu un jurnal al reviziilor, și salvează fișierul de răspunsuri (RDL) |
| `REDO` |  | Refacere a ceea ce a fost anulat |
| `REFCLOSE` |  | Încheie editarea unui bloc pe loc: îl salvează sau renunță la modificări. |
| `REFEDIT` |  | Editează un bloc pe loc, acolo unde stă o referință la el, cu restul desenului estompat; REFCLOSE îl salvează |
| `REGEN` | `RE` | Reconstruiește ce este desenat în această filă din desen (RE) |
| `REGENALL` | `REA` | Reconstruiește ce este desenat în fiecare filă, panou și desen deschis (REA) |
| `REGION` | `REG` | REGION (REG): face zone plane (regiuni) din obiecte închise, sau din linii, arce și polilinii care închid o buclă cap la cap. UNION, SUBTRACT și INTERSECT combină apoi regiunile, iar MASSPROP dă proprietățile lor de secțiune. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Înregistrează mai multe scanări: le plasează într-un cadru prin perechi de puncte alese sau ținte, rafinează cu ICP, exportă un singur LAS sau E57 |
| `REINIT` |  | Reîncarcă fișierul de aliasuri |
| `RENAME` | `-RENAME`, `REN` | Redenumește un strat sau un bloc (fiecare obiect sau referință urmează) |
| `REVCLOUD` | `RC` | Nor de revizuire: încercuiește un dreptunghi, un poligon, un traseu de mână liberă sau un obiect (RC) |
| `REVOLVE` | `REV` | Rotește obiecte 2D închise în jurul unei axe, în solide (3D) (REV) |
| `ROTATE` | `RO` | Rotește obiectele în jurul unui punct de bază (RO) |
| `SAMPLES` | `SAMPLE` | Deschide unul dintre desenele exemplu ale CadCraft (un set arhitectural, un as-built) ca să învățați din ele |
| `SAVE` | `QSAVE` | Descarcă desenul în formatul său (DWG sau DXF) |
| `SAVEAS` |  | Descarcă desenul ca DWG sau DXF: alegeți care |
| `SAYSEL` |  | Spune ce este selectat, câte o propoziție pentru fiecare. |
| `SCALE` | `SC` | Scalează obiectele în jurul unui punct de bază (SC) |
| `SCALELISTEDIT` | `SCALELIST` | Adaugă, editează și șterge scările proprii ale desenului; apar în listele de scări ale ferestrelor de vizualizare și ale trasării și sunt salvate în fișier (SCALELIST) |
| `SCANALIGN` | `SCL` | Aliniază o foaie scanată la două puncte: mută, rotește și, dacă alegeți, scalează. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Inserează un desen scanat: un PNG, JPEG sau TIFF (o pagină sau toate paginile unui fișier cu mai multe pagini) sau o pagină PDF care este o imagine. |
| `SCANCLEAN` | `SCC` | Face o foaie scanată alb-negru și elimină petele. |
| `SCANCROP` | `SCR` | Decupează o foaie scanată într-o fereastră. |
| `SCANDESKEW` | `SCD` | Găsește unghiul la care stau liniile lungi ale unei foi scanate și rotește foaia până la dreapta, după ce acceptați unghiul. |
| `SCANERASE` | `SCE` | Șterge o zonă a unei foi scanate: un dreptunghi, un poligon sau un lasou. |
| `SCANINFO` | `SCI` | Arată fișierul original al unei foi scanate și pașii făcuți de atunci. |
| `SCANSCALE` | `SCS` | Scalează o foaie scanată: alegeți două puncte pe ea și tastați distanța reală dintre ele. |
| `SCANTRACE` | `SCT` | Trasează o foaie scanată în linii și arce, pe un strat nou, la o toleranță pe care o setați. Textul și hașurile rămân ca raster. |
| `SELECT` |  | Selectează obiecte acum (pentru P, Precedent, în următoarea comandă) |
| `SELECTALL` | `AI_SELALL` | Selectează fiecare obiect pe care îl puteți edita în această filă (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Selectează fiecare obiect ca cele alese: același tip, strat și culoare (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Arată panoul Set de planșe: planșe din mai multe desene, numerotate, trasate ca un singur PDF. |
| `SHORTCUTS` | `KEYS` | Dă oricărei comenzi o tastă proprie (Ctrl sau Alt cu o literă, sau o tastă funcțională liberă), păstrată în acest browser sau în aplicația desktop. |
| `SHXFONTS` | `SHX` | Dă CadCraft fonturi SHX dintr-un dosar sau din fișiere, ca stilurile de text care le numesc să deseneze cu ele (listare, eliminare, inversare) |
| `SKETCHFIX` | `SKF` | Desenează linii de mână liberă; fiecare devine o linie, un cerc, un arc, un dreptunghi sau o polilinie curată, aliniată și unită cu celelalte. |
| `SKETCHLIVE` | `SKL` | Schițează cu un pix: fiecare traseu devine o linie, un cerc, un arc sau un dreptunghi precis pe măsură ce ridicați pixul, agățat de desen, cu dimensiunea care se tastează peste el. |
| `SPLINE` | `SPL` | Desenează o spline prin puncte (sau cu un poligon de control), sau transformă o polilinie într-una (SPL) |
| `SPLINEDIT` | `SPE` | Editează o spline: puncte de ajustare, puncte de control și ponderi, deschide sau închide, inversează sau o convertește într-o polilinie (SPE) |
| `SPLIT` |  | Împarte zona de desen în panouri (ca VPORTS pe model; și de pe o foaie) |
| `STEELMEMBER` | `SMEMBER` | O bară de oțel în 3D dintr-un profil standard: două puncte (o grindă) sau un punct de bază și o înălțime (Stâlp (C)) |
| `STLOUT` |  | Exportă modelul 3D ca STL (milimetri) |
| `STRETCH` | `S` | Întindere: trageți o fereastră de intersecție peste capete ca să mutați; ce este înăuntru se mută, restul rămâne (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Stiluri de text: fontul, înălțimea, lățimea și înclinarea pe care le primește textul nou (caseta de dialog; -STYLE în linia de comandă) |
| `SUBTRACT` | `SU` | Scoate solide din altele (3D), sau regiuni 2D din regiuni (SU) |
| `SWBOUT` | `SWMACRO` | Descarcă o macro pentru SolidWorks (.swb) care reconstruiește modelul ca o singură schiță constrânsă |
| `SWEEP` |  | Baleiază obiecte 2D închise de-a lungul unui traseu (linie, polilinie, arc, cerc) în solide (3D) |
| `TABLE` | `TB` | Creează un tabel: rânduri și coloane, sau din celule de foaie de calcul din clipboard ori dintr-un fișier CSV (TB) |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Editează un tabel: scrie într-o celulă, inserează și șterge rânduri și coloane, dimensiuni, celule îmbinate, aliniere |
| `TABLEEXPORT` |  | Salvează ce arată un tabel ca fișier CSV |
| `TABLEPASTE` | `PASTETABLE` | Creează un tabel din celule de foaie de calcul din clipboard |
| `TABLESTYLE` | `TS` | Stiluri de tabel: înălțimi de text, aliniere, margini și chenare pentru rândurile de titlu, antet și date |
| `TAGS` |  | Etichete pe referințele la blocuri: definiți o etichetă (tip, valori permise, blocurile la care se aplică), o stabiliți pe referințele selectate și le listați ca un tabel pe care îl puteți salva ca CSV |
| `TEXT` | `DT`, `DTEXT` | Text pe o singură linie; Enter începe linia următoare |
| `TEXTEDIT` | `ED`, `DDEDIT` | Editează textul pe loc: alegeți un text (sau faceți dublu clic pe unul) (ED) |
| `TEXTMASK` | `TMASK` | Pune o mască de fundal în spatele textelor (fundalul desenului sau o culoare), sau o scoate. |
| `TEXTTOFRONT` |  | Aduce tot textul, cotele și liniile de indicație în fața tuturor celorlalte obiecte. |
| `TOOLBAR` |  | Alege ce arată butoanele barei de instrumente: pictograme și text, doar pictograme sau doar text (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Așază bara de instrumente sus, jos, în stânga sau în dreapta ferestrei |
| `TOOLBARROWS` |  | Alege câte rânduri folosește bara de instrumente: încadrare automată, 2 sau 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Face barele de deasupra desenului standard sau compacte |
| `TOUCHCROSSHAIR` | `TCX` | Cruce decalată pentru desenare cu degetul: un deget mută o cruce care stă deasupra și alături, ca degetul să nu acopere punctul ales. Ridicarea degetului nu alege nimic; butonul Clic sau o atingere cu al doilea deget alege la cruce, iar ținerea butonului Clic în timp ce mișcați trage. O apăsare lungă sau butonul Enter este Enter. Două degete deplasează și măresc. Opțiuni: ON, OFF, Automat (A) (pornit doar acolo unde degetul este singurul indicator), Distanță (D), Parte (S). |
| `TOUR` | `TUTORIAL` | Refă ghidul pas cu pas în șase pași pentru primul desen |
| `TRIM` | `TR` | Taie obiecte până unde le intersectează altele: faceți clic pe o bucată, trageți prin mai multe sau Shift+clic pentru a prelungi (TR) |
| `TRIMEXTENDMODE` |  | Cum pornesc TRIM și EXTEND: 1 Rapid (fiecare obiect este muchie de tăiere sau limită), 0 Standard (alegeți mai întâi muchiile) |
| `TTR` |  | Un cerc tangent la două obiecte, cu o rază pe care o dați (la fel ca CIRCLE T) |
| `TURNLEFT` |  | Rotește vederea 90° la stânga (în sens invers acelor de ceas): Z SCU -90, iar vederea urmează. Nimic din desen nu se mută. |
| `TURNRIGHT` |  | Rotește vederea 90° la dreapta (în sensul acelor de ceas): Z SCU 90, iar vederea urmează. Nimic din desen nu se mută. |
| `TURNWORLD` |  | Înapoi la lume: SCU Global, iar vederea este din nou orizontală. |
| `TXT2MTXT` | `T2M` | Unește texte pe o singură linie într-un text de paragraf, de sus în jos. |
| `UCS` |  | Propriul sistem de coordonate: o origine și o axă X (origine, unghi Z, 3 puncte, Obiect, Precedent, Global (W), Numit (N)). Punctele tastate, ortogonal, urmărirea polară, grila și textul nou îl urmează; vederea se rotește astfel încât axa X să fie orizontală. Nimic din desen nu se mută. |
| `UNDO` | `U` | Anulare a ultimei comenzi (U) |
| `UNGROUP` |  | UNGROUP: desface grupurile. Selectați obiecte din grupuri sau dați un Nume. Obiectele rămân în desen. |
| `UNION` | `UNI` | Unește solide într-unul (3D), sau regiuni 2D într-o singură regiune (UNI) |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Arată din nou fiecare obiect ascuns de ISOLATEOBJECTS sau HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Cum se afișează și se tastează lungimile: zecimal, ft și in, fracții (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Calculează din nou câmpurile și alege când se actualizează singure |
| `USDOUT` |  | Exportă modelul 3D ca USD (text .usda, binar .usdc sau un pachet .usdz) |
| `VIEW` | `-VIEW`, `V` | Vederi 3D standard, în perspectivă sau paralele (3D) |
| `VIEWBASE` | `FLATSHOT` | Plasează o vedere plană 2D a solidelor 3D (față, sus, lateral sau izometrică, cu liniile ascunse punctate) pe o foaie sau în model |
| `VIEWLABEL` | `VL` | Un titlu de vedere pe o foaie, care arată numele vederii ferestrei sale de vizualizare și se schimbă odată cu ea. |
| `VOICE` |  | Pornește sau oprește comenzile rostite. Sunt recunoscute pe acest computer. |
| `VPCLIP` |  | Decupează o fereastră de vizualizare de pe foaie într-un obiect închis sau un poligon desenat; Delete o face din nou dreptunghi |
| `VPLAYER` |  | Îngheață sau dezgheață straturi doar în unele ferestre de vizualizare (Îngheață, Dezgheață, Resetare) și alege ce straturi încep înghețate în ferestrele noi (Vpvisdflt) |
| `VPORTS` | `VIEWPORTS` | Împarte zona de desen în panouri, fiecare cu propria vedere (pe o foaie: o fereastră de vizualizare, ca MVIEW) |
| `VPVIEW` |  | Stabilește ce arată o fereastră de vizualizare: alegeți o fereastră pe model |
| `VSCURRENT` | `VS`, `SHADEMODE` | Stilul vizual al vederii 3D: umbrit, muchii, linie ascunsă, cadru de sârmă, raze X |
| `WALL` | `WA` | Desenează pereți 2D ca o polilinie. Se unesc și poartă uși și ferestre. |
| `WALLARC` | `WARC` | Desenează un arc de pereți. Pereții de plan sunt drepți, deci arcul este desenat ca pereți drepți scurți (15 grade fiecare), care se unesc. |
| `WALLDELSEG` |  | Șterge o bucată dintr-un perete între două puncte. Ce rămâne rămâne ca unul sau doi pereți. |
| `WALLDIM` |  | Tastați o valoare nouă pentru o cotă: peretele de la capătul său îndepărtat se mută perpendicular pe sine, peretele de la primul capăt rămâne, iar pereții uniți cu el urmează. |
| `WALLDISJOIN` |  | Alegeți un perete aproape de un capăt ca să nu mai permiteți uniri la acel capăt: capătul este desenat drept și nimic nu îl urmează. Alegeți-l din nou ca să permiteți uniri. |
| `WALLGRID` |  | Blochează un perete pe o linie de axă: de-a lungul ei sau un capăt pe ea. Mutați linia cu GRIDMOVE și peretele urmează. |
| `WALLHOLD` |  | Aliniază și blochează: un perete își păstrează locul față de alt perete (pe linia lui, sau la distanța pe care o are). Dacă unul se mută, celălalt urmează. |
| `WALLHOLDDIM` |  | Blochează distanța dintre doi pereți paraleli. Dacă unul se mută, celălalt urmează ca s-o păstreze. |
| `WALLHOLDS` |  | Listează blocajele pereților. |
| `WALLJOINS` |  | Dă fiecărui perete al unui desen mai vechi identificatorul și stochează uniările dintre ei. Se întâmplă și la prima modificare pe care o faceți. |
| `WALLJOINSTYLE` |  | Faceți clic pe un colț unde doi pereți se întâlnesc cap la cap, ca să schimbați cum este desenat: tăiere la 45°, cap la cap sau tăiere dreaptă. T schimbă peretele care trece prin colț. |
| `WALLOFFSET` | `WO` | Mută un perete perpendicular pe sine cu o distanță (pereții uniți cu el urmează) sau face o copie la acea distanță (WO). |
| `WALLPICK` |  | Face pereți pe o linie sau polilinie din desen, cu liniile unite de ea dacă spuneți Da. |
| `WALLPOLY` | `WP` | Desenează pereți în jurul unui poligon regulat cu 3 până la 64 de laturi, ca POLYGON (WP). |
| `WALLRECT` | `WR` | Desenează patru pereți uniți din două colțuri opuse, ca RECTANG (WR). |
| `WALLREJOIN` |  | Face din nou un perete două părți ale unui perete. Prima își păstrează locul în desen. |
| `WALLROT` |  | Desenează patru pereți uniți ca un dreptunghi rotit la orice unghi: prima latură, apoi cât de departe. |
| `WALLSPLIT` | `WS` | Împarte un perete în două, la un punct sau acolo unde trece alt perete. Părțile rămân unite, dacă nu cereți un gol sau capete libere. Uși și ferestre merg cu partea lor (WS). |
| `WALLSPLITGAP` |  | Împarte un perete lăsând un gol: tastați golul, alegeți peretele, apoi punctul. Părțile păstrează capete libere și pot fi unite din nou. |
| `WALLSTRETCH` |  | Întindere cu o fereastră: capetele de pereți din ea se mută, pereții complet în interior se mută întregi, iar pereții care se întâlnesc cu laturile lor alunecă odată cu ele. |
| `WALLTAN` |  | Continuă un perete cu un arc care pleacă din el de-a lungul peretelui (desenat ca pereți drepți scurți). |
| `WALLTRACE` |  | Face pereți în jurul celei mai mici zone închise de linii și pereți din jurul punctului pe care faceți clic. |
| `WALLUNHOLD` |  | Scoate blocajele de pe un perete (și blocajele altor pereți față de el). |
| `WBLOCK` | `W`, `-WBLOCK` | Scrie un bloc, câteva obiecte sau întregul desen într-un fișier DWG sau DXF nou (W) |
| `WEDGE` | `WE` | O pană: două colțuri și o înălțime; se înclină departe de primul colț (3D) |
| `WHEREAMI` | `WHERE` | Spune unde este cursorul. |
| `WHOHAS` |  | Spune cine are un desen deschis. CadCraft Studio păstrează un mic fișier de blocare lângă fiecare desen deschis (Plan.dwg.cclock: cine, din ce moment, ce versiune) și îl șterge la închidere. Opțiuni: Curent (C) (desenul deschis), Fișier (F) (alegeți unul), Dosar (F) (fiecare desen dintr-un dosar care este deschis undeva; asta îi permite și lui Studio să păstreze fișiere de blocare în acel dosar), Cale (P) (tastați una), Nume (N) (numele pe care îl văd ceilalți). O blocare nereîmprospătată timp de cinci minute este considerată învechită. Nu este disponibilă într-un browser. |
| `WINDOW` | `WN` | Pune o fereastră într-un perete. |
| `XATTACH` | `XA` | Leagă alt DWG sau DXF în acest desen, afișat doar pentru citire (XREF le listează și le reîncarcă) |
| `XCLIP` | `XC` | Decupează referințele la blocuri și desenele legate într-un dreptunghi sau poligon, sau elimină decuparea. |
| `XLINE` | `XL` | Linie de construcție, nelimitată în ambele părți: prin două puncte, orizontală, verticală, la un unghi, bisectoare a unui unghi sau decalată față de o linie. |
| `XREF` | `XR`, `-XREF` | Referințe externe (Xref): listare, atașare, reîncărcare, legare, detașare |
| `ZOOM` | `Z` | Extinderi, sau o fereastră (Z) |
