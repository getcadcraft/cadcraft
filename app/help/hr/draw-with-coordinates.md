---
title: Crtanje koordinatama
summary: Nacrtajte točan obris poda upisivanjem apsolutnih, relativnih i polarnih koordinata te izravnim unosom udaljenosti.
keywords: linija, pline, polilinija, koordinate, relativno, polarno, apsolutno, izravna udaljenost, @, upisivanje točaka, točno, orto
from: 19e82350
---

## Što ćete izraditi

Obris L-oblične prostorije, 6000 × 4500 s izrezom 2000 × 1500, nacrtan točno, plus zid pod 30 stupnjeva. Koristit ćete sva četiri načina upisivanja točke. Radite u milimetrima: jedna jedinica crteža predstavlja jedan milimetar.

Kratki pregled svih formata nalazi se u [Unos koordinata i udaljenosti](topic:coordinate-entry).

## Prije početka

1. Otvorite CadCraft. Ako je crtež otvoren, prvo kliknite {{ui:Nova}}.
2. Pritisnite {{key:Esc}} da ništa ne bude odabrano. Desna ploča prikazuje {{ui:Trenutne postavke}}.
3. Postavite {{ui:Jedinice}} na {{ui:Milimetri}}. Ništa se ne mijenja po veličini; ovo samo govori listovima i ispisima što znači jedna jedinica.

## Apsolutne koordinate: prva točka

Apsolutna koordinata je položaj mjeren od ishodišta, upisan kao `x,y`.

1. Upišite `L` i pritisnite {{key:Enter}}. Upit glasi `Specify first point:`.
2. Upišite `0,0` i pritisnite {{key:Enter}}.

Linija se sada proteže od ishodišta do nišana. Koordinate u statusnoj traci prikazuju udaljenost i kut od početne točke dok se pomičete.

## Relativne koordinate: @dx,dy

Relativna koordinata upisuje se kao `@dx,dy`: toliko vodoravno, toliko okomito, od zadnje točke. Negativni brojevi idu lijevo ili dolje.

3. Upišite `@6000,0` i pritisnite {{key:Enter}}. Linija duljine 6000 ide udesno.
4. Upišite `@0,3000` i pritisnite {{key:Enter}}.
5. Upišite `@-2000,0` i pritisnite {{key:Enter}}.
6. Upišite `@0,1500` i pritisnite {{key:Enter}}.

Trebali biste vidjeti četiri povezane linije koje se penju desnom stranom prostorije.

## Izravan unos udaljenosti: sam broj

Kad upišete jedan broj, CadCraft ide za tu udaljenost u smjeru nišana. Uključite Orto da se smjer postavi vodoravno ili okomito.

7. Pritisnite {{key:F8}} ili kliknite {{ui:Orto}} u statusnoj traci. Statusna traka kaže "Orto uključen".
8. Pomaknite nišan lijevo od zadnje točke. Linija koja prati pokazivač ostaje vodoravna.
9. Upišite `4000` i pritisnite {{key:Enter}}. Linija ide 4000 ulijevo.
10. Pomaknite nišan ispod zadnje točke.
11. Upišite `4500` i pritisnite {{key:Enter}}. Vraćeni ste na početnu točku.
12. Pritisnite {{key:Enter}} na praznom upitu da završite naredbu.

:::mac
Na Macu tipka F8 može upravljati reprodukcijom medija. Držite **fn** i pritisnite F8, ili kliknite {{ui:Orto}}. Pogledajte [Tipke, miševi i trackpadovi](common:keys).
:::

Sada imate zatvoreni L-oblični obris od šest zasebnih linija.

13. Kliknite {{ui:Opseg}} da vidite cijeli crtež.

## Polarne koordinate: @udaljenost<kut

Polarna koordinata upisuje se kao `@udaljenost<kut`. Kutovi su u stupnjevima, mjereni suprotno od smjera kazaljke na satu od pozitivnog smjera X: 0 je desno, 90 gore, 180 lijevo, 270 (ili -90) dolje.

14. Upišite `L` i pritisnite {{key:Enter}}.
15. Upišite `6000,0` i pritisnite {{key:Enter}} da počnete u donjem desnom kutu.
16. Upišite `@2500<-30` i pritisnite {{key:Enter}}. Linija duljine 2500 polazi iz kuta, usmjerena prema dolje i udesno pod 30 stupnjeva ispod horizontale.
17. Pritisnite {{key:Enter}} da završite naredbu.

Polarna koordinata bez `@`, poput `2500<30`, mjeri se od ishodišta, a ne od zadnje točke.

## Isti obris kao jedna polilinija

Šest zasebnih linija dobro je za mnoge poslove, ali polilinija je jedan objekt: odmiče se, mjeri i odabire kao cjelina. Upotrijebite {{cmd:PLINE}} s istim unosom.

1. Upišite `PL` i pritisnite {{key:Enter}}.
2. Upišite `0,-6000` i pritisnite {{key:Enter}} da počnete ispod prvog obrisa.
3. Upišite `@6000,0`, zatim pritisnite {{key:Enter}}.
4. Upišite `@0,3000`, zatim pritisnite {{key:Enter}}.
5. Upišite `@-2000,0`, zatim pritisnite {{key:Enter}}.
6. Upišite `@0,1500`, zatim pritisnite {{key:Enter}}.
7. Upišite `@-4000,0`, zatim pritisnite {{key:Enter}}.
8. Upišite `C` i pritisnite {{key:Enter}}. Polilinija se zatvara i naredba završava.
9. Kliknite novi obris. Desna ploča prikazuje "Polilinija", njezine {{ui:Vrhovi}}, {{ui:Duljina}} i, budući da je zatvorena, i {{ui:Površina}}.

Površina bi trebala biti 24000000 (kvadratnih milimetara, što je 24 kvadratna metra).

## Opcije tijekom crtanja

- U {{cmd:LINE}} i {{cmd:PLINE}} upišite `U` i pritisnite {{key:Enter}} da poništite zadnji segment, a da ne napustite naredbu.
- U {{cmd:LINE}}, `C` zatvara liniju natrag na prvu točku kad ima barem dva segmenta.
- U {{cmd:PLINE}}, `A` prebacuje na lučne segmente (svaki luk se glatko nastavlja iz prethodnog segmenta), a `L` vraća na linije. U načinu lukova opcija zatvaranja je `CL`.
- Pritisak na {{key:Enter}} kod `Specify first point:` u {{cmd:LINE}} počinje od zadnje točke koju ste zadali, pa možete nastaviti gdje ste stali.

## Česte pogreške

- **Upisali ste `6000,0` a mislili ste `@6000,0`.** Bez `@` točka se mjeri od ishodišta, a ne od zadnje točke, pa linija ode na neočekivano mjesto. U CadCraftu je `x,y` uvijek apsolutna. Pritisnite `U` i {{key:Enter}} da je poništite.
- **Zarez upisan kao decimalna točka.** Decimale se pišu točkom: `1250.5`. Zarez uvijek odvaja X od Y.
- **Izravna udaljenost išla je u krivom smjeru.** Goli broj slijedi nišan. Pomaknite nišan na stranu na koju želite prije pritiska na {{key:Enter}}, i uključite {{ui:Orto}} za ravne linije.
- **"Point or option keyword required."** CadCraft nije razumio što ste upisali. Provjerite ima li razmaka unutar broja ili nedostaje zarez, pa upišite ponovno.
- **Stope i inči.** CadCraft čita samo obične brojeve. Upišite `150` za 12'-6" u crtežu u inčima, ili `12.5` u crtežu u stopama.
