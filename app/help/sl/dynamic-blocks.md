---
title: Dinamični bloki
summary: Kaj CadCraft počne z dinamičnimi bloki v DWG: ohranijo svoja prava imena, prikažejo stanje, v katerem so bili shranjeni, preklapljajo stanja vidnosti, prikažejo svoje druge vrednosti in ostanejo dinamični, ko se shranijo.
keywords: dinamični blok, dinamični bloki, vidnost, stanje vidnosti, obrni, raztegni, iskanje, parametri, po meri, lastnosti bloka, *u bloki, dinamično
from: dea2ee7c
---

## Kaj deluje

DWG, narejena z dinamičnimi bloki, se odpre z njimi, ki delujejo do te mere:

- **Njihova prava imena.** Dinamični blok je v podoknu {{ui:Bloki}} naveden pod svojim imenom ("Receptacle", "Sink"), ne kot neimenovan blok `*U`.
- **Stanje, v katerem so bili shranjeni.** Vsak sklic kaže natanko to, kar je pokazal drugi program: stanje vidnosti, na katero je bil nastavljen, raztegnjen ali obrnjen, kot je bil shranjen.
- **Preklapljanje stanja vidnosti.** Izberite en sklic (ali več istih blokov), odprite {{ui:Lastnosti}} in v razdelku {{ui:Po meri}} izberite drugo stanje s seznama {{ui:Vidnost}}. Sklic takoj pokaže to stanje, tudi njegove atribute: tisti, ki jih stanje skrije, izginejo, tisti, ki jih prikaže, se pojavijo z vrednostmi. Sklic ohrani vsako vrednost, zato nič ne ostane prazno; {{ui:Lastnosti}} navaja skrite, označene kot "skrito". {{key:Mod+Z}} vrne staro stanje v enem koraku.
- **Ročice.** Izbran dinamični blok pokaže lastne ročice tam, kjer so njegovi parametri: majhen trikotnik za stanje vidnosti (kliknite ga za seznam stanj), puščice na koncih razdalje, dvojna puščica za obrat. Zdaj deluje samo ročica vidnosti; druge to sporočijo v vrstici stanja.
- **Druge vrednosti, samo za branje.** Pod seznamom vidnosti {{ui:Po meri}} prikaže tudi razdalje bloka, kote poravnave, stanja obrata in točke, kot jih ima risba.
- **Urejanje stanj vidnosti.** Blok odprite z {{cmd:BEDIT}}: urejevalnik prikaže eno stanje, imenovano v vrstici nad risbo (drugo izberete tam). Vnesite {{cmd:BVSTATE}} za preklop, dodajanje (skrije vse, pokaže vse ali ohrani, kar je prikazano), preimenovanje ali brisanje stanja; {{cmd:BVHIDE}} skrije izbrane predmete v trenutno prikazanem stanju; {{cmd:BVSHOW}} pokaže skrite predmete zbledele, da kliknete tiste, ki jih želite vrniti. Shranite blok: sklici, nastavljeni na preimenovano stanje, ga ohranijo pod novim imenom, tisti, nastavljeni na izbrisano stanje, pa prikažejo prvo stanje.
- **Ostanejo dinamični.** Shranjeni kot DWG v različici, v kateri je risba prišla, bloki ostanejo dinamični, s stanjem, ki ste ga izbrali: drugi program jih odpre kot iste dinamične bloke. Stanja vidnosti, ki ste jih uredili, se shranijo tudi: njihova nova imena, stanja, ki ste jih dodali, in kaj vsako prikazuje.

## Kaj je samo za branje ali še ni

| Še ni | Namesto tega zdaj |
|---|---|
| Spreminjanje razdalj, kotov ali obratov (dejanja raztegni, premakni, obrni) | Prikazani so samo za branje v {{ui:Po meri}}; urejajte v programu, ki je blok ustvaril. |
| Iskanje, XY, rotacijski in polarni parametri | Še niso prebrani: sklic je prikazan, kot je shranjen. |
| Vlečenje ročic razdalje, obrata in točke | Prikažejo, kje so parametri; ročica vidnosti in seznam {{ui:Vidnost}} v Lastnostih preklapljata stanja. |
| Izdelava dinamičnih blokov druge vrste programa (raztegni, obrni, iskanje) | Bloki, ki jih naredite v CadCraft, so navadni bloki; {{cmd:BPARAMETER}} to pove. Vaši lastni parametri in več parametrov vidnosti so v upravitelju parametrov (glejte "Vaši lastni parametri in stanja vidnosti" spodaj). |
| Dodajanje ali brisanje predmetov bloka z stanji vidnosti v urejevalniku blokov | Blok se nato shrani kot navadni blok (urejevalnik to pove ob zaprtju). |
| Ohranjanje dinamičnosti v drugi različici DWG ali v DXF | Shranjeni so kot navadni bloki, ki prikazujejo izbrano stanje, shranjevanje to pove. |

:::note
Premikanje ali spreminjanje predmetov v {{cmd:BEDIT}} ohrani blok z stanji vidnosti dinamičen. Blok brez stanj ali tisti, katerim so bili predmeti v urejevalniku dodani ali izbrisani, postane navaden blok.
:::

## Vaši lastni parametri in stanja vidnosti

Blok, ki ga naredite v CadCraft, lahko nosi lastne parametre in **več** parametrov vidnosti, vsak s svojimi stanji. Vnesite {{cmd:BPARAMS}} (ali `BPM`), da odprete **upravitelja parametrov** za blok, ki ga urejate v {{cmd:BEDIT}}, za blok izbranega sklica ali za blok, ki ga imenujete.

- **Parametri**: ime, vrsta (število, dolžina, kot, število kosov, da/ne) in vrednost ali formula nad drugimi parametri (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Izračun}} prikaže rezultat. Formula, ki ne deluje, ali vrednost, ki se ne ujema z njeno vrsto (število kosov 1,5), je zavrnjena, upravitelj pove zakaj; nič drugega se ne spremeni.
- **Parametri vidnosti**: {{ui:Dodaj parameter vidnosti}} naredi enega s prvim stanjem. Vsako stanje lahko preimenujete, odstranite (zadnje ostane) ali mu dodelite številko "prikaže se, ko". Formula izbere stanje iz parametrov (stanje, katerega številka se ujema, sicer stanje na tistem mestu na seznamu); brez formule si vsak sklic izbere svojega.
- **Postavitev predmetov v stanje**: v urejevalniku blokov izberite predmete, vnesite {{cmd:BPARAMS}} in kliknite {{ui:Izbrane predmete postavi sem}} pri stanju. Predmeti, ki jih noben parameter vidnosti ne navaja, se vedno prikažejo.
- **Ta sklic**: če začnete na izbranem sklicu, upravitelj prikaže tudi njegove lastne vrednosti in stanja.

Zunaj urejevalnika blokov je vsaka sprememba en korak razveljavitve. V urejevalniku blokov so spremembe urejevalnikove: {{ui:Shrani blok}} jih ohrani. `-BPARAMS` v ukazni vrstici naredi isto.

**V datoteki.** DWG in DXF hranita parametre, katera predmeta sta v katerem stanju, in lastne vrednosti vsakega sklica v CadCraftovih lastnih zapisih; ko datoteko znova odprete v CadCraft, je vse spet tam. Drug program vidi vsak sklic kot blok z vsemi predmeti, saj DWG hrani največ en parameter vidnosti na blok svoje vrste. Sklic, ki ga je drug program premaknil, ali blok, katerega predmete je spremenil, se vrne brez delov, ki se ne ujemajo več (nič se ne ugiba).
