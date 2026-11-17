---
title: Lasso-val
summary: Ýttu á og dragðu frjálsa línu utan um hluti til að velja þá sem glugga, skörun eða girðingu; skiptu með Space meðan þú dregur.
keywords: lasso, lassomode, dráttur, frjálst, velja, val, gluggi, skörun, girðing, space, marghyrningur, snerting, penni, rétthyrningur
from: 9ec6154d
---

## Hvað þú lærir

Hvernig velja má hluti með því að teikna utan um þá, og hvernig fá má rétthyrninginn aftur þegar þú vilt.

## Teikna lasso

1. Teiknaðu nokkrar línur og hringi þétt saman.
2. Án þess að nokkur skipun sé í gangi, ýttu á músarhnappinn á auðum stað og dragðu utan um sum þeirra, og færðu **hægri** fyrst.
3. Slepptu.

Aðeins hlutir sem eru alveg innan útlínunnar eru valdir. Útlínan er heilteiknuð meðan dregið er: þetta er gluggalasso.

## Gluggi, skörun og girðing

Hvaða hlutir þú færð fer eftir fyrstu hreyfingu dráttarins og eftir {{key:Space}}:

| Þú dregur | Lasso | Velur |
|---|---|---|
| Til hægri fyrst | Gluggi (heilteiknuð útlína) | Aðeins hluti **alveg innan** |
| Til vinstri fyrst | Skörun (strikuð, græn) | Hluti innan **og** hluti sem útlínan snertir |
| Ýttu á {{key:Space}} meðan dregið er | Gluggi, síðan skörun, síðan girðing | Girðing (strikuð leið, ekki lokuð): aðeins hluti sem leiðin sker |

1. Ýttu á auðan stað og dragðu utan um sum hluti, og færðu **vinstri** fyrst. Allt sem útlínan snertir er líka valið.
2. Ýttu á {{key:Esc}}.
3. Ýttu og dragðu aftur; meðan þú heldur hnappinum enn niðri, ýttu einu sinni á {{key:Space}}. Útlínan verður að skörun; ýttu aftur á {{key:Space}} fyrir girðingu.

{{key:Shift}} meðan þú sleppir tekur hlutina þess í stað úr valinu (með „Smella á hluti: Bætir við“ í Stillingum).

## Inni í skipun

Lasso virkar hvar sem CadCraft biður um `Select objects`: teiknaðu það og ýttu síðan á {{key:Enter}} til að ljúka. {{cmd:STRETCH}} tekur skörunarlasso sem glugga sinn, svo þú getur teygt L-laga hluta teikningarinnar í einu lagi.

{{cmd:TRIM}} og {{cmd:EXTEND}} nota drátt á annan hátt: þar stytta (eða lengja) þau sérhvert stykki sem leiðin sker. Sjá [Stytta og lengja](topic:trim-and-extend).

## Rétthyrningurinn

Smellur á auðu svæði, hreyfing og annar smellur teikna alltaf rétthyrningsgluggann (frá vinstri til hægri) eða skörun (frá hægri til vinstri).

Til að dráttur teikni rétthyrning aftur, opnaðu {{ui:Stillingar}} › {{ui:CadCraft}} › {{ui:Dráttur til að velja}} og veldu {{ui:Rétthyrningur}}, eða skrifaðu {{cmd:LASSOMODE}} og síðan `0`. Skrifaðu {{cmd:LASSOMODE}} og síðan `1` fyrir lasso. Valið er geymt í þessum vafra.

:::touch
Dragðu með fingri eða penna á sama hátt. Einn smellur velur enn einn hlut.
:::

## Algeng mistök

- **Ekkert var valið.** Lasso-ið var gluggi og ekkert lá alveg innan. Byrjaðu drátt til vinstri, eða ýttu á {{key:Space}} meðan dregið er.
- **Dráttur færði grip.** Að ýta á grip á völdum hlut færir gripið. Byrjaðu lasso á auðum stað.
- **Space lauk skipuninni.** {{key:Space}} skiptir lasso aðeins meðan hnappurinn er niðri; annars er það Enter.
