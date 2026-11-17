---
title: Slanje crteža laseru
summary: Otvorite panel Laser, izaberite šta svaki sloj radi (seči, urezivati, graviranje, ispuna, slika), pregledajte kretanja glave, sačuvajte GRBL G-kod za laser ili ga pošaljite iz pregledača nakon uokviravanja posla.
keywords: laser, laserski sekač, laserski graver, GRBL, G-kod, gcode, graviranje, ispuna, dither, graviranje slike, urezivanje, sečenje, Web Serial, uokviri posao, snaga, brzina, prolazi, LASER, LASERCUT, CNC
from: 72b56db0
---

Panel {{ui:Laser}} pretvara slojeve crteža u program za laser koji radi na GRBL-u (većina hobi i malih radionica sa diodnim i CO2 kontrolerima). Ukucajte `LASER` (ili `LASERCUT`) i pritisnite {{key:Enter}}, ili izaberite {{ui:Laser…}} u meniju {{ui:Više}} u grupi {{ui:Pogled}}. U stilovima sa trakom nalazi se u meniju {{ui:Datoteka}} i pored {{ui:Štampaj}}. Panel se otvara preko crteža i ostaje otvoren dok crtate: pregled prati svaku promenu.

:::warning
Svako podešavanje prvo probajte na otpadu, nosite zaštitne naočare koje odgovaraju vašem laseru, držite poklopac zatvorenim tamo gde ga ima, i nikada ne ostavljajte uključen laser bez nadzora. Brojevi sa kojima počinje sloj su privremene vrednosti, a ne preporuke ni za jedan materijal.
:::

## Šta se šalje

Panel čita model (ne listove), na slojevima koji su uključeni i odmrznuti:

- Linije, lukovi, krugovi, polilinije (segmenti luka ostaju lukovi), elipse i splajnovi. Oblik koji se završava tamo gde počinje smatra se zatvorenim.
- Blokovi se rastavljaju: objekat na sloju 0 unutar bloka ide sa slojem reference bloka.
- Šrafura šalje svoju granicu, pa se našrafiran logo na sloju **Ispuna** popunjava.
- Slika (`IMAGEATTACH`) se gravira na sloju podešenom na **Graviraj sliku**, kada leži pravo (nije okrenuta ili nagnuta) i kada je njena datoteka otvorena u CadCraft-u.
- Tekst, kote, pokazne linije, tačke i pomoćne linije se ne šalju; panel kaže koliko ih je izostavio. Da biste urezali tekst, nacrtajte slova kao oblike ili ih našrafirajte.

Veličine se šalju u milimetrima iz jedinica crteža (`UNITS`): crtež u inčima množi se sa 25.4. Crtež bez podešenih jedinica šalje se tako da je jedna jedinica jedan milimetar. Označite {{ui:Samo izabrani objekti}} da pošaljete deo crteža.

## Izbor šta svaki sloj radi

Svaki sloj sa nečim na sebi je red. {{ui:Radi}} ga postavlja na **Seci**, **Urezuj**, **Graviraj linije**, **Ispuni oblike**, **Graviraj sliku** ili **Ne šalji**, sa {{ui:Snaga %}}, {{ui:Brzina mm/min}} i brojem {{ui:Prolazi}}. Svaka promena je jedan korak opozivanja i čuva se u crtežu: DWG (svaka verzija koju CadCraft čuva) i DXF čuvaju podešavanja, pa se crtež sledeći put otvara sa njima. Drugi programi otvaraju datoteku kao i ranije; vide jedan neiskorišćen blok nazvan CADCRAFT_LASER (čišćenje tamo ga uklanja, i podešavanja sa njim).

- **Ispuna** popunjava unutrašnjost zatvorenih oblika linijama na razmaku {{ui:Prored}}, pod {{ui:Ugao}}, u oba smera ili u jednom, sa prekoračenjem da glava bude na brzini kada se laser uključi; ukrštena šrafura dodaje drugi prolaz pod 90°. Oblik sa rupom ostaje otvoren na mestu rupe.
- **Graviraj sliku** pretvara sliku u tačke (Floyd–Steinberg, Atkinson, uređeno ili prosto crno-belo pri pragu) ili, sa *Nivoi sive*, u promenljivu snagu.
- Redosled: prvo slike i ispune, zatim graviranje linija, pa urezivanja, pa sečenja, da se izrezan deo ne pomera dok se gravira. Unutar jednog sloja putanje idu **prvo unutra** (rupa pre lima u kojem se nalazi), a sledeća je najbliža.

## Pregled, pa čuvanje

Pregled prikazuje šta glava radi: linije koje se urezuju u boji, brza kretanja sivom bojom, i zeleni okvir oko svega što se urezuje. Ispod su veličina, dužina urezivanja i procena vremena (bez ubrzanja; pravi uređaj traje duže). {{ui:Sačuvaj G-kod…}} upisuje GRBL G-kod u laserskom režimu: `$32=1`, `M4` (ili `M3`) sa S vrednostima, `G0` i `G1` kretanja, `M5` na kraju. X0 Y0 je donji levi ugao posla, osim ako izaberete početnu tačku crteža: tamo podesite nulu radnog mesta vaše mašine.

## Slanje iz pregledača

U Chrome-u i Edge-u, {{ui:Poveži…}} traži da izaberete USB port lasera. Ništa se ne povezuje niti šalje dok ne pritisnete dugme. Prvo pritisnite {{ui:Uokviri posao}}: glava ocrtava okvir posla sa **isključenim** laserom (ili na maloj snazi koju ste podesili za pokazivač) da vidite gde će urezivati. Tek tada se uključuje {{ui:Pošalji posao}}, i ponovo se isključuje ako nešto promenite. {{ui:Pauziraj}} zadržava glavu, {{ui:Zaustavi}} je takođe zadržava, resetuje kontroler (laser se gasi) i šalje `M5`. Tamo gde Web Serial nedostaje (Firefox, Safari i CadCraft Studio, koji još nema Web Serial), panel nudi samo čuvanje: sačuvajte G-kod i pošaljite ga sa sopstvenim programom vašeg lasera.

## Još nije napravljeno

Još nije napravljeno: formati drugih kontrolera (Ruida, Marlin laseri, datoteke proizvođača), držači i uvodne linije, kerf pomeraj, biblioteke materijala, rotaciona i Z osa, poravnanje kamerom, tekst kao konture.
