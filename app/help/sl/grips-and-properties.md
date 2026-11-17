---
title: Urejanje z ročicami in lastnostmi
summary: Raztegnite, premaknite in spremenite velikost objektov z njihovimi ročicami ter vtipkajte natančne dolžine, polmere, kote in koordinate v podoknu Lastnosti.
keywords: ročice, lastnosti, raztegni, dolžina, polmer, koordinate, uredi, hitre lastnosti, paleta lastnosti, spremeni, sloj, barva
from: f22541ba
---

## Kaj se boste naučili

Dva hitra načina za spremembo objekta brez ukaza: povlecite njegove **ročice** ali vtipkajte nove vrednosti v podokno **Lastnosti** na desni.

## Ročice

Ko izberete objekte (do 200 naenkrat), brez zagnanega ukaza, se na njih pojavijo majhni kvadratki. To so ročice:

| Objekt | Ročice |
|---|---|
| Črta | Obe krajišči in sredina (premakne celotno črto) |
| Krog | Središče (premakne ga) in štiri točke na krogu (spremenijo polmer) |
| Lok | Središče in obe krajišči (spremenijo, kje se začne in konča) |
| Polilinija | Vsako oglišče |
| Besedilo, točka, sklic na blok | Vstavitvena točka |
| Elipsa | Središče |
| Kota | Njene določujoče točke in položaj merilne črte |
| Pogledno okno | Središče (premakne ga) in štirje vogali (spremenijo velikost) |

### Premik ročice

1. Narišite črto in kliknite nanjo. Pojavijo se tri ročice.
2. Kliknite ročico na enem koncu. V vrstici stanja piše: „Kliknite, kam naj gre ta ročica (Esc za preklic). Lovljenje in Orto veljata.“
3. Premaknite križec. Predogled sledi.
4. Kliknite novo mesto ali se ujemite (lovljenje) s točko drugega objekta in kliknite.

Konec se premakne, preostala črta ostane na mestu. Lahko tudi pritisnete na ročico in jo povlečete ter izpustite, kjer naj bo.

:::note
Za ročico ne morete vtipkati koordinate. Za natančen položaj se ujemite s točko ali vtipkajte vrednost v Lastnostih.
:::

Pritisnite {{key:Esc}} ali desni klik, da prekličete premik ročice.

## Lastnosti

Desno podokno prikazuje lastnosti izbranega.

1. Kliknite črto. Naslov podokna se glasi „Črta“.
2. Kliknite v {{ui:Dolžina}}, vtipkajte `2500` in pritisnite {{key:Enter}}.

Črta je zdaj natanko 2500 dolga, pri tem ohrani svojo začetno točko in kot. {{key:Enter}} ali klik drugje uveljavi vrednost; {{key:Esc}} vrne staro vrednost. Vsaka sprememba je en korak razveljavitve, tudi če se hkrati spremeni veliko objektov.

Polja sprejemajo izraze (`=2*45`) in dolžine z enotami (`3'6"`, `900mm`), vsaka točka ima X, Y in Z, več objektov pa lahko spremenite skupaj. Vse to je v [Podoknu Lastnosti](topic:properties-panel).

## Pogoste napake

- **Ročice se ne prikažejo.** Ukaz teče (pritisnite {{key:Esc}}), ali je izbranih več kot 200 objektov, ali je objekt na zaklenjenem sloju.
- **Ročica je šla na napačno mesto.** Lovljenje jo je ujelo. Med klikom držite {{key:Shift}}, da prezrete lovljenja.
- **Vtipkanje v Lastnostih ni nič naredilo.** Pritisnite {{key:Enter}} ali kliknite drugje, da uveljavite. Neveljaven vnos (ničelne ali negativne dolžine in polmeri, besedilo, ki ni vrednost) obarva polje rdeče in pove, zakaj.
- **Tipkane črke so šle v polje Lastnosti.** Dokler ima polje kazalec, tipke pišejo vanj. Pritisnite {{key:Enter}} ali {{key:Esc}}, nato vtipkajte ukaz.
