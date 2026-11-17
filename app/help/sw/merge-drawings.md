---
title: Unganisha mabadiliko ya watu wawili kwenye mchoro mmoja
summary: Ruhusu git, Fossil au Mercurial kuunganisha nakala mbili za DWG au DXF kitu kwa kitu, kwa kutumia ufunguo ambao CadCraft huweka kwenye kila kitu.
keywords: unganisha, git, fossil, mercurial, udhibiti wa matoleo, tofautisha, mgongano, pande tatu, cadcraft merge, ufunguo, gitattributes, DWG, DXF
from: 71482bf9
---

Watu wawili wanahariri mchoro mmoja. Wakibadilisha vitu tofauti, kuunganisha kunaweza kuwa otomatiki: hakuna cha kufanya upya kwa mkono.

## Kinachoufanya ufanye kazi

CadCraft hupa kila kitu unachochora **ufunguo** mfupi usiobadilika kamwe na usiopewa vitu viwili. Huhifadhiwa pamoja na kitu kwenye DWG au DXF (kama data ya ziada ambayo programu nyingine huihifadhi). Kuunganisha hutafuta vitu kwa ufunguo huo, si kwa nafasi yake kwenye faili, kwa sababu kila programu hupanga upya nafasi zake inapohifadhi. Zima hili katika Mipangilio › CadCraft › Faili rafiki kwa kuunganisha ukikataa kuunganisha kamwe; faili hupungua kwa takriban asilimia 10.

Mchoro uliohifadhiwa kabla ya funguo kuwepo bado unaunganishwa: vitu vyake hupata ufunguo kutokana na nafasi yao kwenye faili, sawa kwa kila anayeufungua.

## Iweke

Git inahitaji mistari miwili mara moja kwa kila hifadhi:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# mara moja, kwenye kila kompyuta
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bila git, iendeshe kwa mkono: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil na Mercurial hutumia faili hizo tatu hizo hizo kwenye mpangilio wao wa zana ya kuunganisha.

## Kanuni

- Kitu kilichobadilishwa upande mmoja tu kinachukuliwa. Badiliko lile lile pande zote mbili linachukuliwa mara moja.
- Sifa ile ile iliyobadilishwa kwa njia mbili ni **mgongano**: upande wako unabaki na ripoti inaorodhesha thamani zote mbili. Fungua matokeo, angalia kitu hicho, kirekebishe kwa mkono.
- Kitu kilichoongezwa upande wowote kinabaki. Kitu kilichoondolewa upande mmoja na kisichoguswa upande mwingine kinaondolewa. Kimeondolewa upande mmoja na kubadilishwa upande mwingine: kinaondolewa, na kinaripotiwa.
- Tabaka, bloku, mitindo ya maandishi na vipimo, karatasi na mionekano yenye majina huunganishwa kwa njia hiyo hiyo. Vizuizi hufuata vitu wanavyotaja.
- Matokeo yanaandikwa kwa muundo na toleo sawa la faili kama lako.

Hayaunganishwi: mpangilio wa vitu vinavyochorwa ni wako, kisha vitu ambavyo upande mwingine uliongeza. Mabadiliko ya ufafanuzi ule ule wa bloku pande zote mbili ni mgongano, hayachanganywi kamwe. Hakuna kinachotumwa; yote yanaendeshwa kwenye kompyuta yako.
