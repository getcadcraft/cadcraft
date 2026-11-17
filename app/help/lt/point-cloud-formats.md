---
title: Taškų debesies formatai: kas prijungiama ir ką eksportuoti
summary: Kurie lazerinio skenavimo failai prijungiami po brėžiniu, kurie yra skenerio gamintojo formatas ir ką eksportuoti iš skenerio programinės įrangos, kad skenavimas čia prisijungtų.
keywords: taškų debesis, pointcloudattach, pcattach, lazerinis skenavimas, skenavimas, formatai, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, eksportas, negali atidaryti, neskaitoma
from: 20a5f4ee
---

## Kas čia prijungiama

Šiuos failus prijunkite su {{cmd:POINTCLOUDATTACH}}, {{ui:Atverti}} arba numetę ant puslapio (žr. temą apie faktinės būklės linijų perbraižymą per taškų debesį):

| Formatas | Plėtinys | Ką nuskaitoma |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: taškai, spalvos, intensyvumas, LiDAR klasės, koordinačių sistema ir jos vienetai. LAZ iki 1 GB. |
| E57 | `.e57` | Kiekvienas skenavimas faile, kiekvienas pagal savo padėtį; spalvos arba intensyvumas, kai failas be spalvų; metrai. Paveikslėliai faile praleidžiami (apie tai pranešama). Kol kas iki 6 milijonų taškų ir 512 MB: didesnius skenavimus eksportuokite kaip LAS arba LAZ. |
| PLY | `.ply` | Tekstinis ir dvejetainis (abi baitų tvarkos): viršūnių x y z, spalvos ir intensyvumas. Paviršiai praleidžiami (apie tai pranešama). |
| PCD | `.pcd` | Tekstinis ir dvejetainis: x y z, supakuotos arba atskiros spalvos, intensyvumas. Suspaustų PCD failų kol kas neskaitoma: įrašykite juos dvejetainiu arba tekstiniu formatu. |
| PTX | `.ptx` | Vienas ar daugiau skenavimų, kiekvienas pagal savo transformaciją; taškai, kurių skeneris neišmatavo, praleidžiami. Metrai. |
| PTS, XYZ | `.pts`, `.xyz` | Tekstinis: x y z, su intensyvumu ir spalvomis, kai tokie stulpeliai yra. |

## Failai, kuriuos skaito tik skenerio programinė įranga

Kai kurie skenavimo failai yra skenerio gamintojo formatas be paskelbto aprašo ir be atviro skaitytuvo. CadCraft jų nenuskaito: prijungus vieną, komandų eilutėje parodoma, koks tai failas ir ką daryti. Eksportuokite skenavimą iš gamintojo programinės įrangos kaip E57 arba LAS (arba PTX, PTS), tada prijunkite eksportuotą failą.

| Failas | Plėtinys | Eksportuoti iš |
|---|---|---|
| ReCap projektas | `.rcp` | ReCap: atidarykite projektą ir eksportuokite jį. Projektas tik nurodo savo skenavimus, todėl vien `.rcp` nukopijavimas taškų neduoda. |
| ReCap skenavimas | `.rcs` | ReCap: atidarykite projektą, kuriam priklauso skenavimas, ir eksportuokite jį. |
| FARO skenavimas | `.fls` | FARO SCENE. |
| Leica skenavimas | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble skenavimas | `.tzf` | Trimble RealWorks arba Trimble Business Center. |
| Z+F skenavimas | `.zfs` | Z+F LaserControl. |

:::tip
Kai eksportavimas prašo formato, LAS arba LAZ išlaiko viską, ką naudoja CadCraft (spalvas, intensyvumą, klases, koordinačių sistemą ir jos vienetus), mažiausiame faile.
:::

## Kodėl šie failai neskaitomi

Tie formatai nepaskelbti, o vienintelis būdas juos skaityti – kiekvieno gamintojo programinės įrangos biblioteka, pagal jos pačios sąlygas. CadCraft skaito tik tuos formatus, kuriuos gali nuskaityti savo kodu jūsų kompiuteryje, todėl skenavimo niekada nereikia siųsti niekur, kad jis būtų prijungtas.
