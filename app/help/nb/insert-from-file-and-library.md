---
title: Sett inn fra en fil eller biblioteket
summary: Hent inn en blokk, eller en hel tegning, fra en annen DWG eller DXF, og plasser elementer fra biblioteket, en fil eller et annet bibliotek, med sine kildehenvisninger og oppdateringer.
keywords: sett inn, fil, bibliotek, librarycraft, element, utstyr, blokk fra en annen tegning, wblock, designsenter, kildehenvisning, lisens, oppdatering, mate, item.json
from: f6e4e452
---

## Sett inn en blokk fra en annen tegning

1. Skriv `I` og trykk {{key:Enter}}, eller klikk {{ui:Sett inn}} i gruppen Blokker.
2. Kommandolinjen nederst i vinduet spør `Enter block name or [File/Library]`. Skriv `F` der og trykk {{key:Enter}}.
3. Velg DWG- eller DXF-filen på denne datamaskinen. Den leses her; den åpnes ikke, og ingenting lastes opp.
4. I dialogen {{ui:Sett inn fra}} velger du en blokk fra listen (skriv i {{ui:Filtrer blokker}} for å finne den), eller beholder {{ui:Hele tegningen}}. Klikk {{ui:Sett inn}}.
5. Klikk der den skal, og fyll inn eventuelle attributter den ber om.

Du kan også starte fra panelet {{ui:Blokker}}: skriv `F` i boksen {{ui:Filtrer blokker}} og trykk {{key:Enter}}, eller skriv noe ingen blokk passer til, og klikk {{ui:Fra en fil…}}. `L` og {{ui:Bibliotek…}} åpner biblioteket på samme måte. Før versjon 0.10.1 søkte en bokstav skrevet i {{ui:Filtrer blokker}} bare i denne tegningens blokker, og svarte «Ingen blokk passer til filteret.»

For å ha en tegning med egne blokker for hånden, klikk {{ui:Legg til en tegning}} under {{ui:Biblioteker}} i panelet {{ui:Blokker}}, og velg DWG- eller DXF-filen. Blokkene listes med bilder; klikk en for å plassere den.

Hele tegningen kommer inn som én blokk, oppkalt etter filen. Blokker inni blokken du valgte, kommer også med. Lagene de bruker, legges til i denne tegningen.

Hvis den andre tegningen har andre enheter (for eksempel tommer og millimeter), skalerer CadCraft referansen for å passe og sier det i historikken.

### Når et navn allerede er brukt

Har denne tegningen allerede en blokk med samme navn, spør CadCraft:

- {{ui:Behold eksisterende}} bruker denne tegningens blokk med det navnet.
- {{ui:Gi nytt navn}} henter den nye inn som `Name (2)`.

Hele innsettingen er ett trinn: {{key:Mod+Z}} tar referansen og de kopierte definisjonene bort igjen.

## Åpne biblioteket

Klikk {{ui:Bibliotek…}} i panelet {{ui:Blokker}}, eller {{ui:Bibliotek}} i gruppen Blokker, eller skriv `LIB`. Ved ledeteksten `INSERT` åpner `L` det også.

Biblioteket har fire kilder, som faner:

- {{ui:Bibliotek}}: CadCraft-biblioteket. Søk på navn, produsent eller modell, og filtrer på kategori.
- {{ui:Filer…}}: en elementfil (`item.json`) fra et hvilket som helst bibliotek, eller en tegning, et regneark eller en 3D-modell å lage elementer av: en DWG eller DXF (hver blokk blir et element), en CSV med kolonnene navn og størrelse, eller en glTF- eller OBJ-modell. Ingenting lastes opp.
- {{ui:Standard}}: stålprofiler (som snitt, oppriss eller 3D-staver) og standarddeler som bolter, muttere og lager, laget her fra publiserte tabeller. Se [Plasser stålprofiler og standarddeler](topic:steel-and-standard-parts).
- {{ui:Andre kilder}}: andre biblioteker som svarer på samme måte som Bibliotek. Legg til adressen deres én gang; denne nettleseren husker den.

Hvert kort viser en forhåndsvisning, navnet, produsenten og modellen, lisensen og versjonen. Et element som er trukket tilbake, er merket {{ui:Trukket tilbake}} med årsaken; CadCraft spør før du plasserer et.

## Plasser et element

1. Klikk {{ui:Plasser}} på et kort.
2. Klikk der elementet skal. Skriv `R` først for å snu det, eller `S` for å skalere det.
3. Ved `Enter Item number (CC-ITEM)` trykker du {{key:Enter}} for neste ledige nummer, eller skriver ditt eget.

Elementet blir en blokk som heter `LIB_<name>_v<version>`, tegnet i denne tegningens enheter. Har tegningen ingen enheter, settes elementet inn i millimeter, og historikken sier det. Sett først {{ui:Enheter}} i høyre panel.

Dataene følger med som usynlige attributter: elementets id og versjon, lisens og kildehenvisning, produsent, modell, kategori og størrelser. Se [Blokkattributter](topic:attributes).

## Elementer på ditt språk

Et element kan ha navn og beskrivelse på andre språk. Når det har dem på språket CadCraft er satt til (Innstillinger › Generelt › Språk), bruker kortet og den plasserte blokkens elementnavn dem. Blokken selv beholder et navn laget av elementets eget navn, så en tegning har én blokk per element, uansett hvilket språk som plasserte det.

## Se etter oppdateringer

1. Åpne biblioteket.
2. Klikk {{ui:Se etter oppdateringer}}.

Hvert bibliotekselement i tegningen listes med elementnumrene sine, og om det er oppdatert, har en nyere versjon (og hva som er endret), eller er trukket tilbake. Klikk {{ui:Oppdater}} på en rad, eller {{ui:Oppdater alle}}. Hver referanse flytter seg til den nye versjonens blokk og beholder sitt elementnummer, antall, plass, vinkel og lag. {{key:Mod+Z}} angrer en oppdatering.

## Krediter det du brukte

Klikk {{ui:Bibliotekets kildehenvisninger}}. Hvert element listes med sin kildehenvisningslinje og lisens.

- {{ui:Kopier kildehenvisning}} kopierer ett elements linje; {{ui:Kopier alle}} kopierer hver linje.
- {{ui:Last ned CSV}} lagrer listen med elementnumrene, produsentene, modellene, lisensene og kildehenvisningene. Den åpnes i et hvilket som helst regneark.

Lisenser som CC BY ber deg om å kreditere forfatteren der du bruker verket. Legg linjene på tegningen, i spesifikasjonen eller i prosjektnotatene.

## Symboler og ressurser

Biblioteket har tre typer elementer: Symboler (tegnekonvensjoner, 2D), Typer (hva et element er laget av) og Ressurser (fysiske objekter). I fanen {{ui:Bibliotek}} viser listen {{ui:Type element}} Symboler og ressurser sammen, bare Symboler, eller bare Ressurser. Typer er det et BimCraft-prosjekt er bygget av, så CadCraft lister dem ikke.

## Logg inn i biblioteket

Klikk {{ui:Logg inn i biblioteket}}. Et lite vindu åpnes på nettstedet. Når du er logget inn der, kan CadCraft vise teamets elementer og registrere det du plasserer, så du hører det når et element du brukte endres. Innloggingen varer for denne nettleserfanen. Tilbakekall den når som helst fra kontoens sikkerhetsside.

## Behold dine egne objekter i Mine objekter

{{ui:Mine objekter}} er en privat liste i biblioteket som bare du kan se. Den er ikke i det offentlige biblioteket, ikke i søket, og ikke vist for teamet ditt. Den følger kontoen din til hver datamaskin der du logger inn i biblioteket.

1. Klikk {{ui:Filer…}} i Bibliotek-panelet og les en fil.
2. På elementet du vil ha igjen, klikk {{ui:Behold i mine objekter}}.
3. Senere klikker du {{ui:Mine objekter}} og deretter {{ui:Plasser}}. Det plasseres som et hvilket som helst bibliotekselement, og {{ui:Se etter oppdateringer}} dekker det.
4. {{ui:Fjern fra mine objekter}} tar det ut av listen. Kopier som allerede er plassert i tegninger, blir.

Du må være logget inn i biblioteket. Å lese en fil laster ikke opp noe; å beholde et element sender bare det ene elementet til kontoen din.

:::note
Mine objekter testes fortsatt, og er kanskje ikke åpent for kontoen din ennå. Sier det «My objects is not open for this account yet», kan du likevel plassere elementer fra dine egne filer med {{ui:Filer…}}.
:::

## Vanlige feil

- **«Making items from IFC types is in BimCraft.»** IFC- og familiefiler leses i BimCraft-appen. Lag elementet der, eller i biblioteket, og bruk deretter dets `item.json` her.
- **«The library could not be reached.»** Du er frakoblet, eller biblioteket er nede. Elementer som allerede er i tegningen, påvirkes ikke.
- **Et element er langt for stort eller for lite.** Tegningens enheter er feil, eller ikke satt. Angre, sett {{ui:Enheter}}, og plasser det på nytt.
