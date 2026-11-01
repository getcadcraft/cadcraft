---
title: Ang screen ng CadCraft
summary: Isang pagtingin sa bawat bar, panel, at tab ng drafting app, ayon sa pangalang nasa screen.
keywords: screen, interface, toolbar, ribbon, panel, command line, status bar, tab, layout tab, properties, panel ng layer, tour
from: b5a33388
---

May pitong bahagi ang screen. Mula sa itaas hanggang sa ibaba: ang app bar, ang toolbar, ang drawing area na may panel sa bawat gilid, ang mga tab sa ilalim ng drawing, ang command line, at ang status bar.

## Ang app bar

Ang manipis na bar sa pinakatuktok ay pag-aari ng site, hindi ng drawing. Ipinapakita nito ang CadCraft mark, ang pangalan ng app, kung aling bersyon ang pinapatakbo mo, isang link sa page ng app, isang button na {{ui:Tulong}} (o {{key:F1}}), isang button na {{ui:I-save para sa offline}}, isang button na {{ui:Buong screen}}, at dalawang theme button, ang {{ui:Papel}} at {{ui:Model}}.

Ang button na {{ui:Mga setting}} (gear) ay naglalaman ng sariling setting ng CadCraft at ng mga ibinabahagi ng bawat app: tingnan ang [Mga setting ng CadCraft](topic:settings).

{{ui:I-save para sa offline}} ay nagtatago ng kopya ng CadCraft, kasama ang DWG reader nito, sa browser na ito para mabuksan ito nang walang koneksyon. Ipinapakita ng label nito ang estado: "Sine-save ang N sa M", "Handa offline", "Hindi na-save", o "Hindi available ang offline". Tingnan ang [Pagtatrabaho offline](common:offline).

:::note
Ang mga button na {{ui:Papel}} at {{ui:Model}} sa app bar ay nagbabago lang ng kulay ng screen: ang {{ui:Papel}} ay light theme, ang {{ui:Model}} ay dark. Wala silang kinalaman sa tab na {{ui:Model}} sa ilalim ng drawing, na lumilipat sa pagitan ng drawing at ng mga sheet nito.
:::

Ang button na {{ui:Buong screen}}, o {{key:Ctrl+Shift+F}} (ang Control key sa bawat computer, kasama ang Mac), ay nagpapalipat-lipat sa tatlong mode ng screen: normal, buong screen, at buong screen na nakatago ang mga bar. Kapag nakatago ang mga bar, ilipat ang pointer sa itaas na gilid ng screen para ibalik ang mga ito.

## Ang toolbar

Nasa ilalim ng app bar ang toolbar. Bawat button ay nagpapatakbo ng command, eksaktong gaya ng pag-type nito, kaya pareho ang tanong ng command line anuman ang gamitin mo. I-hover ang button para makita ang alias ng command nito. Ang mga grupo ay:

| Grupo | Mga button |
|---|---|
| File | {{ui:Bago}}, {{ui:Buksan}}, {{ui:I-save}}, {{ui:I-save bilang}}, {{ui:I-plot}} |
| Draw | {{ui:Linya}}, {{ui:Polyline}}, {{ui:Bilog}}, {{ui:Arko}}, {{ui:Rectangle}}, {{ui:Polygon}}, {{ui:Ellipse}}, {{ui:Teksto}}, {{ui:Paragraph}}, {{ui:Hatch}}, at {{ui:Higit pa}}: {{ui:Punto}}, {{ui:Construction line}}, at {{ui:Ray}} (tingnan ang [Construction line at ray](topic:construction-lines)) |
| Modify | {{ui:Ilipat}}, {{ui:Kopyahin}}, {{ui:I-rotate}}, {{ui:Scale}}, {{ui:Mirror}}, {{ui:Stretch}}, {{ui:Offset}}, {{ui:Trim}}, {{ui:Pahabain}}, {{ui:Fillet}}, {{ui:Chamfer}}, {{ui:Explode}}, {{ui:Burahin}}, at {{ui:Higit pa}}: {{ui:Array}}, {{ui:Join}}, {{ui:Match properties}}, {{ui:Break}}, at {{ui:Lengthen}} |
| Annotate | {{ui:Linear}}, {{ui:Aligned}}, {{ui:Anggulo}}, {{ui:Radius}}, {{ui:Diameter}} (mga dimension), {{ui:Leader}} (multileader), at {{ui:Higit pa}}: {{ui:Continue dimension}}, {{ui:Baseline dimension}}, at {{ui:Revision cloud}} |
| Parametric | {{ui:Auto}}, {{ui:Constrain}}, {{ui:Dimension}}, {{ui:Parameters}}, at {{ui:Higit pa}} na may bawat constraint (tingnan ang [Mag-constrain ng drawing](topic:constraints)) |
| Blocks | {{ui:Gumawa}}, {{ui:I-insert}}, {{ui:Library}}, at {{ui:Higit pa}}: {{ui:I-edit ang block}} at {{ui:Magtakda ng attribute}} |
| Sheets | {{ui:Bagong sheet}}, {{ui:Viewport}} |
| Edit | {{ui:I-undo}}, {{ui:I-redo}}, {{ui:Kopyahin}} (sa clipboard), {{ui:I-paste}}, at {{ui:Higit pa}}: isang menu na may {{ui:I-cut}}, {{ui:Kopyahin}}, {{ui:I-paste}}, {{ui:I-paste sa mismong lugar}}, {{ui:I-duplicate at ilipat}}, {{ui:Burahin}}, {{ui:Piliin lahat}}, {{ui:Huwag piliin ang alinman}}, {{ui:Quick select}}, {{ui:Pumili ng katulad}}, at {{ui:Hanapin at palitan}}, bawat isa kasama ang key nito |
| View | {{ui:Extents}}, {{ui:Window}}, {{ui:Nakaraan}}, at {{ui:Higit pa}}: {{ui:Sukatin ang distansya}}, {{ui:Lawak}}, {{ui:Sukatin (radius, anggulo …)}}, at ang split screen: {{ui:Hatiin nang magkatabi}}, {{ui:Hatiin nang patong-patong}}, {{ui:Apat na pane}}, {{ui:Isang pane}} (tingnan ang [Hatiin ang screen](topic:split-screen)), at {{ui:Ikot ng view 90° pakaliwa}}, {{ui:Ikot ng view 90° pakanan}}, {{ui:Bumalik sa world}} (tingnan ang [Ikutin ang view](topic:ucs-and-turned-view)) |

Ang {{ui:Kopyahin}} sa grupong {{ui:Modify}} ay ang command na {{cmd:COPY}} (base point, saka kung saan mapupunta ang bawat kopya); ang {{ui:Kopyahin}} sa grupong {{ui:Edit}} ay naglalagay ng mga object sa clipboard para sa {{ui:I-paste}}. Tingnan ang [Kopyahin, i-paste, at i-duplicate](topic:copy-paste). Ang button ng command na tumatakbo ay nananatiling naka-highlight hanggang matapos ang command. Ang mga tooltip ay nagpapangalan ng mga shortcut ng Windows ("Ctrl+O"); sa Mac, gumagana rin ang {{key:Mod+O}}.

Sa maikling window (laptop na may display na naka-scale sa 125 % o mas mataas, halimbawa), hindi kailanman inaagaw ng toolbar ang puwesto ng drawing: kapag masyadong kaunti ang taas na matitira sa drawing, binibitawan ng mga button ang mga salita sa ilalim ng kanilang icon at ang mga pangalan ng grupo (i-hover ang button para sa pangalan nito), at kung hindi pa rin sapat, nagiging isang row ang toolbar na nagsa-scroll sa gilid. Ibinabalik ng mas matangkad na window ang mga salita.

## Ang kaliwang panel

Ang panel sa kaliwa ay may tatlong seksyon.

- **{{ui:Mga Layer}}.** Bawat layer sa drawing, na may punong tuldok ang kasalukuyan. I-click ang pangalan para gawing kasalukuyang layer iyon. Bawat row ay may color swatch (i-click ito para pumili ng kulay) at apat na button: on/off (mata), freeze (snowflake), lock (padlock), at plot (printer). Nagbubukas ang {{ui:Bagong layer}} ng kahon para magdagdag ng isa. Tingnan ang [Ayusin ang drawing gamit ang mga layer](topic:layers).
- **{{ui:Mga Block}}.** Ang mga block na tinukoy sa drawing, kung ilang beses ginagamit ang bawat isa, at isang button na {{ui:I-insert}} para sa bawat isa. Tingnan ang [Gumawa at maglagay ng block](topic:blocks).
- **{{ui:Drawing}}.** Mga impormasyon tungkol sa nakabukas na file: pangalan (na may "(binago)" kapag may hindi pa na-save na pag-edit), format, laki, {{ui:Mga unit}}, bilang ng object, layer, block, at sheet. Pagkatapos mong magbukas ng file, nililista ng kahon na "Tungkol sa file na ito" ang anumang hindi maipakita ng CadCraft o kailangang i-convert.

## Ang drawing area

Ang gitna ng screen ay ang drawing. Ang pointer ay crosshair. Kapag humihingi ng punto ang CadCraft, lumalabas ang maliit na marker at label ("Endpoint", "Midpoint") na nagpapakita kung saan lalapag ang object snap. Kapag humihingi ito ng mga object, may pick box ang crosshair at nagliliwanag ang mga object sa ilalim nito.

Kapag walang laman ang drawing, may card na "Simulan ang drawing" na nagpapakita ng ilang unang command. Nawawala ito kapag nagpatakbo ka ng command o nagbukas ng file. Maaari mong i-drop ang DWG o DXF na file kahit saan sa lugar na ito para buksan ito.

## Ang mga tab sa ilalim ng drawing

Sa ilalim ng drawing ay ang mga tab: {{ui:Model}} muna, saka {{ui:3D}}, saka isang tab bawat sheet (layout), at pagkatapos ang isang button na {{ui:+}}.

- {{ui:Model}} ang mismong drawing, sa buong laki, sa drawing units.
- {{ui:3D}} ay nagpapakita ng drawing na nakahiga sa lupa at ang mga solid na ginawa mula rito. Habang ipinapakita ito, ang toolbar ay may grupong {{ui:3D}} sa halip na mga grupo ng drawing. Tingnan ang [Model sa 3D](topic:3d-solids).
- Bawat sheet tab ay isang sheet ng papel na may title block at mga viewport papunta sa model. Ang iginuguhit mo roon ay nasa paper unit (millimeter o inch). I-double-click sa loob ng viewport para gumana sa model sa pamamagitan nito (tingnan ang [Gumana sa model sa pamamagitan ng viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Ang mahabang pangalan ng sheet ay pinuputol sa tab nito; i-hover ang tab para makita ang buong pangalan. Kapag maraming sheet, ang {{ui:Mga setting}} › {{ui:CadCraft}} › {{ui:Mga sheet tab}} › {{ui:Sheet number lang}} ay nagpapakita lamang ng numero ng bawat sheet (A-101) sa tab nito.
- {{ui:+}} ay gumagawa ng bagong sheet na may border, title block, at isang viewport. Pareho ito sa command na {{cmd:LAYOUT}}.
- I-double-click ang sheet tab para palitan ang pangalan nito. Kapag naka-focus ang isang tab, lumilipat sa pagitan ng mga tab ang {{key:Left}} at {{key:Right}}.

Pinapanatili ng bawat tab ang sarili nitong zoom at pan. Tingnan ang [Ihanda ang sheet](topic:sheets-and-viewports).

## Ang kanang panel: Properties

Nagbabago ang panel sa kanan ayon sa napili.

- **Walang napili, sa tab na {{ui:Model}}:** ang heading ay nagbabasa ng {{ui:Kasalukuyang setting}}. Dito mo itinatakda ang {{ui:Layer}}, {{ui:Kulay}}, at {{ui:Taas ng teksto}} para sa mga bagong object, ang {{ui:Mga unit}} ng drawing, at ang mga laki para sa mga bagong dimension ({{ui:Taas ng teksto}}, {{ui:Laki ng arrow}}, {{ui:Decimals}}, {{ui:Kabuuang scale}}).
- **Walang napili, sa isang sheet:** ang heading ay nagbabasa ng "Sheet:" at ang pangalan ng sheet. Maaari mong palitan ang pangalan ng sheet, baguhin ang {{ui:Papel}} at {{ui:Oryentasyon}} nito, {{ui:I-plot ang sheet na ito}}, o {{ui:Burahin ang sheet na ito}}. Nasa ibaba ang mga setting para sa mga bagong object.
- **Isang object ang napili:** ang uri nito bilang heading (Linya, Bilog, Teksto, Dimension, Viewport …), saka ang layer, kulay, at geometry nito. I-type ang bagong value at pindutin ang {{key:Enter}} para baguhin ito.
- **Maraming object ang napili:** kung ilan sila, at ang karaniwang {{ui:Layer}} at {{ui:Kulay}} ng mga ito. Ang pagbabago sa alinman ay nagbabago sa lahat. Ang "Iba-iba" ay nangangahulugang magkakaiba sila.

Tingnan ang [I-edit gamit ang grip at Properties](topic:grips-and-properties).

Sa ibaba nito, bumubukas ang panel na {{ui:Parameters}} kapag pinili mo ang {{ui:Parameters}} o i-type ang {{cmd:PARAMETERS}}: bawat parameter at dimensional constraint sa iisang table. Tingnan ang [Gamitin ang mga parameter at equation](topic:parameters).

## Ang command line

Nasa ibaba ang command line: ang history ng ginawa mo, at sa ilalim nito ang prompt.

- Ang label ng prompt ay nagbabasa ng `Command:` kapag walang tumatakbo. Habang may tumatakbong command, ipinapakita nito ang tanong, ang mga opsyon nito sa square bracket, at ang default sa angle bracket, halimbawa `Specify radius of circle [Diameter] <500>:`.
- Habang nagta-type ka ng pangalan ng command, may hint sa kanan na nagmumungkahi ng mga katugmang command. Pindutin ang {{key:Tab}} para tanggapin ang una. Ang "Walang ganoong command" ay nangangahulugang walang tugma.
- Ibinabalik ng {{key:Up}} at {{key:Down}} ang mga linyang na-type mo noon.
- Pinapanatili ng history ang huling 400 linya. Lumalabas dito ang mga mensahe ng command, ang mga sukat mula sa {{cmd:DIST}} at {{cmd:LIST}}, at ang mga ulat ng save at plot.

## Ang status bar

Ang pinakailalim na hilera ay ang status bar.

- **Coordinates** sa kaliwa: ang X at Y ng crosshair. Habang may base point ang isang command, ipinapakita rin nito ang distansya at anggulo mula rito, halimbawa `Δ 1200 < 90°`.
- **Mga mensahe** sa gitna, gaya ng "Naka-on ang Ortho" o "Kasalukuyang layer: Walls". Nawawala ang mga ito pagkatapos ng ilang segundo.
- **{{ui:Grid}}**, **{{ui:Ortho}}**, **{{ui:Polar}}**, **{{ui:Snap}}**, **{{ui:Track}}**, **{{ui:Dyn}}**, at **{{ui:LWT}}** sa kanan. Bawat isa ay toggle; ang nakapindot na button ay naka-on. Ipinapakita ng {{ui:LWT}} ang lineweight sa screen (tingnan ang [Line weight at linetype](topic:units-papers-scales#line-weights-and-linetypes)). Ang maliit na arrow sa tabi ng {{ui:Snap}} ay nagbubukas ng {{ui:Object snaps}}, kung saan mo tinitiktikan kung aling snap ang aktibo. Tingnan ang [Mag-snap sa mga punto sa object](topic:object-snaps).

## Ang dialog na I-plot sa PDF

Ang {{ui:I-plot}} (o {{key:Mod+P}}) ay nagbubukas ng dialog na {{ui:I-plot sa PDF}}, na may mga setting sa kaliwa at live preview sa kanan. Tingnan ang [I-plot sa PDF](topic:plot-pdf).

## Ang help

Ang {{key:F1}} o ang button na {{ui:Tulong}} ay nagbubukas sa help na ito bilang side panel; nananatiling magagamit ang drawing sa tabi nito. Gumagana ito nang walang koneksyon. Ang {{key:F1}} muli, o ang {{key:Esc}} sa loob ng panel, ay nagsasara nito. Tingnan ang [Paggamit ng help na ito](common:help).
