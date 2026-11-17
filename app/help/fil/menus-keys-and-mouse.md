---
title: Mga menu, key at mouse
summary: Pumili ng menu style na tugma sa paraan ng iyong pagtatrabaho, bigyan ang anumang command ng sarili mong key o key na nagta-type ng command, ilipat ang mga command sa pagitan ng ribbon tab, at itakda kung ano ang gagawin ng wheel at ng mga button ng mouse.
keywords: menu style, menus, ribbon, toolbar, command line, keyboard shortcuts, hotkeys, keys, i-customize, i-remap, i-rebind, shortcuts, text keys, mouse, wheel, invert, zoom direction, middle button, right button, pan, i-export, i-import, switching, pamilyar, drafting classic
from: 8bbf4f88
---

Pareho ang mga command ng CadCraft kahit paano mo maabot ang mga ito, at laging nandiyan ang command line kasama ang mga alias nito (`L`, `C`, `TR` …). Ang **menu style** ay nagpapasya lamang kung saan nakalagay ang mga button sa screen, ano ang tawag sa mga ito roon, at aling mga key ang nagpapatakbo sa mga ito. Pumili ng isa sa {{ui:Settings}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menus, keys and mouse}}; agad itong nagbabago, at naaalala ito ng browser na ito.

## Ang tatlong style

| Style | Ano ang makukuha mo |
|---|---|
| {{ui:CadCraft}} | Sariling toolbar ng CadCraft: File, Draw, Modify, Annotate, Parametric, Blocks, Sheets, Edit at View, bawat isa may menu na {{ui:More}}. Ang panimula. |
| {{ui:Drafting classic}} | Ribbon na nakaayos gaya ng pagkakaayos ng klasikong 2D drafting program: isang menu na {{ui:File}} at mabilis na button, pagkatapos ang mga tab na {{ui:Home}} (Draw, Modify, Annotation, Layers, Block, Properties, Utilities, Clipboard), {{ui:Insert}}, {{ui:Annotate}}, {{ui:Parametric}}, {{ui:View}}, {{ui:Manage}}, {{ui:Output}} at {{ui:3D}}. Mag-type ng command gaya ng dati. Ang middle button ay nagpa-pan; ang right click ay {{key:Enter}}, at ang pag-drag gamit ang right button ay walang ginagawa. |
| {{ui:Ribbon}} | Ribbon ng payak na task tab: {{ui:Draw}}, {{ui:Modify}}, {{ui:Annotate}}, {{ui:Parametric}}, {{ui:Blocks}}, {{ui:Sheets}}, {{ui:View}}, {{ui:3D}} at {{ui:Tools}}, may menu na {{ui:File}} at mabilis na button sa kanan. Ang middle at right button ay nagpa-pan, gaya ng sariling style ng CadCraft. |

Pinananatili ng bawat style ang mga key ng CadCraft: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, at {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} para sa mga drafting aid. Hindi kailanman key ang mga letra: tina-type sila ng CadCraft sa command line.

Ipinapakita rin ng mga ribbon ang mga tool ng panel ng Layers at ang mga drafting aid ng status bar. Napupuno ang tab na {{ui:3D}} kapag nabuksan na ang 3D tab sa ilalim ng drawing; ang 3D tool na pinili sa Model tab ay unang magbubukas ng 3D tab, at ang 2D tool na pinili sa 3D tab ay unang babalik sa Model tab.

:::tip
Ang key na bahagi ng sariling layout ng CadCraft pero ibinigay ng style mo sa ibang command ay walang ginagawa, at sinasabi ng status bar kung saan napunta ang command nito ("In My keys, Ortho is Ctrl+Alt+O"). Laging nananatili ang kahulugan ng {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} at ng mga arrow. Habang tumatakbo ang command, o habang may tina-type na letra sa command line, sa command line napupunta ang mga key.
:::

## Gawin itong sarili mo

1. Piliin ang style na pinakamalapit sa gusto mo, pagkatapos i-click ang {{ui:Customize…}}.
2. Sa {{ui:Keys and menus}}, hanapin ang command (nakakatulong ang search box). I-click ang {{ui:Add a key}} at pindutin ang key. I-click ang isang key para alisin ito.
3. Sa ribbon, inililipat ng {{ui:Where it sits}} ang command sa ibang tab at panel, sa menu na {{ui:File}}, o sa {{ui:Keys only}}.
4. Sa {{ui:Mouse}}, itakda ang wheel at ang mga button na nagpa-pan sa drawing.
5. Bigyan ito ng pangalan at i-click ang {{ui:Save}}.

Ang pag-save ng built-in na style ay gagawa ng sarili mong kopya ("My Drafting classic"); hindi kailanman nagbabago ang built-in. Ang key na ibinigay sa dalawang command ay ipinapakita sa pula at kailangang ayusin bago mo ito ma-save.

## Mga key na nagta-type ng command

Ibinibigay ng {{cmd:SHORTCUTS}} (View › More › {{ui:Keyboard shortcuts…}}) sa key ang isang buong command line, gaya ng {{key:Ctrl+Alt+L}} para sa `LINE` o {{key:F9}} para sa `ZOOM E`. Nabibilang ang mga key na ito sa style na ginagamit: sa unang pagbukas ng bersyong ito, ang mga key na ginawa mo sa mas lumang bersyon ay dadalhin sa sarili mong style na "My CadCraft keys", isang beses lang, at gagana gaya ng dati. Kasama nitong dadalhin ang pag-export ng style.

## Mouse

- **Mouse wheel**: {{ui:Scroll up zooms in}} (ang panimula) o {{ui:Scroll up zooms out}}, at kung gaano kabilis. Laging nag-zoom ang pinch ng trackpad sa direksyon ng galaw ng daliri mo.
- **I-pan ang drawing gamit ang**: ang middle button, ang right button, o pareho. Ang right click nang walang drag ay laging {{key:Enter}}. Laging pumipili at gumuguhit ang left button sa CadCraft, kaya walang mababago rito kapag tinik mo ito.
- **I-drag sa 3D views**: pinananatili ng 3D tab ang sarili nitong mga button sa bawat style (kaliwa umiikot, middle at right nagpa-pan).

## Dalhin mo ito

{{ui:Export}} ay nagse-save ng style na ginagamit bilang maliit na `.ccinput.json` file; {{ui:Import…}} ay nagdaragdag ng isa, mula sa ibang computer o sa katrabaho mo. Ang na-import na file ay maaari lamang tumukoy sa sariling command ng CadCraft: anumang iba pa rito ay tinatanggal at binibilang sa status bar. Inaalis ng {{ui:Delete this style}} ang isa sa sarili mong style.

:::note
Nananatili sa browser na ito ang mga setting na ito. Ang {{ui:Use this style in every app}} sa ilalim ng mga style card ay nagpapabukas sa bawat app sa katugmang style nito (sariling toolbar, ribbon o Drafting classic), kasama ang mga pagbabagong ginawa mo sa bawat app. Walang menu-bar style ang CadCraft: kapag ang menu bar ng ibang app ang pinili para sa bawat app, pinananatili ng CadCraft ang sarili nitong toolbar.
:::

Kaugnay: [Keyboard at mouse](topic:keyboard) · [Mga setting ng CadCraft](topic:settings) · [Galing sa ibang drafting software](topic:coming-from) · [Mga command alias](topic:command-aliases)
