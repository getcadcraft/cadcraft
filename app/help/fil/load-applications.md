---
title: I-load ang mga application (APPLOAD)
summary: I-load ang mga LISP routine at ang kanilang dialog file, i-unload ang mga ito, i-load muli mula sa kasaysayan, at itago sa Startup Suite ang mga ginagamit mo.
keywords: appload, ap, load application, lisp, lsp, dcl, routine, startup suite, i-unload, kasaysayan, drop, i-load, i-customize, manage
from: 89e0ee95
---

## Ano ang matututunan mo

Paano mag-load ng LISP routine (isang `.lsp` file) para gumana ang mga command nito sa CadCraft, paano ito i-unload, at paano ito mao-load tuwing magsisimula ang CadCraft.

## Mag-load ng routine

1. Buksan ang {{ui:View}} › {{ui:More}} › {{ui:Load application…}}, o i-type ang {{cmd:APPLOAD}} (o `AP`) at pindutin ang {{key:Enter}}.
2. I-click ang {{ui:Load a file…}} at piliin ang isa o higit pang `.lsp` file. Kadalasan may kasamang `.dcl` file ang routine na nagbubukas ng dialog: piliin din iyon.
3. Sinasabi ng dialog kung ano ang ginawa ng bawat file, halimbawa "Loaded delblocks.lsp: 1 command, DELBLOCKS."
4. I-click ang {{ui:Close}}, i-type ang command ng routine at pindutin ang {{key:Enter}}.

Maaari mo ring i-drop ang mga `.lsp` at `.dcl` file sa drawing, o sa dialog na Load applications: agad silang mao-load.

Binabasa rito ang file sa browser mo. Walang ina-upload.

:::tip
Pindutin ang {{key:Enter}} sa walang lamang command line para patakbuhin muli ang command ng routine, gaya ng alinmang command. Maaabot din ito ng iyong command alias: tingnan ang "Edit command aliases".
:::

## I-unload ang routine

Sa {{ui:Load applications}}, sa ilalim ng {{ui:Loaded applications}}, i-click ang {{ui:Unload}} sa tabi ng file. Mawawala ang mga command na ginawa nito hanggang i-load mo ulit ito.

## I-load ang routine sa bawat pagsisimula ng CadCraft

1. I-load ang routine.
2. Sa ilalim ng {{ui:Loaded applications}}, i-click ang {{ui:Add to Startup Suite}} sa tabi nito.

Mula ngayon, kusa itong mao-load tuwing magsisimula ang CadCraft sa browser na ito. Para itigil iyon, i-click ang {{ui:Remove}} sa tabi nito sa ilalim ng {{ui:Startup Suite}}.

Nag-iingat ang Startup Suite ng kopya ng bawat file sa storage ng browser na ito. Kung babaguhin mo ang routine, i-load ang bagong file at idagdag muli ito.

## I-load ang acad.lsp at acaddoc.lsp mula sa support folder (Studio)

Sa CadCraft Studio, ang {{ui:Support folder}} sa dialog na {{ui:Load applications}} ay kumukuha ng folder sa iyong computer. I-click ang {{ui:Choose folder…}}. Pagsisimula ng CadCraft, babasahin nito ang `acad.lsp` at pagkatapos ang `acaddoc.lsp` mula sa folder na iyon (anuman ang letter case ng mga pangalan), ilo-load ang mga ito, at saka ilo-load ang Startup Suite. Muling binabasa ang `acaddoc.lsp` sa bawat pagbukas ng bagong drawing tab. Walang ibang binabasa sa folder, at nilalaktawan ang file na lampas 2 MB na may mensahe.

Kung may tinutukoy na function na `S::STARTUP` ang file, tatakbo ito nang isang beses pagkatapos ma-load ang mga file (pagkatapos din ng Startup Suite). Ginagawa rin ito ng {{ui:Load now}} kapag hiniling; kinakalimutan ng {{ui:Clear}} ang folder.

Sa browser, hindi kayang panatilihin ng page ang isang folder, kaya walang support folder: gamitin ang Startup Suite sa itaas. Hindi pa rin tinatanggap ang mga compiled na `.fas` at `.vlx` file at ang mga native na program.

## Mag-load muli ng file mula sa kasaysayan

Nakalista sa {{ui:History}} ang mga file na na-load mo sa browser na ito, ang pinakabago ang nasa itaas. I-click ang {{ui:Load}} sa tabi ng isa para i-load ulit ito, nang hindi ito hinahanap sa computer mo.

## Mga file na hindi kayang i-load ng CadCraft

| File | Ano ito | Ano ang gagawin |
|---|---|---|
| `.fas`, `.vlx` | compiled o protected na LISP | i-load ang `.lsp` source sa halip |
| `.arx`, `.crx`, `.dbx` | native na Windows program | walang paraan para patakbuhin ang mga ito sa CadCraft |
| `.dvb` | isang VBA project | walang paraan para patakbuhin ang mga ito sa CadCraft |
| `.craft`, `.lua`, `.py` | CraftScript script | buksan ang mga ito sa Script workspace ng PartCraft |

Sinasabi ng dialog na Load applications kung alin sa mga ito ang file kapag pinili mo ito.

## Itigil ang routine

Pindutin ang {{key:Esc}}. Sa isa sa mga prompt ng routine, kakanselahin ito ng Esc sa paraang inaasahan ng routine (tatakbo ang sarili nitong paglilinis). Kung abala ito at walang tinatanong, ititigil ito ng Esc nang tuluyan at sasabihin ito; mananatiling naka-load ang mga routine mo.

:::note
Ang lahat ng binabago ng routine sa drawing ay isang hakbang: isang {{key:Mod+Z}} ang magbabawi ng lahat.
:::
