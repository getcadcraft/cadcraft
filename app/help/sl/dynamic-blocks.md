---
title: Dinamični bloki
summary: Kaj CadCraft počne z dinamičnimi bloki v DWG: ohranijo svoja prava imena, prikažejo stanje, v katerem so bili shranjeni, preklapljajo stanja vidnosti, prikažejo svoje druge vrednosti in ostanejo dinamični, ko se shranijo.
keywords: dinamični blok, dinamični bloki, vidnost, stanje vidnosti, obrni, raztegni, iskanje, parametri, po meri, lastnosti bloka, *u bloki, dinamično
from: 26b6aa80
---

## Kaj deluje

Risba DWG z dinamičnimi bloki se odpre z njimi, ki delujejo do te mere:

- **Njihova prava imena.** Dinamični blok je v podoknu {{ui:Bloki}} naveden pod svojim imenom („Receptacle“, „Sink“), ne kot brezimni blok `*U`.
- **Stanje, v katerem so bili shranjeni.** Vsaka referenca prikaže natanko to, kar je prikazal drugi program: stanje vidnosti, na katero je bila nastavljena, raztegnjeno ali obrnjeno, kot je bila shranjena.
- **Preklapljanje stanja vidnosti.** Izberite eno referenco (ali več istih blokov), odprite {{ui:Lastnosti}} in v razdelku {{ui:Po meri}} izberite drugo stanje s seznama {{ui:Vidnost}}. Referenca takoj prikaže to stanje, tudi njene atribute: tisti, ki jih stanje skrije, izginejo; tisti, ki jih prikaže, se pojavijo z vrednostmi. Referenca ohrani vsako vrednost, zato nič ne ostane prazno; {{ui:Lastnosti}} našteje skrite, označene z „skrito“. {{key:Mod+Z}} vrne staro stanje v enem koraku.
- **Ročice.** Izbrani dinamični blok prikaže svoje ročice tam, kjer so njegovi parametri: majhen trikotnik za stanje vidnosti (kliknite ga za seznam stanj), puščice na koncih razdalje, dvojna puščica za obrat. Danes deluje samo ročica vidnosti; druge to povedo v vrstici stanja.
- **Druge vrednosti, samo za branje.** Pod seznamom vidnosti {{ui:Po meri}} prikaže tudi razdalje, kote poravnave, stanja obratov in točke, kot jih hrani risba.
- **Urejanje stanj vidnosti.** Blok odprite z {{cmd:BEDIT}}: urejevalnik prikaže eno stanje, ki je navedeno v vrstici nad risbo (tu izberete drugo). Vpišite {{cmd:BVSTATE}} za preklop, dodajanje (skrije vse, prikaže vse ali ohrani, kar je vidno), preimenovanje ali brisanje stanja; {{cmd:BVHIDE}} skrije izbrane objekte v stanju, ki se prikazuje; {{cmd:BVSHOW}} prikaže skrite, zbledele, da lahko kliknete tiste, ki jih želite vrniti. Shranite blok: reference, nastavljene na preimenovano stanje, ga ohranijo pod novim imenom, tiste, nastavljene na izbrisano stanje, pa prikažejo prvo stanje.
- **Ostanejo dinamični.** Shranjeni kot DWG v različici, v kateri je prišla risba, ostanejo bloki dinamični, s stanjem, ki ste ga izbrali: drugi program jih odpre kot iste dinamične bloke. Shranjena so tudi stanja vidnosti, ki ste jih uredili: njihova nova imena, stanja, ki ste jih dodali, in kaj vsako prikaže.

## Kar je samo za branje ali še ni

| Še ni | Namesto tega zdaj |
|---|---|
| Spreminjanje razdalj, kotov ali obratov (dejanja raztegni, premakni, obrni) | Prikazani so samo za branje v {{ui:Po meri}}; urejajte v programu, ki je blok ustvaril. |
| Parametri iskanja, XY, vrtenja in polarni | Še niso prebrani: referenca se prikaže, kot je shranjena. |
| Vlečenje ročic razdalje, obrata in točke | Prikažejo, kje so parametri; ročica vidnosti in seznam {{ui:Vidnost}} v Lastnostih preklapljata stanja. |
| Ustvarjanje dinamičnih blokov (dodajanje parametrov ali stanj vidnosti bloku, ki jih nima) | Bloki, ki jih ustvarite v CadCraft, so navadni bloki; {{cmd:BPARAMETER}} to pove. |
| Dodajanje ali brisanje objektov bloka s stanji vidnosti v urejevalniku bloka | Blok se nato shrani kot navadni blok (urejevalnik to pove ob zaprtju). |
| Ohranjanje dinamičnosti v drugi različici DWG ali v DXF | Shranjeni so kot navadni bloki, ki prikazujejo izbrano stanje, shranjevanje to pove. |

:::note
Premikanje ali spreminjanje objektov v {{cmd:BEDIT}} ohrani blok s stanji vidnosti dinamičnim. Blok brez stanj ali tisti, katerim so bili objekti v urejevalniku dodani ali izbrisani, postane navadni blok.
:::
