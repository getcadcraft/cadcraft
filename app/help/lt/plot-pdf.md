---
title: Spausdinti į PDF
summary: Sukurkite lapo PDF visu dydžiu arba modelio PDF pagal mastelį ar pritaikytą prie popieriaus, spausdinkite iš naršyklės ar iš Studio arba įrašykite kaip PNG ar SVG.
keywords: spausdinti, spausdinimas, spausdintuvas, kopijos, png, svg, paveikslėlis, pdf, publikuoti, exportpdf, popierius, mastelis, vienspalvis, pilkoji skalė, juoda ir balta, linijos storis, pieštukas, puslapio nustatymai, spausdinimo langas, spausdinimo stilius, spausdinimo stiliaus lentelė, ctb, spalvai priklausantis, rastravimas, plotstyles, stylesmanager
from: a4752f83
---

## Ką sukursite

Lapo PDF visu dydžiu, tada greitas modelio PDF 1:100 masteliu ir spaudinys.

PDF sukuriamas jūsų naršyklėje; nieko neįkeliama. Tai vektorinis PDF: linijos išlieka aiškios bet kuriame mastelyje, o tekste galima ieškoti.

## Lapo spausdinimas

1. Spustelėkite lapo skirtuką po brėžiniu.
2. Paspauskite {{key:Mod+P}}, spustelėkite {{ui:Spausdinti}} arba įveskite `PLOT` ir paspauskite {{key:Enter}}.

Atsidaro dialogas {{ui:Spausdinti į PDF}}. Jame nurodoma, kurį lapą spausdinsite ir ant kokio popieriaus, „visu dydžiu … kaip matote“. Dešinėje esanti peržiūra rodo lapą.

3. Lauke {{ui:Spausdinimo stilius}} pasirinkite {{ui:Vienspalvė (juoda)}}, jei norite juodų linijų, {{ui:Spalva (kaip nubraižyta)}}, kad išliktų spalvos, {{ui:Pilkoji skalė}} arba savo lentelę (žr. [Spausdinimo stiliaus lentelės](topic:plot-pdf#plot-style-tables)). Lapas išsaugo šį pasirinkimą: jis įrašomas kartu su brėžiniu.
4. Lauke {{ui:Linijų storis}} pasirinkite pieštuko plotį nuo 0.13 mm iki 0.70 mm. Linijos su numatytuoju linijos storiu spausdinamos šiuo plotiu; linijos, turinčios savo linijos storį (sluoksnio ar objekto arba jų spalvos pieštuko lentelėje), spausdinamos tuo storiu.
5. Spustelėkite {{ui:Atsisiųsti PDF}}.

Naršyklė atsisiunčia PDF, pavadintą pagal brėžinį ir lapą, pavyzdžiui `Drawing1-A-101 Plan.pdf`. Istorijoje nurodomas jo dydis baitais ir popieriaus dydis milimetrais.

Lapas visada spausdinamas 1:1 masteliu ant savo popieriaus. Norėdami pakeisti popierių, pakeiskite jį pačiame lape (žr. [Lapo nustatymas](topic:sheets-and-viewports)). Sluoksniai, nustatyti nespausdinti, praleidžiami, lygiai kaip ir vaizdo langų rėmeliai.

## Visi lapai viename PDF

Kai yra du ar daugiau lapų, dialoge {{ui:Spausdinti į PDF}} yra {{ui:Visi lapai viename PDF}}; arba įveskite {{cmd:PUBLISH}}. {{key:Enter}} pasirenka visus lapus; `[Keletas (S)]` paprašo nurodyti jų pavadinimus, atskirtus kableliais. Atsisiunčiamas vienas PDF su puslapiu kiekvienam lapui, skirtukų tvarka, kiekvienas savo popieriaus dydžiu, ir kiekvienam lapui žymė su jo pavadinimu. Kiekvienas lapas spausdinamas su savo spausdinimo stiliaus lentele; lapas, kuriam nieko nepasirinkta, naudoja paskutinę dialoge pasirinktą lentelę ir paskutinį pasirinktą pieštuko plotį.

## Modelio spausdinimas

1. Spustelėkite skirtuką {{ui:Modelis}}.
2. Paspauskite {{key:Mod+P}}.

Dialoge nurodoma, kad modelis spausdinamas ant popieriaus lapo, ir rodomi papildomi nustatymai:

3. Lauke {{ui:Plotas}} pasirinkite, ką spausdinti:
   - {{ui:Viskas (ribos)}}: visas brėžinys.
   - {{ui:Kas matoma ekrane}}: dabar brėžinyje matoma sritis.
   - {{ui:Langas…}}: tada spustelėkite {{ui:Pasirinkti}}, brėžinyje spustelėkite du kampus, ir dialogas vėl atsiranda.
4. Lauke {{ui:Popierius}} pasirinkite dydį: nuo ISO A4 iki A0, Letter, Legal, Tabloid ir ANSI C bei D arba ARCH C, D ir E.
5. Lauke {{ui:Orientacija}} pasirinkite {{ui:Horizontali}} arba {{ui:Vertikali}}.
6. Lauke {{ui:Mastelis}} pasirinkite {{ui:Pritaikyti prie popieriaus}} arba mastelį, pavyzdžiui `1:100`.

Po nustatymais viena eilutė nurodo mastelį ir kokio dydžio sritis išeina ant popieriaus. Jei ji didesnė nei popierius, tai pažymima: kraštai bus nukirpti. Pasirinkite mažesnį mastelį, didesnį popierių arba {{ui:Pritaikyti prie popieriaus}}.

7. Spustelėkite {{ui:Atsisiųsti PDF}}.

Modelio spausdinime palikiama 5 mm paraštė aplink kraštus, nes dauguma spausdintuvų negali spausdinti iki pat krašto. {{ui:Pritaikyti prie popieriaus}} duoda nestandartinį mastelį (istorijoje ir informacinėje eilutėje rašoma „(pritaikyta)“); kai brėžinys turi būti matuojamas tiksliai, pasirinkite standartinį mastelį.

:::note
Mastelis skaitomas tikrais vienetais. Kad 1:100 būtų teisingas, nustatykite {{ui:Vienetai}} lauke {{ui:Dabartiniai nustatymai}} į tai, kas yra vienas brėžinio vienetas. Brėžinys be vienetų laikomas milimetrais.
:::

## Spausdinimo stiliaus lentelės

Spausdinimo stiliaus lentelė nusako, kaip spausdinama kiekviena iš 255 standartinių brėžinio spalvų, panašiai kaip spalvai priklausanti spausdinimo stiliaus lentelė (CTB) kitose CAD programose. Yra trys įmontuotos:

| {{ui:Lentelė}} | {{ui:Spausdinama}} |
|---|---|
| {{ui:Spalva (kaip nubraižyta)}} | Kiekvienas objektas savo spalva. |
| {{ui:Vienspalvė (juoda)}} | Visos spalvos juodos: įprastas brėžinių pasirinkimas. |
| {{ui:Pilkoji skalė}} | Kiekviena spalva kaip jos pilka, todėl spalvos lieka atskiros juodai baltame spausdintuve. |

Norėdami sukurti savo, pavyzdžiui raudonas linijas storas ir juodas, o viską kita plonai:

1. Dialoge {{ui:Spausdinti į PDF}} spustelėkite {{ui:Redaguoti lenteles…}} (arba įveskite {{cmd:PLOTSTYLES}}).
2. Spustelėkite {{ui:Nauja}} ir lauke {{ui:Pavadinimas}} įveskite pavadinimą, pavyzdžiui `biuras`. Norėdami pradėti nuo įmontuotos lentelės, pasirinkite ją lauke {{ui:Lentelė}} ir spustelėkite {{ui:Kopijuoti}}.
3. Spustelėkite spalvą tinklelyje. {{key:Shift}}+spustelėjimas pasirenka spalvų intervalą, {{key:Mod}}+spustelėjimas prideda dar vieną, o {{ui:Pasirinkti visas spalvas}} pasirenka visas.
4. Nustatykite, kaip spausdinamos pasirinktos spalvos:
   - {{ui:Spausdinama}}: {{ui:Savo spalva}}, {{ui:Juoda}} arba {{ui:Kita spalva…}}.
   - {{ui:Kaip pilka}}: spalva kaip jos pilka.
   - {{ui:Rašalas (%)}}: 100 yra visas rašalas, 50 – pusiaukelė iki baltos (rastravimas), skirta foninėms linijoms.
   - {{ui:Linijos storis}}: {{ui:Savo linijos storis}} palieka objekto ar sluoksnio linijos storį; reikšmė spausdina visas tos spalvos linijas tuo storiu.
   - {{ui:Linijos tipas}}: spausdinti visas tos spalvos linijas kitu linijos tipu (pavyzdžiui, visas raudonas – brūkšninėmis); {{ui:Naudoti objekto linijos tipą}} palieka jas kaip yra.
   - {{ui:Linijos galas}} ir {{ui:Linijos jungtis}}: tiesūs, kvadratiniai ar apvalūs galai ir smailūs, nupjauti ar apvalūs kampai (apvalūs, kaip ir anksčiau, jei nieko nenustatote).
   - {{ui:Užpildymo stilius}}: vientisas tos spalvos užpildymas spausdinamas brūkšniuotės linijomis (horizontalios ar vertikalios juostos, įstrižainės, kryžminė brūkšniuotė, rombai, kvadratiniai taškai), o ne rašalu – spausdintuvams ir planams, kuriems vientisas rašalas per sunkus.
   Pati lentelė turi dar du nustatymus: {{ui:Linijų storiai}} – plotiai, kuriuos ji žino (spausdinama linija pasirenka artimiausią iš jų), ir {{ui:Linijos tipo mastelis}} – koeficientas visų ne ISO linijos tipų brūkšneliams.
5. Spustelėkite {{ui:Atlikta}}. Lentelė išsaugoma brėžinyje, ir lapas (arba modelis) dabar spausdinamas su ja. {{ui:Atšaukti}} atmeta pakeitimus.

Spalva, turinti savo pieštuką, rodo tašką kampe, o taškas apačioje, kai nustatytas linijos storis. Objektas su tikra spalva (ne viena iš 255) naudoja artimiausios standartinės spalvos pieštuką.

Brėžinys išsaugo savo lenteles ir kiekvieno lapo pasirinkimą, kai įrašote kaip DWG (2000–2018) arba DXF (R12 arba 2000), ir atsidaro su jais vėl. Kitos programos mato pavadinimą kiekvieno lapo puslapio nustatymuose (`office.ctb`), o ne pačią lentelę. Kitos programos brėžinys, kurio puslapio nustatymuose nurodyta lentelė, pavyzdžiui `monochrome.ctb`, spausdinamas su įmontuota lentele tuo pavadinimu; bet kuriam kitam pavadinimui dialogas praneša, kad brėžinyje tokios nėra, ir spausdina brėžinio spalvas, kol pasirinksite lentelę arba sukursite su tokiu pavadinimu.

Norėdami naudoti lentelę kitame brėžinyje, spustelėkite {{ui:Eksportuoti}} lauke {{ui:Spausdinimo stiliaus lentelės}} (išsaugoma `office.plotstyle.json`), tada kitame brėžinyje – {{ui:Importuoti…}}. {{ui:Importuoti…}} taip pat priima `.ctb` failą iš kitos programos: jis skaitomas pagal paskelbtą formato aprašymą ir **dar nebuvo patikrintas su tikru failu**. Kiekvienos spalvos spalva, rastravimas ir linijos storis nuskaitomi; pilkoji skalė, pieštukų numeriai, linijų tipai, linijų galai ir jungtys bei užpildymo stiliai – ne, o pavadinta lentelė (`.stb`) nepriimama. Palyginkite pirmąjį spausdinimą su tuo, ko tikitės, ir jei jis neteisingas, atsiųskite mums failą.

## Spausdinimas

**Naršyklėje** spustelėkite {{ui:Spausdinti…}}. CadCraft sukuria PDF ir jam atidaro naršyklės spausdinimo dialogą. Ten pasirinkite „Tikras dydis“ arba 100 % (ne „Pritaikyti“), kad išliktų mastelis. Jei naršyklė nespausdina iš puslapio, PDF atsidaro naujame skirtuke: spausdinkite jį iš ten su {{key:Mod+P}}.

Taip pat galite spustelėti {{ui:Atidaryti spausdinimui}}: PDF atsidaro naujame naršyklės skirtuke, ir spausdinate iš ten.

:::safari
Safari gali parodyti PDF ir laukti, kol naudosite **Failas**, tada **Spausdinti**.
:::

Jei naršyklė blokuoja naują skirtuką, CadCraft vietoj to atsisiunčia PDF ir apie tai praneša istorijoje. Kitą kartą leiskite iššokančiuosius langus šiai svetainei, kad jis atsidarytų skirtuke.

**CadCraft Studio** programoje dialoge {{ui:Spausdinti į PDF}} išvardyti kompiuterio spausdintuvai. Pasirinkite {{ui:Spausdintuvas}}, {{ui:Popierius spausdintuve}} ir {{ui:Kopijos}} skaičių, tada spustelėkite {{ui:Spausdinti…}}. {{ui:Kaip spausdinant}} parenka spausdintuvo popierių, atitinkantį lapo dydį (A3 lapui – A3); kai spausdintuvo tokio nėra, naudojamas jo popierius, o lapas pritaikomas prie jo. Windows sistemoje lapas siunčiamas kaip 300 dpi paveikslėlis, nes Windows be PDF programos negali spausdinti PDF; Linux ir macOS sistemose pats PDF siunčiamas sistemos spausdinimo paslaugai. Niekas nepalieka kompiuterio.

## Paveikslėlių ir SVG failai

{{ui:Atsisiųsti PNG}} įrašo spausdinamą lapą kaip paveikslėlį 300 dpi (sumažinama tik tada, kai labai didelis lapas būtų didesnis, nei gali sukurti naršyklė; apie tai rašoma istorijoje). {{ui:Atsisiųsti SVG}} įrašo jį kaip mastelį išlaikantį brėžinį milimetrais, su spausdinimo linijomis ir tekstu. Abu gaunami iš to paties spausdinimo kaip PDF, su tuo pačiu spausdinimo stiliumi, linijų storiu ir sritimi. Brėžinyje įdėti paveikslėliai yra tik PDF faile; istorijoje nurodoma, kiek jų praleista.

## Paveikslėliai

Paveikslėliai spausdinami savo skiriamąja geba, po linijomis. Dialogo {{ui:Paveikslėliai}} laukas juos riboja iki 600, 300 arba 150 dpi mažesniam failui. Linijos, tekstas ir brūkšniuotės visada išlieka aiškios (vektoriniai), o permatomumas išlieka permatomumu. Žr. [Paveikslėliai brėžinyje](topic:pictures).

## Įsimenami nustatymai

Dialogas įsimena paskutinį popierių, orientaciją, mastelį ir linijų storį šioje naršyklėje. Spausdinimo stiliaus lentelė išsaugoma kiekvienam lapui brėžinyje; lapas, kuriam nieko nepasirinkta, pradeda nuo paskutinės jūsų pasirinktos. Pasirinktas langas išlieka, kol perkraunate puslapį; po to dialogas pradeda nuo {{ui:Viskas (ribos)}}.

## Dažniausios klaidos

- **PDF tuščias arba mygtukai pilki.** Nėra ko spausdinti (tuščias modelis), arba pasirinktas {{ui:Langas…}}, bet langas dar nenurodytas („Pasirinkite spausdinamą langą.“).
- **PDF rodomas „?“ vietoj teksto.** Tekstas lenkų, čekų, kirilica, graikų ir kitomis Europos rašto sistemomis spausdinamas tiksliai taip, kaip parašytas: PDF tada įtraukia reikalingas raides (iš šrifto Liberation Sans, kuris turi Helvetica plotius), ir tekste vis dar galima pažymėti bei ieškoti. Kinų, japonų ir korėjiečių tekstas taip pat spausdinamas tiksliai taip, kaip parašytas: kai brėžinyje jo yra, spausdinimas vieną kartą parsisiunčia didesnį šriftą (apie 10 MB), o PDF įtraukia tik naudojamus simbolius, todėl pirmą kartą reikia ryšio (nėra išsaugotoje neprisijungus kopijoje). Hebrajų tekstas spausdinamas tuo pačiu įterptu šriftu kaip lotyniškas tekstas, o arabų, persų ir urdu tekstui spausdinimas vieną kartą parsisiunčia dar vieną šriftą (mažiau nei 1 MB); eilutės iš dešinės į kairę sutvarkomos ir raidės sujungiamos (žr. [Tekstas](topic:text)). Retos ideogramos už tų šriftų ribų ir raštai, kuriems reikia sudėtingo formavimo, pavyzdžiui hindi, spausdinami kaip „?“, o istorijoje jos suskaičiuojamos.
- **Visos linijos vienodo storio.** Jų linijos storis numatytasis: dešiniajame skydelyje sluoksniams ar objektams nustatykite {{ui:Linijos storis}} (žr. [Linijų storiai ir linijų tipai](topic:units-papers-scales#line-weights-and-linetypes)), arba nustatykite linijų storius pagal spalvą [spausdinimo stiliaus lentelėje](topic:plot-pdf#plot-style-tables).
- **Šalia spausdinimo stiliaus „(nėra šiame brėžinyje)“.** Brėžinys atėjo iš kitos programos ir nurodo lentelę, kurios nėra. Pasirinkite vieną iš lentelių arba sukurkite lentelę su tokiu pavadinimu.
- **Pagalbinės linijos buvo atspausdintos.** Nustatykite jų sluoksnį nespausdinti: spustelėkite jo spausdintuvo mygtuką skydelyje {{ui:Sluoksniai}}.
- **Spaudinys neteisingo dydžio.** Spausdintuvas jį pakeitė. Spausdinkite tikru dydžiu.
- **{{key:Mod+P}} atvėrė naršyklės spausdinimo dialogą.** Žymeklis buvo laukelyje dešiniajame skydelyje arba buvo atidarytas kitas dialogas. Norėdami išeiti iš laukelio, paspauskite {{key:Enter}} arba {{key:Esc}}, tada bandykite dar kartą arba spustelėkite {{ui:Spausdinti}}.
- **{{key:Mod+P}} nieko nepadarė.** Vykdoma komanda. Pirmiausia paspauskite {{key:Esc}}.
