---
title: Izbor lasom
summary: Pritisni i prevuci slobodno nacrtanu konturu oko objekata da ih izabereš, kao prozor, ukrštanje ili ogradu; menjaj razmakom dok prevlačiš.
keywords: lasso, lassomode, prevlačenje, slobodno, izbor, selekcija, prozor, ukrštanje, ograda, razmak, poligon, dodir, olovka, pravougaonik
from: 9ec6154d
---

## Šta ćeš naučiti

Kako da izabereš objekte crtanjem oko njih i kako da vratiš pravougaonik kada ga želiš.

## Nacrtaj lasso

1. Nacrtaj nekoliko linija i krugova blizu jedan drugom.
2. Kada nijedna komanda ne radi, pritisni dugme miša na praznom mestu i prevuci oko nekih od njih, najpre udesno.
3. Pusti.

Biraju se samo objekti koji su potpuno unutar konture. Kontura se crta punom linijom dok prevlačiš: ovo je lasso prozor.

## Prozor, ukrštanje i ograda

Koje objekte dobijaš zavisi od prvog pomeraja prevlačenja i od {{key:Space}}:

| Prevlačiš | Lasso | Bira |
|---|---|---|
| Najpre udesno | Prozor (puna kontura) | Samo objekte **potpuno unutar** |
| Najpre ulevo | Ukrštanje (isprekidano, zeleno) | Objekte unutar **i** objekte koje kontura dodiruje |
| Pritisni {{key:Space}} dok prevlačiš | Prozor, zatim ukrštanje, zatim ograda | Ogradu (isprekidana putanja, nezatvorena): samo objekte koje putanja seče |

1. Pritisni na praznom mestu i prevuci oko nekih objekata, najpre ulevo. Sve što kontura dodirne biće izabrano i ono.
2. Pritisni {{key:Esc}}.
3. Pritisni i prevuci ponovo; dok još držiš dugme, pritisni {{key:Space}} jednom. Kontura se pretvara u ukrštanje; pritisni {{key:Space}} ponovo za ogradu.

{{key:Shift}} pri puštanju izbacuje objekte iz izbora (uz „Klik na objekte: Dodaje“ u {{ui:Podešavanja}}).

## U okviru komande

Lasso radi gde god CadCraft traži `Select objects`: nacrtaj ga, zatim pritisni {{key:Enter}} za kraj. {{cmd:STRETCH}} uzima lasso ukrštanje kao svoj prozor, pa možeš da istegneš L-oblik dela crteža u jednom potezu.

{{cmd:TRIM}} i {{cmd:EXTEND}} koriste prevlačenje drugačije: tamo seku (ili produžavaju) svaki deo koji putanja seče. Vidi [Seči i produži](topic:trim-and-extend).

## Pravougaonik

Klik na prazan prostor, pomeranje i drugi klik uvek crtaju prozor pravougaonika (sleva nadesno) ili ukrštanje (zdesna nalevo).

Da prevlačenje ponovo crta pravougaonik, otvori {{ui:Podešavanja}} › {{ui:CadCraft}} › {{ui:Prevlačenje za izbor}} i izaberi {{ui:Pravougaonik}}, ili ukucaj {{cmd:LASSOMODE}}, pa `0`. Ukucaj {{cmd:LASSOMODE}}, pa `1` za lasso. Izbor se pamti u ovom pregledaču.

:::touch
Prevuci prstom ili olovkom na isti način. Dodir i dalje bira jedan objekat.
:::

## Česte greške

- **Ništa nije izabrano.** Lasso je bio prozor, a ništa nije bilo potpuno unutra. Počni prevlačenje ulevo ili pritisni {{key:Space}} dok prevlačiš.
- **Prevlačenje je pomerilo hvataljku.** Pritisak na hvataljku izabranog objekta pomera hvataljku. Počni lasso na praznom mestu.
- **Space je završio komandu.** {{key:Space}} menja lasso samo dok je dugme pritisnuto; inače je Enter.
