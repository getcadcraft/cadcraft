---
title: Breyta með gripum og eiginleikum
summary: Teygðu, færðu og breyttu stærð hluta með gripunum þeirra, og skrifaðu nákvæmar lengdir, radíusa, horn og hnit í Eiginleikaspjaldinu.
keywords: gripir, eiginleikar, teygja, lengd, radíus, hnit, breyta, skyndieiginleikar, eiginleikaspjald, breyta, lag, litur
from: f22541ba
---

## Hvað þú lærir

Tvær skjótar leiðir til að breyta hlut án skipunar: dragðu **gripin** hans, eða skrifaðu ný gildi í **Eiginleikar**-spjaldið hægra megin.

## Gripir

Þegar þú velur hluti (allt að 200 í einu) án þess að skipun sé í gangi birtast litlir ferningar á þeim. Þetta eru gripir:

| Hlutur | Gripir |
|---|---|
| Lína | Báðir endar og miðjan (færir alla línuna) |
| Hringur | Miðjan (færir hann) og fjórir punktar á hringnum (breyta radíusnum) |
| Bogi | Miðjan og báðir endar (breyta hvar hann byrjar og endar) |
| Fjöllína | Sérhver hornpunktur |
| Texti, punktur, blokkartilvísun | Innsetningarpunkturinn |
| Sporbaugur | Miðjan |
| Málsetning | Skilgreiningarpunktar hennar og staða málsetningarlínunnar |
| Sýnireitur | Miðjan (færir hann) og hornin fjögur (breyta stærð hans) |

### Færa grip

1. Teiknaðu línu og smelltu á hana. Þrír gripir birtast.
2. Smelltu á gripinn í öðrum endanum. Stöðustikan segir: „Smelltu þar sem þessi grip á að fara (Esc hættir við). Smellifesting og Lóðrétt/lárétt gilda."
3. Færðu krosshárið. Forskoðun fylgir.
4. Smelltu á nýja staðsetninguna, eða smelltu á punkt á öðrum hlut og smelltu.

Endinn færist og restin af línunni helst kyrr. Þú getur líka ýtt á grip og dregið hann, og sleppt honum þar sem hann á að vera.

:::note
Þú getur ekki skrifað hnit fyrir grip. Fyrir nákvæma staðsetningu skaltu smella á punkt, eða skrifa gildið í Eiginleikum.
:::

Ýttu á {{key:Esc}} eða hægrismelltu til að hætta við færslu grips.

## Eiginleikar

Hægra spjaldið sýnir eiginleika þess sem er valið.

1. Smelltu á línu. Fyrirsögn spjaldsins segir „Lína".
2. Smelltu í {{ui:Lengd}}, skrifaðu `2500` og ýttu á {{key:Enter}}.

Línan er nú nákvæmlega 2500 löng og heldur upphafspunkti sínum og horni. {{key:Enter}} eða smellur annars staðar notar gildið; {{key:Esc}} setur gamla gildið aftur. Hver breyting er eitt skref í afturköllun, líka þegar margir hlutir breytast í einu.

Reitir taka við segðum (`=2*45`) og lengdum með einingum (`3'6"`, `900mm`), sérhver punktur hefur X, Y og Z, og nokkrir hlutir má breyta saman. Allt þetta er í [Eiginleikaspjaldinu](topic:properties-panel).

## Algengar mistök

- **Engir gripir birtast.** Skipun er í gangi (ýttu á {{key:Esc}}), eða meira en 200 hlutir eru valdir, eða hluturinn er á læstu lagi.
- **Gripurinn fór á rangan stað.** Smellifesting náði honum. Haltu {{key:Shift}} inni meðan þú smellir til að hunsa smellifestingar.
- **Innsláttur í Eiginleikum gerði ekkert.** Ýttu á {{key:Enter}} eða smelltu annars staðar til að nota gildið. Ógilt innslag (núll eða neikvæðar lengdir og radíusar, texti sem er ekki gildi) gerir reitinn rauðan og segir hvers vegna.
- **Slegnir stafir fóru í reit í Eiginleikum.** Meðan reitur hefur bendilinn ritar lyklaborðið þar. Ýttu á {{key:Enter}} eða {{key:Esc}}, og skrifaðu síðan skipunina.
