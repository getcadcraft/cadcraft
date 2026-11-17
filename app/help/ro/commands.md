---
title: Referință comenzi
summary: Fiecare comandă din aplicația de desen CadCraft, cu aliasurile ei, întrebările pe care le pune, opțiunile și valorile implicite.
keywords: comenzi, aliasuri, listă de comenzi, arie, perimetru, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 7db2646b
---

Tastați numele unei comenzi sau un alias și apăsați {{key:Enter}} sau {{key:Space}}. Nu contează majusculele, iar un `_`, `-`, `.` sau `'` de la început este ignorat. Tastați `HELP` (sau `?`) ca să afișați în istoricul liniei de comandă o listă scurtă cu fiecare comandă; apăsați {{key:F1}} pentru acest ajutor.

Cum se citesc solicitările: opțiunile sunt între paranteze drepte, iar una o alegeți tastând literele ei mari (`D` pentru Diametru). Un implicit este între paranteze unghiulare; apăsați {{key:Enter}} ca să-l acceptați. Acolo unde se cere un punct, puteți da clic sau puteți tasta oricare dintre formatele din [Introducerea coordonatelor și a distanțelor](topic:coordinate-entry). Acolo unde se cere o distanță, puteți tasta un număr sau puteți da clic pe două puncte.

Apăsarea {{key:Enter}} acolo unde se cere un punct sau un obiect, și nu există implicit, încheie comanda. {{key:Esc}} o anulează. Orice a făcut o comandă este un singur pas de anulare.

## {{ui:Desen}}

### LINE

Aliasuri: `L`. Segmente drepte, fiecare obiect propriu.

- `Specificați primul punct` (Enter: pornește de la ultimul punct dat)
- `Specificați următorul punct [Anulare (U)]`, repetat. După două segmente: `[Anulare (U)/Închidere (C)]`.
- `U` ia înapoi ultimul segment, `C` închide până la primul punct și încheie. Enter încheie.

### PLINE

Aliasuri: `PL`. O polilinie din segmente de linie și de arc.

- `Specificați punctul de start`
- `Specificați următorul punct [Arc/Închidere (C)/Anulare (U)]` (Închidere, odată ce există două segmente)
- `A` trece la arce: `Specificați punctul final al arcului [Linie/Închidere (C)/Anulare (U)]`. Fiecare arc continuă tangent la segmentul dinainte. `L` revine la linii, `CL` închide cu un arc.
- Enter încheie; polilinia rămâne deschisă.

### CIRCLE

Aliasuri: `C`.

- `Specificați punctul central al cercului [3P/2P/Ttr (tangentă tangentă rază)]`
- `Specificați raza cercului [Diametru] <ultima rază>`; `D` cere `Specificați diametrul cercului`.
- `2P`: cele două capete ale unui diametru. `3P`: trei puncte pe cerc.
- `T` (sau comanda `TTR`, și {{ui:Desen}} › {{ui:Mai multe}} › {{ui:Cerc: Tangentă, Tangentă, Rază}}): `Specificați punctul de pe obiect pentru prima tangentă a cercului`, apoi a doua, apoi raza (Enter: ultima). Cercul atinge ambele obiecte (linii, arce, cercuri, segmente de polilinie, de asemenea în interiorul blocurilor); dintre cercurile care le ating, este cel care atinge cel mai apropiat de punctele alese. „Cercul nu există” când niciunul nu se potrivește.
- `TTT` (sau {{ui:Desen}} › {{ui:Mai multe}} › {{ui:Cerc: Tangentă, Tangentă, Tangentă}}): trei obiecte; cercul care atinge toate trei, cel mai apropiat de punctele alese (trei linii dau cercul interior sau unul exterior, după locul în care dați clic).

### ARC

Aliasuri: `A`.

- `Specificați punctul de start al arcului [Centru]`, `Specificați al doilea punct al arcului`, `Specificați punctul final al arcului`: un arc prin trei puncte.
- `C`: `Specificați punctul central al arcului`, `Specificați punctul de start al arcului`, `Specificați punctul final al arcului`. Arcul merge în sens invers acelor de ceasornic, de la început la sfârșit.

### RECTANG

Aliasuri: `REC`, `RECTANGLE`. O polilinie închisă.

- `Specificați primul colț`, `Specificați celălalt colț`. Tastați `@lățime,înălțime` pentru al doilea colț.

### POLYGON

Aliasuri: `POL`. Un poligon regulat, ca o polilinie închisă.

- `Introduceți numărul de laturi <4>` (3 până la 1024)
- `Specificați centrul poligonului`
- `Introduceți o opțiune [Înscris în cerc (I)/Circumscris cercului (C)] <I>`
- `Specificați raza cercului`: dați clic sau tastați un punct; distanța lui stabilește mărimea, iar direcția lui rotește poligonul.

### ELLIPSE

Aliasuri: `EL`.

- `Specificați capătul axei elipsei [Centru]`, `Specificați celălalt capăt al axei`, `Specificați distanța până la cealaltă axă`
- `C`: `Specificați centrul elipsei`, `Specificați capătul axei`, apoi distanța până la cealaltă axă.
- `I` (`Izocerc`, doar cât timp {{cmd:ISODRAFT}} este pornită): centru, apoi rază sau `Diametru`: elipsa pe care o arată un cerc pe planul izometric curent.

### HATCH

Aliasuri: `H`, `BH`, `BHATCH`; sau {{ui:Hașură}} în bara de instrumente. Afișează mai întâi modelul, scara și unghiul curente.

- `Alegeți un punct interior [Selectare obiecte/Model (M)/Scară (S)/Unghi (U)]`, repetat (`Anulare (U)` odată ce există o arie): fiecare clic adaugă aria închisă din jurul lui, cu formele închise din interior ca insule. Enter face o singură hașură din toate.
- `S`: `Selectați obiecte închise` (polilinii închise, cercuri, elipse închise).
- `P`: `Introduceți numele unui model, SOLID sau ? pentru listă <curent>`. `SC`: `Specificați scara modelului`. `A`: `Specificați unghiul modelului`.
- `G` (Gradient): umplerea este un gradient în loc de model. Vezi {{cmd:GRADIENT}} pentru întrebările sale.

Vezi [Hașuri și arii de umplere](topic:hatch).

### GRADIENT

Aliasuri: `GD`. Umple o arie cu un gradient de una sau două culori. Întreabă mai întâi gradientul, apoi merge mai departe ca {{cmd:HATCH}} (`Alegeți un punct interior`, `S` pentru obiecte închise, {{key:Enter}} pentru a termina).

- `Introduceți o opțiune de gradient [Tip (T)/O culoare (O)/Două culori (TW)/Unghi (A)/Centrat (C)/Ieșire (X)] <X>`, repetat; afișează gradientul așa cum este acum de fiecare dată.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED` sau una dintre ele inversată (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Primele litere sunt suficiente.
- `O`: o culoare, apoi nuanța ei de la 0 la 1 (0 o înnegrește, 0,5 este chiar culoarea, 1 o înclină spre alb). `TW`: prima și a doua culoare. O culoare este un număr de la 1 la 255, trei numere ca `255,128,0` sau `#rrggbb`.
- `A`: unghiul la care merge gradientul. `C`: centrat Da sau Nu (Nu mută mijlocul gradientului spre o parte).
- Refuză o culoare sau un tip pe care nu le cunoaște și o nuanță în afara intervalului de la 0 la 1.

{{cmd:HATCHEDIT}} `G` și Proprietăți (Gradient) modifică mai târziu un gradient sau transformă orice hașură într-un gradient. Un gradient este desenat pe ecran și tipărit. DWG 2004 și mai nou îl păstrează ca hașură de gradient reală; DXF 2000 și DWG 2000 îl păstrează pentru CadCraft, iar alte programe văd o umplere plină în prima culoare.

### HATCHGENERATEBOUNDARY

Aliasuri: `HGB`. Refă conturul dintr-o hașură care l-a pierdut. `Selectați hașuri` (sau selectați-le mai întâi), apoi `Legați fiecare hașură de noul ei contur, ca hașura să îl urmeze? [Da/Nu] <Da>`.

- Fiecare buclă a hașurii devine o polilinie închisă pe stratul hașurii; noile polilinii rămân selectate. O margine curbă revine ca scurte bucăți drepte pe care le păstrează hașura.
- Cu Da, hașura urmează noul ei contur, ca o hașură făcută cu {{cmd:HATCH}}. Un singur pas de anulare.
- Spune așa când nu a fost selectată nicio hașură.

### POINT

Aliasuri: `PO`; sau {{ui:Desen}} › {{ui:Mai multe}} › {{ui:Punct}}. Obiecte punct, câte unul la fiecare clic, până la Enter.

- `Specificați un punct`

### XLINE

Aliasuri: `XL`; sau {{ui:Desen}} › {{ui:Mai multe}} › {{ui:Linie de construcție}}. Linii de construcție, nelimitate în ambele sensuri. Vezi [Linii de construcție și raze](topic:construction-lines).

- `Specificați un punct [Orizontală (Hor)/Verticală (Ver)/Unghi (Ang)/Bisectoare (Bisect)/Decalare (Offset)]`, apoi `Specificați punctul de trecere` pentru fiecare linie, până la Enter.
- `A`: `Introduceți unghiul liniei de construcție [Referință] <0>`; `R` cere mai întâi `Selectați un obiect de tip linie`.
- `B`: `Specificați vârful unghiului`, `Specificați punctul de start al unghiului`, apoi `Specificați punctul final al unghiului` pentru fiecare linie.
- `O`: `Specificați distanța de decalare [Prin punct (Through)] <Through>`, apoi `Selectați un obiect de tip linie` și `Specificați partea de decalat` (sau `Specificați punctul de trecere`) pentru fiecare linie.

### RAY

Fără aliasuri; sau {{ui:Desen}} › {{ui:Mai multe}} › {{ui:Rază}}. `Specificați punctul de start`, apoi `Specificați punctul de trecere` pentru fiecare rază, până la Enter.

### TEXT

Aliasuri: `DT`, `DTEXT`; sau {{ui:Text}} în bara de instrumente. Text pe un singur rând; fiecare rând este propriul obiect.

- `Specificați punctul de start al textului [Aliniere (J)]`
- `J`: `Introduceți o opțiune [Stânga (L)/Centru (C)/Dreapta (R)/Mijloc (M)/TL/MC] <L>`, apoi `Specificați punctul de inserție al textului`
- `Specificați înălțimea <înălțimea curentă a textului>`
- `Specificați unghiul de rotație al textului <0>`
- `Introduceți textul`, repetat: fiecare Enter începe rândul următor, dedesubt. Enter pe un rând gol încheie. {{key:Space}} scrie aici un spațiu.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} pune marcaje pe o linie, un arc, un cerc, o polilinie, o spline sau o elipsă, care o taie în părți egale. Alegeți obiectul, apoi dați numărul de părți (2 până la 32767). Un obiect deschis primește un marcaj mai puțin decât numărul de părți; unul închis primește un marcaj și la început. Obiectul în sine nu este tăiat. Marcajele sunt puncte; `Bloc` cere în schimb un bloc din acest desen și dacă se rotește ca să urmeze obiectul. Lungimile de-a lungul splinelor și elipselor sunt măsurate pe coarde scurte. Refuză textul, hașurile și alte obiecte care nu au lungime.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} pune un marcaj la fiecare lungime dată de-a lungul unei linii, al unui arc, cerc, polilinii, spline sau elipse, numărând de la capătul cel mai apropiat de locul în care ați dat clic (un obiect închis: de la început). Dați lungimea tastând-o sau prin două puncte. Capătul îndepărtat al unui obiect deschis nu primește marcaj. `Bloc` pune un bloc la fiecare marcaj în loc de un punct. Refuză o lungime de 0, una mai mare decât obiectul și una care ar face mai mult de 32767 de marcaje.

### BOUNDARY

Aliasuri: `BO`, `BPOLY`. {{cmd:BOUNDARY}} face o polilinie închisă în jurul ariei care conține punctul ales, din orice linii, arce, cercuri, polilinii și curbe care o margineau pe ecran. Bucățile care stau pe un arc sau cerc revin ca segmente de arc; bucățile de elipse și de spline revin ca scurte segmente drepte. Cu `Insule` pornite (setarea de start), fiecare arie închisă din interiorul ei primește și ea o polilinie. Continuați să alegeți puncte; Enter încheie. Obiectele care margineau aria rămân așa cum sunt. Spune așa când niciun contur închis nu conține punctul.

### BLEND

{{cmd:BLEND}} desenează o spline între capetele a două curbe deschise. Alegeți fiecare curbă aproape de capătul care trebuie unit. `CONtinuity` alege `Tangent` (spline-ul pleacă și sosește de-a lungul ambelor curbe) sau `Smooth` (urmează și felul în care se curbează la capete); alegerea este păstrată pentru sesiune. Cele două curbe nu se schimbă. Refuză obiectele închise și două capete care se întâlnesc deja.

### REGION

Alias: `REG`. {{cmd:REGION}} transformă obiecte închise în regiuni: arii plate pe care le puteți uni, tăia și măsura. Selectați cercuri, polilinii închise, elipse închise sau spline închise, ori linii, arce și polilinii deschise care închid o buclă cap la cap; fiecare buclă devine o regiune și înlocuiește obiectele din care provine. Arcele rămân arce; elipsele și splinele devin scurte segmente drepte. Ce nu este închis și nu închide nicio buclă rămâne cum este, iar comanda spune câte sunt. În desen o regiune este una sau mai multe polilinii închise, ținute împreună ca un grup nenumit, deci un clic selectează regiunea întreagă, iar o copie este o regiune proprie; alte programe care deschid fișierul văd polilinii închise.

Cu regiuni în desen, {{cmd:UNION}}, {{cmd:SUBTRACT}} și {{cmd:INTERSECT}} din fila 2D lucrează pe regiuni: `UNION` unește regiunile selectate într-una (regiunile separate devin o regiune cu mai multe contururi), `SUBTRACT` cere regiunile din care se scade și apoi pe cele de scăzut (o gaură rămâne parte din regiune), `INTERSECT` păstrează aria pe care o au toate în comun. Fiecare spune aria rezultatului și este un singur pas de anulare. Refuză când nu ar rămâne nimic sau când nu există nimic în comun. Pe fila 3D, și într-un desen fără regiuni, aceleași comenzi lucrează pe solide, ca înainte.

## {{ui:Modificare}}

### MTEXT

Aliasuri: `MT`, `T`; sau {{ui:Paragraf}} în bara de instrumente. Text de paragraf care se încadrează la o lățime, scris pe loc.

- `Specificați primul colț`
- `Specificați colțul opus [Înălțime (H)/Aliniere (J)/Spațiere rânduri (L)/Rotație (R)/Lățime (W)]`: lățimea dintre cele două colțuri este locul unde textul se încadrează. `H` cere `Specificați înălțimea`, `J` `Introduceți aliniere [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Introduceți factorul de spațiere a rândurilor (0,25 până la 4)`, `R` `Specificați unghiul de rotație`, `W` `Specificați lățimea (0 pentru fără încadrare)` și sare peste al doilea colț.
- Apoi se deschide pe desen o casetă: scrieți; {{key:Enter}} pentru un paragraf nou; {{key:Mod+Enter}} sau un clic în afară ca să terminați; {{key:Esc}} ca să anulați. Bara ei stabilește înălțimea, spațierea rândurilor, lățimea și alinierea. Vezi [Adăugarea textului și a etichetelor](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliasuri: `ED`, `DDEDIT`; sau dublu clic pe un text. `Selectați un text de editat`, repetat până la {{key:Enter}}: fiecare se deschide în aceeași casetă. Pornit pe un text selectat sau pe care s-a dat dublu clic, editează acel text și se încheie.

### ERASE

Aliasuri: `E`, `DELETE`; sau apăsați {{key:Delete}} cu obiecte selectate.

- `Selectați obiecte` (sărit când obiectele sunt deja selectate)

### MOVE

Aliasuri: `M`.

- `Selectați obiecte`
- `Specificați punctul de bază [Deplasare (D)]`, `Specificați al doilea punct`
- `D`: `Specificați deplasarea`, tastată ca `dx,dy`.

### COPY

Aliasuri: `CO`, `CP`. Copii de câte ori dați puncte.

`Matrice` la solicitarea celui de-al doilea punct face un rând dintr-o dată: dați numărul de elemente (originalul contează ca unul), apoi punctul unde se află prima copie; celelalte urmează la aceeași distanță. `Potrivire (F)` face acel punct locul ultimei copii, iar celelalte sunt împrăștiate uniform între ele.

- `Selectați obiecte`
- `Specificați punctul de bază [Deplasare (D)]`
- `Specificați al doilea punct [Anulare (U)]`, repetat până la Enter. `U` ia înapoi ultima copie.

### ROTATE

Aliasuri: `RO`.

- `Selectați obiecte`, `Specificați punctul de bază`
- `Specificați unghiul de rotație <ultimul unghi>`: în grade, pozitiv în sens invers acelor de ceasornic; sau dați clic pe un punct ca să rotiți spre el.

### SCALE

Aliasuri: `SC`.

- `Selectați obiecte`, `Specificați punctul de bază`
- `Specificați factorul de scară`: tastați un factor, de exemplu `0.5` sau `2`. Un punct dat cu clic dă distanța lui față de punctul de bază ca factor.

### MIRROR

Aliasuri: `MI`.

- `Selectați obiecte`
- `Specificați primul punct al liniei de oglindire`, `Specificați al doilea punct al liniei de oglindire`
- `Ștergeți obiectele sursă? [Da/Nu] <N>`

### ALIGN

Aliasuri: `AL`; sau {{ui:Modificare}} › {{ui:Mai multe}} › {{ui:Aliniere}}.

- `Selectați obiecte`
- `Specificați primul punct sursă`, `Specificați primul punct destinație`
- `Specificați al doilea punct sursă (Enter pentru a continua)`, `Specificați al doilea punct destinație`
- `Specificați al treilea punct sursă (Enter pentru a continua)`, `Specificați al treilea punct destinație`
- Cu două perechi: `Scalați obiectele după punctele de aliniere? [Da/Nu] <N>`

Vezi [Alinierea obiectelor](topic:modify-objects#align-objects).

### ALIGNTO

- `Selectați obiecte` (sau selecția), `Aliniere [Stânga (L)/Centru (C)/Dreapta (R)/Sus (T)/Mijloc (M)/Jos (B)] <Stânga>`, `Față de [Selecție (S)/Primul (F)/Ultimul (L)/Punct (P)] <Selecție>`; `P` cere punctul. Selecția rămâne.

### DISTRIBUTE

- `Selectați obiecte` (cel puțin trei), `Distribuire [Orizontal (H)/Vertical (V)] <Orizontal>`, `Repartizare uniformă [Centre (C)/Spații (G)] <Spații>`. Cele două exterioare rămân; selecția rămâne.

### ALIGNPANEL

Aliasuri: `ALP`; sau {{ui:Modificare}} › {{ui:Mai multe}} › {{ui:Aliniere și distribuire}}. Deschide panoul care rulează ALIGNTO și DISTRIBUTE prin clicuri.

### LASER

Aliasuri: `LASERCUT`; sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Laser…}}. Deschide panoul Laser peste desen: ce face fiecare strat (tăiere, incizare, gravare, umplere, imagine), previzualizarea, codul G GRBL de salvat, și încadrarea și trimiterea prin Web Serial. Vezi [Trimiterea unui desen la un laser](topic:laser-cutting).

### STRETCH

Aliasuri: `S`; sau {{ui:Întindere}}. `Selectați obiectele de întins`: trageți ferestre încrucișate (sau tastați `C`) peste capete ca să mutați. `Specificați punctul de bază [Deplasare (D)]`, `Specificați al doilea punct`. Punctele din interiorul ferestrelor se mută: capetele liniilor, vârfurile polilinilor (segmentele de arc își păstrează înălțimea), punctele cotelor; cercurile, elipsele, textul, punctele și blocurile se mută întregi când centrul sau punctul de inserție este în interior. O selecție făcută înainte de comandă păstrează ferestrele încrucișate (și lasourile) care au făcut-o, deci le întind la fel. Fără fereastră, obiectele se mută întregi.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliasuri: `AR`; sau {{ui:Matrice}}. `Selectați obiecte`, apoi `Introduceți tipul matricei [Dreptunghiular (R)/Polar (PO)] <Dreptunghiular>` (doar pentru ARRAY).

- Dreptunghiular începe cu 4 coloane × 3 rânduri, distanțate de 1,5 ori mărimea obiectelor, arătat ca previzualizare. `Introduceți o opțiune [Număr (CO)/Distanță (S)/Coloane (COL)/Rânduri (R)/Ieșire (X)] <X>`: `COU` cere coloanele și rândurile, `S` distanțele dintre coloane și dintre rânduri (negativ merge la stânga sau în jos), `COL` și `R` câte o direcție.
- Polar cere `Specificați punctul central al matricei`, începe cu 6 elemente pe tot cercul, rotite. `Introduceți o opțiune [Elemente (I)/Unghi de umplere (F)/Rotire elemente (ROT)/Ieșire (X)] <X>`: `I` elemente, `F` unghiul de umplere (+ în sens invers acelor de ceasornic, − în sensul acelor de ceasornic), `ROT` Da sau Nu.
- {{key:Enter}} (Ieșire) face copiile, ca obiecte simple. Un singur pas de anulare.
- `AS` (Asociativ) comută între copii simple și o matrice care rămâne editabilă: un obiect pe care îl modificați mai târziu cu {{cmd:ARRAYEDIT}}, prin mânerele lui sau în Proprietăți. Alegerea este reținută ({{cmd:ARRAYASSOCIATIVITY}}); pornește pe copii simple.

### ARRAYPATH

Copii de-a lungul unei curbe. `Selectați obiecte`, apoi `Selectați curba traseului`: o linie, un arc, un cerc, o elipsă, o polilinie sau o spline (nu unul dintre obiectele care se copiază). Traseul pornește de la capătul lui cel mai apropiat de obiecte, iar primul element sunt obiectele unde sunt.

- `Introduceți o opțiune [Metodă (M)/Elemente (I)/Distanță (SP)/Aliniere (AL)/Asociativ (AS)/Ieșire (X)] <X>`, cu previzualizare. `M`: `Divide` împarte elementele uniform pe tot traseul, `Measure` pune câte unul la o distanță dată pe el. `I`: numărul de elemente (la Measure, 0 înseamnă cât încap); un număr peste lungimea traseului este limitat la ce încape. `SP`: distanța dintre elemente de-a lungul traseului (trece pe Measure). `AL`: Da întoarce fiecare element ca să urmeze traseul, Nu le păstrează drepte.
- `AS` ca în {{cmd:ARRAY}}. Cu el pornit, matricea își păstrează propria copie a formei traseului: modificarea ulterioară a curbei traseului nu mută elementele.
- Refuză un traseu care nu este o curbă și un singur element.

### ARRAYEDIT

Modifică o matrice făcută cu ASsociative. `Selectați matricea` (sau selectați-o mai întâi). Arată ce este acum matricea, apoi întreabă până la {{key:Enter}}:

- Dreptunghiular: `COL` coloanele și distanța lor, `R` rândurile și distanța lor, `A` unghiul la care merg coloanele.
- Polar: `I` elemente, `F` unghiul de umplere, `ROT` rotire a elementelor Da sau Nu.
- Traseu: `M` Divide sau Measure, `I` elemente, `SP` distanța, `AL` aliniere cu traseul.
- `S` (Sursă) deschide obiectele pe care le repetă matricea, de sine stătătoare, ca editorul de blocuri. Desenați și editați acolo; {{cmd:ARRAYCLOSE}} salvează sau renunță, iar fiecare element urmează.
- `REP` (REPlace): `Selectați obiectele de înlocuire`, `Specificați punctul de bază al obiectelor de înlocuire`, apoi dați clic pe elementele de înlocuit și {{key:Enter}}. Acele elemente arată în loc înlocuitorul; obiectele de înlocuire ies din desen și trăiesc în matrice. `RES` (RESet) arată din nou obiectele sursă în fiecare element.
- Fiecare modificare este un singur pas de anulare. Refuză copiile simple, o referință de bloc simplă și o matrice pe un strat blocat.

Aceleași numere sunt în Proprietăți, la Matrice, iar matricea are mânere: punctul ei de bază o mută, mânerul de la al doilea element stabilește distanța, mânerul de după ultimul element stabilește numărul (polar: al doilea element stabilește câte elemente, ultimul elementul unghiul de umplere). {{cmd:EXPLODE}} transformă o matrice înapoi în copii simple.

### ARRAYCLOSE

Încheie {{cmd:ARRAYEDIT}} Sursă: `Salvați modificările obiectelor sursă ale matricei? [Salvare (S)/Renunțare (D)] <Salvare>`. Spune așa când niciun obiect sursă al unei matrice nu este deschis. {{cmd:BCLOSE}} face același lucru.

### ARRAYASSOCIATIVITY

`Introduceți o valoare nouă pentru ARRAYASSOCIATIVITY (1 = matricele rămân editabile, 0 = copii simple)`. Stabilește pe ce pornesc {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR și {{cmd:ARRAYPATH}}; opțiunea lor `AS` schimbă aceeași setare. Reținută în acest browser.

### OFFSET

Aliasuri: `O`. Linii, arce, cercuri și polilinii.

Când o polilinie se mută spre exterior și segmentele ei drepte se despart la un colț, {{cmd:OFFSETGAPTYPE}} decide cum se închide golul.

- `Specificați distanța de decalare [Prin punct (Through)] <ultima distanță, sau Through>`
- `Selectați obiectul de decalat`, apoi `Specificați un punct pe partea de decalat` (sau, cu Prin punct, `Specificați punctul de trecere`), repetat până la Enter.

### OFFSETGAPTYPE

- `Golurile de colț la decalare: 0 prelungire, 1 rotunjire, 2 teșitură`: cum închide {{cmd:OFFSET}} golurile de la colțurile exterioare ale unei polilinii. `0` prelungește segmentele până se întâlnesc (setarea de start), `1` le unește cu un arc în jurul vechiului colț, `2` cu o tăietură dreaptă. Colțurile interioare și segmentele de arc nu sunt afectate. Păstrat pentru această sesiune.

### EXTRIM

{{cmd:EXTRIM}} taie tot ce se află pe o parte a unei muchii. Alegeți muchia de tăiere (o linie, un arc, un cerc, o polilinie, o elipsă, o spline sau o linie de construcție), apoi un punct pe partea de curățat: fiecare linie, arc, cerc, polilinie și linie de construcție care trece peste muchie pierde partea de pe acea parte, unde începe de la muchie. Cât timp alegeți partea, bucățile care ar dispărea urmează indicatorul. Pentru o muchie închisă, părțile sunt interiorul și exteriorul. Obiectele care doar ating muchia, precum și textul, hașurile, splinele și elipsele care o traversează, rămân cum sunt. Un singur pas de anulare.

### TRIMEXTENDMODE

- `Introduceți o valoare nouă pentru TRIMEXTENDMODE (1 Rapid, 0 Standard)`: cum pornesc {{cmd:TRIM}} și {{cmd:EXTEND}}. `1` Rapid: fiecare obiect este muchie de tăiere sau limită. `0` Standard: întreabă mai întâi muchiile. Și `(setvar "TRIMEXTENDMODE" 0)` în LISP.

### TRIM

Aliasuri: `TR`. Afișează mai întâi `Setări curente: modul Rapid (TRIMEXTENDMODE 1), muchii: fără prelungire, tragerea desenează o cale`. În modul Rapid fiecare obiect vizibil este muchie de tăiere, iar un obiect pe care nimic nu îl traversează este șters; în modul Standard întreabă mai întâi `Selectați muchiile de tăiere (Enter = fiecare obiect)` și taie doar la acestea.

- `Selectați obiectul de tăiat sau Shift-selectați pentru a prelungi [Muchii de tăiere (T)/Gard (F)/Intersectare (C)/Mod (O)/Muchie (E)/Ștergere (R)/Anulare (U)]`, repetat: dați clic pe bucata de eliminat (apare gri și punctată cât timp indicatorul stă pe ea), trageți o cale prin mai multe bucăți (toate merg într-un singur pas) sau dați clic pe două locuri goale pentru un gard între ele. {{key:Shift}} prelungește în loc. `T` alege muchiile de tăiere (modul Standard), `F` cere punctele gardului, `C` două colțuri de fereastră (bucățile parțial în interior merg), `O` cere `Introduceți o opțiune de mod de tăiere [Rapid/Standard]`, `E` cere `Introduceți un mod de prelungire a muchiei implicite [Prelungire/Fără prelungire]` (EDGEMODE), `R` șterge obiectele selectate, `U` anulează ultima alegere sau trăgere. Enter încheie. Vezi [Tăiere și prelungire](topic:trim-and-extend).

- Un clic pe o hașură taie hașura: muchiile de tăiere împart aria hașurată, iar bucata pe care ați dat clic este luată (nu rămâne niciun contur desenat acolo). Hașura își păstrează modelul sau gradientul; o hașură legată de conturul ei nu mai este legată după aceea, pentru că nu mai o umple. Spune așa când nicio muchie de tăiere nu împarte acolo hașura, când clicul este în afara hașurii și când nu ar rămâne nimic (folosiți {{cmd:ERASE}}). O cale trasă sau un gard nu taie hașurile.

### EXTEND

Aliasuri: `EX`. La fel ca TRIM, invers: `Selectați obiectul de prelungit sau Shift-selectați pentru a tăia [Muchii limită (B)/Gard (F)/Intersectare (C)/Mod (O)/Muchie (E)/Anulare (U)]`. Un clic lungește capătul cel mai apropiat până la următoarea limită; o cale sau un gard trase lungesc fiecare obiect pe care îl traversează; {{key:Shift}} taie. `B` alege muchiile limită (modul Standard). Modul și Muchia sunt comune cu TRIM.

### LINKVIEWS

Aliasuri: `SYNCVIEWS`; sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Legare a vizualizărilor panourilor}}, sau pictograma de legătură de pe filele desenului. `Legare a vizualizărilor panourilor [ON/OFF]` (Enter trece la cealaltă stare): cât timp este pornită, o deplasare sau un zoom în panoul activ mută fiecare panou care arată același fel de spațiu. Vezi [Împărțirea ecranului](topic:split-screen).

### OPENIN3D

Fără aliasuri; sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Deschidere în ModelCraft}}, acolo unde aplicația de modelare 3D primește un desen predat. Îl deschide acolo, într-o filă nouă, ca DWG (nu se încarcă nimic). Dacă browserul blochează fila, spune așa.

### LASSOMODE

`Introduceți o valoare nouă pentru LASSOMODE (1 = lasou, 0 = dreptunghi)`: ce desenează apăsarea și trăgerea pe un loc gol. Același lucru cu Setări › CadCraft › Trăgere pentru selectare. Vezi [Selectarea cu lasou](topic:lasso-selection).

### FILLET

Aliasuri: `F`. Linii, arce, cercuri și polilinii. Afișează mai întâi `Setări curente: Mod = TRIM, Rază = 0`.

- `Selectați primul obiect [Anulare (U)/Polilinie (P)/Rază (R)/Tăiere (T)/Mai multe (M)]`
  - `R` cere `Specificați raza de rotunjire <ultima>`. `T` cere `Introduceți opțiunea de mod de tăiere [Tăiere/Fără tăiere]`: cu Fără tăiere obiectele rămân așa cum sunt și se adaugă doar arcul.
  - `M` păstrează comanda pentru mai multe colțuri până la {{key:Enter}}; `U` ia înapoi ultimul colț fără să părăsească comanda.
  - `P` cere `Selectați polilinia 2D [Rază (R)]` și rotunjește fiecare colț unde se întâlnesc două segmente drepte. Rotunjirile pe care le are deja sunt înlocuite cu noua rază; raza 0 le scoate. Colțurile ale căror laturi sunt prea scurte pentru rază rămân și sunt numărate.
- `Selectați al doilea obiect sau Shift-selectați pentru a aplica colțul [Rază (R)]`. Țineți {{key:Shift}} apăsat când dați clic pentru un colț ascuțit, oricare ar fi raza.

Dați clic pe fiecare obiect pe partea pe care vreți s-o păstrați. Două linii care nu se întâlnesc sunt prelungite. Două linii paralele primesc un semicerc peste gol, la capătul primei linii cel mai apropiat de clicul dumneavoastră. Un cerc nu este tăiat niciodată. Două segmente ale aceleiași polilinii, unul lângă altul, primesc arcul în interiorul polilinii; o polilinie și un alt obiect funcționează când tăietura cade pe primul sau ultimul segment al polilinii.

### CHAMFER

Aliasuri: `CHA`. Linii și segmentele drepte ale polilinilor. Afișează mai întâi distanțele curente (sau lungimea și unghiul).

- `Selectați prima linie [Anulare (U)/Polilinie (P)/Distanță (D)/Unghi (A)/Tăiere (T)/Metodă (E)/Mai multe (M)]`
  - `D` cere `Specificați prima distanță de teșire <ultima>` și `Specificați a doua distanță de teșire <prima>`: prima se taie din prima linie aleasă, a doua din cealaltă.
  - `A` cere `Specificați lungimea teșiturii pe prima linie` și `Specificați unghiul teșiturii față de prima linie`.
  - `E` (Metodă) alege care dintre cele două o folosește următoarea teșitură. `T`, `M`, `U` și `P` funcționează ca în {{cmd:FILLET}}.
- `Selectați a doua linie sau Shift-selectați pentru a aplica colțul [Distanță (D)/Unghi (A)/Metodă (E)]`. Shift+clic face un colț ascuțit.

O distanță mai mare decât linia este refuzată (`Distanța este prea mare.`).

### BREAK și BREAKATPOINT

Aliasuri: `BR`. `Selectați obiectul` (locul în care dați clic este primul punct), `Specificați al doilea punct de rupere [Primul punct (F)]`; `F` cere `Specificați primul punct de rupere` și `Specificați al doilea punct de rupere`. Partea dintre ele dispare; pe un cerc, în sens invers acelor de ceasornic de la primul punct. BREAKATPOINT cere `Specificați punctul de rupere` și împarte obiectul în două acolo (nu un cerc).

### LENGTHEN

Aliasuri: `LEN`. `Selectați un obiect de măsurat [Delta (DE)/Procent (P)/Total (T)/Dinamic (DY)]`: o alegere afișează `Lungime curentă` (și unghiul inclus al unui arc) și cere din nou. `DE` cere `Introduceți lungimea delta (negativ scurtează) [Unghi (A)]`, `P` `Introduceți lungimea procentuală`, `T` `Specificați lungimea totală [Unghi (A)]`, `DY` trage. Apoi `Selectați un obiect de modificat [Anulare (U)]`, repetat: capătul cel mai apropiat de clic se mută. Linii, arce și polilinii deschise.

### JOIN

Aliasuri: `J`. `Selectați obiectele de unit`. Liniile, arcele și polilinile deschise care se întâlnesc cap la cap devin polilinii (închise când lanțul se închide); liniile de pe aceeași dreaptă devin o linie; arcele aceluiași cerc devin un arc sau cercul. Istoricul spune câte obiecte s-au unit și câte nu.

### MATCHPROP

Aliasuri: `MA`, `PAINTER`. `Selectați obiectul sursă`, apoi `Selectați obiectele destinație [Setări (S)]` și {{key:Enter}}. Copiază stratul și culoarea și, între obiecte de același fel, înălțimea și lățimea textului, dimensiunile cotelor sau modelul hașurii. `S` cere `Activați sau dezactivați o proprietate [Culoare (C)/Strat (LA)/Text (T)/Cotă (D)/Hașură (H)]`, repetat până la {{key:Enter}}; alegerea este reținută pentru sesiune.

### EXPLODE

Aliasuri: `X`. Polilinii devin linii și arce, referințele de bloc devin obiectele lor, iar cotele devin linii, săgeți și text. O matrice care rămâne editabilă ({{cmd:ARRAYEDIT}}) devine copii simple ale obiectelor ei.

- `Selectați obiecte`

### GROUP

Alias: `G`. {{cmd:GROUP}} dă obiectelor selectate un nume comun. Selectați obiectele, apoi tastați un nume (fără spații; `?` listează grupurile; Enter face un grup nenumit) și, pentru un grup numit, o descriere opțională. De atunci, un clic pe unul dintre ele, sau o fereastră care cuprinde unul, selectează toate, deci se mută, copiază și șterg împreună; fiecare obiect rămâne propriul obiect. Un obiect poate fi în mai multe grupuri. O copie a unui grup întreg este un grup nou nenumit; o copie a unui membru singur se alătură grupului. Grupurile aparțin spațiului în care au fost făcute (modelul sau o planșă). Sunt păstrate când salvați ca DWG sau DXF și deschideți din nou fișierul în CadCraft; fișierele DXF 2000 le transportă și ca obiecte de grup pentru alte programe, iar grupurile făcute în alt program sunt citite când se deschide un DXF sau DWG.

### UNGROUP

{{cmd:UNGROUP}} desface grupurile: selectați obiecte din grupuri (fiecare grup în care se află este desfăcut) sau tastați `Name` și numele grupului. Obiectele rămân în desen. Un singur pas de anulare aduce grupurile înapoi.

### GROUPEDIT

{{cmd:GROUPEDIT}} modifică un grup. Alegeți unul dintre obiectele lui sau `Name` și numele lui; un grup care este deja selectat este luat așa cum este. Apoi: `Add` obiecte (alese câte unul, nu grup cu grup), `Remove` obiecte, `REName` grupul, schimbați `Description`-ul lui sau setați `Selectable` (dacă un clic pe un obiect selectează grupul întreg). `eXit` sau Enter încheie. Un grup fără obiecte rămase dispare.

### PICKSTYLE

- `Selecție de grup: 0 un clic selectează un obiect, 1 întregul lui grup`: cu `1` (setarea de start) un clic sau o fereastră pe un obiect grupat selectează întregul grup; cu `0` obiecte singure, ca să puteți edita un membru. Păstrat pentru această sesiune.

## Clipboard

Clipboardul propriu al CadCraft: lucrează într-un desen, între desene și între filele CadCraft din acest browser. Vezi [Copiere, lipire și duplicare](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, sau {{ui:Copiere}} din grupul {{ui:Editare}}. Copiază obiectele în clipboard, împreună cu blocurile și straturile pe care le folosesc. Obiectele rămân selectate.

- `Selectați obiectele de copiat` (sărit când obiectele sunt deja selectate)

### CUTCLIP

{{key:Mod+X}}, sau {{ui:Decupare}} din meniul {{ui:Mai multe}}. Copiază obiectele în clipboard, apoi le șterge (un singur pas de anulare).

- `Selectați obiectele de decupat` (sărit când obiectele sunt deja selectate)

### COPYBASE

Copiază obiectele în clipboard cu un punct de bază ales; lipirea plasează acel punct.

- `Specificați punctul de bază`
- `Selectați obiectele de copiat`

### PASTECLIP

{{key:Mod+V}}, sau {{ui:Lipire}} din grupul {{ui:Editare}}. Copia urmează cursorul, atârnând de colțul stânga-jos al extinderii sale (sau de centrul ei, sau de punctul din `COPYBASE`; vezi [Setările CadCraft](topic:settings)).

- `Specificați punctul de inserție`

Obiectele lipite sunt selectate. Un bloc pe care desenul îl are deja sub același nume păstrează definiția acestui desen.

Când o zonă copiată în MarkupCraft este mai nouă decât ce a copiat CadCraft (și are mai puțin de 6 ore), {{key:Mod+V}} și `PASTECLIP` lipesc în schimb acea zonă: vezi `PASTEAREA`.

### PASTEAREA

Aliasuri: `PAREA`. {{ui:Lipire zonă copiată}} în meniul {{ui:Mai multe}}. Lipește o zonă copiată cu {{ui:Copiere zonă}} în MarkupCraft, ca imagine, la dimensiunea ei reală. Vezi [Imagini într-un desen](topic:pictures).

- `Specificați colțul stânga-jos al zonei copiate`
- `Scalați dimensiunea pe hârtie cu (100 pentru o planșă 1:100; Puncte: două puncte pe ea și distanța lor reală) [Puncte] <1>` (doar când planșa nu avea scară de desen): un număr, {{key:Enter}} pentru dimensiunea hârtiei sau `P`, apoi `Primul punct pe zona lipită`, `Al doilea punct pe zona lipită` și distanța lor reală.

### PASTEORIG

{{key:Mod+Shift+V}}, sau {{ui:Lipire în aceeași poziție}} din meniul {{ui:Mai multe}}. Lipește la coordonatele de unde au fost copiate obiectele. Nu întreabă nimic.

### DUPLICATE

Aliasuri: `DUP`. {{key:Mod+D}}, sau {{ui:Duplicare și mutare}} din meniul {{ui:Mai multe}}. O copie a obiectelor se mută odată cu indicatorul de la locul unde se află; {{key:Esc}} nu lasă nimic. Nu folosește clipboardul.

- `Selectați obiectele de duplicat` (sărit când obiectele sunt deja selectate)
- `Specificați unde merge copia (Esc nu lasă nimic)`: dați clic, tastați un punct, `@dx,dy` (de unde era indicatorul) sau o distanță spre cursor.

### SELECT

Întreabă `Selectați obiecte` (cu fiecare opțiune de mai jos) și lasă selectat ce ați ales, pentru următoarea comandă sau pentru `P` mai târziu.

### QSELECT

Aliasuri: `QS`. În browser, caseta de dialog {{ui:Selectare rapidă}} (vezi [Selectarea obiectelor](topic:select-objects#select-by-a-rule-quick-select)). Fără ea, linia de comandă cere `Introduceți tipul obiectului`, `Introduceți proprietatea`, `Introduceți operatorul [=/<>/>/</*/Selectare totală] <=>` și `Introduceți valoarea`. Potrivirile devin selecția.

### SELECTSIMILAR

Aliasuri: `SIM`. `Selectați obiecte [Setări (SE)]` (sau selecția curentă): selectează fiecare obiect de același tip, cu același strat și aceeași culoare (și același nume de bloc, același model de hașură). `SE` cere `Activați sau dezactivați o proprietate [Strat (LA)/Culoare (CO)/Nume (NA)/Model (PA)/Înălțime (HE)]`, repetat până la {{key:Enter}}.

### FIND

Fără aliasuri; sau {{ui:Editare}} › {{ui:Mai multe}} › {{ui:Găsire și înlocuire}}. În browser, caseta de dialog {{ui:Găsire și înlocuire}} (vezi [Adăugarea textului și a etichetelor](topic:text#find-and-replace-words)). Fără ea: `Introduceți textul de găsit`, apoi `Introduceți textul de înlocuire (Enter: selectați ce s-a găsit)`. Caută în text, în valorile atributelor și în textul cotelor, pe fila deschisă sau în selecție.

### SELECTALL și DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) selectează fiecare obiect pe care îl puteți edita pe fila deschisă. `DESELECT` (aliasuri `AI_DESELECT`, `SELECTNONE`; sau {{key:Esc}}) golește selecția.

## Cote

### DIMLINEAR

Aliasuri: `DLI`, `DIMLIN`. Distanță orizontală sau verticală.

- `Specificați originea primei linii de prelungire [Selectare obiect (S)]` (Enter sau `S`: `Selectați obiectul de cotat`, apoi dați clic pe o linie, un arc, un cerc sau un segment de polilinie)
- `Specificați originea celei de-a doua linii de prelungire`
- `Specificați locul liniei de cotă [Text/Orizontal/Vertical/Rotit]`. `T` cere textul (`<>` este valoarea măsurată), `H` și `V` fixează direcția, `R` cere `Specificați unghiul liniei de cotă <0>`.

### DIMALIGNED

Aliasuri: `DAL`, `DIMALI`. Distanța reală între două puncte.

- Originile ca la {{cmd:DIMLINEAR}}, apoi `Specificați locul liniei de cotă [Text]`.

### DIMANGULAR

Aliasuri: `DAN`, `DIMANG`.

- `Selectați arc, cerc sau linie, sau Enter pentru un vârf`
- Arc: unghiul lui. Cerc: `Specificați al doilea capăt al unghiului`. Linie: `Selectați a doua linie`. Enter: `Specificați vârful unghiului`, `Specificați primul capăt al unghiului`, `Specificați al doilea capăt al unghiului`.
- `Specificați locul liniei de cotă [Text]`: dați clic în interiorul unghiului care se măsoară.

### DIMRADIUS și DIMDIAMETER

Aliasuri: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Selectați arc sau cerc`, apoi `Specificați locul liniei de cotă [Text]`.

### DIMCONTINUE

Aliasuri: `DCO`, `DIMCONT`. Continuă de la ultima cotă liniară sau aliniată făcută (sau cere `Selectați o cotă liniară sau aliniată`).

- `Specificați a doua origine a liniei de prelungire [Anulare (U)]`, repetat până la Enter.

### DIMBASELINE

Aliasuri: `DBA`, `DIMBASE`. Ca {{cmd:DIMCONTINUE}}, dar fiecare cotă pornește de la prima origine și este așezată mai departe spre exterior.

### DIMORDINATE

Aliasuri: `DOR`, `DIMORD`. `Specificați locul elementului`, apoi `Specificați capătul indicației [Xdatum/Ydatum/Text]`. Scrie cât de departe este elementul de originea SCU, pe X sau pe Y, pe o indicație: o indicație care merge în mare parte în sus sau în jos citește X, una care merge lateral citește Y; `Xdatum` și `Ydatum` fixează care. Stabiliți mai întâi originea cu {{cmd:UCS}} (fără una, este 0,0 al desenului). Mânerele mută elementul, originea și capătul indicației, iar valoarea urmează. Salvată ca o cotă de ordonată reală în DWG și DXF. Refuză un capăt de indicație pus pe chiar elementul.

### DIMARC

Aliasuri: `DAR`. `Selectați arc sau segment de arc de polilinie`, apoi `Specificați locul cotei de lungime a arcului [Text]`. Măsoară de-a lungul arcului (nu pe coardă) și scrie simbolul arcului înaintea valorii. Refuză un cerc întreg, o linie sau un segment drept de polilinie. Un DWG o păstrează ca o cotă de lungime a arcului; un DXF o păstrează ca o cotă unghiulară cu lungimea ca text, iar CadCraft o deschide din nou ca o cotă de lungime a arcului.

### DIMJOGGED

Aliasuri: `DJO`, `JOG`. `Selectați arc sau cerc`, `Specificați înlocuirea centrului`, `Specificați locul frângerii`. O cotă de rază pentru o curbă al cărei centru este departe sau în afara planșei: linia cotei pornește de la punctul pe care îl dați, nu de la centru, cu o frângere în ea, și tot scrie raza reală. Un DWG o păstrează ca o cotă de rază cu frângere; un DXF o păstrează ca o cotă de rază, iar CadCraft o deschide din nou frântă.

### DIMJOGLINE

Aliasuri: `DJL`. `Selectați cota la care să adăugați frângerea [Eliminare (R)]`, apoi `Specificați locul frângerii (sau apăsați Enter)`. Pune un simbol de frângere pe linia unei cote liniare sau aliniate, ca să arate că distanța nu este desenată la scară; valoarea nu se schimbă. `Remove` îl scoate. Refuză alte feluri de cotă.

### QDIM

Fără aliasuri. `Selectați geometria de cotat`, apoi `Specificați poziția liniei de cotă [Continuu (C)/În trepte (S)/De bază (B)/Ordonată (O)/Rază (R)/Diametru (D)/punct de referință (P)]`. Cotează mai multe obiecte dintr-un pas, de la capetele liniilor și segmentelor de polilinie, centrele cercurilor și arcelor, punctele și referințele de bloc. O poziție deasupra sau dedesubtul obiectelor măsoară peste ele, una lângă ele măsoară în sus. `Continuu` înlănțuie punctele, `De bază` măsoară totul de la primul, `În trepte` așază perechile în cuiburi de la mijloc spre exterior, `Ordonată` dă fiecărui punct distanța lui față de referință (`datumPoint` alege una nouă), `Rază` și `Diametru` cotează fiecare cerc și arc ales. Modul este reținut. Tot ce face este un singur pas de anulare. Spune așa când sunt mai puțin de două puncte sau când nu există arce sau cercuri pentru Rază și Diametru.

### DIMBREAK

Aliasuri: `DBREAK`. `Selectați cotele pentru a adăuga sau a elimina întreruperi`, apoi `Întrerupere unde trec alte obiecte [Auto/Manual/Eliminare (R)] <Auto>`. `Auto` lasă un gol în liniile de cotă și de prelungire oriunde trece alt obiect peste ele și le recalculează când acele obiecte sau cota se mută. `Manual` (o cotă) cere două puncte și lasă un gol între ele. `Remove` scoate toate golurile. Golul este de 1,5 ori înălțimea textului cotei.

### DIMSPACE

Fără aliasuri. `Selectați cota de bază`, `Selectați cotele de repartizat`, `Introduceți valoarea distanței sau Auto <Auto>`. Mută liniile de cotă ale cotelor liniare și aliniate paralele (sau cotele unghiulare despre același vârf) ca să stea la aceeași distanță una de alta, numărată de la cota de bază, fiecare de partea ei. `0` le aliniază cu cota de bază; `Auto` este de două ori înălțimea textului cotei de bază. Cotele care nu sunt paralele cu cota de bază sunt lăsate în pace.

### DIMINSPECT

Fără aliasuri. `Selectați cotele`, `Forma cadrului de inspecție [Rotund (R)/Unghiular (A)/Fără (N)/eliminare] <Rotund>`, `Introduceți eticheta`, `Introduceți rata de inspecție <100%>`. Desenează un cadru în jurul valorii, cu o etichetă înainte și rata de inspecție după ea. `remove` îl scoate. Textul de toleranță rămâne cu valoarea.

### DIMOVERRIDE

Aliasuri: `DOV`, `DIMOVER`. `Introduceți numele variabilei de cotare de suprascris sau Clear`, `Introduceți o valoare nouă pentru …`, din nou până la Enter, apoi `Selectați cotele`. Schimbă aceste setări doar la cotele selectate; stilul de cotare nu se schimbă. Acceptă variabilele care sunt un număr sau un comutator (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` pune cotele selectate înapoi pe stilul lor. Refuză un nume care nu este o astfel de variabilă și o valoare pe care nu o poate primi.

### DIMREASSOCIATE

Aliasuri: `DRE`, `DIMREASSOC`. `Selectați cotele`, apoi pentru fiecare dintre ele originile liniilor lor de prelungire (`Specificați prima origine a liniei de prelungire pe un obiect`: se agață de un capăt sau de mijlocul unei linii, de un colț de polilinie, de un centru; Enter lasă punctul liber), sau, pentru o cotă de rază, diametru, rază cu frângere sau lungime de arc, `Selectați arc sau cerc`. Cota este apoi legată de acele obiecte: când acestea se mută sau își schimbă mărimea, ea urmează în același pas de anulare și măsoară din nou. Mutarea manuală a unui punct legat sau ștergerea obiectului încheie legătura. Legătura este salvată în DWG și DXF 2000 ca date proprii CadCraft; alte programe văd o cotă obișnuită.

### DIMDISASSOCIATE

Aliasuri: `DDA`, `DIMDISASSOC`. `Selectați cotele`. Le eliberează de obiectele de care erau legate; nimic nu se mută.

### CENTERMARK

Aliasuri: `CM`, `DIMCENTER`, `DCE`. `Selectați cercul sau arcul pentru a adăuga marcaj de centru`, din nou până la Enter. Desenează o cruce în centru și patru linii de axă până puțin dincolo de curbă (tip de linie CENTER), ca linii simple pe stratul curent; dimensionate după mărimea săgeții și scara generală a setărilor de cotare curente, rotite cu SCU. Nu urmează cercul dacă acesta se mută.

### CENTERLINE

Aliasuri: `CL`. `Selectați prima linie`, `Selectați a doua linie`. Desenează o linie la mijloc între două linii (pe bisectoare când se întâlnesc), puțin mai lungă decât ele, cu tipul de linie CENTER. O linie simplă: nu urmează cele două linii.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Fără aliasuri. Fiecare cere `Introduceți o valoare nouă pentru … <curentă>` și stabilește această mărime pentru cotele **noi**: scara generală, înălțimea textului, mărimea săgeții, zecimalele (până la 8), spațiul din jurul textului, prelungirea dincolo de linia de cotă, decalajul față de origine. Vezi [Stabilirea mărimilor cotelor](topic:dimension-settings).

### DIMLUNIT

Setare de cotare: formatul doar al cotelor noi (1 științific, 2 zecimal, 3 inginerie, 4 arhitectural, 5 fracționar).

### DIMSTYLE și -DIMSTYLE

Aliasuri: `DST`, `DDIM`, `D`. Managerul stilurilor de cotare: {{ui:Setare curentă}}, {{ui:Nou…}}, {{ui:Modificare…}}, {{ui:Redenumire…}}, {{ui:Ștergere}}, {{ui:Comparare…}}, {{ui:Aplicare la selecție}}. `-DIMSTYLE` în linia de comandă: `Stil de cotare [Restaurare (R)/Salvare (S)/Ștergere (D)/Aplicare (A)/Comparare (C)/Redenumire (N)/Listă (L)]`. Vezi [Stabilirea mărimilor cotelor](topic:dimension-settings#named-dimension-styles).

### DIMEDIT și DIMTEDIT

`DIMEDIT` (`DED`): `Editare cotă [Start (H)/Nou (N)/Rotire (R)/Înclinare (O)] <Start>`, apoi cotele (sau cele deja selectate). Nou cere textul (`<>` = măsurătoarea); Rotire cere un unghi (0 pune textul la loc); Înclinare cere unghiul liniilor de prelungire față de axa X (Enter = niciunul; doar cote liniare și aliniate). `DIMTEDIT` (`DIMTED`): `Textul cotei [Stânga (L)/Dreapta (R)/Centru (C)/Start (H)/Unghi (A)] <Centru>`. Vezi [Stabilirea mărimilor cotelor](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliasuri: `DTU`. `Unități în textul cotelor noi [Unități ale desenului/mm/cm/m/km]`, sau, cu cote selectate, `Unități în textul cotelor selectate`. Scrie lungimea măsurată în acea unitate, cu unitatea după ea (DIMLFAC și un sufix DIMPOST); `D` revine la unitățile desenului. Vezi [Cote în mm, cm, m sau km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliasuri: `RC`. Afișează `Lungimea arcului: … Tip: …`, apoi `Specificați primul punct [Lungime arc (A)/Obiect (O)/Dreptunghiular (R)/Poligonal (P)/Liber (F)]`. Dreptunghiular cere `Specificați colțul opus`; Poligonal `Specificați următorul punct (Enter închide norul) [Anulare (U)]`; Liber urmează indicatorul până la un clic sau {{key:Enter}}; `O` cere `Selectați obiectul` și `Inversați direcția? [Da/Nu] <N>` și transformă obiectul în nor. `A` cere `Specificați lungimea fiecărui arc`. `R`, `P` și `F` aleg tipul pentru următorul nor. Rezultatul este o polilinie închisă de arce.

### MLEADER

Aliasuri: `MLD`; sau {{ui:Indicație}}. `Specificați locul săgeții indicației [Mărimea săgeții/Distanța de aterizare/Bloc (B)]`, `Specificați locul de aterizare al indicației`, apoi textul în caseta de pe loc (sau, fără ea, `Introduceți textul (un rând gol încheie)`). `Bloc` cere întâi un nume de bloc, iar indicația multiplă arată blocul în loc de text. Mai multe linii de indicație: {{cmd:MLEADEREDIT}}. Salvată ca o indicație multiplă reală în DWG; DXF păstrează liniile, săgeata și textul pe care le desenează.

### MLEADEREDIT

Aliasuri: `MLE`. `Selectați o indicație multiplă`, apoi `Specificați locul săgeții indicației [Eliminare indicații/Conținut bloc/Conținut text]`: fiecare punct adaugă o linie de indicație de la o săgeată nouă la aceeași aterizare, până la Enter. `Remove leaders` ia apoi linia de indicație pe care dați clic (o indicație multiplă păstrează cel puțin una). `Block content` cere un nume de bloc și arată blocul în loc de text (atributele sale sunt cerute); `Text content` pune textul la loc. Fiecare linie de indicație are propriul mâner. Un DWG păstrează fiecare linie de indicație și blocul într-o singură indicație multiplă.

### MLEADERALIGN

Aliasuri: `MLA`. `Selectați indicațiile multiple`, apoi `Selectați indicația multiplă de aliniat [Distribuire (D)/Distanțare (S)/Folosește distanța curentă (U)]` și `Specificați direcția`. Mută aterizările celorlalte indicații multiple (și textul sau blocul lor) pe linia care trece prin aterizarea celei alese, în acea direcție; săgețile rămân unde indică. `Spacing` le pune și la distanțe egale; `Distribute` cere două puncte și le împrăștie uniform între ele. Are nevoie de cel puțin două indicații multiple.

### MLEADERCOLLECT

Aliasuri: `MLC`. `Selectați indicațiile multiple`, apoi `Specificați locul indicației multiple adunate [Vertical/Orizontal]` (Enter păstrează locul primei). Face o singură indicație multiplă din mai multe: conținutul de bloc intră într-un bloc nou care le ține pe toate una lângă alta sau una sub alta; conținutul de text devine o singură notă, cu câte un rând pentru fiecare. Prima indicație multiplă își păstrează liniile de indicație; celelalte sunt eliminate. Refuză un amestec de conținut text și de bloc.

### TABLE

Aliasuri: `TB`; sau {{ui:Adnotare}} › {{ui:Mai multe}} › {{ui:Tabel}}. Creează un tabel: un obiect pe care îl mutați, copiați, rotiți, scalați și tipăriți ca orice alt obiect, cu celulele sale păstrate ca date.

- `Numărul rândurilor de date sau [Lipire (P)/Fișier (F)/Stil (S)] <3>`, apoi `Numărul de coloane <3>`, `Înălțimea textului` și `Colțul stânga-sus al tabelului`. Tabelul primește un rând de titlu (o celulă îmbinată) și un rând de antet deasupra rândurilor de date.
- `P`: un tabel din celule de foaie de calcul din clipboard (text cu un tabulator între celule). Apăsarea {{key:Ctrl+V}} cu astfel de celule în clipboard face același lucru, dacă nu cumva copia proprie a CadCraft este mai nouă (sau CadCraft nu poate deosebi: atunci lipește propria copie și spune asta). `F`: un tabel dintr-un fișier `.csv` sau cu valori separate prin tabulator. Primul rând devine rândul de antet; lățimile coloanelor se potrivesc cu textul.
- `S`: alege stilul de tabel pentru acest tabel (vezi {{cmd:TABLESTYLE}}).
- Refuză un număr de rânduri sau coloane care nu este întreg și mai multe celule decât încape într-un tabel (2.000 de rânduri, 200 de coloane, 40.000 de celule).
- {{cmd:EXPLODE}} transformă un tabel în linii și text. Salvat ca DWG, un tabel este un obiect de tabel real pe care alte programe îl pot edita; salvat ca DXF, este un bloc care îl desenează, iar CadCraft îl deschide din nou ca tabel.

### TABLEDIT

Aliasuri: `TABLEEDIT`, `TABEDIT`; sau dublu clic pe o celulă. Editează un tabel.

- `Alegeți o celulă în care să scrieți (Enter pentru a termina) sau [Rând (R)/Coloană (C)/Mărime (S)/Îmbinare (M)/Separare (U)/Aliniere (A)/Înălțime (H)/Tip (K)/Golire (CL)]`. Dați clic pe o celulă sau, cu un tabel selectat, tastați numele ei (`B3`: coloana B, rândul 3; rândul de titlu este rândul 1). În browser se deschide o casetă peste celulă: {{key:Enter}} păstrează textul, {{key:Tab}} trece la celula următoare, {{key:Alt+Enter}} începe un rând nou, {{key:Esc}} lasă celula cum era.
- Un text care începe cu `=` este o formulă: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, cu `+ - * / ^`, paranteze și funcții precum `sqrt` și `round`. Celula arată valoarea; o formulă care se referă la propria celulă, la o celulă din afara tabelului sau la o celulă fără număr arată `####`, iar linia de comandă spune de ce.
- `R` / `C`: `Inserare` sau `Ștergere` rânduri sau coloane la o celulă aleasă (câte, și deasupra sau dedesubt, la stânga sau la dreapta). Formulele urmează celulele la care se referă.
- `S`: lățimea coloanei și înălțimea rândului. Un rând nu este niciodată mai jos decât are nevoie textul. Un tabel selectat are și un mâner pe marginea fiecărei coloane și a fiecărui rând.
- `M`: îmbinare de la o celulă aleasă până la alta; `U`: separare. `A`: aliniere (`TL` stânga-sus … `MC` mijloc-centru … `BR` dreapta-jos). `H`: înălțimea textului propriu a acestei celule (0 = a stilului). `K`: face din rând un rând de titlu, de antet sau de date. `CL`: golește celula.
- Refuză un tabel pe un strat blocat, ștergerea tuturor rândurilor sau coloanelor și o îmbinare care ar tăia în două o altă celulă îmbinată.

### TABLESTYLE

Aliasuri: `TS`. Listează stilurile de tabel cu câte tabele folosește fiecare, apoi `Stil de tabel: [Nou (N)/Setare (S)/Editare (E)/Ștergere (D)/Aplicare (A)]`.

- Un stil reține înălțimea textului și alinierea rândurilor de titlu, de antet și de date, marginea celulei și care borduri sunt desenate (exterioare, între rânduri, între coloane).
- `N` face un stil din cel curent și îl face curent; `S` setează stilul curent (tabelele noi îl primesc); `E` editează unul: tabelele care îl folosesc sunt redesenate; `A` dă tabelelor selectate stilul curent; `D` șterge unul (nu Standard, nu cel curent; tabelele care îl foloseau își păstrează aspectul).
- Stilurile sunt salvate cu desenul (DWG și DXF).

### TABLEEXPORT

Salvează ce arată un tabel ca fișier CSV (o formulă ca valoarea ei). `Selectați un tabel`, sau selectați-l mai întâi. Celulele de text care încep cu `=`, `+`, `-` sau `@` primesc un `'` în față, ca o foaie de calcul să nu le execute.

### TABLEPASTE

Aliasuri: `PASTETABLE`. Face un tabel din celule de foaie de calcul din clipboard, apoi cere colțul lui stânga-sus. La fel ca {{cmd:TABLE}} › `Lipire`.

### DATALINK

Aliasuri: `DL`. `Legătură de date: [Nou (N)/Listă (L)/Eliminare (R)] <Nou>`. `N` cere un fișier CSV, plasează un tabel din el și reține numele fișierului; `L` listează legăturile cu fișierul lor, mărimea, momentul când a fost citit și câte tabele o folosesc; `R` elimină o legătură (tabelele ei rămân tabele simple).

### DATALINKUPDATE

Aliasuri: `DLU`. Citește din nou fișierul unei legături de date și reumple tabelele legate de el (rândurile și coloanele sunt adăugate sau scoase ca să se potrivească). Un browser nu poate deschide singur un fișier, deci cere să alegeți fișierul din nou. Cu mai multe legături, întreabă care.

### FIELD

Pune un câmp în desen: text care se calculează singur. `Câmp: [Dată (D)/Nume fișier (F)/Planșă (S)/Proprietate (P)/Obiect (O)/Expresie (E)/Cod (C)] <Dată>`:

- `D`: acum, sau data salvată, creată ori trasată, și un format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: numele fișierului, cu sau fără extensie. `S`: numărul planșei, titlul ei sau câte planșe sunt. `P`: o proprietate a desenului după nume (vezi {{cmd:DWGPROPS}}). `O`: alegeți un obiect, apoi ce să citească (aria, lungimea, perimetrul, raza, diametrul, stratul, numele, x, y, textul, rotația, culoarea) și zecimalele. `E`: o formulă. `C`: un text cu coduri scrise așa cum sunt, precum `Planșa %<sheetnumber>% din %<sheetcount>%`.
- Apoi `Selectați un text, o celulă de tabel sau un bloc cu atribute în care să-l puneți (Enter: un text nou)`: un text ales primește câmpul adăugat după ce conține; o celulă de tabel la fel; o referință de bloc cere ce atribut; {{key:Enter}} cere o înălțime și un punct pentru un text nou.
- Pe ecran un câmp are un fond gri deschis; o trasare și un PDF nu îl au niciodată. Scrierea peste textul unui câmp cu mâna încheie câmpul. Un câmp care nu poate fi calculat arată `####`.
- Câmpul unui obiect își găsește obiectul după cheia pe care CadCraft o ține pe obiecte (Setări › CadCraft › Fișiere ușor de îmbinat); cu cheile oprite, refuză.

### UPDATEFIELD

Aliasuri: `UPDATEFIELDS`. `Selectați obiectele ale căror câmpuri să le actualizați (Enter: fiecare câmp) sau [Setări (S)]`. `S` stabilește când se actualizează câmpurile singure: tastați literele `O` deschidere, `S` salvare, `P` trasare, `R` regenerare (toate patru ca să pornească), sau `NONE`.

### DWGPROPS

Aliasuri: `DRAWINGPROPS`. Listează proprietățile desenului, apoi `Modificare: [Titlu (T)/Subiect (S)/Autor (A)/Companie (C)/Cuvinte cheie (K)/Comentarii (M)/Personalizat (U)/Eliminare (R)/Ieșire (X)]`. Primele șase sunt cele pe care le arată panoul {{ui:Proprietăți desen}}; `U` adaugă un nume și o valoare proprii, `R` elimină unul. Câmpurile le citesc (`%<prop:title>%`, `%<prop:Client>%`) și urmează imediat. Refuză un nume personalizat care este unul dintre cele integrate sau care conține `%`, `<`, `>`, un ghilimele sau o bară inversă.

## Parametric

Vezi [Constrângerea unui desen](topic:constraints) și [Folosirea parametrilor și a ecuațiilor](topic:parameters). Constrângerile lucrează pe fila {{ui:Model}}.

### GEOMCONSTRAINT și comenzile GC

Alias `GCON`: `Introduceți tipul constrângerii [Orizontală (H)/Verticală (V)/Perpendiculară (P)/Paralelă (PA)/Tangentă (T)/Coincidentă (CO)/Concentrică (CON)/Coliniară (COL)/Simetrică (S)/Egală (E)/Fixare (F)] <Orizontală>`, apoi solicitările acelei comenzi.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Selectați un obiect [2Puncte] <2Puncte>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Selectați primul obiect`, `Selectați al doilea obiect` (al doilea se mută).
- {{cmd:GCCOINCIDENT}}: `Selectați primul punct [Obiect/Auto-constrângere] <Obiect>`, `Selectați al doilea punct [Obiect] <Obiect>`.
- {{cmd:GCFIX}}: `Selectați punctul [Obiect] <Obiect>`.
- {{cmd:GCSYMMETRIC}}: `Selectați primul obiect [2Puncte] <2Puncte>`, `Selectați al doilea obiect`, `Selectați linia de simetrie`.

### DIMCONSTRAINT și comenzile DC

Alias `DCON`: `Selectați cota asociativă de convertit [Liniară (LI)/Orizontală (H)/Verticală (V)/Aliniată (AL)/Unghiulară (AN)/Radială (R)/Diametru (D)/Convertire (C)] <Aliniată>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specificați primul punct de constrângere [Obiect] <Obiect>`, `Specificați al doilea punct de constrângere`, `Specificați locul liniei de cotă`, `Text de cotă <d1=40>` (un număr, o expresie sau `nume=expresie`).
- {{cmd:DCALIGNED}}: ca mai sus, cu `[Obiect/Punct și linie/2Linii]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Selectați arc sau cerc`. {{cmd:DCANGULAR}}: `Selectați prima linie sau arc`, `Selectați a doua linie`.
- {{cmd:DCCONVERT}}: `Selectați cotele de convertit`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Selectați obiecte [Setări (S)]`. `S` cere toleranțele de distanță și unghi.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Selectați obiecte`; constrângerile lor dispar.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Selectați obiecte [Arată tot (SA)/Ascunde tot (HA)]`, apoi `[Arată (S)/Ascunde (H)]`.
- {{cmd:DCDISPLAY}}: `Introduceți o opțiune [Arată (S)/Ascunde (H)]`.

### PARAMETERS și -PARAMETERS

{{cmd:PARAMETERS}} (aliasuri `PAR`, `PARAM`) deschide panoul {{ui:Parametri}}. `-PARAMETERS`: `Introduceți o opțiune [Nou (N)/Editare (E)/Redenumire (R)/Ștergere (D)/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Descarcă o macro (.swb) care reconstruiește modelul ca un singur desen constrâns în SolidWorks. Vezi [Mutarea desenelor spre și de la alți modelatori de piese](topic:solidworks-sketches).

## Blocuri

### ANNOSCALE

Aliasuri: `CANNOSCALE`. Spune scara de adnotare a desenului și câte obiecte adnotative are, apoi cere `Noua scară de adnotare`: tastați `1:50`, `1:100`, `2:1`, un număr simplu (`50` înseamnă 1:50) sau numele uneia dintre scările proprii ale desenului. Fiecare text și cotă adnotativă este redimensionat ca să se tipărească la aceeași dimensiune la noua scară, într-un singur pas de anulare; obiectele care nu sunt adnotative rămân neatinse, la fel și un obiect care păstrează o listă de scări fără cea nouă ({{cmd:OBJECTSCALE}}). Vezi [Unități, pagini și scări](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Aliasuri: `OBJSCALE`. `Selectați obiectele adnotative`, apoi `Scările de adnotare ale obiectelor selectate [Adăugare (A)/Ștergere (D)/Scara curentă (C)/Listă (L)/Ieșire (X)] <Adăugare>`. Un text sau o cotă adnotativă păstrează o listă de scări de adnotare. `Add` și `Delete` cer o scară (`1:50`, `2:1`, un număr simplu sau numele uneia dintre scările proprii ale desenului); `Current scale` adaugă scara de adnotare a desenului; `List` afișează scările fiecărui obiect. O fereastră a cărei scară se află în lista unui obiect îl arată la mărimea care tipărește înălțimea lui pe hârtie la acea scară, pe ecran și în trasări. Ultima scară nu poate fi ștearsă. Obiectele care nu sunt adnotative sunt lăsate deoparte: pornește mai întâi Adnotativ în Proprietăți. Listele sunt salvate în DWG și DXF ca date proprii CadCraft. Vezi [Unități, pagini și scări](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Aliasuri: `ANNOALL`. `Arată obiectele adnotative la toate scările [ON/OFF]`. Pornit (cum începe un desen): un obiect adnotativ se arată și într-o fereastră, sau în model, a cărei scară nu se află în lista lui, la mărimea pe care o are. Oprit: nu se arată acolo și nu poate fi ales în model. Comutatorul este un singur pas de anulare; nu este păstrat în fișier.

### SCALELISTEDIT

Aliasuri: `SCALELIST`. `Listă de scări [Adăugare (A)/Editare (E)/Ștergere (D)/Listă (L)/Resetare (R)]` până la {{key:Enter}}. Adăugare: `Nume de scară`, `Unități pe hârtie`, `Unități de desen`. Editare și Ștergere cer numele scării. Scările proprii ale desenului intră în listele de scări ale ferestrelor și trasării și sunt salvate cu desenul. Vezi [Unități, pagini și scări](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT și PEDIT

`SPLINE` (`SPL`): `Primul punct al splinei [Metodă (M)/Obiect (O)] (Puncte de potrivire)`. Potrivire: puncte prin care trece curba; `Close`, `Undo`, apoi `Tangentă de start` și `Tangentă de sfârșit` (un punct, sau {{key:Enter}}). Metodă › Vârfuri de control cere un grad (1 până la 5) și desenează dintr-un poligon de control. Obiect transformă polilinii în spline-uri prin vârfurile lor. `SPLINEDIT` (`SPE`): `[Date de potrivire/Editare vârf/convertire în Polilinie/Deschidere sau Închidere/Inversare/Anulare/Ieșire]`; Date de potrivire `[Adăugare/Ștergere/Mutare/Curățare/Tangente/Ieșire]`; Editare vârf `[Adăugare punct de control/Mutare/Greutate/Ieșire]`. `PEDIT` (`PE`): `[Închidere/Deschidere/Unire/Lățime/Potrivire/Spline/Decurbare/Generare tip de linie/Inversare/Anulare/Ieșire]`, `M` pentru mai multe obiecte; liniile, arcele și splinele sunt oferite mai întâi ca polilinii. Vezi [Spline-uri și polilinii](topic:splines).

### BLOCK

Aliasuri: `B`, `BMAKE`.

- `Introduceți numele blocului`. Dacă există: `Blocul „…” există deja. Îl redefiniți? [Da/Nu] <N>`.
- `Specificați punctul de bază al inserției`
- `Selectați obiecte`. Sunt înlocuite cu o singură referință la noul bloc.

### WBLOCK

Aliasuri: `W`, `-WBLOCK`. Scrie un bloc, unele obiecte sau tot desenul ca fișier DWG sau DXF nou. `Sursa WBLOCK [Bloc (B)/Tot desenul (E)/Obiecte (O)] <Obiecte>`:

- **Obiecte**: `Specificați punctul de bază al inserției` (devine originea noului desen), `Selectați obiecte`, apoi `Format fișier [DWG/DXF/R12 DXF]` și `Nume fișier pentru noul desen`, apoi `Ce să facem cu obiectele [Păstrare (R)/Transformare în bloc (C)/Ștergere (D)]`. Transformare le înlocuiește cu o singură referință la un bloc cu numele fișierului; Ștergere le scoate.
- **Bloc**: `Blocul de scris`. Obiectele blocului, cu punctul său de bază ca origine, inclusiv blocurile imbricate.
- **Tot desenul**: fiecare obiect din spațiul model. Planșele nu se scriu; folosiți {{cmd:SAVEAS}} pentru o copie care le păstrează.

Fișierul nou conține doar straturile, tipurile de linii, stilurile de text și de cotare și blocurile pe care le folosesc obiectele sale, precum și unitățile desenului. Versiunea unui DWG este cea pe care a folosit-o ultima dată {{cmd:SAVEAS}}. În browser fișierul se descarcă; în Studio se deschide fereastra de salvare.

### ATTDEF

Aliasuri: `ATT`, `DDATTDEF`, `-ATTDEF`; sau {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Definire atribut}}. Afișează modurile, apoi `Introduceți o opțiune de schimbat (Enter când ați terminat) [Invizibil (I)/Constant (C)/Presetat (P)]`, `Introduceți numele etichetei atributului`, `Introduceți solicitarea atributului`, `Introduceți valoarea implicită a atributului` (`Introduceți valoarea atributului` când este constant), `Specificați punctul de start al textului`, `Specificați înălțimea textului`, `Specificați unghiul de rotație al textului`. {{cmd:BLOCK}} ia definițiile atributelor în bloc.

### EATTEDIT și ATTEDIT

`EATTEDIT` (`DDATTE`, sau dublu clic pe o referință cu atribute; {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Editare atribute}}): `Selectați o referință de bloc cu atribute`, apoi caseta de dialog {{ui:Editare atribute}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): aceeași referință, apoi `<solicitare> (<TAG>) <valoare>` pentru fiecare atribut; {{key:Enter}} păstrează o valoare. Vezi [Atribute](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Actualizați atributele referințelor cărui bloc [Nume (N)/Selectare (S)/Toate (A)] <Selectare>`. Valorile sunt păstrate; atributele noi primesc valoarea implicită, cele eliminate dispar, poziționările se resetează.

### BATTMAN

{{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Manager de atribute}}. Caseta de dialog: blocul, atributele (etichetă, solicitare, valoare implicită, moduri, ordine), {{ui:Actualizare referințe (valorile păstrate)}}, {{ui:Aplicare}}.

### REFEDIT și REFCLOSE

{{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Editare pe loc}}. `REFEDIT`: `Selectați referința de bloc de editat pe loc` (sau selecția). `REFCLOSE`: `Salvați modificările la „…” [Salvare (S)/Renunțare (D)] <Salvare>`; {{ui:Salvare bloc}} și {{ui:Renunțare}} din bară fac același lucru. Întreaga editare este un singur pas de anulare. Vezi [Atribute](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT și BCLOSE

`BE`; sau {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Modificare bloc}}. `Introduceți numele blocului de editat <blocul referinței selectate>` deschide editorul de blocuri. `BCLOSE` cere `Închideți editorul de blocuri pe „…” [Salvare (S)/Renunțare (D)] <Salvare>`; {{ui:Salvare bloc}} și {{ui:Renunțare la modificări}} din banderola editorului fac același lucru. Tot ce se face în editor este un singur pas de anulare.

### VIEWBASE

Alias: `FLATSHOT`. O vedere 2D plată a solidelor de pe fila 3D: `Vedere [Față (F)/Sus (T)/Dreapta (R)/Stânga (L)/Spate (BA)/Jos (BO)/Izometrică (I)]`, `Linii ascunse [Arată (S)/Ascunde (H)]`, o scară (`1:20`, `2:1`; {{key:Enter}} ia cea care se potrivește planșei), apoi centrul vederii. O singură referință de bloc, cu muchiile vizibile pe VIEW-VISIBLE și cele ascunse punctate pe VIEW-HIDDEN. Vezi [Vederi plate pe o planșă](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliasuri: `-PUBLISH`; sau {{ui:Toate foile într-un singur PDF}} din caseta de dialog {{ui:Trasare în PDF}}. `Planșe de trasat [Toate (A)/Unele (S)]`: {{key:Enter}} trasează fiecare planșă, `S` cere nume separate prin virgulă. Un singur PDF, o pagină și un marcaj pentru fiecare planșă. Vezi [Fiecare planșă într-un singur PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliasuri: `SSM`, `SHEETSETMANAGER`. Vă duce la secțiunea {{ui:Set de planșe}} din panoul din stânga: planșe din multe desene, numerotate și intitulate, cu cartușele completate din set, publicate ca un singur PDF. Vezi [Seturi de planșe](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): alegeți un DWG sau DXF, apoi punctul lui de inserție. {{cmd:XREF}} (`XR`, `-XREF`): `Desene legate [?/Atașare (A)/Reîncărcare (R)/Legare (B)/Detașare (D)] (Enter: ?)`; cu mai multe legături, alegeți una dintre referințele ei sau tastați `N` și numele ei. Vezi [Desene legate](topic:files#linked-drawings-external-references).

### COUNT

Aliasuri: `BCOUNT`; sau {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Numărare blocuri}}. `Selectați o referință de bloc de numărat sau [Toate (A)/Export (E)] (Enter: Toate)`: o alegere selectează și numără fiecare referință a acelui bloc în acest spațiu; {{key:Enter}} sau `A` le listează pe toate; `E` apoi `C` (numărători) sau `A` (atribute) descarcă un CSV. Vezi [Numărarea blocurilor și exportul unei liste](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliasuri: `I`, `DDINSERT`.

- `Introduceți numele blocului sau [Fișier (F)/Bibliotecă (L)] <ultimul bloc>` (majusculele nu contează). `F` cere un DWG sau DXF, apoi întregul desen sau unul dintre blocurile lui; un nume deja folosit cere {{ui:Păstrare existente}} sau {{ui:Redenumire}}. `L` deschide panoul bibliotecii.
- `Specificați punctul de inserție [Scară (S)/Rotație (R)]`. `S` cere `Specificați factorul de scară`, `R` cere `Specificați unghiul de rotație`; ambele sunt reținute.
- Când blocul stă deja lângă obiecte care se repetă în altă parte fără el, o linie spune câte locuri sunt sugerate, iar solicitarea primește `suGgested`: `G` le arată; dați clic aproape de unul ca să puneți acolo blocul, `A` pentru toate, {{key:Enter}} ca să reveniți. Ele iau rotația vecinilor și valorile implicite ale atributelor. Desenele cu peste 20.000 de obiecte în spațiul deschis nu sunt căutate.
- Apoi `Introduceți <solicitare> (<TAG>) <implicit>` pentru fiecare atribut pe care îl cere blocul. Vezi [Atribute de bloc](topic:attributes).

### LIBRARY

Aliasuri: `LIB`. Deschide panoul bibliotecii: plasează elemente, verifică actualizări, credite ale bibliotecii. Fără întrebări. Vezi [Inserarea dintr-un fișier sau din bibliotecă](topic:insert-from-file-and-library).

### STEELMEMBER

Aliasuri: `SMEMBER`; sau {{ui:Bară 3D}} din fila {{ui:Standard}} a bibliotecii. `Dimensiunea profilului <W12x26>` (cum o listează fila), apoi `Punctul de start [Coloană (C)]` și `Punctul final`: o bară solidă pe fila 3D între cele două puncte, așezată pe sol. `C` cere punctul de bază al coloanei și înălțimea ei. Un singur pas de anulare. Vezi [Plasarea profilelor de oțel și a pieselor standard](topic:steel-and-standard-parts).

### PARTSLIST

Aliasuri: `PLIST`. `Colțul stânga-sus al listei de piese`, apoi `Înălțimea textului <2,5>`: desenează un tabel cu fiecare piesă standard și profil de oțel plasat din bibliotecă (numere de articol, cantitate, piesă, standard, dimensiune, lungime, material, masă). Un singur pas de anulare. Vezi [Plasarea profilelor de oțel și a pieselor standard](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliasuri: `PU`. Elimină definițiile de blocuri pe care nimic nu le folosește. Fără întrebări.

### DELBLOCKS

Sau {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Ștergere blocuri}}. `Selectați blocul de șters [Nume (N)/Ieșire (X)]`: alegeți o referință de bloc, sau `N` pentru lista blocurilor cu filtru (alegeți mai multe), sau `X` / {{key:Enter}} ca să încheiați. Fiecare referință dispare — în model, pe fiecare planșă și în interiorul altor blocuri — apoi definiția, iar linia de comandă spune ce a fost șters și ce nu a putut fi. Blocurile fără nume și desenele legate nu sunt oferite. Solicitarea revine pentru blocul următor; întreaga comandă este un singur pas de anulare.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} lipește ce ați copiat ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) ca un singur bloc: alegeți punctul de inserție și o referință la un bloc nou merge acolo, selectată. Blocul primește un nume propriu (`A$C` și un număr); {{cmd:RENAME}} îi dă un nume ales. Un singur pas de anulare scoate referința și blocul.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} cere blocul de înlocuit și blocul care îi ia locul (`?` listează blocurile), apoi schimbă fiecare referință din model, de pe fiecare planșă și din interiorul altor blocuri. Fiecare referință își păstrează locul, scara, rotația, stratul și valorile atributelor pe care le au ambele blocuri; atributele pe care le are doar blocul nou încep cu valorile implicite, iar programul spune ce valori au fost eliminate. Când nimic nu mai folosește blocul vechi, oferă să-l șteargă. Refuză desenele legate și un înlocuitor care ar pune un bloc în el însuși. Un singur pas de anulare.

### MINSERT

{{cmd:MINSERT}} plasează un bloc în rânduri și coloane: numele blocului, punctul de inserție, scara, rotația, numărul de rânduri și coloane și distanțele dintre ele. Tot setul se rotește odată cu rotația. Fiecare este propria referință (cel mult 10.000), deci oricare poate fi mutată sau ștearsă ulterior.

### BLOCKSPALETTE

Aliasuri: `BLOCKSPAL`; sau {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Panoul Blocuri}}. Arată panoul {{ui:Blocuri}} cu cursorul în filtrul lui. Fiecare bloc are o imagine mică; cele plasate cel mai recent sunt primele. Cele două butoane de lângă filtru comută între o listă și o grilă de imagini. Dați clic pe o imagine (sau pe {{ui:Inserare}}) ca să plasați blocul cu {{cmd:INSERT}}, sau trageți-l pe desen ca să-l plasați acolo unde-l lăsați.

{{ui:Biblioteci}}, sub listă: {{ui:Adăugare desen}} ia un fișier DWG sau DXF propriu și îi listează blocurile cu imagini, iar tot desenul devine un singur bloc. Plasarea unuia copiază definiția lui (și blocurile pe care le imbrică, și straturile lor) în acest desen, ca opțiunea `File` a lui {{cmd:INSERT}}; un bloc deja prezent aici, cu aceeași definiție, este folosit fără întrebare; unul cu același nume, dar diferit, cere {{ui:Păstrare existente}} sau {{ui:Redenumire}}. Într-un browser fișierul rămâne până se închide pagina. În CadCraft Studio {{ui:Adăugare dosar}} listează desenele dintr-un dosar, fiecare deschis când dați clic pe el, iar fișierele și dosarele sunt reținute. Mica x scoate o bibliotecă din listă; fișierul nu este atins. {{ui:Bibliotecă}} comună este altceva: vezi [Inserarea dintr-un fișier sau din bibliotecă](topic:insert-from-file-and-library).

### BCONVERT

Sau {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Convertire repetări în blocuri}}. Găsește geometria care se repetă și transformă fiecare copie într-o referință la un singur bloc.

- `Selectați obiectele care se repetă sau [Bloc (B)]`: obiectele unei copii. `B` numește în schimb un bloc existent, ca să găsească copii libere ale obiectelor sale.
- `O copie poate fi: oglindită = Nu, scalată = Nu; strat, culoare, tip de linie și grosime = Potrivire … [Oglindit/Scalat/Proprietăți]`: `M`, `S` și `P` schimbă ce contează ca o copie; {{key:Enter}} caută. Setările sunt reținute.
- `Nume pentru noul bloc <Block1>`, apoi `Specificați punctul de bază al blocului` ({{key:Enter}} ia colțul stânga-jos al selecției).
- Spune câte alte seturi de obiecte au aceeași geometrie, evidențiază tot ce ar înlocui și întreabă `Da/Nu`.

O copie este aceleași obiecte mutate și rotite la orice unghi (și oglindite sau scalate cu un singur factor, când acestea sunt pornite): fiecare obiect trebuie să aibă omologul lui, în limita unei milionimi din mărimea selecției. Fiecare referință primește propria rotație și scară (una oglindită primește o scară Y negativă), și stratul pe care îl aveau în comun obiectele. Obiectele de pe straturi blocate rămân neatinse și sunt numărate. Caută în spațiul deschis (modelul sau planșa deschisă). O căutare foarte mare se oprește la o limită de lucru și spune asta. Un singur pas de anulare.

### BSEARCH

Sau {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Găsire blocuri}}. `Găsiți blocuri după [Nume (N)/Atribut (A)/Geometrie (G)] <Nume>`:

- `N`: o parte din numele unui bloc, sau un model cu `*` și `?`. Listează fiecare bloc cu referințele lui aici și în tot desenul.
- `A`: o valoare de atribut, sau `TAG=valoare`. Listează blocurile ale căror referințe o au, cu valorile găsite. Atributele constante contează.
- `G`: selectați obiecte, sau o referință de bloc, iar blocurile a căror formă este asemănătoare în proporție de cel puțin 85% sunt listate, cele mai bune primele. Dimensiunea, rotația și oglindirea nu contează. Măsura compară distanțele dintre puncte împrăștiate de-a lungul contururilor, deci găsește asemănări; folosiți {{cmd:BCONVERT}} pentru copii exacte.

Referințele găsite în spațiul deschis sunt selectate, gata pentru următoarea comandă.

### BREPLACE

Sau {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Înlocuire blocuri}}. `Înlocuire [Selectate (S)/Toate (A)]`: `S` înlocuiește referințele de bloc pe care le selectați cu blocul pe care îl numiți; `A` cere un bloc și înlocuitorul lui și schimbă fiecare referință, cum face {{cmd:BLOCKREPLACE}} (același cod). O referință își păstrează locul, scara, rotația, stratul și valorile atributelor pe care le au ambele blocuri; valorile pentru care blocul nou nu are loc sunt eliminate și numite. `?` listează blocurile. Un singur pas de anulare.

### DATAEXTRACTION

Aliasuri: `EATTEXT`, `DX`; sau {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Extragere date}}. Listează blocurile, atributele lor și proprietățile obiectelor ca tabel sau fișier CSV.

- Lucrează pe selecție sau întreabă `Selectați obiecte (Enter: tot ce este în acest spațiu)`.
- `List: [Blocuri/Obiecte/Toate]` când selecția le conține pe amândouă. Blocurile fără nume, tabelele și listele de materiale nu sunt listate niciodată.
- Afișează coloanele din care puteți alege (nume, tip, strat, X, Y, rotație, scară, lungime, arie, culoare, tip de linie, spațiu și câte una pentru fiecare etichetă de atribut), apoi `Coloane, după nume sau număr, cu virgule între ele`. {{key:Enter}} ia coloanele marcate cu steluță: numele și fiecare atribut pentru blocuri; tipul, stratul și lungimea pentru obiecte.
- `Puneți rândurile identice împreună cu un număr? [Da/Nu] <Da>`, apoi `Puneți lista într-un: [Tabel/Csv] <Tabel>`. Un tabel este un tabel obișnuit ({{cmd:TABLEDIT}} îl editează) și nu este activ: rulați din nou comanda după ce desenul se schimbă.
- Refuză o coloană care nu este în listă. Un tabel ține 1.999 de rânduri de date; un fișier CSV le ține pe toate.

### COUNTTABLE

Numără referințele de bloc din selecție (sau din spațiul deschis) și pune numărătorile într-un tabel (`Block`, `Count`) sau într-un fișier CSV. Pentru o numărătoare care urmează singură desenul, vezi {{cmd:BOMTABLE}}.

## Planșe și trasare

### LAYOUT

Aliasuri: `LO`, `NEWLAYOUT`; sau butonul {{ui:+}} de sub desen. O planșă nouă cu un chenar, un cartuș și o fereastră, pe ISO A3 (sau Tabloid pentru desenele în țoli sau picioare). Fără întrebări.

### MVIEW

Aliasuri: `MV`. Doar pe o planșă ({{cmd:VPORTS}} pe o planșă face același lucru).

- `Specificați colțul ferestrei [Poligonal (P)/Obiect (O)]`, `Specificați colțul opus`. Fereastra arată tot modelul la o scară standard.
- `P` (Poligonal): dați clic pe colțurile conturului (`Anulare (U)`, `Închidere (C)`), {{key:Enter}} când ați terminat. Refuză mai puțin de trei colțuri.
- `O` (Obiect): `Selectați un obiect închis pentru conturul ferestrei`: o polilinie închisă, un cerc sau o elipsă pe planșă. Fereastra ia forma lui (curbele ca scurte bucăți drepte); obiectul rămâne cum era. Refuză un obiect care nu este închis.

### VPCLIP

Decupează o fereastră care este deja pe planșă. `Selectați fereastra de decupat` (sau selectați-o mai întâi), apoi `Selectați obiectul la care să decupați [Poligonal (P)/Ștergere (D)]`:

- Dați clic pe o polilinie închisă, pe un cerc sau o elipsă, sau {{key:Enter}} (ori `P`) ca să dați clic pe colțurile unui poligon.
- `D` (Ștergere, oferit când fereastra este decupată) o face din nou dreptunghi: cutia din jurul conturului pe care îl avea.
- Ce arată fereastra nu se mută pe hârtie, iar scara ei rămâne. Modelul este desenat și trasat doar în interiorul conturului, iar chenarul îl urmează. Un singur pas de anulare.
- O fereastră decupată are un mâner la fiecare colț al conturului ei, pe lângă centrul ei și cele patru colțuri ale cutiei (trăgând un colț al cutiei se întinde și conturul). Proprietăți arată Contur: Dreptunghi, sau Decupat cu numărul de colțuri.
- Fișierele DWG și DXF 2000 păstrează conturul pentru CadCraft. Alte programe deschid fereastra ca dreptunghiul din jurul ei; DXF R12 păstrează doar dreptunghiul.
- Pe fila model spune că ferestrele sunt pe planșe.

### VPORTS

Aliasuri: `VIEWPORTS`. {{cmd:SPLIT}} este la fel și de pe o planșă, iar {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Împărțire alăturată}}, {{ui:Împărțire suprapusă}}, {{ui:Patru panouri}}, {{ui:Un panou}} o rulează. Pe model: `Introduceți numărul de panouri [SIngle/2/3/4] <3>`; `2` cere `[Orizontal/Vertical] <Vertical>` (Vertical = alăturat), `3` cere `[Stânga/Dreapta] <Dreapta>` (unde merge panoul mare). Fiecare panou își păstrează propria vedere și spațiu; un clic face un panou activ. Pe o planșă este {{cmd:MVIEW}}. Vezi [Împărțirea ecranului](topic:split-screen).

### VPVIEW

Fără aliasuri. Doar pe o planșă.

- `Selectați fereastra` (sărit dacă una este selectată), apoi pe model: `Specificați primul colț al ferestrei de arătat`, `Specificați colțul opus`.

### UCS

Fără aliasuri. Un sistem de coordonate propriu; nu o editare. `Specificați originea SCU [Denumit (NA)/Obiect (OB)/Precedent (P)/Global (W)/Z/3puncte (3)] <Global>`: un punct este o origine nouă, apoi `Specificați punctul de pe axa X (Enter păstrează unghiul)`. `Z`: `Specificați unghiul de rotație în jurul axei Z <90>`. `3`: origine, un punct pe semiaxa X pozitivă, un punct de partea Y pozitiv. `OB`: `Selectați obiectul de aliniat SCU`. `NA`: `[Restaurare/Salvare/Ștergere/?]` și un nume. Vederea se rotește ca noua axă X să fie orizontală. Vezi [Rotirea vederii și folosirea propriilor coordonate](topic:ucs-and-turned-view).

### PLAN

Fără aliasuri. `Introduceți o opțiune [SCU curent (C)/Ucs (U)/Global (W)] <SCU curent>`: rotește vederea panoului activ astfel încât axa X a SCU (sau a globului) să fie orizontală. Nimic din desen nu se mută.

### TURNLEFT, TURNRIGHT, TURNWORLD

Fără aliasuri; sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Rotire vizualizare 90° la stânga}}, {{ui:Rotire vizualizare 90° la dreapta}}, {{ui:Înapoi la global}}. La fel ca `UCS Z -90`, `UCS Z 90` și `UCS W`, iar vederea urmează.

### VPLAYER

Fără aliasuri. Pe o planșă sau în interiorul unei ferestre. `Introduceți o opțiune [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` cer numele straturilor (cu virgule și jokere `*` și `?`), apoi ferestrele `[Toate (A)/Selectare (S)/Curent (C)] <Curent>`; Reset pune fiecare strat înapoi la implicitul „înghețat în ferestrele noi”; `V` stabilește acel implicit (`[Înghețat/Dezghețat]`), pe care îl folosește {{cmd:MVIEW}}. `?` listează straturile înghețate în fereastra curentă. Coloana de ferestre din panoul Straturi face același lucru pentru o fereastră. Vezi [Înghețarea unui strat într-o fereastră](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliasuri: `MS`; sau dublu clic în interiorul unei ferestre. Doar pe o planșă. Lucrați pe model printr-o fereastră: cea selectată, singura de pe planșă sau `Dați clic în interiorul ferestrei în care lucrați`. Deplasarea și zoom-ul din interior schimbă vederea ferestrei (una blocată la afișare o păstrează, iar planșa se mută în schimb); noua vedere este scrisă ca un singur pas de anulare. Vezi [Lucrul pe model printr-o fereastră](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliasuri: `PS`; sau dublu clic în afara ferestrei, ori clic pe o filă sub desen. Înapoi la planșă.

### PLOT

Aliasuri: `PRINT`, `PUBLISH`, `EXPORTPDF`; sau {{key:Mod+P}}. Deschide caseta de dialog {{ui:Trasare în PDF}}. Vezi [Trasare în PDF](topic:plot-pdf).

### PLOTSTYLES

Aliasuri: `STYLESMANAGER`, `PSTABLES`; sau {{ui:Editare tabele…}} în caseta de dialog {{ui:Trasare în PDF}}. Deschide {{ui:Tabele de stiluri de trasare}}: cum se tipărește fiecare culoare (culoare, gri, cerneală, grosime de linie), păstrat cu desenul. Vezi [Tabele de stiluri de trasare](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} mută obiecte între o planșă și model printr-o fereastră, scalate și rotite ca să arate la fel din cealaltă parte. Pe o planșă, selectați obiecte și ele merg în model (alegeți fereastra când planșa are mai multe). Cât timp lucrați pe model printr-o fereastră ({{cmd:MSPACE}}), obiectele selectate ajung pe planșă. Spune de câte ori au devenit mai mari sau mai mici. Ferestrele rămân pe planșa lor. Un singur pas de anulare.

### ISODRAFT

{{cmd:ISODRAFT}} pornește sau oprește desenarea izometrică (`ON` sau `OFF`) sau trece direct pe planul `Left`, `Top` sau `Right`. Cât timp este pornită: Ortho ({{key:F8}}) păstrează liniile pe cele două axe ale planului (stânga: 90° și 150°; sus: 30° și 150°; dreapta: 30° și 90°), urmărirea polară ({{key:F10}}) urmează aceleași axe, agățarea de grilă ({{key:F9}}) folosește grila izometrică, iar grila ({{key:F7}}) este desenată cu linii la 30°, 90° și 150°. {{cmd:ELLIPSE}} primește `Isocircle`: dați un centru și o rază (sau `Diameter`) și desenează elipsa pe care o arată un cerc pe planul curent. Desenul rămâne plat: acestea sunt ajutoare pentru a desena o vedere pictorială, nu un model 3D. Setarea este pentru această sesiune și nu este salvată în fișier.

### ISOPLANE

{{cmd:ISOPLANE}} alege planul pe care lucrează desenarea izometrică: `Left`, `Top` sau `Right`. Enter trece la planul următor. Cât timp desenarea izometrică este pornită, {{key:F5}} face același lucru în mijlocul unei comenzi; cât timp este oprită, {{key:F5}} rămâne browserului.

## Verificare

### CAL

Afișează valoarea unui calcul, așa cum ar fi citită oriunde se tastează o lungime.

- `Expresie`: tastați-o, de exemplu `12'6"+3/4"` sau `(24'-0")/3`, și apăsați {{key:Enter}}. CadCraft afișează `= 12'-6 3/4"   (150.75 unități de desen)`. Vezi [Aritmetica într-o valoare tastată](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliasuri: `DI`; sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Măsurare distanță}}.

- `Specificați primul punct`, `Specificați al doilea punct`. Afișează distanța, unghiul, Delta X și Delta Y.

### AREA

Aliasuri: `AA`; sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Arie}}. Afișează aria și perimetrul.

- `Specificați primul colț [Obiect (O)/Adăugare arie (A)/Scădere arie (S)] <Obiect>`
  - Dați clic sau tastați colțuri; la `Specificați următorul punct (Enter închide) [Anulare (U)]` apăsați {{key:Enter}} ca să închideți conturul. `U` ia înapoi ultimul colț.
  - {{key:Enter}} sau `O`, apoi `Selectați obiectul`: un cerc (afișează circumferința), o elipsă, o polilinie (una deschisă este închisă printr-o linie dreaptă pentru arie, iar lungimea ei este afișată) sau o hașură (găurile sunt scoase).
  - `A` (Adăugare arie) și `S` (Scădere arie) păstrează un total parțial: solicitarea începe cu `(modul ADD)` sau `(modul SUBTRACT)`, fiecare arie este adăugată sau scoasă și `Aria totală = …` este afișată după fiecare. În aceste moduri `O` alege obiecte până la {{key:Enter}}, iar {{key:Enter}} la prima solicitare încheie comanda.

### MEASUREGEOM

Aliasuri: `MEA`. `Introduceți o opțiune [Distanță (D)/Rază (R)/Unghi (A)/Arie (AR)] <Distanță>`; după fiecare măsurătoare întreabă din nou, iar `eXit` este implicit.

`Quick` măsoară în jurul indicatorului pe măsură ce îl mișcați: distanța până la cel mai apropiat obiect la dreapta, deasupra, la stânga și dedesubt (de-a lungul axelor SCU curent), desenată pe măsură ce mergeți, iar unghiul acolo unde două dintre aceste vecinătăți sunt drepte și se întâlnesc. Un clic scrie în istoric cele patru distanțe, lățimea și înălțimea libere și unghiurile; Enter revine la opțiuni. Citește ce este pe ecran.

- `D`: două puncte, ca {{cmd:DIST}}.
- `R`: `Selectați arc sau cerc`; afișează raza și diametrul.
- `A`: un arc (unghiul lui inclus), o linie și apoi o a doua linie (unghiul dintre ele, spre capetele lor îndepărtate), sau {{key:Enter}} și trei puncte (vârful, apoi cele două capete).
- `AR`: ca {{cmd:AREA}}, o singură arie.

### ID

Fără aliasuri. `Specificați punctul`; afișează X și Y ale lui.

### LIST

Aliasuri: `LI`, `LS`. `Selectați obiecte`; afișează tipul, stratul și principalele măsuri ale fiecărui obiect.

### MASSPROP

{{cmd:MASSPROP}} dă proprietățile de secțiune ale regiunilor și obiectelor închise pe care le selectați, luate împreună: arie, perimetru, cutie de încadrare, centroid, momente de inerție față de axele X și Y prin origine, produsul de inerție, razele de girație, aceleași momente față de centroid și momentele principale cu direcțiile axelor lor. Găurile dintr-o regiune contează ca găuri. Cifrele sunt în unități de desen și exacte pentru contururi făcute din linii și arce; elipsele și splinele sunt măsurate ca scurte segmente drepte, iar comanda spune asta. După raport întreabă dacă să-l scrie într-un fișier text. Obiectele care nu sunt închise sunt lăsate deoparte, iar comanda spune câte sunt.

## Vizualizare, fișier și altele

### ZOOM

Aliasuri: `Z`.

- `Specificați colțul ferestrei, introduceți un factor de scară (nX) [Extinderi (E)/Tot (A)/Fereastră (W)/Precedent (P)/Scară (S)/Centru (C)]`. Dați clic pe două colțuri pentru o fereastră. `E`, `A` sau Enter: tot desenul.
- `P` (Precedent, sau {{ui:Precedent}} din bara de instrumente) revine la vederea de dinainte, până la 10 vederi pe filă; o serie de pași ai rotiței sau o deplasare contează ca o singură vedere.
- Un număr precum `2`, `2x` sau `0.5x` (sau `S` și apoi numărul) mărește sau micșorează cu acel factor în jurul mijlocului ecranului.
- `C` cere `Specificați punctul central` și `Introduceți înălțimea sau mărirea (nX)`.

### PDFATTACH, PDFIMPORT și comenzile PDF

Aliasuri: `PDFATT` pentru {{cmd:PDFATTACH}}, `PDFIM` pentru {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} pune o pagină PDF sub desen (fișier, pagină, punct de inserție, scară, rotație); {{cmd:PDFIMPORT}} transformă liniile, curbele, umpleriile și textul unei pagini în obiecte de desen pe straturi cu numele PDF-ului, la mărimea reală, la o scară tastată sau scalate după două puncte și o distanță reală. {{cmd:PDFCLIP}} decupează o suprapunere, {{cmd:PDFADJUST}} stabilește estomparea, contrastul, monocromul sau o oprește, {{cmd:PDFLAYERS}} pornește sau oprește propriile straturi ale PDF-ului, iar {{cmd:PDF}} dă din nou CadCraft fișierele pe care le folosesc suprapunerile unui desen. Vezi [Suprapuneri PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Completarea automată a desenului: fără o comandă în derulare, o fantomă cenușie arată ce spun modelele desenului dumneavoastră că urmează. {{cmd:AUTOCOMPLETE}} o pornește sau o oprește (`On` sau `Off`, de asemenea în Setări › CadCraft) sau `Show` arată ce ar sugera acum. **Tab** desenează fantoma ca un singur pas de anulare, **Esc** o închide până când desenul se schimbă. Găsește trei lucruri în cele mai noi obiecte: următoarea copie a ceva desenat de două ori sau mai mult, la un pas egal (tije, coloane, contratreapta și treapta unei scări), următorii pași ai unei scări din polilinie și latura lipsă a unei camere sau a unui lanț de pereți. În mijlocul lui {{cmd:LINE}} sau {{cmd:PLINE}}, fantoma este **următorul punct**: următorul pas al unei scări (contratreaptă, treaptă, contratreaptă…), al patrulea colț al unui dreptunghi, punctul care îl închide sau încă un pas egal. Aduceți cursorul aproape de ea și apăsați **Tab**, ca și cum ați fi dat clic acolo; continuați sau apăsați Enter. Calculat pe acest calculator, prin reguli, fără model.

### AUTOSHEET

Alias: `ASH`. Planșe care se așază singure. {{cmd:AUTOSHEET}} ia bucățile desenului (vederile denumite, bucățile separate ale modelului sau tot modelul), alege o dimensiune de hârtie (sau pe cea pe care o dați), dă fiecărei bucăți o scară standard (una pentru toate sau cea mai mare pe care o poate primi fiecare) și așază vederile pe rânduri, pe planșe noi, cu un cartuș și o legendă (nume și scară) sub fiecare. Ce nu încape pe o planșă primește o planșă proprie. Un singur pas de anulare. Calculat pe acest calculator, prin reguli, fără model.

### PHOTOSKETCH

Alias: `PSK`. Schiță fotografiată în desen. Alegeți o fotografie (JPEG, PNG sau TIFF) a unei schițe de mână pe o foaie de hârtie. {{cmd:PHOTOSKETCH}} găsește cele patru colțuri ale foii, îndreaptă perspectiva, ia dimensiunea hârtiei pe care o numiți (`Paper`, sau cea standard cea mai apropiată) și `Scale` schiței (1 : n), apoi trasează liniile stiloului în linii, arce și cercuri, cu un strat pentru fiecare culoare de stilou (negru, roșu, albastru, verde). Dacă nu poate găsi marginea hârtiei, ia întreaga fotografie drept planșă și spune asta. Textul scris de mână este lăsat deoparte. Un singur pas de anulare. Făcut pe acest calculator cu prelucrare clasică de imagine, fără model, fără să se trimită nimic nicăieri. Vezi și comenzile pentru desene scanate.

### AUTODIM

Alias: `ADIM`. Autocotare după reguli. {{cmd:AUTODIM}} cotează obiectele selectate (sau tot desenul) după marginile lor de nivel și de verticală: un lanț de cote de-a lungul laturilor pe care le alegeți (`Sides`), o cotă totală în afara lui, lățimea fiecărei deschideri (un gol între liniile de perete coliniare), un diametru pentru fiecare mărime de gaură și, cu `Grid`, distanța dintre liniile de rețea. O cotă care există deja nu se face din nou. Un singur pas de anulare. Calculat pe acest calculator, prin reguli, fără model.

### GRIDMOVE

Alias: `GM`. Mutarea unei linii de rețea duce și setul cu ea. {{cmd:GRIDMOVE}} mută o linie de rețea (o linie pe un strat al cărui nume spune grid sau axis) și ce depinde de ea: pereții cu un capăt pe linie se întind ca s-o urmeze, pereții de-a lungul ei se mută întregi, coloanele (referințe de bloc și cercuri pe linie), bula și eticheta ei se mută, iar cotele ale căror puncte stau pe ea măsoară noua distanță. Dați două puncte (contează doar partea care traversează linia) sau `Distance`. Un singur pas de anulare readuce tot. Făcut prin reguli pe acest calculator.

### DETAILS

Alias: `DET`. Detalii care vă găsesc. {{cmd:DETAILS}} păstrează detaliile proprii ale firmei: `Add` pune în listă un bloc din acest desen, `List` și `Remove` îl administrează, iar `Find` le clasează pentru ce este selectat (sau pentru ce ați desenat ultima dată) după cuvintele de pe straturile, numele blocurilor, modelele hașurilor și notele lor, în comparație cu numele și notele fiecărui detaliu, astfel încât o capătare de fereastră găsește tabla dumneavoastră de pervaz. Alegeți un număr și un punct ca să-l plasați. Cu `Hint` pornit (de asemenea în Setări › CadCraft), selectarea a ceva pe care îl potrivește un detaliu pune o linie în bara de stare. Lista este păstrată în acest browser, pe acest calculator, și aceasta este lista în care se caută. `Share` o pune și în dosarul Documente (`.cadcraft/firm-details.json`, cu desenul fiecărui bloc): `Pull` adaugă ce are echipa și dumneavoastră nu aveți, `Push` adaugă ce aveți și ei nu au, `Both` face ambele, iar nimic nu este șters din nicio parte. Deschideți mai întâi dosarul Documente ({{cmd:DOCUMENTS}}); când acel dosar este un dosar Team Cloud Plan, întreaga echipă are o singură listă. Un element de detaliu din panoul Bibliotecă are un buton **Adaugă la detaliile firmei mele**, care îl pune în aceeași listă. Calculat pe acest calculator, prin cuvinte, fără model.

### SKETCHFIX

Alias: `SKF`. Schițele cu stiloul devin geometrie precisă. Apăsați și trageți câte o trăsătură liberă (stilou, mouse sau deget), apoi Enter. Fiecare trăsătură este citită ca o linie, un cerc, un arc, un dreptunghi sau o polilinie: liniile aproape orizontale și verticale devin exact orizontale și verticale, o trăsătură rotundă închisă devine un cerc, o trăsătură închisă cu patru colțuri drepte devine un dreptunghi, iar capetele trăsăturilor sunt trase împreună și pe capetele deja existente în desen. Un singur pas de anulare. Calculat prin reguli pe acest calculator, fără model.

### SCANATTACH și comenzile pentru desene scanate

Aliasuri: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} nu are niciunul. Lucrează pe o imagine, cu un pas de anulare fiecare. {{cmd:SCANATTACH}} inserează un PNG, JPEG, TIFF (o pagină sau toate) sau o pagină PDF care este imagine. {{cmd:SCANSCALE}} scalează planșa după două puncte alese și distanța reală. {{cmd:SCANALIGN}} o mută și o rotește pe două puncte (`Scale the sheet to fit` Da/Nu). {{cmd:SCANDESKEW}} arată unghiul liniilor lungi ale planșei și o rotește după ce dați `Accept` sau o `Value`. {{cmd:SCANCLEAN}} o face alb-negru (`Threshold` Auto/Adaptive/Level, `Specks`) și `Run`. {{cmd:SCANCROP}} păstrează o fereastră. {{cmd:SCANERASE}} șterge un `Rectangle`, `Polygon` sau `Lasso`. {{cmd:SCANTRACE}} trasează linii și arce pe un strat nou (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) și raportează ce a găsit și ce a lăsat ca raster. {{cmd:SCANINFO}} listează fișierul original și pașii. {{cmd:RASTERSNAP}} pornește sau oprește agățarea de liniile planșelor scanate. Vezi subiectul Desene scanate și trasarea.

### REGEN și REGENALL

Aliasuri: `RE` pentru {{cmd:REGEN}}, `REA` pentru {{cmd:REGENALL}}. Reconstruiește pe ecran ce este desenat din desen: {{cmd:REGEN}} filei pe care o vedeți (pe o planșă, și modelul pe care îl arată ferestrele ei), {{cmd:REGENALL}} fiecare filă, fiecare panou al ecranului divizat și fiecare desen deschis. Folosiți-le când imaginea pare învechită după o modificare scriptată sau foarte mare, sau când un asistent a modificat desenul; desenul în sine nu este atins, deci nu este nimic de anulat.

### NAMEDVIEW

Aliasuri: `NV`, `VIEWS`. `Introduceți o opțiune [?/Restore/Save/Window/Delete] <Restore>`, apoi numele vederii. `S` salvează vederea de pe ecran, `W` o fereastră pe care o alegeți, `R` arată o vedere salvată, `D` șterge una, `?` listează vederile acestei file. Salvarea sub un nume existent îl înlocuiește; fiecare modificare este un pas de anulare. Vederile aparțin filei pe care au fost salvate. Fișierele DWG și DXF le păstrează (tabelul VIEW); vederile unei planșe revin pe prima planșă, deoarece fișierul nu spune care este.

### UNDO și REDO

Aliasuri: `U` pentru {{cmd:UNDO}}; {{cmd:REDO}} nu are niciunul. Și {{key:Mod+Z}} și {{key:Mod+Y}}.

### LAYER

Aliasuri: `LA`. Duce la panoul {{ui:Straturi}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Introduceți tipul de linie pentru obiectele noi` — `ByLayer`, `ByBlock` sau un nume (`?` le listează: Continuous, cele ale desenului și DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE cu dimensiunile lor `2` (jumătate) și `X2` (dublu)). {{cmd:LWEIGHT}} (`LW`): grosimea de linie pentru obiectele noi, în mm, sau `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): scara tipului de linie al desenului (anulabilă). {{cmd:LWDISPLAY}} (`LWT`): `Arată grosimile de linie [ON/OFF]` — același lucru cu butonul {{ui:LWT}} din bara de stare. Vezi [Grosimi de linie și tipuri de linii](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Introduceți tipul obiectului de redenumit [LAyer/Block]`, `Introduceți vechiul nume`, apoi noul nume; obiectele sau referințele urmează. {{cmd:LAYMRG}}: `Selectați obiectul de pe stratul de unit sau [Nume (N)]` până la {{key:Enter}}, apoi `Selectați obiectul de pe stratul țintă sau [Nume (N)]` și `Y`. {{cmd:LAYDEL}}: `Selectați obiectul de pe stratul de șters sau [Nume (N)]`, apoi `Y`: stratul și fiecare obiect de pe el dispar (nu stratul 0, DEFPOINTS sau stratul curent). Un singur pas de anulare fiecare. Vezi [Organizarea unui desen cu straturi](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Straturi alese prin obiecte; de asemenea în meniul {{ui:Instrumente}} al panoului {{ui:Straturi}}. {{cmd:LAYISO}}: `Selectați obiectele de pe stratul (straturile) de izolat`, apoi {{key:Enter}}: fiecare alt strat se oprește. {{cmd:LAYUNISO}} le pornește din nou. {{cmd:LAYOFF}} și {{cmd:LAYFRZ}}: `Selectați un obiect de pe stratul de oprit` (sau de înghețat), din nou și din nou; `U` ia înapoi ultimul, {{key:Enter}} încheie. {{cmd:LAYMCUR}}: `Selectați obiectul al cărui strat va deveni curent`. {{cmd:LAYON}} pornește fiecare strat, {{cmd:LAYTHW}} dezgheață fiecare strat. Fiecare comandă este un singur pas de anulare. Vezi [Organizarea unui desen cu straturi](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} începe un desen gol, iar {{cmd:OPEN}} deschide un DWG sau DXF, fiecare în propria filă peste desen (un desen nou neatins este folosit în locul unei file noi). Închiderea unei file cu modificări nesalvate întreabă mai întâi. Vezi [Împărțirea ecranului](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, de asemenea {{key:Mod+S}}) descarcă o copie în formatul desenului: DWG dacă a fost deschis dintr-un DWG, DXF dacă a fost dintr-un DXF. Un desen nou folosește formatul ales ultima dată în {{ui:Salvare ca}} în acest browser, altfel DWG.

{{cmd:SAVEAS}} (de asemenea {{key:Mod+Shift+S}}) deschide caseta de dialog {{ui:Salvare copie ca}}: alegeți {{ui:DWG}} (și {{ui:Versiunea}} lui), {{ui:DXF R12}} sau {{ui:DXF 2000}}, apoi {{ui:Salvare}}. Alegerea rămâne pentru acest desen și pentru desenele noi din acest browser.

{{cmd:DXFOUT}} descarcă întotdeauna o copie DXF R12, fără să schimbe formatul pe care îl folosește {{cmd:SAVE}}.

Vezi [Fișiere: ce se deschide, ce se salvează](topic:files#saving).

### TOUR

Aliasuri: `TUTORIAL`. Pornește din nou turul în șase pași al primului desen. Vezi [Primii pași](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliasuri: `TBDOCK`. `Poziția barei de instrumente [Sus/Jos/Stânga/Dreapta]`. Vezi [Setări](topic:settings#toolbar-position).

### COMMANDLINE

Aliasuri: `CMDLINE`. `Linia de comandă [Andocată jos/Plutitoare/Pe un rând/Rânduri de istoric afișate/Istoricul comenzilor (F2)]`: andochează sau plutește linia de comandă, o face pe un singur rând, cere câte rânduri de istoric să arate (0 până la 12) sau deschide istoricul. Vezi [Setări](topic:settings#command-line).

### TOPAREA

`Zona de sus [Standard/Compactă]`: barele de deasupra desenului ca înainte, sau compacte. Vezi [Setări](topic:settings#top-area).

### POLARANG

`Introduceți pasul unghiului polar în grade <90>`: pasul la care se aliniază liniile de urmărire {{ui:Polar}} (mai mare decât 0, până la 180). Reținut în acest browser.

### UNITS

Aliasuri: `UN`. Cum sunt scrise și tastate lungimile.

- `Introduceți formatul lungimii [Științific/Zecimal/Inginerie/Arhitectural/Fracționar] <curent>`
- Arhitectural și Fracționar: `Introduceți numitorul celei mai mici fracții de afișat (1, 2, 4, 8, 16, 32, 64, 128 sau 256)`. Celelalte: `Introduceți numărul de zecimale (0 până la 8)`.

Cotele noi îl urmează. Un singur pas de anulare. Același lucru cu {{ui:Format lungime}} și {{ui:Precizie}} din {{ui:Setări curente}}; vezi [Picioare și țoli](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliasuri: `GDS`. Vizualizează un layout de circuit integrat (fișier GDSII): test de laborator, doar pentru vizualizare și măsurare.

- Un selector de fișiere ia un fișier `.gds`; cu mai multe celule de vârf, `Introduceți celula de vârf de desenat`.
- Fiecare strat și tip de date devine un strat de desen (`GDS 1`, `GDS 2/5`), referințele și matricele sunt plasate plat, în unitatea de utilizator a fișierului (de obicei micrometri). Un singur pas de anulare. Nimic nu este simulat sau verificat, iar fișierul nu este scris înapoi.

### DIAGRAM

Aliasuri: `TEXTDIAGRAM`, `T2D`. O diagramă din text.

- O casetă primește textul (sau o linie cu `;` între instrucțiuni în linia de comandă): un organigram Mermaid, o diagramă de componente PlantUML, D2 sau o listă de la-la.
- `Specificați colțul stânga-sus al diagramei`, apoi `Specificați înălțimea textului`.

Blocurile și conectorii sunt obiecte obișnuite pe stratul `Diagram`, selectate când se termină. Un singur pas de anulare. Vezi [Desenarea unei diagrame din text](topic:text-to-diagram).

### OLELIST

Aliasuri: `OLES`. Obiectele OLE pe care le are un DWG și pe care CadCraft nu le poate plasa singur.

- Listează fiecare: număr, tip, mărime, dacă și-a salvat o imagine.
- `Introduceți o opțiune [Plasare (P)/Ieșire (X)] <Ieșire>`: Plasare cere numărul, colțul stânga-jos și lățimea și desenează un cadru cu imaginea. Un singur pas de anulare; obiectul păstrat nu se schimbă. Vezi [Imagini](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliasuri: `SHX`. Propriile fonturi SHX.

- `Introduceți o opțiune pentru fonturile SHX [Dosar/Fișiere/Listă/Eliminare/Inversare/Golire] <Listă>`

{{ui:Dosar}} citește fiecare `.shx` dintr-un dosar (CadCraft Studio; din nou la fiecare pornire), {{ui:Fișiere}} ia fișierele alese (browserul), {{ui:Inversare}} așază literele unui font începând cu ultima. Stilurile de text care numesc un font încărcat desenează cu el. Vezi [Desenarea textului cu propriile fonturi SHX](topic:shx-fonts).

### LIMITS

Cât de mare este desenul conceput să fie.

- `Specificați colțul stânga-jos sau [ON/OFF] <curent>`: un punct, `ON` sau `OFF`.
- `Specificați colțul dreapta-sus <curent>`.

Grila umple limitele, {{cmd:ZOOM}} Tot le arată, iar cu ele pe ON un punct din afară este refuzat (`**În afara limitelor`). Un singur pas de anulare; salvate în DWG și DXF. Vezi [Stabilirea limitelor desenului](topic:drawing-limits).

### AUNITS

Aliasuri: `ANGUNITS`. Cum sunt afișate și tastate unghiurile.

- `Introduceți formatul unghiului [Grade zecimale/Grade-minute-secunde/Azimuturile topografului] <curent>`
- `Introduceți numărul de zecimale (0 până la 8)`, sau pentru celelalte două `Introduceți precizia` (0 grade, 2 minute, 4 secunde, 5 până la 8 zecimale de secundă).

Un singur pas de anulare; salvate în DWG și DXF. Același lucru cu {{ui:Format unghi}} din {{ui:Setări curente}}. Vezi [Tastarea și afișarea azimuturilor și unghiurilor](topic:bearings-and-angles).

### APPLOAD

Aliasuri: `AP`; sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Încărcare aplicație…}}. Caseta de dialog {{ui:Încărcare aplicații}}: încarcă rutine `.lsp` și fișiere de dialog `.dcl`, le descarcă, le încarcă din nou din istoric, precum și Startup Suite. Comenzile `(defun c:NAME …)` ale unei rutine funcționează apoi ca oricare alta. Vezi [Încărcarea aplicațiilor](topic:load-applications) și [Rularea rutinelor LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Editare aliasuri…}}) deschide fișierul dumneavoastră de aliasuri (linii `ALIAS, *COMMAND`); {{ui:Salvare}} îl aplică. {{cmd:REINIT}} îl aplică din nou. Vezi [Editarea aliasurilor comenzilor](topic:command-aliases).

### LISPEDIT

Aliasuri: `VLIDE`; sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Editor LISP}}. Deschide editorul LISP, o fereastră care rămâne deschisă lângă desen.

- Textul: numere de rând, partenerul parantezei de la cursor marcat (roșu când nu are), {{key:Enter}} indentează rândul nou sub paranteza deschisă, {{key:Tab}} scrie două spații, {{key:Esc}} părăsește textul.
- {{ui:Încărcare în desen}} ({{key:Ctrl+Shift+Enter}}): citește fiecare formă, cum face {{cmd:APPLOAD}} cu fișierul, și creează comenzile sale `c:`. Fișierul apare în lista {{cmd:APPLOAD}}.
- {{ui:Rulare selecție}} ({{key:Ctrl+Enter}}): evaluează formele selectate sau forma în care se află cursorul.
- {{ui:Oprire}}: încheie o rutină care rulează.
- {{ui:Consolă}}: ce a afișat rutina și fiecare eroare cu rândul ei; dați clic pe o eroare ca să ajungeți acolo. Textul este rulat câte o formă de nivel superior, deci rândul este al formei, sau, în interiorul ei, rândul care apelează funcția numită de eroare.
- {{ui:Nou}}, {{ui:Deschidere}}, {{ui:Salvare}} ({{key:Ctrl+S}}): un fișier `.lsp`. Textul este păstrat și în acest browser, deci închiderea ferestrei nu pierde nimic.
- Lângă text: funcțiile pe care le definește rutina, cele pe care le apelează și pe care acest LISP nu le are încă, cele pe care le apelează și care nu sunt definite în ea și nici integrate, și listele complete cu ce este integrat și ce nu.

Un text cu o paranteză care nu se închide niciodată, sau un șir care nu se termină, nu este rulat: rândul este numit. Nu există depanator pas cu pas, puncte de oprire sau fereastră de urmărire. Vezi [Rularea rutinelor LISP](topic:run-lisp).

### HELP

Aliasuri: `?`. Afișează fiecare comandă, aliasurile ei și o descriere de un rând în istoricul liniei de comandă. Nu deschide acest ajutor: apăsați {{key:F1}} sau dați clic pe {{ui:Ajutor}} pentru asta.

## Solicitarea de selectare a obiectelor

La orice solicitare `Selectați obiecte`: dați clic pe obiecte, trageți ferestre (de la stânga la dreapta) și încrucișări (de la dreapta la stânga) cu două clicuri, sau apăsați și trageți un lasou ({{key:Space}} în timpul trăgerii: fereastră, încrucișare, gard), {{key:Shift}}+clic ca să scoateți, iar {{key:Enter}} ca să terminați. Puteți tasta și `ALL` (tot), `L` (ultimul obiect), `P` (Precedent: ce a folosit ultima comandă), `F` (Gard: obiectele pe care le traversează o linie de puncte; `U` ia înapoi un punct), `W` (Fereastră), `C` (Încrucișare), `R` (modul Eliminare: alegerile scot obiecte; solicitarea spune `Remove objects`) și `A` (Adăugare din nou). `?` le listează. Nu sunt arătate în solicitare. {{key:Tab}} peste obiectele suprapuse evidențiază următorul; dați clic ca să-l alegeți. Vezi [Selectarea obiectelor](topic:select-objects).

### ACCESS

Alias: `AX`. Desen fără vedere. {{cmd:ACCESS}} pornește sau oprește Access (`On`, `Off`) și schimbă sunetele agățării (`Sound`) și comenzile rostite (`Voice`); spune mai întâi starea. Cu Access pornit, fiecare comandă și rezultat este rostit prin cititorul de ecran, iar zona de desen are un cursor de tastatură. Subiectul de ajutor „Desenarea fără vedere” are tastele.

### DESCRIBE

Alias: `DESC`. Spune ce conține desenul: câte obiecte, de ce fel, cât de mari, câte straturi, ce este selectat. Citește doar; nu schimbă nimic.

### WHEREAMI

Alias: `WHERE`. Spune unde este cursorul, în unitățile desenului.

### NEARBY

Spune ce se află aproape de cursor, cel mai apropiat primul, fiecare cu distanța lui și partea pe care se află.

### SAYSEL

Spune ce este selectat, câte o propoziție pentru fiecare obiect (lungimea liniei, capetele și unghiul; raza și centrul cercului; textul așa cum este scris).

### VOICE

Pornește sau oprește comenzile rostite. Sunt recunoscute pe acest calculator; acolo unde browserul nu poate face asta, vocea rămâne oprită până alegeți serviciul online al browserului din Setări.

### TOUCHCROSSHAIR

Alias: `TCX`. Reticulul decalat pentru desenare cu degetul, ca vârful degetului să nu acopere punctul pe care îl alegeți. Cât timp este pornit, un deget pe desen nu alege: mută un reticul care stă deasupra degetului și pe o parte. Agățările de obiecte și urmărirea urmează reticulul. Ridicarea degetului nu alege nimic și lasă reticulul pe loc. Ca să alegeți, apăsați butonul {{ui:Clic}} din colțul desenului sau atingeți oriunde pe desen cu al doilea deget. Țineți {{ui:Clic}} apăsat în timp ce mutați celălalt deget ca să trageți (o fereastră de selecție, un lasou, un mâner). Un deget ținut apăsat nemișcat, sau butonul {{ui:Enter}}, este Enter. Două degete mișcă și măresc ca înainte. Aproape de marginea de jos și de marginea laterală îndepărtată, reticulul se apropie de deget, ca orice parte a desenului să poată fi ajunsă. Un stilou și un mouse aleg direct.

{{cmd:TOUCHCROSSHAIR}} spune starea și cere `ON`, `OFF`, `Auto` (activ doar acolo unde degetul este singurul indicator, deci oprit pe un calculator cu mouse), `Distance` (cât de departe stă reticulul de deget, de la 24 la 240 de pixeli) sau `Side` (`Left`: sus și la stânga, pentru mâna dreaptă; `Right` pentru mâna stângă; butoanele trec în celălalt colț). Aceleași alegeri sunt în Setări › CadCraft, iar pe un dispozitiv cu ecran tactil bara de stare are un comutator {{ui:Reticul decalat}}. Alegerile sunt păstrate în acest browser.

### WHOHAS

Spune cine are un desen deschis. În CadCraft Studio, pe un calculator, deschiderea unui DWG sau DXF scrie lângă el un mic fișier de blocare (`Plan.dwg.cclock`: cine, din ce moment, ce versiune), îl reîmprospătează la fiecare minut cât timp desenul este deschis și îl elimină când desenul este închis. Deschiderea unui desen pe care îl are deschis altcineva spune cine și din ce moment și oferă {{ui:Deschidere doar pentru citire}} (Salvare cere apoi un nume nou), {{ui:Deschidere oricum}} (cealaltă persoană este anunțată la următoarea reîmprospătare) sau {{ui:Anulare}}. Salvarea peste un fișier pe care îl are deschis altcineva întreabă mai întâi. O blocare care nu a fost reîmprospătată timp de cinci minute este considerată învechită: cealaltă copie s-a închis fără să salveze sau calculatorul este în standby.

{{cmd:WHOHAS}} cere `Current` (desenul deschis), `File` (alegeți unul), `FOlder` (alegeți un dosar: fiecare desen din el care este deschis undeva este listat), `Path` (tastați o cale completă) sau `Name` (numele pe care îl văd ceilalți; numele contului dumneavoastră când sunteți conectat). Studio poate ajunge doar la dosarele pe care le-ați ales: pentru un desen deschis dintr-un dosar care nu a fost niciodată ales, spune o singură dată că nu poate nota desenul ca deschis; `FOlder` alege dosarul, iar blocările funcționează acolo de atunci. Blocarea este o notă pentru oameni, nu o barieră: un alt program poate scrie totuși fișierul. Într-un browser nu există dosare în care să se caute, iar comanda spune asta.

### OVERKILL

Șterge obiectele duplicate și pune în ordine liniile și arcele care se suprapun, pentru desene care sosesc pline de desen dublat. `Selectați obiectele de curățat`, {{key:Enter}}, apoi încă o dată {{key:Enter}} ca să curățați cu setările afișate, sau schimbați întâi una:

- `Tolerance`: cât de aproape trebuie să fie două coordonate ca să conteze drept aceeași (0,000001 la început; 0 înseamnă exact aceleași).
- `Ignore`: proprietăți care pot diferi între două obiecte altfel identice. Tastați un nume ca să-l comutați: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency` sau `None` / `All`. {{key:Enter}} când ați terminat.
- `Overlap`: pornit sau oprit. Pornit, liniile de pe aceeași dreaptă care se suprapun devin o linie (o linie aflată în interiorul alteia este pur și simplu ștearsă), iar arcele de pe același cerc care se suprapun devin un arc; arcele care închid o rotație completă devin un cerc, iar un arc aflat pe un cerc este șters.
- `Ends`: pornit sau oprit. Pornit, liniile de pe aceeași dreaptă și arcele de pe același cerc care doar se ating cap la cap devin o singură bucată.

Fiecare tip de obiect este verificat pentru duplicate: două obiecte sunt duplicate când geometria lor este aceeași în limita toleranței, iar stratul, culoarea, tipul de linie, scara tipului de linie, grosimea de linie, grosimea, transparența și înălțimea se potrivesc (minus cele pe care le ignorați). Liniile și polilinile deschise se potrivesc și când sunt desenate invers. Primul obiect din ordinea de desenare rămâne și își păstrează propriile proprietăți. Comanda raportează câte obiecte a verificat și câte a șters: duplicate, bucăți suprapuse unite, bucăți unite cap la cap. Un singur {{cmd:UNDO}} readuce tot. Setările durează până închideți fereastra desenului.

Lasă neatinse: obiectele de pe straturi blocate și obiectele ascunse. Nu unește liniile cu o înălțime (Z) (duplicatele exacte ale acestora tot se șterg), iar nu atinge segmentele din interiorul unei polilinii (nu sunt subțiate), o linie așezată pe un segment de polilinie și o polilinie închisă desenată invers.

### DRAWORDER

Schimbă ce obiecte sunt desenate în față. `Selectați obiectele de reordonat`, {{key:Enter}}, apoi `Deasupra obiectelor`, `Sub obiecte`, `Față` sau `Spate` ({{key:Enter}} = `Spate`). `Deasupra obiectelor` și `Sub obiecte` cer obiectele de referință: selecția merge chiar în fața celui mai din față dintre ele, sau chiar în spatele celui mai din spate. Obiectele selectate își păstrează ordinea între ele. Un singur pas de anulare. Ordinea este salvată cu desenul în DWG și DXF, unde este ordinea în care sunt scrise obiectele.

Pe ecran CadCraft desenează întâi ariile umplute (hașuri pline, polilinii late, măști), apoi liniile, apoi textul, deci textul se citește întotdeauna peste o umplere; ordinea de desenare apare între obiectele umplute și între imagini. Celelalte programe care deschid fișierul desenează fiecare obiect în ordinea salvată.

### TEXTTOFRONT

Aduce textul, cotele și indicațiile în fața tuturor celorlalte din spațiul deschis: `Text`, `Dimensions`, `Leaders` sau `All` ({{key:Enter}} = `All`). Un singur pas de anulare. Spune așa când nu există niciunul sau când sunt deja în față.

### HATCHTOBACK

Trimite fiecare hașură din spațiul deschis în spatele tuturor celorlalte, astfel încât umpleriile să nu mai acopere liniile și textul în fișierul salvat. Fără solicitări. Un singur pas de anulare.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Arată doar obiectele selectate: tot ce se află altfel în spațiul deschis iese din vedere până la {{cmd:UNISOLATEOBJECTS}}. Spre deosebire de {{cmd:LAYISO}}, lucrează pe obiectele alese, oricare le-ar fi straturile, și nu schimbă niciun strat. Obiectele ascunse nu sunt desenate, alese, agățate, nu se face zoom pe ele și nu sunt trasate, iar comenzile care iau `ALL` le trec pe lângă. Ce desenați cât timp obiectele sunt izolate se arată ca de obicei.

Aceasta este doar pentru sesiune: nimic din ea nu este salvat cu desenul, nu este un pas de anulare, iar deschiderea din nou a desenului arată tot. Cât timp obiectele sunt ascunse, bara de stare arată un buton cu numărul lor; dați clic pe el ca să le arătați din nou.

### HIDEOBJECTS

Ascunde obiectele selectate până la {{cmd:UNISOLATEOBJECTS}}. Aceleași reguli ca la {{cmd:ISOLATEOBJECTS}}: doar pentru sesiune, nesalvat, nu este un pas de anulare.

### UNISOLATEOBJECTS

Aliasuri: `UNISOLATE`, `UNHIDE`. Arată din nou fiecare obiect ascuns de {{cmd:ISOLATEOBJECTS}} sau {{cmd:HIDEOBJECTS}} și spune câte s-au întors.

### LAYLOCKFADE

Stabilește cum arată obiectele de pe straturi blocate și dacă un clic le ajunge. Spune starea curentă, apoi acceptă:

- un număr de la 0 la 90: cantitatea de estompare în procente (50 la început). 0 oprește estomparea.
- `ON` sau `OFF`: estomparea pornită sau oprită, păstrând cantitatea.
- `Pick`, apoi `Yes` sau `No`: poate un clic să selecteze obiecte de pe straturi blocate cât timp nu rulează nicio comandă? `No` (implicit): nu pot fi alese deloc. `Yes`: un clic sau o fereastră le selectează, ca {{ui:Proprietăți}} să le poată arăta; tot nu pot fi schimbate, iar `Selectați obiecte` propriu al unei comenzi nu le ia niciodată.

Agățările de obiecte găsesc obiectele de pe straturi blocate oricum. Trasările nu sunt niciodată estompate. Ambele setări sunt ale dumneavoastră, nu ale desenului, și se află și în {{ui:Setări}} la {{ui:Straturi blocate}}.

### BURST

Descompune referințele de bloc și păstrează ce spun atributele lor. `Selectați referințele de bloc de descompus`, {{key:Enter}}: fiecare referință este înlocuită cu obiectele blocului, iar valoarea fiecărui atribut vizibil devine text simplu pe propriul strat al atributului (un atribut pe stratul 0 ajunge pe stratul referinței, ca celelalte obiecte ale blocului de pe stratul 0). Atributele invizibile sunt eliminate. Un bloc din interiorul blocului rămâne referință de bloc. Un singur pas de anulare; raportează referințele descompuse și valorile atributelor transformate în text.

Refuză un desen legat după nume (legați-l mai întâi, sau copiați din el cu {{cmd:NCOPY}}) și lasă neatinse celelalte obiecte selectate. Pentru referințele de bloc, {{cmd:EXPLODE}} dă aceleași obiecte; {{cmd:BURST}} ia doar referințele de bloc și numără textul atributelor.

### TXT2MTXT

Alias: `T2M`. Unește texte pe un singur rând într-un text de paragraf. `Selectați textul pe un singur rând de unit`, {{key:Enter}}, apoi `Paragraph` (rândurile se unesc și se încadrează la lățimea celui mai lat rând) sau `Lines` (fiecare text rămâne un rând propriu); {{key:Enter}} ia cel folosit ultima dată. Rândurile sunt ordonate de sus în jos, apoi de la stânga la dreapta, de-a lungul direcției textului de sus. Paragraful atârnă de colțul stânga-sus al textului de sus și preia înălțimea, rotația, stilul, stratul și culoarea lui. Un singur pas de anulare.

Textul care este deja text de paragraf, textul gol și celelalte obiecte din selecție rămân neatinse, iar comanda spune câte sunt.

### NCOPY

Copiază obiecte dintr-o referință de bloc sau dintr-un desen legat în desen, fără să descompună nimic. `Alegeți un obiect dintr-o referință de bloc sau dintr-un desen legat`: obiectul cel mai apropiat de clic este copiat acolo unde se vede, oricât de adânc ar fi în blocuri; alegeți mai multe, apoi {{key:Enter}}. Apoi `Punctul de bază pentru mutarea copiilor`: {{key:Enter}} le lasă pe loc, sau dați un punct de bază și un al doilea punct. Întreaga comandă este un singur pas de anulare.

O copie ia stratul pe care se vede: un obiect de pe stratul 0 dintr-un bloc ajunge pe stratul referinței în care se afla, iar o culoare ByBlock devine culoarea acelei referințe. Dintr-un desen legat, stratul `Plan|Walls` devine `Plan$0$Walls` (numele pe care îl dă legătura), făcut cu culoarea, tipul de linie și grosimea stratului legat. Valoarea unui atribut este copiată ca text. Referințele de bloc de pe straturi blocate nu pot fi alese.

### FLATTEN

Stabilește înălțimea (Z) și grosimea obiectelor selectate la 0. `Selectați obiectele de aplatizat`, {{key:Enter}}. Aplatizează și obiectele din definițiile blocurilor folosite de selecție (și blocurile din interiorul lor), astfel încât fiecare referință la acele blocuri se schimbă; desenele legate rămân cum sunt. Un singur pas de anulare; raportează câte obiecte s-au schimbat și spune asta când niciunul nu avea înălțime sau grosime.

Ce păstrează CadCraft din a treia dimensiune într-un desen 2D este: o înălțime la cercuri, arce, elipse, puncte, texte, referințe de bloc, hașuri, indicații și polilinii (cota lor), o înălțime la fiecare capăt al unei linii și o grosime la linii, cercuri, arce, polilinii, puncte și texte, așa cum le avea fișierul. {{cmd:FLATTEN}} le șterge exact pe acestea. Nu atinge modelul 3D de pe fila 3D, fețele 3D sau solidele, iar un obiect desenat într-un plan înclinat a fost deja adus în planul desenului când s-a deschis fișierul.

### BREAKLINE

Desenează o linie cu simbol de rupere, pentru o vedere tăiată scurt. Spune dimensiunea curentă și prelungirea, apoi `Primul punct al liniei de rupere` (sau `Size` / `Extension` ca să le schimbați mai întâi), `Al doilea punct` și `Locul simbolului de rupere`: dați clic de-a lungul liniei sau {{key:Enter}} pentru mijloc. Rezultatul este o polilinie pe stratul curent: linia, care trece dincolo de fiecare punct cu prelungirea, cu o linie în formă de Z la fel de înaltă ca dimensiunea și de două ori mai scurtă decât ea.

`Size` și `Extension` sunt reținute ca setările dumneavoastră (dimensiunea pornește de la dublul înălțimii textului cotei înmulțit cu scara cotei; prelungirea la jumătate din dimensiune). {{key:Enter}} repetă comanda.

### AUDIT

Verifică desenul deschis pentru defecte și le repară. {{cmd:AUDIT}} se uită la fiecare obiect din model, pe planșe și în blocuri, și la tabelul de straturi, și listează ce găsește pe tip:

- numere care nu sunt finite sau sunt absurd de mari;
- obiecte fără dimensiune: o linie fără lungime, un cerc fără rază, o polilinie cu un singur punct, un text fără litere sau înălțime, o referință de bloc cu scară zero;
- obiecte pe un strat pe care desenul nu îl are; referințe la un bloc care nu există; nume de stiluri de text și de cotare și nume de tipuri de linii care nu sunt în desen;
- blocuri care se conțin pe ele însele, direct sau prin alte blocuri;
- obiecte care au același identificator, aceeași cheie sau același identificator de fișier;
- cote fără punctele de la care sunt măsurate și hașuri al căror contur nu este o schiță închisă.

Apoi întreabă `Le reparați? [Da/Nu]`. `No` nu schimbă nimic. `Yes` repară tot într-un singur pas de anulare: ce nu poate fi desenat este scos (numere greșite, fără dimensiune, bloc lipsă, cotă defectă, o hașură fără contur utilizabil, referința care închide un cerc de blocuri); un strat lipsă este creat; numele necunoscute de stiluri și tipuri de linii revin la valorile implicite; o cheie comună este înlocuită. Afișează câte obiecte au fost scoase și câte reparate. Aceleași constatări apar în panoul Probleme, fiecare cu propriul {{ui:Reparare}}.

Nu refuză nimic, dar verifică doar ce desenează CadCraft însuși: datele păstrate pentru alte programe (solide 3D, obiecte OLE) nu sunt deschise.

### RECOVER

Deschide un DXF sau DWG deteriorat. {{cmd:RECOVER}} cere fișierul, citește ce poate fi citit în loc să refuze fișierul, listează ce a sărit sau a presupus, apoi verifică și repară desenul cum face {{cmd:AUDIT}} cu `Yes`.

- DXF: liniile care nu fac parte dintr-o pereche cod și valoare sunt sărite până când perechile se aliniază din nou; o secțiune fără sfârșit este închisă; un fișier tăiat scurt este citit până la tăietură; un DXF binar tăiat scurt este citit până la ultima valoare întreagă. Când o secțiune, un bloc sau un obiect tot nu poate fi citit, este lăsat afară și numit, iar citirea continuă dincolo de el.
- DWG: obiectele care nu trec verificările sau nu pot fi decodate sunt lăsate afară, iar o listă de obiecte pierdută este reconstruită parcurgând datele obiectelor.

Fișierul de pe disc nu este schimbat. Desenul recuperat se deschide nesalvat: salvați-l sub un nume nou. Un fișier din care nu se poate citi absolut nimic este refuzat, cu motivul.

### LEGACYTEXT

Convertește textul scris cu vechile fonturi vietnameze de 8 biți în Unicode. Nume scurte `TEXTTOUNICODE` și `VNTEXT`.

Desenele vietnameze mai vechi țin textul ca semne occidentale pe care doar fontul le transformă în vietnameză: text TCVN3 în fonturile ABC (`.VnTime`, `.VnArial` și fonturile cu majuscule al căror nume se termină în `H`), și text VNI în fonturile VNI (`VNI-Times`). CadCraft afișează astfel de text așa cum se citește, de îndată ce desenul este deschis, după fontul stilului lui de text, al obiectului sau al unei secvențe din textul de paragraf; fișierul păstrează totuși vechile caractere.

{{cmd:LEGACYTEXT}} spune câte texte a găsit în fiecare codificare și cere `Convertiți … în Unicode?`. `Yes` rescrie fiecare (model, planșe, blocuri, valori și definiții de atribute) și dă stilurilor de text un font Unicode (Times New Roman, Arial sau Courier New, după tipul vechiului font), într-un singur pas de anulare. Formatarea din interiorul textului de paragraf este păstrată.

Când niciun text nu folosește un font cunoscut (un stil care și-a pierdut numele fontului), cere `Citiți textele selectate ca [Tcvn3/Vni/None]`: alegeți codificarea și selectați textele. Textul care este deja Unicode rămâne neatins. Înlocuirile de text al cotelor și textul indicațiilor multiple nu sunt convertite.
