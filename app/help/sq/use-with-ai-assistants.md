---
title: Përdorni CadCraft me një asistent AI
summary: Lejoni asistentin tuaj AI ose skriptin tuaj të punojë me CadCraft: çfarë mund të bëjë, si lidhet çdo klient MCP, dhe si e mbani kontrollin (leje, zhbërje, regjistri i aktivitetit, Shkëput).
keywords: ai, asistent, agjent, mcp, model context protocol, skript, automatizim, rreshti i komandës, cli, json, token, leje, shkëput, aktivitet, dosje, shteg, svg, grup
from: 06ba4ef6
---

## Çfarë do të mësoni

Si të lejoni një asistent AI (ose një skript që keni shkruar) të shikojë një vizatim, të ekzekutojë komandat e CadCraft, të plotojë dhe të ruajë, dhe si të vendosni se çfarë lejohet të prekë.

CadCraft nuk ka AI të vetin dhe nuk dërgon asgjë askund. Ju sillni asistentin: çdo program që flet Model Context Protocol (MCP). CadCraft i jep vetëm mjete, dhe ju zgjidhni cilat.

Ka dy mënyra për t'u futur:

- **Vizatimi që keni hapur.** Asistenti punon në këtë dritare, pranë jush, përmes CadCraft Studio në kompjuterin tuaj. Për këtë shërben {{ui:Cilësimet}} › {{ui:CadCraft}} › {{ui:Asistentët}}.
- **Vizatime në kompjuterin tuaj, pa hapur aplikacionin.** Serveri MCP i CadCraft dhe komanda `cadcraft` lexojnë dhe shkruajnë skedarë DWG dhe DXF në dosjet që ju emëroni. Shihni "Punoni me skedarë pa hapur CadCraft" më poshtë.

## Ndezeni

1. Hapni {{ui:Cilësimet}} (ingranazhi në shiritin e aplikacionit, ose {{key:Mod+,}}) dhe shkoni te skeda {{ui:CadCraft}}.
2. Nën {{ui:Asistentët}}, zgjidhni **Lejo asistentët AI dhe skriptet të përdorin CadCraft**. Është i fikur derisa ta bëni këtë.
3. Zgjidhni çfarë mund të bëjë. **Lexo** është e zgjedhur në fillim; zgjidhni të tjerat vetëm kur ju duhen.

| Leje | Çfarë mund të bëjë asistenti |
|---|---|
| Lexo | Të shikojë vizatimin: ta përshkruajë, të listojë dhe gjejë objekte, të shohë përzgjedhjen, të përshkruajë pamjen dhe ta fotografojë, ta kontrollojë sipas rregullave të shtresave dhe të vizatimit |
| Redakto | Të ekzekutojë komanda në vizatim dhe të ndryshojë përzgjedhjen. Çdo veprim është një hap që mund ta zhbëni |
| Ruaj | Të ruajë vizatimin (në desktop, te skedari i tij; në shfletues, si shkarkim) |
| Eksporto | Të plotojë në PDF dhe të bëjë skedarë të tjerë |

## Lejoje të përdorë skedarë në dosje që zgjidhni

Në CadCraft Studio një asistent mund të hapë, ruajë dhe plotojë skedarë me emër, në vend që të përdorë dialogët e skedarëve, por vetëm brenda dosjeve që shtoni nën {{ui:Asistentët}} › {{ui:Dosjet që mund t'i përdorë}}:

1. Zgjidhni {{ui:Shto një dosje…}} dhe zgjidhni dosjen në dialogun e vetë Studio.
2. Asistenti tani mund të listojë skedarët atje (`files_list`), të hapë një vizatim (`drawing_open`), ta ruajë atje në një version DWG ose si DXF, të plotojë në një skedar PDF ose SVG, të ngarkojë një skedar LISP, dhe t'i japë një komande skedarin që kërkon (`INSERT` `F`, `XATTACH`, një skedar pikash) ose të thotë ku shkon skedari i një komande (CSV i `COUNT`, `PUBLISH`).
3. {{ui:Hiq (R)}} e merr menjëherë mbrapsht një dosje. Shtigjet kudo tjetër refuzohen, dhe një skedar që ekziston tashmë zëvendësohet vetëm kur asistenti e kërkon këtë ose e ka shkruar vetë skedarin.

Hapja kërkon **Lexo**; shkrimi i një vizatimi kërkon **Ruaj**; çdo skedar tjetër kërkon **Eksporto**.

Mjetet jashtë lejeve që keni zgjedhur nuk i ofrohen fare asistentit, dhe nëse ai kërkon një mjet të tillë, CadCraft e refuzon dhe e shkruan në regjistrin e aktivitetit. Fikja e çelësit ndërpret menjëherë çdo lidhje. {{ui:Rivendos cilësimet e CadCraft}} e fik gjithashtu.

## Lidhni asistentin tuaj

Asistentët lidhen përmes **CadCraft Studio** në kompjuterin tuaj: ai nxjerr një server të vogël që vetëm ky kompjuter mund ta arrijë (adresa `127.0.0.1`), i mbrojtur nga një token që Studio e krijon çdo herë kur niset. Hapni Studio, zgjidhni {{ui:Lidh një asistent}}, dhe kopjoni adresën dhe tokenin.

- Në asistentin tuaj, shtoni një server MCP të tipit HTTP me adresën (duket si `http://127.0.0.1:47615/mcp`) dhe header-in `Authorization: Bearer <token>`. Studio shfaq cilësimet për t'i ngjitur.

{{ui:Token i ri}} në Studio i bën të gjithë asistentët e lidhur të rilidhen me tokenin e ri. Mos e ndani kurrë tokenin: kushdo që e ka mund të përdorë aplikacionet që keni ndezur, për aq kohë sa Studio është duke punuar.

:::note
Një skedë shfletuesi nuk mund të hapë një lidhje për një asistent: në aplikacionet e shfletuesit çelësi nuk ka efekt derisa të përdorni CadCraft Studio në kompjuterin tuaj.
:::

## Ju mbetet kontrolli

- **Çdo veprim është një hap zhbërjeje**, i etiketuar me emrin e asistentit për të, për shembull "Asistent: LINE". Shtypni {{key:Mod+Z}} për ta marrë mbrapsht veprimin e fundit të asistentit, në tërësi.
- **Shihni çfarë bën.** Komandat e tij shfaqen në historikun e komandave me **[Asistent]** para tyre, dhe vizatimi rivizatohet ndërsa punon.
- **Pret ju.** Ndërsa jeni në mes të një komande, asistenti mund të lexojë por jo të ndryshojë vizatimin; i thuhet të provojë përsëri kur të keni mbaruar.
- **E dini kur është i lidhur.** Një buton në shiritin e aplikacionit e emëron asistentin ndërsa është i lidhur. Klikoni mbi të për të parë çfarë lejohet të bëjë, ose për ta **Shkëput**.
- **Aktiviteti.** {{ui:Cilësimet}} › {{ui:CadCraft}} › {{ui:Asistentët}} › {{ui:Aktiviteti}} liston çdo thirrje: kur, cili mjet, e kryer ose e refuzuar, dhe hapi i zhbërjes që ka bërë. {{ui:Ruaj regjistrin}} mban një kopje.

## Çfarë mund të kërkojë një asistent

| Mjeti | Leje | Çfarë bën |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Lexo | Emri i vizatimit, njësitë, shtresat, bllokimet, fletët; çfarë është në ekran |
| `files_list`, `drawing_open` | Lexo | Studio: skedarët në dosjet tuaja; hap një prej tyre në këtë dritare |
| `objects_list`, `object_get`, `selection_get` | Lexo | Objektet me gjeometrinë, gjatësinë dhe sipërfaqen (ose vetëm sa janë, sipas tipit dhe shtresës); përzgjedhjen |
| `drawing_check` | Lexo | Rregulla si shtresat e lejuara, asgjë në shtresën 0, ngjyra ByLayer, lartësitë e tekstit |
| `view_screenshot` | Lexo | Një foto e vizatimit ashtu siç shfaqet |
| `command_run` | Redakto | Shkruan në rreshtin e komandës: `LINE 0,0 @100,0 @0,50 ` lexohet ashtu siç do ta shkruanit (një hapësirë mbyll një përgjigje), ose një listë me nga një përgjigje për secilën. Mund ta lërë një komandë të hapur dhe ta vazhdojë në thirrjen e radhës |
| `script_run` | Redakto | Një skript (`.scr`) ose një skedar LISP, ashtu siç e ngarkon {{ui:APPLOAD}} |
| `block_insert` | Redakto | Vendos një bllok me vlerat e atributeve të tij, në një hap |
| `selection_set`, `undo` | Redakto | Përzgjedh objekte për komandën e radhës; zhbën hapat e vet |
| `drawing_save` | Ruaj | {{ui:Ruaj}} e vetë CadCraft, ose {{ui:Ruaj si}} në një nga dosjet tuaja |
| `drawing_plot` | Eksporto | Një PDF ose SVG e një fletë ose e modelit, në një shkallë ose të përshtatur (nënvizimet PDF nuk printohen kështu ende) |

Ndërsa një asistent ekzekuton një komandë, CadCraft i bën pyetjet e veta në rreshtin e komandës në vend të një dialogu (për shembull, nëse të futet një vizatim i tërë apo vetëm një bllok), që asistenti t'u përgjigjet. Bibliotekës dhe Gjej u duhet ende ju; asistentit i thuhet t'ju pyesë.

## Punoni me skedarë pa hapur CadCraft

Serveri MCP i CadCraft (`cadcraft-mcp`) dhe rreshti i komandës (`cadcraft`) e ekzekutojnë kodin e vet të vizatimit në Node.js, pa dritare. Kërkojnë Node.js 20 ose më të ri.

- **Serveri MCP** punon vetëm brenda dosjeve që emëroni, dhe vetëm me lejet që i jepni: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Pa `--root` nuk mund të hapë asnjë skedar; pa `--allow` mund vetëm të lexojë. Mund të lexojë gjithashtu modele IFC, llogaritje sasish dhe shënimet në grupet PDF.
- **Rreshti i komandës** është për skriptet tuaja: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Disa skedarë njëherësh: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Shtoni `--json` për një dalje që mund ta lexojë një program.

:::note
Nëse `npx @getcadcraft/mcp` thotë se paketa nuk gjendet, ajo s'është botuar ende. Lajmet në getcadcraft.com do të thonë kur të jetë.
:::

## Nëse diçka nuk funksionon

- **Asistenti nuk sheh mjetet e CadCraft:** kontrolloni që çelësi është i ndezur në këtë dritare, dhe që dritarja është e hapur në Studio.
- **„kërkon lejen e redaktimit“:** zgjidhni **Redakto** nën {{ui:Asistentët}}, pastaj pyeteni sërish.
- **„jashtë dosjeve që mund t'i përdorin asistentët“:** shtoni atë dosje nën {{ui:Asistentët}} › {{ui:Dosjet që mund t'i përdorë}}, ose kërkojini asistentit të përdorë një skedar në një dosje që keni shtuar tashmë.
- **Gabimet „401“ ose „token“:** tokeni ka ndryshuar (Studio u rinis, ose {{ui:Token i ri}}). Kopjoni të riun te cilësimet e asistentit.
- **Ndryshimi i tij ishte i gabuar:** shtypni {{key:Mod+Z}}. Një shtypje heq mbrapsht një veprim të tërë të asistentit.

## Shih edhe

- [Receta për asistentët AI](common:assistants-recipes): shembuj të punuar, secili me mjetet që thërret.
