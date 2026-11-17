---
title: Slike u crtežu
summary: Postavite PNG ili JPEG sliku, isijecite je na pravougaonik ili poligon, prikažite slike koje DWG koristi, i ispišite ih oštro.
keywords: pastearea, parea, kopiraj područje, kopirano područje, markupcraft, stvarna veličina, prava veličina, preklop, ole, ole2frame, ugrađeni objekat, zalijepi sliku, zalijepi snimak ekrana, ctrl+v, slika iz međuspremnika, snimak ekrana, slika, imageattach, iat, image, imageclip, isječak, png, jpeg, jpg, logo, fotografija, rasterska, imagedef, xref, štampanje, pdf, rezolucija
from: 4025ac97
---

## Šta ćete napraviti

Logo firme postavljen u naslovni blok, isječen na dio koji želite, i PDF u kojem se slika štampa u vlastitoj rezoluciji.

## Postavite sliku

1. Upiši {{cmd:IMAGEATTACH}} (ili `IAT`) i pritisni {{key:Enter}}. Izaberite PNG ili JPEG datoteku.
2. `Specify the lower-left corner`: kliknite, ili upišite tačku.
3. `Specify its width`: širina u jedinicama crteža. {{key:Enter}} zadržava ponuđenu širinu: jednu jedinicu po pikselu, ili širinu koju ste zadali ovoj datoteci prošli put (upit kaže koju).
4. `Specify its rotation angle`: {{key:Enter}} za bez rotacije.

Slika je jedan objekat: označite je po okviru, pa je pomjerajte, kopirajte, rotirajte, razmjerite ili brišite kao svaki blok.

:::note
Datoteka slike ostaje uz crtež dok je crtež otvoren. Snimljeni DWG imenuje datoteku, kao što to rade drugi programi; ne čuva piksele. Držite sliku uz crtež.
:::

## Zalijepite snimak ekrana ili kopiranu sliku

1. Kopirajte sliku (snimak ekrana pomoću {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=vaš alat za snimanje ekrana}}, ili Kopiraj sliku u drugom programu ili pregledaču).
2. Pokažite mjesto na crtežu gdje treba da ide i pritisnite {{key:Mod+V}}.

Donji lijevi ugao slike pada na pokazivač (ili u sredinu prikaza), širine 40 % onoga što vidite; pomjerite, razmjerite i isijecite je kao svaku sliku. Ime je ime crteža s `-picture-1.png` (zatim `-2`, …), a historija to kaže.
{{ui:Uređivanje}} › {{ui:Više}} › {{ui:Zalijepi sliku}} radi isto iz menija (pregledač može prvo pitati).

DWG čuva samo ime datoteke slike, pa snimanje crteža snima i sliku kao zasebnu datoteku. Držite ih u istoj mapi: crtež prikazuje sliku odatle. U pregledaču je to drugo preuzimanje, a historija to kaže. Ako na međuspremniku nema ništa osim CadCraft objekata, {{key:Mod+V}} ih zalijepi, kao i prije.

## Zalijepite područje kopirano u MarkupCraftu

{{ui:Kopiraj područje}} u MarkupCraftu kopira dio lista kao sliku koja zna koliko je velika. CadCraft je zalijepi u toj veličini.

1. U MarkupCraftu kopirajte područje (pravougaonik, krug ili slobodan oblik; {{ui:Kopiraj kao preklop}} ako želite da vidite svoj crtež kroz njega).
2. U CadCraftu pritisnite {{key:Mod+V}}, ili upišite {{cmd:PASTEAREA}} (ili `PAREA`), ili izaberite {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Zalijepi kopirano područje}}.
3. `Specify the lower-left corner of the copied area`: kliknite, ili upišite tačku. Okvir veličine područja prati pokazivač.

Kolika veličina se dobija:

- **List je imao razmjeru crteža:** u stvarnoj veličini, u jedinicama crteža (detalj stepenica 1:50 od 2 m je dug 2 m u crtežu u metrima, a 78.74 u crtežu u inčima). Ništa više se ne pita.
- **List nije imao razmjeru:** CadCraft kaže njegovu veličinu na papiru i pita za razmjeru: upišite `100` za list 1:100, pritisnite {{key:Enter}} za veličinu papira, ili upišite `P`, kliknite dvije tačke na zalijepljenoj slici i upišite koliko su zaista udaljene (kao što to radi {{cmd:SCANSCALE}}). Donji lijevi ugao ostaje tamo gdje ste ga stavili.

Crtež bez jedinica uzima milimetre, kao i PDF podloga. Preklop zadržava papir prozirnim i počinje tako izbljeđen kao što je kopiran; izvan kruga ili slobodnog oblika također je proziran. Zalijepljeno područje je slika kao i svaka druga: pomjerite, rotirajte, razmjerite, isijecite ili obrišite je, a cijelo lijepljenje je jedan korak poništavanja. Snimljeno kao DWG, to je IMAGE sa svojim izbljeđivanjem i prozirnošću.

{{key:Mod+V}} zalijepi područje kad je slika na međuspremniku područja, ili kad je područje kopirano nakon bilo čega što ste kopirali u CadCraftu (i u zadnjih 6 sati). Inače se lijepi kao prije. {{cmd:PASTEAREA}} zalijepi zadnje kopirano područje u bilo koje vrijeme.

## Prikažite slike koje DWG koristi

DWG čuva samo gdje su njegove slike bile, pa CadCraft prikazuje svaku kao okvir s imenom datoteke.

1. Upiši {{cmd:IMAGE}} (ili `IM`). Komandna linija navodi svaku datoteku slike i da li se prikazuje.
2. Izaberite datoteke (više odjednom). Datoteka čije ime sadrži ono koje crtež navodi računa se također, jer izvozi često dodaju prefiks projekta.

## Isijecite sliku

1. Upiši {{cmd:IMAGECLIP}} (ili `ICL`) i izaberite sliku.
2. Izaberite `R` i kliknite dva ugla, ili `P` i kliknite tačke poligona, pa {{key:Enter}}. `D` uklanja isječak.

## Štampanje slika

Slike idu u PDF kao slike, u svojoj rezoluciji i ispod linija. U dijalogu {{ui:Štampaj u PDF}}, {{ui:Slike}} mogu ograničiti na 600, 300 ili 150 dpi da datoteka bude manja. JPEG ide onako kako jeste.

## Šta se gdje čuva

| Format | Slike |
|---|---|
| DWG (svaka verzija) | Kao slike (IMAGE), sa svojim isječkom |
| DXF | Kao njihovi okviri s imenom datoteke; snimanje to kaže |

## Objekti iz drugih programa (OLE)

Crtež može imati objekte koje je napravio drugi program, kao sliku iz programa za crtanje ili opseg iz tabele (OLE objekti). CadCraft ih ne pokreće niti uređuje, i ne može umetati nove. Šta radi:

- **U DXF-u**, OLE objekat se otvara kao okvir. Ako je objekat sačuvao svoju sliku i ta slika je bitmapa, slika se crta unutar okvira; inače okvir nosi oznaku s tipom objekta, kao "Microsoft Excel Worksheet (OLE)". Okvir možete pomjerati, kopirati i brisati kao blok. {{cmd:SAVEAS}} u DXF 2000 ga zapisuje ponovo kao OLE objekat, s nepromijenjenim podacima.
- **U DWG-u**, objekti se čuvaju i zapisuju natrag kad snimite kao DWG, bajt po bajt, ali se **ne prikazuju**: DWG čuva mjesto objekta unutar njegovih vlastitih podataka, a CadCraft ga još ne čita. Historija kaže koliko ih je sačuvano. Upiši {{cmd:OLELIST}} da vidite šta su (tip, veličina, da li je svaki sačuvao sliku) i da stavite kopiju slike gdje izaberete: **Postavi** traži broj, donji lijevi ugao i širinu, i crta okvir sa slikom u njemu. Ta kopija je okvir koji možete pomjerati ili brisati; sam objekat ostaje u crtežu i i dalje se zapisuje natrag kad snimite.
- Objekat koji je došao iz DXF-a snima se u DWG samo kao njegov okvir i oznaka; historija to kaže. Snimite kao DXF 2000 da zadržite sam objekat.
- Slike koje su metafajlovi (što mnogi programi snimaju) se ne crtaju: umjesto toga prikazuju se okvir i oznaka.

## Česte greške

| Vidite | Zašto | Popravka |
|---|---|---|
| Okvir s imenom datoteke | CadCraft nema datoteku | {{cmd:IMAGE}}, zatim izaberite datoteku |
| "That is not a picture" | Izabrani objekat nije slika | Izaberite okvir slike |
