---
title: Korralda joonis klasside abil
summary: Klassid sorteerivad objekte teist moodi, kihtide üle (Valgustid-Lauavalgusti): näita ja peida neid, anna neile värv, joontüüp, joonepaksus, täide ja tekstistiil, mida objektid saavad võtta „klassi järgi“, ning määra klass, kuhu uued objektid lähevad.
keywords: klass, klassid, CLASSES, CLS, CLASS, klassi järgi, ByClass, aktiivne klass, kasuta loomisel, puudub, projekteerimiskiht, kihi mõõtkava, kõrgus, Vectorworks
from: 672de9cb
---

Kihid ütlevad *kus* objekt joonisel asub; klassid ütlevad *mis* ta on. Seina kihil `Level 1` võib olla klassis `Walls-Exterior`, lae kihil `Ceiling` olev laelamp klassis `Lighting-Fixtures-Spot`. Saad peita kõik valgustid kõigil kihtidel korraga või joonistada kõik välisseinad paksemalt, ilma objekte kihtide vahel teisaldamata.

Iga objekt algab klassis **Puudub**. Joonis ilma oma klassideta töötab täpselt nagu varem.

## Ava klasside paneel

Trüki `CLASSES` (või `CLS`) ja vajuta {{key:Enter}}, või vali {{ui:Klassid…}} rühma {{ui:Vaade}} menüüst {{ui:Veel}}. Paneel avaneb joonise peale ja jääb lahti, kui joonistad.

- **Lisa klass:** kirjuta selle nimi üleval olevasse kasti ja vajuta {{key:Enter}}. `-` teeb taseme: `Lighting-Fixtures-Spot` on `Lighting-Fixtures` all, mis on `Lighting` all; puuduvad tasemed lisatakse sinu eest.
- **Näita või peida:** silm klassi kõrval. Klassi peitmine peidab kõik selle all olevad klassid, ekraanil ja paberil.
- **Aktiivne klass:** ümmargune nupp. Uued joonistatud objektid lähevad aktiivsesse klassi.
- **Vali klass:** klõpsa selle nimel. Nupud ja sätted allpool töötavad selle kallal.

Iga rea lõpus olev number on selles klassis olevate objektide arv (mudelis, lehtedel ja plokkide definitsioonides).

## Pane objektid klassi

Vali objektid, vali paneelis klass ja vali {{ui:Klassi määramine}}. Enne märgi {{ui:Klassi järgi}}, et need võtaksid värvi, joontüübi, joonepaksuse, täite ja tekstistiili klassist. Saad ka:

- trüki `CLASS`, kui objektid on valitud, ja sisesta klassi nimi (uus nimi loob klassi);
- trüki `CLASS`, kui midagi ei ole valitud, et määrata aktiivne klass; `?` loetleb klassid koos arvudega;
- kasuta omaduste paneeli jaotist {{ui:Klass}}: klass ning lüliti {{ui:… klassi järgi}} värvi, joontüübi ja joonepaksuse jaoks (viirutuste puhul täide, teksti puhul tekstistiil);
- vali klassi järgi käsuga `QSELECT`: vali omadus {{ui:Klass}}.

{{ui:Vali selle objektid}} valib kõik valitud klassi objektid avatud lehel (või mudelis).

## Kuidas objekt joonistub: objekt, klass, kiht

Objekti värv, joontüüp, joonepaksus, täide ja tekstistiil võivad olla **klassi järgi**, nagu need võivad olla kihi järgi. CadCraft vaatab järjekorras:

1. Objekti enda väärtus, kui see ei ole klassi järgi.
2. Klassi väärtus, kui objekt võtab selle klassi järgi ja klassil see on.
3. Kihi väärtus.

Klass, mille värv (või joontüüp …) on {{ui:Määramata}}, annab objekti edasi oma kihile. Vali klass ja määra selle {{ui:Värv}}, {{ui:Joontüüp}}, {{ui:Joonepaksus}}, {{ui:Täide (viirutused)}} ja {{ui:Tekstistiil}} nuppude all. Märgi {{ui:Kasuta loomisel}}, et uued objektid, mis selles klassis joonistatakse, võtaksid kõik need klassi järgi.

Iga muudatus paneelis on üks {{ui:Võta tagasi}} samm.

## Nimeta ümber ja kustuta

{{ui:Nimeta ümber}} muudab nime kohapeal: vajuta {{key:Enter}}, et see säilitada, {{key:Esc}}, et lahkuda. Selle all olevad klassid järgivad (`Lighting-Spot` muutub `Light-Spot`-iks, kui `Lighting` muutub `Light`-iks), samuti nende objektid ja vaateakna klassi erisused.

{{ui:Kustuta}} eemaldab klassi ja kõik selle all olevad klassid. Nende objektid lähevad **Puudub**-i. Üks {{ui:Võta tagasi}} taastab kõik. **Puudub**-i ei saa ümber nimetada ega kustutada.

## Projekteerimiskihid

Jaotises {{ui:Projekteerimiskihid}} saab igal kihil olla mõõtkava (`1:50`) ja kõrgus. Projekteerimiskiht on tavaline kiht: mudelruum ja lehed töötavad nagu varem ning mõõtkava ja kõrgus säilitatakse joonisega tööriistade jaoks, mis neid kasutavad.

## DWG- ja DXF-failides

Klassid säilitatakse igas DWG-versioonis, mida CadCraft salvestab, ja DXF-is (R12 ja 2000). Iga objekti klass on tema enda laiendatud andmed (rakendus `CADCRAFT_CLASS`), nii et AutoCAD ja teised programmid hoiavad seda objektiga koos. Klassinimekiri, värvid ja nähtavus on ühes kasutamata plokis nimega `CADCRAFT_CLASSES`; kui teine programm selle ploki puhastab, leiab CadCraft ikka iga objekti klassi ja klassid tulevad tagasi vaikeseadetega.

Teised programmid ei tunne klasse: nad joonistavad iga objekti tema enda või kihi väärtustega.

Vaata ka [Vaateakna klassi erisused](topic:viewport-overrides) ja [Joonise korraldamine kihtidega](topic:layers).
