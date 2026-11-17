---
title: Skenirane risbe in sledenje
summary: Vstavite skenirani list, ga umerite in poravnajte, očistite, izbrišete dele, se prilepite na njegove črte in ga sledite v črte in loke.
keywords: skeniranje, skenirana risba, rastrska, tiff, jpeg, png, merilo, poravnava, izravnava, odstranjevanje pik, prag, črno-belo, obrezovanje, brisanje, sledenje, vektorizacija, lovljenje, loki, šrafura, papirnate risbe, stare risbe, scanattach, scantrace
from: 36227e5b
---

## Od papirnatega lista do objektov risbe

Skenirana risba je slika. CadCraft ohrani sliko, ki ste jo dali, in je nikoli ne spremeni: vsak korak čiščenja ustvari novo sliko, z enim korakom razveljavitve za vsakega, {{cmd:SCANINFO}} pa našteje izvirno datoteko in korake, storjene od takrat. Nič ni poslano nikamor in nič ne ugiba model, naučen na podatkih: čiščenje in sledenje sta običajna obdelava slik in tečeta na vašem računalniku.

1. **Vstavite jo.** {{cmd:SCANATTACH}} prebere PNG, JPEG, TIFF (eno stran ali vse strani večstranske datoteke) ali stran PDF, ki je slika. Vpraša za stran, spodnji levi vogal in širino. Pri strani PDF vpraša tudi, koliko pikslov na palec naj stran nariše.
2. **Določite merilo.** {{cmd:SCANSCALE}}: izberite dve točki na skenu, nato vnesite pravo razdaljo med njima. List se umeri glede na prvo točko.
3. **Poravnajte ga.** {{cmd:SCANALIGN}}: izberite dve točki na skenu in dve mesti, kamor spadata; list se premakne in obrne, da se prilega, in se tudi preoblikuje po merilu, razen če odgovorite z No.
4. **Izravnajte ga.** {{cmd:SCANDESKEW}} izmeri kot, pod katerim ležijo dolge črte lista, ga prikaže skupaj z zanesljivostjo. Sprejmite ga ali vnesite svojega, list pa se obrne. List z malo dolgimi črtami dobi opozorilo: preverite kot, preden ga sprejmete.
5. **Očistite ga.** {{cmd:SCANCLEAN}} naredi list črno-belim (Samodejno najprej izenači papir; Prilagodljivo natančneje sledi spremembam papirja; Raven je ena vrednost za ves list) in odstrani pike do velikosti, ki jo nastavite.
6. **Obrežite in izbrišite.** {{cmd:SCANCROP}} ohrani okno. {{cmd:SCANERASE}} izbriše pravokotnik, mnogokotnik ali lasso (pritisnite in vlecite): žige, opombe, sled kavne skodelice.

Očiščena slika je tisto, kar shranjena datoteka DWG vsebuje (IMAGE in njegov IMAGEDEF, z datoteko slike poleg risbe, kot pri vsaki sliki).

## Prilepitev na črte skena

Ko je {{cmd:RASTERSNAP}} vklopljen (privzeto), lovljenje objektov najde tudi črte črno-belega skena: konce črt, njihove sredine, vogale in križišča, prikazane z običajnimi oznakami lovljenja. Del lista pod kazalcem se sledi, ko se premikate; približajte dovolj, da je en piksel nekaj zaslonskih pikslov. Črta, daljša od sledenega dela, se sledi do svojih koncev.

## Sledenje

{{cmd:SCANTRACE}} pretvori črte lista v črte in loke na novem sloju (SCAN-TRACE), kot en korak razveljavitve, pri čemer skeniranje ostane pod njimi. Nastavite:

- **Toleranca:** kako daleč sme sledena črta ali lok ležati od črt na skenu, v enotah risbe (poročilo navaja tudi piksle). Ozka toleranca sledi vsakemu nihaju; ohlapna naredi manj, bolj ravnih kosov.
- **Okno:** vogal lista ali cel list.
- **Loki:** izklop naredi samo črte.
- **Ostanki:** kar sledenje pusti pri miru, je narisano kot škatle na sloju, ki ga lahko izklopite, ali pa sploh ni narisano.

Sledenje najde središče vsake poteze, ji sledi, prilega ravne črte in krožne loke, združi poteze, ki so bile prekinjene tam, kjer jih je prečkala druga črta, skoraj vodoravne in navpične črte naredi natančno vodoravne in navpične ter sklene vogale. **Besedilo in šrafura ostaneta rastrska:** kosi velikosti pisave se odložijo, snopi kratkih vzporednih črt pa se štejejo za šrafuro in se odložijo.

Ko konča, pove, koliko črt in lokov je naredilo, toleranco in koliko kosov je pustilo kot rastrske. **To je tisto, kar so piksli dali pri tej toleranci, in ni trditev, da je rezultat pravilen.** Primerjajte ga s listom: sledenje lahko zgreši šibko črto, združi dve črti, ki ležita zelo blizu, ali nariše črto tam, kjer je le madež. Če skeniranje najprej očistite (poravnano, črno-belo, brez pik), je rezultat precej boljši.

## Česa ne prebere

TIFF datoteke, shranjene v ploščicah, BigTIFF, TIFF z JPEG ali deflate stiskanjem, kodiranje Group 3 faks in barve, shranjene v ločenih ravninah, so zavrnjeni s sporočilom; shranite jih znova kot trakove z LZW, PackBits, Group 4 ali brez stiskanja. Tudi prepletene datoteke PNG so zavrnjene. Datoteke nad 128 MB ali 100 milijonov pikslov so zavrnjene, okno sledenja pa lahko vsebuje največ 64 milijonov pikslov.
