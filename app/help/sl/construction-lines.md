---
title: "Pomožne premice in poltraki"
summary: "Rišite premice, ki se raztezajo brez konca (XLINE) ali od točke v eno smer (RAY), da poravnate stvari, in jih obrežite v navadne črte."
keywords: xline, ray, pomožna premica, pomožne premice, neskončna premica, vodilna črta, referenčna črta, simetrala, odmična premica, postavitvene črte, xl
from: b6c398bc
---

## Kaj se boste naučili

Kako rišete pomožne premice, da med risanjem poravnate stvari: skozi dve točki, vodoravno ali navpično, pod kotom, na pol poti med dvema smerema ali na določeni razdalji od premice. In kako jih obrežete v navadne črte, ko so opravile svoje delo.

## Dve vrsti

- **Pomožna premica** ({{cmd:XLINE}}) se raztegne brez konca v obe smeri.
- **Poltrak** ({{cmd:RAY}}) se začne v točki in se raztegne brez konca v eno smer.

Obe se izrišeta čez celotno risalno območje ne glede na povečavo, v razdeljenem zaslonu in v poglednih oknih na listu. {{ui:Obseg}} ju izpusti, zato povečava na risbo še vedno prilagodi to, kar ste narisali.

## Rišite pomožne premice

1. Kliknite {{ui:Risanje}} › {{ui:Več}} › {{ui:Pomožna premica}} ali vnesite `XL` in pritisnite {{key:Enter}}.
2. Kliknite točko. Vsak naslednji klik doda pomožno premico skozi prvo točko in tisto, ki ste jo kliknili.
3. Za konec pritisnite {{key:Enter}}.

Namesto prve točke lahko vnesete možnost:

| Možnost | Kaj naredi |
|---|---|
| `H` (vodoravno) | Vodoravne premice, ena skozi vsako točko, ki jo kliknete. |
| `V` (navpično) | Navpične premice skozi vsako točko. |
| `A` (kot) | Premice pod kotom, ki ga vnesete (stopinje, v nasprotni smeri urnega kazalca od osi X), skozi vsako točko. `R` (referenca) izmeri kot od premice, ki jo izberete. |
| `B` (simetrala) | Kliknite oglišče, nato točko vzdolž ene stranice: vsaka točka, ki jo kliknete vzdolž druge stranice, doda premico na pol poti med obema. |
| `O` (odmik) | Vnesite razdaljo, izberite premico, nato kliknite stran: pomožna premica na tej razdalji od nje, vzporedna. `T` (skozi) namesto tega postavi premico skozi točko, ki jo kliknete. Razdalja se shrani za naslednjič. |

## Rišite poltrake

1. Kliknite {{ui:Risanje}} › {{ui:Več}} › {{ui:Poltrak}} ali vnesite `RAY` in pritisnite {{key:Enter}}.
2. Kliknite, kjer poltraki začnejo.
3. Kliknite točko, skozi katero naj gre vsak poltrak. Za konec pritisnite {{key:Enter}}.

## Prilepljanje nanje in obrezovanje

Pomožne premice in poltraki se privežejo na najbližjo točko, pravokotno in presečišče. Nimajo krajišč ne sredine, zato se krajišče in razpolovišče nanje ne prilepita.

Obrezujejo in so obrezane kot druge črte pri {{cmd:TRIM}} in {{cmd:BREAK}}:

- Z ene strani obrežete pomožno premico, in postane poltrak, ki se začne pri rezu.
- Z poltraka odrežete daljni del, in postane navadna črta.
- Pomožno premico prelomite v eni točki, in dobite dva poltraka.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} in {{cmd:STRETCH}} delujejo tudi nanju. Izbor z oknom ju nikoli ne izbere, ker noben okno ne more obsegati celotne neskončne premice; izbere ju sekajoče okno ali klik.

:::note
DWG (vsaka različica) in DXF 2000 ju ohranita kot pomožni premici. DXF R12 ju nima, zato tam postaneta črti čez risbo, shranjevanje pa to pove. Izris ali PDF ju nariše samo čez to, kar se natisne.
:::
