---
title: Chora kwa kuratibu
summary: Chora muhtasari sahihi wa sakafu kwa kuandika kuratibu kamili, jamaa na za polar, pamoja na uingizaji wa umbali wa moja kwa moja.
keywords: mstari, pline, polilaini, kuratibu, jamaa, polar, kamili, umbali wa moja kwa moja, @, kuandika nukta, sahihi, ortho
from: 19e82350
---

## Unachokwenda kutengeneza

Muhtasari wa chumba chenye umbo la L, 6000 kwa 4500 chenye ukata wa 2000 kwa 1500, umechorwa kwa usahihi, pamoja na ukuta wa digrii 30. Utatumia njia zote nne za kuandika nukta. Fanya kazi kwa milimita: kitengo kimoja cha mchoro ni milimita moja.

Rejea ya haraka ya kila muundo iko katika [Uingizaji wa kuratibu na umbali](topic:coordinate-entry).

## Kabla ya kuanza

1. Fungua CadCraft. Ikiwa mchoro umefunguliwa, bofya {{ui:New}} kwanza.
2. Bonyeza {{key:Esc}} ili kisichaguliwe chochote. Paneli ya kulia inasoma {{ui:Current settings}}.
3. Weka {{ui:Units}} kuwa {{ui:Millimeters}}. Hakuna kinachobadilishwa ukubwa; hii inaambia karatasi na chapa kile kitengo kinamaanisha.

## Kuratibu kamili: nukta ya kwanza

Kuratibu kamili ni nafasi inayopimwa kutoka asili, inayoandikwa kama `x,y`.

1. Andika `L` kisha bonyeza {{key:Enter}}. Ombi linasoma `Specify first point:`.
2. Andika `0,0` kisha bonyeza {{key:Enter}}.

Mstari sasa unavutwa kutoka asili hadi msalaba. Kuratibu katika upau wa hali zinaonyesha umbali na pembe kutoka nukta ya kuanzia unapohama.

## Kuratibu jamaa: @dx,dy

Kuratibu jamaa huandikwa kama `@dx,dy`: umbali kwa upande, umbali juu, kutoka nukta ya mwisho. Nambari hasi huenda kushoto au chini.

3. Andika `@6000,0` kisha bonyeza {{key:Enter}}. Mstari wa 6000 unaenda kulia.
4. Andika `@0,3000` kisha bonyeza {{key:Enter}}.
5. Andika `@-2000,0` kisha bonyeza {{key:Enter}}.
6. Andika `@0,1500` kisha bonyeza {{key:Enter}}.

Utaona mistari minne iliyounganishwa ikipanda upande wa kulia wa chumba.

## Uingizaji wa umbali wa moja kwa moja: nambari tupu

Unapoandika nambari moja, CadCraft inaenda umbali huo kuelekea msalaba. Washa Ortho ili mwelekeo ushikamane na mlalo au wima.

7. Bonyeza {{key:F8}}, au bofya {{ui:Ortho}} kwenye upau wa hali. Upau wa hali unasema "Ortho imewashwa".
8. Sogeza msalaba kushoto ya nukta ya mwisho. Bendi ya kuvuta inabaki mlalo.
9. Andika `4000` kisha bonyeza {{key:Enter}}. Mstari unaenda 4000 kushoto.
10. Sogeza msalaba chini ya nukta ya mwisho.
11. Andika `4500` kisha bonyeza {{key:Enter}}. Umerudi kwenye nukta ya kuanzia.
12. Bonyeza {{key:Enter}} kwenye ombi tupu ili kumaliza amri.

Sasa una muhtasari uliofungwa wa umbo la L uliotengenezwa kwa mistari sita tofauti.

13. Bofya {{ui:Extents}} kuona yote.

:::mac
F8 inaweza kudhibiti uchezaji wa midia kwenye kibodi ya Mac. Shikilia **fn** kisha bonyeza F8, au bofya {{ui:Ortho}}. Tazama [Vitufe, panya na padi za kugusa](common:keys).
:::

## Kuratibu za polar: @umbali<pembe

Kuratibu ya polar huandikwa kama `@umbali<pembe`. Pembe ziko kwa digrii, zinapimwa kinyume cha saa kutoka mwelekeo chanya wa X: 0 ni kulia, 90 ni juu, 180 ni kushoto, 270 (au -90) ni chini.

14. Andika `L` kisha bonyeza {{key:Enter}}.
15. Andika `6000,0` kisha bonyeza {{key:Enter}} ili kuanza kwenye kona ya chini kulia.
16. Andika `@2500<-30` kisha bonyeza {{key:Enter}}. Mstari wa 2500 unatoka kwenye kona, ukielekea chini na kulia kwa digrii 30 chini ya mlalo.
17. Bonyeza {{key:Enter}} kumaliza amri.

Kuratibu ya polar bila `@`, kama `2500<30`, hupimwa kutoka asili badala ya nukta ya mwisho.

## Muhtasari uleule kama polilaini moja

Mistari sita tofauti inafaa kwa kazi nyingi, lakini polilaini ni kitu kimoja: inahamishwa, inapimwa na kuchaguliwa kwa jumla. Tumia {{cmd:PLINE}} kwa uingizaji uleule.

1. Andika `PL` kisha bonyeza {{key:Enter}}.
2. Andika `0,-6000` kisha bonyeza {{key:Enter}} ili kuanza chini ya muhtasari wa kwanza.
3. Andika `@6000,0`, kisha bonyeza {{key:Enter}}.
4. Andika `@0,3000`, kisha bonyeza {{key:Enter}}.
5. Andika `@-2000,0`, kisha bonyeza {{key:Enter}}.
6. Andika `@0,1500`, kisha bonyeza {{key:Enter}}.
7. Andika `@-4000,0`, kisha bonyeza {{key:Enter}}.
8. Andika `C` kisha bonyeza {{key:Enter}}. Polilaini inafungwa na amri inaisha.
9. Bofya muhtasari mpya. Paneli ya kulia inaonyesha "Polilaini", {{ui:Vertices}} yake, {{ui:Length}} na, kwa sababu imefungwa, {{ui:Area}} yake.

Eneo linapaswa kusomeka 24000000 (milimita za mraba, ambayo ni mita za mraba 24).

## Chaguo wakati wa kuchora

- Katika {{cmd:LINE}} na {{cmd:PLINE}}, andika `U` kisha bonyeza {{key:Enter}} ili kuchukua sehemu ya mwisho bila kuondoka kwenye amri.
- Katika {{cmd:LINE}}, `C` hufunga kurudi kwenye nukta ya kwanza mara sehemu angalau mbili zikiwepo.
- Katika {{cmd:PLINE}}, `A` hubadilisha kuwa sehemu za tao (kila tao linaendelea vizuri kutoka sehemu iliyotangulia), na `L` hurudisha kuwa mistari. Katika hali ya tao, chaguo la kufunga ni `CL`.
- Kubonyeza {{key:Enter}} kwenye `Specify first point:` katika {{cmd:LINE}} huanza kutoka nukta ya mwisho uliyotoa, ili uendelee pale ulipoishia.

## Makosa ya kawaida

- **Kuandika `6000,0` wakati ulimaanisha `@6000,0`.** Bila `@`, nukta hupimwa kutoka asili, si kutoka nukta ya mwisho, kwa hivyo mstari unarukia mahali usipotarajia. Katika CadCraft, `x,y` daima ni kamili. Bonyeza `U` kisha {{key:Enter}} ili kuurudisha.
- **Koma iliyoandikwa badala ya nukta ya desimali.** Desimali hutumia nukta: `1250.5`. Koma daima hutenganisha X na Y.
- **Umbali wa moja kwa moja ulienda upande mbaya.** Nambari tupu hufuata msalaba. Sogeza msalaba upande unaotaka kabla ya kubonyeza {{key:Enter}}, na washa {{ui:Ortho}} kwa mistari iliyonyooka.
- **"Inahitaji nukta au neno la chaguo."** CadCraft haikuelewa ulichoandika. Angalia nafasi ndani ya nambari au koma iliyokosekana, kisha uandike tena.
- **Futi na inchi.** CadCraft inasoma nambari tupu pekee. Andika `150` kwa 12'-6" katika mchoro wa inchi, au `12.5` katika mchoro wa futi.
