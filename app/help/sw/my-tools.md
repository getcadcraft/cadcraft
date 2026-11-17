---
title: Vitufe vyako mwenyewe (Zana zangu)
summary: Ongeza vitufe vya upau wa zana vinavyoendesha makro zako mwenyewe, vipe ufunguo wa njia ya mkato, vishiriki kama faili, na uletee vitufe kutoka faili ya ubinafsishaji ya CUIx.
keywords: zana zangu, vitufe maalum, vitufe vya upau wa zana, makro, cui, cuix, kubinafsisha, menyu, ufunguo wa njia ya mkato, funguo za kibodi, diesel, ^c^c, leta vitufe, hamisha vitufe
from: 36618802
---

## Utakachojifunza

Jinsi ya kuweka vitufe vyako kwenye upau wa zana, kila kimoja kikiendesha makro iliyoandikwa kama AutoCAD inavyoziandika, jinsi ya kumpa kitufe ufunguo, na jinsi ya kuleta vitufe vya faili ya CUIx.

## Ongeza kitufe

1. Fungua {{ui:Settings}} ({{key:Mod+,}}) kisha ubaki kwenye kichupo cha {{ui:CadCraft}}. Sogeza hadi {{ui:My tools}}.
2. Bofya {{ui:Add a button…}}.
3. Jaza kisanduku:
   - {{ui:Group}}: kundi la upau wa zana litakaloingia, kwa mfano `Zana zangu`. Jina jipya linatengeneza kundi jipya.
   - {{ui:Label}}: maneno yaliyo kwenye kitufe.
   - {{ui:Macro}}: kinachoandika, kwa mfano `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Shortcut key}}: bofya kisanduku kisha bonyeza funguo, kwa mfano {{key:Ctrl+Alt+B}}.
   - {{ui:Icon}}: picha ya PNG au SVG ya kiwango cha juu cha 64 KB, au hakuna (nyota itaonekana).
4. Bofya {{ui:Save}}.

Kitufe kinaonekana mwishoni mwa upau wa zana, katika kundi lake. Bofya, au bonyeza ufunguo wake, ili kukiendesha. {{ui:Edit}} na {{ui:Delete}} kwenye orodha hubadilisha au kuondoa kitufe.

## Andika makro

Makro ni kile ungeandika kwenye mstari wa amri, pamoja na alama chache:

| Alama | Maana |
|---|---|
| `^C` | Inaghairi chochote kinachoendeshwa (`^C^C` ndiyo mwanzo wa kawaida) |
| `;` au nafasi | {{key:Enter}} |
| `\` | Inasubiri wewe: bofya au jibu lililoandikwa, kisha makro inaendelea |
| `_` au `.` mbele ya amri | Inakubaliwa na kupuuzwa (majina ya kimataifa na yaliyojengwa ndani) |
| `*` mwanzoni kabisa | Inaendeshwa tena kila inapomalizika, hadi ubonyeze {{key:Esc}} |
| `^O`, `^G` | Inawasha au kuzima Ortho, gridi |
| `$M=` | Kilichobaki ni DIESEL. Ni `$(if,…)`, `$(getvar,…)`, `$(=,…)` na `$(eq,…)` pekee zinazosomwa; kitufe kinachotumia kitu kingine kinasema hivyo na hakifanyi chochote |

Mifano:

- `^C^C_line;0,0;@100,0;;` inachora mstari wa urefu wa 100 kutoka asili.
- `^C^C_circle;\25;` inakuuliza kituo, kisha inachora duara la radius 25 hapo.
- `^C^C_turnright` inageuza mwonekano digrii 90 kulia.

## Funguo za njia ya mkato

Ufunguo unahitaji {{key:Mod}} (Ctrl, au Cmd kwenye Mac) au {{key:Alt}} pamoja na herufi au namba, au mojawapo ya funguo huru za kazi {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Herufi peke yake huenda kwenye mstari wa amri. Funguo ambazo CadCraft, programu au kivinjari tayari vinatumia (kama {{key:Ctrl+S}} au {{key:Ctrl+Z}}) na funguo ambazo kitufe kingine tayari kinazo zinakataliwa, na kisanduku kinasema kwa nini.

## Shiriki vitufe vyako

- {{ui:Export…}} huhifadhi kila kundi na kila kitufe (pamoja na aikoni na funguo) kama `my-tools.json`.
- {{ui:Import…}} huongeza makundi ya faili kama hiyo baada ya yako. Jina la kundi unalotumia tayari hupata "(2)"; ufunguo unaogongana unaachwa, na paneli inasema hivyo.

## Leta vitufe kutoka faili ya CUIx

1. Bofya {{ui:Import CUIx…}} kisha uchague faili ya `.cuix`.

Upau wa zana zake na paneli za utepe vinakuwa makundi, kila kitufe pamoja na makro yake na picha yake (PNG, au BMP iliyogeuzwa kuwa PNG). Funguo zake za njia ya mkato zinakuja katika kundi lao, kila kitufe pamoja na ufunguo wake; majina mbadala ya amri ambayo inaweza kuyabeba yanakuja katika kundi la {{ui:Aliases}}. Paneli inaorodhesha kilicholetwa.

:::note
Faili inasomwa tu. Amri ambazo CadCraft haina zinaorodheshwa kwa jina, si kubahatishwa: vitufe vyake vinasema hivyo vinapobofywa. DIESEL zaidi ya kazi chache zilizo hapo juu, menyu, vitufe vya kipanya na nafasi za kazi havisomwi.
:::

## Mambo ya kujua

- Vitufe vinabaki katika kivinjari hiki (au programu hii ya eneo-kazi), si kwenye michoro.
- Kitufe kinaendeshwa kupitia mstari wa amri, kwa hiyo kinatenduliwa kama chochote unachoandika: {{key:Mod+Z}} moja kwa kila amri iliyoendeshwa nayo.
