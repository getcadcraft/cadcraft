---
title: Tegn smarte vegger, dører og vinduer i 2D
summary: Tegn vegger som en polylinje, sett dem sammen rent, og legg inn dører og vinduer som flytter seg med veggen. Alt i 2D, uten 3D-modell.
keywords: vegg, vegger, WALL, WA, dør, DOOR, DR, vindu, WINDOW, WN, DELOPENING, smart vegg, plantegning, sving, hengsel, åpning
from: 45845d49
---

Vegger her er 2D-tegneobjekter. De lager ingen 3D-modell, så en plan er like lett som en linjetegning. For en bygningsmodell, bruk BimCraft.

## Tegn vegger

Skriv `WALL` (`WA`), eller velg {{ui:Vegg}} i menyen {{ui:Mer}} i gruppen {{ui:Tegn}}, og klikk på punkter slik du ville gjort for en polylinje. Trykk {{key:Enter}} for å avslutte, eller skriv `C` for å lukke rommet.

- `T` setter tykkelsen.
- `J` sier hva klikkene dine følger: midten av veggen, eller venstre eller høyre flate.
- `F` setter fyllet: ingen, heldekkende eller skravur.

Hjørner blir gering automatisk. En vegg som ender innenfor en annen vegg sin tykkelse, settes sammen med den i en ren T, og vegger som krysser hverandre, åpner seg mot hverandre. Sammenføyningene lagres med veggene. For rektangler, mangekanter, buer, deling, låser og resten, se «Veggformer, kutt, forskyvninger og låser for 2D-vegger».

## Legg til dører og vinduer

Skriv `DOOR` (`DR`) eller `WINDOW` (`WN`), og klikk på en vegg. En dør svinger til den siden av veggen du klikker. `W` setter bredden, `Y` typen og `H` hengselsiden. Fortsett å klikke for å plassere flere, og trykk {{key:Enter}} for å avslutte. Dører kan være enkle, doble, skyvedører eller en åpen døråpning. Vinduer kan være faste, dreievinduer eller skyvevinduer.

## Endre dem

Velg en vegg for å se håndtakene:

- Endehåndtakene strekker veggen. Vegger som er sammenføyd med den, følger.
- Midthåndtaket flytter veggen.
- Et håndtak på en åpning skyver den langs veggen.
- Pilene snur hengselet og svingen på en dør.

Egenskaper viser tykkelsen, fyllet og hver åpning: type, bredde, posisjon, hengsel, sving, om den vises åpen eller lukket, og {{ui:Fjern}}. `DELOPENING` fjerner åpningen nærmest der du klikker.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` og `ERASE` virker som vanlig. Dører og vinduer følger med veggen sin, sammenføyde vegger beholder sine sammenføyninger, og ett trykk på angre tar alt tilbake.

## I andre programmer

Hver vegg lagres som en vanlig blokk, så andre CAD-programmer viser den riktig og kan flytte den, men de kan ikke redigere den som en vegg. `EXPLODE` gjør en vegg om til vanlige linjer og buer, og da er den ikke lenger en vegg.
