---
title: Crtajte pomoću koordinata
summary: Nacrtajte tačan obris poda kucajući apsolutne, relativne i polarne koordinate, te unos direktnog rastojanja.
keywords: linija, pline, polilinija, koordinate, relativno, polarno, apsolutno, direktno rastojanje, @, unos tačaka, tačno, ortogonalno
from: 19e82350
---

## Šta ćete napraviti

Obris prostorije u obliku slova L, 6000 sa 4500, s izrezom 2000 sa 1500, nacrtan tačno, plus zid pod 30 stepeni. Koristićete sva četiri načina unosa tačke. Radite u milimetrima: jedna jedinica crteža predstavlja jedan milimetar.

Kratki pregled svih formata nalazi se u [Unos koordinata i rastojanja](topic:coordinate-entry).

## Prije nego počnete

1. Otvorite CadCraft. Ako je crtež otvoren, prvo kliknite {{ui:Nova}}.
2. Pritisnite {{key:Esc}} da ništa ne bude označeno. Desni panel glasi {{ui:Trenutne postavke}}.
3. Postavite {{ui:Jedinice}} na {{ui:Milimetri}}. Ništa se ne mijenja po veličini; ovo samo govori listovima i štampanju šta znači jedna jedinica.

## Apsolutne koordinate: prva tačka

Apsolutna koordinata je pozicija mjerena od ishodišta, upisana kao `x,y`.

1. Upiši `L` i pritisni {{key:Enter}}. Upit glasi `Specify first point:`.
2. Upiši `0,0` i pritisni {{key:Enter}}.

Linija se sada razvlači od ishodišta do nišana. Koordinate u statusnoj traci pokazuju rastojanje i ugao od početne tačke dok se pomjerate.

## Relativne koordinate: @dx,dy

Relativna koordinata se upisuje kao `@dx,dy`: toliko vodoravno, toliko okomito, od zadnje tačke. Negativni brojevi idu lijevo ili dolje.

3. Upiši `@6000,0` i pritisni {{key:Enter}}. Linija od 6000 ide udesno.
4. Upiši `@0,3000` i pritisni {{key:Enter}}.
5. Upiši `@-2000,0` i pritisni {{key:Enter}}.
6. Upiši `@0,1500` i pritisni {{key:Enter}}.

Trebalo bi da vidite četiri povezane linije koje se penju duž desne strane prostorije.

## Unos direktnog rastojanja: sam broj

Kada upišete samo jedan broj, CadCraft ide tim rastojanjem u smjeru nišana. Uključite Ortogonalno da se smjer poravna vodoravno ili okomito.

7. Pritisni {{key:F8}}, ili klikni {{ui:Ortogonalno}} u statusnoj traci. Statusna traka kaže "Ortogonalno uključeno".
8. Pomjerite nišan lijevo od zadnje tačke. Gumena linija ostaje vodoravna.
9. Upiši `4000` i pritisni {{key:Enter}}. Linija ide 4000 ulijevo.
10. Pomjerite nišan ispod zadnje tačke.
11. Upiši `4500` i pritisni {{key:Enter}}. Vratili ste se na početnu tačku.
12. Pritisnite {{key:Enter}} na praznom upitu da završite naredbu.

:::mac
F8 može upravljati reprodukcijom medija na Mac tastaturi. Držite **fn** i pritisnite F8, ili kliknite {{ui:Ortogonalno}}. Pogledajte [Tasteri, miševi i tačpedovi](common:keys).
:::

Sada imate zatvoreni obris u obliku slova L od šest zasebnih linija.

13. Kliknite {{ui:Granice}} da vidite sve.

## Polarne koordinate: @rastojanje<ugao

Polarna koordinata se upisuje kao `@rastojanje<ugao`. Uglovi su u stepenima, mjereni suprotno od kazaljke na satu od pozitivnog smjera X: 0 je desno, 90 je gore, 180 je lijevo, 270 (ili -90) je dolje.

14. Upiši `L` i pritisni {{key:Enter}}.
15. Upiši `6000,0` i pritisni {{key:Enter}} da počnete u donjem desnom uglu.
16. Upiši `@2500<-30` i pritisni {{key:Enter}}. Linija od 2500 polazi iz ugla, usmjerena dolje i udesno, pod 30 stepeni ispod horizontale.
17. Pritisnite {{key:Enter}} da završite naredbu.

Polarna koordinata bez `@`, kao `2500<30`, mjeri se od ishodišta umjesto od zadnje tačke.

## Isti obris kao jedna polilinija

Šest zasebnih linija je u redu za mnoge poslove, ali polilinija je jedan objekat: može se ofsetovati, mjeriti i označiti kao cjelina. Koristite {{cmd:PLINE}} s istim unosom.

1. Upiši `PL` i pritisni {{key:Enter}}.
2. Upiši `0,-6000` i pritisni {{key:Enter}} da počnete ispod prvog obrisa.
3. Upiši `@6000,0`, zatim pritisni {{key:Enter}}.
4. Upiši `@0,3000`, zatim pritisni {{key:Enter}}.
5. Upiši `@-2000,0`, zatim pritisni {{key:Enter}}.
6. Upiši `@0,1500`, zatim pritisni {{key:Enter}}.
7. Upiši `@-4000,0`, zatim pritisni {{key:Enter}}.
8. Upiši `C` i pritisni {{key:Enter}}. Polilinija se zatvara i naredba završava.
9. Kliknite novi obris. Desni panel prikazuje "Polilinija", njene {{ui:Vrhovi}}, {{ui:Dužina}} i, jer je zatvorena, njenu {{ui:Površina}}.

Površina bi trebalo da glasi 24000000 (kvadratnih milimetara, što je 24 kvadratna metra).

## Opcije tokom crtanja

- U {{cmd:LINE}} i {{cmd:PLINE}} upiši `U` i pritisni {{key:Enter}} da poništiš zadnji segment, bez napuštanja naredbe.
- U {{cmd:LINE}}, `C` zatvara natrag na prvu tačku kada ima najmanje dva segmenta.
- U {{cmd:PLINE}}, `A` prelazi na lučne segmente (svaki luk se glatko nastavlja od prethodnog segmenta), a `L` vraća na linije. U režimu lukova, opcija zatvaranja je `CL`.
- Pritisak na {{key:Enter}} kod `Specify first point:` u {{cmd:LINE}} počinje od zadnje tačke koju ste zadali, pa možete nastaviti gdje ste stali.

## Česte greške

- **Upisali ste `6000,0` a mislili ste `@6000,0`.** Bez `@`, tačka se mjeri od ishodišta, a ne od zadnje tačke, pa linija ode na neočekivano mjesto. U CadCraftu je `x,y` uvijek apsolutno. Pritisnite `U` i {{key:Enter}} da je vratite.
- **Zarez upisan kao decimalna tačka.** Decimale se pišu tačkom: `1250.5`. Zarez uvijek razdvaja X od Y.
- **Direktno rastojanje je išlo pogrešnom stranom.** Goli broj prati nišan. Pomjerite nišan na stranu na koju želite prije nego pritisnete {{key:Enter}}, i uključite {{ui:Ortogonalno}} za prave linije.
- **"Point or option keyword required."** Potrebna je tačka ili ključna riječ opcije. CadCraft nije razumio šta ste upisali. Provjerite ima li razmaka unutar broja ili nedostaje zarez, pa ponovo upišite.
- **Stope i inči.** CadCraft čita samo obične brojeve. Upišite `150` za 12'-6" u crtežu u inčima, ili `12.5` u crtežu u stopama.
