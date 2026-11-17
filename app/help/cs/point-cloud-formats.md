---
title: Formáty bodových mračen: co se připojí a co exportovat
summary: Které soubory laserového skenu se připojí pod výkres, které jsou vlastním formátem výrobce skeneru, a co exportovat z programu skeneru, aby se sken zde připojil.
keywords: bodové mračno, pointcloudattach, pcattach, laserový sken, sken, formáty, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, export, nelze otevřít, nečte se
from: 20a5f4ee
---

## Co se zde připojí

Připojte je pomocí {{cmd:POINTCLOUDATTACH}}, {{ui:Otevřít}}, nebo je přetáhněte na stránku (viz téma o obtahování čar nad bodovým mračnem):

| Formát | Přípona | Co se čte |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: body, barvy, intenzita, třídy LiDAR, souřadnicový systém a jeho jednotky. LAZ až do 1 GB. |
| E57 | `.e57` | Každý sken v souboru, každý umístěný podle své polohy; barvy, nebo intenzita, když soubor barvy nemá; metry. Obrázky v souboru se vynechají (oznámeno). Zatím až 6 milionů bodů a 512 MB: větší skeny exportujte jako LAS nebo LAZ. |
| PLY | `.ply` | Text i binární (obě pořadí bajtů): x, y, z vrcholů, barvy a intenzita. Plochy se vynechají (oznámeno). |
| PCD | `.pcd` | Text i binární: x, y, z, sbalené nebo oddělené barvy, intenzita. Komprimované soubory PCD se zatím nečtou: uložte je jako binární nebo textové. |
| PTX | `.ptx` | Jeden nebo více skenů, každý s vlastní transformací; body, které skener neměřil, se vynechají. Metry. |
| PTS, XYZ | `.pts`, `.xyz` | Text: x, y, z, s intenzitou a barvami, jsou-li ve sloupcích. |

## Soubory, které čte jen software skeneru

Některé soubory skenů jsou vlastním formátem výrobce skeneru bez zveřejněného popisu a bez otevřené čtečky. CadCraft je nedokáže číst: připojení takového souboru vypíše, co to je, a co dělat na příkazovém řádku. Exportujte sken z programu výrobce jako E57 nebo LAS (nebo PTX, PTS), pak připojte exportovaný soubor.

| Soubor | Přípona | Exportujte z |
|---|---|---|
| Projekt ReCap | `.rcp` | ReCap: otevřete projekt a exportujte ho. Projekt jen ukazuje na své skeny, takže samotné zkopírování `.rcp` nedá žádné body. |
| Sken ReCap | `.rcs` | ReCap: otevřete projekt, do něhož sken patří, a exportujte ho. |
| Sken FARO | `.fls` | FARO SCENE. |
| Sken Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Sken Trimble | `.tzf` | Trimble RealWorks nebo Trimble Business Center. |
| Sken Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Vyžádá-li export formát, LAS nebo LAZ si v nejmenším souboru ponechá vše, co CadCraft používá (barvy, intenzitu, třídy, souřadnicový systém a jeho jednotky).
:::

## Proč se tyto soubory nečtou

Tyto formáty nejsou zveřejněné a jediný způsob, jak je číst, je softwarová knihovna každého výrobce, podle jeho vlastních podmínek. CadCraft čte jen formáty, které umí přečíst vlastním kódem na vašem počítači, takže sken nikdy nemusí být odeslán někam, aby se připojil.
