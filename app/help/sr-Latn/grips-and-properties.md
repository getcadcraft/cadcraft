---
title: Uređivanje pomoću hvataljki i Svojstava
summary: Razvlačite, pomerajte i menjajte veličinu objekata pomoću njihovih hvataljki, i unesite tačne dužine, poluprečnike, uglove i koordinate u panelu Svojstva.
keywords: hvataljke, svojstva, razvlačenje, dužina, poluprečnik, koordinate, uređivanje, brza svojstva, paleta svojstava, promena, sloj, boja, color
from: f22541ba
---

## Šta ćete naučiti

Dva brza načina da promenite objekat bez komande: prevucite njegove **hvataljke** ili unesite nove vrednosti u panel **Svojstva** s desne strane.

## Hvataljke

Kada izaberete objekte (do 200 odjednom) dok nijedna komanda nije pokrenuta, na njima se pojavljuju mali kvadratići. To su hvataljke:

| Objekat | Hvataljke |
|---|---|
| Linija | Oba kraja i sredina (pomera celu liniju) |
| Krug | Centar (pomera ga) i četiri tačke na krugu (menjaju poluprečnik) |
| Luk | Centar i oba kraja (menjaju mesto početka i kraja) |
| Polilinija | Svako teme |
| Tekst, tačka, referenca bloka | Tačka umetanja |
| Elipsa | Centar |
| Kota | Njene određujuće tačke i položaj linije kote |
| Prozor pogleda | Centar (pomera ga) i četiri ugla (menjaju mu veličinu) |

### Pomeranje hvataljke

1. Nacrtajte liniju i kliknite na nju. Pojavljuju se tri hvataljke.
2. Kliknite hvataljku na jednom kraju. Statusna traka kaže: „Kliknite gde ide ova hvataljka (Esc za otkazivanje). Važe hvatanje i ortogonalno.“
3. Pomerajte krstić. Prati vas pregled.
4. Kliknite novi položaj, ili se uhvatite za tačku na drugom objektu i kliknite.

Kraj se pomera, a ostatak linije ostaje na mestu. Takođe možete pritisnuti hvataljku i prevući je, pa otpustiti tamo gde treba da bude.

:::note
Za hvataljku ne možete uneti koordinatu. Za tačan položaj uhvatite se za tačku ili unesite vrednost u Svojstva.
:::

Pritisnite {{key:Esc}} ili kliknite desnim tasterom da otkažete pomeranje hvataljke.

## Svojstva

Desni panel prikazuje svojstva onoga što je izabrano.

1. Kliknite liniju. Naslov panela glasi „Linija“.
2. Kliknite u polje {{ui:Dužina}}, ukucajte `2500` i pritisnite {{key:Enter}}.

Linija je sada tačno dugačka 2500, uz zadržavanje početne tačke i ugla. {{key:Enter}} ili klik na drugo mesto primenjuje vrednost; {{key:Esc}} vraća staru vrednost. Svaka promena je jedan korak opozivanja, i kada se menja mnogo objekata odjednom.

Polja primaju izraze (`=2*45`) i dužine sa jedinicama (`3'6"`, `900mm`), svaka tačka ima X, Y i Z, i više objekata može se menjati zajedno. Sve to je opisano u [Panel Svojstva](topic:properties-panel).

## Česte greške

- **Hvataljke se ne pojavljuju.** Komanda je pokrenuta (pritisnite {{key:Esc}}), ili je izabrano više od 200 objekata, ili je objekat na zaključanom sloju.
- **Hvataljka je otišla na pogrešno mesto.** Uhvatilo ju je hvatanje. Držite {{key:Shift}} dok klikćete da biste zanemarili hvatanje.
- **Unos u Svojstva nije ništa uradio.** Pritisnite {{key:Enter}} ili kliknite negde drugo da primenite. Odbijen unos (nulte ili negativne dužine i poluprečnici, tekst koji nije vrednost) boji polje u crveno i kaže zašto.
- **Ukucana slova su ušla u polje Svojstva.** Dok polje ima kursor, tasteri se upisuju tamo. Pritisnite {{key:Enter}} ili {{key:Esc}}, pa ukucajte komandu.
