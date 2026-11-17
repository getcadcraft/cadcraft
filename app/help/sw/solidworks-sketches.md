---
title: Hamisha michoro kwenda na kutoka kwa programu nyingine za modeli ya sehemu
summary: Andika makro inayojenga upya mchoro wako kama mchoro mmoja wenye vikwazo katika programu ya modeli ya sehemu, na ufungue mchoro uliohamishwa kutoka huko.
keywords: mchoro, makro, swb, vba, hamisha, modeli ya sehemu, vigezo vya kimataifa, milinganyo, mahusiano, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks haipatikani mahali CadCraft inapojengwa, kwa hiyo hakuna mwelekeo wowote uliojaribiwa katika SolidWorks bado. Kinachoandikwa na CadCraft kinakaguliwa kwa muundo tu. Kagua matokeo kabla ya kuyategemea.
:::

## Tuma mchoro kama mchoro wa awali

1. Weka vikwazo na vipimo kwenye mchoro (ona [Weka vikwazo kwenye mchoro](topic:constraints)).
2. Kwenye kikundi cha {{ui:Parametric}}, fungua {{ui:More}} kisha uchague {{ui:Macro for SolidWorks (.swb)}}, au andika {{cmd:SWBOUT}}.

   Faili lenye jina la mchoro, linaloishia `.swb`, linapakuliwa.
3. Katika SolidWorks, chagua **Tools > Macro > Run** kisha uchague faili hilo.

Makro inatengeneza sehemu mpya kutoka kiolezo chako cha sehemu cha msingi, inafungua mchoro wa awali kwenye Front Plane, na kuchora mistari, duara, matao, nukta na polilaini za modeli ndani yake, pamoja na:

- vikwazo vyako kama mahusiano ya mchoro,
- vikwazo vyako vya vipimo kama vipimo vyenye majina yale yale (`d1@Sketch1`),
- vigezo vyako mwenyewe kama vigezo vya kimataifa,
- kila usemi kama mlinganyo.

Sehemu inatumia kitengo cha urefu cha mchoro. Maandishi, bloku, mistari ya kivuli, vipimo na karatasi si sehemu ya mchoro wa awali; historia inaorodhesha vilivyoachwa. Misemo isiyo na umbo la mlinganyo huko (`if`, `min`, `max`, `round`, `%` na mingine michache) imeandikwa kama thamani yake ya sasa, na historia inasema hivyo. Chochote ambacho makro haiwezi kutengeneza kinaandikwa kwenye faili la kumbukumbu karibu na makro, na ujumbe unafupisha mwishoni.

## Fungua mchoro wa awali kutoka sehemu

1. Katika SolidWorks, endesha makro ya kuhamisha ya CadCraft (ipakue katika programu ya PartCraft: File > Export > Export macro to bring parts back) kwenye sehemu. Inaandika faili la `.json` katika muundo wa `cadcraft-sw-export` karibu na sehemu.
2. Katika CadCraft, chagua {{ui:Open}} kisha uchague faili hilo la `.json`.
3. Sehemu ikiwa na michoro kadhaa, chagua moja.

Mchoro wa awali unakuwa mchoro, kwa milimita: mistari, matao, duara na nukta zake, mahusiano yake kama vikwazo, vipimo vyake kama vikwazo vya vipimo vyenye majina kama yalivyokuwa (`D1`, `D2` …), vigezo vyake vya kimataifa kama vigezo, na milinganyo ya vipimo vyake kama misemo yake. Historia inaorodhesha kilichoachwa, kama mahusiano ambayo CadCraft haina. Mahali mchoro ulipo kwenye sehemu hauhifadhiwi: unachorwa bapa, kama unavyoonekana kwenye ndege yake.
