---
title: Padalinkite ekraną
summary: Rodykite brėžinį dviejose, trijose ar keturiose srityse, kiekvienoje su savu mastelio keitimu, įdėkite lapą šalia modelio ir atverkite kelis brėžinius greta.
keywords: padalinti, padalinti ekraną, sritys, vports, viewports, išdėstyti, išdėstyti greta, sukrauti, du brėžiniai, skirtukai, dokumentų skirtukai, palyginti, skyriklis, modelis ir lapas, keli brėžiniai, atidaryti brėžiniai
from: ee2f034b
---

## Ką sužinosite

Kaip žiūrėti vieną brėžinį keliose srityse vienu metu, kiekvienoje su savu mastelio keitimu, ir kaip atverti kelis brėžinius bei matyti juos greta.

## Padalinkite vieną brėžinį į sritis

1. Atverkite brėžinį arba nubraižykite kelias linijas ir apskritimus.
2. Atverkite {{ui:Vaizdas}} › {{ui:Daugiau}} ir pasirinkite {{ui:Padalyti greta}} (arba įveskite {{cmd:VPORTS}}, tada `2`, tada {{key:Enter}}).

Brėžinio sritis padalijama į dvi sritis, abi rodo tą patį vaizdą. Aktyvi sritis turi mėlyną rėmelį ir gauna kryžminį žymeklį.

3. Spustelėkite kitoje srityje. Ji tampa aktyvi. (Tas pirmasis spustelėjimas tik perjungia sritis; spustelėkite dar kartą, kad pasirinktumėte.)
4. Keiskite mastelį ratuku. Keičiasi tik ta sritis.
5. Vilkite liniją tarp sričių, kad padarytumėte vieną platesnę. {{key:Home}} sufokusuotame skyriklyje grąžina jį į vidurį.

{{cmd:VPORTS}} taip pat priima `3` (dvi sritys vienoje pusėje ir didelė kitoje: `L` arba `R`), `4` ir `SI`, kad vėl liktų viena sritis. Tada aktyvios srities vaizdas užpildo plotą. Lape {{cmd:VPORTS}} vietoj to prideda rodinį lape (kaip AutoCAD); ten įveskite {{cmd:SPLIT}} arba naudokite meniu Vaizdas.

## Braižykite iš vienos srities į kitą

1. Padalinkite greta ir priartinkite kiekvieną sritį prie skirtingo brėžinio kampo.
2. Įveskite `L` ir paspauskite {{key:Enter}}, tada spustelėkite pirmą tašką kairėje srityje.
3. Spustelėkite kartą dešinėje srityje, kad ji taptų aktyvi, tada spustelėkite antrą tašką ten.

Linija eina tarp dviejų vietų. Komanda tęsiasi, kai keičiate sritis, o gumos juosta rodoma kiekvienoje srityje.

## Modelis šalia lapo

1. Padalinkite greta.
2. Spustelėkite dešinę sritį, tada spustelėkite lapo skirtuką po brėžiniu.

Dešinėje srityje rodomas lapas; kairėje vis dar rodomas modelis. Kiekviena sritis išlaiko savo erdvę, todėl galite braižyti modelyje ir stebėti, kaip seka lapo rodinys.

## Keli brėžiniai viename lange

1. Atverkite brėžinį. Tada atverkite kitą (arba paspauskite {{ui:Naujas…}}).

Kiekvienas brėžinys atsidaro savame skirtuke virš brėžinio srities. Spustelėkite skirtuką, kad perjungtumėte; komandų eilutė, skydeliai ir anuliavimas seka brėžinį, į kurį perjungiate. {{key:Mod+C}} viename brėžinyje ir {{key:Mod+V}} kitame kopijuoja objektus tarp jų.

2. Spustelėkite {{ui:Išdėstyti atidarytus brėžinius greta}} (padalinimo piktograma skirtukų gale) arba šalia jos esančią sukrautą piktogramą.

Kiekvienoje srityje dabar rodomas vienas iš atidarytų brėžinių, iki keturių. Spustelėkite sritį, kad dirbtumėte su tuo brėžiniu.

3. Spustelėkite skirtuko {{ui:×}}, kad uždarytumėte tą brėžinį. Jei jame yra neįrašytų pakeitimų, CadCraft pirmiausia paklaus.

:::tip
Atidarant brėžinį, kai lange yra tik naujas, nepakeistas brėžinys, naudojamas tas skirtukas, o ne pridedamas naujas.
:::

## Slinkite ir keiskite mastelį kartu

Norėdami palyginti dvi redakcijas, išdėstykite jas greta, tada spustelėkite {{ui:Susieti sričių vaizdus}} (susiejimo piktograma skirtukų gale), arba pasirinkite ją {{ui:Vaizdas}} › {{ui:Daugiau}}, arba įveskite {{cmd:LINKVIEWS}} ir `ON`. Dabar slinkimas ar mastelio keitimas vienoje srityje perkelia kiekvieną sritį, rodančią modelį (ar kiekvieną sritį, rodančią lapą), į tą pačią vietą, todėl du brėžiniai lieka sulygiuoti. {{cmd:LINKVIEWS}} `OFF` leidžia kiekvienai sričiai vėl judėti savarankiškai.

## Dažnos klaidos

- **Mano spustelėjimas nieko nepadarė.** Jis padarė tą sritį aktyvią. Spustelėkite dar kartą, kad pasirinktumėte ar nubraižytumėte.
- **Ratukas priartino ne tą sritį.** Ratukas keičia mastelį sričiai po žymekliu ir ją aktyvina.
- **Sritys vėl tapo viena.** Atidarant brėžinį, rodoma taip, kaip jis buvo įrašytas; brėžinys, įrašytas be sričių, atsidaro vienoje.
- **Išeinant iš puslapio perspėja apie neįrašytus pakeitimus, kurių nematau.** Kitame skirtuke yra brėžinys su pakeitimais. Perjunkite į jį ir įrašykite arba išeikite neįrašę.
