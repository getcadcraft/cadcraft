---
title: Risanje s koordinatami
summary: Natančen oris tlorisa narišite z vpisovanjem absolutnih, relativnih in polarnih koordinat ter z neposrednim vnosom razdalje.
keywords: črta, pline, polilinija, koordinate, relativno, polarno, absolutno, neposredna razdalja, @, vpisovanje točk, natančno, ortho
from: 19e82350
---

## Kaj boste naredili

Oris sobe v obliki črke L, 6000 x 4500 z zarezo 2000 x 1500, narisan natančno, ter stena pod kotom 30 stopinj. Uporabili boste vse štiri načine vpisovanja točke. Delajte v milimetrih: ena enota risbe pomeni en milimeter.

Kratek pregled vseh zapisov je v [Vnos koordinat in razdalj](topic:coordinate-entry).

## Preden začnete

1. Odprite CadCraft. Če je risba odprta, najprej kliknite {{ui:Nova}}.
2. Pritisnite {{key:Esc}}, da nič ni izbrano. Desna plošča kaže {{ui:Trenutne nastavitve}}.
3. Nastavite {{ui:Enote}} na {{ui:Milimetri}}. Nič se ne spremeni v velikosti; to samo pove listom in izrisom, kaj pomeni ena enota.

## Absolutne koordinate: prva točka

Absolutna koordinata je položaj, merjen od izhodišča, vpisan kot `x,y`.

1. Vnesite `L` in pritisnite {{key:Enter}}. Poziv se glasi `Določite prvo točko:`.
2. Vnesite `0,0` in pritisnite {{key:Enter}}.

Črta se zdaj vleče od izhodišča do križca. Koordinate v vrstici stanja kažejo razdaljo in kot od začetne točke, ko se premikate.

## Relativne koordinate: @dx,dy

Relativna koordinata je vpisana kot `@dx,dy`: toliko vodoravno, toliko navpično, od zadnje točke. Negativna števila gredo levo ali navzdol.

3. Vnesite `@6000,0` in pritisnite {{key:Enter}}. Črta 6000 gre desno.
4. Vnesite `@0,3000` in pritisnite {{key:Enter}}.
5. Vnesite `@-2000,0` in pritisnite {{key:Enter}}.
6. Vnesite `@0,1500` in pritisnite {{key:Enter}}.

Videti bi morali štiri povezane črte, ki se vzpenjajo po desni strani sobe.

## Neposredni vnos razdalje: samo število

Ko vpišete eno samo število, CadCraft gre za to razdaljo v smeri križca. Vklopite {{ui:Orto}}, da se smer prilepi na vodoravno ali navpično.

7. Pritisnite {{key:F8}} ali kliknite {{ui:Orto}} v vrstici stanja. V vrstici stanja piše „Orto vklopljen“.
8. Premaknite križec levo od zadnje točke. Gumijasta vrvica ostane vodoravna.
9. Vnesite `4000` in pritisnite {{key:Enter}}. Črta gre 4000 levo.
10. Premaknite križec pod zadnjo točko.
11. Vnesite `4500` in pritisnite {{key:Enter}}. Ste nazaj na začetni točki.
12. Na praznem pozivu pritisnite {{key:Enter}}, da končate ukaz.

Zdaj imate zaprt oris v obliki črke L iz šestih ločenih črt.

13. Kliknite {{ui:Obseg}}, da vidite vse.

:::mac
Na Mac tipkovnici lahko F8 nadzoruje predvajanje predstavnosti. Držite **fn** in pritisnite F8 ali kliknite {{ui:Orto}}. Glejte [Tipke, miške in sledilne ploščice](common:keys).
:::

## Polarne koordinate: @razdalja<kot

Polarna koordinata je vpisana kot `@razdalja<kot`. Koti so v stopinjah, merjeni v nasprotni smeri urnega kazalca od pozitivne smeri X: 0 je desno, 90 gor, 180 levo, 270 (ali -90) dol.

14. Vnesite `L` in pritisnite {{key:Enter}}.
15. Vnesite `6000,0` in pritisnite {{key:Enter}}, da začnete v spodnjem desnem vogalu.
16. Vnesite `@2500<-30` in pritisnite {{key:Enter}}. Črta 2500 odide iz vogala navzdol in desno, pod kotom 30 stopinj pod vodoravnico.
17. Pritisnite {{key:Enter}}, da končate ukaz.

Polarna koordinata brez `@`, kot `2500<30`, se meri od izhodišča, ne od zadnje točke.

## Isti oris kot ena polilinija

Šest ločenih črt je za mnoga dela v redu, vendar je polilinija en sam objekt: odmakne se, meri in izbere se kot celota. Uporabite {{cmd:PLINE}} z istim vnosom.

1. Vnesite `PL` in pritisnite {{key:Enter}}.
2. Vnesite `0,-6000` in pritisnite {{key:Enter}}, da začnete pod prvim orisom.
3. Vnesite `@6000,0`, nato pritisnite {{key:Enter}}.
4. Vnesite `@0,3000`, nato pritisnite {{key:Enter}}.
5. Vnesite `@-2000,0`, nato pritisnite {{key:Enter}}.
6. Vnesite `@0,1500`, nato pritisnite {{key:Enter}}.
7. Vnesite `@-4000,0`, nato pritisnite {{key:Enter}}.
8. Vnesite `C` in pritisnite {{key:Enter}}. Polilinija se zapre in ukaz se konča.
9. Kliknite nov oris. Desna plošča prikaže „Polilinija“, njena {{ui:Oglišča}}, {{ui:Dolžina}} in, ker je zaprta, njena {{ui:Površina}}.

Površina bi morala biti 24000000 (kvadratnih milimetrov, to je 24 kvadratnih metrov).

## Možnosti med risanjem

- V {{cmd:LINE}} in {{cmd:PLINE}} vpišite `U` in pritisnite {{key:Enter}}, da vzamete nazaj zadnji odsek, ne da zapustite ukaz.
- V {{cmd:LINE}} `C` zapre nazaj na prvo točko, ko sta vsaj dva odseka.
- V {{cmd:PLINE}} `A` preklopi na odseke z loki (vsak lok se gladko nadaljuje iz prejšnjega odseka), `L` pa preklopi nazaj na črte. V načinu lokov je možnost zapiranja `CL`.
- Pritisk {{key:Enter}} pri `Določite prvo točko:` v {{cmd:LINE}} začne od zadnje točke, ki ste jo dali, da lahko nadaljujete, kjer ste nehali.

## Pogoste napake

- **Vpišete `6000,0`, ko ste mislili `@6000,0`.** Brez `@` je točka merjena od izhodišča, ne od zadnje točke, zato črta odleti nekam nepričakovano. V CadCraftu je `x,y` vedno absolutna. Pritisnite `U` in {{key:Enter}}, da jo vzamete nazaj.
- **Vejica, vpisana kot decimalna točka.** Decimalna mesta so s piko: `1250.5`. Vejica vedno ločuje X od Y.
- **Neposredna razdalja gre v napačno smer.** Goli število sledi križcu. Premaknite križec na stran, ki jo želite, preden pritisnete {{key:Enter}}, in vklopite {{ui:Orto}} za ravne črte.
- **„Zahtevana je točka ali ključna beseda možnosti.“** CadCraft ni razumel, kaj ste vpisali. Preverite presledke v številu ali manjkajočo vejico in vpišite znova.
- **Čevlji in palci.** CadCraft prebere samo navadna števila. Vpišite `150` za 12'-6" v palčni risbi ali `12.5` v čevljevi risbi.
