---
title: Stykliste pr. zone
summary: Markér områder i en tegning som zoner og placér en tabel for hver, der tæller blokkene indeni. Tabellerne følger tegningen når du arbejder, og du vælger hvilke kolonner hver viser.
keywords: stykliste, BOM, dele-liste, liste, zone, område, tabel, tæl, mængde, attribut, kolonner, postnummer, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

En **zone** er et navngivet område i tegningen. En **styklistetabel** lister det der ligger inde i en zone, eller i hele tegningen: hver blok med sin mængde og dens attributværdier. En tegning kan have så mange zoner og tabeller som du har brug for, og én zone kan have flere tabeller med forskellige kolonner.

Værktøjerne ligger på fanen Blokke under {{ui:Stykliste}}, i gruppen Blokke under {{ui:Mere}}, og de kan skrives.

## Lav en zone

Skriv {{cmd:BOMZONE}} og vælg enten

- klik på to modsatte hjørner for et rektangel,
- vælg {{ui:Polygon}}, klik på hvert hjørne, og tryk {{key:Enter}} for at lukke det, eller
- vælg {{ui:Objekt}} og vælg en lukket polylinje, en cirkel, en ellipse eller en lukket spline. Dens kontur kopieres. Objektet bliver som det er.

Derefter skriver du zonens navn. Zonen tegnes som en stiplet kontur med sit navn over det øverste venstre hjørne, på laget `BOM-ZONES`, som ikke plottes. Slå plot til for det lag hvis du vil have zonerne på papir.

En zone er en almindelig lukket polylinje: flyt den, stræk den eller træk i dens greb, og dens navn følger med. For at omdøbe en zone redigerer du navnets tekst, eller bruger {{cmd:BOMZONE}} og {{ui:Omdøb}}. {{ui:Zoner}} lister hver zone og hvor mange tabeller den har.

## Placér en tabel

Skriv {{cmd:BOMTABLE}} (eller {{cmd:BOM}}), vælg zonens kontur eller dens navn, angiv tekstens højde, og klik hvor tabellens øverste venstre hjørne skal være. Tryk {{key:Enter}} i stedet for at vælge en zone, eller vælg {{ui:Hele}}, for en tabel over hele tegningen.

En ny tabel viser postnummeret, mængden, blokkens navn og en kolonne for hver attribut blokkene bærer (de første seks; de andre tilbydes uden flueben). Blokke med samme navn og samme attributværdier deler en række.

## Hvad der tæller som inde i zonen

- En blok tæller i den zone der indeholder dens **indsætningspunkt**.
- En linje, bue, cirkel, polylinje, ellipse, spline eller skravering tæller **helt** i den zone der indeholder midten af dens udstrækning (for en linje, dens midtpunkt). Dens længde klippes ikke ved zonens kant.
- Et punkt præcis på kanten er inde.
- Zoner kan overlappe. Hver zone tæller for sig selv, så et objekt i overlappet er i begge tabeller.

## Tabeller følger tegningen

Når du tilføjer, flytter, kopierer eller sletter en blok, redigerer en attribut, eller ombygger eller flytter en zone, tegnes hver tabel om i samme trin. Fortryd tager din redigering og tabelændringen tilbage sammen.

For at stoppe en tabel fra at følge med, sæt flueben i {{ui:Frosset}} i dens indstillinger. En frosset tabel ændres kun når du redigerer dens indstillinger eller skriver {{cmd:BOMUPDATE}}, som opdaterer alle tabeller nu.

## Vælg kolonnerne

Vælg en tabel, og skriv {{cmd:BOMEDIT}}. I dialogen:

- **Kolonner**: sæt flueben i dem du vil vise (post, mængde, navn, lag, længde, areal, bemærkninger og hver attribut), skriv din egen overskrift til en af dem, og flyt dem op eller ned.
- {{ui:Gruppér rækker efter}}: blokkens navn og attributværdier, kun blokkens navn, lag, eller én attribut. I en sammenlagt række står "varierer", hvis en værdi er forskellig mellem blokke.
- {{ui:Sortér efter}} en hvilken som helst kolonne, stigende eller faldende.
- {{ui:Titel}}, {{ui:Vis titlen}} og {{ui:Totalrække}}.
- {{ui:Tæl linjearbejde pr. lag}} tilføjer én række pr. lag med antallet af objekter, deres samlede længde og, for lukkede former, deres samlede areal, i tegningens enheder.
- **Bemærkninger**: sæt flueben i kolonnen Bemærkninger, og skriv derefter en bemærkning til en hvilken som helst række i tabellen nederst i dialogen.

Hver tabel beholder sine egne valg.

## Postnumre

En række beholder sit postnummer så længe den er i tabellen. En ny række tager det næste ledige nummer, og et nummer der er udleveret, bruges aldrig igen, så balloner og noter der citerer et nummer forbliver rigtige. {{ui:Nummerér poster}} nummererer dem fra 1 i den viste rækkefølge.

En række kendes på det den grupperer: ændrer du hvordan rækker grupperes, eller ændrer du en attributværdi som grupperingen bruger, tæller rækken som en ny.

## Eksport og andre programmer

{{cmd:BOMEXPORT}}, eller {{ui:Eksportér CSV}} i dialogen, gemmer en tabel som en .csv-fil til et regneark.

I en DWG- eller DXF-fil er en tabel en almindelig blok af linjer og tekst, så andre programmer viser og plotter den som tegnet. Der er den ikke et tabelobjekt, og den opdateres ikke i andre programmer. Linket til dens zone gemmes i filen som udvidelsesdata, som CadCraft læser tilbage, så tabellen er live igen når du åbner tegningen i CadCraft. En R12 DXF af en tegning uden ark beholder ikke indstillingen "ikke plottet" for zonens lag.

Eksplodering af en tabel gør den til løse linjer og tekst og afbryder linket.
