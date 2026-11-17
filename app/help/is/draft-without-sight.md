---
title: Teikning án sjónar
summary: Kveiktu á Aðgengi og CadCraft les hverja skipun og niðurstöðu upp í gegnum skjálesarann þinn, lýsir teikningunni og því sem er nálægt bendlinum, leyfir þér að færa bendilinn með lyklaborðinu, spilar hljóð fyrir hvern smell og grip, og tekur við skipunum með rödd þar sem vafrinn þinn getur það á tölvunni þinni.
keywords: aðgengi, skjálesari, blindur, lítil sjón, NVDA, VoiceOver, JAWS, Orca, lyklaborðsbendill, raddskipanir, tal, hljóð, smellhljóð, lýsa teikningu, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Aðgengi** gerir þér kleift að teikna án þess að sjá skjáinn. Það er slökkt þar til þú kveikir á því, svo enginn fær það óvart.

## Kveiktu á því

Opnaðu **Stillingar** (gírinn, eða Ctrl+,), finndu **Teikning án sjónar** og veldu **Kveikt**. Eða skrifaðu `ACCESS` í skipanalínuna og svaraðu `On`. Það er munað á þessari tölvu.

Með Aðgengi kveikt:

- **Allt sem skipanalínan segir er lesið upp** í gegnum skjálesarann þinn: það sem þú skrifaðir, spurningin sem hún spyr, svarið og hver villa. CadCraft notar eigin kurteis og brýn lifandi svæði, þannig að skjálesari sem les lifandi svæði þarf enga uppsetningu. Villur og afbrot grípa fram í; annað bíður sinnar röðar.
- **Teikningarsvæðið er aðgengilegt.** Ýttu á Tab þar til þú heyrir „Teikning“, eða ýttu á Shift+Tab úr skipanalínunni. Það er svæði sem sendir lykla áfram til CadCraft.

## Lyklar á teikningunni

| Lykill | Hvað hann gerir |
|---|---|
| Örvatakkar | Færa lyklaborðsbendilinn. Eitt skref er um hundraðshluti af því sem skjárinn sýnir, námundað í 1, 2 eða 5. Shift færir tíu sinnum lengra, Ctrl tíunda hluta. |
| Enter | Velja punktinn undir bendlinum, nákvæmlega eins og smellur myndi gera. |
| Space | Ýta á Enter í skipanalínunni: ljúka LINE, taka sjálfgefið. |
| Tab, Shift+Tab | Hoppa á næsta eða fyrri smellipunkt nálægt bendlinum, næsta fyrst. |
| G | Fletta í gegnum grip valinna hluta. |
| D | Lýsa teikningunni: hversu margir hlutir, af hvaða tegund, hversu stórir, hvað er valið. |
| W | Segja hvar bendillinn er og hversu langt hann er frá síðasta punkti. |
| N | Segja hvað er nálægt bendlinum, næst fyrst, með fjarlægð og hlið. |
| S | Lýsa völdum hlutum. |
| R | Endurtaka síðasta sem var sagt. |
| V | Rödd kveikt eða slökkt. |
| / | Fara í skipanalínuna. |
| ? | Telja upp þessa lykla. |

Þegar þú færir með lyklunum segir hann hvar þú lentir. Þegar skipun bíður eftir punkti segir hann líka hversu langt og í hvaða átt þú ert frá síðasta punkti, til dæmis „2400 frá síðasta punkti, til hægri, í 0 gráðum“.

## Skipanir

- {{cmd:ACCESS}} kveikir eða slekkur á Aðgengi, smellihljóðum og rödd og segir stöðuna.
- {{cmd:DESCRIBE}} segir hvað teikningin inniheldur.
- {{cmd:WHEREAMI}} segir hvar bendillinn er.
- {{cmd:NEARBY}} segir hvað liggur nálægt bendlinum.
- {{cmd:SAYSEL}} segir hvað er valið, ein setning fyrir hvern hlut.
- {{cmd:VOICE}} kveikir eða slekkur á töluðum skipunum.

Þessar fimm lesa teikninguna og prenta svar; þær breyta engu.

## Hljóð fyrir smelli og grip

Kveiktu á **Smellihljóð og gripshljóð** í Stillingum. Hver tegund smells hefur sína tóntegund og hljóð, svo þú getur greint endapunkt frá miðpunkti, miðju, skurðpunkti og hinum, og grip hefur tvöfalt tikk. Hljóðið færist til vinstri eða hægri til að fylgja bendlinum yfir skjáinn. Hljóðin eru búin til á tölvunni þinni; ekkert er sótt.

## Skipanir með rödd

Kveiktu á **Skipanir með rödd** í Stillingum. Segðu heiti skipunar („line“, „circle“, „move“), og segðu síðan tölur eins og þú læsir þær: „point three hundred comma four hundred“, „distance twelve hundred“, „angle forty five“. „Enter“, „cancel“, „undo“ og „redo“ gera það sem þau segja. Það sem heyrðist er lesið til baka, og setning sem er ekki skipun er tilkynnt, ekki getgáta.

**Hvar talið er greint.** CadCraft hefur enga eigin talþjónustu og sendir ekkert hljóð neitt. Það biður vafrann þinn um að greina tal á þessari tölvu. Ef vafrinn getur það er valið **Á þessari tölvu** og ekkert hljóð fer út úr henni. Ef hann getur það ekki er röddin slökkt nema þú veljir **Netþjónusta vafra**, sem leyfir vafranum að senda hljóð til talþjónustu framleiðandans. Stillingar segir hvað á við áður en þú ákveður.

## Það sem það gerir ekki enn

- Aðeins CadCraft hefur Aðgengi. Hin sjö forritin fylgja á eftir, með sömu lyklum og hljóðum.
- Texti á teikningu (athugasemd, heiti blokkar) er lesinn upp eins og hann er skrifaður; hann er aldrei tekinn sem skipun.
- Það hefur verið prófað með gervi-prófunum og prófunum vafrans; handprófanir með NVDA, VoiceOver og blindum eða sjónskertum prófara eru enn eftir. Ef þú prófar það, segðu okkur hvað vantar.
