---
title: Mga setting ng CadCraft
summary: Ang mga setting na kabilang sa drafting app: laki ng cursor, saan nakasabit ang na-paste na kopya sa cursor, ano ang ginagawa ng click sa selection, ilang linya ang gamit ng toolbar, saan nakalagay ang command line at gaano ito kataas, compact na itaas na bahagi, at ang indicator sa sulok.
keywords: command line, floating command line, float, dock, isang linya, f2, command history, commandline, cmdline, toparea, top area, compact, cursorsize, crosshair ng full screen, cursor sa full screen, gilid hanggang gilid, row ng toolbar, display ng toolbar, ctrl f1, mga setting, mga preference, mga opsyon, indicator sa sulok, view cube, axis icon, ucs icon, cursor, crosshair, pick box, punto ng paste, base point, pag-click sa mga object, selection, pickadd, shift, i-reset
from: 0896eb42
---

Buksan ang {{ui:Settings}} sa pamamagitan ng gear sa app bar o {{key:Mod+,}}. Ang unang tab, {{ui:CadCraft}}, ay naglalaman ng mga setting na kabilang sa app na ito; ang {{ui:General}} ay naglalaman ng mga setting na ibinabahagi ng bawat app sa pamilya (tema, laki at lapad ng text ng panel, itsura at ayos ng toolbar). Ang mga setting ng CadCraft ay nasa loob lang ng app: dito mo sila binabago, at naaalala sila ng browser na ito. Ibinabalik ng {{ui:Reset CadCraft settings}} ang bawat isa sa panimulang halaga.

## Cursor

**Maliit**, **Katamtaman** (ang panimula), **Malaki** o **Full screen**: ang laki ng crosshair at ng pick box sa drawing. Ang mas malaking pick box ay pumipili rin ng mga object mula sa kaunti pang layo, na nakakatulong sa touch screen o sa napakapinong drawing.

Ang **Full screen** ay pinapatakbo ang dalawang linya ng crosshair mula gilid hanggang gilid ng drawing, kahit walang tumatakbong command, para masuri mo nang nakikita na nakahanay ang dalawang bagay sa buong view. Kapag hati ang view, nananatili ang mga linya sa pane na ginagawaan mo. Kapareho ito ng {{cmd:CURSORSIZE}} 100 ng AutoCAD: i-type ang {{cmd:CURSORSIZE}} at 100 para sa full screen; ang mas maliit na numero ay pumipili ng pinakamalapit na laki (sa ilalim ng 5 ay Maliit, 5 hanggang 9 ay Katamtaman, 10 hanggang 99 ay Malaki).

## Punto ng paste

Saan nakasabit ang na-paste na kopya sa cursor pagkatapos ng {{key:Mod+V}} ({{cmd:PASTECLIP}}), hanggang mag-click ka:

- **Ibabang kaliwang sulok** (ang panimula): ang ibabang kaliwang sulok ng extents ng mga kinopyang object, gaya ng sa AutoCAD.
- **Center**: ang gitna ng kanilang extents. Kapaki-pakinabang sa paglalagay ng simbolo sa pamamagitan ng mata.

Ang kopyang ginawa gamit ang `COPYBASE` ay laging nakasabit sa base point na pinili mo. Hindi pinapansin ng {{ui:Paste in place}} ({{key:Mod+Shift+V}}) ang setting na ito: pinapanatili nito ang orihinal na coordinates. Tingnan ang [Copy, paste and duplicate](topic:copy-paste).

## Pag-click sa mga object

Ano ang ginagawa ng click sa drawing sa selection kapag walang tumatakbong command:

- **Nagdaragdag sa selection** (ang panimula): bawat click o window ay nagdaragdag ng mga object; ang {{key:Shift}}+click, o {{key:Shift}}+window, ay nag-aalis sa mga ito.
- **Pinapalitan ang selection**: ang click o window ay pumipili lang ng kung ano ang kinukuha nito. Ang {{key:Shift}}+click ay nagdaragdag ng object, o nag-aalis ng object na napili na; ang {{key:Shift}}+window ay nagdaragdag.

Sa prompt na `Select objects:` sa loob ng command, laging nagdaragdag ang click (at inaalis ng {{key:Shift}}), anuman ang sinasabi ng setting na ito. Tingnan ang [Select objects](topic:select-objects).

## Pag-click sa walang laman na lugar

Ano ang ginagawa ng click kung saan walang object kapag walang tumatakbong command. Sa alinmang paraan, nagsisimula itong window ng pagpili (tinatapos ng pangalawang click).

- **Binubura ang selection** (ang panimula): binibitawan ang dating napili. Hawakan ang {{key:Shift}} habang nag-click para mapanatili ito.
- **Pinapanatili ang selection**: nananatili ang selection, gaya sa ibang drafting program; idinadagdag ng window dito. Pindutin ang {{key:Esc}} para burahin ang selection.

## Pag-drag para pumili

Ano ang iginuguhit ng pagpindot at pag-drag sa walang laman na espasyo:

- **Lasso** (ang panimula): freehand na balangkas. Kapag kanan muna ang galaw, napipili ang lahat ng nasa loob nito nang buo; kapag kaliwa muna, ang anumang nahahawakan nito. Ang {{key:Space}} habang nagdi-drag ay lumilipat sa pagitan ng window, crossing at fence.
- **Rectangle**: ang kahon, gaya ng pagguhit nito sa pamamagitan ng isang click at pangalawang click.

Ang {{cmd:LASSOMODE}} `1` o `0` ay nagtatakda ng pareho. Tingnan ang [Lasso selection](topic:lasso-selection).

## Pag-drag para mag-trim at mag-extend

Ano ang ginagawa ng pagpindot sa walang laman na espasyo at pag-drag sa {{cmd:TRIM}} at {{cmd:EXTEND}}:

- **Isang path** (ang panimula): freehand na path; bawat piraso na tinatawid nito ay tina-trim (o ini-extend).
- **Isang window**: isang kahon; bawat piraso na nahahawakan nito ay tina-trim, gaya ng ginagawa ng opsyon na `C`.

Tingnan ang [Trim and extend](topic:trim-and-extend).

## Posisyon ng toolbar

{{ui:CadCraft}} › {{ui:Toolbar position}}: **Top** (ang panimula, gaya ng dati), **Bottom**, **Left** o **Right**. Sa kaliwa o kanan, nakasalansan sa column ang mga pangkat ng tool na nag-si-scroll kapag mas mataas kaysa sa window, at nagbabalot ang mga button ng dalawa o tatlo bawat linya. Naka-save ang pinili kasama ng iyong mga setting, at itinatakda ito ng {{cmd:TOOLBARDOCK}} (`TBDOCK`) mula sa command line. Ibinabalik ng {{ui:General}} › {{ui:Reset the layout}} ang toolbar sa itaas.

Nasa loob ng toolbar ang mga bar ng menu style at gumagalaw kasama nito, pero ang style na {{ui:Ribbon}} ay dinisenyo para tumakbo sa itaas o ibaba: sa gilid, nakakakuha ito ng makitid na column na nag-si-scroll. Sa telepono, nananatili ang toolbar kung saan ito inilagay ng layout ng telepono.

## Mga row ng toolbar

Ilang linya ang gamit ng mga tool sa itaas ng drawing, sa CadCraft toolbar at sa mga style na {{ui:Drafting classic}} at {{ui:Ribbon}}:

- **Balutin para magkasya** (ang panimula): ibinabalot ang mga tool sa lapad ng window.
- **2 row**: hanggang dalawang linya. Kapag nabalot ang mga tool sa dalawang linya o mas kaunti sa lapad na ito, nababalot lang sila; kung hindi, nakaayos sila sa dalawang row na nag-si-scroll pahalang.
- **1 row**: isang linyang nag-si-scroll pahalang, na nag-iiwan ng pinakamaraming espasyo sa drawing.

Dinadaanan ng {{key:Shift+Ctrl+F1}} ang tatlong ito, at itinatakda ng {{cmd:TOOLBARROWS}} ang isa. Ang ipinapakita ng mga button (icon at text, icon lang, o text lang) ay setting ng {{ui:General}} › {{ui:Toolbar}}; dinadaanan ito ng {{key:Ctrl+F1}}, at itinatakda ito ng {{cmd:TOOLBAR}}.

## Command line

Maaaring manatiling nakadock sa ilalim ng drawing ang command line, gaya ng dati, o lumutang sa ibabaw nito, at maaari itong kasing-nipis ng isang linya.

- **Gawing lumulutang.** I-drag ang grip sa kaliwang dulo nito papunta sa drawing, o piliin ang {{ui:Float over the drawing}} sa menu nitong {{ui:Command line options}} (ang tatlong tuldok sa kanang dulo). I-drag muli ang grip para gumalaw ito; naiingatan ang puwesto nito kapag nagbago ang laki ng window. I-drag ang kanang gilid nito para gawing mas malapad o mas makitid. Ibagsak ito sa status bar, o piliin ang {{ui:Dock at the bottom}}, para i-dock muli.
- **Gawing mas manipis o mas mataas.** I-drag ang itaas na gilid nito: bawat hakbang ay isang linya ng history. Pababa sa zero na linya, ito ay isang **one-line command line**: prompt at ang iyong na-type lang, at may bagong mensaheng lalabas sa itaas nito sandali. Ang double-click sa itaas na gilid ay lumilipat sa pagitan ng isang linya at ng taas na mayroon ka dati.
- **Ang history.** Ang {{key:F2}}, o ang button na orasan sa command line ({{ui:Command history (F2)}}), ay nagbubukas ng buong history sa itaas ng linya (sa ibaba nito kapag malapit sa itaas ng window ang lumulutang na linya). Papunta pa rin sa command line ang pag-type; ang {{key:PageUp}} at {{key:PageDown}} ay nag-i-scroll sa history, at ang {{key:Esc}}, {{key:F2}} o click sa ibang lugar ay nagsasara nito. Mas nananaig ang sarili mong key sa F2 kaysa dito.
- **Mula sa keyboard.** Ang grip ay isang button: kapag naka-focus ito, inililipat ng arrow key ang lumulutang na command line (kasama ang {{key:Shift}}, sa mas malalaking hakbang); inilulutang ng {{key:Up}} ang nakadock na command line, at idinadock ito ng {{key:Down}} sa ilalim na gilid. Ang itaas na gilid ay separator: dinaragdagan o binabawasan ng {{key:Up}} at {{key:Down}} ang mga linya, ginagawang isang linya ng {{key:Home}}, at ang pinakamataas ng {{key:End}}. Naririnig pa rin ng screen reader ang bawat mensahe, pati sa one-line command line.

Ang {{ui:CadCraft}} › {{ui:Command line}} ay may parehong pagpipilian: {{ui:Docked at the bottom}} o {{ui:Floating}}, {{ui:History lines shown}} (0 hanggang 12) at {{ui:Standard height}}. Itinatakda ng {{cmd:COMMANDLINE}} (`CMDLINE`) ang mga ito mula sa command line. Naiingatan ang puwesto at taas para sa CadCraft sa browser na ito kasama ng iba pang layout, kaya dala ng naka-save na work environment ang mga ito; ibinabalik ng {{ui:General}} › {{ui:Reset the layout}} ang command line sa standard height nito bilang naka-dock. Sa telepono, nananatiling nakadock ang command line na may isang linya ng history; gumagana rin doon ang history button.

Kapag maikli ang window at nag-aalok ang layout check ng mas masikip na layout, ang {{ui:Yes}} nito ay ginagawa ring isang linya ang command line kung maikli pa rin ang drawing pagkatapos ng mga toolbar.

## Itaas na bahagi

{{ui:CadCraft}} › {{ui:Top area}}: **Standard** (ang panimula) o **Compact**. Pinapanatiling maliit ng Compact ang mga bar sa itaas ng drawing sa bawat menu style: nawawala ang mga pangalan ng pangkat at ang mga salita sa ilalim ng icon (nananatili pa rin ang mga tooltip at screen reader) at mas masisikip ang mga button. Gumagana ito kasama ng [Mga row ng toolbar](topic:settings#toolbar-rows): ang Compact at **1 row** ang nag-iiwan ng pinakamaraming espasyo sa drawing. Itinatakda ito ng {{cmd:TOPAREA}}.

## Indicator sa sulok

Ano ang nasa sulok ng drawing:

- **Awtomatiko** (ang panimula): ang axis icon sa {{ui:Model}} tab at ang view cube sa {{ui:3D}} tab.
- **Axis icon**: ang marker na X at Y sa kaliwang ibaba ng {{ui:Model}} tab, at isang maliit na marker na X, Y at Z sa {{ui:3D}} tab.
- **View cube**: isang kubo sa kanang itaas ng parehong tab. Sa {{ui:Model}} tab, ipinapakita nito ang drawing mula sa itaas, at ang pag-click sa ibang mukha, gilid o sulok ay magbubukas ng {{ui:3D}} tab na nakatingin mula roon. Sa 3D tab, umiikot ito kasabay ng view: i-click para tumingin mula sa isang gilid, i-drag para mag-orbit, at bumabalik ang bahay sa iso view. Tingnan ang [Model in 3D](topic:3d-solids).
- **Wala**: walang nasa sulok.

Walang ipinapakita ang mga sheet sa alinman sa dalawa.

## Haba at lawak ng selection

- **Sa status bar** (ang panimula): kapag may napiling object, ipinapakita ng status bar ang kabuuang haba nila at ang kabuuang lawak ng mga sarado. Tingnan ang [Totals of a selection](topic:properties-panel#totals-of-a-selection).
- **Nakatago**: inaalis ito ng status bar. Ipinapakita pa rin ito ng Properties para sa maraming object.

## Grid, Ortho at mga snap

Wala ang mga ito sa dialog: ang mga button na {{ui:Grid}}, {{ui:Ortho}} at {{ui:Snap}} sa status bar (o {{key:F7}}, {{key:F8}}, {{key:F3}}) at ang listahan ng object snap sa tabi nila ay naaalala kapag iniwan mo ang mga ito. Tingnan ang [Snap to points on objects](topic:object-snaps).
