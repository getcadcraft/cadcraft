---
title: Mag-model sa 3D
summary: Tingnan ang drawing sa 3D tab at gumawa ng simpleng solids mula rito: i-extrude (may taper o kasama ang path), revolve, itulak at hilain ang mga face, gumawa ng box, silindro at wedge, pagsamahin, ibawas at i-intersect ang mga ito, saka ilipat, kopyahin, paikutin at burahin, at maglagay ng flat na 2D view ng mga ito sa sheet.
keywords: 3d, three d, solid, solids, 3dsolid, region, body, acis, sat, sab, solids mula sa ibang program, buksan ang 3d drawing, extrude, ext, revolve, rev, sweep, taper, path, presspull, press pull, push pull, box, cylinder, cyl, wedge, 3dorbit, orbit, view, vscurrent, visual style, shaded, hidden line, wireframe, x-ray, xray, iso, perspective, parallel, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, view cube, union, uni, subtract, su, intersect, in, boolean, combine, join solids, viewbase, flatshot, flat view, 2d view, drawing view, front view, top view, side view, hidden lines
from: 13060e71
---

## Ano ang gagawin mo

Isang 1000 × 600 na footprint ng kuwarto na i-e-extrude bilang block na 400 ang taas, isang face na itutulak pataas, at isang silindro sa tabi nito — saka i-save ang model kasama ng drawing at i-export para sa 3D viewer o printer.

Ang {{ui:3D}} tab ay nasa tabi ng {{ui:Model}} sa ilalim ng drawing. Ipinapakita nito ang model-space na drawing na nakahiga sa lupa, sa kulay ng layer nito (ang mga layer na naka-off o naka-freeze ay nakatago), at ang mga solid na ginawa mo. Sa unang pagbukas nito, nilo-load ang 3D view; pagkatapos nito, agad itong lumilipat.

## I-extrude ang isang hugis

1. Sa {{ui:Model}} tab, i-type ang `REC` at pindutin ang {{key:Enter}}. I-type ang `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. I-click ang {{ui:3D}} tab. Ipinapakita ng toolbar ang {{ui:3D}} group kapalit ng mga drawing group.
3. I-click ang {{ui:Extrude}} (o i-type ang {{cmd:EXTRUDE}}, `EXT`). I-click sa loob ng rectangle, saka pindutin ang {{key:Enter}}.
4. I-type ang `400` at pindutin ang {{key:Enter}}. Sinasabi ng history na "Na-extrude ang 1 solid, 400 ang taas" kasama ang volume nito.

Ang mga closed polyline (kasama ang arko), rectangle, polygon, bilog at ellipse ay nagagawang i-extrude; ang mga linya at open polyline ay hindi, at sinasabi ng history kung bakit. Maaari mo ring piliin muna ang mga hugis sa {{ui:Model}} tab at i-type doon ang `EXTRUDE`. Sa halip na i-type ang taas, maaari mo itong i-click: sumusunod ang outline sa cursor pataas at pababa. Ang negatibong taas ay pababa. I-type ang `D` sa height prompt para burahin ang 2D na mga hugis pagkatapos i-extrude (ang `D` muli ay itinatago ang mga ito).

Sa height prompt, ang `T` (anggulo ng taper) ay humihingi ng anggulo sa degrees: ang mga gilid ay nakahilig papasok ng ganoong anggulo, kaya mas maliit ang itaas (ang negatibong anggulo ay nagpapalaki nito); tinatanggihan ang anggulong masyadong matarik para sa hugis. Ang `P` (Path) ay nagsa-sweep ng mga hugis sa kahabaan ng path sa halip (tingnan sa ibaba).

## Revolve at sweep

- {{cmd:REVOLVE}} (`REV`, o {{ui:More}} › {{ui:Revolve sa palibot ng axis}}): pumili ng closed na mga hugis, pindutin ang {{key:Enter}}, saka i-click ang dalawang dulo ng axis (o i-type ang `X` o `Y` para sa axis ng drawing sa 0,0), saka i-type ang anggulo o pindutin ang {{key:Enter}} para sa buong ikot. Umiikot ang hugis sa palibot ng axis at tumatayo mula sa lupa: gumuhit ng kalahati ng outline ng plorera sa tabi ng isang linya, saka i-revolve ito sa palibot ng linya. Maaaring humipo ang hugis sa axis pero hindi ito dapat tumawid dito. Ang buong ikot ay may 48 na hakbang.
- {{cmd:SWEEP}} (o {{ui:More}} › {{ui:Sweep sa kahabaan ng path}}, o `P` sa height prompt ng EXTRUDE): pumili ng closed na mga hugis (ang profile), pindutin ang {{key:Enter}}, saka i-click ang path: linya, polyline, arko, bilog o ellipse. Tumatayo ang profile sa kabila ng path, nasa path ang gitna nito, at tumatakbo ito kasama nito; naka-miter ang mga sulok, at ang closed na path ay gumagawa ng singsing. Ang maliit na rectangle na i-sweep sa outline ng kuwarto ay nagiging skirting; ang bilog sa kahabaan ng polyline ay nagiging tubo.

## Itulak at hilain ang isang face

1. I-click ang {{ui:Press/pull}} (o i-type ang {{cmd:PRESSPULL}}).
2. I-click ang itaas na face ng block.
3. I-type ang `100` at pindutin ang {{key:Enter}}, o igalaw ang cursor at i-click. Magiging 500 ang taas ng block.

## Box, silindro at wedge

- {{cmd:BOX}}: i-click o i-type ang dalawang sulok, saka ang taas.
- {{cmd:CYLINDER}} (`CYL`): ang center, ang radius, saka ang taas. Ang mga silindro at na-extrude na bilog ay may 48 na gilid, naka-shade nang makinis.
- {{cmd:WEDGE}} (`WE`): dalawang sulok at taas. Buong taas ito sa unang sulok at bumababa hanggang wala sa kabilang sulok.

Sa 3D tab, ang click ay tumatama sa face o gilid sa ilalim ng cursor, kung hindi ay sa lupa, kaya maaaring tumayo ang isang box sa ibabaw ng ibang solid.

## Ilipat, kopyahin, paikutin at burahin ang mga solid

Sa 3D tab, ang click ay pumipili ng solid; i-drag mula kaliwa pakanan para sa window, at mula kanan pakaliwa para sa crossing. Pagkatapos:

- {{cmd:MOVE}}: i-click ang base point at kung saan ito pupunta, o i-type ang `<100,0,0>` (o `@100,0`) para sa distansya sa X, Y at Z.
- {{cmd:COPY}}: pareho, pero naiiwan ang orihinal.
- {{cmd:ROTATE}}: i-type ang anggulo (iikot ito sa gitna ng pinili, sa palibot ng Z), o i-click ang center, ang start point, at ang anggulo.
- {{cmd:ERASE}} o {{key:Delete}}.

## Pagsamahin, ibawas at i-intersect ang mga solid

Buksan ang {{ui:More}} sa 3D toolbar, o i-type ang command:

- {{cmd:UNION}} (`UNI`): pumili ng mga solid at pindutin ang {{key:Enter}}: nagiging iisang solid ang mga ito.
- {{cmd:SUBTRACT}} (`SU`): pumili ng mga solid na papanatilihin at pindutin ang {{key:Enter}}, saka ang mga aalisin at pindutin muli ang {{key:Enter}}. Butas sa isang block: gumuhit ng silindro na dumadaan dito, saka ibawas ang silindro.
- {{cmd:INTERSECT}} (`IN`): pumili ng mga solid at pindutin ang {{key:Enter}}: tanging ang pagkakapareho nilang lahat ang natitira.

Sinasabi ng history ang volume ng resulta. Bawat isa ay isang undo step. Ang unang patakbuhin mo ay nagla-load ng 3D boolean engine (mga 0.5 MB; kasama sa {{ui:I-save para sa offline}}). Tanging ang closed na solids ang maaaring pagsamahin: ang solid na may bukas na gilid (mula sa loose na 3D face ng ibang program) ay tinatanggihan kasama ng dahilan. Iisang solid ang resulta; ang mga kurbadong face ay nananatiling binubuo ng flat na facet, gaya ng silindro.

I-double-click ang isang solid para i-edit ang mga face at gilid nito nang hiwalay; isinasara ito ng {{key:Esc}}. Bawat pagbabago sa 3D ay isang undo step sa parehong history ng drawing: ang {{key:Mod+Z}} ay nag-u-undo ng huling ginawa mo sa alinmang tab.

## Mga flat na view sa sheet

1. Buksan ang sheet tab (o manatili sa {{ui:Model}}), saka i-type ang {{cmd:VIEWBASE}} (o `FLATSHOT`).
2. Piliin ang view: {{key:Enter}} para sa front, o `T` (top), `R` (right), `L` (left), `BA` (back), `BO` (bottom), `I` (isometric).
3. Ang {{key:Enter}} ay nagpapakita ng nakatagong linya, may tuldok; ang `H` ay inaalis ang mga ito.
4. Ang {{key:Enter}} ay kinukuha ang scale na iminumungkahi ng CadCraft: sa sheet, ang pinakamalaking standard scale (gaya ng 1:20) kung saan kasya ang view sa mas mababa sa kalahati ng papel. O i-type ang isa: `1:50`, `2:1`.
5. I-click, o i-type, kung saan pupunta ang center ng view.

Ang view ay isang block reference, `VIEW-FRONT-1` at iba pa: ang mga nakikitang gilid ay nasa layer na VIEW-VISIBLE (0.5 mm), ang mga nakatago ay nasa VIEW-HIDDEN (may tuldok, 0.25 mm). Ilipat, lagyan ng dimension at i-plot ito gaya ng ibang drawing. Larawan ito ng mga solid noong ginawa mo ito; pagkatapos baguhin ang mga ito, burahin ang view at patakbuhin muli ang {{cmd:VIEWBASE}}. Para sa mas maraming view, patakbuhin ito nang isang beses bawat view.

## Tumingin sa paligid

I-drag gamit ang wheel para mag-orbit, {{key:Shift}} + wheel drag o ang kanang button para mag-pan, at i-turn ang wheel para mag-zoom sa cursor. Sa trackpad, nag-o-orbit ang dalawang daliri at nag-zo-zoom ang pinch. Ang right click nang walang drag ay {{key:Enter}}, gaya ng sa ibang tab. Pinapayagan ng `3DORBIT` ang left button na mag-orbit hanggang pindutin mo ang {{key:Enter}} o {{key:Esc}}.

- {{ui:Views}} (o {{cmd:VIEW}}): Iso, Top, Bottom, Front, Back, Left, Right, Perspective o Parallel, at Zoom to everything.
- {{ui:Style}} (o {{cmd:VSCURRENT}}, `VS`): Shaded, Shaded with edges, Hidden line, Wireframe o X-ray.

Ang mga puntong ina-click mo ay nagsa-snap sa mga solid (sulok, gilid, face) at sa 2D drawing sa lupa: ang mga dulo at gitna ng mga linya at arko nito, at ang mga punto sa kahabaan nila. Hindi kailanman napipili ang mga 2D na linya sa 3D tab. Kapag humihingi ng 2D na object ang command (EXTRUDE, REVOLVE, SWEEP), pumipili ang isang click ng isa, ang drag mula kaliwa pakanan ay kumukuha ng lahat ng nasa loob ng window, at ang drag mula kanan pakaliwa ay kumukuha ng lahat ng tinatawiran nito, gaya ng sa {{ui:Model}} tab.

Nasa kanang itaas ng 3D tab ang view cube: i-click ang face, gilid o sulok para tumingin mula roon, i-drag ito para mag-orbit, at ang house button ay bumabalik sa iso view. Iyon ang {{ui:Automatic}}, ang unang opsyon ng {{ui:Corner indicator}} sa [CadCraft settings](topic:settings). Kapag nakatakda sa {{ui:View cube}}, nagpapakita rin ng cube ang {{ui:Model}} tab, na tumitingin mula sa itaas; ang pag-click sa alinmang ibang gilid ay nagbubukas ng 3D tab na tumitingin mula roon. Kapag nakatakda sa {{ui:Axis icon}}, parehong tab ang nagpapakita ng axis marker sa halip.

## Mga solid mula sa ibang program

Maaaring may 3D solids, regions at bodies ang drawing mula sa ibang program (3DSOLID, REGION, BODY: iniingatan ng ibang program ang hugis nila bilang ACIS data). Ipinapakita ng CadCraft ang mga nasa model space sa 3D tab, sa kulay ng layer nila at may sarili nilang mga gilid, sa unang pagbukas mo ng tab; pagkatapos, sinasabi ng command line kung ilan ang naiguhit.

- Ipinapakita ang mga ito gaya ng mga ito: hindi mo ito maaaring piliin, ilipat o baguhin. Ang mga layer na naka-off o naka-freeze ay nagtatago sa mga ito.
- Ang pag-save bilang DWG ay isinusulat muli ang bawat isa nang hindi nagbabago, sa anumang DWG version, kaya makukuha muli ng ibang program ang mga ito. Hindi iniingatan ng DXF file ang mga ito: isinusulat ng CadCraft ang mga ito sa DWG lamang, at sinasabi nito iyon kapag nag-save ka bilang DXF.
- Naiguguhit: flat na face, at mga face sa silindro, cone, sphere, torus at simpleng spline surface, na may tuwid, bilog at spline na gilid. Ang face sa anumang ibang uri ng surface, o isang hindi kayang ilatag ng CadCraft, ay hindi hinuhulaan: iniiwan ito at nakalista, halimbawa "Hindi pa naiguguhit (3D solids): 2 face sa spline-surface (sweepsur), surface na hindi pa naiguguhit."
- Ang mga solid sa loob ng block ay hindi pa ipinapakita; binibilang ang mga ito ng "Tungkol sa file na ito".

Ang mga kurbadong face ay iginuguhit bilang maliliit na flat na piraso, mga 7.5° ang layo sa isa't isa, kaya medyo may facet ang kurbadong solid kapag malapitan.

## I-save at i-export

Pinapanatili ng pag-save ang 3D model, sa DWG at sa DXF. Bawat face ay isinusulat bilang 3D face sa layer na `CC-3D`, para makita ng ibang program ang mga solid, at nag-iingat ang CadCraft ng sarili nitong eksaktong kopya sa file, na binabasa nito pabalik kapag muli mong binuksan ang drawing, kasama ang 3D view gaya ng dati (camera, projection at visual style). Ang mga 3D face na ginawa ng ibang program ay lumalabas sa 3D tab bilang loose na face, pinagsama bilang iisang grupo. Ang 3D face sa loob ng block ay lumilitaw nang isang beses para sa bawat reference sa block na iyon sa model, nakalagay at nakaikot gaya ng reference; sa block mismo, at sa sheet, iginuguhit ang 3D face nang flat, bilang outline nito.

{{ui:I-export}} sa 3D group ay nagda-download ng mga solid lamang: GLB para sa mga viewer at web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) o STL para sa 3D printing, sa millimeter ({{cmd:STLOUT}}). Itinatanong ng {{cmd:EXPORT3D}} kung alin.

:::note
Ang 3D model ay tunay na laki. Ang drawing na walang unit ay binibilang bilang millimeter, kaya ang `1000` ay isang metro. Kapag binago mo ang unit ng drawing pagkatapos (Properties, walang napiling object), isinasabay ang scale ng mga solid para manatili sa drawing, at sinasabi ito ng history. Isang {{key:Mod+Z}} ang nag-u-undo ng pagbabago ng unit at ng scaling nang sabay.
:::
