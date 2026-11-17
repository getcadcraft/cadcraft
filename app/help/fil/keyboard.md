---
title: Keyboard at mouse
summary: Bawat key, mouse action at command-line key sa CadCraft drafting app, ayon sa pagkakahawak ng code sa mga ito.
keywords: keyboard, shortcuts, keys, mouse, wheel, pan, zoom, right click, middle button, f3, f7, f8, ctrl, command key, hotkeys, kopyahin, cut, i-paste, duplicate, clipboard, piliin lahat
from: a2608a29
---

Ipinapakita ang mga shortcut para sa iyong computer. Sa Mac, ang bawat shortcut na {{key:Mod}} sa ibaba ay gumagamit ng Command key, at gumagana rin ang Control key. Kung paano isinusulat ang mga key, at kung paano gamitin ang mga F-key sa Mac, nasa [Mga key, mouse at trackpad](common:keys).

## Pag-type ng command

| Key | Ano ang ginagawa |
|---|---|
| Anumang letra, digit o symbol | Napupunta sa command line, saan man nakaturo ang pointer, maliban kung may kahon sa panel na may cursor |
| {{key:Enter}} | Ipinapadala ang na-type mo. Sa walang lamang prompt: inuulit ang huling command, tinatapos ang command, tinatapos ang pagpili, o tinatanggap ang default sa `<…>` |
| {{key:Space}} | Kapareho ng {{key:Enter}}, maliban kapag humihingi ng text ang CadCraft (text, block name, dimension text), kung saan nagta-type ito ng space |
| {{key:Esc}} | Kinakansela ang command. Walang tumatakbong command: kinakansela ang grip move o selection box, saka tinatanggal ang pagpili |
| {{key:Tab}} | Tinatanggap ang iminumungkahing command na nasa kanan ng command line. Walang na-type at nakaturo ang pointer sa magkakapatong na object: itinatampok ang susunod doon (i-click para piliin ito) |
| {{key:Up}} {{key:Down}} | Dumaraan sa mga linyang na-type mo dati (huling 100) |

## Pagguhit at pag-edit

| Key | Ano ang ginagawa |
|---|---|
| {{key:Mod+Z}} | I-undo ang huling command |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | I-redo |
| {{key:Mod+A}} | Pinipili ang bawat object na maaari mong i-edit sa bukas na tab ({{cmd:SELECTALL}}). Kung may na-type ka sa command line, ang text na iyon ang pinipili |
| {{key:Delete}} | Binubura ang mga napiling object ({{cmd:ERASE}}), maliban kung may na-type ka sa command line |
| {{key:Backspace}} | Binubura ang mga napiling object kapag wala sa command line ang cursor; sa command line, binubura nito ang na-type mo |
| {{key:Esc}} | Walang tumatakbong command: tinatanggal ang pagpili ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | I-save ang kopya sa format ng drawing (DWG o DXF) |
| {{key:Mod+Shift+S}} | I-save bilang: pumili ng DWG o DXF, saka i-save ang kopya |
| {{key:Mod+O}} | Magbukas ng DWG o DXF |
| {{key:Mod+P}} | I-plot sa PDF |

Hindi gumagana ang undo, redo, select all at plot habang may tumatakbong command: pindutin muna ang {{key:Esc}}.

## Kopyahin, i-cut at i-paste

| Key | Ano ang ginagawa |
|---|---|
| {{key:Mod+C}} | Kinokopya ang pagpili sa clipboard ({{cmd:COPYCLIP}}). Kapag walang napili: humihingi ang CadCraft ng mga object |
| {{key:Mod+X}} | Cut: kinokopya ang pagpili, saka binubura ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Paste: sumusunod sa cursor ang kopya; i-click, o mag-type ng punto, para ilapag ito ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Paste sa dating lugar: sa mga coordinate kung saan ito kinopya ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Duplicate: sumusunod sa pointer ang kopya ng pagpili; i-click para ilapag. Walang maiiwan kapag pinindot ang {{key:Esc}} ({{cmd:DUPLICATE}}) |

Ang parehong aksyon ay nasa {{ui:Edit}} group ng toolbar ({{ui:Kopyahin}}, {{ui:I-paste}}) at sa {{ui:Higit pa}} menu nito. Habang may ibang command na tumatakbo, tapusin ito o pindutin muna ang {{key:Esc}}; ang muling pagpindot ng {{key:Mod+V}} o {{key:Mod+D}} habang may sumusunod na kopya sa cursor ay nagsisimula ulit. Kapag may na-type ka sa command line, o may humihingi ng text ang command, kinokopya, ina-cut at ipinapaste ng mga key na ito ang text na iyon. Tingnan ang [Kopyahin, i-paste at i-duplicate](topic:copy-paste).

## Mga toggle

| Key | Toggle | Button sa status bar |
|---|---|---|
| {{key:F3}} | Object snap na naka-on o naka-off | {{ui:Snap}} |
| {{key:F7}} | Grid na naka-on o naka-off | {{ui:Grid}} |
| {{key:F8}} | Ortho na naka-on o naka-off | {{ui:Ortho}} |
| {{key:F10}} | Polar tracking na naka-on o naka-off | {{ui:Polar}} |
| {{key:F11}} | Object snap tracking na naka-on o naka-off | {{ui:Track}} |
| {{key:F12}} | Dynamic input na naka-on o naka-off | {{ui:Dyn}} |

:::mac
Sa Mac, ang F3, F7 at F8 ay kadalasang Mission Control at media key. Hawakan ang **fn** kasama nila, o i-on ang standard function keys sa System Settings, gaya ng nakasaad sa [Mga key, mouse at trackpad](common:keys). Palaging gumagana ang mga button sa status bar.
:::

:::firefox
Maaari ring magtanong ang F7 sa Firefox kung i-on ang caret browsing. Piliin ang **No**, at gamitin ang {{ui:Grid}} button kung paulit-ulit itong nagtatanong.
:::

## Tulong

| Key | Ano ang ginagawa |
|---|---|
| {{key:F1}} | Binubuksan o isinasara ang help na ito, sa tabi ng drawing. Gumagana ito kahit may tumatakbong command, at hindi ito napupunta sa command line. |
| {{key:Esc}} | Kapag nasa help panel ang cursor: binubura ang search, o isinasara ang panel |

Ang {{ui:Tulong}} button sa bar sa itaas ay gaya ng ginagawa ng {{key:F1}}. Habang nagta-type ka sa search box ng help, walang napupunta sa command line. I-click ang drawing para ibalik ang mga key sa CadCraft; nananatiling bukas ang panel sa tabi nito.

:::mac
Sa Mac keyboard, hawakan ang **fn** at pindutin ang F1, o i-click ang {{ui:Tulong}}.
:::

## Screen

| Key | Ano ang ginagawa |
|---|---|
| {{key:Ctrl+Shift+F}} | Pinapalipat-lipat ang normal, full screen, at full screen na nakatago ang mga bar. Ang Control key ang ginagamit dito sa lahat ng computer, kasama ang Mac. |
| {{key:Left}} {{key:Right}} | Kapag naka-focus ang tab sa ilalim ng drawing: ang nauna o susunod na tab |

Sa full screen, maaaring gamitin ng browser ang unang {{key:Esc}} para lumabas sa full screen. Pindutin muli ang {{key:Esc}} para kanselahin ang command.

## Mga dialog

| Key | Ano ang ginagawa |
|---|---|
| {{key:Esc}} | Isinasara ang dialog ({{ui:I-plot sa PDF}}, o isang tanong gaya ng "Mga hindi na-save na pagbabago", kung saan ito ang ibig sabihin ng {{ui:Kanselahin}}) |
| {{key:Tab}} | Gumagalaw sa pagitan ng mga setting at button ng dialog |

Habang bukas ang dialog, naka-off ang mga key ng drawing.

## Mga field sa panel

Sa kahon sa kanan o kaliwang panel:

| Key | Ano ang ginagawa |
|---|---|
| {{key:Enter}} | Ina-apply ang value at iniiwan ang kahon |
| {{key:Esc}} | Ibinabalik ang lumang value at iniiwan ang kahon |
| {{key:Tab}} | Ina-apply at lumilipat sa susunod na kahon |

Habang may cursor ang kahon, ang mga letra ay tina-type doon, hindi sa command line.

## Mouse

| Aksyon | Ano ang ginagawa |
|---|---|
| Click | Pumipili ng punto kapag humihingi ng punto ang command; pumipili ng object kapag humihingi ng mga object; kung hindi, pumipili ng object, o grip |
| Shift+click | Inaalis sa pagpili ang napiling object (kapag nakatakda ang {{ui:Clicking objects}} sa {{ui:Replaces the selection}} sa [Mga setting](topic:settings): idinadagdag ito). Habang pumipili ng punto: binabalewala ang object snaps para sa click na iyon |
| Click sa bakanteng espasyo, saka click muli | Selection box: mula kaliwa pakanan ay window, mula kanan pakaliwa ay crossing |
| I-drag sa bakanteng espasyo | Lasso: kung pakanan muna ang galaw ay window, kung pakaliwa muna ay crossing; {{key:Space}} habang nagdi-drag ay nagpapalipat-lipat sa window, crossing at fence; ibinabagsak ito ng {{key:Esc}} (LASSOMODE 0, o Settings, ginagawa itong rectangle muli) |
| I-drag sa mga piyesa sa TRIM o EXTEND | Tinatrim (o pinahahaba) ang bawat piyesang tinatawid ng landas; hawakan ang {{key:Shift}} para sa kabilang gawain |
| I-drag ang grip | Ginagalaw ang grip (o i-click ang grip, saka i-click kung saan ito pupunta) |
| Double-click sa text | Pinipili ito at inilalagay ang cursor sa {{ui:Text}} box nito sa kanang panel |
| Right-click | Enter. Habang gumagalaw ang grip o may selection box: kinakansela ito |
| I-drag gamit ang right button | Nagpa-pan |
| Wheel | Nagzo-zoom in at out sa paligid ng crosshair |
| I-drag gamit ang wheel (middle button) | Nagpa-pan |
| Double-click sa wheel | Nagzo-zoom sa buong drawing (extents) |
| I-drop ang DWG o DXF sa drawing | Binubuksan ito |

Sa trackpad o touch screen, tingnan ang [Mouse, trackpad at touch](topic:mouse-trackpad-touch).

## Mga key na pinananatili ng browser

{{key:Mod+N}}, {{key:Mod+W}} at {{key:Mod+T}} ay laging sa browser. Hindi ginagamit ng CadCraft ang mga ito: gamitin ang {{ui:Bago}} o i-type ang `NEW` para sa bagong drawing. Sarili ng CadCraft ang clipboard nito: ang {{key:Mod+C}} at {{key:Mod+V}} ay kumokopya ng mga object sa pagitan ng mga drawing at tab ng CadCraft, hindi papunta o mula sa ibang programa.

:::mac
Kung binubuksan ng {{key:Mod+Y}} ang history ng browser mo sa halip na mag-redo, gamitin ang {{key:Mod+Shift+Z}} o ang {{ui:I-redo}} button.
:::

## Nasaan ang Move

Ang Move ay ang command na `MOVE` (key {{key:M}}): pumili ng mga object, saka base point at pangalawang punto o typed na distansya. Nariyan din ang `ALIGN` at `DISTRIBUTE`. Ginagamit ng BimCraft ang parehong pangalan para sa parehong gawain sa mga building element, pero ang {{key:M}} nito ay Measure: ang Move nito ay {{key:Shift+M}}.
