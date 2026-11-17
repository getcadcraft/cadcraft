---
title: Formate de nor de puncte: ce se atașează și ce se exportă
summary: Ce fișiere de scanare laser se atașează sub desen, care sunt un format propriu al producătorului scanerului și ce să exportați din software-ul scanerului, ca scanarea să se atașeze aici.
keywords: nor de puncte, pointcloudattach, pcattach, scanare laser, scanare, formate, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, export, nu se poate deschide, nu se citește
from: 20a5f4ee
---

## Ce se atașează aici

Atașați aceste fișiere cu {{cmd:POINTCLOUDATTACH}}, cu {{ui:Open}} sau trăgându-le pe pagină (vezi subiectul despre calchierea liniilor as-built peste un nor de puncte):

| Format | Extensie | Ce se citește |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: puncte, culori, intensitate, clase LiDAR, sistemul de coordonate și unitățile sale. LAZ până la 1 GB. |
| E57 | `.e57` | Fiecare scanare din fișier, plasată după poziția sa; culori, sau intensitate când fișierul nu are culori; metri. Imaginile din fișier sunt lăsate deoparte (se spune). Până la 6 milioane de puncte și 512 MB deocamdată: exportați scanările mai mari ca LAS sau LAZ. |
| PLY | `.ply` | Text și binar (ambele ordini de octeți): x, y, z ale vârfurilor, culori și intensitate. Fețele sunt lăsate deoparte (se spune). |
| PCD | `.pcd` | Text și binar: x, y, z, culori împachetate sau separate, intensitate. Fișierele PCD comprimate nu se citesc încă: salvați-le ca binar sau ca text. |
| PTX | `.ptx` | Una sau mai multe scanări, fiecare plasată prin propria transformare; punctele pe care scanerul nu le-a măsurat sunt lăsate deoparte. Metri. |
| PTS, XYZ | `.pts`, `.xyz` | Text: x, y, z, cu intensitate și culori când coloanele există. |

## Fișiere pe care le citește doar software-ul scanerului

Unele fișiere de scanare sunt formatul propriu al producătorului scanerului, fără descriere publicată și fără cititor deschis. CadCraft nu le poate citi: atașarea unuia afișează ce este și ce de făcut în linia de comandă. Exportați scanarea din software-ul producătorului ca E57 sau LAS (sau PTX, PTS), apoi atașați fișierul exportat.

| Fișier | Extensie | Exportați din |
|---|---|---|
| Proiect ReCap | `.rcp` | ReCap: deschideți proiectul și exportați-l. Proiectul doar indică scanările sale, deci copierea doar a `.rcp` nu dă niciun punct. |
| Scanare ReCap | `.rcs` | ReCap: deschideți proiectul căruia îi aparține scanarea și exportați-l. |
| Scanare FARO | `.fls` | FARO SCENE. |
| Scanare Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Scanare Trimble | `.tzf` | Trimble RealWorks sau Trimble Business Center. |
| Scanare Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Când exportul cere un format, LAS sau LAZ păstrează tot ce folosește CadCraft (culori, intensitate, clase, sistemul de coordonate și unitățile sale) în cel mai mic fișier.
:::

## De ce nu se citesc aceste fișiere

Aceste formate nu sunt publicate, iar singura cale de a le citi este biblioteca software a fiecărui producător, sub propriile condiții. CadCraft citește doar formatele pe care le poate citi cu propriul cod pe calculator, deci o scanare nu trebuie trimisă nicăieri ca să fie atașată.
