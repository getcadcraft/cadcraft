---
title: Braižymas koordinatėmis
summary: Nubrėžkite tikslų grindų kontūrą įvesdami absoliučias, santykines ir poliarines koordinates bei tiesioginį atstumo įvedimą.
keywords: line, pline, polilinija, koordinatės, santykinės, poliarinės, absoliučios, tiesioginis atstumas, @, taškų įvedimas, tikslus, ortogonalus
from: 19e82350
---

## Ką sukursite

L formos kambario kontūrą, 6000 × 4500 su 2000 × 1500 išpjova, nubrėžtą tiksliai, ir sieną 30 laipsnių kampu. Panaudosite visus keturis taško įvedimo būdus. Dirbkite milimetrais: vienas brėžinio vienetas reiškia vieną milimetrą.

Visų formatų trumpas žinynas pateiktas skyriuje [Koordinačių ir atstumų įvedimas](topic:coordinate-entry).

## Prieš pradėdami

1. Atidarykite CadCraft. Jei brėžinys atidarytas, pirmiausia spustelėkite {{ui:Nauja}}.
2. Paspauskite {{key:Esc}}, kad nieko nebūtų pažymėta. Dešiniajame skydelyje rodomi {{ui:Dabartiniai nustatymai}}.
3. Nustatykite {{ui:Vienetai}} į {{ui:Milimetrai}}. Nieko nekeičiama; tai tik nurodo lapams ir spausdinimui, ką reiškia vienetas.

## Absoliučios koordinatės: pirmas taškas

Absoliuti koordinatė yra padėtis, matuojama nuo pradžios taško, įvedama kaip `x,y`.

1. Įveskite `L` ir paspauskite {{key:Enter}}. Užklausa rodo `Specify first point:`.
2. Įveskite `0,0` ir paspauskite {{key:Enter}}.

Linija dabar tempiasi nuo pradžios taško iki kryžiuko. Būsenos juostoje rodomi atstumas ir kampas nuo pradžios taško, kol judate.

## Santykinės koordinatės: @dx,dy

Santykinė koordinatė įvedama kaip `@dx,dy`: kiek toli į dešinę, kiek aukštyn, nuo paskutinio taško. Neigiami skaičiai eina į kairę arba žemyn.

3. Įveskite `@6000,0` ir paspauskite {{key:Enter}}. 6000 linija eina į dešinę.
4. Įveskite `@0,3000` ir paspauskite {{key:Enter}}.
5. Įveskite `@-2000,0` ir paspauskite {{key:Enter}}.
6. Įveskite `@0,1500` ir paspauskite {{key:Enter}}.

Turėtumėte matyti keturias sujungtas linijas, kylančias aukštyn kambario dešiniąja puse.

## Tiesioginis atstumo įvedimas: vienas skaičius

Kai įvedate vieną skaičių, CadCraft nueina tą atstumą kryžiuko kryptimi. Įjunkite {{ui:Ortogonalus}}, kad kryptis prisitaikytų prie horizontalios arba vertikalios.

7. Paspauskite {{key:F8}} arba spustelėkite {{ui:Ortogonalus}} būsenos juostoje. Būsenos juostoje rodoma „Ortogonalus įjungtas“.
8. Perkelkite kryžiuką į kairę nuo paskutinio taško. Gumos juosta lieka horizontali.
9. Įveskite `4000` ir paspauskite {{key:Enter}}. Linija eina 4000 į kairę.
10. Perkelkite kryžiuką žemiau paskutinio taško.
11. Įveskite `4500` ir paspauskite {{key:Enter}}. Grįžtate į pradžios tašką.
12. Tuščioje užklausoje paspauskite {{key:Enter}}, kad užbaigtumėte komandą.

:::mac
F8 gali valdyti medijos atkūrimą Mac klaviatūroje. Laikykite **fn** ir paspauskite F8, arba spustelėkite {{ui:Ortogonalus}}. Žr. [Klavišai, pelės ir jutikliniai kilimėliai](common:keys).
:::

Dabar turite uždarą L formos kontūrą, sudarytą iš šešių atskirų linijų.

13. Spustelėkite {{ui:Visas brėžinys}}, kad pamatytumėte visą kontūrą.

## Poliarinės koordinatės: @atstumas<kampas

Poliarinė koordinatė įvedama kaip `@atstumas<kampas`. Kampai matuojami laipsniais, prieš laikrodžio rodyklę nuo teigiamos X krypties: 0 yra dešinėje, 90 – viršuje, 180 – kairėje, 270 (arba -90) – apačioje.

14. Įveskite `L` ir paspauskite {{key:Enter}}.
15. Įveskite `6000,0` ir paspauskite {{key:Enter}}, kad pradėtumėte apatiniame dešiniajame kampe.
16. Įveskite `@2500<-30` ir paspauskite {{key:Enter}}. 2500 linija išeina iš kampo, krypdama žemyn ir į dešinę 30 laipsnių kampu žemiau horizontalės.
17. Paspauskite {{key:Enter}}, kad užbaigtumėte komandą.

Poliarinė koordinatė be `@`, pavyzdžiui `2500<30`, matuojama nuo pradžios taško, o ne nuo paskutinio taško.

## Tas pats kontūras kaip viena polilinija

Šešios atskiros linijos tinka daugeliui darbų, bet polilinija yra vienas objektas: ją galima perkelti, išmatuoti ir pažymėti kaip visumą. Naudokite {{cmd:PLINE}} su tuo pačiu įvedimu.

1. Įveskite `PL` ir paspauskite {{key:Enter}}.
2. Įveskite `0,-6000` ir paspauskite {{key:Enter}}, kad pradėtumėte žemiau pirmojo kontūro.
3. Įveskite `@6000,0`, tada paspauskite {{key:Enter}}.
4. Įveskite `@0,3000`, tada paspauskite {{key:Enter}}.
5. Įveskite `@-2000,0`, tada paspauskite {{key:Enter}}.
6. Įveskite `@0,1500`, tada paspauskite {{key:Enter}}.
7. Įveskite `@-4000,0`, tada paspauskite {{key:Enter}}.
8. Įveskite `C` ir paspauskite {{key:Enter}}. Polilinija uždaroma ir komanda baigiasi.
9. Spustelėkite naująjį kontūrą. Dešiniajame skydelyje rodoma „Polilinija“, jos {{ui:Viršūnės}}, {{ui:Ilgis}} ir, kadangi ji uždara, jos {{ui:Plotas}}.

Plotas turėtų rodyti 24000000 (kvadratinių milimetrų, tai yra 24 kvadratiniai metrai).

## Parinktys braižant

- {{cmd:LINE}} ir {{cmd:PLINE}} komandose įveskite `U` ir paspauskite {{key:Enter}}, kad atšauktumėte paskutinį segmentą, neišeidami iš komandos.
- {{cmd:LINE}} komandoje `C` uždaro kontūrą iki pirmojo taško, kai yra bent du segmentai.
- {{cmd:PLINE}} komandoje `A` perjungia į lankų segmentus (kiekvienas lankas sklandžiai tęsia ankstesnį segmentą), o `L` grąžina į linijas. Lankų režime uždarymo parinktis yra `CL`.
- Paspaudę {{key:Enter}} prie `Specify first point:` {{cmd:LINE}} komandoje pradedate nuo paskutinio jūsų nurodyto taško, todėl galite tęsti ten, kur baigėte.

## Dažnos klaidos

- **Įvedus `6000,0`, kai norėjote `@6000,0`.** Be `@` taškas matuojamas nuo pradžios taško, o ne nuo paskutinio, todėl linija nukrypsta į netikėtą vietą. CadCraft `x,y` visada yra absoliutus. Atsiimkite paspausdami `U` ir {{key:Enter}}.
- **Kablelis įvestas kaip dešimtainis skyriklis.** Dešimtainiai skaičiai rašomi su tašku: `1250.5`. Kablelis visada atskiria X nuo Y.
- **Tiesioginis atstumas nukrypo į kitą pusę.** Vienas skaičius eina kryžiuko kryptimi. Prieš paspausdami {{key:Enter}}, perkelkite kryžiuką į norimą pusę, o tiesioms linijoms įjunkite {{ui:Ortogonalus}}.
- **„Point or option keyword required.“** CadCraft nesuprato, ką įvedėte. Patikrinkite, ar skaičiuje nėra tarpų ir ar nepraleistas kablelis, ir įveskite dar kartą.
- **Pėdos ir coliai.** CadCraft skaito tik paprastus skaičius. Įveskite `150` 12'-6" atstumui colių brėžinyje arba `12.5` pėdų brėžinyje.
