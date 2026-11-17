---
title: Sameina breytingar tveggja á einni teikningu
summary: Leyfðu git, Fossil eða Mercurial að sameina tvö eintök af DWG- eða DXF-skrá hlut fyrir hlut, með lyklinum sem CadCraft geymir á hverjum hlut.
keywords: sameina, git, fossil, mercurial, útgáfustýring, mismunur, árekstur, þriggja hliða, cadcraft sameina, lykill, gitattributes, DWG, DXF
from: 71482bf9
---

Tveir aðilar breyta sömu teikningu. Ef þeir breyttu mismunandi hlutum getur sameiningin verið sjálfvirk: ekkert þarf að gera með höndum.

## Hvað gerir þetta mögulegt

CadCraft gefur hverjum hlut sem þú teiknar stuttan **lykil** sem breytist aldrei og er aldrei gefinn tveimur hlutum. Hann er vistaður með hlutnum í DWG- eða DXF-skránni (sem aukagögn sem önnur forrit geyma). Sameiningin finnur hluti eftir þessum lykli, ekki eftir stöðu þeirra í skránni, því hvert forrit endurnúmerar stöður þegar það vistar. Slökktu á þessu í {{ui:Stillingar}} › CadCraft › Sameiningarvænar skrár ef þú sameinar aldrei; skrárnar verða um 10 prósentum minni.

Teikning sem var vistuð áður en lyklar urðu til sameinast enn: hlutir hennar fá lykil út frá stað þeirra í skránni, eins fyrir alla sem opna hana.

## Uppsetning

Git þarf tvær línur einu sinni í hverri geymslu:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# einu sinni, á hverri tölvu
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Án git, keyrðu það handvirkt: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil og Mercurial taka sömu þrjár skrárnar í sinni eigin stillingu fyrir sameiningarverkfæri.

## Reglurnar

- Hlutur sem breyttist aðeins öðrum megin er tekinn. Sama breyting beggja megin er tekin einu sinni.
- Sami eiginleiki breyttur á tvo vegu er **árekstur**: þín hlið helst og skýrslan telur upp bæði gildin. Opnaðu niðurstöðuna, skoðaðu hlutinn og lagfærðu hann með höndum.
- Hlutur sem bætt var við öðrum hvorum megin er geymdur. Hlutur sem var fjarlægður öðrum megin og óbreyttur hinum megin er fjarlægður. Fjarlægður öðrum megin og breyttur hinum megin: fjarlægður, og tilkynnt um það.
- Lög, blokkir, texta- og málsetningarstílar, blöð og nefndar sýnir sameinast á sama hátt. Þvinganir fylgja þeim hlutum sem þær nefna.
- Niðurstaðan er skrifuð á sama skráarsniði og útgáfu og þín.

Ekki sameinað: röð sem hlutir eru teiknaðir í er þín, og síðan hlutirnir sem hin hliðin bætti við. Breytingar á sömu blokkarskilgreiningu beggja megin eru árekstur, aldrei blandaðar. Ekkert er hlaðið upp; allt keyrir á tölvunni þinni.
