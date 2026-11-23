---
title: Referința comenzilor
summary: Fiecare comandă din aplicația de desenare CadCraft, cu prescurtările ei, întrebările pe care le pune, opțiunile și valorile implicite.
keywords: comenzi, aliasuri, listă de comenzi, suprafață, perimetru, measuregeom, linie, pline, cerc, arc, tăiere, decalare, dimlinear, bloc, inserare, foaie, trasare, zoom, ajutor, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicare, selectall
from: 979ffe3b
---

Tastați numele unei comenzi sau un alias și apăsați {{key:Enter}} sau {{key:Space}}. Nu contează majusculele, iar un `_`, `-`, `.` sau `'` din față este ignorat. Tastați `HELP` (sau `?`) ca să afișați în istoricul liniei de comandă o listă scurtă cu fiecare comandă; apăsați {{key:F1}} pentru acest ajutor.

Cum se citesc promptele: opțiunile sunt între paranteze drepte, iar una o alegeți tastând literele ei mari (`D` pentru Diametru). Valoarea implicită este între paranteze unghiulare; apăsați {{key:Enter}} ca s-o acceptați. Acolo unde se cere un punct, puteți face clic sau puteți tasta oricare dintre formatele din [Introducerea coordonatelor și a distanțelor](topic:coordinate-entry). Acolo unde se cere o distanță, puteți tasta un număr sau puteți face clic pe două puncte.

Apăsarea lui {{key:Enter}} acolo unde se cere un punct sau un obiect, și nu există valoare implicită, încheie comanda. {{key:Esc}} o anulează. Orice a făcut o comandă este un singur pas de anulare.

## Desen

### LINE

Aliasuri: `L`. Segmente drepte, fiecare obiect propriu.

- `Specificați primul punct` (Enter: pornire de la ultimul punct dat)
- `Specificați următorul punct [Anulare (U)]`, repetat. După două segmente: `[Anulare (U)/Închidere (C)]`.
- `U` anulează ultimul segment, `C` închide până la primul punct și termină. Enter încheie.

### PLINE

Aliasuri: `PL`. O polilinie cu segmente de linie și de arc.

- `Specificați punctul de început`
- `Specificați următorul punct [Arc (A)/Închidere (C)/Anulare (U)]` (Închidere odată ce există două segmente)
- `A` trece la arce: `Specificați punctul final al arcului [Linie (L)/Închidere (C)/Anulare (U)]`. Fiecare arc continuă tangent la segmentul dinainte. `L` revine la linii, `CL` închide cu un arc.
- Enter încheie; polilinia rămâne deschisă.

### CIRCLE

Aliasuri: `C`.

- `Specificați punctul centrului cercului [3P/2P/Ttr (tan tan rază)]`
- `Specificați raza cercului [Diametru] <ultima rază>`; `D` cere `Specificați diametrul cercului`.
- `2P`: cele două capete ale unui diametru. `3P`: trei puncte pe cerc.
- `T` (sau comanda `TTR`, și {{ui:Desen}} › {{ui:Mai multe}} › {{ui:Cerc: Tangentă, Tangentă, Rază}}): `Specificați punctul de pe obiect pentru prima tangentă a cercului`, apoi a doua, apoi raza (Enter: ultima). Cercul atinge ambele obiecte (linii, arce, cercuri, segmente de polilinie, și în interiorul blocurilor); dintre cercurile care se potrivesc, este cel care atinge cel mai apropiat de punctele alese. „Cercul nu există” când niciunul nu se potrivește.
- `TTT` (sau {{ui:Desen}} › {{ui:Mai multe}} › {{ui:Cerc: Tangentă, Tangentă, Tangentă}}): trei obiecte; cercul care le atinge pe toate trei, cel mai apropiat de punctele alese (trei linii dau cercul interior sau unul exterior, după locul unde alegeți).

### ARC

Aliasuri: `A`.

- `Specificați punctul de început al arcului [Centru (C)]`, `Specificați al doilea punct al arcului`, `Specificați punctul final al arcului`: un arc prin trei puncte.
- `C`: `Specificați punctul centrului arcului`, `Specificați punctul de început al arcului`, `Specificați punctul final al arcului`. Arcul merge în sens invers acelor de ceasornic de la început la sfârșit.

### RECTANG

Aliasuri: `REC`, `RECTANGLE`. O polilinie închisă.

- `Specificați primul colț`, `Specificați celălalt colț`. Tastați `@lățime,înălțime` pentru al doilea colț.

### POLYGON

Aliasuri: `POL`. Un poligon regulat ca polilinie închisă.

- `Introduceți numărul de laturi <4>` (3 până la 1024)
- `Specificați centrul poligonului`
- `Introduceți o opțiune [Înscris în cerc (I)/Circumscris cercului (C)] <I>`
- `Specificați raza cercului`: faceți clic sau tastați un punct; distanța lui dă mărimea, iar direcția rotește poligonul.

### ELLIPSE

Aliasuri: `EL`.

- `Specificați punctul final al axei elipsei [Centru (C)]`, `Specificați celălalt capăt al axei`, `Specificați distanța până la cealaltă axă`
- `C`: `Specificați centrul elipsei`, `Specificați punctul final al axei`, apoi distanța până la cealaltă axă.
- `I` (`Izocerc`, doar cât timp {{cmd:ISODRAFT}} este pornit): centru, apoi rază sau `Diametru`: elipsa pe care o arată un cerc pe planul izometric curent.

### HATCH

Aliasuri: `H`, `BH`, `BHATCH`; sau {{ui:Hașură}} în bara de instrumente. Afișează întâi modelul, scara și unghiul curente.

- `Specificați punctul interior [Selectare obiecte (S)/Model (P)/Scară (SC)/Unghi (A)]`, repetat (`Anulare (U)`, odată ce există o suprafață): fiecare clic adaugă suprafața închisă din jurul lui, cu formele închise din interior ca insule. Enter face o singură hașură din toate.
- `S`: `Selectați obiecte închise` (polilinii închise, cercuri, elipse închise).
- `P`: `Introduceți numele unui model, SOLID sau ? pentru listă <curent>`. `SC`: `Specificați scara modelului`. `A`: `Specificați unghiul modelului`.
- `G` (Gradient): umplerea este un gradient în loc de un model. Vedeți {{cmd:GRADIENT}} pentru întrebările sale.

Vedeți [Hașuri și suprafețe de umplere](topic:hatch).

### GRADIENT

Aliasuri: `GD`. Umple o suprafață cu un gradient de una sau două culori. Întreabă întâi gradientul, apoi continuă ca {{cmd:HATCH}} (`Specificați punctul interior`, `S` pentru obiecte închise, {{key:Enter}} pentru a încheia).

- `Introduceți o opțiune de gradient [Tip (T)/O culoare (O)/Două culori (TW)/Unghi (A)/Centrat (C)/Ieșire (X)] <X>`, repetat; afișează gradientul așa cum este acum de fiecare dată.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, sau unul dintre ele inversat (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Primele litere sunt suficiente.
- `O`: o culoare, apoi nuanța ei de la 0 la 1 (0 o face neagră, 0.5 este culoarea în sine, 1 o face albă). `TW`: prima și a doua culoare. O culoare este un număr de la 1 la 255, trei numere ca `255,128,0`, sau `#rrggbb`.
- `A`: unghiul în care merge gradientul. `C`: centrat Da sau Nu (Nu mută mijlocul gradientului spre o parte).
- Refuză o culoare sau un tip pe care nu le cunoaște, și o nuanță în afara intervalului de la 0 la 1.

{{cmd:HATCHEDIT}} `G` și Proprietăți (Gradient) schimbă ulterior un gradient, sau transformă orice hașură într-unul. Un gradient se desenează pe ecran și se trasează. DWG 2004 și mai nou îl păstrează ca hașură de gradient reală; DXF 2000 și DWG 2000 îl păstrează pentru CadCraft, iar celelalte programe văd o umplere plină cu prima culoare.

### HATCHGENERATEBOUNDARY

Aliasuri: `HGB`. Refă conturul unei hașuri care l-a pierdut. `Selectați hașuri` (sau selectați-le mai întâi), apoi `Legați fiecare hașură de noul ei contur, ca să urmeze? [Da/Nu] <Da>`.

- Fiecare buclă a hașurii devine o polilinie închisă pe stratul hașurii; polilinile noi rămân selectate. Un margine curbă revine ca bucățile drepte scurte pe care le păstrează hașura.
- Cu Da, hașura urmează noul ei contur, ca o hașură făcută cu {{cmd:HATCH}}. Un singur pas de anulare.
- Spune asta când nu a fost selectată nicio hașură.

### POINT

Aliasuri: `PO`; sau {{ui:Desen}} › {{ui:Mai multe}} › {{ui:Punct}}. Obiecte punct, câte unul la fiecare clic, până la Enter.

- `Specificați un punct`

### XLINE

Aliasuri: `XL`; sau {{ui:Desen}} › {{ui:Mai multe}} › {{ui:Linie de construcție}}. Linii de construcție, nelimitate în ambele direcții. Vedeți [Liniile de construcție și razele](topic:construction-lines).

- `Specificați un punct [Oriz/Vert/Ang/Bisectoare/Decalare]`, apoi `Specificați punctul prin care trece` pentru fiecare linie, până la Enter.
- `A`: `Introduceți unghiul liniei de construcție [Referință] <0>`; `R` cere mai întâi `Selectați un obiect linie`.
- `B`: `Specificați punctul vârfului unghiului`, `Specificați punctul de început al unghiului`, apoi `Specificați punctul final al unghiului` pentru fiecare linie.
- `O`: `Specificați distanța de decalare [Prin] <Prin>`, apoi `Selectați un obiect linie` și `Specificați partea pentru decalare` (sau `Specificați punctul prin care trece`) pentru fiecare linie.

### RAY

Fără aliasuri; sau {{ui:Desen}} › {{ui:Mai multe}} › {{ui:Rază}}. `Specificați punctul de început`, apoi `Specificați punctul prin care trece` pentru fiecare rază, până la Enter.

### TEXT

Aliasuri: `DT`, `DTEXT`; sau {{ui:Text}} în bara de instrumente. Text pe un rând; fiecare rând este propriul obiect.

- `Specificați punctul de început al textului [Justificare (J)]`
- `J`: `Introduceți o opțiune [Stânga/Centru/Dreapta/Mijloc/TL/MC] <L>`, apoi `Specificați punctul de inserare al textului`
- `Specificați înălțimea <înălțimea curentă a textului>`
- `Specificați unghiul de rotație al textului <0>`
- `Introduceți textul`, repetat: fiecare Enter începe rândul următor, dedesubt. Enter pe un rând gol încheie. {{key:Space}} tastează aici un spațiu.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} pune semne pe o linie, un arc, un cerc, o polilinie, o spline sau o elipsă care o taie în părți egale. Alegeți obiectul, apoi dați numărul de părți (2 până la 32767). Un obiect deschis primește un semn mai puțin decât părțile; unul închis primește un semn și la început. Obiectul în sine nu este tăiat. Semnele sunt puncte; `Bloc` cere în schimb un bloc din acest desen și dacă se rotește ca să urmeze obiectul. Lungimile de-a lungul splinelor și elipselor se măsoară pe coarde scurte. Refuză textul, hașurile și alte obiecte care nu au lungime.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} pune un semn la fiecare lungime dată de-a lungul unei linii, arc, cerc, polilinii, spline sau elipse, numărând de la capătul cel mai apropiat de locul unde ați ales (un obiect închis: de la început). Dați lungimea tastând-o sau prin două puncte. Capătul îndepărtat al unui obiect deschis nu primește semn. `Bloc` pune un bloc la fiecare semn în loc de un punct. Refuză o lungime de 0, una mai lungă decât obiectul și una care ar face mai mult de 32767 de semne.

### BOUNDARY

Aliasuri: `BO`, `BPOLY`. {{cmd:BOUNDARY}} face o polilinie închisă în jurul suprafeței în care se află punctul ales, din orice linii, arce, cercuri, polilinii și curbe care o mărginesc pe ecran. Bucățile care stau pe un arc sau cerc revin ca segmente de arc; bucățile din elipse și spline revin ca segmente drepte scurte. Cu `Insule` pornit (setarea de pornire), fiecare suprafață închisă din interior primește și ea propria polilinie. Continuați să alegeți puncte; Enter încheie. Obiectele care mărginesc suprafața rămân așa cum sunt. Spune asta când niciun contur închis nu conține punctul.

### BLEND

{{cmd:BLEND}} desenează o spline între capetele a două curbe deschise. Alegeți fiecare curbă aproape de capătul care trebuie unit. `CONtinuitate` alege `Tangent` (spline-ul pleacă și sosește de-a lungul ambelor curbe) sau `Neted` (și se îndoaie cum se îndoaie ele la capete); alegerea se păstrează pentru sesiune. Cele două curbe nu se schimbă. Refuză obiectele închise și două capete care deja se întâlnesc.

### REGION

Alias: `REG`. {{cmd:REGION}} transformă obiectele închise în regiuni: suprafețe plate pe care le puteți uni, tăia și măsura. Selectați cercuri, polilinii închise, elipse închise sau spline-uri închise, ori linii, arce și polilinii deschise care închid o buclă cap la cap; fiecare buclă devine o regiune și înlocuiește obiectele din care provine. Arcele rămân arce; elipsele și spline-urile devin segmente drepte scurte. Ce nu este închis și nu închide nicio buclă rămâne cum era, și se spune câte sunt. În desen, o regiune este una sau mai multe polilinii închise ținute împreună ca un grup fără nume, astfel încât un clic selectează întreaga regiune, iar o copie este o regiune proprie; alte programe care deschid fișierul văd polilinii închise.

Cu regiuni în desen, {{cmd:UNION}}, {{cmd:SUBTRACT}} și {{cmd:INTERSECT}} de pe fila 2D lucrează pe regiuni: `UNION` unește regiunile selectate într-una (regiunile separate devin o regiune cu mai multe contururi), `SUBTRACT` cere regiunile din care să scadă și apoi pe cele de scos (o gaură rămâne parte din regiune), `INTERSECT` păstrează suprafața pe care o au toate în comun. Fiecare spune aria rezultatului și este un pas de anulare. Refuză când nu ar rămâne nimic sau nu există nimic în comun. Pe fila 3D, și într-un desen fără regiuni, aceleași comenzi lucrează pe solide ca înainte.

## Modificare

### MTEXT

Aliasuri: `MT`, `T`; sau {{ui:Paragraf}} în bara de instrumente. Text de paragraf care se înfășoară la o lățime, tastat pe loc.

- `Specificați primul colț`
- `Specificați colțul opus [Înălțime (H)/Justificare (J)/Spațiere rânduri (L)/Rotire (R)/Lățime (W)]`: lățimea dintre cele două colțuri este locul unde textul se înfășoară. `H` cere `Specificați înălțimea`, `J` `Introduceți justificarea [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Introduceți factorul de spațiere a rândurilor (0.25 până la 4)`, `R` `Specificați unghiul de rotație`, `W` `Specificați lățimea (0 pentru fără înfășurare)` și sare peste al doilea colț.
- Apoi se deschide o casetă pe desen: tastați, {{key:Enter}} pentru un paragraf nou, {{key:Mod+Enter}} sau un clic în afară ca să terminați, {{key:Esc}} ca să anulați. Bara ei stabilește înălțimea, spațierea rândurilor, lățimea și justificarea. Vedeți [Adăugarea textului și a etichetelor](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliasuri: `ED`, `DDEDIT`; sau faceți dublu clic pe un text. `Selectați un text de editat`, repetat până la {{key:Enter}}: fiecare se deschide în aceeași casetă. Pornit pe un text selectat sau pe care s-a făcut dublu clic, editează acel text și se termină.

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

`Matrice` la promptul celui de-al doilea punct face un rând dintr-o dată: dați numărul de elemente (originalul contează ca unu), apoi punctul unde merge prima copie; celelalte urmează la aceeași distanță. `Potrivire` face din acel punct locul ultimei copii, cu celelalte împrăștiate egal între ele.

- `Selectați obiecte`
- `Specificați punctul de bază [Deplasare (D)]`
- `Specificați al doilea punct [Anulare (U)]`, repetat până la Enter. `U` anulează ultima copie.

### ROTATE

Aliasuri: `RO`.

- `Selectați obiecte`, `Specificați punctul de bază`
- `Specificați unghiul de rotație <ultimul unghi>`: grade, pozitiv în sens invers acelor de ceasornic; sau faceți clic pe un punct ca să rotiți spre el.

### SCALE

Aliasuri: `SC`.

- `Selectați obiecte`, `Specificați punctul de bază`
- `Specificați factorul de scară`: tastați un factor precum `0.5` sau `2`. Un punct ales dă ca factor distanța lui față de punctul de bază.

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
- Cu două perechi: `Scalați obiectele pe baza punctelor de aliniere? [Da/Nu] <N>`

Vedeți [Alinierea obiectelor](topic:modify-objects#align-objects).

### ALIGNTO

- `Selectați obiecte` (sau selecția), `Aliniere [Stânga/Centru/Dreapta/Sus/Mijloc/Jos] <Stânga>`, `Față de [Selecție/Primul/Ultimul/Punct] <Selecție>`; `P` cere punctul. Selecția rămâne.

### DISTRIBUTE

- `Selectați obiecte` (cel puțin trei), `Distribuire [Orizontal/Vertical] <Orizontal>`, `Spațiere egală [Centre/Spații] <Spații>`. Primele două de la margini rămân; selecția rămâne.

### ALIGNPANEL

Aliasuri: `ALP`; sau {{ui:Modificare}} › {{ui:Mai multe}} › {{ui:Aliniere și distribuire}}. Deschide panoul care rulează ALIGNTO și DISTRIBUTE prin clicuri.

### LASER

Aliasuri: `LASERCUT`; sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Laser…}}. Deschide panoul Laser peste desen: ce face fiecare strat (tăiere, linie, gravare, umplere, imagine), previzualizarea, codul G GRBL de salvat, încadrarea și trimiterea prin Web Serial. Vedeți [Trimiterea unui desen la un laser](topic:laser-cutting).

### STRETCH

Aliasuri: `S`; sau {{ui:Întindere}}. `Selectați obiectele de întins`: trageți ferestre de intersectare (sau tastați `C`) peste capete ca să mutați. `Specificați punctul de bază [Deplasare (D)]`, `Specificați al doilea punct`. Punctele din interiorul ferestrelor se mută: capetele de linii, vârfurile polilinilor (segmentele de arc își păstrează înălțimea), punctele cotelor; cercurile, elipsele, textul, punctele și blocurile se mută întregi când centrul sau punctul lor de inserare este înăuntru. O selecție făcută înainte de comandă păstrează ferestrele de intersectare (și lasourile) care au făcut-o, astfel încât se întind la fel. Fără fereastră, obiectele se mută întregi.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliasuri: `AR`; sau {{ui:Matrice}}. `Selectați obiecte`, apoi `Introduceți tipul matricei [Dreptunghiular/POlar] <Dreptunghiular>` (doar ARRAY).

- Dreptunghiular începe cu 4 coloane × 3 rânduri, distanțate de 1.5 ori mărimea obiectelor, arătat ca previzualizare. `Introduceți o opțiune [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` cere coloanele și rândurile, `S` distanțele dintre coloane și dintre rânduri (negativ merge la stânga sau în jos), `COL` și `R` câte o direcție.
- Polar cere `Specificați punctul central al matricei`, începe cu 6 elemente tot în jur, rotite. `Introduceți o opțiune [Elemente/Unghi de umplere/Rotire elemente/eXit] <X>`: `I` elementele, `F` unghiul de umplere (+ în sens invers acelor de ceasornic, − în sensul acelor de ceasornic), `ROT` Da sau Nu.
- {{key:Enter}} (eXit) face copiile, ca obiecte simple. Un pas de anulare.
- `AS` (Asociativ) trece între copii simple și o matrice care rămâne editabilă: un obiect pe care îl schimbați mai târziu cu {{cmd:ARRAYEDIT}}, prin mânerele lui sau în Proprietăți. Alegerea se ține minte ({{cmd:ARRAYASSOCIATIVITY}}); pornește pe copii simple.

### ARRAYPATH

Copii de-a lungul unei curbe. `Selectați obiecte`, apoi `Selectați curba traseului`: o linie, un arc, un cerc, o elipsă, o polilinie sau o spline (nu unul dintre obiectele care se copiază). Traseul pornește de la capătul său mai apropiat de obiecte, iar primul element este obiectul unde se află.

- `Introduceți o opțiune [Metodă/Elemente/Distanță/Aliniere/Asociativ/eXit] <X>`, cu o previzualizare. `M`: `Împărțire` răspândește elementele egal pe tot traseul, `Măsurare` pune unul la fiecare distanță dată de-a lungul lui. `I`: numărul de elemente (cu Măsurare, 0 înseamnă câte încap); un număr peste capătul traseului se limitează la cât încape. `SP`: distanța dintre elemente de-a lungul traseului (trece la Măsurare). `AL`: Da întoarce fiecare element ca să urmeze traseul, Nu le lasă drepte.
- `AS` ca în {{cmd:ARRAY}}. Cu el pornit, matricea își păstrează propria copie a formei traseului: modificarea ulterioară a curbei nu mută elementele.
- Refuză un traseu care nu este o curbă, și un singur element.

### ARRAYEDIT

Modifică o matrice făcută cu Asociativ. `Selectați matricea` (sau selectați-o mai întâi). Afișează ce este matricea acum, apoi întreabă până la {{key:Enter}}:

- Dreptunghiular: `COL` coloanele și distanța lor, `R` rândurile și distanța lor, `A` unghiul în care merg coloanele.
- Polar: `I` elementele, `F` unghiul de umplere, `ROT` rotirea elementelor Da sau Nu.
- Traseu: `M` Împărțire sau Măsurare, `I` elementele, `SP` distanța, `AL` alinierea cu traseul.
- `S` (Sursă) deschide obiectele pe care le repetă matricea, de sine stătătoare, ca editorul de blocuri. Desenați și editați acolo; {{cmd:ARRAYCLOSE}} salvează sau renunță, iar fiecare element urmează.
- `REP` (Înlocuire): `Selectați obiectele de înlocuire`, `Specificați punctul de bază al obiectelor de înlocuire`, apoi faceți clic pe elementele de înlocuit, {{key:Enter}}. Acelea arată înlocuitorul; obiectele înlocuitoare părăsesc desenul și trăiesc în matrice. `RES` (Resetare) arată din nou obiectele sursă în fiecare element.
- Fiecare schimbare este un pas de anulare. Refuză copiile simple, o referință de bloc simplă și o matrice pe un strat blocat.

Aceleași numere sunt în Proprietăți, la Matrice, iar matricea are mânere: punctul ei de bază o mută, mânerul de la al doilea element stabilește distanța, mânerul de după ultimul element stabilește numărul (polar: al doilea element stabilește câte elemente sunt, ultimul unghiul de umplere). {{cmd:EXPLODE}} transformă o matrice înapoi în copii simple.

### ARRAYCLOSE

Încheie {{cmd:ARRAYEDIT}} Sursă: `Salvați modificările obiectelor sursă ale matricei? [Salvare/Renunțare] <Salvare>`. Spune asta când nu sunt deschise obiecte sursă ale vreunei matrice. {{cmd:BCLOSE}} face același lucru.

### ARRAYASSOCIATIVITY

`Introduceți o valoare nouă pentru ARRAYASSOCIATIVITY (1 = matricele rămân editabile, 0 = copii simple)`. Stabilește cu ce pornesc {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR și {{cmd:ARRAYPATH}}; opțiunea lor `AS` schimbă aceeași setare. Se ține minte în acest browser.

### OFFSET

Aliasuri: `O`. Linii, arce, cercuri și polilinii.

Unde o polilinie se mută spre exterior și segmentele ei drepte se despart la un colț, {{cmd:OFFSETGAPTYPE}} hotărăște cum se închide golul.

- `Specificați distanța de decalare [Prin] <ultima distanță, sau Prin>`
- `Selectați obiectul de decalat`, apoi `Specificați punctul pe partea de decalat` (sau, cu Prin, `Specificați punctul prin care trece`), repetat până la Enter.

### OFFSETGAPTYPE

- `Golurile colțurilor la decalare: 0 prelungire, 1 rotunjire, 2 teșire`: cum închide {{cmd:OFFSET}} golurile din colțurile exterioare ale unei polilinii. `0` prelungește segmentele până se întâlnesc (setarea de pornire), `1` le unește cu un arc în jurul vechiului colț, `2` cu o tăietură dreaptă. Colțurile interioare și segmentele de arc nu sunt afectate. Se păstrează pentru această sesiune.

### EXTRIM

{{cmd:EXTRIM}} taie tot ce se află pe o parte a unei muchii. Alegeți muchia de tăiere (o linie, un arc, un cerc, o polilinie, o elipsă, o spline sau o linie de construcție), apoi alegeți un punct pe partea de curățat: fiecare linie, arc, cerc, polilinie și linie de construcție care traversează muchia pierde partea sa de pe acea parte, de unde începe la muchie. Cât timp alegeți partea, bucățile care ar dispărea urmează indicatorul. Pentru o muchie închisă, părțile sunt interiorul și exteriorul. Obiectele care doar ating muchia, și textul, hașurile, splinele și elipsele care o traversează, rămân cum sunt. Un singur pas de anulare.

### TRIMEXTENDMODE

- `Introduceți o valoare nouă pentru TRIMEXTENDMODE (1 Rapid, 0 Standard)`: cum pornesc {{cmd:TRIM}} și {{cmd:EXTEND}}. `1` Rapid: fiecare obiect este muchie de tăiere sau margine. `0` Standard: cer întâi muchiile. Și `(setvar "TRIMEXTENDMODE" 0)` în LISP.

### TRIM

Aliasuri: `TR`. Afișează întâi `Setări curente: modul Rapid (TRIMEXTENDMODE 1), muchii: fără prelungire, tragerea desenează o cale`. În modul Rapid fiecare obiect vizibil este muchie de tăiere, iar un obiect pe care nimic nu îl traversează se șterge; în modul Standard cere întâi `Selectați muchiile de tăiere (Enter = fiecare obiect)` și taie doar acolo.

- `Selectați obiectul de tăiat sau selectați cu Shift pentru a prelungi [Muchii de tăiere (T)/Gard (F)/Traversare (C)/Mod (O)/Muchie (E)/Ștergere (R)/Anulare (U)]`, repetat: faceți clic pe bucata de eliminat (apare gri și punctat cât timp indicatorul stă pe ea), trageți o cale prin mai multe bucăți (toate merg într-un singur pas), sau faceți clic pe două locuri goale pentru un gard între ele. {{key:Shift}} prelungește în loc. `T` alege muchiile de tăiere (modul Standard), `F` cere puncte de gard, `C` două colțuri de fereastră (bucățile parțial în interior merg), `O` cere `Introduceți o opțiune pentru modul de tăiere [Rapid/Standard]`, `E` cere `Introduceți modul de prelungire a muchiei implicite [Prelungire/Fără prelungire]` (EDGEMODE), `R` șterge obiectele pe care le alegeți, `U` anulează ultima alegere sau tragere. Enter încheie. Vedeți [Tăierea și prelungirea](topic:trim-and-extend).

- Un clic pe o hașură taie hașura: muchiile de tăiere împart suprafața hașurată, iar bucata pe care ați făcut clic este scoasă (nu rămâne niciun contur desenat în locul ei). Hașura își păstrează modelul sau gradientul; o hașură care era legată de conturul ei nu mai este legată după aceea, pentru că nu o mai umple. Spune asta când nicio muchie de tăiere nu împarte hașura acolo, când clicul este în afara hașurii și când nu ar rămâne nimic (folosiți {{cmd:ERASE}}). O cale sau un gard trase nu taie hașurile.

### EXTEND

Aliasuri: `EX`. La fel ca TRIM, pe dos: `Selectați obiectul de prelungit sau selectați cu Shift pentru a tăia [Muchii de margine (B)/Gard (F)/Traversare (C)/Mod (O)/Muchie (E)/Anulare (U)]`. Un clic lungește capătul cel mai apropiat până la următoarea margine; o cale sau un gard trase lungesc fiecare obiect pe care îl traversează; {{key:Shift}} taie. `B` alege muchiile de margine (modul Standard). Modul și Muchia sunt comune cu TRIM.

### LINKVIEWS

Aliasuri: `SYNCVIEWS`; sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Legare a vizualizărilor panourilor}}, sau pictograma de legătură de pe filele desenului. `Legați vizualizările panourilor [PORNIT/OPRIT]` (Enter trece la cealaltă stare): cât timp este pornit, o deplasare sau un zoom în panoul activ mută fiecare panou care arată același fel de spațiu. Vedeți [Împărțirea ecranului](topic:split-screen).

### OPENIN3D

Fără aliasuri; sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Deschidere în ModelCraft}} acolo unde aplicația de modelare 3D primește un desen predat. Îl deschide acolo într-o filă nouă, ca DWG (nu se încarcă nimic). Dacă browserul blochează fila, spune asta.

### LASSOMODE

`Introduceți o valoare nouă pentru LASSOMODE (1 = lasou, 0 = dreptunghi)`: ce desenează apăsarea și trăgerea pe un spațiu gol. Același lucru ca Setări › CadCraft › Trăgând pentru selectare. Vedeți [Selecția cu lasou](topic:lasso-selection).

### FILLET

Aliasuri: `F`. Linii, arce, cercuri și polilinii. Afișează întâi `Setări curente: Mod = TRIM, Rază = 0`.

- `Selectați primul obiect [Anulare (U)/Polilinie (P)/Rază (R)/Tăiere (T)/Mai multe (M)]`
  - `R` cere `Specificați raza de rotunjire <ultima>`. `T` cere `Introduceți opțiunea de tăiere [Tăiere/Fără tăiere]`: cu Fără tăiere obiectele rămân cum sunt și se adaugă doar arcul.
  - `M` ține comanda deschisă pentru mai multe colțuri până la {{key:Enter}}; `U` anulează ultimul colț fără să părăsească comanda.
  - `P` cere `Selectați polilinia 2D [Rază]` și rotunjește fiecare colț unde se întâlnesc două segmente drepte. Rotunjirile pe care le are deja sunt înlocuite de noua rază; raza 0 le scoate. Colțurile ale căror laturi sunt prea scurte pentru rază sunt lăsate și numărate.
- `Selectați al doilea obiect sau selectați cu Shift pentru a aplica colțul [Rază (R)]`. Țineți {{key:Shift}} apăsat când faceți clic pentru un colț ascuțit, oricare ar fi raza.

Faceți clic pe fiecare obiect în partea pe care vreți s-o păstrați. Două linii care nu se întâlnesc sunt prelungite. Două linii paralele primesc un semicerc peste gol, la capătul primei linii cel mai apropiat de clic. Un cerc nu se taie niciodată. Două segmente ale aceleiași polilinii alăturate primesc arcul în interiorul polilinii; o polilinie și alt obiect merg când tăietura cade pe primul sau ultimul segment al polilinii.

### CHAMFER

Aliasuri: `CHA`. Linii și segmentele drepte ale polilinilor. Afișează întâi distanțele curente (sau lungimea și unghiul).

- `Selectați prima linie [Anulare (U)/Polilinie (P)/Distanță (D)/Unghi (A)/Tăiere (T)/Metodă (E)/Mai multe (M)]`
  - `D` cere `Specificați prima distanță a teșiturii <ultima>` și `Specificați a doua distanță a teșiturii <prima>`: prima se taie de pe prima linie aleasă, a doua de pe cealaltă.
  - `A` cere `Specificați lungimea teșiturii pe prima linie` și `Specificați unghiul teșiturii față de prima linie`.
  - `E` (Metodă) alege care dintre cele două folosește următoarea teșitură. `T`, `M`, `U` și `P` funcționează ca la {{cmd:FILLET}}.
- `Selectați a doua linie sau selectați cu Shift pentru a aplica colțul [Distanță/Unghi/Metodă]`. {{key:Shift}}+clic face un colț ascuțit.

O distanță mai lungă decât linia este refuzată (`Distanța este prea mare.`).

### BREAK și BREAKATPOINT

Aliasuri: `BR`. `Selectați obiectul` (unde faceți clic este primul punct), `Specificați al doilea punct de rupere [Primul punct (F)]`; `F` cere `Specificați primul punct de rupere` și `Specificați al doilea punct de rupere`. Partea dintre ele dispare; pe un cerc, în sens invers acelor de ceasornic de la primul punct. BREAKATPOINT cere `Specificați punctul de rupere` și împarte obiectul în două acolo (nu un cerc).

### LENGTHEN

Aliasuri: `LEN`. `Selectați un obiect de măsurat [Delta (DE)/Procent (P)/Total (T)/Dinamic (DY)]`: un clic afișează `Lungimea curentă` (și unghiul inclus al unui arc) și cere din nou. `DE` cere `Introduceți lungimea delta (negativ scurtează) [Unghi]`, `P` `Introduceți lungimea în procente`, `T` `Specificați lungimea totală [Unghi]`, `DY` trage. Apoi `Selectați un obiect de modificat [Anulare (U)]`, repetat: capătul cel mai apropiat de clic se mută. Linii, arce și polilinii deschise.

### JOIN

Aliasuri: `J`. `Selectați obiectele de unit`. Liniile, arcele și polilinile deschise care se întâlnesc cap la cap devin polilinii (închise când lanțul se închide); liniile de pe aceeași dreaptă devin o linie; arcele aceluiași cerc devin un arc sau cercul. Istoricul spune câte obiecte s-au unit și câte nu.

### MATCHPROP

Aliasuri: `MA`, `PAINTER`. `Selectați obiectul sursă`, apoi `Selectați obiectele destinație [Setări]` și {{key:Enter}}. Copiază stratul și culoarea și, între obiecte de același fel, înălțimea și lățimea textului, mărimile cotelor sau modelul hașurii. `S` cere `Activați sau dezactivați o proprietate [Culoare/Strat/Text/Cotă/Hașură]`, repetat până la {{key:Enter}}; alegerea se ține minte pentru sesiune.

### EXPLODE

Aliasuri: `X`. Polilinii devin linii și arce, referințele de bloc devin obiectele lor, cotele devin linii, săgeți și text. O matrice care rămâne editabilă ({{cmd:ARRAYEDIT}}) devine copii simple ale obiectelor sale.

- `Selectați obiecte`

### GROUP

Alias: `G`. {{cmd:GROUP}} dă obiectelor selectate un nume comun. Selectați obiectele, apoi tastați un nume (fără spații; `?` listează grupurile; Enter face un grup fără nume) și, pentru un grup cu nume, o descriere opțională. De atunci, un clic pe unul dintre ele, sau o fereastră care prinde unul, selectează toate, astfel încât se mută, se copiază și se șterg împreună; fiecare obiect rămâne propriul obiect. Un obiect poate fi în mai multe grupuri. O copie a unui grup întreg este un grup nou fără nume; o copie a unui singur membru, luată singură, se alătură grupului. Grupurile aparțin spațiului în care au fost făcute (modelul sau o foaie). Se păstrează când salvați ca DWG sau DXF și deschideți din nou fișierul în CadCraft; fișierele DXF 2000 le transportă și ca obiecte de grup pentru alte programe, iar grupurile făcute în alt program se citesc când se deschide un DXF sau DWG.

### UNGROUP

{{cmd:UNGROUP}} desface grupurile: selectați obiecte din grupuri (fiecare grup în care se află este desfăcut) sau tastați `Nume` și numele grupului. Obiectele rămân în desen. Un singur pas de anulare aduce grupurile înapoi.

### GROUPEDIT

{{cmd:GROUPEDIT}} schimbă un grup. Alegeți unul dintre obiectele lui, sau `Nume` și numele lui; un grup deja selectat se ia așa cum este. Apoi: `Adăugare` obiecte (alese unul câte unul, nu grup cu grup), `Eliminare` obiecte, `Redenumire` grupul (`REName`), schimbați `Descrierea`, sau setați `Selectabil` (dacă un clic pe un obiect selectează întregul grup). `eXit` sau Enter încheie. Un grup fără obiecte rămâne desființat.

### PICKSTYLE

- `Selecție de grup: 0 un clic selectează un obiect, 1 întregul său grup`: cu `1` (setarea de pornire) un clic sau o fereastră pe un obiect grupat selectează tot grupul; cu `0` obiecte singulare, ca să editați un singur membru. Se păstrează pentru această sesiune.

## Clipboard

Clipboardul propriu al CadCraft: funcționează într-un desen, între desene și între filele CadCraft din acest browser. Vedeți [Copiere, lipire și duplicare](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, sau {{ui:Copiere}} din grupul {{ui:Editare}}. Copiază obiectele în clipboard, împreună cu blocurile și straturile pe care le folosesc. Obiectele rămân selectate.

- `Selectați obiectele de copiat` (sărit când obiectele sunt deja selectate)

### CUTCLIP

{{key:Mod+X}}, sau {{ui:Decupare}} din meniul {{ui:Mai multe}}. Copiază obiectele în clipboard, apoi le șterge (un pas de anulare).

- `Selectați obiectele de decupat` (sărit când obiectele sunt deja selectate)

### COPYBASE

Copiază obiectele în clipboard cu un punct de bază ales; lipirea plasează acel punct.

- `Specificați punctul de bază`
- `Selectați obiectele de copiat`

### PASTECLIP

{{key:Mod+V}}, sau {{ui:Lipire}} din grupul {{ui:Editare}}. Copia urmează cursorul, atârnând de colțul din stânga jos al extinderii sale (sau de centrul ei, sau de punctul `COPYBASE`; vedeți [Setările CadCraft](topic:settings)).

- `Specificați punctul de inserare`

Obiectele lipite sunt selectate. Un bloc pe care desenul îl are deja sub același nume păstrează definiția acestui desen.

Când o zonă copiată în MarkupCraft este mai nouă decât ce a copiat CadCraft (și are mai puțin de 6 ore), {{key:Mod+V}} și `PASTECLIP` lipesc în schimb acea zonă: vedeți `PASTEAREA`.

### PASTEAREA

Aliasuri: `PAREA`. {{ui:Lipire zonă copiată}} din meniul {{ui:Mai multe}}. Lipește o zonă copiată cu {{ui:Copiere zonă}} în MarkupCraft, ca imagine, la dimensiunea ei reală. Vedeți [Imagini într-un desen](topic:pictures).

- `Specificați colțul din stânga jos al zonei copiate`
- `Scalați dimensiunea ei pe hârtie cu (100 pentru o foaie 1:100; Puncte: două puncte pe ea și distanța lor reală) [Puncte] <1>` (doar când foaia nu avea scară de desen): un număr, {{key:Enter}} pentru dimensiunea pe hârtie, sau `P`, apoi `Primul punct pe zona lipită`, `Al doilea punct pe zona lipită` și distanța lor reală.

### PASTEORIG

{{key:Mod+Shift+V}}, sau {{ui:Lipire în aceeași poziție}} din meniul {{ui:Mai multe}}. Lipește la coordonatele de unde au fost copiate obiectele. Nu întreabă nimic.

### DUPLICATE

Aliasuri: `DUP`. {{key:Mod+D}}, sau {{ui:Duplicare și mutare}} din meniul {{ui:Mai multe}}. O copie a obiectelor se mută cu indicatorul de unde se află; {{key:Esc}} nu lasă nimic. Nu folosește clipboardul.

- `Selectați obiectele de duplicat` (sărit când obiectele sunt deja selectate)
- `Specificați unde merge copia (Esc nu lasă nimic)`: faceți clic, tastați un punct, `@dx,dy` (de unde era indicatorul), sau o distanță spre cursor.

### SELECT

Cere `Selectați obiecte` (cu toate opțiunile de mai jos) și lasă selectat ce alegeți, pentru următoarea comandă sau pentru `P` mai târziu.

### QSELECT

Aliasuri: `QS`. În browser, caseta de dialog {{ui:Selectare rapidă}} (vedeți [Selectarea obiectelor](topic:select-objects#select-by-a-rule-quick-select)). Fără ea, linia de comandă cere `Introduceți tipul obiectului`, `Introduceți proprietatea`, `Introduceți operatorul [=/<>/>/</*/Selectare totală] <=>` și `Introduceți valoarea`. Potrivirile devin selecția.

### SELECTSIMILAR

Aliasuri: `SIM`. `Selectați obiecte [Setări]` (sau selecția curentă): selectează fiecare obiect de același tip, cu același strat și aceeași culoare (și același nume de bloc, model de hașură). `SE` cere `Activați sau dezactivați o proprietate [Strat/Culoare/Nume/Model/Înălțime]`, repetat până la {{key:Enter}}.

### FIND

Fără aliasuri; sau {{ui:Editare}} › {{ui:Mai multe}} › {{ui:Găsire și înlocuire}}. În browser, caseta de dialog {{ui:Găsire și înlocuire}} (vedeți [Adăugarea textului și a etichetelor](topic:text#find-and-replace-words)). Fără ea: `Introduceți textul de găsit`, apoi `Introduceți textul de înlocuire (Enter: selectați ce s-a găsit)`. Caută în text, în valorile atributelor și în textul cotelor, pe fila deschisă sau în selecție.

### SELECTALL și DESELECT

`SELECTALL` (aliasul `AI_SELALL`, {{key:Mod+A}}) selectează fiecare obiect pe care îl puteți edita pe fila deschisă. `DESELECT` (aliasurile `AI_DESELECT`, `SELECTNONE`; sau {{key:Esc}}) golește selecția.

## Cote

### DIMLINEAR

Aliasuri: `DLI`, `DIMLIN`. Distanță orizontală sau verticală.

- `Specificați originea primei linii de ghidaj [Selectare obiect (S)]` (Enter sau `S`: `Selectați obiectul de cotat`, apoi faceți clic pe o linie, un arc, un cerc sau un segment de polilinie)
- `Specificați originea celei de-a doua linii de ghidaj`
- `Specificați locul liniei de cotă [Text/Orizontal/Vertical/Rotit]`. `T` cere text (`<>` este valoarea măsurată), `H` și `V` fixează direcția, `R` cere `Specificați unghiul liniei de cotă <0>`.

### DIMALIGNED

Aliasuri: `DAL`, `DIMALI`. Distanța reală între două puncte.

- Originile ca la {{cmd:DIMLINEAR}}, apoi `Specificați locul liniei de cotă [Text]`.

### DIMANGULAR

Aliasuri: `DAN`, `DIMANG`.

- `Selectați arc, cerc sau linie, sau Enter pentru un vârf`
- Arc: unghiul lui. Cerc: `Specificați al doilea capăt al unghiului`. Linie: `Selectați a doua linie`. Enter: `Specificați vârful unghiului`, `Specificați primul capăt al unghiului`, `Specificați al doilea capăt al unghiului`.
- `Specificați locul liniei de cotă [Text]`: faceți clic în interiorul unghiului pe care îl măsurați.

### DIMRADIUS și DIMDIAMETER

Aliasuri: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Selectați arc sau cerc`, apoi `Specificați locul liniei de cotă [Text]`.

### DIMCONTINUE

Aliasuri: `DCO`, `DIMCONT`. Continuă de la ultima cotă liniară sau aliniată făcută (sau cere `Selectați cota liniară sau aliniată`).

- `Specificați originea celei de-a doua linii de ghidaj [Anulare (U)]`, repetat până la Enter.

### DIMBASELINE

Aliasuri: `DBA`, `DIMBASE`. Ca {{cmd:DIMCONTINUE}}, dar fiecare cotă pornește de la prima origine și se înșiruie mai departe.

### DIMORDINATE

Aliasuri: `DOR`, `DIMORD`. `Specificați locul elementului`, apoi `Specificați capătul indicației [Xdatum/Ydatum/Text]`. Scrie cât de departe este elementul de originea SCU pe X sau pe Y, pe o indicație: o indicație care merge în mare parte în sus sau în jos citește X, una care merge lateral citește Y; `Xdatum` și `Ydatum` fixează care. Stabiliți mai întâi originea cu {{cmd:UCS}} (fără ea este 0,0 al desenului). Mânerele mută elementul, originea și capătul indicației, iar valoarea urmează. Se salvează ca o cotă de ordonată reală în DWG și DXF. Refuză un capăt al indicației chiar pe element.

### DIMARC

Aliasuri: `DAR`. `Selectați arcul sau segmentul de arc al polilinii`, apoi `Specificați locul cotei de lungime a arcului [Text]`. Măsoară de-a lungul arcului (nu pe coardă) și scrie simbolul arcului înaintea valorii. Refuză un cerc întreg, o linie sau un segment drept de polilinie. Un DWG o păstrează ca o cotă de lungime a arcului; un DXF o păstrează ca o cotă unghiulară cu lungimea ca text, iar CadCraft o deschide din nou ca o cotă de lungime a arcului.

### DIMJOGGED

Aliasuri: `DJO`, `JOG`. `Selectați arc sau cerc`, `Specificați locul centrului înlocuit`, `Specificați locul frângerii`. O cotă de rază pentru o curbă al cărei centru este departe sau în afara foii: linia de cotă pornește de la punctul pe care îl dați în loc de centru, cu o frângere în ea, și tot scrie raza reală. Un DWG o păstrează ca o cotă de rază frântă; un DXF o păstrează ca o cotă de rază, iar CadCraft o deschide din nou frântă.

### DIMJOGLINE

Aliasuri: `DJL`. `Selectați cota de adăugat frângerea [Eliminare]`, apoi `Specificați locul frângerii (sau apăsați Enter)`. Pune un simbol de frângere pe linia unei cote liniare sau aliniate, ca să arate că distanța nu este desenată la scară; valoarea nu se schimbă. `Eliminare` îl scoate. Refuză alte feluri de cote.

### QDIM

Fără aliasuri. `Selectați geometria de cotat`, apoi `Specificați poziția liniei de cotă [Continuu/Decalat/De bază/Ordonată/Rază/Diametru/punctDeReferință]`. Cotează mai multe obiecte deodată, de la capetele liniilor și segmentelor de polilinie, centrele cercurilor și arcelor, punctele și referințele de bloc. O poziție deasupra sau dedesubtul obiectelor măsoară pe lățime, una lângă ele măsoară în sus. `Continuu` înlănțuie punctele, `De bază` măsoară toate de la primul, `Decalat` cuibărește perechi de la mijloc spre exterior, `Ordonată` dă fiecărui punct distanța lui față de referință (`punctDeReferință` alege una nouă), `Rază` și `Diametru` cotează fiecare cerc și arc ales. Modul se ține minte. Tot ce face este un singur pas de anulare. Spune asta când sunt mai puțin de două puncte sau niciun arc ori cerc pentru Rază și Diametru.

### DIMBREAK

Aliasuri: `DBREAK`. `Selectați cote pentru a adăuga sau elimina întreruperi`, apoi `Întrerupeți acolo unde se intersectează alte obiecte [Auto/Manual/Eliminare] <Auto>`. `Auto` lasă un gol în liniile de cotă și de ghidaj oriunde le traversează alt obiect, și recalculează golurile când acele obiecte sau cota se mută. `Manual` (o singură cotă) cere două puncte și lasă un gol între ele. `Eliminare` scoate toate golurile. Golul este de 1.5 ori înălțimea textului cotei.

### DIMSPACE

Fără aliasuri. `Selectați cota de bază`, `Selectați cotele de așezat la distanțe egale`, `Introduceți valoarea distanței sau Auto <Auto>`. Mută liniile de cotă ale cotelor liniare și aliniate paralele (sau cele unghiulare din același vârf) ca să stea la aceeași distanță una de alta, numărată de la cota de bază, fiecare de partea pe care se află. `0` le aliniază cu cota de bază; `Auto` este dublul înălțimii textului cotei de bază. Cotele care nu sunt paralele cu cota de bază rămân neatinse.

### DIMINSPECT

Fără aliasuri. `Selectați cotele`, `Forma cadrului de inspecție [Rotund/Unghiular/Nimic/eliminare] <Rotund>`, `Introduceți eticheta`, `Introduceți rata de inspecție <100%>`. Desenează un cadru în jurul valorii, cu o etichetă înainte și rata de inspecție după. `eliminare` scoate cadrul. Textul toleranței rămâne cu valoarea.

### DIMOVERRIDE

Aliasuri: `DOV`, `DIMOVER`. `Introduceți numele variabilei de cotare de suprascris sau Ștergere`, `Introduceți o valoare nouă pentru …`, din nou până la Enter, apoi `Selectați cotele`. Schimbă aceste setări doar pe cotele selectate; stilul de cotare nu se schimbă. Acceptă variabilele care sunt un număr sau un comutator (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Ștergere` pune cotele selectate înapoi pe stilul lor. Refuză un nume care nu este o astfel de variabilă și o valoare pe care nu o poate primi.

### DIMREASSOCIATE

Aliasuri: `DRE`, `DIMREASSOC`. `Selectați cotele`, apoi pentru fiecare originile ei ale liniilor de ghidaj (`Specificați originea primei linii de ghidaj pe un obiect`: se prinde de un capăt sau de mijlocul unei linii, de un colț de polilinie, de un centru; Enter lasă punctul liber), sau, pentru o cotă de rază, diametru, rază frântă sau lungime de arc, `Selectați arc sau cerc`. Cota este apoi legată de acele obiecte: când se mută sau își schimbă mărimea, urmează și se măsoară din nou, într-un singur pas de anulare. Mutarea manuală a unui punct legat, sau ștergerea obiectului, rupe legătura. Legătura se salvează în DWG și DXF 2000 ca date proprii CadCraft; alte programe văd o cotă obișnuită.

### DIMDISASSOCIATE

Aliasuri: `DDA`, `DIMDISASSOC`. `Selectați cotele`. Le eliberează de obiectele de care erau legate; nimic nu se mută.

### CENTERMARK

Aliasuri: `CM`, `DIMCENTER`, `DCE`. `Selectați cercul sau arcul pentru marcaj de centru`, din nou până la Enter. Desenează o cruce în centru și patru linii de centru care trec puțin peste curbă (tipul de linie CENTER), ca linii simple pe stratul curent; mărimea vine din mărimea săgeții și scara generală a setărilor de cotare curente, și se rotește cu SCU. Nu urmează cercul dacă acesta se mută.

### CENTERLINE

Aliasuri: `CL`. `Selectați prima linie`, `Selectați a doua linie`. Desenează o linie la jumătatea distanței dintre două linii (de-a lungul bisectoarei când se întâlnesc), puțin mai lungă decât ele, în tipul de linie CENTER. O linie simplă: nu urmează cele două linii.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Fără aliasuri. Fiecare cere `Introduceți o valoare nouă pentru … <curentă>` și stabilește acea mărime pentru cotele **noi**: scara generală, înălțimea textului, mărimea săgeții, zecimalele (până la 8), spațiul din jurul textului, prelungirea dincolo de linia de cotă, decalajul față de origine. Vedeți [Stabilirea mărimilor cotelor](topic:dimension-settings).

### DIMLUNIT

Setare de cotare: formatul cotelor noi numai (1 științific, 2 zecimal, 3 inginerie, 4 arhitectural, 5 fracționar).

### DIMSTYLE și -DIMSTYLE

Aliasuri: `DST`, `DDIM`, `D`. Managerul stilurilor de cotare: {{ui:Setare curentă}}, {{ui:Nou…}}, {{ui:Modificare…}}, {{ui:Redenumire…}}, {{ui:Ștergere}}, {{ui:Comparare…}}, {{ui:Aplicare la selecție}}. `-DIMSTYLE` în linia de comandă: `Stil de cotare [Restaurare/Salvare/Ștergere/Aplicare/Comparare/Redenumire/Listă]`. Vedeți [Stabilirea mărimilor cotelor](topic:dimension-settings#named-dimension-styles).

### DIMEDIT și DIMTEDIT

`DIMEDIT` (`DED`): `Editare cotă [Acasă/Nou/Rotire/Oblic] <Acasă>`, apoi cotele (sau cele deja selectate). Nou cere textul (`<>` = măsurătoarea); Rotire cere un unghi (0 pune textul la loc); Oblic cere unghiul liniilor de ghidaj față de axa X (Enter = niciunul; doar cote liniare și aliniate). `DIMTEDIT` (`DIMTED`): `Text cotă [Stânga/Dreapta/Centru/Acasă/Unghi] <Centru>`. Vedeți [Stabilirea mărimilor cotelor](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliasuri: `DTU`. `Unități în textul cotelor noi [Unități ale desenului/mm/cm/m/km]`, sau cu cote selectate `Unități în textul cotelor selectate`. Scrie lungimea măsurată în acea unitate, cu unitatea după ea (DIMLFAC și un sufix DIMPOST); `D` revine la unitățile desenului. Vedeți [Cote în mm, cm, m sau km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliasuri: `RC`. Afișează `Lungimea arcului: … Tip: …`, apoi `Specificați primul punct [Lungimea arcului/Obiect/Dreptunghiular/Poligonal/Liber]`. Dreptunghiular cere `Specificați colțul opus`; Poligonal `Specificați următorul punct (Enter închide norul) [Anulare]`; Liber urmează indicatorul până la un clic sau {{key:Enter}}; `O` cere `Selectați obiectul` și `Inversați direcția? [Da/Nu] <N>` și transformă obiectul în nor. `A` cere `Specificați lungimea fiecărui arc`. `R`, `P` și `F` aleg tipul pentru următorul nor. Rezultatul este o polilinie închisă de arce.

### MLEADER

Aliasuri: `MLD`; sau {{ui:Indicație}}. `Specificați locul vârfului săgeții indicației [Mărimea săgeții/Distanța de aterizare/Bloc]`, `Specificați locul de aterizare a indicației`, apoi textul în caseta de pe loc (sau, fără ea, `Introduceți textul (un rând gol încheie)`). `Bloc` cere întâi un nume de bloc, iar indicația multiplă arată blocul în loc de text. Mai multe linii de indicație: {{cmd:MLEADEREDIT}}. Se salvează ca o indicație multiplă reală în DWG; DXF păstrează liniile, vârful săgeții și textul pe care le desenează.

### MLEADEREDIT

Aliasuri: `MLE`. `Selectați o indicație multiplă`, apoi `Specificați locul vârfului săgeții indicației [Eliminare indicații/Conținut bloc/Conținut text]`: fiecare punct adaugă o linie de indicație de la un vârf nou de săgeată la același loc de aterizare, până la Enter. `Eliminare indicații` scoate linia de indicație pe care faceți clic (o indicație multiplă păstrează cel puțin una). `Conținut bloc` cere un nume de bloc și arată blocul în loc de text (atributele lui se cer); `Conținut text` pune textul la loc. Fiecare linie de indicație are propriul mâner. DWG păstrează fiecare linie de indicație și blocul într-o singură indicație multiplă.

### MLEADERALIGN

Aliasuri: `MLA`. `Selectați indicațiile multiple`, apoi `Selectați indicația multiplă la care să aliniați [Distribuire/Spațiere/Folosiți spațierea curentă]` și `Specificați direcția`. Mută locurile de aterizare ale celorlalte indicații (și textul sau blocul lor) pe linia care trece prin locul de aterizare al celei alese, în acea direcție; vârfurile săgeților rămân unde indică. `Spațiere` le dă și distanțe egale; `Distribuire` cere două puncte și le răspândește egal între ele. Are nevoie de cel puțin două indicații multiple.

### MLEADERCOLLECT

Aliasuri: `MLC`. `Selectați indicațiile multiple`, apoi `Specificați locul indicației multiple adunate [Vertical/Orizontal]` (Enter păstrează locul primei). Face o singură indicație multiplă din mai multe: conținutul de bloc intră într-un bloc nou care le ține pe toate una lângă alta sau una sub alta; conținutul de text devine o singură notă cu câte un rând pentru fiecare. Prima indicație multiplă își păstrează liniile de indicație; celelalte sunt eliminate. Refuză un amestec de conținut text și bloc.

### TABLE

Aliasuri: `TB`; sau {{ui:Adnotare}} › {{ui:Mai multe}} › {{ui:Tabel}}. Face un tabel: un obiect pe care îl mutați, copiați, rotiți, scalați și trasați ca orice altul, cu celulele păstrate ca date.

- `Numărul de rânduri de date sau [Lipire/Fișier/Stil] <3>`, apoi `Numărul de coloane <3>`, `Înălțimea textului` și `Colțul din stânga sus al tabelului`. Tabelul primește un rând de titlu (o celulă îmbinată) și un rând de antet deasupra rândurilor de date.
- `P`: un tabel din celule de foaie de calcul din clipboard (text cu un tab între celule). Apăsarea lui {{key:Ctrl+V}} cu asemenea celule în clipboard face același lucru, dacă copia proprie a CadCraft nu este mai nouă (sau dacă CadCraft nu poate spune: atunci lipește propria copie și o spune). `F`: un tabel dintr-un fișier `.csv` sau cu tab între valori. Primul rând devine rândul de antet; lățimile coloanelor se potrivesc cu textul.
- `S`: alege stilul de tabel pentru acest tabel (vedeți {{cmd:TABLESTYLE}}).
- Refuză un număr de rânduri sau coloane care nu este întreg și mai multe celule decât încape într-un tabel (2.000 de rânduri, 200 de coloane, 40.000 de celule).
- {{cmd:EXPLODE}} transformă un tabel în linii și text. Salvat ca DWG, un tabel este un obiect tabel real pe care alte programe îl pot edita; salvat ca DXF este un bloc care îl desenează, iar CadCraft îl deschide din nou ca tabel.

### TABLEDIT

Aliasuri: `TABLEEDIT`, `TABEDIT`; sau faceți dublu clic pe o celulă. Editează un tabel.

- `Alegeți o celulă în care să tastați (Enter pentru a termina) sau [Rând/Coloană/Mărime/Îmbinare/Desfacere/Aliniere/Înălțime/Tip/Golire]`. Faceți clic pe o celulă, sau, cu un tabel selectat, tastați numele ei (`B3`: coloana B, rândul 3; rândul de titlu este rândul 1). În browser se deschide o casetă peste celulă: {{key:Enter}} păstrează textul, {{key:Tab}} trece la celula următoare, {{key:Alt+Enter}} începe un rând nou, {{key:Esc}} lasă celula cum era.
- Un text care începe cu `=` este o formulă: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, cu `+ - * / ^`, paranteze și funcții ca `sqrt` și `round`. Celula arată valoarea; o formulă care se referă la propria celulă, la o celulă din afara tabelului sau la o celulă fără număr arată `####`, iar linia de comandă spune de ce.
- `R` / `C`: `Inserare` sau `Ștergere` de rânduri sau coloane la o celulă aleasă (câte, și deasupra sau dedesubt, la stânga sau la dreapta). Formulele urmează celulele la care se referă.
- `S`: lățimea coloanei și înălțimea rândului. Un rând nu este niciodată mai jos decât are nevoie textul său. Un tabel selectat are și un mâner pe marginea fiecărei coloane și fiecărui rând.
- `M`: îmbină de la o celulă aleasă la alta; `U`: desface. `A`: aliniere (`TL` stânga sus … `MC` mijloc centru … `BR` dreapta jos). `H`: propria înălțime a textului celulei (0 = a stilului). `K`: face rândul titlu, antet sau rând de date. `CL`: golește celula.
- Refuză un tabel pe un strat blocat, ștergerea tuturor rândurilor sau coloanelor, și o îmbinare care ar tăia în două o altă celulă îmbinată.

### TABLESTYLE

Aliasuri: `TS`. Listează stilurile de tabel cu câte tabele folosește fiecare, apoi `Stil de tabel: [Nou/Setare/Editare/Ștergere/Aplicare]`.

- Un stil ține înălțimea textului și alinierea rândurilor de titlu, antet și date, marginea celulei și care chenare se desenează (exterioare, între rânduri, între coloane).
- `N` face un stil din cel curent și îl face curent; `S` setează stilul curent (tabelele noi îl primesc); `E` editează unul: tabelele care îl folosesc se desenează din nou; `A` dă tabelelor selectate stilul curent; `D` șterge unul (nu Standard, nu cel curent; tabelele care îl foloseau își păstrează aspectul).
- Stilurile se salvează cu desenul (DWG și DXF).

### TABLEEXPORT

Salvează ce arată un tabel ca fișier CSV (o formulă ca valoarea ei). `Selectați un tabel`, sau selectați-l mai întâi. Celulele de text care încep cu `=`, `+`, `-` sau `@` primesc un `'` în față, ca o foaie de calcul să nu le execute.

### TABLEPASTE

Aliasuri: `PASTETABLE`. Face un tabel din celule de foaie de calcul din clipboard, apoi cere colțul din stânga sus. Același lucru ca {{cmd:TABLE}} › `Lipire`.

### DATALINK

Aliasuri: `DL`. `Legătură de date: [Nou/Listă/Eliminare] <Nou>`. `N` cere un fișier CSV, plasează un tabel din el și ține minte numele fișierului; `L` listează legăturile cu fișierul lor, mărimea, când a fost citit și câte tabele o folosesc; `R` elimină o legătură (tabelele ei rămân tabele simple).

### DATALINKUPDATE

Aliasuri: `DLU`. Citește din nou fișierul unei legături de date și reumple tabelele legate de el (rândurile și coloanele se adaugă sau se scot ca să se potrivească). Un browser nu poate deschide singur un fișier, așa că cere să alegeți fișierul din nou. Cu mai multe legături, întreabă care.

### FIELD

Pune un câmp în desen: text care se calculează singur. `Câmp: [Dată/Nume fișier/Foaie/Proprietate/Obiect/Expresie/Cod] <Dată>`:

- `D`: acum sau data salvată, creată ori trasată, și un format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: numele fișierului, cu sau fără extensie. `S`: numărul foii, titlul ei sau câte foi sunt. `P`: o proprietate a desenului după nume (vedeți {{cmd:DWGPROPS}}). `O`: alegeți un obiect, apoi ce să citească (aria, lungimea, perimetrul, raza, diametrul, stratul, numele, x, y, textul, rotația, culoarea) și zecimalele. `E`: o formulă. `C`: un text cu coduri tastate ca atare, precum `Foaia %<sheetnumber>% din %<sheetcount>%`.
- Apoi `Selectați un text, o celulă de tabel sau un bloc cu atribute în care să puneți câmpul (Enter: un text nou)`: un text ales primește câmpul adăugat după ce conține; o celulă de tabel la fel; o referință de bloc cere ce atribut; {{key:Enter}} cere o înălțime și un punct pentru un text nou.
- Pe ecran un câmp are un fundal gri deschis; o trasare și un PDF nu îl au niciodată. Scrierea peste textul câmpului cu mâna încheie câmpul. Un câmp care nu poate fi calculat arată `####`.
- Câmpul unui obiect își găsește obiectul după cheia pe care CadCraft o ține pe obiecte (Setări › CadCraft › Fișiere compatibile cu îmbinarea); cu cheile oprite, refuză.

### UPDATEFIELD

Aliasuri: `UPDATEFIELDS`. `Selectați obiectele ale căror câmpuri să le actualizați (Enter: fiecare câmp) sau [Setări]`. `S` stabilește când se actualizează câmpurile singure: tastați literele `O` deschidere, `S` salvare, `P` trasare, `R` regenerare (toate patru la început), sau `NONE`.

### DWGPROPS

Aliasuri: `DRAWINGPROPS`. Listează proprietățile desenului, apoi `Modificați: [Titlu/Subiect/Autor/Companie/Cuvinte cheie/Comentarii/Personalizat/Eliminare/Ieșire]`. Primele șase sunt cele pe care le arată panoul {{ui:Detalii despre desen}}; `U` adaugă un nume și o valoare proprii, `R` scoate una. Câmpurile le citesc (`%<prop:title>%`, `%<prop:Client>%`) și urmează imediat. Refuză un nume propriu care este unul dintre cele încorporate sau care conține `%`, `<`, `>`, un ghilimele sau un backslash.

## Parametric

Vedeți [Constrângerea unui desen](topic:constraints) și [Folosirea parametrilor și a ecuațiilor](topic:parameters). Constrângerile lucrează pe fila {{ui:Model}}.

### GEOMCONSTRAINT și comenzile GC

Alias `GCON`: `Introduceți tipul constrângerii [Orizontal/Vertical/Perpendicular/Paralel/Tangent/Coincident/Concentric/Coliniar/Simetric/Egal/Fixare] <Orizontal>`, apoi promptele acelei comenzi.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Selectați un obiect [2Puncte] <2Puncte>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Selectați primul obiect`, `Selectați al doilea obiect` (al doilea se mută).
- {{cmd:GCCOINCIDENT}}: `Selectați primul punct [Obiect/Auto-constrângere] <Obiect>`, `Selectați al doilea punct [Obiect] <Obiect>`.
- {{cmd:GCFIX}}: `Selectați punctul [Obiect] <Obiect>`.
- {{cmd:GCSYMMETRIC}}: `Selectați primul obiect [2Puncte] <2Puncte>`, `Selectați al doilea obiect`, `Selectați linia de simetrie`.

### DIMCONSTRAINT și comenzile DC

Alias `DCON`: `Selectați cota asociativă de transformat [Liniară/Orizontal/Vertical/Aliniat/Unghiular/Radial/Diametru/Transformare] <Aliniat>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specificați primul punct de constrângere [Obiect] <Obiect>`, `Specificați al doilea punct de constrângere`, `Specificați locul liniei de cotă`, `Text cotă <d1=40>` (un număr, o expresie sau `nume=expresie`).
- {{cmd:DCALIGNED}}: ca mai sus, cu `[Obiect/Punct și linie/2Linii]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Selectați arc sau cerc`. {{cmd:DCANGULAR}}: `Selectați prima linie sau arc`, `Selectați a doua linie`.
- {{cmd:DCCONVERT}}: `Selectați cotele de transformat`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Selectați obiectele [Setări]`. `S` cere toleranțele de distanță și unghi.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Selectați obiecte`; constrângerile lor dispar.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Selectați obiectele [Arată tot/Ascunde tot]`, apoi `[Arată/Ascunde]`.
- {{cmd:DCDISPLAY}}: `Introduceți o opțiune [Arată/Ascunde]`.

### PARAMETERS și -PARAMETERS

{{cmd:PARAMETERS}} (aliasuri `PAR`, `PARAM`) deschide panoul {{ui:Parametri}}. `-PARAMETERS`: `Introduceți o opțiune [Nou/Editare/Redenumire/Ștergere/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Descarcă o macro (.swb) care reconstruiește modelul ca o singură schiță constrânsă în SolidWorks. Vedeți [Mutarea schițelor spre și dinspre alte modelatoare de piese](topic:solidworks-sketches).

## Blocuri

### ANNOSCALE

Aliasuri: `CANNOSCALE`. Spune scara de adnotare a desenului și câte obiecte adnotative are, apoi cere `Noua scară de adnotare`: tastați `1:50`, `1:100`, `2:1`, un număr simplu (`50` este 1:50) sau numele uneia dintre scările proprii ale desenului. Fiecare text și cotă adnotativă se redimensionează ca să se tipărească la aceeași dimensiune la noua scară, dintr-un singur pas de anulare; obiectele care nu sunt adnotative rămân neatinse, și la fel un obiect care are o listă de scări fără cea nouă ({{cmd:OBJECTSCALE}}). Vedeți [Unități, formate de hârtie și scări](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Aliasuri: `OBJSCALE`. `Selectați obiectele adnotative`, apoi `Scările de adnotare ale obiectelor selectate [Adăugare/Ștergere/Scara curentă/Listă/Ieșire] <Adăugare>`. Un text sau o cotă adnotativă ține o listă de scări de adnotare. `Adăugare` și `Ștergere` cer o scară (`1:50`, `2:1`, un număr simplu sau numele uneia dintre scările proprii ale desenului); `Scara curentă` adaugă scara de adnotare a desenului; `Listă` afișează scările fiecărui obiect. O fereastră a cărei scară se află în lista unui obiect îl arată la dimensiunea care tipărește înălțimea lui pe hârtie la acea scară, pe ecran și în trasări. Ultima scară nu poate fi ștearsă. Obiectele care nu sunt adnotative sunt lăsate afară: pornește mai întâi Adnotativ în Proprietăți. Listele se salvează în DWG și DXF ca date proprii CadCraft. Vedeți [Unități, formate de hârtie și scări](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Aliasuri: `ANNOALL`. `Arată obiectele adnotative la toate scările [PORNIT/OPRIT]`. Pornit (cum începe un desen): un obiect adnotativ se arată și într-o fereastră, sau în model, a cărei scară nu este în lista lui, la dimensiunea pe care o are. Oprit: nu se arată acolo și nu poate fi ales în model. Comutatorul este un pas de anulare; nu se salvează în fișier.

### SCALELISTEDIT

Aliasuri: `SCALELIST`. `Lista de scări [Adăugare/Editare/Ștergere/Listă/Resetare]` până la {{key:Enter}}. Adăugare: `Numele scării`, `Unitățile de hârtie`, `Unitățile desenului`. Editare și Ștergere cer numele scării. Scările proprii ale desenului intră în listele de scări ale ferestrelor și trasărilor și se salvează cu desenul. Vedeți [Unități, formate de hârtie și scări](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT și PEDIT

`SPLINE` (`SPL`): `Primul punct al splinei [Metodă/Obiect] (Puncte de potrivire)`. Potrivire: puncte prin care trece curba; `Închidere`, `Anulare`, apoi `Tangenta de început` și `Tangenta de sfârșit` (un punct, sau {{key:Enter}}). Metodă › Vârfuri de control cere un grad (1 până la 5) și desenează dintr-un poligon de control. Obiect transformă polilinii în spline-uri prin vârfurile lor. `SPLINEDIT` (`SPE`): `[Date de potrivire/Editare vârf/transformare în Polilinie/Deschidere sau Închidere/Inversare/Anulare/Ieșire]`; Date de potrivire `[Adăugare/Ștergere/Mutare/Curățare/Tangente/Ieșire]`; Editare vârf `[Adăugare punct de control/Mutare/Greutate/Ieșire]`. `PEDIT` (`PE`): `[Închidere/Deschidere/Unire/Lățime/Potrivire/Spline/Decurbare/Generare tip linie/Inversare/Anulare/Ieșire]`, `M` pentru mai multe obiecte; liniile, arcele și splinele se oferă mai întâi ca polilinii. Vedeți [Spline-uri și polilinii](topic:splines).

### BLOCK

Aliasuri: `B`, `BMAKE`.

- `Introduceți numele blocului`. Dacă există: `Blocul „…” există deja. Îl redefiniți? [Da/Nu] <N>`.
- `Specificați punctul de bază al inserării`
- `Selectați obiecte`. Sunt înlocuite cu o singură referință la noul bloc.

### WBLOCK

Aliasuri: `W`, `-WBLOCK`. Scrie un bloc, câteva obiecte sau tot desenul într-un fișier nou DWG sau DXF. `Sursa WBLOCK [Bloc/Tot desenul/Obiecte] <Obiecte>`:

- **Obiecte**: `Specificați punctul de bază al inserării` (devine originea noului desen), `Selectați obiecte`, apoi `Format fișier [DWG/DXF/DXF R12]` și `Numele fișierului pentru noul desen`, apoi `Ce să faceți cu obiectele [Păstrare/Transformare în bloc/Ștergere]`. Transformare înlocuiește obiectele cu o singură referință la un bloc care poartă numele fișierului; Ștergere le elimină.
- **Bloc**: `Blocul de scris`. Obiectele blocului, cu punctul său de bază ca origine, inclusiv blocurile imbricate.
- **Tot desenul**: fiecare obiect din spațiul model. Foile nu se scriu; folosiți {{cmd:SAVEAS}} pentru o copie care le păstrează.

Fișierul nou conține doar straturile, tipurile de linie, stilurile de text și de cotare și blocurile pe care le folosesc obiectele sale, plus unitățile desenului. Versiunea unui DWG este cea pe care a folosit-o ultima dată {{cmd:SAVEAS}}. În browser fișierul se descarcă; în Studio se deschide fereastra de salvare.

### ATTDEF

Aliasuri: `ATT`, `DDATTDEF`, `-ATTDEF`; sau {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Definire atribut}}. Afișează modurile, apoi `Introduceți o opțiune de schimbat (Enter când ați terminat) [Invizibil/Constant/Prestabilit]`, `Introduceți numele etichetei atributului`, `Introduceți promptul atributului`, `Introduceți valoarea implicită a atributului` (`Introduceți valoarea atributului` când este constant), `Specificați punctul de început al textului`, `Specificați înălțimea textului`, `Specificați unghiul de rotație al textului`. {{cmd:BLOCK}} preia definițiile de atribute în bloc.

### EATTEDIT și ATTEDIT

`EATTEDIT` (`DDATTE`, sau dublu clic pe o referință cu atribute; {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Editare atribute}}): `Selectați o referință de bloc cu atribute`, apoi caseta de dialog {{ui:Editare atribute}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): aceeași referință, apoi `<prompt> (<TAG>) <valoare>` pentru fiecare atribut; {{key:Enter}} păstrează o valoare. Vedeți [Atributele](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Actualizați atributele referințelor cărui bloc [Nume/Selectare/Toate] <Selectare>`. Valorile se păstrează; atributele noi primesc valoarea implicită, cele eliminate dispar, iar pozițiile se resetează.

### BATTMAN

{{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Managerul atributelor}}. Caseta de dialog: blocul, atributele (etichetă, prompt, implicit, moduri, ordine), {{ui:Actualizare referințele (valorile păstrate)}}, {{ui:Aplicare}}.

### REFEDIT și REFCLOSE

{{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Editare pe loc}}. `REFEDIT`: `Selectați referința de bloc de editat pe loc` (sau selecția). `REFCLOSE`: `Salvați modificările la „…” [Salvare/Renunțare] <Salvare>`; {{ui:Salvare bloc}} și {{ui:Renunțare}} din bară fac același lucru. Întreaga editare este un singur pas de anulare. Vedeți [Atributele](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[PORNIT/OPRIT]`: dacă presiunea unei linii trasate cu creionul stabilește grosimea a ceea ce fac {{cmd:SKETCHFIX}} și {{cmd:SKETCHLIVE}} (pornit la început). Vedeți [Schițarea cu creionul](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Alias: `OFFSTD`. Spune care standard de birou este în vigoare pentru acest desen și de unde vine: înregistrarea desenului, standardul comun al echipei sau Politicile implicite (înălțimile textului `all.anno.*`); fără niciunul, mărimile proprii ale programului. `[Importare/Straturi/Cartuș/Ștergere/Ieșire]`: `Importare` citește un fișier `.json` `cc-office-standard` (înregistrarea scrisă de SuperCad și BimCraft) în acest desen, salvată cu el în DWG și DXF; `Straturi` adaugă straturile de birou pe care le lipsesc unui desen, într-un singur pas de anulare, și nu elimină niciodată unul; `Cartuș` listează câmpurile biroului cu propriile valori ale acestui desen; `Ștergere` scoate înregistrarea proprie a desenului. Înălțimile textului și cotelor adnotative urmează standardul în vigoare. Vedeți [Unități, formate de hârtie și scări](topic:units-papers-scales).

### BPARAMS

Aliasuri: `BPM`, `BLOCKPARAMS`. Deschide managerul de parametri pentru blocul din editorul de blocuri, blocul referinței selectate sau blocul pe care îl numiți (`Nume bloc`): parametri cu formule, mai mulți parametri de vizibilitate cu stările lor, și propriile valori și stări ale referinței selectate. Vedeți [Parametrii și stările de vizibilitate proprii](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` face același lucru în linia de comandă: `[Parametru/Vizibilitate/Stare/Atribuire/Referință/Gata]`.

### BEDIT și BCLOSE

`BE`; sau {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Modificare bloc}}. `Introduceți numele blocului de editat <blocul referinței selectate>` deschide editorul de blocuri. `BCLOSE` cere `Închideți editorul de blocuri la „…” [Salvare/Renunțare] <Salvare>`; {{ui:Salvare bloc}} și {{ui:Renunțare la modificări}} din bandă fac același lucru. Tot ce faceți în editor este un singur pas de anulare.

### VIEWBASE

Alias: `FLATSHOT`. O vedere 2D plată a solidelor de pe fila 3D: `Vedere [Față/Sus/Dreapta/Stânga/Spate/Jos/Izo]`, `Linii ascunse [Arată/Ascunde]`, o scară (`1:20`, `2:1`; {{key:Enter}} ia cea care încape pe foaie), apoi centrul vederii. O referință de bloc, muchiile vizibile pe VIEW-VISIBLE, cele ascunse punctate pe VIEW-HIDDEN. Vedeți [Vederi plate pe o foaie](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliasuri: `-PUBLISH`; sau {{ui:Toate foile într-un singur PDF}} în caseta de dialog {{ui:Trasare în PDF}}. `Foi de trasat [Toate/Unele]`: {{key:Enter}} trasează fiecare foaie, `S` cere nume separate prin virgule. Un singur PDF, o pagină și un semn de carte pe foaie. Vedeți [Fiecare foaie într-un singur PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliasuri: `SSM`, `SHEETSETMANAGER`. Vă duce la secțiunea {{ui:Set de planșe}} din panoul din stânga: foi din multe desene, numerotate și intitulate, cu cartușele completate din set, publicate ca un singur PDF. Vedeți [Seturi de foi](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): alegeți un DWG sau DXF, apoi punctul de inserare. {{cmd:XREF}} (`XR`, `-XREF`): `Desene legate [?/Atașare/Reîncărcare/Legare/Detașare] (Enter: ?)`; cu mai multe legături, alegeți una dintre referințele ei sau tastați `N` și numele ei. Vedeți [Desene legate](topic:files#linked-drawings-external-references).

### COUNT

Aliasuri: `BCOUNT`; sau {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Numărare blocuri}}. `Selectați o referință de bloc de numărat, sau [Toate/Export] (Enter: Toate)`: un clic selectează și numără fiecare referință a blocului în acest spațiu; {{key:Enter}} sau `A` le listează pe toate; `E` apoi `C` (numărători) sau `A` (atribute) descarcă un CSV. Vedeți [Numărarea blocurilor și exportul unei liste](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliasuri: `I`, `DDINSERT`.

- `Introduceți numele blocului sau [Fișier/Bibliotecă] <ultimul bloc>` (contează majusculele). `F` cere un DWG sau DXF, apoi tot desenul sau unul dintre blocurile lui; un nume deja folosit cere {{ui:Păstrare existente}} sau {{ui:Redenumire}}. `L` deschide panoul bibliotecii.
- `Specificați punctul de inserare [Scară/Rotire]`. `S` cere `Specificați factorul de scară`, `R` cere `Specificați unghiul de rotație`; ambele se țin minte.
- Când blocul stă deja lângă obiecte care se repetă în altă parte fără el, o linie spune câte locuri sunt sugerate, iar promptul primește `suGgested`: `G` le arată; faceți clic lângă unul ca să puneți blocul acolo, `A` pentru toate, {{key:Enter}} ca să reveniți. Ele iau rotația vecinilor și valorile implicite ale atributelor. Desenele cu peste 20.000 de obiecte în spațiul deschis nu sunt căutate.
- Apoi `Introduceți <prompt> (<TAG>) <implicit>` pentru fiecare atribut pe care îl cere blocul. Vedeți [Atributele blocului](topic:attributes).

### LIBRARY

Aliasuri: `LIB`. Deschide panoul bibliotecii: plasează elemente, verifică actualizările, atribuirile bibliotecii. Fără întrebări. Vedeți [Inserarea dintr-un fișier sau din bibliotecă](topic:insert-from-file-and-library).

### STEELMEMBER

Aliasuri: `SMEMBER`; sau {{ui:Bară 3D}} pe fila {{ui:Standard}} a bibliotecii. `Dimensiunea secțiunii <W12x26>` (așa cum o listează fila), apoi `Punctul de început [Stâlp]` și `Punctul de sfârșit`: o bară solidă pe fila 3D între cele două puncte, rezemată pe sol. `C` cere punctul de bază al stâlpului și înălțimea lui. Un singur pas de anulare. Vedeți [Plasarea profilelor de oțel și a pieselor standard](topic:steel-and-standard-parts).

### PARTSLIST

Aliasuri: `PLIST`. `Colțul din stânga sus al listei de piese`, apoi `Înălțimea textului <2.5>`: desenează un tabel cu fiecare piesă standard și profil de oțel plasat din bibliotecă (numere de element, cantitate, piesă, standard, dimensiune, lungime, material, masă). Un singur pas de anulare. Vedeți [Plasarea profilelor de oțel și a pieselor standard](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliasuri: `PU`. Șterge definițiile de blocuri pe care nimic nu le folosește. Fără întrebări.

### DELBLOCKS

Sau {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Ștergere blocuri}}. `Selectați blocul de șters [Nume/Ieșire]`: alegeți o referință de bloc, sau `N` pentru lista blocurilor cu un filtru (alegeți mai multe), sau `X` / {{key:Enter}} ca să terminați. Fiecare referință dispare — în model, pe fiecare foaie și în interiorul altor blocuri — apoi definiția, iar linia de comandă spune ce s-a șters și ce nu s-a putut. Promptul revine pentru blocul următor; întreaga comandă este un singur pas de anulare.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} lipește ce ați copiat ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) ca un singur bloc: alegeți punctul de inserare, iar o referință la un bloc nou ajunge acolo, selectată. Blocul primește un nume propriu (`A$C` și un număr); {{cmd:RENAME}} îi dă al dumneavoastră. Un pas de anulare elimină referința și blocul.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} cere blocul de înlocuit și blocul care îi ia locul (`?` listează blocurile), apoi schimbă fiecare referință din model, de pe fiecare foaie și din interiorul altor blocuri. Fiecare referință își păstrează locul, scara, rotația, stratul și valorile atributelor pe care le au ambele blocuri; atributele pe care le are doar noul bloc pornesc de la valorile implicite, iar programul spune ce valori s-au pierdut. Când nimic nu mai folosește vechiul bloc, îl oferă spre ștergere. Refuză desenele legate și un înlocuitor care ar pune un bloc în el însuși. Un pas de anulare.

### MINSERT

{{cmd:MINSERT}} plasează un bloc pe rânduri și coloane: numele blocului, punctul de inserare, scara, rotația, numărul de rânduri și coloane și distanțele dintre ele. Tot setul se rotește cu rotația. Fiecare este propria referință (cel mult 10.000), astfel încât oricare poate fi mutată sau ștearsă după aceea.

### BLOCKSPALETTE

Aliasuri: `BLOCKSPAL`; sau {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Panou Blocuri}}. Arată panoul {{ui:Blocuri}} cu cursorul în filtru. Fiecare bloc are o mică imagine; cele plasate cel mai recent vin primele. Cele două butoane de lângă filtru comută între o listă și o grilă de imagini. Faceți clic pe o imagine (sau pe {{ui:Inserare}}) ca să plasați blocul cu {{cmd:INSERT}}, sau trageți-l pe desen ca să-l plasați unde lăsați.

{{ui:Biblioteci}}, sub listă: {{ui:Adăugare desen}} ia un fișier DWG sau DXF propriu și listează blocurile lui cu imagini, iar tot desenul ca un singur bloc. Plasarea unuia copiază definiția lui (și blocurile pe care le conține, și straturile lor) în acest desen, ca opțiunea `Fișier` a {{cmd:INSERT}}; un bloc deja aici cu aceeași definiție se folosește fără întrebare; unul cu același nume dar definiție diferită cere {{ui:Păstrare existente}} sau {{ui:Redenumire}}. Într-un browser fișierul rămâne până se închide pagina. În CadCraft Studio {{ui:Adăugare dosar}} listează desenele dintr-un dosar, fiecare deschis când faceți clic pe el, iar fișierele și dosarele se țin minte. Micul x scoate o bibliotecă din listă; fișierul nu este atins. Biblioteca comună {{ui:Bibliotecă}} este altceva: vedeți [Inserarea dintr-un fișier sau din bibliotecă](topic:insert-from-file-and-library).

### BCONVERT

Sau {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Transformare repetări în blocuri}}. Găsește geometria care se repetă și transformă fiecare copie într-o referință la un singur bloc.

- `Selectați obiectele care se repetă, sau [Bloc]`: obiectele unei singure copii. `B` numește în schimb un bloc existent, ca să găsiți copii libere ale obiectelor sale.
- `O copie poate fi: oglindită = Nu, scalată = Nu; strat, culoare, tip de linie și grosime = Potrivire … [Oglindită/Scalată/Proprietăți]`: `M`, `S` și `P` schimbă ce contează ca o copie; {{key:Enter}} caută. Setările se țin minte.
- `Nume pentru noul bloc <Bloc1>`, apoi `Specificați punctul de bază al blocului` ({{key:Enter}} ia colțul din stânga jos al selecției).
- Spune câte alte seturi de obiecte au aceeași geometrie, evidențiază tot ce ar înlocui și întreabă `Da/Nu`.

O copie este aceleași obiecte mutate și întoarse cu orice unghi (și oglindite sau scalate cu un singur factor, când acestea sunt pornite): fiecare obiect trebuie să aibă omologul său, în limita unei milionimi din mărimea selecției. Fiecare referință primește propria rotație și scară (una oglindită primește o scară Y negativă), și stratul pe care îl împart obiectele. Obiectele de pe straturi blocate sunt lăsate în pace și numărate. Caută în spațiul deschis (modelul sau foaia deschisă). O căutare foarte mare se oprește la o limită de lucru și spune asta. Un singur pas de anulare.

### BSEARCH

Sau {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Găsire blocuri}}. `Găsiți blocurile după [Nume/Atribut/Geometrie] <Nume>`:

- `N`: o parte dintr-un nume de bloc, sau un model cu `*` și `?`. Listează fiecare bloc cu referințele sale aici și în tot desenul.
- `A`: o valoare de atribut, sau `TAG=valoare`. Listează blocurile ale căror referințe o au, cu valorile găsite. Atributele constante contează.
- `G`: selectați obiecte, sau o referință de bloc, și sunt listate blocurile a căror formă se aseamănă cel puțin 85%, cele mai bune primele. Mărimea, rotația și oglindirea nu contează. Măsurarea compară distanțele dintre puncte împrăștiate pe contururi, deci găsește asemănări; folosiți {{cmd:BCONVERT}} pentru copii exacte.

Referințele găsite în spațiul deschis se selectează, gata pentru următoarea comandă.

### BREPLACE

Sau {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Înlocuire blocuri}}. `Înlocuire [Selectate/Toate]`: `S` înlocuiește referințele de bloc selectate cu blocul pe care îl numiți; `A` cere un bloc și înlocuitorul lui și schimbă fiecare referință, ca {{cmd:BLOCKREPLACE}} (același cod). O referință își păstrează locul, scara, rotația, stratul și valorile atributelor pe care le au ambele blocuri; valorile pentru care noul bloc nu are loc se elimină și sunt numite. `?` listează blocurile. Un pas de anulare.

### DATAEXTRACTION

Aliasuri: `EATTEXT`, `DX`; sau {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Extragere de date}}. Listează blocurile, atributele lor și proprietățile obiectelor ca tabel sau fișier CSV.

- Lucrează pe selecție, sau cere `Selectați obiectele (Enter: tot din acest spațiu)`.
- `Listă: [Blocuri/Obiecte/Toate]` când selecția are ambele. Blocurile fără nume, tabelele și listele de materiale nu se listează niciodată.
- Afișează coloanele din care puteți alege (nume, tip, strat, X, Y, rotație, scară, lungime, arie, culoare, tip de linie, spațiu, și câte una pentru fiecare etichetă de atribut), apoi `Coloane, după nume sau număr, cu virgule între ele`. {{key:Enter}} ia cele marcate cu steluță: numele și fiecare atribut pentru blocuri; tipul, stratul și lungimea pentru obiecte.
- `Puneți rândurile identice la un loc cu un număr? [Da/Nu] <Da>`, apoi `Puneți lista într-un: [Tabel/Csv] <Tabel>`. Un tabel este un tabel obișnuit ({{cmd:TABLEDIT}} îl editează) și nu este viu: rulați din nou comanda după ce se schimbă desenul.
- Refuză o coloană care nu este în listă. Un tabel ține 1.999 de rânduri de date; un fișier CSV le ia pe toate.

### COUNTTABLE

Numără referințele de bloc din selecție (sau din spațiul deschis) și pune numărătorile într-un tabel (`Bloc`, `Număr`) sau într-un fișier CSV. Pentru un număr care urmează singur desenul vedeți {{cmd:BOMTABLE}}.

## Foi și trasare

### LAYOUT

Aliasuri: `LO`, `NEWLAYOUT`; sau butonul {{ui:+}} de sub desen. O foaie nouă cu o margine, un cartuș și o fereastră de vizualizare, pe ISO A3 (sau Tabloid pentru desenele în inci sau picioare). Fără întrebări.

### MVIEW

Aliasuri: `MV`. Doar pe o foaie ({{cmd:VPORTS}} pe o foaie face același lucru).

- `Specificați colțul ferestrei de vizualizare [Poligonal/Obiect]`, `Specificați colțul opus`. Fereastra arată tot modelul la o scară standard.
- `P` (Poligonal): faceți clic pe colțurile conturului (`Anulare`, `Închidere`), {{key:Enter}} când ați terminat. Refuză mai puțin de trei colțuri.
- `O` (Obiect): `Selectați un obiect închis pentru conturul ferestrei`: o polilinie închisă, un cerc sau o elipsă pe foaie. Fereastra își ia forma (curbele ca bucăți drepte scurte); obiectul rămâne cum era. Refuză un obiect care nu este închis.

### VPCLIP

Taie o fereastră care este deja pe foaie. `Selectați fereastra de tăiat` (sau selectați-o mai întâi), apoi `Selectați obiectul la care să tăiați [Poligonal/Ștergere]`:

- Faceți clic pe o polilinie, un cerc sau o elipsă închisă, sau {{key:Enter}} (sau `P`) ca să faceți clic pe colțurile unui poligon.
- `D` (Ștergere, oferit când fereastra este tăiată) o face din nou un dreptunghi: caseta din jurul conturului pe care îl avea.
- Ce arată fereastra nu se mută pe hârtie, iar scara ei rămâne. Modelul se desenează și se trasează doar în interiorul conturului, iar marginea urmează. Un pas de anulare.
- O fereastră tăiată are un mâner la fiecare colț al conturului, pe lângă centrul ei și cele patru colțuri ale casetei (trăgând un colț al casetei se întinde și conturul). Proprietăți arată Contur: Dreptunghi, sau Tăiat cu numărul de colțuri.
- Fișierele DWG și DXF 2000 păstrează conturul pentru CadCraft. Alte programe deschid fereastra ca dreptunghiul din jurul ei; DXF R12 păstrează doar dreptunghiul.
- Pe fila model spune că ferestrele de vizualizare sunt pe foi.

### VPORTS

Aliasuri: `VIEWPORTS`. {{cmd:SPLIT}} este același lucru și de pe o foaie, iar {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Divizare alăturată}}, {{ui:Divizare suprapusă}}, {{ui:Patru panouri}}, {{ui:Un panou}} îl rulează. Pe model: `Introduceți numărul de panouri [Simplu/2/3/4] <3>`; `2` cere `[Orizontal/Vertical] <Vertical>` (Vertical = alăturat), `3` cere `[Stânga/Dreapta] <Dreapta>` (unde merge panoul mare). Fiecare panou își păstrează propria vedere și spațiu; un clic face un panou activ. Pe o foaie este {{cmd:MVIEW}}. Vedeți [Împărțirea ecranului](topic:split-screen).

### VPVIEW

Fără aliasuri. Doar pe o foaie.

- `Selectați fereastra de vizualizare` (sărit dacă este selectată una), apoi pe model: `Specificați primul colț al ferestrei de arătat`, `Specificați colțul opus`.

### UCS

Fără aliasuri. Un sistem de coordonate propriu; nu o modificare. `Specificați originea SCU [Denumit/Obiect/Precedent/Global/Z/3punct] <Global>`: un punct este o origine nouă, apoi `Specificați punctul de pe axa X (Enter păstrează unghiul)`. `Z`: `Specificați unghiul de rotație în jurul axei Z <90>`. `3`: origine, un punct pe semiaxa X pozitivă, un punct de partea Y pozitivă. `OB`: `Selectați obiectul pentru alinierea SCU`. `NA`: `[Restaurare/Salvare/Ștergere/?]` și un nume. Vederea se întoarce ca noua axă X să fie orizontală. Vedeți [Întoarcerea vederii și folosirea propriilor coordonate](topic:ucs-and-turned-view).

### PLAN

Fără aliasuri. `Introduceți o opțiune [SCU curent/Ucs/Global] <SCU curent>`: întoarce vederea panoului activ astfel încât axa X a SCU (sau a globului) să fie orizontală. Nimic din desen nu se mută.

### TURNLEFT, TURNRIGHT, TURNWORLD

Fără aliasuri; sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Rotire vizualizare 90° la stânga}}, {{ui:Rotire vizualizare 90° la dreapta}}, {{ui:Înapoi la global}}. Același lucru ca `UCS Z -90`, `UCS Z 90` și `UCS W`, cu vederea urmând.

### VPLAYER

Fără aliasuri. Pe o foaie, sau în interiorul unei ferestre. `Introduceți o opțiune [?/Înghețare/Dezghețare/Resetare/Vpvisdflt]`: `F`, `T`, `R` cer nume de straturi (virgule, și jokeri `*` și `?`), apoi ferestrele `[Toate/Selectate/Curentă] <Curentă>`; Resetare pune fiecare strat înapoi pe valoarea lui „înghețat în ferestrele noi”; `V` stabilește acea valoare implicită (`[Înghețat/Dezghețat]`), pe care o folosește {{cmd:MVIEW}}. `?` listează straturile înghețate în fereastra curentă. Coloana de ferestre din panoul Straturi face același lucru pentru o singură fereastră. Vedeți [Înghețarea unui strat într-o singură fereastră](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliasuri: `MS`; sau dublu clic înăuntrul unei ferestre. Doar pe o foaie. Lucrează pe model printr-o fereastră: cea selectată, singura de pe foaie, sau `Faceți clic în interiorul ferestrei în care să lucrați`. Deplasarea și zoomul din interior schimbă vederea ferestrei (una blocată pentru afișare își păstrează vederea, iar foaia se mută în schimb); noua vedere se scrie ca un singur pas de anulare. Vedeți [Lucrul pe model printr-o fereastră](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliasuri: `PS`; sau dublu clic în afara ferestrei, sau un clic pe o filă de sub desen. Înapoi la foaie.

### PLOT

Aliasuri: `PRINT`, `PUBLISH`, `EXPORTPDF`; sau {{key:Mod+P}}. Deschide caseta de dialog {{ui:Trasare în PDF}}. Vedeți [Trasare în PDF](topic:plot-pdf).

### PLOTSTYLES

Aliasuri: `STYLESMANAGER`, `PSTABLES`; sau {{ui:Editare tabele…}} în caseta {{ui:Trasare în PDF}}. Deschide {{ui:Tabele de stiluri de trasare}}: ce tipărește fiecare culoare (culoare, gri, cerneală, grosime de linie), păstrat cu desenul. Vedeți [Tabele de stiluri de trasare](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} mută obiectele între o foaie și model printr-o fereastră, scalate și întoarse ca să arate la fel din cealaltă parte. Pe o foaie, selectați obiecte și ele merg în model (alegeți fereastra când foaia are mai multe). Cât timp lucrați pe model printr-o fereastră ({{cmd:MSPACE}}), obiectele selectate vin pe foaie. Spune de câte ori au devenit mai mari sau mai mici. Ferestrele rămân pe foaia lor. Un pas de anulare.

### ISODRAFT

{{cmd:ISODRAFT}} pornește sau oprește desenarea izometrică `ON` sau `OFF`, sau trece direct pe planul `Stânga`, `Sus` sau `Dreapta`. Cât timp este pornită: Ortogonal ({{key:F8}}) păstrează liniile pe cele două axe ale planului (stânga: 90° și 150°; sus: 30° și 150°; dreapta: 30° și 90°), urmărirea polară ({{key:F10}}) urmează aceleași axe, agățarea de grilă ({{key:F9}}) folosește grila izometrică, iar grila ({{key:F7}}) se desenează cu linii la 30°, 90° și 150°. {{cmd:ELLIPSE}} capătă `Izocerc`: dați un centru și o rază (sau `Diametru`) și desenează elipsa pe care o arată un cerc pe planul curent. Desenul rămâne plat: sunt ajutoare pentru desenarea unei vederi pictoriale, nu un model 3D. Setarea este pentru această sesiune și nu se salvează în fișier.

### ISOPLANE

{{cmd:ISOPLANE}} alege planul izometric pe care se desenează: `Stânga`, `Sus` sau `Dreapta`. Enter trece la următorul plan. Cât timp desenarea izometrică este pornită, {{key:F5}} face același lucru în mijlocul unei comenzi; când este oprită, {{key:F5}} este lăsat navigatorului.

## Interogare

### CAL

Afișează valoarea unui calcul, așa cum ar fi citit oriunde se tastează o lungime.

- `Expresie`: tastați-o, de exemplu `12'6"+3/4"` sau `(24'-0")/3`, și apăsați {{key:Enter}}. CadCraft afișează `= 12'-6 3/4"   (150.75 unități de desen)`. Vedeți [Aritmetica într-o valoare tastată](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliasuri: `DI`; sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Măsurare distanță}}.

- `Specificați primul punct`, `Specificați al doilea punct`. Afișează distanța, unghiul, Delta X și Delta Y.

### AREA

Aliasuri: `AA`; sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Arie}}. Afișează aria și perimetrul.

- `Specificați primul colț [Obiect/Adăugare arie/Scădere arie] <Obiect>`
  - Faceți clic sau tastați colțuri; la `Specificați următorul punct (Enter închide) [Anulare]` apăsați {{key:Enter}} ca să închideți conturul. `U` anulează ultimul colț.
  - {{key:Enter}} sau `O`, apoi `Selectați obiectul`: un cerc (afișează circumferința), o elipsă, o polilinie (una deschisă este închisă cu o linie dreaptă pentru arie, iar lungimea ei se afișează) sau o hașură (găurile se scot).
  - `A` (Adăugare arie) și `S` (Scădere arie) țin un total curent: promptul începe cu `(mod ADUNARE)` sau `(mod SCĂDERE)`, fiecare arie se adaugă sau se scoate, iar `Total arie = …` se afișează după fiecare. În aceste moduri `O` alege obiecte până la {{key:Enter}}, iar {{key:Enter}} la primul prompt încheie comanda.

### MEASUREGEOM

Aliasuri: `MEA`. `Introduceți o opțiune [Distanță/Rază/Unghi/Arie] <Distanță>`; după fiecare măsurătoare întreabă din nou, iar implicit este `eXit`.

`Rapid` măsoară în jurul indicatorului pe măsură ce îl mutați: distanța până la cel mai apropiat obiect spre dreapta, sus, stânga și jos (pe axele SCU curent), desenată pe parcurs, și unghiul acolo unde două dintre vecini sunt drepte și se întâlnesc. Un clic scrie în istoric cele patru distanțe, lățimea și înălțimea libere și unghiurile; Enter revine la opțiuni. Citește ce este pe ecran.

- `D`: două puncte, ca {{cmd:DIST}}.
- `R`: `Selectați arc sau cerc`; afișează raza și diametrul.
- `A`: un arc (unghiul lui inclus), o linie și apoi o a doua linie (unghiul dintre ele, spre capetele lor îndepărtate), sau {{key:Enter}} și trei puncte (vârful, apoi cele două capete).
- `AR`: ca {{cmd:AREA}}, o singură arie.

### ID

Fără aliasuri. `Specificați punctul`; afișează X și Y.

### LIST

Aliasuri: `LI`, `LS`. `Selectați obiecte`; afișează tipul fiecărui obiect, stratul și măsurătorile principale.

### MASSPROP

{{cmd:MASSPROP}} dă proprietățile de secțiune ale regiunilor și obiectelor închise pe care le selectați, luate împreună: aria, perimetrul, cutia de încadrare, centroidul, momentele de inerție față de axele X și Y prin origine, produsul de inerție, razele de giro, aceleași momente față de centroid, și momentele principale cu direcțiile axelor lor. Golurile dintr-o regiune contează ca găuri. Cifrele sunt în unități de desen și exacte pentru contururi făcute din linii și arce; elipsele și splinele se măsoară ca segmente drepte scurte, și se spune asta. După raport întreabă dacă să-l scrie într-un fișier text. Obiectele care nu sunt închise sunt lăsate afară, iar se spune câte.

## Vizualizare, fișier și altele

### ZOOM

Aliasuri: `Z`.

- `Specificați colțul ferestrei, introduceți un factor de scară (nX) [Extinderi/Tot/Fereastră/Precedent/Scară/Centru]`. Faceți clic pe două colțuri pentru o fereastră. `E`, `A` sau Enter: tot desenul.
- `P` (Precedent, sau {{ui:Precedent}} din bara de instrumente) revine la vederea dinainte, până la 10 vederi pe filă; o serie de pași ai rotiței sau o deplasare contează ca o vedere.
- Un număr precum `2`, `2x` sau `0.5x` (sau `S` și apoi numărul) mărește sau micșorează cu acel factor în jurul mijlocului ecranului.
- `C` cere `Specificați punctul centrului` și `Introduceți înălțimea sau mărirea (nX)`.

### PDFATTACH, PDFIMPORT și comenzile PDF

Aliasuri: `PDFATT` pentru {{cmd:PDFATTACH}}, `PDFIM` pentru {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} pune o pagină PDF sub desen (fișier, pagină, punct de inserare, scară, rotație); {{cmd:PDFIMPORT}} transformă liniile, curbele, umpleturile și textul unei pagini în obiecte de desen, pe straturi denumite după PDF, la mărime reală, la o scară tastată, sau scalate din două puncte și o distanță reală. {{cmd:PDFCLIP}} taie un sub-desen, {{cmd:PDFADJUST}} stabilește estomparea, contrastul, monocromul sau îl oprește, {{cmd:PDFLAYERS}} pornește sau oprește straturile PDF-ului, iar {{cmd:PDF}} dă din nou CadCraft fișierele pe care le folosesc sub-desenele. Vedeți [Sub-desene PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Autocompletarea desenului: fără nicio comandă în curs, o fantomă gri arată ce spun modelele desenului despre ce urmează. {{cmd:AUTOCOMPLETE}} o pornește `On` sau o oprește `Off` (la fel și Setări › CadCraft) sau `Show` arată ce ar sugera acum. **Tab** desenează fantoma ca un singur pas de anulare, **Esc** o înlătură până se schimbă desenul. Găsește trei lucruri în cele mai noi obiecte: următoarea copie a ceva desenat de cel puțin două ori la un pas egal (stinghii, coloane, contratreapta și treapta unei scări), următorii pași ai unei scări din polilinie, și latura lipsă a unei camere sau a unui lanț de pereți. În mijlocul {{cmd:LINE}} sau {{cmd:PLINE}} fantoma este **următorul punct**: următorul pas al unei scări (contratreaptă, treaptă, contratreaptă…), al patrulea colț al unui dreptunghi, punctul care îl închide, sau încă un pas egal. Aduceți cursorul aproape de ea și apăsați **Tab**, ca și cum ați fi făcut clic acolo; continuați sau apăsați Enter. Calculat pe acest computer, după reguli, fără model.

### AUTOSHEET

Alias: `ASH`. Foi care se aranjează singure. {{cmd:AUTOSHEET}} ia bucățile desenului (vederile dvs. denumite, sau bucățile separate ale modelului, sau tot modelul), alege o dimensiune de hârtie (sau pe cea pe care o dați), dă fiecărei bucăți o scară standard (una pentru toate, sau cea mai mare pe care o poate primi) și așază vederile pe rânduri pe foi noi, cu un cartuș și o legendă (nume și scară) sub fiecare. Ce nu încape pe o foaie primește o foaie proprie. Un pas de anulare. Calculat pe acest computer, după reguli, fără model.

### PHOTOSKETCH

Alias: `PSK`. Fotografia unei schițe devine desen. Alegeți o fotografie (JPEG, PNG sau TIFF) a unei schițe de mână pe o foaie de hârtie. {{cmd:PHOTOSKETCH}} găsește cele patru colțuri ale foii, îndreaptă perspectiva, ia dimensiunea hârtiei pe care o numiți (`Hârtie`, sau cea standard cea mai apropiată) și `Scara` schiței (1 : n), apoi trasează liniile creionului în linii, arce și cercuri, cu câte un strat pentru fiecare culoare de creion (negru, roșu, albastru, verde). Dacă nu găsește marginea hârtiei, ia întreaga fotografie ca foaie și o spune. Scrisul nu se trasează. Un pas de anulare. Făcut pe acest computer cu prelucrare clasică de imagine, fără model, fără să se trimită nimic nicăieri. Vedeți și comenzile pentru desene scanate.

### AUTODIM

Alias: `ADIM`. Cotare automată după reguli. {{cmd:AUTODIM}} cotează obiectele selectate (sau tot desenul) după marginile lor drepte și pe verticală: un lanț de cote de-a lungul laturilor alese (`Laturi`), o cotă generală în afara lui, lățimea fiecărui gol (un spațiu între linii de perete coliniare), un diametru pentru fiecare mărime de gaură, și, cu `Grilă`, distanța dintre liniile de grilă. O cotă care există deja nu se face din nou. Un pas de anulare. Calculat pe acest computer, după reguli, fără model.

### GRIDMOVE

Alias: `GM`. Mutarea unei linii de grilă aduce setul după ea. {{cmd:GRIDMOVE}} mută o linie de grilă (o linie pe un strat al cărui nume spune grid sau axă) și ce atârnă de ea: pereții cu un capăt pe linie se întind ca s-o urmeze, pereții de-a lungul ei se mută întregi, coloanele (referințe de bloc și cercuri pe linie), bula și eticheta ei se mută, iar cotele ale căror puncte stau pe ea măsoară noua distanță. Dați două puncte (contează doar partea care traversează linia) sau `Distanță`. Un pas de anulare aduce totul înapoi. Făcut pe acest computer, după reguli.

### DETAILS

Alias: `DET`. Detalii care vă găsesc. {{cmd:DETAILS}} păstrează detaliile firmei dvs.: `Adăugare` pune un bloc din acest desen în listă, `Listă` și `Eliminare` le administrează, iar `Căutare` le ordonează pentru ce este selectat (sau pentru ce ați desenat ultimul) după cuvintele din straturile, numele blocurilor, modelele de hașură și notele lor, comparate cu numele și notele fiecărui detaliu, astfel încât un detaliu de glaf găsește tabla de la pervaz. Alegeți un număr și un punct ca să-l plasați. Cu `Sugestie` pornit (și în Setări › CadCraft), selectarea a ceva la care se potrivește un detaliu pune o linie în bara de stare. Lista se păstrează în acest browser, pe acest computer, iar aceasta este lista în care se caută. `Partajare` o pune și în dosarul dvs. de Documente (`.cadcraft/firm-details.json`, cu desenul fiecărui bloc): `Preluare` adaugă ce are echipa și dvs. nu aveți, `Trimitere` adaugă ce aveți dvs. și ei nu au, `Ambele` fac ambele, și nimic nu se șterge din nicio parte. Deschideți mai întâi dosarul Documente ({{cmd:DOCUMENTS}}); când acel dosar este un dosar Team Cloud Plan, întreaga echipă împarte o singură listă. Un element de detaliu din panoul Bibliotecă are un buton **Adăugare în detaliile firmei** care îl pune în aceeași listă. Calculat pe acest computer, prin cuvinte, fără model.

### SKETCHFIX

Alias: `SKF`. Schițele cu creionul devin geometrie precisă. Apăsați și trageți câte un traseu liber o dată (creion, mouse sau deget), apoi Enter. Fiecare traseu este citit ca o linie, un cerc, un arc, un dreptunghi sau o polilinie: liniile aproape orizontale și verticale devin exact orizontale și verticale, un traseu închis și rotund devine cerc, unul închis cu patru colțuri drepte devine dreptunghi, iar capetele traseelor sunt trase unele spre altele și spre capetele deja existente în desen. Un pas de anulare. Calculat pe acest computer, după reguli, fără model.

### SCANATTACH și comenzile pentru desene scanate

Aliasuri: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} nu are niciunul. Lucrează pe o imagine, câte un pas de anulare fiecare. {{cmd:SCANATTACH}} inserează un PNG, JPEG, TIFF (o pagină sau toate) sau o pagină PDF care este o imagine. {{cmd:SCANSCALE}} scalează foaia după două puncte alese și distanța reală. {{cmd:SCANALIGN}} o mută și o întoarce pe două puncte (`Scalați foaia ca să se potrivească` Da/Nu). {{cmd:SCANDESKEW}} arată unghiul liniilor lungi ale foii și o întoarce când `Acceptați` sau dați o `Valoare`. {{cmd:SCANCLEAN}} o face alb-negru (`Prag` Auto/Adaptiv/Nivel, `Pete`) și `Rulare`. {{cmd:SCANCROP}} păstrează o fereastră. {{cmd:SCANERASE}} șterge un `Dreptunghi`, `Poligon` sau `Lasou`. {{cmd:SCANTRACE}} trasează linii și arce pe un strat nou (`Toleranță`, `Fereastră`, `Arce`, `Rămășițe`, `Rulare`) și spune ce a găsit și ce a lăsat ca raster. {{cmd:SCANINFO}} listează fișierul original și pașii. {{cmd:RASTERSNAP}} pornește sau oprește agățarea de liniile foilor scanate. Vedeți subiectul Desene scanate și trasarea.

### REGEN și REGENALL

Aliasuri: `RE` pentru {{cmd:REGEN}}, `REA` pentru {{cmd:REGENALL}}. Refac pe ecran ce se desenează din desen: {{cmd:REGEN}} fila la care vă uitați (pe o foaie, și modelul pe care îl arată ferestrele ei), {{cmd:REGENALL}} fiecare filă, fiecare panou al ecranului împărțit și fiecare desen deschis. Folosiți-le când imaginea pare veche după o modificare scriptată sau foarte mare, sau când un asistent a editat desenul; desenul în sine nu se atinge, deci nu există nimic de anulat.

### NAMEDVIEW

Aliasuri: `NV`, `VIEWS`. `Introduceți o opțiune [?/Restaurare/Salvare/Fereastră/Ștergere] <Restaurare>`, apoi numele vederii. `S` salvează vederea de pe ecran, `W` o fereastră pe care o alegeți, `R` arată o vedere salvată, `D` șterge una, `?` listează vederile acestei file. Salvarea sub un nume existent îl înlocuiește; fiecare schimbare este un pas de anulare. Vederile aparțin filei pe care au fost salvate. Fișierele DWG și DXF le păstrează (tabelul VIEW); vederile unei foi revin pe prima foaie, pentru că fișierul nu spune care este.

### UNDO și REDO

Aliasuri: `U` pentru {{cmd:UNDO}}; {{cmd:REDO}} nu are. Și {{key:Mod+Z}} și {{key:Mod+Y}}.

### LAYER

Aliasuri: `LA`. Sare la panoul {{ui:Straturi}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Introduceți tipul de linie pentru obiectele noi` — `DupăStrat`, `DupăBloc` sau un nume (`?` le listează: Continuous, cele ale desenului, și DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE cu dimensiunile lor `2` (jumătate) și `X2` (dublu)). {{cmd:LWEIGHT}} (`LW`): grosimea de linie pentru obiectele noi în mm, sau `DupăStrat`, `DupăBloc`, `Implicit`. {{cmd:LTSCALE}} (`LTS`): scara tipurilor de linie a desenului (se poate anula). {{cmd:LWDISPLAY}} (`LWT`): `Arată grosimile de linie [PORNIT/OPRIT]` — același lucru ca butonul {{ui:LWT}} din bara de stare. Vedeți [Grosimi de linie și tipuri de linie](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Introduceți tipul obiectului de redenumit [Strat/Bloc]`, `Introduceți vechiul nume`, apoi noul nume; obiectele sau referințele urmează. {{cmd:LAYMRG}}: `Selectați obiectul de pe stratul de îmbinat sau [Nume]` până la {{key:Enter}}, apoi `Selectați obiectul de pe stratul țintă sau [Nume]` și `Y`. {{cmd:LAYDEL}}: `Selectați obiectul de pe stratul de șters sau [Nume]`, apoi `Y`: stratul și fiecare obiect de pe el dispar (nu stratul 0, DEFPOINTS sau stratul curent). Un pas de anulare fiecare. Vedeți [Organizarea unui desen cu straturi](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Straturi prin alegerea obiectelor; și în meniul {{ui:Instrumente}} al panoului {{ui:Straturi}}. {{cmd:LAYISO}}: `Selectați obiectele de pe stratul (straturile) de izolat`, apoi {{key:Enter}}: fiecare alt strat se oprește. {{cmd:LAYUNISO}} le repornește. {{cmd:LAYOFF}} și {{cmd:LAYFRZ}}: `Selectați un obiect de pe stratul de oprit` (sau înghețat), din nou și din nou; `U` anulează ultimul, {{key:Enter}} încheie. {{cmd:LAYMCUR}}: `Selectați obiectul al cărui strat va deveni curent`. {{cmd:LAYON}} pornește fiecare strat, {{cmd:LAYTHW}} dezgheață fiecare strat. Fiecare comandă este un pas de anulare. Vedeți [Lucrul cu straturile prin alegerea obiectelor](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} pornește un desen gol, iar {{cmd:OPEN}} deschide un DWG sau DXF, fiecare în propria filă peste desen (un desen nou neatins este folosit în locul unei file noi). Închiderea unei file cu modificări nesalvate întreabă mai întâi. Vedeți [Împărțirea ecranului](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, și {{key:Mod+S}}) descarcă o copie în formatul desenului: DWG dacă a fost deschis dintr-un DWG, DXF dacă a fost dintr-un DXF. Un desen nou folosește formatul ales ultima dată la Salvare ca în acest browser, altfel DWG.

{{cmd:SAVEAS}} (și {{key:Mod+Shift+S}}) deschide caseta de dialog {{ui:Salvare copie ca}}: alegeți {{ui:DWG}} (și {{ui:Versiune}}), {{ui:DXF R12}} sau {{ui:DXF 2000}}, apoi {{ui:Salvare}}. Alegerea rămâne pentru acest desen și pentru desenele noi din acest browser.

{{cmd:DXFOUT}} descarcă întotdeauna o copie DXF R12, fără să schimbe formatul pe care îl folosește {{cmd:SAVE}}.

Vedeți [Fișiere: ce se deschide, ce se salvează](topic:files#saving).

### TOUR

Aliasuri: `TUTORIAL`. Pornește din nou turul în șase pași al primului desen. Vedeți [Primii pași](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliasuri: `TBDOCK`. `Poziția barei de instrumente [Sus/Jos/Stânga/Dreapta]`. Vedeți [Setările](topic:settings#toolbar-position).

### COMMANDLINE

Aliasuri: `CMDLINE`. `Linie de comandă [Ancorată în partea de jos/Plutitoare/Un rând/Linii din istoric afișate/Istoric comenzi (F2)]`: ancorează sau face plutitoare linia de comandă, o face un singur rând, cere câte rânduri de istoric să arate (0 până la 12), sau deschide istoricul. Vedeți [Setările](topic:settings#command-line).

### TOPAREA

`Zona de sus [Standard/Compactă]`: barele de deasupra desenului cum erau sau compacte. Vedeți [Setările](topic:settings#top-area).

### POLARANG

`Introduceți pasul unghiului polar în grade <90>`: pasul la care se aliniază liniile de urmărire {{ui:Polar}} (mai mult de 0, până la 180). Se păstrează în acest browser.

### UNITS

Aliasuri: `UN`. Cum se scriu și se tastează lungimile.

- `Introduceți formatul lungimii [Științific/Zecimal/Inginerie/Arhitectural/Fracționar] <curent>`
- Arhitectural și Fracționar: `Introduceți numitorul celei mai mici fracții de afișat (1, 2, 4, 8, 16, 32, 64, 128 sau 256)`. Celelalte: `Introduceți numărul de zecimale (0 până la 8)`.

Cotele noi îl urmează. Un pas de anulare. Același lucru ca {{ui:Format lungime}} și {{ui:Precizie}} din {{ui:Setări curente}}; vedeți [Picioare și inci](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliasuri: `GDS`. Vizualizează un plan de circuit integrat (un fișier flux GDSII): test de laborator, doar pentru vizualizare și măsurare.

- Un selector de fișiere ia un fișier `.gds`; cu mai multe celule de vârf, `Introduceți celula de vârf de desenat`.
- Fiecare strat și tip de date devine un strat de desen (`GDS 1`, `GDS 2/5`), referințele și matricele se plasează plat, în unitatea utilizator a fișierului (de obicei micrometri). Un pas de anulare. Nimic nu se simulează sau verifică, iar fișierul nu se scrie înapoi.

### DIAGRAM

Aliasuri: `TEXTDIAGRAM`, `T2D`. O diagramă din text.

- O casetă primește textul (sau o linie cu `;` între instrucțiuni în linia de comandă): o diagramă de flux Mermaid, o diagramă de componente PlantUML, D2 sau o listă de la-la.
- `Specificați colțul din stânga sus al diagramei`, apoi `Specificați înălțimea textului`.

Blocurile și conectorii sunt obiecte obișnuite pe stratul `Diagram`, selectate când se termină. Un pas de anulare. Vedeți [Desenarea unei diagrame din text](topic:text-to-diagram).

### OLELIST

Aliasuri: `OLES`. Obiectele OLE pe care le are un DWG și pe care CadCraft nu le poate plasa singur.

- Listează fiecare: număr, tip, mărime, dacă și-a salvat o imagine.
- `Introduceți o opțiune [Plasare/Ieșire] <Ieșire>`: Plasare cere numărul, colțul din stânga jos și lățimea, și desenează un cadru cu imaginea. Un pas de anulare; obiectul păstrat nu se schimbă. Vedeți [Imagini](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliasuri: `SHX`. Fonturile dvs. SHX.

- `Introduceți o opțiune pentru fonturile SHX [Dosar/Fișiere/Listă/Eliminare/Inversare/Golire] <Listă>`

{{ui:Dosar}} citește fiecare `.shx` dintr-un dosar (CadCraft Studio; din nou la fiecare pornire), {{ui:Fișiere}} ia fișierele alese (browserul), {{ui:Inversare}} așază literele unui font de la ultima la prima. Stilurile de text care numesc un font încărcat se desenează cu el. Vedeți [Desenarea textului cu propriile fonturi SHX](topic:shx-fonts).

### LIMITS

Cât de mare este desenul ar trebui să fie.

- `Specificați colțul din stânga jos sau [PORNIT/OPRIT] <curent>`: un punct, `ON` sau `OFF`.
- `Specificați colțul din dreapta sus <curent>`.

Grila umple limitele, {{cmd:ZOOM}} Tot le arată, iar cu limitele PORNITE un punct din afară este refuzat (`**În afara limitelor`). Un pas de anulare; se salvează în DWG și DXF. Vedeți [Stabilirea limitelor desenului](topic:drawing-limits).

### AUNITS

Aliasuri: `ANGUNITS`. Cum se arată și se tastează unghiurile.

- `Introduceți formatul unghiului [Grade zecimale/Grade-minute-secunde/Orientări de topograf] <curent>`
- `Introduceți numărul de zecimale (0 până la 8)`, sau pentru celelalte două `Introduceți precizia` (0 grade, 2 minute, 4 secunde, 5 până la 8 zecimale ale secundei).

Un pas de anulare; se salvează în DWG și DXF. Același lucru ca {{ui:Format unghi}} din {{ui:Setări curente}}. Vedeți [Tastarea și afișarea orientărilor și a unghiurilor](topic:bearings-and-angles).

### APPLOAD

Aliasuri: `AP`; sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Încărcare aplicație…}}. Caseta de dialog {{ui:Încărcare aplicații}}: încarcă rutine `.lsp` și fișiere de dialog `.dcl`, le descarcă, le încarcă din nou din istoric, și Suita de pornire. O rutină `(defun c:NAME …)` funcționează apoi ca orice altă comandă. Vedeți [Încărcarea aplicațiilor](topic:load-applications) și [Rularea rutinelor LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Editare aliasuri…}}) deschide fișierul cu aliasuri (linii `ALIAS, *COMMAND`); {{ui:Salvare}} îl aplică. {{cmd:REINIT}} îl aplică din nou. Vedeți [Editarea aliasurilor de comenzi](topic:command-aliases).

### OPTIONKEYS

Aliasuri: `OPTKEYS`; sau {{ui:Setări}} › {{ui:CadCraft}} › {{ui:Litere pentru opțiuni}} › {{ui:Editare…}}. Deschide fișierul cu literele proprii ale opțiunilor (linii `COMMAND.OPTION, LETTERS`, ca `ARRAY.PO, P`); {{ui:Salvare}} îl aplică, iar {{cmd:REINIT}} îl aplică din nou. Vedeți [Dați opțiunilor comenzilor litere proprii](topic:option-letters).

### LISPEDIT

Aliasuri: `VLIDE`; sau {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Editor LISP}}. Deschide editorul LISP, o fereastră care rămâne deschisă lângă desen.

- Textul: numerele liniilor, perechea parantezei de la cursor marcată (roșu când nu are una), {{key:Enter}} indentează linia nouă sub paranteza deschisă, {{key:Tab}} tastează două spații, {{key:Esc}} lasă textul.
- {{ui:Încărcare în desen}} ({{key:Ctrl+Shift+Enter}}): citește fiecare formă, ca {{cmd:APPLOAD}} cu fișierul, și face comenzile sale `c:`. Fișierul apare în lista {{cmd:APPLOAD}}.
- {{ui:Rulare selecție}} ({{key:Ctrl+Enter}}): evaluează formele selectate, sau forma în care este cursorul.
- {{ui:Oprire}}: încheie o rutină care rulează.
- {{ui:Consolă}}: ce a tipărit rutina și fiecare eroare cu linia ei; faceți clic pe o eroare ca să mergeți acolo. Textul se rulează câte o formă de nivel superior, deci linia este a formei, sau, în interiorul ei, linia care apelează funcția numită de eroare.
- {{ui:Nou}}, {{ui:Deschidere}}, {{ui:Salvare}} ({{key:Ctrl+S}}): un fișier `.lsp`. Textul se păstrează și în acest browser, deci închiderea ferestrei nu pierde nimic.
- Lângă text: funcțiile pe care le definește rutina, cele pe care le apelează și LISP-ul acesta nu le are încă, cele pe care le apelează și care nu sunt definite în ea și nici încorporate, și listele complete cu ce este încorporat și ce nu.

Un text cu o paranteză care nu se închide niciodată, sau un șir care nu se termină, nu se rulează: linia este numită. Nu există depanator pas cu pas, puncte de oprire sau fereastră de urmărire. Vedeți [Rularea rutinelor LISP](topic:run-lisp).

### HELP

Aliasuri: `?`. Afișează fiecare comandă, aliasurile ei și o descriere dintr-o linie în istoricul liniei de comandă. Nu deschide acest ajutor: apăsați {{key:F1}} sau faceți clic pe {{ui:Ajutor}} pentru asta.

## Promptul Selectați obiecte

La orice prompt `Selectați obiecte`: faceți clic pe obiecte, trageți ferestre (de la stânga la dreapta) și intersectări (de la dreapta la stânga) cu două clicuri, sau apăsați și trageți un lasou ({{key:Space}} în timp ce trageți: fereastră, intersectare, gard), {{key:Shift}}+clic pentru a elimina, și apăsați {{key:Enter}} pentru a încheia. Puteți tasta și `ALL` (tot), `L` (ultimul obiect), `P` (Precedent: ce a folosit ultima comandă), `F` (Gard: obiectele pe care le traversează o linie de puncte; `U` anulează un punct), `W` (Fereastră), `C` (Intersectare), `R` (modul Eliminare: alegerile scot obiecte; promptul spune `Eliminați obiectele`) și `A` (Adăugare din nou). `?` le listează. Nu sunt arătate în prompt. {{key:Tab}} peste obiecte care se suprapun evidențiază următorul; faceți clic ca să-l alegeți. Vedeți [Selectarea obiectelor](topic:select-objects).

### ACCESS

Alias: `AX`. Desenarea fără vedere. {{cmd:ACCESS}} pornește sau oprește accesul (`On`, `Off`) și schimbă sunetele de agățare (`Sound`) și comenzile rostite (`Voice`); spune întâi starea. Cu accesul pornit, fiecare comandă și rezultat este rostit prin cititorul de ecran, iar zona de desen are un cursor de tastatură. Subiectul de ajutor „Desenarea fără vedere” are tastele.

### DESCRIBE

Alias: `DESC`. Spune ce conține desenul: câte obiecte, de ce fel, cât de mari, câte straturi, ce este selectat. Doar citește; nu schimbă nimic.

### WHEREAMI

Alias: `WHERE`. Spune unde este cursorul, în unitățile desenului.

### NEARBY

Spune ce se află aproape de cursor, cel mai apropiat primul, fiecare cu distanța și partea pe care se află.

### SAYSEL

Spune ce este selectat, câte o propoziție pentru fiecare obiect (lungimea liniei, capetele și unghiul; raza și centrul cercului; textul așa cum este scris).

### VOICE

Pornește sau oprește comenzile rostite. Sunt recunoscute pe acest computer; acolo unde browserul nu poate face asta, vocea rămâne oprită, decât dacă alegeți serviciul online al browserului în Setări.

### TOUCHCROSSHAIR

Alias: `TCX`. Reticulul decalat pentru desenarea cu degetul, ca vârful degetului să nu acopere punctul ales. Cât timp este pornit, un deget pe desen nu alege: mută un reticul care stă deasupra degetului și pe o parte. Agățările și urmărirea urmează reticulul. Ridicarea degetului nu alege nimic și lasă reticulul pe loc. Ca să alegeți, apăsați butonul {{ui:Clic}} din colțul desenului, sau atingeți oriunde pe desen cu al doilea deget. Țineți {{ui:Clic}} apăsat în timp ce mutați celălalt deget ca să trageți (o fereastră de selecție, un lasou, un mâner). Un deget apăsat și ținut nemișcat, sau butonul {{ui:Enter}}, este Enter. Două degete mută și măresc vederea ca înainte. Aproape de marginea de jos și de marginea îndepărtată, reticulul se apropie de deget, astfel încât orice parte a desenului poate fi atinsă. Un creion și un mouse aleg întotdeauna direct.

{{cmd:TOUCHCROSSHAIR}} spune starea și cere `ON`, `OFF`, `Auto` (pornit doar acolo unde un deget este singurul indicator, deci oprit pe un calculator cu mouse), `Distance` (cât de departe stă reticulul de deget, de la 24 la 240 de pixeli) sau `Side` (`Left`: sus și la stânga, pentru mâna dreaptă; `Right` pentru mâna stângă; butoanele trec în celălalt colț). Aceleași alegeri sunt în Setări › CadCraft, iar pe un dispozitiv cu ecran tactil bara de stare are un comutator {{ui:Decalare reticul}}. Alegerile se păstrează în acest browser.

### WHOHAS

Spune cine are un desen deschis. În CadCraft Studio pe un computer, deschiderea unui DWG sau DXF scrie lângă el un mic fișier de blocare (`Plan.dwg.cclock`: cine, din ce moment, ce versiune), îl reîmprospătează la fiecare minut cât desenul este deschis și îl șterge când desenul se închide. Deschiderea unui desen pe care îl are altcineva spune cine și din ce moment și oferă {{ui:Deschidere doar pentru citire}} (Salvare cere atunci un nume nou), {{ui:Deschidere oricum}} (cealaltă persoană este anunțată la următoarea reîmprospătare) sau {{ui:Anulare}}. Salvarea peste un fișier pe care îl are altcineva întreabă mai întâi. O blocare nereîmprospătată timp de cinci minute este considerată veche: cealaltă copie s-a închis fără să salveze, sau calculatorul este în repaus.

{{cmd:WHOHAS}} cere `Curent` (desenul deschis), `Fișier` (alegeți unul), `Dosar` (alegeți un dosar: fiecare desen din el care este deschis undeva este listat), `Cale` (tastați o cale completă) sau `Nume` (numele pe care îl văd ceilalți; numele contului dvs. când sunteți conectat). Studio poate ajunge doar la dosare pe care le-ați ales: pentru un desen deschis dintr-un dosar niciodată ales spune o singură dată că nu poate nota desenul ca deschis; `Dosar` alege dosarul, iar blocările funcționează acolo de atunci. Blocarea este o notă pentru oameni, nu o barieră: un alt program poate scrie totuși fișierul. Într-un browser nu există dosare în care să caute, iar comanda spune asta.

### OVERKILL

Șterge obiectele duplicate și pune în ordine liniile și arcele care se suprapun, pentru desene care sosesc cu linii dublate. `Selectați obiectele de curățat`, {{key:Enter}}, apoi din nou {{key:Enter}} ca să curățați cu setările arătate, sau schimbați întâi una:

- `Toleranța`: cât de apropiate trebuie să fie două coordonate ca să conteze drept aceleași (0.000001 la început; 0 înseamnă exact aceleași).
- `Ignoră`: proprietăți care pot diferi între două obiecte altfel identice. Tastați un nume ca să-l comutați: `Culoare`, `Strat`, `TipLinie`, `ScaraTipLinie`, `Grosime`, `Grosime (T)`, `Transparență`, sau `Nimic` / `Toate`. {{key:Enter}} când ați terminat.
- `Suprapunere`: pornit sau oprit. Pornit, liniile care se suprapun pe aceeași dreaptă devin o linie (o linie aflată în interiorul alteia este pur și simplu ștearsă), iar arcele de pe același cerc care se suprapun devin un arc; arcele care închid un cerc întreg devin cerc, iar un arc așezat pe un cerc este șters.
- `Capete`: pornit sau oprit. Pornit, liniile de pe aceeași dreaptă și arcele de pe același cerc care se ating doar cap la cap devin o singură bucată.

Fiecare tip de obiect este verificat pentru duplicate: două obiecte sunt duplicate când geometria lor este aceeași în limita toleranței și stratul, culoarea, tipul de linie, scara tipului de linie, grosimea, grosimea (T), transparența și înălțimea se potrivesc (mai puțin cele pe care le ignorați). Liniile și polilinile deschise se potrivesc și când sunt desenate invers. Primul obiect în ordinea de desenare rămâne și își păstrează propriile proprietăți. Comanda raportează câte obiecte a verificat și câte a șters: duplicate, bucăți suprapuse îmbinate, bucăți unite cap la cap. Un singur {{cmd:UNDO}} le aduce pe toate înapoi. Setările țin până închideți fereastra desenului.

Lasă neatinse: obiectele de pe straturi blocate și obiectele ascunse. Nu unește linii cu înălțime (Z) (duplicatele exacte ale lor tot dispar), și nu atinge segmentele din interiorul unei polilinii (nu sunt subțiate), o linie așezată pe un segment de polilinie, sau o polilinie închisă desenată invers.

### DRAWORDER

Schimbă ce obiecte sunt desenate în față. `Selectați obiectele de reordonat`, {{key:Enter}}, apoi `Deasupra obiectelor`, `Sub obiecte`, `În față` sau `În spate` ({{key:Enter}} = `În spate`). `Deasupra obiectelor` și `Sub obiecte` cer obiectele de referință: selecția merge chiar în fața celui mai din față dintre ele, sau chiar în spatele celui mai din spate. Obiectele selectate își păstrează ordinea între ele. Un pas de anulare. Ordinea se salvează cu desenul în DWG și DXF, unde este ordinea în care sunt scrise obiectele.

Pe ecran fiecare obiect se desenează în ordinea desenului, așa cum îl desenează alte programe care deschid fișierul: o umplere solidă, o polilinie lată sau o mască de text acoperă liniile și textul din spatele ei, iar ce este în față le acoperă. Unde o linie traversează un text, se văd amândouă. Imaginile și paginile PDF atașate rămân sub liniile desenului. Într-un desen foarte mare, în care umpleturile și liniile se suprapun și alternează de mai mult de 256 de ori, primele 256 își păstrează ordinea, iar restul desenează umpleturile sub linii, ca redesenarea să rămână rapidă.

### TEXTTOFRONT

Aduce textul, cotele și indicațiile în fața tuturor celorlalte din spațiul deschis: `Text`, `Cote`, `Indicații` sau `Toate` ({{key:Enter}} = `Toate`). Un pas de anulare. Spune asta când nu există niciunul sau când sunt deja în față.

### HATCHTOBACK

Trimite fiecare hașură din spațiul deschis în spatele tuturor celorlalte, astfel încât umpleturile să nu mai acopere liniile și textul în fișierul salvat. Fără întrebări. Un pas de anulare.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Arată doar obiectele selectate: tot restul din spațiul deschis dispare din vedere până la {{cmd:UNISOLATEOBJECTS}}. Spre deosebire de {{cmd:LAYISO}}, lucrează pe obiectele pe care le alegeți, oricare ar fi straturile lor, și nu schimbă niciun strat. Obiectele ascunse nu se desenează, nu se aleg, nu se agață, nu se apropie cu zoom și nu se trasează, iar comenzile care cer `ALL` le trec cu vederea. Ce desenați cât timp obiectele sunt izolate se arată ca de obicei.

Este doar pentru sesiune: nimic din asta nu se salvează cu desenul, nu este un pas de anulare, iar deschiderea din nou a desenului arată tot. Cât timp obiectele sunt ascunse, bara de stare arată un buton cu numărul lor; faceți clic pe el ca să le arătați din nou.

### HIDEOBJECTS

Ascunde obiectele selectate până la {{cmd:UNISOLATEOBJECTS}}. Aceleași reguli ca la {{cmd:ISOLATEOBJECTS}}: doar pentru sesiune, nu se salvează, nu este pas de anulare.

### UNISOLATEOBJECTS

Aliasuri: `UNISOLATE`, `UNHIDE`. Arată din nou fiecare obiect ascuns de {{cmd:ISOLATEOBJECTS}} sau {{cmd:HIDEOBJECTS}}, și spune câte s-au întors.

### LAYLOCKFADE

Stabilește cum arată obiectele de pe straturile blocate și dacă un clic le poate atinge. Spune starea curentă, apoi primește:

- un număr de la 0 la 90: cantitatea de estompare în procente (50 la început). 0 oprește estomparea.
- `ON` sau `OFF`: estomparea pornită sau oprită, păstrând cantitatea.
- `Pick`, apoi `Yes` sau `No`: poate un clic să selecteze obiecte de pe straturi blocate când nu rulează nicio comandă? `No` (implicit): nu pot fi alese deloc. `Yes`: un clic sau o fereastră le selectează ca {{ui:Proprietăți}} să le poată arăta; tot nu pot fi schimbate, iar `Selectați obiecte` al unei comenzi nu le ia niciodată.

Agățările de obiecte le găsesc pe straturile blocate în ambele cazuri. Trasările nu sunt niciodată estompate. Ambele setări sunt ale dvs., nu ale desenului, și se află și în {{ui:Setări}} la {{ui:Straturi blocate}}.

### BURST

Descompune referințele de bloc și păstrează ce spun atributele lor. `Selectați referințele de bloc de descompus`, {{key:Enter}}: fiecare referință este înlocuită cu obiectele blocului, iar valoarea fiecărui atribut vizibil devine text simplu pe stratul propriu al atributului (un atribut pe stratul 0 ajunge pe stratul referinței, ca celelalte obiecte ale blocului de pe stratul 0). Atributele invizibile se elimină. Un bloc din interiorul blocului rămâne referință de bloc. Un pas de anulare; spune câte referințe au fost descompuse și câte valori de atribut au devenit text.

Refuză un desen legat după nume (legați-l întâi, sau copiați din el cu {{cmd:NCOPY}}), și lasă neatinse celelalte obiecte selectate. Pentru referințele de bloc, {{cmd:EXPLODE}} dă aceleași obiecte; {{cmd:BURST}} ia doar referințele de bloc și numără textul atributelor.

### TXT2MTXT

Alias: `T2M`. Unește texte de un rând într-un text de paragraf. `Selectați textele de un rând de unit`, {{key:Enter}}, apoi `Paragraf` (liniile curg una în alta și se înfășoară la lățimea celei mai late linii) sau `Linii` (fiecare text rămâne o linie a lui); {{key:Enter}} ia pe cel folosit ultima dată. Liniile sunt ordonate de sus în jos, apoi de la stânga la dreapta, de-a lungul direcției textului de sus. Paragraful atârnă din colțul stânga sus al textului de sus și preia înălțimea, rotația, stilul, stratul și culoarea lui. Un pas de anulare.

Textul care este deja text de paragraf, textul gol și celelalte obiecte din selecție sunt lăsate neatinse, iar comanda spune câte sunt.

### NCOPY

Copiază obiecte dintr-o referință de bloc sau dintr-un desen legat în desen, fără să descompună nimic. `Alegeți un obiect dintr-o referință de bloc sau dintr-un desen legat`: obiectul cel mai apropiat de alegere este copiat acolo unde se arată, oricât de adânc în blocuri ar fi; alegeți mai multe, apoi {{key:Enter}}. Apoi `Punct de bază pentru mutarea copiilor`: {{key:Enter}} le lasă pe loc, sau dați un punct de bază și un al doilea punct. Întreaga comandă este un singur pas de anulare.

O copie ia stratul pe care se arată: un obiect de pe stratul 0 dintr-un bloc ajunge pe stratul referinței în care se afla, iar o culoare DupăBloc devine culoarea acelei referințe. Dintr-un desen legat, stratul `Plan|Pereți` devine `Plan$0$Pereți` (numele pe care îl dă legătura), făcut cu culoarea, tipul de linie și grosimea stratului legat. Valoarea unui atribut se copiază ca text. Referințele de bloc de pe straturi blocate nu pot fi alese.

### FLATTEN

Stabilește înălțimea (Z) și grosimea obiectelor selectate la 0. `Selectați obiectele de aplatizat`, {{key:Enter}}. Aplatizează și obiectele din definițiile de blocuri pe care le folosește selecția (și blocurile din acelea), astfel încât fiecare referință la acele blocuri se schimbă; desenele legate rămân cum sunt. Un pas de anulare; spune câte obiecte s-au schimbat și spune când niciunul nu avea înălțime sau grosime.

Ce păstrează CadCraft din a treia dimensiune într-un desen 2D este: o înălțime la cercuri, arce, elipse, puncte, text, referințe de bloc, hașuri, indicații și polilinii (cota lor), o înălțime la fiecare capăt al unei linii și o grosime la linii, cercuri, arce, polilinii, puncte și text, așa cum le avea fișierul. {{cmd:FLATTEN}} șterge exact acestea. Nu atinge modelul 3D de pe fila 3D, fețele 3D sau solidele, iar un obiect desenat într-un plan înclinat a fost deja adus în planul desenului când s-a deschis fișierul.

### BREAKLINE

Desenează o linie cu un simbol de rupere, pentru o vedere tăiată scurt. Spune dimensiunea și prelungirea curente, apoi `Primul punct al liniei de rupere` (sau `Mărime` / `Prelungire` ca să le schimbați întâi), `Al doilea punct`, și `Unde stă simbolul de rupere`: faceți clic de-a lungul liniei, sau {{key:Enter}} pentru mijloc. Rezultatul este o singură polilinie pe stratul curent: linia, care trece dincolo de fiecare punct cu prelungirea, cu o bucată în formă de Z la fel de înaltă ca mărimea și jumătate cât lungimea ei.

`Mărime` și `Prelungire` se țin minte ca setările dvs. (mărimea pornește de la de două ori înălțimea textului cotei înmulțită cu scara cotei; prelungirea la jumătatea mărimii). {{key:Enter}} repetă comanda.

### AUDIT

Verifică desenul deschis pentru defecte și le repară. {{cmd:AUDIT}} se uită la fiecare obiect din model, de pe foi și din blocuri, și la tabelul de straturi, și listează ce găsește pe fel:

- numere care nu sunt finite sau sunt absurd de mari;
- obiecte fără dimensiune: o linie fără lungime, un cerc fără rază, o polilinie cu un singur loc, text fără litere sau înălțime, o referință de bloc cu scara zero;
- obiecte pe un strat pe care desenul nu îl are; referințe la un bloc care nu există; nume de stiluri de text și de cotare și nume de tipuri de linie care nu sunt în desen;
- blocuri care se conțin pe ele însele, direct sau prin alte blocuri;
- obiecte care au același identificator, aceeași cheie sau același identificator de fișier;
- cote fără punctele de la care sunt măsurate, și hașuri al căror contur nu este un contur închis.

Apoi întreabă `Să le reparăm? [Da/Nu]`. `Nu` nu schimbă nimic. `Da` repară totul într-un singur pas de anulare: ce nu poate fi desenat se elimină (numere proaste, fără dimensiune, bloc lipsă, cotă defectă, o hașură fără contur utilizabil, referința care închide un cerc de blocuri); un strat lipsă se creează; numele necunoscute de stiluri și de tipuri de linie revin la valorile implicite; o cheie comună se înlocuiește. Afișează câte obiecte au fost eliminate și câte reparate. Aceleași constatări apar în panoul Probleme, fiecare cu propriul {{ui:Reparare}}.

Nu refuză nimic, dar verifică doar ce desenează CadCraft însuși: datele păstrate pentru alte programe (solide 3D, obiecte OLE) nu sunt deschise.

### RECOVER

Deschide un DXF sau DWG deteriorat. {{cmd:RECOVER}} cere fișierul, citește ce se poate citi în loc să refuze fișierul, listează ce a sărit sau a presupus, apoi verifică și repară desenul așa cum face {{cmd:AUDIT}} cu `Da`.

- DXF: liniile care nu fac parte dintr-o pereche cod și valoare sunt sărite până când perechile se aliniază din nou; o secțiune fără sfârșit este închisă; un fișier tăiat scurt este citit până la tăietură; un DXF binar tăiat scurt este citit până la ultima valoare întreagă. Când o secțiune, un bloc sau un obiect tot nu poate fi citit, este lăsat afară și numit, iar citirea continuă după el.
- DWG: obiectele care nu trec verificările lor sau nu pot fi decodate sunt lăsate afară, iar o listă de obiecte pierdută se reconstruiește parcurgând datele obiectelor.

Fișierul de pe disc nu se schimbă. Desenul recuperat se deschide nesalvat: salvați-l sub un nume nou. Un fișier din care nu se poate citi absolut nimic este refuzat, cu motivul.

### LEGACYTEXT

Transformă textul tastat cu fonturi vietnameze vechi, pe 8 biți, în Unicode. Nume scurte `TEXTTOUNICODE` și `VNTEXT`.

Desenele vietnameze mai vechi țin textul ca litere occidentale pe care doar fontul le transformă în vietnameză: text TCVN3 în fonturile ABC (`.VnTime`, `.VnArial` și fonturile cu majuscule al căror nume se termină în `H`), și text VNI în fonturile VNI (`VNI-Times`). CadCraft arată un astfel de text cum se citește imediat ce se deschide desenul, după fontul stilului de text, al obiectului sau al unei secvențe din textul de paragraf; fișierul încă ține vechile caractere.

{{cmd:LEGACYTEXT}} spune câte texte a găsit în fiecare codare și întreabă `Convertiți … în Unicode?`. `Da` rescrie fiecare (model, foi, blocuri, valori și definiții de atribute) și dă stilurilor de text un font Unicode (Times New Roman, Arial sau Courier New, după tipul vechiului font), într-un singur pas de anulare. Formatarea din interiorul textului de paragraf se păstrează.

Când niciun text nu folosește un font cunoscut (un stil care și-a pierdut numele fontului), cere `Citiți textele selectate ca [Tcvn3/Vni/Niciuna]`: alegeți codarea și selectați textele. Textul care este deja Unicode este lăsat neatins. Înlocuirile de text din cote și textul indicațiilor multiple nu se convertesc.
