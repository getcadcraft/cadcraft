---
title: Galing sa ibang drafting software
summary: Paano nagma-map sa CadCraft ang mga pamilyar na command, key at gawi, at ang mga pagkakaiba na nakakalito sa mga bihasang drafter.
keywords: paglipat, pagkakaiba, migrate, gawi, aliases, dynamic input, pickfirst, pickadd, qsave, saveas, I-save bilang, mtext, ctb, polar tracking, xref, keyboard shortcuts, pamilyar, copyclip, pasteclip, pasteorig, copybase, clipboard
from: b58688e7
---

Kung gumamit ka ng AutoCAD, o program na nakabase sa parehong modelo, karamihan ng alam mo ay gumagana dito: ang command line, mga alias gaya ng `L`, `C`, `TR` at `O`, Enter o Space para ulitin, window at crossing selection, object snap sa F3, Ortho sa F8, model space na may layout at viewport. Nakalista sa pahinang ito kung ano ang direktang nagma-map, at pagkatapos ang mga pagkakaiba na nakakahuli sa mga tao. Basahin ang ikalawang bahagi kahit mabilisan lang ang pagbasa mo sa una.

## Ang direktang nagma-map

| Gawi | Sa CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Parehong command, parehong alias |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Pareho |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Parehong dimension command |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` na tina-type sa command line | Pareho, para sa mga bagong dimension |
| `B` para gumawa ng block, `I` para mag-insert, `PU` para mag-purge | Pareho (ang purge ay nag-aalis lamang ng mga block na hindi nagagamit) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` at pagkatapos `E` o `W` | Pareho |
| Pag-type ng `_LINE` o `-LAYER` mula sa script o gawi | Hindi pinapansin ang nangungunang `_`, `-`, `.` o `'` |
| Enter o Space sa walang laman na prompt ay inuulit ang huling command | Pareho |
| Kinakansela ng Esc; muling Esc ay nagkakalinis ng selection | Pareho |
| `@dx,dy`, `@d<a`, mga anggulong tina-type na pakaliwa mula sa silangan | Pareho |
| Window mula kaliwa papuntang kanan, crossing mula kanan papuntang kaliwa, click-click; pindutin at i-drag para sa lasso, ang Space ay umiikot sa window / crossing / fence (LASSOMODE) | Pareho |
| Pumili muna, saka ang command (noun-verb) | Pareho; ang tapos na command ay nagkakalinis ng selection |
| `ALL` at `L` sa Select objects | Pareho |
| Shift+click ay nag-aalis sa selection | Pareho. Maaaring gawing palitan ng click ang selection ng mga setting, gaya ng ginagawa ng PICKADD 0: tingnan ang [Mga setting ng CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Parehong command at key; inilalagay ng pag-paste ang kopya ayon sa kaliwang-ibabang sulok nito, gaya ng ginagawa ng PASTECLIP |
| F3 object snap, F7 grid, F8 Ortho | Parehong key |
| Mag-double-click sa wheel para mag-zoom extents | Pareho |
| Ang mirrored na teksto ay nananatiling nababasa | Pareho (gaya ng MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Pareho; sa Mac, gumagana rin ang Command |

Nakalista sa [Sanggunian ng command](topic:commands) ang bawat command at alias.

:::tip
Kung gusto mo ang ribbon ng AutoCAD, piliin ang estilo ng menu na {{ui:Drafting classic}} sa {{ui:Mga setting}} › {{ui:CadCraft}} › {{ui:Mga menu, key at mouse}}: ang mga tab na Home, Insert, Annotate, Parametric, View, Manage at Output sa ibabaw ng parehong command line, at ang gitnang button ay nag-pa-pan habang ang right click ay Enter. Tingnan ang [Mga menu, key at mouse](topic:menus-keys-and-mouse).
:::

Nakalista sa [command map](topic:command-map) ang bawat command ng CadCraft kasama ang mga maikling pangalan nito, at ang [cheat sheet](topic:cheat-sheet) ang 40 na pinakaginagamit mo (available din bilang one-page PDF).

## Mga pagkakaiba na nakakalito sa mga tao

### Ang mga typed na punto ay absolute

Kapag naka-on ang dynamic input sa ibang program, ang typed na `100,0` para sa ikalawang punto ay itinuturing na relatibo. **Hindi ito ginagawa ng command line ng CadCraft**: doon, ang `x,y` ay palaging sinusukat mula sa origin. Kapag naka-on ang {{ui:Dyn}} ({{key:F12}}), gamitin ang mga field nito: distansya, {{key:Tab}}, anggulo. Gamitin ang `@100,0` para sa "100 sa kanan ng huling punto", o ilipat ang crosshair sa tamang direksyon at i-type ang simpleng `100`.

### Nilalaktawan ng Shift ang snap; hindi ito nagbibigay ng Ortho

Ang pagpindot sa Shift habang nag-click ay hindi pinapansin ang object snap para sa click na iyon. Hindi nito pansamantalang binabago ang Ortho. Gamitin ang F8 o ang button na {{ui:Ortho}}.

### Ang right-click ay palaging Enter

Walang right-click menu. Ang right-click sa drawing ay Enter: tinatapos nito ang command, tinatapos ang selection, o inuulit ang huling command. Habang nasa grip move o selection box, nagkakansela ito sa halip. I-drag gamit ang right button para mag-pan.

### Walang pag-pan gamit ang Space bar

Ang Space ay Enter, kaya ang pagpindot sa Space at pag-drag ay hindi nagpa-pan. Mag-pan gamit ang middle button o right button, o mag-zoom out at pabalik sa ibang lugar gamit ang wheel.

### Trim at Extend

Nagsisimula ang Trim at Extend sa Quick mode: bawat nakikitang object ay isang cutting edge o boundary, ang piyesang nasa ilalim ng pointer ay nagpapakita kung ano ang mawawala, ang na-drag na path ay nagt-trim sa bawat piyesang tinatawid nito, at ang object na walang tumatawid ay nabubura. Ang {{key:Shift}} ay nagpapalit sa pagitan ng trim at extend. Ang `O` ay lumilipat sa Standard mode (piliin muna ang mga edge), ang `F` at `C` ay fence at crossing, ang `E` ay EDGEMODE, ang `R` ay nagbubura. Walang opsyong `P` (Project): nagt-trim ang CadCraft sa eroplano ng drawing.

### Fillet at chamfer

Tinatanggap ng {{cmd:FILLET}} at {{cmd:CHAMFER}} ang mga opsyong alam mo: Undo, Polyline, Radius (o Distance, Angle at mEthod), Trim at Multiple, at {{key:Shift}}+click para sa matalim na sulok. Ang fillet sa pagitan ng polyline at linya ay nagdadagdag ng arko bilang sariling object sa halip na pagsamahin ito sa polyline, at ang mga sulok ng polyline na katabi ng arc segment ay naiiwang gaya ng mga ito.

### Paragraph text at single-line text

Ang `T`, `MT` at `MTEXT` ay paragraph text na tina-type sa mismong lugar, may lapad, line spacing at justification; ang `DT` at `DTEXT` ay single-line text, gaya ng alam mo. Walang text style o column, at hindi pa maaaring mag-type ng formatting sa loob ng teksto (bold, stacked fraction); ang formatting na nagmula sa file ay pinananatili, iginuguhit at sine-save (tingnan ang [Magdagdag ng teksto at label](topic:text#formatting-inside-paragraph-text-from-other-programs)). Ang lahat ay iginuguhit sa font na katulad ng Helvetica.

### Ang Save ay nangangahulugang "mag-download ng kopya"

{{key:Mod+S}}, `SAVE` at `QSAVE` ay nagda-download ng kopya sa format ng drawing: ang DWG na binuksan mo ay nase-save bilang DWG, ang DXF bilang DXF. Sa browser, walang na-o-overwrite sa mismong lugar, at hindi kailanman nababago ang mga binuksang file. Sa CadCraft Studio, isinusulat ng {{key:Mod+S}} pabalik sa file na binuksan mo.

Ang `SAVEAS` ({{key:Mod+Shift+S}}) ay maliit na dialog, hindi file browser: piliin ang {{ui:DWG}} (kasama ang {{ui:Version}} nito, AutoCAD 2000 hanggang 2018), {{ui:DXF R12}} o {{ui:DXF 2000}} at i-click ang {{ui:I-save}}. Ang browser ang nagpapasya kung saan mapupunta ang download. Ang `DXFOUT` ay laging nagda-download ng DXF R12.

Ang DWG na binuksan mo ay sine-save sa bersyong pinanggalingan nito; ang bagong drawing ay sine-save sa format na AutoCAD 2000 maliban kung pipili ka ng iba. Pinananatili ang mga sheet, dimension at hatch pattern. Tingnan ang [Mga file: ano ang nabubuksan, ano ang nase-save](topic:files#saving).

### Mas simple ang mga layer

- Ang bawat pagbabago sa layer (on, freeze, lock, color, plot, linetype, lineweight, current layer) ay isang undo step.
- Pareho ang epekto ng off at freeze sa CadCraft.
- Ang mga layer na na-freeze ng drawing sa isang viewport ay mananatiling naka-freeze doon: sa screen, sa mga plot at kapag sine-save bilang DWG o DXF.
- Ang viewport na nagpapakita ng layer sa sarili nitong kulay, linetype, lineweight o transparency ay patuloy na ginagawa iyon sa screen, sa mga plot at sa na-save na DWG (pinananatili ng DXF ang sariling setting ng layer; sinasabi ito ng save). Ang pagbabago nito bawat viewport ay hindi pa naitatayo.
- Walang layer properties manager at walang layer state; ang {{cmd:RENAME}}, {{cmd:LAYMRG}} at {{cmd:LAYDEL}} ay nagpapalit ng pangalan, nagsasama at nagbubura ng layer. Ang linetype at lineweight ay itinatakda sa kanang panel (tingnan ang [Mga line weight at linetype](topic:units-papers-scales#line-weights-and-linetypes)); ang {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} at {{cmd:LAYMCUR}} ay gumagana sa pamamagitan ng pagpili.
- Ang pag-save sa DXF R12 ay sumusulat ng mga pangalan ng layer sa malalaking titik. Pinananatili ng DWG ang mga ito gaya ng pagkaka-type mo.

### Mga dimension style

Binubuksan ng `DIMSTYLE` ang manager para sa mga pinangalanang style (bago, baguhin, itakda bilang kasalukuyan, ikumpara, ilapat). Ang `DIMSCALE` at iba pang setting ay nagbabago pa rin sa gamit ng mga bagong dimension, at pinananatili ng bawat dimension ang sarili nitong laki, na maaari mo ring baguhin sa panel na Properties. Hindi nase-save sa file ang kasalukuyang style. Ang mga dimension ay sumusunod sa length format ng drawing (decimal, o feet at inches gamit ang {{cmd:UNITS}}), o sa sarili nilang {{ui:Format}}. Tingnan ang [Itakda ang laki ng dimension](topic:dimension-settings).

### Mas simple ang pag-plot

Gumagana ayon sa kulay ang mga plot style table, gaya ng mga CTB file: Monochrome, Colour at Grayscale ay built-in, maaari kang gumawa ng sarili mo, at pinananatili ng bawat sheet ang table nito. Ang pagbasa ng CTB file ay binuo mula sa nai-publish na paglalarawan at sinubukan lamang sa mga file na ginawa namin; ang mga pinangalanang plot style table (STB) at page setup ay hindi pa naitatayo. Nao-print ang mga linya sa kanilang lineweight, ang iba sa isang lapad ng panulat. Nag-p-plot ang mga sheet sa 1:1 sa sarili nilang papel; ang model ay nag-p-plot sa napiling scale o naka-fit. Tingnan ang [Plot to PDF](topic:plot-pdf).

### Pagtatrabaho sa loob ng viewport

Gaya ng alam mo: mag-double-click sa loob ng viewport (o i-type ang {{cmd:MSPACE}}) para gumawa sa model sa pamamagitan nito, at mag-double-click sa labas (o {{cmd:PSPACE}}) para bumalik sa sheet. Sa loob, ang pag-pan at zoom ay nagbabago kung ano ang ipinapakita ng viewport, maliban kung naka-lock ang display nito; kapag gayon, inililipat nila ang sheet. Ang pag-click sa tab sa ilalim ng drawing ay umaalis din sa viewport. Tingnan ang [Gumawa sa model sa pamamagitan ng viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Tracking at dynamic input oo, grid snap hindi pa

Ang grid ay para lang tingnan; hindi sumasnap ang mga punto dito (walang F9 snap mode). Ang polar tracking ({{key:F10}}, hakbang na itinakda gamit ang {{cmd:POLARANG}}) at object snap tracking ({{key:F11}}: huminto sa snap point para makuha ito) ay gumagana gaya ng alam mo; tingnan ang [Sumnap sa mga object](topic:object-snaps#polar-tracking). Ang dynamic input ({{key:F12}}) ay nagpapakita ng distansya at anggulo (o X at Y) sa tabi ng crosshair; tingnan ang [Paglalagay ng coordinate at distansya](topic:coordinate-entry#dynamic-input).

### Feet at inches

Piliin ang {{ui:Length format}} na {{ui:Architectural}} o {{ui:Engineering}} (o i-type ang {{cmd:UNITS}}), at i-type ang mga haba gaya ng alam mo: `12'6"`, `12'6-1/2"`. Gumamit ng gitling, hindi espasyo, bago ang fraction: ang {{key:Space}} ay {{key:Enter}}. Itakda rin ang {{ui:Mga unit}} sa {{ui:Pulgada}}, para mag-alok ang mga sheet at plot ng architectural scale. Pinananatili ang format sa mga na-save na DWG at DXF file. Tingnan ang [Feet at inches](topic:units-papers-scales#feet-and-inches-and-fractions).

### Ang copy at paste ay nananatili sa loob ng CadCraft

{{key:Mod+C}}, {{key:Mod+X}} at {{key:Mod+V}} ay kumokopya, nagkakaltas at nagpe-paste ng mga object sa loob ng isang drawing, sa pagitan ng mga drawing, at sa pagitan ng mga tab ng CadCraft sa parehong browser. Sariling clipboard ng CadCraft ito: hindi mo maipe-paste ang mga object ng CadCraft sa ibang program, o ang mga object mula sa ibang program sa CadCraft. Ang pag-paste mula sa drawing na nasa ibang unit ay hindi nagre-rescale: gamitin ang {{cmd:SCALE}} pagkatapos. Ang {{key:Mod+D}} ay isang duplicate na gumagalaw kasama ang pointer, isang dagdag ng CadCraft. Tingnan ang [Kopyahin, i-paste at i-duplicate](topic:copy-paste).

### Mga browser key na hindi mo magagamit

Hindi maaaring kunin ng web page ang {{key:Mod+N}}, {{key:Mod+W}} o {{key:Mod+T}} mula sa browser: nagbubukas at nagsasara ang mga ito ng window at tab. Gamitin ang button na {{ui:Bago}} o i-type ang `NEW`. Tingnan ang [Mga key, mouse at trackpad](common:keys).

## Mga command na maaaring hanapin mo pero wala pa rito

Hindi pa naitatayo ang {{cmd:TABLE}}. Kapag tinype ito, nagsasabi ito ng "Unknown command". ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} at {{cmd:XREF}} ay naitayo na.) Inililista ng [Not built yet](topic:not-built-yet) kung ano ang gagawin sa ngayon.
