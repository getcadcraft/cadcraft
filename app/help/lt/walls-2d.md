---
title: Braižykite 2D sienas, duris ir langus
summary: Braižykite sienas kaip polilinijas, sujunkite jas švariai ir įdėkite duris bei langus, kurie juda kartu su siena. Viskas 2D, be 3D modelio.
keywords: siena, sienos, WALL, WA, durys, DOOR, DR, langas, WINDOW, WN, DELOPENING, išmani siena, aukšto planas, atsidarymas, vyris, anga
from: 45845d49
---

Sienos čia yra 2D braižymo objektai. Jos nekuria 3D modelio, todėl planas lieka toks pat lengvas kaip linijinis brėžinys. Pastatų modeliui naudokite BimCraft.

## Braižykite sienas

Įveskite `WALL` (`WA`) arba pasirinkite {{ui:Siena}} {{ui:Daugiau}} meniu grupėje {{ui:Braižymas}}, tada spustelėkite taškus, kaip darytumėte su polilinija. Baigti paspauskite {{key:Enter}}, arba įveskite `C`, kad uždarytumėte patalpą.

- Įveskite `T`, kad nustatytumėte storį.
- Įveskite `J`, kad nurodytumėte, ką seka jūsų spustelėjimai: sienos centrą arba jos kairįjį ar dešinįjį paviršių.
- Įveskite `F`, kad nustatytumėte užpildą: jokio, vientisą arba brūkšniavimą.

Kampai savaime susijungia įstrižai. Siena, kuri baigiasi kitos sienos storio ribose, prisijungia švariu T, o susikertančios sienos atsiveria viena kitai. Jungtys įrašomos kartu su sienomis. Stačiakampiams, daugiakampiams, lankams, pjaustymui, fiksavimams ir kitiems įrankiams žr. „Sienų formos, pjūviai, poslinkiai ir fiksavimai 2D sienoms“.

## Pridėkite duris ir langus

Įveskite `DOOR` (`DR`) arba `WINDOW` (`WN`) ir spustelėkite ant sienos. Durys atsidaro į tą sienos pusę, kurią spustelėjote. `W` nustato plotį, `Y` tipą, o `H` vyrių pusę. Toliau spustelėkite, kad įdėtumėte daugiau, ir baigti paspauskite {{key:Enter}}. Durys gali būti vienvėrės, dvivėrės, slenkančios arba atviras įėjimas. Langai gali būti fiksuoti, atidaromi arba slenkantys.

## Keiskite jas

Pasirinkite sieną, kad pamatytumėte jos rankenėles:

- Galų rankenėlės ištempia sieną. Prie jos sujungtos sienos seka.
- Vidurio rankenėlė perkelia sieną.
- Rankenėlė ant angos slankioja ją palei sieną.
- Rodyklės apverčia durų vyrį ir atidarymo kryptį.

Ypatybėse rodomas storis, užpildas ir kiekviena anga: tipas, plotis, padėtis, vyris, atidarymas, ar rodoma atidaryta ar uždaryta, ir {{ui:Šalinti}}. `DELOPENING` pašalina angą, arčiausiai kurios spustelėjate.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` ir `ERASE` veikia įprastai. Durys ir langai eina kartu su savo siena, sujungtų sienų jungtys išlieka, o vienas anuliavimas atšaukia viską.

## Kitose programose

Kiekviena siena įrašoma kaip įprastas blokas, todėl kitos CAD programos ją rodo teisingai ir gali perkelti, bet redaguoti kaip sienos negali. `EXPLODE` paverčia sieną paprastomis linijomis ir lankais, ir ji nebėra siena.
