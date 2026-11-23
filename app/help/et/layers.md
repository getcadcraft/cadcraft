---
title: Korralda joonist kihtidega
summary: Loo kihid seintele, ustele ja märkmetele, määra värvid, tee kiht praeguseks ning lülita kihid välja, külmuta, lukusta või jäta need printimisest välja.
keywords: kiht, kihid, la, praegune kiht, külmuta, sula, lukusta, välja, sisse, prindi, ära prindi, värv, kihi omadused, layiso, layuniso, isoleeri, layoff, layfrz, laymcur, layon, laythw, nimeta ümber, laymrg, ühenda, laydel, kustuta kiht, kihtide rühmad
from: ba9f0617
---

## Mida sa teed

Kolm kihti, Walls, Doors ja Notes, igaühel oma värv, igal joonistatud objektid ja nende vahel liigutatud.

## Kihtide paneel

Kihid asuvad vasakul paneelis all {{ui:Layers}} (Kihid). Iga rida näitab vasakult paremale:

- täpp: täidetud **praeguse** kihi jaoks, kuhu uued objektid lähevad;
- värvinäidis;
- kihi nimi;
- neli nuppu: sisse/välja (silm), külmuta (lumehelves), lukusta (lukk) ja prindi (printer).

Igal joonisel on kiht nimega `0`. `LA` sisestamine ja {{key:Enter}} vajutamine hüppab paneelile.

## Kihtide loomine

1. Klõpsa loendi kohal nupul {{ui:New layer}} (Uus kiht). Avaneb nime kast.
2. Sisesta `Walls` ja vajuta {{key:Enter}} (või klõpsa {{ui:Add}}-l).

Staatusriba ütleb „Kiht Walls lisati ja tehti praeguseks.” Uuele kihile antakse värv 7 (heleda teema puhul must, tumeda puhul valge).

3. Klõpsa uuesti {{ui:New layer}}, sisesta `Doors` ja vajuta {{key:Enter}}.
4. Klõpsa uuesti {{ui:New layer}}, sisesta `Notes` ja vajuta {{key:Enter}}.

Notes on nüüd praegune.

## Anna igale kihile värv

1. Klõpsa Walls-i rea värvinäidist. Avaneb sinu süsteemi värvivalija.
2. Vali värv ja kinnita.

Näidis ja kõik Walls-il olevad objektid, mis on värvitud {{ui:By layer}} (Kihi järgi), muutuvad.

:::note
Valitud värv, mis vastab ühele 255 standardsest CAD-värvist, salvestatakse selle numbrina. Iga muu värv säilib CadCraftis täpselt, kuid DWG- või DXF-failis salvestatakse see lähima standardvärvina.
:::

## Joonista kihile

1. Klõpsa loendis nimel **Walls**. Selle täpp täitub ja staatusriba ütleb „Praegune kiht: Walls”.
2. Joonista ristkülik (`REC`). See läheb kihile Walls.
3. Klõpsa **Doors**-il ja joonista kaar (`A`). See läheb kihile Doors.

Praeguse kihi võid valida ka paremal jaotises {{ui:Current settings}} (Praegused sätted) (midagi pole valitud), all {{ui:Layer}} (Kiht).

## Objektide teisaldamine teisele kihile

1. Vali objektid.
2. Paremal paneelis vali uus kiht jaotisest {{ui:Layer}}.

Need liiguvad sellele kihile ja võtavad selle värvi, kui nende värv on {{ui:By layer}}.

## Välja, külmutamine, lukustamine ja printimine

| Nupp | Mida teeb |
|---|---|
| Sisse/välja (silm) | Peidab kihi objektid. Neid ei saa näha, valida ega nende külge püüda. |
| Külmuta (lumehelves) | CadCraftis sama mõju mis väljalülitamisel. Hoitakse eraldi, sest teised programmid käsitlevad neid erinevalt, ja seade salvestatakse. |
| Lukusta (lukk) | Objektid jäävad nähtavaks ja nende külge saab püüda, aga neid ei saa valida ega muuta. Hea taustaks, mille peale joonistad. |
| Prindi (printer) | Kui on sisse vajutatud, näidatakse kihti ekraanil, kuid see jäetakse **printidest ja PDF-idest välja**. Kasuta seda konstruktsioonijoonte ja enda märkmete jaoks. |

Hoia kursor nupu kohal, et näha, mida see teeb („Lülita välja”, „Külmuta”, „Lukusta”, „Ära prindi seda kihti”).

Praegust kihti ei saa välja lülitada: staatusriba ütleb „Praegune kiht. Tee enne praeguseks mõni teine kiht.” Kihi nime klõps, et see praeguseks teha, lülitab selle ka sisse ja sulatab.

Iga kihi muudatus, paneelis või käsuga, on üks tagasivõtmise samm: {{key:Mod+Z}} paneb selle tagasi.

## Kihtidega töötamine objekte valides

Kihi nime ei pea teadma: vali sellel olev objekt. Sisesta käsk või ava {{ui:Tools}} (Tööriistad) paneeli {{ui:Layers}} ülaosas.

| Käsk | Mida teeb |
|---|---|
| {{cmd:LAYISO}} | Vali objektid, vajuta {{key:Enter}}: jäävad sisse ainult nende kihid, kõik muud kihid lülitatakse välja. Kui praegune kiht lülitatakse välja, muutub üks isoleeritud kihtidest praeguseks. |
| {{cmd:LAYUNISO}} | Lülitab uuesti sisse kihid, mille viimane {{cmd:LAYISO}} välja lülitas, ja annab tagasi praeguse kihi, mida see muutis. |
| {{cmd:LAYOFF}} | Klõpsa objekte ükshaaval: iga objekti kiht lülitatakse välja. Sisesta `U`, et viimane tagasi võtta, {{key:Enter}}, et lõpetada. |
| {{cmd:LAYFRZ}} | Sama, külmutades iga kihi. |
| {{cmd:LAYMCUR}} | Klõpsa objektil: selle kiht muutub praeguseks (ja lülitatakse sisse ning sulatatakse). Kui üks objekt on juba valitud, kasutatakse seda. |
| {{cmd:LAYON}} | Lülitab kõik kihid sisse. |
| {{cmd:LAYTHW}} | Sulatab kõik kihid. |

Praegust kihti ei lülitata sel viisil kunagi välja ega külmutata: ajalugu ütleb seda, ja enne saad teha teise kihi praeguseks käsuga {{cmd:LAYMCUR}}. Plokiviite valimine kasutab viite enda kihti.

## Kihtide ümbernimetamine, ühendamine ja kustutamine

- {{cmd:RENAME}}: sisesta `LA`, vana nimi ja uus nimi. Iga kihil olev objekt järgib. (`B` nimetab ploki samamoodi ümber koos kõigi selle viidetega.)
- {{cmd:LAYMRG}}: klõpsa objekti igal kihil, mida ühendada (või sisesta `N` ja nimi), vajuta {{key:Enter}}, siis vali sihtkiht ja vasta `Y`. Objektid liiguvad sihtkihile — mudelis, lehtedel ja plokkide sees — ja ühendatud kihid kaovad.
- {{cmd:LAYDEL}}: vali kihil olev objekt (või `N` ja selle nimi) ja vasta `Y`. Kiht läheb **koos kõigi sellel olevate objektidega** kõikjalt. Kihti 0, DEFPOINTS ega praegust kihti ei saa kustutada.

Igaüks on üks tagasivõtmise samm. Kõik kolm on paneeli {{ui:Layers}} ülaosas {{ui:Tools}}-s.

1. Klõpsa ühele seinajoonele, sisesta siis `LAYISO` ja vajuta {{key:Enter}}. Jääb sisse ainult Walls.
2. Joonista või muuda Walls-il vajalikku.
3. Sisesta `LAYUNISO` ja vajuta {{key:Enter}}. Doors ja Notes tulevad tagasi.

## Levinud vead

- **Uued jooned läksid vale kihile.** Vaata enne joonistamist, milline täpp on täidetud. Uus kiht muutub praeguseks kohe, kui selle lisad.
- **Objekt ei valitu.** Selle kiht on lukus, väljas või külmutatud.
- **Kiht prindib endiselt teises programmis.** DXF R12 ei saa salvestada „ära prindi”. CadCraft hoiab seadet enda jaoks, kui joonisel on leht, kuid teised programmid prindivad selle kihi.
- **Kihinimed on pärast salvestamist suurtähtedes.** DXF R12 salvestab nimed suurtähtedena, nii et `Walls` tuleb tagasi kui `WALLS` ja tühikud muutuvad `_`-ks. Salvestatud DWG hoiab nimed nii, nagu sisestasid.
- **Kihi ümbernimetamine, ühendamine või kustutamine.** Kasuta {{cmd:RENAME}}, {{cmd:LAYMRG}} või {{cmd:LAYDEL}} (ka jaotises {{ui:Tools}}): vt allpool.

## Kihtide rühmitamine

Hoia loend lühike, pannes kihid kaustadesse, nagu Existing, Proposed ja Services. Iga kaust voldib kokku, ja selle lülitid lülitavad kõik tema kihid sisse või välja, külmutavad või lukustavad need koos. Praegust kihti ei lülitata kunagi välja.

Paneeli Layers jaotises {{ui:Tools}} vali {{ui:Add ready-made groups}} (Lisa valmisrühmad) väikese elamuehituse jaoks tehtud komplekti, {{ui:Group by name}} (Rühmita nime järgi), et rühmitada kihid, mille eesliide on sama (`E-Walls`, `E-Doors`), või {{ui:New group}} (Uus rühm). Lohista kiht kausta peale või kasuta kihtide kohal olevat loendit praeguse kihi jaoks. Sisesta {{ui:Find a layer}} (Otsi kihti), et loendit kitsendada. `LAYGROUP` (`LG`) teeb sama käsurealt.

Rühma ümbernimetamiseks tee topeltklõps selle nimel (või vali see ja vajuta {{key:F2}}), sisesta uus nimi ja vajuta {{key:Enter}}; {{key:Esc}} jätab vana nime alles, ja {{cmd:UNDO}} paneb selle tagasi. {{ui:New group}} on paneeli Layers jaotises {{ui:Tools}}.

Kihid ise ei muutu, nii et teised CAD-programmid näevad neid tavalise lamedana loendina. CadCraft hoiab rühmad failis.
