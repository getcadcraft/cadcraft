---
title: Slanje crteža laseru
summary: Otvorite ploču Laser, odaberite što svaki sloj radi (rezanje, urezivanje, graviranje, ispuna, slika), pregledajte kretanja glave, spremite G-kôd za GRBL laser način ili ga pošaljite iz preglednika nakon uokvirivanja posla.
keywords: laser, rezač lasera, graver lasera, GRBL, G-code, G-kôd, gcode, graviranje, ispuna, dithering, graviranje slike, urezivanje, rezanje, Web Serial, uokviri posao, snaga, brzina, prolazi, LASER, LASERCUT, CNC
from: 72b56db0
---

Ploča {{ui:Laser}} pretvara slojeve crteža u program za laser koji radi s GRBL-om (većina hobi i malih radionica s diodnim i CO2 upravljačima). Upišite `LASER` (ili `LASERCUT`) i pritisnite {{key:Enter}}, ili odaberite {{ui:Laser…}} u izborniku {{ui:Više}} grupe {{ui:Pogled}}. U stilovima vrpce nalazi se u izborniku {{ui:Datoteka}} i pored {{ui:Ispis}}. Ploča se otvara preko crteža i ostaje otvorena dok crtate: pregled prati svaku promjenu.

:::warning
Svaku postavku prvo isprobajte na otpadu, nosite zaštitne naočale koje odgovaraju vašem laseru, držite poklopac zatvorenim gdje ga ima i nikad ne ostavljajte uključeni laser bez nadzora. Brojevi koje sloj dobije na početku su privremeni, a ne preporuke za bilo koji materijal.
:::

## Što se šalje

Ploča čita model (ne listove), na slojevima koji su uključeni i odmrznuti:

- Linije, lukovi, kružnice, polilinije (segmenti lukova ostaju lukovi), elipse i splajnovi. Oblik koji završava tamo gdje počinje smatra se zatvorenim.
- Blokovi se rastavljaju: objekt na sloju 0 unutar bloka ide sa slojem reference bloka.
- Šrafura šalje svoju granicu, pa je šrafirani logotip na sloju **Ispuna** ispunjen.
- Slika (`IMAGEATTACH`) gravira se na sloju postavljenom na **Graviranje slike** kad leži ravno (nije okrenuta ni nagnuta) i kad je njezina datoteka otvorena u CadCraftu.
- Tekst, kote, vodilice, točke i konstrukcijske linije se ne šalju; ploča kaže koliko ih je izostavila. Za graviranje teksta nacrtajte slova kao oblike ili ih našrafirajte.

Veličine se šalju u milimetrima iz jedinica crteža (`UNITS`): crtež u inčima množi se s 25.4. Crtež bez postavljenih jedinica šalje se tako da je jedna jedinica jednaka jednom milimetru. Označite {{ui:Samo odabrane objekte}} da pošaljete dio crteža.

## Odaberite što svaki sloj radi

Svaki sloj s nečim na njemu je redak. {{ui:Radi}} postavlja ga na **Rezanje**, **Urezivanje**, **Graviranje linija**, **Ispuna oblika**, **Graviranje slike** ili **Ne šalji**, uz {{ui:Snaga %}}, {{ui:Brzina mm/min}} i broj {{ui:Prolazi}}. Svaka promjena je jedan korak poništavanja i sprema se u crtež: DWG (svaka verzija koju CadCraft sprema) i DXF čuvaju postavke, pa se crtež sljedeći put otvara s njima. Drugi programi otvaraju datoteku kao i prije; vide jedan neiskorišteni blok nazvan CADCRAFT_LASER (njegovo brisanje u tom programu briše postavke).

- **Ispuna** puni unutrašnjost zatvorenih oblika linijama, razmaknutim za {{ui:Razmak redaka}}, pod {{ui:Kut}}, u oba smjera ili jednom, s prebačajem (overscan) da je glava na brzini kad se laser uključi; križno šrafiranje dodaje drugi prolaz pod 90°. Oblik s rupom ostaje otvoren na rupi.
- **Graviranje slike** pretvara sliku u točkice (Floyd–Steinberg, Atkinson, ordered ili jednostavno crno-bijelo uz prag) ili, uz *Sivi tonovi*, u promjenjivu snagu.
- Redoslijed: prvo slike i ispune, zatim graviranje linija, pa urezivanja, pa rezanja, tako da se izrezani dio ne pomakne dok se gravira. Unutar jednog sloja putanje idu **iznutra prema van** (rupa prije ploče u kojoj je), a zatim najbliža sljedeća.

## Pregled, pa spremanje

Pregled prikazuje što glava radi: linije za paljenje u boji, brza kretanja sivo, i zeleni okvir oko svega što pali. Ispod su veličina, duljina paljenja i procjena vremena (bez ubrzanja; stvarni stroj treba duže). {{ui:Spremi G-kôd…}} zapisuje G-kôd za GRBL laser način: `$32=1`, `M4` (ili `M3`) s vrijednostima S, pomake `G0` i `G1`, `M5` na kraju. X0 Y0 je donji lijevi kut posla, osim ako odaberete ishodište crteža: na tom mjestu postavite nulu rada vašeg stroja.

## Pošaljite iz preglednika

U Chromeu i Edgeu, {{ui:Poveži…}} traži da odaberete USB priključak lasera. Ništa se ne povezuje niti šalje dok ne pritisnete gumb. Prvo pritisnite {{ui:Uokviri posao}}: glava ocrta okvir posla s **isključenim** laserom (ili pri maloj snazi koju postavite za pokazivač) da vidite gdje će gorjeti. Tek tada se uključuje {{ui:Pošalji posao}}, i ponovno se isključuje ako nešto promijenite. {{ui:Pauziraj}} zadržava glavu, {{ui:Zaustavi}} je također zadržava, resetira upravljač (laser se gasi) i šalje `M5`. Tamo gdje nedostaje Web Serial (Firefox, Safari i CadCraft Studio, koji još nema Web Serial), ploča nudi samo spremanje: spremite G-kôd i pošaljite ga vlastitim programom lasera.

## Još nije izrađeno

Još nije izrađeno: formati drugih upravljača (Ruida, Marlin laseri, datoteke proizvođača), jezičci (tabs) i uvodni dijelovi (lead-ins), kompenzacija širine reza (kerf), knjižnice materijala, rotacijska i Z os, poravnanje kamerom, tekst kao obrisi.
