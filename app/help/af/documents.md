---
title: Dokumente: uitneem, hersienings en vrystelling
summary: Hou die tekeninge in 'n projekvouer onder beheer: neem 'n lêer uit sodat niemand anders dit kan verander nie, lewer dit in as 'n nuwe hersiening, stuur dit vir nasien en stel dit vry met die naam van 'n goedkeurder; geskiedenis, wat wat gebruik, 'n materiaallys, en titelblokke wat die hersiening wys.
keywords: projekinstellings, goedkeurders, admins, hersieningsletters, ASME, leesalleen, vergelyk hersienings, maak kopie oop, partcraft, bimcraft, dokumente, DOKUMENTE, DOKS, kluis, dokumentbestuur, pdm, uitneem, inlewer, checkout, checkin, sluit, hersiening, rev, hersieningsletter, vrystelling, vrygestel, keur goed, goedkeuring, nasien, verouderd, waar gebruik, bom, materiaallys, titelblok, hersieningsblok, projekvouer
from: ee938722
---

## Wat jy gaan maak

'n Projekvouer waarin elke tekening 'n hersiening het (A.1, A.2 … dan A, B …) en 'n toestand (Werk aan die gang, Vir nasien, Vrygestel, Verouderd), waar net een persoon op 'n keer 'n lêer kan verander, en waar elke uitneem, inlewering, goedkeuring en mislukte uitneem neergeskryf word met wie dit gedoen het en wanneer.

Alles word in die vouer self gehou, in 'n versteekte `.ccvault`-vouer langs jou tekeninge. 'n Vouer op 'n gedeelde skyf of 'n gesinkroniseerde vouer werk vir 'n hele span. Daar is geen bediener nie en niks word opgelaai nie.

## Maak Dokumente oop

Tik `DOCUMENTS` (of `DOCS`) en druk {{key:Enter}}. Die paneel gaan oop langs die tekening.

Kies {{ui:Choose the project folder}} en kies die vouer wat die projek se tekeninge bevat. Projekvouers werk in CadCraft Studio en in blaaiers wat 'n vouer kan oopmaak (Chrome, Edge). In ander blaaiers sê die paneel dit.

Die eerste keer tik jy jou naam (dit gaan op alles wat jy doen) en die naam van hierdie rekenaar. As jy aangemeld is, is jou naam reeds daar.

## Begin 'n kluis

'n Vouer wat nog nie 'n kluis is nie, bied {{ui:Start a vault in this folder}} aan. Tik die projek se naam. Maak dan {{ui:Files not in the vault}} oop en kies {{ui:Add}} langs elke lêer wat onder beheer gebring moet word. 'n Lêer wat jy byvoeg, begin by hersiening **A.1**, Werk aan die gang.

## Verander 'n tekening

1. Kies {{ui:Open}} langs 'n tekening. Dit gaan oop in CadCraft. As dit nie aan jou uitgeneem is nie, kyk maar moenie dit verander nie: Stoor weier om daaroor te skryf en sê waarom (gebruik Stoor as om 'n eie kopie te hou).
2. Kies {{ui:Check out}}. Niemand anders kan dit nou uitneem nie; die paneel wys vir hulle wie dit het, op watter rekenaar, en sedert wanneer.
3. Teken.
4. Kies {{ui:Check in}} en sê wat verander het. Die tekening wat oop is, word in die projekvouer in sy eie formaat gestoor en word die volgende hersiening (A.1, dan A.2). Inlewer sonder enige verandering hou die hersiening dieselfde.

{{ui:Undo check-out}} gee die lêer terug sonder 'n nuwe hersiening.

## Nasien en vrystel

- {{ui:Send for review}}: die lêer is leesalleen terwyl dit nagesien word.
- {{ui:Approve}}: tik die goedkeurder se naam. A.3 word **A**, Vrygestel. Vrygestelde lêers is leesalleen.
- {{ui:Send back}}: terug na Werk aan die gang, met die rede.
- {{ui:New revision}} op 'n vrygestelde lêer neem dit uit vir die volgende letter: die eerste inlewering daarvan is **B.1**. {{ui:Undo check-out}} voor dit laat dit op A.
- {{ui:Make obsolete}} trek 'n vrygestelde lêer terug.

'n Projek kan 'n lys hou van wie mag goedkeur, en kan vereis dat die goedkeurder nie dieselfde persoon is wat die lêer ingelewer het nie (sien Projekinstellings hieronder).

## Projekinstellings

Maak {{ui:Project settings}} in die paneel oop:

- **Goedkeurders**: een naam per reël. Wanneer daar enige is, kan net hulle 'n vrystelling goedkeur.
- **Die goedkeurder moet iemand anders as die outeur wees**: die reël van "vier oë".
- **Admins**: een naam per reël. Wanneer daar enige is, kan net hulle iemand anders se uitneem breek of hierdie instellings verander.
- **Hersieningsletters om weg te laat**: {{ui:Use the ASME Y14.35 sequence}} slaan I, O, Q, S, X en Z oor, of tik jou eie letters. Letters wat reeds gegee is, bly; die keuse geld vir die volgende hersienings.
- **'n Uitneem tel as verouderd na**: die aantal dae (standaard 14).

Kies {{ui:Save settings}}. Die verandering word in die logboek geskryf met wie dit gemaak het.

## Iemand het 'n lêer uitgeneem gelaat

{{ui:Break check-out}} maak 'n lêer vry wat iemand anders uitgeneem het (hulle is weg, of hul rekenaar het gesterf). Jy moet 'n rede tik: dit word in die logboek geskryf saam met wie se uitneem dit was. Wanneer die projek admins het, kan net hulle dit doen. 'n Uitneem wat ouer as 14 dae is, word as lank gemerk.

## Geskiedenis, hersienings, gebruik, gebruik deur

Kies 'n lêer se naam om te sien:

- {{ui:History}}: elke gebeurtenis, nuutste eerste, met wie, watter rekenaar en wanneer.
- {{ui:Revisions}}: elke hersiening wat bewaar word. 'n Kopie van elke hersiening is in die kluis (dieselfde inhoud word een keer gehou). {{ui:Open copy}} maak daardie hersiening oop as 'n gewone kopie wat nie die kluis se lêer kan oorskryf nie. {{ui:Compare with}} lys wat bygevoeg, verwyder en verander is tussen daardie hersiening en die een voor dit (of enige ander wat jy kies), en kleur dit op die tekening.
- {{ui:Uses}}: die tekeninge waarna dit skakel (xrefs), die dokumente waarna 'n IFC-model wys, die onderdele van 'n PartCraft-samestelling.
- {{ui:Used by}}: elke lêer in die kluis wat hierdie een gebruik.

{{ui:Bill of materials (CSV)}} stoor die lys van alles wat 'n lêer gebruik, vlak vir vlak, met hoeveelhede, hersienings en toestande, vir 'n sigblad.

## 'n Hersieningsblok op die blad

Met 'n tekening oop wat 'n uitleg het, kies {{ui:Revision block}}. 'n Tabel van die vrygestelde hersienings (hersiening, datum, deur, goedgekeur, beskrywing) word bo-regs op die blad wat jy kyk, geteken. Wanneer jy 'n vrystelling goedkeur, word die tabel bygewerk.

## Hersiening in die titelblok

Gee jou titelblok se eienskappe een van hierdie etikette en kies {{ui:Fill title blocks}} op die oop tekening:

| Etiket | Gevul met |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | die hersiening (B, of B.2 terwyl daar aan gewerk word) |
| `VAULT.STATE` | die toestand (Vrygestel …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | die datum van die laaste hersiening |
| `VAULT.APPROVER`, `APPROVED_BY` | wie die laaste vrystelling goedgekeur het |

## PartCraft en BimCraft

PartCraft en BimCraft het dieselfde Dokumente-paneel vir hul eie lêers: onderdele en samestellings in PartCraft, IFC-modelle in BimCraft. Inlewer stoor die model wat oop is in die projekvouer, en 'n samestelling wys watter onderdele dit gebruik en 'n materiaallys.

## Goed om te weet

- Twee mense op dieselfde gedeelde vouer kan nie albei 'n lêer uitneem nie: die uitneem is 'n lêer wat die stelsel weier om twee keer te maak. In 'n blaaier, en in 'n Studio waarvan die skil ouer is as hierdie kenmerk, is dit so streng as wat die vouer toelaat: twee uitneemings in dieselfde splitsekonde kan albei slaag. Die paneel sê watter een van toepassing is.
- Moenie die `.ccvault`-vouer met die hand wysig of uitvee nie. Die logboek daarin is die rekord; die kluis bou sy lys daaruit weer op indien nodig.
- Om 'n lêer in die vouer te verander sonder om dit uit te neem, word gewys as {{ui:Changed in the folder without a check-out}}.
