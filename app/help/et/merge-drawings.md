---
title: Kahe inimese ühe joonise muudatuste ühendamine
summary: Lase git, Fossil või Mercurial ühendada kaks DWG- või DXF-koopiat objekti kaupa, kasutades CadCraft'i iga objekti juures hoitavat võtit.
keywords: ühenda, ühendamine, git, fossil, mercurial, versioonihaldus, erinevus, konflikt, kolmesuunaline, cadcraft ühendamine, võti, gitattributes, DWG, DXF
from: 71482bf9
---

Kaks inimest muudavad sama joonist. Kui nad muutsid erinevaid objekte, saab ühendamine olla automaatne: käsitsi pole midagi uuesti teha.

## Mis selle toimima paneb

CadCraft annab iga joonistatud objektile lühikese **võtme**, mis ei muutu kunagi ja mida ei anta kahele objektile. See salvestatakse objektiga DWG- või DXF-faili (lisaandmetena, mida teised programmid hoiavad). Ühendamine otsib objekte selle võtme järgi, mitte nende asukoha järgi failis, sest iga programm nummerdab asukohad salvestades uuesti. Kui sa kunagi ei ühenda, lülita see välja jaotises {{ui:Sätted}} › CadCraft › Ühendamisele sobivad failid; failid on siis umbes 10 protsenti väiksemad.

Enne võtmeid salvestatud joonis ühendub ikka: selle objektid saavad võtme nende asukoha järgi failis, sama kõigile, kes seda avavad.

## Seadistamine

Git vajab iga hoidla jaoks üks kord kahte rida:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# üks kord igas arvutis
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Ilma gitita käivita see käsitsi: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil ja Mercurial võtavad samad kolm faili oma ühendustööriista seadistuses.

## Reeglid

- Ainult ühel poolel muudetud objekt võetakse. Sama muudatus mõlemal poolel võetakse üks kord.
- Sama omadus, mis on muudetud kahel viisil, on **konflikt**: sinu pool jääb alles ja aruanne loetleb mõlemad väärtused. Ava tulemus, vaata seda objekti ja paranda käsitsi.
- Mõlemal poolel lisatud objekt säilib. Objekt, mis on ühel poolel eemaldatud ja teisel muutmata, eemaldatakse. Ühel poolel eemaldatud ja teisel muudetud: eemaldatakse ja sellest teatatakse.
- Kihid, plokid, teksti- ja mõõtestiilid, lehed ja nimetatud vaated ühendatakse samamoodi. Seosed järgivad objekte, mida nad nimetavad.
- Tulemus kirjutatakse sama failivormingu ja versioonina nagu sinu oma.

Ei ühendata: järjekord, milles objektid joonistatakse, on sinu oma, seejärel teisel poolel lisatud objektid. Muudatused samas plokimääratluses mõlemal poolel on konflikt, neid ei segata kunagi. Midagi ei laadita üles; kõik töötab sinu arvutis.
