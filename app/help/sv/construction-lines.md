---
title: Konstruktionslinjer och strålar
summary: Rita linjer som fortsätter utan slut (XLINE) eller från en punkt åt ett håll (RAY) för att rikta in saker, och trimma dem till vanliga linjer.
keywords: xline, ray, stråle, konstruktionslinje, konstruktionslinjer, oändlig linje, hjälplinje, referenslinje, halvera, förskjuten linje, layoutlinjer, xl
from: b6c398bc
---

## Vad du ska lära dig

Hur du ritar konstruktionslinjer för att rikta in saker medan du ritar: genom två punkter, horisontellt eller vertikalt, i en vinkel, mitt emellan två riktningar, eller ett bestämt avstånd från en linje. Och hur du trimmar dem till vanliga linjer när de har gjort sitt.

## Två slag

- En **konstruktionslinje** ({{cmd:XLINE}}) fortsätter utan slut åt båda hållen.
- En **stråle** ({{cmd:RAY}}) startar i en punkt och fortsätter utan slut åt ett håll.

Båda ritas över hela ritningsytan oavsett zoom, i delad skärm och i vyportar på ett blad. {{ui:Utsträckning}} utelämnar dem, så att zoomning till ritningen fortfarande passar det du ritat.

## Rita konstruktionslinjer

1. Klicka på {{ui:Rita}} › {{ui:Mer}} › {{ui:Konstruktionslinje}}, eller skriv `XL` och tryck på {{key:Enter}}.
2. Klicka en punkt. Varje klick efter den lägger till en konstruktionslinje genom första punkten och den du klickar.
3. Tryck på {{key:Enter}} för att avsluta.

I stället för första punkten kan du skriva ett alternativ:

| Alternativ | Vad det gör |
|---|---|
| `H` (Horisontell) | Horisontella linjer, en genom varje punkt du klickar. |
| `V` (Vertikal) | Vertikala linjer genom varje punkt. |
| `A` (Vinkel) | Linjer i en vinkel du skriver (grader, moturs från X-axeln), genom varje punkt. `R` (Referens) mäter vinkeln från en linje du väljer. |
| `B` (Halvera) | Klicka hörnet, och sedan en punkt längs ena sidan: varje punkt du klickar längs den andra sidan lägger till linjen mitt emellan de två. |
| `O` (Förskjut) | Skriv ett avstånd, välj en linje och klicka sedan på sidan: en konstruktionslinje så långt från den, parallell. `T` (Genom) lägger den genom en punkt du klickar i stället. Avståndet kommer ihåg till nästa gång. |

## Rita strålar

1. Klicka på {{ui:Rita}} › {{ui:Mer}} › {{ui:Stråle}}, eller skriv `RAY` och tryck på {{key:Enter}}.
2. Klicka där strålarna startar.
3. Klicka en punkt för varje stråle att gå genom. Tryck på {{key:Enter}} för att avsluta.

## Fånga dem och trimma dem

Konstruktionslinjer och strålar fångas av Närmaste, Vinkelrät och Skärning. De har inga ändar och ingen mitt, så Ändpunkt och Mittpunkt hittar ingenting på dem.

De skärs och skär av andra linjer i {{cmd:TRIM}} och {{cmd:BREAK}} på samma sätt som vanliga linjer:

- Trimma bort en ände av en konstruktionslinje, så blir den en stråle som startar vid skärningen.
- Trimma bort den bortre delen av en stråle, så blir den en vanlig linje.
- Bryt en konstruktionslinje i en punkt, så får du två strålar.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} och {{cmd:STRETCH}} fungerar på dem också. Ett fönstermarkering väljer dem aldrig, eftersom inget fönster kan rymma en oändlig linje hel; ett korsande fönster eller ett klick gör det.

:::note
En DWG (alla versioner) och en DXF 2000 behåller dem som konstruktionslinjer. DXF R12 har inga, så där blir de linjer över hela ritningen, och sparningen säger det. En utskrift eller PDF ritar dem bara över det som skrivs ut.
:::
