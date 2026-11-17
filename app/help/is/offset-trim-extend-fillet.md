---
title: Frávik, klipping, lenging, ávali og skáskurður veggja
summary: Breyttu stökum línum í tvöfalda veggi með frávikum, hreinsaðu hornin með ávala og klipptu og lengdu línur með klippingu og lengingu.
keywords: frávik, klipping, lenging, ávali, skáskurður, skásker, skáhalli, brjóta, brotapunktur, lengja, veggir, horn, klippa, samsíða, radíus, hreinsun
from: c6c5cbd0
---

## Það sem þú býrð til

Lítið herbergi með 200 þykkum veggjum: innri flöturinn er teiknaður, ytri flöturinn er færður með frávik, hornin eru hreinsuð, og dyragat er skorið í gegnum einn vegg.

## Teiknaðu innri flötinn

1. Skrifaðu `L` og ýttu á {{key:Enter}}.
2. Skrifaðu `0,0` og ýttu á {{key:Enter}}.
3. Skrifaðu `@5000,0` og ýttu á {{key:Enter}}.
4. Skrifaðu `@0,4000` og ýttu á {{key:Enter}}.
5. Skrifaðu `@-5000,0` og ýttu á {{key:Enter}}.
6. Skrifaðu `C` og ýttu á {{key:Enter}}.
7. Smelltu á {{ui:Mörk}}.

Þú hefur fjórar aðskildar línur. (Lokuð fjöllína væri færð í einu lagi; aðskildar línur sýna hvernig {{cmd:FILLET}} hreinsar horn.)

## Færðu ytri flötinn með frávik

1. Skrifaðu `O` og ýttu á {{key:Enter}}. Spurningin segir `Tilgreindu fjarlægð frávik [Í gegnum (T)] <Í gegnum (T)>:`.
2. Skrifaðu `200` og ýttu á {{key:Enter}}.
3. Við `Veldu hlut til frávik` smelltu á neðri línuna.
4. Við `Tilgreindu punkt á hlið til frávik` smelltu hvar sem er fyrir neðan hana. Samsíða lína birtist 200 fyrir neðan.
5. Smelltu á hægri línuna, smelltu síðan til hægri við hana.
6. Smelltu á efri línuna, smelltu síðan fyrir ofan hana.
7. Smelltu á vinstri línuna, smelltu síðan til vinstri við hana.
8. Ýttu á {{key:Enter}} til að ljúka skipuninni.

Þú ættir að sjá fjórar ytri línur, hver jafnlöng og innri línan sín, þannig að ytri hornin mætast ekki.

:::tip
Ýttu á {{key:Enter}} við fjarlægðarspurninguna til að nota síðustu fjarlægð aftur. Skrifaðu `T` (Í gegnum) og þá fer hvert afrit í gegnum punktinn sem þú smellir á, hver sem fjarlægðin er.
:::

{{cmd:OFFSET}} virkar á línum, bogum, hringjum og fjöllínum. Frávik lokaðrar fjöllínu færir alla útlínuna, hornin meðtalin.

## Hreinsaðu ytri hornin með ávala

{{cmd:FILLET}} tengir tvær línur í horni: það klippir eða lengir báðar þannig að þær mætast. Með radíus 0 verður hornið ferkantað.

1. Skrifaðu `F` og ýttu á {{key:Enter}}. Spurningin segir `Veldu fyrstu línu [Radíus (R)]:`.
2. Ef síðasta ávali sem þú gerðir notaði radíus, skrifaðu `R`, ýttu á {{key:Enter}}, skrifaðu `0` og ýttu á {{key:Enter}}.
3. Smelltu á ytri neðri línuna nærri hægri endanum.
4. Við `Veldu aðra línu` smelltu á ytri hægri línuna nærri neðri endanum.

Línurnar tvær mætast nú í skörpu horni, og skipunin endar.

5. Ýttu á {{key:Enter}} til að endurtaka {{cmd:FILLET}}, og gerðu næsta horn.
6. Endurtaktu þar til öll fjögur ytri hornin mætast.

Smelltu á hverja línu á þeim hluta sem þú vilt **halda**. Með radíus yfir 0 bætir ávali boga á milli línanna í staðinn.

:::tip
Skrifaðu `M` við fyrstu spurninguna til að gera öll fjögur hornin í einu, eða teiknaðu ytri flötinn sem eina lokaða fjöllínu og skrifaðu `P`: hvert horn er gert í einu. Haltu {{key:Shift}} niðri þegar þú smellir á aðra línu fyrir skarpt horn án þess að breyta radíusnum.
:::

## Skáskerðu horn með CHAMFER

{{cmd:CHAMFER}} sker horn af með beinni línu.

1. Skrifaðu `CHA` og ýttu á {{key:Enter}}.
2. Skrifaðu `D` (Fjarlægð) og ýttu á {{key:Enter}}. Skrifaðu `300` og ýttu á {{key:Enter}} fyrir fyrstu fjarlægð, ýttu síðan á {{key:Enter}} til að nota 300 líka fyrir þá seinni.
3. Smelltu á innri efri línuna nærri vinstri endanum, og síðan á innri vinstri línuna nærri efri endanum.

Hornið er skorið 300 til baka eftir hvorri línu og skáskurðarlína tengir þær. Skrifaðu `A` (Horn) í stað `D` til að gefa lengd á fyrstu línu og horn.

## Klipptu dyragat með klippingu

Fyrst teiknarðu tvo dyrastafi yfir neðri vegginn, síðan klippirðu veggalínurnar á milli þeirra.

1. Skrifaðu `L` og ýttu á {{key:Enter}}.
2. Skrifaðu `1000,200` og ýttu á {{key:Enter}}.
3. Skrifaðu `@0,-600` og ýttu á {{key:Enter}}, ýttu síðan aftur á {{key:Enter}}.
4. Ýttu á {{key:Enter}} til að endurtaka {{cmd:LINE}}.
5. Skrifaðu `1900,200` og ýttu á {{key:Enter}}.
6. Skrifaðu `@0,-600` og ýttu á {{key:Enter}}, ýttu síðan aftur á {{key:Enter}}.

Þú átt nú tvær stuttar línur sem skera neðri vegginn, 900 á milli.

7. Skrifaðu `TR` og ýttu á {{key:Enter}}. Sagan segir `Núverandi stillingar: Snöggur hamur, jaðrar: engin framlenging`.
8. Smelltu á innri neðri línuna milli dyrastafanna tveggja. Sá hluti hverfur. (Hvíldu bendilinn á honum fyrst: hlutinn sem fer verður grár og strikaður.)
9. Smelltu á ytri neðri línuna milli dyrastafanna tveggja. Sá hluti hverfur líka.
10. Smelltu á þann hluta hvers dyrastafs sem stendur út fyrir ofan vegginn, og þann hluta sem er fyrir neðan hann.
11. Ýttu á {{key:Enter}} til að ljúka skipuninni.

Þú ættir að sjá 900 op í neðri veggnum, með dyrastöfunum sem loka veggendunum.

Í Snöggum hami (sjálfgefið) spyr Klipping ekki fyrst um skurðarjaðra: sérhver sýnilegur hlutur er skurðarjaðar. Veldu bitann sem á að hverfa, eða dragðu leið í gegnum nokkra búta til að klippa þá alla í einu. Skrifaðu `U` og ýttu á {{key:Enter}} til að setja síðasta val eða drátt til baka án þess að hætta í skipuninni. Gluggi, krossgluggi, valdir jaðrar og {{key:Shift}} til að framlengja eru í [Klipping og framlenging](topic:trim-and-extend).

## Lengdu línu þar til hún mætir annarri

{{cmd:EXTEND}} lengir enda línu, boga eða fjöllínu þar til hann mætir næsta hlut í þeirri átt.

1. Skrifaðu `L` og ýttu á {{key:Enter}}.
2. Skrifaðu `1000,2000` og ýttu á {{key:Enter}}.
3. Skrifaðu `@2000,0` og ýttu á {{key:Enter}}, ýttu síðan aftur á {{key:Enter}}. Línan stoppar 2000 stutt frá hægri veggnum.
4. Skrifaðu `EX` og ýttu á {{key:Enter}}.
5. Smelltu á nýju línuna nærri hægri endanum.
6. Ýttu á {{key:Enter}} til að ljúka skipuninni.

Línan nær nú að innri fleti hægri veggsins. Sérhver sýnilegur hlutur er mörk; veldu nálægt endanum sem á að vaxa. Innan {{cmd:TRIM}} gerir {{key:Shift}}+smellur það sama.

## Brjóttu og lengdu

{{cmd:BREAK}} (`BR`, eða {{ui:Breyta}} › {{ui:Meira}} › {{ui:Brjóta}}) sker bil án skurðarjaðar: smelltu á hlutinn þar sem bilið byrjar (sá smellur er fyrsti punkturinn), smelltu síðan þar sem það endar. Á hring fer hlutinn rangsælis frá fyrsta punkti að öðrum. `F` við seinni spurninguna leyfir þér að gefa fyrsta punkt aftur, og {{cmd:BREAKATPOINT}} skiptir hlut í tvennt á einum punkti án bils.

{{cmd:LENGTHEN}} (`LEN`) breytir lengd við einn enda:

1. Skrifaðu `LEN` og ýttu á {{key:Enter}}. Smelltu á línu til að sjá núverandi lengd hennar; spurningin spyr aftur.
2. Veldu aðferð: `DE` (Breyting: upphæð til að bæta við, neikvæð til að taka af; `A` fyrir horn boga), `P` (Hlutfall: 50 helmingar hana), `T` (Heild: lengdin sem hún á að verða) eða `DY` (Kvik: dragðu endann).
3. Smelltu á hvern hlut nærri endanum sem á að færast. `U` tekur síðasta til baka; {{key:Enter}} lýkur.

Línur, bogar og opnar fjöllínur (síðasti bútur þeirra) má lengja.

## Algengar villur

- **Heil lína hvarf.** Ekkert fór yfir hana, þannig að Snöggur hamur eyddi henni. Skrifaðu `U` til að setja hana aftur; athugaðu að skurðarlínan fari í raun yfir hana (þysjaðu inn) og sé ekki á lagi sem er slökkt.
- **„Engin mörk í þá átt.“** Framlenging fann ekkert til að rekast á. Veldu nær endanum sem á að vaxa.
- **„Radíus er of stór.“** Bogi færi fram hjá enda einnar línunnar. Notaðu minni radíus.
- **„Aðeins fyrsti eða síðasti bútur opinnar fjöllínu má klippa til baka.“** Veldu tvo búta fjöllínunnar sem liggja hvor við annan, eða skrifaðu `P` til að ávala hvert horn hennar.
- **Frávikið fór á rangar hlið.** Hliðin er þar sem þú smellir eftir að hafa valið hlutinn. Afturkallaðu með {{key:Mod+Z}} og smelltu hinum megin.
- **„Ekki hægt að færa frávik svo langt.“** Frávikið myndi snúa boganum, hringnum eða fjöllínunni við. Notaðu minni fjarlægð.
