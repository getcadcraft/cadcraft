---
title: Prilipimas prie taškų ant objektų
summary: Naudokite objektų fiksavimus, Ortogonalų režimą ir tinklelį, kad pele pasirinktumėte tikslius galinius taškus, vidurio taškus, centrus ir susikirtimus.
keywords: osnap, objektų fiksavimas, galinis taškas, vidurio taškas, centras, susikirtimas, statmuo, kvadrantas, artimiausias, mazgas, įterpimas, ortogonalus, tinklelis, f3, f8, f7, poliarinis sekimas, poliarinis, polarang, objektų fiksavimo sekimas, otrack, sekimas, f10, f11
from: 3cf17f94
---

## Ką sukursite

Stačiakampis su dviem įstrižainėmis, apskritimas, centruotas ten, kur jos susikerta, ir linija nuo vienos kraštinės vidurio iki apskritimo. Kiekvienas taškas pasirenkamas pele, ir kiekvienas taškas yra tikslus.

## Kaip veikia prilipimas

Kol komanda prašo taško, CadCraft ieško prilipimo taškų maždaug 10 pikselių atstumu nuo kryžiuko. Kai randa, pasirodo žymeklis ir etiketė („Galinis taškas“, „Susikirtimas“), o paspaudimas nukrenta **tiksliai** ant to taško, o ne ten, kur yra kryžiukas.

Prilipimai įjungti, kai būsenos juostoje {{ui:Prilipimas}} yra nuspaustas. {{key:F3}} jį įjungia ir išjungia.

Galite naudoti šiuos fiksavimus:

| Fiksavimas | Prisiliečia prie |
|---|---|
| Galinis taškas | Linijų, lankų ir polilinijų segmentų galai |
| Vidurio taškas | Linijų, lankų ir polilinijų segmentų vidurys |
| Centras | Apskritimų ir lankų centras bei polilinijų lankų segmentų centras |
| Kvadrantas | Apskritimų ir lankų 0, 90, 180 ir 270 laipsnių taškai |
| Susikirtimas | Ten, kur kertasi du objektai |
| Statmuo | Taškas objekte, statmenas paskutiniam taškui (reikia bazinio taško) |
| Liestinė | Taškas apskritime ar lanke, kur linija nuo paskutinio taško tik paliečia jį. Kai paskutinio taško dar nėra (pirmas linijos taškas), žymeklis rodo „atidėta“: liečiamasis taškas apskaičiuojamas, kai žinomas kitas taškas, todėl linija nuo Liestinės iki Liestinės liečia abu apskritimus |
| Artimiausias | Artimiausias taškas bet kuriame objekte |
| Mazgas | Taškų objektai |
| Įterpimas | Teksto ir blokų nuorodų įterpimo taškas |

Visi, išskyrus Liestinę ir Artimiausią, įjungti pagal numatytuosius. Artimiausias dažnai laimi, kai norite kito taško; įjunkite Liestinę, kai jos prireikia.

## Pasirinkite fiksavimus

1. Spustelėkite mažą rodyklę šalia {{ui:Prilipimas}} būsenos juostoje. Atsidaro {{ui:Objektų fiksavimai}} sąrašas.
2. Pažymėkite arba nuimkite fiksavimus. Pakeitimai taikomi iš karto.
3. Spustelėkite rodyklę dar kartą, kad uždarytumėte sąrašą.

CadCraft įsimena jūsų pasirinkimą ir {{ui:Tinklelis}}, {{ui:Ortogonalus}} bei {{ui:Prilipimas}} nustatymus šioje naršyklėje.

## Žingsniai

1. Įveskite `REC` ir paspauskite {{key:Enter}}.
2. Įveskite `0,0` ir paspauskite {{key:Enter}}.
3. Įveskite `@4000,3000` ir paspauskite {{key:Enter}}. Atsiranda stačiakampis.
4. Spustelėkite {{ui:Visas brėžinys}}.
5. Įveskite `L` ir paspauskite {{key:Enter}}.
6. Perkelkite kryžiuką į apatinį kairįjį kampą. Žymeklyje rodoma „Galinis taškas“. Spustelėkite.
7. Perkelkite į viršutinį dešinįjį kampą, kol pasirodys „Galinis taškas“. Spustelėkite.
8. Paspauskite {{key:Enter}}, kad užbaigtumėte liniją.
9. Dar kartą paspauskite {{key:Enter}}, kad pakartotumėte {{cmd:LINE}}, ir tą pačią įstrižainę nubrėžkite iš apatinio dešiniojo kampo į viršutinį kairįjį tuo pačiu būdu.
10. Įveskite `C` ir paspauskite {{key:Enter}}, kad pradėtumėte apskritimą.
11. Perkelkite kryžiuką į vietą, kur kertasi įstrižainės. Žymeklyje rodoma „Susikirtimas“. Spustelėkite.
12. Įveskite `800` ir paspauskite {{key:Enter}}.

Turėtumėte matyti apskritimą, tiksliai centruotą ties susikirtimu.

13. Įveskite `L` ir paspauskite {{key:Enter}}.
14. Perkelkite į stačiakampio kairės kraštinės vidurį, kol pasirodys „Vidurio taškas“. Spustelėkite.
15. Perkelkite kryžiuką ant apskritimo, jo kairėje pusėje. Žymeklyje rodoma „Statmuo“ arba „Kvadrantas“; čia abu yra tas pats taškas. Spustelėkite.
16. Paspauskite {{key:Enter}}.

Nauja linija eina nuo kairės kraštinės vidurio ir sustoja tiksliai ant apskritimo.

## Praleiskite fiksavimą vienam paspaudimui

Laikykite {{key:Shift}}, kai spustelite. Tam paspaudimui objektų fiksavimai ignoruojami, o taškas nukrenta tiksliai ten, kur yra kryžiukas (arba išilgai Ortogonalaus krypties, jei jis įjungtas).

## Ortogonalus

{{ui:Ortogonalus}} ({{key:F8}}) laiko kitą tašką tiesiai skersai arba tiesiai aukštyn ir žemyn nuo bazinio taško. Jis taikomas paspaudimams ir tiesioginiam atstumo įvedimui (vienas skaičius, įvestas prie užklausos). Objektų fiksavimai laimi prieš Ortogonalų: jei rodomas fiksavimo žymeklis, paspaudimas eina fiksavimui.

## Poliarinis sekimas

{{ui:Poliarinis}} ({{key:F10}}) yra Ortogonalus daugiau kampų. Kai komanda turi bazinį tašką (paskutinį linijos tašką, perkėlimo bazinį tašką), rodyklė išsilygina, kai priartėja prie spindulio iš jo kampu, kuris yra poliarinio žingsnio kartotinis: rodoma punktyrinė linija, o šalia kryžiuko – etiketė `Polar: 1200 < 30°`. Spustelėkite, kad naudotumėte tą tašką, arba įveskite atstumą: `1200` nueina tiksliai 1200 išilgai spindulio.

Žingsnis yra 90° tol, kol jį pakeisite: įveskite {{cmd:POLARANG}}, paspauskite {{key:Enter}} ir įveskite `30` (arba 45, 22.5, 15 …). Poliarinis ir Ortogonalus vienas kito neapima: įjungus vieną, kitas išjungiamas.

## Objektų fiksavimo sekimas

{{ui:Sekti}} ({{key:F11}}) lygiuoja žymeklį su fiksavimo taškais, ant kurių ilgesniam laikui užsilikote, todėl galite pasirinkti tašką vienu lygiu su vienu kampu ir virš kito, nebraižydami pagalbinių linijų.

1. Įjunkite {{ui:Prilipimas}} ir {{ui:Sekti}}, ir pradėkite komandą, kuri prašo taško (`L`).
2. Užlaikykite žymeklį ant fiksavimo taško, pavyzdžiui kampo, maždaug pusę sekundės, nespustelėdami. Mažas kryžiukas jį pažymi: jis paimtas. Vėl užlaikykite ant jo, kad jį atleistumėte.
3. Perkelkite žymeklį tiesiai nuo jo, horizontaliai arba vertikaliai. Punktyrinė linija seka žymeklį, o etiketėje rodoma `Track: 600 < 90°`. Spustelėkite arba įveskite atstumą.
4. Paimkite antrą tašką ir pasukite į vietą, kur vertikali linija per vieną susikerta su horizontalia per kitą: žymeklis prisikabina prie to susikirtimo (`Track: where two lines meet`).

Jei kartu įjungtas {{ui:Poliarinis}}, paimti taškai seka kiekvienu poliariniu kampu. Iki septynių taškų išlaikoma tol, kol baigiasi komanda. {{key:Shift}} išjungia sekimą vienam paspaudimui, kaip ir fiksavimus.

## Tinklelis

{{ui:Tinklelis}} ({{key:F7}}) rodo tinklelį už brėžinio, kas penkta linija storesnė; tarpas keičiasi priartinant. Tai tik gairė, kol neįjungsite {{ui:Prisegimas prie tinklelio}} ({{key:F9}}): tada paspaudimai nukrenta į artimiausią tinklelio tašką, nebent objekto fiksavimas pirmiau pasiima tašką.

## Funkciniai klavišai jūsų kompiuteryje

{{key:F9}} yra Prisegimas prie tinklelio, {{key:F10}} – Poliarinis, o {{key:F11}} – Sekti.

:::mac
Mac kompiuteryje F3, F7, F8 ir F9 dažniausiai valdo Mission Control ir mediją. Laikykite **fn** kartu su klavišu arba įjunkite standartinius funkcinius klavišus, kaip aprašyta [Klavišai, pelės ir jutikliniai kilimėliai](common:keys). Būsenos juostos mygtukai visada veikia.
:::

:::firefox
Firefox naršyklėje F7 taip pat yra klavišas žymeklio naršymui (caret browsing). Jei Firefox klausia, ar įjungti žymeklio naršymą, pasirinkite **Ne**. Naudokite {{ui:Tinklelis}} mygtuką, jei klausimas kartojasi.
:::

:::touch
Jutikliniame ekrane nėra užvedimo, todėl fiksavimo žymeklis rodomas tik ten, kur liečia pirštas. Priartinkite arčiau mažiems taikiniams arba įveskite koordinates.
:::

## Dažnos klaidos

- **Paspaudimas pateko į neteisingą tašką.** Prieš spustelėdami pažiūrėkite į žymeklio etiketę: „Galinis taškas“ laimi prieš „Vidurio taškas“, jei abu arti. Priartinkite arba nuimkite fiksavimus, kurių nereikia.
- **Žymeklis nerodomas.** {{ui:Prilipimas}} išjungtas, arba norimas fiksavimas nepažymėtas, arba objektas yra sluoksnyje, kuris išjungtas ar įšaldytas.
- **Fiksavimai pagauna ne tą, ką norite, užimtame brėžinyje.** Priartinkite. Fiksavimo atstumas matuojamas ekrano pikseliais, todėl priartinus brėžinyje jis tampa mažesnis.
- **Tikėtasi, kad Shift duos tiesią liniją.** CadCraft Shift vienam paspaudimui išjungia fiksavimus. Tiesioms linijoms naudokite {{ui:Ortogonalus}}.
- **Tikėtasi, kad taškai pateks į tinklelio taškus.** Įjunkite {{ui:Prisegimas prie tinklelio}} ({{key:F9}}) arba įveskite koordinates apvalioms reikšmėms.
