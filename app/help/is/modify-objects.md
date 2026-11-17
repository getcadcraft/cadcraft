---
title: Færa, afrita, snúa, skala, spegla, teygja og fylkja
summary: Raðaðu húsgögnum í herbergi með grunnskipunum til að breyta, með grunnpunktum, slegnum fjarlægðum og afturköllun.
keywords: færa, afrita, snúa, skala, spegla, teygja, fylki, tengja, matchprop, samræma eiginleika, málari, arrayrect, arraypolar, skautað fylki, eyða, sundra, afturkalla, endurgera, grunnpunktur, tilfærsla, breyta, jafna, dreifa, raða í röð, dreifa jafnt
from: 8eaeee6c
---

## Það sem þú býrð til

Borð með einum stól, afrituðum í kringum borðið, snúnum, spegluðum og breyttum að stærð. Á leiðinni notar þú {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} og {{cmd:UNDO}}.

## Teiknaðu hlutina

1. Skrifaðu `REC` og ýttu á {{key:Enter}}, skrifaðu `0,0` og ýttu á {{key:Enter}}, skrifaðu síðan `@1800,900` og ýttu á {{key:Enter}}. Þetta er borðið.
2. Skrifaðu `REC` og ýttu á {{key:Enter}}, skrifaðu `300,-700` og ýttu á {{key:Enter}}, skrifaðu síðan `@450,450` og ýttu á {{key:Enter}}. Þetta er stóll, undir borðinu.
3. Smelltu á {{ui:Mörk}}.

## Færa: grunnpunktur, síðan annar punktur

Sérhver færsla, afritun, snúningur og skölun byrjar á **grunnpunkti**: punktinum sem er borinn með, eða snúist er um.

1. Smelltu á stólinn til að velja hann.
2. Skrifaðu `M` og ýttu á {{key:Enter}}. Ferillinn sýnir `1 fundið`.
3. Við `Tilgreindu grunnpunkt` smelltu á efra vinstra horn stólsins (Endapunktur) og smelltu.
4. Við `Tilgreindu annan punkt` skrifaðu `@0,200` og ýttu á {{key:Enter}}.

Stóllinn færist upp um 200, nær borðinu.

:::tip
Skrifaðu `D` við `Tilgreindu grunnpunkt` til að gefa tilfærslu í staðinn: CadCraft spyr þá `Tilgreindu tilfærslu`, og þú skrifar hversu langt til hliðar og upp, eins og `0,200` (ekkert `@` þarf).
:::

## Afrita, eins oft og þú vilt

1. Smelltu á stólinn.
2. Skrifaðu `CO` og ýttu á {{key:Enter}}.
3. Smelltu á neðra vinstra horn stólsins og smelltu sem grunnpunkt.
4. Skrifaðu `@600,0` og ýttu á {{key:Enter}}. Afrit birtist 600 til hægri.
5. Skrifaðu `@600,0` aftur og ýttu á {{key:Enter}}. Annað afrit birtist 1200 til hægri við upprunalega.
6. Ýttu á {{key:Enter}} til að ljúka skipuninni.

{{cmd:COPY}} heldur áfram þar til þú ýtir á {{key:Enter}}. Hvert afrit er sett eftir fjarlægðinni frá grunnpunktinum að punktinum sem þú gefur. `@`-punktur telur frá síðasta punkti sem þú sleist inn, sem eftir fyrsta afritið er punktur þess afrits, þannig að `@600,0` tvisvar gefur afrit við 600 og 1200. Skrifaðu `U` og ýttu á {{key:Enter}} til að taka síðasta afritið til baka án þess að hætta í skipuninni.

Þú ættir að sjá þrjá stóla í röð undir borðinu.

:::tip
{{cmd:COPY}} er fyrir afrit innan einnar teikningar, sett eftir grunnpunkti. Til að flytja hluti í aðra teikningu eða flipa, eða líma þá seinna, notaðu klippiborðið: {{key:Mod+C}}, síðan {{key:Mod+V}}. {{key:Mod+D}} býr til eitt afrit sem fylgir bendlinum. Sjá [Afrita, líma og tvöfalda](topic:copy-paste).
:::

## Spegla röðina yfir á hina hliðina

1. Dragðu krossglugga (frá hægri til vinstri) yfir stólana þrjá, án þess að snerta borðið.
2. Skrifaðu `MI` og ýttu á {{key:Enter}}.
3. Við `Tilgreindu fyrsta punkt spegillínu` smelltu á miðpunkt vinstri hliðar borðsins og smelltu.
4. Við `Tilgreindu annan punkt spegillínu` smelltu á miðpunkt hægri hliðar borðsins og smelltu.
5. Við `Eyða upprunalegum hlutum? [Já (Y)/Nei (N)] <N>` ýttu á {{key:Enter}} til að halda þeim.

Þú ættir að sjá þrjá stóla undir borðinu og þrjá speglaða stóla fyrir ofan það. Texti í speglaðu vali er áfram læsilegur: hann er settur speglaður en ekki skrifaður aftur á bak.

## Snúa stól

1. Smelltu á hægri stólinn undir borðinu.
2. Skrifaðu `RO` og ýttu á {{key:Enter}}.
3. Smelltu á neðra hægra horn stólsins og smelltu sem grunnpunkt.
4. Skrifaðu `90` og ýttu á {{key:Enter}}.

Stóllinn snýst 90 gráður rangsælis um grunnpunktinn. Neikvætt horn snýst réttsælis. Í stað þess að skrifa má smella á annan punkt: hornið er mælt frá grunnpunktinum að þeim punkti.

## Skala borðið

1. Veldu borðið.
2. Skrifaðu `SC` og ýttu á {{key:Enter}}.
3. Smelltu á neðra vinstra horn borðsins og smelltu sem grunnpunkt.
4. Skrifaðu `1.2` og ýttu á {{key:Enter}}.

Borðið er 20% stærra og vex frá grunnpunktinum. Stuðull undir 1 gerir það minna.

:::note
Ef þú smellir á punkt í stað þess að skrifa skölunarstuðulinn, er stuðullinn fjarlægðin frá grunnpunktinum að þeim punkti. Ef smellt er einni teikningareiningu í burtu fæst stuðull 1. Að skrifa töluna er yfirleitt það sem þú vilt.
:::

## Afturkalla og endurgera

- {{key:Mod+Z}}, hnappurinn {{ui:Afturkalla}}, eða `U` og {{key:Enter}} afturkallar síðustu skipun. Heil skipun er eitt skref: að afturkalla {{cmd:COPY}} sem bjó til fimm afrit fjarlægir öll fimm.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, hnappurinn {{ui:Endurgera}}, eða `REDO` færir hana aftur.
- Ferillinn segir hvað var afturkallað („Afturkallaði COPY“).

CadCraft geymir síðustu 500 skrefin. Stillingar laga (kveikt, fryst, læst, litur) eru stillingar, ekki breytingar, og eru ekki afturkallaðar.

## Teygja herbergi breiðara

{{cmd:STRETCH}} (`S`, eða {{ui:Teygja}}) færir aðeins það sem liggur innan krossglugga: horn og endar lína innan hans færast, allt annað stendur kyrrt, þannig að herbergið verður breiðara í stað þess að færast.

1. Skrifaðu `S` og ýttu á {{key:Enter}}.
2. Dragðu glugga frá hægri til vinstri yfir hægri vegginn, þannig að hann nái yfir horn veggsins og enda alls sem snertir hann.
3. Ýttu á {{key:Enter}}.
4. Smelltu á grunnpunkt, skrifaðu síðan `@600,0` og ýttu á {{key:Enter}}.

Rétthyrningurinn er 600 breiðari; línur sem enduðu á veggnum enda enn á honum. Bogi með öðrum enda innan gluggans heldur hæð sinni, hringir og texti færast þegar miðja þeirra eða innsetningarpunktur er innan, og málsetning mælir nýja lengd sína. Hlutir valdir einn og einn, án glugga, færast einfaldlega.

Þú getur líka valið fyrst: dragðu krossgluggann (eða krossreipi) yfir vegginn án þess að nein skipun sé í gangi, skrifaðu síðan `S`. STRETCH tekur þá valið og teygir það sem gluggar þess ná yfir, rétt eins og þú hefðir dregið þá við eigin spurningu.

## Fylki: raðir og dálkar, eða í kringum miðju

{{cmd:ARRAY}} (`AR`, eða {{ui:Fylki}}) afritar valið í reit eða í hring.

1. Veldu stól, skrifaðu `AR` og ýttu á {{key:Enter}}. Ýttu á {{key:Enter}} fyrir Rétthyrnt (R).
2. Forskoðun með 4 dálkum og 3 röðum birtist. Skrifaðu `COU`, ýttu á {{key:Enter}}, skrifaðu síðan `5` fyrir dálka og `2` fyrir raðir.
3. Skrifaðu `S` (Bil), ýttu á {{key:Enter}}, skrifaðu síðan `600` á milli dálka og `-900` á milli raða (neikvætt fer niður).
4. Ýttu á {{key:Enter}} til að búa til afritin.

Fyrir hring af stólum í kringum borð, veldu `PO` (Pólar) í staðinn, smelltu á miðju borðsins, og stilltu `I` (Hlutir), `F` (Fyllingarhorn: 360 fyrir allan hringinn, 180 fyrir hálfan) og `ROT` (hvort afritin snúa að miðjunni). {{cmd:ARRAYRECT}} og {{cmd:ARRAYPOLAR}} sleppa spurningunni.

## Tengja hluta í eina fjöllínu

{{cmd:JOIN}} (`J`, eða {{ui:Breyta}} › {{ui:Meira}} › {{ui:Tengja}}): veldu línur, boga og opnar fjöllínur sem endar mætast, og ýttu á {{key:Enter}}. Þær verða að einni fjöllínu, lokaðri þegar hún fer allan hringinn, sem þú getur síðan notað með {{cmd:OFFSET}} í einu lagi. Línur sem liggja á einni línu verða ein lína, jafnvel með bilum á milli; bogar af einum hring verða einn bogi, eða hringurinn.

## Samræma eiginleika

{{cmd:MATCHPROP}} (`MA`, eða {{ui:Breyta}} › {{ui:Meira}} › {{ui:Samræma eiginleika}}): smelltu á hlutinn sem þú vilt að líti út eins, veldu síðan hlutina sem á að breyta og ýttu á {{key:Enter}}. Þeir taka lag hans og lit; texti tekur hæð hans, málsetning stærðir sínar, skygging mynstur sitt. Skrifaðu `S` (Stillingar) við seinni spurninguna til að slökkva á hverju þeirra.

## Jafna hluti

**Eftir punktum.** {{cmd:ALIGN}} (`AL`, eða {{ui:Breyta}} › {{ui:Meira}} › {{ui:Jafna}}): veldu hlutina og ýttu á {{key:Enter}}, smelltu síðan á punkt á þeim (uppruna) og þar sem hann á að fara (áfangastað).

- Eitt par færir þá. Ýttu á {{key:Enter}} við `Tilgreindu annan uppsprettupunkt` til að stoppa þar.
- Tvö pör snúa þeim líka, þannig að línan milli uppsprettupunktanna liggur með línunni milli áfangastaðanna. CadCraft spyr þá `Skala hluti út frá jöfnunarpunktum? [Já (Y)/Nei (N)]`: `Y` gerir þá líka stærri eða minni að því marki.
- Þriðja parið speglar þá þegar punktar þess eru sitt hvorum megin við þá línu.

**Brúnir og bil.** {{ui:Breyta}} › {{ui:Meira}} › {{ui:Jöfnun og dreifing}} (eða `ALIGNPANEL`) opnar lítinn glugga yfir teikningunni. Veldu hluti, og síðan:

- veldu hvað á að jafna við í {{ui:Jafna að}} (allt valið, fyrsta eða síðasta hlutinn sem þú valdir, eða punkt sem þú smellir á) og smelltu á {{ui:Vinstri}}, {{ui:Miðja}}, {{ui:Hægri}}, {{ui:Ofan}}, {{ui:Miðja}} eða {{ui:Undirhlið}};
- eða veldu {{ui:Jöfn bil}} eða {{ui:Jafnar miðjur}} og smelltu á {{ui:Til hliðar}} eða {{ui:Upp og niður}}: ytri tveir hlutirnir standa, hinir eru dreifðir jafnt á milli þeirra (að minnsta kosti þrír hlutir).

Hver smellur er eitt afturköllunarskref, og valið helst, þannig að þú getur prófað annað. Hver hlutur telur eftir umlykjandi kassa sínum, í UCS ef það er stillt. Á skipanalínunni eru sömu aðgerðir {{cmd:ALIGNTO}} og {{cmd:DISTRIBUTE}}.

## Eyða og sundra

- {{cmd:ERASE}} (`E`, eða {{key:Delete}}) fjarlægir valda hluti.
- {{cmd:EXPLODE}} (`X`) sundrar fjöllínu í línur og boga, blokkartilvísun í hluti hennar, og málsetningu í línur, örvaodda og texta. Sundraðar málsetningar mæla ekki lengur sjálfar sig.

## Algengar villur

- **Að skrifa fjarlægð án `@` við annan punkt.** `600,0` er algildur punktur 600,0, ekki „600 til hægri“. Notaðu `@600,0`, eða bara `600` með krosshárinu bent í rétta átt.
- **Snúningurinn fór í ranga átt.** Jákvæð horn snúast rangsælis.
- **Afturköllun fjarlægði meira en búist var við.** Ein afturköllun tekur til baka alla síðustu skipun, þar á meðal öll afrit sem hún bjó til.
- **Skipunin spurði ekki um val hluta.** Hlutir voru þegar valdir, og hún notaði þá. Ýttu fyrst á {{key:Esc}} til að byrja með ekkert valið.
