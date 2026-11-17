---
title: Redakto me dorezat dhe Vetitë
summary: Shtrije, lëviz dhe ndrysho madhësinë e objekteve me dorezat e tyre, dhe shkruaj gjatësi, rreze, kënde dhe koordinata të sakta në panelin Vetitë.
keywords: dorezat, vetitë, shtrirje, gjatësi, rreze, koordinata, redakto, vetitë e shpejta, paleta e vetive, ndrysho, shtresë, ngjyrë, color
from: f22541ba
---

## Çfarë do të mësosh

Dy mënyra të shpejta për të ndryshuar një objekt pa komandë: tërhiq **dorezat** e tij, ose shkruaj vlera të reja në panelin **Vetitë** në të djathtë.

## Dorezat

Kur përzgjedh objekte (deri në 200 njëherësh) pa komandë që po ekzekutohet, shfaqen katrorë të vegjël mbi to. Këto janë dorezat:

| Objekti | Dorezat |
|---|---|
| Vijë | Të dy skajet, dhe mesi (lëviz të gjithë vijën) |
| Rreth | Qendra (e zhvendos) dhe katër pikat në rreth (ndryshojnë rrezen) |
| Hark | Qendra dhe të dy skajet (ndryshojnë ku fillon dhe ku mbaron) |
| Polivijë | Çdo kulm |
| Tekst, pikë, referencë bllokuese | Pika e futjes |
| Elips | Qendra |
| Përmasë | Pikat që e përcaktojnë dhe pozita e vijës së përmasës |
| Dritare pamjeje | Qendra (e zhvendos) dhe katër cepat (ndryshojnë madhësinë) |

### Lëviz një dorezë

1. Vizato një vijë dhe kliko mbi të. Shfaqen tre dorezat.
2. Kliko dorezën në njërin skaj. Shiriti i statusit thotë "Kliko ku duhet të shkojë kjo dorezë (Esc për të anuluar). Kapjet dhe Ortho zbatohen."
3. Lëviz kryqëzuesin. Ndjek një pamje paraprake.
4. Kliko pozicionin e ri, ose kap një pikë te një objekt tjetër dhe kliko.

Skaji lëviz dhe pjesa tjetër e vijës mbetet në vend. Mund edhe të shtypësh mbi një dorezë dhe ta tërheqësh, pastaj ta lësh aty ku duhet të shkojë.

:::note
Nuk mund të shkruash një koordinatë për një dorezë. Për një pozicion të saktë, kap një pikë, ose shkruaj vlerën në Vetitë.
:::

Shtyp {{key:Esc}} ose kliko me butonin e djathtë për të anuluar lëvizjen e një doreze.

## Vetitë

Paneli i djathtë shfaq vetitë e asaj që është përzgjedhur.

1. Kliko një vijë. Titulli i panelit thotë "Vijë".
2. Kliko te {{ui:Gjatësia}}, shkruaj `2500` dhe shtyp {{key:Enter}}.

Vija tani është saktësisht 2500 e gjatë, duke ruajtur pikën e nisjes dhe këndin. {{key:Enter}} ose klikimi diku tjetër zbaton një vlerë; {{key:Esc}} e kthen vlerën e vjetër. Çdo ndryshim është një hap zhbërjeje, edhe kur ndryshojnë shumë objekte njëherësh.

Fushat pranojnë shprehje (`=2*45`) dhe gjatësi me njësi (`3'6"`, `900mm`), çdo pikë ka X, Y dhe Z, dhe disa objekte mund të ndryshohen së bashku. Të gjitha këto janë te [Paneli Vetitë](topic:properties-panel).

## Gabimet e zakonshme

- **Nuk shfaqen dorezat.** Po ekzekutohet një komandë (shtyp {{key:Esc}}), ose janë përzgjedhur më shumë se 200 objekte, ose objekti është në një shtresë të kyçur.
- **Dorezat shkuan në vendin e gabuar.** Një kapje e kapi. Mbaje {{key:Shift}} të shtypur gjatë klikimit për të injoruar kapjet.
- **Shkrimi në Vetitë nuk bëri asgjë.** Shtyp {{key:Enter}} ose kliko diku tjetër për ta zbatuar. Një hyrje e refuzuar (gjatësi dhe rreze zero ose negative, ose tekst që nuk është vlerë) e bën fushën të kuqe dhe thotë arsyen.
- **Shkronjat e shkruara shkuan në një fushë të Vetive.** Ndërsa një fushë ka kursorin, tastet shkruhen aty. Shtyp {{key:Enter}} ose {{key:Esc}}, pastaj shkruaj komandën.
