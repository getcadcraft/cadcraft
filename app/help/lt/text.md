---
title: Teksto ir žymų pridėjimas
summary: Įdėkite patalpų žymas vienos eilutės tekstu, parašykite lūžtančias pastabas pastraipos tekstu tiesiai brėžinyje ir vėliau redaguokite tekstą.
keywords: tekstas, dtext, mtext, mleader, multileader, nuoroda, revcloud, revizijos debesėlis, debesėlis, rasti, pakeisti, rasti ir pakeisti, pastraipa, lūžis, eilučių tarpas, žyma, pastaba, anotavimas, aukštis, lygiuoti, textmask, fono kaukė, kaukė, wipeout, pasukimas, redaguoti tekstą, ddedit, textedit, šriftas
from: 4b76be99
---

## Kas bus sukurta

Du patalpų pavadinimai, centruoti savo patalpose, pastaba, kuri išsilygina pagal savo plotį, ir vėliau vieno iš pavadinimų ištaisymas.

## Teksto aukštis ir brėžinio mastelis

Teksto aukštis matuojamas brėžinio vienetais. Brėžinyje milimetrais, kuris bus spausdinamas 1:50 mastu, 2.5 mm aukščio tekstas popieriuje turi būti 2.5 × 50 = 125 vienetų aukščio modelyje. Lapo skirtuke braižoma popieriaus vienetais, todėl ten 2.5 reiškia 2.5 mm popieriuje.

## Įdėti centruotą pavadinimą

1. Įveskite `DT` ir paspauskite {{key:Enter}} (arba spustelėkite {{ui:Text}} įrankių juostoje). Užklausa bus `Nurodykite teksto pradžios tašką [Lygiuoti (J)]:`.
2. Įveskite `J` ir paspauskite {{key:Enter}}.
3. Prie `Pasirinkite parinktį [Kairė (L)/Centras/Dešinė (R)/Vidurys (M)/Viršutinis kairysis (TL)/Vidurio centras (MC)] <L>:` įveskite `MC` ir paspauskite {{key:Enter}}.
4. Prie `Nurodykite teksto įterpimo tašką` spustelėkite patalpos vidurį.
5. Prie `Nurodykite aukštį` įveskite `250` ir paspauskite {{key:Enter}}.
6. Prie `Nurodykite teksto pasukimo kampą <0>` paspauskite {{key:Enter}}.
7. Prie `Įveskite tekstą` įveskite `VIRTUVĖ` ir paspauskite {{key:Enter}}.

Pavadinimas atsiranda, centruotas taške, kurį spustelėjote.

8. Paspauskite {{key:Enter}} tuščioje `Įveskite tekstą` eilutėje, kad baigtumėte komandą.

## Parašyti lūžtančią pastabą

Pastraipos tekstas ({{cmd:MTEXT}}) lūžta pagal nurodytą plotį ir rašomas tiesiai į brėžinį.

1. Įveskite `T` ir paspauskite {{key:Enter}} arba spustelėkite {{ui:Paragraph}} įrankių juostoje.
2. Prie `Nurodykite pirmąjį kampą` spustelėkite vietą, kur bus pastabos viršutinis kairysis kampas.
3. Jei norite pirma pakeisti aukštį, įveskite `H`, paspauskite {{key:Enter}}, įveskite `250` ir paspauskite {{key:Enter}}.
4. Prie `Nurodykite priešingą kampą [Aukštis (H)/Lygiuoti (J)/Eilučių tarpas (L)/Pasukimas (R)/Plotis (W)]` spustelėkite į dešinę nuo pirmojo kampo. Atstumas iki jo yra tekstui lūžti skirtas plotis; kiek žemiau spustelėsite, nebus ribojama.
5. Brėžinio viršuje atsidaro langelis su žymekliu. Įveskite `VISI MATMENYS NURODYTI MILIMETRAIS, JEI NEPAŽYMĖTA KITAIP`. Žodžiai lūžta pagal plotį, kai rašote.
6. Paspauskite {{key:Enter}}, kad pradėtumėte naują pastraipą, ir įveskite `PATIKRINTI STATYBVIETĖJE`.
7. Paspauskite {{key:Mod+Enter}}, spustelėkite {{ui:OK}} arba spustelėkite bet kur už langelio. Pastaba tampa vienu objektu.

Juostoje virš langelio, kol rašote, galima keisti {{ui:Height}}, {{ui:Line spacing}} (1 – įprastas, 1.5 – pusantro karto didesnis), {{ui:Width}} (0 = be lūžimo) ir {{ui:Justify}}. {{key:Esc}} arba {{ui:Cancel}} uždaro langelį, nieko neįdėję.

Parinktys antrame kampe: `H` – aukštis, `J` – lygiavimas (`TL` viršutinis kairysis … `BR` apatinis dešinysis: kampas arba langelio vidurys, kuris lieka vietoje), `L` – eilučių tarpas, `R` – pasukimas, `W` – įvestas plotis vietoj antrojo kampo.

:::note
Kol langelis atviras, {{key:Space}} įveda tarpą, o {{key:Enter}} pradeda naują pastraipą. Įrašytas DWG išsaugo pastraipos tekstą kaip MTEXT; DXF R12 formatas pastraipos teksto neturi, todėl kiekviena eilutė įrašoma kaip atskiras tekstas.
:::

### Kelios atskiros eilutės

{{cmd:TEXT}} (`DT`) prašo po vieną eilutę: kiekvienas {{key:Enter}} pradeda kitą eilutę, 1.667 karto teksto aukščio žemiau, ir kiekviena eilutė yra atskiras objektas. Paspauskite {{key:Enter}} tuščioje eilutėje, kad baigtumėte.

## Lygiavimo parinktys

| Parinktis | Taškas, kurį spustelite, yra |
|---|---|
| Kairė (numatytoji) | Pamatinės linijos kairysis galas |
| Centras | Pamatinės linijos vidurys |
| Dešinė | Pamatinės linijos dešinysis galas |
| Vidurys, MC | Teksto vidurys tiek pagal plotį, tiek pagal aukštį |
| TL | Viršutinis kairysis kampas |

## Redaguoti tekstą

1. Du kartus spustelėkite teksto objektą. Jis atsidaro tame pačiame langelyje kaip naujas pastraipos tekstas, žymeklis – gale.
2. Pakeiskite žodžius.
3. Paspauskite {{key:Mod+Enter}} arba spustelėkite už langelio. Brėžinio tekstas pasikeičia; {{key:Esc}} palieka jį nepakeistą.

{{cmd:TEXTEDIT}} (`ED`) daro tą patį: pasirinkite vieną tekstą po kito, o baigę paspauskite {{key:Enter}}.

Norėdami pakeisti tekstą, jį pažymėkite dešiniajame skydelyje: {{ui:Text}}, {{ui:Height}}, {{ui:Wrap width}} (0 = be lūžimo), {{ui:Line spacing}}, {{ui:Rotation}}, X ir Y padėtį bei {{ui:Justify}}. Sąraše {{ui:Justify}} taip pat yra Apatinis kairysis, kurį kartais naudoja tekstai iš kitų programų.

## Formatavimas pastraipos tekste iš kitų programų

Pastraipos tekste DWG ar DXF faile gali būti kodų: spalvos pagal žodžius, paryškinimas ir kursyvas, pabraukimas, perbraukimas viršuje ir per vidurį, sudėtinės trupmenos, pvz., 1/2, bei kitas žodžio aukštis. CadCraft išsaugo šiuos kodus, nupiešia juos (ekrane ir spausdinamame PDF) ir įrašo atgal nepakeistus.

Redaguojant tokį tekstą (dvigubas spustelėjimas, {{cmd:TEXTEDIT}}, dešiniojo skydelio laukas Text ar {{cmd:FIND}} su Replace), keičiami tik paprasti žodžiai. Įvestas žodis patenka į greta esantį fragmentą ir perima jo spalvą bei stilių; kiti kodai lieka savo vietose. Jei pakeisite sudėtinės trupmenos skaičius, ši trupmena tampa paprastu tekstu. Visą tekstą nustačius lauke Text kodai išlieka tik tose vietose, kur programa gali atpažinti, kurie žodžiai liko.

Šriftų pavadinimai (`\F`) išsaugomi ir įrašomi, tačiau viskas piešiama vienu Helvetica tipo šriftu. Kodų įvedimui įrankių juostos dar nėra.

## Nurodyti į kažką: daugianuorodės

{{ui:Leader}} grupėje {{ui:Annotate}} ({{cmd:MLEADER}}, `MLD`) nubrėžia rodyklę, nuorodos liniją, trumpą atšaką ir pastabą kaip vieną objektą.

1. Spustelėkite {{ui:Leader}}. Prie `Nurodykite nuorodos rodyklės vietą` spustelėkite tai, apie ką yra pastaba.
2. Prie `Nurodykite nuorodos atšakos vietą` spustelėkite, kur bus pastaba. Atšaka pasisuka į pusę, kurioje spustelėjote.
3. Atsidariusiame langelyje įveskite pastabą ir paspauskite {{key:Mod+Enter}}.

`A` ir `L` prie pirmo klausimo nustato rodyklės dydį ir atšakos ilgį; teksto aukštis paimamas iš {{ui:Text height}} naujiems matmenims, padauginto iš {{ui:Overall scale}}. Norėdami pakeisti žodžius, du kartus spustelėkite daugianuorodę. Rankenėlės perkelia rodyklę ir atšaką; pastaba seka atšaką. Skydelyje {{ui:Properties}}: {{ui:Text}}, {{ui:Height}}, {{ui:Wrap width}}, {{ui:Arrowhead size}} ir {{ui:Landing distance}}.

:::note
DWG formate daugianuorodės įrašomos kaip tikros daugianuorodės. DXF R12 ir 2000 formatuose daugianuorodžių nėra, todėl jos įrašomos kaip linijos, rodyklė ir tekstas, kuriuos jos nupiešia.
:::

## Pažymėti pakeitimus revizijos debesėliu

{{ui:Annotate}} › {{ui:More}} › {{ui:Revision cloud}} ({{cmd:REVCLOUD}}, `RC`) nubrėžia debesėlį iš lankų aplink tai, kas pakeista. Istorijoje rodomas lanko ilgis ir tipas, kurį jis naudos.

- **Stačiakampis** (pirmą kartą): spustelėkite du kampus.
- `P` **Daugiakampis**: spustelėkite kampus, {{key:Enter}} uždaro debesėlį.
- `F` **Laisvas**: spustelėkite, kur jis prasideda, ir judinkite žymeklį aplink plotą nespustelėdami; kiekvieno lanko ilgio atstumu pridedamas naujas lankas. Spustelėkite arba paspauskite {{key:Enter}}, kad uždarytumėte.
- `O` **Objektas**: pasirinkite uždarą polilinija, apskritimą ar elipsę (arba liniją, lanką ar atvirą polilinija); ji tampa debesėliu. `Apversti kryptį?` `Y` lankus nukreipia į vidų.
- `A` **Lanko ilgis**: kiekvieno lanko ilgis. Pasirinkite tinkamą spausdinimo masteliui.

Debesėlis yra uždara lankų polilinija, todėl įrašomas bet kuriuo formatu.

## Ieškoti ir pakeisti žodžius

{{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}} ({{cmd:FIND}}) ieško tekste, blokų atributų reikšmėse ir matmenų tekste atvirame skirtuke (arba tik pažymėtuose objektuose).

1. Įveskite žodžius lauke {{ui:Find}}. Sąraše rodoma kiekviena jų vieta ir kiekis.
2. Jei reikia, pažymėkite {{ui:Match case}}, {{ui:Whole words only}} arba {{ui:Use wildcards (* and ?)}} ir nuimkite žymėjimą nuo to, kur ieškoti nereikia.
3. Spustelėkite {{ui:Select found}}, kad pažymėtumėte tuos objektus, arba įveskite naujus žodžius lauke {{ui:Replace with}} (sąraše rodoma, į ką kiekvienas pavirs) ir spustelėkite {{ui:Replace all}}. Vienas {{key:Mod+Z}} atšaukia visus pakeitimus.

Matmens išmatuota reikšmė nėra tekstas, todėl ji niekada nekeičiama: `<> TYP.` galima keisti tik `TYP.`.

## Paslėpti linijas po žyma

1. Pažymėkite tekstus, įveskite {{cmd:TEXTMASK}} ir paspauskite {{key:Enter}}.
2. `B` nudažo brėžinio foną už jų; `C` prašo spalvos numerio. `O` nuima kaukę.
3. `Border offset factor` (Rėmelio poslinkio koeficientas): {{key:Enter}} palieka 1.5, tai yra pusė teksto aukščio aplink tekstą.

Kaukė dengia linijas po tekstu ekrane ir spausdinant. DWG 2004 ar naujesniame ir DXF 2000 formatuose ji išsaugoma; DWG 2000 ir DXF R12 formatai jos neįrašo, ir įrašymo metu tai nurodoma.

## Šriftas

Visas tekstas piešiamas Helvetica tipo šriftu – ekrane ir PDF failuose. Atidarytų brėžinių tekstas išlaiko žodžius, aukštį ir padėtį, bet ne pradinį šriftą (šriftų pavadinimai pastraipos tekste išsaugomi faile, žr. aukščiau).

Spausdinamuose PDF failuose bet kuriuo europiečių raštu, kirilica ar graikų kalba parašytas tekstas atspausdinamas kaip yra (PDF saugo reikalingas raides, tekstą galima pažymėti ir ieškoti). Kinų, japonų ir korėjiečių tekstas taip pat spausdinamas kaip yra (spausdinimas pirmą kartą prireikus parsisiunčia didesnį šriftą). Arabų, persų, urdu ir hebrajų tekstas taip pat spausdinamas kaip yra (žr. kitą skyrių). Simboliai, kurių nė vienas šriftas neturi, spausdinami kaip „?“, o istorijoje nurodoma, kiek jų buvo.

## Tekstas iš dešinės į kairę: arabų, persų, urdu, hebrajų

Rašykite tekstą kaip bet kur kitur: {{cmd:TEXT}} ir {{cmd:MTEXT}} kiekvieną eilutę piešia skaitymo tvarka. Eilutė, kurios pirmoji raidė yra arabų ar hebrajų, skaitoma iš dešinės į kairę; skaičiai ir lotyniški žodžiai joje išlaiko savo tvarką iš kairės į dešinę, o arabiškos raidės jungiamos. Eilutė, prasidedanti lotyniška raide, lieka skaitoma iš kairės į dešinę, o joje esantys dešinėn skaitomi žodžiai išlieka savo vietose. Kiekviena daugiaeilio teksto pastraipa turi savo kryptį, o lūžusi pastraipa ją išlaiko kiekvienoje eilutėje.

Tekstas įrašomas taip, kaip įvestas, todėl DWG ir DXF failai su kitomis programomis keičiasi nepakeistas. Įterpimo taškas ir lygiavimas ({{ui:Left}}, {{ui:Center}}, {{ui:Right}}) reiškia tą pačią pusę kaip bet kuriam tekstui: pastaba iš dešinės į kairę, kuri turi kabėti nuo savo dešiniojo galo, turi {{ui:Right}}.

Ekrane raidės paimamos iš jūsų sistemos šriftų. Spausdinamame PDF hebrajų kalba naudoja tą patį įterptąjį šriftą kaip ir lotyniškas tekstas; arabiškos raidės tekstas priverčia spausdinimą parsisiųsti dar vieną šriftą (mažesnį nei 1 MB, vieną kartą), ir visas PDF tada spausdinamas tuo šriftu. Tas šriftas neturi savo formos trims urdu simboliams (heh goal, yeh barree ir urdu pilnas taškas): jie spausdinami artimiausios arabų raidės forma. Brėžinys, kuriame yra ir arabiškų, ir kinų, japonų ar korėjiečių tekstų, vieną iš jų spausdina kaip „?“, nes spausdinimas naudoja vieną šriftą. SHX šrifto tekstas sutvarkomas ir sujungiamas, jei šriftas turi raides savo Unicode vietose; senų šriftų, kurių raidės jau suformuotos, atveju naudokite {{ui:Reverse}} komandoje {{cmd:SHXFONTS}}, kaip ir anksčiau.

## Dažnos klaidos

- **Tekstas per mažas, kad matytųsi.** Aukštis matuojamas brėžinio vienetais. Dideliame brėžinyje naudokite didesnį aukštį (žr. aukščiau) arba priartinkite.
- **Komanda baigėsi po vienos eilutės.** Tuščioje {{cmd:TEXT}} eilutėje paspaudėte {{key:Enter}}. Paleiskite ją iš naujo arba naudokite pastraipos tekstą (`T`), kur {{key:Enter}} pradeda naują pastraipą.
- **`T` atvėrė langelį vietoj eilutės užklausos.** Kaip ir AutoCAD, `T` yra pastraipos tekstas ({{cmd:MTEXT}}); vienos eilutės tekstas yra `DT`.
- **AutoCAD tekstas lūžta kitoje vietoje.** CadCraft lūžta pagal Helvetica plotį; kitas šriftas gali žodį sutalpinti eilutėje kitaip.
- **Tekstas veidrodinėje kopijoje.** Jis įdedamas veidrodiškai, bet lieka skaitomas iš kairės į dešinę.
