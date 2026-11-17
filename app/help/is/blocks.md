---
title: Búa til og setja inn blokkir
summary: Breyta teiknaðri hurð í blokk, setja hana aftur inn á öðrum stöðum, í öðrum mælikvörðum og hornum, og taka til ónotaðar blokkir.
keywords: blokk, bmake, setja inn, ddinsert, tákn, purge, explode, endurskilgreina, grunnpunktur, tilvísun, telja, bcount, listi, csv, eigindi, gagnaútdráttur
from: 125a129d
---

## Það sem þú býrð til

Hurðartákn gert að blokk sem heitir `DOOR-900`, síðan sett inn þrisvar: eins og það var teiknað, snúið um 90 gráður og speglað.

Blokk er nefndur hópur hluta. Þú teiknar hana einu sinni; sérhver staður þar sem þú notar hana er **blokkartilvísun** sem vísar aftur í þessa einu skilgreiningu. Hlutinn {{ui:Blokkir}} í vinstra spjaldinu sýnir blokkirnar í teikningunni og hversu oft hver þeirra er notuð.

## Teikna hurðina

1. Sláðu inn `L` og ýttu á {{key:Enter}}.
2. Sláðu inn `0,0` og ýttu á {{key:Enter}}.
3. Sláðu inn `@0,900` og ýttu á {{key:Enter}}, og ýttu svo á {{key:Enter}} aftur. Þetta er hurðarblaðið.
4. Sláðu inn `A` og ýttu á {{key:Enter}}.
5. Sláðu inn `C` og ýttu á {{key:Enter}} til að gefa miðjuna fyrst.
6. Sláðu inn `0,0` og ýttu á {{key:Enter}} fyrir miðjuna.
7. Sláðu inn `900,0` og ýttu á {{key:Enter}} fyrir upphafspunktinn.
8. Sláðu inn `0,900` og ýttu á {{key:Enter}} fyrir endapunktinn. Þetta er hurðarsveiflan.
9. Smelltu á {{ui:Mörk}}.

Bogar fara rangsælis frá upphafspunkti að endapunkti.

## Búa til blokkina

1. Sláðu inn `B` og ýttu á {{key:Enter}}, eða smelltu á {{ui:Búa til}} í blokkahópnum.
2. Við `Enter block name` sláðu inn `DOOR-900` og ýttu á {{key:Enter}}.
3. Við `Specify insertion base point` sláðu inn `0,0` og ýttu á {{key:Enter}}. Þetta er löm hurðarinnar: punkturinn sem lendir þar sem þú setur blokkina.
4. Við `Select objects` dragðu glugga utan um blaðið og bogann.
5. Ýttu á {{key:Enter}}.

Ferillinn segir `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` Spjaldið {{ui:Blokkir}} sýnir DOOR-900 með `1×` við hliðina: ein tilvísun. Smelltu á hurðina: hún velst nú sem einn hlutur, „Blokkartilvísun“.

:::tip
Þú getur valið hlutina fyrst og síðan slegið inn `B`. CadCraft spyr samt um heitið og grunnpunktinn og notar síðan valið þitt.
:::

## Setja blokkina inn

1. Sláðu inn `I` og ýttu á {{key:Enter}}, eða smelltu á {{ui:Setja inn}} við hliðina á DOOR-900 í spjaldinu {{ui:Blokkir}}.
2. Við `Enter block name or [File/Library] <DOOR-900>` ýttu á {{key:Enter}}. (Hnappurinn {{ui:Setja inn}} í spjaldinu fyllir heitið inn fyrir þig.)
3. Hurðin fylgir krosshárinu. Smelltu þar sem lömin á að vera.

Önnur hurð birtist.

## Setja inn snúna eða skalaða blokk

1. Sláðu inn `I` og ýttu á {{key:Enter}}, ýttu síðan á {{key:Enter}} til að samþykkja heitið.
2. Við `Specify insertion point [Scale/Rotate]` sláðu inn `R` og ýttu á {{key:Enter}}.
3. Sláðu inn `90` og ýttu á {{key:Enter}}. Forskoðunin snýst.
4. Smelltu til að setja hana.

Sláðu inn `S` í staðinn til að stilla skalaþátt; hann gildir í báðar áttir. Kvarðinn og snúningurinn eru munaðir fyrir næstu innsetningu. Til að spegla hurð, settu hana inn og notaðu síðan {{cmd:MIRROR}} á tilvísunina.

## Breyta blokk sem hefur verið sett inn

Veldu blokkartilvísun. Í hægra spjaldinu getur þú breytt {{ui:X}}, {{ui:Y}}, {{ui:Kvarði X}}, {{ui:Kvarði Y}} og {{ui:Snúningur}}. Neikvætt {{ui:Kvarði X}} speglar hana.

## Endurskilgreina blokk

Til að breyta öllum hurðum í einu, búðu til blokk með sama heiti:

1. Teiknaðu nýju útgáfuna af hurðinni.
2. Sláðu inn `B` og ýttu á {{key:Enter}}, og sláðu inn `DOOR-900`.
3. Við `Block "DOOR-900" already exists. Redefine it?` sláðu inn `Y` og ýttu á {{key:Enter}}.
4. Gefðu grunnpunktinn og veldu nýju hlutina, eins og áður.

Sérhver tilvísun í DOOR-900 sýnir nú nýju útgáfuna.

Eða breyttu blokkinni sjálfri: {{ui:Blokkir}} › {{ui:Meira}} › {{ui:Breyta blokk}} ({{cmd:BEDIT}}) opnar hana á sér, og {{ui:Vista blokk}} skilar henni. Sjá [Eigindi blokkar](topic:attributes#change-a-block-the-block-editor).

## Telja blokkir og flytja út lista

Sláðu inn {{cmd:COUNT}} (eða {{ui:Blokkir}} › {{ui:Meira}} › {{ui:Telja blokkir}}), og síðan:

- smelltu á eina hurð: allar hurðir í þessu rými eru valdar, og ferillinn segir hversu margar þær eru hér og í allri teikningunni;
- eða ýttu á {{key:Enter}}: ferillinn telur upp hverja blokk með fjölda hennar, mest fyrst;
- eða sláðu inn `E`, og síðan `C` fyrir CSV-skrá með fjöldunum (í líkaninu, á blöðum, samtals) eða `A` fyrir eina röð á hverja tilvísun með lagi hennar, staðsetningu, snúningi og hverju eigindisgildi — lista sem þú getur opnað í töflureikni.

Óheitnar blokkir (málsetningar, töflur) og tilvísanir inni í öðrum blokkum eru ekki taldar. Reitir sem byrja eins og formúla (`=`, `+`, `-`, `@`) fá forskeytið `'`, svo töflureiknir sýni þá sem texta.

## Sundra og hreinsa

- {{cmd:EXPLODE}} (`X`) breytir valdri blokkartilvísun aftur í aðskilda hluti. Skilgreiningin helst.
- {{cmd:PURGE}} (`PU`) fjarlægir blokkarskilgreiningar sem ekkert notar lengur. Ferillinn segir hversu margar voru fjarlægðar.

## Heiti blokka

Heiti getur verið allt að 255 stafir og innihaldið bil, en það má ekki byrja á stjörnu og má ekki innihalda `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` eða bakstrik. Þegar þú vistar DXF R12 eru heiti skrifuð með hástöfum, aðrir stafir en bókstafir, tölustafir, `$`, `_` og `-` verða `_`, og heiti eru stytt í 31 staf; ferillinn segir hversu mörg breyttust. Stutt heiti með hástöfum, tölustöfum og bandstrikum, eins og `DOOR-900`, haldast óbreytt. Vistuð DWG-skrá heldur heitum eins og þú slóst þau inn, með hástöfum og lágstöfum; aðeins stafir sem DWG leyfir ekki breytast (`|` verður `$0$`, aðrir verða `_`).

## Skrifa blokk eða hluti í sína eigin skrá

Sláðu inn `W` ({{cmd:WBLOCK}}) og veldu **Hlutir**, **Blokk** eða **Öll teikningin**. Útkoman er ný DWG- eða DXF-skrá sem geymir aðeins þau lög, stíla og blokkir sem hún notar, með grunnpunktinn þinn sem upphafspunkt. Fyrir hluti getur þú haldið þeim, breytt þeim í blokk eða eytt þeim úr þessari teikningu.

## Algeng mistök

- **Blokkin lenti langt frá krosshárinu.** Grunnpunkturinn var ekki á hlutunum. Búðu blokkina til aftur með grunnpunktinn á horni eða löm.
- **„Enginn hlutur valinn; ekkert búið til.“** Þú ýttir á {{key:Enter}} áður en þú valdir eitthvað.
- **„Þessi teikning er ekki með neinar blokkir enn: F setur inn eina úr skrá, L úr safninu (eða búðu til eina með BLOCK).“** Sláðu inn `F` til að sækja blokk úr annarri teikningu, eða `L` fyrir safnið. Sjá [Setja inn úr skrá eða safni](topic:insert-from-file-and-library).
- **„Sýnisglugga er ekki hægt að setja í blokk.“** Taktu sýnisgluggarammana út úr valinu.
