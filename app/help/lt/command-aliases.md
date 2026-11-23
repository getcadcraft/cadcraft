---
title: Redaguoti komandų slapyvardžius
summary: Savo komandų slapyvardžius laikykite viename tekstiniame faile įprastu formatu, importuokite ir eksportuokite .pgp failą ir įkelkite jį iš naujo su REINIT.
keywords: slapyvardis, slapyvardžiai, aliasedit, pgp, spartusis klavišas, trumpas pavadinimas, reinit, klaviatūra, pritaikyti, redaguoti slapyvardžius
from: 2282d36f
---

## Ką sužinosite

Kaip pridėti savo trumpus komandų pavadinimus, pavyzdžiui `LL` komandai {{cmd:LINE}}, visus viename tekstiniame faile.

## Pridėti slapyvardį

1. Atidarykite {{ui:Vaizdas}} › {{ui:Daugiau}} › {{ui:Redaguoti slapyvardžius…}}, arba įveskite {{cmd:ALIASEDIT}} ir paspauskite {{key:Enter}}.
2. Pridėkite eilutę su slapyvardžiu, kablelį ir komandą po žvaigždute:

```
LL,     *LINE
```

3. Spustelėkite {{ui:Įrašyti}}. Komandų eilutėje nurodoma, kiek jūsų slapyvardžių naudojama.
4. Įveskite `LL` ir paspauskite {{key:Enter}}: pradedama LINE.

Jūsų slapyvardžiai veikia kartu su CadCraft įtaisytaisiais. Jūsų eilutė laimi prieš įtaisytąjį slapyvardį tuo pačiu pavadinimu; pašalinus savo eilutę, grįžta įtaisytasis.

## Eilutės, kurių CadCraft nepriima

Redaktorius rašant nurodo kiekvieną problemą su eilutės numeriu:

- komanda neegzistuoja;
- slapyvardis yra kitos komandos pavadinimas (`LINE, *CIRCLE` paslėptų LINE);
- eilutė neatitinka formato `ALIAS, *COMMAND`;
- tas pats slapyvardis yra dviejose eilutėse (vėlesnė laimi).

Eilutės, kurios paleidžia programą jūsų kompiuteryje, pavyzdžiui `NOTEPAD, START, 1, *File to edit: ,`, praleidžiamos su pastaba: naršyklėje veikianti programa negali paleisti programų.

## Perkelti slapyvardžius iš kitos programos

1. Slapyvardžių redaktoriuje spustelėkite {{ui:Importuoti .pgp…}} ir pasirinkite failą. Taip pat galite nuvilkti `.pgp` failą ant brėžinio.
2. Patikrinkite nurodytas problemas (CadCraft neturimos komandos atmetamos, likusios veikia).
3. Spustelėkite {{ui:Įrašyti}}.

{{ui:Eksportuoti .pgp}} įrašo CadCraft slapyvardžius ir jūsų kartu viename faile tuo pačiu formatu.

## Įkelti failą iš naujo

Įveskite {{cmd:REINIT}} ir paspauskite {{key:Enter}}, kad vėl pritaikytumėte savo slapyvardžių failą. Jis saugomas šioje naršyklėje; darbalaukio programa jį saugos savo aplanke, o debesies paslauga jį sinchronizuos.

## Komandos parinkčių raidės

Slapyvardis įvardija komandą. Norėdami pakeisti raides, į kurias atsakoma komandos parinktims (`P` Poliarinis {{cmd:ARRAY}}), žr. [Suteikite komandos parinktims savo raides](topic:option-letters).

## Spartieji klavišai bet kuriai komandai

Slapyvardis įvedamas; spartusis klavišas yra klavišas. Norėdami suteikti komandai savo klavišą:

1. Spustelėkite {{ui:Vaizdas}} › {{ui:Daugiau}} › {{ui:Spartieji klavišai…}}, arba įveskite `KEYS` ir paspauskite {{key:Enter}}.
2. Spustelėkite langelį {{ui:Klavišas}} ir paspauskite klavišus, pavyzdžiui {{key:Alt+Shift+C}}.
3. Lauke {{ui:Vykdo}} įrašykite komandą, o jei norite – ir tai, ką įvesti po jos: `CIRCLE` arba `ZOOM E`.
4. Spustelėkite {{ui:Pridėti}}.

Klavišui reikia {{key:Mod}} arba {{key:Alt}} kartu su raide ar skaitmeniu, arba laisvo funkcinio klavišo ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Klavišai, kuriuos jau naudoja CadCraft, programa ar naršyklė, ir klavišai, priskirti mygtukui „Mano įrankiai“ (žr. [Jūsų mygtukai](topic:my-tools)), atmetami, o langelyje nurodoma priežastis. Spartieji klavišai saugomi šioje naršyklėje (arba darbalaukio programoje); {{ui:Šalinti}} pašalina vieną.
