---
title: Settu upp blað með titilreit og sýnisgluggum
summary: Búðu til blað (útlit) með ramma og titilreit, stilltu kvarða sýnisglugga, bættu við öðrum sýnisglugga fyrir smáatriði og fylltu út titilreitinn.
keywords: útlit, blað, pappírsrými, sýnisgluggi, mview, vpview, titilreitur, kvarði, pappírsstærð, rammi, vports, prentkvarði, mspace, pspace, líkanrými, fara inn í sýnisglugga, tvísmella á sýnisglugga
from: 45a45de8
---

## Það sem þú býrð til

A3-blað með titilreit, alla grunnmyndina í einum sýnisglugga í 1:100, og öðrum sýnisglugga sem sýnir eitt horn í 1:20.

## Líkanið og blöðin

Þú teiknar bygginguna á {{ui:Líkan}}-flipanum, í fullri stærð: 6 m veggur er 6000 einingar langur í millimetrum. **Blað** (útlit) er pappírsstykki, mælt í millimetrum eða tommum. **Sýnisgluggi** er gluggi skorinn í blaðið sem sýnir líkanið í kvarða.

## Áður en þú byrjar

1. Opnaðu eða teiknaðu grunnmynd á {{ui:Líkan}}-flipanum.
2. Ýttu á {{key:Esc}} svo ekkert sé valið.
3. Í {{ui:Núverandi stillingar}}, stilltu {{ui:Einingar}} á þá einingu sem þú teiknaðir í, til dæmis {{ui:Millimetrar}}.

Einingar skipta máli: kvarði sýnisglugga eins og 1:100 þýðir að einn millimetri á pappír sýnir 100 raunverulega millimetra, svo CadCraft þarf að vita hvað ein teikningareining er. Teikning sem er látin vera {{ui:Án eininga}} er tekin sem eining pappírsins (millimetrar á ISO-pappír, tommur á bandarískum pappír).

## Búa til blaðið

1. Smelltu á {{ui:+}}-hnappinn hægra megin við flipana undir teikningunni, eða sláðu inn `LAYOUT` og ýttu á {{key:Enter}}, eða smelltu á {{ui:Nýtt blað}}.

Nýr flipi, `Layout1`, opnast. Þú ættir að sjá blað á dekkri borðplötu: ramma, titilreit neðst hægra megin og einn sýnisglugga fyrir ofan hann sem sýnir alla líkanið í stærsta staðlaða kvarða sem passar. Ferillinn segir hvaða pappír það er: ISO A3 fyrir metrateikningar og teikningar án eininga, Tabloid (ANSI B) fyrir teikningar í tommum eða fetum.

2. Smelltu á {{ui:Mörk}} til að passa blaðið á skjáinn.

## Velja pappírinn

1. Ýttu á {{key:Esc}} svo ekkert sé valið. Haus hægra spjaldsins segir „Blað: Layout1“.
2. Í {{ui:Heiti}}, sláðu inn `A-101 Plan` og ýttu á {{key:Enter}}. Flipinn er endurnefndur.
3. Í {{ui:Pappír}}, veldu stærð.
4. Í {{ui:Stefna}}, veldu {{ui:Lárétt}} eða {{ui:Lóðrétt}}.

:::warning
Að breyta pappírnum færir ekki eða breytir stærð þess sem er þegar á blaðinu. Eftir breytingu skaltu athuga að rammi, titilreitur og sýnisgluggi passi enn, og færðu eða breyttu stærð þeirra með gripum. Að skipta á milli millimetra- og tommupappírs heldur tölunum, svo allt breytir stærð: stöðustikan varar þig við.
:::

## Stilla kvarða sýnisgluggans

1. Smelltu á ramma sýnisgluggans (brúnina). Haus spjaldsins segir „Sýnisgluggi“.
2. Í {{ui:Mælikvarði}}, veldu `1:100`.

Líkanið inni í sýnisglugganum teiknast aftur í 1:100, miðjað þar sem það var. Listinn býður metrakvarða frá 10:1 upp í 1:10000; teikningar í tommum eða fetum fá einnig byggingarkvarða (1/4" = 1'-0" og þess háttar) og verkfræðikvarða (1" = 20' og þess háttar). {{ui:Passa allt líkanið}} setur nákvæman, óstaðlaðan kvarða sem passar allt.

3. Ef grunnmyndin er ekki lengur miðjuð, breyttu {{ui:X}} og {{ui:Y}} undir {{ui:Miðja sýnar (líkan)}} í hægra spjaldinu: þau eru punkturinn í líkaninu sem sýndur er í miðju sýnisgluggans.

## Sýna hluta líkansins í sýnisglugga

1. Með sýnisglugganum valinn, smelltu á {{ui:Veldu glugga á líkaninu…}} í hægra spjaldinu (eða sláðu inn `VPVIEW` og ýttu á {{key:Enter}}).
2. CadCraft skiptir yfir á {{ui:Líkan}}-flipann. Smelltu á eitt horn svæðisins sem á að sýna.
3. Smelltu á hitt hornið.

Þú ert kominn aftur á blaðið, og sýnisglugginn sýnir það svæði í stærsta staðlaða kvarða sem passar; ferillinn segir hver hann er. {{ui:Sýna allt líkanið}} fer aftur í alla grunnmyndina í staðlaðum kvarða.

## Bæta öðrum sýnisglugga við fyrir smáatriði

1. Búðu til rými á blaðinu: veldu fyrsta sýnisgluggann og dragðu horngrip til að gera hann minni.
2. Sláðu inn `MV` og ýttu á {{key:Enter}}, eða smelltu á {{ui:Sýnisgluggi}} í blaðahópnum.
3. Smelltu á eitt horn nýja sýnisgluggans á blaðinu.
4. Smelltu á hitt hornið.

Nýi sýnisglugginn sýnir alla líkanið. Ferillinn segir kvarðann hans.

5. Smelltu á ramma nýja sýnisgluggans.
6. Smelltu á {{ui:Veldu glugga á líkaninu…}} og veldu lítið svæði í kringum eitt horn grunnmyndarinnar.
7. Í {{ui:Mælikvarði}}, veldu `1:20`.

Rammar sýnisglugga eru á laginu `Viewports`, sem er stillt á að prentast ekki, svo rammarnir sjást á skjánum en ekki í PDF-skránni.

## Fylla út titilreitinn

Titilreiturinn er gerður úr venjulegum línum og texta á laginu `Title block`. Hann byrjar með heiti teikningarinnar, kvarða fyrsta sýnisgluggans, dagsetningu dagsins og blaðnúmerinu.

1. Tvísmelltu á stóra titiltextann. Breytireitur opnast yfir honum.
2. Sláðu inn titil blaðsins.
3. Smelltu á {{ui:Í lagi}}, eða ýttu á {{key:Mod+Enter}}.

Gerðu það sama fyrir hina reitina. Notaðu {{cmd:TEXT}} til að skrifa í tóma reitinn „TEIKNAÐ AF“. Textinn „MÆLIKVARÐI“ uppfærir sig ekki sjálfur þegar þú breytir kvarða sýnisglugga: breyttu honum handvirkt.

## Teikna á blaðinu

Allt sem þú teiknar á blaðflipa er á pappírnum, í pappírseiningum: texti 3.5 á hæð er 3.5 mm hár á ISO-blaði. Athugasemdir, norðurörvar og rammar blaðsins eiga heima hér.

Til að breyta grunnmyndinni sjálfri, farðu á {{ui:Líkan}}-flipann, eða vinndu í gegnum sýnisglugga (næsti kafli); sérhver sýnisgluggi sýnir breytinguna.

## Vinna á líkaninu í gegnum sýnisglugga

1. Tvísmelltu inni í sýnisglugga, fjarri rammanum. Eða sláðu inn `MS` og ýttu á {{key:Enter}}: með einn sýnisglugga á blaðinu fer það beint inn; með nokkra, smelltu inni í þeim sem þú vilt.

Rammanum er teiknaður þykkari, ferillinn segir að þú sért inni, og flipi blaðsins helst valinn. Allt sem þú teiknar eða breytir núna er á líkaninu, í einingum líkansins, eins og á {{ui:Líkan}}-flipanum: lína sem teiknuð er inni í sýnisglugga í 1:100 er í raunverulegum millimetrum. Lög sem eru fryst í þessum sýnisglugga er ekki hægt að velja hér.

2. Snúðu hjólinu eða dragðu með miðhnappinum til að aðdraga og færa það sem sýnisglugginn sýnir. Blaðið helst þar sem það er.
3. Tvísmelltu hvar sem er utan rammans, eða sláðu inn `PS` og ýttu á {{key:Enter}}.

Þú ert kominn aftur á blaðið. Sýnisglugginn heldur sýninni sem þú skildir eftir; {{key:Mod+Z}} skilar gömlu sýninni í einu skrefi. Smellur á hvaða flipa sem er undir teikningunni fer líka út úr sýnisglugganum.

:::note
Sýnisgluggi sem sýn hans er læst ({{ui:Skjá læst}} í {{ui:Eiginleikum}}) heldur sýninni sinni: inni í honum færir aðdráttur og hliðrun allt blaðið í staðinn. Sýnisgluggi sem er slökkt á er ekki hægt að fara inn í.
:::

## Merkja sýn með heiti hennar

Sýnititill undir sýnisglugga getur sýnt heiti sýnar sýnisgluggans og fylgt því eftir:

1. Gefðu sýninni heiti: veldu ramma sýnisgluggans og fylltu út {{ui:Heiti sýnar}} í {{ui:Eiginleikum}}, eða vistaðu sýnina á {{ui:Líkan}}-flipanum með {{cmd:NAMEDVIEW}} og, með sýnisglugganum valinn, sláðu inn `VPVIEW`, `V` og heiti sýnarinnar: sýnisgluggi sýnir þá sýn og tekur heitið hennar.
2. Sláðu inn `VIEWLABEL` (`VL`) og ýttu á {{key:Enter}}, og smelltu síðan þar sem merkið á að fara ({{key:Enter}} setur það undir neðra vinstra horni sýnisgluggans).

Þegar heiti sýnarinnar breytist breytist merkið með því, í sama skrefi í afturköllun.

## Frysta lag í einum sýnisglugga

Til að fela lag í einum sýnisglugga en ekki hinum (húsgögn í smáatriði, til dæmis):

1. Veldu ramma sýnisgluggans, eða vinndu inni í honum (tvísmelltu).

{{ui:Lög}}-spjaldið fær einn hnapp í viðbót á hverja línu, og lína fyrir ofan listann segir það.

2. Smelltu á þann hnapp á línu lagsins.

Lagið hverfur úr þeim sýnisglugga einum. Smelltu aftur til að þíða það; {{key:Mod+Z}} afturkallar hvort sem er. Fyrir nokkur lög eða sýnisglugga í einu, sláðu inn `VPLAYER`: `F` (Frysta) eða `T` (Þíða), heiti laganna (`A-*` tekur öll lög sem byrja á A-), síðan `C` (Núverandi), `A` (Allt) eða `S` (Velja). `VPLAYER` `V` (Vpvisdflt) velur lög sem nýir sýnisgluggar byrja með frosin.

## Fleiri blöð

Sérhver {{ui:+}} bætir við öðru blaði (`Layout2`, `Layout3` …) með næsta blaðnúmeri. Til að eyða opna blaðinu, ýttu á {{key:Esc}} og smelltu á {{ui:Eyða þessu blaði}} í hægra spjaldinu. Það spyr ekki; {{key:Mod+Z}} skilar því.

Prentaðu blaðið með {{ui:Prenta þetta blað}} eða {{key:Mod+P}}; sjá [Prenta í PDF](topic:plot-pdf).

## Algeng mistök

- **Sýnisglugginn sýnir ekkert.** Líkanið er tómt, eða sýnin beinist annað. Veldu rammann og smelltu á {{ui:Sýna allt líkanið}}.
- **Kvarðalistinn sýnir aðeins hlutföll en engan fet-og-tommu-kvarða.** Stilltu {{ui:Einingar}} á {{ui:Tommur}} eða {{ui:Fet}} á {{ui:Líkan}}-flipanum.
- **1:100 lítur út tíu sinnum of stórt eða lítið.** Einingar teikningarinnar eru rangar. Stilltu {{ui:Einingar}} á það sem ein eining er í raun.
- **Að smella á grunnmyndina inni í sýnisglugga velur ekkert.** Á blaði velur þú hluti blaðsins sjálfs. Tvísmelltu inni í sýnisglugganum fyrst til að vinna á grunnmyndinni í gegnum hann.
- **Smellir utan sýnisgluggans gera ekkert.** Þú ert inni í sýnisglugga: tvísmelltu utan hans, eða sláðu inn `PS`, til að vinna á blaðinu aftur.
- **„Sýnisgluggar fara á blað. Opnaðu blaðflipa (eða búðu til einn með LAYOUT) fyrst.“** {{cmd:MVIEW}} virkar aðeins á blaðflipa.
