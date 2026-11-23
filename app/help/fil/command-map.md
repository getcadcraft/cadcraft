---
title: Mapa ng command: ano ang i-type
summary: Bawat command ng CadCraft kasama ang maikling pangalan nito, A hanggang Z, na galing mismo sa programa, at ang mga gawi mula sa ibang drafting program na naiiba.
keywords: command map, commands, aliases, maikling pangalan, galing sa ibang program, listahan ng command, ano ang i-type, erase, trim, katumbas, pagkakaiba
from: 9426856f
---

Kinukuha ng CadCraft ang mga pangalan ng command at maikling pangalan na alam ng mga tao mula sa ibang drafting program: i-type ang `L` para sa linya, `TR` para mag-trim, `E` para mag-erase. Kaya walang talahanayan ng pagsasalin na kailangang pag-aralan para sa karamihan sa kanila: ang pangalang alam mo ay siya ring pangalan dito. Ang listahan sa ibaba ay bawat command na mayroon ang CadCraft, galing mismo sa programa. Inuulit ng {{key:Enter}} ang huli; ipinapakita ng `HELP` sa command line ang parehong listahan.

Ang iilan na hindi magkapareho, o hindi pa nagagawa:

- Ang **Save** ay nagda-download ng kopya sa browser ({{cmd:SAVE}}, {{cmd:SAVEAS}}); sa CadCraft Studio, isinusulat nito ang file. Tingnan ang [Mula sa ibang drafting software](topic:coming-from).
- Ang **PLOT** ay gumagawa ng PDF (at PNG at SVG din), na may plot style table; walang page setup manager.
- Ang **DIMSTYLE** at **PEDIT** ay nagawa na; ang **PEDIT** ay walang opsyong Edit-vertex (ginagawa iyon ng mga grip).
- Ang **TABLE** ay hindi pa nagagawa; ang {{cmd:XREF}}, {{cmd:SPLINE}} at {{cmd:WBLOCK}} ay nagawa na.
- Ang sariling command ng isang routine (AutoLISP `C:NAME`) ay lumalabas pagkatapos mo itong i-load gamit ang {{cmd:APPLOAD}}; hindi sila nakalista rito.

## Lahat ng command (402)

| Command | Maikling pangalan | Ano ang ginagawa nito |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Iikutan ang 3D view gamit ang kaliwang button |
| `ACCESS` | `AX` | I-on o i-off ang pagguhit nang walang paningin: mga resultang binibigkas sa screen reader mo, keyboard cursor sa drawing, mga tunog ng snap at mga binibigkas na command. |
| `ALIASEDIT` |  | I-edit ang command alias sa isang text file (ang pamilyar na format na L, *LINE) |
| `ALIGN` | `AL` | Ilipat at ikutin ang mga object para mapunta ang mga source point sa mga destination point (isa, dalawa o tatlong pares), at i-scale ang mga ito kung gusto mo |
| `ALIGNPANEL` | `ALP` | Buksan ang panel na Align and distribute |
| `ALIGNTO` |  | Ihanay ang kaliwa, gitna, kanan, itaas, gitna o ibabang gilid ng mga napiling object, sa selection, sa una o huling object na pinili, o sa isang punto |
| `ANNOALLVISIBLE` | `ANNOALL` | Ipakita ang annotative na object sa bawat scale, o sa lugar lamang kung nasa listahan nila ang scale ng viewport (o ng drawing) |
| `ANNOSCALE` | `CANNOSCALE` | Itakda ang annotation scale ng drawing: nire-resize ang annotative na teksto at dimension para mag-print sa parehong laki |
| `APPLOAD` | `AP` | I-load ang mga application: mga routine ng LISP (.lsp) at ang mga dialog file nila (.dcl); ang Startup Suite (AP) |
| `ARC` | `A` | Arko: 3-Point, Start/Center/End, Start/Center/Angle, Start/Center/Length, Start/End/Angle, Start/End/Direction, Start/End/Radius, Center/Start/End, Center/Start/Angle, Center/Start/Length, Continue |
| `AREA` | `AA` | Lawak at perimeter ayon sa mga punto o ng isang object; pinapanatili ng Add at Subtract ang tumatakbong kabuuan (AA) |
| `ARRAY` | `AR` | Mga kopya sa mga row at column, o sa paligid ng isang center (AR) |
| `ARRAYASSOCIATIVITY` |  | Itinatakda kung ang mga command ng ARRAY ay gumagawa ng array na nananatiling maaaring i-edit (1) o simpleng kopya (0) |
| `ARRAYCLOSE` |  | Tinatapos ang pag-edit sa mga source object ng array |
| `ARRAYEDIT` |  | Binabago ang array na ginawa gamit ang opsyong Associative: bilang, espasyo, source object, isang item |
| `ARRAYPATH` |  | Mga kopya ng object sa kahabaan ng linya, arko, polyline o ibang kurba |
| `ARRAYPOLAR` |  | Mga kopya sa paligid ng center point |
| `ARRAYRECT` |  | Mga kopya sa mga row at column |
| `ASBUILT` | `ASB` | Binabasa ng ASBUILT ang as-built na mga punto na sinukat ng crew (CSV / TXT, gaya ng isinusulat ng EXPORTPOINTS) at ikinukumpara ang mga ito sa mga punto ng drawing: sa loob o labas ng tolerance, hindi nasukat, sobra. Minamarkahan ang mga ito sa layer na AS-BUILT at nagda-download ng CSV report. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Magtakda ng attribute (isang tag na humihingi ng halaga ang isang block) na ilalagay sa isang block (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | I-edit ang mga halaga ng attribute ng isang block reference sa command line, isa-isa (pinapanatili ng Enter ang halaga) |
| `ATTSYNC` |  | Ihanay ang mga reference ng block sa mga attribute definition nito: idinadagdag ang mga bago gamit ang default nila, binabawasan ang mga inalis, at nire-reset ang mga puwesto at teksto; pinapanatili ang mga halaga |
| `AUDIT` |  | Sinusuri ang bukas na drawing para sa pinsala: mga numerong hindi finite, object na walang sukat, nawawalang layer, block, style at linetype, mga block na naglalaman ng sarili nila, nagbabahaging id, sirang dimension at hatch. Inililista ang nakita ayon sa uri at nagtatanong bago ayusin; isang hakbang ng undo ang pag-aayos. |
| `AUNITS` | `ANGUNITS` | Paano ipinapakita at tinatype ang mga anggulo: decimal degrees, degrees-minutes-seconds o bearing gaya ng N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | I-on o i-off ang autocomplete ng drawing, o ilista kung ano ang iminumungkahi ng mga pattern ng drawing ngayon. |
| `AUTOCONSTRAIN` |  | Magdagdag ng coincident, horizontal at vertical na constraint kung saan malapit na ang geometry |
| `AUTODIM` | `ADIM` | Mag-dimension ayon sa mga patakaran: kabuuang laki, kadena sa mga gilid, mga bukas, diyametro ng butas at agwat ng grid, nang hindi inuulit ang nakadimension na |
| `AUTOSHEET` | `ASH` | Naglalatag ng mga sheet nang mag-isa: pumipili ng papel at standard na scale at inilalagay ang bawat view kasama ang caption at title block. |
| `BATTMAN` |  | Block attribute manager: pagkakasunod, tag, prompt, default at mode ng mga attribute ng block, pagkatapos ma-update ang mga reference nito |
| `BCLOSE` |  | Isara ang block editor: i-save ang block o itapon ang mga pagbabago |
| `BCONVERT` |  | Hinahanap ng BCONVERT ang geometry na inuulit at ginagawa itong mga block reference. Piliin ang mga object na inuulit: bawat ibang hanay ng object sa bukas na espasyo na pareho ang geometry, nakalipat at nakaikot sa anumang anggulo, ay hahanapin, at kapag naka-on ang Mirrored o Scaled, kasama rin ang mga salamin na imahe at kopya sa ibang laki. Bigyan ng pangalan ang bagong block at base point; ang selection at bawat kopya ay magiging reference dito, bawat isa may sariling rotation at scale. O piliin ang Block at pangalanan ang umiiral na block para hanapin ang mga nakakalat na kopya ng mga object nito. Dapat pareho ang layer, kulay, linetype at lineweight ng kopya maliban kung nakatakda ang Properties sa Ignore. Hindi ginagalaw ang mga object sa naka-lock na layer. Isang hakbang ng undo. |
| `BEDIT` | `BE` | Block editor: i-edit ang mga object at attribute ng block; ang BCLOSE ay nagse-save (BE) |
| `BLEND` |  | BLEND: isang spline sa pagitan ng mga dulo ng dalawang bukas na kurba, na pinipili malapit sa mga dulo para pagdugtungin. CONtinuity: Tangent ay sumusunod sa dalawang direksyon, Smooth ay sumusunod din kung paano sila kumukurba. |
| `BLOCK` | `B`, `BMAKE` | Gumawa ng block mula sa mga object (nagiging isang reference sila) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: bawat reference ng isang block ay nagiging reference ng iba, sa parehong lugar at may parehong scale at rotation. Pinapanatili ang mga halaga ng attribute na mayroon ang parehong block. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | Ipinapakita ng BLOCKSPALETTE ang panel na Blocks na may cursor sa filter nito. Ipinapakita ng panel ang larawan ng bawat block (ang pinakahuling nailagay ang nauuna), bilang listahan o grid; i-click ang larawan o i-drag ito sa drawing para ilagay ang block gamit ang INSERT. Sa ilalim ng Libraries, magdagdag ng sarili mong DWG o DXF file: nakalista ang mga block nito kasama ang mga larawan at kinokopya sa drawing na ito kapag naglagay ka ng isa. Sa CadCraft Studio, maaari ring idagdag ang folder ng mga drawing, at naaalala ang mga file at folder. |
| `BOMEDIT` | `BOMCOLUMNS` | Mga column, pagpapangkat, pag-aayos, pamagat, kabuuan at komento ng talahanayan ng bill of materials |
| `BOMEXPORT` |  | I-save ang talahanayan ng bill of materials bilang .csv file |
| `BOMTABLE` | `BOM` | Isang buhay na talahanayan ng bill of materials ng isang zone, o ng buong drawing |
| `BOMUPDATE` |  | I-update ngayon ang bawat talahanayan ng bill of materials, pati ang mga naka-freeze |
| `BOMZONE` | `BZONE` | Isang pinangalanang bahagi ng drawing para sa bill of materials: dalawang sulok, isang polygon, o ang outline ng isang saradong object |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): pumili ng punto sa loob ng saradong area at makakakuha ng saradong polyline sa paligid nito. Nananatiling arko ang mga arko. Ang Islands ay nag-o-outline din ng mga area sa loob nito. |
| `BOX` |  | Isang box: dalawang sulok at isang taas (3D) |
| `BPARAMETER` | `BPARAM` | Hindi pa nagagawa: pagdaragdag ng parameter (gaya ng Visibility) sa isang block. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Block parameters: mga pinangalanang parameter na may formula, at maraming visibility parameter sa iisang block. Gumagana sa block editor (italaga ang mga napiling object sa isang state) at sa napiling reference (sarili nitong mga halaga at state). |
| `BREAK` | `BR` | Putulin ang linya, arko, bilog o polyline sa pagitan ng dalawang punto (BR) |
| `BREAKATPOINT` |  | Hatiin ang linya, arko o polyline sa dalawa sa isang punto |
| `BREAKLINE` |  | Gumuhit ng linyang may simbolo ng putol; naaalala ang laki nito at ang extension lampas sa mga dulo. |
| `BREPLACE` |  | BREPLACE ay pinapalitan ang isang block ng iba. Napili: pumili ng block reference at pangalanan ang block na gagamitin sa halip. All: pangalanan ang block at ang kapalit nito, at magbabago ang bawat reference sa bawat espasyo at sa loob ng ibang block. Nananatili sa puwesto, scale, rotation at layer nito ang reference, at pinapanatili ang mga halaga ng attribute na mayroon ang parehong block; ang mga halagang walang puwesto sa bagong block ay itatapon at pangangalanan. |
| `BSEARCH` |  | Hinahanap ng BSEARCH ang mga block. Name: bahagi ng pangalan ng block, o pattern na may * at ?. Attribute: isang halaga (o TAG=value) na hawak ng mga attribute ng reference. Geometry: pumili ng mga object o isang block reference, at ililista ang mga block na halos 85% ang pagkakahawig ang hugis, pinakamahusay muna; hindi binibilang ang laki, rotation at mirroring. Ang mga reference na nakita sa bukas na espasyo ay napipili, handa para sa susunod na command. |
| `BURST` |  | I-explode ang mga block reference at panatilihin ang sinasabi ng mga attribute nila: bawat halaga ay nagiging teksto sa layer ng attribute. |
| `BVHIDE` | `BVH` | Sa block editor: itago ang mga object sa kasalukuyang visibility state. |
| `BVSHOW` | `BVSH` | Sa block editor: ipakita ang mga object na tinatago ng kasalukuyang visibility state (nakikita silang malabo para mapili). |
| `BVSTATE` | `BVS` | Sa block editor, sa block na may visibility state: lumipat sa isang state, o magdagdag, magpalit ng pangalan o magbura nito. |
| `CAL` |  | Kalkulahin ang haba o numero: + − * / at mga bracket, gaya ng pag-type mo kahit saan |
| `CENTERLINE` | `CL` | Gitnang linya sa pagitan ng dalawang linya: nasa gitna sa pagitan nila, o kasama ng bisector kapag nagtagpo sila (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Center mark: krus sa gitna ng bilog o arko, na may mga center line hanggang lampas dito nang kaunti (CM) |
| `CHAMFER` | `CHA` | Gawing pahilis ang sulok sa pagitan ng dalawang linya (D dalawang distansya, A haba at anggulo, P bawat sulok ng polyline) |
| `CHSPACE` |  | CHSPACE: ilipat ang mga object sa pagitan ng sheet at ng model sa pamamagitan ng viewport. Ini-scale at ini-ikot sila para magmukhang pareho mula sa kabilang panig. Sa sheet, napupunta sila sa model; habang nagtatrabaho ka sa pamamagitan ng viewport (MSPACE), napupunta sila sa sheet. |
| `CIRCLE` | `C` | Center at radius, diyametro, 2 o 3 punto |
| `CLASS` |  | Ilagay ang mga napiling object sa isang class, o kapag walang napili, itakda ang aktibong class (ang ? ay naglilista sa kanila) |
| `CLASSES` | `CLS` | Ang panel ng Classes: inaayos ng class ang mga object sa iba't ibang layer; ipakita, itago at bigyan sila ng estilo, at i-override sila sa bawat viewport (CLS) |
| `COMMANDLINE` | `CMDLINE` | I-dock o lumutangin ang command line, gawin itong isang linya, itakda ang mga linya ng history nito, o buksan ang history (F2) |
| `COMPARESETTINGS` | `CMPSET` | Ihambing ang mga dimension style, text style, layer, sheet o unit: dalawa sa drawing na ito, o ang drawing na ito laban sa ibang bukas, at kopyahin ang isang halaga. |
| `CONSTRAINTBAR` | `CBAR` | Ipakita o itago ang mga constraint bar (Showall / Hideall, o bawat object) |
| `COPY` | `CO`, `CP` | Kopyahin ang mga object, kasing dami ng pag-click mo |
| `COPYBASE` |  | Kopyahin ang mga object sa clipboard na may base point na pipiliin mo |
| `COPYCLIP` |  | Kopyahin ang mga object sa clipboard (Ctrl+C); inilalagay sila ng PASTECLIP |
| `COUNT` | `BCOUNT` | Bilangin ang mga block reference: pumili ng isa para mapili at mabilang ang bawat reference ng block nito |
| `COUNTTABLE` |  | Maglagay ng talahanayan ng bilang ng block |
| `CREDITS` |  | Ilalagay ang mga credit ng Library sa drawing bilang talahanayan. Patakbuhin muli para i-update ang talahanayan mula sa mga item sa drawing ngayon. |
| `CURSORSIZE` |  | Laki ng crosshair: ang 100 ay tumatakbo mula gilid hanggang gilid ng drawing (Settings › Cursor › Full screen) |
| `CUTCLIP` |  | I-cut ang mga object papunta sa clipboard (Ctrl+X): kopyahin, pagkatapos burahin |
| `CYLINDER` | `CYL` | Isang silindro: center, radius at taas (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Ilista ang mga block, ang mga attribute nila at ang property ng object bilang talahanayan sa drawing o CSV file |
| `DATALINK` | `DL` | Isang talahanayan mula sa CSV file na naaalala ang file, kaya mababasa itong muli |
| `DATALINKUPDATE` | `DLU` | Basahin muli ang file ng data link at punuan muli ang mga talahanayan nito |
| `DCALIGNED` | `DCALI` | Dimensional constraint: totoong distansya sa pagitan ng mga punto, isang punto at linya, o dalawang linya |
| `DCANGULAR` | `DCANG` | Dimensional constraint: anggulo sa pagitan ng dalawang linya, o ng isang arko |
| `DCCONVERT` |  | Gawing dimensional constraint ang mga dimension na iginuhit sa constrainable na geometry |
| `DCDIAMETER` | `DCDIA` | Dimensional constraint: diyametro ng bilog o arko |
| `DCDISPLAY` |  | Ipakita o itago ang mga dimensional constraint sa drawing |
| `DCHORIZONTAL` | `DCHOR` | Dimensional constraint: pahalang na distansya |
| `DCLINEAR` | `DCLIN` | Dimensional constraint: pahalang o patayong distansya, mula sa kung saan mo ilalagay |
| `DCRADIUS` | `DCRAD` | Dimensional constraint: radius ng bilog o arko |
| `DCVERTICAL` | `DCVER` | Dimensional constraint: patayong distansya |
| `DELBLOCKS` |  | Burahin ang mga block: bawat reference (pati ang nakapaloob, sa bawat sheet) at ang mga kahulugan |
| `DELCONSTRAINT` | `DELCON` | Alisin ang bawat constraint (geometric at dimensional) sa mga object na pipiliin mo |
| `DELOPENING` |  | Alisin ang pinto o bintana sa pader. |
| `DESCRIBE` | `DESC` | Sabihin kung ano ang laman ng drawing: ilang object, anong uri, gaano kalaki, ano ang napili. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Burahin ang selection (Esc) |
| `DETAILS` | `DET` | Sarili ng iyong kompanya na mga detalye, hinanap para sa iginuguhit mo: hanapin, magdagdag ng block, ilista, alisin, i-on o i-off ang mga alok. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Gumuhit ng diagram mula sa teksto: Mermaid flowchart, PlantUML component diagram, D2, listahang from-to o draw.io XML, bilang mga block at konektor na maaari mong i-edit |
| `DIMALIGNED` | `DAL`, `DIMALI` | Totoong distansya sa pagitan ng dalawang punto |
| `DIMANGULAR` | `DAN`, `DIMANG` | Anggulo sa pagitan ng dalawang linya, ng isang arko, o sa tatlong punto |
| `DIMARC` | `DAR` | Dimension ng haba ng arko: ang distansya sa kahabaan ng arko, may simbolo ng arko (DAR) |
| `DIMASZ` |  | Setting ng dimension: Laki ng arrow |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Mga dimension na nakasalansan mula sa iisang base line |
| `DIMBREAK` | `DBREAK` | Putulin ang dimension at extension line kung saan tumatawid ang ibang object (Auto), sa pagitan ng dalawang punto (Manual), o alisin ang mga putol |
| `DIMCONSTRAINT` | `DCON` | Dimensional constraint: linear, aligned, angular, radius, diameter, convert |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Kadena ng mga dimension, bawat isa ay mula sa dulo ng huli |
| `DIMDEC` |  | Setting ng dimension: Bilang ng decimal place |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diyametro ng arko o bilog |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Palayain ang mga dimension mula sa mga object na pinagtatalian nila (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Baguhin ang teksto ng dimension (Home, New text, Rotate) o ikiling ang mga extension line (Oblique) |
| `DIMEXE` |  | Setting ng dimension: Extension lampas sa dimension line |
| `DIMEXO` |  | Setting ng dimension: Offset mula sa origin |
| `DIMGAP` |  | Setting ng dimension: Agwat sa paligid ng teksto |
| `DIMINSPECT` |  | Dimension ng inspeksyon: frame sa paligid ng halaga na may label at kung gaano kadalas sinusuri ang piyesa |
| `DIMJOGGED` | `DJO`, `JOG` | Dimension ng radius na may jog: radius na iginuhit mula sa mas malapit na punto kapag malayo ang center (DJO) |
| `DIMJOGLINE` | `DJL` | Magdagdag ng jog symbol sa dimension line na linear o aligned, para ipakita na hindi iginuhit sa tamang sukat ang distansya (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Pahalang o patayong distansya (R para sa anumang anggulo) |
| `DIMLUNIT` |  | Setting ng dimension: format ng haba (1 scientific, 2 decimal, 3 engineering, 4 architectural, 5 fractional) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinate dimension: ang X o Y na distansya ng punto mula sa origin ng UCS, sa leader (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | I-override ang mga variable ng dimension sa mga napiling dimension nang hindi binabago ang style nila; ibinabalik ng Clear ang style (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radius ng arko o bilog |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Itali ang mga punto ng dimension sa mga object, para sumunod ito at muling sumukat kapag gumalaw sila (DRE) |
| `DIMSCALE` |  | Setting ng dimension: Overall scale (laki × ito) |
| `DIMSPACE` |  | Pantay na agwat sa pagitan ng magkakahanay na dimension, sinusukat mula sa base dimension (0 ay pinapantay ang mga ito, Auto ay dalawang beses ang taas ng teksto) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Gumawa, magbago, magtakda ng kasalukuyan, magbura, mag-apply at maghambing ng mga pinangalanang dimension style (ang dialog; -DIMSTYLE sa command line) |
| `DIMTEDIT` | `DIMTED` | Ilipat ang teksto ng dimension sa kaliwa, kanan o gitna ng dimension line, o paikutin ito |
| `DIMTEXTUNIT` | `DTU` | Teksto ng dimension sa mm, cm, m o km, o sa sariling unit ng drawing: ang mga napiling dimension, kung wala, ang mga bago (DTU) |
| `DIMTXT` |  | Setting ng dimension: Taas ng teksto |
| `DIST` | `DI` | Distansya at anggulo sa pagitan ng dalawang punto |
| `DISTRIBUTE` |  | Pantayin ang espasyo ng mga napiling object, sa tabi o pataas at pababa: pantay na hakbang sa pagitan ng mga center, o pantay na agwat; nananatili ang dalawang panlabas |
| `DIVIDE` | `DIV` | DIVIDE (DIV): mga marka na humahati sa linya, arko, bilog, polyline, spline o ellipse sa pantay na bahagi. Mga punto, o kung Block, isang block sa bawat marka. |
| `DOCUMENTS` | `DOCS` | Buksan ang panel ng Documents: i-check out at i-check in ang mga drawing, mga revision, release state at approval para sa isang folder ng proyekto |
| `DOOR` | `DR` | Maglagay ng pinto sa pader. Ang gilid na iniklik mo ay ang gilid kung saan ito iikot. |
| `DRAWORDER` |  | Baguhin ang order ng pagguhit: dalhin ang mga object sa harapan, ipadala sila sa likod, o ilagay sila sa ibabaw o ilalim ng ibang object. |
| `DUPLICATE` | `DUP` | Isang kopyang gumagalaw kasabay ng pointer: i-click para ilagay (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Ang mga property ng drawing: title, author at iba pa, at sarili mong pares ng pangalan at halaga |
| `DXFOUT` |  | I-download ang drawing bilang DXF R12 (pinapanatili ng Save ang sarili nitong format) |
| `EATTEDIT` | `DDATTE` | I-edit ang mga attribute ng block reference: mga halaga, teksto at property, isang attribute sa bawat pagkakataon |
| `ELLIPSE` | `EL` | Mga dulo ng axis at ang kabilang kalahating axis |
| `ERASE` | `E`, `DELETE` | Alisin ang mga object |
| `EXPLODE` | `X` | Hatiin ang mga polyline, block at dimension sa kanilang mga bahagi |
| `EXPORT` | `EXP` | I-save ang kopya ng drawing sa uri ng file na isinusulat ng isang add-on |
| `EXPORT3D` | `3DEXPORT` | I-export ang 3D model: GLB, OBJ o STL |
| `EXPORTPOINTS` | `EXPPTS` | Isulat ang mga punto, at ang insertion point ng mga block na may isang attribute bilang deskripsyon, sa CSV o TXT file (PNEZD, PENZD o XYZ) para sa mga BIM at survey program |
| `EXTEND` | `EX` | Pahabain ang mga object para maabot ang iba: i-click malapit sa dulo, i-drag sa ilan, o Shift+click para mag-trim |
| `EXTRIM` |  | EXTRIM: pumili ng isang cutting edge, pagkatapos ng isang gilid. Lahat ng tumatawid sa edge ay ti-trim sa gilid na iyon. Ang mga piraso na mawawala ay ipinapakita habang ginagalaw mo ang pointer. |
| `EXTRUDE` | `EXT` | I-extrude ang saradong 2D na object tungo sa solid (3D) |
| `FIELD` |  | Maglagay ng field sa teksto, cell ng talahanayan o attribute: isang petsa, pangalan ng file, numero ng sheet, property ng drawing, lawak o haba ng object, o formula |
| `FILLET` | `F` | Bilugan o gawing parisukat ang sulok sa pagitan ng dalawang object (R radius, P bawat sulok ng polyline, M ilan) |
| `FIND` |  | Hanapin at palitan ang mga salita sa teksto, halaga ng attribute at teksto ng dimension |
| `FLATTEN` |  | Itakda ang taas (Z) at kapal ng mga napiling object sa 0, pati sa mga block na ginagamit nila. |
| `FLOOR` |  | Piliin ang palapag na guguhitan, magdagdag ng isa, o ilipat o kopyahin ang selection dito. |
| `FLOORLAYERS` |  | Gawing layer na pinangalanang Floor-Layer ang mga palapag, para sa file na ipapadala sa taong walang palapag. |
| `FLOORS` | `FLR` | Buksan ang panel ng Floors: pagsalansangin ang mga palapag sa iisang model space. |
| `GCCOINCIDENT` |  | Constraint: nagtatagpo ang dalawang punto, o nananatili ang isang punto sa isang object |
| `GCCOLLINEAR` |  | Constraint: nananatili sa iisang linya ang dalawang linya |
| `GCCONCENTRIC` |  | Constraint: nagbabahagi ng center ang dalawang bilog o arko |
| `GCEQUAL` |  | Constraint: nananatiling magkapareho ang haba ng dalawang linya, o ang radius ng dalawang bilog/arko |
| `GCFIX` |  | Constraint: nananatili sa puwesto nito ang isang punto o buong object |
| `GCHORIZONTAL` |  | Constraint: nananatiling pahalang ang isang linya (o dalawang punto) |
| `GCPARALLEL` |  | Constraint: nananatiling magkapareho ang dalawang linya |
| `GCPERPENDICULAR` |  | Constraint: nananatiling nasa tamang anggulo ang dalawang linya |
| `GCSYMMETRIC` |  | Constraint: nagsasalamin ang dalawang punto, linya o bilog sa isa't isa sa kabila ng isang linya |
| `GCTANGENT` |  | Constraint: nananatiling tangent ang isang linya at isang bilog o arko (o dalawa sa mga ito) |
| `GCVERTICAL` |  | Constraint: nananatiling patayo ang isang linya (o dalawang punto) |
| `GDSIN` | `GDS` | Tingnan ang layout ng IC (isang GDSII stream file): bawat layer at datatype bilang layer ng drawing, patag, sa user unit; para lamang sa pagtingin at pagsukat (lab spike) |
| `GEOMCONSTRAINT` | `GCON` | Geometric constraint: pahalang, patayo, parallel, tangent, coincident… |
| `GLBOUT` |  | I-export ang 3D model bilang GLB (glTF) |
| `GRADIENT` | `GD` | Pumupuno ng area ng gradient ng isa o dalawang kulay |
| `GRID` |  | Itakda ang grid: ang agwat ng mga linya, bawat Nth na linya bilang pangunahing linya, ON o OFF, o Auto para sumunod muli sa zoom |
| `GRIDMOVE` | `GM` | Ilipat ang linya ng grid at dalhin ang nakasabit dito: humahaba ang mga pader, gumagalaw ang mga column, bubble at tag, sumusukat muli ang mga dimension. |
| `GROUP` | `G` | GROUP (G): bigyan ng pangalang pinagsasaluhan ang mga napiling object. Ang click sa isa sa mga ito ay pipiling lahat. Ang Enter sa pangalan ay gumagawa ng hindi pinangalanang group. |
| `GROUPEDIT` |  | GROUPEDIT: baguhin ang group. Pumili ng isa sa mga object nito o ibigay ang Name nito, pagkatapos Add o Remove ng mga object, REName ito, baguhin ang Description nito, o sabihin kung ang click ay pumipili nito nang buo. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Punan ang area ng solid na fill o pattern: mag-click sa loob nito, o pumili ng saradong object (H) |
| `HATCHEDIT` | `HE` | Baguhin ang hatch: pattern, scale, anggulo, origin, at ang ugnayan nito sa boundary. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Muling gumagawa ng mga boundary polyline mula sa hatch, nakakonekta man o hindi |
| `HATCHTOBACK` |  | Ipadala ang bawat hatch sa likod ng lahat ng iba pa. |
| `HELP` | `?` | Ang listahang ito |
| `HIDEOBJECTS` |  | Itago ang mga napiling object hanggang UNISOLATEOBJECTS. Hindi naka-save kasama ng drawing. |
| `HISTORY` | `HIST` | HISTORY (HIST): ang mga bersyon ng drawing na ito — mga kopyang itinatabi sa computer na ito kapag nagse-save ang Studio, at ang mga bersyon sa cloud — para buksan, ibalik, at ikumpara sa kung ano ang nagbago, ipinapakita sa kulay. |
| `ID` |  | Mga coordinate ng isang punto |
| `IMAGE` | `IM` | Ibigay sa CadCraft ang mga file ng larawan na ginagamit ng isang drawing (ang DWG ay nag-iimbak lamang kung nasaan sila). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Maglagay ng larawan (PNG o JPEG) mula sa isang file. |
| `IMAGECLIP` | `ICL` | I-clip ang larawan sa isang rectangle o polygon, o alisin ang clip nito. |
| `IMPORT` | `IMP` | I-import ang file ng uri na binabasa ng isang add-on, papunta sa drawing na ito |
| `INSERT` | `I`, `DDINSERT` | Maglagay ng block (S scale, R rotate); F mula sa DWG/DXF file, L mula sa library |
| `INTERSECT` | `IN` | Itira lamang ang pagkakatulad ng mga solid (3D), o ang area na pinagsasaluhan ng 2D region |
| `ISODRAFT` |  | ISODRAFT: isometric drafting on o off, o dumiretso sa Left, Top o Right plane. Habang naka-on, sinusundan ng Ortho at polar tracking ang dalawang axis ng plane, iginuguhit na isometric ang grid, at may Isocircle ang ELLIPSE. |
| `ISOLATEOBJECTS` | `ISOLATE` | Ipakita lamang ang mga napiling object; nakatago ang lahat ng iba sa espasyong ito hanggang UNISOLATEOBJECTS. Hindi naka-save kasama ng drawing. |
| `ISOPLANE` |  | ISOPLANE: pumili ng isometric plane na guguhitan: Left, Top o Right. Pupunta ang Enter sa susunod, gaya ng ginagawa ng F5 habang naka-on ang isometric drafting. |
| `JOIN` | `J` | Pagdugtungin ang mga linya, arko at polyline na nagtatagpo dulo sa dulo sa iisang polyline; ang mga linya sa iisang linya ay magiging iisang linya (J) |
| `LASER` | `LASERCUT` | Buksan ang panel ng Laser: ipadala ang mga layer sa laser cutter o engraver (GRBL G-code) |
| `LASSOMODE` |  | Pindutin at i-drag ay gumuguhit ng lasso (1) o rectangle (0) |
| `LAYDEL` |  | Burahin ang isang layer at bawat object dito (sa model, sa mga sheet, at sa mga block) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Buksan ang layer manager: bawat layer sa iisang talahanayan |
| `LAYERPANEL` |  | Ipakita ang panel ng layer |
| `LAYFRZ` |  | I-freeze ang layer ng bawat object na pipiliin mo |
| `LAYGROUP` | `LG` | Pagpangkatin ang mga layer sa mga folder sa panel na Layers. |
| `LAYISO` |  | I-isolate ang mga layer ng mga napiling object (patayin ang bawat ibang layer) |
| `LAYLOCKFADE` |  | Itakda kung gaano kalabo ang mga object sa naka-lock na layer, at kung maaaring i-click ang mga ito. |
| `LAYMCUR` |  | Gawing kasalukuyan ang layer ng object na pipiliin mo |
| `LAYMRG` |  | Pagsamahin ang mga layer: lilipat ang mga object nila sa target na layer, at mawawala ang pinagsamang layer |
| `LAYOFF` |  | Patayin ang layer ng bawat object na pipiliin mo |
| `LAYON` |  | Buksan ang bawat layer |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Bagong sheet na may title block at isang viewport |
| `LAYTHW` |  | Tanggalan ng freeze ang bawat layer |
| `LAYUNISO` |  | Buksan muli ang mga layer na pinatay ng LAYISO |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Ginagawang Unicode ang teksto na tinype gamit ang lumang font ng Vietnamese (mga font na TCVN3 / ABC gaya ng .VnTime, at VNI gaya ng VNI-Times). Ipinapakita na ito nang tama; isinusulat ito nang tuluyan ng command na ito, may bilang at isang hakbang ng undo. |
| `LENGTHEN` | `LEN` | Pahabain o paikliin ang mga linya, arko at polyline: sa isang halaga, porsiyento, sa isang kabuuan, o sa pag-drag (LEN) |
| `LIBRARY` | `LIB` | Ang panel ng library: maglagay ng item, tingnan ang mga update, credit |
| `LIMITS` |  | Itakda ang limits ng drawing: ON, OFF, o ang mga kanang-ibabang at kaliwang-itaas na sulok. Kapag naka-ON ang limits, tinatanggihan ang mga punto sa labas nito |
| `LINE` | `L` | Tuwid na segment, bawat isa ay sariling object |
| `LINETYPE` | `LT`, `CELTYPE` | Ang linetype na nakukuha ng mga bagong object (ayon sa layer, ayon sa block, o pinangalanan) |
| `LINKVIEWS` | `SYNCVIEWS` | Ilipat at i-zoom ang bawat pane nang sabay (hati ang screen), para ikumpara ang dalawang drawing o revision |
| `LISPEDIT` | `VLIDE` | Binubuksan ng LISPEDIT (o VLIDE) ang LISP editor: isang window para magsulat, mag-load at sumubok ng routine. Ang Load into the drawing ay binabasa ang bawat form, gaya ng pag-load ng file gamit ang APPLOAD, at ginagawa ang mga command nito. Ang Run selection ay sinusuri ang mga napiling form, o ang form kung nasaan ang cursor. Ipinapakita ng console ang nai-print ng routine at bawat error kasama ang linya nito. Namamarkahan ang katugmang panaklong habang nagta-type ka at nag-i-indent ang Enter sa bagong linya. Ang New, Open at Save ay gumagana sa .lsp file. Ipinapakita ng mga listahan sa tabi ng teksto ang mga function na tinutukoy ng routine, ang mga tinatawag nito na wala pa sa LISP na ito, at bawat function na mayroon ito. Hindi hinaharangan ng window ang drawing, kaya maaaring humingi ng mga punto ang routine; tinatapos ng Stop o Esc ang routine na tumatakbo. |
| `LIST` | `LI`, `LS` | Ilarawan ang mga object sa history |
| `LTSCALE` | `LTS` | Ang linetype scale ng drawing (pinaparami nito ang bawat dash at puwang) |
| `LWDISPLAY` | `LWT` | Ipakita o itago ang lineweight sa screen (ang button na LWT sa status bar) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Ang lineweight na nakukuha ng mga bagong object (ayon sa layer, ayon sa block, default, o mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | mga layer ng mapa sa ilalim ng model space: ang coordinate system ng drawing, tiles, WMS, WMTS, ArcGIS, mga larawan |
| `MASSPROP` |  | MASSPROP: mga section property ng region at saradong object: lawak, perimeter, centroid, moment at product ng inertia, radii of gyration at ang mga principal axis. Eksakto para sa linya at arko. Maaaring isulat ang ulat sa text file. |
| `MATCHPROP` | `MA`, `PAINTER` | Itugma ang mga property: kopyahin ang layer, kulay at iba pa ng isang object sa iba (MA) |
| `MEASURE` | `ME` | MEASURE (ME): isang marka sa bawat ibinigay na haba sa kahabaan ng linya, arko, bilog, polyline, spline o ellipse, mula sa dulong pinakamalapit sa pinili mo. Mga punto, o kung Block, isang block sa bawat marka. |
| `MEASUREGEOM` | `MEA` | Sukatin ang distansya, radius, anggulo o lawak (MEA) |
| `MINSERT` |  | MINSERT: maglagay ng block sa mga row at column sa isang galaw. Bawat isa ay sariling reference, kaya maaari mong ilipat o burahin ang alinman sa mga ito. |
| `MIRROR` | `MI` | Salamin ang mga object sa kabila ng isang linya |
| `MLEADER` | `MLD`, `MLEAD` | Multileader: isang arrow, isang leader at isang tala, bilang iisang object (MLD) |
| `MLEADERALIGN` | `MLA` | Ihanay ang mga multileader sa isa sa mga ito sa isang direksyon, sa pantay na agwat, o ipamahagi sa pagitan ng dalawang punto (MLA) |
| `MLEADERCOLLECT` | `MLC` | Pagsamahin ang ilang multileader sa isa: ang mga block nila sa isang row o column, o ang mga tala nila sa ilalim ng isa't isa (MLC) |
| `MLEADEREDIT` | `MLE` | Magdagdag o mag-alis ng leader line sa multileader; ilipat ang nilalaman nito sa pagitan ng teksto at block (MLE) |
| `MLINE` |  | Gumuhit ng magkakahanay na linya nang sabay, nagdudugtong sa mga sulok. |
| `MOVE` | `M` | Ilipat ang mga object sa pamamagitan ng base point at pangalawang punto |
| `MSPACE` | `MS` | Magtrabaho sa model sa pamamagitan ng viewport ng bukas na sheet (o i-double-click sa loob ng viewport). |
| `MTEXT` | `MT`, `T` | Teksto ng talata: i-drag ang lapad nito, pagkatapos mag-type sa lugar; nagsisimula ng bagong talata ang Enter (T) |
| `MVIEW` | `MV` | Isang viewport sa model, sa isang layout |
| `NAMEDVIEW` | `NV`, `VIEWS` | Mga pinangalanang view: i-save ang view sa screen (o isang window) sa ilalim ng pangalan at bumalik dito (NV) |
| `NCOPY` |  | Kopyahin ang mga object mula sa isang block reference o naka-link na drawing papunta sa drawing, nang hindi ito binubuwag. |
| `NEARBY` |  | Sabihin kung ano ang malapit sa cursor, pinakamalapit muna, kasama ang distansya at gilid. |
| `NEW` |  | Magsimula ng bagong drawing |
| `OBJECTSCALE` | `OBJSCALE` | Mga annotation scale ng annotative na teksto at dimension: magdagdag ng scale, magbura ng isa, magdagdag ng kasalukuyang scale, o ilista sila (ipinapakita ng bawat viewport ang mga ito sa laki para sa sarili nitong scale) |
| `OBJOUT` |  | I-export ang 3D model bilang OBJ |
| `OFFICESTANDARD` | `OFFSTD` | Ang pamantayan ng opisina: mga taas ng teksto sa papel, mga layer, field ng title block at mga template sa iisang rekord. Ipinapakita ang nakatakda at kung saan ito galing; Import ng .json record sa drawing na ito, magdagdag ng mga layer ng opisina na wala sa drawing, ilista ang mga field ng title block. |
| `OFFSET` | `O` | Paralelong kopya sa isang distansya |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: kung paano isinasara ng OFFSET ang mga puwang sa panlabas na sulok ng polyline. 0 ay nagpapahaba ng mga segment, 1 ay nagdaragdag ng arko, 2 ay nagdaragdag ng tuwid na hiwa. Pinananatili para sa session na ito. |
| `OLELIST` | `OLES` | Ilista ang mga OLE object na dala ng drawing at ilagay ang kopya ng larawan ng isa kung saan mo gusto |
| `OPEN` |  | Buksan ang DWG o DXF mula sa computer na ito |
| `OPENIN3D` |  | Buksan ang drawing na ito sa 3D modeling app, sa bagong tab (walang ina-upload) |
| `OPTIONKEYS` | `OPTKEYS` | Bigyan ang mga option ng command ng sarili nilang letra (ARRAY.PO, P), sa iisang text file |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Buksan ang menu ng object snap: piliin kung aling snap ang naka-on. Gayundin ang right-click sa Snap sa status bar. |
| `OVERKILL` |  | Burahin ang mga duplicate na object at pagsamahin ang nagsasapawang o dulo-sa-dulong linya at arko, sa loob ng tolerance. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Ang panel ng Parameters: user parameter at dimensional constraint sa iisang talahanayan |
| `PARTSLIST` | `PLIST` | Isang talahanayan ng listahan ng piyesa ng bawat karaniwang piyesa at seksyon ng bakal na nailagay mula sa Library |
| `PASTEAREA` | `PAREA` | I-paste ang area na kinopya sa MarkupCraft (Copy area) sa totoong laki nito, bilang larawan. |
| `PASTEBLOCK` |  | PASTEBLOCK: i-paste ang kinopya mo bilang iisang block. May sariling pangalan ang block; ibibigay ng RENAME ang sa iyo. |
| `PASTECLIP` |  | I-paste ang clipboard: susunod ito sa cursor, i-click kung saan ito pupunta (Ctrl+V) |
| `PASTEORIG` |  | I-paste ang clipboard sa mga coordinate kung saan ito kinopya (Ctrl+Shift+V) |
| `PDF` |  | Ibigay sa CadCraft ang mga PDF file na ginagamit ng mga underlay ng drawing |
| `PDFADJUST` |  | Palabuin, palinawin, gawing monochrome o patayin ang PDF underlay |
| `PDFATTACH` | `PDFATT` | Ikabit ang pahina ng PDF bilang underlay (PDFATTACH) |
| `PDFCLIP` |  | I-clip ang PDF underlay sa rectangle o polygon |
| `PDFIMPORT` | `PDFIM` | Gawing mga object ng drawing ang mga linya, fill at teksto ng pahina ng PDF (PDFIMPORT) |
| `PDFLAYERS` |  | Buksan o patayin ang mga layer ng PDF underlay |
| `PEDIT` | `PE` | I-edit ang polyline: isara, buksan, pagdugtungin, lapad, fit curve, spline curve, decurve, linetype generation, reverse; ang mga linya, arko at spline ay maaaring gawing polyline |
| `PENPRESSURE` |  | Kung ang presyon ng stroke ng panulat ay nagtatakda ng lineweight ng ginagawa ng SKETCHFIX at SKETCHLIVE (naka-on bilang default). Naka-save sa browser na ito. |
| `PHOTOSKETCH` | `PSK` | Ginagawang linya at arko sa isang sukat ang larawan ng sketch sa kamay sa papel, itinutuwid ang perspektiba, at binibigyan ng sariling layer ang bawat kulay ng panulat. |
| `PICKSTYLE` |  | PICKSTYLE: kung ang pagpili ng isang object ng grupo ay pipili ng buong grupo (1, ang simulang setting) o ang object lamang (0). Pinananatili para sa session na ito. |
| `PLAN` |  | Ikutin ang view para ang X axis ng UCS (Current ucs, isang naka-save na Ucs, o ang World) ay pahalang sa screen. Walang gumagalaw sa drawing. |
| `PLINE` | `PL` | Polyline ng segment na linya at arko |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Plot sa PDF: isang layout, o ang model sa isang scale |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Mga plot style table: itakda kung ano ang ipi-print ng bawat kulay (kulay, itim, abo, tinta, lineweight); naka-save kasama ng drawing (STYLESMANAGER) |
| `POINT` | `PO` | Mga point object |
| `POINTCLOUD` | `PC` | ang nakakabit na point cloud: slice, taas, kapal, kulay, laki, nakikita, zoom, detach |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | ikabit ang point cloud (LAS, LAZ, XYZ, PTS) sa ilalim ng drawing |
| `POLARANG` |  | Ang hakbang ng polar tracking sa degree (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Isang regular na polygon |
| `PRESSPULL` |  | Itulak o hilahin ang mukha ng isang solid (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Buksan ang panel ng Properties (Ctrl+1 din, o i-double-click ang isang object) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Tupiin ang panel ng Properties papunta sa gilid ng window |
| `PSPACE` | `PS` | Lumabas sa viewport na ginagamit mo at bumalik sa sheet (o i-double-click sa labas nito). |
| `PUBLISH` | `-PUBLISH` | I-plot ang ilan o lahat ng sheet sa iisang PDF (isang pahina at bookmark bawat sheet) |
| `PURGE` | `PU` | Alisin ang mga kahulugan ng block na walang gumagamit |
| `QDIM` |  | Mabilis na dimension: mag-dimension ng ilang object nang sabay (tuloy-tuloy, baseline, staggered, ordinate, radius o diyametro) |
| `QPMODE` | `QP` | Quick Properties ayon sa cursor, on o off |
| `QSELECT` | `QS` | Mabilis na pagpili: bawat object ng isang uri na tumutugma ang layer, kulay, laki o pangalan (QS) |
| `RASTERSNAP` |  | I-on o i-off ang pag-snap sa mga linya ng na-scan na sheet. |
| `RAY` |  | Ray: linya ng konstruksyon mula sa isang punto, walang hanggan sa isang direksyon. |
| `RECOVER` |  | Binubuksan ang sirang DXF o DWG: nilalaktawan ang hindi mabasa sa halip na tanggihan ang file, sinasabi kung ano ang nilaktawan, pagkatapos sinusuri at inaayos ang drawing gaya ng ginagawa ng AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Isang saradong polyline mula sa dalawang sulok |
| `REDLINE` | `RDL` | Redline tungo sa revision: basahin ang package ng redline ng MarkupCraft, tanggapin o tanggihan ang bawat pagbabago, lagyan ng revision cloud ang mga tinanggap kasama ng revision log, at i-save ang answers file (RDL) |
| `REDO` |  | Gawin muli ang inundo |
| `REFCLOSE` |  | Tapusin ang pag-edit ng block sa lugar: i-save ito, o itapon ang mga pagbabago |
| `REFEDIT` |  | I-edit ang block sa lugar, kung saan nakalagay ang isang reference nito, habang naglalaho ang iba pang drawing; ise-save ito ng REFCLOSE |
| `REGEN` | `RE` | Muling buuin ang iginuhit sa tab na ito mula sa drawing |
| `REGENALL` | `REA` | Muling buuin ang iginuhit sa bawat tab, pane at bukas na drawing |
| `REGION` | `REG` | REGION (REG): gumawa ng patag na area (region) mula sa saradong object, o mula sa mga linya, arko at polyline na nagsasara ng loop dulo sa dulo. Pagkatapos, pinagsasama ng UNION, SUBTRACT at INTERSECT ang mga region, at ibinibigay ng MASSPROP ang mga section property nila. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Irehistro ang ilang scan: ilagay sila sa iisang frame sa pamamagitan ng mga pares ng punto o target, pinong-pino gamit ang ICP, i-export bilang iisang LAS o E57 |
| `REINIT` |  | I-reload ang aliases file mo |
| `RENAME` | `-RENAME`, `REN` | Palitan ang pangalan ng layer o block (susunod ang bawat object o reference) |
| `REVCLOUD` | `RC` | Revision cloud: bilugan ang rectangle, polygon, freehand path o object (RC) |
| `REVOLVE` | `REV` | Ikutin ang saradong 2D na object sa palibot ng axis tungo sa solid (3D) |
| `ROTATE` | `RO` | Ikutin ang mga object sa palibot ng base point |
| `SAMPLES` | `SAMPLE` | Buksan ang isa sa mga sample drawing ng CadCraft (isang architectural set, isang as-built) para matuto mula rito |
| `SAVE` | `QSAVE` | I-download ang drawing sa format nito (DWG o DXF) |
| `SAVEAS` |  | I-download ang drawing bilang DWG o DXF: piliin kung alin |
| `SAYSEL` |  | Sabihin kung ano ang napili, isang pangungusap bawat isa. |
| `SCALE` | `SC` | I-scale ang mga object sa palibot ng base point |
| `SCALELISTEDIT` | `SCALELIST` | Magdagdag, mag-edit at magbura ng sarili ng drawing na mga scale; lumalabas sila sa listahan ng scale ng viewport at plot at naka-save sa file (SCALELIST) |
| `SCANALIGN` | `SCL` | Ihanay ang na-scan na sheet sa dalawang punto: ilipat, ikutin at, kung pipiliin mo, i-scale. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Ipasok ang na-scan na drawing: PNG, JPEG o TIFF (isang pahina o lahat ng pahina ng multi-page na file) o pahina ng PDF na larawan. |
| `SCANCLEAN` | `SCC` | Gawing itim at puti ang na-scan na sheet at alisin ang mga tuldok. |
| `SCANCROP` | `SCR` | I-crop ang na-scan na sheet sa isang window. |
| `SCANDESKEW` | `SCD` | Hanapin ang anggulo ng mahahabang linya ng na-scan na sheet at ituwid ang sheet kapag tinanggap mo ang anggulo. |
| `SCANERASE` | `SCE` | Burahin ang bahagi ng na-scan na sheet: rectangle, polygon o lasso. |
| `SCANINFO` | `SCI` | Ipakita ang orihinal na file ng na-scan na sheet at ang mga hakbang na ginawa mula noon. |
| `SCANSCALE` | `SCS` | I-scale ang na-scan na sheet: pumili ng dalawang punto dito at i-type ang totoong distansya sa pagitan nila. |
| `SCANTRACE` | `SCT` | I-trace ang na-scan na sheet tungo sa linya at arko sa bagong layer, sa tolerance na itatakda mo. Nananatiling raster ang teksto at hatching. |
| `SELECT` |  | Pumili ng mga object ngayon (para sa P, Previous, sa susunod na command) |
| `SELECTALL` | `AI_SELALL` | Piliin ang bawat object na maaari mong i-edit sa tab na ito (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Piliin ang bawat object na tulad ng mga pipiliin mo: parehong uri, layer at kulay (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Ipinapakita ang panel ng Sheet Set: mga sheet mula sa maraming drawing, may numero, inilalathala bilang iisang PDF. |
| `SHORTCUTS` | `KEYS` | Bigyan ang anumang command ng sarili nitong key (Ctrl o Alt kasama ang letra, o isang bakanteng function key), naka-save sa browser na ito o desktop app. |
| `SHXFONTS` | `SHX` | Bigyan ang CadCraft ng SHX font mula sa folder o mga file, para ang mga text style na nagpapangalan sa mga ito ay iguhit sa mga iyon (ilista, alisin, i-reverse) |
| `SKETCHFIX` | `SKF` | Gumuhit ng malayang stroke; bawat isa ay nagiging malinis na linya, bilog, arko, rectangle o polyline, parisukat at nakadikit sa iba. |
| `SKETCHLIVE` | `SKL` | Mag-sketch gamit ang panulat: bawat stroke ay nagiging tumpak na linya, bilog, arko o rectangle habang inaangat mo ang panulat, nakadikit sa drawing, may sukat na puwedeng i-type ibabaw. |
| `SPLINE` | `SPL` | Gumuhit ng spline sa pamamagitan ng mga punto (o may control polygon), o gawing spline ang polyline |
| `SPLINEDIT` | `SPE` | I-edit ang spline: fit point, control point at timbang, buksan o isara, i-reverse, o gawing polyline |
| `SPLIT` |  | Hatiin ang lugar ng drawing sa mga pane (bilang VPORTS sa model; mula rin sa sheet) |
| `STEELMEMBER` | `SMEMBER` | Isang steel member sa 3D mula sa karaniwang section: dalawang punto (isang beam) o base point at taas (Column) |
| `STLOUT` |  | I-export ang 3D model bilang STL (milimetro) |
| `STRETCH` | `S` | Stretch: i-drag ang crossing window sa ibabaw ng mga dulo para ilipat; gumagalaw ang nasa loob, nananatili ang iba (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Mga text style: ang font, taas, lapad at slant na nakukuha ng bagong teksto (ang dialog; -STYLE sa command line) |
| `SUBTRACT` | `SU` | Alisin ang mga solid sa iba (3D), o ang 2D region sa mga region |
| `SWBOUT` | `SWMACRO` | I-download ang macro para sa SolidWorks (.swb) na muling bumubuo ng modelo bilang iisang constrained sketch |
| `SWEEP` |  | Ilipat ang saradong 2D na object sa kahabaan ng path (linya, polyline, arko, bilog) tungo sa solid (3D) |
| `TABLE` | `TB` | Gumawa ng talahanayan: mga row at column, o mula sa mga cell ng spreadsheet sa clipboard o sa CSV file |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | I-edit ang talahanayan: mag-type sa cell, magpasok at magbura ng row at column, laki, pinagsamang cell, pagkakahanay |
| `TABLEEXPORT` |  | I-save ang ipinapakita ng talahanayan bilang CSV file |
| `TABLEPASTE` | `PASTETABLE` | Gumawa ng talahanayan mula sa mga cell ng spreadsheet sa clipboard |
| `TABLESTYLE` | `TS` | Mga table style: taas ng teksto, pagkakahanay, margin at border para sa title, header at data row |
| `TAGS` |  | Mga tag sa block reference: magtakda ng tag (uri, mga pinapayagang halaga, mga block na sakop), itakda ito sa mga napiling reference, at ilista sila bilang iskedyul na maaari mong i-save bilang CSV |
| `TEXT` | `DT`, `DTEXT` | Teksto sa isang linya; nagsisimula ng susunod na linya ang Enter |
| `TEXTEDIT` | `ED`, `DDEDIT` | I-edit ang teksto sa lugar: pumili ng teksto (o i-double-click ito) (ED) |
| `TEXTMASK` | `TMASK` | Maglagay ng background mask sa likod ng teksto (background ng drawing o isang kulay), o alisin ito. |
| `TEXTTOFRONT` |  | Dalhin ang lahat ng teksto, dimension at leader sa harapan ng iba. |
| `TOOLBAR` |  | Piliin kung ano ang ipinapakita ng mga button ng toolbar: icon at teksto, icon lamang, o teksto lamang (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Ilagay ang toolbar sa itaas, ibaba, kaliwa o kanan ng window |
| `TOOLBARROWS` |  | Piliin kung ilang row ang gamit ng toolbar: magbalot para magkasya, 2, o 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Gawing standard o compact ang mga bar sa ibabaw ng drawing |
| `TOUCHCROSSHAIR` | `TCX` | Offset crosshair para sa pagguhit gamit ang daliri: isang daliri ang gumagalaw sa crosshair na nasa itaas at gilid nito, para hindi matakpan ng daliri ang pick point. Ang pag-angat ng daliri ay walang pinipili; ang button na Click o isang tap gamit ang pangalawang daliri ay pumipili sa crosshair, at ang pagpindot sa Click habang gumagalaw ay nagda-drag. Ang mahabang pindot o button na Enter ay Enter. Ang dalawang daliri ay nagpa-pan at nag-zoom. Mga opsyon: ON, OFF, Auto (naka-on lamang kung daliri ang tanging pointer), Distance, Side. |
| `TOUR` | `TUTORIAL` | Ulitin ang anim na hakbang na tour ng unang drawing |
| `TRIM` | `TR` | Putulin ang mga object pabalik sa kung saan sila tinatawid ng iba: mag-click sa isang piraso, i-drag sa ilan, o Shift+click para mag-extend |
| `TRIMEXTENDMODE` |  | Paano nagsisimula ang TRIM at EXTEND: 1 Quick (bawat object ay cutting edge o boundary), 0 Standard (pumili muna ng mga edge) |
| `TTR` |  | Bilog na tangent sa dalawang object, may radius na ibibigay mo (katulad ng CIRCLE T). |
| `TURNLEFT` |  | Ikutin ang view ng 90° pakaliwa (counter-clockwise): UCS Z -90, at susunod ang view. Walang gumagalaw sa drawing. |
| `TURNRIGHT` |  | Ikutin ang view ng 90° pakanan (clockwise): UCS Z 90, at susunod ang view. Walang gumagalaw sa drawing. |
| `TURNWORLD` |  | Bumalik sa world: UCS World, at muling patag ang view. |
| `TXT2MTXT` | `T2M` | Pagdugtungin ang mga teksto sa isang linya tungo sa iisang talata, mula itaas hanggang ibaba. |
| `UCS` |  | Sarili mong coordinate system: isang origin at X axis (origin, anggulo ng Z, 3point, OBject, Previous, World, NAmed). Sinusundan ito ng mga punto na tina-type mo, ortho, polar tracking, grid at bagong teksto; iniikot ang view para pahalang ang X axis nito. Walang gumagalaw sa drawing. |
| `UNDO` | `U` | I-undo ang huling command |
| `UNGROUP` |  | UNGROUP: tanggalin ang mga group. Pumili ng mga object ng mga group, o magbigay ng Name. Mananatili ang mga object sa drawing. |
| `UNION` | `UNI` | Pagsamahin ang mga solid sa isa (3D), o ang 2D region sa iisang region |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Ipakita muli ang bawat object na itinago ng ISOLATEOBJECTS o HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Paano ipinapakita at tinatype ang mga haba: decimal, feet at inches, fraction (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Muling kalkulahin ang mga field, at piliin kung kailan sila kusang mag-a-update |
| `USDOUT` |  | I-export ang 3D model bilang USD (.usda text, .usdc binary o .usdz package) |
| `VIEW` | `-VIEW`, `V` | Mga karaniwang 3D view, perspective o parallel (3D) |
| `VIEWBASE` | `FLATSHOT` | Maglagay ng patag na 2D view ng 3D solid (harap, itaas, gilid o isometric, nakatagong linya ay naka-dash) sa sheet o sa model |
| `VIEWLABEL` | `VL` | Pamagat ng view sa sheet na nagpapakita ng pangalan ng view ng viewport nito, at nagbabago kasabay nito. |
| `VOICE` |  | I-on o i-off ang binibigkas na command. Kinikilala sila sa computer na ito. |
| `VPCLIP` |  | I-clip ang viewport ng sheet sa saradong object o iginuhit na polygon; ang Delete ay ginagawa itong rectangle muli |
| `VPLAYER` |  | I-freeze o i-thaw ang mga layer sa ilang viewport lamang (Freeze, Thaw, Reset), at piliin kung aling mga layer ang magsisimulang naka-freeze sa mga bagong viewport (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Hatiin ang lugar ng drawing sa mga pane, bawat isa ay may sariling view (sa sheet: isang viewport, gaya ng MVIEW) |
| `VPVIEW` |  | Itakda kung ano ang ipinapakita ng viewport: pumili ng window sa model |
| `VSCURRENT` | `VS`, `SHADEMODE` | Visual style ng 3D view: shaded, edges, hidden line, wireframe, X-ray |
| `WALL` | `WA` | Gumuhit ng 2D na pader gaya ng polyline. Nagdudugtong sila, at dala ang mga pinto at bintana. |
| `WALLARC` | `WARC` | Gumuhit ng arko ng mga pader. Tuwid ang mga pader sa plano, kaya iginuguhit ang arko bilang maiikling tuwid na pader (15 degree bawat isa) na nagdudugtong. |
| `WALLDELSEG` |  | Burahin ang bahagi ng pader sa pagitan ng dalawang punto. Ang natira ay nananatiling isa o dalawang pader. |
| `WALLDIM` |  | Mag-type ng bagong halaga para sa dimension: ang pader sa malayong dulo nito ay gumagalaw nang parisukat sa sarili nito, ang pader sa unang dulo ay nananatili, at sumusunod ang mga pader na naka-join dito. |
| `WALLDISJOIN` |  | Pumili ng pader malapit sa isang dulo para pigilan ang mga join sa dulong iyon: iginuguhit na parisukat ang dulo at walang sumusunod dito. Piliin muli para payagan sila. |
| `WALLGRID` |  | I-lock ang pader sa linya ng grid: sa kahabaan nito, o may isang dulo rito. Ilipat ang linya gamit ang GRIDMOVE at susunod ang pader. |
| `WALLHOLD` |  | Ihanay at i-lock: nananatili ang pader sa puwesto nito laban sa ibang pader (sa linya nito, o sa distansyang mayroon ito). Kapag gumalaw ang isa, susunod ang kabila. |
| `WALLHOLDDIM` |  | I-lock ang distansya sa pagitan ng dalawang magkaparehong pader. Kapag gumalaw ang isa, susunod ang kabila para mapanatili ito. |
| `WALLHOLDS` |  | Ilista ang mga lock ng mga pader. |
| `WALLJOINS` |  | Bigyan ng id ang bawat pader ng mas lumang drawing at itago ang mga join sa pagitan nila. Nangyayari rin ito sa unang pagbabago na gagawin mo. |
| `WALLJOINSTYLE` |  | I-click ang sulok kung saan nagtatagpo ang dalawang pader dulo sa dulo para baguhin kung paano ito iginuguhit: mitre, butt, square off. Ang T ay nagpapalit kung aling pader ang dumadaan. |
| `WALLOFFSET` | `WO` | Ilipat ang pader na parisukat sa sarili nito sa isang distansya (susunod ang mga pader na naka-join dito), o gumawa ng kopya sa distansyang iyon. |
| `WALLPICK` |  | Gumawa ng mga pader sa linya o polyline sa drawing, kasama ang mga linyang naka-join dito kung sasabihin mong Yes. |
| `WALLPOLY` | `WP` | Gumuhit ng mga pader sa paligid ng regular na polygon na may 3 hanggang 64 na gilid, gaya ng POLYGON. |
| `WALLRECT` | `WR` | Gumuhit ng apat na magkadugtong na pader mula sa dalawang magkabilang sulok, gaya ng RECTANG. |
| `WALLREJOIN` |  | Gawing muling iisang pader ang dalawang bahagi ng pader. Pinananatili ng una ang puwesto nito sa drawing. |
| `WALLROT` |  | Gumuhit ng apat na magkadugtong na pader bilang rectangle na ikinikot sa anumang anggulo: ang unang gilid, pagkatapos gaano kalayo lalabas ang ikalawang gilid. |
| `WALLSPLIT` | `WS` | Hatiin ang pader sa dalawa sa isang punto o kung saan tumatawid ang ibang pader. Nananatiling magkadugtong ang mga bahagi maliban kung humingi ka ng puwang o malayang dulo. Sumasama sa bahagi nila ang mga pinto at bintana. |
| `WALLSPLITGAP` |  | Hatiin ang pader na nag-iiwan ng puwang: i-type ang puwang, piliin ang pader, pagkatapos ang punto. Malaya ang mga dulo ng mga bahagi at maaaring muling pagdugtungin. |
| `WALLSTRETCH` |  | Iunat gamit ang window: gumagalaw ang mga dulo ng pader sa loob nito, buong gumagalaw ang mga pader na ganap nasa loob, at dumudulas kasama nila ang mga pader na tumatama sa kanilang gilid. |
| `WALLTAN` |  | Ituloy ang pader gamit ang arko na umaalis dito sa kahabaan ng pader (iginuguhit bilang maiikling tuwid na pader). |
| `WALLTRACE` |  | Gumawa ng mga pader sa paligid ng pinakamaliit na saradong area ng mga linya at pader sa paligid ng punto na iniklik mo. |
| `WALLUNHOLD` |  | Alisin ang mga lock ng isang pader (at ang mga lock ng ibang pader dito). |
| `WBLOCK` | `W`, `-WBLOCK` | Isulat ang block, ilang object, o ang buong drawing sa bagong DWG o DXF file (W) |
| `WEDGE` | `WE` | Isang wedge: dalawang sulok at isang taas; dumadalisdis ito palayo sa unang sulok (3D) |
| `WHEREAMI` | `WHERE` | Sabihin kung nasaan ang cursor. |
| `WHOHAS` |  | Sinasabi kung sino ang may bukas na drawing. Itinatabi ng CadCraft Studio ang maliit na lock file sa tabi ng bawat bukas na drawing (Plan.dwg.cclock: sino, mula kailan, aling bersyon) at tinatanggal ito kapag isinara. Mga opsyon: Current (ang bukas na drawing), File (pumili ng isa), FOlder (bawat drawing sa folder na bukas sa kung saan man; pinapayagan din nito ang Studio na maglagay ng lock file sa folder na iyon), Path (i-type ang isa), Name (ang pangalang nakikita ng iba). Ang lock na hindi na-refresh sa loob ng limang minuto ay sinasabing stale. Hindi available sa browser. |
| `WINDOW` | `WN` | Maglagay ng bintana sa pader. |
| `XATTACH` | `XA` | Ikonekta ang ibang DWG o DXF sa drawing na ito, nakikita lamang (XREF ang naglilista at nagre-reload sa kanila) |
| `XCLIP` | `XC` | I-clip ang block reference at naka-link na drawing sa isang rectangle o polygon, o alisin ang clip. |
| `XLINE` | `XL` | Linya ng konstruksyon, walang hanggan sa magkabilang direksyon: sa dalawang punto, pahalang, patayo, sa isang anggulo, pinaghahati ang anggulo, o naka-offset mula sa isang linya. |
| `XREF` | `XR`, `-XREF` | Mga naka-link na drawing (external reference): ilista, ikabit, i-reload, i-bind, i-detach |
| `ZOOM` | `Z` | Extents, o isang window |
