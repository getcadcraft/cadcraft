---
title: Eigindir blokka
summary: Sjáðu og breyttu gildunum sem blokkartilvísun ber, eins og liðarnúmeri eða framleiðanda, og haltu þeim þegar þú vistar afrit.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, titilreitur, breyta á staðnum, eigindaritill, attdef, skilgreina eigind, bedit, blokkaritill, bclose, eigind, eigindir, attrib, merki, liðarnúmer, gildi, ósýnilegt, fast, blokk, eiginleikar, listi, búnaðarmerki
from: 34d307c7
---

## Hvað eigindir eru

Eigind er nefnt gildi sem fylgir blokkartilvísun: liðarnúmer búnaðarmerkis, nafn herbergismerkis, eldvarnarflokkur hurðar. Skilgreining blokkarinnar segir hvaða eigindir hún hefur (hver hefur **merki**, **hvatningu**, **sjálfgefið** gildi og stað, stærð og horn fyrir texta sinn). Sérhver tilvísun í blokkina ber sín eigin gildi.

Sumar eigindir eru **ósýnilegar**: þær geyma gögn, svo sem framleiðanda eða gerðarnúmer, en teiknast aldrei. Sumar eru **fastar**: sama gildi í hverri tilvísun, ákveðið af blokkinni.

## Hvaðan eigindir koma

- Blokkir í DWG- og DXF-skrám sem þú opnar halda eigindum sínum, með gildum hverrar tilvísunar.
- Blokkir sem þú sækir með {{cmd:INSERT}} og valkostinum {{ui:Skrá}} halda sínum. Sjá [Setja inn úr skrá eða safni](topic:insert-from-file-and-library).
- Hlutir úr safni koma inn sem blokkir með eigindum: sýnilegt liðarnúmer og gögn hlutarins, ósýnileg.

- Blokkir sem þú býrð til sjálfur: skilgreindu eigindir með {{cmd:ATTDEF}} fyrst (hér fyrir neðan), veldu þær síðan með hinum hlutunum þegar þú býrð til blokkina.

## Skilgreina eigindir fyrir eigin blokkir

1. Teiknaðu línur blokkarinnar, til dæmis herbergismerki.
2. Veldu {{ui:Blokkir}} › {{ui:Meira}} › {{ui:Skilgreina eigind}}, eða skrifaðu `ATT` og ýttu á {{key:Enter}}.
3. Sagan sýnir stillingarnar (`Ósýnilegt=Nei Fast=Nei Forstillt=Nei`). Skrifaðu `I`, `C` eða `P` til að skipta einni, og ýttu á {{key:Enter}} þegar þær eru réttar. Ósýnileg gildi eru geymd en ekki teiknuð; fast gildi hefur sama gildi í hverri tilvísun; forstillt gildi er ekki spurt um þegar blokkin er sett inn.
4. Skrifaðu merkið (til dæmis `ROOM_NO`: hástafir, engin bil), hvatninguna (`Númer rýmis`) og sjálfgefið gildi (`101`).
5. Smelltu þar sem gildið á að vera og gefðu upp hæð og snúning. Merkið sést á teikningunni.
6. Gerðu blokkina með {{cmd:BLOCK}}, veldu línurnar og eigindaskilgreiningarnar saman. Tilvísunin sem kemur í staðinn fær sjálfgefnu gildin; hver ný {{cmd:INSERT}} biður um þau.

Valin eigindaskilgreining sýnir {{ui:Merki}}, {{ui:Hvatning}}, {{ui:Sjálfgefið}} og stillingarnar í {{ui:Eiginleikar}}.

## Breyta blokk: blokkaritillinn

{{ui:Blokkir}} › {{ui:Meira}} › {{ui:Breyta blokk}} ({{cmd:BEDIT}}, `BE`) opnar blokk ein og sér: skrifaðu nafn hennar (eða veldu tilvísun fyrst). Stika efst segir hvaða blokk þú ert að breyta. Teiknaðu, eyddu og breyttu hlutum hennar með venjulegum skipunum, og bættu við eða breyttu eigindaskilgreiningum. Smelltu síðan á {{ui:Vista blokk}} (eða skrifaðu {{cmd:BCLOSE}} og `S`): sérhver tilvísun sýnir breytinguna, og eitt {{key:Mod+Z}} afturkallar allt. {{ui:Henda breytingum}} (`BCLOSE`, `D`) skilur blokkina eftir eins og hún var.

Þegar þú bætir við, fjarlægir eða breytir eigindaskilgreiningum, færir vistunin líka allar tilvísanir í takt: gildi sem þú skrifaðir haldast, ný eigind fær sjálfgefið gildi, eigind sem var fjarlægð fer, og hver eigind fer aftur þangað sem skilgreiningin setur hana. Sagan segir hversu margar tilvísanir voru uppfærðar.

## Breyta titilreit þar sem hann er (REFEDIT)

Titilreitur á blaði er oft inni í blokk. Til að breyta línum hans eða textum án þess að yfirgefa blaðið:

1. Veldu titilreitinn og síðan {{ui:Blokkir}} › {{ui:Meira}} › {{ui:Breyta á staðnum}} (eða skrifaðu {{cmd:REFEDIT}}).
2. Innihald hans verður venjulegir hlutir þar sem þeir eru; allt annað er dofnað og er ekki hægt að breyta því.
3. Breyttu, eyddu eða teiknaðu: nýir hlutir verða hluti af blokkinni.
4. Smelltu á {{ui:Vista blokkina}} í stikunni efst (eða skrifaðu {{cmd:REFCLOSE}} og `S`). Sérhver tilvísun sýnir breytinguna, og eitt {{key:Mod+Z}} afturkallar alla breytinguna. {{ui:Henda}} skilur blokkina eftir eins og hún var.

Tengd teikning, kvik blokk, eða tilvísun sem er skölluð öðruvísi í breidd og hæð, er ekki hægt að breyta á staðnum: notaðu {{cmd:BEDIT}} (eða opnaðu tengdu teikninguna).

:::note
Vistaðu eða hentu í blokkaritlinum áður en þú vistar teikninguna: skrá sem er vistuð á meðan ritillinn er opinn hefur blokkina eins og hún var áður.
:::

## Fylltu þau út þegar þú setur blokk

1. Skrifaðu `I` og ýttu á {{key:Enter}}, skrifaðu heiti blokkarinnar og ýttu á {{key:Enter}}.
2. Smelltu þar sem hún á að fara.
3. CadCraft spyr um hvert gildi, til dæmis `Sláðu inn liðarnúmer (ITEM) <>`. Skrifaðu gildið og ýttu á {{key:Enter}}, eða ýttu á {{key:Enter}} til að halda sjálfgefna gildinu sem sýnt er í hornklofunum.

Gildi sem blokkin merkir sem forstillt, og föst gildi, er ekki spurt um. Þau fá sjálfgefið gildi sitt.

## Sjá og breyta gildunum

1. Smelltu á blokkartilvísun.
2. Í hægra spjaldinu, undir {{ui:Eigindir}}, hefur hvert merki gildi sitt. Ósýnileg gildi segja `falið`.
3. Smelltu á gildi, skrifaðu það nýja og ýttu á {{key:Enter}}.

Teikningin sýnir nýja gildið samstundis. Sérhver breyting er eitt skref: {{key:Mod+Z}} afturkallar henni.

**Eigindaritillinn.** Tvísmelltu á tilvísun með eigindum (eða {{cmd:EATTEDIT}}): valmyndin {{ui:Breyta eigindum}} listar hvert merki með hvatningu sinni og gildi. Skrifaðu ný gildi; smelltu á línu til að breyta {{ui:Hæð}}, {{ui:Snúningur}}, {{ui:Breiddarstuðull}}, {{ui:Jöfnun}}, {{ui:Lag}}, {{ui:Litur}} og {{ui:Ósýnilegt}} þeirrar eigindar fyrir þessa tilvísun eina. {{ui:Nota}} heldur valmyndinni opinni; {{ui:Í lagi}} beitir og lokar. Sérhvert {{ui:Nota}} eða {{ui:Í lagi}} er eitt skref í afturköllun.

**Á skipanalínunni** spyr {{cmd:ATTEDIT}} um hvert gildi í röð: skrifaðu nýtt, eða ýttu á {{key:Enter}} til að halda því.

## Breyta eigindaskilgreiningum (BATTMAN, ATTSYNC)

{{ui:Blokkir}} › {{ui:Meira}} › {{ui:Eigindastjóri}} ({{cmd:BATTMAN}}) listar eigindir blokkar: breyttu merki, hvatningu eða sjálfgefnu gildi, hakaðu við {{ui:Ósýnilegt}}, {{ui:Fast}} eða {{ui:Forstillt}}, og færðu þær upp eða niður (röðin sem gildin eru spurð í). Með {{ui:Uppfæra tilvísanir (gildi haldast)}} hakað kemur {{ui:Nota}} líka öllum tilvísunum í takt; endurnefnt merki heldur gildum sínum. Sérhvert {{ui:Nota}} er eitt skref í afturköllun.

{{cmd:ATTSYNC}} færir tilvísanir í takt við skilgreiningar blokkar sinnar handvirkt: `S` velur tilvísun, `N` nefnir blokk, `A` gerir allar blokkir. Gildi haldast.

Gildi eigna hlutar úr safni (auðkenni hans, útgáfa, leyfi og heimild) eru sýnd en ekki hægt að breyta, svo að athugun á uppfærslum virki áfram. Liðarnúmer hans og magn eru þín til að breyta.

## Telja þær upp

Veldu tilvísanir og skrifaðu `LI` (fyrir {{cmd:LIST}}). Sagan sýnir hverja eigind sem `MERKI = gildi`, með `(ósýnilegt)` eða `(fast)` þar sem það á við.

## Færa, snúa og sundra

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} og {{cmd:MIRROR}} halda gildunum; textinn fylgir blokkinni og er læsilegur.
- {{cmd:EXPLODE}} breytir sýnilegu eigindunum í venjulegan texta með gildum sínum. Ósýnilegu eigindunum er sleppt.

## Vistun

Vistuð DWG og vistuð DXF halda hverri eigind: skilgreiningum hverrar blokkar (ósýnilegum, föstum og forstilltum líka) og gildum hverrar tilvísunar. Önnur CAD-forrit lesa þau sem venjulegar blokkareigindir.

Í DXF R12 er gildi lengra en 255 stafir stytt í 255, og sagan segir það.

## Algeng mistök

- **Gildi birtist ekki á teikningunni.** Það er ósýnilegt, eða það er tómt. Ósýnileg gildi birtast enn í hægra spjaldinu.
- **Gildið sem ég skrifaði fór á skipanalínuna.** Smelltu fyrst inn í gildareitinn í hægra spjaldinu.
