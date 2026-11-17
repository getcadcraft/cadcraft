---
title: Kasuta parameetreid ja valemeid
summary: Nimeta mõõtmed, juhi neid avaldistega nagu width / 2 ja sisesta juhitavale mõõdule arv, et muuta seda, mis seda juhib.
keywords: parameetrid, par, parameetrite haldur, valemid, avaldised, muutujad, kahesuunaline, konstruktsioonikavatsus, kasutaja parameeter, fx
from: 650b9844
---

## Üks tabel kõigile mõõtmetele

Paneel {{ui:Parameetrid}} (nupp {{ui:Parameetrid}} rühmas {{ui:Parameetriline}} või sisesta {{cmd:PARAMETERS}}) loetleb kõik mõõtmelised piirangud (`d1`, `rad1`, `dia1`, `ang1` või nime, mille andsid) ja sinu enda parameetrid koos. Iga nime saab kasutada igas avaldises.

Igal real on:

- **Nimi**: sisesta uus, et seda ümber nimetada; iga avaldis, mis seda kasutab, järgib.
- **Avaldis**: arv (`40`) või avaldis (`width / 2 + gap`). Sisesta see ja vajuta {{key:Enter}}: joonis järgib.
- **Väärtus**: see, mis välja arvutub. Real, mida avaldis juhib, saad siia sisestada ka arvu: CadCraft arvutab välja selle taga oleva parameetri. Kui `d1 = width / 2`, siis d1 väärtusesse `30` sisestamine seab `width` väärtuseks 60.

Kui kaks parameetrit juhivad väärtust (`width / 2 + gap`), küsib dialoog, kumba muuta. Iga muudatus on üks tagasivõtmise samm ({{key:Mod+Z}}).

## Lisa oma

1. Ava paneel {{ui:Parameetrid}}.
2. Sisesta nimi (`gap`) ja väärtus (`10`) ning vali {{ui:Lisa}}.
3. Kasuta seda: d1 avaldisesse sisesta `width / 2 + gap` ja vajuta {{key:Enter}}.

Nimed algavad tähega või `_` ning sisaldavad tähti, numbreid ja `_`. Funktsioonide nimed, `pi` ja ühikute nimed ei saa olla nimeks.

## Avaldised

| Kirjuta | Tähendab |
|---|---|
| `+ - * / ^ %` | liida, lahuta, korruta, jaga, aste, jääk |
| `( )` | rühmitamine |
| `sin cos tan asin acos atan atan2` | trigonomeetria kraadides |
| `sqrt pow exp ln log abs sign` | juured, astmed, logaritmid |
| `ceil floor int round min max` | ümardamine ja piirid |
| `if(a > b, x, y)` | valik |
| `pi` | 3.14159… |

Arvud võivad kanda ühikut: `25mm`, `1in`, `2'`, `90deg`. Ühikuga pikkused muudetakse millimeetriteks, seega kasuta ühikuid ainult millimeetrites mõõdetud joonistes; muidu sisesta lihtsad arvud.

## Käsurealt

`-PARAMETERS` teeb sama ilma paneelita: `N` uus, `E` muuda (ka mõõtmelist piirangut), `R` nimeta ümber, `D` kustuta, `?` loend.

## Mida ei lubata

- Avaldis, mis kasutab iseennast, otse või teiste kaudu: „width, d1 kasutavad teineteist.“
- Väärtus, mida mõõde ei saa võtta: negatiivne pikkus, nurk üle 180°.
- Väärtus, mida joonis ei saa võtta koos oma teiste piirangutega: midagi ei muutu ja teade nimetab takistavaid piiranguid.
- Parameetri kustutamine, mida miski kasutab: paneel pakub enne selle väärtuse nende sisse kirjutamist. Mõõtmelise piirangu nimi kustutatakse piirangu kustutamisega.
