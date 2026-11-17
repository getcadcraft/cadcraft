---
title: Pildid joonisel
summary: Paiguta PNG- või JPEG-pilt, lõika see ristkülikuks või hulknurgaks, näita DWG kasutatavaid pilte ja trüki need teravalt.
keywords: pastearea, parea, kopeeri ala, kopeeritud ala, markupcraft, tegelik suurus, reaalne suurus, kate, ole, ole2frame, manustatud objekt, kleebi pilt, kleebi ekraanipilt, ctrl+v, lõikelaua pilt, ekraanipilt, pilt, kujutis, imageattach, iat, image, imageclip, clip, png, jpeg, jpg, logo, foto, rastergraafika, imagedef, xref, trüki, pdf, eraldusvõime
from: 4025ac97
---

## Mida sa teed

Ettevõtte logo, mis on paigutatud tiitelplokki, lõigatud soovitud osani, ja PDF, kus see prinditakse oma eraldusvõimes.

## Paiguta pilt

1. Sisesta {{cmd:IMAGEATTACH}} (või `IAT`) ja vajuta {{key:Enter}}. Vali PNG- või JPEG-fail.
2. Reale `Specify the lower-left corner` klõpsa või sisesta punkt.
3. Reale `Specify its width` on laius joonistusühikutes. {{key:Enter}} säilitab pakutud laiuse: üks ühik pikslile või laius, mille andsid sellele failile viimati (viip ütleb, millisest).
4. Reale `Specify its rotation angle`: vajuta {{key:Enter}}, kui pööret pole.

Pilt on üks objekt: vali see raami järgi ning liiguta, kopeeri, pööra, mõõtkavasta või kustuta seda nagu iga plokki.

:::note
Pildifail jääb joonisega kaasa, kuni joonis on avatud. Salvestatud DWG nimetab faili, nagu teised programmid teevad; see ei hoia pikslite andmeid. Hoia pilt joonise kõrval.
:::

## Kleebi ekraanipilt või kopeeritud pilt

1. Kopeeri pilt (ekraanipilt klahvidega {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=sinu ekraanipildi tööriist}}, või Kopeeri pilt teises programmis või brauseris).
2. Osuta kohale, kuhu see joonisel peaks minema, ja vajuta {{key:Mod+V}}.

Pildi vasak alumine nurk jääb osuti kohta (või vaate keskele), laiusega 40 % sellest, mida näed; liiguta, mõõtkavasta ja lõika seda nagu iga pilti. Selle nimi on joonise nimi koos `-picture-1.png` (seejärel `-2`, …), ja ajalugu ütleb seda.
{{ui:Redigeeri}} › {{ui:Veel}} › {{ui:Kleebi pilt}} teeb sama menüüst (brauser võib enne küsida).

DWG hoiab alles ainult pildifaili nime, seega joonise salvestamine salvestab pildi ka oma failina. Hoia need kaks samas kaustas: joonis näitab pilti sealt. Brauseris on see teine allalaadimine, ja ajalugu ütleb seda. Kui lõikelaual on ainult CadCrafti objekte, kleebib {{key:Mod+V}} need, nagu varem.

## Kleebi MarkupCraftis kopeeritud ala

{{ui:Kopeeri ala}} MarkupCraftis kopeerib osa lehest pildina, mis teab oma suurust. CadCraft kleebib selle selles suuruses.

1. MarkupCraftis kopeeri ala (ristkülik, ring või vabakujuline kuju; {{ui:Kopeeri katteks}}, kui soovid näha oma joonist selle läbi).
2. CadCraftis vajuta {{key:Mod+V}}, või sisesta {{cmd:PASTEAREA}} (või `PAREA`), või vali {{ui:Redigeeri}} › {{ui:Veel}} › {{ui:Kleebi kopeeritud ala}}.
3. Reale `Specify the lower-left corner of the copied area` klõpsa või sisesta punkt. Alale vastava suurusega raam liigub osuti järel.

Kui suureks see jõuab:

- **Lehel oli joonise mõõtkava:** tegelikus suuruses, joonise ühikutes (2 m trepp detailina mõõtkavas 1:50 on meetrilises joonises 2 m pikk, tollijoonisel 78.74). Rohkem ei küsita.
- **Lehel ei olnud mõõtkava:** CadCraft ütleb selle suuruse paberil ja küsib mõõtkava: sisesta `100` 1:100 lehe jaoks, vajuta {{key:Enter}} paberi suuruse jaoks või sisesta `P`, klõpsa kahele punktile kleebitud pildil ja sisesta, kui kaugel need tegelikult üksteisest on (nagu teeb {{cmd:SCANSCALE}}). Vasak alumine nurk jääb sinna, kuhu panid.

Ühikuteta joonis võtab millimeetrid, nagu PDF-aluspilt teeb. Kate jätab oma paberi läbipaistvaks ja algab sama hõredana, nagu seda kopeeriti; ka ringi või vabakujulise kuju väline on läbipaistev. Kleebitud ala on nagu iga teine pilt: liiguta, pööra, mõõtkavasta, lõika või kustuta, ja kogu kleepimine on üks tagasivõtmise samm. DWG-na salvestatuna on see IMAGE koos oma hõrenemise ja läbipaistvusega.

{{key:Mod+V}} kleebib ala, kui lõikelaual olev pilt on selle ala oma, või kui ala kopeeriti pärast kõike, mida kopeerisid CadCraftis (ja viimase 6 tunni jooksul). Muidu kleebib see nagu varem. {{cmd:PASTEAREA}} kleebib viimati kopeeritud ala igal ajal.

## Näita DWG kasutatavaid pilte

DWG hoiab ainult seda, kus tema pildid olid, seega näitab CadCraft iga pilti raamina koos faili nimega.

1. Sisesta {{cmd:IMAGE}} (või `IM`). Käsurida loetleb iga pildifaili ja selle, kas see näidatakse.
2. Vali failid (mitu korraga). Fail, mille nimi sisaldab joonise nimes olevat, loetakse ka, sest eksport lisab sageli projekti eesliite.

## Lõika pilt

1. Sisesta {{cmd:IMAGECLIP}} (või `ICL`) ja vali pilt.
2. Vali `R` ja klõpsa kahele nurgale või `P` ja klõpsa hulknurga punktidele, seejärel {{key:Enter}}. `D` eemaldab lõike.

## Trüki pildid

Pildid lähevad PDF-i piltidena, oma eraldusvõimes ja joonte all. Dialoogis {{ui:Trüki}} saab {{ui:Pildid}} piirata need 600, 300 või 150 dpi-ni, et faili väiksemaks teha. JPEG läheb sisse nagu on.

## Mis on kuhu salvestatud

| Vorming | Pildid |
|---|---|
| DWG (iga versioon) | Piltidena (IMAGE), koos lõikega |
| DXF | Raamidena koos faili nimega; salvestamine ütleb seda |

## Teiste programmide objektid (OLE)

Joonis võib hoida teise programmi tehtud objekte, nagu pilt joonistusprogrammist või tabelarvutuse vahemik (OLE-objektid). CadCraft ei käivita ega muuda neid ega saa lisada uusi. Ta teeb järgmist:

- **DXF-is** avaneb OLE-objekt raamina. Kui objekt salvestas enda pildi ja see pilt on bitkaart, joonistatakse pilt raami sisse; muidu kannab raam sildi objekti tüübiga, näiteks „Microsoft Excel Worksheet (OLE)“. Raami saab liigutada, kopeerida ja kustutada nagu plokki. {{cmd:SAVEAS}} DXF 2000-na kirjutab selle uuesti OLE-objektina, andmed muutmata.
- **DWG-s** säilitatakse objektid ja kirjutatakse DWG-na salvestamisel tagasi baidi täpsusega, aga neid **ei näidata**: DWG hoiab objekti kohta oma andmete sees ja CadCraft seda veel ei loe. Ajalugu ütleb, mitu säilitati. Tüübi, suuruse ja selle, kas iga objekt salvestas pildi, nägemiseks sisesta {{cmd:OLELIST}}. Sama käsuga saad panna pildi koopia sinna, kuhu soovid: **Paiguta** küsib numbrit, vasakut alumist nurka ja laiust ning joonistab raami koos pildiga. See koopia on raam, mida saab liigutada või kustutada; objekt ise jääb joonisesse ja kirjutatakse salvestamisel ikka tagasi.
- DXF-ist tulnud objekt salvestatakse DWG-s ainult oma raamina ja sildina; ajalugu ütleb seda. Objekti enda säilitamiseks salvesta DXF 2000-na.
- Metafailid (mida paljud programmid salvestavad) ei joonistata: selle asemel näidatakse raami ja silti.

## Levinud vead

| Mida näed | Miks | Parandus |
|---|---|---|
| Raam faili nimega | CadCraftil pole faili | {{cmd:IMAGE}}, seejärel vali fail |
| „See ei ole pilt“ | Valitud objekt ei ole pilt | Vali pildi raam |
