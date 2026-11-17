---
title: Oma nupud (Minu tööriistad)
summary: Lisa tööriistaribale nuppe, mis käivitavad sinu makrosid, anna neile kiirklahve, jaga neid failina ja too nupud CUIx-kohandusfailist.
keywords: minu tööriistad, kohandatud nupud, tööriistariba nupud, makro, makrod, cui, cuix, kohanda, menüü, kiirklahvid, klahvikombinatsioonid, diesel, ^c^c, impordi nupud, ekspordi nupud
from: 36618802
---

## Mida õpid

Kuidas panna tööriistaribale oma nupud, millest igaüks käivitab makro, mis on kirjutatud nii, nagu AutoCAD neid kirjutab; kuidas anda nupule klahv ja kuidas tuua üle CUIx-faili nupud.

## Lisa nupp

1. Ava {{ui:Sätted}} ({{key:Mod+,}}) ja jää vahekaardile {{ui:CadCraft}}. Keri {{ui:Minu tööriistad}} juurde.
2. Klõpsa {{ui:Lisa nupp…}}.
3. Täida kast:
   - {{ui:Rühm}}: tööriistariba rühm, kuhu see läheb, näiteks `My tools`. Uus nimi teeb uue rühma.
   - {{ui:Silt}}: nupul olevad sõnad.
   - {{ui:Makro}}: mida see sisestab, näiteks `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Kiirklahv}}: klõpsa kasti ja vajuta klahve, näiteks {{key:Ctrl+Alt+B}}.
   - {{ui:Ikoon}}: PNG- või SVG-pilt kuni 64 KB, või puudub (kuvatakse täht).
4. Klõpsa {{ui:Salvesta}}.

Nupp ilmub tööriistariba lõppu oma rühma. Käivitamiseks klõpsa sellel või vajuta selle klahvi. Loendis muudavad või eemaldavad selle {{ui:Redigeeri}} ja {{ui:Kustuta}}.

## Kirjuta makro

Makro on see, mida sisestaksid käsureale, koos mõne märgiga:

| Märk | Tähendab |
|---|---|
| `^C` | Tühista mis iganes töötab (`^C^C` on tavaline algus) |
| `;` või tühik | {{key:Enter}} |
| `\` | Oota sind: klõps või sisestatud vastus, seejärel makro jätkab |
| `_` või `.` enne käsku | Aktsepteeritakse ja ignoreeritakse (rahvusvahelised ja sisseehitatud nimed) |
| `*` kõige alguses | Käivitub uuesti iga kord, kui lõpeb, kuni vajutad {{key:Esc}} |
| `^O`, `^G` | Lülita Ortho ja ruudustik sisse või välja |
| `$M=` | Ülejäänu on DIESEL. Loetakse ainult `$(if,…)`, `$(getvar,…)`, `$(=,…)` ja `$(eq,…)`; nupp, mis kasutab midagi muud, ütleb seda ja ei tee midagi |

Näited:

- `^C^C_line;0,0;@100,0;;` joonistab 100 pikkuse joone algpunktist.
- `^C^C_circle;\25;` küsib sinult keskpunkti ja joonistab sinna raadiusega 25 ringi.
- `^C^C_turnright` pöörab vaadet 90° paremale.

## Kiirklahvid

Klahv vajab {{key:Mod}} (Ctrl või Macis Cmd) või {{key:Alt}} koos tähe või numbriga, või ühte vabu funktsiooniklahvi: {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Tähed ilma modifikaatorita lähevad käsurea. Klahvid, mida CadCraft, rakendus või brauser juba kasutab (näiteks {{key:Ctrl+S}} või {{key:Ctrl+Z}}), ja klahvid, mis on juba teisel nupul, lükatakse tagasi ning kast ütleb põhjuse.

## Jaga oma nuppe

- {{ui:Ekspordi…}} salvestab kõik rühmad ja nupud (koos ikoonide ja klahvidega) failina `my-tools.json`.
- {{ui:Impordi…}} lisab selle faili rühmad sinu omade järele. Rühma nimele, mida kasutad juba, lisatakse „(2)“; klahv, mis tekitaks konflikti, jäetakse ära ja paneel ütleb seda.

## Too nupud CUIx-failist

1. Klõpsa {{ui:Impordi CUIx…}} ja vali `.cuix`-fail.

Selle tööriistaribad ja lindipaneelid muutuvad rühmadeks; igal nupul on oma makro ja pilt (PNG või BMP, mis muudetakse PNG-ks). Selle kiirklahvid tulevad eraldi rühmas, igal nupul on oma klahv; käskude aliased, mida see võib sisaldada, tulevad rühma {{ui:Aliasid}}. Paneel loetleb, mis üle tuli.

:::note
Faili ainult loetakse. Käsud, mida CadCraftil ei ole, loetletakse nime järgi, neid ei arvata ära: nende nupud ütlevad seda klõpsamisel. DIESEL'i muid funktsioone kui ülal nimetatud mõned, menüüd, hiirenupud ja töötoad ei loeta.
:::

## Hea teada

- Nupud hoitakse selles brauseris (või selles töölauarakenduses), mitte joonistes.
- Nupp käivitub käsurea kaudu, seega võetakse see tagasi nagu kõik, mida sisestad: üks {{key:Mod+Z}} iga käsu kohta, mille see käivitas.
