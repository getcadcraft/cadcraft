---
title: Sett inn fra en fil eller biblioteket
summary: Hent inn en blokk, eller en hel tegning, fra en annen DWG eller DXF, og plasser elementer fra biblioteket, en fil eller et annet bibliotek, med kildehenvisninger og oppdateringer.
keywords: sett inn, fil, bibliotek, librarycraft, element, utstyr, blokk fra en annen tegning, wblock, designsenter, kildehenvisning, attribusjon, lisens, oppdatering, kilde, item.json
from: 316188d2
---

## Sett inn en blokk fra en annen tegning

1. Skriv `I` og trykk {{key:Enter}}, eller klikk {{ui:Sett inn}} i Blokker-gruppen.
2. Ved `Angi blokknavn eller [Fil/Bibliotek (L)]` skriver du `F` og trykker {{key:Enter}}.
3. Velg DWG- eller DXF-filen på denne datamaskinen. Den leses her; den åpnes ikke, og ingenting lastes opp.
4. I dialogboksen {{ui:Sett inn fra}} velger du en blokk fra listen (skriv i {{ui:Filtrer blokker}} for å finne den), eller beholder {{ui:Hele tegningen}}. Klikk {{ui:Sett inn}}.
5. Klikk der den skal stå, og fyll inn eventuelle attributter den ber om.

Hele tegningen kommer inn som én blokk, oppkalt etter filen. Blokker inne i blokken du valgte, kommer også med. Layerne de bruker, legges til i denne tegningen.

Hvis den andre tegningen har andre enheter (tommer og millimeter, for eksempel), skalerer CadCraft referansen for å passe og sier det i historikken.

### Når et navn allerede er brukt

Har denne tegningen allerede en blokk med samme navn, spør CadCraft:

- {{ui:Behold eksisterende}} bruker denne tegningens blokk med det navnet.
- {{ui:Gi nytt navn}} henter inn den nye som `Navn (2)`.

Hele innsettingen er ett steg: {{key:Mod+Z}} fjerner referansen og de kopierte definisjonene igjen.

## Åpne biblioteket

Klikk {{ui:Bibliotek…}} i {{ui:Blokker}}-panelet, eller {{ui:Bibliotek}} i Blokker-gruppen, eller skriv `LIB`. Ved ledeteksten `INSERT` åpner `L` det også.

Biblioteket har fire kilder, som faner:

- {{ui:Bibliotek}}: CadCraft-biblioteket. Søk etter navn, produsent eller modell, og filtrer etter kategori.
- {{ui:Filer…}}: en elementfil (`item.json`) fra et hvilket som helst bibliotek, eller en tegning, et regneark eller en 3D-modell å lage elementer av: en DWG eller DXF (hver blokk blir et element), en CSV med kolonnene navn og størrelse, eller en glTF- eller OBJ-modell. Ingenting lastes opp.
- {{ui:Standard}}: stålprofiler (som snitt, fasader eller 3D-staver) og standarddeler som bolter, muttere og lagre, laget her fra publiserte tabeller. Se [Plasser stålprofiler og standarddeler](topic:steel-and-standard-parts).
- {{ui:Andre kilder}}: andre biblioteker som svarer på samme måte som Bibliotek. Legg til adressen deres én gang; denne nettleseren husker den.

Hvert kort viser en forhåndsvisning, navnet, produsent og modell, lisensen og versjonen. Et tilbaketrukket element er merket {{ui:Trukket tilbake}} med årsaken; CadCraft spør før du plasserer ett.

## Plasser et element

1. Klikk {{ui:Plasser}} på et kort.
2. Klikk der elementet skal stå. Skriv `R` først for å dreie det, eller `S` for å skalere det.
3. Ved `Angi elementnummer (CC-ITEM)` trykker du {{key:Enter}} for neste ledige nummer, eller skriver ditt eget.

Elementet blir en blokk kalt `LIB_<navn>_v<versjon>`, tegnet i denne tegningens enheter. Har tegningen ingen enheter, settes elementet inn i millimeter, og historikken sier det; still inn {{ui:Enheter}} i høyre panel først.

Dataene følger med som usynlige attributter: elementets id og versjon, lisens og kildehenvisning, produsent, modell, kategori og størrelser. Se [Blokkattributter](topic:attributes).

## Elementer på ditt språk

Et element kan ha navn og beskrivelse på andre språk. Når det har dem på språket CadCraft er satt til (Innstillinger › Generelt › Språk), bruker kortet og navnet på den plasserte blokken dem. Selve blokken beholder et navn laget av elementets eget navn, så en tegning har én blokk per element, uansett hvilket språk som plasserte det.

## Se etter oppdateringer

1. Åpne biblioteket.
2. Klikk {{ui:Se etter oppdateringer}}.

Hvert bibliotekselement i tegningen listes med elementnumrene sine, og om det er oppdatert, har en nyere versjon (og hva som er endret), eller er trukket tilbake. Klikk {{ui:Oppdater}} på en rad, eller {{ui:Oppdater alle}}. Hver referanse flyttes til den nye versjonens blokk og beholder elementnummer, antall, plassering, vinkel og layer. {{key:Mod+Z}} angrer en oppdatering.

## Krediter det du brukte

Klikk {{ui:Bibliotekets kildehenvisninger}}. Hvert element listes med sin kildelinje og lisens.

- {{ui:Kopier kildehenvisning}} kopierer ett elements linje; {{ui:Kopier alle}} kopierer alle linjene.
- {{ui:Last ned CSV}} lagrer listen med elementnumrene, produsentene, modellene, lisensene og kildehenvisningene. Den åpnes i et hvilket som helst regneark.

Lisenser som CC BY ber deg kreditere opphavsmannen der du bruker verket. Legg linjene på tegningen, i spesifikasjonen eller i prosjektnotatene.

## Symboler og ressurser

Biblioteket har tre slags elementer: Symboler (tegnekonvensjoner, 2D), Typer (det et element er laget av) og Ressurser (fysiske objekter). I fanen {{ui:Bibliotek}} viser listen {{ui:Type element}} symboler og ressurser sammen, bare symboler, eller bare ressurser. Typer er det et BimCraft-prosjekt er bygget av, så CadCraft viser dem ikke.

## Logg inn i biblioteket

Klikk {{ui:Logg inn i biblioteket}}. Et lite vindu åpnes på nettstedet; når du er innlogget der, kan CadCraft vise teamets elementer og registrere det du plasserer, slik at du får vite når et element du brukte endres. Innloggingen gjelder for denne nettleserfanen. Trekk den tilbake når som helst fra sikkerhetssiden for kontoen din.

## Vanlige feil

- **«Å lage elementer fra IFC-typer gjøres i BimCraft.»** IFC- og familiefiler leses i BimCraft-appen. Lag elementet der eller i biblioteket, og bruk deretter dets `item.json` her.
- **«Biblioteket kunne ikke nås.»** Du er frakoblet, eller biblioteket er nede. Elementer som allerede er i tegningen, påvirkes ikke.
- **Et element er langt for stort eller for lite.** Tegningens enheter er feil eller ikke satt. Angre, sett {{ui:Enheter}}, og plasser elementet på nytt.
