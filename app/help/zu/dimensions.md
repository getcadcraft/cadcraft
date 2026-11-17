---
title: Linganisa ipulani
summary: Engeza izilinganiso ezimile, ezihleliwe, zengosi, zomsakazo nezobubanzi, uzixhumanise nge-Continue ne-Baseline, bese uguqula umbhalo.
keywords: isilinganiso, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, ukuxhumanisa, umugqa, ukunqamula, chaza, indawo, thola, ithuluzi, ukukala, mm, cm, m, km, amayunithi
from: 9ee65123
---

## Okuzokwenza

Igumbi elinezilinganiso: ububanzi nobude bonke, umugqa wezilinganiso eduze kodonga olulodwa, udonga oluthambekile, ikhoni egobile nengosi.

Ngaphambi kokuqala, funda [Setha usayizi wezilinganiso](topic:dimension-settings) uma umdwebo wakho mkhulu: umbhalo wezilinganiso ungu-2.5 wamayunithi omdwebo ubude ngokuzenzakalela, okuncane kakhulu emdwebweni okalwa ngamamillimitha. Kwezinyathelo ezilandelayo, thayipha `DIMSCALE`, cindezela {{key:Enter}}, thayipha `50` bese ucindezela {{key:Enter}} kuqala.

## Lapho kukhona amathuluzi wezilinganiso

Ngemenyu yesitayela se-CadCraft (ayiyo eyokuqala i-CadCraft iqala ngayo), amathuluzi wezilinganiso asethuluzini elingaphezulu komdwebo, eqenjini {{ui:Chaza}}: {{ui:Okomugqa}}, {{ui:Okuhleliwe}}, {{ui:Angle}}, {{ui:Radius}} no-{{ui:Diameter}}. Imenyu {{ui:Okuningi}} yalelo qembu inezinketho {{ui:Qhubeka nesilinganiso}} no-{{ui:Isilinganiso sesisekelo}}. Mamatheka ngaphezulu kwenkinobho ukuze ubone ukuthi yenzani.

- Nge-menyu yesitayela {{ui:Ukudweba kwakudala}} noma {{ui:Iribhoni}}, vula ithebhu ethi {{ui:Chaza}}: amathuluzi asephaneli yayo ethi {{ui:Izilinganiso}}. {{ui:Ukudweba kwakudala}} inayo futhi {{ui:Okomugqa}} kuthebhu ethi {{ui:Ikhaya}}, ngaphansi kwe-{{ui:Amazwana}}. Bona [Izimenyu, izinkinobho nembewu](topic:menus-keys-and-mouse).
- Noma thayipha umyalo emugqeni womyalo ngaphansi komdwebo bese ucindezela {{key:Enter}}: `DLI` (linear), `DAL` (aligned), `DAN` (angular), `DRA` (radius), `DDI` (diameter), `DCO` (continue), `DBA` (baseline).
- Esikrinini esincane ithuluzi libe yisigaba esisodwa: skrola ngokuhamba ukuze ufinyelele ku-{{ui:Chaza}}.

Uma ufuna ukubonisa ubude ngamamillimitha, amasentimitha, amamitha noma amakhilomitha, bona [Izilinganiso ngo-mm, cm, m noma km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Dweba okuzolinganiswa

1. Thayipha `PL` bese ucindezela {{key:Enter}}.
2. Thayipha `0,0` bese ucindezela {{key:Enter}}.
3. Thayipha `@6000,0` bese ucindezela {{key:Enter}}.
4. Thayipha `@1500<60` bese ucindezela {{key:Enter}}.
5. Thayipha `@0,2700` bese ucindezela {{key:Enter}}.
6. Thayipha `@-6750,0` bese ucindezela {{key:Enter}}.
7. Thayipha `C` bese ucindezela {{key:Enter}}. Umbandela uyavaleka.
8. Thayipha `C` bese ucindezela {{key:Enter}} ukuqala isongo.
9. Chofoza ngaphakathi egumbini, kude nezindonga, ukuze uthole isikhungo.
10. Thayipha `600` bese ucindezela {{key:Enter}}. Lona yikholomu.
11. Chofoza {{ui:Konke}}.

## Okomugqa: ngokuthe xaxa noma thwi

1. Thayipha `DLI` bese ucindezela {{key:Enter}}.
2. Ku-`Specify first extension line origin`, bamba ikhoni elingaphansi-kwesobunxele (Endpoint) bese uchofoza.
3. Ku-`Specify second extension line origin`, bamba ikhoni elingaphansi-kwesokudla bese uchofoza.
4. Nyakazisa i-crosshair ingaphansi kwegumbi. Ilinganiso liyalandela, lingqamile.
5. Chofoza ukubeka umugqa wesilinganiso.

Umlando uthi `Dimension text = 6000`.

Lapho ubeka umugqa kunquma indlela: ngaphansi noma ngaphezulu kunikeza ilinganiso ngokuthe xaxa, ngakwesobunxele noma ngakwesokudla kunikeza ngokuthe thwi. Ukuze uyiphoqe, thayipha `H` (ngokuthe xaxa), `V` (ngokuthe thwi) noma `R` (ejikelezwe, bese ingosi) ngaphambi kokuyibeka.

:::tip
Cindezela {{key:Enter}} kumbuzo wokuqala esikhundleni sokukhetha iphoyinti, bese uchofoza umugqa, i-arc, isongo noma isegimenti lepholayini. I-CadCraft ithatha iziphetho zombili ngawe.
:::

## Continue: umugqa wezilinganiso

{{cmd:DIMCONTINUE}} ({{ui:Chaza}} › {{ui:Okuningi}} › {{ui:Qhubeka nesilinganiso}}, noma `DCO`) iqhubeka kusukela kwilinganiso lokugcina elingokomugqa noma elihleliwe owelenzile, ilinganiso ngalinye elisha liqala lapho lowo wokugcina wagcina khona.

1. Thayipha `DLI` bese ucindezela {{key:Enter}}.
2. Thayipha `0,0` bese ucindezela {{key:Enter}} kwi-origin yokuqala.
3. Thayipha `2000,0` bese ucindezela {{key:Enter}} kwi-origin yesibili.
4. Chofoza ngaphansi kwegumbi ukuze uyibeke.
5. Thayipha `DCO` bese ucindezela {{key:Enter}}.
6. Thayipha `4500,0` bese ucindezela {{key:Enter}}. Elesibili lilandela kowokuqala, emugqeni ofanayo.
7. Bamba ikhoni elingaphansi-kwesokudla bese uchofoza. Elesithathu liqeda umugqa.
8. Cindezela {{key:Enter}} ukuphetha umyalo.

:::note
Lapha amaphoyinti athayiphwe njengezixhumanisi ngenhloso. Iphoyinti `@` libala kusukela kwiphoyinti lokugcina owulinikezile, futhi iphoyinti lokugcina liwuhlu lapho ubeka khona umugqa wesilinganiso owedlule, hhayi isiphetho sesilinganiso. Amaphoyinti aphelele, ama-snap noma ibanga eliqondile nge-{{ui:Ortho}} evuliwe kuphephile kakhulu emugqeni wezilinganiso.
:::

Thayipha `U` bese ucindezela {{key:Enter}} ukuthatha kabusha ilinganiso lokugcina emugqeni ngaphandle kokushiya umyalo.

## Baseline: izilinganiso ezimisiwe emugqeni munye

{{cmd:DIMBASELINE}} ({{ui:Chaza}} › {{ui:Okuningi}} › {{ui:Isilinganiso sesisekelo}}, noma `DBA`) ilinganisa wonke amalinganiso amasha kusukela ephoyinteni lokuqala lokugcina, bese imisa ngayinye ikude kancane.

1. Thayipha `DLI` bese ucindezela {{key:Enter}}.
2. Bamba ikhoni elingaphansi-kwesobunxele bese uchofoza.
3. Bamba ikhoni elingaphezulu-kwesobunxele bese uchofoza.
4. Nyakazisa i-crosshair ngakwesobunxele kwegumbi bese uchofoza. Kuvela ilinganiso elithi thwi.
5. Thayipha `DBA` bese ucindezela {{key:Enter}}.
6. Bamba isiphetho esiphezulu sodonga olungu-60 amadigri (Endpoint) bese uchofoza. Kuvela ilinganiso lesibili elithi thwi, lisekude kancane kunelokuqala.
7. Cindezela {{key:Enter}} ukuphetha.

## Aligned: ubude bangempela bomugqa othambekile

1. Thayipha `DAL` bese ucindezela {{key:Enter}}.
2. Cindezela {{key:Enter}} ukukhetha into.
3. Chofoza udonga olungu-60 amadigri.
4. Hambisa ngaphandle bese uchofoza ukuze ubeke.

Umbhalo uthi 1500: ubude bangempela, obalwe ngasodongeni.

## Irediyasi nedayamitha

1. Thayipha `DRA` bese ucindezela {{key:Enter}}.
2. Chofoza isongo lekholomu.
3. Nyakazisa i-crosshair. Umugqa oqondisayo usuka esikhungweni uye ku-crosshair.
4. Chofoza ukubeka umbhalo.

Umbhalo uthi `R600`. {{cmd:DIMDIAMETER}} (`DDI`) yenza okufanayo ngophawu ⌀ nedayamitha.

## Ingosi

Odongeni lapha kuyipholayini eyodwa, ngakho linganisa ikhoni ngephoyinti layo. (Phakathi kwemigqa emibili eyahlukene, ungachofoza imigqa.)

1. Thayipha `DAN` bese ucindezela {{key:Enter}}.
2. Ku-`Select arc, circle or line, or Enter for a vertex`, cindezela {{key:Enter}}.
3. Ku-`Specify angle vertex`, bamba ikhoni elingaphansi-kwesokudla bese uchofoza.
4. Ku-`Specify first angle endpoint`, bamba ikhoni elingaphansi-kwesobunxele bese uchofoza.
5. Ku-`Specify second angle endpoint`, bamba isiphetho esiphezulu sodonga olungu-60 amadigri bese uchofoza.
6. Nyakazisa i-crosshair ngaphakathi egumbini, eduze nekhoni, bese uchofoza.

Umbhalo uthi `120°`, ingosi engaphakathi yekhoni. Uma ubeka ngakolunye uhlangothi lwekhoni, ilinganiso lilinganisa ingosi kolunye uhlangothi. Chofoza i-arc ku-prompt yokuqala ukulinganisa ingosi eyithathayo, noma chofoza imigqa emibili ukulinganisa ingosi phakathi kwazo.

## Shintsha umbhalo

Ukuze ubhale okwakho, thayipha `T` bese ucindezela {{key:Enter}} ngaphambi kokubeka ilinganiso, bese uthayipha umbhalo. Emibhalweni yakho, `<>` imele inani elilinganisiwe: `<> TYP.` inikeza `6000 TYP.`. Cindezela {{key:Enter}} kumugqa ongenalutho ukugcina inani elilinganisiwe.

Ukushintsha ilinganiso elikhona:

1. Chofoza kulo.
2. Ephaneli elingakwesokudla, thayipha ku-{{ui:Umbhalo}}. Shiya kungenalutho ukuze kube inani elilinganisiwe.
3. Cindezela {{key:Enter}}.

## Izilinganiso zilandela ijometri

Ilinganiso likhumbula amaphoyinti alo. Donsa elinye lama-grip alo, noma hambisa, jikeleza noma shintsha usayizi walo kanye nezinto ilinganisa, futhi liyophinde lilinganise. Uma ululunga ijometri ngaphandle kokuhambisa ilinganiso, ilinganiso ngeke lilandele: ligcina amaphoyinti alo.

## Izinkinga ezivamile

- **Umbhalo nemicibisholo imincane kakhulu noma imikhulu kakhulu.** Setha isikali sonke: bona [Setha usayizi wezilinganiso](topic:dimension-settings).
- **"Pick a point inside the angle you want to measure."** Iphoyinti ochofoze ngalo ilinganiso lengosi lihlala emkhawulweni owodwa. Hambisa ngaphakathi engosini.
- **Continue iqale kwelinye ilinganiso.** Iqhubeka njalo kusukela kwilinganiso lokugcina elingokomugqa noma elihleliwe owelenzile kulesi sikhathi. Yenza (noma yenze kabusha) elifanele kuqala.
- **Ilinganiso livele lithi thwi.** Wayibeka ecaleni. Thayipha `H` ngaphambi kokuyibeka.
- **Amafiti namayintshi.** Setha ifomethi yobude yomdwebo ku-{{ui:Ezokwakha}} kuqala, noma i-{{ui:Ifomethi}} yelinganiso ku-{{ui:Izakhiwo}}: bona [Amafiti namayintshi ezilinganisweni](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Izinombolo azikho kuyunithi ofuna.** Khetha {{ui:Amayunithi emibhalo}}: bona [Izilinganiso ngo-mm, cm, m noma km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
