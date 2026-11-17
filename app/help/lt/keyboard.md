---
title: Klaviatūra ir pelė
summary: Kiekvienas klavišas, pelės veiksmas ir komandų eilutės klavišas CadCraft braižymo programoje, kaip kodas juos apdoroja.
keywords: klaviatūra, spartieji klavišai, klavišai, pelė, ratukas, slinkti, keisti mastelį, dešinysis spustelėjimas, vidurinis mygtukas, f3, f7, f8, ctrl, Command klavišas, kopijuoti, iškirpti, įklijuoti, dubliuoti, iškarpinė, pasirinkti viską
from: a2608a29
---

Spartieji klavišai rodomi jūsų kompiuteriui. Mac kompiuteryje visi žemiau pateikti {{key:Mod}} spartieji klavišai naudoja Command klavišą, o Control klavišas taip pat veikia. Kaip rašomi klavišai ir kaip naudoti F klavišus Mac kompiuteryje aprašyta [Klavišai, pelės ir jutikliniai kilimėliai](common:keys).

## Komandų rašymas

| Klavišas | Ką daro |
|---|---|
| Bet kuri raidė, skaitmuo ar simbolis | Patenka į komandų eilutę, kad ir kur būtų žymeklis, nebent skydelio laukelis turi žymeklį |
| {{key:Enter}} | Išsiunčia tai, ką įvedėte. Tuščioje eilutėje: pakartoja paskutinę komandą, baigia komandą, užbaigia pasirinkimą arba priima numatytąją reikšmę `<…>` |
| {{key:Space}} | Tas pats kaip {{key:Enter}}, išskyrus tada, kai CadCraft prašo teksto (tekstas, bloko pavadinimai, matmens tekstas); tada įveda tarpą |
| {{key:Esc}} | Atšaukia komandą. Jei komanda nevykdoma: atšaukia valdiklio perkėlimą ar pasirinkimo langą, tada panaikina pasirinkimą |
| {{key:Tab}} | Priima pasiūlytą komandą, rodomą komandų eilutės dešinėje. Jei nieko neįvesta ir žymeklis virš persidengiančių objektų: paryškina kitą objektą (spustelėkite, kad jį pasirinktumėte) |
| {{key:Up}} {{key:Down}} | Naršo po anksčiau įvestas eilutes (paskutines 100) |

## Braižymas ir redagavimas

| Klavišas | Ką daro |
|---|---|
| {{key:Mod+Z}} | Anuliuoja paskutinę komandą |
| {{key:Mod+Y}} arba {{key:Mod+Shift+Z}} | Perdaro |
| {{key:Mod+A}} | Pasirenka visus redaguojamus objektus atvirame skirtuke ({{cmd:SELECTALL}}). Jei komandų eilutėje įvedėte tekstą, pasirenkamas tas tekstas |
| {{key:Delete}} | Trina pažymėtus objektus ({{cmd:ERASE}}), nebent komandų eilutėje įvedėte tekstą |
| {{key:Backspace}} | Trina pažymėtus objektus, kai komandų eilutė neturi žymeklio; komandų eilutėje ištrina tai, ką įvedėte |
| {{key:Esc}} | Jei komanda nevykdoma: panaikina pasirinkimą ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Įrašo kopiją brėžinio formatu (DWG arba DXF) |
| {{key:Mod+Shift+S}} | Įrašyti kaip: pasirinkite DWG arba DXF, tada įrašykite kopiją |
| {{key:Mod+O}} | Atidaro DWG arba DXF |
| {{key:Mod+P}} | Spausdina į PDF |

Anuliavimas, perdarymas, visų pasirinkimas ir spausdinimas nieko nedaro, kol vykdoma komanda: pirmiausia paspauskite {{key:Esc}}.

## Kopijavimas, iškirpimas ir įklijavimas

| Klavišas | Ką daro |
|---|---|
| {{key:Mod+C}} | Nukopijuoja pasirinkimą į iškarpinę ({{cmd:COPYCLIP}}). Nieko nepasirinkus: CadCraft prašo objektų |
| {{key:Mod+X}} | Iškirpti: nukopijuoja pasirinkimą, tada jį ištrina ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Įklijuoti: kopija seka žymeklį; spustelėkite arba įveskite tašką, kad ją padėtumėte ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Įklijuoti vietoje: koordinatėse, iš kurių ji nukopijuota ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Dubliuoti: pasirinkimo kopija juda kartu su žymekliu; spustelėkite, kad padėtumėte; {{key:Esc}} nepalieka nieko ({{cmd:DUPLICATE}}) |

Tie patys veiksmai yra įrankių juostos grupėje {{ui:Redagavimas}} ({{ui:Kopijuoti}}, {{ui:Įklijuoti}}) ir jos meniu {{ui:Daugiau}}. Kol vykdoma kita komanda, ją baikite arba pirmiausia paspauskite {{key:Esc}}; dar kartą paspaudus {{key:Mod+V}} arba {{key:Mod+D}}, kai kopija seka žymeklį, procesas prasideda iš naujo. Kai komandų eilutėje įvedėte tekstą arba komanda prašo teksto, šie klavišai kopijuoja, iškerpa ir įklijuoja tą tekstą. Žr. [Kopijavimas, įklijavimas ir dubliavimas](topic:copy-paste).

## Perjungikliai

| Klavišas | Perjungiklis | Būsenos juostos mygtukas |
|---|---|---|
| {{key:F3}} | Objektų prilipimas įjungtas arba išjungtas | {{ui:Prilipimas}} |
| {{key:F7}} | Tinklelis įjungtas arba išjungtas | {{ui:Tinklelis}} |
| {{key:F8}} | Ortogonalus režimas įjungtas arba išjungtas | {{ui:Ortogonalus}} |
| {{key:F10}} | Poliarinis sekimas įjungtas arba išjungtas | {{ui:Poliarinis}} |
| {{key:F11}} | Objektų prilipimo sekimas įjungtas arba išjungtas | {{ui:Sekti}} |
| {{key:F12}} | Dinaminė įvestis įjungta arba išjungta | {{ui:Dyn}} |

:::mac
Mac kompiuteryje F3, F7 ir F8 paprastai yra Mission Control ir medijos klavišai. Laikykite nuspaustą **fn** kartu su jais arba įjunkite standartinius F klavišus Sistemos nustatymuose, kaip aprašyta [Klavišai, pelės ir jutikliniai kilimėliai](common:keys). Būsenos juostos mygtukai visada veikia.
:::

:::firefox
Firefox naršyklėje F7 taip pat gali paklausti, ar įjungti žymeklio naršymą. Pasirinkite **Ne** ir naudokite mygtuką {{ui:Tinklelis}}, jei klausimas kartojasi.
:::

## Žinynas

| Klavišas | Ką daro |
|---|---|
| {{key:F1}} | Atveria arba uždaro šį žinyną šalia brėžinio. Veikia net vykdant komandą ir niekada nepatenka į komandų eilutę. |
| {{key:Esc}} | Kai žymeklis yra žinyno skydelyje: išvalo paiešką arba uždaro skydelį |

Viršutinėje juostoje esantis mygtukas {{ui:Žinynas}} daro tą patį, ką {{key:F1}}. Kol rašote žinyno paieškos laukelyje, niekas nepatenka į komandų eilutę. Spustelėkite brėžinį, kad klavišai vėl atitektų CadCraft; skydelis lieka atviras šalia.

:::mac
Mac klaviatūroje laikykite **fn** ir paspauskite F1, arba spustelėkite {{ui:Žinynas}}.
:::

## Ekranas

| Klavišas | Ką daro |
|---|---|
| {{key:Ctrl+Shift+F}} | Keičia įprastą rodinį, visą ekraną ir visą ekraną su paslėptomis juostomis. Visuose kompiuteriuose, įskaitant Mac, naudojamas Control klavišas. |
| {{key:Left}} {{key:Right}} | Kai brėžinio apačioje pažymėtas skirtukas: ankstesnis arba kitas skirtukas |

Visame ekrane naršyklė gali panaudoti pirmąjį {{key:Esc}}, kad išeitų iš viso ekrano režimo. Dar kartą paspauskite {{key:Esc}}, kad atšauktumėte komandą.

## Dialogai

| Klavišas | Ką daro |
|---|---|
| {{key:Esc}} | Uždaro dialogą ({{ui:Spausdinti į PDF}}, arba klausimą, pavyzdžiui, „Neįrašyti pakeitimai“, kur tai reiškia {{ui:Atšaukti}}) |
| {{key:Tab}} | Persikelia tarp dialogo nustatymų ir mygtukų |

Kol atidarytas dialogas, brėžinio klavišai neveikia.

## Skydelio laukeliai

Dešiniojo ar kairiojo skydelio laukelyje:

| Klavišas | Ką daro |
|---|---|
| {{key:Enter}} | Pritaiko reikšmę ir palieka laukelį |
| {{key:Esc}} | Grąžina senąją reikšmę ir palieka laukelį |
| {{key:Tab}} | Pritaiko reikšmę ir pereina į kitą laukelį |

Kol laukelyje yra žymeklis, raidės rašomos į jį, o ne į komandų eilutę.

## Pelė

| Veiksmas | Ką daro |
|---|---|
| Spustelėjimas | Nurodo tašką, kai komanda to prašo; pasirenka objektą, kai prašo objektų; kitu atveju pasirenka objektą arba valdiklį |
| {{key:Shift}}+spustelėjimas | Pašalina pažymėtą objektą iš pasirinkimo (jei {{ui:Spustelėjimas ant objektų}} nustatytas į {{ui:Pakeičia pasirinkimą}} [Parametruose](topic:settings), prideda jį). Nurodant tašką: tam spustelėjimui ignoruoja objektų prilipimus |
| Spustelėjimas tuščioje vietoje, tada dar kartą spustelėjimas | Pasirinkimo langas: iš kairės į dešinę – langas, iš dešinės į kairę – kirtimas |
| Vilkimas tuščioje vietoje | Lasso: judant pirmiausia į dešinę – langas, į kairę – kirtimas; vilkimo metu {{key:Space}} keičia langą, kirtimą ir tvorą; {{key:Esc}} atsisako (LASSOMODE 0 arba Parametrai grąžina stačiakampį) |
| Vilkimas per dalis TRIM arba EXTEND | Apkerpa (arba pratęsia) kiekvieną kelią kertamą dalį; laikykite {{key:Shift}}, kad gautumėte kitą veiksmą |
| Vilkimas valdiklio | Perkelia valdiklį (arba spustelėkite valdiklį, tada spustelėkite, kur jis turi būti) |
| Dvigubas spustelėjimas tekste | Pažymi jį ir perkelia žymeklį į jo {{ui:Tekstas}} laukelį dešiniajame skydelyje |
| Dešinysis spustelėjimas | {{key:Enter}}. Vilkimo metu arba pasirinkimo lange: atšaukia jį |
| Vilkimas dešiniuoju mygtuku | Slenka |
| Ratukas | Priartina ir atitolina apie kryžminį žymeklį |
| Vilkimas ratuku (vidurinis mygtukas) | Slenka |
| Dvigubas spustelėjimas ratuku | Priartina iki viso brėžinio (ribų) |
| Nutempti DWG arba DXF į brėžinį | Atidaro jį |

Jutikliniam kilimėliui ar jutikliniam ekranui žr. [Pelė, jutiklinis kilimėlis ir jutiklinis ekranas](topic:mouse-trackpad-touch).

## Klavišai, kuriuos naršyklė palieka sau

{{key:Mod+N}}, {{key:Mod+W}} ir {{key:Mod+T}} visada priklauso naršyklei. CadCraft jų nenaudoja: naujam brėžiniui naudokite {{ui:Nauja}} arba įveskite `NEW`. CadCraft iškarpinė yra jos pačios: {{key:Mod+C}} ir {{key:Mod+V}} kopijuoja objektus tarp CadCraft brėžinių ir skirtukų, o ne į kitas programas ar iš jų.

:::mac
Jei {{key:Mod+Y}} atveria naršyklės istoriją, o ne perdaro, naudokite {{key:Mod+Shift+Z}} arba mygtuką {{ui:Perdaryti}}.
:::

## Kur yra Perkelti

Perkelti yra komanda `MOVE` (klavišas {{key:M}}): pasirinkite objektus, tada bazinį tašką ir antrą tašką arba įvestą atstumą. Taip pat yra `ALIGN` ir `DISTRIBUTE`. BimCraft tuos pačius pavadinimus naudoja tiems patiems darbams su statybos elementais, bet jo {{key:M}} yra Matuoti, o jo Perkelti yra {{key:Shift+M}}.
