---
title: Lehe seadistamine tiitelploki ja vaateakendega
summary: Tee leht (paigutus) raami ja tiitelplokiga, sea vaateakna mõõtkava, lisa detaili jaoks teine vaateaken ja täida tiitelplokk.
keywords: paigutus, leht, paberiruum, vaateaken, mview, vpview, tiitelplokk, mõõtkava, paberi suurus, raam, vports, väljatrüki mõõtkava, mspace, pspace, mudeliruum, sisene vaateaknasse, topeltklõps vaateaknal
from: 45a45de8
---

## Mida sa teed

A3-leht tiitelplokiga, terve plaan ühes vaateaknas mõõtkavas 1:100 ja teine vaateaken, mis näitab ühte nurka mõõtkavas 1:20.

## Mudel ja lehed

Joonistad hoone vahekaardil {{ui:Mudel}} täissuuruses: 6 m sein on millimeetrites 6000 ühikut pikk. **Leht** (paigutus) on paberileht, mõõdetud millimeetrites või tollides. **Vaateaken** on lehele lõigatud aken, mis näitab mudelit mõõtkavas.

## Enne alustamist

1. Ava või joonista plaan vahekaardil {{ui:Mudel}}.
2. Vajuta {{key:Esc}}, et midagi ei oleks valitud.
3. Jaotises {{ui:Praegused sätted}} määra {{ui:Ühikud}} selleks ühikuks, mida joonistasid, näiteks {{ui:Millimeetrid}}.

Ühikutel on tähtsus: vaateakna mõõtkava nagu 1:100 tähendab, et üks millimeeter paberil näitab 100 tegelikku millimeetrit, seega peab CadCraft teadma, mis on üks joonistusühik. Joonis, mis on jäetud {{ui:Ühikuta}}, võetakse paberi ühikuna (millimeetrid ISO paberil, tollid USA paberil).

## Tee leht

1. Klõpsa sakkide all joonise paremal olevat nuppu {{ui:+}}, või sisesta `LAYOUT` ja vajuta {{key:Enter}}, või klõpsa {{ui:Uus leht}}.

Avaneb uus sakk `Layout1`. Peaksid nägema lehte tumedamal laual: raam, tiitelplokk paremas alumises nurgas ja üks vaateaken selle kohal, mis näitab kogu mudelit suurima standardse mõõtkavaga, mis mahub. Ajalugu nimetab paberi: ISO A3 meetriliste ja ühikuteta joonistele, Tabloid (ANSI B) tollides või jalgades joonistele.

2. Klõpsa {{ui:Ulatus}}, et leht ekraanile mahutada.

## Vali paber

1. Vajuta {{key:Esc}}, et midagi ei oleks valitud. Parema paneeli pealkiri ütleb „Leht: Layout1“.
2. Väljale {{ui:Nimi}} sisesta `A-101 Plan` ja vajuta {{key:Enter}}. Sakk nimetatakse ümber.
3. Valikus {{ui:Paber}} vali suurus.
4. Valikus {{ui:Suund}} vali {{ui:Rõhtpaigutus}} või {{ui:Püstpaigutus}}.

:::warning
Paberi muutmine ei liiguta ega muuda suurust sellel, mis lehel juba on. Pärast muutmist kontrolli, et raam, tiitelplokk ja vaateaken ikka mahuvad, ning liiguta või muuda nende suurust haardepunktidega. Millimeetrite ja tollide paberi vahel vahetamine jätab numbrid alles, nii et kõik muutub suuruses: olekuriba hoiatab sind.
:::

## Sea vaateakna mõõtkava

1. Klõpsa vaateakna raamile (servale). Paneeli pealkiri ütleb „Vaateaken“.
2. Valikus {{ui:Mõõtkava}} vali `1:100`.

Vaateaknas olev mudel joonistatakse uuesti mõõtkavas 1:100, keskendatuna sinna, kus see oli. Loend pakub meetrilisi mõõtkavu 10:1 kuni 1:10000; tollides või jalgades joonised saavad ka arhitektuurseid mõõtkavu (1/4" = 1'-0" jms) ja tehnilisi mõõtkavu (1" = 20' jms). {{ui:Mahuta kogu mudel}} seab täpse, standardvälise mõõtkava, mis mahutab kõik.

3. Kui plaan ei ole enam keskel, muuda paremas paneelis jaotises {{ui:Vaate keskpunkt (mudel)}} väärtusi {{ui:X}} ja {{ui:Y}}: need on mudelipunkt, mida näidatakse vaateakna keskel.

## Näita mudeli osa vaateaknas

1. Kui vaateaken on valitud, klõpsa paremas paneelis {{ui:Vali mudelil aken…}} (või sisesta `VPVIEW` ja vajuta {{key:Enter}}).
2. CadCraft lülitub vahekaardile {{ui:Mudel}}. Klõpsa ühele nurgale näidatavast alast.
3. Klõpsa vastasnurgale.

Oled tagasi lehel ja vaateaken näitab seda ala suurima standardse mõõtkavaga, mis mahub; ajalugu ütleb, millise. {{ui:Näita kogu mudelit}} läheb tagasi terve plaani juurde standardses mõõtkavas.

## Lisa detaili jaoks teine vaateaken

1. Tee lehel ruumi: vali esimene vaateaken ja lohista nurga haardepunkti, et see väiksemaks teha.
2. Sisesta `MV` ja vajuta {{key:Enter}}, või klõpsa rühmas Lehed nupule {{ui:Vaateaken}}.
3. Klõpsa uue vaateakna ühele nurgale lehel.
4. Klõpsa vastasnurgale.

Uus vaateaken näitab kogu mudelit. Ajalugu ütleb selle mõõtkava.

5. Klõpsa uue vaateakna raamile.
6. Klõpsa {{ui:Vali mudelil aken…}} ja vali väike ala plaani ühe nurga ümber.
7. Valikus {{ui:Mõõtkava}} vali `1:20`.

Vaateakende raamid asuvad kihil `Viewports`, mis on seatud mitte prinditavaks, nii et raamid kuvatakse ekraanil, kuid mitte PDF-is.

## Täida tiitelplokk

Tiitelplokk koosneb tavalistest joontest ja tekstist kihil `Title block`. See algab joonise nimega, esimese vaateakna mõõtkavaga, tänase kuupäeva ja lehe numbriga.

1. Topeltklõpsa suurel pealkirjateksti. Teksti kohal avaneb redigeerimiskast.
2. Sisesta lehe pealkiri.
3. Klõpsa {{ui:OK}} või vajuta {{key:Mod+Enter}}.

Tee sama teiste väljade puhul. Kasuta {{cmd:TEXT}}, et kirjutada tühja lahtrisse „DRAWN BY“. Teksti SCALE ei uuenda ennast, kui muudad vaateakna mõõtkava: muuda seda käsitsi.

## Joonista lehel

Kõik, mida joonistad lehe sakil, on paberil paberiühikutes: 3.5 kõrgune tekst on ISO-lehel 3.5 mm kõrge. Märkused, põhjanooled ja lehe raamid kuuluvad siia.

Plaani enda muutmiseks mine vahekaardile {{ui:Mudel}} või tööta vaateakna kaudu (järgmine jaotis); iga vaateaken näitab muudatust.

## Tööta mudeliga vaateakna kaudu

1. Topeltklõpsa vaateakna sees, raamist eemal. Või sisesta `MS` ja vajuta {{key:Enter}}: kui lehel on üks vaateaken, siseneb ta otse sisse; mitme korral klõpsa sees soovitud vaateaknale.

Raam joonistatakse paksemalt, ajalugu ütleb, et oled sees, ja lehe sakk jääb valituks. Kõik, mida nüüd joonistad või muudad, on mudelil, mudeli ühikutes, nagu vahekaardil {{ui:Mudel}}: vaateaknas mõõtkavas 1:100 joonistatud joon on tegelikes millimeetrites. Selles vaateaknas külmutatud kihte ei saa siin valida.

2. Keera ratast või lohista keskmise nupuga, et suumida ja nihutada, mida vaateaken näitab. Leht jääb oma kohale.
3. Topeltklõpsa raamist väljaspool või sisesta `PS` ja vajuta {{key:Enter}}.

Oled tagasi lehel. Vaateaken säilitab vaate, millega selle jätsid; {{key:Mod+Z}} paneb vana vaate ühe sammuga tagasi. Joonise all mis tahes sakile klõpsamine lahkub samuti vaateaknast.

:::note
Vaateaken, mille kuvamine on lukustatud ({{ui:Kuva lukustatud}} jaotises {{ui:Omadused}}), säilitab oma vaate: selle sees liigutab nihutamine ja suumimine kogu lehte. Vaateaken, mis on välja lülitatud, ei saa siseneda.
:::

## Märgista vaade nimega

Vaateakna all olev vaate pealkiri saab näidata vaateakna vaate nime ja jälgida seda:

1. Anna vaatele nimi: vali vaateakna raam ja täida jaotises {{ui:Omadused}} väli {{ui:Vaate nimi}}, või salvesta vaade vahekaardil {{ui:Mudel}} käsuga {{cmd:NAMEDVIEW}} ning vali vaateaken ja sisesta `VPVIEW`, `V` ja vaate nimi: vaateaken näitab seda vaadet ja võtab selle nime.
2. Sisesta `VIEWLABEL` (`VL`) ja vajuta {{key:Enter}}, seejärel klõpsa kohale, kuhu silt läheb ({{key:Enter}} paneb selle vaateakna vasaku alumise nurga alla).

Kui vaate nimi muutub, muutub silt koos sellega samas tagasivõtmise sammus.

## Külmuta kiht ühes vaateaknas

Et peita kiht ühes vaateaknas, aga mitte teistes (näiteks detaili mööbel):

1. Vali vaateakna raam või tööta selle sees (topeltklõps).

Paneelil {{ui:Kihid}} tekib igal real üks nupp juurde ja loendi kohal olev rida ütleb seda.

2. Klõpsa sellel nupul kihi real.

Kiht kaob ainult sellest vaateaknast. Klõpsa uuesti, et seda sulatada; {{key:Mod+Z}} tühistab kumbagi. Mitme kihi või vaateakna korraga jaoks sisesta `VPLAYER`: `F` (Külmuta), `T` (Sula), kihtide nimed (`A-*` valib kõik kihid, mis algavad A-st), seejärel `C` (Praegune), `A` (Kõik) või `S` (Vali). `VPLAYER` `V` (Vpvisdflt) valib kihid, mis uutes vaateaknades algavad külmutatuna.

## Veel lehti

Iga {{ui:+}} lisab veel ühe lehe (`Layout2`, `Layout3` …) järgmise lehenumbriga. Avatud lehe kustutamiseks vajuta {{key:Esc}} ja klõpsa paremas paneelis {{ui:Kustuta see leht}}. See kustutatakse küsimata; {{key:Mod+Z}} toob selle tagasi.

Lehe väljatrükk tehakse nupuga {{ui:Trüki see leht}} või {{key:Mod+P}}; vaata [Prindi PDF-iks](topic:plot-pdf).

## Levinud vead

- **Vaateaken ei näita midagi.** Mudel on tühi või vaade on suunatud mujale. Vali raam ja klõpsa {{ui:Näita kogu mudelit}}.
- **Mõõtkavade loendis on ainult suhted, jalgade ja tollide mõõtkavu pole.** Sea vahekaardil {{ui:Mudel}} {{ui:Ühikud}} väärtuseks {{ui:Tollid}} või {{ui:Jalad}}.
- **1:100 paistab kümme korda liiga suur või väike.** Joonistusühikud on valed. Sea {{ui:Ühikud}} selleks, mis üks ühik tegelikult on.
- **Plaanil klõpsamine vaateaknas ei vali midagi.** Lehel valid lehe enda objekte. Topeltklõpsa esmalt vaateaknas, et töötada plaaniga selle kaudu.
- **Klõpsud väljaspool vaateaknat ei tee midagi.** Oled vaateaknas: topeltklõpsa sellest väljaspool või sisesta `PS`, et taas lehel töötada.
- **„Viewports go on a layout. Open a layout tab (or make one with LAYOUT) first.“** Vaateaknad lähevad paigutusele. Ava kõigepealt paigutuse sakk (või tee see käsuga LAYOUT). {{cmd:MVIEW}} töötab ainult lehe sakil.
