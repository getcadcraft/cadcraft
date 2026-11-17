---
title: Lapo su antraštės bloku ir vaizdo langais paruošimas
summary: Sukurkite lapą su rėmu ir antraštės bloku, nustatykite vaizdo lango mastelį, pridėkite antrą vaizdo langą detalei ir užpildykite antraštės bloką.
keywords: layout, lapas, popieriaus erdvė, vaizdo langas, mview, vpview, antraštės blokas, mastelis, popieriaus dydis, rėmas, vports, spausdinimo mastelis, mspace, pspace, modelio erdvė, įeiti į vaizdo langą, dukart spustelėti vaizdo langą
from: 45a45de8
---

## Ką sukursite

A3 lapas su antraštės bloku, visas planas viename vaizdo lange 1:100 mastelyje ir antras vaizdo langas, rodantis vieną kampą 1:20 mastelyje.

## Modelis ir lapai

Pastatą piešiate skirtuke {{ui:Modelis}}, pilnu dydžiu: 6 m siena milimetrais yra 6000 vienetų ilgio. **Lapas** (maketas) yra popieriaus lapas, matuojamas milimetrais arba coliais. **Vaizdo langas** yra langas lape, rodantis modelį tam tikru mastu.

## Prieš pradėdami

1. Atidarykite arba nubrėžkite planą skirtuke {{ui:Modelis}}.
2. Paspauskite {{key:Esc}}, kad nieko nebūtų pažymėta.
3. {{ui:Dabartiniai nustatymai}} skiltyje nustatykite {{ui:Vienetai}} į tą vienetą, kuriuo piešėte, pavyzdžiui {{ui:Milimetrai}}.

Vienetai svarbūs: vaizdo lango mastelis, pavyzdžiui 1:100, reiškia, kad vienas milimetras popieriuje rodo 100 tikrų milimetrų, todėl CadCraft turi žinoti, koks yra vienas brėžinio vienetas. Brėžinys, paliktas kaip {{ui:Be vienetų}}, laikomas esantis popieriaus vienetais (milimetrais ISO popieriuje, coliais JAV popieriuje).

## Sukurkite lapą

1. Spustelėkite {{ui:+}} mygtuką į dešinę nuo skirtukų po brėžiniu, arba įveskite `LAYOUT` ir paspauskite {{key:Enter}}, arba spustelėkite {{ui:Naujas lapas}}.

Atsiveria naujas skirtukas `Layout1`. Turėtumėte matyti lapą tamsesniame stalo paviršiuje: rėmelį, antraštės bloką apatiniame dešiniajame kampe ir vieną vaizdo langą virš jo, rodantį visą modelį didžiausiu standartiniu mastu, kuris telpa. Istorijoje nurodomas popierius: ISO A3 metriniams ir be vienetų brėžiniams, Tabloid (ANSI B) brėžiniams coliais ar pėdomis.

2. Spustelėkite {{ui:Visas brėžinys}}, kad lapas tilptų ekrane.

## Pasirinkite popierių

1. Paspauskite {{key:Esc}}, kad nieko nebūtų pažymėta. Dešiniojo skydelio antraštė rodo „Lapas: Layout1“.
2. Lauke {{ui:Pavadinimas}} įveskite `A-101 Plan` ir paspauskite {{key:Enter}}. Skirtukas pervadinamas.
3. Lauke {{ui:Popierius}} pasirinkite dydį.
4. Lauke {{ui:Orientacija}} pasirinkite {{ui:Horizontali}} arba {{ui:Vertikali}}.

:::warning
Pakeitus popierių, jau lape esantys objektai nejuda ir nekeičia dydžio. Po pakeitimo patikrinkite, ar rėmelis, antraštės blokas ir vaizdo langas vis dar telpa, ir perkelkite ar pakeiskite jų dydį rankenėlėmis. Perjungus tarp milimetrų ir colių popieriaus, skaičiai išlieka, todėl viskas pakeičia dydį: būsenos juosta apie tai įspės.
:::

## Nustatykite vaizdo lango mastelį

1. Spustelėkite vaizdo lango rėmelį (kraštą). Antraštė rodo „Vaizdo langas“.
2. Lauke {{ui:Mastelis}} pasirinkite `1:100`.

Modelis vaizdo lange perpiešiamas 1:100, centruotas ten, kur buvo. Sąraše siūlomi metriniai mastai nuo 10:1 iki 1:10000; brėžiniai coliais ar pėdomis taip pat gauna architektūrinius mastus (1/4" = 1'-0" ir panašius) bei inžinerinius mastus (1" = 20' ir panašius). {{ui:Pritaikyti visą modelį}} nustato tikslų, nestandartinį mastelį, kuris telpa viskam.

3. Jei planas nebėra centruotas, pakeiskite {{ui:X}} ir {{ui:Y}} skiltyje {{ui:Vaizdo centras (modelis)}} dešiniajame skydelyje: tai modelio taškas, rodomas vaizdo lango viduryje.

## Parodykite dalį modelio vaizdo lange

1. Su pažymėtu vaizdo langu dešiniajame skydelyje spustelėkite {{ui:Pažymėkite langą modelyje…}} (arba įveskite `VPVIEW` ir paspauskite {{key:Enter}}).
2. CadCraft perjungia į skirtuką {{ui:Modelis}}. Spustelėkite vieną rodomos srities kampą.
3. Spustelėkite priešingą kampą.

Grįžtate į lapą, o vaizdo langas rodo tą sritį didžiausiu standartiniu mastu, kuris telpa; istorijoje nurodoma, kuris. {{ui:Rodyti visą modelį}} grąžina visą planą standartiniu mastu.

## Pridėkite antrą vaizdo langą detalei

1. Padarykite vietos lape: pažymėkite pirmąjį vaizdo langą ir vilkite kampo rankenėlę, kad jis taptų mažesnis.
2. Įveskite `MV` ir paspauskite {{key:Enter}}, arba spustelėkite {{ui:Vaizdo langas}} grupėje „Lapai“.
3. Spustelėkite vieną naujo vaizdo lango kampą lape.
4. Spustelėkite priešingą kampą.

Naujas vaizdo langas rodo visą modelį. Istorijoje nurodomas jo mastelis.

5. Spustelėkite naujo vaizdo lango rėmelį.
6. Spustelėkite {{ui:Pažymėkite langą modelyje…}} ir pasirinkite mažą sritį aplink vieną plano kampą.
7. Lauke {{ui:Mastelis}} pasirinkite `1:20`.

Vaizdo langų rėmeliai yra sluoksnyje `Viewports`, kuris nustatytas nespausdinti, todėl rėmeliai matomi ekrane, bet ne PDF.

## Užpildykite antraštės bloką

Antraštės blokas sudarytas iš įprastų linijų ir teksto sluoksnyje `Title block`. Jame pradžioje yra brėžinio pavadinimas, pirmojo vaizdo lango mastelis, šiandienos data ir lapo numeris.

1. Dukart spustelėkite didelį pavadinimo tekstą. Atsidaro redagavimo langelis.
2. Įveskite lapo pavadinimą.
3. Spustelėkite {{ui:Gerai}} arba paspauskite {{key:Mod+Enter}}.

Tą patį padarykite kitiems laukams. Naudokite {{cmd:TEXT}}, kad įrašytumėte tuščią langelį „DRAWN BY“. Tekstas SCALE neatsinaujina pats, kai pakeičiate vaizdo lango mastelį: redaguokite jį ranka.

## Piešimas lape

Viskas, ką nubrėžiate lapo skirtuke, yra ant popieriaus, popieriaus vienetais: 3.5 aukščio tekstas yra 3.5 mm aukščio ISO lape. Pastabos, šiaurės rodyklės ir lapų rėmai priklauso čia.

Norėdami keisti patį planą, eikite į skirtuką {{ui:Modelis}} arba dirbkite per vaizdo langą (kitas skyrius); kiekvienas vaizdo langas rodo pakeitimą.

## Dirbkite su modeliu per vaizdo langą

1. Dukart spustelėkite vaizdo lango viduje, toli nuo rėmelio. Arba įveskite `MS` ir paspauskite {{key:Enter}}: su vienu vaizdo langu lape tai įveda tiesiai; su keliais spustelėkite norimą.

Rėmelis nupiešiamas storesnis, istorijoje nurodoma, kad esate viduje, o lapo skirtukas lieka pažymėtas. Visa, ką dabar piešiate ar keičiate, yra modelyje, modelio vienetais, kaip skirtuke {{ui:Modelis}}: linija, nubrėžta vaizdo lange 1:100, yra tikrais milimetrais. Sluoksniai, įšaldyti šiame vaizdo lange, čia nepasirenkami.

2. Sukite ratuką arba vilkite vidurinį mygtuką, kad priartintumėte ir pastumtumėte, ką rodo vaizdo langas. Lapas lieka savo vietoje.
3. Dukart spustelėkite bet kur už rėmelio arba įveskite `PS` ir paspauskite {{key:Enter}}.

Grįžtate į lapą. Vaizdo langas išlaiko vaizdą, kuriuo jį palikote; {{key:Mod+Z}} vienu žingsniu grąžina senąjį vaizdą. Spustelėjus bet kurį skirtuką po brėžiniu taip pat išeinama iš vaizdo lango.

:::note
Vaizdo langas, kurio rodinys užrakintas ({{ui:Rodinys užrakintas}} skiltyje {{ui:Ypatybės}}), išlaiko savo vaizdą: viduje slinkimas ir priartinimas perkelia visą lapą. Išjungto vaizdo lango į vidų įeiti negalima.
:::

## Pažymėkite vaizdą jo pavadinimu

Vaizdo pavadinimas po vaizdo langu gali rodyti vaizdo lango vaizdo pavadinimą ir jį atnaujinti:

1. Suteikite vaizdui pavadinimą: pažymėkite vaizdo lango rėmelį ir užpildykite {{ui:Vaizdo pavadinimas}} skiltyje {{ui:Ypatybės}} – arba išsaugokite vaizdą skirtuke {{ui:Modelis}} su {{cmd:NAMEDVIEW}} ir, pažymėję vaizdo langą, įveskite `VPVIEW`, `V` ir vaizdo pavadinimą: vaizdo langas rodys tą vaizdą ir perims jo pavadinimą.
2. Įveskite `VIEWLABEL` (`VL`) ir paspauskite {{key:Enter}}, tada spustelėkite, kur turi būti etiketė ({{key:Enter}} ją padeda po vaizdo lango apatiniu kairiuoju kampu).

Kai keičiasi vaizdo pavadinimas, etiketė keičiasi kartu, tuo pačiu atšaukimo žingsniu.

## Įšaldykite sluoksnį viename vaizdo lange

Norėdami paslėpti sluoksnį viename vaizdo lange, bet ne kituose (pavyzdžiui, baldus detalėje):

1. Pažymėkite vaizdo lango rėmelį arba dirbkite jo viduje (dukart spustelėkite).

{{ui:Sluoksniai}} skydelio kiekvienoje eilutėje atsiranda dar vienas mygtukas, o virš sąrašo esanti eilutė apie tai praneša.

2. Spustelėkite tą mygtuką sluoksnio eilutėje.

Sluoksnis dingsta tik iš to vaizdo lango. Dar kartą spustelėkite, kad jį atšildytumėte; {{key:Mod+Z}} atšaukia bet kurį veiksmą. Keliems sluoksniams ar vaizdo langams vienu metu įveskite `VPLAYER`: `F` (įšaldyti) arba `T` (atšildyti), sluoksnių pavadinimus (`A-*` pasirenka visus sluoksnius, prasidedančius A-), tada `C` (dabartinis), `A` (visi) arba `S` (pasirinkti). `VPLAYER` `V` (Vpvisdflt) parenka sluoksnius, kuriuos nauji vaizdo langai pradeda įšaldytus.

## Daugiau lapų

Kiekvienas {{ui:+}} prideda kitą lapą (`Layout2`, `Layout3` …) su kitu lapo numeriu. Norėdami ištrinti atidarytą lapą, paspauskite {{key:Esc}} ir spustelėkite {{ui:Naikinti šį lapą}} dešiniajame skydelyje. Klausimo nebus; {{key:Mod+Z}} jį grąžina.

Spausdinkite lapą su {{ui:Spausdinti šį lapą}} arba {{key:Mod+P}}; žr. [Spausdinimas į PDF](topic:plot-pdf).

## Dažnos klaidos

- **Vaizdo langas nieko nerodo.** Modelis tuščias arba vaizdas nukreiptas kitur. Pažymėkite rėmelį ir spustelėkite {{ui:Rodyti visą modelį}}.
- **Mastelių sąraše matomi tik santykiai, be pėdų ir colių mastelių.** Skirtuke {{ui:Modelis}} nustatykite {{ui:Vienetai}} į {{ui:Coliai}} arba {{ui:Pėdos}}.
- **1:100 atrodo dešimt kartų per didelis ar per mažas.** Brėžinio vienetai neteisingi. Nustatykite {{ui:Vienetai}} į tai, kuo iš tikrųjų yra vienas vienetas.
- **Spustelėjus planą vaizdo lange, nieko nepažymima.** Lape pažymite lapo objektus. Norėdami dirbti su planu per vaizdo langą, pirmiausia dukart spustelėkite jo viduje.
- **Spustelėjimai už vaizdo lango nieko nedaro.** Esate vaizdo lango viduje: dukart spustelėkite už jo arba įveskite `PS`, kad vėl dirbtumėte su lapu.
- **„Viewports go on a layout. Open a layout tab (or make one with LAYOUT) first.“** {{cmd:MVIEW}} veikia tik lapo skirtuke. Pirmiausia atidarykite lapo skirtuką (arba sukurkite jį su LAYOUT).
