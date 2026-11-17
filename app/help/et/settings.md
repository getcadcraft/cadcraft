---
title: CadCraft'i sätted
summary: Joonistusrakenduse sätted: kursori suurus, kuhu kleebitud koopia rippub kursori küljes, mida klõps teeb valikuga, mitu rida tööriistariba kasutab, kus käsurida asub ja kui kõrge see on, kompaktne ülemine ala ja nurgaindikaator.
keywords: käsurida, hõljuv käsurida, hõlju, kinnita, üks rida, f2, käsu ajalugu, commandline, cmdline, toparea, ülemine ala, kompaktne, cursorsize, täisekraani rist, täisekraani kursor, servast servani, tööriistariba read, tööriistariba kuvamine, ctrl f1, sätted, eelistused, suvandid, nurgaindikaator, vaatekuup, teljeikoon, kursor, rist, valiku kast, kleebi punkt, baaspunkt, objektide klõpsamine, valik, pickadd, shift, lähtesta
from: 0896eb42
---

Ava {{ui:Sätted}} rakenduse ribas olevast hammasrattast või {{key:Mod+,}}. Esimene vahekaart, {{ui:CadCraft}}, sisaldab selle rakenduse sätteid; {{ui:Üldine}} sisaldab neid, mida jagavad kõik sama perekonna rakendused (teema, paneeli teksti suurus ja laiused, tööriistariba välimus ja järjestus). CadCraft'i sätted kehtivad ainult selles rakenduses: muudad neid siin ja see brauser mäletab neid. {{ui:Lähtesta CadCraft'i sätted}} paneb need kõik algsesse seisu.

## Kursor

**Väike**, **Keskmine** (algus), **Suur** või **Täisekraan**: ristkursori ja joonise valikukasti suurus. Suurem valikukast valib objekte ka veidi kaugemalt, mis aitab puuteekraani või väga peene joonise puhul.

**Täisekraan** joonistab ristkursori kaks joont servast servani üle joonise, ka siis, kui ühtki käsku ei käi, nii et saad silmaga kontrollida, et kaks asja joonduvad kogu vaate ulatuses. Kui vaade on jagatud, jäävad jooned selle paani sisse, mida parasjagu töötad. Sama mis AutoCAD'i {{cmd:CURSORSIZE}} 100: kirjuta {{cmd:CURSORSIZE}} ja 100 täisekraani jaoks; väiksem arv valib lähima suuruse (alla 5 Väike, 5 kuni 9 Keskmine, 10 kuni 99 Suur).

## Kleebi punkt

Kuhu kleebitud koopia rippub kursorist pärast {{key:Mod+V}} ({{cmd:PASTECLIP}}), kuni klõpsad:

- **Vasak alumine nurk** (algus): kopeeritud objektide ulatuse vasak alumine nurk, nagu AutoCAD'is.
- **Keskpunkt**: nende ulatuse keskpunkt. Mugav sümboli silmamõõdu järgi paigutamiseks.

Koopia, mis on tehtud `COPYBASE`-iga, rippub alati baaspunktist, mille valisid. {{ui:Kleebi kohale}} ({{key:Mod+Shift+V}}) ignoreerib seda sätet: see jätab algsed koordinaadid alles. Vt [Kopeeri, kleebi ja dubleeri](topic:copy-paste).

## Objektide klõpsamine

Mida klõps joonisel teeb valikuga, kui ühtki käsku ei käi:

- **Lisab valikule** (algus): iga klõps või aken lisab objekte; {{key:Shift}}+klõps või {{key:Shift}}+aken võtab need välja.
- **Asendab valiku**: klõps või aken valib ainult selle, mida ta võtab. {{key:Shift}}+klõps lisab objekti või võtab välja juba valitud objekti; {{key:Shift}}+aken lisab.

`Vali objektid:` viibal käsu sees lisavad klõpsud alati (ja {{key:Shift}} eemaldab), olenemata sellest sättest. Vt [Objektide valimine](topic:select-objects).

## Tühjale kohale klõpsamine

Mida klõps kohas, kus objekti ei ole, teeb, kui ühtki käsku ei käi. Kumbki viis alustab valikuakent (teine klõps lõpetab selle).

- **Tühjendab valiku** (algus): valitu lastakse lahti. Hoia {{key:Shift}} all, kui klõpsad, et see alles jääks.
- **Jätab valiku alles**: valik jääb, nagu teistes joonistusprogrammides; aken lisandub sellele. Vajuta {{key:Esc}}, et valik tühjendada.

## Lohistamine valimiseks

Mida tühjal kohal vajutamine ja lohistamine joonistab:

- **Lasso** (algus): vabakäeline kontuur. Kui liigud esmalt paremale, valitakse täielikult selle sees olev; kui esmalt vasakule, siis see, mida see puudutab. {{key:Space}} lohistamise ajal vahetab akna, ristumise ja piirjoone vahel.
- **Ristkülik**: kast, nagu klõps ja teine klõps selle joonistavad.

{{cmd:LASSOMODE}} `1` või `0` määrab sama. Vt [Lasso valik](topic:lasso-selection).

## Lohistamine lõikamiseks ja pikendamiseks

Mida tühjal kohal vajutamine ja lohistamine teeb käskudes {{cmd:TRIM}} ja {{cmd:EXTEND}}:

- **Tee** (algus): vabakäeline tee; iga tükk, mille see ristub, lõigatakse (või pikendatakse).
- **Aken**: kast; iga tükk, mida see puudutab, lõigatakse, nagu teeb `C` valik.

Vt [Lõika ja pikenda](topic:trim-and-extend).

## Tööriistariba asukoht

{{ui:CadCraft}} › {{ui:Tööriistariba asukoht}}: **Ülal** (algus, nagu see on alati olnud), **All**, **Vasakul** või **Paremal**. Vasakul või paremal on tööriistarühmad veerus, mis kerib, kui see on akna kõrgusest pikem, ja nupud mähivad kahte või kolme ritta. Valik salvestatakse koos sinu sätetega ning {{cmd:TOOLBARDOCK}} (`TBDOCK`) määrab selle käsurealt. {{ui:Üldine}} › {{ui:Lähtesta paigutus}} paneb tööriistariba tagasi üles.

Menüülaadide ribad asuvad tööriistariba sees ja liiguvad koos sellega, kuid {{ui:Riba}} laad on tehtud jooksma üle ülaosa või allosa: külgedel saab see kitsa kerivana veeru. Nutitelefonil jääb tööriistariba sinna, kuhu telefoni paigutus selle paneb.

## Tööriistariba read

Mitu rida tööriistad joonise kohal kasutavad, CadCraft'i tööriistaribas ja laadides {{ui:Klassikaline joonistus}} ja {{ui:Riba}}:

- **Mahuta akna laiusele** (algus): tööriistad mähivad akna laiuse järgi.
- **2 rida**: kõige rohkem kaks rida. Kui tööriistad mähivad selles laiuses kaheks reaks või vähemaks, mähivad nad lihtsalt; muidu on need kahes reas, mis kerivad küljelt.
- **1 rida**: üks rida, mis kerib küljelt, jättes joonisele kõige rohkem ruumi.

{{key:Shift+Ctrl+F1}} liigub kolme vahel ja {{cmd:TOOLBARROWS}} määrab ühe. Mida nupud näitavad (ikoonid ja tekst, ainult ikoonid või ainult tekst), on {{ui:Üldine}} › {{ui:Tööriistariba}} säte; {{key:Ctrl+F1}} liigub selle vahel ja {{cmd:TOOLBAR}} määrab selle.

## Käsurida

Käsurida võib jääda joonise alla kinnitatuna, nagu alati oli, või hõljuda selle kohal, ja see võib olla kitsas nagu üks rida.

- **Hõljuta see.** Lohista selle vasakpoolses otsas olevat käepidet joonisesse või vali selle {{ui:Käsu suvandid}} menüüst (kolm punkti selle paremas otsas) {{ui:Hõlju joonise kohal}}. Lohista käepidet uuesti, et seda liigutada; selle koht jääb alles, kui akna suurus muutub. Lohista selle paremat serva, et seda laiemaks või kitsamaks teha. Too see olekuribale või vali {{ui:Kinnita alla}}, et see uuesti kinnitada.
- **Tee see kitsamaks või kõrgemaks.** Lohista selle ülemist serva: iga samm on üks ajaloo rida. Nullini alla on see **üherealine käsurida**: ainult viip ja see, mida kirjutad, ning uus teade kuvatakse selle kohal hetkeks. Topeltklõps ülemisel servas liigub ühe rea ja sinu varasema kõrguse vahel.
- **Ajalugu.** {{key:F2}} või käsurea kell ({{ui:Käsu ajalugu (F2)}}) avab kogu ajaloo rea kohal (allpool, kui käsurida hõljub akna ülaosa lähedal). Kirjutamine läheb ikka käsureale; {{key:PageUp}} ja {{key:PageDown}} kerivad ajalugu, ja {{key:Esc}}, {{key:F2}} või klõps mujal sulgeb selle. Sinu enda klahv F2 peal on sellest üle.
- **Klaviatuurilt.** Käepide on nupp: kui sellel on fookus, liigutavad nooleklahvid hõljuvat käsurida ({{key:Shift}}-ga suuremates sammudes); {{key:Up}} hõljutab kinnitatud rea ja {{key:Down}} alumisel servas kinnitab selle. Ülemine serv on eraldaja: {{key:Up}} ja {{key:Down}} lisavad või võtavad rea, {{key:Home}} teeb selle üherealiseks, {{key:End}} kõige kõrgemaks. Ekraanilugejad kuulevad ikka iga teadet, ka üherealises käsureas.

{{ui:CadCraft}} › {{ui:Käsurida}} annab samad valikud: {{ui:Kinnitatud allservas}} või {{ui:Hõljuv}}, {{ui:Näidatavate ajaloo ridade arv}} (0 kuni 12) ja {{ui:Standardkõrgus}}. {{cmd:COMMANDLINE}} (`CMDLINE`) määrab need käsurealt. Koht ja kõrgus salvestatakse CadCraft'i jaoks sellesse brauserisse koos ülejäänud paigutusega, nii et salvestatud töökeskkond need kaasa võtab; {{ui:Üldine}} › {{ui:Lähtesta paigutus}} kinnitab käsurea uuesti standardkõrgusega. Nutitelefonil jääb käsurida kinnitatuks ühe ajaloo reaga; ajaloo nupp töötab seal samuti.

Kui aken on madal ja paigutuse kontroll pakub kompaktsemat paigutust, muudab selle {{ui:Jah}} nupp käsurea ka üherealiseks, kui joonis on pärast tööriistaribasid ikka lühike.

## Ülemine ala

{{ui:CadCraft}} › {{ui:Ülemine ala}}: **Standardne** (algus) või **Kompaktne**. Kompaktne hoiab joonise kohal olevad ribad väikesed kõigis menüülaadides: rühmanimed ja ikoonide all olev sõnad kaovad (tööriistavihjed ja ekraanilugejad neid ikka sisaldavad) ning nupud on tihedamad. See töötab koos [Tööriistariba read](topic:settings#toolbar-rows) sättega: Kompaktne ja **1 rida** jätavad joonisele kõige rohkem ruumi. {{cmd:TOPAREA}} määrab selle.

## Nurgaindikaator

Mis asub joonise nurgas:

- **Automaatne** (algus): teljeikoon kaardil {{ui:Mudel}} ja vaatekuup kaardil {{ui:3D}}.
- **Teljeikoon**: X- ja Y-märgis kaardi {{ui:Mudel}} vasakus alanurgas ning väike X-, Y- ja Z-märgis kaardil {{ui:3D}}.
- **Vaatekuup**: kuup mõlema kaardi paremas ülanurgas. Kaardil {{ui:Mudel}} näitab see joonist ülevalt ning teise tahu, serva või nurga klõpsamine avab kaardi {{ui:3D}}, mis vaatab sealt. Kaardil {{ui:3D}} pöördub see vaatega: klõpsa, et vaadata küljelt, lohista orbiidiks, ja maja naaseb iso-vaatesse. Vt [Mudel 3D-s](topic:3d-solids).
- **Puudub**: nurgas ei ole midagi.

Lehed ei näita kumbagi.

## Valiku pikkus ja pindala

- **Olekuribal** (algus): kui objektid on valitud, näitab olekuriba nende kogupikkust ja suletud objektide kogupindala. Vt [Valiku kogusummad](topic:properties-panel#totals-of-a-selection).
- **Peidetud**: olekuriba neid ei näita. Omadused näitavad neid ikka mitme objekti korral.

## Ruudustik, Ortho ja püüdmised

Need ei ole dialoogis: olekuriba nupud {{ui:Ruudustik}}, {{ui:Ortho}} ja {{ui:Püüdmine}} (või {{key:F7}}, {{key:F8}}, {{key:F3}}) ja nende kõrval olev objektipüüdmiste loend jäetakse meelde, nii nagu need jätad. Vt [Püüa objektide punktidele](topic:object-snaps).
