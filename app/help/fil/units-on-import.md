---
title: Units sa import: may sinasabi ang file tungkol sa units nito, o tinatanong ka muna
summary: Kapag ang file na dinadala mo sa drawing ay nagsasabi ng units nito, kinokonberte ito ng CadCraft at sinasabi ito. Kapag hindi, nagtatanong ang CadCraft bago maglagay ng anuman, at inaalala ang sagot mo para sa file na iyon.
keywords: units, import, insert, xref, attach, XATTACH, INSERT, OBJ, DWG, DXF, point cloud, library item, milimetro, metro, pulgada, talampakan, scale, maling laki, masyadong malaki, masyadong maliit, 1000 beses, tanong, naalala, INSUNITS
from: 558f1293
---

## Ang gagawin mo

Magdala ng file sa drawing, at tiyaking papasok ito sa tamang laki.

## Mga hakbang

1. Dalhin ang file gaya ng dati: `INSERT` › File, `XATTACH`, `POINTCLOUDATTACH`, o {{ui:Mga file}} sa Library panel.
2. Kung sinasabi ng file ang units nito, walang itatanong. Sinasabi ng command line kung anong units ang sinasabi ng file, at ang scale na ginamit kapag iba ang mga ito sa drawing.
3. Kung hindi, may dialog na magtatanong ng **Units of** ng file. Piliin kung ano ang isang unit sa file, at i-click ang {{ui:Gamitin ang mga unit na ito}}. Walang inilalagay bago ka sumagot.
4. {{ui:Kanselahin}} (o {{key:Esc}}) ay walang dinadalang anuman.

## Aling mga file ang nagsasabi ng units nila

- **DWG at DXF**: ang insertion units ng drawing (`$INSUNITS`). Tinatanong ang file na walang ito.
- **Point clouds**: LAS at LAZ na may coordinate system, E57, PTX at PLY ay nagsasabi ng kanilang units. Tinatanong ang iba.
- **OBJ**: hindi kailanman nagsasabi ng units. Tinatanong ka.
- **glTF at GLB**: metro, ayon sa sariling tuntunin ng format.
- **Larawan**: walang sariling laki. Nagtatanong ang `IMAGEATTACH` ng lapad, at nag-aalok ng lapad na ibinigay mo sa file na iyon dati.
- **Scan**: ang scan na nagsasabi ng density nito (dots per inch) ay papasok sa tunay nitong laki sa units ng drawing; nagtatanong pa rin ang `SCANATTACH` ng lapad.
- **Point clouds add-on**: nagtatanong kapag gumawa ka ng cloud na ang file ay walang sinasabing unit, at nilalagyan ng label ang mga numero ng cloud ng unit na dala nito.

## Mabuting malaman

- Ang pagbubukas ng DWG o DXF bilang sariling drawing ay walang itinatanong: sinasabi ng command line kung anong units ang sinasabi ng file, o na wala itong sinasabi. Itinatakda ng Properties ang units ng drawing.
- Kapag wala ring units ang drawing na ito, hindi makokonberte ang file: inilalagay ito ayon sa numero, at sinasabi ito ng command line.
- Naaalala ang sagot para sa file na iyon sa computer na ito, sa bawat CadCraft app. Sa susunod na dadalhin ito, hindi ka na tatanungin, at sinasabi ng command line na ginamit ang naalalang units.
- Para tanungin ulit: ang command palette ({{key:Mod+K}}) › **Itanong muli ang units ng mga na-import na file**.
