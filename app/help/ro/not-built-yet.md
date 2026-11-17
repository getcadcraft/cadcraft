---
title: Încă nerealizat
summary: Ce nu face încă această versiune a aplicației de desen CadCraft și ce să faceți în schimb, astăzi.
keywords: lipsă, limitări, ctb, stb, stil de trasare, proprietăți, ucs, adnotativ, bloc dinamic, spline, plan de dezvoltare, nesuportat, salvare dwg, hașură, întindere, matrice, unire, matchprop, rupere, alungire, tip de linie, grosime de linie, xref, nor, 3d, solide, booleene, linie de indicație multiplă, mascare
from: 87e56521
---

CadCraft este în dezvoltare. Această pagină listează ce nu face versiunea actuală, ca să nu le mai căutați. Fiecare punct spune ce să faceți în schimb, astăzi.

## Fișiere și salvare

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Un fișier DWG CadCraft verificat în AutoCAD însuși | Fiecare versiune salvată este citită înapoi de trei alte programe cu cititoare DWG și de CadCraft. Vezi [Ce păstrează și ce modifică un DWG](topic:files#what-a-dwg-keeps-and-changes). |
| Salvarea DXF mai nou decât 2000 | Salvați ca DXF 2000, sau ca DWG până la AutoCAD 2018. |
| Salvarea peste fișierul deschis în browser | Fiecare salvare descarcă o copie nouă; înlocuiți singuri fișierul vechi, dacă doriți. În CadCraft Studio, {{key:Mod+S}} scrie înapoi în fișierul deschis. |
| Salvare în cloud și sincronizare între calculatoare | CadCraft nu trimite încă salvările în cloud: păstrați fișierele DWG și DXF în propriile dosare. În CadCraft Studio, [Istoric](topic:history) listează versiunile din cloud ale unui desen salvat din altă parte și copiile salvărilor proprii de pe acest calculator. |
| Suprapuneri și editarea unui desen legat direct în desen | Atașați desenul ca legătură și reîncărcați-l după ce modificați celălalt desen. O legătură rămâne legătură la salvarea ca DWG, iar {{cmd:XCLIP}} o decupează. |
| Imagini în DXF; mascări care ascund ce se află sub ele | DXF păstrează o imagine ca cadrul ei, cu numele fișierului; DWG o păstrează ca imagine — vezi [Imagini într-un desen](topic:pictures). O mascare apare ca cadrul ei. |
| Editarea liniilor de indicație multiple cu linii curbe, cu linii de indicație pe ambele părți ale conținutului sau cu un bloc rotit ori scalat neuniform | Sunt desenate cum le-a desenat celălalt program și se mută ca un tot. Liniile de indicație multiple cu linii drepte către un singur punct de sosire, și cu text sau bloc ca și conținut, vin editabile ({{cmd:MLEADEREDIT}}). |
| În tabele din alte programe: o celulă care conține un bloc, formatarea textului în celulă, bordurile și culorile pe celulă ale tabelului unui DXF, un tabel împărțit în coloane | Tabelul se deschide ca tabel editabil ({{cmd:TABLEDIT}}) și este afișat cum l-a desenat celălalt program până la editare; apoi CadCraft îl redesenează din celulele lui: text simplu, formule precum `=G3*H3` și `=Sum(I3:I9)`, alinierea și înălțimile textului. O celulă cu bloc rămâne goală. Un tabel DWG nemodificat se salvează înapoi cu datele celulelor cu care a venit. |
| Un obiect tabel real într-un DXF salvat | Un DWG păstrează un tabel ca tabel pe care alte programe îl pot edita. Un DXF îl păstrează ca blocul care îl desenează, cu propria evidență a CadCraft: CadCraft îl deschide din nou ca tabel; alte programe văd un bloc. Un tabel oglindit sau scalat neuniform se salvează astfel și într-un DWG. |
| Copiere și lipire cu alte programe | Clipboard-ul CadCraft funcționează între desenele și filele CadCraft din același browser, nu cu alte programe. Salvați ca DWG sau DXF și deschideți-l acolo. Vezi [Copiere, lipire și duplicare](topic:copy-paste). |

## Desenare și editare

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Modele de hașură pe care CadCraft nu le are și umpleri cu gradient exact cum le pictează alte programe | Hașurile deschise cu modele pe care CadCraft nu le are apar ca un ton. O umplere cu gradient ({{cmd:GRADIENT}}) este pictată în felul propriu al CadCraft pentru fiecare tip: asemănătoare în esență cu cea a altor programe, nu punct cu punct. DWG 2004 și mai nou o păstrează ca hașură cu gradient reală; într-un fișier DXF 2000 sau DWG 2000 o citește înapoi doar CadCraft, iar alte programe văd o umplere plină. Modelele se încarcă dintr-un fișier `.pat`, iar o hașură poate fi legată de conturul ei și îl urmează: vezi [Hașură și suprafețe de umplere](topic:hatch). |
| Tipuri de linii cu forme sau text în ele și grosimi de linie într-un DXF R12 salvat | Formele și textul din tipul de linie al unui fișier sunt lăsate din liniuțele lui; salvați ca DWG pentru a păstra grosimile de linie. |
| Hașuri cu model într-un DXF salvat | R12 nu are hașură: sunt salvate ca simple contururi. Salvați ca DWG pentru a păstra modelul. |
| Matrice făcute de alt program sau care pot fi editate de acesta; rânduri și niveluri în matricele pe traseu și polare; o matrice care urmează curba traseului ei | O matrice făcută ASsociativ ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; modificată cu {{cmd:ARRAYEDIT}}) este salvată ca referință de bloc, cu propriile numere ale CadCraft: alte programe o arată, o mută, o trasează și o descompun, dar nu îi pot schimba numărul de elemente, iar o matrice făcută în alt program se deschide aici ca simplă referință de bloc. O matrice pe traseu păstrează o copie a traseului: modificarea ulterioară a curbei nu mută elementele. |
| Ferestre de vizualizare de foaie decupate, către și dinspre alte programe | O fereastră de vizualizare decupată cu {{cmd:VPCLIP}} sau făcută cu {{cmd:MVIEW}} Polygonal sau Object este salvată cu conturul propriu al CadCraft: alte programe o deschid ca dreptunghiul din jurul ei, iar una decupată în alt program se deschide aici ca dreptunghi. DXF R12 păstrează doar dreptunghiul. |
| {{cmd:STRETCH}} cu un poligon de intersectare | Folosiți una sau mai multe ferestre de intersectare. |
| {{cmd:PEDIT}} Editare vârf (un vârf pe rând din linia de comandă) | Mânere și navigatorul de vârfuri din {{ui:Proprietăți}} (fiecare vârf, lățimile și bombarea lui). Restul PEDIT este realizat: vezi [Spline-uri și polilinii](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} și {{cmd:JOIN}} pe elipse și spline-uri | {{cmd:EXPLODE}} un spline (sau {{cmd:PEDIT}} pe el), ca să obțineți o polilinie pe care aceste comenzi o pot folosi. |
| Racordare și șanfren între un segment de arc al unei polilinii și segmentul de lângă el; racordare care unește o linie într-o polilinie | {{cmd:EXPLODE}} polilinia, apoi racordați piesele. Arcul de racordare se adaugă ca obiect propriu. |
| Trim și extend: opțiunea Project (3D) și prelungirea capătului de arc al unei polilinii | Tăiați în planul desenului; pentru un capăt de arc, descompuneți polilinia sau desenați din nou arcul. |
| Obiecte OLE: inserarea, rularea sau editarea lor; afișarea celor dintr-un DWG unde le pune fișierul; imagini metafișier | Vezi [Imagini](topic:pictures#objects-from-other-programs-ole). Obiectele unui DXF se afișează ca bitmapul lor sau ca un cadru etichetat; cele dintr-un DWG sunt păstrate, nu desenate pe loc ({{cmd:OLELIST}} le listează și plasează o copie a unei imagini unde spuneți). |
| Scrierea codurilor de formatare (aldine, fracții suprapuse, culori pe cuvânt) în textul de paragraf; fonturi în afara fontului unic de tip Helvetica; coloane | Formatarea venită într-un fișier este păstrată, desenată și salvată (vezi Text); textul nou de paragraf are o singură înălțime și o singură culoare. |
| Text de paragraf editat la rotația lui | Editorul se deschide drept; textul își păstrează rotația. |
| Linii de indicație multiple salvate ca obiecte multileader într-un DXF | Un DWG le păstrează ca linii de indicație multiple, cu fiecare linie de indicație și un bloc ca și conținut; un DXF păstrează ce desenează ele (linii, vârfuri de săgeată și textul sau blocul). |
| În tabele ({{cmd:TABLE}}): text care se rupe pe mai multe rânduri într-o celulă, tabele care se rup în părți, stilul de text propriu al unui stil de tabel și culori pe fiecare tip de rând într-o casetă de dialog, o legătură de date către un fișier de foaie de calcul (`.xlsx`) sau una care citește singură fișierul | Textul unei celule se rupe doar unde îl rupeți ({{key:Alt+Enter}}); lărgiți coloana. {{cmd:DATALINK}} citește un fișier `.csv`, iar {{cmd:DATALINKUPDATE}} vă cere să alegeți din nou fișierul. {{cmd:DATAEXTRACTION}} și {{cmd:COUNTTABLE}} fac un tabel care nu urmează singur desenul: rulați-le din nou (o numărătoare vie: {{cmd:BOMTABLE}}). |
| Definiții de atribute păstrate separat într-un fișier salvat (în afara unui bloc), atribute pe mai multe rânduri | Puneți definițiile de atribute într-un bloc înainte de salvare: singure se salvează ca text care arată eticheta. |
| Stări de straturi (salvarea și restaurarea straturilor pornite) | Folosiți {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, sau porniți și opriți straturile manual. |
| Selecție cu poligon de fereastră și cu poligon de intersectare, și filtre de selecție salvate | Gard (`F`), Fereastră, Intersectare, Eliminare (`R`), {{cmd:QSELECT}} pentru o regulă. |

## Panoul Proprietăți

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Desenarea opțiunilor de potrivire și poziția orizontală a textului, precum și textul sub linie la cote altele decât cele liniare și aliniate | Sunt păstrate pe obiect, afișate în {{ui:Proprietăți}} și salvate; CadCraft plasează textul după regula proprie. |
| Materiale pe care le văd alte programe | Un fișier salvat păstrează numele materialului pentru CadCraft; alte programe arată materialul stratului. |
| Transparența în fișierele DWG 2000 și DXF | Alte programe arată acele obiecte pline; CadCraft păstrează transparența. Salvați ca DWG 2004 sau mai nou, pentru toți. |
| O legătură de hașură făcută într-un alt program | CadCraft își salvează propria legătură în fișierele DWG și DXF 2000; legăturile făcute în alte programe nu se citesc. Folosiți `HATCHEDIT` și Legătură: vezi [Hașură și suprafețe de umplere](topic:hatch). |
| Coordonatele din {{ui:Proprietăți}} în SCU | {{ui:Proprietăți}} arată coordonatele globale (SCG); bara de stare și {{cmd:ID}} arată cele din SCU. Vezi [Rotiți vederea și folosiți propriile coordonate](topic:ucs-and-turned-view). |
| O poziție separată pentru un obiect adnotativ la fiecare scară a lui; citirea înregistrărilor pe scară pe care le țin alte programe | Un text sau o cotă adnotativă păstrează o listă de scări ({{cmd:OBJECTSCALE}}), iar fiecare fereastră de vizualizare îl arată la dimensiunea pentru scara ei, în același loc. Lista este salvată ca date proprii ale CadCraft: alt program vede obiectul la singura scară pentru care este dimensionat, iar o listă făcută în alt program nu se citește. Vezi [Unități, foi și scări](topic:units-papers-scales#annotate-by-scale). |
| Modificarea distanțelor, unghiurilor sau oglindirilor unui bloc dinamic; blocuri dinamice care rămân dinamice când salvați într-o altă versiune DWG sau ca DXF | Schimbați starea de vizibilitate în {{ui:Proprietăți}} › {{ui:Personalizat}}; celelalte valori apar acolo doar pentru citire. Blocul rămâne dinamic când îl salvați ca DWG în versiunea în care a venit desenul. Vezi [Blocuri dinamice](topic:dynamic-blocks). |
| Toleranța de potrivire a spline-ului, grad de spline 6 și peste, spline-uri 3D | Punctele de potrivire și de control, gradele 1 până la 5 și greutățile sunt realizate: vezi [Spline-uri și polilinii](topic:splines). Înălțimea (Z) a unui spline nu se păstrează. |

## Ajutoare de precizie

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Urmărire din puncte peste comenzi și caseta de setări a urmăririi (unghiuri polare relative, unghiuri suplimentare) | {{cmd:POLARANG}} stabilește pasul; achiziționați din nou punctele în comanda următoare. |
| Agățare de grilă | Introduceți coordonate; grila este doar un ghid vizual. |
| Opțiunile Arc și Lungime la alegerea colțurilor unei suprafețe, și MEASUREGEOM Volume | Desenați conturul cu {{cmd:PLINE}} (arcele incluse), apoi {{cmd:AREA}} `O`. |
| Introducere dinamică pentru mânere și lista ei de opțiuni (săgeata în jos) | Linia de comandă arată opțiunile. |
| Unghiuri în grade-minute-secunde, grade sau orientări de topograf | Introduceți grade zecimale: `30.5` pentru 30°30'. |
| O casetă de gestionare a vederilor; vederi numite ale unei foi care revin pe aceeași foaie | {{cmd:NAMEDVIEW}} listează și restaurează vederile. Un fișier salvat le păstrează, dar vederile unei foi revin pe prima foaie. |

## Foi, cote și trasare

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Câmpuri pentru scara unei ferestre de vizualizare, pentru un obiect numit precum un strat sau un bloc, pentru o hiperlegătură și pentru câmpuri de set de planșe dincolo de numărul și numele foii; câmpuri scrise ca obiecte câmp pe care le actualizează alte programe | {{cmd:FIELD}} are data, numele fișierului, numărul, numele și numărul foii, proprietățile desenului ({{cmd:DWGPROPS}}), aria, lungimea și alte proprietăți ale unui obiect și formule, în text, atribute și celule de tabel. Un alt program arată un câmp CadCraft ca textul pe care l-a citit ultima oară; CadCraft citește câmpurile de dată, de nume de fișier, de proprietate, de foaie și de expresie ale altui program și lasă celelalte tipuri ca text. Scara unei ferestre de vizualizare se scrie manual. |
| Salvarea stilului de cotare curent; text de cotă tras într-un loc liber | Un desen se deschide cu Standard curent. Textul stă pe linia de cotă (DIMTEDIT Left / Right / Center). Vezi [Setarea dimensiunilor de cotare](topic:dimension-settings). |
| Cote unghiulare editabile pe două rânduri, din fișiere deschise pe care CadCraft nu le poate deduce | Sunt arătate cum sunt desenate în fișier. Cotele de ordonată, de lungime de arc și de rază frântă se deschid ca cote pe care le puteți edita. |
| Verificarea lectorului CTB pe un fișier de la alt program (este realizat, după descrierea publicată), stiluri de trasare cu nume (STB), tramare, numere de stilou, nuanțe de gri dintr-un CTB și ajustarea adaptivă a tipului de linie într-un stil de trasare | Faceți tabelul în {{ui:Tabele de stiluri de trasare}} (culoare, gri, cerneală, grosime de linie, tip de linie, capătul și îmbinarea liniei și stilul de umplere pe culoare): vezi [Tabele de stiluri de trasare](topic:plot-pdf#plot-style-tables). |
| Configurări de pagină | Alegeți hârtia, scara și stilul de trasare în caseta {{ui:Trasare în PDF}}; o foaie își păstrează stilul de trasare. |
| Hindi și alte scripturi care cer forme complexe în PDF-uri, și ideograme rare (tipăriri europene, chirilice, grecești, ebraice, arabe, persane, urdu, thai, chinezești, japoneze și coreene) | Se tipăresc ca „?”. |
| Text arab și chinezesc, japonez sau coreean în același PDF trasat | O trasare poartă un singur font: una dintre cele două scripturi se tipărește ca „?”. |
| Marcaje explicite de direcție în text (încorporări, suprascrieri, izolări) | Sunt ignorate: fiecare rând este ordonat după literele lui singure. |
| Imagini în interiorul unei pagini PDF atașate, la trasare | Liniile, umplerile și textul paginii se tipăresc. O pagină care este doar o imagine intră cu {{cmd:SCANATTACH}}, iar imaginile se tipăresc. Vezi [Suprapuneri PDF](topic:pdf-underlay#plot-and-save). |
| Trimiterea unei lucrări către un laser din CadCraft Studio (Studio nu are Web Serial) | Salvați codul G și trimiteți-l cu programul propriu al laserului, sau trimiteți-l din Chrome sau Edge. Vezi [Trimiteți un desen către un laser](topic:laser-cutting#send-from-the-browser). |

## Constrângeri și parametri

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Constrângeri pe foi, în blocuri, pe elipse, spline-uri sau text | Constrângeți în fila {{ui:Model}}, pe linii, polilinii, cercuri, arce și puncte. |
| Netedă (G2), și constrângerea directă a bombării arcului unei polilinii | Tangentă și egală; un segment de arc urmează cele două capete ale lui. |
| Constrângeri dimensionale de referință (conduse) și `3Point` în {{cmd:DCANGULAR}} | O cotă simplă (DIMLINEAR …) arată o valoare fără să o comande. |
| Constrângeri dimensionale de dimensiune fixă pe hârtie, și trasarea lor | Se arată doar pe ecran; adăugați cote simple pentru trasare. |
| Constrângeri păstrate prin EXPLODE, BREAK, JOIN și alte comenzi care fac obiecte noi, și pe polilinii tăiate | Constrângeți-le din nou (AUTOCONSTRAIN ajută). {{cmd:MIRROR}} și {{cmd:TRIM}} ale liniilor, arcelor și cercurilor le păstrează. |
| Tabele de proiectare (configurații) în CadCraft | Schimbați parametrii în panou. |
| Un test complet de ciclu cu SolidWorks | Verificați schița pe care o construiește macroul înainte să vă bazați pe ea. |

## 3D

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Racordări, șanfrene, cochilii și lofturi; baleieri de-a lungul unui traseu care urcă (trasee 3D) | Extrudați contururi cu arce, împingeți și trageți fețe, rotiți și baleiați de-a lungul traseelor plane. |
| Extrudare pe altă direcție decât în sus | Desenați forma pe sol și extrudați-o în sus sau în jos (cu înclinare sau de-a lungul unui traseu, dacă doriți); rotiți solidul după aceea. |
| Cota și grosimea obiectelor 2D | Desenul stă pe sol (înălțime 0) în fila 3D. |
| Editarea solidelor, regiunilor și corpurilor din alte programe; afișarea celor din blocuri; fețele lor pe suprafețe baleiate, lofturi sau alte suprafețe libere; plase poliface și poligonale | Solidele din spațiul modelului se arată în fila 3D așa cum sunt și se salvează înapoi neschimbate în DWG; ce nu se desenează este listat când se deschide fila 3D. Cereți plasele ca fețe 3D în spațiul modelului. Vezi [Solide din alte programe](topic:3d-solids#solids-from-other-programs). |
| Copiere și lipire de solide | În fila 3D, folosiți {{cmd:COPY}}. Clipboard-ul ține doar obiecte 2D. |
| Secțiuni, vederi care urmează modificările ulterioare ale solidelor, și solide umbrite pe foile trasate | {{cmd:VIEWBASE}} plasează vederi plate (o instantanee); rulați-l din nou după modificarea solidelor. |
| Materiale, texturi și setări de iluminare | Stilurile vizuale: umbrit, margini, linie ascunsă, cadru de sârmă, raze X. |
| Straturi de hartă trasate, pe ferestrele de vizualizare ale foilor și în fila 3D; imagini din fișiere salvate cu desenul; locația desenului scrisă pentru alte programe în DWG 2000–2007 și DXF R12 | Straturile de hartă se arată sub spațiul modelului pe ecran; sistemul și lista straturilor se salvează cu desenul: vezi [Straturi de hartă sub desen](topic:map-layers). |
| Scanări E57 cu peste 6 milioane de puncte sau 512 MB, fișierele proprii ale producătorilor de scanere (RCP, RCS, FLS, LGS, TZF, ZFS), un nor de puncte salvat cu desenul sau trasat, ancorarea de nor în fila 3D, felii verticale (secțiune) în fila Model | Exportați scanările mari sau ale producătorilor ca LAS sau LAZ ([Formate de nor de puncte](topic:point-cloud-formats)); atașați norul de fiecare dată când deschideți desenul; trasați dintr-o felie în plan în fila Model: vezi [Trasați linii așa cum a fost construit peste un nor de puncte](topic:point-clouds). |
| Înregistrarea scanărilor: găsirea țintelor (sfere, tablouri de șah) într-o scanare, de la sine; rezolvarea tuturor scanărilor împreună (ajustare de pachet); scară; înregistrarea față de un model | Alegeți puncte corespondente sau introduceți coordonatele țintelor, apoi rafinați câte o scanare cu ICP: vezi [Înregistrați mai multe scanări într-una](topic:register-scans). |

## Rutine și personalizare

| Încă nerealizat | În schimb, astăzi |
|---|---|
| LISP compilat sau protejat (.fas, .vlx), programe native (.arx, .crx, .dbx) și VBA (.dvb) | Încărcați sursa .lsp a unei rutine cu {{cmd:APPLOAD}}. |
| `grread` din LISP, reactori (`vlr-…`), funcții de curbe (`vlax-curve-…`), dicționare și date extinse, `acet-…` din Express Tools | Restul limbajului rulează: vezi [Rulați rutine LISP](topic:run-lisp). Linia de comandă numește o funcție lipsă când o rutină ajunge la ea. |
| Imagini și diapozitive în caseta de dialog a unei rutine | Apar ca cadre goale; restul casetei de dialog funcționează. |
| CraftScript (.craft), Lua și Python în CadCraft | Rulați-le în spațiul de lucru Script din PartCraft. |
| Liste de straturi, culori și tipuri de linie în stilurile de meniu din panglică | Folosiți panoul {{ui:Straturi}} și {{ui:Proprietăți}}. |
| Suita de pornire și aliasurile păstrate pe calculatorul dvs. sau sincronizate | Sunt păstrate în acest browser; aplicația desktop și serviciul din cloud le vor păstra pentru dvs. În Studio, `acad.lsp` și `acaddoc.lsp` se citesc dintr-un dosar de suport pe care îl alegeți (Încărcare aplicații). |

## Ajutor

Ajutorul descrie această versiune. Când ceva se adaugă, trece din această pagină în ghiduri.
