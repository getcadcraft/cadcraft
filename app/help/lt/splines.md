---
title: Splainai ir polilinijos: SPLINE, SPLINEDIT, PEDIT
summary: Nubraižykite glotnią kreivę per taškus arba pagal valdymo daugiakampį, redaguokite jos tinkamumo ir valdymo taškus bei redaguokite polilinijas (jungti, uždaryti, plotis, tinkamumas, splainas, decurve) arba paverskite splainą polilinija.
keywords: splainas, splinedit, spl, spe, pedit, pe, tinkamumo taškai, valdymo taškai, svoriai, nurbs, polilinijos redagavimas, jungti, tinkamumo kreivė, decurve, paversti polilinija, tikslumas, liestinė, kreivė, tinkamumo nuokrypis
from: d31f72d8
---

## Ką sukursite

Kreivė per penkis taškus, ta pati kreivė, redaguota trimis būdais, ir polilinija, sudaryta iš trijų linijų.

## Nubraižykite splainą per taškus

1. Įveskite `SPL` ir paspauskite {{key:Enter}}.
2. Spustelėkite arba įveskite taškus, per kuriuos turi eiti kreivė: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Po paskutinio paspauskite {{key:Enter}}.
3. {{ui:Pradžios liestinė}}: spustelėkite tašką, į kurį kreivė turi kryptį pradžioje, arba paspauskite {{key:Enter}}, kad sprendimą priimtų programa. Tą patį padarykite su galo liestine.

Kreivė eina per kiekvieną tašką. Vietoj {{key:Enter}} įveskite `C`, kad uždarytumėte ją (kreivė grįžta į pirmąjį tašką). Braižymo metu {{key:U}} (Anuliuoti) atšaukia paskutinį tašką.

### Nubraižykite iš valdymo daugiakampio

Pirmoje užklausoje įveskite `M`, tada [Valdymo viršūnės (C)] ir laipsnį nuo 1 iki 5 (dažniausiai 3). Dabar pasirinkti taškai yra daugiakampio kampai, kurie traukia kreivę link savęs; kreivė prasideda pirmajame taške ir baigiasi paskutiniame. Uždara kreivė apsivynioja aplink, sankiryje nėra kampo.

### Paverskite polilinija splainą

Pirmoje užklausoje įveskite `O` (Objektas) ir pasirinkite polilinijas ar linijas. Jos tampa splainais, einančiais per jų viršūnes; originalai pašalinami.

## Redaguokite splainą

Pasirinkite jį ir įveskite `SPE` (arba įveskite `SPE` ir spustelėkite jį). Rankenėlės rodo tinkamumo taškus (arba valdymo taškus splainui, kuris jų neturi): vilkite vieną, kad pakeistumėte kreivės formą. Užklausoje:

- **Tinkamumo duomenys** (splainas nubraižytas per taškus): [Pridėti (A)] prideda tinkamumo tašką (spustelėkite, kur); [Naikinti (D)] ištrina vieną (spustelėkite šalia jo); [Perkelti (M)] perkelia vieną (spustelėkite šalia jo, tada spustelėkite naują vietą); [Liestinės (T)] nustato galo liestines; [Išvalyti (P)] pašalina tinkamumo taškus, todėl nuo to laiko splainas redaguojamas pagal valdymo taškus.
- **Redaguoti viršūnę**: [Pridėti (A)] prideda valdymo tašką nekeisdamas kreivės; [Perkelti (M)] perkelia vieną; [Svoris (W)] suteikia vienam taškui **svorį** (didesnis nei 1 traukia kreivę arčiau jo, mažesnis nei 1 ją paleidžia).
- **Atverti** arba **Uždaryti**, ir **Apversti** (kreivė eina kita kryptimi).
- **Paversti į polilinija** (`P`): splainas tampa polilinija; tikslumas – kiek segmentų gauna kiekvienas tarpas (dažniausiai 10).
- **Anuliuoti** atšaukia paskutinį pakeitimą; [Baigti (X)] baigia.

{{ui:Ypatybės}} rodo splaino laipsnį, kiek jis turi tinkamumo ir valdymo taškų, jo ilgį, ir leidžia jį atverti ar uždaryti.

## Redaguokite polilinija

Pasirinkite poliliniją ir įveskite `PE`. Pirmiausia pasirinkta linija, lankas ar splainas siūlomi kaip polilinija, į kurią galima paversti (splainas prašo tikslumo).

- **Uždaryti** / **Atverti** sujungia arba atskiria galus.
- **Jungti** prideda linijas, lankus ir polilinijas, kurių galai susiliečia su polilinijos galu. „Tolerancijos atstumas“ yra, kiek galai gali būti nutolę ir vis dar susijungti (0 reiškia, kad jie turi susiliesti).
- **Plotis** suteikia visai polilinijai vieną plotį (0 jį pašalina).
- **Tinkamumas** pakeičia polilinija glotnia kreive, einančia per jos viršūnes; **Splainas** – kubiniu B-splainu, sekančiu jas (prasideda ir baigiasi pirmoje bei paskutinėje viršūnėje ir lieka netoli kitų). Abu tampa trumpų segmentų polilinija, o originalūs kampai išsaugomi, todėl **Atkurti kampus** (decurve) juos grąžina.
- **Linijos tipo generavimas** nurodo, ar punktyrinis linijos tipas tęsiasi visa polilinija, ar prasideda iš naujo kiekvienoje viršūnėje.
- **Apversti** keičia viršūnių tvarką. **[Keli (M)]** pirmoje užklausoje redaguoja kelias polilinijas tomis pačiomis parinktimis.

Polilinijos viršūnių redagavimas per {{ui:Ypatybės}} ar rankenėles lieka toks, koks buvo: {{cmd:PEDIT}} neturi viršūnių redaktoriaus.

## Failuose

DWG ir DXF 2000 išsaugo splainą kaip splainą: laipsnį, valdymo taškus, mazgus, svorius, tinkamumo taškus ir liestines. Splainas, kurį atidarote ir nekeičiate, įrašomas atgal tiksliai taip, kaip atėjo. DXF R12 neturi splaino: jis išsaugomas kaip polilinija palei kreivę, o istorijoje nurodoma, kiek jų.

Poslinkis, apkirpimas, pratęsimas, suapvalinimas, nutraukimas ir jungimas su splainais neveikia. Splainą {{cmd:EXPLODE}} ar {{cmd:PEDIT}} paverskite polilinija, kurią tos komandos priima.

## Dažnos klaidos

- **Kreivė išsikiša tarp artimų taškų.** Kreivė per taškus lenkiasi ten, kur lenkiasi taškai. Naudokite mažiau taškų arba valdymo daugiakampį.
- **„Tai nėra splainas.“** SPLINEDIT priima tik splainus; {{cmd:PEDIT}} redaguoja polilinijas.
- **Uždaras tinkamumo splainas kitoje programoje atrodo šiek tiek kitaip.** CadCraft jį uždaro vienu glotniu sujungimu pirmame taške; kita programa gali uždaryti jį periodine kreive. Uždaras valdymo taškų splainas yra vienodas abiejose.
