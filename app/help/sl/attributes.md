---
title: Atributi blokov
summary: Oglejte si in spremenite vrednosti, ki jih nosi sklic na blok, na primer številko elementa ali proizvajalca, in jih ohranite, ko shranite kopijo.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, glava risbe, urejanje na mestu, urejevalnik atributov, attdef, določi atribut, bedit, urejevalnik blokov, bclose, atribut, atributi, attrib, oznaka, številka elementa, vrednost, nevidno, konstantno, blok, lastnosti, seznam, oznaka opreme
from: 34d307c7
---

## Kaj so atributi

Atribut je poimenovana vrednost, ki potuje s sklicem na blok: številka elementa oznake opreme, ime oznake sobe, požarna odpornost vrat. Definicija bloka pove, kateri atributi jih ima (vsak ima **oznako**, **poziv**, **privzeto** vrednost ter mesto, velikost in kot svojega besedila). Vsak sklic na blok nosi svoje vrednosti.

Nekateri atributi so **nevidni**: hranijo podatke, npr. proizvajalca ali številko modela, vendar se nikoli ne narišejo. Nekateri so **konstantni**: za vsak sklic so enaki, določeni z blokom.

## Od kod prihajajo atributi

- Bloki v datotekah DWG in DXF, ki jih odprete, ohranijo svoje atribute z vrednostmi vsakega sklica.
- Bloki, ki jih uvozite z {{cmd:INSERT}} in opcijo {{ui:File}}, ohranijo svoje. Glejte [Vstavljanje iz datoteke ali knjižnice](topic:insert-from-file-and-library).

- Elementi knjižnice pridejo kot bloki z atributi: vidna številka elementa in podatki elementa, nevidni.
- Bloke, ki jih naredite sami: najprej določite atribute z {{cmd:ATTDEF}} (spodaj), nato jih izberite skupaj z drugimi predmeti, ko naredite blok.

## Določitev atributov za lastne bloke

1. Narišite črte bloka, na primer oznako sobe.
2. Izberite {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}} ali vnesite `ATT` in pritisnite {{key:Enter}}.
3. Zgodovina prikaže načine (`Invisible=No Constant=No Preset=No`). Vnesite `I`, `C` ali `P`, da preklopite enega, in pritisnite {{key:Enter}}, ko so pravilni. Nevidne vrednosti se ohranijo, vendar se ne narišejo; konstantna ima isto vrednost pri vsakem sklicu; prednastavljena se ne sprašuje, ko vstavite blok.
4. Vnesite oznako (npr. `ROOM_NO`: velike črke, brez presledkov), poziv (`Številka sobe`) in privzeto vrednost (`101`).
5. Kliknite, kam gre vrednost, in podajte višino ter zasuk. Oznaka se prikaže v risbi.
6. Naredite blok z {{cmd:BLOCK}} in pri tem izberite črte in definicije atributov skupaj. Sklic, ki ju nadomesti, dobi privzete vrednosti; vsak nov {{cmd:INSERT}} jih zahteva.

Izbrana definicija atributa v {{ui:Properties}} prikaže {{ui:Tag}}, {{ui:Prompt}}, {{ui:Default}} in načine.

## Spremeni blok: urejevalnik blokov

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}} ({{cmd:BEDIT}}, `BE`) odpre blok samostojno: vnesite njegovo ime (ali najprej izberite sklic). Vrstica na vrhu pove, kateri blok urejate. Narišite, izbrišite in spremenite njegove predmete z običajnimi ukazi ter dodajte ali spremenite definicije atributov. Nato kliknite {{ui:Save block}} (ali vnesite {{cmd:BCLOSE}} in `S`): vsak sklic pokaže spremembo, en {{key:Mod+Z}} pa razveljavi vse. {{ui:Discard changes}} ({{cmd:BCLOSE}}, `D`) pusti blok, kakršen je bil.

Ko dodate, odstranite ali spremenite definicije atributov, shranjevanje tudi uskladi vse sklice: vrednosti, ki ste jih vnesli, se ohranijo, nov atribut dobi privzeto vrednost, odstranjen izgine, vsak atribut pa se vrne tja, kamor ga postavi definicija. Zgodovina pove, koliko sklicev je bilo posodobljenih.

## Uredite glavo risbe na njenem mestu (REFEDIT)

Glava risbe na listu pogosto stoji znotraj bloka. Če želite spremeniti njene črte ali besedila, ne da bi zapustili list:

1. Izberite glavo risbe, nato {{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}} (ali vnesite {{cmd:REFEDIT}}).
2. Njena vsebina postane običajni predmeti na istem mestu; vse drugo je zbledeno in ni mogoče to spremeniti.
3. Spremenite, izbrišite ali narišite: novi predmeti postanejo del bloka.
4. Kliknite {{ui:Save the block}} v vrstici na vrhu (ali vnesite {{cmd:REFCLOSE}} in `S`). Vsak sklic pokaže spremembo, en {{key:Mod+Z}} pa razveljavi celotno urejanje. {{ui:Discard}} pusti blok, kakršen je bil.

Povezane risbe, dinamičnega bloka ali sklica, raztegnjenega različno po širini in višini, ni mogoče urejati na mestu: uporabite {{cmd:BEDIT}} (ali odprite povezano risbo).

:::note
Shranite ali opustite v urejevalniku blokov, preden shranite risbo: datoteka, shranjena med odprtim urejevalnikom, ima blok takšen, kot je bil pred urejanjem.
:::

## Izpolnite jih, ko postavljate blok

1. Vnesite `I` in pritisnite {{key:Enter}}, vnesite ime bloka in pritisnite {{key:Enter}}.
2. Kliknite, kam gre.
3. CadCraft sprašuje vsako vrednost, npr. `Vnesite številko elementa (ITEM) <>`. Vnesite vrednost in pritisnite {{key:Enter}} ali pritisnite {{key:Enter}}, da obdržite privzeto, prikazano v kotnih oklepajih.

Vrednosti, ki jih blok označi kot prednastavljene, in konstantne se ne sprašujejo. Dobijo svojo privzeto vrednost.

## Oglejte si in spremenite vrednosti

1. Kliknite sklic bloka.
2. V desnem podoknu, pod {{ui:Attributes}}, ima vsaka oznaka svojo vrednost. Nevidne pišejo `hidden`.
3. Kliknite vrednost, vnesite novo in pritisnite {{key:Enter}}.

Risba takoj pokaže novo vrednost. Vsaka sprememba je en korak: {{key:Mod+Z}} jo razveljavi.

**Urejevalnik atributov.** Dvokliknite sklic z atributi (ali {{cmd:EATTEDIT}}): dialog {{ui:Edit attributes}} našteje vsako oznako s pozivom in vrednostjo. Vnesite nove vrednosti; kliknite vrstico, da spremenite {{ui:Height}}, {{ui:Rotation}}, {{ui:Width factor}}, {{ui:Justify}}, {{ui:Layer}}, {{ui:Color}} in {{ui:Invisible}} tega atributa, samo za ta sklic. {{ui:Apply}} pusti dialog odprt; {{ui:OK}} uporabi in zapre. Vsak {{ui:Apply}} ali {{ui:OK}} je en korak razveljavitve.

**V ukazni vrstici** {{cmd:ATTEDIT}} zaporedoma sprašuje vsako vrednost: vnesite novo ali pritisnite {{key:Enter}}, da ohranite staro.

## Spremenite definicije atributov (BATTMAN, ATTSYNC)

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}} ({{cmd:BATTMAN}}) našteje atribute bloka: spremenite oznako, poziv ali privzeto vrednost, označite {{ui:Invisible}}, {{ui:Constant}} ali {{ui:Preset}} ter jih premikajte gor ali dol (to je vrstni red, po katerem se vrednosti sprašujejo). Z označenim {{ui:Update the references (values kept)}} {{ui:Apply}} tudi uskladi vsak sklic; preimenovana oznaka ohrani svoje vrednosti. Vsak {{ui:Apply}} je en korak razveljavitve.

{{cmd:ATTSYNC}} uskladi sklice z definicijami njihovih blokov ročno: `S` izbere sklic, `N` poimenuje blok, `A` pa naredi vse bloke. Vrednosti se ohranijo.

Vrednosti lastnih polj elementa knjižnice (njegov ID, različica, licenca in navedba avtorja) so prikazane, vendar jih ni mogoče urejati, da preverjanje posodobitev še vedno deluje. Njegovo številko elementa in količino pa lahko spremenite vi.

## Seznam

Izberite sklice in vnesite `LI` (za {{cmd:LIST}}). Zgodovina prikaže vsak atribut kot `TAG = value`, z `(invisible)` ali `(constant)`, kjer to velja.

## Premikanje, zasukanje in razstavljanje

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} in {{cmd:MIRROR}} ohranijo vrednosti; besedilo se premakne z blokom in ostane berljivo.
- {{cmd:EXPLODE}} vidne atribute spremeni v navadno besedilo z njihovimi vrednostmi. Nevidni izginejo.

## Shranjevanje

Shranjena datoteka DWG in shranjena datoteka DXF ohranita vsak atribut: definicije vsakega bloka (tudi nevidne, konstantne in prednastavljene) in vrednosti vsakega sklica. Drugi CAD programi jih berejo kot običajne atribute bloka.

V DXF R12 se vrednost, daljša od 255 znakov, skrajša na 255, zgodovina pa to pove.

## Pogoste napake

- **Vrednost ni prikazana v risbi.** Je nevidna ali prazna. Nevidne vrednosti se še vedno prikažejo v desnem podoknu.
- **Vnesena vrednost je šla v ukazno vrstico.** Najprej kliknite v polje za vrednost v desnem podoknu.
