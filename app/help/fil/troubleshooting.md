---
title: Troubleshooting
summary: Mga mensaheng ipinapakita ng CadCraft at mga problemang maaari mong maranasan, bawat isa ay may sanhi at lunas.
keywords: problema, error, hindi gumagana, mensahe, hindi mabuksan, hindi kilalang command, walang nangyayari, stuck, hindi gumagana ang mga key, blangko, nawawala, ayusin
from: 8299b222
---

## Pagbubukas ng mga file

| Mensahe o sintomas | Sanhi | Lunas |
|---|---|---|
| "Nagbubukas ang CadCraft ng mga drawing na DWG at DXF. "…" ay hindi alinman sa dalawa." | Hindi `.dwg` o `.dxf` ang file. | Buksan mismo ang drawing file. Maaaring i-import ang PDF (tinatanong ng Open kung i-import o i-attach; tingnan ang [PDF underlays](topic:pdf-underlay)); ang mga larawan ay ipinapasok gamit ang `IMAGEATTACH`. |
| "Natapos ang binary DXF na ito sa gitna ng isang object: putol o sira ang file." | Huminto ang binary DXF bago ang dulo nito. | I-type ang RECOVER para buksan ang mga mababasa, o humingi muli ng file. |
| "Hindi ito mabasang DXF (maling group code sa linya …)." | Sira ang DXF o hindi talaga DXF. | Humingi muli ng file, o ng DWG. |
| "Hindi mabasa ang drawing na ito. Maaaring sira ito, o na-save sa bersyong hindi pa kayang basahin ng reader (…)." | Hindi ito mabasa ng DWG reader. | Humingi ng DWG na na-save sa mas lumang bersyon, o ng DXF. |
| "Galing ang drawing na ito sa AutoCAD R11 / R12 (DWG AC1009), mas luma kaysa sa kayang basahin ng CadCraft …" | Gumagamit ang mga DWG file mula sa Release 12 at mas luma ng format na hindi binabasa ng CadCraft. | Sa program na gumawa nito, i-save ito bilang DXF (anumang bersyon) o bilang mas bagong DWG, at buksan iyon. Nag-aalok ang sariling Save as ng CadCraft ng DXF R12 para sa mga program na gusto ang lumang format na iyon. |
| "Hindi mabuksan …" kasunod ng mensaheng network, sa unang DWG | Hindi ma-download ang DWG reader: offline ka at hindi naka-save ang CadCraft para sa offline na paggamit, o naputol ang koneksyon. | Kumonekta at subukan muli, o magbukas ng DXF. I-click ang {{ui:Save for offline}} at maghintay ng "Handa na offline" para mabuksan ang mga DWG file offline sa susunod. Tingnan ang [Working offline](common:offline). |
| Ang offline button ay nagsasabing "Hindi ma-save" | May ilang file na hindi na-download. | Tingnan ang koneksyon at i-click muli ang button para subukan ulit. |
| Ang offline button ay nagsasabing "Hindi available ang offline" | Hindi makapag-imbak ng offline na kopya ang private windows at ang ilang managed na computer. | Gumamit ng normal na window, o manatiling online. |
| Hindi bumubukas ang CadCraft nang walang koneksyon | Hindi ito na-save para sa offline na paggamit sa browser na ito, o nilinis ito ng browser. | Sa susunod na online ka, i-click ang {{ui:Save for offline}} at maghintay ng "Handa na offline". |
| Bumubukas ang drawing pero may nawawalang bahagi | Mga object na hindi pa kayang iguhit ng CadCraft, o mga layer na naka-off o frozen sa file. | Basahin ang "About this file" sa kaliwang panel. Tingnan ang {{ui:Layers}} panel. |
| Nababalot ang teksto sa dalawang linya | Gumuguhit ang CadCraft ng teksto sa Helvetica-style na font, na mas malapad kaysa sa ilang CAD font. | Paikliin ang teksto sa Properties, o tiisin ang dagdag na linya. |
| Lumalabas na ellipse ang circle, o tama ang basa ng mirrored na teksto | Iginuhit ang object sa nakatagilid na plane, o tiningnan mula sa ilalim, sa program na gumawa ng file. Ipinapakita ito ng CadCraft gaya ng pagtingin mula sa itaas, ayon sa plan view ng program na iyon; nananatiling mababasa ang teksto. | Walang aayusin. Para makita ito sa paraan ng ibang program, humingi ng drawing na flattened, o ng mga object na iginuhit mula sa itaas. |
| Ang block, circle o dimension ay nasa ibang lugar kaysa sa program na gumawa ng file | Kasong hindi tama ang pagbasa ng CadCraft sa drawing. | Sabihin sa amin sa Discord, kasama ang file kung maibabahagi mo ito. |

## Command line

| Mensahe o sintomas | Sanhi | Lunas |
|---|---|---|
| "Hindi kilalang command "…". I-type ang HELP para sa listahan." | Walang command o alias na ganoon ang pangalan. | I-type ang `HELP`, o tingnan ang [Command reference](topic:commands). Ang ilang pamilyar na command ay [hindi pa nagagawa](topic:not-built-yet). |
| "Walang ganoong command" sa tabi ng command line habang nagta-type | Ang tinype mo ay wala pang tugma. | Ipagpatuloy ang pag-type, o tingnan ang spelling. |
| "Kailangan ng punto o keyword ng opsyon." | Ang tinype mo ay hindi punto o opsyon. | Tingnan ang format: `x,y`, `@dx,dy`, `@d<a`, o isang numero lang. Tingnan ang [Coordinate and distance entry](topic:coordinate-entry). |
| "Kailangan ng positibong numero o dalawang punto." | Negatibo o hindi numero ang distansya. | I-type ang positibong numero, o i-click ang dalawang punto. |
| "Kailangan ng anggulo sa degrees o dalawang punto." | Hindi numero ang anggulo. | I-type ang degrees bilang plain na numero. |
| "Kailangan ng numero." | May inaasahang numero. | I-type ang mga digit lang. |
| "Di-wastong keyword ng opsyon." | Hindi tugma ang mga letra sa isang opsyon. | I-type ang mga capital na letrang nakalagay sa square brackets. |
| `*Cancel*` | Pinindot mo ang {{key:Esc}}, o ang {{key:Enter}} kung saan kailangan ang punto. | Simulan muli ang command. |
| Hindi umaabot sa command line ang pag-type | May cursor ang kahon sa panel o dialog. | Pindutin ang {{key:Enter}} o {{key:Esc}}, o i-click ang drawing. |
| Ginagamit ng command ang mga object na hindi mo pinili | Napili na sila bago mo sinimulan ang command. | Pindutin ang {{key:Esc}} bago ang command. |
| Napunta sa hindi inaasahang lugar ang isang linya | Ang `x,y` ay absolute. | Gamitin ang `@dx,dy` para sa relative na punto. |
| "Tapusin o kanselahin muna ang kasalukuyang command (Esc)." | Pinindot mo ang {{key:Mod+S}} habang may tumatakbong command. | Pindutin ang {{key:Esc}}, pagkatapos i-save. |
| "Hindi ma-save bilang DWG (AutoCAD 2000): … Subukan ang I-save bilang, pagkatapos DXF." | May bahagi ng drawing na hindi maisulat bilang DWG. | Pindutin ang {{key:Mod+Shift+S}}, piliin ang {{ui:DXF R12}}, at i-click ang {{ui:Save}}. |
| "Hindi na-save." | Isinara mo ang dialog na {{ui:Save a copy as}} gamit ang {{ui:Cancel}} o {{key:Esc}}. | Pindutin muli ang {{key:Mod+Shift+S}} at i-click ang {{ui:Save}}. |

## Pag-edit

| Mensahe o sintomas | Sanhi | Lunas |
|---|---|---|
| Hindi mapili ang isang object | Naka-lock, naka-off o naka-frozen ang layer nito; o nasa sheet ka at ito ang model sa loob ng viewport. | I-unlock ang layer, o pumunta sa {{ui:Model}} tab. |
| "Walang nakitang object doon." | Walang object sa ilalim ng click. | Mag-zoom in at i-click mismo ang linya. |
| "Walang tumatawid sa object na iyon doon." | Walang nahanap na object na tatawirin ng {{cmd:TRIM}} sa piraso na pinili mo. | Tiyaking talagang tumatawid dito ang linya ng pagputol. |
| "Hindi ma-trim ang object na iyon." | Gumagana ang trim sa linya, arc, circle at polyline. | I-explode muna ang mga block, o burahin at iguhit muli. |
| "Walang boundary sa direksyong iyon." | Walang nahanap na masasalubong ang {{cmd:EXTEND}}. | Pumili na mas malapit sa dulong dapat humaba. |
| "Hindi ma-offset ang object na iyon." | Gumagana ang offset sa linya, arc, circle at polyline. | I-explode muna ito, o gumuhit ng parallel na linya. |
| "Masyadong malayo para ma-offset." | Babaligtarin ng offset ang hugis sa loob-labas. | Gumamit ng mas maliit na distansya. |
| "Masyadong malaki ang radius." o "Masyadong malaki ang distansya." | Lalampas ang fillet o chamfer sa dulo ng linya. | Magtakda ng mas maliit na radius gamit ang `R`, o mas maliit na distansya gamit ang `D`. |
| "Ang unang o huling segment lang ng open polyline ang maaaring putulin pabalik." | Papasok sa gitna ng polyline ang sulok. | Pumili ng dalawang magkatabing segment ng polyline, o gamitin ang `P` para sa bawat sulok. |
| "Pumili ng pangalawa, iba't ibang linya." | Ang pangalawang pinili ay ang parehong linya, o hindi linya. | Pumili ng ibang linya. |
| "Polyline, block reference at dimension lang ang nae-explode." | Walang maiexplode sa napili. | Pumili ng polyline, block reference o dimension. |
| "Ito ang kasalukuyang layer. Gawing kasalukuyan muna ang ibang layer." | Sinubukan mong i-off ang kasalukuyang layer. | I-click ang pangalan ng ibang layer, pagkatapos i-off ang isang ito. |
| "May layer na tinatawag na …" | Dapat natatangi ang mga pangalan ng layer. | Pumili ng ibang pangalan. |
| "Walang maiu-undo." | Wala nang natitirang maiu-undo, o nagbukas o nagsimula ka ng drawing (nililinis nito ang history). | — |

## Dimension at block

| Mensahe o sintomas | Sanhi | Lunas |
|---|---|---|
| Napakaliit o napakalaki ng dimension text at mga arrow | Nasa drawing units ang mga laki; hindi bagay sa drawing ang overall scale. | Itakda ang {{cmd:DIMSCALE}} sa plot scale; tingnan ang [Set dimension sizes](topic:dimension-settings). |
| "Pumili ng punto sa loob ng anggulong gusto mong sukatin." | Nasa isang binti ang lokasyon ng angular dimension. | I-click sa loob ng anggulo. |
| "Magkakahanay ang mga linyang iyon." | Walang anggulo sa pagitan ng magkaparalelang linya. | Pumili ng dalawang linyang nagtatagpo. |
| "Pumili ng linear o aligned na dimension." | Kailangan ng {{cmd:DIMCONTINUE}} o {{cmd:DIMBASELINE}} ng panimulang dimension. | Pumili ng linear o aligned na dimension. |
| "Walang block pa ang drawing na ito: F ang naglalagay ng isa mula sa file, L mula sa library …" | Walang sariling block ang drawing. | I-type ang `F` o `L`, o gumawa ng block gamit ang {{cmd:BLOCK}}. |
| "Walang block na tinatawag na "…"." | Mali ang pangalan. | Nakalista sa mensahe ang mga block na mayroon. |
| "Hindi maaaring magsimula sa * o gumamit ng … ang pangalan ng block", kasunod ang listahan ng mga karakter | May karakter sa pangalan na hindi magagamit ng mga block. | Gumamit ng mga letra, digit, `-` at `_`. |
| "Hindi maaaring maglaman ng sarili ang block." | May reference sa block na ginagawa sa napili. | Alisin ang reference na iyon. |
| "Walang napiling object; walang nagawa." | Pinindot mo ang {{key:Enter}} bago pumili. | Patakbuhin muli ang {{cmd:BLOCK}} at piliin ang mga object. |

## Sheet at plotting

| Mensahe o sintomas | Sanhi | Lunas |
|---|---|---|
| "Ang viewport ay nasa layout. Buksan muna ang layout tab (o gumawa ng isa gamit ang LAYOUT)." | {{cmd:MVIEW}} sa {{ui:Model}} tab. | I-click muna ang sheet tab. |
| "Buksan muna ang layout na may viewport." | {{cmd:VPVIEW}} sa {{ui:Model}} tab. | I-click muna ang sheet tab. |
| Mukhang sampung beses na mali ang viewport scale | Mali ang drawing units. | Itakda ang {{ui:Units}} sa {{ui:Current settings}}. |
| "Wala pang ipa-plot." | Walang laman ang model. | Gumuhit ng isang bagay, o magbukas ng drawing. |
| "Pumili ng window na ipa-plot." | Napili ang {{ui:A window…}} at walang window na napili. | I-click ang {{ui:Pick}} at pumili ng dalawang sulok. |
| "… mas malaki sa papel: pinuputol ang mga gilid." | Hindi kasya ang lugar sa scale na iyon. | Pumili ng mas maliit na scale, mas malaking papel, o {{ui:Fit to paper}}. |
| "Hinarang ng browser ang bagong tab, kaya na-download na lang ang PDF." | Naka-block ang pop-up para sa site. | Buksan ang na-download na PDF, o payagan ang pop-up para sa site. |
| Nagpi-print na "?" ang mga karakter | Walang letra para sa mga ito ang font ng PDF (bihirang ideograph, Hindi at iba pang script na nangangailangan ng complex shaping, …), o hindi nakuha ang mas malaking font (offline). Nagpi-print bilang sarili nila ang European script, Cyrillic, Greek, Hebrew, Arabic, Persian, Urdu, Thai, Chinese, Japanese at Korean. | Para sa Arabic-script, Thai, Chinese, Japanese o Korean, i-plot muli na may koneksyon. Hindi pa nagagawa ang ibang script. |
| Lumalabas sa PDF ang construction lines | Nagpi-plot ang layer nila. | I-click ang printer button ng layer. |
| Pareho ang kapal ng lahat ng linya | Ang lineweight nila ay {{ui:Default}}, kaya nagpi-print sila sa pen width ng dialog. | Magbigay ng {{ui:Lineweight}} sa mga layer o object sa right panel, o pumili ng {{ui:Line weight}} sa dialog. Para makita ang lineweight sa screen, pindutin ang {{ui:LWT}} sa status bar. |

## Mga key at ang screen

| Sintomas | Sanhi | Lunas |
|---|---|---|
| Binabago ng F3, F7 o F8 ang volume o binubuksan ang Mission Control | Mga function key ng Mac. | Hawakan ang **fn**, o gamitin ang mga button sa status bar. Tingnan ang [Keys, mice and trackpads](common:keys). |
| Nagtatanong ang F7 tungkol sa caret browsing | Sariling gamit ng Firefox ang F7. | Piliin ang No; gamitin ang {{ui:Grid}} button. |
| Nagbukas ng browser window ang {{key:Mod+N}} | Inaangkin ng browser ang key na iyon. | I-click ang {{ui:New}} o i-type ang `NEW`. |
| Pinili ng {{key:Mod+A}} ang teksto ng command line | May cursor ang command line. | I-click muna ang isang object, o i-type ang `ALL` sa prompt na `Select objects`. |
| Hindi nagbubura ang {{key:Delete}} | May cursor ang command line. | I-type ang `E` at pindutin ang {{key:Enter}}. |
| Walang nangyayari sa right-click sa Mac trackpad | Maaaring bilangin ang Control-click bilang karaniwang click. | I-click gamit ang dalawang daliri. |
| Walang nagpa-pan sa trackpad | Walang middle button, at hindi nagpa-pan ang Space. | I-swipe gamit ang dalawang daliri: nagpa-pan ang 2D view (nagzo-zoom ang pinch at ang mouse wheel). O i-drag habang hawak ang right-click. |
| Lumabas sa full screen ang unang {{key:Esc}} | Ginagamit ng browser ang Esc para lumabas sa full screen. | Pindutin muli ang {{key:Esc}} para kanselahin ang command. |
| Walang nangyayari sa {{key:F1}} sa Mac | Brightness key ang F1. | Hawakan ang **fn**, o i-click ang {{ui:Help}}. |
| Napupunta sa search box ng help ang pag-type | May cursor ang help panel. | I-click ang drawing. |
| Naging blangko ang drawing | Napakalayo ng zoom mo. | I-click ang {{ui:Extents}}, o i-double-click ang wheel. |
| "Leave site?" kapag isinasara ang tab | May hindi pa na-save na pagbabago. | Manatili, i-save gamit ang {{key:Mod+S}}, pagkatapos isara. |
