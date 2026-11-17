---
title: Sebenzisa CadCraft nomsizi we-AI
summary: Vumela umsizi wakho we-AI noma i-script yakho ukuthi isebenze ne-CadCraft: okwenziwayo, ukuxhuma noma yiliphi iklayenti le-MCP, nokuthi usalawula kanjani (izimvume, ukuhlehlisa, irekhodi lomsebenzi, Xhumula).
keywords: ai, umsizi, ijenti, mcp, model context protocol, script, ukwenza ngokuzenzakalelayo, command line, cli, json, ithokheni, izimvume, xhumula, umsebenzi, amafolda, izindlela, svg, ibhetshi
from: 06ba4ef6
---

## Okuzofunda

Indlela umsizi we-AI (noma i-script oyibhalile) angabheka ngayo umdwebo, asebenzise imiyalo ye-CadCraft, akhiphe i-plot aphinde alondoloze, nokuthi unquma kanjani okuvunyelwe ukuthinta.

CadCraft **alinayo i-AI yalo** futhi alithumeli lutho noma kuphi. Wena uletha umsizi: noma iyiphi inhlelo esebenza nge-Model Context Protocol (MCP). I-CadCraft inikeza amathuluzi kuphela, nawe uyakhetha ukuthi yiwaphi.

Kukhona izindlela ezimbili zokungena:

- **Umdwebo ovulekile kuwe.** Umsizi usebenza kule windi, eduze kwakho, nge-CadCraft Studio ekhompyutheni yakho. Yile nto {{ui:Izilungiselelo}} › {{ui:CadCraft}} › {{ui:Abasizi}} ekhelelwe yona.
- **Imidwebo ekhompyutheni yakho, ngaphandle kokuvula uhlelo.** Iseva ye-CadCraft MCP kanye ne-`cadcraft` command line ifunda futhi ibhale amafayela e-DWG ne-DXF emafolda oqamba. Bona "Sebenza namafayela ngaphandle kokuvula CadCraft" ngezansi.

## Vula kona

1. Vula {{ui:Izilungiselelo}} (igiya esitsheni se-app, noma {{key:Mod+,}}) bese uya kuthebhu {{ui:CadCraft}}.
2. Ngaphansi kwe-{{ui:Abasizi}}, thika **Vumela abasizi be-AI namascript basebenzise CadCraft**. Ivaliwe kuze kube yilapho uyithika.
3. Khetha ukuthi kungenzani. **Funda** ithikiwe ukuqala; thika ezinye kuphela uma uzidinga.

| Imvume | Umsizi angakwenza |
|---|---|
| Funda | Abuke umdwebo: achaze, ahlu futhi athole izinto, abone ukukhethwa, achaze umbono futhi athathe isithombe sawo, ahlole ngokumelene nemithetho yengqimba nokudweba |
| Hlela | Asebenzise imiyalo emdwebeni nokushintsha ukukhethwa. Isenzo ngasinye siyisinyathelo esisodwa osingahlehlisa |
| Londoloza | Alondoloze umdwebo (edeskithophu, kufayela lawo; kusiphequluli, njengokulanda) |
| Thumela ngaphandle | Akhiphe i-PDF nezinye izifayela |

## Vumela ukusebenzisa amafayela emafolda okhethile

Ku-CadCraft Studio umsizi angavula, alondoloze futhi akhiphe i-plot amafayela ngegama esikhundleni sezingxoxo zamafayela, kodwa kuphela ngaphakathi kwamafolda owengeza ngaphansi kwe-{{ui:Abasizi}} › {{ui:Amafolda angasetshenziswa}}:

1. Khetha {{ui:Engeza ifolda…}} bese ukhetha ifolda engxoxweni yeStudio yayo.
2. Umsizi manje angabhala uhlu lwamafayela alapho (`files_list`), avule umdwebo (`drawing_open`), awulondoloze lapho ngenguqulo ye-DWG noma njenge-DXF, akhiphe i-PDF noma ifayela le-SVG, alayishe ifayela le-LISP, anike umyalo ifayela eyicelayo (`INSERT` `F`, `XATTACH`, ifayela lamaphoyinti) noma atshele lapho ifayela lomyalo liya khona (i-CSV ye-`COUNT`, `PUBLISH`).
3. {{ui:Khipha}} ikhipha ifolda ngokushesha. Amapheyji esendaweni engaphandle kwalokho ayenqatshwa, futhi ifayela eselapho lishintshwa kuphela uma umsizi elicela lokho noma uma yena eliyo ebhale lona.

Ukuze umsizi afunde, kudingeka **Funda**; ukubhala umdwebo kudinga **Londoloza**; noma yiliphi elinye ifayela kudinga **Thumela ngaphandle**.

Amathuluzi angaphandle kwezimvume ozithikile akanikezwa umsizi, futhi uma eyicela noma kunjalo, i-CadCraft iyayenqaba ibhale kurekhodi lomsebenzi. Ukucima isiswitshi kuphelisa zonke izixhumo ngesikhathi esisodwa. {{ui:Setha kabusha izilungiselelo ze-CadCraft}} nakho kukucima.

## Xhuma umsizi wakho

Abasizi baxhuma nge-**CadCraft Studio** ekhompyutheni yakho: iqalisa iseva encane engafinyelelwa yile khompyutha kuphela (ikheli `127.0.0.1`), evikelwe yithokheni eyenziwa yi-Studio njalo lapho iqala. Vula i-Studio, khetha {{ui:Xhuma umsizi}}, bese ukopisha ikheli nethokheni.

- Kumsizi wakho, engeza iseva ye-MCP yohlobo HTTP ngekheli (lifana ne `http://127.0.0.1:47615/mcp`) nehedha `Authorization: Bearer <token>`. I-Studio ibonisa izilungiselelo ozozinamathisela.

{{ui:Ithokheni entsha}} ku-Studio yenza wonke abasizi abaxhunyiwe baxhume kabusha ngethokheni elisha. Ungabelani ngethokheni ngalutho: noma ubani onalo angasebenzisa izinhlelo ozivulile, noma yisiphi isikhathi i-Studio isebenza.

:::note
Ithebhu yesiphequluli ayikwazi ukuvula uxhumo lomsizi: kuma-app asesiphequluleni isiswitshi asinamthelela size usebenzise i-CadCraft Studio ekhompyutheni yakho.
:::

## Usalawula

- **Isenzo ngasinye siyisinyathelo esisodwa sokuhlehlisa**, esibhalwe ngegama lomsizi kuso, isibonelo "Umsizi: LINE". Cindezela {{key:Mod+Z}} ukuze uhlehlise isenzo sokugcina somsizi ngokuphelele.
- **Uyabona ukuthi yenzani.** Imiyalo yakhe ivela emlandweni womyalo ngaphambili kwe-**[Umsizi]**, futhi umdwebo uyaphinda udwebeke njengoba usebenza.
- **Ulinda wena.** Uma usemaphakathi komyalo, umsizi angafunda kodwa angashintshi umdwebo; utshelwa ukuthi azame futhi uma usuqedile.
- **Uyazi uma kukhona oxhunyiwe.** Inkinobho ku-app bar iqamba umsizi uma exhunyiwe. Yichofoze ukuze ubone ayikwazi ukukwenza, noma ukuze **Xhumula** kawo.
- **Umsebenzi.** {{ui:Izilungiselelo}} › {{ui:CadCraft}} › {{ui:Abasizi}} › {{ui:Umsebenzi}} ibala wonke ama-call: nini, liphi ithuluzi, liphumelele noma linqatshiwe, nesinyathelo sokuhlehlisa esilenzile. {{ui:Gcina irekhodi}} igcina ikhophi.

## Okungacelwa umsizi

| Ithuluzi | Imvume | Lokho okwenzayo |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Funda | Igama lomdwebo, izinyunithi, izingqimba, amabhulokhi, amashidi; lokho okusekuskrini |
| `files_list`, `drawing_open` | Funda | Studio: amafayela emafolda akho; vula elinye kule windi |
| `objects_list`, `object_get`, `selection_get` | Funda | Izinto nejometri yazo, ubude nendawo (noma inani kuphela, ngohlobo nengqimba); ukukhethwa |
| `drawing_check` | Funda | Imithetho njengezingqimba ezivumelekile, akukho okusengqimbeni 0, imibala ye-ByLayer, ukuphakama kombhalo |
| `view_screenshot` | Funda | Isithombe somdwebo njengoba ubonakala |
| `command_run` | Hlela | Ibhala emugqeni womyalo: `LINE 0,0 @100,0 @0,50 ` ifundeka njengoba wawuyibhala (isikhala siphetha impendulo), noma uhlu olunempendulo eyodwa ngayinye. Lingashiya umyalo uvulekile futhi liqhubeke ngokubizwa kwalo okulandelayo |
| `script_run` | Hlela | I-script (`.scr`) noma ifayela le-LISP, njengoba {{ui:APPLOAD}} ilayisha |
| `block_insert` | Hlela | Ifaka ibhulokhi namanani ezakhiwo zayo ngesinyathelo esisodwa |
| `selection_set`, `undo` | Hlela | Ikhetha izinto somyalo olandelayo; ihlehlisa izinyathelo zayo |
| `drawing_save` | Londoloza | {{ui:Londoloza}} ye-CadCraft, noma {{ui:Londoloza njenge}} kwelinye lamafolda akho |
| `drawing_plot` | Thumela ngaphandle | I-PDF noma i-SVG yeshidi noma yemodeli, ngesikali noma ilingane (ama-PDF underlay akakaphrintwa ngale ndlela okwamanje) |

Lapho umsizi esebenzisa umyalo, i-CadCraft ibuza imibuzo yayo emugqeni womyalo esikhundleni sengxoxo (isibonelo ukuthi kufakwe umdwebo wonke noma ibhulokhi eyodwa), ukuze umsizi akwazi ukuyiphendula. {{ui:Amayunithi}} nokuthola kusadinga wena; umsizi utshelwa ukuthi akubuze.

## Sebenza namafayela ngaphandle kokuvula CadCraft

I-CadCraft MCP server (`cadcraft-mcp`) kanye ne-command line (`cadcraft`) zisebenzisa ikhodi yomdwebo ye-CadCraft ngqo ku-Node.js, ngaphandle kwewindi. Zidinga i-Node.js 20 noma entsha.

- **Iseva ye-MCP** isebenza kuphela ngaphakathi kwamafolda oqamba, futhi ngezimvume onikeza kuphela: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Ngaphandle kwe-`--root` ayikwazi ukuvula amafayela; ngaphandle kwe-`--allow` ingafunda kuphela. Ingafunda namamodeli e-IFC, ukubalwa kwamanani nokumaka kumasethi e-PDF.
- **I-command line** yezikripthi zakho: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Amafayela amaningi ngesikhathi esisodwa: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Engeza `--json` ukuze uthole okuphuma okungafundwa uhlelo.

:::note
Uma `npx @getcadcraft/mcp` isho ukuthi iphakheji alitholakali, alikashicilelwa okwamanje. Izindaba ku-getcadcraft.com ziyakutshela lapho lishicilelwa.
:::

## Uma kukhona okungasebenzi

- **Umsizi awubonanga amathuluzi e-CadCraft:** hlola ukuthi isiswitshi sivulwe kule windi, nokuthi le windi ivulwe ku-Studio.
- **"needs the edit permission":** thika **Hlela** ngaphansi kwe-{{ui:Abasizi}}, bese ucela futhi. (Umlayezo: idinga imvume yokuhlela.)
- **"outside the folders assistants may use":** engeza leyo folda ngaphansi kwe-{{ui:Abasizi}} › {{ui:Amafolda angasetshenziswa}}, noma cela umsizi asebenzise ifayela kwifolda osuyiengezile. (Umlayezo: ngaphandle kwamafolda abasizi abangawasebenzisa.)
- **Amaphutha "401" noma "token":** ithokheni ishintshile (i-Studio iqalisiwe kabusha, noma {{ui:Ithokheni entsha}}). Kopisha elisha ezilungiselelweni zomsizi.
- **Ushintsho lwakhe alulungile:** cindezela {{key:Mod+Z}}. Ukucindezela kanye kuhlehlisa isenzo esisodwa sonke somsizi.

## Bona futhi

- [Izincomo zabasizi be-AI](common:assistants-recipes): izibonelo ezisebenzayo, ngayinye nemithi ibiza.
