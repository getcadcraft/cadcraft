---
title: Komandu uzziņa
summary: Katra komanda CadCraft zīmēšanas lietotnē ar tās aliasiem, jautājumiem, ko tā uzdod, opcijām un noklusējumiem.
keywords: komandas, aliasi, komandu saraksts, laukums, perimetrs, measuregeom, līnija, pline, riņķis, loks, trim, offset, dimlinear, bloks, insert, izkārtojums, drukāt, tālummaiņa, palīdzība, copyclip, cutclip, pasteclip, pasteorig, copybase, dublēt, selectall
from: 7db2646b
---

Ierakstiet komandas nosaukumu vai aliasu un nospiediet {{key:Enter}} vai {{key:Space}}. Burtu reģistrs nav svarīgs, un vadošais `_`, `-`, `.` vai `'` tiek ignorēts. Ierakstiet `HELP` (vai `?`), lai komandrindas vēsturē izdrukātu īsu sarakstu ar katru komandu; nospiediet {{key:F1}}, lai atvērtu šo palīdzību.

Kā lasīt uzvednes: opcijas ir kvadrātiekavās, un vienu no tām izvēlaties, ierakstot tās lielos burtus (`D` diametram). Noklusējums ir leņķiekavās; nospiediet {{key:Enter}}, lai to pieņemtu. Kur jānorāda punkts, varat noklikšķināt vai ierakstīt jebkuru no formātiem, kas minēti [Koordinātu un attāluma ievade](topic:coordinate-entry). Kur jānorāda attālums, varat ierakstīt skaitli vai noklikšķināt divus punktus.

Nospiežot {{key:Enter}} vietā, kur nepieciešams punkts vai objekts un nav noklusējuma, komanda beidzas. {{key:Esc}} to atceļ. Viss, ko komanda izdarīja, ir viens atsaukšanas solis.

## Zīmēšana

### LINE

Aliasi: `L`. Taisni posmi, katrs ir savs objekts.

- `Norādiet pirmo punktu` (Enter: sākt no pēdējā jūsu dotā punkta)
- `Norādiet nākamo punktu [Atsaukt (U)]`, atkārtoti. Pēc diviem segmentiem: `[Atsaukt (U)/Aizvērt (C)]`.
- `U` atsauc pēdējo segmentu, `C` aizver līdz pirmajam punktam un beidz. Enter beidz.

### PLINE

Aliasi: `PL`. Viena polilīnija no taisnu un loku segmentiem.

- `Norādiet sākuma punktu`
- `Norādiet nākamo punktu [Loks (A)/Aizvērt (C)/Atsaukt (U)]` (Aizvērt, kad ir divi segmenti)
- `A` pārslēdz uz lokiem: `Norādiet loka galapunktu [Līnija/Aizvērt (C)/Atsaukt (U)]`. Katrs loks turpinās tangenti iepriekšējam segmentam. `L` atgriežas pie līnijām, `CL` aizver ar loku.
- Enter beidz; polilīnija paliek atvērta.

### CIRCLE

Aliasi: `C`.

- `Norādiet riņķa centra punktu [3P/2P/Ttr (tan tan rādiuss)]`
- `Norādiet riņķa rādiusu [Diametrs] <pēdējais rādiuss>`; `D` jautā `Norādiet riņķa diametru`.
- `2P`: diametra abi gali. `3P`: trīs punkti uz riņķa.
- `T` (arī komanda `TTR` un {{ui:Zīmēšana}} › {{ui:Vairāk}} › {{ui:Riņķis: Tan, Tan, Radius}}): `Norādiet objekta punktu pirmajai pieskarei`, pēc tam otrajai un rādiusu (Enter: pēdējais). Riņķis pieskaras abiem objektiem (līnijām, lokiem, riņķiem, polilīnijas segmentiem, arī blokos); no tiem, kas pieskaras, tas, kas atrodas tuvāk jūsu izvēlētajiem punktiem. „Riņķis neeksistē”, kad neviens neatbilst.
- `TTT` (vai {{ui:Zīmēšana}} › {{ui:Vairāk}} › {{ui:Riņķis: Tan, Tan, Tan}}): trīs objekti; riņķis, kas pieskaras visiem trim, tas, kas tuvāk jūsu izvēlētajiem punktiem (trīs līnijas dod iekšējo vai ārējo riņķi atkarībā no tā, kur izvēlaties).

### ARC

Aliasi: `A`.

- `Norādiet loka sākuma punktu [Centrs]`, `Norādiet loka otro punktu`, `Norādiet loka galapunktu`: loks caur trim punktiem.
- `C`: `Norādiet loka centra punktu`, `Norādiet loka sākuma punktu`, `Norādiet loka galapunktu`. Loks iet pretēji pulksteņrādītāja virzienam no sākuma līdz galam.

### RECTANG

Aliasi: `REC`, `RECTANGLE`. Slēgta polilīnija.

- `Norādiet pirmo stūra punktu`, `Norādiet pretējo stūra punktu`. Ierakstiet `@platums,augstums` otrajam stūrim.

### POLYGON

Aliasi: `POL`. Regulārs daudzstūris kā slēgta polilīnija.

- `Ievadiet malu skaitu <4>` (3 līdz 1024)
- `Norādiet daudzstūra centru`
- `Ievadiet opciju [Ierakstīts riņķī/Apvilkts ap riņķi (C)] <I>`
- `Norādiet riņķa rādiusu`: noklikšķiniet vai ierakstiet punktu; tā attālums nosaka izmēru, un tā virziens pagriež daudzstūri.

### ELLIPSE

Aliasi: `EL`.

- `Norādiet elipses ass galapunktu [Centrs]`, `Norādiet ass otru galapunktu`, `Norādiet attālumu līdz otrai asij`
- `C`: `Norādiet elipses centru`, `Norādiet ass galapunktu`, pēc tam attālumu līdz otrai asij.

### HATCH

Aliasi: `H`, `BH`, `BHATCH`; vai {{ui:Svītrojums}} rīkjoslā. Vispirms izdrukā pašreizējo rakstu, mērogu un leņķi.

- `Izvēlieties iekšējo punktu [Atlasīt objektus (S)/Raksts (P)/Mērogs (SC)/Leņķis (A)]`, atkārtoti (`Atsaukt (U)`, kad ir laukums): katrs klikšķis pievieno slēgtu laukumu ap to, un slēgtās formas tajā kļūst par salām. Enter izveido vienu svītrojumu no visām.
- `S`: `Atlasiet slēgtus objektus` (slēgtas polilīnijas, riņķi, slēgtas elipses).
- `P`: `Ievadiet rakstu nosaukumu, SOLID vai ? sarakstam <pašreizējais>`. `SC`: `Norādiet raksta mērogu`. `A`: `Norādiet raksta leņķi`.

Skatiet [Svītrojumi un aizpildīti laukumi](topic:hatch).

### POINT

Aliasi: `PO`; vai {{ui:Zīmēšana}} › {{ui:Vairāk}} › {{ui:Punkts}}. Punktu objekti, viens katram klikšķim, līdz Enter.

- `Norādiet punktu`

### XLINE

Aliasi: `XL`; vai {{ui:Zīmēšana}} › {{ui:Vairāk}} › {{ui:Konstrukcijas līnija}}. Konstrukcijas līnijas, bezgalīgas abos virzienos. Skatiet [Konstrukcijas līnijas un stari](topic:construction-lines).

- `Norādiet punktu [Horizontāli (H)/Vertikāli (V)/Leņķis (A)/Bisektrise (B)/Nobīde (O)]`, pēc tam `Norādiet caurejošo punktu` katrai līnijai, līdz Enter.
- `A`: `Ievadiet konstrukcijas līnijas leņķi [Atskaite (R)] <0>`; `R` vispirms jautā `Atlasiet līnijas objektu`.
- `B`: `Norādiet leņķa virsotnes punktu`, `Norādiet leņķa sākuma punktu`, pēc tam `Norādiet leņķa beigu punktu` katrai līnijai.
- `O`: `Norādiet nobīdes attālumu [Caur (T)] <Caur (T)>`, pēc tam `Atlasiet līnijas objektu` un `Norādiet pusi nobīdei` (vai `Norādiet caurejošo punktu`) katrai līnijai.

### RAY

Nav aliasu; vai {{ui:Zīmēšana}} › {{ui:Vairāk}} › {{ui:Stars}}. `Norādiet sākuma punktu`, pēc tam `Norādiet caurejošo punktu` katram stariem, līdz Enter.

### TEXT

Aliasi: `DT`, `DTEXT`; vai {{ui:Teksts}} rīkjoslā. Vienas rindas teksts; katra rinda ir savs objekts.

- `Norādiet teksta sākuma punktu [Līdzināt (J)]`
- `J`: `Ievadiet opciju [Pa kreisi (L)/Centrā (C)/Pa labi (R)/Vidū (M)/TL/MC] <L>`, pēc tam `Norādiet teksta ievietošanas punktu`
- `Norādiet teksta augstumu <pašreizējais teksta augstums>`
- `Norādiet teksta pagriešanas leņķi <0>`
- `Ievadiet tekstu`, atkārtoti: katrs Enter sāk nākamo rindu zem. Tukšā rindā Enter beidz. {{key:Space}} šeit ievieto atstarpi.

## Labot

Aliasi: `MT`, `T`; vai {{ui:Rindkopa}} rīkjoslā. Rindkopas teksts, kas ietinas noteiktā platumā un ko raksta vietā.

- `Norādiet pirmo stūri`
- `Norādiet pretējo stūri [Augstums (H)/Līdzināt (J)/Rindstarpa (L)/Pagriezt (R)/Platums (W)]`: platums starp abiem stūriem ir vieta, kur teksts ietinas. `H` jautā `Norādiet augstumu`, `J` `Ievadiet līdzinājumu [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Ievadiet rindstarpas koeficientu (0.25 līdz 4)`, `R` `Norādiet pagriešanas leņķi`, `W` `Norādiet platumu (0 bez ietīšanas)` un izlaiž otro stūri.
- Tad atveras lodziņš uz zīmējuma: rakstiet, {{key:Enter}} sāk jaunu rindkopu, {{key:Mod+Enter}} vai klikšķis ārpus lodziņa pabeidz, {{key:Esc}} atceļ. Tā josla iestata augstumu, rindstarpu, platumu un līdzinājumu. Skatiet [Pievienot tekstu un iezīmes](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliasi: `ED`, `DDEDIT`; vai veiciet dubultklikšķi uz teksta. `Atlasiet tekstu rediģēšanai`, atkārtoti līdz {{key:Enter}}: katrs atveras tajā pašā lodziņā. Ja sākts ar atlasītu vai divreiz noklikšķinātu tekstu, rediģē to un beidzas.

### ERASE

Aliasi: `E`, `DELETE`; vai nospiediet {{key:Delete}} ar atlasītiem objektiem.

- `Atlasiet objektus` (izlaists, ja objekti jau ir atlasīti)

### MOVE

Aliasi: `M`.

- `Atlasiet objektus`
- `Norādiet bāzes punktu [Nobīde (D)]`, `Norādiet otro punktu`
- `D`: `Norādiet nobīdi`, ierakstītu kā `dx,dy`.

### COPY

Aliasi: `CO`, `CP`. Kopē tik reižu, cik dodat punktus.

- `Atlasiet objektus`
- `Norādiet bāzes punktu [Nobīde (D)]`
- `Norādiet otro punktu [Atsaukt (U)]`, atkārtoti līdz Enter. `U` atsauc pēdējo kopiju.

### ROTATE

Aliasi: `RO`.

- `Atlasiet objektus`, `Norādiet bāzes punktu`
- `Norādiet pagriešanas leņķi <pēdējais leņķis>`: grādos, pozitīvs pretēji pulksteņrādītāja virzienam; vai noklikšķiniet punktu, lai pagrieztu uz to.

### SCALE

Aliasi: `SC`.

- `Atlasiet objektus`, `Norādiet bāzes punktu`
- `Norādiet mēroga koeficientu`: ierakstiet koeficientu, piemēram, `0.5` vai `2`. Noklikšķināts punkts dod savu attālumu no bāzes punkta kā koeficientu.

### MIRROR

Aliasi: `MI`.

- `Atlasiet objektus`
- `Norādiet spoguļlīnijas pirmo punktu`, `Norādiet spoguļlīnijas otro punktu`
- `Dzēst avota objektus? [Jā (Y)/Nē] <N>`

### ALIGN

Aliasi: `AL`; vai {{ui:Labot}} › {{ui:Vairāk}} › {{ui:Izlīdzināt}}.

- `Atlasiet objektus`
- `Norādiet pirmo avota punktu`, `Norādiet pirmo galamērķa punktu`
- `Norādiet otro avota punktu (Enter, lai turpinātu)`, `Norādiet otro galamērķa punktu`
- `Norādiet trešo avota punktu (Enter, lai turpinātu)`, `Norādiet trešo galamērķa punktu`
- Ar diviem pāriem: `Mērogot objektus pēc izlīdzināšanas punktiem? [Jā (Y)/Nē] <N>`

Skatiet [Izlīdzināt objektus](topic:modify-objects#align-objects).

### ALIGNTO

- `Atlasiet objektus` (vai atlasi), `Izlīdzināt [Pa kreisi (L)/Centrā (C)/Pa labi (R)/Augšā (T)/Vidū (M)/Apakšā (B)] <Pa kreisi (L)>`, `Uz [Atlase (S)/Pirmais (F)/Pēdējais (L)/Punkts] <Atlase (S)>`; `P` jautā punktu. Atlase paliek.

### DISTRIBUTE

- `Atlasiet objektus` (vismaz trīs), `Sadalīt [Horizontāli/Vertikāli] <Horizontāli>`, `Izvietot vienmērīgi [Centri/Atstarpes (G)] <Atstarpes (G)>`. Ārējie divi paliek; atlase paliek.

### ALIGNPANEL

Aliasi: `ALP`; vai {{ui:Labot}} › {{ui:Vairāk}} › {{ui:Izlīdzināt un sadalīt}}. Atver paneli, kas izpilda ALIGNTO un DISTRIBUTE ar klikšķiem.

### LASER

Aliasi: `LASERCUT`; vai {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Lāzers…}}. Atver lāzera paneli virs zīmējuma: ko dara katrs slānis (griezt, iespiest, gravēt, aizpildīt, attēls), priekšskatījums, GRBL G-code, ko saglabāt, un rāmēšana un sūtīšana caur Web Serial. Skatiet [Nosūtīt zīmējumu lāzeram](topic:laser-cutting).

### STRETCH

Aliasi: `S`; vai {{ui:Izstiept}}. `Atlasiet objektus stiepšanai`: velciet krustojuma logus (vai ierakstiet `C`) pār galiem, lai pārvietotu. `Norādiet bāzes punktu [Nobīde (D)]`, `Norādiet otro punktu`. Punkti logos iekšpusē pārvietojas: līniju gali, polilīnijas virsotnes (loku segmenti saglabā savu augstumu), izmēru punkti; riņķi, elipses, teksts, punkti un bloki pārvietojas veseli, ja to centrs vai ievietošanas punkts ir iekšā. Atlase, kas izdarīta pirms komandas, saglabā krustojuma logus (un lasso), kas to izveidoja, tāpēc tie stiepjas tāpat. Bez loga objekti pārvietojas veseli.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliasi: `AR`; vai {{ui:Masīvs}}. `Atlasiet objektus`, pēc tam `Ievadiet masīva tipu [Taisnstūrveida (R)/Polārais] <Taisnstūrveida (R)>` (tikai ARRAY).

- Taisnstūrveida sākas ar 4 kolonnām × 3 rindām, atstarpi 1.5 reizes lielāku par objektu izmēru, rāda priekšskatījumu. `Ievadiet opciju [Skaits (COU)/Atstarpe (S)/Kolonnas (COL)/Rindas (R)/Iziet (X)] <X>`: `COU` jautā kolonnas un rindas, `S` attālumus starp kolonnām un starp rindām (negatīvs iet pa kreisi vai uz leju), `COL` un `R` — pa vienam virzienam.
- Polārais jautā `Norādiet masīva centra punktu`, sākas ar 6 vienumiem pa apli, pagriezts. `Ievadiet opciju [Vienumi (I)/Aizpildīt leņķi (F)/Pagriezt vienumus (ROT)/Iziet (X)] <X>`: `I` vienumi, `F` leņķis, ko aizpildīt (+ pretēji pulksteņrādītāja virzienam, − pulksteņrādītāja virzienā), `ROT` Jā vai Nē.
- {{key:Enter}} (Iziet) veido kopijas kā vienkāršus objektus. Viens atsaukšanas solis.

### OFFSET

Aliasi: `O`. Līnijas, loki, riņķi un polilīnijas.

- `Norādiet nobīdes attālumu [Caur (T)] <pēdējais attālums vai Caur (T)>`
- `Atlasiet objektu nobīdei`, pēc tam `Norādiet pusi, uz kuru nobīdīt` (vai, ar Caur, `Norādiet caurejošo punktu`), atkārtoti līdz Enter.

### TRIMEXTENDMODE

- `Ievadiet jaunu TRIMEXTENDMODE vērtību (1 Ātrais, 0 Standarta)`: kā sākas {{cmd:TRIM}} un {{cmd:EXTEND}}. `1` Ātrais: katrs objekts ir griezējmala vai robeža. `0` Standarta: vispirms jautā malas. Arī `(setvar "TRIMEXTENDMODE" 0)` LISP.

### TRIM

Aliasi: `TR`. Vispirms izdrukā `Pašreizējie iestatījumi: Ātrais režīms (TRIMEXTENDMODE 1), malas: bez pagarināšanas, velkot zīmē ceļu`. Ātrajā režīmā katrs redzamais objekts ir griezējmala, un objekts, ko nekas nešķērso, tiek izdzēsts; Standarta režīmā vispirms jautā `Atlasiet griezējmalas (Enter = katrs objekts)` un griež tikai pie tām.

- `Atlasiet objektu apgriešanai vai atlasiet ar shift pagarināšanai [Griezējmalas (T)/Žogs (F)/Krustojums (C)/Režīms (O)/Malas (E)/Dzēst (R)/Atsaukt (U)]`, atkārtoti: noklikšķiniet gabalu, ko noņemt (tas kļūst pelēks un punktēts, kamēr rādītājs atrodas virs tā), velciet ceļu caur vairākiem gabaliem (visi iet vienā solī) vai noklikšķiniet divas tukšas vietas žogam starp tām. {{key:Shift}} pagarina. `T` izvēlas griezējmalas (Standarta režīms), `F` jautā žoga punktus, `C` divus logu stūrus (daļēji iekšā esošie gabali arī iet), `O` jautā `Ievadiet apgriešanas režīma opciju [Ātrais/Standarta]`, `E` jautā `Ievadiet netiešās malas pagarināšanas režīmu [Pagarināt/Nepagarināt]` (EDGEMODE), `R` dzēš objektus, ko izvēlaties, `U` atsauc pēdējo izvēli vai velkamo ceļu. Enter beidz. Skatiet [Apgriešana un pagarināšana](topic:trim-and-extend).

### EXTEND

Aliasi: `EX`. Tas pats, kas TRIM, tikai otrādi: `Atlasiet objektu pagarināšanai vai atlasiet ar shift apgriešanai [Robežmalas (B)/Žogs (F)/Krustojums (C)/Režīms (O)/Malas (E)/Atsaukt (U)]`. Klikšķis pagarina tuvāko galu līdz nākamajai robežai; velkots ceļš vai žogs pagarina katru objektu, ko tas šķērso; {{key:Shift}} apgriež. `B` izvēlas robežmalas (Standarta režīms). Režīms un Malas ir kopīgi ar TRIM.

### LINKVIEWS

Aliasi: `SYNCVIEWS`; vai {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Saistīt logu skatus}}, vai saites ikona zīmējuma cilnēs. `Saistīt logu skatus [ON/OFF]` (Enter pārslēdz uz otru stāvokli): kamēr ieslēgts, panorēšana vai tālummaiņa aktīvajā logā pārvieto katru logu, kas rāda to pašu telpas veidu. Skatiet [Sadalīt ekrānu](topic:split-screen).

### OPENIN3D

Nav aliasu; vai {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Atvērt ModelCraft}}, kur 3D modelēšanas lietotne saņem nodoto zīmējumu. Atver to tur jaunā cilnē kā DWG (nekas netiek augšupielādēts). Ja pārlūks bloķē cilni, tas to pasaka.

### LASSOMODE

`Ievadiet jaunu LASSOMODE vērtību (1 = lasso, 0 = taisnstūris)`: ko zīmē, nospiežot un velkot tukšā vietā. Tas pats, kas Iestatījumi › CadCraft › Velkot, lai atlasītu. Skatiet [Lasso atlase](topic:lasso-selection).

### FILLET

Aliasi: `F`. Līnijas, loki, riņķi un polilīnijas. Vispirms izdrukā `Pašreizējie iestatījumi: Režīms = TRIM, Rādiuss = 0`.

- `Atlasiet pirmo objektu [Atsaukt (U)/Polilīnija (P)/Rādiuss (R)/Apgriezt (T)/Vairāki (M)]`
  - `R` jautā `Norādiet noapaļojuma rādiusu <pēdējais>`. `T` jautā `Ievadiet apgriešanas režīma opciju [Apgriezt (T)/Bez apgriešanas (N)]`: ar `Bez apgriešanas` objekti paliek kā ir un tiek pievienots tikai loks.
  - `M` komanda turpinās vairākiem stūriem, līdz {{key:Enter}}; `U` atsauc pēdējo stūri, nepametot komandu.
  - `P` jautā `Atlasiet 2D polilīniju [Rādiuss]` un noapaļo katru stūri, kur saskaras divi taisni segmenti. Jau esošie noapaļojumi tiek aizstāti ar jauno rādiusu; rādiuss 0 tos noņem. Stūri, kuru malas ir pārāk īsas rādiusam, tiek atstāti un saskaitīti.
- `Atlasiet otro objektu vai atlasiet ar shift, lai pielietotu stūri [Rādiuss]`. Turiet {{key:Shift}}, kamēr klikšķināt, lai iegūtu asu stūri neatkarīgi no rādiusa.

Noklikšķiniet katru objektu tajā daļā, ko vēlaties paturēt. Divas līnijas, kas nesaskaras, tiek pagarinātas. Divas paralēlas līnijas saņem pusriņķi pāri atstarpei, pirmās līnijas galā, tuvākajā jūsu klikšķim. Riņķis nekad netiek griezts. Divi blakus esoši viena polilīnijas segmenti saņem loku polilīnijas iekšpusē; polilīnija un cits objekts darbojas, kad griezums nokrīt uz polilīnijas pirmā vai pēdējā segmenta.

### CHAMFER

Aliasi: `CHA`. Līnijas un polilīniju taisnie segmenti. Vispirms izdrukā pašreizējos attālumus (vai garumu un leņķi).

- `Atlasiet pirmo līniju [Atsaukt (U)/Polilīnija (P)/Attālums (D)/Leņķis (A)/Apgriezt (T)/Metode (E)/Vairāki (M)]`
  - `D` jautā `Norādiet pirmo nošķelšanas attālumu <pēdējais>` un `Norādiet otro nošķelšanas attālumu <pirmais>`: pirmais tiek nogriezts no pirmās līnijas, ko izvēlaties, otrais — no otras.
  - `A` jautā `Norādiet nošķelšanas garumu uz pirmās līnijas` un `Norādiet nošķelšanas leņķi no pirmās līnijas`.
  - `E` (Metode) izvēlas, kuru no abiem nākamā nošķelšana izmanto. `T`, `M`, `U` un `P` darbojas kā {{cmd:FILLET}}.
- `Atlasiet otro līniju vai atlasiet ar shift, lai pielietotu stūri [Attālums (D)/Leņķis (A)/Metode (E)]`. {{key:Shift}}+klikšķis veido asu stūri.

Attālumu, kas garāks par līniju, noraida (`Attālums ir pārāk liels.`).

### BREAK un BREAKATPOINT

Aliasi: `BR`. `Atlasiet objektu` (kur noklikšķināt, ir pirmais punkts), `Norādiet otro pārtraukuma punktu [Pirmais punkts (F)]`; `F` jautā `Norādiet pirmo pārtraukuma punktu` un `Norādiet otro pārtraukuma punktu`. Daļa starp tiem tiek noņemta; riņķim — pretēji pulksteņrādītāja virzienam no pirmā punkta. BREAKATPOINT jautā `Norādiet pārtraukuma punktu` un sadala objektu divās daļās tajā vietā (ne riņķim).

### LENGTHEN

Aliasi: `LEN`. `Atlasiet objektu mērīšanai [Delta (DE)/Procents (P)/Kopā (T)/Dinamiski (DY)]`: klikšķis izdrukā `Pašreizējais garums` (un loka ietverto leņķi) un jautā atkal. `DE` jautā `Ievadiet delta garumu (negatīvs saīsina) [Leņķis (A)]`, `P` `Ievadiet procentuālo garumu`, `T` `Norādiet kopējo garumu [Leņķis (A)]`, `DY` velk. Pēc tam `Atlasiet objektu maiņai [Atsaukt (U)]`, atkārtoti: tuvākais gals klikšķim pārvietojas. Līnijas, loki un atvērtas polilīnijas.

### JOIN

Aliasi: `J`. `Atlasiet objektus savienošanai`. Līnijas, loki un atvērtas polilīnijas, kas saskaras gals pret galu, kļūst par polilīnijām (slēgtām, ja ķēde aizveras); līnijas uz vienas līnijas kļūst par vienu līniju; loki vienā riņķī kļūst par vienu loku vai riņķi. Vēsture pasaka, cik objektu tika savienoti un cik nē.

### MATCHPROP

Aliasi: `MA`, `PAINTER`. `Atlasiet avota objektu`, pēc tam `Atlasiet galamērķa objektus [Iestatījumi (S)]` un {{key:Enter}}. Kopē slāni un krāsu, un starp vienāda tipa objektiem — teksta augstumu un platumu, izmēru lielumus vai svītrojuma rakstu. `S` jautā `Ieslēgt vai izslēgt īpašību [Krāsa (C)/Slānis (LA)/Teksts/Izmērs (D)/Svītrojums (H)]`, atkārtoti līdz {{key:Enter}}; izvēle tiek atcerēta sesijai.

### EXPLODE

Aliasi: `X`. Polilīnijas kļūst par līnijām un lokiem, bloku atsauces kļūst par saviem objektiem, izmēri kļūst par līnijām, bultiņām un tekstu.

- `Atlasiet objektus`

## Starpliktuve

CadCraft pati starpliktuve: tā darbojas rasējumā, starp rasējumiem un starp CadCraft cilnēm šajā pārlūkā. Skatiet [Kopēt, ielīmēt un dublēt](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, vai {{ui:Kopēt}} grupā {{ui:Rediģēt}}. Kopē objektus starpliktuvē kopā ar blokiem un slāņiem, ko tie izmanto. Objekti paliek atlasīti.

- `Atlasiet objektus kopēšanai` (izlaists, ja objekti jau ir atlasīti)

### CUTCLIP

{{key:Mod+X}}, vai {{ui:Izgriezt}} izvēlnē {{ui:Vairāk}}. Kopē objektus starpliktuvē, pēc tam tos dzēš (viens atsaukšanas solis).

- `Atlasiet objektus izgriešanai` (izlaists, ja objekti jau ir atlasīti)

### COPYBASE

Kopē objektus starpliktuvē ar bāzes punktu, ko izvēlaties; ielīmējot, šis punkts tiek novietots.

- `Norādiet bāzes punktu`
- `Atlasiet objektus kopēšanai`

### PASTECLIP

{{key:Mod+V}}, vai {{ui:Ielīmēt}} grupā {{ui:Rediģēt}}. Kopija seko kursoram, karājoties no tās apakšējā kreisā stūra (vai no tās centra, vai no `COPYBASE` punkta; skatiet [CadCraft iestatījumi](topic:settings)).

- `Norādiet ievietošanas punktu`

Ielīmētie objekti ir atlasīti. Bloks, kam zīmējumā jau ir tāds pats nosaukums, saglabā šī zīmējuma definīciju.

Kad MarkupCraft nokopētais apgabals ir jaunāks par to, ko kopēja CadCraft (un ne vecāks par 6 stundām), {{key:Mod+V}} un `PASTECLIP` ielīmē šo apgabalu: skatiet `PASTEAREA`.

### PASTEAREA

Aliasi: `PAREA`. {{ui:Ielīmēt kopētu apgabalu}} izvēlnē {{ui:Vairāk}}. Ielīmē apgabalu, kas nokopēts MarkupCraft ar {{ui:Kopēt apgabalu}}, kā attēlu patiesajā izmērā. Skatiet [Attēli zīmējumā](topic:pictures).

- `Norādiet kopētā apgabala apakšējo kreiso stūri`
- `Mērogot tā papīra izmēru ar (100 1:100 lapai; Punkti: divi punkti uz tā un to patiesais attālums) [Punkti] <1>` (tikai tad, ja lapai nebija zīmējuma mēroga): skaitlis, {{key:Enter}} papīra izmēram vai `P`, pēc tam `Norādiet pirmo punktu ielīmētajā apgabalā`, `Norādiet otro punktu ielīmētajā apgabalā` un to patieso attālumu.

### PASTEORIG

{{key:Mod+Shift+V}}, vai {{ui:Ielīmēt vietā}} izvēlnē {{ui:Vairāk}}. Ielīmē koordinātēs, no kurām objekti tika nokopēti. Nejautā nekā.

### DUPLICATE

Aliasi: `DUP`. {{key:Mod+D}}, vai {{ui:Dublēt un pārvietot}} izvēlnē {{ui:Vairāk}}. Objektu kopija pārvietojas kopā ar rādītāju no tās vietas; {{key:Esc}} neatstāj neko. Neizmanto starpliktuvi.

- `Atlasiet objektus dublēšanai` (izlaists, ja objekti jau ir atlasīti)
- `Norādiet, kur iet kopija (Esc neatstāj neko)`: noklikšķiniet, ierakstiet punktu, `@dx,dy` (no vietas, kur bija rādītājs) vai attālumu virzienā uz kursoru.

### SELECT

Jautā `Atlasiet objektus` (ar visām zemāk esošajām opcijām) un atstāj izvēlēto atlasītu nākamajai komandai vai vēlākam `P`.

### QSELECT

Aliasi: `QS`. Pārlūkā — dialogs {{ui:Ātrā atlase}} (skatiet [Atlasīt objektus](topic:select-objects#select-by-a-rule-quick-select)). Bez tā komandrinda jautā `Ievadiet objekta tipu`, `Ievadiet īpašību`, `Ievadiet operatoru [=/<>/>/</*/Atlasīt visu] <=>` un `Ievadiet vērtību`. Atbilstības kļūst par atlasi.

### SELECTSIMILAR

Aliasi: `SIM`. `Atlasiet objektus [Iestatījumi (SE)]` (vai pašreizējo atlasi): atlasa katru tāda paša tipa objektu ar to pašu slāni un krāsu (un bloka nosaukumu, svītrojuma rakstu). `SE` jautā `Ieslēgt vai izslēgt īpašību [Slānis (LA)/Krāsa (CO)/Nosaukums (NA)/Raksts (PA)/Augstums (HE)]`, atkārtoti līdz {{key:Enter}}.

### FIND

Nav aliasu; vai {{ui:Rediģēt}} › {{ui:Vairāk}} › {{ui:Atrast un aizstāt}}. Pārlūkā — dialogs {{ui:Atrast un aizstāt}} (skatiet [Pievienot tekstu un iezīmes](topic:text#find-and-replace-words)). Bez tā: `Ievadiet meklējamo tekstu`, pēc tam `Ievadiet aizstājošo tekstu (Enter: atlasīt atrasto)`. Meklē tekstā, atribūtu vērtībās un izmēru tekstā, atvērtajā cilnē vai atlasē.

### SELECTALL un DESELECT

`SELECTALL` (aliass `AI_SELALL`, {{key:Mod+A}}) atlasa katru objektu, ko var rediģēt atvērtajā cilnē. `DESELECT` (aliasi `AI_DESELECT`, `SELECTNONE`; vai {{key:Esc}}) notīra atlasi.

## Izmēri

### DIMLINEAR

Aliasi: `DLI`, `DIMLIN`. Horizontāls vai vertikāls attālums.

- `Norādiet pirmās pagarinājuma līnijas sākumu [Atlasīt objektu (S)]` (Enter vai `S`: `Atlasiet izmērāmo objektu`, pēc tam noklikšķiniet līniju, loku, riņķi vai polilīnijas segmentu)
- `Norādiet otrās pagarinājuma līnijas sākumu`
- `Norādiet izmēra līnijas vietu [Teksts/Horizontāli/Vertikāli/Pagriezts (R)]`. `T` jautā tekstu (`<>` ir izmērītā vērtība), `H` un `V` fiksē virzienu, `R` jautā `Norādiet izmēra līnijas leņķi <0>`.

### DIMALIGNED

Aliasi: `DAL`, `DIMALI`. Patiesais attālums starp diviem punktiem.

- Sākumpunkti kā {{cmd:DIMLINEAR}}, pēc tam `Norādiet izmēra līnijas vietu [Teksts]`.

### DIMANGULAR

Aliasi: `DAN`, `DIMANG`.

- `Atlasiet loku, riņķi vai līniju, vai Enter virsotnei`
- Lokam: tā leņķis. Riņķim: `Norādiet otro leņķa galapunktu`. Līnijai: `Atlasiet otru līniju`. Enter: `Norādiet leņķa virsotni`, `Norādiet pirmo leņķa galapunktu`, `Norādiet otro leņķa galapunktu`.
- `Norādiet izmēra līnijas vietu [Teksts]`: noklikšķiniet leņķa iekšpusē, lai to izmērītu.

### DIMRADIUS un DIMDIAMETER

Aliasi: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Atlasiet loku vai riņķi`, pēc tam `Norādiet izmēra līnijas vietu [Teksts]`.

### DIMCONTINUE

Aliasi: `DCO`, `DIMCONT`. Turpina no pēdējā izveidotā lineārā vai līdzinātā izmēra (vai jautā `Atlasiet lineāru vai līdzinātu izmēru`).

- `Norādiet otrās pagarinājuma līnijas sākumu [Atsaukt (U)]`, atkārtoti līdz Enter.

### DIMBASELINE

Aliasi: `DBA`, `DIMBASE`. Tāpat kā {{cmd:DIMCONTINUE}}, bet katrs izmērs sākas no pirmā sākumpunkta un tiek sakrauts tālāk.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Aliasu nav. Katra jautā `Ievadiet jaunu vērtību … <pašreizējā>` un iestata šo lielumu **jauniem** izmēriem: kopējais mērogs, teksta augstums, bultiņas izmērs, decimāldaļu skaits (līdz 8), atstarpe ap tekstu, pagarinājums aiz izmēra līnijas, nobīde no sākumpunkta. Skatiet [Iestatīt izmēru lielumus](topic:dimension-settings).

### DIMLUNIT

Izmēra iestatījums: tikai jaunu izmēru formāts (1 zinātniskais, 2 decimālais, 3 inženiertehniskais, 4 arhitektūras, 5 daļskaitļa).

### DIMSTYLE un -DIMSTYLE

Aliasi: `DST`, `DDIM`, `D`. Izmēru stilu pārvaldnieks: {{ui:Iestatīt pašreizējo}}, {{ui:Jauns…}}, {{ui:Mainīt…}}, {{ui:Pārdēvēt…}}, {{ui:Dzēst}}, {{ui:Salīdzināt…}}, {{ui:Piemērot atlasītajiem}}. `-DIMSTYLE` komandrindā: `Izmēru stils [Atjaunot (R)/Saglabāt/Dzēst/Piemērot (A)/Salīdzināt (C)/Pārdēvēt (N)/Saraksts (L)]`. Skatiet [Iestatīt izmēru lielumus](topic:dimension-settings#named-dimension-styles).

### DIMEDIT un DIMTEDIT

`DIMEDIT` (`DED`): `Izmēra rediģēšana [Sākums (H)/Jauns (N)/Pagriezt (R)/Slīpi (O)] <Sākums (H)>`, pēc tam izmēri (vai tie, kas jau ir atlasīti). Jauns jautā tekstu (`<>` = mērījums); Pagriezt — leņķi (0 atjauno tekstu); Slīpi — pagarinājuma līniju leņķi no X ass (Enter = nav; tikai lineāriem un līdzinātiem izmēriem). `DIMTEDIT` (`DIMTED`): `Izmēra teksts [Pa kreisi (L)/Pa labi (R)/Centrā (C)/Sākums (H)/Leņķis (A)] <Centrā (C)>`. Skatiet [Iestatīt izmēru lielumus](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliasi: `DTU`. `Vienības jauno izmēru tekstā [Zīmējuma vienības (D)/mm/cm/m/km]`, vai ar atlasītiem izmēriem `Vienības atlasīto izmēru tekstā`. Raksta izmērīto garumu šajā vienībā ar vienību aiz tā (DIMLFAC un DIMPOST sufikss); `D` atgriežas pie zīmējuma vienībām. Skatiet [Izmēri mm, cm, m vai km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliasi: `RC`. Izdrukā `Loka garums: … Tips: …`, pēc tam `Norādiet pirmo punktu [Loka garums (A)/Objekts (O)/Taisnstūrveida (R)/Daudzstūrveida (P)/Brīvs (F)]`. Taisnstūrveida jautā `Norādiet pretējo stūri`; Daudzstūrveida `Norādiet nākamo punktu (Enter aizver mākoni) [Atsaukt (U)]`; Brīvs seko rādītājam līdz klikšķim vai {{key:Enter}}; `O` jautā `Atlasiet objektu` un `Apgriezt virzienu? [Jā (Y)/Nē] <N>` un pārvērš objektu mākonī. `A` jautā `Norādiet katra loka garumu`. `R`, `P` un `F` izvēlas tipu nākamajam mākonim. Rezultāts ir slēgta polilīnija no lokiem.

### MLEADER

Aliasi: `MLD`; vai {{ui:Norāde}}. `Norādiet norādes bultiņas vietu [Bultiņas izmērs/Nolaišanās attālums]`, `Norādiet norādes nolaišanās vietu`, pēc tam teksts vietā esošajā lodziņā (vai, bez tā, `Ievadiet tekstu (tukša rindiņa beidz)`). Saglabāts kā īsta daudzkārtēja norāde DWG; DXF saglabā līnijas, bultiņu un tekstu, ko tas zīmē.

## Parametriskais

Skatiet [Ierobežot zīmējumu](topic:constraints) un [Izmantot parametrus un vienādojumus](topic:parameters). Ierobežojumi darbojas cilnē {{ui:Modelis}}.

### GEOMCONSTRAINT un GC komandas

Aliass `GCON`: `Ievadiet ierobežojuma tipu [Horizontāls/Vertikāls/Perpendikulārs/Paralēls (PA)/Tangenss/Sakrītošs (C)/Koncentrisks (CON)/Kolineārs (COL)/Simetrisks/Vienāds (E)/Fiksēts] <Horizontāls>`, pēc tam tās komandas uzvednes.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Atlasiet objektu [2 punkti (2P)] <2 punkti (2P)>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Atlasiet pirmo objektu`, `Atlasiet otro objektu` (otrais pārvietojas).
- {{cmd:GCCOINCIDENT}}: `Atlasiet pirmo punktu [Objekts/Automātiski ierobežot (A)] <Objekts>`, `Atlasiet otro punktu [Objekts] <Objekts>`.
- {{cmd:GCFIX}}: `Atlasiet punktu [Objekts] <Objekts>`.
- {{cmd:GCSYMMETRIC}}: `Atlasiet pirmo objektu [2 punkti (2P)] <2 punkti (2P)>`, `Atlasiet otro objektu`, `Atlasiet simetrijas līniju`.

### DIMCONSTRAINT un DC komandas

Aliass `DCON`: `Atlasiet asociatīvo izmēru pārvēršanai [Lineārs (LI)/Horizontāls/Vertikāls/Līdzināts (AL)/Leņķisks (AN)/Rādiuss (RA)/Diametrs/Pārvērst (C)] <Līdzināts (AL)>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Norādiet pirmo ierobežojuma punktu [Objekts] <Objekts>`, `Norādiet otro ierobežojuma punktu`, `Norādiet izmēra līnijas vietu`, `Izmēra teksts <d1=40>` (skaitlis, izteiksme vai `nosaukums=izteiksme`).
- {{cmd:DCALIGNED}}: kā iepriekš, ar `[Objekts/Punkts un līnija/2 līnijas]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Atlasiet loku vai riņķi`. {{cmd:DCANGULAR}}: `Atlasiet pirmo līniju vai loku`, `Atlasiet otru līniju`.
- {{cmd:DCCONVERT}}: `Atlasiet izmērus pārvēršanai`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Atlasiet objektus [Iestatījumi (S)]`. `S` jautā attāluma un leņķa pielaides.
- {{cmd:DELCONSTRAINT}} (aliass `DELCON`): `Atlasiet objektus`; to ierobežojumi tiek noņemti.
- {{cmd:CONSTRAINTBAR}} (aliass `CBAR`): `Atlasiet objektus [Rādīt visus/Slēpt visus]`, pēc tam `[Rādīt/Slēpt]`.
- {{cmd:DCDISPLAY}}: `Ievadiet opciju [Rādīt/Slēpt]`.

### PARAMETERS un -PARAMETERS

{{cmd:PARAMETERS}} (aliasi `PAR`, `PARAM`) atver {{ui:Parametri}} paneli. `-PARAMETERS`: `Ievadiet opciju [Jauns (N)/Rediģēt (E)/Pārdēvēt (R)/Dzēst/?] <?>`.

### SWBOUT

Aliass `SWMACRO`. Lejupielādē makro (.swb), kas SolidWorks atjauno modeli kā vienu ierobežotu skici. Skatiet [Pārvietot skices uz citiem detaļu modelētājiem un no tiem](topic:solidworks-sketches).

## Bloki

### ANNOSCALE

Aliasi: `CANNOSCALE`. Pasaka zīmējuma anotāciju mērogu un cik anotatīvo objektu tas satur, pēc tam jautā `Jauns anotācijas mērogs`: ierakstiet `1:50`, `1:100`, `2:1`, vienkāršu skaitli (`50` ir 1:50) vai viena no zīmējuma paša mērogu nosaukumu. Katrs anotatīvais teksts un izmērs tiek mainīts tā, lai jaunajā mērogā izdrukātos vienādā izmērā, vienā atsaukšanas solī; objekti, kas nav anotatīvi, nemainās. Skatiet [Vienības, lapas un mērogi](topic:units-papers-scales#annotate-by-scale).

### SCALELISTEDIT

Aliasi: `SCALELIST`. `Mērogu saraksts [Pievienot (A)/Rediģēt (E)/Dzēst/Saraksts (L)/Atiestatīt (R)]` līdz {{key:Enter}}. Pievienot: `Mēroga nosaukums`, `Papīra vienības`, `Zīmējuma vienības`. Rediģēt un Dzēst jautā mēroga nosaukumu. Zīmējuma paši mērogi pievienojas skata logu un drukas mērogu sarakstiem un tiek saglabāti ar zīmējumu. Skatiet [Vienības, lapas un mērogi](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT un PEDIT

`SPLINE` (`SPL`): `Splaines pirmais punkts [Metode/Objekts] (Pielāgot punktus)`. Pielāgot: punkti, caur kuriem iet līkne; `Aizvērt`, `Atsaukt`, pēc tam `Sākuma tangenss` un `Beigu tangenss` (punkts vai {{key:Enter}}). Metode › Vadības virsotnes jautā pakāpi (1 līdz 5) un zīmē pēc vadības daudzstūra. Objekts pārvērš polilīnijas splainēs caur to virsotnēm. `SPLINEDIT` (`SPE`): `[Pielāgot dati (F)/Rediģēt virsotni (E)/Pārvērst par polilīniju/Atvērt vai aizvērt (O)/Apgriezt (R)/Atsaukt (U)/Iziet (X)]`; Pielāgot dati `[Pievienot (A)/Dzēst/Pārvietot (M)/Iztīrīt (P)/Tangenses/Iziet (X)]`; Rediģēt virsotni `[Pievienot vadības punktu (A)/Pārvietot (M)/Svars (W)/Iziet (X)]`. `PEDIT` (`PE`): `[Aizvērt (C)/Atvērt (O)/Savienot (J)/Platums (W)/Pielāgot (F)/Splaine/Noņemt līkni (D)/Līniju tipa ģenerēšana (LT)/Apgriezt (R)/Atsaukt (U)/Iziet (X)]`, `M` vairākiem objektiem; līnijas, loki un splaines vispirms tiek piedāvātas kā polilīnijas. Skatiet [Splaines un polilīnijas](topic:splines).

### BLOCK

Aliasi: `B`, `BMAKE`.

- `Ievadiet bloka nosaukumu`. Ja tāds jau ir: `Bloks "…" jau pastāv. Pārdefinēt to? [Jā (Y)/Nē] <N>`.
- `Norādiet ievietošanas bāzes punktu`
- `Atlasiet objektus`. Tie tiek aizstāti ar vienu atsauci uz jauno bloku.

### WBLOCK

Aliasi: `W`, `-WBLOCK`. Ieraksta bloku, dažus objektus vai visu zīmējumu kā jaunu DWG vai DXF failu. `WBLOCK avots [Bloks/Viss zīmējums/Objekti] <Objekti>`:

- **Objekti**: `Norādiet ievietošanas bāzes punktu` (tas kļūst par jaunā zīmējuma sākumpunktu), `Atlasiet objektus`, pēc tam `Faila formāts [DWG/DXF/R12 DXF]` un `Jaunā zīmējuma faila nosaukums`, pēc tam `Ko darīt ar objektiem [Saglabāt/Pārvērst par bloku/Dzēst]`. Pārvērst aizstāj tos ar vienu atsauci uz bloku ar faila nosaukumu; Dzēst tos noņem.
- **Bloks**: `Bloks, ko ierakstīt`. Bloka paši objekti, ar tā bāzes punktu kā sākumpunktu, ieskaitot ligzdotos blokus.
- **Viss zīmējums**: katrs objekts modeļa telpā. Lapas netiek ierakstītas; izmantojiet {{cmd:SAVEAS}} kopijai, kas saglabā lapas.

Jaunais fails satur tikai tos slāņus, līniju tipus, tekstu un izmēru stilus un blokus, ko izmanto tā objekti, kā arī zīmējuma vienības. DWG versija ir tā, ko {{cmd:SAVEAS}} pēdējo reizi izmantoja. Pārlūkā fails tiek lejupielādēts; Studio atveras saglabāšanas dialogs.

### ATTDEF

Aliasi: `ATT`, `DDATTDEF`, `-ATTDEF`; vai {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Definēt atribūtu}}. Izdrukā režīmus, pēc tam `Ievadiet opciju, ko mainīt (Enter, kad pabeigts) [Neredzams (I)/Konstants (C)/Iepriekš iestatīts (P)]`, `Ievadiet atribūta taga nosaukumu`, `Ievadiet atribūta uzvedni`, `Ievadiet atribūta noklusējuma vērtību` (`Ievadiet atribūta vērtību`, ja konstants), `Norādiet teksta sākuma punktu`, `Norādiet teksta augstumu`, `Norādiet teksta pagriešanas leņķi`. {{cmd:BLOCK}} ņem atribūtu definīcijas blokā.

### EATTEDIT un ATTEDIT

`EATTEDIT` (`DDATTE`, vai veiciet dubultklikšķi uz atsauces ar atribūtiem; {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Rediģēt atribūtus}}): `Atlasiet bloka atsauci ar atribūtiem`, pēc tam dialogs {{ui:Rediģēt atribūtus}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): tā pati atsauce, pēc tam `<uzvedne> (<TAG>) <vērtība>` katram atribūtam; {{key:Enter}} saglabā vērtību. Skatiet [Atribūti](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Kuru bloku atsauču atribūtus atjaunināt [Nosaukums/Atlasīt (S)/Visi (A)] <Atlasīt (S)>`. Vērtības saglabājas; jauniem atribūtiem tiek piešķirta noklusējuma vērtība, noņemtie tiek dzēsti, novietojumi tiek atiestatīti.

### BATTMAN

{{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Atribūtu pārvaldnieks}}. Dialogs: bloks, atribūti (tags, uzvedne, noklusējums, režīmi, secība), {{ui:Atjaunināt atsauces (vērtības saglabātas)}}, {{ui:Lietot}}.

### REFEDIT un REFCLOSE

{{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Rediģēt vietā}}. `REFEDIT`: `Atlasiet bloka atsauci rediģēšanai vietā` (vai atlasi). `REFCLOSE`: `Saglabāt izmaiņas "…" [Saglabāt/Atmest] <Saglabāt>`; joslas {{ui:Saglabāt bloku}} un {{ui:Atmest}} dara to pašu. Visa rediģēšana ir viens atsaukšanas solis. Skatiet [Atribūti](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT un BCLOSE

`BE`; vai {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Rediģēt bloku}}. `Ievadiet rediģējamā bloka nosaukumu <atlasītās atsauces bloks>` atver bloku redaktoru. `BCLOSE` jautā `Aizvērt bloku redaktoru "…" [Saglabāt/Atmest] <Saglabāt>`; baneris {{ui:Saglabāt bloku}} un {{ui:Atmest izmaiņas}} dara to pašu. Viss, kas izdarīts redaktorā, ir viens atsaukšanas solis.

### VIEWBASE

Aliass: `FLATSHOT`. Plakns 2D skats uz cietiem ķermeņiem 3D cilnē: `Skats [Priekšā (F)/Augšā (T)/Pa labi (R)/Pa kreisi (L)/Aizmugurē (BA)/Apakšā (BO)/Izometrija]`, `Paslēptās līnijas [Rādīt/Slēpt]`, mērogs (`1:20`, `2:1`; {{key:Enter}} izvēlas to, kas atbilst lapai), pēc tam skata centrs. Viena bloka atsauce, redzamās malas uz VIEW-VISIBLE, paslēptās punktētas uz VIEW-HIDDEN. Skatiet [Plakni skati uz lapas](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliasi: `-PUBLISH`; vai {{ui:Visas lapas vienā PDF failā}} dialogā {{ui:Drukāt PDF}}. `Lapas drukāšanai [Visas (A)/Dažas (S)]`: {{key:Enter}} drukā katru lapu, `S` jautā nosaukumus, atdalītus ar komatiem. Viens PDF, lapa un grāmatzīme katrai lapai. Skatiet [Visas lapas vienā PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliasi: `SSM`, `SHEETSETMANAGER`. Atved jūs uz kreisā paneļa sadaļu {{ui:Lapu kopa}}: lapas no daudziem zīmējumiem, numurētas un nosauktas, to titulblokus aizpilda no kopas, publicētas kā viens PDF. Skatiet [Lapu kopas](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): izvēlieties DWG vai DXF, pēc tam tā ievietošanas punktu. {{cmd:XREF}} (`XR`, `-XREF`): `Saistītie zīmējumi [?/Pievienot (A)/Pārlādēt (R)/Iekļaut (B)/Atdalīt (D)] (Enter: ?)`; ar vairāk nekā vienu saiti izvēlieties vienu no tās atsaucēm vai ierakstiet `N` un tās nosaukumu. Skatiet [Saistītie zīmējumi](topic:files#linked-drawings-external-references).

### COUNT

Aliasi: `BCOUNT`; vai {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Saskaitīt blokus}}. `Atlasiet bloka atsauci skaitīšanai, vai [Visi (A)/Eksportēt] (Enter: Visi (A))`: klikšķis atlasa un saskaita katru šā bloka atsauci šajā telpā; {{key:Enter}} vai `A` uzskaita visus; `E`, pēc tam `C` (skaits) vai `A` (atribūti), lejupielādē CSV. Skatiet [Saskaitīt blokus un eksportēt specifikāciju](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliasi: `I`, `DDINSERT`.

- `Ievadiet bloka nosaukumu vai [Fails/Bibliotēka (L)] <pēdējais bloks>` (burtu reģistrs nav svarīgs). `F` jautā DWG vai DXF, pēc tam visu zīmējumu vai vienu no tā blokiem; jau izmantots nosaukums jautā {{ui:Paturēt esošos}} vai {{ui:Pārdēvēt}}. `L` atver bibliotēkas paneli.
- `Norādiet ievietošanas punktu [Mērogs (S)/Pagriezt (R)]`. `S` jautā `Norādiet mēroga koeficientu`, `R` jautā `Norādiet pagriešanas leņķi`; abi tiek atcerēti.
- Pēc tam `Ievadiet <uzvedne> (<TAG>) <noklusējums>` katram atribūtam, ko bloks prasa. Skatiet [Bloku atribūti](topic:attributes).

### LIBRARY

Aliasi: `LIB`. Atver bibliotēkas paneli: novieto vienumus, pārbauda atjauninājumus, bibliotēkas atzinības. Nejautā neko. Skatiet [Ievietot no faila vai bibliotēkas](topic:insert-from-file-and-library).

### STEELMEMBER

Aliasi: `SMEMBER`; vai {{ui:3D elements}} bibliotēkas cilnē {{ui:Standarta}}. `Profila izmērs <W12x26>` (kā to rāda cilne), pēc tam `Sākuma punkts [Kolonna (C)]` un `Beigu punkts`: cieta sija 3D cilnē starp abiem punktiem, novietota uz zemes. `C` jautā kolonnas bāzes punktu un tās augstumu. Viens atsaukšanas solis. Skatiet [Novietot tērauda profilus un standarta detaļas](topic:steel-and-standard-parts).

### PARTSLIST

Aliasi: `PLIST`. `Detaļu saraksta augšējais kreisais stūris`, pēc tam `Teksta augstums <2.5>`: zīmē tabulu ar katru standarta detaļu un tērauda profilu, kas novietots no bibliotēkas (pozīciju numuri, daudzums, detaļa, standarts, izmērs, garums, materiāls, masa). Viens atsaukšanas solis. Skatiet [Novietot tērauda profilus un standarta detaļas](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliasi: `PU`. Noņem bloku definīcijas, ko nekas neizmanto. Nejautā neko.

### DELBLOCKS

Vai {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Dzēst blokus}}. `Atlasiet bloku dzēšanai [Nosaukums/Iziet (X)]`: norādiet bloka atsauci, vai `N` sarakstam ar blokiem ar filtru (izvēlieties vairākus), vai `X` / {{key:Enter}}, lai beigtu. Katra atsauce iet — modelī, katrā lapā un citos blokos — un pēc tam definīcija, un komandrindā tiek pateikts, kas tika dzēsts un kas ne. Bezvārda bloki un saistītie zīmējumi netiek piedāvāti. Uzvedne atgriežas nākamajam blokam; visa komanda ir viens atsaukšanas solis.

## Lapas un drukāšana

### LAYOUT

Aliasi: `LO`, `NEWLAYOUT`; vai poga {{ui:+}} zem zīmējuma. Jauna lapa ar rāmi, titulbloku un vienu skata logu, ISO A3 (vai Tabloid zīmējumiem collās vai pēdās). Nejautā neko.

### MVIEW

Aliasi: `MV`. Tikai lapā ({{cmd:VPORTS}} lapā dara to pašu).

- `Norādiet skata loga stūri`, `Norādiet pretējo stūri`. Skata logs rāda visu modeli standarta mērogā.

### VPORTS

Aliasi: `VIEWPORTS`. {{cmd:SPLIT}} ir tas pats arī no lapas, un {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Sadalīt blakus}}, {{ui:Sadalīt pa augšu un apakšu}}, {{ui:Četri logi}}, {{ui:Viens logs}} to palaiž. Modelī: `Ievadiet logu skaitu [Viens (SI)/2/3/4] <3>`; `2` jautā `[Horizontāli/Vertikāli] <Vertikāli>` (Vertikāli = blakus); `3` jautā `[Pa kreisi (L)/Pa labi (R)] <Pa labi (R)>` (kur iet lielais logs). Katrs logs saglabā savu skatu un telpu; klikšķis padara logu aktīvu. Lapā tas ir {{cmd:MVIEW}}. Skatiet [Sadalīt ekrānu](topic:split-screen).

### VPVIEW

Nav aliasu. Tikai lapā.

- `Atlasiet skata logu` (izlaists, ja viens ir atlasīts), pēc tam modelī: `Norādiet rādāmā loga pirmo stūri`, `Norādiet pretējo stūri`.

### UCS

Nav aliasu. Jūsu pašu koordinātu sistēma; nav rediģēšana. `Norādiet UCS sākumpunktu [Nosaukta (NA)/Objekts (OB)/Iepriekšējā (P)/Pasaule (W)/Z/3 punkti (3P)] <Pasaule (W)>`: punkts ir jauns sākumpunkts, pēc tam `Norādiet punktu uz X ass (Enter saglabā leņķi)`. `Z`: `Norādiet pagriešanas leņķi ap Z asi <90>`. `3`: sākumpunkts, punkts uz pozitīvās X ass, punkts pozitīvās Y puses. `OB`: `Atlasiet objektu UCS izlīdzināšanai`. `NA`: `[Atjaunot/Saglabāt/Dzēst/?]` un nosaukums. Skats pagriežas tā, lai jaunā X ass būtu horizontāla. Skatiet [Pagriezt skatu un izmantot savas koordinātas](topic:ucs-and-turned-view).

### PLAN

Nav aliasu. `Ievadiet opciju [Pašreizējā ucs (C)/Ucs/Pasaule (W)] <Pašreizējā ucs (C)>`: pagriež aktīvā loga skatu tā, lai UCS X ass (vai pasaules) būtu horizontāla. Zīmējumā nekas nepārvietojas.

### TURNLEFT, TURNRIGHT, TURNWORLD

Nav aliasu; vai {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Pagriezt skatu par 90° pa kreisi}}, {{ui:Pagriezt skatu par 90° pa labi}}, {{ui:Atpakaļ pasaulē}}. Tas pats, kas `UCS Z -90`, `UCS Z 90` un `UCS W`, ar skatu, kas seko.

### VPLAYER

Nav aliasu. Lapā vai skata logā. `Ievadiet opciju [?/Sasaldēt (F)/Atsaldēt (T)/Atiestatīt (R)/Vpvisdflt]`: `F`, `T`, `R` jautā slāņu nosaukumus (komati, `*` un `?` aizstājējzīmes), pēc tam `[Visi (A)/Atlasīt (S)/Pašreizējais (C)] <Pašreizējais (C)>` logus; Atiestatīt atjauno katru slāni uz tā noklusējumu „sasaldēts jaunos logos”; `V` iestata šo noklusējumu (`[Sasaldēts (F)/Atsaldēts (T)]`), ko izmanto {{cmd:MVIEW}}. `?` uzskaita slāņus, kas sasaldēti pašreizējā logā. Slāņu paneļa logu kolonna dara to pašu vienam logam. Skatiet [Sasaldēt slāni vienā logā](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliasi: `MS`; vai veiciet dubultklikšķi skata logā. Tikai lapā. Strādāt ar modeli caur skata logu: izvēlēto, vienīgo lapā vai `Noklikšķiniet skata logā, lai strādātu`. Panorēšana un tālummaiņa iekšā maina skata loga skatu (bloķēts saglabā to, un lapa pārvietojas); jaunais skats tiek ierakstīts kā viens atsaukšanas solis. Skatiet [Strādāt ar modeli caur skata logu](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliasi: `PS`; vai veiciet dubultklikšķi ārpus skata loga, vai noklikšķiniet cilni zem zīmējuma. Atpakaļ uz lapu.

### PLOT

Aliasi: `PRINT`, `PUBLISH`, `EXPORTPDF`; vai {{key:Mod+P}}. Atver dialogu {{ui:Drukāt PDF}}. Skatiet [Drukāt PDF](topic:plot-pdf).

### PLOTSTYLES

Aliasi: `STYLESMANAGER`, `PSTABLES`; vai {{ui:Rediģēt tabulas…}} dialogā {{ui:Drukāt PDF}}. Atver {{ui:Drukas stila tabulas}}: ko katra krāsa drukā kā (krāsa, pelēks, tinte, līnijas platums), saglabāts ar zīmējumu. Skatiet [Drukas stila tabulas](topic:plot-pdf#plot-style-tables).

## Pārbaude

### CAL

Izdrukā aprēķina vērtību, kā tā tiktu nolasīta jebkur, kur ievada garumu.

- `Izteiksme`: ierakstiet to, piemēram, `12'6"+3/4"` vai `(24'-0")/3`, un nospiediet {{key:Enter}}. CadCraft izdrukā `= 12'-6 3/4"   (150.75 zīmējuma vienības)`. Skatiet [Aritmētika ierakstītā vērtībā](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliasi: `DI`; vai {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Mērīt attālumu}}.

- `Norādiet pirmo punktu`, `Norādiet otro punktu`. Izdrukā attālumu, leņķi, Delta X un Delta Y.

### AREA

Aliasi: `AA`; vai {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Laukums}}. Izdrukā laukumu un perimetru.

- `Norādiet pirmo stūra punktu [Objekts/Pievienot laukumu (A)/Atņemt laukumu (S)] <Objekts>`
  - Noklikšķiniet vai ierakstiet stūrus; pie `Norādiet nākamo punktu (Enter aizver) [Atsaukt (U)]` nospiediet {{key:Enter}}, lai aizvērtu kontūru. `U` atsauc pēdējo stūri.
  - {{key:Enter}} vai `O`, pēc tam `Atlasiet objektu`: riņķis (izdrukā tā apkārtmēru), elipse, polilīnija (atvērta tiek aizvērta ar taisnu līniju laukumam, un tās garums tiek izdrukāts) vai svītrojums (caurumi tiek atskaitīti).
  - `A` (Pievienot laukumu) un `S` (Atņemt laukumu) uztur skrienošu kopsummu: uzvedne sākas ar `(PIEVIENOŠANAS režīms)` vai `(ATŅEMŠANAS režīms)`, katrs laukums tiek pievienots vai atņemts, un pēc katra tiek izdrukāts `Kopējais laukums = …`. Šajos režīmos `O` izvēlas objektus līdz {{key:Enter}}, un {{key:Enter}} pirmajā uzvednē beidz komandu.

### MEASUREGEOM

Aliasi: `MEA`. `Ievadiet opciju [Attālums (D)/Rādiuss (R)/Leņķis (A)/Laukums (AR)] <Attālums (D)>`; pēc katra mērījuma tas jautā atkal, ar `Iziet (X)` kā noklusējumu.

- `D`: divi punkti, kā {{cmd:DIST}}.
- `R`: `Atlasiet loku vai riņķi`; izdrukā rādiusu un diametru.
- `A`: loks (tā ietvertais leņķis), līnija un pēc tam otra līnija (leņķis starp tām virzienā uz to tālajiem galiem), vai {{key:Enter}} un trīs punkti (virsotne, pēc tam abi gali).
- `AR`: kā {{cmd:AREA}}, viens laukums.

### ID

Nav aliasu. `Norādiet punktu`; izdrukā tā X un Y.

### LIST

Aliasi: `LI`, `LS`. `Atlasiet objektus`; izdrukā katra objekta tipu, slāni un galvenos mērījumus.

## Skats, fails un citi

### ZOOM

Aliasi: `Z`.

- `Norādiet loga stūri, ievadiet mēroga koeficientu (nX) [Robežas (E)/Viss (A)/Logs (W)/Iepriekšējais (P)/Mērogs (S)/Centrs]`. Noklikšķiniet divus stūrus logam. `E`, `A` vai Enter: viss zīmējums.
- `P` (Iepriekšējais, vai {{ui:Iepriekšējais}} rīkjoslā) atgriež uz iepriekšējo skatu, līdz 10 skatiem katrā cilnē; virkne ritināšanas soļu vai viena panorēšana skaitās kā viens skats.
- Skaitlis, piemēram, `2`, `2x` vai `0.5x` (vai `S` un pēc tam skaitlis), tālina vai attālina par šo koeficientu ap ekrāna vidu.
- `C` jautā `Norādiet centra punktu` un `Ievadiet augstumu vai palielinājumu (nX)`.

### PDFATTACH, PDFIMPORT un PDF komandas

Aliasi: `PDFATT` priekš {{cmd:PDFATTACH}}, `PDFIM` priekš {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} novieto PDF lapu zem zīmējuma (fails, lapa, ievietošanas punkts, mērogs, pagrieziens); {{cmd:PDFIMPORT}} pārvērš lapas līnijas, līknes, aizpildījumus un tekstu zīmējuma objektos slāņos ar nosaukumiem pēc PDF, patiesajā izmērā, ievadītā mērogā vai mērogotus pēc diviem punktiem un reāla attāluma. {{cmd:PDFCLIP}} apgriež pamatni, {{cmd:PDFADJUST}} iestata izbalinājumu, kontrastu, monohromu vai izslēdz to, {{cmd:PDFLAYERS}} pārslēdz PDF paša slāņus, un {{cmd:PDF}} atkal dod CadCraft failus, ko zīmējuma pamatnes izmanto. Skatiet [PDF pamatnes](topic:pdf-underlay).

### AUTOCOMPLETE

Aliasi: `AUTOC`. Zīmējuma automātiskā aizpildīšana: kad nekas netiek komandēts, pelēks spoks rāda, ko jūsu zīmējuma paši raksti liek nākt tālāk. {{cmd:AUTOCOMPLETE}} ieslēdz `On` vai izslēdz `Off` (arī Iestatījumi › CadCraft) vai `Show` parāda, ko tas ieteiktu tagad. **Tab** zīmē spoku kā vienu atsaukšanas soli, **Esc** to noraida, līdz zīmējums mainās. Tas atrod trīs lietas jaunākajos objektos: nākamo kopiju kaut kam, kas zīmēts divreiz vai biežāk ar vienmērīgu soli (stabiņi, kolonnas, kāpņu stāvvieta un solis), nākamos polilīnijas kāpņu soļus un trūkstošo malu istabai vai sienu ķēdei. Vidū {{cmd:LINE}} vai {{cmd:PLINE}} spoks ir **nākamais punkts**: kāpņu nākamais solis (stāvvieta, solis, stāvvieta…), taisnstūra ceturtais stūris, punkts, kas to aizver, vai vēl viens vienāds solis. Pietuviniet kursoru un nospiediet **Tab**, it kā noklikšķinātu tur; turpiniet vai nospiediet Enter. Izstrādāts šajā datorā ar noteikumiem, bez modeļa.

### AUTOSHEET

Aliasi: `ASH`. Lapas, kas izkārtojas pašas. {{cmd:AUTOSHEET}} ņem zīmējuma daļas (jūsu nosauktos skatus vai atsevišķās modeļa daļas vai visu modeli), izvēlas papīra izmēru (vai to, ko dodat), katram gabalam piešķir standarta mērogu (vienu mērogu visiem vai lielāko, ko katrs var ietvert) un izvieto skatus rindās jaunās lapās ar titulbloku un parakstu (nosaukums un mērogs) zem katra. Ko nevar ietilpināt vienā lapā, saņem savu lapu. Viens atsaukšanas solis. Izstrādāts šajā datorā ar noteikumiem, bez modeļa.

### PHOTOSKETCH

Aliasi: `PSK`. Fotoskice uz zīmējumu. Izvēlieties fotogrāfiju (JPEG, PNG vai TIFF) ar roku skici uz papīra lapas. {{cmd:PHOTOSKETCH}} atrod lapas četrus stūrus, iztaisno perspektīvu, paņem papīra izmēru, ko nosaucat (`Paper` vai tuvāko standarta), un skices `Scale` (1 : n), pēc tam izseko pildspalvas līnijas līnijās, lokos un riņķos, katrai pildspalvas krāsai savu slāni (melna, sarkana, zila, zaļa). Ja tas nevar atrast papīra malu, tas paņem visu fotogrāfiju kā lapu un to pasaka. Burti netiek iekļauti. Viens atsaukšanas solis. Izpildīts šajā datorā ar klasisko attēlu apstrādi, bez modeļa, nekas nekur nenosūtīts. Skatiet arī skenētu zīmējumu komandas.

### AUTODIM

Aliasi: `ADIM`. Automātiska izmēru noteikšana pēc noteikumiem. {{cmd:AUTODIM}} izmēra atlasītos objektus (vai visu zīmējumu) pēc to horizontālajām un vertikālajām malām: izmēru ķēde gar malām, ko izvēlaties (`Sides`), viens kopējais izmērs ārpusē, katra atvēruma platums (atstarpe starp kolineārām sienu līnijām), diametrs katram caurumu izmēram, un ar `Grid` atstarpe starp režģa līnijām. Izmērs, kas jau ir, netiek veidots atkal. Viens atsaukšanas solis. Izstrādāts šajā datorā ar noteikumiem, bez modeļa.

### GRIDMOVE

Aliasi: `GM`. Režģa līnijas pārvietošana nes līdzi to, kas tai karājas. {{cmd:GRIDMOVE}} pārvieto režģa līniju (līniju slānī, kura nosaukums ir grid vai axis) un to, kas tai pieķeras: sienas ar galu uz līnijas stiepjas, lai sekotu tai; sienas gar to pārvietojas veselas; kolonnas (bloku atsauces un riņķi uz līnijas), tās burbulis un birka pārvietojas; un izmēri, kuru punkti atrodas uz tās, mēra jauno atstarpi. Dodiet divus punktus (skaitās tikai daļa šķērsām pār līniju) vai `Attālums`. Viens atsaukšanas solis atgriež visu. Izdarīts pēc noteikumiem šajā datorā.

### DETAILS

Aliasi: `DET`. Detaļas, kas atrod jūs. {{cmd:DETAILS}} glabā jūsu firmas pašas detaļas: `Pievienot` ieliek šī zīmējuma bloku sarakstā, `Saraksts` un `Noņemt` to pārvalda, `Atrast` tās rindo atlasītajam (vai tam, ko pēdējo zīmējāt) pēc vārdiem slāņos, bloku nosaukumos, svītrojumu rakstos un piezīmēs, salīdzinot ar katras detaļas nosaukumu un piezīmēm, tāpēc logu galviņa atrod jūsu palodzes apšuvumu. Izvēlieties numuru un punktu, lai to novietotu. Ar ieslēgtu `Padoms` (arī Iestatījumi › CadCraft), izvēloties kaut ko, ko detaļa atbilst, statusa joslā parādās viena rinda. Saraksts tiek glabāts šajā pārlūkā, šajā datorā, un tieši šajā sarakstā meklē. `Dalīties` ieliek to arī jūsu dokumentu mapē (`.cadcraft/firm-details.json`, ar katra bloka zīmējumu): `Saņemt` pievieno to, kas jūsu komandai ir un jums trūkst, `Nosūtīt` pievieno to, kas jums ir un viņiem trūkst, `Abi` dara abus, un nekas netiek noņemts no neviena no pusēm. Vispirms atveriet dokumentu mapi ({{cmd:DOCUMENTS}}); kad šī mape ir Team Cloud Plan mape, visa komanda dala vienu sarakstu. Detaļas vienumam bibliotēkas panelī ir poga **Pievienot manas firmas detaļām**, kas to ieliek tajā pašā sarakstā. Izdarīts šajā datorā pēc vārdiem, bez modeļa.

### SKETCHFIX

Aliasi: `SKF`. Pildspalvas skices kļūst par precīzu ģeometriju. Nospiediet un velciet vienu brīvroku līniju vienlaikus (pildspalva, pele vai pirksts), pēc tam Enter. Katra līnija tiek nolasīta kā līnija, riņķis, loks, taisnstūris vai polilīnija: gandrīz horizontālās un vertikālās līnijas tiek padarītas precīzi horizontālas un vertikālas, slēgta apaļa līnija kļūst par riņķi, slēgta līnija ar četriem taisniem stūriem — par taisnstūri, un līniju gali tiek savilkti kopā un uz tiem galiem, kas jau ir zīmējumā. Viens atsaukšanas solis. Izdarīts šajā datorā pēc noteikumiem, bez modeļa.

### SCANATTACH un skenētu zīmējumu komandas

Aliasi: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} aliasu nav. Tās darbojas ar attēlu, katra viens atsaukšanas solis. {{cmd:SCANATTACH}} ievieto PNG, JPEG, TIFF (viena lapa vai visas) vai PDF lapu, kas ir attēls. {{cmd:SCANSCALE}} mērogo lapu pēc diviem izvēlētiem punktiem un patiesā attāluma. {{cmd:SCANALIGN}} pārvieto un pagriež to uz diviem punktiem (`Mērogot lapu, lai ietilptu` Jā/Nē). {{cmd:SCANDESKEW}} parāda garo līniju leņķi un pagriež lapu, kad jūs `Pieņemt` vai dodat `Vērtība`. {{cmd:SCANCLEAN}} padara to melnbaltu (`Slieksnis` Auto/Adaptīvs/Līmenis, `Traipi`) un `Palaist`. {{cmd:SCANCROP}} patur logu. {{cmd:SCANERASE}} dzēš `Taisnstūris`, `Daudzstūris` vai `Lasso`. {{cmd:SCANTRACE}} izseko līnijas un lokus jaunā slānī (`Pielaide`, `Logs`, `Loki`, `Atlikumi`, `Palaist`) un ziņo, ko atrada un ko atstāja kā rastru. {{cmd:SCANINFO}} uzskaita oriģinālo failu un soļus. {{cmd:RASTERSNAP}} ieslēdz vai izslēdz piesaisti skenēto lapu līnijām. Skatiet tēmu Skenēti zīmējumi un izsekošana.

### REGEN un REGENALL

Aliasi: `RE` priekš {{cmd:REGEN}}, `REA` priekš {{cmd:REGENALL}}. Atjaunot ekrānā redzamo no zīmējuma: {{cmd:REGEN}} cilni, kuru skatāt (lapā arī modeli, ko tās skata logi rāda), {{cmd:REGENALL}} katru cilni, katru ekrāna daļu un katru atvērto zīmējumu. Izmantojiet, kad attēls šķiet novecojis pēc skriptēta vai ļoti liela izmaiņas, vai kad asistents rediģējis zīmējumu; pats zīmējums nav aizskarts, tāpēc nav nekā atsaucams.

### NAMEDVIEW

Aliasi: `NV`, `VIEWS`. `Ievadiet opciju [?/Atjaunot (R)/Saglabāt/Logs (W)/Dzēst] <Atjaunot (R)>`, pēc tam skata nosaukums. `S` saglabā ekrānā esošo skatu, `W` — logu, ko izvēlaties, `R` parāda saglabātu skatu, `D` dzēš vienu, `?` uzskaita šīs cilnes skatus. Saglabājot zem esoša nosaukuma, tas tiek aizstāts; katra izmaiņa ir viens atsaukšanas solis. Skati pieder cilnei, kurā tie tika saglabāti. DWG un DXF faili tos saglabā (VIEW tabula); lapu skati atgriežas pirmajā lapā, jo fails nenorāda, kura.

### UNDO un REDO

Aliasi: `U` priekš {{cmd:UNDO}}; {{cmd:REDO}} aliasu nav. Arī {{key:Mod+Z}} un {{key:Mod+Y}}.

### LAYER

Aliasi: `LA`. Pāriet uz {{ui:Slāņi}} paneli.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Ievadiet līniju tipu jauniem objektiem` — `ByLayer`, `ByBlock` vai nosaukums (`?` uzskaita: Continuous, zīmējuma paši, un DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE ar to `2` (puse) un `X2` (dubultā) izmēriem). {{cmd:LWEIGHT}} (`LW`): jaunu objektu līnijas platums mm vai `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): zīmējuma līniju tipa mērogs (atsaucams). {{cmd:LWDISPLAY}} (`LWT`): `Rādīt līniju platumus [ON/OFF]` — tas pats, kas poga {{ui:LWT}} statusa joslā. Skatiet [Līniju platumi un līniju tipi](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Ievadiet objekta tipu pārdēvēšanai [Slānis (LA)/Bloks (B)]`, `Ievadiet vecā nosaukuma`, pēc tam jaunais nosaukums; objekti vai atsauces seko. {{cmd:LAYMRG}}: `Atlasiet objektu slānī, ko apvienot, vai [Nosaukums]` līdz {{key:Enter}}, pēc tam `Atlasiet objektu mērķa slānī vai [Nosaukums]` un `Y`. {{cmd:LAYDEL}}: `Atlasiet objektu slānī, ko dzēst, vai [Nosaukums]`, pēc tam `Y`: slānis un katrs objekts uz tā iet (ne slānis 0, DEFPOINTS vai pašreizējais slānis). Katrai komandai viens atsaukšanas solis. Skatiet [Rasējuma kārtošana ar slāņiem](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Slāņi, izvēloties objektus; arī {{ui:Slāņi}} paneļa izvēlnē {{ui:Rīki}}. {{cmd:LAYISO}}: `Atlasiet objektus slānī(os), ko izolēt`, pēc tam {{key:Enter}}: visi pārējie slāņi tiek izslēgti. {{cmd:LAYUNISO}} tos atkal ieslēdz. {{cmd:LAYOFF}} un {{cmd:LAYFRZ}}: `Atlasiet objektu slānī, ko izslēgt` (vai sasaldēt), atkārtoti; `U` atsauc pēdējo, {{key:Enter}} beidz. {{cmd:LAYMCUR}}: `Atlasiet objektu, kura slānis kļūs par pašreizējo`. {{cmd:LAYON}} ieslēdz visus slāņus, {{cmd:LAYTHW}} atsaldē visus slāņus. Katra komanda ir viens atsaukšanas solis. Skatiet [Rasējuma kārtošana ar slāņiem](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} sāk tukšu zīmējumu, un {{cmd:OPEN}} atver DWG vai DXF; katrs ir savā cilnē virs zīmējuma (neskarts jauns zīmējums tiek izmantots, nevis atvērta jauna cilne). Aizverot cilni ar nesaglabātām izmaiņām, vispirms jautā. Skatiet [Sadalīt ekrānu](topic:split-screen).

{{cmd:SAVE}} (aliass `QSAVE`, arī {{key:Mod+S}}) lejupielādē kopiju zīmējuma formātā: DWG, ja tas atvērts no DWG, DXF, ja no DXF. Jauns zīmējums izmanto formātu, kas pēdējo reizi izvēlēts Saglabāt kā šajā pārlūkā, citādi DWG.

{{cmd:SAVEAS}} (arī {{key:Mod+Shift+S}}) atver dialogu {{ui:Saglabāt kopiju kā}}: izvēlieties {{ui:DWG}} (un tā {{ui:Versija}}), {{ui:DXF R12}} vai {{ui:DXF 2000}}, pēc tam {{ui:Saglabāt}}. Izvēle paliek šim zīmējumam un jauniem zīmējumiem šajā pārlūkā.

{{cmd:DXFOUT}} vienmēr lejupielādē DXF R12 kopiju, nemainot formātu, ko izmanto {{cmd:SAVE}}.

Skatiet [Faili: kas atveras, kas saglabājas](topic:files#saving).

### TOUR

Aliasi: `TUTORIAL`. Sāk sešu soļu pirmā zīmējuma ceļvedi no jauna. Skatiet [Darba sākšana](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliasi: `TBDOCK`. `Rīkjoslas pozīcija [Augšā/Apakšā/Pa kreisi/Pa labi]`. Skatiet [Iestatījumi](topic:settings#toolbar-position).

### COMMANDLINE

Aliasi: `CMDLINE`. `Komandrinda [Piestiprināta apakšā/Peldoša/Viena rinda/Rādītās vēstures rindas/Komandu vēsture (F2)]`: piestiprina vai atbrīvo komandrindu, padara to vienas rindas, jautā, cik vēstures rindas rādīt (0 līdz 12), vai atver vēsturi. Skatiet [Iestatījumi](topic:settings#command-line).

### TOPAREA

`Augšējā josla [Standarta/Kompakta]`: joslas virs zīmējuma kā bija vai kompaktas. Skatiet [Iestatījumi](topic:settings#top-area).

### POLARANG

`Ievadiet polārā leņķa soli grādos <90>`: solis, pēc kura līnijas {{ui:Polārs}} izsekošana līdzinās (vairāk par 0, līdz 180). Tiek glabāts šajā pārlūkā.

### UNITS

Aliasi: `UN`. Kā garumi tiek rakstīti un ievadīti.

- `Ievadiet garuma formātu [Zinātniskais/Decimālais/Inženiertehniskais/Arhitektūras/Daļskaitļa] <pašreizējais>`
- Arhitektūras un Daļskaitļa: `Ievadiet mazākās rādāmās daļas saucēju (1, 2, 4, 8, 16, 32, 64, 128 vai 256)`. Pārējiem: `Ievadiet decimāldaļu skaitu (0 līdz 8)`.

Jauni izmēri seko tam. Viens atsaukšanas solis. Tas pats, kas {{ui:Garuma formāts}} un {{ui:Precizitāte}} sadaļā {{ui:Pašreizējie iestatījumi}}; skatiet [Pēdas un collas](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliasi: `GDS`. Skatīt IC izkārtojumu (GDSII plūsmas fails): laboratorijas eksperiments, tikai skatīšanai un mērīšanai.

- Failu izvēlnis ņem `.gds` failu; ar vairākām augšējām šūnām `Ievadiet augšējo šūnu zīmēšanai`.
- Katrs slānis un datu tips kļūst par zīmējuma slāni (`GDS 1`, `GDS 2/5`), atsauces un masīvi tiek novietoti plakani, failā norādītajā lietotāja vienībā (parasti mikrometros). Viens atsaukšanas solis. Nekas netiek simulēts vai pārbaudīts, un fails netiek rakstīts atpakaļ.

### DIAGRAM

Aliasi: `TEXTDIAGRAM`, `T2D`. Diagramma no teksta.

- Lodziņš ņem tekstu (vai vienu rindu ar `;` starp paziņojumiem komandrindā): Mermaid plūsmas diagrammu, PlantUML komponentu diagrammu, D2 vai no-līdz sarakstu.
- `Norādiet diagrammas augšējo kreiso stūri`, pēc tam `Norādiet teksta augstumu`.

Bloki un savienotāji ir parasti objekti slānī `Diagram`, atlasīti, kad beidzas. Viens atsaukšanas solis. Skatiet [Zīmēt diagrammu no teksta](topic:text-to-diagram).

### OLELIST

Aliasi: `OLES`. OLE objekti, ko DWG satur un ko CadCraft nevar novietot pats.

- Uzskaita katru: numurs, tips, izmērs, vai tas saglabāja attēlu.
- `Ievadiet opciju [Novietot/Iziet (X)] <Iziet (X)>`: Novietot jautā numuru, apakšējo kreiso stūri un platumu, un zīmē rāmi ar attēlu. Viens atsaukšanas solis; saglabātais objekts netiek mainīts. Skatiet [Attēli](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliasi: `SHX`. Jūsu pašu SHX fonti.

- `Ievadiet SHX fonta opciju [Mape/Faili/Saraksts/Noņemt/Apgriezt/Notīrīt] <Saraksts>`

{{ui:Mape}} nolasa katru `.shx` mapē (CadCraft Studio; no jauna katrā palaišanā), {{ui:Faili}} ņem izvēlētos failus (pārlūks), {{ui:Apgriezt}} izkārto viena fonta burtus no pēdējā uz pirmo. Teksta stili, kas nosauc ielādētu fontu, zīmē tajā. Skatiet [Zīmēt tekstu savos SHX fontos](topic:shx-fonts).

### LIMITS

Cik liels zīmējums paredzēts.

- `Norādiet apakšējo kreiso stūri vai [ON/OFF] <pašreizējais>`: punkts, `ON` vai `OFF`.
- `Norādiet augšējo labo stūri <pašreizējais>`.

Režģis aizpilda robežas, {{cmd:ZOOM}} Viss tās parāda, un, ja tās ir ieslēgtas ON, punkts ārpus tām tiek noraidīts (`**Outside limits`). Viens atsaukšanas solis; saglabājas DWG un DXF. Skatiet [Iestatīt zīmējuma robežas](topic:drawing-limits).

### AUNITS

Aliasi: `ANGUNITS`. Kā leņķi tiek rādīti un ievadīti.

- `Ievadiet leņķa formātu [Decimālie grādi/Grādi-minūtes-sekundes/Mērnieku azimuti] <pašreizējais>`
- `Ievadiet decimāldaļu skaitu (0 līdz 8)`, vai pārējiem diviem `Ievadiet precizitāti` (0 grādiem, 2 minūtēm, 4 sekundēm, 5 līdz 8 sekunžu decimāldaļām).

Viens atsaukšanas solis; saglabājas DWG un DXF. Tas pats, kas {{ui:Leņķa formāts}} sadaļā {{ui:Pašreizējie iestatījumi}}. Skatiet [Ievadīt un rādīt azimutus un leņķus](topic:bearings-and-angles).

### APPLOAD

Aliasi: `AP`; vai {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Ielādēt lietojumprogrammu…}}. Dialogs {{ui:Ielādēt lietojumprogrammas}}: ielādē `.lsp` rutīnas un `.dcl` dialogu failus, izlādē tos, ielādē vēlreiz no vēstures un Startup Suite. Rutīnas `(defun c:NAME …)` komandas pēc tam darbojas kā jebkura cita. Skatiet [Ielādēt lietojumprogrammas](topic:load-applications) un [Palaist LISP rutīnas](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (vai {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Rediģēt aliasus…}}) atver jūsu aliasu failu (`ALIAS, *COMMAND` rindas); {{ui:Saglabāt}} to piemēro. {{cmd:REINIT}} piemēro vēlreiz. Skatiet [Rediģēt komandu aliasus](topic:command-aliases).

### HELP

Aliasi: `?`. Izdrukā katru komandu, tās aliasus un vienrindas aprakstu komandrindas vēsturē. Tas neatver šo palīdzību: nospiediet {{key:F1}} vai noklikšķiniet {{ui:Palīdzība}}.

## Izvēlēties objektus

Katrā uzvednē `Atlasiet objektus`: noklikšķiniet objektus, zīmējiet logus (no kreisās uz labo) un krustojumus (no labās uz kreiso) ar diviem klikšķiem, vai nospiediet un velciet lasso ({{key:Space}} velkot: logs, krustojums, žogs), {{key:Shift}}+klikšķis noņem, un nospiediet {{key:Enter}}, lai pabeigtu. Varat arī ierakstīt `ALL` (viss), `L` (pēdējais objekts), `P` (Iepriekšējais: ko izmantoja pēdējā komanda), `F` (Žogs: objekti, ko šķērso punktu līnija; `U` atsauc punktu), `W` (Logs), `C` (Krustojums), `R` (Noņemšanas režīms: izvēle izņem objektus; uzvedne rāda `Noņemt objektus`) un `A` (Pievienot vēlreiz). `?` uzskaita tos. Tie nav redzami uzvednē. {{key:Tab}} pār pārklājošiem objektiem izceļ nākamo; noklikšķiniet, lai to izvēlētos. Skatiet [Atlasīt objektus](topic:select-objects).

### ACCESS

Aliasi: `AX`. Zīmēšana bez redzes. {{cmd:ACCESS}} ieslēdz vai izslēdz Access (`On`, `Off`) un pārslēdz piesaistes skaņas (`Sound`) un balss komandas (`Voice`); vispirms pasaka stāvokli. Ar ieslēgtu Access katra komanda un rezultāts tiek runāts caur jūsu ekrāna lasītāju, un zīmēšanas laukumam ir tastatūras kursors. Palīdzības tēmā „Zīmēt bez redzes” ir taustiņi.

### DESCRIBE

Aliasi: `DESC`. Pasaka, ko zīmējums satur: cik objektu, kāda tipa, cik lieli, cik slāņu, kas ir atlasīts. Tikai nolasa; neko nemaina.

### WHEREAMI

Aliasi: `WHERE`. Pasaka, kur atrodas kursors, zīmējuma vienībās.

### NEARBY

Pasaka, kas atrodas tuvu kursoram, tuvākais pirmais, katrs ar savu attālumu un pusi, kurā tas atrodas.

### SAYSEL

Pasaka, kas ir atlasīts, pa vienam teikumam katram objektam (līnijas garums, gali un leņķis; riņķa rādiuss un centrs; teksts, kā tas rakstīts).

### VOICE

Ieslēdz vai izslēdz runātās komandas. Tās tiek atpazītas šajā datorā; ja pārlūks to nevar, balss paliek izslēgta, ja vien Iestatījumos neizvēlaties pārlūka tiešsaistes pakalpojumu.
