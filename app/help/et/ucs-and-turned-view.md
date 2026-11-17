---
title: Pööra vaadet ja kasuta oma koordinaate (UCS)
summary: Pööra vaadet 90° või mis tahes nurga all, ilma et midagi joonisel liiguks, ja määra kasutaja koordinaatsüsteem (UCS), et punktid, ortho, polaarne jälgimine, ruudustik ja uus tekst järgiksid hoone enda telgi.
keywords: ucs, kasutaja koordinaatsüsteem, plaan, pööra vaadet, vaate pööramine, vaate keeramine, ucs z, ucs 3point, ucs object, ucs world, nimega ucs, ucsfollow, turnleft, turnright, turnworld, nurga all hoone, pööratud ruudustik
from: 6f152c65
---

## Mida õpid

Kuidas vaadata joonist pööratult, nii et nurga all olev hoone on ekraanil ristiasendis, ja kuidas sisestada punkte mööda selle enda telgi. Midagi joonisel ei liigu, kui seda teed: objektid säilitavad oma koordinaadid, pööre ei ole muudatus ja joonist ei märgita muudetuks.

## Pööra vaadet veerand ringi

1. Klõpsa {{ui:Vaade}} › {{ui:Veel}} › {{ui:Pööra vaadet 90° vasakule}} või {{ui:Pööra vaadet 90° paremale}}.

Joonis pöördub ekraanil joonistusala keskpunkti ümber. Korda, et pöörata edasi.

2. Klõpsa {{ui:Vaade}} › {{ui:Veel}} › {{ui:Tagasi maailma}}, et see uuesti tasaseks seada.

Nende taga olevad käsud on {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} ja {{cmd:TURNWORLD}}. Et anda ühele neist klahv, lisa oma aliasitesse rida nagu `TL=TURNLEFT` käsuga {{cmd:ALIASEDIT}}.

## Joonda nurga all oleva hoonega

1. Sisesta `UCS` ja vajuta {{key:Enter}}, seejärel `OB` ja {{key:Enter}}.
2. Klõpsa seina joonel lähedal otsale, mis peaks olema algpunkt.

UCS algab nüüd sellest otsast, selle X-telg kulgeb mööda seina ja vaade pöördub nii, et sein on ekraanil tasane. Ikoon vasakus alanurgas näitab, kuhu UCS-i teljed osutavad.

3. Joonista tavapäraselt. UCS-i seadistusega:
   - `x,y` ja `@dx,dy` mõõdetakse mööda UCS-i telgi; `d<a` mõõdab nurga UCS-i X-teljest.
   - {{ui:Ortho}}, polaarne jälgimine ja ruudustik järgivad UCS-i telgi, samuti ristkursor.
   - Uus tekst ja uued lõigud kulgevad mööda UCS-i X-telge; {{cmd:DIMLINEAR}} horisontaalne ja vertikaalne järgivad seda samuti.
   - Olekuribal ja {{cmd:ID}}-st tulevad koordinaadid on UCS-i koordinaadid.
4. Maailma punkti sisestamiseks, kui UCS on seatud, pane ette `*`: `*0,0` või `@*100,0`.
5. Sisesta `UCS`, {{key:Enter}}, seejärel veel üks {{key:Enter}}, et naasta maailma.

## Muud viisid UCS-i seadmiseks

Käsu {{cmd:UCS}} küsimusel:

| Sisestad | Mida see teeb |
|---|---|
| punkt | Uus algpunkt; seejärel klõpsa punktile uuel X-teljel või vajuta {{key:Enter}}, et nurk säiliks |
| `Z` | Pöörab UCS-i selle algpunkti ümber nurga võrra, mille sisestad (kraadides, vastupäeva) või valid |
| `3` (3point) | Algpunkt, punkt positiivsel X-teljel ja punkt positiivse Y-poole peal |
| `OB` (OBject) | Joonest, kaarest, ringist, murdjoone lõigust, tekstist, plokiviitest, punktist või konstruktsioonijoonest |
| `P` (Previous) | Eelmine UCS (viimased kümme hoitakse alles, kuni joonis on avatud) |
| `W` (World) | Tagasi maailma |
| `NA` (NAmed) | `S` salvestab praeguse UCS-i nime all, `R` taastab ühe, `D` kustutab ühe, `?` loetleb need |

Iga muudatus pöörab vaadet nii, et uus UCS-i X-telg on tasane. {{cmd:PLAN}} pöörab vaadet ilma UCS-i muutmata: {{key:Enter}} praeguse UCS-i jaoks, `U` salvestatud jaoks, `W` maailma jaoks.

## Hea teada

- Iga jagatud ekraani pool säilitab oma pöörde. UCS kuulub joonisele.
- Lehed töötavad paberikoordinaatides; sea UCS sakil {{ui:Mudel}} või vaateakna sees.
- Pööratud vaates lohistatud valikuaknad valivad need objektid, mis on ekraanil nende sees.
- LISP-rutiinid saavad punkte UCS-is käsust `getpoint`, võivad lugeda `UCSORG`, `UCSXDIR`, `UCSYDIR` ja `VIEWTWIST`-i ning `trans` teisendab maailma, UCS-i ja kuva vahel.

:::note
Salvestatud fail säilitab UCS-i ja vaate pöörde hilisemas versioonis; siiani kehtivad need, kuni joonis on avatud.
:::
