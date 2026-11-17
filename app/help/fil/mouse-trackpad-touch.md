---
title: Mouse, trackpad at touch
summary: Paano mag-zoom, mag-pan, mag-right-click at pumili sa CadCraft gamit ang wheel mouse, Mac o PC trackpad, o touch screen, at kung ano ang pagkakaiba sa mga browser.
keywords: trackpad, touchpad, magic mouse, touch, tablet, ipad, pan, zoom, pinch, right click, dalawang daliri, gitnang button, browser, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft ay dinisenyo para sa mouse na may wheel. Gumagana rin ang lahat gamit ang trackpad, na may ilang gawing kailangang matutunan. Gumagana ang mga touch screen sa pagpili, may limitasyon.

## Wheel mouse

- **Zoom:** i-roll ang wheel. Nagzu-zoom ang drawing sa paligid ng crosshair, kaya ituro ang gusto mong makita.
- **Pan:** pindutin nang matagal ang wheel at i-drag, o i-drag gamit ang kanang button.
- **Zoom sa lahat:** i-double-click ang wheel, o i-click ang {{ui:Extents}}.
- **Balik sa naunang view:** i-click ang {{ui:Nakaraan}} sa grupong View, o i-type ang `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Ang sunod-sunod na hakbang ng wheel ay binibilang bilang isang view, kaya isang {{ui:Nakaraan}} lang ang bumabawi nito. I-save ang mga view na binabalikan mo gamit ang {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** i-right-click.

## Trackpad

:::mac
- **Pan:** igalaw ang dalawang daliri sa trackpad, sa anumang direksyon: sumusunod ang drawing sa mga daliri mo. Puwede ka ring mag-drag gamit ang dalawang daliring nakapindot (isang right-button drag).
- **Zoom:** pinch gamit ang dalawang daliri. Sumusunod ang zoom sa crosshair.
- **Right-click (Enter):** i-click gamit ang dalawang daliri. I-on ang "Secondary click" sa **System Settings**, pagkatapos **Trackpad**, kung walang nangyayari. Maaaring ituring ng CadCraft na ordinaryong click ang Control-click sa halip na right-click, kaya gamitin ang two-finger click.
- **Zoom sa isang lugar:** i-click ang {{ui:Window}} sa grupong View at i-click ang dalawang sulok.
:::

:::windows linux
- **Pan:** igalaw ang dalawang daliri sa touchpad, sa anumang direksyon: sumusunod ang drawing sa mga daliri mo. Puwede ka ring mag-drag gamit ang kanang button na nakapindot.
- **Zoom:** pinch gamit ang dalawang daliri. Sumusunod ang zoom sa crosshair.
- **Right-click (Enter):** i-click gamit ang dalawang daliri, o i-click ang ibabang kanang sulok ng touchpad, depende sa setting ng touchpad mo.
- **Zoom sa isang lugar:** i-click ang {{ui:Window}} sa grupong View at i-click ang dalawang sulok.
:::

Ang pagpindot sa {{key:Space}} at pag-drag ay **hindi** nagpa-pan sa CadCraft: ang {{key:Space}} ay Enter.

Nagzu-zoom pa rin ang mouse wheel, isang hakbang sa isang pagkakataon. Ang touchpad na nagpapadala ng scroll sa buong hakbang, gaya ng wheel, ay nagzu-zoom gamit ang two-finger scroll sa halip na mag-pan: mag-zoom out, ituro ang lugar na gusto mo, at mag-zoom in ulit. Pinananatili ng 3D tab ang sarili nitong trackpad na galaw (tingnan ang [Model sa 3D](topic:3d-solids#look-around)).

## Touch screen at tablet

Binabasa ng CadCraft ang daliri bilang mouse click:

- Ang tap ay pumipili ng punto o object, o nagse-select.
- Ang pag-drag ng daliri sa walang laman na espasyo ay gumuguhit ng lasso (pakanan muna ay window, pakaliwa muna ay crossing; tingnan ang [Lasso selection](topic:lasso-selection)).
- Sa {{cmd:TRIM}} at {{cmd:EXTEND}}, ang pag-drag ng daliri sa mga piraso ay nagta-trim o nag-e-extend sa lahat ng ito.
- Ang pag-drag ng grip ng napiling object ay gumagalaw sa grip (mas malaki ang mga grip at pick box para sa daliri).
- **Pinch** gamit ang dalawang daliri para mag-zoom sa punto sa pagitan nila; igalaw nang sabay ang dalawang daliri para **mag-pan**. Kinakansela ng pangalawang daliri ang sinimulan ng una, kaya hindi nag-iiwan ng marka ang pinch.
- Ang **long press** (pindutin nang nakatigil nang mga kalahating segundo) ay right click: {{key:Enter}}. Tinatapos nito ang command, tinatapos ang pagpili, o inuulit ang huling command.

Sa ilalim ng command line ay lalabas ang isang **key row**: {{ui:Esc}}, I-undo, I-redo, ang mga karakter na itinatago ng tablet keyboard (`@` `,` `<` `'` `"` `-`), {{ui:Snap}}, {{ui:Ortho}}, isang keyboard button, at isang malaking {{ui:Enter}}. I-tap ang keyboard button (o ang command line) para mag-type ng command o numero.

Walang hover, kaya lumalabas lang ang snap marker kung saan nakadikit ang daliri mo.

:::touch
Gumagamit ka ng touch screen. Para sa anumang higit pa sa mabilisang pagtingin, mas madaling gamitin ang CadCraft kapag may nakakabit na keyboard at mouse o trackpad.
:::

## Mga browser

Gumagana nang pareho ang CadCraft sa Chrome, Edge, Firefox at Safari, sa Mac, Windows at Linux. Maliit lang ang pagkakaiba:

| Paksa | Ano ang dapat malaman |
|---|---|
| Pagbubukas ng DWG | Ang malalaking drawing ay tumatagal ng ilang segundo bago mabasa sa bawat browser; ipinapakita ng status line ang "Reading …" habang nagbabasa |
| Mga download | Nagpapasya ang bawat browser kung saan mapupunta ang mga download at kung magtatanong muna; tingnan ang [Mga browser at computer](common:browsers) |
| Buksan para i-print | Binubuksan ang PDF sa bagong tab. Kung hinaharangan ng browser ang pop-up, dina-download ng CadCraft ang PDF sa halip |
| F7 | Maaaring mag-alok ang Firefox ng caret browsing; piliin ang No |
| Pag-alis na may hindi pa na-save na pagbabago | Ang bawat browser ay nagpapakita ng sarili nitong tanong na pang-alis sa site, na hindi kayang baguhin ng CadCraft |

:::safari
Sa Safari, ang PDF na binuksan gamit ang {{ui:Buksan para i-print}} ay maaaring lumabas sa tab nang hindi nagpi-print: gamitin ang **File**, pagkatapos **Print**.
:::

:::firefox
Maaaring magtanong ang Firefox kung ano ang gagawin sa bawat download. Piliing i-save ang file, o baguhin ito nang minsanan sa settings ng Firefox sa ilalim ng Downloads.
:::
