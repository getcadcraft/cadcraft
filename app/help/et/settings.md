---
title: CadCrafti sätted
summary: Joonistusrakenduse sätted: kursori suurus, kuhu kleebitud koopia kursorist ripub, mida klõps teeb valikuga, mitu rida tööriistariba kasutab, kus käsurida asub ja kui kõrge see on, kompaktne ülemine ala ja nurgaindikaator.
keywords: käsurida, hõljuv käsurida, hõlju, kinnita, üks rida, f2, käsu ajalugu, commandline, cmdline, toparea, ülemine ala, kompaktne, cursorsize, täisekraani ristik, servast servani, tööriistariba read, tööriistariba kuvamine, ctrl f1, sätted, eelistused, valikud, nurgaindikaator, vaateteljed, ucs-ikoon, kursor, ristik, püügikast, kleebi punkt, baaspunkt, objektide klõpsamine, valik, pickadd, shift, lähtestamine
from: ae1a81db
---

Ava {{ui:Settings}} (Sätted) rakenduse ribal oleva hammasratta kaudu või {{key:Mod+,}}. Esimene sakk, {{ui:CadCraft}}, sisaldab seda rakendust puudutavaid sätteid; {{ui:General}} (Üldine) sisaldab neid, mida kõik perekonna rakendused jagavad (teema, paneeli teksti suurus ja laiused, tööriistariba väljanägemine ja järjekord). CadCrafti sätted on ainult selles rakenduses: muudad neid siin ja see brauser mäletab neid. {{ui:Reset CadCraft settings}} (Lähtesta CadCrafti sätted) paneb need kõik tagasi algusesse.

## Kursor

**Väike**, **Keskmine** (algseade), **Suur** või **Täisekraan**: ristiku ja joonise püügikasti suurus. Suurem püügikast valib objekte ka natuke kaugemalt, mis aitab puuteekraanil või väga peene joonisega.

**Täisekraan** viib ristiku kaks joont servast servani üle joonise, ka siis, kui ükski käsk ei tööta, nii et saad silmaga kontrollida, kas kaks asja joonduvad kogu vaate ulatuses. Kui vaade on jagatud, jäävad jooned sinu töötavasse paani. Sama mis AutoCADi {{cmd:CURSORSIZE}} 100: sisesta {{cmd:CURSORSIZE}} ja 100 täisekraani jaoks; väiksem arv valib lähima suuruse (alla 5 Väike, 5 kuni 9 Keskmine, 10 kuni 99 Suur).

## Kleebimise punkt

Kust kleebitud koopia kursorist ripub pärast {{key:Mod+V}} ({{cmd:PASTECLIP}}), kuni klõpsad:

- **Vasak alumine nurk** (algseade): kopeeritud objektide ulatuse vasak alumine nurk, nagu AutoCADis.
- **Keskpunkt**: nende ulatuse keskpunkt. Mugav sümboli silmaga paigutamiseks.

Koopia, mis on tehtud käsuga `COPYBASE`, ripub alati baaspunktist, mille valisid. {{ui:Paste in place}} (Kleebi kohale) ({{key:Mod+Shift+V}}) ignoreerib seda seadet: see hoiab algsed koordinaadid. Vt [Kopeeri, kleebi ja dubleeri](topic:copy-paste).

## Objektide klõpsamine

Mida klõps joonisel teeb valikuga, kui ükski käsk ei tööta:

- **Lisab valikule** (algseade): iga klõps või aken lisab objekte; {{key:Shift}}+klõps või {{key:Shift}}+aken eemaldab need.
- **Asendab valiku**: klõps või aken valib ainult selle, mida valib. {{key:Shift}}+klõps lisab objekti või eemaldab juba valitud objekti; {{key:Shift}}+aken lisab.

Küsimuses `Select objects:` käsu sees klõpsud alati lisavad ({{key:Shift}} eemaldab), olenemata sellest seadest. Vt [Objektide valimine](topic:select-objects).

## Tühja koha klõpsamine

Mida klõps kohas, kus objekti pole, teeb, kui ükski käsk ei tööta. Igal juhul alustab see valikuakent (teine klõps lõpetab selle).

- **Tühjendab valiku** (algseade): see, mis oli valitud, vabastatakse. Hoia {{key:Shift}} all klõpsates, et see alles jätta.
- **Jätab valiku alles**: valik jääb, nagu teistes joonistusprogrammides; aken lisab sellele. Vajuta {{key:Esc}}, et valik tühjendada.

## Lohistamine valimiseks

Mida vajutamine ja lohistamine tühjal kohal joonistab:

- **Lasso** (algseade): vabakäe kontuur. Kui liigud esmalt paremale, valitakse see, mis on sees täielikult, vasakule esmalt, mida see puudutab; {{key:Space}} lohistamise ajal vahetab aken, ristakna ja piirdeaia vahel.
- **Ristkülik**: kast, nagu klõps ja teine klõps joonistavad selle.

{{cmd:LASSOMODE}} `1` või `0` määrab sama. Vt [Lasso-valik](topic:lasso-selection).

## Lohistamine lõikamiseks ja pikendamiseks

Mida vajutamine ja lohistamine tühjal kohal teeb käskudes {{cmd:TRIM}} ja {{cmd:EXTEND}}:

- **Rada** (algseade): vabakäe rada; iga tükk, mida see ristub, lõigatakse (või pikendatakse).
- **Aken**: kast; iga tükk, mida see puudutab, lõigatakse, nagu valik `C` teeb.

Vt [Lõika ja pikenda](topic:trim-and-extend).

## Tööriistariba asukoht

{{ui:CadCraft}} › {{ui:Toolbar position}} (Tööriistariba asukoht): **Ülal** (algseade, nagu alati on olnud), **All**, **Vasak** või **Parem**. Vasakul või paremal laotatakse tööriistagrupid veergu, mis kerib, kui see on akna kõrgem, ja nupud murduvad kaheks või kolmeks reaks. Valik salvestatakse koos sinu sätetega; {{cmd:TOOLBARDOCK}} (`TBDOCK`) määrab selle käsurealt. {{ui:General}} › {{ui:Reset the layout}} (Lähtesta paigutus) paneb tööriistariba tagasi ülale.

Menüü stiilide ribad asuvad tööriistariba sees ja liiguvad koos sellega, aga stiil {{ui:Ribbon}} (Riba) on tehtud jooksma üle ülaosa või alaosa: küljel saab see kitsa kerivaa veeru. Telefonil jääb tööriistariba sinna, kuhu telefoni paigutus selle paneb.

## Tööriistariba read

Mitu rida tööriistad joonise kohal kasutavad, CadCrafti tööriistaribas ja stiilides {{ui:Drafting classic}} (Klassikaline joonistus) ja {{ui:Ribbon}} (Riba):

- **Murra sobivaks** (algseade): tööriistad murduvad akna laiuse järgi.
- **2 rida**: kõige rohkem kaks rida. Kui tööriistad murduvad selle laiuse juures kaheks reaks või vähem, murduvad lihtsalt; muidu on need kaks rida, mis kerivad külgsuunas.
- **1 rida**: üks rida, mis kerib külgsuunas, mis jätab joonisele kõige rohkem ruumi.

{{key:Shift+Ctrl+F1}} käib läbi kolmest, ja {{cmd:TOOLBARROWS}} määrab ühe. Mida nupud näitavad (ikoonid ja tekst, ainult ikoonid või ainult tekst) on jaotise {{ui:General}} › {{ui:Toolbar}} (Tööriistariba) seade; {{key:Ctrl+F1}} käib sellest läbi ja {{cmd:TOOLBAR}} määrab selle.

## Käsurida

Käsurida võib jääda joonise alla kinnitatuks, nagu see alati on olnud, või hõljuda selle kohal, ja ta võib olla ühe rea paksune.

- **Hõlju see.** Lohista käepide selle vasakust otsast joonisesse või vali {{ui:Float over the drawing}} (Hõlju joonise kohal) menüüst {{ui:Command line options}} (Käsurea suvandid) (kolm punkti selle paremas otsas). Käepidet uuesti lohistades liigutad seda; selle koht säilib, kui akna suurus muutub. Lohista parempoolset serva, et seda laiemaks või kitsamaks teha. Too see staatusribale või vali {{ui:Dock at the bottom}} (Kinnita alla), et see uuesti kinnitada.
- **Tee see kitsamaks või kõrgemaks.** Lohista selle ülemist serva: iga samm on üks ajaloo rida. Nullini alla viies on see **üherealine käsurida**: ainult küsimus ja see, mida sisestad, ning uus teade ilmub selle kohale hetkeks. Topeltklõps ülemisel servael läheb ühe rea ja sinu varasema kõrguse vahel.
- **Ajalugu.** {{key:F2}} või käsurea kella nupp ({{ui:Command history (F2)}}) avab kogu ajaloo rea kohal (allpool, kui hõljuv rida on akna ülaosa lähedal). Sisestamine läheb ikka käsureale; {{key:PageUp}} ja {{key:PageDown}} kerivad ajalugu, ja {{key:Esc}}, {{key:F2}} või klõps mujal sulgeb selle. Sinu enda klahv F2-l võidab selle.
- **Klaviatuurilt.** Käepide on nupp: kui sellel on fookus, liigutavad nooleklahvid hõljuvat käsurida ({{key:Shift}}-ga suuremates sammudes); {{key:Up}} hõljutab kinnitatud rea ja {{key:Down}} alumisel servas kinnitab selle. Ülemine serv on eraldaja: {{key:Up}} ja {{key:Down}} lisavad või võtavad ära rea, {{key:Home}} teeb sellest ühe rea, {{key:End}} kõige kõrgema. Ekraanilugejad kuulevad siiski iga teadet, ka üherealises käsurealt.

{{ui:CadCraft}} › {{ui:Command line}} (Käsurida) on samad valikud: {{ui:Docked at the bottom}} (Kinnitatud allservas) või {{ui:Floating}} (Hõljuv), {{ui:History lines shown}} (Näidatavate ajaloo ridade arv) (0 kuni 12) ja {{ui:Standard height}} (Standardkõrgus). {{cmd:COMMANDLINE}} (`CMDLINE`) määrab need käsurealt. Koht ja kõrgus jäävad CadCraftile selles brauseris koos ülejäänud paigutusega alles, nii et salvestatud töökeskkond kannab neid kaasas; {{ui:General}} › {{ui:Reset the layout}} kinnitab käsurea uuesti standardkõrgusel. Telefonil jääb käsurida kinnitatuks ühe rea ajalooga; ka ajaloonupp töötab seal.

{{ui:CadCraft}} › {{ui:Option letters}} (Suvandite tähed) hoiab käsu suvanditele valitud tähti: {{ui:Edit…}} (Muuda…) avab faili, {{ui:Import…}} (Impordi…) asendab selle failiga, mille valid, ja {{ui:Export}} (Ekspordi) salvestab selle. Vt [Anna käsu suvanditele oma tähed](topic:option-letters).

Kui aken on madal ja paigutuse kontroll pakub tihedamat paigutust, lülitab selle {{ui:Yes}} (Jah) käsurea ka üherealiseks, kui joonis on pärast tööriistaribasid ikka lühike.

## Ülemine ala

{{ui:CadCraft}} › {{ui:Top area}} (Ülemine ala): **Standard** (Tavaline) (algseade) või **Compact** (Kompaktne). Kompaktne hoiab joonise kohal olevad ribad igas menüü stiilis väikesed: rühmade nimed ja ikoonide all olevad sõnad kaovad (tööriistavihjed ja ekraanilugejad neid siiski omavad) ja nupud on tihedamad. See töötab koos [Tööriistariba ridadega](topic:settings#toolbar-rows): Compact ja **1 rida** jätavad joonisele kõige rohkem ruumi. {{cmd:TOPAREA}} määrab selle.

## Nurgaindikaator

Mis joonise nurgas on:

- **Automaatne** (algseade): telgede ikoon vahelehel {{ui:Model}} (Mudel) ja vaatekuup vahelehel {{ui:3D}}.
- **Telgede ikoon**: X- ja Y-märgis vahelehe {{ui:Model}} vasakus alanurgas ja väike X-, Y- ja Z-märgis vahelehel {{ui:3D}}.
- **Vaatekuup**: kuup mõlema vahelehe paremas ülanurgas. Vahelehel {{ui:Model}} näitab see joonist ülevalt, ja klõps mõnele teisele tahule, servale või nurgale avab vahelehe {{ui:3D}}, mis vaatab sealt. Vahelehel 3D pöördub see vaatega kaasa: klõpsa, et vaadata küljelt, lohista orbiidi jaoks, ja maja läheb tagasi isomeetrilisse vaatesse. Vt [Mudel 3D-s](topic:3d-solids).
- **Puudub**: nurgas ei ole midagi.

Lehed ei näita kumbagi.

## Valiku pikkus ja pindala

- **Staatusribal** (algseade): kui objektid on valitud, näitab staatusriba nende kogupikkust ja suletud objektide koguala. Vt [Valiku kogusummad](topic:properties-panel#totals-of-a-selection).
- **Peidetud**: staatusriba need ei näita. Paneel Omadused näitab neid siiski mitme objekti puhul.

## Ruudustik, Ortho ja püüdmised

Neid ei ole dialoogis: nupud {{ui:Grid}} (Ruudustik), {{ui:Ortho}} ja {{ui:Snap}} (Püüdmine) staatusribal (või {{key:F7}}, {{key:F8}}, {{key:F3}}) ja objektipüüdmiste loend nende kõrval jäävad meelde, kui neist lahkud. Vt [Püüa objektide punktidele](topic:object-snaps).
