---
title: Fur DWG, tafatir oo keydi nuqul
summary: Fur naqshad uu kugu soo diray la-taliye, hubi waxa soo galay, samee isbeddel, daabac xaashi PDF ah, oo keydi nuqul dib loogu soo diro, DWG ama DXF ahaan.
keywords: dwg, dxf, fur, soo geli, dhoofi, kaydi, r12, round trip, la-taliye, xref, hubi naqshadda, saveas, kaydi sida, dwg save, qaab
from: 49de4bf6
---

## Waxa aad samayn doontid

Fur DWG ka la-taliye, hubi waxa CadCraft awoodi karay iyo waxa aanu awoodin inuu muujiyo, ku dar qoraal, daabac xaashi PDF ah oo si loogu eego, kadibna keydi nuqul dib loogu soo diro, DWG ama DXF ahaan.

## Fur faylka

1. Riix {{key:Mod+O}}, ama guji {{ui:Open}}.
2. Dooro faylka `.dwg`.

Status line-ku wuxuu muujinayaa "Reading …" intii naqshaddu la akhrinayo. Markay dhammaato, naqshaddu waxay buuxisaa shaashadda, taariikhduna waxay tusaale ahaan tidhi "Opened plan.dwg: 18,240 objects on 64 layers", oo leh muddada ay qaadatay.

:::offline
Khadka ka baxsan baad ku jirtaa. Haddii badhanka {{ui:Save for offline}} uu leeyahay "Diyaar khadka ka baxsan", faylalka DWG si caadi ah ayay u furmaan. Haddii kale, iyo haddii aan DWG la furin tab-kan, furitaanka DWG wuu fashili karaa sababtoo ah akhriyaha DWG ee CadCraft wuxuu soo dejiyaa markii DWG-ga ugu horreeya la furo: fur DXF halkii, ama ku kaydi CadCraft khadka ka baxsan isticmaalka xiga markaad ku xidhan tahay internetka. Eeg [Shaqada khadka ka baxsan](common:offline).
:::

## Hubi waxa soo galay

1. Eeg qaybta {{ui:Drawing}} ee panelka bidix: qaabka iyo nooca, unugyada, tirada walxaha iyo lakabyada, iyo xaashiyaha.
2. Akhri sanduuqa "Ku saabsan faylkan" ee hoosteeda, haddii uu jiro.

Sanduuqu wuxuu liistaa:

- **Weli lama muujin:** walxaha CadCraft aan weli sawiri karin, sida noocyadooda iyo tiradooda. Waa la iska tegay, ma la male-ynayo.
- **Layouts (xaashiyaha) ayaa soo galay:** ku fur tab-yada hoos naqshadda.
- **Cabbirrada ayaa la akhriyi karay sida loo sawiray oo kaliya.**

3. Guji tab-yada hoos naqshadda si aad u aragto xaashi kasta.
4. Hubi {{ui:Units}} ku jira {{ui:Current settings}} (wax la doortay ma jiro, tab-ka {{ui:Model}}). Haddii ay tidhi {{ui:Unitless}} laakiin waxaad og tahay in naqshaddu tahay millimitir, dejiso, si xaashiyaha iyo miisaannada daabacaaddu u akhriyaan saxda.

:::tip
Haddii aad filaysay qayb naqshadda ka mid ah oo aadan arag, eeg panelka {{ui:Layers}}: lakabku wuxuu noqon karaa mid damaan ama qarsan faylka. Guji magaciisa si aad u dhigto hadda jirta; taasi wuu shidaa.
:::

## Samee isbeddelkaaga

1. Samee lakab qoraalkaaga: guji {{ui:New layer}}, ku qor `NOTES` oo riix {{key:Enter}}.
2. Ku qor `DT` oo riix {{key:Enter}}.
3. Guji meesha qoraalku tagayo.
4. Ku qor dherer qoraal oo ku habboon naqshadda (eeg [Ku dar qoraal iyo calaamado](topic:text)) oo riix {{key:Enter}}.
5. Riix {{key:Enter}} si aad u ilaaliso jeex-ka 0.
6. Ku qor qoraalkaaga oo riix {{key:Enter}}.
7. Riix {{key:Enter}} mar kale si aad u dhammeysid.

Tafatirka cabbirrada la soo dhoofiyay waa wanaagsan: markaad mid beddesho, CadCraft wuu dib u sawiraa qaabkiisa.

## Daabac xaashi si loo eego

1. Guji tab-ka xaashiga.
2. Riix {{key:Mod+P}}.
3. Guji {{ui:Download PDF}}.

Eeg [Daabac PDF](topic:plot-pdf).

## Keydi nuqul

1. Riix {{key:Mod+S}}, ama guji {{ui:Save}}.

DWG ayaad furtay, sidaas darteed browser-ku wuxuu soo dejiyaa `<name>.dwg`, nooca uu DWG-gu ku iman jiray. Taariikhdu waxay tusaale ahaan tidhi "Saved a copy as Plan.dwg (DWG (AutoCAD 2018))" oo waxay liistaa, sadarkeeda hoose, wax kasta oo isbeddelay.

2. Akhri xariiqyadaas ka hor intaadan faylka u dirin. [Waxa DWG hayo iyo waxa isbedela](topic:files#what-a-dwg-keeps-and-changes) ayaa sharraxaya mid kasta.

DWG-gaagii asalka ah weligiis ma isbeddelo. Kaydin kasta waa soo dejin cusub.

## Kaydi sida DWG ama DXF

Si aad nooca adigu u doorato:

1. Riix {{key:Mod+Shift+S}}, ama guji {{ui:Save as}}.

Dialog-ka {{ui:Save a copy as}} ayaa furmaya saddex doorasho, mid kastaa magaca faylka uu siin doono: {{ui:DWG}}, oo leh liiskiisa {{ui:Version}}, {{ui:DXF R12}} iyo {{ui:DXF 2000}}. Qaabka iyo nooca naqshaddu hadda leedahay ayaa horey loo doortay.

2. Guji qaabka aad rabto. DWG ah, dooro nooca xafiiska kale isticmaalo, ama mid hore: AutoCAD 2018, 2013, 2010, 2007, 2004 ama 2000.
3. Guji {{ui:Save}}.

Nuqulka ayaa la soo dejiyaa. Markaas ka bilow, {{key:Mod+S}} wuxuu naqshaddan ku kaydinayaa qaabkaas, naqshadaha cusubna waxay ku bilaabmaan isla qaabkaas, browser-kan. {{ui:Cancel}} ama {{key:Esc}} waxba ma kaydiyo, taariikhduna waxay tidhi "Not saved."

Midka la doorto:

- **DWG** wuxuu hayaa wax badan: xaashiyo leh viewports-kooda, cabbirro dhab ah, qaabab hatch, magacyada lakabyada iyo blocks-ka sida aad qortay, iyo qoraal cutub sida qoraal cutub. Nooca AutoCAD 2000 wuxuu ku furmaa barnaamijyo badan; 2004 iyo kuwa ka dambeeya waxay sidoo kale hayaan midabbo runta ah.
- **DXF 2000** waa fayl qoraal ah oo wax badanba hayaa sida DWG: xaashiyo kasta oo layout ah oo leh viewports-kooda, cabbirro dhab ah, qaabab hatch, midabbo runta ah, ballacnimo xariiqyo, nooca xariiqyada, iyo magacyo sida aad qortay. Wuxuu ku furmaa AutoCAD 2000 iyo kuwa ka dambeeya iyo barnaamijyada CAD badan. Multileaders waxay noqdaan xariiqyada, madaxyada iyo qoraalka ay sawiraan. DXF la furay nooca 2000 ama ka dambeeya wuxuu u kaydsamaa sida DXF 2000.
- **DXF R12** wuxuu ku furmaa barnaamij kasta oo CAD ah. Wuxuu hayaa xaashiga koowaad viewports-kiisa, iyo xaashiyada kale ee CadCraft. Wuu fududeeyaa waxyaabaha cusub sida qoraal cutub iyo hatches.

## Waxa la-taliyuhu arki doono

DWG-ga:

- Xarriiqyo, qaansooyin, goobooyin, ellipses, polylines, qoraal, qoraal cutub, blocks oo leh attributes-kooda, buuxinta midabka, hatch patterns iyo lakabyada sida aad arkayso.
- Cabbirro dhab ah: barnaamijka kale ayaa dib u cabbiraa markii la kala fido.
- Xaashiyo kasta, oo leh warqaddooda iyo viewports-kooda.
- Multileaders sida multileaders. Nooca AutoCAD 2000, midabbada runta ah waxay noqdaan midabka caadiga ah ee ugu dhow.

DXF R12-ga:

- Xarriiqyo, qaansooyin, goobooyin, polylines, qoraal, block references iyo cabbirro sida aad arkayso. Cabbirrada waxay ahaan doonaan cabbirro dhab ah.
- Magacyada lakabyada waa xarfo waaweyn, oo meelaha banaan waa la beddelay `_`.
- Xaashiga koowaad sida warqadda dhinaca naqshadda (paper space) oo leh viewports-kooda. Xaashiyada kale waxay yimaadaan sida blocks magacyadoodu yahay `CCLAYOUT_1` iyo kuwa kale; haddii ay u baahan yihiin xaashi kasta sida layout, u daabac PDF xaashi kasta oo loo diro sidoo kale.
- Qoraalka cutubka waa xariiqyo kala go'an, ellipses waa polylines, hatches waa jajab.

Labadaba, wax kasta oo lagu taxay "Weli lama muujin" markii DWG la furay **ma** ku jiro nuqulka, mana aha inuu taariikhdu sheegto in la kaydiyay: OLE objects ee DWG ah iyo solids 3D ee model space waxaa dib loogu qoraa markaad kaydiso sida DWG. Ku sheeg, oo PDF sidoo kale u dir.

## Khaladaadka caadiga ah

- **"CadCraft opens DWG and DXF drawings."** Faylku wuxuu leeyahay kordhin kale. Hubi inuu yahay `.dwg` ama `.dxf`.
- **"This drawing could not be read."** DWG-gu waa khaldan yahay ama waa nooc uu akhriyuhu wax ka ma garanayo. Weydii DXF, ama DWG oo lagu kaydiyay nooc hore.
- **"This is a binary DXF."** Weydii, ama kaydi, DXF qoraal (ASCII).
- **Faylka la kaydiyay wuxuu u yeedhan `name (1).dwg` ama `name (1).dxf`.** Browser-ku sidaas buu sameeyaa markii faylka magacaas leh uu horey u jiro folder-ka.
- **Waxay leeyihiin barnaamij hore oo aan DWG-ga furi karin.** Ku kaydi sida DWG oo leh {{ui:Version}} {{ui:AutoCAD 2000}}, ama sida {{ui:DXF R12}}: barnaamijyada CAD ee badan ayaa furta.
- **Qaybo ka mid ah naqshadda ayaa maqan.** Naqshadaha xiriirka la xidhay (xrefs) ma la soo rarin ilaa aad doorato faylashooda ({{cmd:XREF}}, `R`), sawirrada waxay muuqdaan sida qaababka magacyada faylashooda.
