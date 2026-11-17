---
title: Crtanje pomoću koordinata
summary: Nacrtajte tačan obris poda kucanjem apsolutnih, relativnih i polarnih koordinata, kao i direktnim unosom rastojanja.
keywords: linija, pline, polilinija, koordinate, relativno, polarno, apsolutno, direktno rastojanje, @, kucanje tačaka, tačno, ortogonalno
from: 19e82350
---

## Šta ćete napraviti

Obris sobe u obliku slova L, 6000 sa 4500 sa izrezom 2000 sa 1500, nacrtan precizno, plus zid pod 30 stepeni. Koristićete sva četiri načina unosa tačke. Radite u milimetrima: jedna jedinica crteža predstavlja jedan milimetar.

Kratak pregled svih formata nalazi se u [Unos koordinata i rastojanja](topic:coordinate-entry).

## Pre početka

1. Otvorite CadCraft. Ako je crtež otvoren, prvo kliknite {{ui:Novo}}.
2. Pritisnite {{key:Esc}} da ništa ne bude izabrano. Desni panel prikazuje {{ui:Trenutna podešavanja}}.
3. Postavite {{ui:Jedinice}} na {{ui:Milimetri}}. Ništa se ne menja po veličini; ovo samo govori listovima i štampanju šta jedinica znači.

## Apsolutne koordinate: prva tačka

Apsolutna koordinata je položaj izmeren od početka koordinata, ukucan kao `x,y`.

1. Ukucajte `L` i pritisnite {{key:Enter}}. Upit glasi `Specify first point:`.
2. Ukucajte `0,0` i pritisnite {{key:Enter}}.

Linija se sada rasteže od početka do ukrštenog kursora. Koordinate u statusnoj traci pokazuju rastojanje i ugao od početne tačke dok pomerate kursor.

## Relativne koordinate: @dx,dy

Relativna koordinata se ukucava kao `@dx,dy`: toliko udesno, toliko gore, od poslednje tačke. Negativni brojevi idu levo ili dole.

3. Ukucajte `@6000,0` i pritisnite {{key:Enter}}. Linija od 6000 ide udesno.
4. Ukucajte `@0,3000` i pritisnite {{key:Enter}}.
5. Ukucajte `@-2000,0` i pritisnite {{key:Enter}}.
6. Ukucajte `@0,1500` i pritisnite {{key:Enter}}.

Trebalo bi da vidite četiri povezane linije koje se penju uz desnu stranu sobe.

## Direktan unos rastojanja: goli broj

Kada ukucate jedan broj, CadCraft ide za to rastojanje u smeru ukrštenog kursora. Uključite {{ui:Ortogonalno}} da se smer postavi vodoravno ili uspravno.

7. Pritisnite {{key:F8}} ili kliknite {{ui:Ortogonalno}} u statusnoj traci. Statusna traka kaže „Ortogonalno uključeno“.
8. Pomerite kursor levo od poslednje tačke. Gumica ostaje vodoravna.
9. Ukucajte `4000` i pritisnite {{key:Enter}}. Linija ide 4000 ulevo.
10. Pomerite kursor ispod poslednje tačke.
11. Ukucajte `4500` i pritisnite {{key:Enter}}. Vratili ste se na početnu tačku.
12. Pritisnite {{key:Enter}} na praznom upitu da završite komandu.

:::mac
Taster F8 na Mac tastaturi može upravljati reprodukcijom medija. Držite **fn** i pritisnite F8, ili kliknite {{ui:Ortogonalno}}. Vidi [Tastatura, miševi i tačpedovi](common:keys).
:::

Sada imate zatvoren obris sobe u obliku slova L, sastavljen od šest zasebnih linija.

13. Kliknite {{ui:Granice}} da vidite sve.

## Polarne koordinate: @rastojanje<ugao

Polarna koordinata se ukucava kao `@rastojanje<ugao`. Uglovi su u stepenima, mereni suprotno kretanju kazaljke na satu od pozitivnog pravca X: 0 je desno, 90 je gore, 180 je levo, 270 (ili -90) je dole.

14. Ukucajte `L` i pritisnite {{key:Enter}}.
15. Ukucajte `6000,0` i pritisnite {{key:Enter}} da počnete u donjem desnom uglu.
16. Ukucajte `@2500<-30` i pritisnite {{key:Enter}}. Linija od 2500 kreće iz ugla, usmerena nadole i udesno, pod 30 stepeni ispod horizontale.
17. Pritisnite {{key:Enter}} da završite komandu.

Polarna koordinata bez `@`, kao `2500<30`, meri se od početka koordinata, a ne od poslednje tačke.

## Isti obris kao jedna polilinija

Šest zasebnih linija su u redu za mnoge poslove, ali polilinija je jedan objekat: ona se ofsetuje, meri i bira kao celina. Upotrebite {{cmd:PLINE}} sa istim unosom.

1. Ukucajte `PL` i pritisnite {{key:Enter}}.
2. Ukucajte `0,-6000` i pritisnite {{key:Enter}} da počnete ispod prvog obrisa.
3. Ukucajte `@6000,0`, zatim pritisnite {{key:Enter}}.
4. Ukucajte `@0,3000`, zatim pritisnite {{key:Enter}}.
5. Ukucajte `@-2000,0`, zatim pritisnite {{key:Enter}}.
6. Ukucajte `@0,1500`, zatim pritisnite {{key:Enter}}.
7. Ukucajte `@-4000,0`, zatim pritisnite {{key:Enter}}.
8. Ukucajte `C` i pritisnite {{key:Enter}}. Polilinija se zatvara i komanda se završava.
9. Kliknite na novi obris. Desni panel prikazuje „Polilinija“, njena {{ui:Temena}}, {{ui:Dužina}} i, pošto je zatvorena, njena {{ui:Površina}}.

Površina treba da glasi 24000000 (kvadratni milimetri, što je 24 kvadratna metra).

## Opcije tokom crtanja

- U {{cmd:LINE}} i {{cmd:PLINE}} ukucajte `U` i pritisnite {{key:Enter}} da opozovete poslednji segment bez napuštanja komande.
- U {{cmd:LINE}}, `C` zatvara liniju do prve tačke kada postoje najmanje dva segmenta.
- U {{cmd:PLINE}}, `A` prebacuje na lučne segmente (svaki luk se glatko nastavlja od prethodnog segmenta), a `L` vraća na linije. U režimu lukova, opcija zatvaranja je `CL`.
- Pritisak na {{key:Enter}} kod `Specify first point:` u {{cmd:LINE}} počinje od poslednje tačke koju ste zadali, pa možete nastaviti tamo gde ste stali.

## Česte greške

- **Ukucate `6000,0` kada ste mislili `@6000,0`.** Bez `@`, tačka se meri od početka koordinata, a ne od poslednje tačke, pa linija ode na neočekivano mesto. U CadCraft-u je `x,y` uvek apsolutno. Pritisnite `U` i {{key:Enter}} da to opozovete.
- **Zarez ukucan umesto decimalne tačke.** Decimale se pišu tačkom: `1250.5`. Zarez uvek razdvaja X od Y.
- **Direktno rastojanje je išlo na pogrešnu stranu.** Goli broj prati ukršteni kursor. Pomerite kursor na stranu na kojoj želite pre nego što pritisnete {{key:Enter}}, i uključite {{ui:Ortogonalno}} za prave linije.
- **„Potrebna je tačka ili ključna reč opcije.“** CadCraft nije razumeo šta ste ukucali. Proverite razmake unutar broja ili nedostajući zarez, pa ukucajte ponovo.
- **Stope i inči.** CadCraft čita samo obične brojeve. Ukucajte `150` za 12'-6" u crtežu u inčima, ili `12.5` u crtežu u stopama.
