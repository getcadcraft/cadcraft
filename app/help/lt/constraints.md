---
title: Brėžinio apribojimų taikymas
summary: Laikykite linijas horizontalias, galus sujungtus ir matmenis fiksuotus geometriniais ir matmeniniais apribojimais, o brėžinys seks, kai pakeisite matmenį.
keywords: apribojimas, apribojimai, parametrinis, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, laisvės laipsniai, visiškai apribotas
from: f8f21fa4
---

## Ką sukursite

Plokštę, kurios plotį keičiate vienoje vietoje: jos kraštinės lieka statmenos, vienas kampas lieka savo vietoje, o aukštis visada lygus pusei pločio.

Apribojimai veikia linijoms, polilinijoms, apskritimams, lankams ir taškams skirtuke {{ui:Modelis}}. Kiekvienas pridėtas apribojimas yra vienas anuliavimo žingsnis.

## Nubrėžkite ir apribokite kontūrą

1. Įveskite `REC` ir paspauskite {{key:Enter}}. Įveskite `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Įveskite `AUTOCONSTRAIN` ir paspauskite {{key:Enter}}. Įveskite `ALL`, {{key:Enter}}, tada dar kartą {{key:Enter}}.

   Istorijoje rašoma „Pritaikyta 4 apribojimai“. Šalia kraštinių atsiranda mažos dėžutės su **H** ir **V**: tai yra apribojimų juostos.
3. Įveskite `GCFIX` ir paspauskite {{key:Enter}}. Spustelėkite netoli apatinio kairiojo kampo. Atsiranda dėžutė su ⊕: tas kampas lieka savo vietoje.

`AUTOCONSTRAIN` prideda sutapimo apribojimus, kur galai beveik susiliečia, o horizontalius ar vertikalius – kur linijos beveik horizontalios arba vertikalios. Jo užklausoje įveskite `S`, kad pakeistumėte, koks artimas turi būti (pradžioje 0,05 brėžinio vieneto ir 1°).

## Pridėkite matmenis

1. Įveskite `DCHORIZONTAL` ir paspauskite {{key:Enter}}.
2. Spustelėkite netoli apatinio kairiojo kampo, tada netoli apatinio dešiniojo.
3. Spustelėkite po stačiakampiu, kad nurodytumėte matmens liniją.
4. Užklausoje rodoma `Dimension text <d1=100>`. Įveskite `width=120` ir paspauskite {{key:Enter}}.

   Stačiakampis dabar 120 pločio, o etiketėje rašoma `width=120`.
5. Įveskite `DCVERTICAL`, paspauskite {{key:Enter}}, įveskite `O`, paspauskite {{key:Enter}}, tada spustelėkite dešinę kraštinę.
6. Spustelėkite į dešinę nuo jos, įveskite `width/2` ir paspauskite {{key:Enter}}.

   Aukštis yra 60. Etiketėje rašoma `fx: d1=width/2`: ją valdo išraiška.

Istorijoje dabar rašoma, kad kontūras visiškai apribotas. Norėdami pakeisti jo dydį, pakeiskite `width` (žr. [Parametrų ir lygčių naudojimas](topic:parameters)) arba du kartus spustelėkite etiketę `width=120`, įveskite naują reikšmę ir pasirinkite {{ui:Taikyti}}.

## Apribotų objektų perkėlimas

Perkėlimas, pasukimas, mastelio keitimas, rankenėlės ir Ypatybių skydelis visi išlaiko apribojimus: perkeltas objektas išlieka fiksuotas, o likusieji seka paskui. Kai apribojimai negali sekti, redagavimas neatliekamas, o istorijoje paaiškinama kodėl, pavyzdžiui: „Neatlikta: apribojimai laiko tą objektą toje vietoje“. Naikinant objektą kartu pašalinami ir jo apribojimai.

## Apribotų objektų veidrodinis atspindys ir apkirpimas

- {{cmd:MIRROR}} nukopijuoja apribojimus tarp veidrodiškai atspindimų objektų į kopijas. Kraštinės (kuria kryptimi liestinė liečia, iš kurios pusės matuojamas atstumas) apskaičiuojamos iš naujo veidrodinei kopijai, o nukopijuoti matmenys gauna savo pavadinimus, kaip ir įklijavimo atveju. Su `Erase source objects` `Y` apribojimai lieka ant veidrodinių objektų. Istorijoje rašoma, kiek jų perėjo.
- {{cmd:TRIM}} išlaiko linijos ar lanko apribojimus, kurie lieka: galo apribojimas atitenka daliai, kuri dar turi tą galą; krypties taisyklė ({{ui:Horizontalus}}, {{ui:Vertikalus}}, {{ui:Lygiagretus}}, {{ui:Statmenas}}) galioja visoms dalims; matmuo tarp dviejų išorinių galų toliau matuoja juos. Apribojimai, laikę nupjautą dalį, arba ilgis, kurį pjūvis pakeitė ({{ui:Lygūs}}, lanko kampas), dingsta. Apkirptas apskritimas išlaiko centro ir spindulio apribojimus. Apkirptos polilinijos praranda savo apribojimus.

## Apribojimai

| Komanda | Išlaiko |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | liniją ar atkarpą horizontalią arba vertikalią (`2P`: du taškus horizontaliai arba vertikaliai) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | dvi linijas lygiagrečias, statmenas arba vienoje tiesėje |
| {{cmd:GCCOINCIDENT}} | du taškus sujungtus; `O`: tašką ant linijos, apskritimo ar lanko |
| {{cmd:GCTANGENT}} | liniją ir apskritimą ar lanką arba du tokius, besiliečiančius |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | du apskritimus ar lankus su vienu centru; du ilgius ar du spindulius lygius |
| {{cmd:GCSYMMETRIC}} | du taškus, linijas ar apskritimus, simetriškai atspindėtus per liniją |
| {{cmd:GCFIX}} | tašką (spustelėkite netoli jo) arba visą objektą (`O`) toje vietoje |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | atstumą |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | spindulį, skersmenį, kampą tarp dviejų linijų arba lanko kampą |

{{cmd:GEOMCONSTRAINT}} ir {{cmd:DIMCONSTRAINT}} klausia, kurį apribojimą norite; {{ui:Apriboti}} ir {{ui:Matmuo}} grupėje {{ui:Parametrinis}} juos paleidžia, o {{ui:Daugiau}} ten išvardija kiekvieną. Ten, kur spustelite, lemia, kas parenkama: spustelėjimas netoli galo, vidurio ar centro paima tą tašką; spustelėjimas ant polilinijos paima po juo esantį segmentą. Pirmasis objektas lieka, o antrasis perkeliamas, kad susijungtų su juo.

Apribojimas, kuris prieštarauja kitiems arba nieko nepridėda, nes kiti jau jį numano, atmetamas su pranešimu ir niekas nejuda.

## Peržiūra, pasirinkimas ir šalinimas

- Spustelėkite dėžutę apribojimų juostoje (arba sutapimo kvadratėlį, arba matmens etiketę), kad pasirinktumėte tą apribojimą; istorijoje jis įvardijamas. Paspauskite {{key:Delete}}, kad jį pašalintumėte.
- {{cmd:DELCONSTRAINT}} pašalina visus apribojimus iš pasirinktų objektų.
- {{cmd:CONSTRAINTBAR}}: `S` rodo visas juostas, `H` jas slepia; pirmiausia pasirinkite objektus, kad rodytumėte ar slėptumėte jų juostas. {{ui:Daugiau}} turi {{ui:Rodyti apribojimų juostas}} ir {{ui:Slėpti apribojimų juostas}}.
- {{cmd:DCDISPLAY}} rodo arba slepia matmeninius apribojimus. Jie niekada nespausdinami.
- {{cmd:DCCONVERT}} paverčia matmenis, nubrėžtus ant linijų, apskritimų ir lankų, matmeniniais apribojimais.

:::note
Jei esate naudoję AutoCAD parametrinį braižymą, komandų pavadinimai ir užklausos yra tokie patys. Apribojimai ir parametrai išsaugomi DWG ir DXF failuose forma, kurios kitos programos nepaiso; žr. [Failai](topic:files#constraints-in-files).
:::
