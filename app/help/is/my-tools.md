---
title: Eigin hnappar (Mín verkfæri)
summary: Bættu við tækjastikuhnöppum sem keyra þín eigin fjölvi, gefðu þeim flýtilykla, deildu þeim sem skrá og fluttu hnappa inn úr CUIx-sérsniðningarskrá.
keywords: mín verkfæri, sérsniðnir hnappar, tækjastikuhnappar, fjölvi, fjölvar, cui, cuix, sérsníða, valmynd, flýtilyklar, lyklaborðsflýtileiðir, diesel, ^c^c, flytja inn hnappa, flytja út hnappa
from: 36618802
---

## Það sem þú lærir

Hvernig setur þú eigin hnappa á tækjastikuna, hver keyrir fjölva skrifaðan eins og AutoCAD skrifar þá, hvernig gefur þú hnappi lykil, og hvernig færð þú hnappa úr CUIx-skrá.

## Bættu við hnappi

1. Opnaðu {{ui:Stillingar}} ({{key:Mod+,}}) og vertu á {{ui:CadCraft}}-flipanum. Skrunaðu að {{ui:Mín verkfæri}}.
2. Smelltu á {{ui:Bæta við hnappi…}}.
3. Fylltu út reitinn:
   - {{ui:Hópur}}: tækjastikuhópurinn sem hann fer í, til dæmis `Mín verkfæri`. Nýtt heiti býr til nýjan hóp.
   - {{ui:Heiti}}: orðin á hnappinum.
   - {{ui:Fjölvi}}: það sem hann skrifar, til dæmis `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Flýtilykill}}: smelltu á reitinn og ýttu á lyklana, til dæmis {{key:Ctrl+Alt+B}}.
   - {{ui:Tákn}}: PNG- eða SVG-mynd að hámarki 64 KB, eða ekkert (stjarna birtist).
4. Smelltu á {{ui:Vista}}.

Hnappurinn birtist í enda tækjastikunnar, í sínum hópi. Smelltu á hann, eða ýttu á lykil hans, til að keyra hann. {{ui:Breyta}} og {{ui:Eyða}} í listanum breyta honum eða fjarlægja hann.

## Skrifaðu fjölva

Fjölvi er það sem þú myndir skrifa á skipanalínuna, með nokkrum táknum:

| Tákn | Þýðir |
|---|---|
| `^C` | Hættir við það sem keyrir (`^C^C` er venjuleg byrjun) |
| `;` eða bil | {{key:Enter}} |
| `\` | Bíður eftir þér: smelli eða innsleginu svari, síðan heldur fjölvinn áfram |
| `_` eða `.` á undan skipun | Samþykkt og hunsuð (alþjóðleg og innbyggð heiti) |
| `*` í allra byrjun | Keyrt aftur í hvert sinn sem það endar, þar til þú ýtir á {{key:Esc}} |
| `^O`, `^G` | Kveikir eða slekkur á {{ui:Lóðrétt/lárétt}} og {{ui:Hnitanet}} |
| `$M=` | Afgangurinn er DIESEL. Aðeins `$(if,…)`, `$(getvar,…)`, `$(=,…)` og `$(eq,…)` eru lesin; hnappur sem notar annað segir það og gerir ekkert |

Dæmi:

- `^C^C_line;0,0;@100,0;;` teiknar 100 langa línu frá upphafinu.
- `^C^C_circle;\25;` biður þig um miðju, teiknar síðan hring með radíus 25 þar.
- `^C^C_turnright` snýr sýninu 90° til hægri.

## Flýtilyklar

Lykill þarf {{key:Mod}} (Ctrl, eða Cmd á Mac) eða {{key:Alt}} með bókstaf eða tölustaf, eða einum af lausu aðgerðartökkunum {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Bókstafir einir og sér fara á skipanalínuna. Lyklar sem CadCraft, forritið eða vafrinn notar nú þegar (eins og {{key:Ctrl+S}} eða {{key:Ctrl+Z}}), og lyklar sem annar hnappur hefur, eru hafnaðir, og reiturinn segir hvers vegna.

## Deildu hnöppunum þínum

- {{ui:Flytja út…}} vistar alla hópa og hnappa (með táknum og lyklum) sem `my-tools.json`.
- {{ui:Flytja inn…}} bætir hópum slíkrar skráar við þína. Hópaheiti sem þú notar nú þegar fær „(2)“; lykill sem myndi rekast á er skilinn eftir, og spjaldið segir það.

## Fluttu hnappa inn úr CUIx-skrá

1. Smelltu á {{ui:Flytja inn CUIx…}} og veldu `.cuix`-skrána.

Tækjastikur hennar og borðaspjöld verða að hópum, hver hnappur með sínum fjölva og sinni mynd (PNG, eða BMP breytt í PNG). Flýtilyklar hennar koma í sinn eigin hóp, hver hnappur með sínum lykli; skammnefnin sem hún kann að bera koma í hóp merktan {{ui:Skammnefni}}. Spjaldið listar það sem kom inn.

:::note
Skráin er aðeins lesin. Skipanir sem CadCraft hefur ekki eru taldar upp með heiti, ekki giskað á: hnapparnir þeirra segja það þegar smellt er á þá. DIESEL umfram fáu föllin hér að ofan, valmyndir, músarhnappar og vinnusvæði eru ekki lesin.
:::

## Gott að vita

- Hnappar eru geymdir í þessum vafra (eða þessu skrifborðsforriti), ekki í teikningum.
- Hnappur keyrir í gegnum skipanalínuna, þannig að hann er afturkallaður eins og hvað annað sem þú skrifar: eitt {{key:Mod+Z}} fyrir hverja skipun sem hann keyrði.
