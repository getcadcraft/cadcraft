---
title: Obrnite pogled in uporabite lastne koordinate (UCS)
summary: Obrnite pogled za 90° ali za poljuben kot, ne da bi kaj premaknili v risbi, in nastavite uporabniški koordinatni sistem (UCS), da točke, orto, polarno sledenje, mreža in novo besedilo sledijo lastnim osem stavbe.
keywords: ucs, uporabniški koordinatni sistem, tloris, obrni pogled, zasukaj pogled, zasuk pogleda, ucs z, ucs 3point, ucs object, ucs world, poimenovani ucs, ucsfollow, turnleft, turnright, turnworld, nagnjena stavba, zasukana mreža
from: 6f152c65
---

## Kaj boste spoznali

Kako pogledati risbo obrnjeno, da stavba, narisana pod kotom, na zaslonu izgleda pravokotno, in kako tipkati točke vzdolž njenih lastnih osi. Pri tem se v risbi nič ne premakne: objekti ohranijo svoje koordinate, obrat ni urejanje in risba ni označena kot spremenjena.

## Obrnite pogled za četrtino

1. Kliknite {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}} ali {{ui:Turn view 90° right}}.

Risba se na zaslonu zasuka okoli sredine območja risanja. Ponovite, da nadaljujete z obračanjem.

2. Kliknite {{ui:View}} › {{ui:More}} › {{ui:Back to world}}, da jo spet poravnate.

Ukazi za to so {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} in {{cmd:TURNWORLD}}. Če želite enemu od njih dati tipko, dodajte vrstico, kot je `TL=TURNLEFT`, med svoje vzdevke z {{cmd:ALIASEDIT}}.

## Poravnajte z nagnjeno stavbo

1. Vnesite `UCS` in pritisnite {{key:Enter}}, nato `OB` in {{key:Enter}}.
2. Kliknite črto stene blizu konca, ki naj bo izhodišče.

UCS se zdaj začne na tem koncu, njegova os X poteka vzdolž stene, pogled pa se obrne tako, da je stena na zaslonu vodoravna. Ikona osi v spodnjem levem kotu kaže, kam kažejo osi UCS.

3. Risite kot običajno. Ko je UCS nastavljen:
   - `x,y` in `@dx,dy` se merita vzdolž osi UCS; `d<a` meri kot od osi X UCS.
   - {{ui:Ortho}}, polarno sledenje in mreža sledijo osem UCS, prav tako navzkrižnica.
   - Novo besedilo in novi odstavki tečejo vzdolž osi X UCS; tudi vodoravna in navpična {{cmd:DIMLINEAR}} sledita njej.
   - Koordinate v vrstici stanja in iz {{cmd:ID}} so koordinate UCS.
4. Če želite tipkati svetovno točko, medtem ko je UCS nastavljen, pred njo postavite `*`: `*0,0` ali `@*100,0`.
5. Vnesite `UCS`, {{key:Enter}}, nato še enkrat {{key:Enter}}, da se vrnete v svet.

## Drugi načini nastavitve UCS

Na pozivu {{cmd:UCS}}:

| Vnesete | Kaj naredi |
|---|---|
| točko | Nov izhodišče; nato kliknite točko na novi osi X ali pritisnite {{key:Enter}}, da obdržite kot |
| `Z` | Zasuče UCS okoli njegovega izhodišča za kot, ki ga vnesete (stopinje, v nasprotni smeri urnega kazalca) ali izberete |
| `3` (3 točke) | Izhodišče, točka vzdolž pozitivne osi X in točka na pozitivni strani Y |
| `OB` (Objekt) | Iz črte, loka, krožnice, odseka polilinije, besedila, sklica na blok, točke ali konstrukcijske črte |
| `P` (Prejšnji) | UCS pred tem (zadnjih deset se hrani, dokler je risba odprta) |
| `W` (Svet) | Nazaj na svet |
| `NA` (Poimenovan) | `S` shrani trenutni UCS pod imenom, `R` obnovi enega, `D` izbriše enega, `?` jih našteje |

Vsaka sprememba obrne pogled tako, da je nova os X UCS vodoravna. {{cmd:PLAN}} obrne pogled brez spremembe UCS: {{key:Enter}} za trenutni UCS, `U` za shranjenega, `W` za svet.

## Dobro je vedeti

- Vsaka polovica razdeljenega zaslona ohrani svoj obrat. UCS pripada risbi.
- Listi delajo v papirnih koordinatah; UCS nastavite na zavihku {{ui:Model}} ali znotraj pogleda.
- Izbirna okna, povlečena v obrnjenem pogledu, izberejo to, kar leži v njih na zaslonu.
- Rutine LISP dobijo točke v UCS iz `getpoint`, lahko berejo `UCSORG`, `UCSXDIR`, `UCSYDIR` in `VIEWTWIST`, `trans` pa pretvarja med svetom, UCS in prikazom.

:::note
Shranjena datoteka ohrani UCS in obrat pogleda v poznejši različici; do takrat veljata, dokler je risba odprta.
:::
