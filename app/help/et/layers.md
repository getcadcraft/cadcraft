---
title: Korralda joonist kihtide abil
summary: Loo kihid seintele, ustele ja märkmetele, määra värvid, muuda kiht praeguseks ning lülita kihid välja, külmuta, lukusta või keela nende printimine.
keywords: kiht, kihid, la, praegune kiht, külmuta, sulata, lukusta, välja, sisse, prindi, ära prindi, värv, kihi omadused, layiso, layuniso, isoleeri, layoff, layfrz, laymcur, layon, laythw, nimeta ümber, laymrg, ühenda, laydel, kustuta kiht
from: cd033591
---

## Mida sa valmistad

Kolm kihti, Seinad, Uksed ja Märkmed, igaühel oma värv, objektid igal kihil ning objektid liigutatud nende vahel.

## Kihtide paneel

Kihid asuvad vasakul paneelil, jaotise {{ui:Kihid}} all. Iga rida näitab vasakult paremale:

- punkti: täidetud **praeguse** kihi puhul, kuhu uued objektid lähevad;
- värvitahvlit;
- kihi nime;
- nelja nuppu: sisse/välja (silm), külmuta (lumehelves), lukusta (lukk) ja prinditav (printer).

Igal joonisel on kiht nimega `0`. Sisesta `LA` ja vajuta {{key:Enter}}, et hüpata paneelile.

## Kihtide loomine

1. Klõpsa loendi kohal {{ui:Uus kiht}}. Avaneb nimekast.
2. Kirjuta `Seinad` ja vajuta {{key:Enter}} (või klõpsa {{ui:Lisa}}).

Olekuribal öeldakse „Lisati kiht Seinad ja see on praegune.“ Uuel kihil on värv 7 (must heledal teemal, valge tumedal).

3. Klõpsa uuesti {{ui:Uus kiht}}, kirjuta `Uksed` ja vajuta {{key:Enter}}.
4. Klõpsa uuesti {{ui:Uus kiht}}, kirjuta `Märkmed` ja vajuta {{key:Enter}}.

Märkmed on nüüd praegune kiht.

## Iga kihi värv

1. Klõpsa Seinad-rea värvitahvlil. Avaneb sinu süsteemi värvivalija.
2. Vali värv ja kinnita.

Tahvel ning kõik Seinad-kihil olevad objektid, mis on värvitud {{ui:Kihi järgi}}, muutuvad.

:::note
Valitud värv, mis vastab ühele 255 standardsest CAD-värvist, salvestatakse selle numbrina. Iga muu värv säilib CadCraftis täpselt, aga DWG- või DXF-failis salvestatakse see lähima standardvärvina.
:::

## Joonistamine kihile

1. Klõpsa loendis nimel **Seinad**. Selle punkt täitub ja olekuribal öeldakse „Praegune kiht: Seinad“.
2. Joonista ristkülik (`REC`). See läheb kihile Seinad.
3. Klõpsa **Uksed** ja joonista kaar (`A`). See läheb kihile Uksed.

Praeguse kihi saad valida ka paremal jaotises {{ui:Praegused sätted}} (kui midagi pole valitud), all {{ui:Kiht}}.

## Objektide teisaldamine teisele kihile

1. Vali objektid.
2. Paremas paneelis vali uus kiht jaotises {{ui:Kiht}}.

Need liiguvad sellele kihile ja võtavad selle värvi, kui nende värv on {{ui:Kihi järgi}}.

## Välja, külmuta, lukusta ja prindi

| Nupp | Mida see teeb |
|---|---|
| Sisse/välja (silm) | Peidab kihi objektid. Neid ei saa näha, valida ega nende külge joondada. |
| Külmuta (lumehelves) | CadCraftis sama mis välja lülitamine. Hoitakse eraldi, sest teised programmid käsitlevad neid erinevalt ja seade salvestatakse. |
| Lukusta (lukk) | Objektid jäävad nähtavaks ja nende külge saab joonduda, aga neid ei saa valida ega muuta. Hea taustale, mille üle joonistad. |
| Prinditav (printer) | Kui nupp on vajutatud, kuvatakse kiht ekraanil, aga see **jäetakse väljatrükkidest** ja PDF-idest välja. Kasuta seda konstruktsioonijoonte ja enda märkmete jaoks. |

Nupu peal hiirt hoides näed, mis see teeb („Lülita välja“, „Külmuta“, „Lukusta“, „Ära prindi seda kihti“).

Praegust kihti ei saa välja lülitada: olekuribal öeldakse „See on praegune kiht. Tee enne praeguseks mõni teine kiht.“ Kihi nime klõps, et see praeguseks teha, lülitab selle ka sisse ja sulatab.

Iga kihi muutus paneelis või käsuga on üks tagasivõtmise samm: {{key:Mod+Z}} pannakse tagasi.

## Kihtidega töötamine objekte valides

Kihi nime ei pea teadma: vali sellel kihil olev objekt. Sisesta käsk või ava paneeli {{ui:Kihid}} ülaosas {{ui:Tööriistad}}.

| Käsk | Mida see teeb |
|---|---|
| {{cmd:LAYISO}} | Vali objektid ja vajuta {{key:Enter}}: jäävad sisse ainult nende kihid, kõik teised kihid lülitatakse välja. Kui praegune kiht on välja lülitatud, muutub üks isoleeritud kihtidest praeguseks. |
| {{cmd:LAYUNISO}} | Lülitab sisse kihid, mille viimane {{cmd:LAYISO}} välja lülitas, ja annab tagasi praeguse kihi, mida see muutis. |
| {{cmd:LAYOFF}} | Klõpsa objekte ükshaaval: iga objekti kiht lülitatakse välja. Sisesta `U`, et viimane tagasi võtta, ja {{key:Enter}}, et lõpetada. |
| {{cmd:LAYFRZ}} | Sama, aga külmutab iga kihi. |
| {{cmd:LAYMCUR}} | Klõpsa objektil: selle kiht saab praeguseks (ja lülitatakse sisse ning sulatatakse). Kui üks objekt on juba valitud, kasutatakse seda. |
| {{cmd:LAYON}} | Lülitab sisse kõik kihid. |
| {{cmd:LAYTHW}} | Sulatab kõik kihid. |

Praegust kihti ei lülitata nii kunagi välja ega külmutata: ajalugu ütleb seda ja enne saad teise kihi {{cmd:LAYMCUR}}-iga praeguseks teha. Viiteploki valimisel kasutatakse viite enda kihti.

## Kihtide ümbernimetamine, ühendamine ja kustutamine

- {{cmd:RENAME}}: kirjuta `LA`, vana nimi ja uus nimi. Kõik kihil olevad objektid järgivad. (`B` nimetab ploki samamoodi ümber koos kõigi selle viidetega.)
- {{cmd:LAYMRG}}: klõpsa iga ühendatava kihi objektil (või sisesta `N` ja nimi), vajuta {{key:Enter}}, seejärel vali sihtkiht ja vasta `Y`. Objektid liiguvad sihtkihile — mudelis, lehtedel ja plokkide sees — ning ühendatud kihid kaovad.
- {{cmd:LAYDEL}}: vali kihil objekt (või `N` ja selle nimi) ning vasta `Y`. Kiht kaob **koos kõigi sellel olevate objektidega** kõikjalt. Kihti 0, DEFPOINTS ja praegust kihti ei saa kustutada.

Igaüks neist on üks tagasivõtmise samm. Kõik kolm asuvad paneeli {{ui:Kihid}} ülaosas jaotises {{ui:Tööriistad}}.

1. Klõpsa ühel seinajoonel, seejärel sisesta `LAYISO` ja vajuta {{key:Enter}}. Jääb sisse ainult Seinad.
2. Joonista või muuda kihil Seinad vajalikku.
3. Sisesta `LAYUNISO` ja vajuta {{key:Enter}}. Uksed ja Märkmed tulevad tagasi.

## Levinud vead

- **Uued jooned läksid vale kihile.** Vaata enne joonistamist, milline punkt on täidetud. Uus kiht muutub praeguseks kohe, kui selle lisad.
- **Objekt ei valitse.** Selle kiht on lukus, välja lülitatud või külmutatud.
- **Kiht prinditakse teises programmis.** DXF R12 ei salvesta seadet „ära prindi“. CadCraft hoiab seadet enda jaoks, kui joonisel on leht, aga teised programmid prindivad selle kihi.
- **Kihinimed on pärast salvestamist suurtähtedes.** DXF R12 salvestab nimed suurtähtedena, nii et `Seinad` tuleb tagasi kujul `SEINAD` ja tühikud muutuvad `_`-ks. Salvestatud DWG säilitab nimed nii, nagu kirjutasid.
- **Kihi ümbernimetamine, ühendamine või kustutamine.** Kasuta {{cmd:RENAME}}, {{cmd:LAYMRG}} või {{cmd:LAYDEL}} (samuti jaotises {{ui:Tööriistad}}): vt allpool.

## Kihtide rühmitamine

Hoia loend lühike, pannes kihid kaustadesse, näiteks Olemasolev, Kavandatav ja Teenused. Iga kaust voldub kokku ning selle lülitid lülitavad kõik tema kihid sisse või välja, külmutavad või lukustavad need koos. Praegust kihti ei lülitata kunagi välja.

Paneeli {{ui:Kihid}} tööriistade all {{ui:Tööriistad}} vali {{ui:Lisa valmisrühmad}} väikese elamuehituse jaoks tehtud komplekti, {{ui:Rühmita nime järgi}} kihtide rühmitamiseks, millel on sama eesliide (`E-Seinad`, `E-Uksed`), või {{ui:Uus rühm}}. Lohista kiht kausta või kasuta praeguse kihi jaoks kihtide kohal olevat loendit. Sisesta {{ui:Otsi kihti}}, et loendit kitsendada. `LAYGROUP` (`LG`) teeb sama käsurealt.

Kihid ise ei muutu, nii et teised CAD-programmid näevad neid tavalise lameda loendina. CadCraft hoiab rühmad failis.
