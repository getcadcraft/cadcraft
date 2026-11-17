---
title: "Zadane politike: postavite s čime počinje novi crtež"
summary: Jednom odredite koje jedinice, oblik duljine, preciznost, visinu teksta i papir lista novi crtež počinje, za metričke i za imperijalne radove, i podijelite politike u uredu kao malu datoteku.
keywords: zadano, zadane, zadane politike, politika, uredski standard, uredske zadane vrijednosti, predložak, novi crtež, jedinice, insunits, oblik duljine, arhitektonsko, preciznost, luprec, visina teksta, papir lista, a1, dijeljenje, izvoz, uvoz, json
from: 7b80fd13
---

## Što ćete raditi

Recite CadCraft-u s čime novi crtež treba početi, da nitko u uredu ne mora pokretati UNITS i mijenjati iste stvari svaki put. Ovo je dodatak: isključen je dok ga ne uključite, a politika koju ne postavite ostavlja zadanu vrijednost CadCraft-a točno kakva jest.

:::note
Ovo su zadane vrijednosti za **nove** crteže i **nove** listove. Crtež koji ste već započeli se ne mijenja, kao ni onaj koji otvorite.
:::

## Koraci

1. Otvorite Postavke, idite na {{ui:Dodaci}} i uključite {{ui:Zadane politike}}.
2. U Postavkama otvorite karticu **CadCraft** i odaberite {{ui:Zadane politike}} na popisu lijevo.
3. Postavite politike koje želite. Svaka počinje na **CadCraft-ovoj vrijednosti**. Politika s okvirima **Metrički** i **Imperijalni** uzima jednu vrijednost za svaku vrstu crteža; ispunite samo one koje trebate.
4. Nema gumba Spremi: svaka promjena se sprema čim je napravite.
5. Započnite novi crtež. Ima jedinice, oblik duljine, preciznost i visinu teksta koje ste postavili, a njegov prvi novi list je na papiru koji ste odabrali.

## Politike

- **Jedinice novog crteža**: ništa, milimetri, centimetri, metri, inči ili stope.
- **Oblik duljine** i **Preciznost duljine**: što naredba UNITS postavlja za novi crtež.
- **Visina novog teksta**, u jedinicama crteža.
- **Papir novog lista**: papir koji koristi {{ui:Novi list}}.
- **Veličine anotacija na papiru** (Postavke › Globalne › Zadane politike): visine koje ured želi u milimetrima kako se ispisuju. CadCraft koristi onu za bilješke i oznake: {{cmd:ANNOSCALE}} postavlja visinu s kojom novi tekst počinje, na tu visinu pri mjerilu anotacije. Vidi [Jedinice, papiri i mjerila](topic:units-papers-scales#annotate-by-scale).

Crtež u inčima ili stopama koristi imperijalne vrijednosti; svaki drugi crtež koristi metričke. Crtež bez jedinica koristi sustav jedinica postavljen u Postavke › Globalne › Zadane politike, ili metrički ako nije postavljen nijedan.

## Podijelite ih u uredu

1. U Postavkama otvorite karticu **Globalne** i odaberite {{ui:Zadane politike}}.
2. Kliknite {{ui:Spremi u datoteku}}. Dobijete malu datoteku koja završava s `.ccdefaults.json`.
3. Na drugom računalu uključite dodatak, otvorite isto mjesto i kliknite {{ui:Učitaj iz datoteke}}. Politike iz datoteke zamjenjuju one na tom računalu.

Jedna datoteka sadrži politike svake CadCraft aplikacije, pa ista datoteka radi i u BimCraft-u.

## Dobro je znati

- Ne postoji politika za mjerilo lista: pogled novog lista prilagođava se crtežu, a mjerilo postavljate na samom listu.
- Ne postoji politika za stil kote: novi crtež nema imenovane stilove kotiranja. Postavite kote s DIMSTYLE ili počnite od crteža koji ih ima.
- Datoteka je običan, otvoren JSON. Politika koju datoteka navodi, a ova verzija ne poznaje, izostavlja se i imenuje u poruci; ostale se učitavaju.
- Politike se čuvaju u ovom pregledniku, a ne u crtežu. Isključite dodatak i sve je opet CadCraft-ovo.
