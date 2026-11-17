---
title: Združitev sprememb dveh oseb v isti risbi
summary: Naj git, Fossil ali Mercurial združi dve kopiji objekta DWG ali DXF za objektom, z uporabo ključa, ki ga CadCraft hrani pri vsakem objektu.
keywords: združi, git, fossil, mercurial, nadzor različic, diff, konflikt, tristranski, cadcraft merge, ključ, gitattributes, DWG, DXF
from: 71482bf9
---

Dve osebi urejata isto risbo. Če sta spremenili različne objekte, je združitev lahko samodejna: ni treba ničesar ponovno narediti ročno.

## Kaj omogoča delovanje

CadCraft vsakemu objektu, ki ga narišete, da kratek **ključ**, ki se nikoli ne spremeni in ga ne dobi noben drug objekt. Shrani se skupaj z objektom v DWG ali DXF (kot dodatni podatki, ki jih drugi programi ohranijo). Združitev išče objekte po tem ključu, ne po njihovem položaju v datoteki, ker vsak program ob shranjevanju položaje preštevilči. To izklopite v {{ui:Nastavitve}} › CadCraft › Datoteke, prijazne združevanju, če nikoli ne združujete; datoteke so približno 10 odstotkov manjše.

Risba, shranjena pred uvedbo ključev, se še vedno združi: njeni objekti dobijo ključ glede na svoj položaj v datoteki, enak za vse, ki jo odprejo.

## Nastavitev

Git potrebuje dve vrstici enkrat na repozitorij:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# enkrat, na vsakem računalniku
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Brez gita zaženite ročno: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil in Mercurial prejmeta enake tri datoteke v svoji nastavitvi orodja za združevanje.

## Pravila

- Objekt, spremenjen samo na eni strani, se vzame. Ista sprememba na obeh straneh se vzame enkrat.
- Ista lastnost, spremenjena na dva načina, je **konflikt**: vaša stran ostane, poročilo pa našteje obe vrednosti. Odprite rezultat, poglejte ta objekt in ga popravite ročno.
- Objekt, dodan na katerikoli strani, se ohrani. Objekt, odstranjen na eni strani in nespremenjen na drugi, se odstrani. Odstranjen na eni strani in spremenjen na drugi: odstranjen in prijavljen.
- Sloji, bloki, slogi besedila in kot, listi ter poimenovani pogledi se združujejo enako. Omejitve sledijo objektom, ki jih imenujejo.
- Rezultat je zapisan v isti obliki datoteke in različici kot vaša.

Ni združeno: vrstni red, v katerem so objekti narisani, je vaš, nato pa objekti, ki jih je dodala druga stran. Spremembe iste definicije bloka na obeh straneh so konflikt in se nikoli ne zmešajo. Nič se ne naloži na strežnik; vse teče na vašem računalniku.
