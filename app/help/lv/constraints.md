---
title: Rasējuma ierobežošana
summary: Turiet līnijas horizontālas, galus kopā un izmērus fiksētus ar ģeometriskiem un izmēru ierobežojumiem, un ļaujiet rasējumam sekot, kad maināt izmēru.
keywords: ierobežojums, ierobežojumi, parametrisks, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, brīvības pakāpes, pilnībā ierobežots
from: f8f21fa4
---

## Ko jūs izveidosiet

Plāksni, kuras platumu mainīsiet vienā vietā: tās malas paliek taisnas, viens stūris paliek savā vietā, augstums paliek puse no platuma.

Ierobežojumus var lietot līnijām, polilīnijām, riņķiem, lokiem un punktiem cilnē {{ui:Model}}. Katrs pievienotais ierobežojums ir viens atsaukšanas solis.

## Zīmējiet un ierobežojiet kontūru

1. Ierakstiet `REC` un nospiediet {{key:Enter}}. Ierakstiet `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Ierakstiet `AUTOCONSTRAIN` un nospiediet {{key:Enter}}. Ierakstiet `ALL`, {{key:Enter}}, tad vēlreiz {{key:Enter}}.

   Vēsturē redzams: piemēroti 4 ierobežojumi. Malu blakus parādās mazas kastītes ar **H** un **V**: tās ir ierobežojumu joslas.
3. Ierakstiet `GCFIX` un nospiediet {{key:Enter}}. Noklikšķiniet tuvu apakšējam kreisajam stūrim. Parādās kastīte ar ⊕: šis stūris paliek savā vietā.

`AUTOCONSTRAIN` pievieno sakritības ierobežojumus tur, kur galapunkti gandrīz satiekas, un horizontālus vai vertikālus ierobežojumus tur, kur līnijas ir gandrīz līmeņā vai vertikālas. Ierakstiet `S` tā uzvednē, lai mainītu, cik tuvu jābūt (sākumā 0,05 zīmējuma vienības un 1°).

## Pievienojiet izmērus

1. Ierakstiet `DCHORIZONTAL` un nospiediet {{key:Enter}}.
2. Noklikšķiniet tuvu apakšējam kreisajam stūrim, tad tuvu apakšējam labajam stūrim.
3. Noklikšķiniet zem taisnstūra, lai novietotu izmēra līniju.
4. Uzvednē redzams `Dimension text <d1=100>`. Ierakstiet `width=120` un nospiediet {{key:Enter}}.

   Taisnstūris tagad ir 120 plats, un uzraksts ir `width=120`.
5. Ierakstiet `DCVERTICAL` un nospiediet {{key:Enter}}, ierakstiet `O` un nospiediet {{key:Enter}}, tad noklikšķiniet uz labās malas.
6. Noklikšķiniet pa labi no tās, ierakstiet `width/2` un nospiediet {{key:Enter}}.

   Augstums ir 60. Uzraksts ir `fx: d1=width/2`: izmēru vada izteiksme.

Vēsturē tagad teikts, ka kontūra ir pilnībā ierobežota. Lai mainītu tās izmērus, mainiet `width` (skatiet [Parametru un vienādojumu lietošana](topic:parameters)), vai divreiz noklikšķiniet uz uzraksta `width=120`, ierakstiet jaunu vērtību un izvēlieties {{ui:Apply}} (Lietot).

## Ierobežotu objektu pārvietošana

Pārvietošana, pagriešana, mērogošana, rokturi un rekvizītu panelis visi saglabā ierobežojumus: pārvietotais objekts tiek turēts, un pārējais seko. Kad ierobežojumi nevar sekot, labojums netiek izdarīts, un vēsturē teikts, kāpēc, piemēram, "Nav izdarīts: ierobežojumi tur šo objektu tur, kur tas ir". Objekta dzēšana dzēš līdzi arī tā ierobežojumus.

## Ierobežotu objektu spoguļošana un apgriešana

- {{cmd:MIRROR}} kopē ierobežojumus starp spoguļotajiem objektiem uz kopijām. Malas (kurā pusē pieskaras pieskare, kurā pusē mērīts attālums) tiek aprēķinātas no jauna spoguļotajai kopijai, un kopētajiem izmēriem tiek doti paši nosaukumi, tāpat kā ielīmējot. Ar `Erase source objects` `Y` ierobežojumi paliek uz spoguļotajiem objektiem. Vēsturē teikts, cik no tiem pārnesti.
- {{cmd:TRIM}} paturē līnijas vai loka ierobežojumus atlikušajai daļai: ierobežojums uz galu iet uz to gabalu, kuram šis gals joprojām ir; noteikums par virzienu ({{ui:Horizontal}}, {{ui:Vertical}}, {{ui:Parallel}}, {{ui:Perpendicular}}) darbojas uz katra gabala, un izmērs starp abiem ārējiem galiem turpina tos mērīt. Ierobežojumi, kas turēja nogriezto daļu, vai garums, ko griezums mainīja ({{ui:Equal}}, loka atvērums), tiek zaudēti. Apgriezts riņķis paturē sava centra un rādiusa ierobežojumus. Apgrieztās polilīnijas savus zaudē.

## Ierobežojumi

| Komanda | Saglabā |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | līniju vai nogriezni horizontāli vai vertikāli (`2P`: divi punkti horizontāli vai vertikāli) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | divas līnijas paralēlas, taisnā leņķī vai uz vienas taisnes |
| {{cmd:GCCOINCIDENT}} | divi punkti kopā; `O`: punkts uz līnijas, riņķa vai loka |
| {{cmd:GCTANGENT}} | līnija un riņķis vai loks, vai divi no tiem, pieskaras |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | divi riņķi vai loki ar vienu centru; divi garumi vai divi rādiusi vienādi |
| {{cmd:GCSYMMETRIC}} | divi punkti, līnijas vai riņķi, spoguļoti pāri līnijai |
| {{cmd:GCFIX}} | punkts (noklikšķiniet tuvu tam) vai viss objekts (`O`) tur, kur tas ir |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | attālumu |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | rādiusu, diametru, leņķi starp divām līnijām vai loka leņķi |

{{cmd:GEOMCONSTRAINT}} un {{cmd:DIMCONSTRAINT}} jautā, kuru izmantot; {{ui:Constrain}} un {{ui:Dimension}} grupā {{ui:Parametric}} tos palaiž, un {{ui:More}} tur uzskaita katru. Vieta, kur noklikšķiniet, izvēlas daļu: klikšķis tuvu galam, vidum vai centram ņem šo punktu; klikšķis uz polilīnijas ņem segmentu zem tā. Pirmais objekts paliek vietā, bet otrais pārvietojas, lai satiktos ar to.

Ierobežojums, kas konfliktē ar citiem vai nepievieno neko, jo citi jau to nozīmē, tiek noraidīts ar ziņojumu, un nekas nepārvietojas.

## Skatīt, atlasīt un noņemt

- Noklikšķiniet kastīti ierobežojumu joslā (vai sakritības kvadrātu, vai izmēra uzrakstu), lai atlasītu šo ierobežojumu; vēsturē tas ir nosaukts. Nospiediet {{key:Delete}}, lai to noņemtu.
- {{cmd:DELCONSTRAINT}} noņem visus ierobežojumus no atlasītajiem objektiem.
- {{cmd:CONSTRAINTBAR}}: `S` rāda visas joslas, `H` tās slēpj; vispirms atlasiet objektus, lai parādītu vai paslēptu to joslas. {{ui:More}} ir {{ui:Show constraint bars}} un {{ui:Hide constraint bars}}.
- {{cmd:DCDISPLAY}} parāda vai slēpj izmēru ierobežojumus. Tie nekad netiek drukāti.
- {{cmd:DCCONVERT}} pārvērš izmērus, kas zīmēti uz līnijām, riņķiem un lokiem, par izmēru ierobežojumiem.

:::note
Ja esat izmantojis AutoCAD parametrisko zīmēšanu, komandu nosaukumi un uzvednes ir tie paši. Ierobežojumi un parametri tiek saglabāti DWG un DXF failos formā, ko citas programmas ignorē; skatiet [Faili](topic:files#constraints-in-files).
:::
