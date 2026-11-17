---
title: Command map: ano ang i-type
summary: Bawat command ng CadCraft na may maikling pangalan, A hanggang Z, galing mismo sa programa, at ang mga nakasanayan mula sa ibang drafting program na magkaiba.
keywords: command map, commands, aliases, maikling pangalan, galing sa ibang programa, listahan ng command, ano ang i-type, burahin, trim, katumbas, pagkakaiba
from: 3bdfd3e6
---

Tumatanggap ang CadCraft ng mga pangalan ng command at maikling pangalan na alam na ng mga tao mula sa ibang drafting program: i-type ang `L` para sa linya, `TR` para mag-trim, `E` para burahin. Kaya walang kailangang aralin na talaan ng pagsasalin para sa karamihan sa mga ito: ang pangalang alam mo ay siya ring pangalan dito. Ang listahan sa ibaba ay bawat command na mayroon ang CadCraft, galing mismo sa programa. {{key:Enter}} ang umuulit sa huli; ang `HELP` sa command line ay naglalabas ng parehong listahan.

Ang ilan na hindi pareho, o hindi pa nagagawa:

- **I-save** ay nagda-download ng kopya sa browser ({{cmd:SAVE}}, {{cmd:SAVEAS}}); sa CadCraft Studio, isinusulat nito ang file. Tingnan ang [Galing sa ibang drafting software](topic:coming-from).
- **PLOT** ay gumagawa ng PDF (pati PNG at SVG), kasama ang plot style table; walang page setup manager.
- Nagawa na ang **DIMSTYLE** at **PEDIT**; ang **PEDIT** ay walang opsyong Edit-vertex (ang grips ang gumagawa niyon).
- Hindi pa nagagawa ang **TABLE**; nagawa na ang {{cmd:XREF}}, {{cmd:SPLINE}} at {{cmd:WBLOCK}}.
- Ang sariling command ng isang routine (AutoLISP `C:NAME`) ay lumalabas pagkatapos mo itong i-load gamit ang {{cmd:APPLOAD}}; hindi ito nakalista rito.

## Lahat ng command (398)

| Command | Maikling pangalan | Ano ang ginagawa |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | I-orbit ang 3D view gamit ang kaliwang button |
| `ACCESS` | `AX` | I-on o i-off ang pagguhit nang walang paningin: mga resultang binibigkas sa screen reader mo, keyboard cursor sa drawing, snap sounds at binibigkas na command. |
| `ALIASEDIT` |  | I-edit ang command aliases sa isang text file (ang pamilyar na L, *LINE format) |
| `ALIGN` | `AL` | Ilipat at paikutin ang mga object para tumama ang source points sa destination points (isa, dalawa o tatlong pares), at i-scale kung gusto mo |
| `ALIGNPANEL` | `ALP` | I-open ang Align and distribute panel |
| `ALIGNTO` |  | Ihanay ang kaliwa, gitna, kanan, tuktok, gitna (middle) o ibabang gilid ng mga napiling object, sa selection, sa una o huling napiling object, o sa isang punto |
| `ANNOALLVISIBLE` | `ANNOALL` | Ipakita ang annotative na object sa bawat scale, o sa scale lamang ng viewport (o ng drawing) na nasa listahan nila |
| `ANNOSCALE` | `CANNOSCALE` | Itakda ang annotation scale ng drawing: ang annotative na teksto at dimension ay ina-adjust ang laki para mag-print sa parehong sukat |
| `APPLOAD` | `AP` | I-load ang mga application: LISP routine (.lsp) at ang dialog files nila (.dcl); ang Startup Suite (AP) |
| `ARC` | `A` | Arko: 3-Point, Start/Center/End, Start/Center/Angle, Start/Center/Length, Start/End/Angle, Start/End/Direction, Start/End/Radius, Center/Start/End, Center/Start/Angle, Center/Start/Length, Continue |
| `AREA` | `AA` | Area at perimeter sa pamamagitan ng points o ng object; ang Add at Subtract ay nagpapanatili ng running total (AA) |
| `ARRAY` | `AR` | Mga kopya sa rows at columns, o paikot sa isang center (AR) |
| `ARRAYASSOCIATIVITY` |  | Itinatakda kung ang ARRAY commands ay gumagawa ng array na nananatiling ma-e-edit (1) o simpleng kopya (0) |
| `ARRAYCLOSE` |  | Tinatapos ang pag-e-edit ng source objects ng array |
| `ARRAYEDIT` |  | Binabago ang array na ginawa gamit ang Associative option: bilang, spacing, source objects, isang item |
| `ARRAYPATH` |  | Mga kopya ng object sa kahabaan ng line, arc, polyline o iba pang curve |
| `ARRAYPOLAR` |  | Mga kopya sa paligid ng center point |
| `ARRAYRECT` |  | Mga kopya sa rows at columns |
| `ASBUILT` | `ASB` | Binabasa ng ASBUILT ang as-built points na sinukat ng crew (CSV / TXT, gaya ng isinusulat ng EXPORTPOINTS) at ikinukumpara ang mga ito sa points ng drawing: nasa loob o labas ng tolerance, hindi nasukat, sobra. Minamarkahan ang mga ito sa layer AS-BUILT at nagda-download ng CSV report. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | I-define ang attribute (tag na humihingi ng value ang block) na ilalagay sa block (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | I-edit ang attribute values ng block reference sa command line, isa-isa (Enter ay nagpapanatili ng value) |
| `ATTSYNC` |  | Ihanay ang references ng block sa attribute definitions nito: ang mga bago ay idinadagdag na may default, ang inalis ay tinatanggal, ang posisyon at teksto ay ni-reset; napapanatili ang values |
| `AUDIT` |  | Sinusuri ang bukas na drawing para sa sira: mga numerong hindi finite, object na walang sukat, nawawalang layer, block, style at linetype, block na naglalaman ng sarili, shared ids, sirang dimension at hatch. Inililista ang nahanap ayon sa uri at nagtatanong bago ayusin; isang undo step ang pag-ayos. |
| `AUNITS` | `ANGUNITS` | Paano ipinapakita at tinatype ang mga anggulo: decimal degrees, degrees-minutes-seconds o bearings gaya ng N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | I-on o i-off ang drawing autocomplete, o ilista ang mga mungkahi ng patterns ng drawing sa ngayon. |
| `AUTOCONSTRAIN` |  | Magdagdag ng coincident, horizontal at vertical constraints kung saan malapit na ang geometry |
| `AUTODIM` | `ADIM` | Mag-dimension ayon sa rules: overall size, chains sa gilid, openings, diameter ng butas at grid spacing, nang hindi inuulit ang nakadimension na. |
| `AUTOSHEET` | `ASH` | Kusang nag-aayos ng sheets: pumipili ng papel at standard scales at inilalagay ang bawat view na may caption at title block. |
| `BATTMAN` |  | Block attribute manager: ayos, tags, prompts, defaults at modes ng attributes ng block, saka i-update ang references nito |
| `BCLOSE` |  | Isara ang block editor: i-save ang block o itapon ang mga pagbabago |
| `BCONVERT` |  | Hinahanap ng BCONVERT ang geometry na paulit-ulit at ginagawang block references. Piliin ang mga object na paulit-ulit: bawat ibang set ng object sa open space na pareho ang geometry, nailipat at naikot sa anumang anggulo, ay mahahanap, at kapag naka-on ang Mirrored o Scaled, mahahanap din ang mirror images at kopya sa ibang laki. Bigyan ng pangalan ang bagong block at base point; ang selection at bawat kopya ay magiging references dito, bawat isa may sariling rotation at scale. O piliin ang Block at pangalanan ang umiiral na block para mahanap ang maluwag na kopya ng mga object nito. Dapat pareho ang layer, color, linetype at lineweight ng kopya maliban kung nakatakda ang Properties sa Ignore. Hindi ginagalaw ang mga object sa locked layers. Isang undo step. |
| `BEDIT` | `BE` | Block editor: i-edit ang mga object at attributes ng block; nagse-save ang BCLOSE (BE) |
| `BLEND` |  | BLEND: spline sa pagitan ng mga dulo ng dalawang bukas na curve, pinipili malapit sa dulo para pagdugtungin. CONtinuity: Tangent ay sumusunod sa dalawang direksyon, Smooth ay sumusunod din sa pagbaluktot nila. |
| `BLOCK` | `B`, `BMAKE` | Gumawa ng block mula sa mga object (nagiging isang reference sila) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: bawat reference ng isang block ay nagiging reference sa iba, sa parehong lugar, may parehong scale at rotation. Napapanatili ang values ng attributes na mayroon ang parehong block. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | Ipinapakita ng BLOCKSPALETTE ang Blocks panel na may cursor sa filter nito. Ipinapakita ng panel ang larawan ng bawat block (ang pinakahuling nailagay muna), bilang listahan o grid; i-click ang larawan o i-drag ito sa drawing para ilagay ang block gamit ang INSERT. Sa ilalim ng Libraries, magdagdag ng sariling DWG o DXF file: nakalista ang mga block nito na may larawan at kinokopya sa drawing na ito kapag may inilagay ka. Sa CadCraft Studio, maaari ring magdagdag ng folder ng drawings, at naaalala ang mga file at folder. |
| `BOMEDIT` | `BOMCOLUMNS` | Mga column, grouping, sorting, title, totals at remarks ng bill of materials table |
| `BOMEXPORT` |  | I-save ang bill of materials table bilang .csv file |
| `BOMTABLE` | `BOM` | Live na bill of materials table ng isang zone, o ng buong drawing |
| `BOMUPDATE` |  | I-update ngayon ang bawat bill of materials table, pati ang frozen |
| `BOMZONE` | `BZONE` | Pinangalanang bahagi ng drawing para sa bill of materials: dalawang sulok, polygon, o outline ng closed object |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): pumili ng punto sa loob ng closed area at makakakuha ng closed polyline sa paligid nito. Nananatiling arc ang arcs. Ang Islands ay nag-o-outline din ng mga area sa loob nito. |
| `BOX` |  | Isang box: dalawang sulok at taas (3D) |
| `BPARAMETER` | `BPARAM` | Hindi pa nagagawa: pagdagdag ng parameter (gaya ng Visibility) sa block. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Block parameters: pinangalanang parameter na may formulas, at ilang visibility parameters sa isang block. Gumagana sa block editor (italaga ang napiling object sa state) at sa napiling reference (sarili nitong values at states). |
| `BREAK` | `BR` | Putulin ang line, arc, circle o polyline sa pagitan ng dalawang punto (BR) |
| `BREAKATPOINT` |  | Hatiin sa dalawa ang line, arc o polyline sa isang punto |
| `BREAKLINE` |  | Gumuhit ng line na may break symbol; naaalala ang laki nito at ang extension lampas sa mga dulo. |
| `BREPLACE` |  | Pinapalitan ng BREPLACE ang isang block ng iba. Selected: pumili ng block references at pangalanan ang block na gagamitin. All: pangalanan ang block at ang kapalit nito, at magbabago ang bawat reference sa bawat space at sa loob ng ibang block. Pinapanatili ng reference ang lugar, scale, rotation at layer nito, at ang values ng attributes na mayroon ang parehong block; ang values na walang lugar sa bagong block ay tinatanggal at pinangalanan. |
| `BSEARCH` |  | Naghahanap ng blocks ang BSEARCH. Name: bahagi ng pangalan ng block, o pattern na may * at ?. Attribute: value (o TAG=value) na hawak ng attributes ng reference. Geometry: pumili ng mga object o isang block reference, at nakalista ang mga block na hindi bababa sa 85% magkatulad ang hugis, pinakamahusay muna; hindi binibilang ang laki, rotation at mirroring. Ang mga reference na nahanap sa bukas na space ay napipili, handa para sa susunod na command. |
| `BURST` |  | I-explode ang block references at panatilihin ang sinasabi ng attributes nila: bawat value ay nagiging teksto sa layer ng attribute. |
| `BVHIDE` | `BVH` | Sa block editor: itago ang mga object sa kasalukuyang visibility state. |
| `BVSHOW` | `BVSH` | Sa block editor: ipakita ang mga object na itinatago ng kasalukuyang visibility state (lumalabas na kumukupas para mapili). |
| `BVSTATE` | `BVS` | Sa block editor, sa block na may visibility states: lumipat sa isang state, o magdagdag, magpalit ng pangalan o magtanggal nito. |
| `CAL` |  | Kalkulahin ang haba o numero: + − * / at brackets, gaya ng pag-type mo kahit saan |
| `CENTERLINE` | `CL` | Center line sa pagitan ng dalawang line: nasa gitna ng mga ito, o sa bisector kapag nagtagpo sila (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Center mark: krus sa center ng circle o arc, na may center lines na lampas nang kaunti (CM) |
| `CHAMFER` | `CHA` | I-bevel ang sulok sa pagitan ng dalawang line (D dalawang distansya, A haba at anggulo, P bawat sulok ng polyline) |
| `CHSPACE` |  | CHSPACE: ilipat ang mga object sa pagitan ng sheet at model sa pamamagitan ng viewport. Ina-scale at pinapaikot sila para magmukhang pareho mula sa kabilang panig. Sa sheet, napupunta sila sa model; habang nagtatrabaho ka sa pamamagitan ng viewport (MSPACE), napupunta sila sa sheet. |
| `CIRCLE` | `C` | Center at radius, diameter, 2 o 3 punto |
| `CLASS` |  | Ilagay ang mga napiling object sa class, o kung walang napili, itakda ang aktibong class (? ang naglilista nila) |
| `CLASSES` | `CLS` | Ang Classes panel: pinagsasama-sama ng classes ang object sa iba't ibang layer; i-show, hide at i-style sila, at i-override bawat viewport (CLS) |
| `COMMANDLINE` | `CMDLINE` | I-dock o i-float ang command line, gawing isang linya, itakda ang history lines nito, o buksan ang history (F2) |
| `COMPARESETTINGS` | `CMPSET` | Ikumpara ang dimension styles, text styles, layers, sheets o units: dalawa sa drawing na ito, o ang drawing na ito laban sa isa pang bukas, at kopyahin ang isang value. |
| `CONSTRAINTBAR` | `CBAR` | I-show o itago ang constraint bars (Showall / Hideall, o bawat object) |
| `COPY` | `CO`, `CP` | Kopyahin ang mga object, ilang beses man i-click |
| `COPYBASE` |  | Kopyahin ang mga object sa clipboard na may base point na pipiliin mo |
| `COPYCLIP` |  | Kopyahin ang mga object sa clipboard (Ctrl+C); inilalagay sila ng PASTECLIP |
| `COUNT` | `BCOUNT` | Bilangin ang block references: pumili ng isa para mapili at mabilang ang bawat reference ng block nito |
| `COUNTTABLE` |  | Maglagay ng table ng bilang ng block |
| `CREDITS` |  | Inilalagay ang Library credits sa drawing bilang table. Patakbuhin muli para i-update ang table mula sa mga item sa drawing ngayon. |
| `CURSORSIZE` |  | Laki ng crosshair: ang 100 ay tumatakbo mula gilid hanggang gilid ng drawing (Settings › Cursor › Full screen) |
| `CUTCLIP` |  | Putulin ang mga object sa clipboard (Ctrl+X): kopyahin, saka burahin |
| `CYLINDER` | `CYL` | Isang cylinder: center, radius at taas (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Ilista ang blocks, ang attributes nila at object properties bilang table sa drawing o CSV file |
| `DATALINK` | `DL` | Table mula sa CSV file na naaalala ang file, kaya mababasa itong muli |
| `DATALINKUPDATE` | `DLU` | Basahin muli ang file ng data link at punan ulit ang mga table nito |
| `DCALIGNED` | `DCALI` | Dimensional constraint: totoong distansya sa pagitan ng mga punto, punto at line, o dalawang line |
| `DCANGULAR` | `DCANG` | Dimensional constraint: anggulo sa pagitan ng dalawang line, o ng arc |
| `DCCONVERT` |  | Gawing dimensional constraints ang mga dimension na iginuhit sa constrainable geometry |
| `DCDIAMETER` | `DCDIA` | Dimensional constraint: diameter ng circle o arc |
| `DCDISPLAY` |  | I-show o itago ang dimensional constraints sa drawing |
| `DCHORIZONTAL` | `DCHOR` | Dimensional constraint: pahalang na distansya |
| `DCLINEAR` | `DCLIN` | Dimensional constraint: pahalang o patayong distansya, mula kung saan mo ito ilalagay |
| `DCRADIUS` | `DCRAD` | Dimensional constraint: radius ng circle o arc |
| `DCVERTICAL` | `DCVER` | Dimensional constraint: patayong distansya |
| `DELBLOCKS` |  | Burahin ang blocks: bawat reference (pati nakapaloob, sa bawat sheet) at ang definitions |
| `DELCONSTRAINT` | `DELCON` | Alisin ang bawat constraint (geometric at dimensional) mula sa mga object na pipiliin mo |
| `DELOPENING` |  | Alisin ang pinto o bintana sa pader. |
| `DESCRIBE` | `DESC` | Sabihin kung ano ang laman ng drawing: ilan ang object, anong uri, gaano kalaki, ano ang napili. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | I-clear ang selection (Esc) |
| `DETAILS` | `DET` | Sariling mga detalye ng firm mo, hinahanap para sa iginuguhit mo: hanapin, magdagdag ng block, ilista, alisin, i-on o i-off ang mga alok. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Gumuhit ng diagram mula sa teksto: Mermaid flowchart, PlantUML component diagram, D2, from-to list o draw.io XML, bilang blocks at connectors na maaari mong i-edit |
| `DIMALIGNED` | `DAL`, `DIMALI` | Totoong distansya sa pagitan ng dalawang punto |
| `DIMANGULAR` | `DAN`, `DIMANG` | Anggulo sa pagitan ng dalawang line, ng arc, o sa tatlong punto |
| `DIMARC` | `DAR` | Dimension ng haba ng arc: ang distansya sa kahabaan ng arc, na may arc symbol (DAR) |
| `DIMASZ` |  | Setting ng dimension: Laki ng arrow |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Mga dimension na nakasalansan mula sa isang base line |
| `DIMBREAK` | `DBREAK` | Putulin ang dimension at extension lines kung saan sila tumatawid sa ibang object (Auto), sa pagitan ng dalawang punto (Manual), o alisin ang mga putol |
| `DIMCONSTRAINT` | `DCON` | Dimensional constraints: linear, aligned, angular, radius, diameter, convert |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Isang kadena ng dimensions, bawat isa mula sa dulo ng huli |
| `DIMDEC` |  | Setting ng dimension: Decimal places |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diameter ng arc o circle |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Pakawalan ang dimensions mula sa mga object na nakatali sila (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Baguhin ang dimension text (Home, New text, Rotate) o ikiling ang extension lines (Oblique) |
| `DIMEXE` |  | Setting ng dimension: Extension lampas sa dimension line |
| `DIMEXO` |  | Setting ng dimension: Offset mula sa origin |
| `DIMGAP` |  | Setting ng dimension: Puwang sa paligid ng teksto |
| `DIMINSPECT` |  | Inspection dimension: frame sa paligid ng value na may label at kung gaano kadalas sinusuri ang piyesa |
| `DIMJOGGED` | `DJO`, `JOG` | Jogged radius dimension: radius na iginuhit mula sa mas malapit na punto kapag malayo ang center (DJO) |
| `DIMJOGLINE` | `DJL` | Magdagdag ng jog symbol sa linear o aligned dimension line, para ipakitang hindi iginuhit sa tamang sukat ang distansya (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Pahalang o patayong distansya (R para sa anumang anggulo) |
| `DIMLUNIT` |  | Setting ng dimension: format ng haba (1 scientific, 2 decimal, 3 engineering, 4 architectural, 5 fractional) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinate dimension: ang X o Y na distansya ng punto mula sa UCS origin, sa leader (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | I-override ang dimension variables sa mga napiling dimension nang hindi binabago ang style nila; ibinabalik ng Clear ang style (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radius ng arc o circle |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Itali ang mga punto ng dimension sa mga object, para sumunod at masukat muli kapag gumalaw sila (DRE) |
| `DIMSCALE` |  | Setting ng dimension: Overall scale (laki × ito) |
| `DIMSPACE` |  | Pantay na spacing sa pagitan ng parallel dimensions, sinusukat mula sa base dimension (0 ang nagpapantay sa kanila, ang Auto ay dalawang beses ng taas ng teksto) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Gumawa, magbago, itakda bilang kasalukuyan, magtanggal, mag-apply at ikumpara ang pinangalanang dimension styles (ang dialog; -DIMSTYLE sa command line) |
| `DIMTEDIT` | `DIMTED` | Ilipat ang dimension text sa kaliwa, kanan o gitna ng dimension line, o i-flip ito |
| `DIMTEXTUNIT` | `DTU` | Dimension text sa mm, cm, m o km, o sa sariling units ng drawing: ang mga napiling dimension, kung wala, ang mga bago (DTU) |
| `DIMTXT` |  | Setting ng dimension: Taas ng teksto |
| `DIST` | `DI` | Distansya at anggulo sa pagitan ng dalawang punto |
| `DISTRIBUTE` |  | Pantay na ipamahagi ang mga napiling object, sa gilid o pataas at pababa: pantay na hakbang sa pagitan ng centers, o pantay na puwang; nananatili ang dalawang panlabas |
| `DIVIDE` | `DIV` | DIVIDE (DIV): mga marka na humahati sa line, arc, circle, polyline, spline o ellipse sa pantay na bahagi. Points, o kung may Block, isang block sa bawat marka. |
| `DOCUMENTS` | `DOCS` | Buksan ang Documents panel: i-check out at i-check in ang drawings, revisions, release states at approval para sa project folder |
| `DOOR` | `DR` | Maglagay ng pinto sa pader. Ang gilid na i-click mo ay ang gilid kung saan ito bumubukas. |
| `DRAWORDER` |  | Baguhin ang draw order: dalhin ang mga object sa harap, ipadala sila sa likod, o ilagay sila sa ibabaw o ilalim ng ibang object. |
| `DUPLICATE` | `DUP` | Kopyang gumagalaw kasabay ng pointer: i-click para ilapag (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Properties ng drawing: title, author at iba pa, at sarili mong pares ng pangalan at value |
| `DXFOUT` |  | I-download ang drawing bilang DXF R12 (pinapanatili ng Save ang sarili nitong format) |
| `EATTEDIT` | `DDATTE` | I-edit ang attributes ng block reference: values, teksto at properties, isang attribute sa bawat pagkakataon |
| `ELLIPSE` | `EL` | Endpoints ng axis at ang kabilang half-axis |
| `ERASE` | `E`, `DELETE` | Alisin ang mga object |
| `EXPLODE` | `X` | Putulin ang polylines, blocks at dimensions sa kanilang mga bahagi |
| `EXPORT` | `EXP` | I-save ang kopya ng drawing sa file type na isinusulat ng add-on |
| `EXPORT3D` | `3DEXPORT` | I-export ang 3D model: GLB, OBJ o STL |
| `EXPORTPOINTS` | `EXPPTS` | Isulat ang points, at insertion points ng blocks na may isang attribute bilang deskripsyon, sa CSV o TXT file (PNEZD, PENZD o XYZ) para sa BIM at survey programs |
| `EXTEND` | `EX` | Pahabain ang mga object para magtagpo sa iba: i-click malapit sa dulo, i-drag sa ilan, o Shift+click para mag-trim |
| `EXTRIM` |  | EXTRIM: pumili ng isang cutting edge, saka isang gilid. Lahat ng tumatawid sa edge ay tinatrim sa gilid na iyon. Lumalabas ang mga bahaging mawawala habang inililipat mo ang pointer. |
| `EXTRUDE` | `EXT` | I-extrude ang closed 2D objects bilang solids (3D) |
| `FIELD` |  | Maglagay ng field sa teksto, table cell o attribute: petsa, pangalan ng file, numero ng sheet, property ng drawing, area o haba ng object, o formula |
| `FILLET` | `F` | Pabilugin o gawing parisukat ang sulok sa pagitan ng dalawang object (R radius, P bawat sulok ng polyline, M ilan) |
| `FIND` |  | Hanapin at palitan ang mga salita sa teksto, attribute values at dimension text |
| `FLATTEN` |  | Itakda ang taas (Z) at kapal ng mga napiling object sa 0, pati sa blocks na ginagamit nila. |
| `FLOOR` |  | Piliin ang palapag na iguguhitan, magdagdag ng isa, o ilipat o kopyahin ang selection dito. |
| `FLOORLAYERS` |  | Gawing layers na pinangalanang Floor-Layer ang floors, para sa file na mapupunta sa taong walang floors. |
| `FLOORS` | `FLR` | Buksan ang Floors panel: pagsalansanin ang floors sa iisang model space. |
| `GCCOINCIDENT` |  | Constraint: nagtatagpo ang dalawang punto, o nananatili ang isang punto sa object |
| `GCCOLLINEAR` |  | Constraint: nananatili sa iisang line ang dalawang line |
| `GCCONCENTRIC` |  | Constraint: nagbabahagi ng center ang dalawang circle o arc |
| `GCEQUAL` |  | Constraint: nananatiling pareho ang haba ng dalawang line, o pareho ang radius ng dalawang circle/arc |
| `GCFIX` |  | Constraint: nananatili sa lugar nito ang isang punto o buong object |
| `GCHORIZONTAL` |  | Constraint: nananatiling pahalang ang isang line (o dalawang punto) |
| `GCPARALLEL` |  | Constraint: nananatiling parallel ang dalawang line |
| `GCPERPENDICULAR` |  | Constraint: nananatiling tuwid na anggulo ang dalawang line |
| `GCSYMMETRIC` |  | Constraint: nagsasalamin sa isa't isa ang dalawang punto, line o circle sa kabila ng isang line |
| `GCTANGENT` |  | Constraint: nananatiling tangent ang isang line at circle o arc (o dalawa sa kanila) |
| `GCVERTICAL` |  | Constraint: nananatiling patayo ang isang line (o dalawang punto) |
| `GDSIN` | `GDS` | Tingnan ang IC layout (GDSII stream file): bawat layer at datatype bilang drawing layer, flat, sa user units; para sa pagtingin at pagsukat lamang (lab spike) |
| `GEOMCONSTRAINT` | `GCON` | Geometric constraints: horizontal, vertical, parallel, tangent, coincident… |
| `GLBOUT` |  | I-export ang 3D model bilang GLB (glTF) |
| `GRADIENT` | `GD` | Pinupunan ang area ng gradient ng isa o dalawang kulay |
| `GRIDMOVE` | `GM` | Ilipat ang grid line at dalhin ang nakabitin dito: nag-uunat ang mga pader, gumagalaw ang mga column, bubble at tag, sumusunod ang dimensions. |
| `GROUP` | `G` | GROUP (G): bigyan ng pangalan na pinagsasaluhan ang mga napiling object. Pagkatapos, pinipili na ng isang click sa isa sa kanila ang lahat. Ang Enter sa pangalan ay gumagawa ng group na walang pangalan. |
| `GROUPEDIT` |  | GROUPEDIT: baguhin ang group. Pumili ng isa sa mga object nito o ibigay ang Name nito, saka Add o Remove objects, REName ito, baguhin ang Description nito, o sabihin kung pinipili ng click ang buo nito. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Punan ang area ng solid fill o pattern: i-click sa loob nito, o pumili ng closed objects (H) |
| `HATCHEDIT` | `HE` | Baguhin ang hatch: pattern, scale, anggulo, origin, at ang link nito sa boundary. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Ginagawang muli ang boundary polylines mula sa hatch, naka-link man dito o hindi |
| `HATCHTOBACK` |  | Ipadala ang bawat hatch sa likod ng lahat ng iba. |
| `HELP` | `?` | Ang listahang ito |
| `HIDEOBJECTS` |  | Itago ang mga napiling object hanggang UNISOLATEOBJECTS. Hindi nase-save kasama ng drawing. |
| `HISTORY` | `HIST` | HISTORY (HIST): ang mga bersyon ng drawing na ito — mga kopyang itinatago sa computer na ito kapag nagse-save ang Studio, at ang mga bersyon sa cloud — para buksan, ibalik, at ikumpara sa mga pagbabagong ipinapakita sa kulay. |
| `ID` |  | Coordinates ng isang punto |
| `IMAGE` | `IM` | Ibigay sa CadCraft ang picture files na ginagamit ng drawing (iniimbak lang ng DWG kung saan sila naroon). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Maglagay ng larawan (PNG o JPEG) mula sa file. |
| `IMAGECLIP` | `ICL` | I-clip ang larawan sa rectangle o polygon, o alisin ang clip nito. |
| `IMPORT` | `IMP` | I-import ang file ng uri na binabasa ng add-on, papunta sa drawing na ito |
| `INSERT` | `I`, `DDINSERT` | Maglagay ng block (S scale, R rotate); F mula sa DWG/DXF file, L mula sa library |
| `INTERSECT` | `IN` | Panatilihin lang ang pagkakapareho ng solids (3D), o ang area na pinagsasaluhan ng 2D regions |
| `ISODRAFT` |  | ISODRAFT: isometric drafting na naka-on o naka-off, o diretso sa Left, Top o Right plane. Kapag naka-on, ang Ortho at polar tracking ay sumusunod sa dalawang axis ng plane, ang grid ay iginuguhit na isometric, at ang ELLIPSE ay may Isocircle. |
| `ISOLATEOBJECTS` | `ISOLATE` | Ipakita lang ang mga napiling object; nakatago ang lahat ng iba sa space na ito hanggang UNISOLATEOBJECTS. Hindi nase-save kasama ng drawing. |
| `ISOPLANE` |  | ISOPLANE: piliin ang isometric plane na iguguhitan: Left, Top o Right. Pumupunta ang Enter sa susunod, gaya ng ginagawa ng F5 kapag naka-on ang isometric drafting. |
| `JOIN` | `J` | Pagdugtungin ang line, arc at polyline na nagtatagpo sa dulo-sa-dulo bilang isang polyline; ang mga line sa iisang line bilang isang line (J) |
| `LASER` | `LASERCUT` | Buksan ang Laser panel: ipadala ang layers sa laser cutter o engraver (GRBL G-code) |
| `LASSOMODE` |  | Ang pindot at drag ay gumuguhit ng lasso (1) o rectangle (0) |
| `LAYDEL` |  | Burahin ang layer at bawat object dito (sa model, sa sheets at sa blocks) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Buksan ang Layer manager: bawat layer sa iisang table |
| `LAYERPANEL` |  | Ipakita ang layers panel |
| `LAYFRZ` |  | I-freeze ang layer ng bawat object na pipiliin mo |
| `LAYGROUP` | `LG` | Pagsamahin ang layers sa folders sa Layers panel. |
| `LAYISO` |  | I-isolate ang layers ng mga napiling object (lahat ng ibang layer ay naka-off) |
| `LAYLOCKFADE` |  | Itakda kung gaano kumukupas ang mga object sa locked layers, at kung makakapili sila sa click. |
| `LAYMCUR` |  | Gawing kasalukuyang layer ang layer ng object na pipiliin mo |
| `LAYMRG` |  | Pagsamahin ang layers: lilipat ang mga object nila sa target layer, at mawawala ang mga pinagsamang layer |
| `LAYOFF` |  | I-off ang layer ng bawat object na pipiliin mo |
| `LAYON` |  | I-on ang bawat layer |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Bagong sheet na may title block at viewport |
| `LAYTHW` |  | I-thaw ang bawat layer |
| `LAYUNISO` |  | Ibalik na naka-on ang mga layer na in-off ng LAYISO |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Kinokonberte ang teksto na na-type gamit ang lumang Vietnamese fonts (TCVN3 / ABC fonts gaya ng .VnTime, at VNI fonts gaya ng VNI-Times) sa Unicode. Ipinapakita na ang ganitong teksto ayon sa pagbasa; isinusulat ito ng command na ito nang tuluyan, may bilang at isang undo step. |
| `LENGTHEN` | `LEN` | Pahabain o paikliin ang lines, arcs at polylines: sa isang halaga, porsyento, hanggang sa kabuuan, o sa pag-drag (LEN) |
| `LIBRARY` | `LIB` | Ang library panel: maglagay ng item, tingnan ang updates, credits |
| `LIMITS` |  | Itakda ang limits ng drawing: ON, OFF, o ang ibabang-kaliwa at itaas-kanang sulok. Kapag naka-ON ang limits, tinatanggihan ang mga punto sa labas nila |
| `LINE` | `L` | Tuwid na segments, bawat isa ay sariling object |
| `LINETYPE` | `LT`, `CELTYPE` | Ang linetype na makukuha ng bagong object (ayon sa layer, ayon sa block, o pinangalanan) |
| `LINKVIEWS` | `SYNCVIEWS` | Pan at zoom ang bawat pane nang sabay (split screen), para ikumpara ang dalawang drawing o revisions |
| `LISPEDIT` | `VLIDE` | Binubuksan ng LISPEDIT (o VLIDE) ang LISP editor: isang window para magsulat, mag-load at sumubok ng routine. Ang Load into the drawing ay binabasa ang bawat form, gaya ng pag-load ng file gamit ang APPLOAD, at ginagawa ang mga command nito. Ang Run selection ay sinusuri ang mga napiling form, o ang form kung nasaan ang cursor. Ipinapakita ng console ang nilabas ng routine at bawat error kasama ng linya nito. Namamarkahan ang katapat na parenthesis habang nagta-type ka, at nag-i-indent ang Enter ng bagong linya. Gumagana ang New, Open at Save sa .lsp file. Ipinapakita ng mga listahan sa tabi ng teksto ang mga function na tinutukoy ng routine, ang mga tinatawag nito na wala pa sa LISP na ito, at bawat function na mayroon ito. Hindi hinaharangan ng window ang drawing, kaya maaaring humingi ng punto ang routine; tinatapos ng Stop o Esc ang routine na tumatakbo. |
| `LIST` | `LI`, `LS` | Ilarawan ang mga object sa history |
| `LTSCALE` | `LTS` | Ang linetype scale ng drawing (pinaparami nito ang bawat dash at gap) |
| `LWDISPLAY` | `LWT` | Ipakita o itago ang lineweights sa screen (ang LWT button sa status bar) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Ang lineweight na makukuha ng bagong object (ayon sa layer, ayon sa block, default, o mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Map layers sa ilalim ng model space: ang coordinate system ng drawing, tiles, WMS, WMTS, ArcGIS, larawan |
| `MASSPROP` |  | MASSPROP: section properties ng regions at closed objects: area, perimeter, centroid, moments at product of inertia, radii of gyration at principal axes. Tumpak para sa lines at arcs. Maaari nitong isulat ang report sa text file. |
| `MATCHPROP` | `MA`, `PAINTER` | Match properties: kopyahin ang layer, kulay at iba pa ng isang object papunta sa iba (MA) |
| `MEASURE` | `ME` | MEASURE (ME): marka sa bawat ibinigay na haba sa kahabaan ng line, arc, circle, polyline, spline o ellipse, mula sa dulong pinakamalapit sa pinili mo. Points, o kung may Block, isang block sa bawat marka. |
| `MEASUREGEOM` | `MEA` | Sukatin ang distansya, radius, anggulo o area (MEA) |
| `MINSERT` |  | MINSERT: maglagay ng block sa rows at columns nang sabay-sabay. Bawat isa ay sariling reference, kaya maaari mong ilipat o burahin ang alinman. |
| `MIRROR` | `MI` | I-mirror ang mga object sa kabila ng isang line |
| `MLEADER` | `MLD`, `MLEAD` | Multileader: arrow, leader at note, bilang iisang object (MLD) |
| `MLEADERALIGN` | `MLA` | Ihanay ang multileaders sa isa sa kanila sa isang direksyon, sa pantay na spacing, o ipamahagi sa pagitan ng dalawang punto (MLA) |
| `MLEADERCOLLECT` | `MLC` | Pagsamahin ang ilang multileaders sa isa: ang mga block nila sa isang hilera o column, o ang mga note nila sa ilalim ng isa't isa (MLC) |
| `MLEADEREDIT` | `MLE` | Magdagdag ng leader lines sa multileader o alisin ang mga ito; ilipat ang content nito sa pagitan ng teksto at block (MLE) |
| `MLINE` |  | Gumuhit ng magkakatabing parallel lines, pinagdugtong sa mga sulok. |
| `MOVE` | `M` | Ilipat ang mga object sa pamamagitan ng base point at pangalawang punto |
| `MSPACE` | `MS` | Gumawa sa model sa pamamagitan ng viewport ng bukas na sheet (o i-double-click sa loob ng viewport). |
| `MTEXT` | `MT`, `T` | Paragraph text: i-drag ang lapad nito, saka mag-type sa lugar; nagsisimula ng bagong paragraph ang Enter (T) |
| `MVIEW` | `MV` | Viewport papunta sa model, sa layout |
| `NAMEDVIEW` | `NV`, `VIEWS` | Named views: i-save ang view sa screen (o window) sa ilalim ng pangalan at bumalik dito (NV) |
| `NCOPY` |  | Kopyahin ang mga object palabas ng block reference o naka-link na drawing papunta sa drawing, nang hindi ito ini-explode. |
| `NEARBY` |  | Sabihin kung ano ang nasa malapit sa cursor, pinakamalapit muna, kasama ang distansya at gilid. |
| `NEW` |  | Magsimula ng bagong drawing |
| `OBJECTSCALE` | `OBJSCALE` | Annotation scales ng annotative na teksto at dimension: magdagdag ng scale, magtanggal ng isa, idagdag ang kasalukuyang scale, o ilista sila (ipinapakita ng bawat viewport ang mga ito sa laki para sa sarili nitong scale) |
| `OBJOUT` |  | I-export ang 3D model bilang OBJ |
| `OFFSET` | `O` | Mga parallel na kopya sa isang distansya |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: kung paano isinasara ng OFFSET ang mga puwang sa panlabas na sulok ng polyline. 0 ay pinapahaba ang segments, 1 ay nagdaragdag ng arc, 2 ay nagdaragdag ng tuwid na putol. Itinatago para sa session na ito. |
| `OLELIST` | `OLES` | Ilista ang mga OLE object na dala ng drawing at ilagay ang kopya ng larawan ng isa kung saan mo gusto |
| `OPEN` |  | Buksan ang DWG o DXF mula sa computer na ito |
| `OPENIN3D` |  | Buksan ang drawing na ito sa 3D modeling app, sa bagong tab (walang ina-upload) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Buksan ang object snap menu: piliin kung aling snaps ang naka-on. Gayundin ang right-click sa Snap sa status bar. |
| `OVERKILL` |  | Burahin ang duplicate na object at pagsamahin ang nagkakapatong o dulo-sa-dulong lines at arcs, sa loob ng tolerance. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Ang Parameters panel: user parameters at dimensional constraints sa iisang table |
| `PARTSLIST` | `PLIST` | Parts list table ng bawat standard na piyesa at steel section na inilagay mula sa Library |
| `PASTEAREA` | `PAREA` | I-paste ang area na kinopya sa MarkupCraft (Copy area) sa totoong laki nito, bilang larawan. |
| `PASTEBLOCK` |  | PASTEBLOCK: i-paste ang kinopya mo bilang isang block. May sarili itong pangalan ang block; ibibigay ng RENAME ang pangalan mo. |
| `PASTECLIP` |  | I-paste ang clipboard: susunod ito sa cursor, i-click kung saan ito pupunta (Ctrl+V) |
| `PASTEORIG` |  | I-paste ang clipboard sa coordinates na pinagkopyahan nito (Ctrl+Shift+V) |
| `PDF` |  | Ibigay sa CadCraft ang PDF files na ginagamit ng underlays ng drawing |
| `PDFADJUST` |  | Pakupasin, i-contrast, gawing monochrome o i-off ang PDF underlay |
| `PDFATTACH` | `PDFATT` | Ikabit ang PDF page bilang underlay (PDFATTACH) |
| `PDFCLIP` |  | I-clip ang PDF underlay sa rectangle o polygon |
| `PDFIMPORT` | `PDFIM` | Gawing drawing objects ang lines, fills at teksto ng PDF page (PDFIMPORT) |
| `PDFLAYERS` |  | I-on o i-off ang layers ng PDF underlay |
| `PEDIT` | `PE` | I-edit ang polyline: close, open, join, width, fit curve, spline curve, decurve, linetype generation, reverse; ang lines, arcs at splines ay maaaring gawing polylines |
| `PHOTOSKETCH` | `PSK` | Ginagawang lines at arcs sa tamang sukat ang larawan ng hand sketch sa papel, itinutuwid ang perspective at binibigyan ng sariling layer ang bawat kulay ng panulat. |
| `PICKSTYLE` |  | PICKSTYLE: kung ang pagpili ng isang object sa group ay pumipili ng buong group (1, ang paunang setting) o ang object lamang (0). Itinatago para sa session na ito. |
| `PLAN` |  | Paikutin ang view para ang UCS X axis (Current ucs, saved Ucs, o World) ay pahalang sa screen. Walang gumagalaw sa drawing. |
| `PLINE` | `PL` | Polyline ng line at arc segments |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Plot sa PDF: isang layout, o ang model sa isang scale |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Plot style tables: itakda kung ano ang ipi-print ng bawat kulay (kulay, itim, grey, ink, lineweight); itinatabi kasama ng drawing (STYLESMANAGER) |
| `POINT` | `PO` | Point objects |
| `POINTCLOUD` | `PC` | Ang nakakabit na point cloud: slice, height, thickness, color, size, visible, zoom, detach |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Ikabit ang point cloud (LAS, LAZ, XYZ, PTS) sa ilalim ng drawing |
| `POLARANG` |  | Ang polar tracking step sa degrees (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Regular na polygon |
| `PRESSPULL` |  | Itulak o hilahin ang mukha ng solid (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Buksan ang Properties panel (o Ctrl+1, o i-double-click ang object) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Itupi ang Properties panel sa gilid ng window |
| `PSPACE` | `PS` | Umalis sa viewport na pinagtatrabahuhan mo at bumalik sa sheet (o i-double-click sa labas nito). |
| `PUBLISH` | `-PUBLISH` | I-plot ang ilan o lahat ng sheets sa iisang PDF (isang pahina at bookmark bawat sheet) |
| `PURGE` | `PU` | Alisin ang block definitions na walang gumagamit |
| `QDIM` |  | Quick dimension: mag-dimension ng ilang object nang sabay (continuous, baseline, staggered, ordinate, radius o diameter) |
| `QPMODE` | `QP` | Quick Properties ayon sa cursor, naka-on o naka-off |
| `QSELECT` | `QS` | Quick select: bawat object ng isang uri na tugma ang layer, kulay, laki o pangalan (QS) |
| `RASTERSNAP` |  | I-on o i-off ang snapping sa lines ng na-scan na sheets. |
| `RAY` |  | Ray: construction line mula sa isang punto, walang hanggan sa isang direksyon. |
| `RECOVER` |  | Binubuksan ang sirang DXF o DWG: nilalaktawan ang hindi mabasa sa halip na tanggihan ang file, sinasabi kung ano ang nilaktawan, saka sinusuri at inaayos ang drawing gaya ng AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Closed polyline mula sa dalawang sulok |
| `REDLINE` | `RDL` | Redline papuntang revision: basahin ang MarkupCraft redline package, tanggapin o tanggihan ang bawat pagbabago, i-cloud ang mga tinanggap na may revision log, at i-save ang answers file (RDL) |
| `REDO` |  | I-redo ang na-undo |
| `REFCLOSE` |  | Tapusin ang pag-e-edit ng block sa lugar: i-save ito, o itapon ang mga pagbabago |
| `REFEDIT` |  | I-edit ang block sa lugar kung nasaan ang reference nito, habang kumukupas ang natitirang drawing; nagse-save ang REFCLOSE nito |
| `REGEN` | `RE` | Muling buuin ang iginuhit sa tab na ito mula sa drawing |
| `REGENALL` | `REA` | Muling buuin ang iginuhit sa bawat tab, pane at bukas na drawing |
| `REGION` | `REG` | REGION (REG): gumawa ng flat areas (regions) mula sa closed objects, o mula sa lines, arcs at polylines na nagsasara ng loop dulo-sa-dulo. Pagsasamahin ng UNION, SUBTRACT at INTERSECT ang regions, at ibibigay ng MASSPROP ang section properties nila. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | I-register ang ilang scan: ilagay sila sa iisang frame sa pamamagitan ng pinilling pares ng punto o targets, pinuhin gamit ang ICP, i-export bilang iisang LAS o E57 |
| `REINIT` |  | I-reload ang aliases file mo |
| `RENAME` | `-RENAME`, `REN` | Palitan ang pangalan ng layer o block (susunod ang bawat object o reference) |
| `REVCLOUD` | `RC` | Revision cloud: pabilugin ang rectangle, polygon, freehand path o object (RC) |
| `REVOLVE` | `REV` | Paikutin ang closed 2D objects sa isang axis bilang solids (3D) |
| `ROTATE` | `RO` | Paikutin ang mga object sa paligid ng base point |
| `SAMPLES` | `SAMPLE` | Buksan ang isa sa sample drawings ng CadCraft (isang architectural set, isang as-built) para matuto mula rito |
| `SAVE` | `QSAVE` | I-download ang drawing sa format nito (DWG o DXF) |
| `SAVEAS` |  | I-download ang drawing bilang DWG o DXF: piliin kung alin |
| `SAYSEL` |  | Sabihin kung ano ang napili, isang pangungusap bawat isa. |
| `SCALE` | `SC` | I-scale ang mga object sa paligid ng base point |
| `SCALELISTEDIT` | `SCALELIST` | Magdagdag, mag-edit at magtanggal ng sariling scales ng drawing; lumalabas sila sa viewport at plot scale lists at naka-save sa file (SCALELIST) |
| `SCANALIGN` | `SCL` | Ihanay ang na-scan na sheet sa dalawang punto: ilipat, paikutin at, kung pipiliin mo, i-scale. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Ipasok ang na-scan na drawing: PNG, JPEG o TIFF (isang pahina o lahat ng pahina ng multi-page file) o PDF page na larawan. |
| `SCANCLEAN` | `SCC` | Gawing itim at puti ang na-scan na sheet at alisin ang mga batik. |
| `SCANCROP` | `SCR` | I-crop ang na-scan na sheet sa isang window. |
| `SCANDESKEW` | `SCD` | Hanapin ang anggulo ng mahahabang linya ng na-scan na sheet at ituwid ang sheet kapag tinanggap mo ang anggulo. |
| `SCANERASE` | `SCE` | Burahin ang isang area ng na-scan na sheet: rectangle, polygon o lasso. |
| `SCANINFO` | `SCI` | Ipakita ang orihinal na file ng na-scan na sheet at ang mga hakbang na ginawa mula noon. |
| `SCANSCALE` | `SCS` | I-scale ang na-scan na sheet: pumili ng dalawang punto dito at i-type ang totoong distansya sa pagitan nila. |
| `SCANTRACE` | `SCT` | I-trace ang na-scan na sheet papunta sa lines at arcs sa bagong layer, sa tolerance na itatakda mo. Nananatiling raster ang teksto at hatching. |
| `SELECT` |  | Pumili ng mga object ngayon (para sa P, Previous, sa susunod na command) |
| `SELECTALL` | `AI_SELALL` | Piliin ang bawat object na maaari mong i-edit sa tab na ito (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Piliin ang bawat object na katulad ng pinili mo: parehong uri, layer at kulay (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Ipinapakita ang Sheet Set panel: sheets mula sa maraming drawing, nakanumero, pina-publish bilang iisang PDF. |
| `SHORTCUTS` | `KEYS` | Bigyan ang anumang command ng sarili mong key (Ctrl o Alt na may letra, o libreng function key), na itinatabi sa browser o desktop app na ito. |
| `SHXFONTS` | `SHX` | Bigyan ang CadCraft ng SHX fonts mula sa folder o files, para gumuhit gamit sila ang mga text style na nagbabanggit nito (list, remove, reverse) |
| `SKETCHFIX` | `SKF` | Gumuhit ng freehand strokes; ang bawat isa ay nagiging malinis na line, circle, arc, rectangle o polyline, naka-square at nakadugtong sa iba. |
| `SKETCHLIVE` | `SKL` | Mag-sketch gamit ang panulat: ang bawat stroke ay nagiging tumpak na line, circle, arc o rectangle habang iniaangat mo ang panulat, nakadikit sa drawing, may laking maa-type sa ibabaw. |
| `SPLINE` | `SPL` | Gumuhit ng spline sa mga punto (o gamit ang control polygon), o gawing spline ang polyline |
| `SPLINEDIT` | `SPE` | I-edit ang spline: fit points, control points at weights, buksan o isara ito, i-reverse, o gawing polyline |
| `SPLIT` |  | Hatiin ang drawing area sa panes (gaya ng VPORTS sa model; pati mula sa sheet) |
| `STEELMEMBER` | `SMEMBER` | Steel member sa 3D mula sa standard section: dalawang punto (beam) o base point at taas (Column) |
| `STLOUT` |  | I-export ang 3D model bilang STL (millimeters) |
| `STRETCH` | `S` | Stretch: i-drag ang crossing window sa ibabaw ng mga dulo para gumalaw; ang nasa loob ay gumagalaw, ang iba ay nananatili (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Text styles: ang font, taas, lapad at slant na makukuha ng bagong teksto (ang dialog; -STYLE sa command line) |
| `SUBTRACT` | `SU` | Alisin ang solids mula sa iba (3D), o 2D regions mula sa regions |
| `SWBOUT` | `SWMACRO` | I-download ang macro para sa SolidWorks (.swb) na muling bumubuo ng model bilang iisang constrained sketch |
| `SWEEP` |  | I-sweep ang closed 2D objects sa kahabaan ng path (line, polyline, arc, circle) bilang solids (3D) |
| `TABLE` | `TB` | Gumawa ng table: rows at columns, o mula sa spreadsheet cells sa clipboard o CSV file |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | I-edit ang table: mag-type sa cell, magpasok at magtanggal ng rows at columns, sizes, merged cells, alignment |
| `TABLEEXPORT` |  | I-save ang ipinapakita ng table bilang CSV file |
| `TABLEPASTE` | `PASTETABLE` | Gumawa ng table mula sa spreadsheet cells sa clipboard |
| `TABLESTYLE` | `TS` | Table styles: taas ng teksto, alignment, margin at borders para sa title, header at data rows |
| `TAGS` |  | Tags sa block references: magtakda ng tag (uri, pinapayagang values, blocks na sakop nito), itakda ito sa napiling references, at ilista sila bilang schedule na maaari mong i-save bilang CSV |
| `TEXT` | `DT`, `DTEXT` | Single-line text; nagsisimula ng susunod na linya ang Enter |
| `TEXTEDIT` | `ED`, `DDEDIT` | I-edit ang teksto sa lugar: pumili ng teksto (o i-double-click ito) (ED) |
| `TEXTMASK` | `TMASK` | Maglagay ng background mask sa likod ng mga teksto (background ng drawing o kulay), o alisin ito. |
| `TEXTTOFRONT` |  | Dalhin sa harap ng lahat ng iba ang lahat ng teksto, dimension at leaders. |
| `TOOLBAR` |  | Piliin kung ano ang ipinapakita ng toolbar buttons: icons at teksto, icons lang, o teksto lang (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Ilagay ang toolbar sa itaas, ibaba, kaliwa o kanan ng window |
| `TOOLBARROWS` |  | Piliin kung ilang rows ang gagamitin ng toolbar: balutin para magkasya, 2, o 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Gawing standard o compact ang mga bar sa itaas ng drawing |
| `TOUCHCROSSHAIR` | `TCX` | Offset crosshair para sa pagguhit gamit ang daliri: isang daliri ang gumagalaw sa crosshair na nasa itaas at sa gilid nito, para hindi matakpan ng daliri ang pick point. Ang pag-angat ng daliri ay walang pinipili; ang Click button o tap gamit ang pangalawang daliri ay pumipili sa crosshair, at ang paghawak sa Click habang gumagalaw ay nagd-drag. Ang mahabang pindot o ang Enter button ay Enter. Ang dalawang daliri ay nagpa-pan at nag-zoom. Mga opsyon: ON, OFF, Auto (naka-on lang kung ang daliri ang tanging pointer), Distance, Side. |
| `TOUR` | `TUTORIAL` | Ulitin ang anim na hakbang na tour ng unang drawing |
| `TRIM` | `TR` | Putulin ang mga object pabalik sa lugar kung saan sila tinatawid ng iba: mag-click sa isang bahagi, i-drag sa ilan, o Shift+click para pahabain |
| `TRIMEXTENDMODE` |  | Paano nagsisimula ang TRIM at EXTEND: 1 Quick (bawat object ay cutting edge o boundary), 0 Standard (pumili muna ng edges) |
| `TTR` |  | Circle na tangent sa dalawang object, may radius na ibibigay mo (pareho sa CIRCLE T) |
| `TURNLEFT` |  | Paikutin ang view ng 90° pakaliwa (counter-clockwise): UCS Z -90, at susunod ang view. Walang gumagalaw sa drawing. |
| `TURNRIGHT` |  | Paikutin ang view ng 90° pakanan (clockwise): UCS Z 90, at susunod ang view. Walang gumagalaw sa drawing. |
| `TURNWORLD` |  | Bumalik sa world: UCS World, at muling pahalang ang view. |
| `TXT2MTXT` | `T2M` | Pagdugtungin ang single-line texts sa iisang paragraph text, mula itaas pababa. |
| `UCS` |  | Sarili mong coordinate system: origin at X axis (origin, Z angle, 3point, OBject, Previous, World, NAmed). Ang mga punto na tinatype mo, ortho, polar tracking, grid at bagong teksto ay sumusunod dito; umiikot ang view para pahalang ang X axis nito. Walang gumagalaw sa drawing. |
| `UNDO` | `U` | I-undo ang huling command |
| `UNGROUP` |  | UNGROUP: tanggalin ang groups. Pumili ng mga object ng groups, o magbigay ng Name. Nananatili sa drawing ang mga object. |
| `UNION` | `UNI` | Pagsamahin ang solids sa iisa (3D), o 2D regions sa iisang region |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Ipakita muli ang bawat object na itinago ng ISOLATEOBJECTS o HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Paano ipinapakita at tinatype ang mga haba: decimal, feet at inches, fractions (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Kalkulahin muli ang fields, at piliin kung kailan sila kusang nag-a-update |
| `USDOUT` |  | I-export ang 3D model bilang USD (.usda text, .usdc binary o .usdz package) |
| `VIEW` | `-VIEW`, `V` | Standard na 3D views, perspective o parallel (3D) |
| `VIEWBASE` | `FLATSHOT` | Maglagay ng flat na 2D view ng 3D solids (front, top, side o isometric, nakadashed ang hidden lines) sa sheet o sa model |
| `VIEWLABEL` | `VL` | Pamagat ng view sa sheet na nagpapakita ng pangalan ng view ng viewport nito, at nagbabago kasabay nito. |
| `VOICE` |  | I-on o i-off ang binibigkas na command. Kinikilala ang mga ito sa computer na ito. |
| `VPCLIP` |  | Ini-clip ang sheet viewport sa closed object o iginuhit na polygon; ginagawa itong rectangle muli ng Delete |
| `VPLAYER` |  | I-freeze o i-thaw ang layers sa ilang viewport lang (Freeze, Thaw, Reset), at piliin kung aling layers ang unang ifi-freeze ng bagong viewports (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Hatiin ang drawing area sa panes, bawat isa ay may sariling view (sa sheet: viewport, gaya ng MVIEW) |
| `VPVIEW` |  | Itakda kung ano ang ipinapakita ng viewport: pumili ng window sa model |
| `VSCURRENT` | `VS`, `SHADEMODE` | Visual style ng 3D view: shaded, edges, hidden line, wireframe, X-ray |
| `WALL` | `WA` | Gumuhit ng 2D walls gaya ng polyline. Nagdudugtong sila, at may dalang pinto at bintana. |
| `WALLARC` | `WARC` | Gumuhit ng arc ng walls. Tuwid ang plan walls, kaya iginuguhit ang arc bilang maiikling tuwid na walls (15 degrees bawat isa) na nagdudugtong. |
| `WALLDELSEG` |  | Burahin ang bahagi ng wall sa pagitan ng dalawang punto. Ang natitira ay nananatiling isa o dalawang walls. |
| `WALLDIM` |  | I-type ang bagong value para sa dimension: ang wall sa malayong dulo nito ay gumagalaw nang patayo sa sarili nito, ang wall sa unang dulo ay nananatili, at sumusunod ang mga walls na nakadugtong dito. |
| `WALLDISJOIN` |  | Pumili ng wall malapit sa isang dulo para hindi payagan ang pagdugtong doon: iginuguhit nang parisukat ang dulo at walang sumusunod dito. Pumili muli para payagan. |
| `WALLGRID` |  | I-lock ang wall sa grid line: kasama nito, o ang isang dulo ay nasa kanya. Ilipat ang line gamit ang GRIDMOVE at susunod ang wall. |
| `WALLHOLD` |  | Ihanay at i-lock: nananatili ang wall sa lugar nito laban sa ibang wall (sa line nito, o sa distansyang mayroon ito). Kapag gumalaw ang isa, susunod ang isa. |
| `WALLHOLDDIM` |  | I-lock ang distansya sa pagitan ng dalawang parallel walls. Kapag gumalaw ang isa, susunod ang isa para mapanatili ito. |
| `WALLHOLDS` |  | Ilista ang mga lock sa walls. |
| `WALLJOINS` |  | Bigyan ang bawat wall ng mas lumang drawing ng id nito at itabi ang mga pagdugtong sa pagitan nila. Nangyayari rin ito sa unang pagbabagong gagawin mo. |
| `WALLJOINSTYLE` |  | I-click ang sulok kung saan nagtatagpo ang dalawang walls dulo-sa-dulo para baguhin kung paano ito iginuguhit: mitre, butt, square off. Pinapalipat ng T kung aling wall ang dumadaan. |
| `WALLOFFSET` | `WO` | Ilipat ang wall nang parisukat sa sarili nito sa isang distansya (sumusunod ang mga walls na nakadugtong dito), o gumawa ng kopya sa distansyang iyon. |
| `WALLPICK` |  | Gumawa ng walls sa line o polyline sa drawing, kasama ang mga line na nakadugtong dito kung sasabihin mong Yes. |
| `WALLPOLY` | `WP` | Gumuhit ng walls sa paligid ng regular na polygon na 3 hanggang 64 na gilid, gaya ng POLYGON. |
| `WALLRECT` | `WR` | Gumuhit ng apat na nakadugtong na walls mula sa dalawang magkasalungat na sulok, gaya ng RECTANG. |
| `WALLREJOIN` |  | Gawing isang wall muli ang dalawang bahagi ng wall. Nananatili sa drawing ang una sa lugar nito. |
| `WALLROT` |  | Gumuhit ng apat na nakadugtong na walls bilang rectangle na napaikot sa anumang anggulo: ang unang gilid, saka kung gaano kalayo palabas. |
| `WALLSPLIT` | `WS` | Hatiin ang wall sa dalawa sa isang punto o kung saan tumatawid ang ibang wall. Nananatiling nakadugtong ang mga bahagi maliban kung humiling ka ng puwang o malayang dulo. Sumasama sa bahagi nila ang pinto at bintana. |
| `WALLSPLITGAP` |  | Hatiin ang wall na may puwang: i-type ang puwang, pumili ng wall, saka ang punto. May malayang dulo ang mga bahagi at maaaring muling pagdugtungin. |
| `WALLSTRETCH` |  | I-stretch gamit ang window: gumagalaw ang mga dulo ng wall sa loob nito, gumagalaw nang buo ang mga walls na ganap na nasa loob, at dumudulas kasama nila ang mga walls na nakadikit sa gilid nila. |
| `WALLTAN` |  | Ituloy ang wall gamit ang arc na umaalis dito kasama ng wall (iginuguhit bilang maiikling tuwid na walls). |
| `WALLTRACE` |  | Gumawa ng walls sa paligid ng pinakamaliit na closed area ng lines at walls sa paligid ng punto na i-click mo. |
| `WALLUNHOLD` |  | Alisin ang lock sa wall (at ang lock ng ibang walls dito). |
| `WBLOCK` | `W`, `-WBLOCK` | Isulat ang block, ilang object o ang buong drawing sa bagong DWG o DXF file (W) |
| `WEDGE` | `WE` | Isang wedge: dalawang sulok at taas; dumadausdos ito palayo sa unang sulok (3D) |
| `WHEREAMI` | `WHERE` | Sabihin kung nasaan ang cursor. |
| `WHOHAS` |  | Sinasabi kung sino ang may bukas na drawing. Nagtatabi ang CadCraft Studio ng maliit na lock file sa tabi ng bawat bukas na drawing (Plan.dwg.cclock: sino, mula kailan, aling bersyon) at inaalis ito kapag nagsara. Mga opsyon: Current (ang bukas na drawing), File (pumili ng isa), FOlder (bawat drawing sa folder na bukas sa kahit saan; pinapayagan din nito ang Studio na magtago ng lock files sa folder na iyon), Path (i-type ang isa), Name (ang pangalang nakikita ng iba). Ang lock na hindi na-refresh sa loob ng limang minuto ay sinasabing stale. Hindi available sa browser. |
| `WINDOW` | `WN` | Maglagay ng bintana sa pader. |
| `XATTACH` | `XA` | I-link ang ibang DWG o DXF sa drawing na ito, naka-read-only (naglilista at nagre-reload sila ang XREF) |
| `XCLIP` | `XC` | I-clip ang block references at naka-link na drawings sa rectangle o polygon, o alisin ang clip. |
| `XLINE` | `XL` | Construction line, walang hanggan sa dalawang direksyon: sa dalawang punto, pahalang, patayo, sa anggulo, humahati sa anggulo, o naka-offset sa isang line. |
| `XREF` | `XR`, `-XREF` | Naka-link na drawings (external references): ilista, ikabit, i-reload, i-bind, i-detach |
| `ZOOM` | `Z` | Extents, o isang window |
