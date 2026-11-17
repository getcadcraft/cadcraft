---
title: Premakni, kopiraj, zasukaj, spremeni merilo, zrcali, raztegni in matrika
summary: Razporedite pohištvo v sobi z osnovnimi ukazi za spreminjanje, z izhodiščnimi točkami, vtipkanimi razdaljami in razveljavitvijo.
keywords: premakni, kopiraj, zasukaj, spremeni merilo, zrcali, raztegni, matrika, združi, matchprop, ujemanje lastnosti, painter, arrayrect, arraypolar, polarna matrika, izbriši, razstavi, razveljavi, uveljavi, izhodiščna točka, premik, spreminjanje, poravnaj, razporedi, poravnaj v vrsto, enakomerno razporedi
from: 8eaeee6c
---

## Kaj boste naredili

Mizo z enim stolom, kopiranim okoli mize, zasukanim, zrcaljenim in spremenjenim po velikosti. Pri tem uporabite {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} in {{cmd:UNDO}}.

## Narišite dele

1. Vtipkajte `REC` in pritisnite {{key:Enter}}, vtipkajte `0,0` in pritisnite {{key:Enter}}, nato vtipkajte `@1800,900` in pritisnite {{key:Enter}}. To je miza.
2. Vtipkajte `REC` in pritisnite {{key:Enter}}, vtipkajte `300,-700` in pritisnite {{key:Enter}}, nato vtipkajte `@450,450` in pritisnite {{key:Enter}}. To je stol pod mizo.
3. Kliknite {{ui:Obseg}}.

## Premik: izhodiščna točka, nato druga točka

Vsak premik, kopiranje, zasukanje in spremembo merila začnete pri **izhodiščni točki**: točki, ki se prenaša, ali okoli katere se zasuka.

1. Kliknite stol, da ga izberete.
2. Vtipkajte `M` in pritisnite {{key:Enter}}. Zgodovina pokaže `1 found`.
3. Pri `Specify base point` se pripnite na zgornji levi kot stola (Krajišče) in kliknite.
4. Pri `Specify second point` vtipkajte `@0,200` in pritisnite {{key:Enter}}.

Stol se premakne za 200 navzgor, bliže k mizi.

:::tip
Pri `Specify base point` vtipkajte `D`, če želite namesto tega podati premik: CadCraft nato vpraša `Specify displacement`, vi pa vtipkate, kako daleč vodoravno in navpično, na primer `0,200` (znak `@` ni potreben).
:::

## Kopiraj, kolikorkrat želite

1. Kliknite stol.
2. Vtipkajte `CO` in pritisnite {{key:Enter}}.
3. Pripnite se na spodnji levi kot stola in kliknite kot izhodiščno točko.
4. Vtipkajte `@600,0` in pritisnite {{key:Enter}}. Kopija se pojavi 600 desno.
5. Ponovno vtipkajte `@600,0` in pritisnite {{key:Enter}}. Druga kopija se pojavi 1200 desno od izvirnika.
6. Za konec ukaza pritisnite {{key:Enter}}.

{{cmd:COPY}} teče, dokler ne pritisnete {{key:Enter}}. Vsaka kopija je postavljena za razdaljo od izhodiščne točke do točke, ki jo vnesete. Točka `@` se meri od zadnje vnesene točke, ki je po prvi kopiji točka te kopije, zato `@600,0` dvakrat da kopije na 600 in 1200. Vtipkajte `U` in pritisnite {{key:Enter}}, da zadnjo kopijo odstranite, ne da zapustite ukaz.

Pod mizo bi morali videti tri stole v vrsti.

:::tip
{{cmd:COPY}} je za kopije znotraj ene risbe, postavljene z izhodiščno točko. Za prenos predmetov v drugo risbo ali zavihek ali za kasnejše prilepljenje uporabite odložišče: {{key:Mod+C}}, nato {{key:Mod+V}}. {{key:Mod+D}} naredi eno kopijo, ki se premika s kazalcem. Glejte [Kopiraj, prilepi in podvoji](topic:copy-paste).
:::

## Zrcali vrsto na drugo stran

1. Povlecite okno sekanja (z desne proti levi) čez tri stole, ne da se dotaknete mize.
2. Vtipkajte `MI` in pritisnite {{key:Enter}}.
3. Pri `Specify first point of mirror line` se pripnite na razpolovišče leve stranice mize in kliknite.
4. Pri `Specify second point of mirror line` se pripnite na razpolovišče desne stranice mize in kliknite.
5. Pri `Erase source objects? [Yes/No] <N>` pritisnite {{key:Enter}}, da jih obdržite.

Pod mizo bi morali videti tri stole, nad mizo pa tri zrcaljene stole. Besedilo v zrcaljenem izboru ostane berljivo: postavljeno je zrcaljeno, vendar ni zapisano nazaj.

## Zasukaj stol

1. Kliknite najbolj desni stol pod mizo.
2. Vtipkajte `RO` in pritisnite {{key:Enter}}.
3. Pripnite se na spodnji desni kot stola in kliknite kot izhodiščno točko.
4. Vtipkajte `90` in pritisnite {{key:Enter}}.

Stol se zasuče za 90 stopinj v nasprotni smeri urnega kazalca okoli izhodiščne točke. Negativen kot zasuka v smeri urnega kazalca. Namesto tipkanja lahko kliknete drugo točko: kot se meri od izhodiščne točke do te točke.

## Spremeni merilo mize

1. Izberite mizo.
2. Vtipkajte `SC` in pritisnite {{key:Enter}}.
3. Pripnite se na spodnji levi kot mize in kliknite kot izhodiščno točko.
4. Vtipkajte `1.2` in pritisnite {{key:Enter}}.

Miza je za 20 % večja in raste stran od izhodiščne točke. Faktor pod 1 jo naredi manjšo.

:::note
Če namesto vtipkanega faktorja merila kliknete točko, je faktor razdalja od izhodiščne točke do te točke. Klik na eno enoto risbe stran da faktor 1. Običajno je bolje vtipkati število.
:::

## Razveljavi in uveljavi

- {{key:Mod+Z}}, gumb {{ui:Razveljavi}} ali `U` in nato {{key:Enter}} razveljavi zadnji ukaz. Ves ukaz je en korak: razveljavitev {{cmd:COPY}}, ki je naredil pet kopij, odstrani vseh pet.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, gumb {{ui:Uveljavi}} ali `REDO` ga vrnejo.
- Zgodovina pove, kaj je bilo razveljavljeno („Razveljavljeno: COPY“).

CadCraft hrani zadnjih 500 korakov. Nastavitve sloja (vklop, zamrznitev, zaklep, barva) so nastavitve, ne urejanja, in se ne razveljavijo.

## Razširi sobo v širino

{{cmd:STRETCH}} (`S` ali {{ui:Raztegni}}) premakne samo tisto, kar leži v oknu sekanja: koti in konci črt znotraj njega se premaknejo, vse drugo ostane na mestu, zato se soba razširi namesto da bi se premaknila.

1. Vtipkajte `S` in pritisnite {{key:Enter}}.
2. Povlecite okno z desne proti levi čez desno steno, da pokrije njene kote in konce vsega, kar se je nanjo stika.
3. Pritisnite {{key:Enter}}.
4. Kliknite izhodiščno točko, nato vtipkajte `@600,0` in pritisnite {{key:Enter}}.

Pravokotnik je 600 širši; črte, ki so se končale na steni, se še vedno končajo na njej. Lok z enim koncem znotraj ohrani svojo višino, krožnice in besedilo se premaknejo, če je njihovo središče ali točka vstavitve znotraj, kota pa izmeri svojo novo dolžino. Predmeti, izbrani posamično brez okna, se preprosto premaknejo.

Lahko izberete tudi najprej: ko ni aktiven noben ukaz, povlecite okno sekanja (ali lasso sekanja) čez steno, nato vtipkajte `S`. STRETCH vzame ta izbor in raztegne, kar je v njegovih oknih, točno tako, kot če bi jih povlekli na njegov lastni poziv.

## Matrika: vrste in stolpci ali okoli središča

{{cmd:ARRAY}} (`AR` ali {{ui:Matrika}}) kopira izbor v mrežo ali v krog.

1. Izberite stol, vtipkajte `AR` in pritisnite {{key:Enter}}. Pritisnite {{key:Enter}} za Pravokotno (R).
2. Prikaže se predogled 4 stolpcev in 3 vrstic. Vtipkajte `COU`, pritisnite {{key:Enter}}, nato `5` za stolpce in `2` za vrstice.
3. Vtipkajte `S`, pritisnite {{key:Enter}}, nato `600` med stolpci in `-900` med vrsticami (negativno gre navzdol).
4. Pritisnite {{key:Enter}}, da naredite kopije.

Za krožno ureditev stolov okoli mize izberite `PO` (Polarno) namesto tega, kliknite središče mize in nastavite `I` (elementi), `F` (kot polnjenja: 360 za ves krog, 180 za polovico) in `ROT` (ali se kopije zasukajo proti središču). {{cmd:ARRAYRECT}} in {{cmd:ARRAYPOLAR}} preskočita vprašanje.

## Združi dele v eno polilinijo

{{cmd:JOIN}} (`J` ali {{ui:Spreminjanje}} › {{ui:Več}} › {{ui:Združi}}): izberite črte, loke in odprte polilinije, katerih konci se stikajo, in pritisnite {{key:Enter}}. Postanejo ena polilinija, zaprta, če obkroža vse, in jo lahko nato naenkrat odmaknete. Črte, ki ležijo na eni premici, postanejo ena črta tudi z vmesnimi vrzelmi; loki ene krožnice postanejo en lok ali krožnica.

## Ujemanje lastnosti

{{cmd:MATCHPROP}} (`MA` ali {{ui:Spreminjanje}} › {{ui:Več}} › {{ui:Ujemanje lastnosti}}): kliknite predmet, čigar videz želite, nato izberite predmete za spremembo in pritisnite {{key:Enter}}. Prevzamejo njegov sloj in barvo; besedilo prevzame višino, kota pa svoje velikosti, šrafura pa vzorec. Pri drugem vprašanju vtipkajte `S` (Nastavitve), da kaj od tega izključite.

## Poravnaj predmete

**Po točkah.** {{cmd:ALIGN}} (`AL` ali {{ui:Spreminjanje}} › {{ui:Več}} › {{ui:Poravnaj}}): izberite predmete in pritisnite {{key:Enter}}, nato kliknite točko na njih (vir) in kam naj pride (cilj).

- En par jih premakne. Pri `Specify second source point` pritisnite {{key:Enter}}, da se ustavite.
- Dva para jih tudi zasukata, tako da črta med obema izvornima točkama leži vzdolž črte med obema ciljnima točkama. CadCraft nato vpraša `Scale objects based on alignment points?`: Da (Y) jih tudi toliko poveča ali zmanjša.
- Tretji par jih zrcali, kadar sta njegovi točki na nasprotnih straneh te črte.

**Robovi in razmik.** {{ui:Spreminjanje}} › {{ui:Več}} › {{ui:Poravnaj in razporedi}} (ali `ALIGNPANEL`) odpre majhno podokno čez risbo. Izberite predmete, nato:

- izberite, s čim poravnati, v {{ui:Poravnaj na}} (celoten izbor, prvi ali zadnji izbrani predmet ali točka, na katero kliknete), nato kliknite {{ui:Levo (L)}}, {{ui:Središče}}, {{ui:Desno}}, {{ui:Zgornji}}, {{ui:Na sredini}} ali {{ui:Spodnji}};
- ali izberite {{ui:Enaki razmiki}} ali {{ui:Enaka središča}} in kliknite {{ui:Vodoravno}} ali {{ui:Navpično}}: zunanja dva predmeta ostaneta, ostali se enakomerno razporedijo med njima (vsaj trije predmeti).

Vsak klik je en korak razveljavitve, izbor pa ostane, zato lahko poskusite drugače. Vsak predmet se šteje po svojem omejevalnem okviru, v UCS, če je nastavljen. V ukazni vrstici sta isto {{cmd:ALIGNTO}} in {{cmd:DISTRIBUTE}}.

## Izbriši in razstavi

- {{cmd:ERASE}} (`E` ali {{key:Delete}}) odstrani izbrane predmete.
- {{cmd:EXPLODE}} (`X`) razbije polilinijo na črte in loke, sklic na blok v njegove predmete, kota pa na črte, puščice in besedilo. Razstavljene kote se ne merijo več same.

## Pogoste napake

- **Vnos razdalje brez `@` pri drugi točki.** `600,0` je absolutna točka 600,0, ne „600 desno“. Uporabite `@600,0` ali samo `600`, pri čemer navzkrižni kazalec kaže v pravo smer.
- **Zasuk je šel v napačno smer.** Pozitivni koti se zasukajo v nasprotni smeri urnega kazalca.
- **Razveljavitev je odstranila več, kot ste pričakovali.** Ena razveljavitev vzame nazaj ves zadnji ukaz, vključno z vsemi kopijami, ki jih je naredil.
- **Ukaz ni vprašal po izboru predmetov.** Predmeti so bili že izbrani, zato jih je uporabil. Najprej pritisnite {{key:Esc}}, da začnete brez izbora.
