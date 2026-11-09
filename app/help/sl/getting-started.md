---
title: Začetek dela s CadCraftom
summary: Kaj počne aplikacija za risanje CadCraft, kje deluje in vaša prva risba od prazne površine do shranjene datoteke.
keywords: začetek, prva risba, novo, odpri, shrani, shrani kot, učenje, vodnik, uvod, hitri začetek
from: 1a56c575
---

CadCraft je aplikacija za 2D risanje. Risate in urejate črte, loke, polilinije, besedilo, kote in bloke, pripravljate liste z glavami risb in pogledna okna ter jih izrisujete v PDF. Odpre risbe DWG in DXF ter jih shrani kot DWG ali DXF.

Deluje v vašem spletnem brskalniku. Ni je treba nameščati: spletno mesto vam da naslov, celotna aplikacija se naloži v stran. Vaše risbe se odprejo z vašega računalnika in se shranijo nazaj vanj. **Nič se ne naloži.**

Če ste že kaj risali, preberite po tej strani [Prihod iz drugega programa za risanje](topic:coming-from). Večina navad se prenese, nekatere, ki se ne, so navedene tam.

## Raje z vodnikom?

Vnesite `TOUR` (ali kliknite {{ui:Ogled vodnika}} na začetni kartici ali {{ui:Nastavitve}} › {{ui:CadCraft}} › {{ui:Znova opravite vodnik}}). Šest kratkih korakov v okvirju nad risbo: narišite črto in krožnico, premaknite jo, prirežite, nekaj izbrišite in to koti. Vsak korak se dokonča, ko ga opravite, lahko pa preskočite korak ali celoten vodnik. Začne se sam, samo prvič. [Hitri pregled](topic:cheat-sheet) ima 40 ukazov, ki jih boste uporabljali najpogosteje, [zemljevid ukazov](topic:command-map) pa vse ukaze.

## Kaj potrebujete

- Nedavni Chrome, Edge, Firefox ali Safari na računalniku Mac, Windows ali Linux. Glejte [Brskalniki in platforme](common:browsers).
- Najbolj udobna je miška s kolescem. Sledilna ploščica deluje; glejte [Miška, sledilna ploščica in dotik](topic:mouse-trackpad-touch).
- Tipkovnica. CadCraft poganjate z vtipkanimi ukazi, kot večina programov za risanje.

## Ideja v enem odstavku

Vnesete ukaz (ali kliknete njegov gumb), ukazna vrstica na dnu pa vas vpraša eno vprašanje naenkrat: „Določite prvo točko“, „Določite naslednjo točko“. Na vsako vprašanje odgovorite s klikom v risbo ali z vnosom vrednosti, nato pritisnite {{key:Enter}}. {{key:Esc}} prekliče. To je celoten način interakcije; vse drugo so podrobnosti.

## Vaša prva risba

Narisali boste pravokotnik 4000 na 3000 iz črt, v sredino postavili krožnico in shranili datoteko.

1. Odprite CadCraft. Ukazna vrstica na dnu prikazuje `Ukaz:`, risalno območje pa kratko kartico „Začni risati“.
2. Vnesite `L` in pritisnite {{key:Enter}}. Ni treba najprej klikniti v ukazno vrstico: vse, kar vnesete, gre tja.
3. Poziv se spremeni v `Določite prvo točko:`. Vnesite `0,0` in pritisnite {{key:Enter}}.
4. Vnesite `@4000,0` in pritisnite {{key:Enter}}. Pojavi se črta, ki teče desno. `@` pomeni „od zadnje točke“.
5. Vnesite `@0,3000` in pritisnite {{key:Enter}}.
6. Vnesite `@-4000,0` in pritisnite {{key:Enter}}.
7. Vnesite `C` in pritisnite {{key:Enter}}. `C` je možnost Zapri (C): zadnja črta se vrne na prvo točko in ukaz se konča.
8. Kliknite {{ui:Obseg}} v skupini Pogled orodne vrstice. Pravokotnik zapolni zaslon.

Zdaj bi morali videti štiri črte, ki tvorijo pravokotnik, zgodovina nad ukazno vrstico pa navaja, kaj ste vnesli.

9. Vnesite `C` in pritisnite {{key:Enter}}, da začnete ukaz za krožnico.
10. Vnesite `2000,1500` in pritisnite {{key:Enter}} za središče.
11. Vnesite `500` in pritisnite {{key:Enter}} za polmer.

Krožnica se pojavi v sredini pravokotnika.

12. Pritisnite {{key:Mod+S}} ali kliknite {{ui:Shrani}} v skupini Datoteka.

Brskalnik prenese `Drawing1.dwg` v vašo običajno mapo za prenose, zgodovina pa pove, da je shranjena kopija kot DWG. Ta datoteka se znova odpre v CadCraftu in v večini drugih CAD programov. (Če ste prej v {{ui:Shrani kot}} v tem brskalniku izbrali DXF, nova risba se namesto tega shrani kot `Drawing1.dxf`.)

:::tip
Pritisnite {{key:Enter}} v prazni ukazni vrstici za ponovitev zadnjega ukaza. Če raje uporabljate {{key:Space}}, namesto {{key:Enter}}: zunaj besedila naredi isto.
:::

## Odprite obstoječo risbo

1. Pritisnite {{key:Mod+O}} ali kliknite {{ui:Odpri}}.
2. V izbirniku datotek izberite datoteko `.dwg` ali `.dxf`.

Datoteko DWG ali DXF lahko tudi povlečete iz {{pick:mac=Finder|windows=Raziskovalca|linux=vašega upravitelja datotek}} in spustite na risalno območje. Datoteka se prebere na strani; nikoli ne zapusti vašega računalnika.

Glejte [Datoteke: kaj se odpre, kaj se shrani](topic:files) za to, kaj se ohrani in kaj pretvori.

## Shranjevanje: kaj pričakovati

Shranjevanje v brskalniku deluje drugače kot v namiznem programu:

- {{ui:Shrani}} vedno **prenese novo kopijo**. Ne prepiše datoteke, ki ste jo odprli. Če datoteka z istim imenom že obstaja v mapi za prenose, brskalnik običajno doda številko, na primer `Drawing1 (1).dwg`.
- {{ui:Shrani}} uporabi obliko risbe: DWG, če ste odprli DWG, DXF, če ste odprli DXF. Za izbiro pritisnite {{key:Mod+Shift+S}} ali kliknite {{ui:Shrani kot}}, nato izberite {{ui:DWG}} (in njegovo različico), {{ui:DXF R12}} ali {{ui:DXF 2000}}. Glejte [Shranjevanje](topic:files#saving).
- Datoteka, ki ste jo odprli, se nikoli ne spremeni.
- Odpiranje druge datoteke ali {{ui:Nova}} jo da v svoj zavihek nad risbo, tako da nič, kar imate odprto, ni zaprto. Če zaprete zavihek risbe ali zapustite stran z neshranjenimi spremembami, CadCraft najprej vpraša: {{ui:Najprej shrani kopijo}}, zavrzi ali {{ui:Prekliči}}. Zapiranje zavihka brskalnika prikaže brskalnikovo lastno vprašanje „Zapustiti stran?“.

Shranjevanje v oblak še ni na voljo. Kam gredo vaše datoteke in zakaj ostanejo zasebne, je razloženo v [Vaše datoteke in zasebnost](common:your-files).

## Kam naprej

Pritisnite {{key:F1}} ali kliknite {{ui:Pomoč}} v vrstici na vrhu, da to pomoč kadar koli odprete ob risbi. Deluje brez povezave.

- [Zaslon CadCraft](topic:workspace) poimenuje vsako vrstico in ploščo.
- [Risanje s koordinatami](topic:draw-with-coordinates) je najboljši prvi vodnik.
- [Tipkovnica in miška](topic:keyboard) našteva vse tipke.
- Vnesite `HELP` v ukazni vrstici za seznam vseh ukazov ali preberite [Referenco ukazov](topic:commands).
