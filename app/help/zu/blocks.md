---
title: Yenza nokufaka amabhulokhi
summary: Guqula umnyango owudwebile ube ibhulokhi, uwubeke futhi ezindaweni, ezikalini nasezingeni ahlukene, futhi uhlanze amabhulokhi angasetshenziswa.
keywords: ibhulokhi, bmake, faka, ddinsert, uphawu, purge, explode, redefine, base point, reference, count, bcount, uhlu, csv, izici, ukukhishwa kwedatha
from: 125a129d
---

## Okuzokwenza

Uphawu lomnyango olwenziwe libe yibhulokhi ebizwa `DOOR-900`, bese luvela kathathu: njengoba lwadwetshwa, lujikiwe ngama-degree angu-90, nalulingiswe njengesibuko.

Ibhulokhi iqoqo lezinto elinegama. Uyidweba kanye; yonke indawo oyisebenzisa kuyo iba **isethenjwa leblokhi** elibuyela kwincazelo yalo eyodwa. Isigaba sangakwesokunxele esithi {{ui:Amabhulokhi}} sibala amabhulokhi asomdwebweni nokuthi yiwaphi kangaki asetshenziswa ngamunye.

## Dweba umnyango

1. Bhala `L` bese ucindezela {{key:Enter}}.
2. Bhala `0,0` bese ucindezela {{key:Enter}}.
3. Bhala `@0,900` bese ucindezela {{key:Enter}}, bese ucindezela {{key:Enter}} futhi. Lena yiqabunga lomnyango.
4. Bhala `A` bese ucindezela {{key:Enter}}.
5. Bhala `C` bese ucindezela {{key:Enter}} ukuze unikeze isikhungo kuqala.
6. Bhala `0,0` bese ucindezela {{key:Enter}} wesikhungo.
7. Bhala `900,0` bese ucindezela {{key:Enter}} wephoyinti lokuqala.
8. Bhala `0,900` bese ucindezela {{key:Enter}} wephoyinti lokugcina. Lena ukuvuleka komnyango.
9. Chofoza {{ui:Konke}}.

Imisnsalo ihamba ngokuphambene nokuzungeza iwotshi kusuka ephoyintini lokuqala iye ephoyintini lokugcina.

## Yenza ibhulokhi

1. Bhala `B` bese ucindezela {{key:Enter}}, noma uchofoze {{ui:Yenza}} eqenjini elithi {{ui:Amabhulokhi}}.
2. Uma kuvela `Enter block name`, bhala `DOOR-900` bese ucindezela {{key:Enter}}.
3. Uma kuvela `Specify insertion base point`, bhala `0,0` bese ucindezela {{key:Enter}}. Lena yisihloko: iphoyinti elifika lapho ubeka khona ibhulokhi.
4. Uma kuvela `Select objects`, hudula iwindi uzungeze iqabunga nomnsalo.
5. Cindezela {{key:Enter}}.

Umlando uthi `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` Iphaneli {{ui:Amabhulokhi}} ibonisa i-DOOR-900 nge-`1×` ecaleni kwayo: isethenjwa elilodwa. Chofoza umnyango: manje ukhethwa njengento eyodwa, "Isethenjwa leblokhi".

:::tip
Ungakhetha izinto kuqala bese ubhala `B`. CadCraft isabuza igama nephoyinti lesisekelo, bese isebenzisa ukukhetha kwakho.
:::

## Faka ibhulokhi

1. Bhala `I` bese ucindezela {{key:Enter}}, noma uchofoze {{ui:Faka}} eduze kwe-DOOR-900 kuphaneli {{ui:Amabhulokhi}}.
2. Uma kuvela `Enter block name or [File/Library] <DOOR-900>`, cindezela {{key:Enter}}. (Inkinobho ethi {{ui:Faka}} kuphaneli igcwalisela wena igama.)
3. Umnyango ulandela isikhombisi sokuhlola. Chofoza lapho isihloko somnyango kufanele siye khona.

Kuvela omunye umnyango.

## Faka ujikiwe noma ushintshwe ngesikali

1. Bhala `I` bese ucindezela {{key:Enter}}, bese ucindezela {{key:Enter}} ukuze wamukele igama.
2. Uma kuvela `Specify insertion point [Scale/Rotate]`, bhala `R` bese ucindezela {{key:Enter}}.
3. Bhala `90` bese ucindezela {{key:Enter}}. Ukubukwa kwangaphambili kuyajika.
4. Chofoza ukuze uyibeke.

Esikhundleni salokho bhala `S` ukuze usethe isici sesikali; sisebenza kuzo zombili izinqondo. Isikali nokujikeleza kuyakhunjulwa ukufaka okulandelayo. Ukuze ulingise umnyango, uwufake bese usebenzisa {{cmd:MIRROR}} kwisethenjwa.

## Shintsha ibhulokhi elibekiwe

Khetha isethenjwa leblokhi. Kuphaneli yesokudla ungashintsha {{ui:X}}, {{ui:Y}}, {{ui:Isikali X}}, {{ui:Isikali Y}} kanye ne-{{ui:Ukujikeleza}}. {{ui:Isikali X}} esinegethivu siyawuphendula umnyango.

## Chaza kabusha ibhulokhi

Ukuze ushintshe yonke imiyango ngesikhathi esisodwa, yenza ibhulokhi ngegama elifanayo:

1. Dweba inguqulo entsha yomnyango.
2. Bhala `B` bese ucindezela {{key:Enter}}, bese ubhala `DOOR-900`.
3. Uma kuvela `Block "DOOR-900" already exists. Redefine it?`, bhala `Y` bese ucindezela {{key:Enter}}.
4. Nikeza iphoyinti lesisekelo bese ukhetha izinto ezintsha, njengakwangaphambili.

Yonke isethenjwa le-DOOR-900 manje likhombisa inguqulo entsha.

Noma uhlele ibhulokhi qobo: {{ui:Amabhulokhi}} › {{ui:Okuningi}} › {{ui:Hlela ibhulokhi}} ({{cmd:BEDIT}}) iyivula iyodwa, bese {{ui:Londoloza ibhulokhi}} iyibuyisela. Bona [Izici zebhulokhi](topic:attributes#change-a-block-the-block-editor).

## Bala amabhulokhi bese uthumela uhlu

Bhala {{cmd:COUNT}} (noma {{ui:Amabhulokhi}} › {{ui:Okuningi}} › {{ui:Bala amabhlogo}}), bese:

- chofoza umnyango owodwa: yonke imiyango kule ndawo ikhethiwe, nomlando uthi zingaki lapha nakulo lonke umdwebo;
- noma cindezela {{key:Enter}}: umlando ubala ibhulokhi ngalinye nenani lalo, elikhulu kuqala;
- noma bhala `E`, bese `C` ukuze uthole i-CSV yezinani (emodelini, emashidini, ngokuphelele) noma `A` ukuze uthole umugqa owodwa ngesethenjwa ngasinye nongqimba lwaso, indawo, ukujikeleza nalo lonke inani lezici — uhlu olungavulwa kuhlelo lwezibalo.

Amabhulokhi angenagama (izilinganiso, amatafula) nezethenjwa ngaphakathi kwamanye amabhulokhi aziboliwe. Amaseli aqala njengefomula (`=`, `+`, `-`, `@`) athola `'` phambili ukuze uhlelo lwezibalo lubonise njengombhalo.

## Hlakaza nokususa

- {{cmd:EXPLODE}} (`X`) iguqula isethenjwa leblokhi esikhethiwe ibe izinto ezihlukene. Incazelo ihlala.
- {{cmd:PURGE}} (`PU`) isusa izincazelo zamabhulokhi okungasasetshenziswa lutho. Umlando uthi zingaki ezisusiwe.

## Amagama amabhulokhi

Igama lingaba nezinhlamvu ezingu-255 futhi lingaba namawasha, kodwa alikwazi ukuqala ngenkwenkwezi, futhi alikwazi ukuba nalezi zinhlamvu `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` noma backtick. Uma ulondoloza i-DXF R12, amagama abhalwa ngamachibi amakhulu; ezinye izinhlamvu ngaphandle kwezinhlamvu, izinombolo, `$`, `_` no-`-` ziba `_`, namagama anqunywa abe ngezinhlamvu ezingu-31; umlando uthi zingaki ezishintshiwe. Amagama amafushane ngamachibi amakhulu, izinombolo namahyphen, njengo `DOOR-900`, ahlala engashintshiwe. I-DWG elondoloziwe igcina amagama njengoba ubhale, ngamachibi amakhulu nancane; izinhlamvu i-DWG engazivumeli kuphela ziyashintsha (`|` iba `$0$`, ezinye ziba `_`).

## Bhala ibhulokhi noma izinto efayeleni lazo

Bhala `W` ({{cmd:WBLOCK}}) bese ukhetha **Izinto**, **Ibhulokhi** noma **Lonke umdwebo**. Umphumela uyi-DWG noma i-DXF entsha equkethe kuphela izingqimba, izitayela namabhulokhi ayisebenzisayo, nephoyinti lakho lesisekelo njengemvelaphi. Ngezinto ungazigcina, uziguqule zibe yibhulokhi, noma uzisuse kulo mdwebo.

## Amaphutha ajwayelekile

- **Ibhulokhi lifike kude nesikhombisi sokuhlola.** Iphoyinti lesisekelo belingekho ezintweni. Yenza ibhulokhi futhi ngephoyinti lesisekelo esikhonweni noma esihlokweni.
- **"No objects selected; nothing made."** Ucindezele {{key:Enter}} ngaphambi kokukhetha noma yini.
- **"This drawing has no blocks yet: F inserts one from a file, L from the library (or make one with BLOCK)."** Bhala `F` ukuze uletha ibhulokhi kwelinye umdwebo, noma `L` ukuze uthole umtapo. Bona [Faka kusuka efayeleni noma emtapweni](topic:insert-from-file-and-library).
- **"A viewport cannot go in a block."** Susa izinhlaka zezibuko sokubuka ekukhetheni.
