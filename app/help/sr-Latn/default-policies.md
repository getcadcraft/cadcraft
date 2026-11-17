---
title: "Podrazumevane politike: određivanje šta novi crtež počinje sa"
summary: Jednom odredi koje jedinice, format dužine, tačnost, visinu teksta i papir lista novi crtež počinje sa, za metričke i imperijalne radove, i podeli politike u kancelariji kao malu datoteku.
keywords: podrazumevano, podrazumevane politike, politika, kancelarijski standard, kancelarijske podrazumevane vrednosti, šablon, novi crtež, jedinice, insunits, format dužine, arhitektonski, tačnost, luprec, visina teksta, papir lista, a1, deljenje, izvoz, uvoz, json
from: 7b80fd13
---

## Šta ćeš uraditi

Reci CadCraft-u šta novi crtež treba da počne sa, pa niko u kancelariji ne mora da pokreće UNITS i menja iste stvari svaki put. Ovo je dodatak: isključen je dok ga ne uključiš, a politika koju ne postaviš ostavlja CadCraft-ovu sopstvenu podrazumevanu vrednost netaknutu.

:::note
Ovo su podrazumevane vrednosti za **nove** crteže i **nove** listove. Crtež koji si već započeo se ne menja, kao ni crtež koji otvoriš.
:::

## Koraci

1. Otvori {{ui:Podešavanja}}, idi na {{ui:Dodaci}} i uključi {{ui:Podrazumevane politike}}.
2. U Podešavanjima otvori karticu **CadCraft** i izaberi {{ui:Podrazumevane politike}} na spisku levo.
3. Postavi politike koje želiš. Svaka počinje na **CadCraft-ovoj sopstvenoj** vrednosti. Politika sa poljima **Metric** i **Imperial** uzima jednu vrednost za svaku vrstu crteža; popuni samo ona polja koja su ti potrebna.
4. Nema dugmeta Sačuvaj: svaka promena se čuva čim je napraviš.
5. Započni novi crtež. Ima jedinice, format dužine, tačnost i visinu teksta koje si postavio, a njegov prvi novi list je na papiru koji si izabrao.

## Politike

- **Jedinice novog crteža**: bez, milimetri, centimetri, metri, inči ili stope.
- **Format dužine** i **Tačnost dužine**: ono što komanda UNITS postavlja, za novi crtež.
- **Visina novog teksta**, u jedinicama crteža.
- **Papir novog lista**: papir koji koristi {{ui:Novi list}}.
- **Veličine anotacija na papiru** (Podešavanja › Globalno › Podrazumevane politike): visine kancelarije u milimetrima kako se štampaju. CadCraft koristi onu za napomene i oznake: {{cmd:ANNOSCALE}} postavlja visinu kojom novi tekst počinje na tu visinu pri razmeri anotacije. Vidi [Jedinice, papiri i razmere](topic:units-papers-scales#annotate-by-scale).

Crtež u inčima ili stopama koristi imperijalne vrednosti; svaki drugi crtež koristi metričke. Crtež bez jedinica koristi sistem jedinica postavljen u Podešavanja › Globalno › Podrazumevane politike, ili metrički ako nije postavljen nijedan.

## Deljenje u kancelariji

1. U Podešavanjima otvori karticu **Globalno** i izaberi {{ui:Podrazumevane politike}}.
2. Klikni {{ui:Sačuvaj u datoteku}}. Dobijaš malu datoteku koja se završava sa `.ccdefaults.json`.
3. Na drugom računaru uključi dodatak, otvori isto mesto i klikni {{ui:Učitaj iz datoteke}}. Politike iz datoteke zamenjuju one na tom računaru.

Jedna datoteka sadrži politike svih CadCraft aplikacija, pa ista datoteka radi i u BimCraft-u.

## Dobro je znati

- Nema politike za razmeru lista: pogled novog lista se uklapa u crtež, a njegovu razmeru postavljaš na listu.
- Nema politike za stil kote: novi crtež nema imenovane stilove kota. Postavi kote pomoću DIMSTYLE, ili počni od crteža koji ima tvoje.
- Datoteka je običan, otvoreni JSON. Politika koju datoteka navodi, a koju ova verzija ne poznaje, ispušta se i pominje se u poruci; ostale se učitavaju.
- Politike se čuvaju u ovom pregledaču, ne u crtežu. Isključi dodatak i sve je ponovo CadCraft-ovo sopstveno.
