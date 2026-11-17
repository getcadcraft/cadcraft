---
title: Nobīdīt, apgriezt, pagarināt, noapaļot un nošķelt sienas
summary: Pārvērtiet vienas līnijas divkāršās sienās ar Nobīdi, sakārtojiet stūrus ar Noapaļošanu un apgrieziet un pagariniet līnijas ar Apgriezt un Pagarināt.
keywords: nobīde, offset, apgriezt, pagarināt, noapaļot, nošķelt, nošķelšana, pārtraukt, breakatpoint, sienas, stūris, griezt, paralēli, rādiuss, sakopšana
from: c6c5cbd0
---

## Ko jūs izveidosiet

Mazu istabu ar 200 biezām sienām: iekšējā mala tiek zīmēta, ārējā nobīdīta, stūri sakārtoti, un vienā sienā izgriezta durvju atvere.

## Zīmējiet iekšējo malu

1. Ierakstiet `L` un nospiediet {{key:Enter}}.
2. Ierakstiet `0,0` un nospiediet {{key:Enter}}.
3. Ierakstiet `@5000,0` un nospiediet {{key:Enter}}.
4. Ierakstiet `@0,4000` un nospiediet {{key:Enter}}.
5. Ierakstiet `@-5000,0` un nospiediet {{key:Enter}}.
6. Ierakstiet `C` un nospiediet {{key:Enter}}.
7. Noklikšķiniet {{ui:Robežas}}.

Jums ir četras atsevišķas līnijas. (Slēgta polilīnija nobīdītos vienā gājienā; atsevišķas līnijas parāda, kā Noapaļošana sakārto stūrus.)

## Nobīdiet ārējo malu

1. Ierakstiet `O` un nospiediet {{key:Enter}}. Uzvednē rakstīts `Norādiet nobīdes attālumu [Caur (T)] <Caur (T)>:`.
2. Ierakstiet `200` un nospiediet {{key:Enter}}.
3. Pie `Atlasiet nobīdāmo objektu` noklikšķiniet apakšējo līniju.
4. Pie `Norādiet punktu nobīdes pusē` noklikšķiniet jebkur zem tās. Parādās paralēla līnija 200 zem.
5. Noklikšķiniet labo līniju, pēc tam noklikšķiniet tās labajā pusē.
6. Noklikšķiniet augšējo līniju, pēc tam noklikšķiniet virs tās.
7. Noklikšķiniet kreiso līniju, pēc tam noklikšķiniet tās kreisajā pusē.
8. Nospiediet {{key:Enter}}, lai pabeigtu komandu.

Jums vajadzētu redzēt četras ārējās līnijas, katra tikpat gara kā tās iekšējā līnija, tātad ārējie stūri nesaskaras.

:::tip
Nospiediet {{key:Enter}} attāluma uzvednē, lai izmantotu pēdējo attālumu vēlreiz. Ierakstiet `T` (Caur): tad katra kopija iet caur punktu, uz kuru noklikšķināt, kāds arī būtu attālums.
:::

{{cmd:OFFSET}} darbojas ar līnijām, lokiem, riņķiem un polilīnijām. Slēgtas polilīnijas nobīde nobīda visu kontūru, ieskaitot stūrus.

## Sakārtojiet ārējos stūrus ar Noapaļošanu

{{cmd:FILLET}} savieno divas līnijas stūrī: tas apgriež vai pagarina abas, lai tās satiktos. Ar rādiusu 0 stūris ir taisns.

1. Ierakstiet `F` un nospiediet {{key:Enter}}. Uzvednē rakstīts `Atlasiet pirmo līniju [Rādiuss]:`.
2. Ja pēdējā noapaļošana izmantoja rādiusu, ierakstiet `R`, nospiediet {{key:Enter}}, ierakstiet `0` un nospiediet {{key:Enter}}.
3. Noklikšķiniet ārējo apakšējo līniju tuvu tās labajam galam.
4. Pie `Atlasiet otru līniju` noklikšķiniet ārējo labo līniju tuvu tās apakšējam galam.

Abas līnijas tagad satiekas asā stūrī, un komanda beidzas.

5. Nospiediet {{key:Enter}}, lai atkārtotu {{cmd:FILLET}}, un izdariet nākamo stūri.
6. Atkārtojiet, līdz visi četri ārējie stūri satiekas.

Noklikšķiniet katru līniju tajā daļā, ko vēlaties **paturēt**. Ar rādiusu virs 0 Noapaļošana starp līnijām pievieno loku.

:::tip
Pirmajā uzvednē ierakstiet `M`, lai izdarītu visus četrus stūrus vienā reizē, vai zīmējiet ārējo malu kā vienu slēgtu polilīniju un ierakstiet `P`: katrs stūris tiek izdarīts uzreiz. Turiet {{key:Shift}}, noklikšķinot otro līniju, lai iegūtu asu stūri, nemainot rādiusu.
:::

## Nošķeliet stūri ar Nošķelšanu

{{cmd:CHAMFER}} nogriež stūri ar taisnu līniju.

1. Ierakstiet `CHA` un nospiediet {{key:Enter}}.
2. Ierakstiet `D` un nospiediet {{key:Enter}}. Ierakstiet `300` un nospiediet {{key:Enter}} pirmajam attālumam, pēc tam nospiediet {{key:Enter}}, lai izmantotu 300 arī otrajam.
3. Noklikšķiniet iekšējo augšējo līniju tuvu tās kreisajam galam, pēc tam iekšējo kreiso līniju tuvu tās augšējam galam.

Stūris tiek nogriezts atpakaļ par 300 pa katru līniju, un slīpuma līnija savieno tās. Ierakstiet `A` `D` vietā, lai dotu garumu pirmajā līnijā un leņķi.

## Izgrieziet durvju atveri ar Apgriezt

Vispirms zīmējiet divas durvju malas pāri apakšējai sienai, pēc tam apgrieziet sienas līnijas starp tām.

1. Ierakstiet `L` un nospiediet {{key:Enter}}.
2. Ierakstiet `1000,200` un nospiediet {{key:Enter}}.
3. Ierakstiet `@0,-600` un nospiediet {{key:Enter}}, tad vēlreiz nospiediet {{key:Enter}}.
4. Nospiediet {{key:Enter}}, lai atkārtotu {{cmd:LINE}}.
5. Ierakstiet `1900,200` un nospiediet {{key:Enter}}.
6. Ierakstiet `@0,-600` un nospiediet {{key:Enter}}, tad vēlreiz nospiediet {{key:Enter}}.

Tagad jums ir divas īsas līnijas, kas šķērso apakšējo sienu 900 attālumā.

7. Ierakstiet `TR` un nospiediet {{key:Enter}}. Vēsturē rakstīts `Pašreizējie iestatījumi: Ātrais režīms, malas: Bez pagarināšanas`.
8. Noklikšķiniet iekšējo apakšējo līniju starp abām malām. Šis gabals pazūd. (Vispirms novietojiet rādītāju uz tā: gabals, kas tiks noņemts, kļūst pelēks un punktēts.)
9. Noklikšķiniet ārējo apakšējo līniju starp abām malām. Arī šis gabals pazūd.
10. Noklikšķiniet tās katras malas daļu, kas izvirzās virs sienas, un daļu zem tās.
11. Nospiediet {{key:Enter}}, lai beigtu komandu.

Jums vajadzētu redzēt 900 atveri apakšējā sienā, un malas noslēdz sienas galus.

Ātrajā režīmā (noklusējums) Apgriezt nejautā, vispirms izvēloties griezējmalas: katrs redzamais objekts ir griezējmala. Izvēlieties gabalu, kas jāizņem, vai velciet ceļu pāri vairākiem gabaliem, lai apgrieztu tos visus vienā reizē. Ierakstiet `U` un nospiediet {{key:Enter}}, lai atliktu pēdējo izvēli vai vilkšanu, neizejot no komandas. Žogs, šķērsojums, izvēlētās malas un {{key:Shift}} pagarināšanai ir aprakstīti [Apgriezt un pagarināt](topic:trim-and-extend).

## Pagariniet līniju līdz citai

{{cmd:EXTEND}} pagarina līnijas, loka vai polilīnijas galu, līdz tas satiek nākamo objektu šajā virzienā.

1. Ierakstiet `L` un nospiediet {{key:Enter}}.
2. Ierakstiet `1000,2000` un nospiediet {{key:Enter}}.
3. Ierakstiet `@2000,0` un nospiediet {{key:Enter}}, tad vēlreiz nospiediet {{key:Enter}}. Līnija apstājas 2000 īsāka par labo sienu.
4. Ierakstiet `EX` un nospiediet {{key:Enter}}.
5. Noklikšķiniet jauno līniju tuvu tās labajam galam.
6. Nospiediet {{key:Enter}}, lai beigtu komandu.

Līnija tagad iet līdz labās sienas iekšējai malai. Katrs redzamais objekts ir robeža; izvēlieties tuvu galam, kuram jāaug. Komandā {{cmd:TRIM}} tas pats ir {{key:Shift}} + klikšķis.

## Pārtraukt un pagarināt

{{cmd:BREAK}} (`BR` vai {{ui:Labot}} › {{ui:Vairāk}} › {{ui:Pārtraukt}}) izgriež spraugu bez griezējmalas: noklikšķiniet objektu, kur sprauga sākas (šis klikšķis ir pirmais punkts), pēc tam noklikšķiniet, kur tā beidzas. Riņķī no pirmā punkta pretēji pulksteņrādītāja virzienam līdz otrajam iet daļa, kas tiek noņemta. `F` otrajā jautājumā ļauj ievadīt pirmo punktu vēlreiz, un {{cmd:BREAKATPOINT}} sadala objektu divos vienā punktā bez spraugas.

{{cmd:LENGTHEN}} (`LEN`) maina garumu vienā galā:

1. Ierakstiet `LEN` un nospiediet {{key:Enter}}. Noklikšķiniet līniju, lai redzētu tās pašreizējo garumu; uzvedne jautā vēlreiz.
2. Izvēlieties veidu: `DE` (Delta: pievienojamais lielums, negatīvs, lai atņemtu; `A` loka leņķim), `P` (Procents: 50 to pārvērš uz pusi), `T` (Kopā: garums, kādam tam jābūt) vai `DY` (Dinamisks: velciet galu).
3. Noklikšķiniet katru objektu tuvu galam, kuram jāpārvietojas. `U` atceļ pēdējo; {{key:Enter}} beidz.

Līnijas, loki un atvērtas polilīnijas (to galējais segments) var pagarināt.

## Biežākās kļūdas

- **Pazuda viss līnijas gabals.** Nekas to nešķērsoja, tāpēc Ātrais režīms to izdzēsa. Ierakstiet `U`, lai to atjaunotu; pārbaudiet, vai griezējlīnija patiešām to šķērso (tuviniet) un vai tā nav slānī, kas izslēgts.
- **„Šajā virzienā nav robežas.”** Pagarināšana neatrada, ko sasniegt. Izvēlieties tuvāk galam, kuram jāaug.
- **„Rādiuss ir pārāk liels.”** Loks iztecētu aiz vienas no līniju galiem. Izmantojiet mazāku rādiusu.
- **„Tikai atvērtas polilīnijas pirmo vai pēdējo segmentu var apgriezt.”** Izvēlieties divus blakus esošus polilīnijas segmentus vai ierakstiet `P`, lai noapaļotu katru tās stūri.
- **Nobīde nonāca nepareizajā pusē.** Puse ir tur, kur noklikšķināt pēc objekta izvēles. Atsauciet ar {{key:Mod+Z}} un noklikšķiniet otrā pusē.
- **„Nevar nobīdīt tik tālu.”** Nobīde apgrieztu loku, riņķi vai polilīniju ārpus āra. Izmantojiet mazāku attālumu.
