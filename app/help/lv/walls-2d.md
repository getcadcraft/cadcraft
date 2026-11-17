---
title: Zīmējiet viedās sienas, durvis un logus 2D
summary: Zīmējiet sienas kā polilīniju, savienojiet tās tīri un ievietojiet durvis un logus, kas pārvietojas kopā ar sienu. Viss 2D, bez 3D modeļa.
keywords: siena, sienas, WALL, WA, durvis, DOOR, DR, logs, WINDOW, WN, DELOPENING, viedā siena, stāvu plāns, atvēršanās virziens, eņģe, atvērums
from: 45845d49
---

Sienas šeit ir 2D rasēšanas objekti. Tās neveido 3D modeli, tāpēc plāns paliek tikpat viegls kā līniju rasējums. Ēkas modelim izmantojiet BimCraft.

## Zīmēt sienas

Ierakstiet `WALL` (`WA`) vai izvēlieties {{ui:Wall}} grupas {{ui:Draw}} izvēlnē {{ui:More}} un noklikšķiniet punktus, kā darītu polilīnijai. Nospiediet {{key:Enter}}, lai pabeigtu, vai ierakstiet `C`, lai slēgtu telpu.

- `T` iestata biezumu.
- `J` nosaka, ko jūsu klikšķi seko: sienas centru vai tās kreiso vai labo malu.
- `F` iestata aizpildījumu: nav, cieta vai šrafējums.

Stūri paši savienojas ar slīpgriezumu. Siena, kas beidzas citas sienas biezumā, pieslēdzas tai tīrā T savienojumā, un sienas, kas krustojas, atveras viena otrai. Savienojumi tiek saglabāti kopā ar sienām. Taisnstūriem, daudzstūriem, lokiem, sadalīšanai, bloķējumiem un pārējam skatiet „Sienu formas, griezumi, nobīdes un bloķējumi 2D sienām”.

## Pievienot durvis un logus

Ierakstiet `DOOR` (`DR`) vai `WINDOW` (`WN`) un noklikšķiniet uz sienas. Durvis atveras uz tās sienas pusi, uz kuru noklikšķināt. `W` iestata platumu, `Y` tipu un `H` eņģes pusi. Turpiniet klikšķināt, lai novietotu vairāk, un nospiediet {{key:Enter}}, lai pabeigtu. Durvis var būt vienvērtņu, divvērtņu, bīdāmas vai atvērta eja. Logi var būt fiksēti, ar atvēršanos vai bīdāmi.

## Mainīt tās

Atlasiet sienu, lai redzētu tās rokturus:

- Gala rokturi izstiepj sienu. Tai savienotās sienas seko.
- Vidējais rokturis pārvieto sienu.
- Rokturis uz atvēruma bīda to pa sienu.
- Bultiņas pārmet durvju eņģi un atvēršanās virzienu.

Rekvizītos redzams {{ui:Thickness}}, aizpildījums un katrs atvērums: tips, platums, novietojums, eņģe, atvēršanās virziens, vai redzams atvērts vai aizvērts, un {{ui:Remove}}. `DELOPENING` noņem atvērumu, kas atrodas tuvāk vietai, kur noklikšķiniet.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` un `ERASE` darbojas kā parasti. Durvis un logi iet kopā ar savu sienu, savienotās sienas saglabā savus savienojumus, un viens {{ui:Undo}} atsauc visu.

## Citās programmās

Katra siena tiek saglabāta kā parasts bloks, tāpēc citas CAD programmas to parāda pareizi un var to pārvietot, bet nevar to rediģēt kā sienu. `EXPLODE` pārvērš sienu parastās līnijās un lokos, un tā vairs nav siena.
