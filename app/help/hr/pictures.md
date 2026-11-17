---
title: Slike u crtežu
summary: Postavite PNG ili JPEG sliku, odrežite je na pravokutnik ili poligon, prikažite slike koje DWG koristi i ispišite ih oštro.
keywords: pastearea, parea, kopiranje područja, kopirano područje, markupcraft, stvarna veličina, prava veličina, preklapanje, ole, ole2frame, ugrađeni objekt, zalijepi sliku, zalijepi snimku zaslona, ctrl+v, slika iz međuspremnika, snimka zaslona, slika, imageattach, iat, image, imageclip, clip, png, jpeg, jpg, logotip, fotografija, raster, imagedef, xref, ispis, pdf, rezolucija
from: 4025ac97
---

## Što ćete izraditi

Logotip tvrtke postavljen u zaglavlje crteža, odrezan na dio koji želite, i PDF u kojem se ispisuje u vlastitoj rezoluciji.

## Postavite sliku

1. Upišite {{cmd:IMAGEATTACH}} (ili `IAT`) i pritisnite {{key:Enter}}. Odaberite PNG ili JPEG datoteku.
2. `Specify the lower-left corner`: kliknite ili upišite točku.
3. `Specify its width`: širina u jedinicama crteža. {{key:Enter}} zadržava ponuđenu širinu: jedna jedinica po pikselu, ili širinu koju ste zadali toj datoteci zadnji put (upit kaže koju).
4. `Specify its rotation angle`: {{key:Enter}} za bez rotacije.

Slika je jedan objekt: odaberite je po njezinom okviru i pomičite, kopirajte, zakrećite, skalirajte ili brišite kao bilo koji blok.

:::note
Datoteka slike ostaje uz crtež dok je crtež otvoren. Spremljeni DWG navodi datoteku, kao što to rade drugi programi; ne sadrži piksele. Držite sliku uz crtež.
:::

## Zalijepite snimku zaslona ili kopiranu sliku

1. Kopirajte sliku (snimku zaslona s {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=vaš alat za snimku zaslona}}, ili Kopiraj sliku u drugom programu ili pregledniku).
2. Pokažite mjesto na crtežu na kojem treba biti i pritisnite {{key:Mod+V}}.

Donji lijevi kut slike dolazi na pokazivač (ili na sredinu prikaza), a širina je 40 % onoga što vidite. Pomičite, skalirajte i odrežite je kao bilo koju sliku. Naziv joj je naziv crteža s `-picture-1.png` (zatim `-2`, …), a povijest to navodi.
{{ui:Uredi}} › {{ui:Više}} › {{ui:Zalijepi sliku}} radi isto iz izbornika (preglednik možda prvo pita).

DWG čuva samo naziv datoteke slike, pa spremanje crteža također sprema sliku kao zasebnu datoteku. Držite ta dva u istoj mapi: crtež prikazuje sliku odatle. U pregledniku je to drugo preuzimanje, a povijest to navodi. Ako je na međuspremniku samo CadCraft objekata, {{key:Mod+V}} ih zalijepi kao i prije.

## Zalijepite područje kopirano u MarkupCraftu

{{ui:Kopiraj područje}} u MarkupCraftu kopira dio lista kao sliku koja zna koliko je velika. CadCraft je lijepi u toj veličini.

1. U MarkupCraftu kopirajte područje (pravokutnik, krug ili slobodni oblik; {{ui:Kopiraj kao preklapanje}} ako želite vidjeti svoj crtež kroz njega).
2. U CadCraftu pritisnite {{key:Mod+V}}, ili upišite {{cmd:PASTEAREA}} (ili `PAREA`), ili odaberite {{ui:Uredi}} › {{ui:Više}} › {{ui:Zalijepi kopirano područje}}.
3. `Specify the lower-left corner of the copied area`: kliknite ili upišite točku. Okvir veličine područja prati pokazivač.

Koliko će biti veliko:

- **List je imao mjerilo crteža:** u stvarnoj veličini, u jedinicama crteža (detalj stubišta 1:50 duljine 2 m je 2 m dug u crtežu u metrima, a 78.74 u crtežu u inčima). Ništa se više ne pita.
- **List nije imao mjerilo:** CadCraft kaže njegovu veličinu na papiru i pita za mjerilo: upišite `100` za list 1:100, pritisnite {{key:Enter}} za veličinu papira, ili upišite `P`, kliknite dvije točke na zalijepljenoj slici i upišite koliko su zaista udaljene (kako to radi {{cmd:SCANSCALE}}). Donji lijevi kut ostaje gdje ste ga stavili.

Crtež bez jedinica uzima milimetre, kao i podloga PDF-a. Preklapanje zadržava svoj papir prozirnim i počinje jednako prigušeno kao što je kopirano; izvan kruga ili slobodnog oblika također je prozirno. Zalijepljeno područje je slika kao i svaka druga: pomičite, zakrećite, skalirajte, odrežite ili brišite je, a cijelo lijepljenje je jedan korak poništavanja. Spremljeno kao DWG je IMAGE s njegovim prigušenjem i prozirnošću.

{{key:Mod+V}} zalijepi područje kad je na međuspremniku slika područja, ili kad je područje kopirano nakon bilo čega što ste kopirali u CadCraftu (i u zadnjih 6 sati). Inače zalijepi kao prije. {{cmd:PASTEAREA}} zalijepi zadnje kopirano područje u bilo kojem trenutku.

## Prikažite slike koje DWG koristi

DWG pohranjuje samo gdje su bile njegove slike, pa CadCraft prikazuje svaku kao okvir s nazivom datoteke.

1. Upišite {{cmd:IMAGE}} (ili `IM`). Naredbeni redak navodi svaku datoteku slike i prikazuje li se.
2. Odaberite datoteke (više odjednom). Datoteka čiji naziv sadrži onaj koji crtež navodi također se računa, jer izvozi često dodaju prefiks projekta.

## Odrežite sliku

1. Upišite {{cmd:IMAGECLIP}} (ili `ICL`) i odaberite sliku.
2. Upišite `R` i kliknite dva kuta, ili `P` i kliknite točke poligona, zatim {{key:Enter}}. `D` uklanja odrezivanje.

## Ispišite slike

Slike idu u PDF kao slike, u vlastitoj rezoluciji i ispod linija. U dijaloškom okviru {{ui:Ispis}}, {{ui:Slike}} ih mogu ograničiti na 600, 300 ili 150 dpi da datoteka bude manja. JPEG ide kakav jest.

## Što se gdje sprema

| Format | Slike |
|---|---|
| DWG (svaka verzija) | Kao slike (IMAGE), s odrezivanjem |
| DXF | Kao njihovi okviri s nazivom datoteke; spremanje to kaže |

## Objekti iz drugih programa (OLE)

Crtež može sadržavati objekte koje je napravio drugi program, poput slike iz programa za crtanje ili raspona iz tablice (OLE objekti). CadCraft ih ne pokreće niti uređuje, i ne može umetati nove. Što radi:

- **U DXF-u** OLE objekt se otvara kao okvir. Ako je objekt spremio svoju sliku i ta slika je bitmapa, slika se crta unutar okvira; inače okvir nosi oznaku s vrstom objekta, poput "Microsoft Excel Worksheet (OLE)". Okvir možete pomicati, kopirati i brisati kao blok. {{cmd:SAVEAS}} u DXF 2000 zapisuje ga ponovno kao OLE objekt, s nepromijenjenim podacima.
- **U DWG-u** objekti se čuvaju i zapisuju natrag kad spremite kao DWG, bajt po bajt, ali se **ne prikazuju**: DWG čuva mjesto objekta unutar svojih podataka, a CadCraft ga još ne čita. Povijest kaže koliko ih je sačuvano. Upišite {{cmd:OLELIST}} da vidite što su (vrsta, veličina, je li svaki spremio sliku) i da stavite kopiju slike gdje izaberete: **Postavi** traži broj, donji lijevi kut i širinu, i crta okvir sa slikom u njemu. Ta kopija je okvir koji možete pomicati ili brisati; sam objekt ostaje u crtežu i i dalje se zapisuje kad spremite.
- Objekt koji dolazi iz DXF-a sprema se u DWG samo kao njegov okvir i oznaka; povijest to kaže. Spremite kao DXF 2000 da zadržite sam objekt.
- Slike koje su metadatoteke (što mnogi programi spremaju) se ne crtaju: umjesto njih prikazuju se okvir i oznaka.

## Česte pogreške

| Vidite | Zašto | Rješenje |
|---|---|---|
| Okvir s nazivom datoteke | CadCraft nema datoteku | {{cmd:IMAGE}}, zatim odaberite datoteku |
| "To nije slika" | Odabrani objekt nije slika | Odaberite okvir slike |
