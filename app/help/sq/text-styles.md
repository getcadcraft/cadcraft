---
title: Cakto shkronjën dhe madhësinë e tekstit me stile teksti
summary: Krijo stile teksti të emërtuara me një shkronjë, lartësi, gjerësi dhe pjerrësi, cakto një si aktual për tekst të ri, dhe ndrysho një stil për të ndryshuar çdo tekst që e përdor.
keywords: stil teksti, stil, STYLE, ST, TEXTSTYLE, -STYLE, shkronjë, lartësi teksti, faktor gjerësie, pjerrësi, ndrysho shkronjën, stil standard, zbato stilin, DDSTYLE
from: bd5a4883
---

## Çfarë do të bësh

Krijo një stil teksti të quajtur `Shënime` me shkronjën dhe lartësinë e vet, përdore për tekst të ri, dhe më vonë ndrysho stilin që çdo shënim që e përdor të ndryshojë njëherësh.

## Hapat

1. Shkruaj {{cmd:STYLE}} (`ST`) dhe shtyp {{key:Enter}}, ose kliko {{ui:Stili i tekstit}} te shiriti {{ui:Vizato}}. Dialogu {{ui:Stili i tekstit}} liston stilet e vizatimit. Çdo vizatim ka `Standard`.
2. Kliko {{ui:E re…}}, shkruaj `Shënime` si emrin e stilit të ri dhe kliko {{ui:OK}}. Rreshti i gjendjes thotë "Stili i tekstit Shënime u krijua dhe u vendos aktual."
3. Te {{ui:Fonti}}, zgjidh ose shkruaj emrin e një shkronje. Vendos {{ui:Lartësia (0 = pyet çdo herë)}} në një numër, si `2.5`, që çdo tekst i ri të marrë atë lartësi. Lëre `0` për të pyetur çdo herë.
4. Vendos {{ui:Faktori i gjerësisë}} dhe {{ui:Këndi i pjerrësisë (°)}} nëse dëshiron shkronja më të ngushta, më të gjera ose të pjerrëta. Rreshti i mostrës tregon rezultatin.
5. Kliko {{ui:Mbyll}}. Vizato tekst me {{cmd:TEXT}} ose {{cmd:MTEXT}}: teksti i ri merr stilin aktual.
6. Për të përdorur një stil që ke bërë tashmë, hap dialogun përsëri, zgjidhe në listë dhe kliko {{ui:Cakto aktualen}}.
7. Për të vendosur një stil te tekst që është vizatuar tashmë, zgjidh tekstin, hap dialogun, zgjidh stilin dhe kliko {{ui:Zbato te teksti i zgjedhur}}.

## Ndrysho një stil më vonë

Ndrysho shkronjën, lartësinë, gjerësinë ose pjerrësinë e një stili në dialog dhe çdo tekst që e përdor e ndjek, në një hap të vetëm zhbërjeje ({{key:Mod+Z}}). Rreshti i gjendjes thotë sa tekste e ndoqën.

## Shënime

- {{ui:Fshi}} refuzon `Standard`, dhe një stil që ende e përdor tekst: ndrysho atë tekst në një stil tjetër më parë.
- Stilet ruhen në tabelën STYLE të vizatimit, kështu që skedarët DXF dhe DWG i mbajnë ato.
- Te rreshti i komandës, `-STYLE` bën të njëjtën gjë me opsione (Current, New, Font, Height, Width, Oblique, Delete, List).
- Një shkronjë që nuk është në kompjuterin që lexon vizatimin shfaqet me një shkronjë tjetër.
