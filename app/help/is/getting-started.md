---
title: Byrjun með CadCraft
summary: Hvað CadCraft teikniforritið gerir, hvar það keyrir, og fyrsta teikningin þín frá auðum skjá að vistaðri skrá.
keywords: byrjun, fyrsta teikning, nýtt, opna, vista, vista sem, hefja, kennsla, inngangur, fljótleg byrjun
from: 1a56c575
---

CadCraft er 2D-teikniforrit. Þú teiknar og breytir línum, bogum, fjöllínum, texta, málsetningum og blokkum, setur upp blöð með titilblokkum og sýnisgluggum, og prentar þau í PDF. Það opnar DWG- og DXF-teikningar og vistar þær sem DWG eða DXF.

Það keyrir í vafranum þínum. Ekkert þarf að setja upp: síðan gefur þér vistfangið, og allt forritið hleðst inn á síðuna. Teikningarnar þínar opnast úr þinni eigin tölvu og eru vistaðar aftur í hana. **Ekkert er sent upp.**

Ef þú hefur teiknað áður, lestu [Frá öðru teikniforriti](topic:coming-from) eftir þessa síðu. Flestar venjur fylgja með, og þær fáu sem gera það ekki eru taldar upp þar.

## Viltu frekar fá leiðsögn?

Sláðu inn `TOUR` (eða smelltu á {{ui:Taka skoðunarferðina}} á byrjunarspjaldinu, eða {{ui:Stillingar}} › {{ui:CadCraft}} › {{ui:Taka skoðunarferðina aftur}}). Sex stuttir skref í reit yfir teikningunni: teiknaðu línu og hring, færðu hann, styttu hann, eyddu einhverju og málsettu það. Hvert skref klárast þegar þú gerir það, og þú getur sleppt skrefi eða allri ferðinni. Hún byrjar sjálf aðeins í fyrsta sinn. [Flýtiyfirlitið](topic:cheat-sheet) hefur 40 skipanirnar sem þú notar oftast, og [skipanakortið](topic:command-map) allar skipanir sem til eru.

## Það sem þú þarft

- Nýlegan Chrome, Edge, Firefox eða Safari á Mac-, Windows- eða Linux-tölvu. Sjá [Vafrar og stýrikerfi](common:browsers).
- Mús með hjóli er þægilegust. Snertiflötur virkar; sjá [Mús, snertiflötur og snerting](topic:mouse-trackpad-touch).
- Lyklaborð. CadCraft er stjórnað með innsleginum skipunum, eins og flestum teikniforritum.

## Hugmyndin í einni málsgrein

Þú slærð inn skipun (eða smellir á hnapp hennar), og skipanalínan neðst spyr þig spurninga eina í einu: „Tilgreindu fyrsta punkt“, „Tilgreindu næsta punkt“. Þú svarar hverri spurningu með því að smella í teikninguna eða slá inn gildi, og ýta svo á {{key:Enter}}. Að ýta á {{key:Esc}} hættir við. Þetta er allt samspilslíkanið; allt annað eru smáatriði.

## Fyrsta teikningin þín

Þú teiknar 4000 x 3000 rétthyrning úr línum, setur hring í miðjuna og vistar skrána.

1. Opnaðu CadCraft. Skipanalínan neðst sýnir `Command:` og teikniflöturinn sýnir stutt spjald „Byrjaðu að teikna“.
2. Sláðu inn `L` og ýttu á {{key:Enter}}. Þú þarft ekki að smella á skipanalínuna fyrst: það sem þú slærð inn hvar sem er fer þangað.
3. Spurningin breytist í `Specify first point:`. Sláðu inn `0,0` og ýttu á {{key:Enter}}.
4. Sláðu inn `@4000,0` og ýttu á {{key:Enter}}. Lína birtist og liggur til hægri. `@` þýðir „frá síðasta punkti“.
5. Sláðu inn `@0,3000` og ýttu á {{key:Enter}}.
6. Sláðu inn `@-4000,0` og ýttu á {{key:Enter}}.
7. Sláðu inn `C` og ýttu á {{key:Enter}}. `C` er lokunarvalkosturinn: síðasta línan fer aftur á fyrsta punktinn og skipunin endar.
8. Smelltu á {{ui:Mörk}} í {{ui:Sýn}}-hópi tækjastikunnar. Rétthyrningurinn fyllir skjáinn.

Nú ættir þú að sjá fjórar línur sem mynda rétthyrning, og ferillinn fyrir ofan skipanalínuna telur upp það sem þú slóst inn.

9. Sláðu inn `C` og ýttu á {{key:Enter}} til að hefja hringskipunina.
10. Sláðu inn `2000,1500` og ýttu á {{key:Enter}} fyrir miðjuna.
11. Sláðu inn `500` og ýttu á {{key:Enter}} fyrir radíusinn.

Hringur birtist í miðju rétthyrningsins.

12. Ýttu á {{key:Mod+S}}, eða smelltu á {{ui:Vista}} í {{ui:Skrá}}-hópnum.

Vafrinn sækir `Drawing1.dwg` í venjulega niðurhalsmöppuna þína, og ferillinn segir að afrit hafi verið vistað sem DWG. Sú skrá opnast aftur í CadCraft og í flestum öðrum CAD-forritum. (Ef þú valdir DXF í {{ui:Vista sem}} áður, í þessum vafra, vistast ný teikning sem `Drawing1.dxf` í staðinn.)

:::tip
Ýttu á {{key:Enter}} á auðri skipanalínu til að endurtaka síðustu skipun. Ýttu á {{key:Space}} í staðinn fyrir {{key:Enter}} ef þú vilt: utan texta gerir það það sama.
:::

## Opna fyrirliggjandi teikningu

1. Ýttu á {{key:Mod+O}}, eða smelltu á {{ui:Opna}}.
2. Veldu `.dwg`- eða `.dxf`-skrá í skráavalinu.

Þú getur líka dregið DWG- eða DXF-skrá úr {{pick:mac=Finder|windows=File Explorer|linux=skráastjóranum þínum}} og sleppt henni á teikniflötinn. Skráin er lesin á síðunni; hún yfirgefur aldrei tölvuna þína.

Sjá [Skrár: hvað opnast, hvað vistast](topic:files) um hvað er geymt og hvað er umbreytt.

## Vistun: við hverju má búast

Vistun í vafra virkar öðruvísi en í skjáborðsforriti:

- {{ui:Vista}} **sækir alltaf nýtt afrit**. Það skrifar ekki yfir skrána sem þú opnaðir. Ef skrá með sama nafni er þegar í niðurhalsmöppunni þinni bætir vafrinn yfirleitt við tölu, eins og `Drawing1 (1).dwg`.
- {{ui:Vista}} notar snið teikningarinnar: DWG ef þú opnaðir DWG, DXF ef þú opnaðir DXF. Til að velja skaltu ýta á {{key:Mod+Shift+S}} eða smella á {{ui:Vista sem}}, og velja síðan {{ui:DWG}} (og útgáfu þess), {{ui:DXF R12}} eða {{ui:DXF 2000}}. Sjá [Vistun](topic:files#saving).
- Skránni sem þú opnaðir er aldrei breytt.
- Að opna aðra skrá, eða {{ui:Ný}}, setur hana á sinn eigin flipa yfir teikninguna, svo ekkert sem þú hefur opið lokast. Ef þú lokar flipa teikningar eða yfirgefur síðuna með óvistuðum breytingum spyr CadCraft fyrst: {{ui:Vista afrit fyrst}}, fleygja eða {{ui:Hætta við}}. Ef þú lokar vafraflipanum sést í staðinn spurning vafrans sjálfs „Yfirgefa síðu?“.

Skýjavistun er ekki í boði ennþá. Hvert skrárnar þínar fara og af hverju þær haldast einkamál er útskýrt í [Skrárnar þínar og persónuvernd](common:your-files).

## Hvert skal halda næst

Ýttu á {{key:F1}} eða smelltu á {{ui:Hjálp}} í efri stikunni til að opna þessa hjálp við hlið teikningarinnar hvenær sem er. Hún virkar án tengingar.

- [Skjár CadCraft](topic:workspace) nefnir hverja stiku og spjald.
- [Teikna með hnitum](topic:draw-with-coordinates) er besta fyrsta yfirferðin.
- [Lyklaborð og mús](topic:keyboard) telur upp alla lykla.
- Sláðu inn `HELP` á skipanalínunni fyrir lista yfir allar skipanir, eða lestu [Skipanaskrána](topic:commands).
