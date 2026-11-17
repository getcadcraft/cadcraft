---
title: Fungua DWG, ihariri na uhifadhi nakala
summary: Fungua mchoro wa DWG ulioutumiwa, kagua kilichoingia, fanya mabadiliko, kisha tuma nakala kurudi kama DWG au DXF.
keywords: dwg, dxf, fungua, leta, hamisha, hifadhi, r12, mzunguko kamili, mshauri, xref, kagua mchoro, saveas, hifadhi kama, hifadhi dwg, umbizo
from: 49de4bf6
---

## Utakachofanya

Fungua DWG kutoka kwa mshauri, kagua kile CadCraft ilichoweza na isichoweza kuonyesha, ongeza maelezo, chapisha karatasi kwenda PDF na uhifadhi nakala ya kutuma kurudi, kama DWG au DXF.

## Fungua faili

1. Bonyeza {{key:Mod+O}}, au bofya {{ui:Open}}.
2. Chagua faili ya `.dwg`.

Mstari wa hali unaonyesha "Reading …" wakati mchoro unasomwa. Ukikamilika, mchoro unajaza skrini, na historia inasema, kwa mfano, "Imefunguliwa plan.dwg: vitu 18,240 kwenye tabaka 64", pamoja na muda uliochukua.

:::offline
Uko nje ya mtandao. Ikiwa kitufe cha {{ui:Save for offline}} kinasoma "Offline ready", faili za DWG zinafunguka kawaida. Kama sivyo, na hakuna DWG iliyofunguliwa katika kichupo hiki bado, kufungua DWG kunaweza kushindwa kwa sababu msomaji wa DWG wa CadCraft hupakuliwa na DWG ya kwanza: fungua DXF badala yake, au hifadhi CadCraft kwa matumizi ya nje ya mtandao wakati ujao ukiwa mtandaoni. Angalia [Kufanya kazi nje ya mtandao](common:offline).
:::

## Kagua kilichoingia

1. Angalia sehemu ya {{ui:Drawing}} ya paneli ya kushoto: umbizo na toleo, vitengo, idadi ya vitu na tabaka, na karatasi.
2. Soma kisanduku cha "About this file" chini yake, ikiwa kipo.

Kisanduku kinaorodhesha:

- **Bado haionyeshwi:** vitu ambavyo CadCraft bado haiwezi kuchora, kwa aina na idadi. Vinaachwa nje, havibahatishwi.
- **Mipangilio (karatasi) imekuja:** zifungue kwa vichupo vilivyo chini ya mchoro.
- **Vipimo vinavyoweza kusomwa tu kama vilivyochorwa.**

3. Bofya vichupo vilivyo chini ya mchoro kuona kila karatasi.
4. Angalia {{ui:Units}} katika {{ui:Current settings}} (bila kitu kilichochaguliwa, kichupo cha {{ui:Model}}). Ikisema {{ui:Unitless}} lakini unajua mchoro uko kwa milimita, iweke, ili kipimo cha karatasi na cha uchapishaji visomeke sawa.

:::tip
Ukitarajia sehemu ya mchoro na huioni, angalia paneli ya {{ui:Layers}}: tabaka linaweza kuwa limezimwa au limeganda kwenye faili. Bofya jina lake ili kulifanya la sasa; hilo linaliwasha.
:::

## Fanya mabadiliko yako

1. Tengeneza tabaka la maelezo yako: bofya {{ui:New layer}}, andika `NOTES` kisha bonyeza {{key:Enter}}.
2. Andika `DT` kisha bonyeza {{key:Enter}}.
3. Bofya mahali maelezo yanapoenda.
4. Andika urefu wa maandishi unaofaa mchoro (angalia [Ongeza maandishi na lebo](topic:text)) kisha bonyeza {{key:Enter}}.
5. Bonyeza {{key:Enter}} ili kuweka mzunguko kuwa 0.
6. Andika maelezo yako kisha bonyeza {{key:Enter}}.
7. Bonyeza {{key:Enter}} tena ili kumaliza.

Kuhariri vipimo vilivyoingizwa ni sawa: mara tu unapobadilisha kimoja, CadCraft inakichora upya kwa mtindo wake.

## Chapisha karatasi kwa ukaguzi

1. Bofya kichupo cha karatasi.
2. Bonyeza {{key:Mod+P}}.
3. Bofya {{ui:Download PDF}}.

Angalia [Chapisha kwenda PDF](topic:plot-pdf).

## Hifadhi nakala

1. Bonyeza {{key:Mod+S}}, au bofya {{ui:Save}}.

Umefungua DWG, kwa hiyo kivinjari kinapakua `<name>.dwg`, katika toleo ambalo DWG ilikuja nalo. Historia inasema, kwa mfano, "Nakala imehifadhiwa kama Plan.dwg (DWG (AutoCAD 2018))." na inaorodhesha, kwenye mistari iliyo chini yake, chochote kilichobadilika njiani.

2. Soma mistari hiyo kabla ya kutuma faili. [Kile DWG inahifadhi na kubadilisha](topic:files#what-a-dwg-keeps-and-changes) inaeleza kila moja.

DWG yako ya asili haibadilishwi kamwe. Kila kuhifadhi ni upakuaji mpya.

## Hifadhi kama DWG au DXF

Ili kuchagua umbizo mwenyewe:

1. Bonyeza {{key:Mod+Shift+S}}, au bofya {{ui:Save as}}.

Kidirisha cha {{ui:Save a copy as}} kinafunguka na chaguo nne, kila moja ikiwa na jina la faili litakalopewa: {{ui:DWG}}, pamoja na orodha yake ya {{ui:Version}}, {{ui:DXF R12}}, {{ui:DXF 2000}} na {{ui:DXF 2000 (binary)}}. Umbizo na toleo la sasa la mchoro tayari vimechaguliwa.

2. Bofya umbizo unalotaka. Kwa DWG, chagua toleo ambalo ofisi nyingine inatumia, au la zamani zaidi: AutoCAD 2018, 2013, 2010, 2007, 2004 au 2000.
3. Bofya {{ui:Save}}.

Nakala inapakuliwa. Kuanzia sasa, {{key:Mod+S}} inahifadhi mchoro huu katika umbizo hilo, na michoro mipya inaanza nalo, katika kivinjari hiki. {{ui:Cancel}} au {{key:Esc}} hazihifadhi chochote, na historia inasema "Not saved."

Chagua ipi:

- **DWG** huhifadhi zaidi: karatasi zenye viewport zake, vipimo halisi, miundo ya hatch, majina ya tabaka na bloku kama ulivyoyaandika, na maandishi ya mistari mingi kama maandishi ya mistari mingi. Toleo la AutoCAD 2000 hufunguka katika programu nyingi zaidi; 2004 na zaidi pia huhifadhi rangi halisi.
- **DXF 2000** ni faili ya maandishi inayohifadhi karibu kila kitu DWG inachohifadhi: kila karatasi kama mpangilio pamoja na viewport zake, vipimo halisi, miundo ya hatch, rangi halisi, upana wa mistari, aina za mistari, na majina kama ulivyoyaandika. Hufunguka katika AutoCAD 2000 na zaidi, na katika programu nyingi za CAD. Multileader zinakuwa mistari, vichwa vya mishale na maandishi yanayochora. DXF iliyofunguliwa katika toleo la 2000 au zaidi huhifadhiwa kama DXF 2000.
- **DXF 2000 (binary)** ina maudhui yale yale ya DXF 2000 katika umbo la binary la umbizo hilo: faili ndogo inayohifadhi kila namba kwa usahihi kamili. Faili za DXF za binary kutoka programu nyingine zinafunguka kama za maandishi, na mchoro uliofunguliwa kutoka DXF ya binary unahifadhiwa tena kama binary.
- **DXF R12** hufunguka katika karibu programu yoyote ya CAD. Inahifadhi karatasi ya kwanza pamoja na viewport zake, na karatasi nyingine za CadCraft. Inarahisisha vitu vipya zaidi, kama maandishi ya mistari mingi na hatch.

## Atakachokiona ofisi nyingine

Katika DWG:

- Mistari, mapinde, miduara, duaradufu, polilaini, maandishi, maandishi ya mistari mingi, bloku zenye sifa zake, kujaza imara, miundo ya hatch na tabaka kama unavyoviona.
- Vipimo halisi: programu nyingine inavipima upya vikinyoshwa.
- Kila karatasi, pamoja na karatasi yake na viewport zake.
- Multileader kama multileader. Katika toleo la AutoCAD 2000, rangi halisi zinakuwa rangi ya kawaida iliyo karibu zaidi.

Katika DXF R12:

- Mistari, mapinde, miduara, polilaini, maandishi, marejeo ya bloku na vipimo kama unavyoviona. Vipimo vinabaki vipimo halisi.
- Majina ya tabaka kwa herufi kubwa, nafasi zikigeuzwa kuwa `_`.
- Karatasi ya kwanza kama nafasi ya karatasi ya mchoro, pamoja na viewport zake. Karatasi zaidi zinafika kama bloku zinazoitwa `CCLAYOUT_1` na kadhalika; ikiwa zinahitaji kila karatasi kama mpangilio, chapisha PDF za kila karatasi kwa ajili yao pia.
- Maandishi ya mistari mingi kama mistari tofauti, duaradufu kama polilaini, na hatch kama mipaka.

Kwa vyovyote vile, kitu chochote kilichoorodheshwa kama "Bado haionyeshwi" ulipofungua DWG **hakipo** kwenye nakala, isipokuwa historia inasema kilihifadhiwa: vitu vya OLE vya DWG na yabisi zake za 3D katika nafasi ya modeli huandikwa tena unapohifadhi kama DWG. Mwambie mpokeaji, na tuma PDF pia.

## Makosa ya kawaida

- **"CadCraft opens DWG and DXF drawings."** CadCraft inafungua michoro ya DWG na DXF pekee. Faili ina kiendelezi kingine. Hakikisha ni `.dwg` au `.dxf`.
- **"This drawing could not be read."** Mchoro huu haukuweza kusomwa. DWG imeharibika au iko katika toleo ambalo msomaji hawezi kulishughulikia. Omba DXF, au DWG iliyohifadhiwa katika toleo la zamani.
- **"This binary DXF ends in the middle of an object."** DXF hii ya binary inaisha katikati ya kitu. Faili imekatwa au imeharibika. Andika RECOVER ili kufungua kile kinachoweza kusomwa, au omba faili tena.
- **Faili iliyohifadhiwa inaitwa `name (1).dwg` au `name (1).dxf`.** Kivinjari hufanya hivyo faili yenye jina hilo tayari ipo kwenye folda.
- **Wana programu ya zamani isiyoweza kufungua DWG.** Hifadhi kama DWG yenye {{ui:Version}} {{ui:AutoCAD 2000}}, au kama {{ui:DXF R12}}: karibu programu yoyote ya CAD inaifungua.
- **Sehemu za mchoro hazipo.** Michoro iliyounganishwa (xrefs) haipakiwi hadi uchague faili zao ({{cmd:XREF}}, `R`), na picha zinaonyeshwa kama fremu zenye majina ya faili.
