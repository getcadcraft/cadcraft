---
title: Teikna snjalla veggi, hurðir og glugga í 2D
summary: Teiknaðu veggi eins og fjöllínu, tengdu þá snyrtilega, og settu inn hurðir og glugga sem fylgja veggnum. Allt í 2D, án þrívíddarlíkans.
keywords: veggur, veggir, WALL, WA, hurð, DOOR, DR, gluggi, WINDOW, WN, DELOPENING, snjallveggur, grunnmynd, op, hjör, sveifla
from: 45845d49
---

Veggir hér eru 2D-teikniefni. Þeir búa ekki til þrívíddarlíkan, svo grunnmynd er jafnlétt og línuteikning. Fyrir byggingarlíkan notarðu BimCraft.

## Teikna veggi

Skrifaðu `WALL` (`WA`), eða veldu {{ui:Wall}} í valmyndinni {{ui:More}} í hópnum {{ui:Draw}}, og smelltu síðan á punkta eins og þú myndir gera fyrir fjöllínu. Ýttu á {{key:Enter}} til að ljúka, eða skrifaðu `C` til að loka herberginu.

- `T` setur þykktina.
- `J` segir hvað smellirnir þínir fylgja: miðju veggsins, eða vinstri eða hægri flöt hans.
- `F` setur fyllinguna: enga, heila eða skyggingu.

Horn skáskerast sjálfkrafa. Veggur sem endar innan þykktar annars veggs tengist honum í hreinu T, og veggir sem þvera hvor annan opnast hvor inn í annan. Tengingarnar eru vistaðar með veggjunum. Fyrir rétthyrninga, marghyrninga, boga, skiptingu, læsingar og annað, sjá „Veggjaform, skurðir, hliðranir og læsingar fyrir 2D-veggi".

## Bæta við hurðum og gluggum

Skrifaðu `DOOR` (`DR`) eða `WINDOW` (`WN`) og smelltu á vegg. Hurð sveiflast til þeirrar hliðar veggsins sem þú smellir á. `W` setur breiddina, `Y` gerðina og `H` hjöruhliðina. Haltu áfram að smella til að setja fleiri, og ýttu á {{key:Enter}} til að ljúka. Hurðir geta verið einfaldar, tvöfaldar, rennihurðir eða opið op. Gluggar geta verið fastir, opnanlegir eða rennigluggar.

## Breyta þeim

Veldu vegg til að sjá handföng hans:

- Handföngin á endunum teygja vegginn. Veggir sem tengdir eru honum fylgja.
- Handfangið í miðjunni færir vegginn.
- Handfang á opi rennir því eftir veggnum.
- Örvarnar snúa hjöru og sveiflu hurðar við.

Eiginleikar sýna þykktina, fyllinguna og hvert op: gerð, breidd, stöðu, hjör, sveiflu, hvort það sést opið eða lokað, og {{ui:Remove}}. `DELOPENING` tekur út opið sem er næst þar sem þú smellir.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` og `ERASE` virka eins og venjulega. Hurðir og gluggar fara með veggnum sínum, tengdir veggir halda tengingum sínum, og ein afturköllun tekur allt til baka.

## Í öðrum forritum

Hver veggur er vistaður sem venjuleg blokk, svo önnur CAD-forrit sýna hann rétt og geta fært hann, en þau geta ekki breytt honum sem vegg. `EXPLODE` breytir vegg í venjulegar línur og boga, og hann hættir að vera veggur.
