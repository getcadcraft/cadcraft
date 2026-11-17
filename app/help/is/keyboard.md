---
title: Lyklaborð og mús
summary: Hver takki, músaraðgerð og lykill í skipanalínu í CadCraft-teikniforritinu, eins og kóðinn meðhöndlar þá.
keywords: lyklaborð, flýtilyklar, lyklar, mús, hjól, hliðra, aðdráttur, hægrismellur, miðhnappur, f3, f7, f8, ctrl, skipanalykill, flýtileiðir, afrita, klippa, líma, tvöfalda, klippiborð, velja allt
from: a2608a29
---

Flýtileiðir eru sýndar fyrir tölvuna þína. Á Mac notar hver {{key:Mod}}-flýtileið hér að neðan Command-takkann, og Control-takkinn virkar líka. Hvernig lyklar eru skrifaðir, og hvernig nota á F-takkana á Mac, er í [Lyklar, mýs og snertiplötur](common:keys).

## Skipanir skrifaðar

| Takki | Hvað hann gerir |
|---|---|
| Hvaða stafur, tölustafur eða tákn sem er | Fer í skipanalínuna, hvar sem bendillinn er, nema reitur í spjaldi hafi bendilinn |
| {{key:Enter}} | Sendir það sem þú skrifaðir. Á tómri línu: endurtekur síðustu skipun, lýkur skipun, lýkur vali, eða tekur sjálfgefið gildi í `<…>` |
| {{key:Space}} | Sama og {{key:Enter}}, nema þegar CadCraft biður um texta (texti, heiti blokka, málsetningartexti), þar sem það skrifar bil |
| {{key:Esc}} | Hættir við skipunina. Þegar engin skipun er í gangi: hættir við færslu grips eða valgluggans, og hreinsar síðan valið |
| {{key:Tab}} | Samþykkir tillöguskipunina sem birtist hægra megin við skipanalínuna. Þegar ekkert er skrifað og bendillinn er yfir skarandi hlutum: auðkennir þann næsta þar (smelltu til að velja hann) |
| {{key:Up}} {{key:Down}} | Fer í gegnum línurnar sem þú skrifaðir áður (síðustu 100) |

## Teikning og breytingar

| Takki | Hvað hann gerir |
|---|---|
| {{key:Mod+Z}} | Afturkallar síðustu skipun |
| {{key:Mod+Y}} eða {{key:Mod+Shift+Z}} | Endurgerir |
| {{key:Mod+A}} | Velur alla hluti sem þú getur breytt á opna flipanum ({{cmd:SELECTALL}}). Ef þú hefur skrifað eitthvað í skipanalínuna velur það þann texta í staðinn |
| {{key:Delete}} | Eyðir völdum hlutum ({{cmd:ERASE}}), nema þú hafir skrifað eitthvað í skipanalínuna |
| {{key:Backspace}} | Eyðir völdum hlutum þegar skipanalínan hefur ekki bendilinn; í skipanalínunni eyðir það því sem þú skrifaðir |
| {{key:Esc}} | Þegar engin skipun er í gangi: hreinsar valið ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Vistar afrit á sniði teikningarinnar (DWG eða DXF) |
| {{key:Mod+Shift+S}} | Vista sem: veldu DWG eða DXF, og vistaðu síðan afrit |
| {{key:Mod+O}} | Opnar DWG eða DXF |
| {{key:Mod+P}} | Prentar í PDF |

Afturköllun, endurgerð, velja allt og prentun gera ekkert meðan skipun er í gangi: ýttu fyrst á {{key:Esc}}.

## Afrita, klippa og líma

| Takki | Hvað hann gerir |
|---|---|
| {{key:Mod+C}} | Afritar valið á klippiborðið ({{cmd:COPYCLIP}}). Ekkert valið: CadCraft biður um hluti |
| {{key:Mod+X}} | Klippa: afritar valið og eyðir því síðan ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Líma: afritið fylgir bendlinum; smelltu, eða skrifaðu punkt, til að setja það niður ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Líma á sama stað: á hnitunum sem það var afritað frá ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Tvöfalda: afrit af valinu fylgir bendlinum; smelltu til að setja það niður, {{key:Esc}} skilur ekkert eftir ({{cmd:DUPLICATE}}) |

Sömu aðgerðir eru í hópnum {{ui:Breyta}} á tækjastikunni ({{ui:Afrita}}, {{ui:Líma}}) og í valmyndinni {{ui:Meira}}. Meðan önnur skipun er í gangi skaltu ljúka henni eða ýta á {{key:Esc}} fyrst; ef ýtt er aftur á {{key:Mod+V}} eða {{key:Mod+D}} meðan afrit fylgir bendlinum, byrjar það upp á nýtt. Þegar þú hefur skrifað eitthvað í skipanalínuna, eða skipun biður um texta, afrita, klippa og líma þessir takkar þann texta í staðinn. Sjá [Afrita, líma og tvöfalda](topic:copy-paste).

## Rofar

| Takki | Rofi | Hnappur á stöðustiku |
|---|---|---|
| {{key:F3}} | Hlutasmellifesting kveikt eða slökkt | {{ui:Smellifesta}} |
| {{key:F7}} | Hnitanet kveikt eða slökkt | {{ui:Hnitanet}} |
| {{key:F8}} | Lóðrétt/lárétt kveikt eða slökkt | {{ui:Lóðrétt/lárétt}} |
| {{key:F10}} | Pólarrakning kveikt eða slökkt | {{ui:Pólar}} |
| {{key:F11}} | Rakning hlutasmellifestingar kveikt eða slökkt | {{ui:Rakning}} |
| {{key:F12}} | Kvikt inntak kveikt eða slökkt | {{ui:Kvik}} |

:::mac
Á Mac eru F3, F7 og F8 venjulega Mission Control og margmiðlunartakkar. Haltu **fn** inni með þeim, eða kveiktu á venjulegum F-tökkum í Kerfisstillingum, eins og lýst er í [Lyklar, mýs og snertiplötur](common:keys). Hnapparnir á stöðustikunni virka alltaf.
:::

:::firefox
F7 í Firefox getur líka beðið um að kveikja á caret browsing. Veldu **Nei**, og notaðu {{ui:Hnitanet}}-hnappinn ef það heldur áfram að spyrja.
:::

## Hjálp

| Takki | Hvað hann gerir |
|---|---|
| {{key:F1}} | Opnar eða lokar þessari hjálp, við hlið teikningarinnar. Hún virkar líka meðan skipun er í gangi, og nær aldrei skipanalínunni. |
| {{key:Esc}} | Með bendilinn í hjálparspjaldinu: hreinsar leitina, eða lokar spjaldinu |

Hnappurinn {{ui:Hjálp}} í stikunni efst gerir það sama og {{key:F1}}. Meðan þú skrifar í leitarreit hjálparinnar fer ekkert í skipanalínuna. Smelltu á teikninguna til að skila lyklunum til CadCraft; spjaldið helst opið við hlið hennar.

:::mac
Á Mac-lyklaborði skaltu halda **fn** inni og ýta á F1, eða smella á {{ui:Hjálp}}.
:::

## Skjár

| Takki | Hvað hann gerir |
|---|---|
| {{key:Ctrl+Shift+F}} | Skiptir milli venjulegs skjás, allsskjás og allsskjás með stikunum faldar. Þetta notar Control-takkann á öllum tölvum, líka Mac. |
| {{key:Left}} {{key:Right}} | Með flipa undir teikningunni valinn: fyrri eða næsti flipi |

Á allsskjá gæti vafrinn notað fyrsta {{key:Esc}} til að fara úr allsskjá. Ýttu aftur á {{key:Esc}} til að hætta við skipun.

## Gluggar

| Takki | Hvað hann gerir |
|---|---|
| {{key:Esc}} | Lokar glugganum ({{ui:Prenta í PDF}}, eða spurning eins og „Óvistaðar breytingar", þar sem það þýðir {{ui:Hætta við}}) |
| {{key:Tab}} | Fer á milli stillinga og hnappa gluggans |

Meðan gluggi er opinn eru lyklar teikningarinnar óvirkir.

## Reitir í spjaldi

Í reit í hægra eða vinstra spjaldi:

| Takki | Hvað hann gerir |
|---|---|
| {{key:Enter}} | Notar gildið og fer úr reitnum |
| {{key:Esc}} | Setur gamla gildið aftur og fer úr reitnum |
| {{key:Tab}} | Notar gildið og fer í næsta reit |

Meðan reitur hefur bendilinn skrifast stafir í hann, ekki í skipanalínuna.

## Mús

| Aðgerð | Hvað hún gerir |
|---|---|
| Smellur | Velur punkt þegar skipun biður um einn; velur hlut þegar hún biður um hluti; annars velur hún hlut, eða grip |
| Shift+smellur | Tekur valinn hlut úr valinu (með {{ui:Smellt á hluti}} stillt á {{ui:Kemur í stað valsins}} í [Stillingum](topic:settings): bætir honum við). Meðan verið er að velja punkt: hunsar hlutasmellifestingar fyrir þann smell |
| Smellur á tóman flöt, og síðan aftur | Valgluggi: frá vinstri til hægri er gluggi, frá hægri til vinstri er krossun |
| Dragðu á tóman flöt | Lasso: fyrst til hægri er gluggi, fyrst til vinstri er krossun; {{key:Space}} meðan dregið er skiptir á milli glugga, krossunar og girðingar; {{key:Esc}} sleppir því (LASSOMODE 0, eða Stillingar, gerir það aftur að rétthyrningi) |
| Dragðu í gegnum búta í TRIM eða EXTEND | Klippir (eða lengir) hvern bút sem slóðin fer yfir; haltu {{key:Shift}} inni fyrir hitt |
| Dragðu grip | Færir gripinn (eða smelltu á gripinn, og síðan þar sem hann á að fara) |
| Tvísmelltu á texta | Velur hann og setur bendilinn í {{ui:Texti}}-reitinn í hægra spjaldinu |
| Hægrismellur | Enter. Meðan grip er færður eða valgluggi er í gangi: hættir við það |
| Dragðu með hægri hnappi | Hliðrar |
| Hjól | Aðdráttur inn og út um krosshárið |
| Dragðu með hjólinu (miðhnappur) | Hliðrar |
| Tvísmelltu á hjólið | Aðdráttur á alla teikninguna (mörk) |
| Slepptu DWG eða DXF á teikninguna | Opnar hana |

Á snertiplötu eða snertiskjá, sjá [Mús, snertiplata og snerting](topic:mouse-trackpad-touch).

## Lyklar sem vafrinn heldur

{{key:Mod+N}}, {{key:Mod+W}} og {{key:Mod+T}} tilheyra alltaf vafranum. CadCraft notar þá ekki: notaðu {{ui:Ný}} eða skrifaðu `NEW` fyrir nýja teikningu. Klippiborð CadCraft er sitt eigið: {{key:Mod+C}} og {{key:Mod+V}} afrita hluti milli CadCraft-teikninga og flipa, ekki til eða frá öðrum forritum.

:::mac
Ef {{key:Mod+Y}} opnar sögu vafrans í stað þess að endurgera, notaðu {{key:Mod+Shift+Z}} eða hnappinn {{ui:Endurgera}}.
:::

## Hvar Hreyfa er

Hreyfa er skipunin `MOVE` (takki {{key:M}}): veldu hlutina, síðan grunnpunkt og annan punkt eða slegna fjarlægð. `ALIGN` og `DISTRIBUTE` eru þar líka. BimCraft notar sömu heiti fyrir sömu verk á byggingarhlutum, en {{key:M}} þess er Mæla: Hreyfa þess er {{key:Shift+M}}.
