---
title: Ngarko aplikacionet (APPLOAD)
summary: Ngarkoni rutina LISP dhe skedarët e dialogut të tyre, shkarkoni ato, ngarkoni ato përsëri nga historiku, dhe mbani ato që përdorni në Paketën e nisjes.
keywords: appload, ap, ngarko aplikacion, lisp, lsp, dcl, rutinë, paketa e nisjes, shkarko, historiku, lësho, ngarko, personalizo, menaxho
from: 89e0ee95
---

## Çfarë do të mësoni

Si të ngarkoni një rutinë LISP (një skedar `.lsp`) që komandat e saj të funksionojnë në CadCraft, si ta shkarkoni, dhe si ta bëni të ngarkohet çdo herë kur nisët CadCraft.

## Ngarkoni një rutinë

1. Hapni {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Ngarko aplikacion…}}, ose shkruani {{cmd:APPLOAD}} (ose `AP`) dhe shtypni {{key:Enter}}.
2. Klikoni {{ui:Ngarko një skedar…}} dhe zgjidhni një ose më shumë skedarë `.lsp`. Një rutinë që hap një dialog zakonisht vjen me një skedar `.dcl`: zgjidheni edhe atë.
3. Dialogu tregon çfarë krijoi secili skedar, për shembull "Ngarkoi delblocks.lsp: 1 komandë, DELBLOCKS."
4. Klikoni {{ui:Mbyll}}, shkruani komandën e rutinës dhe shtypni {{key:Enter}}.

Mund të lëshoni edhe skedarët `.lsp` dhe `.dcl` mbi vizatim, ose mbi dialogun Ngarko aplikacionet: ngarkohen menjëherë.

Skedari lexohet këtu, në shfletuesin tuaj. Asgjë nuk ngarkohet.

:::tip
Shtypni {{key:Enter}} në një rresht komandash bosh për ta ekzekutuar përsëri komandën e rutinës, si çdo komandë tjetër. Aliaset tuaja të komandave mund ta arrijnë gjithashtu: shihni "Redakto aliaset e komandave".
:::

## Shkarkoni një rutinë

Te {{ui:Ngarko aplikacionet}}, nën {{ui:Aplikacionet e ngarkuara}}, klikoni {{ui:Shkarko}} pranë skedarit. Komandat që ai krijoi zhduken derisa ta ngarkoni përsëri.

## Ngarkoni një rutinë çdo herë që nisët CadCraft

1. Ngarkoni rutinën.
2. Nën {{ui:Aplikacionet e ngarkuara}}, klikoni {{ui:Shto në Paketën e nisjes}} pranë saj.

Që nga tani, ajo ngarkohet vetvetiu sa herë që CadCraft nisët në këtë shfletues. Për ta ndaluar, klikoni {{ui:Hiq}} pranë saj nën {{ui:Paketa e nisjes}}.

Paketa e nisjes mban një kopje të çdo skedari në hapësirën e ruajtjes të këtij shfletuesi. Nëse e ndryshoni rutinën, ngarkoni skedarin e ri dhe shtojeni sërish.

## Ngarkoni acad.lsp dhe acaddoc.lsp nga një dosje mbështetëse (Studio)

Në CadCraft Studio, {{ui:Dosja mbështetëse}} në dialogun {{ui:Ngarko aplikacionet}} zgjedh një dosje në kompjuterin tuaj. Klikoni {{ui:Zgjidh dosjen…}}. Kur nisët CadCraft, ai lexon `acad.lsp` dhe pastaj `acaddoc.lsp` nga ajo dosje (pavarësisht nga shkronjat e emrave), i ngarkon, dhe pastaj ngarkon Paketën e nisjes. `acaddoc.lsp` lexohet përsëri sa herë hapet një skedë e re vizatimi. Asgjë tjetër në dosje nuk lexohet, dhe një skedar mbi 2 MB anashkalohet me një mesazh.

Nëse një skedar përcakton një funksion me emrin `S::STARTUP`, ai ekzekutohet një herë pasi skedarët janë ngarkuar (edhe pas Paketës së nisjes). {{ui:Ngarko tani}} e bën të njëjtën gjë me kërkesë; {{ui:Pastro}} harron dosjen.

Në shfletues një faqe nuk mund ta mbajë një dosje, kështu që nuk ka dosje mbështetëse: përdorni Paketën e nisjes më sipër. Skedarët e përpiluar `.fas` dhe `.vlx` dhe programet vendase mbeten të refuzuara.

## Ngarkoni sërish një skedar nga historiku

{{ui:Historiku}} lista skedarët që keni ngarkuar në këtë shfletues, më të rinjtë e parë. Klikoni {{ui:Ngarko}} pranë një skedari për ta ngarkuar sërish, pa e kërkuar në kompjuterin tuaj.

## Skedarët që CadCraft nuk mund t'i ngarkojë

| Skedari | Çfarë është | Çfarë të bëni |
|---|---|---|
| `.fas`, `.vlx` | LISP i përpiluar ose i mbrojtur | ngarkoni burimin `.lsp` në vend të tij |
| `.arx`, `.crx`, `.dbx` | programe vendase të Windows | nuk ka asnjë mënyrë për t'i ekzekutuar këto në CadCraft |
| `.dvb` | një projekt VBA | nuk ka asnjë mënyrë për t'i ekzekutuar këto në CadCraft |
| `.craft`, `.lua`, `.py` | skripte CraftScript | hapini ato në hapësirën e Skriptit të PartCraft |

Dialogu Ngarko aplikacionet thotë se cilit prej këtyre i përket një skedar kur e zgjidhni.

## Ndaloni një rutinë

Shtypni {{key:Esc}}. Te një nga kërkesat e rutinës, Esc e anulon atë në mënyrën që pret rutina (pastrimi i saj vepron). Nëse është e zënë dhe nuk po pyet asgjë, Esc e ndalon menjëherë dhe e thotë këtë; rutinat e ngarkuara mbeten të ngarkuara.

:::note
Gjithçka që një rutinë ndryshon në vizatim është një hap i vetëm: një {{key:Mod+Z}} e kthen të gjitha prapa.
:::
