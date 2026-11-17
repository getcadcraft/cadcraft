---
title: Slanje crteža na laser
summary: Otvorite panel Laser, izaberite šta svaki sloj radi (reži, urezuje, graviraj, popuni, slika), pregledajte kretanja glave, spasite GRBL G-kod za laserski režim, ili ga pošaljite iz pregledača nakon ocrtavanja posla.
keywords: laser, laserski rezač, laserski graver, GRBL, G-kod, gcode, graviranje, popuna, dither, gravura slike, rezanje, urezivanje, Web Serial, ocrtavanje posla, snaga, brzina, prolazi, LASER, LASERCUT, CNC
from: 72b56db0
---

Panel {{ui:Laser}} pretvara slojeve crteža u program za laser koji radi na GRBL-u (većina hobi i malih radionica sa diodnim i CO2 kontrolerima). Upišite `LASER` (ili `LASERCUT`) i pritisnite {{key:Enter}}, ili odaberite {{ui:Laser…}} u meniju {{ui:Više}} u grupi {{ui:Pogled}}. U stilovima trake nalazi se u meniju {{ui:Datoteka}} i pored {{ui:Ispiši}}. Panel se otvara preko crteža i ostaje otvoren dok crtate: pregled prati svaku promjenu.

:::warning
Testirajte svaku postavku na otpadu prvo, nosite zaštitne naočare koje odgovaraju vašem laseru, držite poklopac zatvoren gdje postoji, i nikad ne ostavljajte upaljen laser bez nadzora. Brojevi koje sloj dobije na početku su privremeni, a ne preporuke za bilo koji materijal.
:::

## Šta se šalje

Panel čita model (ne listove), na slojevima koji su uključeni i odmrznuti:

- Linije, lukovi, krugovi, polilinije (segmenti lukova ostaju lukovi), elipse i splajnovi. Oblik koji se završava tamo gdje počinje računa se kao zatvoren.
- Blokovi se rastavljaju: objekat na sloju 0 unutar bloka ide sa slojem reference bloka.
- Šrafura šalje svoju granicu, pa je šrafirani logo na sloju **Popuni** popunjen.
- Slika (`IMAGEATTACH`) se gravira na sloju postavljenom na **Graviraj sliku**, kad leži pravo (nije okrenuta ni nagnuta) i kad je njena datoteka otvorena u CadCraftu.
- Tekst, kote, vodilice, tačke i konstrukcijske linije se ne šalju; panel kaže koliko ih je izostavio. Da ispalite tekst, nacrtajte slova kao oblike ili ih šrafirajte.

Veličine se šalju u milimetrima iz jedinica crteža (`UNITS`): crtež u inčima množi se sa 25,4. Crtež bez postavljenih jedinica šalje se tako da je jedna jedinica jedan milimetar. Označite {{ui:Samo odabrani objekti}} da pošaljete dio crteža.

## Izbor šta svaki sloj radi

Svaki sloj sa nečim na njemu je red. {{ui:Radi}} postavlja **Reži**, **Urezi**, **Graviraj linije**, **Popuni oblike**, **Graviraj sliku** ili **Ne šalji**, sa {{ui:Snaga %}}, {{ui:Brzina mm/min}} i brojem {{ui:Prolazi}}. Svaka promjena je jedan korak poništavanja i čuva se u crtežu: DWG (svaka verzija koju CadCraft spašava) i DXF čuvaju postavke, pa se crtež otvara sa njima sljedeći put. Drugi programi otvaraju datoteku kao i prije; vide jedan neiskorišten blok nazvan CADCRAFT_LASER (njegovo čišćenje tamo briše postavke).

- **Popuni** puni unutrašnjost zatvorenih oblika linijama, na razmaku {{ui:Razmak redova}}, pod {{ui:Ugao}}, u oba smjera ili u jednom, sa preletom da glava bude na brzini kad se laser upali; unakrsna šrafura dodaje drugi prolaz pod 90°. Oblik sa rupom ostaje otvoren na rupi.
- **Graviraj sliku** pretvara sliku u tačke (Floyd–Steinberg, Atkinson, uređeno, ili obično crno-bijelo na pragu) ili, sa *Nivoi sive*, u promjenjivu snagu.
- Redoslijed: prvo slike i popune, zatim graviranje linija, pa urezi, pa rezovi, tako da se izrezani dio ne pomjeri dok se gravira. Unutar jednog sloja putanje idu **iznutra prema van** (rupa prije ploče u kojoj se nalazi), uvijek najbliža sljedeća.

## Pregled, pa spašavanje

Pregled crta šta glava radi: linije koje pale, u boji, brza kretanja u sivoj, i zeleni okvir oko svega što se pali. Ispod su veličina, dužina paljenja i procjena vremena (bez ubrzanja; stvarna mašina traje duže). {{ui:Spasi G-kod…}} zapisuje GRBL G-kod za laserski režim: `$32=1`, `M4` (ili `M3`) sa S vrijednostima, `G0` i `G1` pokreti, `M5` na kraju. X0 Y0 je donji lijevi ugao posla, osim ako izaberete početak crteža: postavite nulu rada svoje mašine tamo.

## Slanje iz pregledača

U Chromeu i Edgeu, {{ui:Poveži…}} traži da izaberete USB port lasera. Ništa se ne povezuje i ništa ne šalje dok ne pritisnete dugme. Prvo pritisnite {{ui:Ocrtaj posao}}: glava ocrtava okvir posla s **isključenim** laserom (ili na niskoj snazi koju postavite za pokazivač) da vidite gdje će paliti. Tek tada se uključuje {{ui:Pošalji posao}}, i ponovo se isključuje ako nešto promijenite. {{ui:Pauziraj}} zadržava glavu, {{ui:Zaustavi}} je takođe zadržava, resetuje kontroler (laser se gasi) i šalje `M5`. Gdje Web Serial nedostaje (Firefox, Safari i CadCraft Studio, koji još nema Web Serial), panel nudi samo spašavanje: spasite G-kod i pošaljite ga sa vlastitim programom lasera.

## Još nije napravljeno

Još nije napravljeno: formati drugih kontrolera (Ruida, Marlin laseri, datoteke proizvođača), kartice i uvodni (lead-in) dijelovi, odmak reza (kerf), biblioteke materijala, rotacijske i Z ose, poravnanje kamerom, tekst kao konture.
