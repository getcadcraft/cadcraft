---
title: Komandu atsauce
summary: Katra komanda CadCraft zīmēšanas lietotnē ar tās aliasiem, jautājumiem, ko tā uzdod, opcijām un noklusējumiem.
keywords: komandas, aliasi, komandu saraksts, laukums, perimetrs, measuregeom, līnija, pline, riņķis, loks, apgriezt, nobīdīt, dimlinear, bloks, ievietot, izkārtojums, plot, tālummaiņa, palīdzība, copyclip, cutclip, pasteclip, pasteorig, copybase, dublēt, selectall
from: 979ffe3b
---

Ierakstiet komandas nosaukumu vai aliasu un nospiediet {{key:Enter}} vai {{key:Space}}. Burtu lielums nav svarīgs, un vadošo `_`, `-`, `.` vai `'` ignorē. Ierakstiet `HELP` (vai `?`), lai komandrindas vēsturē izdrukātu īsu sarakstu ar katru komandu; nospiediet {{key:F1}}, lai atvērtu šo palīdzību.

Kā lasīt uzvednes: opcijas ir kvadrātiekavās, un jūs izvēlaties vienu, ierakstot tās lielos burtus (`D` diametram). Noklusējums ir leņķiekavās; nospiediet {{key:Enter}}, lai to pieņemtu. Kur prasīts punkts, varat noklikšķināt vai ierakstīt jebkuru no formātiem, kas minēti [Koordinātu un attāluma ievade](topic:coordinate-entry). Kur prasīts attālums, varat ierakstīt skaitli vai noklikšķināt divus punktus.

Nospiežot {{key:Enter}} tur, kur prasīts punkts vai objekts un noklusējuma nav, komanda beidzas. {{key:Esc}} to atceļ. Jebkas, ko komanda izdarīja, ir viens atsaukšanas solis.

## Zīmēt

### LINE

Aliasi: `L`. Taisni segmenti, katrs ir savs objekts.

- `Norādiet pirmo punktu` ({{key:Enter}}: sākt no pēdējā punkta, ko norādījāt)
- `Norādiet nākamo punktu [Atsaukt (U)]`, atkārtoti. Pēc diviem segmentiem: `[Atsaukt (U)/Aizvērt (C)]`.
- `U` atsauc pēdējo segmentu, `C` aizver līdz pirmajam punktam un beidzas. Enter beidz.

### PLINE

Aliasi: `PL`. Viena polilīnija no līniju un loku segmentiem.

- `Norādiet sākuma punktu`
- `Norādiet nākamo punktu [Loks (A)/Aizvērt (C)/Atsaukt (U)]` (Aizvērt, kad ir divi segmenti)
- `A` pārslēdz uz lokiem: `Norādiet loka galapunktu [Līnija (L)/Aizvērt (CL)/Atsaukt (U)]`. Katrs loks turpinās tangenciāli iepriekšējam segmentam. `L` atgriežas pie līnijām, `CL` aizver ar loku.
- Enter beidz; polilīnija paliek atvērta.

### CIRCLE

Aliasi: `C`.

- `Norādiet riņķa centra punktu [3P/2P/Ttr (tan tan rādiuss)]`
- `Norādiet riņķa rādiusu [Diametrs] <pēdējais rādiuss>`; `D` jautā `Norādiet riņķa diametru`.
- `2P`: diametra abi gali. `3P`: trīs punkti uz riņķa.
- `T` (arī komanda `TTR` un {{ui:Zīmēšana}} › {{ui:Vairāk}} › {{ui:Riņķis: Tan, Tan, Radius}}): `Norādiet objekta punktu pirmajai riņķa tangentei`, otro, tad rādiusu (Enter: pēdējais). Riņķis pieskaras abiem objektiem (līnijām, lokiem, riņķiem, polilīnijas segmentiem, arī blokos); no tiem, kas to dara, tas, kas ir tuvāk jūsu izvēlētajiem punktiem. "Riņķis neeksistē", kad neviens neder.
- `TTT` (vai {{ui:Zīmēšana}} › {{ui:Vairāk}} › {{ui:Riņķis: Tan, Tan, Tan}}): trīs objekti; riņķis, kas pieskaras visiem trim, tas, kas ir tuvāk jūsu izvēlei (trīs līnijas dod iekšējo vai ārējo riņķi atkarībā no tā, kur norādāt).

### ARC

Aliasi: `A`.

- `Norādiet loka sākuma punktu [Centrs]`, `Norādiet loka otro punktu`, `Norādiet loka beigu punktu`: loks caur trim punktiem.
- `C`: `Norādiet loka centra punktu`, `Norādiet loka sākuma punktu`, `Norādiet loka beigu punktu`. Loks iet pretēji pulksteņrādītāja virzienam no sākuma līdz beigām.

### RECTANG

Aliasi: `REC`, `RECTANGLE`. Slēgta polilīnija.

- `Norādiet pirmo stūra punktu`, `Norādiet otru stūra punktu`. Otram stūrim ierakstiet `@platums,augstums`.

### POLYGON

Aliasi: `POL`. Regulārs daudzstūris kā slēgta polilīnija.

- `Ievadiet malu skaitu <4>` (no 3 līdz 1024)
- `Norādiet daudzstūra centru`
- `Ievadiet opciju [Ievilkts riņķī (I)/Apvilkts ap riņķi (C)] <I>`
- `Norādiet riņķa rādiusu`: noklikšķiniet vai ierakstiet punktu; tā attālums nosaka izmēru, un virziens pagriež daudzstūri.

### ELLIPSE

Aliasi: `EL`.

- `Norādiet elipses ass galapunktu [Centrs]`, `Norādiet otra ass galapunktu`, `Norādiet attālumu līdz otrai asij`
- `C`: `Norādiet elipses centru`, `Norādiet ass galapunktu`, tad attālumu līdz otrai asij.
- `I` (`Isocircle`, tikai kamēr {{cmd:ISODRAFT}} ir ieslēgts): centrs, tad rādiuss vai `Diametrs`: elipse, kādu riņķis izskatās pašreizējā izometriskajā plaknē.

### HATCH

Aliasi: `H`, `BH`, `BHATCH`; vai {{ui:Svītrojums}} rīkjoslā. Vispirms izdrukā pašreizējo rakstu, mērogu un leņķi.

- `Norādiet iekšējo punktu [Atlasīt objektus (S)/Raksts (P)/Mērogs (SC)/Leņķis (A)]`, atkārtoti (`Atsaukt (U)`, kad ir laukums): katrs klikšķis pievieno slēgtu laukumu ap to, ar slēgtām formām tā iekšienē kā salām. Enter izveido vienu svītrojumu no visiem.
- `S`: `Atlasiet slēgtus objektus` (slēgtas polilīnijas, riņķi, slēgtas elipses).
- `P`: `Ievadiet raksta nosaukumu, SOLID vai ? sarakstam <pašreizējais>`. `SC`: `Norādiet raksta mērogu`. `A`: `Norādiet raksta leņķi`.
- `G` (Gradients): aizpildījums ir gradients, nevis raksts. Skatiet {{cmd:GRADIENT}} tā jautājumiem.

Skatiet [Svītrojumi un aizpildījumu laukumi](topic:hatch).

### GRADIENT

Aliasi: `GD`. Aizpilda laukumu ar gradientu no vienas vai divām krāsām. Vispirms jautā gradientu, tad turpina kā {{cmd:HATCH}} (`Norādiet iekšējo punktu`, `S` slēgtiem objektiem, {{key:Enter}}, lai pabeigtu).

- `Ievadiet gradienta opciju [Tips (T)/Viena krāsa (O)/Divas krāsas (TW)/Leņķis (A)/Centrēts (C)/Iziet (X)] <X>`, atkārtoti; katrreiz izdrukā gradientu tādu, kāds tas ir tagad.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED` vai viens no tiem apgriezts (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Pietiek ar pirmajiem burtiem.
- `O`: viena krāsa, tad tās toņojums no 0 līdz 1 (0 nosvītro to līdz melnam, 0,5 ir pati krāsa, 1 pārvērš to baltā). `TW`: pirmā un otrā krāsa. Krāsa ir skaitlis no 1 līdz 255, trīs skaitļi, piemēram, `255,128,0`, vai `#rrggbb`.
- `A`: leņķis, kādā gradients iet. `C`: centrēts Jā vai Nē (Nē pārvieto gradienta vidu uz vienu pusi).
- Tā noraida krāsu vai tipu, ko nepazīst, un toni ārpus 0 līdz 1.

{{cmd:HATCHEDIT}} `G` un Rekvizīti (Gradients) vēlāk maina gradientu vai pārvērš jebkuru svītrojumu par to. Gradients tiek zīmēts ekrānā un drukāts. DWG 2004 un jaunākie to saglabā kā īstu gradienta svītrojumu; DXF 2000 un DWG 2000 to saglabā CadCraft vajadzībām, un citas programmas redz cietu aizpildījumu pirmajā krāsā.

### HATCHGENERATEBOUNDARY

Aliasi: `HGB`. Atjauno kontūru no svītrojuma, kas to zaudējis. `Atlasiet svītrojumus` (vai atlasiet tos vispirms), tad `Saistīt katru svītrojumu ar tā jauno kontūru, lai svītrojums tai sekotu? [Jā (Y)/Nē (N)] <Jā>`.

- Katra svītrojuma cilpa kļūst par slēgtu polilīniju uz svītrojuma slāņa; jaunās polilīnijas paliek atlasītas. Izliekta mala atgriežas kā īsi taisni gabali, ko svītrojums saglabā.
- Ar Jā svītrojums seko savai jaunajai kontūrai, kā to dara svītrojums, kas izveidots ar {{cmd:HATCH}}. Viens atsaukšanas solis.
- Tā to pasaka, ja nebija atlasīts neviens svītrojums.

### POINT

Aliasi: `PO`; vai {{ui:Zīmēšana}} › {{ui:Vairāk}} › {{ui:Punkts}}. Punktu objekti, viens katrā klikšķī, līdz Enter.

- `Norādiet punktu`

### XLINE

Aliasi: `XL`; vai {{ui:Zīmēšana}} › {{ui:Vairāk}} › {{ui:Konstrukcijas līnija}}. Konstrukcijas līnijas, bezgalīgas abos virzienos. Skatiet [Konstrukcijas līnijas un stari](topic:construction-lines).

- `Norādiet punktu [Horizontāla/Vertikāla/Leņķis (A)/Bisektrise (B)/Nobīde (O)]`, tad `Norādiet punktu, caur kuru iet` katrai līnijai, līdz Enter.
- `A`: `Ievadiet konstrukcijas līnijas leņķi [Atsauce (R)] <0>`; `R` vispirms jautā `Atlasiet līnijas objektu`.
- `B`: `Norādiet leņķa virsotnes punktu`, `Norādiet leņķa sākuma punktu`, tad `Norādiet leņķa beigu punktu` katrai līnijai.
- `O`: `Norādiet nobīdes attālumu [Caur (T)] <Caur>`, tad `Atlasiet līnijas objektu` un `Norādiet pusi, uz kuru nobīdīt` (vai `Norādiet punktu, caur kuru iet`) katrai līnijai.

### RAY

Nav aliasu; vai {{ui:Zīmēšana}} › {{ui:Vairāk}} › {{ui:Stars}}. `Norādiet sākuma punktu`, tad `Norādiet punktu, caur kuru iet` katram starim, līdz Enter.

### TEXT

Aliasi: `DT`, `DTEXT`; vai {{ui:Teksts}} rīkjoslā. Vienrindas teksts; katra rindiņa ir savs objekts.

- `Norādiet teksta sākuma punktu [Izlīdzinājums (J)]`
- `J`: `Ievadiet opciju [Pa kreisi (L)/Centrs/Pa labi (R)/Vidus (M)/TL/MC] <L>`, tad `Norādiet teksta ievietošanas punktu`
- `Norādiet augstumu <pašreizējais teksta augstums>`
- `Norādiet teksta pagrieziena leņķi <0>`
- `Ievadiet tekstu`, atkārtoti: katrs Enter sāk nākamo rindu zemāk. Enter tukšā rindā beidz. {{key:Space}} šeit ievada atstarpi.

### DIVIDE

Aliass: `DIV`. {{cmd:DIVIDE}} liek atzīmes uz līnijas, loka, riņķa, polilīnijas, splaina vai elipses, kas to sadala vienādās daļās. Izvēlieties objektu, tad dodiet daļu skaitu (no 2 līdz 32767). Atvērtam objektam ir par vienu atzīmi mazāk nekā daļu; slēgtam tiek atzīme arī sākumā. Pats objekts netiek sagriezts. Atzīmes ir punkti; `Bloks` vietā jautā šī rasējuma bloku un to, vai tas pagriežas, lai sekotu objektam. Garumi pa splainiem un elipsēm tiek mērīti pa īsiem akordiem. Tā noraida tekstu, svītrojumus un citus objektus, kam nav garuma.

### MEASURE

Aliass: `ME`. {{cmd:MEASURE}} liek atzīmi ik pēc dotā garuma gar līniju, loku, riņķi, polilīniju, splainu vai elipsi, skaitot no gala, kas ir tuvāk vietai, kur norādījāt (slēgtam objektam — no tā sākuma). Garumu ievadiet ar rakstīšanu vai ar diviem punktiem. Atvērta objekta tālākajā galā atzīme nav. `Bloks` ieliek bloku katrā atzīmē punkta vietā. Tā noraida garumu 0, garāku par objektu un tādu, kas radītu vairāk nekā 32767 atzīmes.

### BOUNDARY

Aliasi: `BO`, `BPOLY`. {{cmd:BOUNDARY}} izveido slēgtu polilīniju ap laukumu, kurā ir jūsu izvēlētais punkts, no visām līnijām, lokiem, riņķiem, polilīnijām un līknēm, kas to ierobežo ekrānā. Gabali, kas atrodas uz loka vai riņķa, atgriežas kā loka segmenti; elipsu un splainu gabali atgriežas kā īsi taisni segmenti. Ar ieslēgtām `Salām` (sākuma iestatījums) katrs slēgts laukums iekšā saņem arī savu polilīniju. Turpiniet izvēlēties punktus; Enter beidz. Objekti, kas ierobežo laukumu, paliek kā ir. Tā to pasaka, ja neviens slēgts laukums nesatur punktu.

### BLEND

{{cmd:BLEND}} zīmē splainu starp divu atvērtu līkņu galiem. Izvēlieties katru līkni tuvu galam, ko savienot. `CONtinuity` izvēlas `Tangent` (splains atstāj un ierodas gar abām līknēm) vai `Smooth` (tas arī liecas tā, kā tās liecas galos); izvēle tiek saglabāta sesijai. Abas līknes netiek mainītas. Tā noraida slēgtus objektus un divus galus, kas jau sakrīt.

### REGION

Aliass: `REG`. {{cmd:REGION}} pārvērš slēgtus objektus reģionos: plakanos laukumos, ko var savienot, griezt un mērīt. Atlasiet riņķus, slēgtas polilīnijas, slēgtas elipses vai slēgtus splainus, vai līnijas, lokus un atvērtas polilīnijas, kas aizveras cilpā gals pie gala; katra cilpa kļūst par vienu reģionu un aizstāj objektus, no kuriem tā radusies. Loki paliek loki; elipses un splaini kļūst par īsiem taisniem segmentiem. Kas nav slēgts un neveido cilpu, paliek kā ir, un tā to pasaka, cik tādu ir. Rasējumā reģions ir viena vai vairākas slēgtas polilīnijas, kas turētas kopā kā nenosaukta grupa, tāpēc klikšķis atlasa visu reģionu, un kopija ir atsevišķs reģions; citas programmas, kas atver failu, redz slēgtas polilīnijas.

Ar reģioniem rasējumā {{cmd:UNION}}, {{cmd:SUBTRACT}} un {{cmd:INTERSECT}} 2D cilnē strādā ar reģioniem: `UNION` apvieno atlasītos reģionus vienā (reģioni, kas ir atsevišķi, kļūst par vienu reģionu ar vairākiem kontūriem), `SUBTRACT` jautā reģionus, no kā atņemt, un tad tos, ko atņemt (caurums paliek reģiona daļa), `INTERSECT` paturē laukumu, ko tie visi dala. Katra pasaka rezultāta laukumu un ir viens atsaukšanas solis. Tās atsakās, ja nekas neatliktu vai nekas nebūtu kopīgs. 3D cilnē un rasējumā bez reģioniem tās pašas komandas darbojas ar cietiem ķermeņiem kā iepriekš.

## Labot

Aliasi: `MT`, `T`; vai {{ui:Rindkopa}} rīkjoslā. Rindkopas teksts, kas ietinas platumā, rakstīts vietā.

- `Norādiet pirmo stūri`
- `Norādiet pretējo stūri [Augstums (H)/Izlīdzinājums (J)/Rindu atstarpe (L)/Pagrieziens (R)/Platums (W)]`: platums starp abiem stūriem ir vieta, kur teksts ietinas. `H` jautā `Norādiet augstumu`, `J` `Ievadiet izlīdzinājumu [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Ievadiet rindu atstarpes koeficientu (no 0,25 līdz 4)`, `R` `Norādiet pagrieziena leņķi`, `W` `Norādiet platumu (0 — bez ietīšanas)` un izlaiž otro stūri.
- Pēc tam rasējumā atveras lodziņš: rakstiet; {{key:Enter}} jaunai rindkopai; {{key:Mod+Enter}} vai klikšķis ārpus lodziņa, lai pabeigtu; {{key:Esc}}, lai atceltu. Tā josla iestata augstumu, rindu atstarpi, platumu un izlīdzinājumu. Skatiet [Pievienot tekstu un uzrakstus](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliasi: `ED`, `DDEDIT`; vai veiciet dubultklikšķi uz teksta. `Atlasiet tekstu rediģēšanai`, atkārtoti līdz {{key:Enter}}: katrs atveras tajā pašā lodziņā. Ja sākts ar atlasītu vai ar dubultklikšķi izvēlētu tekstu, tas rediģē tikai to un beidzas.

### ERASE

Aliasi: `E`, `DELETE`; vai nospiediet {{key:Delete}}, kad objekti ir atlasīti.

- `Atlasiet objektus` (izlaists, ja objekti jau ir atlasīti)

### MOVE

Aliasi: `M`.

- `Atlasiet objektus`
- `Norādiet bāzes punktu [Nobīde (D)]`, `Norādiet otro punktu`
- `D`: `Norādiet nobīdi`, ierakstot to kā `dx,dy`.

### COPY

Aliasi: `CO`, `CP`. Kopijas, cik reižu dodat punktus.

`Masīvs (A)` otrā punkta uzvednē veido rindu vienā reizē: norādiet vienumu skaitu (oriģināls skaitās kā viens), tad punktu, kur iet pirmā kopija; pārējās seko ar tādu pašu attālumu. `Pielāgot (F)` padara šo punktu par pēdējās kopijas vietu, un pārējās izvietojas vienmērīgi starp.

- `Atlasiet objektus`
- `Norādiet bāzes punktu [Nobīde (D)]`
- `Norādiet otro punktu [Atsaukt (U)]`, atkārtoti līdz Enter. `U` atsauc pēdējo kopiju.

### ROTATE

Aliasi: `RO`.

- `Atlasiet objektus`, `Norādiet bāzes punktu`
- `Norādiet pagrieziena leņķi <pēdējais leņķis>`: grādos, pozitīvs pretēji pulksteņrādītāja virzienam; vai noklikšķiniet punktu, lai pagrieztu uz to.

### SCALE

Aliasi: `SC`.

- `Atlasiet objektus`, `Norādiet bāzes punktu`
- `Norādiet mēroga koeficientu`: ierakstiet koeficientu, piemēram, `0.5` vai `2`. Noklikšķināts punkts dod attālumu no bāzes punkta kā koeficientu.

### MIRROR

Aliasi: `MI`.

- `Atlasiet objektus`
- `Norādiet spoguļlīnijas pirmo punktu`, `Norādiet spoguļlīnijas otro punktu`
- `Dzēst avota objektus? [Jā (Y)/Nē (N)] <N>`

### ALIGN

Aliasi: `AL`; vai {{ui:Labot}} › {{ui:Vairāk}} › {{ui:Izlīdzināt}}.

- `Atlasiet objektus`
- `Norādiet pirmo avota punktu`, `Norādiet pirmo mērķa punktu`
- `Norādiet otro avota punktu (Enter — turpināt)`, `Norādiet otro mērķa punktu`
- `Norādiet trešo avota punktu (Enter — turpināt)`, `Norādiet trešo mērķa punktu`
- Ar diviem pāriem: `Mērogot objektus pēc izlīdzināšanas punktiem? [Jā (Y)/Nē (N)] <N>`

Skatiet [Izlīdzināt objektus](topic:modify-objects#align-objects).

### ALIGNTO

- `Atlasiet objektus` (vai atlasi), `Izlīdzināt [Pa kreisi (L)/Centrs/Pa labi (R)/Augšā (T)/Vidū (M)/Apakšā (B)] <Pa kreisi>`, `Uz [Atlase (S)/Pirmais (F)/Pēdējais (L)/Punkts] <Atlase>`; `P` jautā punktu. Atlase paliek.

### DISTRIBUTE

- `Atlasiet objektus` (vismaz trīs), `Sadalīt [Horizontāli/Vertikāli] <Horizontāli>`, `Izvietot vienmērīgi [Centri (C)/Atstarpes] <Atstarpes>`. Ārējie divi paliek; atlase paliek.

### ALIGNPANEL

Aliasi: `ALP`; vai {{ui:Labot}} › {{ui:Vairāk}} › {{ui:Izlīdzināt un sadalīt}}. Atver paneli, kas palaiž ALIGNTO un DISTRIBUTE ar klikšķiem.

### LASER

Aliasi: `LASERCUT`; vai {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Lāzers…}}. Atver Lāzera paneli virs rasējuma: ko dara katrs slānis (griezt, rievot, gravēt, aizpildīt, attēls), priekšskatījumu, GRBL G-kodu, ko saglabāt, un ietvaru un sūtīšanu caur Web Serial. Skatiet [Nosūtīt rasējumu lāzeram](topic:laser-cutting).

### STRETCH

Aliasi: `S`; vai {{ui:Izstiept}}. `Atlasiet objektus izstiepšanai`: velciet krustojošus logus (vai ierakstiet `C`) pāri galiem, lai pārvietotu. `Norādiet bāzes punktu [Nobīde (D)]`, `Norādiet otro punktu`. Punkti logu iekšienē pārvietojas: līniju gali, polilīniju virsotnes (loka segmenti saglabā savu augstumu), izmēru punkti; riņķi, elipses, teksts, punkti un bloki pārvietojas veseli, kad to centrs vai ievietošanas punkts ir iekšā. Atlase, kas izveidota pirms komandas, saglabā krustojošos logus (un lasso), kas to izveidoja, tāpēc tie izstiepjas tāpat. Bez loga objekti pārvietojas veseli.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliasi: `AR`; vai {{ui:Masīvs}}. `Atlasiet objektus`, tad `Ievadiet masīva tipu [Taisnstūra/POlārs (PO)] <Taisnstūra>` (tikai ARRAY).

- Taisnstūra masīvs sākas ar 4 kolonnām × 3 rindām, attālums ir 1,5 reizes lielāks par objektu izmēru, un tas tiek rādīts kā priekšskatījums. `Ievadiet opciju [Skaits (COU)/Attālums (S)/Kolonnas (COL)/Rindas (R)/Iziet (X)] <X>`: `COU` jautā kolonnas un rindas, `S` attālumus starp kolonnām un starp rindām (negatīvs iet pa kreisi vai uz leju), `COL` un `R` pa vienam virzienam katrs.
- Polārais jautā `Norādiet masīva centra punktu`, sākas ar 6 vienumiem visapkārt, pagriezts. `Ievadiet opciju [Vienumi (I)/Aizpildīt leņķi (F)/Pagriezt vienumus (ROT)/Iziet (X)] <X>`: `I` vienumi, `F` leņķis, ko aizpildīt (+ pretēji pulksteņrādītāja virzienam, − pulksteņrādītāja virzienā), `ROT` Jā vai Nē.
- {{key:Enter}} (Iziet) izveido kopijas kā parastus objektus. Viens atsaukšanas solis.
- `AS` (Asociatīvs) pārslēdz starp parastām kopijām un masīvu, ko var rediģēt: viens objekts, ko vēlāk mainīt ar {{cmd:ARRAYEDIT}}, ar tā rokturiem vai Rekvizītos. Izvēle tiek atcerēta ({{cmd:ARRAYASSOCIATIVITY}}); sākas ar parastām kopijām.

### ARRAYPATH

Kopijas gar līkni. `Atlasiet objektus`, tad `Atlasiet ceļa līkni`: līnija, loks, riņķis, elipse, polilīnija vai splains (nevis viens no masīvā ievietotajiem objektiem). Ceļš sākas tajā galā, kas ir tuvāk objektiem, un pirmais vienums ir objekti tur, kur tie atrodas.

- `Ievadiet opciju [Metode (M)/Vienumi (I)/Attālums (SP)/Izlīdzināt (AL)/Asociatīvs (AS)/Iziet (X)] <X>`, ar priekšskatījumu. `M`: `Dalīt` izkārto vienumus vienmērīgi pa visu ceļu, `Mērīt` liek vienu ik pēc noteikta garuma. `I`: vienumu skaits (ar Mērīt 0 nozīmē, cik vien iederas; skaitlis, kas pārsniedz ceļa galu, tiek ierobežots līdz tam, kas iederas). `SP`: attālums starp vienumiem pa ceļu (pārslēdz uz Mērīt). `AL`: Jā pagriež katru vienumu, lai tas seko ceļam; Nē tur tos taisni.
- `AS` kā {{cmd:ARRAY}}. Ieslēgts masīvs glabā savu ceļa formas kopiju: ceļa līknes rediģēšana pēc tam nepārvieto vienumus.
- Tas noraida ceļu, kas nav līkne, un vienu vienumu.

### ARRAYEDIT

Maina masīvu, kas izveidots ar Asociatīvs. `Atlasiet masīvu` (vai atlasiet to vispirms). Tā izdrukā, kāds masīvs ir tagad, un tad jautā līdz {{key:Enter}}:

- Taisnstūra: `COL` kolonnas un to attālums, `R` rindas un to attālums, `A` leņķis, kādā iet kolonnas.
- Polārais: `I` vienumi, `F` aizpildīšanas leņķis, `ROT` pagriezt vienumus Jā vai Nē.
- Ceļš: `M` Dalīt vai Mērīt, `I` vienumi, `SP` attālums, `AL` izlīdzināt ar ceļu.
- `S` (Avots) atver objektus, ko masīvs atkārto, atsevišķi, kā bloku redaktors. Zīmējiet un rediģējiet tur; {{cmd:ARRAYCLOSE}} saglabā vai atmet, un visi vienumi seko.
- `REP` (Aizstāt): `Atlasiet aizstājošos objektus`, `Norādiet aizstājošo objektu bāzes punktu`, tad noklikšķiniet uz vienumiem, ko aizstāt, {{key:Enter}}. Šie vienumi rāda aizstājēju; aizstājošie objekti pamet rasējumu un dzīvo masīvā. `RES` (Atiestatīt) atkal rāda avota objektus katrā vienumā.
- Katra izmaiņa ir viens atsaukšanas solis. Tā noraida parastās kopijas, parastu bloka atsauci un masīvu bloķētā slānī.

Tie paši skaitļi ir Rekvizītos sadaļā Masīvs, un masīvam ir roktura punkti: tā bāzes punkts to pārvieto, rokturis otrajā vienumā iestata attālumu, rokturis aiz pēdējā vienuma iestata skaitu (polārajam: otrais vienums iestata, cik vienumu, pēdējais — aizpildīšanas leņķi). {{cmd:EXPLODE}} pārvērš masīvu atpakaļ parastās kopijās.

### ARRAYCLOSE

Beidz {{cmd:ARRAYEDIT}} avotu: `Saglabāt izmaiņas masīva avota objektos? [Saglabāt (S)/Atmest (D)] <Saglabāt>`. Tā to pasaka, ja neviens masīva avota objekts nav atvērts. {{cmd:BCLOSE}} dara to pašu.

### ARRAYASSOCIATIVITY

`Ievadiet jaunu vērtību ARRAYASSOCIATIVITY (1 = masīvi paliek rediģējami, 0 = parastas kopijas)`. Nosaka, ar ko sākas {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR un {{cmd:ARRAYPATH}}; to opcija `AS` maina to pašu iestatījumu. Tiek atcerēts šajā pārlūkprogrammā.

### OFFSET

Aliasi: `O`. Līnijas, loki, riņķi un polilīnijas.

Vietā, kur polilīnija pārvietojas uz āru un tās taisnie segmenti atdalās stūrī, {{cmd:OFFSETGAPTYPE}} izlemj, kā aizvērt spraugu.

- `Norādiet nobīdes attālumu [Caur (T)] <pēdējais attālums vai Caur>`
- `Atlasiet objektu nobīdei`, tad `Norādiet punktu pusē, uz kuru nobīdīt` (vai ar Caur — `Norādiet punktu, caur kuru iet`), atkārtoti līdz Enter.

### OFFSETGAPTYPE

- `Nobīdes stūru spraugas: 0 pagarināt, 1 noapaļot, 2 nošķelt`: kā {{cmd:OFFSET}} aizver spraugas polilīnijas ārējos stūros. `0` pagarina segmentus, līdz tie saskaras (sākuma iestatījums), `1` savieno tos ar loku ap veco stūri, `2` ar taisnu nogriezumu. Iekšējie stūri un loku segmenti netiek ietekmēti. Saglabāts šai sesijai.

### EXTRIM

{{cmd:EXTRIM}} apgriež visu vienā malas pusē. Izvēlieties griezšanas malu (līniju, loku, riņķi, polilīniju, elipsi, splainu vai konstrukcijas līniju), tad norādiet punktu pusē, ko notīrīt: katra līnija, loks, riņķis, polilīnija un konstrukcijas līnija, kas krusto malu, zaudē savu daļu tajā pusē, kur tā sākas pie malas. Izvēloties pusi, gabali, kas tiks nogriezti, seko rādītājam. Slēgtai malai puses ir iekšpuse un ārpuse. Objekti, kas tikai pieskaras malai, un teksts, svītrojumi, splaini un elipses, kas to krusto, paliek kā ir. Viens atsaukšanas solis.

### TRIMEXTENDMODE

- `Ievadiet jaunu vērtību TRIMEXTENDMODE (1 Ātri, 0 Standarta)`: kā sākas {{cmd:TRIM}} un {{cmd:EXTEND}}. `1` Ātri: katrs objekts ir griezšanas mala vai robeža. `0` Standarta: vispirms jautā malas. Arī `(setvar "TRIMEXTENDMODE" 0)` LISP.

### TRIM

Aliasi: `TR`. Vispirms izdrukā `Pašreizējie iestatījumi: Ātrais režīms (TRIMEXTENDMODE 1), malas: Nepagarināt, velkot zīmē ceļu`. Ātrajā režīmā katrs redzamais objekts ir griezšanas mala, un objekts, ko nekas nekrusto, tiek izdzēsts; standarta režīmā tas vispirms jautā `Atlasiet griezšanas malas (Enter = katrs objekts)` un griež tikai pie tām.

- `Atlasiet objektu, ko apgriezt, vai Shift atlasi, lai pagarinātu [Griezšanas malas (T)/Žogs (F)/Krustojums (C)/Režīms (O)/Mala (E)/Dzēst (R)/Atsaukt (U)]`, atkārtoti: noklikšķiniet uz gabala, ko noņemt (tas kļūst pelēks un punktēts, kamēr rādītājs atrodas virsū), velciet ceļu cauri vairākiem gabaliem (visi iet vienā solī) vai noklikšķiniet divas tukšas vietas žogam starp tām. {{key:Shift}} pagarina. `T` izvēlas griezšanas malas (standarta režīmā), `F` jautā žoga punktus, `C` divus logu stūrus (gabali, kas daļēji iekšā, iet), `O` jautā `Ievadiet apgriešanas režīma opciju [Ātri/Standarta]`, `E` jautā `Ievadiet netiešās malas pagarinājuma režīmu [Pagarināt/Nepagarināt]` (EDGEMODE), `R` dzēš objektus, ko izvēlaties, `U` atsauc pēdējo izvēli vai vilkšanu. Enter beidz. Skatiet [Apgriezt un pagarināt](topic:trim-and-extend).

- Klikšķis uz svītrojuma griež svītrojumu: griezšanas malas sadala svītroto laukumu, un gabals, uz kura noklikšķinājāt, tiek noņemts (zīmētas kontūras tur, kur tas bija, netiek atstātas). Svītrojums paliek ar savu rakstu vai gradientu; svītrojums, kas bija saistīts ar savu kontūru, pēc tam vairs nav saistīts, jo tas to vairs neaizpilda. Tā to pasaka, ja neviena griezšanas mala nesadala svītrojumu tur, ja klikšķis nav uz svītrojuma, un ja nekas neatliktu ({{cmd:ERASE}} lietojiet). Vilkts ceļš vai žogs svītrojumus negriež.

### EXTEND

Aliasi: `EX`. Tas pats, kas TRIM, otrādi: `Atlasiet objektu, ko pagarināt, vai Shift atlasi, lai apgrieztu [Robežas malas (B)/Žogs (F)/Krustojums (C)/Režīms (O)/Mala (E)/Atsaukt (U)]`. Klikšķis pagarina tuvāko galu līdz nākamajai robežai; vilkts ceļš vai žogs pagarina katru objektu, ko tas krusto; {{key:Shift}} apgriež. `B` izvēlas robežas malas (standarta režīmā). Režīms un Mala ir kopīgi ar TRIM.

### LINKVIEWS

Aliasi: `SYNCVIEWS`; vai {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Saistīt logu skatus}}, vai saites ikona rasējuma cilnēs. `Saistīt logu skatus [ON/OFF]` (Enter izvēlas otru stāvokli): kamēr ieslēgts, panoramēšana vai tālummaiņa aktīvajā logā pārvieto katru logu, kas rāda to pašu telpas veidu. Skatiet [Sadalīt ekrānu](topic:split-screen).

### OPENIN3D

Nav aliasu; vai {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Atvērt ModelCraft}}, kur 3D modelēšanas lietotne pārņem nodoto rasējumu. Tā atver to tur jaunā cilnē kā DWG (nekas netiek augšupielādēts). Ja pārlūkprogramma bloķē cilni, tā to pasaka.

### LASSOMODE

`Ievadiet jaunu vērtību LASSOMODE (1 = lasso, 0 = taisnstūris)`: ko zīmē, nospiežot un velkot tukšā vietā. Tas pats, kas Iestatījumi › CadCraft › Vilkšana atlasei. Skatiet [Lasso atlase](topic:lasso-selection).

### FILLET

Aliasi: `F`. Līnijas, loki, riņķi un polilīnijas. Vispirms izdrukā `Pašreizējie iestatījumi: Režīms = TRIM, Rādiuss = 0`.

- `Atlasiet pirmo objektu [Atsaukt (U)/Polilīnija (P)/Rādiuss (R)/Apgriezt (T)/Vairāki (M)]`
  - `R` jautā `Norādiet noapaļojuma rādiusu <pēdējais>`. `T` jautā `Ievadiet apgriešanas režīma opciju [Apgriezt (T)/Neapgriezt (N)]`: ar Neapgriezt objekti paliek kā ir un tiek pievienots tikai loks.
  - `M` ļauj komandai turpināt citiem stūriem līdz {{key:Enter}}; `U` atsauc pēdējo stūri, neizejot no komandas.
  - `P` jautā `Atlasiet 2D polilīniju [Rādiuss (R)]` un noapaļo katru stūri, kur saskaras divi taisni segmenti. Noapaļojumi, kas tai jau ir, tiek aizstāti ar jauno rādiusu; rādiuss 0 tos noņem. Stūri, kuru malas ir pārāk īsas rādiusam, paliek un tiek saskaitīti.
- `Atlasiet otru objektu vai Shift atlasi, lai pielietotu stūri [Rādiuss (R)]`. Turiet {{key:Shift}}, kad klikšķināt, lai iegūtu asu stūri neatkarīgi no rādiusa.

Noklikšķiniet uz katra objekta daļas, ko vēlaties paturēt. Divas līnijas, kas nesaskaras, tiek pagarinātas. Divas paralēlas līnijas saņem pusriņķi pāri spraugai, pie pirmās līnijas gala, kas ir tuvākais jūsu klikšķim. Riņķis nekad netiek griezts. Divi blakus esoši vienas polilīnijas segmenti saņem loku polilīnijas iekšpusē; polilīnija un cits objekts darbojas, kad griezums iekrīt polilīnijas pirmajā vai pēdējā segmentā.

### CHAMFER

Aliasi: `CHA`. Līnijas un polilīniju taisnie segmenti. Vispirms izdrukā pašreizējos attālumus (vai garumu un leņķi).

- `Atlasiet pirmo līniju [Atsaukt (U)/Polilīnija (P)/Attālums (D)/Leņķis (A)/Apgriezt (T)/Metode (E)/Vairāki (M)]`
  - `D` jautā `Norādiet pirmo nošķelšanas attālumu <pēdējais>` un `Norādiet otro nošķelšanas attālumu <pirmais>`: pirmais tiek nogriezts no pirmās izvēlētās līnijas, otrais no otras.
  - `A` jautā `Norādiet nošķelšanas garumu pirmajā līnijā` un `Norādiet nošķelšanas leņķi no pirmās līnijas`.
  - `E` (Metode) izvēlas, kuru no abiem nākamā nošķelšana izmanto. `T`, `M`, `U` un `P` darbojas kā {{cmd:FILLET}}.
- `Atlasiet otru līniju vai Shift atlasi, lai pielietotu stūri [Attālums (D)/Leņķis (A)/Metode (E)]`. {{key:Shift}}+klikšķis veido asu stūri.

Attālumu, kas garāks par līniju, noraida (`Attālums ir pārāk liels.`).

### BREAK un BREAKATPOINT

Aliasi: `BR`. `Atlasiet objektu` (kur noklikšķināt, ir pirmais punkts), `Norādiet otro pārtraukuma punktu [Pirmais punkts (F)]`; `F` jautā `Norādiet pirmo pārtraukuma punktu` un `Norādiet otro pārtraukuma punktu`. Daļa starp tiem tiek noņemta; riņķī — pretēji pulksteņrādītāja virzienam no pirmā punkta. BREAKATPOINT jautā `Norādiet pārtraukuma punktu` un sadala objektu divās daļās tur (ne riņķis).

### LENGTHEN

Aliasi: `LEN`. `Atlasiet objektu mērīšanai [Delta (DE)/Procenti (P)/Kopā (T)/Dinamisks (DY)]`: izvēle izdrukā `Pašreizējais garums` (un loka ietvertais leņķis) un jautā atkal. `DE` jautā `Ievadiet garuma delta (negatīvs saīsina) [Leņķis (A)]`, `P` `Ievadiet garumu procentos`, `T` `Norādiet kopējo garumu [Leņķis (A)]`, `DY` velk. Tad `Atlasiet objektu, ko mainīt [Atsaukt (U)]`, atkārtoti: mainās tuvākais gals klikšķim. Līnijas, loki un atvērtas polilīnijas.

### JOIN

Aliasi: `J`. `Atlasiet objektus savienošanai`. Līnijas, loki un atvērtas polilīnijas, kas saskaras gals pie gala, kļūst par polilīnijām (slēgtām, kad ķēde aizveras); līnijas uz vienas līnijas kļūst par vienu līniju; loki vienā riņķī kļūst par vienu loku vai riņķi. Vēsture pasaka, cik objektu tika savienoti un cik nē.

### MATCHPROP

Aliasi: `MA`, `PAINTER`. `Atlasiet avota objektu`, tad `Atlasiet mērķa objektus [Iestatījumi (S)]` un {{key:Enter}}. Kopē slāni un krāsu, un starp vienāda veida objektiem teksta augstumu un platumu, izmēru izmērus vai svītrojuma rakstu. `S` jautā `Ieslēgt vai izslēgt rekvizītu [Krāsa (C)/Slānis (LA)/Teksts (T)/Izmērs (D)/Svītrojums (H)]`, atkārtoti līdz {{key:Enter}}; izvēle tiek atcerēta sesijai.

### EXPLODE

Aliasi: `X`. Polilīnijas kļūst par līnijām un lokiem, bloku atsauces kļūst par saviem objektiem, izmēri kļūst par līnijām, bultiņām un tekstu. Masīvs, kas paliek rediģējams ({{cmd:ARRAYEDIT}}), kļūst par parastām objektu kopijām.

- `Atlasiet objektus`

### GROUP

Aliass: `G`. {{cmd:GROUP}} piešķir atlasītajiem objektiem nosaukumu, ko tie dala. Atlasiet objektus, tad ierakstiet nosaukumu (bez atstarpēm; `?` uzskaita grupas; Enter izveido nenosauktu grupu) un, grupai ar nosaukumu, neobligātu aprakstu. Turpmāk klikšķis uz vienu no tiem vai logs, kas kādu aptver, atlasa visus, tāpēc tie kopā pārvietojas, kopējas un tiek dzēsti; katrs objekts joprojām ir savs objekts. Objekts var būt vairākās grupās. Visas grupas kopija ir jauna nenosaukta grupa; viena dalībnieka kopija pati par sevi pievienojas grupai. Grupas pieder telpai, kurā tās izveidoja (modelis vai lapa). Tās tiek saglabātas, kad saglabājat kā DWG vai DXF un atverat failu atkal CadCraft; DXF 2000 faili tās nes arī kā grupu objektus citām programmām, un grupas, kas izveidotas citā programmā, tiek nolasītas, atverot DXF vai DWG.

### UNGROUP

{{cmd:UNGROUP}} izjauc grupas: atlasiet grupu objektus (katra grupa, kurā tie ir, tiek izjaukta) vai ierakstiet `Name` un grupas nosaukumu. Objekti paliek rasējumā. Viens atsaukšanas solis atjauno grupas.

### GROUPEDIT

{{cmd:GROUPEDIT}} maina vienu grupu. Izvēlieties vienu no tās objektiem vai `Name` un tās nosaukumu; grupa, kas jau ir atlasīta, tiek ņemta kā tāda. Tad: `Add` objektus (vienu pa vienam, nevis pa grupām), `Remove` objektus, `REName` grupu, mainīt tās `Description` vai iestatīt `Selectable` (vai klikšķis uz viena objekta atlasa visu grupu). `eXit` vai Enter beidz. Grupa bez objektiem vairs neeksistē.

### PICKSTYLE

- `Grupas atlase: 0 — klikšķis atlasa vienu objektu, 1 — visu tā grupu`: ar `1` (sākuma iestatījums) klikšķis vai logs uz grupēta objekta atlasa visu tā grupu; ar `0` atsevišķus objektus, lai varētu rediģēt vienu dalībnieku. Saglabāts šai sesijai.

## Starpliktuve

CadCraft pašas starpliktuve: tā darbojas vienā rasējumā, starp rasējumiem un starp CadCraft cilnēm šajā pārlūkprogrammā. Skatiet [Kopēt, ielīmēt un dublēt](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, vai {{ui:Kopēt}} grupā {{ui:Rediģēt}}. Kopē objektus starpliktuvē kopā ar blokiem un slāņiem, ko tie izmanto. Objekti paliek atlasīti.

- `Atlasiet objektus kopēšanai` (izlaists, ja objekti jau ir atlasīti)

### CUTCLIP

{{key:Mod+X}}, vai {{ui:Izgriezt}} izvēlnē {{ui:Vairāk}}. Kopē objektus starpliktuvē, tad tos dzēš (viens atsaukšanas solis).

- `Atlasiet objektus izgriešanai` (izlaists, ja objekti jau ir atlasīti)

### COPYBASE

Kopē objektus starpliktuvē ar bāzes punktu, ko izvēlaties; ielīmēšana novieto šo punktu.

- `Norādiet bāzes punktu`
- `Atlasiet objektus kopēšanai`

### PASTECLIP

{{key:Mod+V}}, vai {{ui:Ielīmēt}} grupā {{ui:Rediģēt}}. Kopija seko kursoram, karājoties no tās apakšējā kreisā stūra (vai no centra, vai no `COPYBASE` punkta; skatiet [CadCraft iestatījumi](topic:settings)).

- `Norādiet ievietošanas punktu`

Ielīmētie objekti tiek atlasīti. Bloks, kas rasējumā jau ir ar tādu pašu nosaukumu, saglabā šī rasējuma definīciju.

Kad MarkupCraft kopētais apgabals ir jaunāks par to, ko CadCraft kopēja (un ne vecāks par 6 stundām), {{key:Mod+V}} un `PASTECLIP` ielīmē to apgabalu: skatiet `PASTEAREA`.

### PASTEAREA

Aliasi: `PAREA`. {{ui:Ielīmēt kopētu apgabalu}} izvēlnē {{ui:Vairāk}}. Ielīmē apgabalu, kas kopēts ar {{ui:Kopēt apgabalu}} MarkupCraft, kā attēlu tā patiesajā izmērā. Skatiet [Attēli rasējumā](topic:pictures).

- `Norādiet kopētā apgabala apakšējo kreiso stūri`
- `Mērogot tā papīra izmēru par (100 1:100 lapai; Punkti: divi punkti uz tās un to patiesais attālums) [Punkti (P)] <1>` (tikai tad, ja lapai nebija rasējuma mēroga): skaitlis, {{key:Enter}} papīra izmēram vai `P`, tad `Pirmais punkts ielīmētajā apgabalā`, `Otrais punkts ielīmētajā apgabalā` un to patiesais attālums.

### PASTEORIG

{{key:Mod+Shift+V}}, vai {{ui:Ielīmēt vietā}} izvēlnē {{ui:Vairāk}}. Ielīmē koordinātēs, no kurām objekti tika kopēti. Nejautā neko.

### DUPLICATE

Aliasi: `DUP`. {{key:Mod+D}}, vai {{ui:Dublēt un pārvietot}} izvēlnē {{ui:Vairāk}}. Objektu kopija kustas kopā ar rādītāju no tās vietas; {{key:Esc}} neatstāj nekā. Neizmanto starpliktuvi.

- `Atlasiet objektus dublēšanai` (izlaists, ja objekti jau ir atlasīti)
- `Norādiet, kur iet kopija (Esc neatstāj nekā)`: noklikšķiniet, ierakstiet punktu, `@dx,dy` (no vietas, kur bija rādītājs), vai attālumu virzienā uz kursoru.

### SELECT

Jautā `Atlasiet objektus` (ar visām zemāk esošajām opcijām) un atstāj izvēlēto atlasītu nākamajai komandai vai vēlākai `P` lietošanai.

### QSELECT

Aliasi: `QS`. Pārlūkprogrammā — {{ui:Ātrā atlase}} dialogs (skatiet [Atlasīt objektus](topic:select-objects#select-by-a-rule-quick-select)). Bez tā komandrinda jautā `Ievadiet objekta tipu`, `Ievadiet rekvizītu`, `Ievadiet operatoru [=/<>/>/</*/Atlasīt visus] <=>` un `Ievadiet vērtību`. Atbilstošie kļūst par atlasi.

### SELECTSIMILAR

Aliasi: `SIM`. `Atlasiet objektus [Iestatījumi (SE)]` (vai pašreizējo atlasi): atlasa katru tāda paša veida objektu ar tādu pašu slāni un krāsu (un bloka nosaukumu, svītrojuma rakstu). `SE` jautā `Ieslēgt vai izslēgt rekvizītu [Slānis (LA)/Krāsa (CO)/Nosaukums (NA)/Raksts (PA)/Augstums (HE)]`, atkārtoti līdz {{key:Enter}}.

### FIND

Nav aliasu; vai {{ui:Rediģēt}} › {{ui:Vairāk}} › {{ui:Atrast un aizstāt}}. Pārlūkprogrammā — {{ui:Atrast un aizstāt}} dialogs (skatiet [Pievienot tekstu un uzrakstus](topic:text#find-and-replace-words)). Bez tā: `Ievadiet meklējamo tekstu`, tad `Ievadiet aizstājošo tekstu (Enter: atlasīt atrasto)`. Meklē tekstā, atribūtu vērtībās un izmēru tekstā, atvērtajā cilnē vai atlasē.

### SELECTALL un DESELECT

`SELECTALL` (aliass `AI_SELALL`, {{key:Mod+A}}) atlasa katru objektu, ko var rediģēt atvērtajā cilnē. `DESELECT` (aliasi `AI_DESELECT`, `SELECTNONE`; vai {{key:Esc}}) notīra atlasi.

## Izmēri

### DIMLINEAR

Aliasi: `DLI`, `DIMLIN`. Horizontālais vai vertikālais attālums.

- `Norādiet pirmās pagarinājuma līnijas sākumu [Atlasīt objektu (S)]` (Enter vai `S`: `Atlasiet objektu, ko izmērīt`, tad noklikšķiniet uz līnijas, loka, riņķa vai polilīnijas segmenta)
- `Norādiet otrās pagarinājuma līnijas sākumu`
- `Norādiet izmēra līnijas vietu [Teksts (T)/Horizontāli/Vertikāli/Pagriezts (R)]`. `T` jautā tekstu (`<>` ir izmērītā vērtība), `H` un `V` fiksē virzienu, `R` jautā `Norādiet izmēra līnijas leņķi <0>`.

### DIMALIGNED

Aliasi: `DAL`, `DIMALI`. Patiesais attālums starp diviem punktiem.

- Sākumi kā {{cmd:DIMLINEAR}}, tad `Norādiet izmēra līnijas vietu [Teksts (T)]`.

### DIMANGULAR

Aliasi: `DAN`, `DIMANG`.

- `Atlasiet loku, riņķi vai līniju, vai Enter virsotnei`
- Loks: tā leņķis. Riņķis: `Norādiet otro leņķa galapunktu`. Līnija: `Atlasiet otru līniju`. Enter: `Norādiet leņķa virsotni`, `Norādiet pirmo leņķa galapunktu`, `Norādiet otro leņķa galapunktu`.
- `Norādiet izmēra līnijas vietu [Teksts (T)]`: noklikšķiniet leņķa iekšpusē, lai mērītu.

### DIMRADIUS un DIMDIAMETER

Aliasi: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Atlasiet loku vai riņķi`, tad `Norādiet izmēra līnijas vietu [Teksts (T)]`.

### DIMCONTINUE

Aliasi: `DCO`, `DIMCONT`. Turpina no pēdējā izveidotā lineārā vai saskaņotā izmēra (vai jautā `Atlasiet lineāru vai saskaņotu izmēru`).

- `Norādiet otrās pagarinājuma līnijas sākumu [Atsaukt (U)]`, atkārtoti līdz Enter.

### DIMBASELINE

Aliasi: `DBA`, `DIMBASE`. Kā {{cmd:DIMCONTINUE}}, bet katrs izmērs sākas no pirmā sākuma un tiek sakrauts tālāk ārā.

### DIMORDINATE

Aliasi: `DOR`, `DIMORD`. `Norādiet elementa vietu`, tad `Norādiet norādes galapunktu [Xdatum/Ydatum/Teksts (T)]`. Raksta, cik tālu elements atrodas no UCS sākuma punkta pa X vai pa Y, uz norādes: norāde, kas iet galvenokārt uz augšu vai uz leju, nolasa X, tā, kas iet sānis, nolasa Y; `Xdatum` un `Ydatum` nosaka, kurš. Vispirms iestatiet sākumu ar {{cmd:UCS}} (bez tā tas ir rasējuma 0,0). Roktura punkti pārvieto elementu, sākumu un norādes galu, un vērtība seko. Saglabāts kā īsts koordinātu izmērs DWG un DXF. Noraida norādes galu uz paša elementa.

### DIMARC

Aliasi: `DAR`. `Atlasiet loku vai polilīnijas loka segmentu`, tad `Norādiet loka garuma izmēra vietu [Teksts (T)]`. Mēra pa loku (nevis pa akordu) un raksta loka simbolu pirms vērtības. Noraida pilnu riņķi, līniju vai taisnu polilīnijas segmentu. DWG to glabā kā loka garuma izmēru; DXF to glabā kā leņķisko izmēru ar garumu kā tā tekstu, un CadCraft to atkal atver kā loka garuma izmēru.

### DIMJOGGED

Aliasi: `DJO`, `JOG`. `Atlasiet loku vai riņķi`, `Norādiet centra vietas pārrakstīšanu`, `Norādiet lūzuma vietu`. Rādiusa izmērs līknei, kuras centrs ir tālu vai ārpus lapas: izmēra līnija sākas no punkta, ko dodat, nevis no centra, ar lūzumu tajā, un joprojām raksta patieso rādiusu. DWG to glabā kā lūzuma rādiusa izmēru; DXF to glabā kā rādiusa izmēru, un CadCraft to atkal atver ar lūzumu.

### DIMJOGLINE

Aliasi: `DJL`. `Atlasiet izmēru, kam pievienot lūzumu [Noņemt (R)]`, tad `Norādiet lūzuma vietu (vai nospiediet Enter)`. Liek lūzuma simbolu lineāra vai saskaņota izmēra līnijai, lai parādītu, ka attālums nav zīmēts mērogā; vērtība nemainās. `Noņemt` to izņem. Noraida citus izmēru veidus.

### QDIM

Nav aliasu. `Atlasiet ģeometriju izmēram`, tad `Norādiet izmēra līnijas pozīciju [Nepārtraukts (C)/Pakāpenisks (S)/Bāzes (B)/Koordinātu (O)/Rādiuss (R)/Diametrs/datumPunkts (P)]`. Izmēra vairākus objektus vienā solī no līniju un polilīniju segmentu galiem, riņķu un loku centriem, punktiem un bloku atsaucēm. Pozīcija virs vai zem objektiem mēra šķērsām, blakus tiem — uz augšu. `Nepārtraukts` savieno punktus, `Bāzes` mēra visus no pirmā, `Pakāpenisks` ieliek pārus no vidus uz āru, `Koordinātu` dod katram punktam tā attālumu no datuma (`datumPunkts` izvēlas jaunu), `Rādiuss` un `Diametrs` izmēra katru izvēlēto riņķi un loku. Režīms tiek atcerēts. Viss, ko tas izveido, ir viens atsaukšanas solis. Pasaka, ka ir mazāk par diviem punktiem vai nav lokus vai riņķu rādiusam un diametram.

### DIMBREAK

Aliasi: `DBREAK`. `Atlasiet izmērus, kam pievienot vai noņemt pārtraukumus`, tad `Pārtraukt, kur krusto citi objekti [Auto/Manuāli (M)/Noņemt (R)] <Auto>`. `Auto` atstāj spraugu izmēra un pagarinājuma līnijās, kur krusto citi objekti, un atkal aprēķina spraugas, kad tie objekti vai izmērs pārvietojas. `Manuāli` (vienam izmēram) jautā divus punktus un atstāj spraugu starp tiem. `Noņemt` noņem visas spraugas. Sprauga ir 1,5 reizes lielāka par izmēra teksta augstumu.

### DIMSPACE

Nav aliasu. `Atlasiet bāzes izmēru`, `Atlasiet izmērus izvietošanai`, `Ievadiet attāluma vērtību vai Auto <Auto>`. Pārvieto paralēlu lineāru un saskaņotu izmēru līnijas (vai leņķiskos ap to pašu virsotni), lai tās atrastos vienādā attālumā viena no otras, skaitot no bāzes izmēra, katra tajā pusē, kurā tā ir. `0` tās izlīdzina ar bāzi; `Auto` ir divreiz bāzes izmēra teksta augstums. Izmēri, kas nav paralēli bāzei, paliek nemainīti.

### DIMINSPECT

Nav aliasu. `Atlasiet izmērus`, `Pārbaudes rāmja forma [Apaļš (R)/Leņķisks (A)/Nav (N)/noņemt] <Apaļš>`, `Ievadiet uzrakstu`, `Ievadiet pārbaudes biežumu <100%>`. Zīmē rāmi ap vērtību ar uzrakstu pirms tās un pārbaudes biežumu pēc tās. `remove` noņem rāmi. Tolerances teksts paliek kopā ar vērtību.

### DIMOVERRIDE

Aliasi: `DOV`, `DIMOVER`. `Ievadiet izmēra mainīgā nosaukumu, ko pārrakstīt, vai Notīrīt`, `Ievadiet jaunu vērtību …`, atkārtoti līdz Enter, tad `Atlasiet izmērus`. Maina šos iestatījumus tikai atlasītajos izmēros; izmēra stils netiek mainīts. Pieņem mainīgos, kas ir skaitlis vai slēdzis (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Notīrīt` atliek atlasītos izmērus atpakaļ uz to stilu. Noraida nosaukumu, kas nav tāds mainīgais, un vērtību, ko tas nevar pieņemt.

### DIMREASSOCIATE

Aliasi: `DRE`, `DIMREASSOC`. `Atlasiet izmērus`, tad katram tā pagarinājuma līniju sākumus (`Norādiet pirmās pagarinājuma līnijas sākumu uz objekta`: piesaista galam vai līnijas vidum, polilīnijas stūrim, centram; Enter atstāj šo punktu brīvu), vai rādiusam, diametram, lūzuma rādiusam vai loka garuma izmēram `Atlasiet loku vai riņķi`. Izmērs tad tiek piesaistīts šiem objektiem: kad tie pārvietojas vai maina izmēru, tas seko tajā pašā atsaukšanas solī un mēra no jauna. Ar roku pārvietojot piesaistītu punktu vai dzēšot objektu, piesaiste beidzas. Piesaiste tiek saglabāta DWG un DXF 2000 kā CadCraft paši dati; citas programmas redz parastu izmēru.

### DIMDISASSOCIATE

Aliasi: `DDA`, `DIMDISASSOC`. `Atlasiet izmērus`. Atbrīvo tos no objektiem, pie kuriem tie ir piesaistīti; nekas nepārvietojas.

### CENTERMARK

Aliasi: `CM`, `DIMCENTER`, `DCE`. `Atlasiet riņķi vai loku centra zīmei`, atkārtoti līdz Enter. Zīmē krustu centrā un četras centra līnijas nedaudz aiz līknes (līniju tips CENTER) kā parastas līnijas pašreizējā slānī; izmērs tiek noteikts pēc pašreizējo izmēru iestatījumu bultiņas izmēra un kopējā mēroga, pagriezts ar UCS. Tās neseko riņķim, ja tas pārvietojas.

### CENTERLINE

Aliasi: `CL`. `Atlasiet pirmo līniju`, `Atlasiet otru līniju`. Zīmē līniju pa vidu starp divām līnijām (pa bisektrisi, ja tās saskaras), nedaudz garāku par tām, līniju tipā CENTER. Parasta līnija: tā neseko abām līnijām.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Nav aliasu. Katrs jautā `Ievadiet jaunu vērtību … <pašreizējā>` un iestata šo izmēru **jauniem** izmēriem: kopējais mērogs, teksta augstums, bultiņas izmērs, decimālzīmes (līdz 8), atstarpe ap tekstu, pagarinājums aiz izmēra līnijas, nobīde no sākuma punkta. Skatiet [Iestatīt izmēru izmērus](topic:dimension-settings).

### DIMLUNIT

Izmēra iestatījums: tikai jaunu izmēru formāts (1 zinātniskais, 2 decimālais, 3 inženiertehniskais, 4 arhitektūras, 5 daļskaitļu).

### DIMSTYLE un -DIMSTYLE

Aliasi: `DST`, `DDIM`, `D`. Izmēru stilu pārvaldnieks: {{ui:Iestatīt pašreizējo}}, {{ui:Jauns…}}, {{ui:Mainīt…}}, {{ui:Pārdēvēt…}}, {{ui:Dzēst}}, {{ui:Salīdzināt…}}, {{ui:Piemērot atlasītajiem}}. `-DIMSTYLE` komandrindā: `Izmēra stils [Atjaunot/Saglabāt/Dzēst/Piemērot/Salīdzināt/Pārdēvēt/Uzskaitīt]`. Skatiet [Iestatīt izmēru izmērus](topic:dimension-settings#named-dimension-styles).

### DIMEDIT un DIMTEDIT

`DIMEDIT` (`DED`): `Izmēra rediģēšana [Sākums (H)/Jauns (N)/Pagriezt (R)/Slīpi (O)] <Sākums>`, tad izmēri (vai tie, kas jau atlasīti). Jauns jautā tekstu (`<>` = mērījums); Pagriezt — leņķi (0 atliek tekstu atpakaļ); Slīpi — pagarinājuma līniju leņķi no X ass (Enter = nav; tikai lineārajiem un saskaņotajiem izmēriem). `DIMTEDIT` (`DIMTED`): `Izmēra teksts [Pa kreisi (L)/Pa labi (R)/Centrs/Sākums (H)/Leņķis (A)] <Centrs>`. Skatiet [Iestatīt izmēru izmērus](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliasi: `DTU`. `Vienības jaunu izmēru tekstā [Rasējuma vienības (D)/mm/cm/m/km]` vai, ar atlasītiem izmēriem, `Vienības atlasīto izmēru tekstā`. Raksta izmērīto garumu šajā vienībā ar vienības apzīmējumu aiz tā (DIMLFAC un DIMPOST sufiksu); `D` atgriežas pie rasējuma vienībām. Skatiet [Izmēri mm, cm, m vai km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliasi: `RC`. Izdrukā `Loka garums: … Tips: …`, tad `Norādiet pirmo punktu [Loka garums (A)/Objekts (O)/Taisnstūris (R)/Daudzstūris (P)/Brīvroka (F)]`. Taisnstūris jautā `Norādiet pretējo stūri`; Daudzstūris — `Norādiet nākamo punktu (Enter aizver mākoni) [Atsaukt (U)]`; Brīvroka seko rādītājam līdz klikšķim vai {{key:Enter}}; `O` jautā `Atlasiet objektu` un `Mainīt virzienu? [Jā (Y)/Nē (N)] <N>` un pārvērš objektu mākonī. `A` jautā `Norādiet katra loka garumu`. `R`, `P` un `F` izvēlas tipu nākamajam mākonim. Rezultāts ir slēgta loku polilīnija.

### MLEADER

Aliasi: `MLD`; vai {{ui:Norāde}}. `Norādiet norādes bultiņas vietu [Bultiņas izmērs (A)/Nolaišanās attālums (L)/Bloks (B)]`, `Norādiet norādes nolaišanās vietu`, tad teksts vietējā lodziņā (vai bez tā `Ievadiet tekstu (tukša rindiņa beidz)`). `Bloks` vispirms jautā bloka nosaukumu, un daudzvadu norāde rāda šo bloku tekstā vietā. Papildu norādes līnijas: {{cmd:MLEADEREDIT}}. DWG saglabā kā īstu daudzvadu norādi; DXF saglabā līnijas, bultiņu un tekstu, ko tas zīmē.

### MLEADEREDIT

Aliasi: `MLE`. `Atlasiet daudzvadu norādi`, tad `Norādiet norādes bultiņas vietu [Noņemt norādes (R)/Bloka saturs (B)/Teksta saturs (T)]`: katrs punkts pievieno norādes līniju no jaunas bultiņas uz to pašu nolaišanās vietu, līdz Enter. `Noņemt norādes` tad noņem norādes līniju, uz kuru noklikšķināt (daudzvadu norādei paliek vismaz viena). `Bloka saturs` jautā bloka nosaukumu un rāda šo bloku tekstā vietā (jāizvēlas tā atribūti); `Teksta saturs` atjauno tekstu. Katrai norādes līnijai ir savs rokturis. DWG saglabā katru norādes līniju un bloku vienā daudzvadu norādē.

### MLEADERALIGN

Aliasi: `MLA`. `Atlasiet daudzvadu norādes`, tad `Atlasiet daudzvadu norādi, pēc kuras izlīdzināt [Sadalīt (D)/Attālums (S)/Izmantot pašreizējo attālumu (U)]` un `Norādiet virzienu`. Pārvieto citu daudzvadu norāžu nolaišanās vietas (un to tekstu vai bloku) uz līniju caur atlasītās nolaišanās vietu tajā virzienā; bultiņas paliek, kur tās vērš. `Attālums` arī iestata tiem vienādu attālumu; `Sadalīt` jautā divus punktus un izkliedē tos vienmērīgi starp tiem. Vajadzīgas vismaz divas daudzvadu norādes.

### MLEADERCOLLECT

Aliasi: `MLC`. `Atlasiet daudzvadu norādes`, tad `Norādiet apkopotās daudzvadu norādes vietu [Vertikāli (V)/Horizontāli (H)]` (Enter paturē pirmās vietu). Veido vienu daudzvadu norādi no vairākām: bloka saturs ieiet jaunā blokā, kas satur katru bloku blakus vai vienu zem otra; teksta saturs kļūst par vienu piezīmi ar rindiņu katram. Pirmā daudzvadu norāde paturēs savas norādes līnijas; citas tiek noņemtas. Noraida teksta un bloka satura sajaukumu.

### TABLE

Aliasi: `TB`; vai {{ui:Anotēt}} › {{ui:Vairāk}} › {{ui:Tabula}}. Izveido tabulu: vienu objektu, ko var pārvietot, kopēt, pagriezt, mērogot un drukāt kā jebkuru citu, ar šūnām, kas glabātas kā dati.

- `Datu rindu skaits vai [Ielīmēt (P)/Fails (F)/Stils (S)] <3>`, tad `Kolonnu skaits <3>`, `Teksta augstums` un `Tabulas augšējais kreisais stūris`. Tabulai tiek pievienota virsrakstu rinda (viena apvienota šūna) un galvenes rinda virs datu rindām.
- `P`: tabula no izklājlapas šūnām starpliktuvē (teksts ar tabulatoru starp šūnām). {{key:Ctrl+V}}, kad starpliktuvē ir šādas šūnas, dara to pašu, izņemot gadījumu, kad jaunāka ir CadCraft pati kopija (vai CadCraft nevar to noteikt: tad tā ielīmē savu kopiju un to pasaka). `F`: tabula no `.csv` vai ar tabulatoru atdalīta faila. Pirmā rinda kļūst par galvenes rindu; kolonnu platumi atbilst tekstam.
- `S`: izvēlēties šai tabulai tabulas stilu (skatiet {{cmd:TABLESTYLE}}).
- Tā noraida rindu vai kolonnu skaitu, kas nav vesels skaitlis, un vairāk šūnu nekā tabula var turēt (2000 rindas, 200 kolonnas, 40 000 šūnas).
- {{cmd:EXPLODE}} pārvērš tabulu līnijās un tekstā. Saglabāta kā DWG, tabula ir īsts tabulas objekts, ko citas programmas var rediģēt; saglabāta kā DXF, tā ir bloks, kas to zīmē, un CadCraft to atkal atver kā tabulu.

### TABLEDIT

Aliasi: `TABLEEDIT`, `TABEDIT`; vai veiciet dubultklikšķi uz šūnas. Rediģē tabulu.

- `Norādiet šūnu, kurā rakstīt (Enter — pabeigt) vai [Rinda (R)/Kolonna (C)/Izmērs (S)/Apvienot (M)/Atdalīt (U)/Izlīdzināt (A)/Augstums (H)/Veids (K)/Notīrīt (CL)]`. Noklikšķiniet uz šūnas, vai ar atlasītu tabulu ierakstiet tās nosaukumu (`B3`: kolonna B, rinda 3; virsrakstu rinda ir rinda 1). Pārlūkprogrammā virs šūnas atveras lodziņš: {{key:Enter}} saglabā tekstu, {{key:Tab}} iet uz nākamo šūnu, {{key:Alt+Enter}} sāk jaunu rindu, {{key:Esc}} atstāj šūnu kā bija.
- Teksts, kas sākas ar `=`, ir formula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, ar `+ - * / ^`, iekavām un funkcijām, piemēram, `sqrt` un `round`. Šūna rāda vērtību; formula, kas nosauc savu pašas šūnu, šūnu ārpus tabulas vai šūnu bez skaitļa, rāda `####`, un komandrinda pasaka, kāpēc.
- `R` / `C`: `Ievietot` vai `Dzēst` rindas vai kolonnas norādītā šūnā (cik, un virs vai zem, pa kreisi vai pa labi). Formulas seko šūnām, ko tās nosauc.
- `S`: kolonnas platums un rindas augstums. Rinda nekad nav zemāka par savu tekstu. Atlasītai tabulai ir rokturis arī katras kolonnas un rindas malā.
- `M`: apvienot no vienas norādītas šūnas līdz citai; `U`: atdalīt. `A`: izlīdzinājums (`TL` augšā pa kreisi … `MC` vidū centrā … `BR` apakšā pa labi). `H`: šīs šūnas pašas teksta augstums (0 = stila). `K`: padarīt rindu par virsrakstu, galveni vai datu rindu. `CL`: iztukšot šūnu.
- Tā noraida tabulu bloķētā slānī, katras rindas vai kolonnas dzēšanu un apvienošanu, kas sadalītu citu apvienotu šūnu divās daļās.

### TABLESTYLE

Aliasi: `TS`. Uzskaita tabulu stilus ar to, cik tabulas katru izmanto, tad `Tabulas stils: [Jauns/Iestatīt/Rediģēt/Dzēst/Piemērot]`.

- Stils glabā virsrakstu, galvenes un datu rindu teksta augstumu un izlīdzinājumu, šūnas polsteri un to, kuras apmales tiek zīmētas (ārējās, starp rindām, starp kolonnām).
- `N` izveido stilu no pašreizējā un padara to pašreizējo; `S` iestata pašreizējo stilu (jaunās tabulas to ņem); `E` rediģē vienu: tabulas, kas to izmanto, tiek pārzīmētas; `A` piešķir atlasītajām tabulām pašreizējo stilu; `D` dzēš vienu (ne Standarta, ne pašreizējo; tabulas, kas to izmantoja, paturē savu izskatu).
- Stili tiek saglabāti kopā ar rasējumu (DWG un DXF).

### TABLEEXPORT

Saglabā to, ko tabula rāda, kā CSV failu (formula kā tās vērtība). `Atlasiet tabulu`, vai atlasiet vienu vispirms. Teksta šūnas, kas sākas ar `=`, `+`, `-` vai `@`, saņem vadošo `'`, lai izklājlapa tās neizpildītu.

### TABLEPASTE

Aliasi: `PASTETABLE`. Izveido tabulu no izklājlapas šūnām starpliktuvē, tad jautā tās augšējo kreiso stūri. Tas pats, kas {{cmd:TABLE}} › `Ielīmēt`.

### DATALINK

Aliasi: `DL`. `Datu saite: [Jauna/Saraksts/Noņemt] <Jauna>`. `N` jautā CSV failu, ievieto tā tabulu un atceras faila nosaukumu; `L` uzskaita saites ar to failu, izmēru, to, kad tas tika nolasīts, un cik tabulu to izmanto; `R` noņem saiti (tās tabulas paliek kā parastas tabulas).

### DATALINKUPDATE

Aliasi: `DLU`. Nolasa datu saites failu no jauna un atkal aizpilda ar to saistītās tabulas (rindas un kolonnas tiek pievienotas vai noņemtas, lai atbilstu). Pārlūkprogramma nevar atvērt failu pati, tāpēc tā jūs lūdz izvēlēties failu vēlreiz. Ar vairākām saitēm tā jautā, kuru.

### FIELD

Ievieto lauku rasējumā: tekstu, kas aprēķina sevi pats. `Lauks: [Datums/Faila nosaukums/Lapa/Rekvizīts/Objekts/Izteiksme/Kods] <Datums>`:

- `D`: tagad vai saglabātais, izveidotais vai drukātais datums, un formāts (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: faila nosaukums, ar vai bez paplašinājuma. `S`: lapas numurs, tās nosaukums vai cik lapu ir. `P`: rasējuma rekvizīts pēc nosaukuma (skatiet {{cmd:DWGPROPS}}). `O`: izvēlieties objektu, tad ko nolasīt (laukums, garums, perimetrs, rādiuss, diametrs, slānis, nosaukums, x, y, teksts, pagrieziens, krāsa) un decimāldaļas. `E`: formula. `C`: teksts ar kodiem, ierakstītiem kā tie ir, piemēram, `Lapa %<sheetnumber>% no %<sheetcount>%`.
- Tad `Atlasiet tekstu, tabulas šūnu vai bloku ar atribūtiem, kur to ievietot (Enter: jauns teksts)`: izvēlēts teksts saņem lauku pēc tā satura; tāpat tabulas šūna; bloka atsauce jautā, kuru atribūtu; {{key:Enter}} jautā augstumu un punktu jaunam tekstam.
- Ekrānā laukam ir gaiši pelēks fons; drukā un PDF tas nekad nav. Ierakstot pāri lauka tekstam ar roku, lauks beidzas. Lauks, ko nevar aprēķināt, rāda `####`.
- Objekta lauks atrod savu objektu ar atslēgu, ko CadCraft glabā objektos (Iestatījumi › CadCraft › Apvienošanai draudzīgi faili); ja atslēgas ir izslēgtas, tas atsakās.

### UPDATEFIELD

Aliasi: `UPDATEFIELDS`. `Atlasiet objektus, kuru laukus atjaunot (Enter: visus laukus) vai [Iestatījumi]`. `S` iestata, kad lauki atjaunojas paši: ierakstiet burtus `O` atvērt, `S` saglabāt, `P` drukāt, `R` regenerēt (sākumā visi četri) vai `NONE`.

### DWGPROPS

Aliasi: `DRAWINGPROPS`. Uzskaita rasējuma rekvizītus, tad `Mainīt: [Nosaukums/Tēma/Autors/Uzņēmums/Atslēgvārdi/coMments/cUstom/Noņemt/eXit]`. Pirmos sešus rāda panelis {{ui:Rasējuma dati}}; `U` pievieno jūsu pašu nosaukumu un vērtību, `R` noņem vienu. Lauki tos nolasa (`%<prop:title>%`, `%<prop:Client>%`) un seko uzreiz. Tas atsakās no pielāgota nosaukuma, kas ir viens no iebūvētajiem vai satur `%`, `<`, `>`, pēdiņu vai atpakaļējo slīpsvītru.

## Parametriskā

Skatiet [Ierobežot rasējumu](topic:constraints) un [Izmantot parametrus un vienādojumus](topic:parameters). Ierobežojumi darbojas cilnē {{ui:Modelis}}.

### GEOMCONSTRAINT un GC komandas

Aliass `GCON`: `Ievadiet ierobežojuma tipu [Horizontāli/Vertikāli/Perpendikulāri/PArallel/Tangenciāli/Sakrītoši/CONcentric/COLlinear/Simetriski/Vienādi/Fiksēt] <Horizontāli>`, tad šīs komandas uzvednes.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Atlasiet objektu [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Atlasiet pirmo objektu`, `Atlasiet otru objektu` (otrais pārvietojas).
- {{cmd:GCCOINCIDENT}}: `Atlasiet pirmo punktu [Objekts/Automātiski ierobežot] <Objekts>`, `Atlasiet otro punktu [Objekts] <Objekts>`.
- {{cmd:GCFIX}}: `Atlasiet punktu [Objekts] <Objekts>`.
- {{cmd:GCSYMMETRIC}}: `Atlasiet pirmo objektu [2Points] <2Points>`, `Atlasiet otru objektu`, `Atlasiet simetrijas līniju`.

### DIMCONSTRAINT un DC komandas

Aliass `DCON`: `Atlasiet asociatīvo izmēru, ko pārvērst [Lineārs/Horizontāls/Vertikāls/Saskaņots/LEņķis/Radiāls/Diametrs/Pārvērst] <Saskaņots>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Norādiet pirmo ierobežojuma punktu [Objekts] <Objekts>`, `Norādiet otro ierobežojuma punktu`, `Norādiet izmēra līnijas vietu`, `Izmēra teksts <d1=40>` (skaitlis, izteiksme vai `vārds=izteiksme`).
- {{cmd:DCALIGNED}}: kā iepriekš, ar `[Objekts/Punkts un līnija/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Atlasiet loku vai riņķi`. {{cmd:DCANGULAR}}: `Atlasiet pirmo līniju vai loku`, `Atlasiet otru līniju`.
- {{cmd:DCCONVERT}}: `Atlasiet izmērus pārvēršanai`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Atlasiet objektus [Iestatījumi]`. `S` jautā attāluma un leņķa pielaides.
- {{cmd:DELCONSTRAINT}} (aliass `DELCON`): `Atlasiet objektus`; to ierobežojumi tiek noņemti.
- {{cmd:CONSTRAINTBAR}} (aliass `CBAR`): `Atlasiet objektus [Rādīt visas/Paslēpt visas]`, tad `[Rādīt/Paslēpt]`.
- {{cmd:DCDISPLAY}}: `Ievadiet opciju [Rādīt/Paslēpt]`.

### PARAMETERS un -PARAMETERS

{{cmd:PARAMETERS}} (aliasi `PAR`, `PARAM`) atver {{ui:Parametri}} paneli. `-PARAMETERS`: `Ievadiet opciju [Jauns/Rediģēt/Pārdēvēt/Dzēst/?] <?>`.

### SWBOUT

Aliass `SWMACRO`. Lejupielādē makro (.swb), kas SolidWorks atjauno modeli kā vienu ierobežotu skici. Skatiet [Pārvietot skices uz un no citiem detaļu modelētājiem](topic:solidworks-sketches).

## Bloki

### ANNOSCALE

Aliasi: `CANNOSCALE`. Pasaka rasējuma anotācijas mērogu un cik anotatīvu objektu tas satur, tad jautā `Jauns anotācijas mērogs`: ierakstiet `1:50`, `1:100`, `2:1`, vienu skaitli (`50` ir 1:50) vai viena no rasējuma pašu mērogu nosaukumu. Katrs anotatīvais teksts un izmērs tiek pārveidots, lai izdrukātos tajā pašā izmērā jaunajā mērogā, vienā atsaukšanas solī; neanotatīvie objekti paliek nemainīti, tāpat kā objekts, kas glabā mērogu sarakstu bez jaunā ({{cmd:OBJECTSCALE}}). Skatiet [Vienības, papīra formāti un mērogi](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Aliasi: `OBJSCALE`. `Atlasiet anotatīvos objektus`, tad `Anotācijas mērogi atlasītajiem objektiem [Pievienot/Dzēst/Pašreizējais mērogs/Saraksts/Iziet] <Pievienot>`. Anotatīvs teksts vai izmērs glabā anotācijas mērogu sarakstu. `Pievienot` un `Dzēst` jautā mērogu (`1:50`, `2:1`, vienu skaitli vai viena no rasējuma pašu mērogu nosaukumu); `Pašreizējais mērogs` pievieno rasējuma anotācijas mērogu; `Saraksts` izdrukā katra objekta mērogus. Skata logs, kura mērogs ir objekta sarakstā, rāda objektu izmērā, kas izdrukā tā papīra augstumu šajā mērogā, ekrānā un drukās. Pēdējo mērogu nevar dzēst. Objekti, kas nav anotatīvi, tiek izlaisti: vispirms Rekvizītos ieslēdziet Anotatīvs. Saraksti tiek saglabāti DWG un DXF kā CadCraft paši dati. Skatiet [Vienības, papīra formāti un mērogi](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Aliasi: `ANNOALL`. `Rādīt anotatīvos objektus visos mērogos [ON/OFF]`. Ieslēgts (kā sākas rasējums): anotatīvs objekts tiek rādīts arī skata logā vai modelī, kura mērogs nav tā sarakstā, izmērā, kāds tam ir. Izslēgts: tur tas netiek rādīts un nevar tikt izvēlēts modelī. Slēdzis ir viens atsaukšanas solis; tas netiek saglabāts failā.

### SCALELISTEDIT

Aliasi: `SCALELIST`. `Mērogu saraksts [Pievienot/Rediģēt/Dzēst/Saraksts/Atiestatīt]` līdz {{key:Enter}}. Pievienot: `Mēroga nosaukums`, `Papīra vienības`, `Rasējuma vienības`. Rediģēt un Dzēst jautā mēroga nosaukumu. Rasējuma pašu mērogi pievienojas skata logu un drukas mērogu sarakstiem un tiek saglabāti kopā ar rasējumu. Skatiet [Vienības, papīra formāti un mērogi](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT un PEDIT

`SPLINE` (`SPL`): `Splaina pirmais punkts [Metode/Objekts] (Pielāgot punktus)`. Pielāgot: punkti, caur kuriem iet līkne; `Close`, `Undo`, tad `Sākuma pieskare` un `Beigu pieskare` (punkts vai {{key:Enter}}). Metode › Kontroles virsotnes jautā pakāpi (no 1 līdz 5) un zīmē pēc kontroles daudzstūra. Objekts pārvērš polilīnijas splainos caur to virsotnēm. `SPLINEDIT` (`SPE`): `[Pielāgot dati/Rediģēt virsotni/Pārvērst polilīnijā/Atvērt vai aizvērt/Apgriezt/Atsaukt/eXit]`; Pielāgot dati `[Pievienot/Dzēst/Pārvietot/Notīrīt/Pieskares/eXit]`; Rediģēt virsotni `[Pievienot kontroles punktu/Pārvietot/Svars/eXit]`. `PEDIT` (`PE`): `[Aizvērt/Atvērt/Savienot/Platums/Piemērot līknei/Splains/Atlīkšķināt/Līniju tipa ģenerēšana/Apgriezt/Atsaukt/eXit]`, `M` vairākiem objektiem; līnijas, loki un splaini tiek piedāvāti kā polilīnijas vispirms. Skatiet [Splaini un polilīnijas](topic:splines).

### BLOCK

Aliasi: `B`, `BMAKE`.

- `Ievadiet bloka nosaukumu`. Ja tāds jau eksistē: `Bloks "…" jau eksistē. Pārdefinēt to? [Jā (Y)/Nē (N)] <N>`.
- `Norādiet ievietošanas bāzes punktu`
- `Atlasiet objektus`. Tie tiek aizstāti ar vienu atsauci uz jauno bloku.

### WBLOCK

Aliasi: `W`, `-WBLOCK`. Ieraksta bloku, dažus objektus vai visu rasējumu kā jaunu DWG vai DXF failu. `WBLOCK avots [Bloks/Viss rasējums/Objekti] <Objekti>`:

- **Objekti**: `Norādiet ievietošanas bāzes punktu` (tas kļūst par jaunā rasējuma sākumu), `Atlasiet objektus`, tad `Failu formāts [DWG/DXF/R12 DXF]` un `Faila nosaukums jaunajam rasējumam`, tad `Ko darīt ar objektiem [Paturēt/Pārvērst blokā/Dzēst]`. Pārvērst aizstāj tos ar vienu atsauci uz bloku ar faila nosaukumu; Dzēst tos noņem.
- **Bloks**: `Bloks, ko ierakstīt`. Bloka paši objekti, ar tā bāzes punktu kā sākumu, ieskaitot iekšējos blokus.
- **Viss rasējums**: katrs objekts modeltelpā. Lapas netiek ierakstītas; izmantojiet {{cmd:SAVEAS}} kopijai, kas tās saglabā.

Jaunais fails satur tikai slāņus, līniju tipus, tekstu un izmēru stilus un blokus, ko izmanto tā objekti, un rasējuma vienības. DWG versija ir tā, ko {{cmd:SAVEAS}} izmantoja pēdējo reizi. Pārlūkprogrammā fails tiek lejupielādēts; Studio atveras saglabāšanas dialogu.

### ATTDEF

Aliasi: `ATT`, `DDATTDEF`, `-ATTDEF`; vai {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Definēt atribūtu}}. Izdrukā režīmus, tad `Ievadiet opciju, ko mainīt (Enter, kad pabeigts) [Neredzams/Konstants/Iepriekš iestatīts]`, `Ievadiet atribūta birkas nosaukumu`, `Ievadiet atribūta uzvedni`, `Ievadiet atribūta noklusējuma vērtību` (`Ievadiet atribūta vērtību`, ja konstants), `Norādiet teksta sākuma punktu`, `Norādiet teksta augstumu`, `Norādiet teksta pagrieziena leņķi`. {{cmd:BLOCK}} ņem atribūtu definīcijas bloka sastāvā.

### EATTEDIT un ATTEDIT

`EATTEDIT` (`DDATTE`, vai veiciet dubultklikšķi uz atsauces ar atribūtiem; {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Rediģēt atribūtus}}): `Atlasiet bloka atsauci ar atribūtiem`, tad dialogs {{ui:Rediģēt atribūtus}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): tā pati atsauce, tad `<uzvedne> (<TAG>) <vērtība>` katram atribūtam; {{key:Enter}} saglabā vērtību. Skatiet [Atribūti](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Atjaunināt tā bloka atsauču atribūtus [Nosaukums/Atlasīt/Visi] <Atlasīt>`. Vērtības tiek saglabātas; jaunie atribūti saņem savu noklusējumu, noņemtie tiek izmesti, izvietojumi tiek atiestatīti.

### BATTMAN

{{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Atribūtu pārvaldnieks}}. Dialogs: bloks, atribūti (birka, uzvedne, noklusējums, režīmi, secība), {{ui:Atjaunināt atsauces (vērtības saglabātas)}}, {{ui:Lietot}}.

### REFEDIT un REFCLOSE

{{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Rediģēt vietā}}. `REFEDIT`: `Atlasiet bloka atsauci rediģēšanai vietā` (vai atlasi). `REFCLOSE`: `Saglabāt izmaiņas "…"? [Saglabāt/Atmest] <Saglabāt>`; joslas {{ui:Saglabāt bloku}} un {{ui:Atmest}} dara to pašu. Visa rediģēšana ir viens atsaukšanas solis. Skatiet [Atribūti](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: vai pildspalvas vilciena spiediens iestata līnijas platumu tam, ko {{cmd:SKETCHFIX}} un {{cmd:SKETCHLIVE}} izveido (sākumā ieslēgts). Skatiet [Skicēt ar pildspalvu](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Aliass: `OFFSTD`. Pasaka, kurš biroja standarts ir spēkā šim rasējumam un no kurienes tas nāk: rasējuma paša ieraksts, jūsu komandas kopīgais standarts vai jūsu Noklusējuma politikas (teksta augstumi `all.anno.*`); ja nav neviena, programmas paši izmēri. `[Importēt/Slāņi/Titula bloks/Notīrīt/eXit]`: `Importēt` nolasa `cc-office-standard` .json (ierakstu, ko raksta SuperCad un BimCraft) šajā rasējumā un saglabā to kopā ar to DWG un DXF; `Slāņi` pievieno biroja slāņus, kas rasējumam trūkst, vienā atsaukšanas solī, un nekad neizņem nevienu; `Titula bloks` uzskaita biroja laukus ar šī rasējuma pašu vērtībām; `Notīrīt` noņem rasējuma paša ierakstu. Anotatīvā teksta un izmēru augstumi seko spēkā esošajam standartam. Skatiet [Vienības, papīra formāti un mērogi](topic:units-papers-scales).

### BPARAMS

Aliasi: `BPM`, `BLOCKPARAMS`. Atver Parametru pārvaldnieku bloka redaktorā, atlasītās atsauces blokam vai blokam, ko nosaucat (`Bloka nosaukums`): parametri ar formulām, vairāki redzamības parametri ar saviem stāvokļiem un atlasītās atsauces pašas vērtības un stāvokļi. Skatiet [Jūsu pašu parametri un redzamības stāvokļi](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` dara to pašu komandrindā: `[Parametrs/Redzamība/Stāvoklis/Piešķirt/Atsauce/Pabeigt]`.

### BEDIT un BCLOSE

`BE`; vai {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Rediģēt bloku}}. `Ievadiet rediģējamā bloka nosaukumu <atlasītās atsauces bloks>` atver bloka redaktoru. `BCLOSE` jautā `Aizvērt bloka redaktoru "…" [Saglabāt/Atmest] <Saglabāt>`; joslas {{ui:Saglabāt bloku}} un {{ui:Atmest izmaiņas}} dara to pašu. Viss, kas izdarīts redaktorā, ir viens atsaukšanas solis.

### VIEWBASE

Aliasi: `FLATSHOT`. Plakns 2D cieto ķermeņu skats 3D cilnē: `Skats [Priekšā/Augšā/Pa labi/Pa kreisi/Aizmugure/Apakšā/Izometrija]`, `Paslēptās līnijas [Rādīt/Paslēpt]`, mērogs (`1:20`, `2:1`; {{key:Enter}} paņem to, kas iederas lapā), tad skata centrs. Viena bloka atsauce, redzamās malas uz VIEW-VISIBLE, paslēptās punktētas uz VIEW-HIDDEN. Skatiet [Plakni skati uz lapas](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliasi: `-PUBLISH`; vai {{ui:Visas lapas vienā PDF failā}} dialogā {{ui:Drukāt PDF}}. `Lapas drukāšanai [Visas/Dažas]`: {{key:Enter}} drukā katru lapu, `S` jautā nosaukumus, atdalītus ar komatiem. Viens PDF, lapa un grāmatzīme katrai lapai. Skatiet [Visas lapas vienā PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliasi: `SSM`, `SHEETSETMANAGER`. Pārved jūs uz kreisā paneļa sadaļu {{ui:Lapu kopa}}: lapas no daudziem rasējumiem, numurētas un nosauktas, to titula bloki aizpildīti no kopas, publicētas kā viens PDF. Skatiet [Lapu kopas](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): izvēlieties DWG vai DXF, tad tā ievietošanas punktu. {{cmd:XREF}} (`XR`, `-XREF`): `Saistītie rasējumi [?/Pievienot/Atkārtoti ielādēt/Saistīt/Atvienot] (Enter: ?)`; ja ir vairāk nekā viena saite, izvēlieties vienu no tās atsaucēm vai ierakstiet `N` un tās nosaukumu. Skatiet [Saistītie rasējumi](topic:files#linked-drawings-external-references).

### COUNT

Aliasi: `BCOUNT`; vai {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Saskaitīt blokus}}. `Atlasiet bloka atsauci, ko saskaitīt, vai [Visas/Eksportēt] (Enter: Visas)`: izvēle atlasa un saskaita katru šā bloka atsauci šajā telpā; {{key:Enter}} vai `A` uzskaita visas; `E`, tad `C` (skaiti) vai `A` (atribūti) lejupielādē CSV. Skatiet [Saskaitīt blokus un eksportēt grafiku](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliasi: `I`, `DDINSERT`.

- `Ievadiet bloka nosaukumu vai [Fails/Bibliotēka] <pēdējais bloks>` (burtu lielums nav svarīgs). `F` jautā DWG vai DXF, tad visu rasējumu vai vienu no tā blokiem; jau izmantots nosaukums jautā {{ui:Paturēt esošos}} vai {{ui:Pārdēvēt}}. `L` atver bibliotēkas paneli.
- `Norādiet ievietošanas punktu [Mērogs (S)/Pagriezt (R)]`. `S` jautā `Norādiet mēroga koeficientu`, `R` jautā `Norādiet pagrieziena leņķi`; abi tiek atcerēti.
- Kad bloks jau stāv blakus objektiem, kas atkārtojas citur bez tā, rindā teikts, cik vietas ieteiktas, un uzvednē parādās `suGgested`: `G` tās parāda; noklikšķiniet tuvu vienai, lai tur ieliktu bloku, `A` visām, {{key:Enter}}, lai atgrieztos. Tie pārņem savu kaimiņu pagriezienu un atribūtu noklusējuma vērtības. Rasējumi ar vairāk nekā 20 000 objektiem atvērtajā telpā netiek meklēti.
- Tad `Ievadiet <uzvedne> (<TAG>) <noklusējums>` katram atribūtam, ko bloks pieprasa. Skatiet [Bloka atribūti](topic:attributes).

### LIBRARY

Aliasi: `LIB`. Atver bibliotēkas paneli: ievietot vienumus, pārbaudīt atjauninājumus, bibliotēkas autori. Nekādu jautājumu. Skatiet [Ievietošana no faila vai bibliotēkas](topic:insert-from-file-and-library).

### STEELMEMBER

Aliasi: `SMEMBER`; vai {{ui:3D elements}} bibliotēkas cilnē {{ui:Standarta}}. `Profila izmērs <W12x26>` (kā to uzskaita cilne), tad `Sākuma punkts [Kolonna]` un `Beigu punkts`: cieta sija 3D cilnē starp diviem punktiem, novietota uz zemes. `C` jautā kolonnas bāzes punktu un tās augstumu. Viens atsaukšanas solis. Skatiet [Novietot tērauda profilus un standarta detaļas](topic:steel-and-standard-parts).

### PARTSLIST

Aliasi: `PLIST`. `Detaļu saraksta augšējais kreisais stūris`, tad `Teksta augstums <2.5>`: zīmē tabulu ar katru standarta detaļu un tērauda profilu, kas novietots no bibliotēkas (vienumu numuri, daudzums, detaļa, standarts, izmērs, garums, materiāls, masa). Viens atsaukšanas solis. Skatiet [Novietot tērauda profilus un standarta detaļas](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliasi: `PU`. Noņem bloku definīcijas, ko nekas neizmanto. Nekādu jautājumu.

### DELBLOCKS

Vai {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Dzēst blokus}}. `Atlasiet bloku dzēšanai [Nosaukums/eXit]`: norādiet bloka atsauci vai `N` sarakstam ar filtru (izvēlieties vairākus), vai `X` / {{key:Enter}}, lai beigtu. Katra atsauce iet — modelī, katrā lapā un iekšējos blokos —, un tad definīcija, un komandrinda pasaka, kas tika dzēsts un kas ne. Bez nosaukuma blokus un saistītos rasējumus nepiedāvā. Uzvedne atgriežas nākamajam blokam; visa komanda ir viens atsaukšanas solis.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} ielīmē to, ko kopējāt ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}), kā vienu bloku: izvēlieties ievietošanas punktu, un tur tiek novietota viena atsauce uz jaunu bloku, atlasīta. Blokam ir savs nosaukums (`A$C` un numurs); {{cmd:RENAME}} dod jūsu. Viens atsaukšanas solis noņem atsauci un bloku.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} jautā bloku, ko aizstāt, un bloku, ko ielikt tā vietā (`?` uzskaita blokus), tad maina katru atsauci modelī, katrā lapā un iekšējos blokos. Katra atsauce saglabā savu vietu, mērogu, pagriezienu, slāni un to atribūtu vērtības, ko abi bloki satur; atribūti, ko satur tikai jaunais bloks, sākas ar noklusējumiem, un tas pasaka, kuras vērtības tika izmestas. Kad nekas vairs neizmanto veco bloku, tas piedāvā to noņemt. Tas atsakās no saistītiem rasējumiem un aizstājēja, kas ietu bloka iekšienē. Viens atsaukšanas solis.

### MINSERT

{{cmd:MINSERT}} ievieto bloku rindās un kolonnās: bloka nosaukums, ievietošanas punkts, mērogs, pagrieziens, rindu un kolonnu skaits un attālumi starp tām. Visa kopa pagriežas kopā ar pagriezienu. Katra ir sava atsauce (līdz 10 000), tāpēc jebkuru var pārvietot vai izdzēst vēlāk.

### BLOCKSPALETTE

Aliasi: `BLOCKSPAL`; vai {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Bloku panelis}}. Parāda panelis {{ui:Bloki}} ar kursoru tā filtrā. Katram blokam ir neliels attēls; tie, kas ievietoti nesen, ir pirmie. Divas pogas blakus filtram pārslēdz starp sarakstu un attēlu režģi. Noklikšķiniet uz attēla (vai {{ui:Ievietot}}), lai ievietotu bloku ar {{cmd:INSERT}}, vai velciet to uz rasējumu, lai to ievietotu, kur nometat.

{{ui:Bibliotēkas}} zem saraksta: {{ui:Pievienot rasējumu}} ņem jūsu pašu DWG vai DXF failu un uzskaita tā blokus ar attēliem, un visu rasējumu kā vienu bloku. Bloka novietošana nokopē tā definīciju (un blokus, ko tas ietver, un to slāņus) šajā rasējumā, kā dara {{cmd:INSERT}} opcija `Fails`; bloks, kas jau ir šeit ar to pašu definīciju, tiek izmantots bez jautājuma, bet tāda paša nosaukuma, kas atšķiras, gadījumā tiek jautāts {{ui:Paturēt esošos}} vai {{ui:Pārdēvēt}}. Pārlūkprogrammā fails paliek, līdz lapa tiek aizvērta. CadCraft Studio {{ui:Pievienot mapi}} uzskaita rasējumus mapē, katru atverot, kad noklikšķināt uz tā, un faili un mapes tiek atcerēti. Mazais x noņem bibliotēku no saraksta; fails netiek aizskarts. Koplietotā {{ui:Bibliotēka}} ir kas cits: skatiet [Ievietošana no faila vai bibliotēkas](topic:insert-from-file-and-library).

### BCONVERT

Vai {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Pārvērst atkārtojumus blokos}}. Atrod atkārtotu ģeometriju un pārvērš katru kopiju par atsauci uz vienu bloku.

- `Atlasiet objektus, kas atkārtojas, vai [Bloks]`: viena kopijas objekti. `B` nosauc esošu bloku, lai atrastu brīvas tā objektu kopijas.
- `Kopija var būt: spoguļots = Nē, mērogots = Nē; slānis, krāsa, līniju tips un līnijas platums = Atbilst … [Spoguļots/Mērogots/Rekvizīti]`: `M`, `S` un `P` pārslēdz to, kas skaitās par kopiju; {{key:Enter}} meklē. Iestatījumi tiek atcerēti.
- `Jaunā bloka nosaukums <Block1>`, tad `Norādiet bloka bāzes punktu` ({{key:Enter}} paņem atlases apakšējo kreiso stūri).
- Tas pasaka, cik citu objektu kopu ir tā pati ģeometrija, izceļ visu, ko aizstātu, un jautā `Jā/Nē`.

Kopija ir tie paši objekti, pārvietoti un pagriezti jebkurā leņķī (un spoguļoti vai mērogoti ar vienu koeficientu, ja tas ir ieslēgts): katram objektam jābūt savam pārim, ar precizitāti līdz vienai miljondaļai no atlases izmēra. Katrai atsaucei ir savs pagrieziens un mērogs (spoguļotajai — negatīvs Y mērogs), un slānis, ko tās objekti dalīja. Objekti bloķētos slāņos paliek neskarti un tiek saskaitīti. Tas meklē atvērtajā telpā (modelī vai atvērtajā lapā). Ļoti liela meklēšana apstājas pie darba robežas un to pasaka. Viens atsaukšanas solis.

### BSEARCH

Vai {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Atrast blokus}}. `Atrast blokus pēc [Nosaukums/Atribūts/Ģeometrija] <Nosaukums>`:

- `N`: daļa no bloka nosaukuma vai raksts ar `*` un `?`. Uzskaita katru bloku ar tā atsaucēm šeit un visā rasējumā.
- `A`: atribūta vērtība vai `TAG=vērtība`. Uzskaita blokus, kuru atsauces to satur, ar atrastajām vērtībām. Konstantie atribūti skaitās.
- `G`: atlasiet objektus vai vienu bloka atsauci, un tiek uzskaitīti bloki, kuru forma ir vismaz 85% līdzīga, labākie pirmie. Izmērs, pagrieziens un spoguļošana neskaitās. Mērījums salīdzina attālumus starp punktiem, kas izkliedēti pa kontūrām, tāpēc tas atrod līdzīgus; precīzas kopijas meklējiet ar {{cmd:BCONVERT}}.

Atvērtajā telpā atrastās atsauces tiek atlasītas nākamajai komandai.

### BREPLACE

Vai {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Aizstāt blokus}}. `Aizstāt [Atlasītos/Visus]`: `S` aizstāj atlasītās bloku atsauces ar bloku, ko nosaucat; `A` jautā bloku un tā aizstājēju un maina katru atsauci, kā dara {{cmd:BLOCKREPLACE}} (tas pats kods). Atsauce saglabā savu vietu, mērogu, pagriezienu, slāni un to atribūtu vērtības, ko abi bloki satur; vērtības, kurām jaunajam blokam nav vietas, tiek izmestas un nosauktas. `?` uzskaita blokus. Viens atsaukšanas solis.

### DATAEXTRACTION

Aliasi: `EATTEXT`, `DX`; vai {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Datu izgūšana}}. Uzskaita blokus, to atribūtus un objektu rekvizītus kā tabulu vai CSV failu.

- Strādā ar atlasi vai jautā `Atlasiet objektus (Enter: viss šajā telpā)`.
- `Saraksts: [Bloki/Objekti/Visi]`, kad atlasē ir abi. Nenosauktie bloki, tabulas un materiālu saraksti nekad netiek uzskaitīti.
- Tā izdrukā kolonnas, ko izvēlēties (nosaukums, tips, slānis, X, Y, pagrieziens, mērogs, garums, laukums, krāsa, līniju tips, telpa un viena katram atribūta birkai), tad `Kolonnas pēc nosaukuma vai numura, atdalītas ar komatiem`. {{key:Enter}} paņem atzīmētās: nosaukumu un katru atribūtu blokiem; tipu, slāni un garumu objektiem.
- `Saglabāt identiskas rindas kopā ar skaitu? [Jā/Nē] <Jā>`, tad `Ievietot sarakstu kā: [Tabula/Csv] <Tabula>`. Tabula ir parasta tabula ({{cmd:TABLEDIT}} to rediģē) un nav dzīva: palaidiet komandu vēlreiz, kad rasējums mainās.
- Tā noraida kolonnu, kuras nav sarakstā. Tabula satur 1999 datu rindas; CSV fails tās ņem visas.

### COUNTTABLE

Saskaita atlasīto (vai atvērtās telpas) bloku atsauces un ieliek skaitus tabulā (`Bloks`, `Skaits`) vai CSV failā. Skaitam, kas seko rasējumam pašam, skatiet {{cmd:BOMTABLE}}.

## Lapas un drukāšana

### LAYOUT

Aliasi: `LO`, `NEWLAYOUT`; vai poga {{ui:+}} zem rasējuma. Jauna lapa ar apmali, titula bloku un vienu skata logu, uz ISO A3 (vai Tabloid rasējumiem collās vai pēdās). Nekādu jautājumu.

### MVIEW

Aliasi: `MV`. Tikai lapā ({{cmd:VPORTS}} lapā dara to pašu).

- `Norādiet skata loga stūri [Daudzstūris/Objekts]`, `Norādiet pretējo stūri`. Skata logs rāda visu modeli standarta mērogā.
- `P` (Daudzstūris): noklikšķiniet uz kontūras stūriem (`Atsaukt`, `Aizvērt`), {{key:Enter}}, kad pabeigts. Tas noraida mazāk nekā trīs stūrus.
- `O` (Objekts): `Atlasiet slēgtu objektu skata loga kontūrai`: slēgta polilīnija, riņķis vai elipse uz lapas. Skata logs pārņem tā formu (līknes kā īsi taisni gabali); objekts paliek kā bija. Tas noraida objektu, kas nav slēgts.

### VPCLIP

Apgriež skata logu, kas jau ir uz lapas. `Atlasiet apgriežamo skata logu` (vai atlasiet to vispirms), tad `Atlasiet objektu, pēc kura apgriezt [Daudzstūris/Dzēst]`:

- Noklikšķiniet uz slēgtas polilīnijas, riņķa vai elipses, vai {{key:Enter}} (vai `P`), lai noklikšķinātu daudzstūra stūrus.
- `D` (Dzēst, piedāvāts, kad skats ir apgriezts) padara to atkal par taisnstūri: kasti ap kontūru, kāda tai bija.
- Tas, ko skats rāda uz papīra, nepārvietojas, un tā mērogs paliek. Modelis tiek zīmēts un drukāts tikai kontūras iekšienē, un apmale seko tai. Viens atsaukšanas solis.
- Apgrieztam skata logam ir rokturis katrā kontūras stūrī, papildus centram un četriem tā kastes stūriem (velkot kastes stūri, kontūra stiepjas kopā ar to). Rekvizītos rādīts Kontūra: Taisnstūris vai Apgriezts ar stūru skaitu.
- DWG un DXF 2000 faili glabā kontūru CadCraft vajadzībām. Citas programmas atver skata logu kā taisnstūri ap to; DXF R12 glabā tikai taisnstūri.
- Modeļa cilnē tā pasaka, ka skata logi atrodas lapās.

### VPORTS

Aliasi: `VIEWPORTS`. {{cmd:SPLIT}} ir tas pats arī no lapas, un {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Sadalīt blakus}}, {{ui:Sadalīt pa augšu un apakšu}}, {{ui:Četri logi}}, {{ui:Viens logs}} to palaiž. Modelī: `Ievadiet logu skaitu [Viens/2/3/4] <3>`; `2` jautā `[Horizontāli/Vertikāli] <Vertikāli>` (Vertikāli = blakus), `3` jautā `[Pa kreisi/Pa labi] <Pa labi>` (kur iet lielais logs). Katrs logs paturē savu skatu un telpu; klikšķis padara logu aktīvu. Lapā tas ir {{cmd:MVIEW}}. Skatiet [Sadalīt ekrānu](topic:split-screen).

### VPVIEW

Nav aliasu. Tikai lapā.

- `Atlasiet skata logu` (izlaists, ja viens ir atlasīts), tad modelī: `Norādiet pirmo parādāmā loga stūri`, `Norādiet pretējo stūri`.

### UCS

Nav aliasu. Jūsu pašu koordinātu sistēma; nav rediģēšana. `Norādiet UCS sākumpunktu [Nosaukta/Objekts/Iepriekšējā/Pasaule/Z/3point] <Pasaule>`: punkts ir jauns sākumpunkts, tad `Norādiet punktu uz X ass (Enter paturē leņķi)`. `Z`: `Norādiet pagrieziena leņķi ap Z asi <90>`. `3`: sākumpunkts, punkts uz pozitīvās X ass, punkts pozitīvās Y puses. `OB`: `Atlasiet objektu UCS izlīdzināšanai`. `NA`: `[Atjaunot/Saglabāt/Dzēst/?]` un nosaukums. Skats pagriežas tā, ka jaunā X ass ir horizontāla. Skatiet [Pagriezt skatu un izmantot savas koordinātas](topic:ucs-and-turned-view).

### PLAN

Nav aliasu. `Ievadiet opciju [Pašreizējā ucs/Ucs/Pasaule] <Pašreizējā ucs>`: pagriež aktīvā loga skatu tā, lai UCS X ass (vai pasaules) ir horizontāla. Nekas rasējumā nepārvietojas.

### TURNLEFT, TURNRIGHT, TURNWORLD

Nav aliasu; vai {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Pagriezt skatu par 90° pa kreisi}}, {{ui:Pagriezt skatu par 90° pa labi}}, {{ui:Atpakaļ pasaulē}}. Tas pats kas `UCS Z -90`, `UCS Z 90` un `UCS W`, ar skatu, kas seko.

### VPLAYER

Nav aliasu. Lapā vai skata logā iekšienē. `Ievadiet opciju [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` jautā slāņu nosaukumus (komatus, `*` un `?` aizstājējzīmes), tad `[Visi/Atlasīt/Pašreizējais] <Pašreizējais>` skata logus; Reset atgriež katru slāni uz tā noklusējumu "iesaldēts jaunos skata logos"; `V` iestata šo noklusējumu (`[Iesaldēts/Atsaldēts]`), ko izmanto {{cmd:MVIEW}}. `?` uzskaita slāņus, kas iesaldēti pašreizējā skata logā. Slāņu paneļa skata logu kolonna dara to pašu vienam skata logam. Skatiet [Iesaldēt slāni vienā skata logā](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliasi: `MS`; vai veiciet dubultklikšķi skata logā iekšienē. Tikai lapā. Strādāt ar modeli caur skata logu: atlasīto, vienīgo lapā vai `Noklikšķiniet skata logā, lai strādātu`. Panoramēšana un tālummaiņa iekšā maina skata loga skatu (logs ar bloķētu displeju to paturēs, un lapa pārvietojas); jaunais skats tiek ierakstīts kā viens atsaukšanas solis. Skatiet [Strādāt ar modeli caur skata logu](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliasi: `PS`; vai veiciet dubultklikšķi ārpus skata loga, vai noklikšķiniet uz cilnes zem rasējuma. Atgriežas lapā.

### PLOT

Aliasi: `PRINT`, `PUBLISH`, `EXPORTPDF`; vai {{key:Mod+P}}. Atver dialogu {{ui:Drukāt PDF}}. Skatiet [Drukāt PDF](topic:plot-pdf).

### PLOTSTYLES

Aliasi: `STYLESMANAGER`, `PSTABLES`; vai {{ui:Rediģēt tabulas…}} dialogā {{ui:Drukāt PDF}}. Atver {{ui:Drukas stila tabulas}}: ko katra krāsa drukājas kā (krāsa, pelēka, tinte, līnijas platums), glabājas kopā ar rasējumu. Skatiet [Drukas stila tabulas](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} pārvieto objektus starp lapu un modeli caur skata logu, mērogoti un pagriezti, lai izskatītos vienādi no otras puses. Lapā atlasiet objektus, un tie iet uz modeli (izvēlieties skata logu, ja lapā ir vairāk nekā viens). Kamēr strādājat ar modeli caur skata logu ({{cmd:MSPACE}}), atlasītie objekti nonāk lapā. Tā pasaka, cik reižu lielāki vai mazāki tie kļuva. Skata logi paliek savā lapā. Viens atsaukšanas solis.

### ISODRAFT

{{cmd:ISODRAFT}} ieslēdz vai izslēdz izometrisko zīmēšanu `ON` vai `OFF`, vai pāriet tieši uz plaknēm `Left`, `Top` vai `Right`. Kamēr tas ir ieslēgts: Ortho ({{key:F8}}) notur līnijas gar plaknes divām asīm (kreisā: 90° un 150°; augšējā: 30° un 150°; labā: 30° un 90°), polārā izsekošana ({{key:F10}}) seko tām pašām asīm, piesaiste režģim ({{key:F9}}) izmanto izometrisko režģi, un režģis ({{key:F7}}) tiek zīmēts ar līnijām 30°, 90° un 150°. {{cmd:ELLIPSE}} iegūst `Isocircle`: dodiet centru un rādiusu (vai `Diametrs`), un tā zīmē elipsi, kādu riņķis izskatās pašreizējā plaknē. Rasējums paliek plakans: tās ir palīgrīki, lai zīmētu gleznainu skatu, nevis 3D modeli. Iestatījums ir šai sesijai un netiek saglabāts failā.

### ISOPLANE

{{cmd:ISOPLANE}} izvēlas plakni, uz kuras strādā izometriskā zīmēšana: `Left`, `Top` vai `Right`. Enter iet uz nākamo plakni. Kamēr izometriskā zīmēšana ir ieslēgta, {{key:F5}} dara to pašu komandas vidū; kamēr tā ir izslēgta, {{key:F5}} tiek atstāts pārlūkprogrammai.

## Pārbaude

### CAL

Izdrukā aprēķina vērtību tā, kā to lasa visur, kur ieraksta garumu.

- `Izteiksme`: ierakstiet to, piemēram, `12'6"+3/4"` vai `(24'-0")/3`, un nospiediet {{key:Enter}}. CadCraft izdrukā `= 12'-6 3/4"   (150.75 rasējuma vienības)`. Skatiet [Aritmētika ierakstītā vērtībā](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliasi: `DI`; vai {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Mērīt attālumu}}.

- `Norādiet pirmo punktu`, `Norādiet otro punktu`. Izdrukā attālumu, leņķi, Delta X un Delta Y.

### AREA

Aliasi: `AA`; vai {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Laukums}}. Izdrukā laukumu un perimetru.

- `Norādiet pirmo stūra punktu [Objekts/Pievienot laukumu/Atņemt laukumu] <Objekts>`
  - Noklikšķiniet vai ierakstiet stūrus; pie `Norādiet nākamo punktu (Enter aizver) [Atsaukt (U)]` nospiediet {{key:Enter}}, lai aizvērtu kontūru. `U` atsauc pēdējo stūri.
  - {{key:Enter}} vai `O`, tad `Atlasiet objektu`: riņķis (izdrukā apkārtmēru), elipse, polilīnija (atvērta tiek aizvērta ar taisnu līniju laukumam, un tās garums tiek izdrukāts) vai svītrojums (caurumi tiek atņemti).
  - `A` (Pievienot laukumu) un `S` (Atņemt laukumu) saglabā kopējo summu: uzvedne sākas ar `(PIEVIENOŠANAS režīms)` vai `(ATŅEMŠANAS režīms)`, katrs laukums tiek pievienots vai atņemts, un pēc katra tiek izdrukāts `Kopējais laukums = …`. Šajos režīmos `O` izvēlas objektus līdz {{key:Enter}}, un {{key:Enter}} pirmajā uzvednē beidz komandu.

### MEASUREGEOM

Aliasi: `MEA`. `Ievadiet opciju [Attālums/Rādiuss/Leņķis/LAukums] <Attālums>`; pēc katra mērījuma tas jautā vēlreiz, ar `eXit` kā noklusējumu.

`Ātri` mēra ap rādītāju, kad to pārvietojat: attālumu līdz tuvākajam objektam pa labi, augšā, pa kreisi un lejā (pa pašreizējā UCS asīm), zīmēts, kamēr ejat, un leņķi, kur divi no šiem kaimiņiem ir taisni un saskaras. Klikšķis ieraksta četrus attālumus, skaidro platumu un augstumu un leņķus vēsturē; Enter atgriež uz opcijām. Tas nolasa to, kas ir ekrānā.

- `D`: divi punkti, kā {{cmd:DIST}}.
- `R`: `Atlasiet loku vai riņķi`; izdrukā rādiusu un diametru.
- `A`: loks (tā ietvertais leņķis), līnija un tad otra līnija (leņķis starp tām, virzienā uz to tālākajiem galiem), vai {{key:Enter}} un trīs punkti (virsotne, tad abi gali).
- `AR`: kā {{cmd:AREA}}, viens laukums.

### ID

Nav aliasu. `Norādiet punktu`; izdrukā tā X un Y.

### LIST

Aliasi: `LI`, `LS`. `Atlasiet objektus`; izdrukā katra objekta tipu, slāni un galvenos mērījumus.

### MASSPROP

{{cmd:MASSPROP}} dod šķērsgriezuma rekvizītus reģioniem un slēgtiem objektiem, ko atlasāt, kopā: laukums, perimetrs, ierobežojošā kaste, smaguma centrs, inerces momenti ap X un Y asīm caur sākumpunktu, inerces reizinājums, giracijas rādiusi, tie paši momenti ap smaguma centru un galvenie momenti ar to asu virzieniem. Caurumi reģionā skaitās kā caurumi. Vērtības ir rasējuma vienībās un precīzas kontūrām, kas veidotas no līnijām un lokiem; elipses un splaini tiek mērīti kā īsi taisni segmenti, un to pasaka. Pēc pārskata tas jautā, vai to ierakstīt teksta failā. Objekti, kas nav slēgti, tiek izlaisti, un tā pasaka, cik tādu ir.

## Skats, fails un citi

### ZOOM

Aliasi: `Z`.

- `Norādiet loga stūri, ievadiet mēroga koeficientu (nX) [Robežas/Viss/Logs/Iepriekšējais/Mērogs/Centrs]`. Noklikšķiniet divus stūrus loga izveidei. `E`, `A` vai Enter: viss rasējums.
- `P` (Iepriekšējais, vai {{ui:Iepriekšējais}} rīkjoslā) atgriežas pie skata pirms tā, līdz 10 skatiem katrā cilnē; virkne ritināšanas soļu vai viena panoramēšana skaitās kā viens skats.
- Skaitlis, piemēram, `2`, `2x` vai `0.5x` (vai `S`, un tad skaitlis), tālina vai tuvina ar šo koeficientu ap ekrāna vidu.
- `C` jautā `Norādiet centra punktu` un `Ievadiet augstumu vai palielinājumu (nX)`.

### PDFATTACH, PDFIMPORT un PDF komandas

Aliasi: `PDFATT` priekš {{cmd:PDFATTACH}}, `PDFIM` priekš {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} novieto PDF lapu zem rasējuma (fails, lapa, ievietošanas punkts, mērogs, pagrieziens); {{cmd:PDFIMPORT}} pārvērš lapas līnijas, līknes, aizpildījumus un tekstu rasējuma objektos slāņos ar nosaukumiem pēc PDF, patiesā izmērā, ievadītā mērogā vai mērogotus pēc diviem punktiem un patiesa attāluma. {{cmd:PDFCLIP}} apgriež pamatni, {{cmd:PDFADJUST}} iestata izbalēšanu, kontrastu, monohromu vai to izslēdz, {{cmd:PDFLAYERS}} pārslēdz paša PDF slāņus, un {{cmd:PDF}} dod CadCraft failus, ko rasējuma pamatnes izmanto. Skatiet [PDF pamatnes](topic:pdf-underlay).

### AUTOCOMPLETE

Aliasi: `AUTOC`. Rasējuma automātiskā aizpildīšana: kad neviena komanda nedarbojas, pelēks spoks rāda, ko rasējuma paši raksti ieteic tālāk. {{cmd:AUTOCOMPLETE}} ieslēdz `On` vai izslēdz `Off` (arī Iestatījumi › CadCraft) vai `Show` parāda, ko tā ieteiktu tagad. **Tab** zīmē spoku kā vienu atsaukšanas soli, **Esc** to noraida, līdz rasējums mainās. Tā atrod trīs lietas jaunākajos objektos: nākamo kopiju kaut kam, kas zīmēts divreiz vai vairāk ar vienmērīgu soli (stabiņi, kolonnas, kāpņu paaugstinājums un iesprausts), nākamos soļus polilīnijas kāpnēs un trūkstošo malu istabai vai sienu ķēdei. Vidū {{cmd:LINE}} vai {{cmd:PLINE}} spoks ir **nākamais punkts**: nākamais kāpņu solis (paaugstinājums, iesprausts, paaugstinājums…), četrs stūris taisnstūrim, punkts, kas to aizver, vai vēl viens vienāds solis. Piekļūstiet ar kursoru tuvu tam un nospiediet **Tab**, it kā noklikšķinātu tur; turpiniet vai nospiediet Enter. Aprēķināts šajā datorā pēc noteikumiem, bez modeļa.

### AUTOSHEET

Aliasi: `ASH`. Lapas, kas izkārtojas pašas. {{cmd:AUTOSHEET}} ņem rasējuma daļas (jūsu nosauktos skatus vai atsevišķās modeļa daļas vai visu modeli), izvēlas papīra izmēru (vai to, ko dodat), katrai daļai piešķir standarta mērogu (vienu visām vai lielāko, ko katra var ņemt) un izvieto skatus rindās jaunās lapās ar titula bloku un parakstu (nosaukums un mērogs) zem katra. Kas neiederas vienā lapā, saņem savu lapu. Viens atsaukšanas solis. Aprēķināts šajā datorā pēc noteikumiem, bez modeļa.

### PHOTOSKETCH

Aliasi: `PSK`. Skices fotogrāfija uz rasējumu. Izvēlieties fotogrāfiju (JPEG, PNG vai TIFF) rokraksta skicei uz papīra lapas. {{cmd:PHOTOSKETCH}} atrod lapas četrus stūrus, iztaisno perspektīvu, pieņem papīra izmēru, ko nosaucat (`Paper` vai tuvāko standarta), un skices `Scale` (1 : n), tad pārzīmē pildspalvas līnijas līnijās, lokos un riņķos, slānis katrai pildspalvas krāsai (melna, sarkana, zila, zaļa). Ja tā nevar atrast papīra malu, tā paņem visu fotogrāfiju kā lapu un to pasaka. Teksts netiek iekļauts. Viens atsaukšanas solis. Veikts šajā datorā ar klasisku attēlu apstrādi, bez modeļa, nekas nekur nav nosūtīts. Skatiet arī skenēto rasējumu komandas.

### AUTODIM

Aliasi: `ADIM`. Automātiska izmēru noteikšana pēc noteikumiem. {{cmd:AUTODIM}} izmēra atlasītos objektus (vai visu rasējumu) pēc to līmeņa un vertikālajām malām: izmēru ķēde gar malām, ko izvēlaties (`Sides`), viens kopējais izmērs ārpus tās, katras atveres platums (atstarpe starp kolineārām sienu līnijām), diametrs katram caurumu izmēram un ar `Grid` — attālums starp režģa līnijām. Izmērs, kas jau ir, netiek veidots atkārtoti. Viens atsaukšanas solis. Aprēķināts šajā datorā pēc noteikumiem, bez modeļa.

### GRIDMOVE

Aliasi: `GM`. Režģa līnijas pārvietošana nes kopā to, kas uz tās karājas. {{cmd:GRIDMOVE}} pārvieto režģa līniju (līniju slānī, kura nosaukums saka grid vai axis) un to, kas tai pieķeras: sienas ar galu uz līnijas stiepjas, lai sekotu tai, sienas gar to pārvietojas veselas, kolonnas (bloku atsauces un riņķi uz līnijas), tās aplītis un birka pārvietojas, un izmēri, kuru punkti atrodas uz tās, mēra jauno soli. Dodiet divus punktus (skaitās tikai daļa pāri līnijai) vai `Distance`. Viens atsaukšanas solis atceļ visu. Veikts pēc noteikumiem šajā datorā.

### DETAILS

Aliasi: `DET`. Detaļas, kas atrod jūs. {{cmd:DETAILS}} glabā jūsu firmas pašas detaļas: `Add` ieliek šī rasējuma bloku sarakstā, `List` un `Remove` pārvalda to, `Find` sarindo tās atlasītajam (vai tam, ko pēdējo zīmējāt) pēc vārdiem tā slāņos, bloku nosaukumos, svītrojumu rakstos un piezīmēs salīdzinot ar katras detaļas nosaukumu un piezīmēm, tāpēc logu galviņa atrod jūsu palodzes apšuvumu. Izvēlieties numuru un punktu, lai to novietotu. Ar ieslēgtu `Hint` (arī Iestatījumi › CadCraft) atlasot kaut ko, ar ko atbilst detaļa, statusa joslā parādās viena rinda. Saraksts tiek glabāts šajā pārlūkprogrammā, šajā datorā, un tas ir saraksts, kurā meklē. `Share` ieliek to arī jūsu Dokumentu mapē (`.cadcraft/firm-details.json`, ar katra bloka rasējumu): `Pull` pievieno to, ko jūsu komandai ir un jums nav, `Push` pievieno to, kas jums ir un viņiem nav, `Both` dara abus, un no abām pusēm nekas nekad netiek noņemts. Vispirms atveriet Dokumentu mapi ({{cmd:DOCUMENTS}}); ja šī mape ir Team Cloud Plan mape, visa komanda dala vienu sarakstu. Vienumam Bibliotēkas panelī detaļai ir poga **Pievienot manām firmas detaļām**, kas to ieliek tajā pašā sarakstā. Veikts pēc vārdiem šajā datorā, bez modeļa.

### SKETCHFIX

Aliasi: `SKF`. Pildspalvas skices kļūst par precīzu ģeometriju. Velciet vienu brīvroku vilcienu vienlaikus (pildspalva, pele vai pirksts), tad Enter. Katrs vilciens tiek nolasīts kā līnija, riņķis, loks, taisnstūris vai polilīnija: gandrīz horizontālas un vertikālas līnijas padarītas precīzi horizontālas un vertikālas, slēgts apaļš vilciens kļūst par riņķi, slēgts vilciens ar četriem taisniem stūriem — par taisnstūri, un vilcienu gali tiek savilkti kopā un līdz galiem, kas jau ir rasējumā. Viens atsaukšanas solis. Aprēķināts šajā datorā pēc noteikumiem, bez modeļa.

### SCANATTACH un skenēto rasējumu komandas

Aliasi: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} aliasa nav. Tās strādā ar attēlu, katra — viens atsaukšanas solis. {{cmd:SCANATTACH}} ievieto PNG, JPEG, TIFF (viena lapa vai visas) vai PDF lapu, kas ir attēls. {{cmd:SCANSCALE}} mērogo lapu pēc diviem izvēlētiem punktiem un patiesā attāluma. {{cmd:SCANALIGN}} pārvieto un pagriež to uz diviem punktiem (`Scale the sheet to fit` Jā/Nē). {{cmd:SCANDESKEW}} parāda skenētās lapas garo līniju leņķi un pagriež lapu, kad jūs `Accept` vai dodat `Value`. {{cmd:SCANCLEAN}} padara to melnbaltu (`Threshold` Auto/Adaptive/Level, `Specks`) un `Run`. {{cmd:SCANCROP}} paturē logu. {{cmd:SCANERASE}} dzēš `Rectangle`, `Polygon` vai `Lasso`. {{cmd:SCANTRACE}} apvelk līnijas un lokus jaunā slānī (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) un pasaka, ko atrada un ko atstāja kā rastru. {{cmd:SCANINFO}} uzskaita sākotnējo failu un soļus. {{cmd:RASTERSNAP}} ieslēdz vai izslēdz piesaisti skenēto lapu līnijām (On vai Off). Skatiet tēmu Skenēti rasējumi un apvilkšana.

### REGEN un REGENALL

Aliasi: `RE` priekš {{cmd:REGEN}}, `REA` priekš {{cmd:REGENALL}}. Atjauno to, kas ekrānā zīmēts no rasējuma: {{cmd:REGEN}} — cilni, ko skatāt (lapā arī modeli, ko tās skata logi rāda), {{cmd:REGENALL}} — katru cilni, katru sadalītā ekrāna logu un katru atvērtu rasējumu. Izmantojiet tos, ja attēls izskatās novecojis pēc skriptēta vai ļoti liela maiņas, vai ja palīgs rediģēja rasējumu; pats rasējums netiek aizskarts, tāpēc nav nekā, ko atsaukt.

### NAMEDVIEW

Aliasi: `NV`, `VIEWS`. `Ievadiet opciju [?/Atjaunot/Saglabāt/Logs/Dzēst] <Atjaunot>`, tad skata nosaukums. `S` saglabā ekrānā redzamo skatu, `W` — logu, ko izvēlaties, `R` parāda saglabātu skatu, `D` dzēš vienu, `?` uzskaita šīs cilnes skatus. Saglabājot zem esoša nosaukuma, tas to aizstāj; katra izmaiņa ir viens atsaukšanas solis. Skati pieder cilnei, kurā tie tika saglabāti. DWG un DXF failos tie paliek (VIEW tabula); lapas skati atgriežas pirmajā lapā, jo fails nepasaka, kura.

### UNDO un REDO

Aliasi: `U` priekš {{cmd:UNDO}}; {{cmd:REDO}} aliasa nav. Arī {{key:Mod+Z}} un {{key:Mod+Y}}.

### LAYER

Aliasi: `LA`. Pārved uz {{ui:Slāņi}} paneli.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Ievadiet jauniem objektiem līniju tipu` — `ByLayer` (pēc slāņa), `ByBlock` (pēc bloka) vai nosaukums (`?` uzskaita tos: Continuous, rasējuma paši, un DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE ar to `2` (puse) un `X2` (divkārši) izmēriem). {{cmd:LWEIGHT}} (`LW`): jauniem objektiem līnijas platums mm, vai `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): rasējuma līniju tipa mērogs (atsaucams). {{cmd:LWDISPLAY}} (`LWT`): `Rādīt līnijas platumus [ON/OFF]` — tas pats, kas poga {{ui:LWT}} statusa joslā. Skatiet [Līnijas platumi un līniju tipi](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Ievadiet pārdēvējamā objekta tipu [LAyer/Block]`, `Ievadiet veco nosaukumu`, tad jauno nosaukumu; objekti vai atsauces seko. {{cmd:LAYMRG}}: `Atlasiet objektu slānī, ko apvienot, vai [Nosaukums]` līdz {{key:Enter}}, tad `Atlasiet objektu mērķa slānī vai [Nosaukums]` un `Y`. {{cmd:LAYDEL}}: `Atlasiet objektu slānī, ko dzēst, vai [Nosaukums]`, tad `Y`: slānis un katrs objekts tajā iet (ne slānis 0, DEFPOINTS vai pašreizējais slānis). Viens atsaukšanas solis katrai. Skatiet [Rasējuma kārtošana ar slāņiem](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Slāņi, izvēloties objektus; arī slāņu paneļa izvēlnē {{ui:Rīki}}. {{cmd:LAYISO}}: `Atlasiet objektus slānī(os), ko izolēt`, tad {{key:Enter}}: katrs cits slānis tiek izslēgts. {{cmd:LAYUNISO}} tos ieslēdz atpakaļ. {{cmd:LAYOFF}} un {{cmd:LAYFRZ}}: `Atlasiet objektu slānī, ko izslēgt` (vai iesaldēt), atkal un atkal; `U` atsauc pēdējo, {{key:Enter}} beidz. {{cmd:LAYMCUR}}: `Atlasiet objektu, kura slānis kļūs par pašreizējo`. {{cmd:LAYON}} ieslēdz visus slāņus, {{cmd:LAYTHW}} atsaldē visus slāņus. Katra komanda ir viens atsaukšanas solis. Skatiet [Rasējuma kārtošana ar slāņiem](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} sāk tukšu rasējumu, un {{cmd:OPEN}} atver DWG vai DXF, katrs savā cilnē virs rasējuma (nemainīts jauns rasējums tiek izmantots, nevis jauna cilne). Aizverot cilni ar nesaglabātām izmaiņām, tiek jautāts vispirms. Skatiet [Sadalīt ekrānu](topic:split-screen).

{{cmd:SAVE}} (aliass `QSAVE`, arī {{key:Mod+S}}) lejupielādē kopiju rasējuma formātā: DWG, ja tas atvērts no DWG, DXF, ja no DXF. Jauns rasējums izmanto formātu, kas pēdējo reizi izvēlēts Saglabāt kā šajā pārlūkprogrammā, citādi DWG.

{{cmd:SAVEAS}} (arī {{key:Mod+Shift+S}}) atver dialogu {{ui:Saglabāt kopiju kā}}: izvēlieties {{ui:DWG}} (un tā {{ui:Versija}}), {{ui:DXF R12}} vai {{ui:DXF 2000}}, tad {{ui:Saglabāt}}. Izvēle paliek šim rasējumam un jauniem rasējumiem šajā pārlūkprogrammā.

{{cmd:DXFOUT}} vienmēr lejupielādē DXF R12 kopiju, nemainot formātu, ko izmanto {{cmd:SAVE}}.

Skatiet [Failu atvēršana un saglabāšana](topic:files#saving).

### TOUR

Aliasi: `TUTORIAL`. Sāk sešu soļu pirmā rasējuma apmācību vēlreiz. Skatiet [Darba sākšana](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliasi: `TBDOCK`. `Rīkjoslas novietojums [Augšā/Apakšā/Pa kreisi/Pa labi]`. Skatiet [Iestatījumi](topic:settings#toolbar-position).

### COMMANDLINE

Aliasi: `CMDLINE`. `Komandrinda [Piestiprināta apakšā/Peldoša/Viena rinda/Rādāmās vēstures rindas/Komandu vēsture (F2)]`: piestiprina vai padara peldošu komandrindu, padara to vienrindas, jautā, cik vēstures rindas rādīt (0 līdz 12), vai atver vēsturi. Skatiet [Iestatījumi](topic:settings#command-line).

### TOPAREA

`Augšējā josla [Standarta/Kompakta]`: joslas virs rasējuma kā tās bija, vai kompaktas. Skatiet [Iestatījumi](topic:settings#top-area).

### POLARANG

`Ievadiet polārā leņķa soli grādos <90>`: solis, pēc kura līnijas izsekošanas {{ui:Polārs}} līnijas izlīdzinās (vairāk nekā 0, līdz 180). Glabājas šajā pārlūkprogrammā.

### UNITS

Aliasi: `UN`. Kā garumi tiek rakstīti un ierakstīti.

- `Ievadiet garuma formātu [Zinātniskais/Decimālais/Inženiertehniskais/Arhitektūras/Daļskaitļu] <pašreizējais>`
- Arhitektūras un Daļskaitļu: `Ievadiet mazākās daļas saucēju, ko rādīt (1, 2, 4, 8, 16, 32, 64, 128 vai 256)`. Citiem: `Ievadiet decimāldaļu skaitu (no 0 līdz 8)`.

Jauni izmēri to seko. Viens atsaukšanas solis. Tas pats, kas {{ui:Garuma formāts}} un {{ui:Precizitāte}} sadaļā {{ui:Pašreizējie iestatījumi}}; skatiet [Pēdas un collas](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliasi: `GDS`. Skatīt IC izkārtojumu (GDSII straumes failu): laboratorijas pārbaude, tikai skatīšanai un mērīšanai.

- Failu izvēlētājs ņem `.gds` failu; ar vairākām augšējām šūnām: `Ievadiet augšējo šūnu, ko zīmēt`.
- Katrs slānis un datu tips kļūst par rasējuma slāni (`GDS 1`, `GDS 2/5`), atsauces un masīvi tiek novietoti plakani, failā esošajās lietotāja vienībās (parasti mikrometros). Viens atsaukšanas solis. Nekas netiek simulēts vai pārbaudīts, un fails netiek rakstīts atpakaļ.

### DIAGRAM

Aliasi: `TEXTDIAGRAM`, `T2D`. Diagramma no teksta.

- Lodziņš ņem tekstu (vai vienu rindu ar `;` starp paziņojumiem komandrindā): Mermaid plūsmas shēmu, PlantUML komponentu diagrammu, D2 vai no-līdz sarakstu.
- `Norādiet diagrammas augšējo kreiso stūri`, tad `Norādiet teksta augstumu`.

Bloki un savienotāji ir parasti objekti slānī `Diagram`, atlasīti, kad tā beidzas. Viens atsaukšanas solis. Skatiet [Zīmēt diagrammu no teksta](topic:text-to-diagram).

### OLELIST

Aliasi: `OLES`. OLE objekti, ko DWG satur un ko CadCraft nevar novietot pats.

- Uzskaita katru: numurs, tips, izmērs, vai tas saglabāja attēlu.
- `Ievadiet opciju [Novietot/eXit] <eXit>`: Novietot jautā numuru, apakšējo kreiso stūri un platumu, un zīmē rāmi ar attēlu. Viens atsaukšanas solis; paturētais objekts netiek mainīts. Skatiet [Attēli](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliasi: `SHX`. Jūsu pašu SHX fonti.

- `Ievadiet SHX fonta opciju [Mape/Faili/Saraksts/Noņemt/Apgriezt/Notīrīt] <Saraksts>`

{{ui:Mape}} nolasa katru `.shx` mapē (CadCraft Studio; no jauna katrā startā), {{ui:Faili}} ņem izvēlētos failus (pārlūkprogramma), {{ui:Apgriezt}} izkārto viena fonta burtus pēdējais pirmais. Teksta stili, kas nosauc ielādētu fontu, zīmējas tajā. Skatiet [Zīmēt tekstu savos SHX fontos](topic:shx-fonts).

### LIMITS

Cik liels rasējumam jābūt.

- `Norādiet apakšējo kreiso stūri vai [ON/OFF] <pašreizējais>`: punkts, `ON` vai `OFF`.
- `Norādiet augšējo labo stūri <pašreizējais>`.

Režģis aizpilda robežas, {{cmd:ZOOM}} Viss tās parāda, un ar ieslēgtām robežām punkts ārpusē tiek noraidīts (`**Ārpus robežām`). Viens atsaukšanas solis; saglabājas DWG un DXF. Skatiet [Iestatīt rasējuma robežas](topic:drawing-limits).

### AUNITS

Aliasi: `ANGUNITS`. Kā leņķi tiek rādīti un ierakstīti.

- `Ievadiet leņķa formātu [Decimālie grādi/Grādi-minūtes-sekundes/Mērnieku azimuti] <pašreizējais>`
- `Ievadiet decimāldaļu skaitu (no 0 līdz 8)`, vai pārējiem diviem `Ievadiet precizitāti` (0 grādiem, 2 minūtēm, 4 sekundēm, 5 līdz 8 sekundes decimāldaļām).

Viens atsaukšanas solis; saglabājas DWG un DXF. Tas pats, kas {{ui:Leņķa formāts}} sadaļā {{ui:Pašreizējie iestatījumi}}. Skatiet [Ievadīt un rādīt azimutus un leņķus](topic:bearings-and-angles).

### APPLOAD

Aliasi: `AP`; vai {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Ielādēt lietojumprogrammu…}}. Dialogs {{ui:Ielādēt lietojumprogrammas}}: ielādē `.lsp` rutīnas un `.dcl` dialogu failus, izkrauj tos, ielādē tos atkal no vēstures un palaišanas komplektu. Rutīnas `(defun c:NAME …)` komandas tad darbojas kā jebkuras citas. Skatiet [Ielādēt lietojumprogrammas](topic:load-applications) un [Palaist LISP rutīnas](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (vai {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Rediģēt aliasus…}}) atver jūsu aliasu failu (`ALIAS, *COMMAND` rindas); {{ui:Saglabāt}} to piemēro. {{cmd:REINIT}} piemēro to atkal. Skatiet [Komandu aliasu rediģēšana](topic:command-aliases).

### OPTIONKEYS

Aliasi: `OPTKEYS`; vai {{ui:Iestatījumi}} › {{ui:CadCraft}} › {{ui:Opciju burti}} › {{ui:Rediģēt…}}. Atver jūsu opciju burtu failu (`KOMANDA.OPCIJA, BURTI` rindas, piemēram, `ARRAY.PO, P`); {{ui:Saglabāt}} to piemēro, un {{cmd:REINIT}} piemēro atkal. Skatiet [Komandu opcijām savi burti](topic:option-letters).

### LISPEDIT

Aliasi: `VLIDE`; vai {{ui:Skats}} › {{ui:Vairāk}} › {{ui:LISP redaktors}}. Atver LISP redaktoru, logu, kas paliek atvērts blakus rasējumam.

- Teksts: rindu numuri, iekavu pāris pie kursora atzīmēts (sarkans, ja nav), {{key:Enter}} ieievieto jauno rindu zem atvērtās iekavas, {{key:Tab}} ieraksta divas atstarpes, {{key:Esc}} atstāj tekstu.
- {{ui:Ielādēt rasējumā}} ({{key:Ctrl+Shift+Enter}}): nolasa katru formu, kā to dara {{cmd:APPLOAD}} ar failu, un izveido tā `c:` komandas. Fails parādās {{cmd:APPLOAD}} sarakstā.
- {{ui:Palaist atlasi}} ({{key:Ctrl+Enter}}): izvērtē atlasītās formas vai to, kurā atrodas kursors.
- {{ui:Pārtraukt}}: beidz darbojošos rutīnu.
- {{ui:Konsole}}: ko rutīna izdrukāja, un katra kļūda ar rindu; noklikšķiniet uz kļūdas, lai tur nokļūtu. Teksts tiek izpildīts pa vienai augstākā līmeņa formai, tāpēc rinda ir formas, vai tajā — rindai, kas izsauc funkciju, kuru kļūda nosauc.
- {{ui:Jauns}}, {{ui:Atvērt}}, {{ui:Saglabāt}} ({{key:Ctrl+S}}): `.lsp` fails. Teksts tiek glabāts arī šajā pārlūkprogrammā, tāpēc loga aizvēršana nezaudē to.
- Blakus tekstam: funkcijas, ko rutīna definē, tās, ko tā izsauc, ko šis LISP vēl nav, tās, ko tā izsauc un kuras nav ne definētas tajā, ne iebūvētas, un pilni saraksti tam, kas ir iebūvēts un kas nav.

Teksts ar iekavu, kas nekad netiek aizvērta, vai virkni, kas nekad nebeidzas, netiek palaists: tiek nosaukta rinda. Nav soļa pa solim atkļūdotāja, pārtraukumpunktu vai uzraudzības loga. Skatiet [Palaist LISP rutīnas](topic:run-lisp).

### HELP

Aliasi: `?`. Izdrukā katru komandu, tās aliasus un vienrindas aprakstu komandrindas vēsturē. Tas neatver šo palīdzību: nospiediet {{key:F1}} vai noklikšķiniet uz {{ui:Palīdzība}}, lai to izdarītu.

## Izvēles uzvedne Atlasīt objektus

Katrā uzvednē `Atlasiet objektus`: klikšķiniet uz objektiem, zīmējiet logus (no kreisās uz labo) un krustojumus (no labās uz kreiso) ar diviem klikšķiem, vai nospiediet un velciet lasso ({{key:Space}} vilkšanas laikā: logs, krustojums, žogs), {{key:Shift}}+klikšķis, lai noņemtu, un nospiediet {{key:Enter}}, lai pabeigtu. Varat arī ierakstīt `ALL` (viss), `L` (pēdējais objekts), `P` (Iepriekšējais: ko lietoja pēdējā komanda), `F` (Žogs: objekti, ko krusto punktu līnija; `U` atsauc punktu), `W` (Logs), `C` (Krustojums), `R` (Noņemšanas režīms: izvēle izņem objektus; uzvedne saka `Noņemt objektus`) un `A` (Pievienot vēlreiz). `?` tos uzskaita. Tie netiek rādīti uzvednē. {{key:Tab}} pāri pārklājošiem objektiem izceļ nākamo; noklikšķiniet, lai to izvēlētos. Skatiet [Atlasīt objektus](topic:select-objects).

### ACCESS

Aliasi: `AX`. Zīmēšana bez redzes. {{cmd:ACCESS}} ieslēdz vai izslēdz Access (`On`, `Off`) un pārslēdz skaņas piesaistēm (`Sound`) un balss komandām (`Voice`); vispirms tas pasaka stāvokli. Ar ieslēgtu Access katra komanda un rezultāts tiek nolasīts caur jūsu ekrāna lasītāju, un zīmēšanas laukumam ir tastatūras kursors. Palīdzības tēma "Zīmēšana bez redzes" pasaka taustiņus.

### DESCRIBE

Aliasi: `DESC`. Pasaka, ko rasējums satur: cik objektu, kāda veida, cik lieli, cik slāņu, kas ir atlasīts. Tikai lasa; neko nemaina.

### WHEREAMI

Aliasi: `WHERE`. Pasaka, kur atrodas kursors, rasējuma vienībās.

### NEARBY

Pasaka, kas atrodas tuvu kursoram, vispirms tuvākais, katrs ar savu attālumu un pusi, kurā tas atrodas.

### SAYSEL

Pasaka, kas ir atlasīts, pa vienam teikumam katram objektam (līnijas garums, gali un leņķis; riņķa rādiuss un centrs; teksts, kā uzrakstīts).

### VOICE

Ieslēdz vai izslēdz balss komandas. Tās tiek atpazītas šajā datorā; kur pārlūkprogramma to nevar, balss paliek izslēgta, ja vien neizvēlaties pārlūkprogrammas tiešsaistes pakalpojumu iestatījumos.

### TOUCHCROSSHAIR

Aliasi: `TCX`. Nobīdīts krusts zīmēšanai ar pirkstu, lai pirksta gals neaizsegtu punktu, ko izvēlaties. Kamēr tas ir ieslēgts, viens pirksts uz rasējuma neizvēlas: tas pārvieto krustu, kas atrodas virs pirksta un sāniski. Objektu piesaistes un izsekošana seko krustam. Pacelot pirkstu, nekas netiek izvēlēts, un krusts paliek, kur bija. Lai izvēlētos, nospiediet pogu {{ui:Click}} rasējuma stūrī vai pieskarieties kur katrā rasējuma vietā ar otru pirkstu. Turiet {{ui:Click}}, kamēr pārvietojat otru pirkstu, lai vilktu (atlases logu, lasso, rokturi). Pirksts, kas turēts nekustīgi, vai poga {{ui:Enter}} ir Enter. Divi pirksti panoramē un tālummaina kā līdz šim. Tuvu apakšējai malai un tālākai sāna malai krusts tuvojas pirkstam, lai katru rasējuma daļu varētu sasniegt. Pildspalva un pele vienmēr izvēlas tieši.

{{cmd:TOUCHCROSSHAIR}} pasaka stāvokli un jautā `ON`, `OFF`, `Auto` (ieslēgts tikai tur, kur pirksts ir vienīgais rādītājs, tāpēc izslēgts datorā ar peli), `Distance` (cik tālu krusts atrodas no pirksta, 24 līdz 240 pikseļi) vai `Side` (`Left`: augšā un pa kreisi, labajai rokai; `Right` kreisajai rokai; pogas pāriet uz otru stūri). Tās pašas izvēles ir Iestatījumi › CadCraft, un ierīcē ar skārienekrānu statusa joslā ir slēdzis {{ui:Nobīdīts krusts}}. Izvēles tiek glabātas šajā pārlūkprogrammā.

### WHOHAS

Pasaka, kurš ir atvēris rasējumu. CadCraft Studio datorā, atverot DWG vai DXF, blakus tam tiek ierakstīts neliels bloķēšanas fails (`Plan.dwg.cclock`: kurš, kopš kura laika, kura versija), tas tiek atsvaidzināts ik pēc minūtes, kamēr rasējums ir atvērts, un noņemts, kad rasējums tiek aizvērts. Atverot rasējumu, ko kāds cits jau ir atvēris, tiek pateikts, kurš un kopš kura laika, un piedāvāts {{ui:Atvērt tikai lasīšanai}} (saglabājot tad jājautā jauns nosaukums), {{ui:Tomēr atvērt}} (otrs cilvēks tiek informēts nākamajā atsvaidzināšanā) vai {{ui:Atcelt}}. Saglabājot pār failu, ko kāds cits atvēris, vispirms tiek jautāts. Bloķējums, kas nav atsvaidzināts piecas minūtes, tiek uzskatīts par novecojušu: otrs eksemplārs aizvērās, nesaglabājot, vai dators ir miegā.

{{cmd:WHOHAS}} jautā `Current` (atvērtais rasējums), `File` (izvēlēties vienu), `FOlder` (izvēlēties mapi: uzskaita katru rasējumu tajā, kas ir atvērts kaut kur), `Path` (ierakstīt pilnu ceļu) vai `Name` (vārds, ko redz citi; jūsu konta vārds, ja esat pierakstījies). Studio var piekļūt tikai mapēm, ko esat izvēlējies: rasējumam, kas atvērts no mapes, kas nekad nav izvēlēta, tā vienreiz pasaka, ka nevar atzīmēt rasējumu kā atvērtu; `FOlder` izvēlas mapi, un bloķējumi tur darbojas no tā brīža. Bloķējums ir piezīme cilvēkiem, nevis barjera: cita programma joprojām var pierakstīt failu. Pārlūkprogrammā nav mapju, ko pārlūkot, un komanda to pasaka.

### OVERKILL

Dzēš dublētus objektus un sakārto pārklājošās līnijas un lokus rasējumiem, kas ienāk ar dubultu līniju zīmējumu. `Atlasiet objektus tīrīšanai`, {{key:Enter}}, tad vēlreiz {{key:Enter}}, lai tīrītu ar rādītajiem iestatījumiem, vai vispirms nomainiet vienu:

- `Tolerance`: cik tuvu divām koordinātēm jābūt, lai skaitītos par vienādām (sākumā 0.000001; 0 nozīmē tieši vienādas).
- `Ignore`: rekvizīti, kas var atšķirties starp diviem citādi vienādiem objektiem. Ierakstiet nosaukumu, lai to pārslēgtu: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency` vai `None` / `All`. {{key:Enter}}, kad pabeigts.
- `Overlap`: ieslēgts vai izslēgts. Ieslēgts, līnijas vienā taisnē, kas pārklājas, kļūst par vienu līniju (līnija, kas guļ iekšā citai, vienkārši tiek dzēsta), un loki vienā riņķī, kas pārklājas, kļūst par vienu loku; loki, kas aizveras pilnā apgriezienā, kļūst par riņķi, un loks, kas guļ uz riņķa, tiek dzēsts.
- `Ends`: ieslēgts vai izslēgts. Ieslēgts, līnijas vienā taisnē un loki vienā riņķī, kas tikai saskaras gals pie gala, kļūst par vienu gabalu.

Katrs objektu tips tiek pārbaudīts uz dublikātiem: divi objekti ir dublikāti, ja to ģeometrija ir vienāda pielaidē un to slānis, krāsa, līniju tips, līniju tipa mērogs, līnijas platums, biezums, caurspīdīgums un augstums sakrīt (mīnus tie, ko ignorējat). Līnijas un atvērtas polilīnijas sakrīt arī tad, ja ir zīmētas pretējā virzienā. Pirmais objekts zīmēšanas secībā paliek un paglabā savus rekvizītus. Komanda pasaka, cik objektu tā pārbaudīja un dzēsa: dublikāti, pārklājošies gabali, kas apvienoti, gabali, kas savienoti gals pie gala. Viens {{cmd:UNDO}} atsauc visu. Iestatījumi paliek līdz rasējuma loga aizvēršanai.

Tā atstāj neskartus: objektus bloķētos slāņos un paslēptus objektus. Tā neapvieno līnijas ar augstumu (Z) (precīzi dublikāti tomēr tiek dzēsti), un tā neaiztiek segmentus polilīnijas iekšienē (tie netiek retināti), līniju, kas guļ uz polilīnijas segmenta, un slēgtu polilīniju, zīmētu pretējā virzienā.

### DRAWORDER

Maina, kuri objekti tiek zīmēti priekšā. `Atlasiet objektus zīmēšanas secības maiņai`, {{key:Enter}}, tad `Virs objektiem`, `Zem objektiem`, `Priekšā` vai `Aizmugurē` ({{key:Enter}} = `Aizmugurē`). `Virs objektiem` un `Zem objektiem` jautā atsauces objektus: atlase iet tieši priekšā priekšējākajam no tiem vai tieši aiz aizmugurējākā. Atlasītie objekti paturē savu kārtību savā starpā. Viens atsaukšanas solis. Secība tiek saglabāta kopā ar rasējumu DWG un DXF, kur tā ir secība, kādā objekti tiek rakstīti.

Ekrānā katrs objekts tiek zīmēts rasējuma secībā, kā to zīmē citas programmas, kas atver failu: cieta svītrojuma, plata polilīnija vai teksta maska sedz līnijas un tekstu aiz tās, un tas, kas ir tās priekšā, to sedz. Kur līnija krusto tekstu, abi rādās. Attēli un pievienotās PDF lapas paliek zem līnijdarba. Ļoti lielā rasējumā, kur aizpildījumi un līnijdarbs pārklājas un mainās vairāk nekā 256 reizes, pirmie 256 paturē savu kārtību, un pārējie aizpildījumi tiek zīmēti zem līnijām, lai pārzīmēšana paliktu ātra.

### TEXTTOFRONT

Novieto tekstu, izmērus un norādes priekšā visam pārējam atvērtajā telpā: `Teksts`, `Izmēri`, `Norādes` vai `All` ({{key:Enter}} = `All`). Viens atsaukšanas solis. Tā pasaka, ja nav nekā, vai ja tie jau ir priekšā.

### HATCHTOBACK

Nosūta katru svītrojumu atvērtajā telpā aiz visa pārējā, lai aizpildījumi pārstātu sedzēt līnijdarbu un tekstu saglabātajā failā. Nekādu jautājumu. Viens atsaukšanas solis.

### ISOLATEOBJECTS

Aliasi: `ISOLATE`. Rāda tikai atlasītos objektus: viss pārējais atvērtajā telpā paslēpjas līdz {{cmd:UNISOLATEOBJECTS}}. Atšķirībā no {{cmd:LAYISO}} tas strādā ar objektiem, ko izvēlaties, neatkarīgi no to slāņiem, un nemaina nevienu slāni. Paslēptie objekti netiek zīmēti, izvēlēti, pievilkti, tuvināti vai drukāti, un komandas, kas pieņem `ALL`, tos izlaiž. Tas, ko zīmējat, kamēr objekti ir izolēti, tiek rādīts kā parasti.

Tas ir tikai šai sesijai: nekas par to netiek saglabāts ar rasējumu, tas nav atsaucams solis, un rasējuma atverot atkal, viss tiek rādīts. Kamēr objekti ir paslēpti, statusa joslā ir poga ar to skaitu; noklikšķiniet uz tās, lai tos atkal parādītu.

### HIDEOBJECTS

Paslēpj atlasītos objektus līdz {{cmd:UNISOLATEOBJECTS}}. Tie paši noteikumi kā {{cmd:ISOLATEOBJECTS}}: tikai šai sesijai, netiek saglabāts, nav atsaucams solis.

### UNISOLATEOBJECTS

Aliasi: `UNISOLATE`, `UNHIDE`. Rāda atkal katru objektu, ko paslēpa {{cmd:ISOLATEOBJECTS}} vai {{cmd:HIDEOBJECTS}}, un pasaka, cik atgriezās.

### LAYLOCKFADE

Iestata, kā izskatās objekti bloķētos slāņos un vai klikšķis tiem sniedzas. Tā pasaka pašreizējo stāvokli, tad pieņem:

- skaitli no 0 līdz 90: izbalēšanas daudzums procentos (sākumā 50). 0 izslēdz izbalēšanu.
- `ON` vai `OFF`: izbalēšana ieslēgta vai izslēgta, daudzumu paturot.
- `Pick`, tad `Yes` vai `No`: vai klikšķis drīkst atlasīt objektus bloķētos slāņos, kad neviena komanda nedarbojas? `No` (noklusējums): tos nevar izvēlēties nemaz. `Yes`: klikšķis vai logs tos atlasa, lai {{ui:Rekvizīti}} varētu tos parādīt; tos joprojām nevar mainīt, un komandas paša `Atlasiet objektus` nekad tos nepaņem.

Objektu piesaistes tos atrod abos gadījumos. Drukas nekad netiek izbalētas. Abi iestatījumi ir jūsu, nevis rasējuma, un tie ir arī {{ui:Iestatījumi}} sadaļā {{ui:Bloķētie slāņi}}.

### BURST

Sadala bloku atsauces un saglabā to, ko saka to atribūti. `Atlasiet bloku atsauces sadalīšanai`, {{key:Enter}}: katra atsauce tiek aizstāta ar bloka objektiem, un katras redzamā atribūta vērtība kļūst par vienkāršu tekstu uz paša atribūta slāņa (atribūts slānī 0 nonāk atsauces slānī, kā bloka pārējie objekti slānī 0). Neredzamie atribūti tiek izmesti. Bloks blokā paliek kā bloka atsauce. Viens atsaukšanas solis; tā pasaka, cik atsauču sadalīts un cik atribūtu vērtību pārvērsts tekstā.

Tā noraida saistītu rasējumu pēc nosaukuma (vispirms saistiet to, vai nokopējiet no tā ar {{cmd:NCOPY}}), un atstāj citus atlasītos objektus neskartus. Bloku atsaucēm {{cmd:EXPLODE}} dod tos pašus objektus; {{cmd:BURST}} ņem tikai bloku atsauces un skaita atribūtu tekstu.

### TXT2MTXT

Aliasi: `T2M`. Apvieno vienrindas tekstus vienā rindkopas tekstā. `Atlasiet vienrindas tekstus apvienošanai`, {{key:Enter}}, tad `Paragrāfs` (līnijas saplūst un ietinas pie plašākās līnijas platuma) vai `Lines` (katrs teksts paliek sava līnija); {{key:Enter}} ņem to, ko lietoja pēdējo reizi. Līnijas tiek sakārtotas no augšas uz leju, tad no kreisās uz labo, gar augšējā teksta virzienu. Paragrāfs karājas no augšējā teksta augšējā kreisā stūra un ņem tā augstumu, pagriezienu, stilu, slāni un krāsu. Viens atsaukšanas solis.

Teksts, kas jau ir rindkopas teksts, tukšs teksts un citi objekti atlasē tiek atstāti kā ir, un komanda pasaka, cik to bija.

### NCOPY

Kopē objektus no bloka atsauces vai saistīta rasējuma rasējumā, neko nesadalot. `Izvēlieties objektu bloka atsauces vai saistītā rasējumā`: objekts, kas ir tuvākais izvēlei, tiek nokopēts tur, kur tas redzams, lai cik dziļi blokos tas būtu; izvēlieties vēl, tad {{key:Enter}}. Nākamais `Bāzes punkts kopiju pārvietošanai`: {{key:Enter}} atstāj tās vietā, vai dodiet bāzes punktu un otru punktu. Visa komanda ir viens atsaukšanas solis.

Kopija paņem slāni, kurā tā redzama: objekts uz slāņa 0 bloka iekšienē nonāk to atsauces slānī, kurā tas atradās, un ByBlock krāsa kļūst par šīs atsauces krāsu. No saistīta rasējuma slānis `Plan|Walls` kļūst par `Plan$0$Walls` (saites piešķirto nosaukumu), izveidots ar saistītā slāņa krāsu, līniju tipu un līnijas platumu. Atribūta vērtība tiek kopēta kā teksts. Bloku atsauces bloķētos slāņos nevar izvēlēties.

### FLATTEN

Iestata atlasīto objektu augstumu (Z) un biezumu uz 0. `Atlasiet objektus saplacināšanai`, {{key:Enter}}. Tas arī saplacina objektus blokos, ko izmanto atlase (un blokus iekšā tajos), tāpēc katra atsauce uz šiem blokiem mainās; saistītie rasējumi paliek kā ir. Viens atsaukšanas solis; tā pasaka, cik objektu mainījās, un pasaka, ja nevienam nebija augstuma vai biezuma.

Ko CadCraft glabā trešajai dimensijai 2D rasējumā: augstums riņķiem, lokiem, elipsēm, punktiem, tekstam, bloku atsaucēm, svītrojumiem, norādēm un polilīnijām (to pacēlums), augstums katrā līnijas galā un biezums līnijām, riņķiem, lokiem, polilīnijām, punktiem un tekstam, kā fails tos turēja. {{cmd:FLATTEN}} notīra tieši tos. Tas neaiztiek 3D modeli 3D cilnē, 3D sejas vai cietos ķermeņus, un objekts, kas zīmēts sasvērtā plaknē, jau tika ievietots rasējuma plaknē, kad fails tika atvērts.

### BREAKLINE

Zīmē līniju ar pārtraukuma simbolu skatam, kas nogriezts īsāks. Tā pasaka pašreizējo izmēru un pagarinājumu, tad `Pirmais pārtraukuma līnijas punkts` (vai `Size` / `Extension`, lai tos vispirms mainītu), `Otrais punkts`, un `Kur atrodas pārtraukuma simbols`: noklikšķiniet gar līniju vai {{key:Enter}} vidum. Rezultāts ir viena polilīnija pašreizējā slānī: līnija, kas iet pāri katram punktam par pagarinājumu, ar Z veida svītru, tikpat augstu kā izmērs un uz pusi tik garu.

`Size` un `Extension` tiek atcerēti kā jūsu iestatījumi (izmērs sākas kā divkārša izmēra teksta augstums, reizināts ar izmēra mērogu; pagarinājums ir puse no izmēra). {{key:Enter}} atkārto komandu.

### AUDIT

Pārbauda atvērto rasējumu, vai nav bojājumu, un to labo. {{cmd:AUDIT}} apskata katru objektu modelī, lapās un blokos, kā arī slāņu tabulu, un uzskaita atrasto pēc veida:

- skaitļus, kas nav galīgi vai ir absurdi lieli;
- objektus bez izmēra: līnija bez garuma, riņķis bez rādiusa, polilīnija ar vienu vietu, teksts bez burtiem vai augstuma, bloka atsauce ar nulles mērogu;
- objektus uz slāņa, kura rasējumam nav; atsauces uz bloku, kas tur nav; teksta un izmēru stilu nosaukumus un līniju tipu nosaukumus, kas nav rasējumā;
- blokus, kas satur paši sevi, tieši vai caur citiem blokiem;
- objektus, kas dala identifikatoru, atslēgu vai failu rokturi;
- izmērus bez punktiem, no kuriem tie mērīti, un svītrojumus, kuru robeža nav slēgta kontūra.

Tad tas jautā `Labot tos? [Jā/Nē]`. `Nē` nemaina neko. `Jā` labo visu vienā atsaukšanas solī: to, ko nevar zīmēt, izņem (slikti skaitļi, bez izmēra, trūkstošs bloks, bojāts izmērs, svītrojums bez derīgas robežas, atsauce, kas aizver riņķi blokiem); trūkstošs slānis tiek izveidots; nezināmi stilu un līniju tipu nosaukumi atgriežas pie noklusējumiem; kopīga atslēga tiek aizstāta. Tā pasaka, cik objektu izņemti un cik labots. Tie paši atradumi parādās Problēmu panelī, katrs ar savu {{ui:Labot}}.

Tas neatsakās ne no kā, bet pārbauda tikai to, ko CadCraft pats zīmē: dati, kas glabāti citām programmām (3D cietie ķermeņi, OLE objekti), netiek atvērti.

### RECOVER

Atver bojātu DXF vai DWG. {{cmd:RECOVER}} jautā failu, nolasa to, ko var nolasīt, nevis noraida failu, uzskaita to, ko izlaida vai pieņēma, tad pārbauda un labo rasējumu, kā {{cmd:AUDIT}} dara ar `Jā`.

- DXF: rindas, kas nav daļa no koda un vērtību pāra, tiek izlaistas, līdz pāri atkal sakārtojas; sekcija bez beigām tiek aizvērta; fails, kas pārtrūcis, tiek nolasīts līdz pārtraukumam; bināri DXF, kas pārtrūcis, tiek nolasīts līdz tā pēdējai pilnajai vērtībai. Kad sekcija, bloks vai objekts joprojām nav nolasāms, tas tiek izlaists un nosaukts, un lasīšana turpinās tam pāri.
- DWG: objekti, kas neiztur pārbaudes vai nevar tikt dekodēti, tiek izlaisti, un pazaudēts objektu saraksts tiek atjaunots, staigājot pa objektu datiem.

Diska fails netiek mainīts. Atgūtais rasējums atveras nesaglabāts: saglabājiet to ar jaunu nosaukumu. Fails, no kura nekas nav nolasāms, tiek noraidīts, un iemesls ir norādīts.

### LEGACYTEXT

Pārvērš tekstu, kas rakstīts vecajos 8 bitu vjetnamiešu fontos, uz Unicode. Īsie nosaukumi `TEXTTOUNICODE` un `VNTEXT`.

Vecākos vjetnamiešu rasējumos teksts ir glabāts kā Rietumu rakstzīmes, ko tikai fonts pārvērš vjetnamiešu valodā: TCVN3 teksts ABC fontos (`.VnTime`, `.VnArial` un lielo burtu fonti, kuru nosaukumi beidzas ar `H`), un VNI teksts VNI fontos (`VNI-Times`). CadCraft rāda šādu tekstu tā, kā to lasa, tiklīdz rasējums ir atvērts, pēc tā teksta stila fonta, objekta vai posma rindkopas tekstā; fails joprojām satur vecās rakstzīmes.

{{cmd:LEGACYTEXT}} pasaka, cik tekstu atrada katrā kodējumā, un jautā `Pārvērst … uz Unicode?`. `Jā` pārraksta katru (modeli, lapas, blokus, atribūtu vērtības un definīcijas) un dod teksta stiliem Unicode fontu (Times New Roman, Arial vai Courier New atkarībā no vecā fonta veida), viens atsaukšanas solis. Formatējums rindkopas tekstā paliek.

Kad neviens teksts neizmanto zināmu fontu (stils, kas zaudēja fonta nosaukumu), tas jautā `Lasīt izvēlētos tekstus kā [Tcvn3/Vni/None]`: izvēlieties kodējumu un atlasiet tekstus. Teksts, kas jau ir Unicode, paliek nemainīts. Izmēru teksta pārrakstījumi un vairāku norāžu teksts netiek pārvērsti.
