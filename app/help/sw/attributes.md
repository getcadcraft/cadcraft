---
title: Sifa za bloku
summary: Tazama na ubadilishe thamani ambazo marejeo ya bloku yanabeba, kama nambari ya kipengee au mtengenezaji, na uzihifadhi unapohifadhi nakala.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, kichwa cha mchoro, hariri papo hapo, mhariri wa sifa, attdef, bainisha sifa, bedit, mhariri wa bloku, bclose, sifa, attributes, attdef, attrib, lebo, nambari ya kipengee, thamani, isiyoonekana, thabiti, bloku, sifa, orodha, lebo ya vifaa
from: 34d307c7
---

## Sifa ni nini

Sifa ni thamani yenye jina inayosafiri pamoja na marejeo ya bloku: nambari ya kipengee ya lebo ya vifaa, jina la lebo ya chumba, au kiwango cha moto cha mlango. Ufafanuzi wa bloku unasema ni sifa zipi inazo (kila moja ina **lebo**, **kidokezo**, **chaguomsingi** na mahali, ukubwa na pembe ya maandishi yake). Kila marejeo ya bloku hubeba thamani zake yenyewe.

Baadhi ya sifa ni **zisizoonekana**: zinashikilia data, kama mtengenezaji au nambari ya modeli, lakini hazichorwi kamwe. Baadhi ni **thabiti**: ni zile zile kwa kila marejeo, zimewekwa na bloku.

## Sifa zinatoka wapi

- Bloku katika faili za DWG na DXF unazofungua zinahifadhi sifa zao, pamoja na thamani za kila marejeo.
- Bloku unazoleta kwa {{cmd:INSERT}} na chaguo la {{ui:Faili}} zinahifadhi zake. Tazama [Ingiza kutoka faili au maktaba](topic:insert-from-file-and-library).
- Vipengee vya maktaba vinaingia kama bloku zenye sifa: nambari inayoonekana ya kipengee na data ya kipengee, isiyoonekana.

- Bloku unazotengeneza mwenyewe: kwanza bainisha sifa kwa {{cmd:ATTDEF}} (hapa chini), kisha uzichague pamoja na vitu vingine unapotengeneza bloku.

## Bainisha sifa za bloku zako mwenyewe

1. Chora mistari ya bloku, kwa mfano lebo ya chumba.
2. Chagua {{ui:Blocks}} › {{ui:More}} › {{ui:Bainisha sifa}}, au andika `ATT` kisha ubonyeze {{key:Enter}}.
3. Historia inaonyesha hali (`Invisible=No Constant=No Preset=No`). Andika `I`, `C` au `P` kubadilisha moja, kisha bonyeza {{key:Enter}} zikiwa sahihi. Thamani zisizoonekana zinahifadhiwa lakini hazichorwi; thamani thabiti ina thamani ile ile kwa kila marejeo; thamani iliyowekwa awali haiulizwi unapoingiza bloku.
4. Andika lebo (kwa mfano `ROOM_NO`: herufi kubwa, bila nafasi), kidokezo (`Nambari ya chumba`) na thamani chaguomsingi (`101`).
5. Bonyeza mahali thamani inapoenda, kisha toa urefu na mzunguko. Lebo inaonekana kwenye mchoro.
6. Tengeneza bloku kwa {{cmd:BLOCK}}, ukichagua mistari na ufafanuzi wa sifa pamoja. Marejeo yanayochukua nafasi yake yanapata thamani chaguomsingi; kila {{cmd:INSERT}} mpya inaziomba.

Ufafanuzi wa sifa uliochaguliwa unaonyesha {{ui:Tag}}, {{ui:Prompt}}, {{ui:Default}} na hali zake kwenye {{ui:Properties}}.

## Badilisha bloku: mhariri wa bloku

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}} ({{cmd:BEDIT}}, `BE`) inafungua bloku peke yake: andika jina lake (au chagua marejeo kwanza). Upau juu unaonyesha bloku unayoihariri. Chora, futa na ubadilishe vitu vyake kwa amri za kawaida, na ongeza au ubadilishe ufafanuzi wa sifa. Kisha bonyeza {{ui:Save block}} (au andika {{cmd:BCLOSE}} na `S`): kila marejeo yanaonyesha mabadiliko, na {{key:Mod+Z}} moja inatengua yote. {{ui:Discard changes}} (`BCLOSE`, `D`) inaacha bloku kama ilivyokuwa.

Ulipoongeza, kuondoa au kubadilisha ufafanuzi wa sifa, kuhifadhi pia kunalinganisha kila marejeo: thamani ulizoandika zinabaki, sifa mpya inapata chaguomsingi yake, iliyoondolewa inatoweka, na kila sifa inarudi mahali ufafanuzi unapoiweka. Historia inasema marejeo mangapi yamesasishwa.

## Hariri kichwa cha mchoro pale kilipo (REFEDIT)

Kichwa cha mchoro kwenye karatasi mara nyingi kiko ndani ya bloku. Ili kubadilisha mistari au maandishi yake bila kuondoka kwenye karatasi:

1. Chagua kichwa cha mchoro, kisha {{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}} (au andika {{cmd:REFEDIT}}).
2. Yaliyomo yake yanakuwa vitu vya kawaida pale yalipo; kila kitu kingine kinafifia na hakiwezi kubadilishwa.
3. Badilisha, futa au chora: vitu vipya vinakuwa sehemu ya bloku.
4. Bonyeza {{ui:Hifadhi bloku}} kwenye upau juu (au andika {{cmd:REFCLOSE}} na `S`). Kila marejeo yanaonyesha mabadiliko, na {{key:Mod+Z}} moja inatengua uhariri wote. {{ui:Discard}} inaacha bloku kama ilivyokuwa.

Mchoro ulio na kiungo, bloku inayobadilika, au marejeo yaliyopimwa tofauti kwa upana na urefu hayawezi kuhaririwa papo hapo: tumia {{cmd:BEDIT}} (au fungua mchoro ulio na kiungo).

:::note
Hifadhi au tupa katika mhariri wa bloku kabla ya kuhifadhi mchoro: faili iliyohifadhiwa wakati mhariri uko wazi ina bloku kama ilivyokuwa awali.
:::

## Jaza sifa unapoweka bloku

1. Andika `I` kisha ubonyeze {{key:Enter}}, andika jina la bloku kisha ubonyeze {{key:Enter}}.
2. Bonyeza mahali inapokwenda.
3. CadCraft inaomba kila thamani, kwa mfano `Enter Item number (ITEM) <>`. Andika thamani kisha bonyeza {{key:Enter}}, au bonyeza {{key:Enter}} kubakiza chaguomsingi lililoonyeshwa kwenye mabano ya pembe.

Thamani ambazo bloku inaziweka kama zilizowekwa awali, na thabiti, hazihitajiki. Zinachukua chaguomsingi lake.

## Tazama na ubadilishe thamani

1. Bonyeza marejeo ya bloku.
2. Kwenye paneli ya kulia, chini ya {{ui:Sifa}}, kila lebo ina thamani yake. Zisizoonekana zinasema `imefichwa`.
3. Bonyeza thamani, andika mpya kisha bonyeza {{key:Enter}}.

Mchoro unaonyesha thamani mpya papo hapo. Kila mabadiliko ni hatua moja: {{key:Mod+Z}} inaitengua.

**Mhariri wa sifa.** Bofya mara mbili marejeo yenye sifa (au {{cmd:EATTEDIT}}): kisanduku cha mazungumzo cha {{ui:Edit attributes}} kinaorodhesha kila lebo pamoja na ujumbe na thamani yake. Andika thamani mpya; bofya safu ili kubadilisha {{ui:Height}}, {{ui:Rotation}}, {{ui:Width factor}}, {{ui:Justify}}, {{ui:Layer}}, {{ui:Color}} na {{ui:Invisible}} za sifa hiyo kwa marejeo haya pekee. {{ui:Apply}} inaweka kisanduku wazi; {{ui:OK}} inatumia na kufunga. Kila {{ui:Apply}} au {{ui:OK}} ni hatua moja ya kutendua.

**Kwenye mstari wa amri**, {{cmd:ATTEDIT}} inaomba kila thamani kwa zamu: andika mpya, au bonyeza {{key:Enter}} kuibakiza.

## Badilisha ufafanuzi wa sifa (BATTMAN, ATTSYNC)

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}} ({{cmd:BATTMAN}}) inaorodhesha sifa za bloku: badilisha lebo, ujumbe au chaguomsingi, weka alama kwenye {{ui:Invisible}}, {{ui:Constant}} au {{ui:Preset}}, na usogeze juu au chini (mpangilio ndio thamani zinavyoombwa). Kwa {{ui:Update the references (values kept)}} imewekwa alama, {{ui:Apply}} pia inalinganisha kila marejeo; lebo iliyopewa jina jipya inabakiza thamani zake. Kila {{ui:Apply}} ni hatua moja ya kutendua.

{{cmd:ATTSYNC}} inalinganisha marejeo na ufafanuzi wa bloku zao kwa mkono: `S` inachagua marejeo, `N` inataja bloku, `A` inafanya kila bloku. Thamani zinabakizwa.

Thamani za sehemu za kipengee cha maktaba (kitambulisho chake, toleo, leseni na sifa ya mwandishi) zinaonyeshwa lakini hazihaririki, ili kukagua masasisho kuendelee kufanya kazi. Nambari yake ya kipengee na kiasi ni yako kubadilisha.

## Ziorodheshe

Chagua marejeo kisha andika `LI` (kwa {{cmd:LIST}}). Historia inaonyesha kila sifa kama `TAG = value`, pamoja na `(isiyoonekana)` au `(thabiti)` pale inapohusika.

## Kusogeza, kuzungusha na kutenganisha

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} na {{cmd:MIRROR}} zinabakiza thamani; maandishi yanasogea na bloku na yanabaki yanasomeka.
- {{cmd:EXPLODE}} inageuza sifa zinazoonekana kuwa maandishi ya kawaida pamoja na thamani zake. Zisizoonekana zinaondolewa.

## Kuhifadhi

DWG iliyohifadhiwa na DXF iliyohifadhiwa zote zinahifadhi kila sifa: ufafanuzi wa kila bloku (pamoja na zisizoonekana, thabiti na zilizowekwa awali) na thamani za kila marejeo. Programu nyingine za CAD zinazisoma kama sifa za kawaida za bloku.

Katika DXF R12, thamani ndefu kuliko herufi 255 inakatwa hadi 255, na historia inasema hivyo.

## Makosa ya kawaida

- **Thamani haionekani kwenye mchoro.** Ni isiyoonekana, au ni tupu. Thamani zisizoonekana bado zinaonekana kwenye paneli ya kulia.
- **Thamani niliyoandika ilienda kwenye mstari wa amri.** Bofya kwanza ndani ya kisanduku cha thamani kwenye paneli ya kulia.
