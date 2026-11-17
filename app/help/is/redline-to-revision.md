---
title: Breyttu athugasemd í endurskoðun
summary: Lestu rauðlínupakkann sem MarkupCraft skrifar, samþykktu eða hafnaðu hverri breytingu, settu endurskoðunarský og endurskoðunartöflu á þær samþykktu, og vistaðu svarskrána sem MarkupCraft les til baka.
keywords: rauðlína, merking, endurskoðun, ský, endurskoðunarský, endurskoðunartafla, samþykkja, hafna, markupcraft, yfirferð, rauðlínupakki, svör, REDLINE
from: cdb3fafe
---

Yfirlesari merkir blaðasett í MarkupCraft og sendir þér **rauðlínupakka**, skrá sem endar á `.redline.json`. Hér ferðu í gegnum hann breytingu fyrir breytingu, og þær samþykktu verða endurskoðunarský á teikningunni.

## Fara yfir breytingarnar

Skrifaðu {{cmd:REDLINE}} (`RDL`) og veldu pakkann. Veldu:

- {{ui:Listi}}: hverja breytingu með númeri hennar, stöðu, blaði, gerð, hver bað um hana og það sem hann skrifaði.
- {{ui:Samþykkja}}, {{ui:Hafna}}, {{ui:Lokið}}: skrifaðu númerin (`1,3-5`, eða `Allt`) og valfrjálsa athugasemd fyrir svarskrána. {{ui:Opna aftur}} setur breytingar aftur í opnar.
- {{ui:Rammi}}: hlutinn af teikningunni sem merkta blaðið sýnir. Smelltu á tvö horn; ýttu á {{key:Enter}} fyrir alla teikninguna. Breytingarnar eru staðsettar eftir því hvar þær voru á blaðinu, og þetta er það sem raðar þeim saman.
- {{ui:Nota}}: teiknar endurskoðunarský (lag `REV-CLOUD`, með endurskoðunarstafnum) utan um hverja samþykkta eða lokna breytingu, og endurskoðunartöflu, línustrikaða töflu yfir það sem var samþykkt með athugasemdunum þínum (lag `REV-LOG`), hægra megin við teikninguna. Eitt afturkallsskref.
- {{ui:Vista}}: skrifar `<project>-<revision>.redline-answers.json`. Opnaðu hana í MarkupCraft og merkingarnar lokast: Samþykkt, Hafnað eða Lokið, með athugasemdunum þínum sem athugasemdir.

## Það sem þú þarft að vita

Það sem yfirlesarinn skrifaði er sýnt eins og það var skrifað. CadCraft fylgir aldrei fyrirmælum sem finnast í pakka; það sýnir þau aðeins þér.

Hafnaðar og opnar breytingar bæta engu við teikninguna. Pakkinn er lesinn á tölvunni þinni; ekkert er sent upp.

Ef aðstoðarmaðurinn þinn er tengdur getur hann lesið pakka, skráð ákvarðanir og beitt þeim með verkfærunum `redline_read`, `redline_decide`, `redline_apply` og `redline_answers`. Teikningin breytist í einu afturkallsskrefi, „Aðstoðarmaður: Rauðlína í endurskoðun“.
