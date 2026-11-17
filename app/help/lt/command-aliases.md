---
title: Redaguoti komandų slapyvardžius
summary: Savo komandų slapyvardžius laikykite viename tekstiniame faile įprastu formatu, importuokite ir eksportuokite .pgp failą bei įkelkite jį iš naujo komanda REINIT.
keywords: slapyvardis, slapyvardžiai, aliasedit, pgp, trumpinys, trumpas pavadinimas, reinit, klaviatūra, pritaikyti, redaguoti slapyvardžius
from: 6ab6fa0e
---

## Ką sužinosite

Kaip pridėti savo trumpus komandų pavadinimus, pavyzdžiui `LL` komandai {{cmd:LINE}}, visus viename tekstiniame faile.

## Pridėti slapyvardį

1. Atidarykite {{ui:Vaizdas}} › {{ui:Daugiau}} › {{ui:Redaguoti slapyvardžius…}} arba įveskite {{cmd:ALIASEDIT}} ir paspauskite {{key:Enter}}.
2. Pridėkite eilutę: slapyvardis, kablelis ir komanda po žvaigždutės:

```
LL,     *LINE
```

3. Spauskite {{ui:Įrašyti}}. Komandų eilutėje nurodoma, kiek jūsų slapyvardžių naudojama.
4. Įveskite `LL` ir paspauskite {{key:Enter}}: pradedama LINE.

Jūsų slapyvardžiai veikia virš CadCraft slapyvardžių. Jūsų eilutė nugali integruotą slapyvardį tuo pačiu pavadinimu; ištrinkite savo eilutę – ir integruotas vėl veikia.

## Eilutės, kurių CadCraft nepriima

Redaktorius rodo kiekvieną problemą su jos eilutės numeriu, kol rašote:

- komanda neegzistuoja;
- slapyvardis yra kitos komandos pavadinimas (`LINE, *CIRCLE` paslėptų LINE);
- eilutė nėra formato `SLAPYVARDIS, *KOMANDA`;
- tas pats slapyvardis yra dvejose eilutėse (vėlesnė nugali).

Eilutės, kurios paleidžia programą jūsų kompiuteryje, pavyzdžiui `NOTEPAD, START, 1, *File to edit: ,`, praleidžiamos su pastaba: programa naršyklėje negali paleisti programų.

## Atsinešti slapyvardžius iš kitos programos

1. Slapyvardžių redaktoriuje spauskite {{ui:Importuoti .pgp…}} ir pasirinkite failą. Taip pat galite nutempti `.pgp` failą į brėžinį.
2. Patikrinkite išvardytas problemas (CadCraft nežinomos komandos atmetamos, likusios veikia).
3. Spauskite {{ui:Įrašyti}}.

{{ui:Eksportuoti .pgp}} išsaugo CadCraft slapyvardžius ir jūsų slapyvardžius viename faile tuo pačiu formatu.

## Įkelti failą iš naujo

Įveskite {{cmd:REINIT}} ir paspauskite {{key:Enter}}, kad vėl pritaikytumėte slapyvardžių failą. Jis saugomas šioje naršyklėje; darbalaukio programa jį saugos savo aplanke, o debesies paslauga – sinchronizuos.

## Klavišų sparčiųjų klavišų bet kuriai komandai

Slapyvardis įvedamas, o sparčiasis klavišas – klavišu. Norėdami komandai priskirti savo klavišą:

1. Spauskite {{ui:Vaizdas}} › {{ui:Daugiau}} › {{ui:Klaviatūros spartieji klavišai…}} arba įveskite `KEYS` ir paspauskite {{key:Enter}}.
2. Spauskite laukelį {{ui:Klavišas}} ir paspauskite klavišus, pavyzdžiui {{key:Alt+Shift+C}}.
3. Laukelyje {{ui:Vykdo}} įrašykite komandą, o jei norite – ir tai, ką įvesti po jos: `CIRCLE` arba `ZOOM E`.
4. Spauskite {{ui:Pridėti}}.

Klavišui reikia {{key:Mod}} arba {{key:Alt}} su raide ar skaitmeniu, arba laisvo funkcinio klavišo ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Klavišai, kuriuos jau naudoja CadCraft, programa ar naršyklė, ir klavišai, priskirti mygtukui „Mano įrankiai“ (žr. [Jūsų mygtukai](topic:my-tools)), atmetami, o laukelis nurodo priežastį. Sparčiųjų klavišų nustatymai saugomi šioje naršyklėje (arba darbalaukio programoje); {{ui:Šalinti}} pašalina vieną iš jų.
