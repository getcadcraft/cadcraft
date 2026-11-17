---
title: Mõõtude suuruste, komakohtade ja mõõtkava seadistamine
summary: Vali uute mõõtude teksti kõrgus, noole suurus, komakohad ja üldine mõõtkava, muuda olemasolevaid mõõte ning mõista, kuidas mõõtmestiilid CadCraft'is töötavad.
keywords: mõõtmestiil, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, üldine mõõtkava, komakohad, noole suurus, annotatsiooni mõõtkava, dimtextunit, ühikud tekstis, mm, cm, m, km, millimeetrid, meetrid, dimlfac, dimpost
from: 8ec82a07
---

## Mida sa õpid

Kui suured on mõõdu tekst ja nooled, kuidas neid seada joonisele, mis väljastatakse mõõtkavas 1:50 või 1:100, ja kuidas muuta mõõte, mille juba tegid.

## Kuidas mõõtude suurused töötavad

Igal mõõdul on oma suuruste komplekt: teksti kõrgus, noole suurus, komakohad, vahe teksti ümber, kui kaugele mõõtejoonest pikenevad mõõtejooned ning kui kaugel objektist nad algavad. Vaikeväärtused on lähedased tavalisele ISO stiilile:

| Seade | Vaikimisi | Käsk |
|---|---|---|
| Teksti kõrgus | 2.5 | {{cmd:DIMTXT}} |
| Noole suurus | 2.5 | {{cmd:DIMASZ}} |
| Komakohad | 2 (lõppnullid jäetakse ära) | {{cmd:DIMDEC}} |
| Vahe teksti ümber | 0.625 | {{cmd:DIMGAP}} |
| Mõõtejoonest kaugemale ulatuv osa | 1.25 | {{cmd:DIMEXE}} |
| Nihe objektist | 0.625 | {{cmd:DIMEXO}} |
| Üldine mõõtkava | 1 | {{cmd:DIMSCALE}} |

Iga suurus korrutatakse **üldise mõõtkavaga**. Sea suurused nii, nagu tahad need paberil (2.5 mm teksti), ja sea üldine mõõtkava väljastusmõõtkavaks (50 mõõtkavale 1:50). Tekst on siis 2.5 × 50 = 125 joonise ühikut kõrge, mis väljastatakse kõrgusena 2.5 mm.

:::note
Nimega mõõdustiile haldab {{cmd:DIMSTYLE}}: vt allpool olevat jaotist. Iga mõõt hoiab ka seadeid, millega see tehti, nii et saad ikka muuta ühte mõõtu eraldi jaotises {{ui:Omadused}}.
:::

## Uute mõõtude suuruste seadmine

Mõlemad allpool toodud viisid muudavad ainult mõõte, mis tehakse hiljem.

### Panelis Praegused sätted

1. Vajuta {{key:Esc}}, et midagi poleks valitud. Vahekaardil {{ui:Mudel}} loeb parempoolne paneel {{ui:Praegused sätted}}.
2. Kerige paneel alla jaotiseni {{ui:Uued mõõdud}}, mööda kihti, värvi, ühikuid ja rida {{ui:Kiht 0}} (väikesel ekraanil algab see alumisest servast allpool). Klõpsa väljas {{ui:Üldine mõõtkava}}, tipi `50` ja vajuta {{key:Enter}}.
3. Sea samamoodi {{ui:Teksti kõrgus}}, {{ui:Noole suurus}} ja {{ui:Komakohad}}, kui tahad muid väärtusi.

Olekuriba kinnitab iga seadet, näiteks „Uute mõõtude üldine mõõtkava: 50“.

### Käsureal

1. Tipi `DIMSCALE` ja vajuta {{key:Enter}}.
2. Viibal `Sisesta DIMSCALE uus väärtus <1>` tipi `50` ja vajuta {{key:Enter}}.

Ajalugu kinnitab: „DIMSCALE = 50. Uued mõõdud kasutavad seda; vali olemasolevad, et muuta nende oma.“ {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} ja {{cmd:DIMEXO}} töötavad samamoodi. Vajuta viibal {{key:Enter}}, et jätta praegune väärtus.

### Jalad ja tollid mõõtudes

Uued mõõdud kasutavad joonise pikkuse vormingut: seadke see {{ui:Pikkuse vorming}} abil jaotises {{ui:Praegused sätted}} või käsuga {{cmd:UNITS}} (vt [Jalad ja tollid](topic:units-papers-scales#feet-and-inches-and-fractions)), ja järgmine mõõt näitab `12'-6 1/2"`. {{cmd:DIMLUNIT}} seab ainult mõõtude vormingu (2 kümnendkohta, 3 tehniline, 4 arhitektuurne, 5 murdarv). Juba tehtud mõõdu puhul vali see ja vali {{ui:Vorming}} jaotises {{ui:Omadused}}; murdarvulise vormingu korral on selle kastis {{ui:Murd}} kahe aste (4 = 1/16).

## Mõõdud mm, cm, m või km

Mõõt mõõdab joonise ühikutes. See võib kirjutada pikkuse hoopis millimeetrites, sentimeetrites, meetrites või kilomeetrites, ühik arvu järel: 1250 mm sein näitab `1250 mm`, `125 cm`, `1.25 m` või `0.00125 km`.

1. Sea joonise {{ui:Ühikud}} esmalt jaotises {{ui:Praegused sätted}} (vt [Ühikud, paberimõõdud ja mõõtkavad](topic:units-papers-scales#drawing-units)), et CadCraft teaks, mis on üks joonise ühik. Ühikuteta joonist loetakse millimeetritena ja {{cmd:DIMTEXTUNIT}} ütleb seda.
2. Uute mõõtude puhul: vajuta {{key:Esc}}, et midagi poleks valitud, ja jaotises {{ui:Uued mõõdud}} vali {{ui:Ühikud tekstis}}: {{ui:Joonise ühikud}}, `mm`, `cm`, `m` või `km`.
3. Juba tehtud mõõtude puhul vali need ja vali {{ui:Omadused}} › {{ui:Põhiühikud}} all {{ui:Ühikud tekstis}}.

Või tipi {{cmd:DIMTEXTUNIT}} (`DTU`) ja vasta `D`, `MM`, `CM`, `M` või `KM`: kui mõõdud on valitud, muudab see neid (üks tagasivõtmise samm); kui midagi pole valitud, seab see uued mõõdud.

{{ui:Komakohad}} ({{cmd:DIMDEC}}) seab ikka, mitu kümnendkohta näidatakse: meetritega ja 3 komakohaga näitab 1234 mm `1.234 m`. Tekst kirjutatakse kümnendarvuna. Lehel mõõdetakse mõõte lehe paberiühikus (millimeetrites või tollides).

Salvestatud DWG või DXF hoiab valiku mõõdu mõõtkavana (DIMLFAC) ja järelliitena (DIMPOST, ` m`), nii et teised programmid näitavad sama teksti. Kui hiljem muudad joonise {{ui:Ühikud}}, sobitatakse mm, cm, m või km kirjutatud mõõdud uuesti, nii et nad näitavad ikka õiget pikkust. {{ui:Määratud käsitsi (mõõtkava või järelliide)}} tähendab, et mõõdu {{ui:Mõõtkava}} või järelliide seati mingil muul viisil; vali ühik, et need asendada.

## Olemasolevate mõõtude muutmine

1. Klõpsa ühte mõõtu. Parema paneeli pealkiri loeb {{ui:Mõõt}}.
2. Sätted on jaotistes; kerige paneeli alla, et jõuda hilisemateni:
   - {{ui:Üldine}}: {{ui:Mõõdu stiil}}
   - {{ui:Geomeetria}}: {{ui:Liik}} ja {{ui:Mõõtmine}} (ainult lugemiseks)
   - {{ui:Tekst}}: {{ui:Teksti asendamine}} ja {{ui:Teksti kõrgus}}
   - {{ui:Jooned ja nooled}}: {{ui:Noole suurus}}
   - {{ui:Paigutus}}: {{ui:Üldine mõõtkava}}
   - {{ui:Põhiühikud}}: {{ui:Komakohad}}
3. Tipi uus väärtus ja vajuta {{key:Enter}}.

Mõõt joonistub kohe uuesti. Nurkmõõtude puhul seab {{ui:Komakohad (°)}} nurga komakohad.

:::note
Kui on valitud mitu mõõtu, näitab paneel neile ühiseid ridu ja väärtus, mis nende vahel erineb, loeb {{ui:Erinev}}. Väärtus, mille sisestad, muudab kõiki valitud mõõte ühe sammuga, nii et üks {{key:Mod+Z}} paneb nad kõik tagasi.
:::

## Avatud joonistest pärit mõõdud

Avatud DWG- või DXF-failist pärit mõõt näidatakse täpselt nii, nagu teine programm selle joonistas. Selle paneel ütleb „Näidatud nii, nagu programm, mis selle tegi, joonistas. Kui muudad seda, joonistab CadCraft selle uuesti oma stiilis.“ Kohe kui muudad mõnda väärtust, liigutad haardepunkti või teisaldad mõõdu, joonistab CadCraft selle uuesti oma noolte ja fondiga, kasutades failist loetud suurusi.

Mõned mõõdud saab lugeda ainult joonistatuna, mitte muudetavate mõõtudena; siis näitab paneel „Joonistatud allikast“ ja plokinime ning kast „Selle faili kohta“ loeb need.

## Tavalised vead

- **DIMSCALE muutmine ei muutnud ekraanil midagi.** Seade on uutele mõõtudele. Vali olemasolevad ja muuda paneelis {{ui:Üldine mõõtkava}}.
- **Komakohti on vähem kui seatud.** Lõppnullid jäetakse ära: 2 komakohaga näidatakse `1250` ja `1250.5`, mitte `1250.00`.
- **Tekst on paberil õige kõrgusega vaatega aknas, aga vale mudeliväljastuses.** Üldine mõõtkava peab vastama mõõtkavale, millega väljastad. Väljastus mahutatuna paberile annab veidra mõõtkava; vali väljastusdialoogis standardne mõõtkava.
- **Ühikud nagu mm või m tekstis.** Vali {{ui:Ühikud tekstis}} (vt [Mõõdud mm, cm, m või km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Mis tahes muu sõna arvu järel kirjuta asendusse: `<> TYP.`.

## Nimega mõõdustiilid

Tipi `DIMSTYLE` (`D`), et avada {{ui:Mõõtmestiilide haldur}}. See loetleb joonise stiilid, kui mitu mõõtu kasutab igaüht ja milline on praegune. **Standardne** on alati olemas.

- {{ui:Määra praeguseks}}: uued mõõdud kasutavad selle stiili sätteid ja kannavad selle nime.
- {{ui:Uus…}}: uus stiil, mis algab valitud stiili kopeerimisena.
- {{ui:Muuda…}}: samad väljad, mis mõõdu jaotises {{ui:Omadused}} (jooned ja nooled, tekst, paigutus, ühikud, alternatiivsed ühikud, tolerantsid). Vajuta {{ui:OK}} ja stiil muutub **ning iga mõõt, mis seda kasutab, muutub koos sellega**, seade seade haaval. Seade, mille muutsid ainult ühel mõõdul, jääb nii, nagu on, kui stiil seda seadet ei muutnud.
- {{ui:Nimeta ümber…}} ja {{ui:Kustuta}}: Standardset ei saa ümber nimetada ega kustutada, samuti mitte praegust stiili ega stiili, mida mõõdud kasutavad.
- {{ui:Võrdle…}}: mis erineb kahe stiili vahel.
- {{ui:Rakenda valitutele}}: vali enne mõõdud; need võtavad stiili sätted ja selle nime.

`-DIMSTYLE` teeb sama käsureal: `Restore`, `Save`, `Delete`, `Apply`, `Compare`, `reName`, `List`.

Stiilid salvestatakse DWG- või DXF-faili (selle mõõdustiilide tabelisse) ja loetakse avatud failidest. *Praegust* stiili ei salvestata: joonis avaneb nii, et praegune on Standardne. Standardne hoiab oma sätted, kui mõni teine stiil on praegune.

## Mõõdu teksti ja mõõtejoonte muutmine

{{cmd:DIMEDIT}} (`DED`) töötab valitud mõõtudel: **Algasendisse** paneb teksti tagasi sinna, kuhu stiil selle paneb; **Uus** tipib muu teksti (`<>` tähistab mõõdetud väärtust); **Pööra** pöörab teksti; **Kalle** kallutab lineaarsete ja joondatud mõõtude mõõtejooni sisestatud nurga all (vajuta {{key:Enter}}, kui pole ühtegi). {{cmd:DIMTEDIT}} viib teksti mõõtejoone **Vasakule**, **Paremale** või **Keskele**, või pöörab seda (**Nurk**), või saadab selle **Algasendisse**. Tekst asub alati mõõtejoonel: seda ei saa lohistada vabasse kohta.
