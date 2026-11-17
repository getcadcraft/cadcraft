---
title: Vnos koordinat in razdalj
summary: Vsi načini vnosa točke, razdalje, kota ali števila v ukazno vrstico CadCraft, s primeri.
keywords: dinamični vnos, dyn, f12, tab, koordinate, absolutno, relativno, polarno, @, neposredna razdalja, kot, stopinje, zadnja točka, lastpoint, vnos točk, vnos, aritmetika, izračun, kalkulator, cal, plus, ulomek, izraz
from: 7de9252d
---

## Točke

Kadar poziv zahteva točko, vnesite eno od teh oblik in pritisnite {{key:Enter}}:

| Vnesete | Pomen | Primer |
|---|---|---|
| `x,y` | Absolutno: merjeno od izhodišča 0,0 | `2500,1200` |
| `#x,y` | Prav tako absolutno (sprejeto zaradi navade) | `#2500,1200` |
| `@dx,dy` | Relativno: v vodoravni in navpični smeri od zadnje točke | `@600,0` |
| `@d<a` | Relativno polarno: razdalja in kot od zadnje točke | `@1500<45` |
| `d<a` | Absolutno polarno: razdalja in kot od izhodišča | `3000<90` |
| posamezno število | Neposredna razdalja: toliko od izhodiščne točke proti križcu | `1200` |
| `*x,y`, `@*dx,dy` | Svetovne koordinate, ko je nastavljen UCS | `*0,0` |

Ko je nastavljen UCS ({{cmd:UCS}}), se `x,y`, `@dx,dy` in kot v `d<a` merijo vzdolž osi UCS. Glejte [Zasukajte pogled in uporabite lastne koordinate](topic:ucs-and-turned-view).

Lahko tudi kliknete v risbo; lovljenje objektov in Orto veljata tudi za klike.

Pravila:

- Vejica loči X od Y. Decimalna mesta se pišejo s piko: `1250.75,300`.
- Negativne vrednosti gredo levo in dol: `@-600,0`.
- Ne vnašajte presledkov: {{key:Space}} pošlje vrstico, enako kot {{key:Enter}}.
- Števila lahko uporabljajo eksponente: `1e3` je 1000.
- Enot ne vnašajte, prav tako ne zapisa v čevljih in palcih. Vnašajte preproste številke v enotah risbe.

## Zadnja točka

`@` šteje od **zadnje točke, ki ste jo podali ob katerem koli pozivu za točko**, v kateremkoli ukazu: s klikom, lovljenjem ali vneseno točko. Zapomni si jo tudi med ukazi, zato lahko novo črto začnete `@0,500` stran od mesta, kjer se je prejšnja končala. Preden podate kakršno koli točko, `@` šteje od 0,0.

Nekateri primeri, kjer je to pomembno:

- V {{cmd:COPY}} je po prvi kopiji zadnja točka točka te kopije. `@600,0` dvakrat postavi kopiji 600 in 1200 od izvirnika.
- Potem ko postavite koto, je zadnja točka mesto, kjer ste postavili merilno črto, ne konec kote.

Če ste v dvomih, uporabite absolutno točko, lovljenje ali neposredno razdaljo.

## Vnos neposredne razdalje

Samo število je razdalja od **izhodiščne točke** ukaza (točke, od koder se začne gumijasti trak) proti križcu:

1. Premaknite križec v želeno smer.
2. Vnesite razdaljo in pritisnite {{key:Enter}}.

Z vklopljenim {{ui:Orto}} se smer prilepi na ravno v vodoravni ali navpični smeri, zato je to najhitrejši način za risanje pravokotnih zidov. Če izhodiščne točke ni ali je križec točno nanjo, se število zavrne s sporočilom „Zahtevana je točka ali ključna beseda možnosti.“

## Koti

- V stopinjah, kot preprosto število: `30`, `-45`, `112.5`.
- Merjeno v nasprotni smeri urnega kazalca od pozitivne smeri X (desno): 0 je desno, 90 gor, 180 levo, 270 ali -90 dol.
- Kjer je zahtevan kot (zasuk, kot besedila), lahko tudi kliknete: kot se meri od izhodiščne točke do klika. Preden izhodiščna točka obstaja, prvi klik jo nastavi, poziv pa zahteva drugo točko.

## Razdalje

Kjer je zahtevana razdalja (polmer, odmik, višina besedila, faktor merila):

- vnesite pozitivno število (v risbi v čevljih in palcih tudi `12'6"` ali `6-1/2`: glejte [Čevlji in palci](topic:units-papers-scales#feet-and-inches-and-fractions)), ali
- kliknite točko: razdalja od izhodiščne točke ukaza do nje, ali
- kliknite dve točki, kadar izhodiščne točke ni: poziv se spremeni v `Specify second point`.

Sporočilo „Zahteva pozitivno število ali dve točki.“ pomeni, da vrednost ni bila število ali je bila negativna.

## Računanje z vneseno vrednostjo

Kjerkoli vnesete dolžino, koordinato, kot ali število (ukazna vrstica, dinamični vnos, polja Lastnosti in pogovorna okna), lahko vnesete izračun s `+`, `-`, `*`, `/` in oklepaji, namesto da ga prej izračunate:

| Vnesete | Dobite |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (v risbi v čevljih in palcih) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, v enotah risbe (ko so enote nastavljene) |
| `@4+7/16,0` | točka 4.4375 desno od zadnje |
| `360/7` | kot 51.43 stopinje |

- Vezaj, zapisan v dolžino, je še vedno njen del: `4-7/16` je 4 7/16, `24'-6"` pa je 24 čevljev 6 palcev. Če želite odšteti po oznaki za čevlje, najprej dokončajte dolžino, `24'-0"-6"`, ali zapišite izračun v oklepaje s presledki okoli vezaja, `(24' - 6")` (v oklepajih je presledek res presledek; drugod pa pritisne {{key:Enter}}).
- Preprosto število, prišteto dolžini, je v enotah risbe; če dolžino množite ali delite z njim, se dolžina spremeni v merilu. Dve dolžini, zmnoženi, dasta ploščino, zato je `2'*3'` zavrnjeno.
- Delujejo tudi `abs`, `round`, `ceil` in `floor`: `round(10/3)`.
- Izračun, ki ga ni mogoče prebrati, je zavrnjen z navedbo, kje je napaka, na primer „Izračun se konča prezgodaj (znak 3): manjka vrednost.“ Nič se nikoli ne prebere kot 0. {{cmd:CAL}} izpiše vrednost izračuna.

## Dinamični vnos

{{ui:Dyn}} ({{key:F12}}, v vrstici stanja) prikaže vrednosti ob križcu, medtem ko ukaz zahteva točko.

- Če še ni izhodiščne točke (prva točka črte), sta polji **X** in **Y**.
- Potem sta to **razdalja** in **kot** od zadnje točke.

Vnos še vedno gre v ukazno vrstico; polje ob križcu ga prikazuje, gumijasti trak pa mu sledi.

1. Vnesite vrednost: vpiše se v označeno polje.
2. Pritisnite {{key:Tab}} (ali vejico za X). Vrednost se zaklene (prikazana krepko) in označeno je naslednje polje. Zaklenjena razdalja ohrani gumijasti trak te dolžine, medtem ko z miško ciljate.
3. Vnesite drugo vrednost ali samo ciljajte in pritisnite {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} nariše 50 naravnost navzgor od zadnje točke.

Pritisk {{key:Enter}} po eni vrednosti brez {{key:Tab}} deluje kot vnos neposredne razdalje. Čevlji in palci delujejo tudi v poljih (`12'6"`). Pozivi za razdaljo in kot (polmer kroga, zasuk) prav tako prikažejo svojo vrednost ob križcu.

## Možnosti in privzete vrednosti

- Možnosti so v oglatih oklepajih. Vnesite velike črke možnosti (`D` za `[Premer (D)]`, `C` za `[Zapri (C)]`) in pritisnite {{key:Enter}}. Delujejo tudi daljši začetki besede (`PRE`).
- Privzeta vrednost je v kotnih oklepajih, na primer `<500>`. Za uporabo pritisnite {{key:Enter}} ali desni klik.

## Druge tipkovnice in numerična tipkovnica

Imena ukazov, kratka imena in črke možnosti so latinične črke. Ko je aktivna grška, cirilska (ruska, ukrajinska, beloruska, srbska, makedonska, bolgarska), hebrejska, arabska, perzijska, tajska ali korejska tipkovnica, vam ni treba preklapljati tipkovnic: če beseda, ki ste jo vnesli, takšna, kot je, ni ukaz, kratko ime ali možnost, jo CadCraft prebere glede na pritisnjene tipke. Tipka, označena z `L` na latinični tipkovnici, še vedno začne `LINE`, tipka `C` pa še vedno izbere možnost Zapri (C), ne glede na črko, ki jo ima tipkovnica na njej. Seznam ustreznih ukazov nad ukazno vrstico sledi istemu pravilu. Besedilo, ki ga vnesete tam, kjer ukaz zahteva besedilo (vsebina {{cmd:TEXT}}, ime), se nikoli ne spremeni.

Na tipkovnicah, pri katerih tipka za decimalno vejico na numerični tipkovnici vnese vejico, ta tipka v ukazni vrstici in v poljih s števili vnese piko, zato lahko `12.5` vnesete na numerični tipkovnici. Vejica na glavni tipkovnici še vedno ločuje `x,y`.

Obe možnosti lahko izklopite v {{ui:Nastavitve}}: {{ui:Commands on a non-Latin keyboard layout}} in {{ui:Keypad decimal key}}.

## Prikaz koordinat

Vrstica stanja prikazuje X in Y križca (v UCS, če je nastavljen), po lovljenju in Orto. Ko ima ukaz izhodiščno točko, doda `Δ` z razdaljo in kotom od te točke, na primer `Δ 1500 < 30°`: števila, ki bi jih vnesli kot `@1500<30`.

Za izpis koordinat točke uporabite {{cmd:ID}}, za merjenje med dvema točkama pa {{cmd:DIST}}.
