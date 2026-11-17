---
title: "Podrazumijevane politike: odredite s čim počinje novi crtež"
summary: Jednom odredite koje jedinice, format dužine, tačnost, visinu teksta i papir lista novi crtež počinje, za metričke i imperijalne radove, i podijelite politike u kancelariji kao malu datoteku.
keywords: podrazumijevano, podrazumijevane politike, politika, standard kancelarije, podrazumijevane vrijednosti kancelarije, šablon, novi crtež, jedinice, insunits, format dužine, arhitektonski, tačnost, luprec, visina teksta, papir lista, a1, dijeli, izvezi, uvezi, json
from: 7b80fd13
---

## Šta ćete uraditi

Recite CadCraft-u s čim treba da počne novi crtež, da niko u kancelariji ne mora pokretati UNITS i mijenjati iste stvari svaki put. Ovo je dodatak: isključen je dok ga ne uključite, a politika koju ne postavite ostaje CadCraft-ova podrazumijevana vrijednost.

:::note
Ovo su podrazumijevane vrijednosti za **nove** crteže i **nove** listove. Crtež koji ste već započeli se ne mijenja, kao ni crtež koji otvorite.
:::

## Koraci

1. Otvorite Postavke, idite na {{ui:Dodaci}} i uključite {{ui:Podrazumijevane politike}}.
2. U Postavkama otvorite karticu **CadCraft** i izaberite {{ui:Podrazumijevane politike}} na spisku lijevo.
3. Postavite politike koje želite. Svaka počinje na **CadCraft-ovoj vlastitoj**. Politika s poljima **Metrički** i **Imperijalni** uzima jednu vrijednost za svaku vrstu crteža; popunite samo one koje trebate.
4. Nema dugmeta Spasi: svaka promjena se snima čim je napravite.
5. Pokrenite novi crtež. Ima jedinice, format dužine, tačnost i visinu teksta koje ste postavili, a njegov prvi novi list je na papiru koji ste izabrali.

## Politike

- **Jedinice novog crteža**: nijedna, milimetri, centimetri, metri, inči ili stope.
- **Format dužine** i **Tačnost dužine**: ono što naredba UNITS postavlja, za novi crtež.
- **Visina novog teksta**, u jedinicama crteža.
- **Papir novog lista**: papir koji koristi Novi list.
- **Veličine anotacija na papiru** (Postavke › Globalno › Podrazumijevane politike): visine napisa u milimetrima kako se štampaju. CadCraft koristi onu za bilješke i oznake: {{cmd:ANNOSCALE}} postavlja visinu s kojom novi tekst počinje, na toj visini pri razmjeri anotacije. Vidi [Jedinice, papiri i razmjere](topic:units-papers-scales#annotate-by-scale).

Crtež u inčima ili stopama koristi imperijalne vrijednosti; svaki drugi crtež koristi metričke. Crtež bez jedinica koristi sistem jedinica postavljen u Postavke › Globalno › Podrazumijevane politike, a metrički kada nijedan nije postavljen.

## Podijelite ih u kancelariji

1. U Postavkama otvorite karticu **Globalno** i izaberite {{ui:Podrazumijevane politike}}.
2. Kliknite {{ui:Spasi u datoteku}}. Dobijate malu datoteku koja se završava na `.ccdefaults.json`.
3. Na drugom računaru uključite dodatak, otvorite isto mjesto i kliknite {{ui:Učitaj iz datoteke}}. Politike iz datoteke zamjenjuju one na tom računaru.

Jedna datoteka sadrži politike svake CadCraft aplikacije, pa ista datoteka radi i u BimCraft-u.

## Dobro je znati

- Nema politike za razmjeru lista: pogled novog lista se uklapa u crtež, a njegovu razmjeru postavljate na listu.
- Nema politike za stil kote: novi crtež nema imenovane stilove kota. Postavite kote s DIMSTYLE ili počnite od crteža koji ih ima.
- Datoteka je običan, otvoren JSON. Politika koju datoteka navodi, a koju ova verzija ne poznaje, izostavlja se i navodi se u poruci; ostale se i dalje učitavaju.
- Politike se čuvaju u ovom pregledaču, ne u crtežu. Isključite dodatak i sve je opet CadCraft-ovo vlastito.
