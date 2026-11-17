---
title: Blokkattributter
summary: Se og endre verdiene en blokkreferanse bærer, for eksempel et artikkelnummer eller en produsent, og behold dem når du lagrer en kopi.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, tittelblokk, rediger på stedet, attributtredigerer, attdef, definer attributt, bedit, blokkredigerer, bclose, attributt, attributter, attrib, etikett, artikkelnummer, verdi, usynlig, konstant, blokk, egenskaper, liste, utstyrsetikett
from: 34d307c7
---

## Hva attributter er

Et attributt er en navngitt verdi som følger med en blokkreferanse: et utstyrs artikkelnummer, et romnavn, en dørs brannklasse. Blokkens definisjon sier hvilke attributter den har. Hvert har en **etikett**, en **ledetekst**, en **standardverdi** og et sted, en størrelse og en vinkel for teksten. Hver referanse til blokken bærer sine egne verdier.

Noen attributter er **usynlige**: de holder data, for eksempel en produsent eller et modellnummer, men de tegnes aldri. Noen er **konstante**: de er like for hver referanse, fastsatt av blokken.

## Hvor attributter kommer fra

- Blokker i DWG- og DXF-filer du åpner, beholder sine attributter, med hver referanses verdier.
- Blokker du henter inn med {{cmd:INSERT}} og alternativet {{ui:Fil}}, beholder sine. Se [Sett inn fra en fil eller biblioteket](topic:insert-from-file-and-library).
- Bibliotekselementer kommer inn som blokker med attributter: et synlig artikkelnummer og elementets data, usynlige.

- Blokker du lager selv: definer attributter med {{cmd:ATTDEF}} først (nedenfor), og velg dem sammen med de andre objektene når du lager blokken.

## Definer attributter for dine egne blokker

1. Tegn blokkens linjer, for eksempel en rometikett.
2. Velg {{ui:Blokker}} › {{ui:Mer}} › {{ui:Definer attributt}}, eller skriv `ATT` og trykk {{key:Enter}}.
3. Historikken viser modusene (`Invisible=No Constant=No Preset=No`). Skriv `I`, `C` eller `P` for å bytte én av dem, og trykk {{key:Enter}} når de stemmer. Usynlige verdier beholdes, men tegnes ikke. En konstant verdi er lik i hver referanse. En forhåndsvalgt verdi spørres det ikke etter når du setter inn blokken.
4. Skriv etiketten (for eksempel `ROOM_NO`: store bokstaver, ingen mellomrom), ledeteksten (`Romnummer`) og en standardverdi (`101`).
5. Klikk der verdien skal stå, og oppgi høyden og rotasjonen. Etiketten vises på tegningen.
6. Lag blokken med {{cmd:BLOCK}}, og velg linjene og attributtdefinisjonene sammen. Referansen som erstatter dem, får standardverdiene. Hver ny {{cmd:INSERT}} spør etter dem.

En valgt attributtdefinisjon viser {{ui:Etikett}}, {{ui:Ledetekst}}, {{ui:Standard}} og modusene i {{ui:Egenskaper}}.

## Endre en blokk: blokkredigereren

{{ui:Blokker}} › {{ui:Mer}} › {{ui:Rediger blokk}} ({{cmd:BEDIT}}, `BE`) åpner en blokk alene. Skriv navnet (eller velg en referanse først). En linje øverst sier hvilken blokk du redigerer. Tegn, slett og endre objektene med de vanlige kommandoene, og legg til eller endre attributtdefinisjoner. Klikk deretter {{ui:Lagre blokk}} (eller skriv {{cmd:BCLOSE}} og `S`): hver referanse viser endringen, og ett {{key:Mod+Z}} angrer alt. {{ui:Forkast endringer}} ({{cmd:BCLOSE}}, `D`) lar blokken være slik den var.

Når du la til, fjernet eller endret attributtdefinisjoner, bringer lagring også hver referanse på linje. Verdier du skrev, beholdes. Et nytt attributt får sin standard, og et fjernet forsvinner. Hvert attributt går tilbake dit definisjonen plasserer det. Historikken sier hvor mange referanser som ble oppdatert.

## Rediger en tittelblokk der den står (REFEDIT)

En tittelblokk på et ark ligger ofte inne i en blokk. For å endre linjene eller tekstene uten å forlate arket:

1. Velg tittelblokken, og velg deretter {{ui:Blokker}} › {{ui:Mer}} › {{ui:Rediger på stedet}} (eller skriv {{cmd:REFEDIT}}).
2. Innholdet blir vanlige objekter der de står. Alt annet blekes og kan ikke endres.
3. Endre, slett eller tegn. Nye objekter blir en del av blokken.
4. Klikk {{ui:Lagre blokken}} i linjen øverst (eller skriv {{cmd:REFCLOSE}} og `S`). Hver referanse viser endringen, og ett {{key:Mod+Z}} angrer hele redigeringen. {{ui:Forkast}} lar blokken være slik den var.

En koblet tegning, en dynamisk blokk, eller en referanse som er skalert ulikt på tvers og opp, kan ikke redigeres på stedet. Bruk {{cmd:BEDIT}} (eller åpne den koblede tegningen).

:::note
Lagre eller forkast i blokkredigereren før du lagrer tegningen. En fil som lagres mens redigereren er åpen, har blokken slik den var før.
:::

## Fyll dem ut når du plasserer en blokk

1. Skriv `I` og trykk {{key:Enter}}. Skriv blokkens navn og trykk {{key:Enter}}.
2. Klikk der blokken skal stå.
3. CadCraft spør etter hver verdi, for eksempel `Angi artikkelnummer (ITEM) <>`. Skriv verdien og trykk {{key:Enter}}, eller trykk {{key:Enter}} for å beholde standarden som vises i vinkelparentesene.

Verdier blokken markerer som forhåndsvalgte, og konstante verdier, spørres det ikke etter. De får sin standard.

## Se og endre verdiene

1. Klikk en blokkreferanse.
2. I høyre panel, under {{ui:Attributter}}, har hver etikett sin verdi. Usynlige sier `skjult`.
3. Klikk en verdi, skriv den nye og trykk {{key:Enter}}.

Tegningen viser den nye verdien med en gang. Hver endring er ett steg: {{key:Mod+Z}} angrer den.

**Attributtredigereren.** Dobbeltklikk en referanse med attributter (eller bruk {{cmd:EATTEDIT}}). Dialogen {{ui:Rediger attributter}} lister hver etikett med ledeteksten og verdien. Skriv nye verdier. Klikk en rad for å endre attributtets {{ui:Høyde}}, {{ui:Rotasjon}}, {{ui:Breddefaktor}}, {{ui:Justering}}, {{ui:Layer}}, {{ui:Farge}} og {{ui:Usynlig}} for denne referansen alene. {{ui:Bruk}} holder dialogen åpen. {{ui:OK}} bruker endringene og lukker. Hver {{ui:Bruk}} eller {{ui:OK}} er ett steg å angre.

**På kommandolinjen** spør {{cmd:ATTEDIT}} etter hver verdi etter tur. Skriv en ny, eller trykk {{key:Enter}} for å beholde den.

## Endre attributtdefinisjonene (BATTMAN, ATTSYNC)

{{ui:Blokker}} › {{ui:Mer}} › {{ui:Attributtbehandler}} ({{cmd:BATTMAN}}) lister en blokks attributter. Endre en etikett, ledetekst eller standard, kryss av {{ui:Usynlig}}, {{ui:Konstant}} eller {{ui:Forhåndsvalgt}}, og flytt dem opp eller ned (rekkefølgen verdiene spørres i). Med {{ui:Oppdater referansene (verdiene beholdes)}} avkrysset bringer {{ui:Bruk}} også hver referanse på linje. En omdøpt etikett beholder sine verdier. Hver {{ui:Bruk}} er ett steg å angre.

{{cmd:ATTSYNC}} bringer referanser på linje med sine blokkers definisjoner for hånd: `S` velger en referanse, `N` navngir en blokk, og `A` gjør hver blokk. Verdiene beholdes.

Verdiene i et bibliotekselements egne felt (id, versjon, lisens og kildehenvisning) vises, men kan ikke endres. Da fungerer sjekk for oppdateringer fortsatt. Artikkelnummeret og antallet er dine å endre.

## List dem opp

Velg referanser og skriv `LI` (for {{cmd:LIST}}). Historikken viser hvert attributt som `TAG = verdi`, med `(usynlig)` eller `(konstant)` der det gjelder.

## Flytte, dreie og sprenge

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} og {{cmd:MIRROR}} beholder verdiene. Teksten flytter seg med blokken og forblir lesbar.
- {{cmd:EXPLODE}} gjør de synlige attributtene om til vanlig tekst med sine verdier. De usynlige forsvinner.

## Lagring

En lagret DWG og en lagret DXF beholder begge hvert attributt: hver blokks definisjoner (også de usynlige, konstante og forhåndsvalgte) og hver referanses verdier. Andre CAD-programmer leser dem som vanlige blokkattributter.

I en DXF R12 kuttes en verdi som er lengre enn 255 tegn, til 255. Historikken sier det.

## Vanlige feil

- **En verdi vises ikke på tegningen.** Den er usynlig, eller tom. Usynlige verdier vises fortsatt i høyre panel.
- **Verdien jeg skrev, gikk til kommandolinjen.** Klikk først i verdiboksen i høyre panel.
