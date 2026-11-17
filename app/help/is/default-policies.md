---
title: "Sjálfgefnar reglur: stilltu hvað ný teikning byrjar með"
summary: Segðu einu sinni hvaða einingar, lengdarsnið, nákvæmni, textahæð og blaðpappír ný teikning byrjar með, fyrir metrakerfi og enskt kerfi, og deildu reglunum um skrifstofuna sem lítilli skrá.
keywords: sjálfgefið, sjálfgefnar, sjálfgefnar reglur, regla, skrifstofustaðall, skrifstofusjálfgefið, sniðmát, ný teikning, einingar, insunits, lengdarsnið, byggingarlist, nákvæmni, luprec, textahæð, blaðpappír, a1, deila, útflutningur, innflutningur, json
from: 7b80fd13
---

## Hvað þú gerir

Segðu CadCraft hvað ný teikning á að byrja með, svo enginn á skrifstofunni þurfi að keyra UNITS og breyta sömu hlutunum í hvert skipti. Þetta er viðbót: hún er slökkt þar til þú kveikir á henni, og regla sem þú stillir ekki skilur sjálfgefið gildi CadCraft eftir alveg eins og það er.

:::note
Þetta eru sjálfgefin gildi fyrir **nýjar** teikningar og **ný** blöð. Teikning sem þú hefur þegar byrjað á er ekki breytt, og ekki heldur teikning sem þú opnar.
:::

## Skref

1. Opnaðu Stillingar, farðu í {{ui:Viðbætur}} og kveiktu á {{ui:Sjálfgefnar reglur}}.
2. Í Stillingum, opnaðu flipann **CadCraft** og veldu {{ui:Sjálfgefnar reglur}} í listanum vinstra megin.
3. Stilltu reglurnar sem þú vilt. Hver þeirra byrjar á **gildi CadCraft**. Regla með reitunum **Metrakerfi** og **Enskt kerfi** tekur eitt gildi fyrir hvora tegund teikninga; fylltu aðeins inn þá reiti sem þú þarft.
4. Það er enginn Vista-hnappur: hver breyting er vistuð um leið og þú gerir hana.
5. Byrjaðu nýja teikningu. Hún hefur einingarnar, lengdarsniðið, nákvæmnina og textahæðina sem þú stilltir, og fyrsta nýja blað hennar er á þeim pappír sem þú valdir.

## Reglurnar

- **Einingar nýrrar teikningar**: engar, millimetrar, sentímetrar, metrar, tommur eða fet.
- **Lengdarsnið** og **Nákvæmni lengdar**: það sem skipunin UNITS stillir, fyrir nýja teikningu.
- **Hæð nýs texta**, í teikniseiningum.
- **Pappír nýs blaðs**: pappírinn sem nýtt blað notar.
- **Stærðir athugasemda á pappír** (Stillingar › Almennt › Sjálfgefnar reglur): hæðir skrifstofunnar í millimetrum eins og þær eru prentaðar. CadCraft notar þá fyrir athugasemdir og merkingar: {{cmd:ANNOSCALE}} stillir hæðina sem nýr texti byrjar með á þá hæð við skala athugasemdar. Sjá [Einingar, blöð og skalar](topic:units-papers-scales#annotate-by-scale).

Teikning í tommum eða fetum notar enska kerfisgildin; hvaða önnur teikning sem er notar metragildin. Teikning án eininga notar einingakerfið sem er stillt í Stillingar › Almennt › Sjálfgefnar reglur, eða metrakerfi ef ekkert er stillt.

## Deildu þeim á skrifstofunni

1. Í Stillingum, opnaðu flipann **Almennt** og veldu {{ui:Sjálfgefnar reglur}}.
2. Smelltu á {{ui:Vista í skrá}}. Þú færð litla skrá sem endar á `.ccdefaults.json`.
3. Á annarri tölvu, kveiktu á viðbótinni, opnaðu sama stað og smelltu á {{ui:Hlaða úr skrá}}. Reglur skráarinnar koma í stað þeirra sem eru á þeirri tölvu.

Ein skrá geymir reglur allra CadCraft-forrita, svo sama skráin virkar í BimCraft.

## Gott að vita

- Engin regla er fyrir skala blaðs: sýn nýs blaðs er löguð að teikningunni, og þú stillir skalann á blaðinu.
- Engin regla er fyrir málsetningarstíl: ný teikning hefur engan nefndan málsetningarstíl. Stilltu málsetningar með DIMSTYLE, eða byrjaðu á teikningu sem hefur þinn.
- Skráin er venjulegur, opinn JSON. Regla sem skráin nefnir og þessi útgáfa þekkir ekki er sleppt og nefnd í skilaboðunum; hitt hleðst áfram.
- Reglur eru geymdar í þessum vafra, ekki í teikningunni. Slökktu á viðbótinni og allt er aftur sjálfgefið fyrir CadCraft.
