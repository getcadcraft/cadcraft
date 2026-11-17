---
title: Magdagdag ng teksto at label
summary: Maglagay ng label ng silid gamit ang single-line text, sumulat ng nakabalot na note gamit ang paragraph text na tinype sa mismong lugar, at i-edit ang teksto pagkatapos.
keywords: teksto, dtext, mtext, mleader, multileader, leader, revcloud, revision cloud, cloud, hanapin, palitan, hanapin at palitan, paragraph, wrap, line spacing, label, note, annotation, taas, justify, textmask, background mask, mask, wipeout, rotation, i-edit ang teksto, ddedit, textedit, font
from: 4b76be99
---

## Ano ang gagawin mo

Dalawang label ng silid, nakasentro sa kani-kanilang silid, isang note na bumabalot sa lapad nito, at pagkatapos ay pagwawasto sa isa sa mga label.

## Taas ng teksto at scale ng drawing

Ang taas ng teksto ay nasa drawing units. Sa drawing sa millimeters na ipa-plot sa 1:50, ang teksto na 2.5 mm ang taas sa papel ay dapat 2.5 × 50 = 125 units ang taas sa model. Sa sheet tab ay gumuguhit ka gamit ang paper units, kaya ang 2.5 doon ay 2.5 mm sa papel.

## Maglagay ng nakasentrong label

1. I-type ang `DT` at pindutin ang {{key:Enter}} (o i-click ang {{ui:Text}} sa toolbar). Ang prompt ay nagsasabing `Specify start point of text [Justify]:`.
2. I-type ang `J` at pindutin ang {{key:Enter}}.
3. Sa `Enter an option [Left/Center/Right/Middle/TL/MC] <L>:`, i-type ang `MC` at pindutin ang {{key:Enter}}.
4. Sa `Specify insertion point of text`, i-click ang gitna ng isang silid.
5. Sa `Specify height`, i-type ang `250` at pindutin ang {{key:Enter}}.
6. Sa `Specify rotation angle of text <0>`, pindutin ang {{key:Enter}}.
7. Sa `Enter text`, i-type ang `KITCHEN` at pindutin ang {{key:Enter}}.

Lumalabas ang label, nakasentro sa puntong na-click mo.

8. Pindutin ang {{key:Enter}} sa walang laman na prompt na `Enter text` para tapusin ang command.

## Sumulat ng note na bumabalot

Ang paragraph text ({{cmd:MTEXT}}) ay bumabalot sa isang lapad at direktang tinitype sa drawing.

1. I-type ang `T` at pindutin ang {{key:Enter}}, o i-click ang {{ui:Paragraph}} sa toolbar.
2. Sa `Specify first corner`, i-click kung saan dapat ang kaliwang-itaas na sulok ng note.
3. Para baguhin muna ang taas, i-type ang `H`, pindutin ang {{key:Enter}}, i-type ang `250` at pindutin ang {{key:Enter}}.
4. Sa `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`, i-click sa kanan ng unang sulok. Ang lapad sa pagitan ng dalawang sulok ang lapad na pagbabalutan ng teksto; hindi nito nililimitahan kung gaano kababa ang i-click mo.
5. May kahon na bumukas sa ibabaw ng drawing, at nasa loob nito ang cursor. I-type ang `ALL DIMENSIONS ARE IN MILLIMETERS UNLESS NOTED`. Bumabalot ang mga salita sa lapad habang nagta-type ka.
6. Pindutin ang {{key:Enter}} para magsimula ng bagong paragraph, at i-type ang `CHECK ON SITE`.
7. Pindutin ang {{key:Mod+Enter}}, i-click ang {{ui:OK}}, o i-click kahit saan sa labas ng kahon. Iisang object ang note.

Ang bar sa itaas ng kahon ay nagbabago ng {{ui:Height}}, {{ui:Line spacing}} (1 ang normal, ang 1.5 ay kalahati pang dagdag), {{ui:Width}} (0 = walang pagbabalot) at {{ui:Justify}} habang nagta-type ka. Isinasara ng {{key:Esc}} o {{ui:Cancel}} ang kahon nang hindi nagdaragdag ng kahit ano.

Ang mga opsyon sa ikalawang sulok: `H` taas, `J` justification (`TL` kaliwa-itaas … `BR` kanan-ibaba: ang sulok o gitna ng kahon na nananatili), `L` line spacing, `R` rotation, `W` isang tinype na lapad sa halip na ikalawang sulok.

:::note
Habang bukas ang kahon, ang {{key:Space}} ay nagta-type ng space at ang {{key:Enter}} ay nagsisimula ng bagong paragraph. Pinapanatili ng na-save na DWG ang paragraph text bilang MTEXT; ang DXF R12 ay walang paragraph text, kaya ang bawat linya ay sine-save bilang sarili nitong teksto.
:::

### Ilang hiwalay na linya sa halip

{{cmd:TEXT}} (`DT`) ay humihingi ng isang linya sa bawat pagkakataon: ang bawat {{key:Enter}} ay nagsisimula ng susunod na linya, 1.667 beses ang taas ng teksto pababa, at ang bawat linya ay sariling object. Pindutin ang {{key:Enter}} sa walang laman na linya para tapusin.

## Mga opsyon sa justification

| Opsyon | Ang puntong i-click mo ay |
|---|---|
| Kaliwa (default) | Ang kaliwang dulo ng baseline |
| Center | Ang gitna ng baseline |
| Kanan | Ang kanang dulo ng baseline |
| Middle, MC | Ang gitna ng teksto, pahalang at patayo |
| TL | Ang kaliwang-itaas na sulok |

## I-edit ang teksto

1. I-double-click ang isang text object. Bumubukas ito sa parehong kahon ng bagong paragraph text, nasa dulo ang cursor.
2. Baguhin ang mga salita.
3. Pindutin ang {{key:Mod+Enter}} o i-click sa labas ng kahon. Nagbabago ang teksto sa drawing; iniiwan ito ng {{key:Esc}} gaya ng dati.

Ang {{cmd:TEXTEDIT}} (`ED`) ay gumagawa ng pareho: pumili ng isang teksto pagkatapos ng isa, at pindutin ang {{key:Enter}} kapag tapos na.

Para baguhin ang napiling teksto sa right panel: {{ui:Text}}, {{ui:Height}}, {{ui:Wrap width}} (0 = walang pagbabalot), {{ui:Line spacing}}, {{ui:Rotation}}, ang X at Y na posisyon, at {{ui:Justify}}. Nag-aalok din ang listahan ng {{ui:Justify}} ng Bottom left, na minsang ginagamit ng teksto mula sa ibang program.

## Pag-format sa loob ng paragraph text mula sa ibang program

Maaaring magdala ng mga code ang paragraph text sa DWG o DXF: kulay bawat salita, bold at italic, underline, overline at strikethrough, naka-stack na fraction gaya ng 1/2, at ibang taas para sa isang salita. Pinapanatili ng CadCraft ang mga code na iyon, iginuguhit ang mga ito (sa screen at sa naka-plot na PDF), at sine-save pabalik nang hindi nagbabago.

Kapag nag-e-edit ng ganoong teksto (double-click, {{cmd:TEXTEDIT}}, ang Text field ng right panel, o {{cmd:FIND}} na may Replace), ang na-e-edit mo ay ang plain na mga salita. Ang salitang tinype mo ay napupunta sa run sa tabi nito at kinukuha ang kulay at style nito; nananatili sa kani-kanilang lugar ang ibang code. Kapag tinype mong muli ang mga numero ng naka-stack na fraction, nagiging plain text ang fraction na iyon. Ang pagtakda ng buong teksto mula sa Text field ay nagpapanatili lang ng mga code kung saan natutukoy kung aling mga salita ang nanatili.

Pinapanatili at sine-save ang mga pangalan ng font (`\F`), pero lahat ay iginuguhit sa iisang Helvetica-style na font. Wala pang toolbar para sa pag-type ng mga code.

## Ituro ang isang bagay: multileaders

{{ui:Leader}} sa {{ui:Annotate}} group ({{cmd:MLEADER}}, `MLD`) ay gumuguhit ng arrow, leader line, maikling landing at isang note, bilang iisang object.

1. I-click ang {{ui:Leader}}. Sa `Specify leader arrowhead location`, i-click kung ano ang tungkol sa note.
2. Sa `Specify leader landing location`, i-click kung saan napupunta ang note. Lumiliko ang landing patungo sa gilid na na-click mo.
3. I-type ang note sa kahong bumukas, at pindutin ang {{key:Mod+Enter}}.

Ang `A` at `L` sa unang tanong ang nagtatakda ng laki ng arrowhead at haba ng landing; ang taas ng teksto ay galing sa {{ui:Text height}} para sa mga bagong dimension, na pinarami ng {{ui:Overall scale}}. I-double-click ang multileader para baguhin ang mga salita nito. Ang mga grip ang gumagalaw sa arrowhead at sa landing; sumusunod ang note sa landing. Sa {{ui:Properties}}: {{ui:Text}}, {{ui:Height}}, {{ui:Wrap width}}, {{ui:Arrowhead size}} at {{ui:Landing distance}}.

:::note
Sine-save ang multileaders bilang tunay na multileaders sa DWG. Walang multileader ang DXF sa R12 o 2000, kaya doon ay sine-save ang mga ito bilang mga linya, arrowhead at teksto na iginuguhit nila.
:::

## Markahan ang mga pagbabago gamit ang revision cloud

{{ui:Annotate}} › {{ui:More}} › {{ui:Revision cloud}} ({{cmd:REVCLOUD}}, `RC`) ay gumuguhit ng ulap ng mga arc sa paligid ng nagbago. Ipinapakita ng history ang haba ng arc at ang uri na gagamitin nito.

- **Rectangular** (ang unang pagkakataon): i-click ang dalawang sulok.
- `P` **Polygonal**: i-click ang mga sulok; ang {{key:Enter}} ang nagsasara ng ulap.
- `F` **Freehand**: i-click kung saan ito magsisimula at igalaw ang pointer sa paligid ng lugar nang hindi nagki-click; may idinadagdag na arc sa bawat haba ng arc. I-click o pindutin ang {{key:Enter}} para isara ito.
- `O` **Object**: pumili ng closed polyline, circle o ellipse (o ng linya, arc o open polyline); ito ang magiging ulap. Ang `Reverse direction?` na `Y` ay ginagawang papasok ang mga arc.
- `A` **Arc length**: ang haba ng bawat arc. Pumili ng isa na bagay sa plot scale.

Ang ulap ay isang closed polyline ng mga arc, kaya sine-save ito sa lahat ng format.

## Hanapin at palitan ang mga salita

{{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}} ({{cmd:FIND}}) ay naghahanap sa teksto, sa mga halaga ng block attribute, at sa dimension text sa bukas na tab (o sa mga napiling object lang).

1. I-type ang mga salita sa {{ui:Find}}. Ipinapakita ng listahan ang bawat lugar kung saan sila naroon, at ang bilang.
2. Piliin ang {{ui:Match case}}, {{ui:Whole words only}} o {{ui:Use wildcards (* and ?)}} kung kailangan mo ang mga ito, at alisin ang tsek sa mga hindi dapat hanapin.
3. I-click ang {{ui:Select found}} para piliin ang mga object na iyon, o i-type ang mga bagong salita sa {{ui:Replace with}} (ipinapakita ng listahan kung ano ang magiging bawat isa) at i-click ang {{ui:Replace all}}. Binabawi ng isang {{key:Mod+Z}} ang bawat palitan.

Ang sinusukat na halaga ng dimension ay hindi teksto, kaya hindi ito napapalitan kailanman: sa `<> TYP.`, ang `TYP.` lang ang maaaring palitan.

## Itago ang mga linyang nasa likod ng label

1. Piliin ang mga teksto, i-type ang {{cmd:TEXTMASK}}, at pindutin ang {{key:Enter}}.
2. Ipinipinta ng `B` ang background ng drawing sa likod nila; humihingi ng color number ang `C`. Inaalis ng `O` ang mask.
3. `Border offset factor`: ang {{key:Enter}} ay nananatili sa 1.5, kalahati ng taas ng teksto sa paligid ng teksto.

Tinatakpan ng mask ang mga linyang nasa ilalim ng teksto, sa screen at kapag nag-plot ka. Pinapanatili ito ng DWG 2004 o mas bago at ng DXF 2000; hindi ito kaya ng DWG 2000 format at ng DXF R12, at sinasabi ito ng save.

## Font

Lahat ng teksto ay iginuguhit sa Helvetica-style na font, sa screen at sa mga PDF. Pinapanatili ng teksto mula sa mga binuksang drawing ang mga salita, taas at posisyon nito, pero hindi ang orihinal nitong font (ang pangalan ng font sa loob ng paragraph text ay nananatili sa file, tingnan sa itaas).

Sa mga naka-plot na PDF, ang teksto sa anumang European script, Cyrillic o Greek ay nagpi-print bilang sarili nito (dala ng PDF ang mga letrang kailangan nito, at maaari mo pa ring piliin at hanapin ang teksto). Ang teksto sa Chinese, Japanese at Korean ay nagpi-print din bilang sarili nito (kinukuha ng plot ang mas malaking font sa unang pagkakataong kailangan ito). Ang teksto sa Arabic, Persian, Urdu at Hebrew ay nagpi-print din bilang sarili nito (tingnan ang susunod na seksyon). Ang mga karakter na walang letra sa anumang font ay nagpi-print bilang "?", at sinasabi ng history kung ilan sila.

## Right-to-left na teksto: Arabic, Persian, Urdu, Hebrew

I-type ang teksto gaya ng kahit saan: ginuguhit ng {{cmd:TEXT}} at {{cmd:MTEXT}} ang bawat linya sa reading order. Ang linyang nagsisimula sa Arabic o Hebrew na letra ay binabasa mula kanan pakaliwa; ang mga numero at Latin na salita sa loob nito ay pinapanatili ang sarili nilang kaliwa-pakanang ayos, at nagdudugtong ang mga letra ng Arabic script. Ang linyang nagsisimula sa Latin na letra ay nananatiling kaliwa-pakanan, na may mga right-to-left na salita sa tamang lugar sa loob nito. Bawat paragraph ng multi-line na teksto ay may sariling direksyon, at pinapanatili ito ng nakabalot na paragraph sa bawat linya.

Nakaimbak ang teksto gaya ng pagkakatype mo, kaya nagpapalitan ng ganitong teksto ang mga DWG at DXF file sa ibang program nang hindi nagbabago. Ang insertion point at ang justification ({{ui:Left}}, {{ui:Center}}, {{ui:Right}}) ay pareho ang ibig sabihin ng gilid gaya ng sa anumang teksto: ang right-to-left na note na dapat nakabitin mula sa kanang dulo nito ay nangangailangan ng {{ui:Right}}.

Sa screen, galing sa mga font ng iyong system ang mga letra. Sa naka-plot na PDF, gumagamit ang Hebrew ng parehong naka-embed na font gaya ng Latin na teksto; ang teksto sa Arabic script ay nagpapakuha sa plot ng isa pang font (mas mababa sa 1 MB, minsan lang), at pagkatapos ay ang buong PDF ay nagpi-print sa font na iyon. Walang sariling hugis ang font na iyon para sa tatlong karakter ng Urdu (heh goal, yeh barree at ang Urdu full stop): nagpi-print sila sa hugis ng pinakamalapit na letrang Arabic. Ang drawing na may teksto sa Arabic script at sa Chinese, Japanese o Korean ay nagpi-print ng isa sa dalawa bilang "?", dahil isang font lang ang dala ng isang plot. Ang teksto sa loob ng na-load na SHX font ay inaayos at dinudugtong kapag hawak ng font ang mga letra sa tamang Unicode na lugar; para sa mga lumang font na may hugis na ang mga letra, gamitin ang {{ui:Reverse}} sa {{cmd:SHXFONTS}} gaya ng dati.

## Mga karaniwang pagkakamali

- **Masyadong maliit para makita ang teksto.** Ang taas ay nasa drawing units. Sa malaking drawing, gumamit ng malaking taas (tingnan sa itaas), o mag-zoom in.
- **Natapos ang command pagkatapos ng isang linya.** Pinindot mo ang {{key:Enter}} sa walang laman na linya sa {{cmd:TEXT}}. Simulan muli, o gamitin ang paragraph text (`T`), kung saan ang {{key:Enter}} ay nagsisimula ng bagong paragraph.
- **Nagbukas ng kahon ang `T` sa halip na humingi ng linya.** Tulad sa AutoCAD, ang `T` ay paragraph text ({{cmd:MTEXT}}); ang single-line na teksto ay `DT`.
- **Iba ang pagbabalot ng teksto sa AutoCAD.** Bumabalot ang CadCraft gamit ang lapad ng Helvetica; maaaring magkasya ng mas marami o mas kaunting salita sa isang linya ang ibang font.
- **Teksto sa mirrored na kopya.** Inilalagay ito nang naka-mirror, pero nananatiling mababasa mula kaliwa pakanan.
