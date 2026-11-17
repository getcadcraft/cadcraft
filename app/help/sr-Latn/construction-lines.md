---
title: Konstrukcione linije i zrake
summary: Crtaj linije koje se protežu bez kraja (XLINE) ili od tačke u jednom smeru (RAY) da bi poravnao stvari, pa ih seci u obične linije.
keywords: xline, ray, konstrukciona linija, konstrukcione linije, beskonačna linija, vodilica, referentna linija, simetrala, linija odmaka, linije rasporeda, xl
from: b6c398bc
---

## Šta ćeš naučiti

Kako crtati konstrukcione linije da poravnaš stvari dok crtaš: kroz dve tačke, vodoravno ili uspravno, pod uglom, na pola puta između dva pravca ili na zadatoj udaljenosti od linije. I kako ih seći u obične linije kada završe posao.

## Dve vrste

- **Konstrukciona linija** ({{cmd:XLINE}}) ide bez kraja u oba smera.
- **Zraka** ({{cmd:RAY}}) počinje u tački i ide bez kraja u jednom smeru.

Obe se crtaju preko cele površine za crtanje, bez obzira na zumiranje, u podeljenom ekranu i u prozorima pogleda na listu. {{ui:Granice}} ih izostavlja, pa zumiranje na crtež i dalje uklapa ono što si nacrtao.

## Crtanje konstrukcionih linija

1. Klikni {{ui:Crtanje}} › {{ui:Više}} › {{ui:Konstrukciona linija}}, ili ukucaj `XL` i pritisni {{key:Enter}}.
2. Klikni tačku. Svaki sledeći klik dodaje konstrukcionu liniju kroz prvu tačku i onu koju klikneš.
3. Pritisni {{key:Enter}} za kraj.

Umesto prve tačke možeš ukucati opciju:

| Opcija | Šta radi |
|---|---|
| Vodoravno (H) | Vodoravne linije, po jedna kroz svaku tačku koju klikneš. |
| Uspravno (V) | Uspravne linije kroz svaku tačku. |
| Ugao (A) | Linije pod uglom koji ukucaš (u stepenima, suprotno kretanju kazaljke sa X ose), kroz svaku tačku. Referenca (R) meri ugao od linije koju izabereš. |
| Simetrala (B) | Klikni ugao, pa tačku duž jedne strane: svaka tačka koju klikneš duž druge strane dodaje liniju na pola puta između njih. |
| Odmak (O) | Ukucaj udaljenost, izaberi liniju, pa klikni stranu: konstrukciona linija na toj udaljenosti od nje, paralelna. Kroz (T) je postavlja kroz tačku koju klikneš. Udaljenost se pamti za sledeći put. |

## Crtanje zraka

1. Klikni {{ui:Crtanje}} › {{ui:Više}} › {{ui:Zraka}}, ili ukucaj `RAY` i pritisni {{key:Enter}}.
2. Klikni mesta na kojima zrake počinju.
3. Klikni tačku kroz koju svaka zraka prolazi. Pritisni {{key:Enter}} za kraj.

## Hvatanje za njih i sečenje

Konstrukcione linije i zrake hvataju se za Najbliže, Upravno i Presek. Nemaju krajeve ni sredinu, pa Kraj i Sredina na njima ništa ne nalaze.

Seku se i seku se kao druge linije u {{cmd:TRIM}} i {{cmd:BREAK}}:

- Odseci jedan kraj konstrukcione linije i ona postaje zraka koja počinje na mestu reza.
- Odseci daleki deo zrake i ona postaje obična linija.
- Prelomi konstrukcionu liniju u jednoj tački i dobijaš dve zrake.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} i {{cmd:STRETCH}} rade i na njima. Izbor prozorom ih nikada ne uzima, jer nijedan prozor ne može da sadrži celu beskonačnu liniju; ukrsni prozor ili klik to mogu.

:::note
DWG (svake verzije) i DXF 2000 ih čuvaju kao konstrukcione linije. DXF R12 ih nema, pa tamo postaju linije preko celog crteža, a čuvanje to kaže. Štampa ili PDF crta ih samo preko onoga što se štampa.
:::
