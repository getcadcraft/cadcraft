---
title: Teksti ja siltide lisamine
summary: Aseta ruumide sildid üherealise tekstiga, kirjuta murduvad märkused paigas oleva lõigutekstiga ja muuda teksti hiljem.
keywords: tekst, dtext, mtext, mleader, multileader, viiktekst, revcloud, pilvkontuur, pilv, otsi, asenda, otsi ja asenda, lõik, murdmine, reavahe, silt, märkus, märkused, kõrgus, joondus, textmask, taustamask, mask, wipeout, pööre, redigeeri teksti, ddedit, textedit, kirjatüüp
from: 4b76be99
---

## Mida sa valmistad

Kaks ruumisilti, keskjoondatud oma ruumides, märkus, mis murdub oma laiuse järgi, ning seejärel ühe sildi parandus.

## Teksti kõrgus ja joonise mõõtkava

Teksti kõrgus on joonise ühikutes. Millimeetrites joonisel, mis prinditakse mõõtkavas 1:50, on paberil 2.5 mm kõrge tekst mudelis 2.5 × 50 = 125 ühikut kõrge. Lehe sakil joonistad paberiühikutes, nii et seal tähendab 2.5 kõrgust 2.5 mm paberil.

## Keskjoondatud sildi paigutamine

1. Kirjuta `DT` ja vajuta {{key:Enter}} (või klõpsa tööriistaribal {{ui:Text}}). Käsurida on `Specify start point of text [Justify]:`.
2. Kirjuta `J` ja vajuta {{key:Enter}}.
3. Real `Enter an option [Left/Center/Right/Middle/TL/MC] <L>:` kirjuta `MC` ja vajuta {{key:Enter}}.
4. Real `Specify insertion point of text` klõpsa ruumi keskel.
5. Real `Specify height` kirjuta `250` ja vajuta {{key:Enter}}.
6. Real `Specify rotation angle of text <0>` vajuta {{key:Enter}}.
7. Real `Enter text` kirjuta `KÖÖK` ja vajuta {{key:Enter}}.

Silt ilmub keskjoondatuna punkti suhtes, millele klõpsasid.

8. Lõpetamiseks vajuta tühjal `Enter text` real {{key:Enter}}.

## Murduva märkuse kirjutamine

Lõigutekst ({{cmd:MTEXT}}) murdub kindlaks laiuseks ja kirjutatakse otse joonisele.

1. Kirjuta `T` ja vajuta {{key:Enter}}, või klõpsa tööriistaribal {{ui:Paragraph}}.
2. Real `Specify first corner` klõpsa kohta, kuhu märkuse vasak ülanurk läheb.
3. Kui soovid kõrguse enne muuta, kirjuta `H`, vajuta {{key:Enter}}, kirjuta `250` ja vajuta {{key:Enter}}.
4. Real `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]` klõpsa esimesest nurgast paremale. Laius üle on see, mille järgi tekst murdub; kui kaugele alla klõpsad, ei piira see midagi.
5. Joonise kohale avaneb kast, kursor on selles. Kirjuta `KÕIK MÕÕDUD ON MILLIMEETRITES, KUI POLE MÄRKITUD`. Sõnad murduvad laiuse järgi, kui kirjutad.
6. Uue lõigu alustamiseks vajuta {{key:Enter}} ja kirjuta `KONTROLLI OBJEKTIL`.
7. Vajuta {{key:Mod+Enter}}, klõpsa {{ui:OK}} või klõpsa kasti kõrval. Märkus on üks objekt.

Kasti kohal olev riba muudab kirjutamise ajal {{ui:Height}}, {{ui:Line spacing}} (1 on tavaline, 1.5 on pool võrra rohkem), {{ui:Width}} (0 = murdmist ei ole) ja {{ui:Justify}}. {{key:Esc}} või {{ui:Cancel}} sulgeb selle, lisamata midagi.

Valikud teisel nurgal: `H` kõrgus, `J` joondus (`TL` vasak ülal … `BR` parem all: nurk või kasti keskpunkt, mis jääb paigale), `L` reavahe, `R` pööre, `W` kirjutatud laius teise nurga asemel.

:::note
Kasti avamise ajal kirjutab {{key:Space}} tühiku ja {{key:Enter}} alustab uut lõiku. Salvestatud DWG hoiab lõigutekstina MTEXT-i; DXF R12-l pole lõigutekstit, seega salvestatakse iga rida eraldi tekstina.
:::

### Hoopis mitu üksikut rida

{{cmd:TEXT}} (`DT`) küsib ühe rea korraga: iga {{key:Enter}} alustab järgmist rida, 1.667 korda teksti kõrgusest allpool, ning iga rida on eraldi objekt. Lõpetamiseks vajuta tühjal real {{key:Enter}}.

## Joondusvalikud

| Valik | Punkt, millele klõpsad |
|---|---|
| Vasak (vaikimisi) | Põhijoone vasak ots |
| Keskpunkt | Põhijoone keskpunkt |
| Parem | Põhijoone parem ots |
| Keskel, MC | Teksti keskpunkt nii horisontaalselt kui vertikaalselt |
| TL | Teksti vasak ülanurk |

## Teksti muutmine

1. Topeltklõpsa tekstiobjekti. See avaneb samas kastis nagu uus lõigutekst, kursor on lõpus.
2. Muuda sõnu.
3. Vajuta {{key:Mod+Enter}} või klõpsa kasti kõrval. Joonisel olev tekst muutub; {{key:Esc}} jätab selle nii, nagu oli.

{{cmd:TEXTEDIT}} (`ED`) teeb sama: vali tekst teise järel ja vajuta lõpetamiseks {{key:Enter}}.

Teksti saab muuta ka parempoolses paneelis, kui tekst on valitud: {{ui:Text}}, {{ui:Height}}, {{ui:Wrap width}} (0 = murdmist ei ole), {{ui:Line spacing}}, {{ui:Rotation}}, X- ja Y-asukoht ning {{ui:Justify}}. Loend {{ui:Justify}} pakub ka valikut Alumine vasak, mida mõned teised programmid tekstis kasutavad.

## Vormindus teistest programmidest pärit lõigutekstis

Lõigutekst DWG- või DXF-failis võib sisaldada koode sees: värve sõnade kaupa, paksu ja kaldkirja, allajoonimist, ülejoonimist ja läbikriipsutust, pinutud murde nagu 1/2 ning sõna teistsugust kõrgust. CadCraft säilitab need koodid, joonistab need (ekraanil ja prinditud PDF-is) ja salvestab tagasi muutmata kujul.

Kui muudad sellist teksti (topeltklõps, {{cmd:TEXTEDIT}}, parempoolse paneeli väli Text või {{cmd:FIND}} koos asendamisega), muudad sa selle lihtsaid sõnu. Sõna, mille kirjutad, läheb kõrvalolevasse lõiku ja võtab selle värvi ja stiili; teised koodid jäävad oma kohale. Kui kirjutad pinutud murru arvud uuesti, muutub see murd lihtsaks tekstiks. Kui seadistad kogu teksti parempoolse paneeli väljalt, säilitatakse koodid ainult seal, kus on näha, milliseid sõnu on alles.

Fondi nimed (`\F`) säilitatakse ja salvestatakse, kuid kõik joonistatakse ühe Helvetica-taolise fondiga. Koodide kirjutamiseks ei ole veel tööriistariba.

## Millelegi osutamine: mitmikviidad

{{ui:Leader}} grupis {{ui:Annotate}} ({{cmd:MLEADER}}, `MLD`) joonistab noole, viidasjoone, lühikese maandumise ja märkuse ühe objektina.

1. Klõpsa {{ui:Leader}}. Real `Specify leader arrowhead location` klõpsa kohta, millest märkus räägib.
2. Real `Specify leader landing location` klõpsa kohta, kuhu märkus läheb. Maandumine pöördub poole, kuhu klõpsasid.
3. Kirjuta avanevasse kasti märkus ja vajuta {{key:Mod+Enter}}.

`A` ja `L` esimesel küsimusel määravad noole suuruse ja maandumise pikkuse; teksti kõrgus tuleb uute mõõtmete väärtusest {{ui:Text height}}, korrutatuna väärtusega {{ui:Overall scale}}. Topeltklõps mitmikviidal muudab selle sõnu. Haardepunktid liigutavad noolt ja maandumist; märkus järgib maandumist. Paneelil {{ui:Properties}}: {{ui:Text}}, {{ui:Height}}, {{ui:Wrap width}}, {{ui:Arrowhead size}} ja {{ui:Landing distance}}.

:::note
Mitmikviidad salvestatakse DWG-s tõeliste mitmikviitadena. DXF R12 ja 2000 ei tunne mitmikviita, seega salvestatakse need seal joontena, noolepeana ja tekstina, mida need joonistavad.
:::

## Muudatuste märkimine pilvkontuuriga

{{ui:Annotate}} › {{ui:More}} › {{ui:Revision cloud}} ({{cmd:REVCLOUD}}, `RC`) joonistab muutunud koha ümber kaarte pilve. Ajalugu näitab kaare pikkust ja tüüpi, mida see kasutab.

- **Ristkülikukujuline** (esimest korda): klõpsa kahte nurka.
- `P` **Hulknurkne**: klõpsa nurki, {{key:Enter}} sulgeb pilve.
- `F` **Vabakäeline**: klõpsa kohta, kus see algab, ja liiguta osutit ala ümber ilma klõpsamata; iga kaare pikkuse järel lisatakse kaar. Lõpetamiseks klõpsa või vajuta {{key:Enter}}.
- `O` **Objekt**: vali suletud polüjoon, ring või ellips (või joon, kaar või avatud polüjoon); see saab pilveks. `Reverse direction?` `Y` pöörab kaared sissepoole.
- `A` **Kaare pikkus**: iga kaare pikkus. Vali selline, mis sobib prindimõõtkavaga.

Pilv on suletud polüjoon kaartest, seega salvestub see igas formaadis.

## Sõnade otsimine ja asendamine

{{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}} ({{cmd:FIND}}) otsib läbi teksti, plokiatribuutide väärtused ja mõõtmetekstid avatud vahelehel (või ainult valitud objektides).

1. Kirjuta sõnad väljale {{ui:Find}}. Loend näitab iga kohta, kus need on, ja arvu.
2. Vali vajadusel {{ui:Match case}}, {{ui:Whole words only}} või {{ui:Use wildcards (* and ?)}} ning eemalda linnuke sealt, kust ei tohi otsida.
3. Klõpsa {{ui:Select found}}, et valida need objektid, või kirjuta uued sõnad väljale {{ui:Replace with}} (loend näitab, mis iga sõnast saab) ja klõpsa {{ui:Replace all}}. Üks {{key:Mod+Z}} võtab tagasi kõik asendused.

Mõõtmise mõõdetud väärtus ei ole tekst, seega seda ei asendata kunagi: tekstis `<> TYP.` saab asendada ainult `TYP.`.

## Sildi taga olevate joonte peitmine

1. Vali tekstid, kirjuta {{cmd:TEXTMASK}} ja vajuta {{key:Enter}}.
2. `B` maalib joonise tausta nende taha; `C` küsib värvinumbrit. `O` eemaldab maski.
3. `Border offset factor`: {{key:Enter}} jätab väärtuseks 1.5, pool teksti kõrgust teksti ümber.

Mask katab teksti all olevad jooned nii ekraanil kui prindil. DWG 2004 või uuem ja DXF 2000 säilitavad selle; DWG 2000 vorming ja DXF R12 ei saa seda, ning salvestamine ütleb seda.

## Kirjatüüp

Kogu tekst joonistatakse ekraanil ja PDF-ides Helvetica-taolise fondiga. Avatud joonistest pärit tekst säilitab oma sõnad, kõrguse ja asukoha, kuid mitte algset fonti (lõigutekstis oleva fondi nimi säilitatakse failis, vt eespool).

Prinditud PDF-ides prinditakse iga Euroopa kirja, kirillitsa või kreeka keele tekst oma kujul (PDF kannab vajalikke tähti ja teksti saab ikka valida ja otsida). Hiina, jaapani ja korea tekst prinditakse samuti oma kujul (prindi laadib suurema fondi esimesel vajadusel). Araabia, pärsia, urdu ja heebrea tekst prinditakse samuti oma kujul (vt järgmist jaotist). Tähemärgid, millel pole ühelgi fondil tähte, prinditakse kui „?“, ja ajalugu ütleb, mitu neid oli.

## Paremalt vasakule kirjutatav tekst: araabia, pärsia, urdu, heebrea

Kirjuta tekst nagu igal pool mujal: {{cmd:TEXT}} ja {{cmd:MTEXT}} joonistavad iga rea lugemisjärjekorras. Rida, mille esimene täht on araabia või heebrea keeles, loetakse paremalt vasakule; numbrid ja ladinakeelsed sõnad selle sees säilitavad oma vasakult paremale järjekorra ning araabia kirjatähed on ühendatud. Rida, mis algab ladina tähega, jääb vasakult paremale, ja selle sees on paremalt vasakule sõnad oma kohal. Mitmerealise teksti igal lõigul on oma suund ning murduv lõik säilitab selle igal real.

Tekst salvestatakse nii, nagu kirjutasid, nii et DWG- ja DXF-failid vahetavad seda teiste programmidega muutumatult. Sisestuspunkt ja joondus ({{ui:Left}}, {{ui:Center}}, {{ui:Right}}) tähendavad sama külge nagu iga teksti puhul: paremalt vasakule märkus, mis peaks rippuma oma parema otsa küljest, vajab {{ui:Right}}.

Ekraanil tulevad tähed sinu süsteemi fontidest. Prinditud PDF-is kasutab heebrea keel sama manustatud fonti, mis ladina tekst; araabia kirjaga tekst laadib prindi jaoks veel ühe fondi (alla 1 MB, ainult üks kord), ja kogu PDF prinditakse siis selle fondiga. Sellel fondil pole oma kuju kolmele urdu tähemärgile (heh goal, yeh barree ja urdu lõpupunkt): need prinditakse lähima araabia tähe kujul. Joonis, millel on nii araabia kirjaga kui hiina, jaapani või korea tekst, prindib ühe neist kui „?“, sest print kannab ühte fonti. Laaditud SHX-fondi tekst järjestatakse ja ühendatakse, kui font sisaldab tähti oma Unicode'i kohtades; vanade fontide puhul, mille tähed on juba kujundatud, kasuta nagu varemgi {{cmd:SHXFONTS}} käsus {{ui:Reverse}}.

## Levinud vead

- **Tekst on liiga väike, et näha.** Kõrgus on joonise ühikutes. Suurel joonisel kasuta suurt kõrgust (vt ülal) või suumi sisse.
- **Käsk lõppes pärast ühte rida.** Vajutasid tühjal real {{cmd:TEXT}}-is {{key:Enter}}. Alusta uuesti või kasuta lõigteksti (`T`), kus {{key:Enter}} alustab uut lõiku.
- **`T` avas kasti, mitte ei küsinud rida.** Nagu AutoCADis, on `T` lõigutekst ({{cmd:MTEXT}}); üherealine tekst on `DT`.
- **Tekst murdub AutoCADis mujal.** CadCraft murrab Helvetica laiustega; teine font mahutab sõna rea peale rohkem või vähem.
- **Tekst peegeldatud koopias.** See paigutatakse peegelduna, kuid jääb vasakult paremale loetavaks.
