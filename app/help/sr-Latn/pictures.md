---
title: Slike u crtežu
summary: Postavite PNG ili JPEG sliku, isecite je na pravougaonik ili poligon, prikažite slike koje DWG koristi, i odštampajte ih oštro.
keywords: pastearea, parea, kopiraj područje, kopirano područje, markupcraft, prava veličina, stvarna veličina, preklop, ole, ole2frame, ugrađeni objekat, nalepi sliku, nalepi snimak ekrana, ctrl+v, slika iz međuspremnika, snimak ekrana, slika, imageattach, iat, image, imageclip, clip, png, jpeg, jpg, logo, fotografija, rasterska slika, imagedef, xref, štampanje, pdf, rezolucija
from: 4025ac97
---

## Šta ćete napraviti

Logotip firme postavljen u naslovni blok, isečen na deo koji želite, i PDF u kojem se štampa u sopstvenoj rezoluciji.

## Postavite sliku

1. Ukucajte {{cmd:IMAGEATTACH}} (ili `IAT`) i pritisnite {{key:Enter}}. Izaberite PNG ili JPEG datoteku.
2. `Specify the lower-left corner`: kliknite ili ukucajte tačku.
3. `Specify its width`: širina u jedinicama crteža. {{key:Enter}} zadržava ponuđenu širinu: jedna jedinica po pikselu, ili širinu koju ste zadali ovoj datoteci prošli put (upit kaže koju).
4. `Specify its rotation angle`: {{key:Enter}} za bez rotacije.

Slika je jedan objekat: izaberite je po njenom okviru, i pomerajte, kopirajte, rotirajte, menjajte razmeru ili brišite je kao bilo koji blok.

:::note
Datoteka slike ostaje uz crtež dok je crtež otvoren. Sačuvani DWG navodi datoteku, kao što to rade drugi programi; ne čuva piksele. Držite sliku pored crteža.
:::

## Nalepite snimak ekrana ili kopiranu sliku

1. Kopirajte sliku (snimak ekrana pomoću {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=vaš alat za snimke ekrana}}, ili Kopiraj sliku u drugom programu ili pregledaču).
2. Pokažite mesto na crtežu gde treba da ide i pritisnite {{key:Mod+V}}.

Donji levi ugao slike pada na pokazivač (ili na sredinu prikaza), širine 40 % od onoga što vidite; pomerajte, menjajte razmeru i isecajte je kao svaku sliku. Naziv joj je naziv crteža sa `-picture-1.png` (zatim `-2`, …), a istorija to kaže.
{{ui:Uređivanje}} › {{ui:Više}} › {{ui:Nalepi sliku}} radi isto iz menija (pregledač može prvo pitati).

DWG čuva samo naziv datoteke slike, pa čuvanje crteža takođe čuva sliku kao sopstvenu datoteku. Držite ta dva u istoj fascikli: crtež prikazuje sliku odatle. U pregledaču je to drugo preuzimanje, a istorija to kaže. Ako je u međuspremniku samo objekti CadCraft-a, {{key:Mod+V}} nalepljuje njih, kao i ranije.

## Nalepite područje kopirano u MarkupCraft-u

{{ui:Kopiraj područje}} u MarkupCraft-u kopira deo lista kao sliku koja zna koliko je velika. CadCraft je lepi u toj veličini.

1. U MarkupCraft-u kopirajte područje (pravougaonik, krug ili slobodan oblik; {{ui:Kopiraj kao preklop}} ako želite da kroz njega vidite crtež).
2. U CadCraft-u pritisnite {{key:Mod+V}}, ili ukucajte {{cmd:PASTEAREA}} (ili `PAREA`), ili izaberite {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Nalepi kopirano područje}}.
3. `Specify the lower-left corner of the copied area`: kliknite ili ukucajte tačku. Okvir veličine područja prati pokazivač.

Koliko će biti veliko kada se nalepi:

- **List je imao razmeru crteža:** u stvarnoj veličini, u jedinicama crteža (detalj stepenica dužine 2 m u razmeri 1:50 je dugačak 2 m u crtežu u metrima, 78.74 u crtežu u inčima). Ništa više se ne pita.
- **List nije imao razmeru:** CadCraft kaže njegovu veličinu na papiru i traži razmeru: ukucajte `100` za list 1:100, pritisnite {{key:Enter}} za veličinu papira, ili ukucajte `P`, kliknite dve tačke na nalepljenoj slici i ukucajte koliko su zaista udaljene (kao što to radi {{cmd:SCANSCALE}}). Donji levi ugao ostaje tamo gde ste ga stavili.

Crtež bez jedinica uzima milimetre, kao što to radi PDF podloga. Preklop zadržava svoj papir providnim i počinje jednako izbledeo kao što je bio kopiran; spolja kruga ili slobodnog oblika je takođe providno. Nalepljeno područje je slika kao svaka druga: pomerajte, rotirajte, menjajte razmeru, isecajte ili brišite je, a celo lepljenje je jedan korak opozivanja. Sačuvano kao DWG, to je IMAGE sa svojom izbledelošću i providnošću.

{{key:Mod+V}} nalepljuje područje kada je slika na međuspremniku njegova, ili kada je područje kopirano nakon bilo čega što ste kopirali u CadCraft-u (i u poslednjih 6 sati). Inače nalepljuje kao ranije. {{cmd:PASTEAREA}} nalepljuje poslednje kopirano područje u bilo kom trenutku.

## Prikažite slike koje DWG koristi

DWG čuva samo gde su njegove slike bile, pa CadCraft prikazuje svaku kao okvir sa nazivom datoteke.

1. Ukucajte {{cmd:IMAGE}} (ili `IM`). Komandna linija navodi svaku datoteku slike i da li se prikazuje.
2. Izaberite datoteke (više odjednom). Datoteka čiji naziv sadrži onaj koji crtež navodi takođe se računa, jer izvozi često dodaju prefiks projekta.

## Isecite sliku

1. Ukucajte {{cmd:IMAGECLIP}} (ili `ICL`) i izaberite sliku.
2. Izaberite `R` i kliknite dva ugla, ili `P` i kliknite tačke poligona, pa {{key:Enter}}. `D` uklanja isečak.

## Štampanje slika

Slike idu u PDF kao slike, u sopstvenoj rezoluciji i ispod linija. U dijalogu {{ui:Štampaj}}, {{ui:Slike}} mogu ih ograničiti na 600, 300 ili 150 dpi da bi datoteka bila manja. JPEG ide onakav kakav jeste.

## Šta se čuva gde

| Format | Slike |
|---|---|
| DWG (svaka verzija) | Kao slike (IMAGE), sa svojim isečkom |
| DXF | Kao njihovi okviri sa nazivom datoteke; čuvanje to kaže |

## Objekti iz drugih programa (OLE)

Crtež može imati objekte koje je napravio drugi program, kao što je slika iz programa za crtanje ili opseg ćelija iz tabele (OLE objekti). CadCraft ih ne pokreće niti menja, i ne može da umeće nove. Evo šta radi:

- **U DXF-u**, OLE objekat se otvara kao okvir. Ako je objekat sačuvao sliku sebe i ta slika je bitmapa, slika se crta unutar okvira; inače okvir nosi natpis sa tipom objekta, kao „Microsoft Excel Worksheet (OLE)“. Okvir možete pomerati, kopirati i brisati kao blok. {{cmd:SAVEAS}} u DXF 2000 ga ponovo upisuje kao OLE objekat, sa nepromenjenim podacima.
- **U DWG-u**, objekti se zadržavaju i ponovo upisuju kada čuvate kao DWG, bajt po bajt, ali se **ne prikazuju**: DWG čuva mesto objekta unutar sopstvenih podataka, a CadCraft ih još ne čita. Istorija kaže koliko ih je zadržano. Ukucajte {{cmd:OLELIST}} da vidite šta su (tip, veličina, da li je svaki sačuvao sliku) i da stavite kopiju slike gde izaberete: **Postavi** traži broj, donji levi ugao i širinu, i crta okvir sa slikom u njemu. Ta kopija je okvir koji možete pomerati ili brisati; sam objekat ostaje u crtežu i i dalje se ponovo upisuje kada sačuvate.
- Objekat koji je došao iz DXF-a čuva se u DWG-u samo kao njegov okvir i natpis; istorija to kaže. Sačuvajte kao DXF 2000 da zadržite sam objekat.
- Slike koje su metafajlovi (što čuva mnogo programa) se ne crtaju: umesto njih prikazuju se okvir i natpis.

## Česte greške

| Vidite | Zašto | Rešenje |
|---|---|---|
| Okvir sa nazivom datoteke | CadCraft nema datoteku | {{cmd:IMAGE}}, pa izaberite datoteku |
| „To nije slika“ | Izabrani objekat nije slika | Izaberite okvir slike |
