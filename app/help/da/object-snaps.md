---
title: Fang til punkter på objekter
summary: Brug objektfang, Ortogonal og gitteret til at vælge præcise endepunkter, midtpunkter, centre og skæringspunkter med musen.
keywords: osnap, objektfang, endepunkt, midtpunkt, centrum, skæringspunkt, vinkelret, kvadrant, nærmeste, knudepunkt, indsætningspunkt, ortogonal, gitter, f3, f8, f7, polar sporing, polar, polarang, objektfangsporing, otrack, sporing, f10, f11
from: 3cf17f94
---

## Hvad du skal lave

Et rektangel med sine to diagonaler, en cirkel med centrum, hvor de krydser, og en linje fra midten af den ene side hen til cirklen. Alle punkter vælges med musen, og alle punkter er præcise.

## Sådan virker fangning

Mens en kommando beder om et punkt, leder CadCraft efter fangpunkter inden for cirka 10 pixels fra krydset. Når den finder et, vises en markør og en etiket (»Endepunkt«, »Skæringspunkt«), og et klik lander **præcist** på det punkt, ikke hvor krydset er.

Fangning er tændt, når {{ui:Fang}} i statuslinjen er trykket ind. {{key:F3}} tænder og slukker for dem.

De fang, du kan bruge, er:

| Fang | Lander på |
|---|---|
| Endpoint (Endepunkt) | Enderne af linjer, buer og polylinjesegmenter |
| Midpoint (Midtpunkt) | Midten af linjer, buer og polylinjesegmenter |
| Center (Centrum) | Centrum af cirkler og buer og af polylinjens bue-segmenter |
| Quadrant (Kvadrant) | 0, 90, 180 og 270 graders punkterne på cirkler og buer |
| Intersection (Skæringspunkt) | Der, hvor to objekter krydser |
| Perpendicular (Vinkelret) | Punktet på et objekt vinkelret på det sidste punkt (kræver et basispunkt) |
| Tangent (Tangent) | Punktet på en cirkel eller bue, hvor en linje fra det sidste punkt netop rører den. Uden et sidste punkt endnu (en linjes første punkt) siger markøren »deferred«: berøringspunktet udregnes, når næste punkt er kendt, så en linje fra Tangent til Tangent rører begge cirkler |
| Nearest (Nærmeste) | Det nærmeste punkt på et hvilket som helst objekt |
| Node (Knudepunkt) | Punktobjekter |
| Insertion (Indsætningspunkt) | Indsætningspunktet for tekst og blokreferencer |

Alle er som standard tændt, undtagen Tangent og Nærmeste. Nærmeste vinder ofte, når du vil have noget andet. Slå Tangent til, når du har brug for den.

## Vælg dine fang

1. Klik på den lille pil ved siden af {{ui:Fang}} i statuslinjen. Listen {{ui:Objektfang}} åbnes.
2. Sæt eller fjern fluebenene ved fang. Ændringer træder i kraft med det samme.
3. Klik på pilen igen for at lukke listen.

CadCraft husker dit valg, og indstillingerne for {{ui:Gitter}}, {{ui:Ortogonal}} og {{ui:Fang}}, i denne browser.

## Trin

1. Skriv `REC` og tryk {{key:Enter}}.
2. Skriv `0,0` og tryk {{key:Enter}}.
3. Skriv `@4000,3000` og tryk {{key:Enter}}. Et rektangel dukker op.
4. Klik på {{ui:Udstrækning}}.
5. Skriv `L` og tryk {{key:Enter}}.
6. Flyt krydset hen til det nederste venstre hjørne. Markøren viser »Endepunkt«. Klik.
7. Flyt hen til det øverste højre hjørne, indtil »Endepunkt« vises. Klik.
8. Tryk {{key:Enter}} for at afslutte linjen.
9. Tryk {{key:Enter}} igen for at gentage {{cmd:LINE}}, og tegn den anden diagonal fra det nederste højre hjørne til det øverste venstre hjørne på samme måde.
10. Skriv `C` og tryk {{key:Enter}} for at starte en cirkel.
11. Flyt krydset hen til, hvor diagonalerne krydser. Markøren viser »Skæringspunkt«. Klik.
12. Skriv `800` og tryk {{key:Enter}}.

Du bør se en cirkel med centrum præcis i krydset.

13. Skriv `L` og tryk {{key:Enter}}.
14. Flyt hen til midten af rektangelets venstre side, indtil »Midtpunkt« vises. Klik.
15. Flyt krydset hen på cirklen, på dens venstre side. Markøren viser »Vinkelret« eller »Kvadrant«; begge er det samme punkt her. Klik.
16. Tryk {{key:Enter}}.

Den nye linje går fra midten af den venstre side og stopper præcist på cirklen.

## Spring et fang over for ét klik

Hold {{key:Shift}} nede, mens du klikker. Objektfang ignoreres for det klik, og punktet lander præcist, hvor krydset er (eller langs Ortogonal-retningen, hvis Ortogonal er tændt).

## Ortogonal

{{ui:Ortogonal}} ({{key:F8}}) holder det næste punkt lige over tværs eller lige op og ned fra basispunktet. Det gælder for klik og for direkte afstandsindtastning (et enkelt tal, skrevet ved ledeteksten). Objektfang vinder over Ortogonal: viser en fangmarkør sig, går klikket til fanget.

## Polar sporing

{{ui:Polar}} ({{key:F10}}) er Ortogonal i flere vinkler. Mens en kommando har et basispunkt (det sidste punkt på en linje, en flyttekommandos basispunkt), flugter markøren, når den kommer tæt på en stråle fra det i et multiplum af polartrinnet. En punkteret linje vises, og en etiket ved krydset siger `Polar: 1200 < 30°`. Klik for at bruge det punkt, eller skriv en afstand: `1200` går præcis 1200 langs strålen.

Trinnet er 90°, indtil du ændrer det: skriv {{cmd:POLARANG}}, tryk {{key:Enter}}, og skriv `30` (eller 45, 22.5, 15 …). Polar og Ortogonal udelukker hinanden: slår du den ene til, slukkes den anden.

## Objektfangsporing

{{ui:Spor}} ({{key:F11}}) flugter markøren med fangpunkter, du har hvilet på, så du kan vælge et punkt i niveau med ét hjørne og over et andet uden at tegne hjælpelinjer.

1. Slå {{ui:Fang}} og {{ui:Spor}} til, og start en kommando, der beder om et punkt (`L`).
2. Hvil markøren på et fangpunkt, såsom et hjørne, i et halvt sekund uden at klikke. Et lille kryds markerer det: det er erhvervet. Hvil på det igen for at slippe det.
3. Flyt markøren lige væk fra det, vandret eller lodret. En punkteret linje følger markøren, og etiketten siger `Track: 600 < 90°`. Klik, eller skriv en afstand.
4. Erhverv et andet punkt, og flyt hen til, hvor den lodrette linje gennem det ene møder den vandrette linje gennem det andet. Markøren fanger til krydset (`Track: where two lines meet`).

Med {{ui:Polar}} også tændt sporer de erhvervede punkter i hver polarvinkel. Op til syv punkter gemmes, indtil kommandoen slutter. {{key:Shift}} slukker sporingen for ét klik, ligesom for fang.

## Gitter

{{ui:Gitter}} ({{key:F7}}) viser et gitter af linjer bag tegningen, med tykkere linjer for hver femte linje. Afstanden ændrer sig, når du zoomer. Det er kun en vejledning, indtil du slår {{ui:Gitterfang}} ({{key:F9}}) til. Så lander klik på det nærmeste gitterpunkt, medmindre et objektfang tager punktet først.

## Funktionstaster på din computer

{{key:F9}} er Gitterfang, {{key:F10}} er Polar, og {{key:F11}} er Spor.

:::mac
På en Mac styrer F3, F7, F8 og F9 normalt Mission Control og medie. Hold **fn** nede sammen med tasten, eller slå standard funktionstaster til, som beskrevet i [Taster, mus og trackpads](common:keys). Knapperne i statuslinjen virker altid.
:::

:::firefox
I Firefox er F7 også tasten til caret browsing. Hvis Firefox spørger, om caret browsing skal tændes, vælg **Nej**. Brug knappen {{ui:Gitter}}, hvis spørgsmålet bliver ved med at komme.
:::

:::touch
På en touchskærm findes der ingen svæveposition, så fangmarkøren vises kun der, hvor din finger rører. Zoom tæt ind for små mål, eller skriv koordinater i stedet.
:::

## Almindelige fejl

- **Klikket gik til det forkerte punkt.** Se på markørens etiket, før du klikker: Endepunkt vinder over Midtpunkt, når begge er nær. Zoom ind, eller fjern fluebenet ved de fang, du ikke har brug for.
- **Ingen markør vises.** {{ui:Fang}} er slået fra, eller det fang, du vil have, er ikke sat til, eller objektet ligger på et lag, der er slukket eller frosset.
- **Fang tager fat i det forkerte i en travl tegning.** Zoom ind. Fangafstanden måles i skærmpixels, så når du zoomer ind, bliver den mindre på tegningen.
- **Du forventer, at Shift giver en lige linje.** I CadCraft slukker Shift for fang i ét klik. Brug {{ui:Ortogonal}} til lige linjer.
- **Du forventer, at punkter lander på gitterpunkter.** Slå {{ui:Gitterfang}} ({{key:F9}}) til, eller skriv koordinater for runde tal.
