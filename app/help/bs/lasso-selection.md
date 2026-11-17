---
title: Odabir omčom
summary: Pritisni i prevuci slobodno nacrtanu konturu oko objekata da ih odabereš, kao prozor, ukrštanje ili ogradu; mijenjaj tipkom Space dok prevlačiš.
keywords: omča, lassomode, prevlačenje, slobodno, odabir, selekcija, prozor, ukrštanje, ograda, space, poligon, dodir, olovka, pravougaonik
from: 9ec6154d
---

## Šta ćeš naučiti

Kako odabrati objekte crtanjem oko njih i kako vratiti pravougaonik kada ga želiš.

## Nacrtaj omču

1. Nacrtaj nekoliko linija i krugova blizu jedan drugog.
2. Bez pokrenute naredbe pritisni dugme miša na praznom mjestu i prevuci oko nekih od njih, prvo **udesno**.
3. Otpusti.

Odabrani su samo objekti koji su potpuno unutar konture. Kontura je tokom prevlačenja puna linija: ovo je omča-prozor.

## Prozor, ukrštanje i ograda

Koje objekte dobijaš zavisi od prvog pomjeranja prevlačenja i od {{key:Space}}:

| Prevlačiš | Omča | Odabire |
|---|---|---|
| Prvo udesno | Prozor (puna kontura) | Samo objekte **potpuno unutar** |
| Prvo ulijevo | Ukrštanje (isprekidana, zelena) | Objekte unutar **i** objekte koje kontura dodiruje |
| Pritisni {{key:Space}} dok prevlačiš | Prozor, zatim ukrštanje, zatim ograda | Ogradu (isprekidana putanja, nezatvorena): samo objekte koje putanja siječe |

1. Pritisni na prazno mjesto i prevuci oko nekih objekata, prvo **ulijevo**. Odabrano je i sve što kontura dodiruje.
2. Pritisni {{key:Esc}}.
3. Pritisni i prevuci ponovo; dok još držiš dugme, pritisni {{key:Space}} jednom. Kontura postaje ukrštanje; pritisni {{key:Space}} još jednom za ogradu.

{{key:Shift}} dok otpuštaš uklanja objekte iz odabira (uz "Klik na objekte: Dodaje" u Postavkama).

## Unutar naredbe

Omča radi svuda gdje CadCraft traži `Odaberi objekte`: nacrtaj je, zatim pritisni {{key:Enter}} za završetak. {{cmd:STRETCH}} uzima ukrštajuću omču kao svoj prozor, pa možeš rastegnuti L-oblik dijela crteža u jednom potezu.

{{cmd:TRIM}} i {{cmd:EXTEND}} koriste prevlačenje drugačije: tu obrezuju (ili produžuju) svaki komad koji putanja siječe. Vidi [Obrezivanje i produženje](topic:trim-and-extend).

## Pravougaonik

Klik na prazan prostor, pomjeranje i drugi klik uvijek nacrtaju pravougaoni prozor (slijeva nadesno) ili ukrštanje (zdesna nalijevo).

Da prevlačenje ponovo crta pravougaonik, otvori {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Prevlačenje za odabir}} i izaberi {{ui:Pravougaonik}}, ili ukucaj {{cmd:LASSOMODE}}, pa `0`. Ukucaj {{cmd:LASSOMODE}}, pa `1` za omču. Izbor se čuva u ovom pregledniku.

:::touch
Prevuci prstom ili olovkom na isti način. Dodir i dalje odabere jedan objekat.
:::

## Česte greške

- **Ništa nije odabrano.** Omča je bila prozor, a ništa nije bilo potpuno unutra. Počni prevlačenje ulijevo ili pritisni {{key:Space}} dok prevlačiš.
- **Prevlačenje je pomjerilo hvatište.** Pritiskanje na hvatište odabranog objekta pomjera hvatište. Počni omču na praznom mjestu.
- **Space je završio naredbu.** {{key:Space}} mijenja omču samo dok je dugme pritisnuto; inače je to {{key:Enter}}.
