---
title: Velja hluti
summary: Veldu hluti einn í einu, með glugga eða krossun, fyrir eða meðan skipun er í gangi, og taktu hluti aftur úr valinu.
keywords: velja, val, gluggi, krossun, nafnorð-sagnorð, allt, síðast, fyrri, girðing, fjarlægja, bæta við, tab, hringferð, skarast, qselect, hraðval, sía, velja svipaða, selectsimilar, shift, afvelja, ctrl+a, pickfirst
from: 676508c7
---

## Það sem þú lærir

Hvernig þú velur hlutina sem skipun vinnur með. CadCraft hefur tvær leiðir og báðar eru í lagi:

- **Fyrst val, síðan skipun** (nafnorð-sagnorð). Veldu hluti, skrifaðu síðan `M` fyrir Færa. Skipunin tekur valið þitt og fer beint í næstu spurningu.
- **Fyrst skipun, síðan val** (sagnorð-nafnorð). Skrifaðu `M`; skipunin spyr `Veldu hluti:`; veldu og ýttu á {{key:Enter}}.

## Veldu einn hlut í einu

1. Án þess að skipun sé í gangi, smelltu á línu. Hún er auðkennd og griparnir (litlir ferningar) birtast. Hægra spjaldið sýnir eiginleika hennar.
2. Smelltu á annan hlut. Hann bætist við valið.
3. Haltu {{key:Shift}} niðri og smelltu á valinn hlut. Hann er tekinn út úr valinu.
4. Ýttu á {{key:Esc}}. Ekkert er valið.

## Gluggi og krossun

Smelltu einu sinni á autt svæði, færðu, og smelltu aftur: rétthyrningur. Ef þú ýtir og dregur teiknast frjálst lassó í staðinn, með sömu tvenns konar (sjá [Lassóval](topic:lasso-selection); stillingar geta látið dráttinn teikna rétthyrninginn). Hvaða hluti þú færð fer eftir stefnunni:

| Þú færir | Kassi | Velur |
|---|---|---|
| Frá vinstri til hægri | Gluggi | Aðeins hluti **alveg inni í** kassanum |
| Frá hægri til vinstri | Krossun | Hluti inni í kassanum **og** hluti sem hann snertir |

1. Teiknaðu nokkrar skarandi línur og hringi.
2. Smelltu á autt svæði vinstra megin við suma hluti, færðu til hægri og smelltu aftur. Aðeins hlutir alveg inni í eru valdir.
3. Ýttu á {{key:Esc}}.
4. Smelltu á autt svæði hægra megin, færðu til vinstri yfir suma hluti og smelltu aftur. Allt sem kassinn snertir er valið.
5. Haltu {{key:Shift}} niðri og teiknaðu kassa eða lassó yfir suma valda hluti. Þeir fara úr valinu.

## Veldu, síðan keyrðu skipun

1. Veldu tvo hringi.
2. Skrifaðu `M` og ýttu á {{key:Enter}}.

Sagan segir `2 valdir` og spurningin fer beint í `Veldu grunnpunkt`. Ljúktu færslunni (sjá [Færa, afrita, snúa, skala og spegla](topic:modify-objects)).

Þegar skipun lýkur er valið hreinsað, svo næsta skipun byrjar auð.

Skipanir sem taka val á þennan hátt: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} og {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} og {{cmd:CHAMFER}} biðja alltaf um að þú veljir hluti einn í einu; {{cmd:TRIM}} og {{cmd:EXTEND}} taka eitt val eða slóð sem þú dregur í gegnum bútana (sjá [Klippa og lengja](topic:trim-and-extend)).

## Keyrðu skipun, síðan veldu

1. Gakktu úr skugga um að ekkert sé valið ({{key:Esc}}).
2. Skrifaðu `E` og ýttu á {{key:Enter}}. Spurningin segir `Veldu hluti:`.
3. Smelltu á hluti, eða dragðu glugga og krossanir. Sagan telur hvert val (`1 valinn`, `3 valdir`).
4. Ýttu á {{key:Enter}}, ýttu á {{key:Space}} eða hægrismelltu til að ljúka vali.

Hlutirnir eru eyddir og sagan segir hversu margir.

Í spurningunni `Veldu hluti:` geturðu líka skrifað:

- `ALL`, síðan {{key:Enter}}: alla hluti sem þú getur breytt í opna flipanum.
- Síðast (L), eða `LAST`, síðan {{key:Enter}}: hlutinn sem var teiknaður síðast.
- Fyrri (P): hlutina sem síðasta skipun vann með, ef þeir eru enn til staðar.
- Girðing (F): smelltu eða skrifaðu punkta eftir línu; sérhver hlutur sem línan sker bætist við. Ýttu á {{key:Enter}} til að ljúka girðingunni; `U` tekur síðasta punktinn til baka.
- Gluggi (W) eða Krossun (C): tvö horn, í hvora áttina sem þú dregur.
- Fjarlægja (R): frá þessu augnabliki taka smellir, gluggar og girðingar hluti **út**. Spurningin segir `Fjarlægðu hluti:`. Bæta við (A) skiptir aftur.
- `?`: listinn yfir þessa í sögunni.

Þessir valkostir birtast ekki í spurningunni, eins og í AutoCAD.

## Veldu einn af nokkrum hlutum hvor ofan á öðrum

Þar sem hlutir skarast eða snertast tekur smellur þann sem er næst. Til að fá annan:

1. Haltu bendlinum kyrrum yfir reitnum.
2. Ýttu á {{key:Tab}}. Næsti hlutur þar er auðkenndur og stöðustikan segir hvað hann er („2 af 3: Lína á laginu Walls“).
3. Ýttu á {{key:Tab}} aftur þar til sá sem þú vilt er auðkenndur, og smelltu síðan án þess að hreyfa.

Hreyfing bendilsins byrjar upp á nýtt. Þetta virkar án skipunar í gangi, í `Veldu hluti:` og hvenær sem skipun biður þig um að velja einn hlut.

## Velja eftir reglu: Hraðval

{{cmd:QSELECT}} (`QS`, eða {{ui:Breyta}} › {{ui:Meira}} › {{ui:Hraðval}}) velur alla hluti sem passa við reglu, til dæmis alla hringi með radíus undir 50, eða allar blokkavísanir sem heita DOOR-900.

1. Opnaðu {{ui:Hraðval}}.
2. Veldu {{ui:Gerð hlutar}} (listinn telur hverja gerð), síðan {{ui:Eiginleiki}}: {{ui:Lag}}, {{ui:Litur}}, og fyrir sumar gerðir {{ui:Lengd}}, {{ui:Radíus}}, {{ui:Flatarmál}}, {{ui:Textahæð}}, {{ui:Textainnihald}}, {{ui:Heiti blokkar}} eða {{ui:Skyggingarmynstur}}.
3. Veldu {{ui:Aðgerð}} og {{ui:Gildi}}. `*` passar með villutáknum (`DOOR-*`); {{ui:Velja allt}} tekur alla hluti af gerðinni. Talan neðst sýnir hversu margir passa meðan þú velur.
4. {{ui:Hvernig á að nota}}: hafa með þá sem passa, eða allt hitt. {{ui:Nota á}} {{ui:Núverandi val}} þrengir það sem þú hafðir valið; {{ui:Bæta við núverandi val}} bætir við það.
5. Smelltu á {{ui:Velja}}. Keyrðu síðan skipunina sem þú vilt: hún notar valið.

## Veldu svipaða

Veldu einn eða fleiri hluti og skrifaðu {{cmd:SELECTSIMILAR}} (`SIM`), eða veldu {{ui:Breyta}} › {{ui:Meira}} › {{ui:Velja svipaða}}. Sérhver hlutur af sömu gerð á sama lagi og í sama lit er valinn; blokkavísanir þurfa líka sömu blokk, og skyggingar sama mynstur. Skrifaðu `SE` við spurningu hennar `Veldu hluti` til að velja hvað þarf að passa.

## Veldu núna, notaðu síðar

Skrifaðu `SELECT` og ýttu á {{key:Enter}}, veldu hluti með einhverri af leiðunum hér að ofan og ýttu á {{key:Enter}}. Þeir haldast valdir fyrir næstu skipun, og `P` velur þá aftur við síðari spurningu `Veldu hluti:`.

## Veldu allt

Án skipunar í gangi, ýttu á {{key:Mod+A}}, eða veldu {{ui:Velja allt}} í valmyndinni {{ui:Breyta}} › {{ui:Meira}} á tækjastikunni, til að velja alla hluti sem þú getur breytt í opna flipanum. Ef þú hefur skrifað eitthvað á skipanalínuna velur {{key:Mod+A}} þann texta í staðinn: ýttu á {{key:Esc}} til að hreinsa hann fyrst. Við spurninguna `Veldu hluti:` skrifarðu `ALL`. {{ui:Velja ekkert}} í sömu valmynd, eða {{key:Esc}}, hreinsar valið.

:::tip
Ef þú vilt að hver smellur skipti út valinu (og {{key:Shift}} bæti við) skaltu stilla {{ui:Smellt á hluti}} á {{ui:Kemur í stað valsins}} í [stillingum CadCraft](topic:settings).
:::

## Það sem ekki er hægt að velja

- Hluti á lagi sem er **slökkt**, **frosið** eða **læst**. Læstir hlutir sjást áfram og þú getur smellt á þá, en þú getur ekki valið þá né breytt þeim.
- Á blaðsflipa líkanið sem sést inni í sýnisglugga. Þú velur eigin hluti blaðsins (titilreitinn, athugasemdir, ramma sýnigluggana). Til að breyta líkaninu skaltu fara á flipann {{ui:Líkan}}.

## Eyddu fljótt

Veldu hluti, ýttu síðan á {{key:Delete}} (eða {{key:Backspace}} þegar skipanalínan er ekki með bendilinn). Á Mac-lyklaborði virkar takkinn merktur delete þegar þú hefur smellt í teikninguna; á meðan skipanalínan er með bendilinn ýtirðu á fn og delete saman. Þetta keyrir {{cmd:ERASE}} á valinu. Ef ekkert gerist hefurðu skrifað eitthvað á skipanalínuna: ýttu á {{key:Esc}}, eða skrifaðu `E` og ýttu á {{key:Enter}} í staðinn.

## Algeng mistök

- **Glugginn tók of lítið.** Þú dróst frá vinstri til hægri, sem tekur aðeins það sem er alveg inni. Dragðu frá hægri til vinstri fyrir krossun.
- **Smellur á autt svæði byrjaði kassa.** Einn smellur á autt svæði byrjar glugga; annar smellur klárar hann. Ýttu á {{key:Esc}} eða hægrismelltu til að hætta við.
- **Smellur á autt svæði sleppti valinu.** Það gerist nema þú haldir {{key:Shift}} niðri. Til að halda valinu við slíkan smell og hreinsa það aðeins með {{key:Esc}}, stilltu {{ui:Smellt á autt svæði}} á {{ui:Heldur valinu}} í [stillingum CadCraft](topic:settings#clicking-an-empty-spot).
- **Skipunin notaði hluti sem þú ætlaðir ekki.** Eitthvað var enn valið þegar þú byrjaðir hana. Ýttu á {{key:Esc}} áður en skipun er keyrð til að byrja með ekkert valið.
- **Ekkert er valið eftir skipun.** Það er viljandi: lokið skipun hreinsar valið.
