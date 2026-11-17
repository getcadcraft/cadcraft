---
title: Mga scanned drawing at ang trace
summary: Mag-import ng scanned na sheet, i-scale at i-square ito, linisin, burahin ang ilang bahagi, mag-snap sa mga linya nito at i-trace ito bilang mga linya at arko.
keywords: scan, scanned drawing, raster, tiff, jpeg, png, scale, align, deskew, despeckle, threshold, itim at puti, crop, erase, trace, vectorize, snap, arko, hatching, mga drawing sa papel, mga lumang drawing, scanattach, scantrace
from: 36227e5b
---

## Mula sa papel na sheet tungo sa mga drawing object

Larawan ang scanned drawing. Pinananatili ng CadCraft ang larawang ibinigay mo at hindi ito kailanman binabago: ang bawat hakbang ng paglilinis ay gumagawa ng bagong larawan, na may isang undo step bawat isa, at inililista ng {{cmd:SCANINFO}} ang orihinal na file at ang mga hakbang na ginawa mula noon. Walang ipinapadala kahit saan at walang hinuhulaan gamit ang trained model: ang paglilinis at ang trace ay karaniwang image processing, at tumatakbo sila sa iyong computer.

1. **Ipasok ito.** Ang {{cmd:SCANATTACH}} ay bumabasa ng PNG, JPEG, TIFF (isang page, o lahat ng page ng multi-page na file) o PDF page na larawan. Hinihingi nito ang page, ang kaliwang ibabang sulok at ang lapad. Para sa PDF page, hinihingi rin nito kung ilang pixel kada pulgada ang gagamitin sa pag-drawing ng page.
2. **I-scale ito.** {{cmd:SCANSCALE}}: pumili ng dalawang punto sa scan, saka i-type ang tunay na distansya sa pagitan ng mga ito. Ang sheet ay niniscale sa paligid ng unang punto.
3. **I-align ito.** {{cmd:SCANALIGN}}: pumili ng dalawang punto sa scan at ang dalawang lugar kung saan sila nabibilang; gumagalaw at umiikot ang sheet para magkasya, at nagsi-scale din maliban kung sumagot ka ng No.
4. **I-square ito.** Sinusukat ng {{cmd:SCANDESKEW}} ang anggulo ng mahahabang linya ng sheet at ipinapakita ito, kasama kung gaano ito katiyak. Tanggapin ito, o i-type ang sarili mo, at iikot ang sheet. Ang sheet na kakaunti ang mahabang linya ay may babala: suriin ang anggulo bago mo ito tanggapin.
5. **Linisin ito.** Ginagawang itim at puti ng {{cmd:SCANCLEAN}} ang sheet (ang Auto ay unang pinapantay ang papel; ang Adaptive ay mas malapit na sumusunod sa mga pagbabago ng papel; ang Level ay iisang numero para sa buong sheet) at inaalis ang mga tuldok hanggang sa laki na itinakda mo.
6. **I-crop at burahin.** Ang {{cmd:SCANCROP}} ay nagpapanatili ng isang window. Ang {{cmd:SCANERASE}} ay nagbubura ng rectangle, polygon o lasso (pindutin at i-drag): mga stamp, tala, bakas ng kape.

Ang nalinis na larawan ang laman ng na-save na DWG (isang IMAGE at ang IMAGEDEF nito, kasama ang file ng larawan sa tabi ng drawing, gaya ng anumang larawan).

## Mag-snap sa mga linya ng scan

Kapag naka-on ang {{cmd:RASTERSNAP}} (ang default), hinahanap din ng object snap ang mga linya ng black-and-white na scan: ang mga dulo ng linya, ang mga gitna nila, mga sulok at tawiran, na ipinapakita gamit ang karaniwang snap mark. Ang bahagi ng sheet na nasa ilalim ng pointer ay tinatrace habang gumagalaw ka; mag-zoom nang sapat para ang isang pixel ay ilang screen pixel. Ang linyang mas mahaba kaysa sa bahaging tinatrace ay susundan hanggang sa mga dulo nito.

## Ang trace

Ginagawang mga linya at arko ng {{cmd:SCANTRACE}} ang mga linya ng sheet sa bagong layer (SCAN-TRACE), bilang isang undo step, habang nananatili ang scan sa ilalim ng mga ito. Itinatakda mo ang:

- **Tolerance:** gaano kalayo maaaring nasa mga linya ng scan ang na-trace na linya o arko, sa mga drawing unit (ibinibigay din ng ulat ang pixels). Ang mahigpit na tolerance ay sumusunod sa bawat kurba; ang maluwag ay gumagawa ng mas kaunti at mas tuwid na piraso.
- **Window:** isang sulok ng sheet, o ang buong sheet.
- **Arcs:** kapag naka-off, mga linya lang ang gagawin.
- **Leftovers:** ang iniwan ng trace ay iginuguhit bilang kahon sa layer na maaari mong i-off, o hindi iguguhit.

Hinahanap ng trace ang sentro ng bawat stroke, sinusundan ito, kinakabitan ng tuwid na linya at circular arc, dinudugtong ang mga takbo na naputol kung saan may tumawid na ibang linya, ginagawang eksaktong pahalang at patayo ang halos pahalang at halos patayong linya, at isinasara ang mga sulok. **Nananatiling raster ang text at hatching:** ang mga piraso na kasing laki ng letra ay inihihiwalay, at ang mga bungkos ng maiikling magkakahanay na linya ay itinuturing na hatching at inihihiwalay.

Kapag tapos na ito, sinasabi nito kung ilang linya at arko ang nagawa nito, ang tolerance, at kung ilang piraso ang iniwan nitong raster. **Iyon ang ibinigay ng mga pixel, sa tolerance na iyon, at hindi ito pag-angkin na tama ang resulta.** Ihambing ito sa sheet: maaaring makaligtaan ng trace ang malabong linya, pagdugtungin ang dalawang linyang halos magkadikit, o gumuhit ng linya kung saan mantsa lang ang naroon. Linisin muna ang scan (naayos ang square, black and white, wala na ang mga tuldok) at mas maganda ang resulta.

## Ang hindi nito nababasa

Ang mga TIFF file na nakaimbak sa tiles, BigTIFF, TIFF na may JPEG o deflate compression, Group 3 fax coding at mga kulay na nakahiwalay sa magkakahiwalay na plane ay tinatanggihan na may mensahe; i-save ulit ang mga ito bilang strips na may LZW, PackBits, Group 4 o walang compression. Tinatanggihan din ang interlaced PNG na file. Ang mga file na lampas sa 128 MB o 100 milyong pixel ay tinatanggihan, at ang trace window ay maaaring maglaman ng hanggang 64 milyong pixel.
