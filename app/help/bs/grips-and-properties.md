---
title: Uređivanje pomoću hvatišta i Svojstava
summary: Razvlačite, pomjerajte i mijenjajte veličinu objekata preko njihovih hvatišta, te upisujte tačne dužine, radijuse, uglove i koordinate u panel Svojstva.
keywords: hvatišta, svojstva, razvlačenje, dužina, radijus, koordinate, uređivanje, brza svojstva, paleta svojstava, promjena, sloj, boja
from: f22541ba
---

## Šta ćete naučiti

Dva brza načina da promijenite objekat bez komande: prevucite njegova **hvatišta** ili upišite nove vrijednosti u panel **Svojstva** desno.

## Hvatišta

Kad odaberete objekte (do 200 odjednom) bez pokrenute komande, na njima se pojave mali kvadratići. To su hvatišta:

| Objekat | Hvatišta |
|---|---|
| Linija | Oba kraja i sredina (pomjera cijelu liniju) |
| Krug | Centar (pomjera ga) i četiri tačke na krugu (mijenjaju radijus) |
| Luk | Centar i oba kraja (mijenjaju mjesto početka i kraja) |
| Polilinija | Svaki vrh |
| Tekst, tačka, referenca bloka | Tačka umetanja |
| Elipsa | Centar |
| Kota | Njene definišuće tačke i položaj linije kote |
| Prozor prikaza | Centar (pomjera ga) i četiri ugla (mijenjaju veličinu) |

### Pomjeranje hvatišta

1. Nacrtajte liniju i kliknite je. Pojave se tri hvatišta.
2. Kliknite hvatište na jednom kraju. Statusna traka kaže: "Kliknite gdje ide ovo hvatište (Esc za otkazivanje). Hvatanja i Ortogonalno vrijede."
3. Pomjerajte krstić. Prati se pregled.
4. Kliknite novi položaj ili se uhvatite za tačku na drugom objektu i kliknite.

Kraj se pomjeri, a ostatak linije ostane na mjestu. Možete i pritisnuti hvatište i prevući ga, pa pustiti gdje treba.

:::note
Ne možete upisati koordinatu za hvatište. Za tačan položaj uhvatite tačku ili upišite vrijednost u Svojstva.
:::

Pritisnite {{key:Esc}} ili desni klik da otkažete pomjeranje hvatišta.

## Svojstva

Desni panel prikazuje svojstva onoga što je odabrano.

1. Kliknite liniju. Naslov panela glasi "Linija".
2. Kliknite u {{ui:Dužina}}, upišite `2500` i pritisnite {{key:Enter}}.

Linija je sada tačno 2500 dugačka, zadržavajući početnu tačku i ugao. {{key:Enter}} ili klik negdje drugo primjenjuje vrijednost; {{key:Esc}} vraća staru vrijednost. Svaka promjena je jedan korak poništavanja, i kad se mijenja više objekata odjednom.

Polja primaju izraze (`=2*45`) i dužine sa jedinicama (`3'6"`, `900mm`), svaka tačka ima X, Y i Z, a više objekata može se mijenjati zajedno. Sve o tome je u [Panel Svojstva](topic:properties-panel).

## Česte greške

- **Hvatišta se ne pojavljuju.** Komanda je pokrenuta (pritisnite {{key:Esc}}), ili je odabrano više od 200 objekata, ili je objekat na zaključanom sloju.
- **Hvatište je otišlo na pogrešno mjesto.** Uhvatila ga je neka tačka hvatanja. Držite {{key:Shift}} dok klikćete da ignorišete hvatanja.
- **Upisivanje u Svojstva ništa nije uradilo.** Pritisnite {{key:Enter}} ili kliknite negdje drugo da primijenite. Odbijen unos (nulta ili negativna dužina i radijus, tekst koji nije vrijednost) boji polje crveno i kaže zašto.
- **Ukucana slova su ušla u polje Svojstva.** Dok polje ima kursor, tipke se upisuju tamo. Pritisnite {{key:Enter}} ili {{key:Esc}}, pa zatim upišite komandu.
