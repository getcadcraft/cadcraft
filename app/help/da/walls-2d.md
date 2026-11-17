---
title: Tegn smarte vægge, døre og vinduer i 2D
summary: Tegn vægge som en polylinje, sammenfør dem pænt, og sæt døre og vinduer ind, der flytter sig med væggen. Alt er 2D, uden 3D-model.
keywords: væg, vægge, WALL, WA, dør, DOOR, DR, vindue, WINDOW, WN, DELOPENING, smart væg, gulvplan, sving, hængsel, åbning
from: 45845d49
---

Vægge her er 2D-tegneobjekter. De laver ingen 3D-model, så en plan forbliver så let som en linjetegning. Til en bygningsmodel bruger du BimCraft.

## Tegn vægge

Skriv `WALL` (`WA`), eller vælg {{ui:Væg}} i menuen {{ui:Mere}} i gruppen {{ui:Tegn}}, og klik derefter punkter, ligesom du ville gøre for en polylinje. Tryk {{key:Enter}} for at afslutte, eller skriv `C` for at lukke rummet.

- `T` angiver tykkelsen.
- `J` angiver, hvad dine klik følger: midten af væggen, eller dens venstre eller højre flade.
- `F` angiver udfyldningen: ingen, massiv eller skravering.

Hjørner laves til geringer af sig selv. En væg, der ender inden for en anden væg's tykkelse, sammenføjes med den i en ren T, og vægge, der krydser hinanden, åbner op for hinanden. Sammenføjningerne gemmes med væggene. Rektangler, polygoner, buer, deling, låse og resten: se »Vægformer, klip, forskydninger og låse til 2D-vægge«.

## Tilføj døre og vinduer

Skriv `DOOR` (`DR`) eller `WINDOW` (`WN`), og klik på en væg. En dør svinger til den side af væggen, du klikker på. `W` angiver bredden, `Y` typen og `H` hængselsiden. Bliv ved med at klikke for at placere flere, og tryk {{key:Enter}} for at afslutte. Døre kan være enkelt-, dobbelt-, skydedøre eller en åben dørgennemgang. Vinduer kan være faste, drejevinduer eller skydevinduer.

## Ændr dem

Vælg en væg for at se dens greb:

- Endegrebene strækker væggen. Vægge, der er sammenføjet med den, følger med.
- Midtergrebet flytter væggen.
- Et greb på en åbning skubber den langs væggen.
- Pilene vender en døres hængsel og sving.

{{ui:Egenskaber}} viser tykkelsen, udfyldningen og hver åbning: type, bredde, position, hængsel, sving, vist åben eller lukket, og Fjern. `DELOPENING` fjerner den åbning, der er nærmest, hvor du klikker.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` og `ERASE` virker som sædvanligt. Døre og vinduer følger med deres væg, sammenføjede vægge beholder deres sammenføjninger, og ét fortrydelsestrin tager det hele tilbage.

## I andre programmer

Hver væg gemmes som en almindelig blok, så andre CAD-programmer viser den korrekt og kan flytte den, men de kan ikke redigere den som væg. `EXPLODE` gør en væg til almindelige linjer og buer, og den holder op med at være en væg.
