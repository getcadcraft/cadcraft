---
title: Skjöl: útskráning, endurskoðanir og útgáfa
summary: Hafðu teikningar verkefnamöppunnar undir stjórn: skráðu skrá út svo enginn annar breyti henni, skráðu hana inn sem nýja endurskoðun, sendu hana í yfirferð og gefðu út með nafni samþykkjanda; saga, hvað notar hvað, efnislisti og titilreitir sem sýna endurskoðunina.
keywords: stillingar verkefnis, samþykkjendur, stjórnendur, endurskoðunarstafir, ASME, skrivarið, bera saman endurskoðanir, opna afrit, partcraft, bimcraft, skjöl, DOCUMENTS, DOCS, safn, skjalastjórnun, pdm, skrá út, skrá inn, checkout, checkin, læsing, endurskoðun, rev, endurskoðunarstafur, útgáfa, gefið út, samþykkja, yfirferð, úrelt, hvar notað, bom, efnislisti, titilreitur, endurskoðunarreitur, verkefnamappa
from: ee938722
---

## Það sem þú býrð til

Verkefnamöppu þar sem sérhver teikning hefur endurskoðun (A.1, A.2 … svo A, B …) og stöðu (Í vinnslu, Til yfirferðar, Gefið út, Úrelt), þar sem aðeins einn einstaklingur í einu getur breytt skrá, og þar sem sérhver útskráning, innskráning, samþykki og rofin útskráning er skráð með því hver gerði það og hvenær.

Allt er geymt í möppunni sjálfri, í faldri möppu sem heitir `.ccvault` við hliðina á teikningunum. Mappa á sameiginlegu drifi eða samstilltri möppu nýtist heilu teymi. Enginn netþjónn er og ekkert er sent upp.

## Opna Skjöl

Skrifaðu `DOCUMENTS` (eða `DOCS`) og ýttu á {{key:Enter}}. Spjaldið opnast við hlið teikningarinnar.

Veldu {{ui:Veldu verkefnamöppuna}} og veldu möppuna sem geymir teikningar verkefnisins. Verkefnamöppur virka í CadCraft Studio og í vöfrum sem geta opnað möppu (Chrome, Edge). Í öðrum vöfrum segir spjaldið það.

Í fyrsta skipti skrifarðu nafnið þitt (það fylgir öllu sem þú gerir) og heiti þessarar tölvu. Ef þú ert skráð/ur inn er nafnið þegar komið.

## Stofna safn

Mappa sem er ekki safn enn býður upp á {{ui:Stofna safn í þessari möppu}}. Skrifaðu heiti verkefnisins. Opnaðu síðan {{ui:Skrár ekki í safninu}} og veldu {{ui:Bæta við}} við hverja skrá sem á að taka undir stjórn. Skrá sem þú bætir við byrjar sem endurskoðun **A.1**, Í vinnslu.

## Breyta teikningu

1. Veldu {{ui:Opna}} við teikningu. Hún opnast í CadCraft. Ef hún er ekki útskráð á þig, skoðaðu hana en breyttu henni ekki: {{ui:Vista}} neitar að skrifa yfir hana og segir ástæðuna (notaðu {{ui:Vista sem}} til að geyma þitt eigið afrit).
2. Veldu {{ui:Skrá út}}. Enginn annar getur skráð hana út núna; spjaldið sýnir hver hefur hana, á hvaða tölvu og síðan hvenær.
3. Teiknaðu.
4. Veldu {{ui:Skrá inn}} og segðu hvað breyttist. Teikningin sem þú hefur opna er vistuð í verkefnamöppuna á sínu eigin sniði og verður næsta endurskoðun (A.1, síðan A.2). Innskráning án breytinga heldur endurskoðuninni.

{{ui:Afturkalla útskráningu}} skilar skránni án nýrrar endurskoðunar.

## Yfirferð og útgáfa

- {{ui:Senda í yfirferð}}: skráin er skrivarin meðan hún er yfirfarin.
- {{ui:Samþykkja}}: skrifaðu nafn samþykkjanda. A.3 verður **A**, Gefið út. Skrár sem eru gefnar út eru skrivarðar.
- {{ui:Senda til baka}}: aftur í Í vinnslu, með ástæðunni.
- {{ui:Ný endurskoðun}} á skrá sem er gefin út skráir hana út fyrir næsta staf: fyrsta innskráning hennar er **B.1**. {{ui:Afturkalla útskráningu}} áður en það gerist skilur hana eftir í A.
- {{ui:Gera úrelt}} lætur skrá sem er gefin út víkja.

Verkefni getur haldið lista yfir hverjir mega samþykkja og krafist þess að samþykkjandi sé ekki sá sem skráði skrána inn (sjá Stillingar verkefnis hér að neðan).

## Stillingar verkefnis

Opnaðu {{ui:Stillingar verkefnis}} í spjaldinu:

- **Samþykkjendur**: eitt nafn í línu. Ef þau eru einhver geta aðeins þau samþykkt útgáfu.
- **Samþykkjandi verður að vera annar en höfundurinn**: reglan „fjögur augu“.
- **Stjórnendur**: eitt nafn í línu. Ef þeir eru einhverjir geta aðeins þeir rofið útskráningu annars eða breytt þessum stillingum.
- **Endurskoðunarstafir sem sleppt er**: {{ui:Nota ASME Y14.35 röðina}} sleppir I, O, Q, S, X og Z, eða skrifaðu þína eigin stafi. Stafir sem þegar hafa verið gefnir haldast; valið gildir um næstu endurskoðanir.
- **Útskráning telst gömul eftir**: fjöldi daga (14 sjálfgefið).

Veldu {{ui:Vista stillingar}}. Breytingin er skráð í dagbókina með því hver gerði hana.

## Einhver skildi skrá eftir útskráða

{{ui:Rjúfa útskráningu}} losar skrá sem einhver annar hefur skráð út (hann er fjarri, eða tölvan hans bilaði). Þú verður að skrifa ástæðu: hún er skráð í dagbókina ásamt því hvers útskráning það var. Þegar verkefnið hefur stjórnendur geta aðeins þeir gert þetta. Útskráning eldri en 14 daga er merkt sem langur tími.

## Saga, endurskoðanir, notkun, notað af

Veldu nafn skráar til að sjá:

- {{ui:Saga}}: sérhvern atburð, nýjasta fyrst, með því hver, hvaða tölvu og hvenær.
- {{ui:Endurskoðanir}}: hverja endurskoðun sem er geymd. Afrit af hverri endurskoðun er í safninu (sama efni er geymt einu sinni). {{ui:Opna afrit}} opnar þá endurskoðun sem venjulegt afrit sem getur ekki skrifað yfir skrána í safninu. {{ui:Bera saman við}} sýnir hvað var bætt við, fjarlægt og breytt milli þeirrar endurskoðunar og þeirrar á undan (eða hverrar annarrar sem þú velur), og litar það á teikningunni.
- {{ui:Notar}}: teikningarnar sem hún tengist (xref), skjölin sem IFC-líkan vísar í, hlutar PartCraft-samsetningar.
- {{ui:Notað af}}: sérhver skrá í safninu sem notar þessa.

{{ui:Efnislisti (CSV)}} vistar listann yfir allt sem skrá notar, stig fyrir stig, með magni, endurskoðunum og stöðum, fyrir töflureikni.

## Endurskoðunarreitur á blaðinu

Með teikningu opna sem hefur útlit, veldu {{ui:Endurskoðunarreitur}}. Tafla yfir útgefnar endurskoðanir (endurskoðun, dagsetning, af, samþykkt, lýsing) er teiknuð efst hægra megin á blaðinu sem þú skoðar. Þegar þú samþykkir útgáfu er taflan uppfærð.

## Endurskoðun í titilreitnum

Gefðu eigindum titilreitsins þitt eitt af þessum merkjum og veldu {{ui:Fylla í titilreiti}} á opnu teikningunni:

| Merki | Fyllt með |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | endurskoðuninni (B, eða B.2 meðan unnið er í henni) |
| `VAULT.STATE` | stöðunni (Gefið út …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | dagsetningu síðustu endurskoðunar |
| `VAULT.APPROVER`, `APPROVED_BY` | hver samþykkti síðustu útgáfu |

## PartCraft og BimCraft

PartCraft og BimCraft hafa sama Skjalaspjaldið fyrir eigin skrár: hluta og samsetningar í PartCraft, IFC-líkön í BimCraft. Innskráning vistar líkanið sem er opið í verkefnamöppuna, og samsetning sýnir hvaða hluta hún notar og efnislista.

## Gott að vita

- Tveir á sömu sameiginlegu möppu geta ekki báðir skráð sömu skrá út: útskráningin er skrá sem kerfið neitar að búa til tvisvar. Í vafra, og í Studio með skel eldri en þessi eiginleiki, er þetta jafn strangt og mappan leyfir: tvær útskráningar á sömu sekúndubroti gætu báðar tekist. Spjaldið segir hvort á við.
- Ekki breyta eða eyða möppunni `.ccvault` með höndunum. Dagbókin í henni er skráin; safnið byggir listann sinn upp úr henni ef þörf krefur.
- Breyting á skrá í möppunni án útskráningar er sýnd sem {{ui:Breytt í möppunni án útskráningar}}.
