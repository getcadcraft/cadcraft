---
title: Plano pažymėjimas matmenimis
summary: Pridėkite tiesinius, lygiagrečiuosius, kampinius, spindulio ir skersmens matmenis, jungkite juos grandine su Tęsti matmenį ir Bazinis matmuo ir perrašykite tekstą.
keywords: matmuo, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, grandinė, eilutė, anotuoti, matmenų įrankis, kur, rasti, įrankių juosta, matuoti, mm, cm, m, km, vienetai
from: 9ee65123
---

## Ką sukursite

Matmenuotą kambarį: bendrą plotį ir aukštį, eilę matmenų palei vieną sieną, įstrižą sieną, lenktą kampą ir kampą.

Prieš pradėdami perskaitykite [Matmenų dydžių nustatymas](topic:dimension-settings), jei brėžinys didelis: numatytasis matmenų tekstas yra 2.5 brėžinio vieneto aukščio, kas labai mažai brėžinyje, matuojamame milimetrais. Žemiau esantiems žingsniams pirmiausia įveskite `DIMSCALE`, paspauskite {{key:Enter}}, įveskite `50` ir paspauskite {{key:Enter}}.

## Kur yra matmenų įrankiai

Su CadCraft meniu stiliumi (tuo, kuriuo CadCraft prasideda) matmenų įrankiai yra įrankių juostoje virš brėžinio, grupėje {{ui:Anotavimas}}: {{ui:Linijinis}}, {{ui:Lygiagretusis}}, {{ui:Kampas}}, {{ui:Spindulys}} ir {{ui:Skersmuo}}. Grupės {{ui:Daugiau}} meniu turi {{ui:Tęsti matmenį}} ir {{ui:Bazinis matmuo}}. Užveskite žymeklį ant mygtuko, kad pamatytumėte, ką jis daro.

- Su {{ui:Klasikinis braižymas}} arba {{ui:Juosta}} meniu stiliumi atidarykite skirtuką {{ui:Anotavimas}}: įrankiai yra jo skydelyje {{ui:Matmenys}}. {{ui:Klasikinis braižymas}} taip pat turi {{ui:Linijinis}} skirtuke {{ui:Pradžia}}, po {{ui:Anotacijos}}. Žr. [Meniu, klavišai ir pelė](topic:menus-keys-and-mouse).
- Arba įveskite komandą komandų eilutėje po brėžiniu ir paspauskite {{key:Enter}}: `DLI` (linijinis), `DAL` (lygiagretusis), `DAN` (kampinis), `DRA` (spindulys), `DDI` (skersmuo), `DCO` (tęsti), `DBA` (bazinis).
- Siauru ekranu įrankių juosta yra vienoje eilutėje: perbraukite ją į šoną, kad pasiektumėte {{ui:Anotavimas}}.

Kad ilgiai būtų rodomi milimetrais, centimetrais, metrais ar kilometrais, žr. [Matmenys mm, cm, m ar km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Nubrėžkite ką matuoti

1. Įveskite `PL` ir paspauskite {{key:Enter}}.
2. Įveskite `0,0` ir paspauskite {{key:Enter}}.
3. Įveskite `@6000,0` ir paspauskite {{key:Enter}}.
4. Įveskite `@1500<60` ir paspauskite {{key:Enter}}.
5. Įveskite `@0,2700` ir paspauskite {{key:Enter}}.
6. Įveskite `@-6750,0` ir paspauskite {{key:Enter}}.
7. Įveskite `C` ir paspauskite {{key:Enter}}. Kontūras užsidaro.
8. Įveskite `C` ir paspauskite {{key:Enter}}, kad pradėtumėte apskritimą.
9. Spustelėkite kambario viduje, toli nuo sienų, kad nurodytumėte centrą.
10. Įveskite `600` ir paspauskite {{key:Enter}}. Tai kolona.
11. Spustelėkite {{ui:Visas brėžinys}}.

## Linijinis: horizontalus arba vertikalus

1. Įveskite `DLI` ir paspauskite {{key:Enter}}.
2. Prie `Specify first extension line origin` prisitraukite prie apatinio kairiojo kampo (galinis taškas) ir spustelėkite.
3. Prie `Specify second extension line origin` prisitraukite prie apatinio dešiniojo kampo ir spustelėkite.
4. Pajudinkite kryžiuką po kambariu. Matmuo seka, horizontalus.
5. Spustelėkite, kad padėtumėte matmens liniją.

Istorijoje rašoma `Dimension text = 6000`.

Kur padedate liniją, nusprendžia kryptį: žemiau arba aukščiau duoda horizontalų matmenį, kairėje arba dešinėje – vertikalų. Norėdami priverstinai, prieš padėdami įveskite `H` (horizontalus), `V` (vertikalus) arba `R` (pasuktas, tada kampas).

:::tip
Pirmoje užklausoje paspauskite {{key:Enter}} vietoj taško pasirinkimo, tada spustelėkite linijos, lanko, apskritimo ar polilinijos segmentą. CadCraft pats paima abu galus.
:::

## Tęsti: matmenų eilė

{{cmd:DIMCONTINUE}} ({{ui:Anotavimas}} › {{ui:Daugiau}} › {{ui:Tęsti matmenį}}, arba `DCO`) tęsia nuo paskutinio linijinio ar lygiagrečiojo matmens, kurį sukūrėte; kiekvienas naujas prasideda ten, kur baigėsi paskutinis.

1. Įveskite `DLI` ir paspauskite {{key:Enter}}.
2. Įveskite `0,0` ir paspauskite {{key:Enter}} pirmai pradžiai.
3. Įveskite `2000,0` ir paspauskite {{key:Enter}} antrai pradžiai.
4. Spustelėkite po kambariu, kad padėtumėte.
5. Įveskite `DCO` ir paspauskite {{key:Enter}}.
6. Įveskite `4500,0` ir paspauskite {{key:Enter}}. Antras matmuo tęsiasi nuo pirmojo, toje pačioje linijoje.
7. Prisitraukite prie apatinio dešiniojo kampo ir spustelėkite. Trečias užbaigia eilutę.
8. Paspauskite {{key:Enter}}, kad baigtumėte komandą.

:::note
Čia taškai įvesti absoliučiomis koordinatėmis tyčia. `@` taškas skaičiuojamas nuo paskutinio jūsų duoto taško, o paskutinis taškas yra ten, kur padėjote ankstesnę matmens liniją, o ne matmens galas. Absoliutūs taškai, prisitraukimai arba tiesioginis atstumas su įjungtu {{ui:Ortogonalus}} matmenų eilutėje yra saugesni.
:::

Įveskite `U` ir paspauskite {{key:Enter}}, kad atšauktumėte paskutinį matmenį eilutėje, nepaliekant komandos.

## Bazinis: matmenys sudėti nuo vienos linijos

{{cmd:DIMBASELINE}} ({{ui:Anotavimas}} › {{ui:Daugiau}} › {{ui:Bazinis matmuo}}, arba `DBA`) matuoja kiekvieną naują matmenį nuo paskutinio matmens pirmosios pradžios ir sudeda kiekvieną dar žingsniu toliau.

1. Įveskite `DLI` ir paspauskite {{key:Enter}}.
2. Prisitraukite prie apatinio kairiojo kampo ir spustelėkite.
3. Prisitraukite prie viršutinio kairiojo kampo ir spustelėkite.
4. Pajudinkite kryžiuką į kairę nuo kambario ir spustelėkite. Atsiranda vertikalus matmuo.
5. Įveskite `DBA` ir paspauskite {{key:Enter}}.
6. Prisitraukite prie viršutinio 60 laipsnių sienos galo (galinis taškas) ir spustelėkite. Atsiranda antras vertikalus matmuo, žingsniu toliau nei pirmasis.
7. Paspauskite {{key:Enter}}, kad baigtumėte.

## Lygiagretusis: tikras įstrižos linijos ilgis

1. Įveskite `DAL` ir paspauskite {{key:Enter}}.
2. Paspauskite {{key:Enter}}, kad pasirinktumėte objektą.
3. Spustelėkite 60 laipsnių sieną.
4. Pajudinkite į išorę ir spustelėkite, kad padėtumėte.

Tekste rašoma 1500: tikras ilgis, išmatuotas išilgai sienos.

## Spindulys ir skersmuo

1. Įveskite `DRA` ir paspauskite {{key:Enter}}.
2. Spustelėkite kolonos apskritimą.
3. Pajudinkite kryžiuką. Rodyklė veda nuo centro link kryžiuko.
4. Spustelėkite, kad padėtumėte tekstą.

Tekste rašoma `R600`. {{cmd:DIMDIAMETER}} (`DDI`) daro tą patį su ⌀ ženklu ir skersmeniu.

## Kampinis

Čia sienos yra viena polilinija, todėl kampas matuojamas pagal jo viršūnę. (Tarp dviejų atskirų linijų galite spustelėti pačias linijas.)

1. Įveskite `DAN` ir paspauskite {{key:Enter}}.
2. Prie `Select arc, circle or line, or Enter for a vertex` paspauskite {{key:Enter}}.
3. Prie `Specify angle vertex` prisitraukite prie apatinio dešiniojo kampo ir spustelėkite.
4. Prie `Specify first angle endpoint` prisitraukite prie apatinio kairiojo kampo ir spustelėkite.
5. Prie `Specify second angle endpoint` prisitraukite prie viršutinio 60 laipsnių sienos galo ir spustelėkite.
6. Pajudinkite kryžiuką kambario viduje, šalia kampo, ir spustelėkite.

Tekste rašoma `120°`, tai vidinis kampas. Jei padėsite kitoje kampo pusėje, matmuo matuos kampą toje pusėje. Spustelėkite lanką pirmoje užklausoje, kad pamatuotumėte jo apimamą kampą, arba spustelėkite dvi linijas, kad pamatuotumėte kampą tarp jų.

## Keiskite tekstą

Norėdami parašyti savo tekstą, prieš padėdami matmenį įveskite `T` ir paspauskite {{key:Enter}}, tada įveskite tekstą. Savo tekste `<>` reiškia išmatuotą reikšmę: `<> TYP.` duoda `6000 TYP.`. Paspauskite {{key:Enter}} tuščioje eilutėje, kad paliktumėte išmatuotą reikšmę.

Norėdami pakeisti esamą matmenį:

1. Spustelėkite jį.
2. Dešiniajame skydelyje įveskite {{ui:Tekstas}} lauke. Palikite tuščią, kad būtų išmatuota reikšmė.
3. Paspauskite {{key:Enter}}.

## Matmenys seka geometriją

Matmuo prisimena savo taškus. Vilkite vieną iš jo rankenėlių arba perkelkite, pasukite ar keiskite jo mastelį kartu su objektais, kuriuos jis matuoja, ir jis matuoja iš naujo. Jei ištempiate geometriją, nejudindami matmens, matmuo nesekia: jis išlaiko savo taškus.

## Dažniausios klaidos

- **Tekstas ir rodyklės yra mikroskopiški arba labai dideli.** Nustatykite bendrą mastelį: žr. [Matmenų dydžių nustatymas](topic:dimension-settings).
- **„Pažymėkite tašką kampo, kurį norite matuoti, viduje.“** Taškas, kurį spustelėjote kampiniam matmeniui, guli ant vienos iš kraštinių. Perkelkite jį į kampo vidų.
- **Tęsti prasidėjo nuo ne to matmens.** Jis visada tęsia nuo paskutinio linijinio ar lygiagrečiojo matmens, sukurto šioje sesijoje. Pirmiausia sukurkite (arba iš naujo sukurkite) tą, nuo kurio tęsti.
- **Matmuo išėjo vertikalus.** Padėjote jį į šoną. Prieš padėdami įveskite `H`.
- **Pėdos ir coliai.** Pirmiausia nustatykite brėžinio ilgio formatą į {{ui:Architektūrinis}}, arba matmens {{ui:Formatas}} skydelyje {{ui:Ypatybės}}: žr. [Pėdos ir coliai matmenyse](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Skaičiai nėra tokiais vienetais, kokių norite.** Pasirinkite {{ui:Teksto vienetai}}: žr. [Matmenys mm, cm, m ar km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
