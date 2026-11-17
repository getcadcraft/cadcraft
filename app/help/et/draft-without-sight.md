---
title: Joonistamine ilma nägemiseta
summary: Lülita Juurdepääs sisse ja CadCraft ütleb iga käsu ja tulemuse ekraanilugeja kaudu, kirjeldab joonist ja seda, mis on kursori lähedal, lubab kursorit klaviatuuriga liigutada, mängib iga haakepunkti ja haardepunkti jaoks heli ning võtab käske vastu häälega, kui su brauser seda su arvutis oskab.
keywords: juurdepääsetavus, ekraanilugeja, pime, nägemispuue, NVDA, VoiceOver, JAWS, Orca, klaviatuurikursor, häälkäsud, kõne, helid, haakepunkti helid, joonise kirjeldus, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Juurdepääs** lubab joonistada ilma ekraani nägemata. See on väljas, kuni selle sisse lülitad, nii et keegi ei saa seda kogemata.

## Sisselülitamine

Ava **Sätted** (hammasratas või Ctrl+,), leia **Joonistamine ilma nägemiseta** ja vali **Sees**. Või sisesta käsurealt `ACCESS` ja vasta `On`. Seade jääb sellesse arvutisse meelde.

Juurdepääsu ollest sees:

- **Kõik, mida käsurida ütleb, loetakse ette** ekraanilugeja kaudu: mida kirjutasid, küsimus, vastus ja iga viga. CadCraft kasutab oma viisakaid ja kiireid live-piirkondi, nii et ekraanilugeja, mis loeb live-piirkondi, ei vaja seadistamist. Vead ja tühistamised katkestavad; kõik muu ootab oma järjekorda.
- **Joonisalale pääseb ligi.** Vajuta Tab, kuni kuuled „Joonis“, või vajuta käsureal Shift+Tab. See on piirkond, mis annab klahvid edasi CadCraftile.

## Klahvid joonisel

| Klahv | Mida teeb |
|---|---|
| Nooleklahvid | Liigutavad klaviatuurikursorit. Samm on umbes sadik sellest, mida ekraan näitab, ümardatuna arvudeks 1, 2 või 5. Shift liigub kümme korda kaugemale, Ctrl kümnendiku. |
| Enter | Valib kursori all oleva punkti täpselt nagu klõps. |
| Space | Käsureal vajuta Enter: lõpeta LINE, võta vaikimisi. |
| Tab, Shift+Tab | Liiguvad järgmisele või eelmisele haakepunktile kursori lähedal, lähimast alates. |
| G | Liigub valitud objektide haardepunktide vahel. |
| D | Kirjeldab joonist: mitu objekti, mis liiki, kui suured, mis on valitud. |
| W | Ütleb, kus kursor on ja kui kaugel see on viimasest punktist. |
| N | Ütleb, mis on kursori lähedal, lähimast alates, koos kauguse ja küljega. |
| S | Kirjeldab valitud objekte. |
| R | Ütleb viimase asja uuesti. |
| V | Lülitab hääle sisse või välja. |
| / | Viib käsureale. |
| ? | Loetleb need klahvid. |

Klahvidega liikudes öeldakse, kuhu jõudsid. Kui käsk ootab punkti, öeldakse ka, kui kaugel ja mis suunas oled viimasest punktist, näiteks „2400 viimasest punktist, paremale, nurga all 0 kraadi“.

## Käsud

- {{cmd:ACCESS}} lülitab juurdepääsu, haakepunktide helid ja hääle sisse või välja ning ütleb oleku.
- {{cmd:DESCRIBE}} ütleb, mis joonisel on.
- {{cmd:WHEREAMI}} ütleb, kus kursor on.
- {{cmd:NEARBY}} ütleb, mis asub kursori lähedal.
- {{cmd:SAYSEL}} ütleb, mis on valitud, üks lause objekti kohta.
- {{cmd:VOICE}} lülitab häälkäsud sisse või välja.

Need viis loevad joonist ja prindivad vastuse; need ei muuda midagi.

## Haakepunktide ja haardepunktide helid

Lülita Sätetes sisse **Haakepunkti ja haardepunkti helid**. Igal haakepunkti liigil on oma kõrgus ja heli, nii et saad eristada lõpp-punkti, lõigu keskpunkti, ringi keskpunkti, lõikepunkti ja teised, ning haardepunktil on topelttikk. Heli liigub vasakule või paremale, järgides kursorit üle ekraani. Helid tehakse sinu arvutis; midagi ei laadita alla.

## Häälkäsud

Lülita Sätetes sisse **Häälkäsud**. Ütle käsu nimi („joon“, „ring“, „teisalda“) ja seejärel numbrid nii, nagu need loetakse: „punkt kolmsada koma nelisada“, „kaugus tuhat kakssada“, „nurk nelikümmend viis“. „Enter“, „loobu“, „võta tagasi“ ja „tee uuesti“ teevad seda, mida ütlevad. Kuuldu öeldakse tagasi ning lause, mis pole käsk, teatatakse, mitte ei oletata.

**Kus kõnet tuvastatakse.** CadCraftil pole oma kõnetuvastusteenust ja ta ei saada heli kuhugi. Ta palub su brauseril kõne tuvastada selles arvutis. Kui brauser seda oskab, on valik **Selles arvutis** ja heli ei lahku arvutist. Kui ei oska, jääb hääl välja, kuni valid **Brauseri veebiteenus**, mis lubab brauseril heli saata selle valmistaja kõnetuvastusteenusele. Sätted ütlevad enne otsustamist, mis kehtib.

## Mida see veel ei tee

- Ainult CadCraftil on Juurdepääs. Teised seitse rakendust tulevad järele samade klahvide ja helidega.
- Joonise tekst (märkus, plokinimi) loetakse ette nii, nagu see on kirjutatud; seda ei võeta kunagi juhisena.
- See on proovitud sünteetiliste kontrollide ja brauseri testidega; käsitsi kontrollid NVDA, VoiceOveri ja pimeda või nägemispuudega testijaga on veel ees. Kui proovid, palun ütle meile, mis puudu on.
