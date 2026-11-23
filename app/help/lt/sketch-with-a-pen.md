---
title: Skicuokite rašikliu ir gaukite tikslią geometriją
summary: Piešiama laisvai rašikliu, pele ar pirštu, ir kiekvienas brūkšnys tampa švaria linija, apskritimu, lanku, stačiakampiu ar polilinija, kai pakeliate rašiklį, prisegta prie to, kas jau nubrėžta, su dydžiu, paruoštu perrašyti.
keywords: skicavimas, rašiklis, stilius, laisvas piešimas, pirštas, išvalyti, tikslus, prilipimas, SKETCHLIVE, SKETCHFIX, dydis, perrašyti, spaudimas, linijos storis, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Paleiskite {{cmd:SKETCHLIVE}} (arba pasirinkite **Braižymas › Daugiau › Skicuoti rašikliu**) ir nubrėžkite brūkšnį paspausdami ir vilkdami. Kai pakeliate rašiklį, CadCraft supranta, ką norėjote, ir įdeda į brėžinį:

| Jūsų brūkšnys | Ką gaunate |
|---|---|
| Beveik tiesus | Linija. Beveik horizontali ar vertikali linija tampa tiksliai horizontali ar vertikali. |
| Uždaras ir apvalus | Apskritimas |
| Dalis apvalios formos | Lankas |
| Uždaras su keturiais statiais kampais | Stačiakampis |
| Bet kas kita | Polilinija su stačiais kraštais |

Brūkšnio galai prisitraukia prie artimiausio jau nubrėžto dalyko galo, todėl nubrėžta siena susijungia su šalia esančia siena.

## Perrašyti dydį

Po kiekvieno brūkšnio komandų eilutė rodo jo dydį (linijos **ilgį**, apskritimo ar lanko **spindulį**, stačiakampio **plotį**) kaip numatytąjį. Paspauskite {{key:Enter}}, kad jį paliktumėte, arba įveskite skaičių ar ilgį, pavyzdžiui `12'6"`, kad jį pakeistumėte. Linija išlaiko pirmąjį galą, apskritimas – centrą, stačiakampis – pirmąjį kampą.

Paspauskite {{key:Enter}} tuščiame raginime, kad baigtumėte, arba įveskite `U`, kad atšauktumėte paskutinį brūkšnį. Visa sesija yra vienas atšaukimo žingsnis.

## Išvalyti kelis brūkšnius iš karto

{{cmd:SKETCHFIX}} renka brūkšnius ir padaro juos visus tikslius, kai paspaudžiate {{key:Enter}}; tai tinka greitai nubrėžtam grubiam išdėstymui.

:::note
Viskas apskaičiuojama jūsų kompiuteryje pagal taisykles, be modelio, ir niekas niekur neišsiunčiama.
:::

## Spaudimas nustato linijos storį

Kur rašiklis įjungtas programoms (Parametrai › Bendra › Įvesties įrenginiai › Rašiklis), brūkšnys, nubrėžtas rašikliu, perneša visus rašiklio duotus taškus ir jo spaudimą. Lengvas brūkšnys padaro plonesnį objektą, tvirtas – storesnį: vidutinis brūkšnio spaudimas parenka 0,18, 0,25, 0,35 arba 0,50 mm, ir komandų eilutė nurodo, kurį. Brūkšniai, nubrėžti pele ar pirštu, gauna dabartinį linijos storį kaip anksčiau. {{cmd:PENPRESSURE}} tai išjungia (arba vėl įjungia); pasirinkimas išsaugomas šioje naršyklėje.
