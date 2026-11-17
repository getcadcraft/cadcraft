---
title: Materjalide loend tsooni kaupa
summary: Märgi joonise alad tsoonidena ja aseta iga tsooni jaoks tabel, mis loendab seal olevad plokid. Tabelid järgivad joonist, kui töötad, ja sa valid, millised veerud iga tabel näitab.
keywords: materjalide loend, bill of materials, BOM, osade nimekiri, loend, tsoon, ala, tabel, loendamine, kogus, atribuut, veerud, üksusenumber, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

**Tsoon** on joonise nimega ala. **Materjalide loendi tabel** loetleb, mis asub ühes tsoonis või kogu joonises: iga plokk koos oma kogusega ja atribuutide väärtustega. Joonisel võib olla nii palju tsoone ja tabeleid, kui vaja, ning ühel tsoonil võib olla mitu tabelit erinevate veergudega.

Tööriistad on sakil Plokid all {{ui:Materjalide loend}}, rühma Plokid menüüs {{ui:Veel}}, ja neid saab sisestada käsuna.

## Tee tsoon

Sisesta {{cmd:BOMZONE}} ja vali kas

- klõpsa kaks vastaskurki ristküliku jaoks,
- vali {{ui:Hulknurk}}, klõpsa iga nurk ja vajuta Enter, et see sulgeda, või
- vali {{ui:Objekt}} ja vali suletud polüjoon, ring, ellips või suletud splain. Selle kontuur kopeeritakse; objekt jääb samaks.

Seejärel sisesta tsooni nimi. Tsoon joonistatakse katkendkontuurina, nimi on ülal vasakul nurga kohal, kihil `BOM-ZONES`, mida ei prindita. Lülita selle kihi printimine sisse, kui tahad tsoone paberil.

Tsoon on tavaline suletud polüjoon: teisalda, venita või lohista selle käepidemeid, ja nimi järgib. Tsooni ümbernimetamiseks muuda nime teksti või kasuta {{cmd:BOMZONE}} ja {{ui:Nimeta ümber}}. {{ui:Tsoonid}} loetleb iga tsooni ja mitu tabelit sellel on.

## Aseta tabel

Sisesta {{cmd:BOMTABLE}} (või {{cmd:BOM}}), vali tsooni kontuur või selle nimi, anna teksti kõrgus ja klõpsa, kuhu tabeli vasak ülanurk läheb. Vajuta Enter, selle asemel et tsooni valida, või vali {{ui:Terve}}, et saada tabel kogu joonise kohta.

Uus tabel näitab üksusenumbrit, kogust, ploki nime ja veergu iga atribuudi kohta, mida plokid kannavad (esimesed kuus; ülejäänud pakutakse märkimata). Samanimelised plokid samade atribuutide väärtustega jagavad rida.

## Mis loetakse sisse

- Plokk loetakse tsooni, mis sisaldab selle **sisestuspunkti**.
- Joon, kaar, ring, polüjoon, ellips, splain või viirutus loetakse **tervikuna** sellesse tsooni, mis sisaldab selle ulatuse keskpunkti (joone puhul selle keskpunkti). Selle pikkust ei lõigata tsooni servast.
- Serval täpselt asuv punkt on sees.
- Tsoonid võivad kattuda. Iga tsoon loeb iseenda, nii et kattuvas alas olev objekt on mõlemas tabelis.

## Tabelid järgivad joonist

Kui lisad, teisaldad, kopeerid või kustutad plokki, muudad atribuuti või kujundad või teisaldad tsooni, joonistatakse iga tabel samas sammus uuesti. Tagasivõtmine võtab tagasi nii sinu muudatuse kui tabeli muutuse koos.

Et tabel ei järgiks, märgi selle seadetes {{ui:Külmutatud}}. Külmutatud tabel muutub ainult siis, kui muudad selle seadeid või sisestad {{cmd:BOMUPDATE}}, mis uuendab kohe kõiki tabeleid.

## Vali veerud

Vali tabel ja sisesta {{cmd:BOMEDIT}}. Dialoogis:

- **Veerud**: märgi need, mida näidata (üksus, kogus, nimi, kiht, pikkus, pindala, märkused ja iga atribuut), kirjuta oma pealkiri mis tahes neist ja liiguta üles või alla.
- {{ui:Rühmita read}}: ploki nimi ja atribuutide väärtused, ainult ploki nimi, kiht või üks atribuut. Ühendatud reas loetakse väärtust, mis plokkide vahel erineb, kui „varieerub“.
- {{ui:Sordi}} mis tahes veeru järgi, kasvavalt või kahanevalt.
- {{ui:Pealkiri}}, {{ui:Kuva pealkiri}} ja {{ui:Kokkuvõtete rida}}.
- {{ui:Loenda jooned kihi kaupa}} lisab iga kihi kohta ühe rea objektide arvuga, nende koguse pikkusega ja suletud kujude puhul koguse pindalaga, joonisühikutes.
- **Märkused**: märgi veerg Märkused, seejärel kirjuta märkus mis tahes rea jaoks dialoogi allservas olevas tabelis.

Iga tabel hoiab oma valikuid.

## Üksusenumbrid

Rida hoiab oma üksusenumbrit niikaua, kuni see on tabelis. Uus rida saab järgmise vaba numbri ja antud numbrit ei kasutata enam uuesti, nii et numbrit tsiteerivad sildid ja märkmed jäävad õigeks. {{ui:Nummerda kirjed uuesti}} nummerdab need alates 1 näidatud järjekorras.

Rida on tuntud selle järgi, mida see rühmitab: muuda, kuidas ridu rühmitatakse, või muuda atribuudi väärtust, mida rühmitamine kasutab, ja rida loetakse uueks.

## Eksport ja teised programmid

{{cmd:BOMEXPORT}} või {{ui:Ekspordi CSV}} dialoogis salvestab tabeli .csv-failina tabelarvutusse.

DWG- või DXF-failis on tabel tavaline plokk jooni ja teksti, nii et teised programmid näitavad ja prindivad seda nagu joonistatud. Seal ei ole see tabeliobjekt ega uuene teistes programmides. Link tsooniga on failis hoitud laiendusandmetena, mida CadCraft loeb tagasi, nii et tabel on taas elus, kui avad joonise uuesti CadCraftis. R12 DXF joonisest, millel ei ole lehte, ei säili tsooni kihi seade „ei prindita“.

Tabeli lahtivõtmine muudab selle vabadeks joonteks ja tekstiks ning lõpetab lingi.
