---
title: Dokumendid ja revisjonid (hoidla)
summary: Samm-sammuline läbikäik ühest päris tööst: võta projektikaust kontrolli alla, võta joonis välja, muuda, kontrolli sisse märkega, saada ülevaatamisele, kinnita ja avalda, vaata ajalugu ja kasutust ning mida teine inimene näeb, kui fail on lukus, ja kuidas see töötab pilvekaustadega.
keywords: hoidla, dokumendid, läbikäik, õpetus, väljavõtmine, sisseandmine, revisjon, avaldamine, lukk, ajalugu, kus kasutatakse, pilvekaust, projektikaust, dokumendihaldus, pdm, kaks inimest, jagatud kaust
from: 3829528d
---

## Mida sa teed

Sa oled Ana, töötad Riverside Clinic projektiga koos kolleegi Benjamiga. Projekti joonised elavad ühes kaustas, millele te mõlemad pääsete (jagatud draiv, sünkroonitud kaust või pilvekaust). Lõpuks on üks fail läinud esimesest koopiast avaldatud revisjoniks **A**, on muudetud uuesti kui **B.1**, oled näinud, kes mida tegi, ja oled näinud, mida Ben näeb, kui sina faili hoiad.

Kõik hoitakse peidetud kaustas `.ccvault` su failide kõrval: serverit pole, midagi ei laadita üles (pilvekaust on erand, vt viimast sammu). Iga nupu ja reegli kohta ühes kohas vaata teemat *Dokumendid: väljavõtmine, revisjonid ja avaldamine*, kus su rakendusel see on.

## 1. Seadista projektikaust

1. Vali vahekaardi **Vaade** menüüst **Veel** {{ui:Dokumendid…}} või tipi `DOCUMENTS` (või `DOCS`) ja vajuta {{key:Enter}}.
2. Vali {{ui:Vali projektikaust}} ja vali kaust, mis hoiab projekti jooniseid. (Projektikaustad töötavad rakenduses Studio ja brauserites, mis oskavad kausta avada, nagu Chrome ja Edge. Teistes brauserites paneel ütleb seda.)
3. Vali {{ui:Muuda}} kõrval **Sina:** ja tipi oma nimi, `Ana` (kui küsitakse, siis ka selle arvuti nimi). Paneel näitab nüüd *Sina: Ana* ja su arvutit. Su nimi läheb kõige sellega, mida teed.
4. Vali {{ui:Alusta selles kaustas hoidlat}} ja tipi projekti nimi, `Riverside clinic`. Paneel ütleb *Hoidla alustati projektile Riverside clinic.*

## 2. Võta fail kontrolli alla

1. Ava **Failid, mis pole hoidlas** ja vali {{ui:Lisa}} faili `plans/A-101.dxf` kõrval.
2. See ilmub jaotisse **Failid hoidlas** revisjonina **A.1**, olekuga **Töös**. A.1 on selle esimene koopia; hoidla hoiab koopiat igast revisjonist.

## 3. Võta välja, muuda, kontrolli sisse

1. Vali {{ui:Ava}} faili `plans/A-101.dxf` kõrval. Joonis avaneb CadCraft'is ja paneel sulgub, et saaksid seda näha. Paneel on ikka ühe käsu kaugusel: `DOCUMENTS`.
2. Ava paneel uuesti ja vali {{ui:Võta välja}}. Rida ütleb nüüd **Välja võetud sulle**. Lukufail on tehtud kausta `.ccvault/locks`; keegi teine ei saa seda faili välja võtta, kuni sina selle sisse kontrollid.
3. Joonista midagi: lisa joon, teisalda sein. Midagi, mida teed, ei saa salvestada üle hoidla faili, kui joonis pole sulle välja võetud; {{ui:Salvesta nimega}} töötab alati sinu enda koopia jaoks.
4. Ava paneel, vali {{ui:Kontrolli sisse}} ja tipi, mis muutus (`Liigutasin ust`). Paneel ütleb *kontrolliti sisse revisjonina A.2*. Faili projektikaustas on nüüd joonis, mis sul avatud oli, ja lukk on kadunud. Sisse kontrollimine ilma muudatuseta jätab revisjoni samaks.

Kui mõtled ümber, annab {{ui:Võta väljavõtmine tagasi}} faili tagasi ilma uue revisjonita.

## 4. Ülevaatamine ja avaldamine

1. Vali {{ui:Saada ülevaatamisele}}. Olek muutub **Ülevaatamisel** ja fail on ainult lugemiseks.
2. Enne kinnitamist vali {{ui:Projekti sätted}} ja loetle, kes võib kinnitada (üks nimi reale), näiteks `Ben` ja `Carla`, ning märgi reegel, et kinnitaja peab olema keegi muu kui autor. Vali {{ui:Salvesta sätted}}. Nüüd keelab hoidla ise kõik teised.
3. Ben (või Carla) valib {{ui:Kinnita}} ja tipib kinnitaja nime. Olek muutub **Avaldatud**-ks ja revisjon muutub **A**-ks, koos *kinnitas* ja nimega. Avaldatud fail on ainult lugemiseks. {{ui:Saada tagasi}} oleks saatnud selle tagasi olekusse Töös, koos põhjusega.

Kinnitaja nimi on paneelis tipitud nimi; see on kirje, kes allkirjastas, mitte identiteedi tõend.

## 5. Uus revisjon

1. Avaldatud failil vali {{ui:Uus revisjon}}. Hoiad seda järgmise tähe jaoks.
2. Muuda seda ja seejärel vali {{ui:Kontrolli sisse}}. Revisjon on **B.1**, töös. Avalda see samamoodi ja see muutub **B**-ks. {{ui:Võta väljavõtmine tagasi}} enne esimest sisse kontrollimist jätab selle tasemele **A**.

Revisjonitähed käivad A, B … Z, AA, AB. Kui su standard jätab mõned tähed vahele, jätab projekti säte *Kasuta ASME Y14.35 järjestust* järgmistes revisjonides vahele I, O, Q, S, X ja Z.

## 6. Vaata, mis juhtus

Vali faili nimi, et avada selle üksikasjad:

- **{{ui:Ajalugu}}**: iga sündmus, uuemad ees, koos kes, millises arvutis ja millal: *Kontrolliti sisse A.2*, Ana poolt, *Avaldatud*, Ben poolt, ja nii edasi.
- **{{ui:Revisjonid}}**: revisjonide tabel. {{ui:Ava koopia}} avab revisjoni tavalise koopiana, mis ei saa hoidla faili üle kirjutada; {{ui:Võrdle järgmisega}} loetleb, mis lisati, eemaldati ja muudeti võrreldes eelmise revisjoniga või mis tahes muu revisjoniga.
- **{{ui:Kasutab}}**: joonised, millele see viitab (välisviited).
- **{{ui:Kasutatakse}}**: Kasutatakse loetleb iga teise hoidla joonise, mis viitab sellele: muuda põhiplaani ja tead, millised lehed kontrollida.

## Revisjon lehel

Kui joonis on avatud (ja selles on paigutus), vali {{ui:Redaktsiooniplokk}}: avaldatud revisjonite tabel joonistatakse lehe paremasse ülanurka. Vali {{ui:Täida tiitelplokid}}, et täita tiitelploki atribuudid, mis on märgitud `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` või `APPROVED_BY`, faili revisjoni, oleku, kuupäeva ja kinnitajaga. Kui kinnitad järgmise avalduse, uuendatakse redaktsiooniplokki.

## 7. Mida Ben näeb, kui sina faili hoiad

Nüüd võta fail uuesti välja ja palu Benil avada sama projektikaust oma arvutis ja avada paneel. Faili real näeb ta **Välja võtnud Ana, sinu arvutis, alates** ajast, ja nuppu {{ui:Võta välja}} ei ole. Kui ta ikka proovib, hoidla keeldub: lukk on fail, mida süsteem ei tee kaks korda, nii et kaks inimest ei saa mõlemad faili hoida isegi samal hetkel, kui kaust on rakenduses Studio kettal. (Brauseris lubab kaust ainult parimat pingutust ja paneel ütleb seda jaotises **Kaust**.)

Kui Ana on ära ja Ben vajab faili, {{ui:Katkesta väljavõtmine}} vabastab selle. Ta peab tipima põhjuse; see läheb logisse koos sellega, kelle väljavõtmine see oli. Kui projekt loetleb administraatoreid, saavad ainult nemad. Väljavõtmine, mis on vanem kui aegumise piir (vaikimisi 14 päeva), märgitakse *pikka aega*. Pärast katkestamist keeldutakse Ana hilisest sisse kontrollimisest, nii et te kaks ei saa üksteist üle kirjutada.

## 8. Pilvekaustad

Pilvekaust on projektikaust, mida hoitakse su meeskonna pilvesalvestuses, nii et meeskonnal pole vaja jagatud draivi. Rakenduses Studio, sisse logituna oma CadCraft'i kontole, näitab paneel {{ui:Ava pilvekaust}} kõrval {{ui:Vali projektikaust}}. Vali see ja vali kaust, mis on loetletud kui töötoa / kaust. Töötoa omanik teeb kausta esmalt ja meeskonna pilvesalvestus peab olema jõus. Kõik ülal kirjeldatu töötab samamoodi; server teeb lukku, mis on inimeste vahel range. Kui pole sisse logitud, ütleb paneel sisse logida. Tavalises brauseri vahekaardis pilvenuppu ei pakuta; kasuta rakendust Studio.

## Proovi

Tee kaheksa sammu ülal läbi, kasutades päris faili koopiat. Kahe inimese sammude jaoks vajad teist inimest või kahte akent kahe nimega. Kui proovid seda päris jagatud kaustaga, loetleb kogukonna testimise leht kontrolli, mis küsib täpselt seda ja võtab tulemusi vastu.
