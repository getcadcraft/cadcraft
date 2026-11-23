---
title: Mga setting ng CadCraft
summary: Ang mga setting na kabilang sa drafting app: laki ng cursor, kung saan nakasabit ang na-paste na kopya mula sa cursor, ano ang ginagawa ng click sa selection, ilang row ang gamit ng toolbar, saan nakalagay ang command line at gaano ito kataas, compact na top area, at ang corner indicator.
keywords: command line, floating command line, float, dock, isang linya, f2, command history, commandline, cmdline, toparea, top area, compact, cursorsize, full screen crosshair, full-screen cursor, edge to edge, toolbar rows, toolbar display, ctrl f1, settings, preferences, options, corner indicator, view cube, axis icon, ucs icon, cursor, crosshair, pick box, paste point, base point, pag-click ng object, selection, pickadd, shift, reset
from: ae1a81db
---

Buksan ang {{ui:Mga setting}} gamit ang gear sa app bar o {{key:Mod+,}}. Ang unang tab, {{ui:CadCraft}}, ay naglalaman ng mga setting na kabilang sa app na ito; ang {{ui:General}} naman ay naglalaman ng mga setting na ibinabahagi ng bawat app sa pamilya (tema, laki ng text ng panel at lapad nito, at itsura at ayos ng toolbar). Nasa app lamang ang mga setting ng CadCraft: babaguhin mo sila dito, at naaalala sila ng browser na ito. Ibinabalik ng {{ui:I-reset ang mga setting ng CadCraft}} ang bawat isa sa simula.

## Cursor

**Small**, **Medium** (ang simula), **Large** o **Full screen**: ang laki ng crosshair at ng pick box sa drawing. Ang mas malaking pick box ay pumipili rin ng mga object mula sa kaunti pang layo, na nakakatulong sa touch screen o sa napaka-pinong drawing.

Pinapatakbo ng **Full screen** ang dalawang linya ng crosshair mula gilid hanggang gilid ng drawing, kahit walang tumatakbong command, para makita mo nang sarili kung nagkakahanay ang dalawang bagay sa buong view. Kapag hati ang view, nananatili ang mga linya sa pane na ginagamit mo. Katulad ito ng {{cmd:CURSORSIZE}} 100 ng AutoCAD: i-type ang {{cmd:CURSORSIZE}} at 100 para sa full screen; ang mas maliit na numero ay pumipili ng pinakamalapit na laki (sa ilalim ng 5 ay Small, 5 hanggang 9 ay Medium, 10 hanggang 99 ay Large).

## Paste point

Saan nakasabit ang na-paste na kopya mula sa cursor pagkatapos ng {{key:Mod+V}} ({{cmd:PASTECLIP}}), hanggang mag-click ka:

- **Lower-left corner** (ang simula): ang lower-left corner ng extents ng mga kinopyang object, gaya ng sa AutoCAD.
- **Center**: ang gitna ng kanilang extents. Kapaki-pakinabang para ilagay ang simbolo sa pagtantya.

Ang kopyang ginawa gamit ang `COPYBASE` ay laging nakasabit sa base point na pinili mo. Hindi pinapansin ng {{ui:I-paste sa mismong lugar}} ({{key:Mod+Shift+V}}) ang setting na ito: pinananatili nito ang orihinal na coordinate. Tingnan ang [Kopyahin, i-paste at i-duplicate](topic:copy-paste).

## Pag-click sa mga object

Ano ang ginagawa ng click sa drawing sa selection kapag walang tumatakbong command:

- **Idinaragdag sa selection** (ang simula): bawat click o window ay nagdaragdag ng mga object; ang {{key:Shift}}+click, o {{key:Shift}}+window, ay nag-aalis ng mga ito.
- **Pinapalitan ang selection**: pumipili lamang ng kung ano ang pinipili ng click o window. Ang {{key:Shift}}+click ay nagdaragdag ng object, o nag-aalis ng object na napili na; ang {{key:Shift}}+window ay nagdaragdag.

Sa prompt na `Select objects:` sa loob ng command, laging nagdaragdag ang mga click (at inaalis ng {{key:Shift}}), anuman ang sinasabi ng setting na ito. Tingnan ang [Piliin ang mga object](topic:select-objects).

## Pag-click sa walang laman na lugar

Ano ang ginagawa ng click kung saan walang object kapag walang tumatakbong command. Sa alinmang paraan, nagsisimula ito ng window ng pagpili (tinatapos ito ng pangalawang click).

- **Inaalis ang selection** (ang simula): binibitawan ang napili. Hawakan ang {{key:Shift}} habang nag-click para itago ito.
- **Pinananatili ang selection**: nananatili ang selection, gaya ng ibang drafting program; idinaragdag ito ng window. Pindutin ang {{key:Esc}} para alisin ang selection.

## Pag-drag para pumili

Ano ang iginuguhit ng pagpindot at pag-drag sa walang laman na lugar:

- **Lasso** (ang simula): malayang outline. Kapag una kang gumalaw pakanan, pipiliin ang mga nasa loob nang buo; kapag pakaliwa, ang mga natatamaan. Ang {{key:Space}} habang nag-drag ay nagpapalit sa pagitan ng window, crossing at fence.
- **Rectangle**: ang kahon, gaya ng pag-click at pangalawang click na gumuguhit nito.

Ang {{cmd:LASSOMODE}} na `1` o `0` ay nagtatakda ng pareho. Tingnan ang [Pagpili gamit ang lasso](topic:lasso-selection).

## Pag-drag para mag-trim at mag-extend

Ano ang ginagawa ng pagpindot sa walang laman na lugar at pag-drag sa {{cmd:TRIM}} at {{cmd:EXTEND}}:

- **Isang path** (ang simula): malayang path; bawat piraso na tinatawid nito ay tina-trim (o ina-extend).
- **Isang window**: isang kahon; bawat piraso na natatamaan nito ay tina-trim, gaya ng opsyong `C`.

Tingnan ang [Trim at extend](topic:trim-and-extend).

## Posisyon ng toolbar

{{ui:CadCraft}} › {{ui:Posisyon ng toolbar}}: **Top** (ang simula, gaya ng dati), **Bottom**, **Left** o **Right**. Sa kaliwa o kanan, nakasalansan sa column ang mga grupo ng tool na gumugulong kapag mas mataas kaysa sa window, at nagbabalot ng dalawa o tatlo bawat linya ang mga button. Naka-save ang pinili kasama ng mga setting mo, at itinatakda ito ng {{cmd:TOOLBARDOCK}} (`TBDOCK`) mula sa command line. Ibinabalik ng {{ui:General}} › {{ui:I-reset ang layout}} ang toolbar sa itaas.

Nasa loob ng toolbar ang mga bar ng estilo ng menu at gumagalaw kasama nito, pero ang estilong {{ui:Ribbon}} ay ginawang tumakbo sa itaas o ibaba: sa gilid, nagkakaroon ito ng makitid na column na gumugulong. Sa telepono, nananatili ang toolbar kung saan ito inilalagay ng layout ng telepono.

## Mga row ng toolbar

Ilang linya ang gamit ng mga tool sa itaas ng drawing, sa CadCraft toolbar at sa mga estilong {{ui:Drafting classic}} at {{ui:Ribbon}}:

- **Wrap to fit** (ang simula): nagbabalot ang mga tool ayon sa lapad ng window.
- **2 rows**: hanggang dalawang linya. Kapag nababalot ang mga tool sa dalawang linya o mas kaunti sa lapad na ito, nagbabalot lamang sila; kung hindi, nasa dalawang row sila na gumugulong pahalang.
- **1 row**: isang linyang gumugulong pahalang, na nag-iiwan ng pinakamaraming espasyo sa drawing.

Ang {{key:Shift+Ctrl+F1}} ay dumadaan sa tatlo, at ang {{cmd:TOOLBARROWS}} ay nagtatakda ng isa. Ang ipinapakita ng mga button (icon at text, icon lamang, o text lamang) ay setting ng {{ui:General}} › {{ui:Toolbar}}; dumadaan dito ang {{key:Ctrl+F1}}, at itinatakda ito ng {{cmd:TOOLBAR}}.

## Command line

Puwedeng manatiling nakadock sa ilalim ng drawing ang command line, gaya ng dati, o lumutang sa ibabaw nito, at puwede rin itong kasing-nipis ng isang linya.

- **Gawin itong lumulutang.** I-drag ang grip sa kaliwang dulo nito papunta sa drawing, o piliin ang {{ui:Lumutang sa ibabaw ng drawing}} sa menu nitong {{ui:Mga opsyon ng command line}} (ang tatlong tuldok sa kanang dulo). I-drag ulit ang grip para ilipat ito; nananatili ang puwesto nito kapag nagbago ang laki ng window. I-drag ang kanang gilid nito para gawin itong mas malapad o mas makitid. Ibagsak ito sa status bar, o piliin ang {{ui:I-dock sa ibaba}}, para idock itong muli.
- **Gawin itong mas manipis o mas mataas.** I-drag ang itaas na gilid nito: bawat hakbang ay isang linya ng history. Hanggang zero na linya, ito ay **one-line command line**: prompt at ang tina-type mo lamang, at may lalabas na bagong mensahe sa itaas nito sa sandali. Ang double-click sa itaas na gilid ay lumilipat sa pagitan ng isang linya at ng taas na mayroon ka.
- **Ang history.** Ang {{key:F2}}, o ang button ng orasan sa command line ({{ui:Command history (F2)}}), ay nagbubukas ng buong history sa itaas ng linya (sa ibaba kapag malapit sa itaas ng window ang lumulutang na linya). Nasa command line pa rin ang pag-type; ang {{key:PageUp}} at {{key:PageDown}} ay nagsa-scroll sa history, at ang {{key:Esc}}, {{key:F2}} o click sa ibang lugar ay nagsasara nito. Ang sarili mong key sa F2 ay nananaig dito.
- **Mula sa keyboard.** Ang grip ay isang button: kapag nakatutok ito, inililipat ng mga arrow key ang lumulutang na command line (kasama ang {{key:Shift}}, mas malalaking hakbang); ang {{key:Up}} ay nagpapalutang sa nakadock na linya at ang {{key:Down}} sa gilid sa ibaba ay nagdo-dock nito. Ang itaas na gilid ay separator: ang {{key:Up}} at {{key:Down}} ay nagdaragdag o nag-aalis ng linya, ang {{key:Home}} ay ginagawa itong isang linya, ang {{key:End}} ang pinakamataas. Naririnig pa rin ng mga screen reader ang bawat mensahe, pati sa one-line na command line.

Ang {{ui:CadCraft}} › {{ui:Command line}} ay may parehong pagpipilian: {{ui:Nakadock sa ibaba}} o {{ui:Lumulutang}}, {{ui:Ipinapakitang linya ng history}} (0 hanggang 12) at {{ui:Karaniwang taas}}. Itinatakda sila ng {{cmd:COMMANDLINE}} (`CMDLINE`) mula sa command line. Naka-save sa browser na ito para sa CadCraft ang puwesto at taas, kasama ng iba pang layout, kaya dala ng naka-save na work environment ang mga ito; ibinabalik ng {{ui:General}} › {{ui:I-reset ang layout}} ang command line sa nakadock na karaniwang taas. Sa telepono, nananatiling nakadock ang command line na may isang linya ng history; gumagana rin doon ang button ng history.

Ang {{ui:CadCraft}} › {{ui:Mga letra ng option}} ay nagpapanatili ng mga letrang pinili mo para sa mga option ng command: binubuksan ng {{ui:I-edit…}} ang file, pinapalitan ng {{ui:I-import…}} ito ng file na pipiliin mo, at sine-save ng {{ui:I-export}} ito. Tingnan ang [Bigyan ang mga command option ng sarili nilang letra](topic:option-letters).

Kapag maikli ang window at nag-aalok ang layout check ng mas masikip na layout, ang {{ui:Oo}} nito ay ginagawa ring isang linya ang command line kung maikli pa rin ang drawing pagkatapos ng mga toolbar.

## Top area

{{ui:CadCraft}} › {{ui:Top area}}: **Standard** (ang simula) o **Compact**. Pinananatiling maliit ng Compact ang mga bar sa itaas ng drawing sa bawat estilo ng menu: nawawala ang mga pangalan ng grupo at ang mga salita sa ilalim ng icon (nananatili pa rin ang tooltip at screen reader), at mas masisikip ang mga button. Gumagana ito kasama ng [Mga row ng toolbar](topic:settings#toolbar-rows): ang Compact at **1 row** ang nag-iiwan ng pinakamaraming espasyo sa drawing. Itinatakda ito ng {{cmd:TOPAREA}}.

## Corner indicator

Ano ang nasa sulok ng drawing:

- **Automatic** (ang simula): ang axis icon sa tab na {{ui:Model}} at ang view cube sa tab na {{ui:3D}}.
- **Axis icon**: ang marker ng X at Y sa kaliwang ibaba ng tab na {{ui:Model}}, at maliit na marker ng X, Y at Z sa tab na {{ui:3D}}.
- **View cube**: isang kubo sa kanang itaas ng parehong tab. Sa tab na {{ui:Model}}, ipinapakita nito ang drawing mula sa itaas, at ang pag-click sa ibang mukha, gilid o sulok ay nagbubukas ng tab na {{ui:3D}} na nakatingin mula roon. Sa tab na 3D, umiikot ito kasabay ng view: i-click para tumingin mula sa gilid, i-drag para mag-orbit, at bumabalik ang bahay sa iso view. Tingnan ang [Model sa 3D](topic:3d-solids).
- **None**: walang nasa sulok.

Hindi nagpapakita ng alinman ang mga sheet.

## Haba at lawak ng selection

- **Sa status bar** (ang simula): kapag may napiling object, ipinapakita ng status bar ang kabuuang haba nila at ang kabuuang lawak ng mga sarado. Tingnan ang [Mga kabuuan ng selection](topic:properties-panel#totals-of-a-selection).
- **Nakatago**: hindi ito isinasama ng status bar. Ipinapakita pa rin ng Properties ang mga ito para sa maraming object.

## Grid, Ortho at mga snap

Wala ang mga ito sa dialog: ang mga button na {{ui:Grid}}, {{ui:Ortho}} at {{ui:Snap}} sa status bar (o {{key:F7}}, {{key:F8}}, {{key:F3}}) at ang listahan ng object snap sa tabi nila ay naaalala kapag iniiwan mo ang mga ito. Tingnan ang [Mag-snap sa mga punto sa object](topic:object-snaps).
