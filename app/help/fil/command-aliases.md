---
title: I-edit ang mga command alias
summary: Itago ang sarili mong command alias sa isang text file sa pamilyar na format, i-import at i-export ang .pgp file, at i-reload ito gamit ang REINIT.
keywords: alias, aliases, aliasedit, pgp, shortcut, maikling pangalan, reinit, keyboard, i-customize, i-edit ang aliases
from: 2282d36f
---

## Ano ang matututunan mo

Paano magdagdag ng sarili mong maikling pangalan para sa mga command, halimbawa `LL` para sa {{cmd:LINE}}, lahat sa isang text file.

## Magdagdag ng alias

1. Buksan ang {{ui:View}} › {{ui:Higit pa}} › {{ui:I-edit ang aliases…}}, o i-type ang {{cmd:ALIASEDIT}} at pindutin ang {{key:Enter}}.
2. Magdagdag ng linya na may alias, kuwit, at ang command pagkatapos ng star:

```
LL,     *LINE
```

3. I-click ang {{ui:I-save}}. Sinasabi ng command line kung ilan sa mga alias mo ang ginagamit.
4. I-type ang `LL` at pindutin ang {{key:Enter}}: magsisimula ang LINE.

Nasa ibabaw ng sarili ng CadCraft ang mga alias mo. Nananaig ang linya mo kaysa sa built-in na alias na may parehong pangalan; kapag tinanggal mo ang linya mo, babalik ang built-in.

## Mga linyang tinatanggihan ng CadCraft

Inililista ng editor ang bawat problema kasama ang numero ng linya habang nagta-type ka:

- hindi umiiral ang command;
- ang alias ay pangalan na ng isang command (ang `LINE, *CIRCLE` ay magtatago sa LINE);
- hindi `ALIAS, *COMMAND` ang linya;
- nasa dalawang linya ang parehong alias (ang mas huli ang mananaig).

Nilalaktawan ang mga linyang nagsisimula ng programa sa computer mo, gaya ng `NOTEPAD, START, 1, *File to edit: ,`, na may kasamang paalala: hindi makapagsimula ng programa ang app sa browser.

## Dalhin ang mga alias mo mula sa ibang programa

1. Sa alias editor, i-click ang {{ui:I-import ang .pgp…}} at piliin ang file. Maaari mo ring i-drop ang `.pgp` file sa drawing.
2. Suriin ang mga nakalistang problema (tinatanggihan ang mga command na wala sa CadCraft; gumagana ang iba).
3. I-click ang {{ui:I-save}}.

Ang {{ui:I-export ang .pgp}} ay nagse-save ng mga alias ng CadCraft at ng sa iyo bilang iisang file sa parehong format.

## I-reload ang file

I-type ang {{cmd:REINIT}} at pindutin ang {{key:Enter}} para muling ilapat ang aliases file mo. Nakatago ito sa browser na ito; ise-save ito ng desktop app sa sarili nitong folder, at ise-sync ito ng cloud service.

## Mga letra para sa mga option ng command

Ang alias ay nagpapangalan ng command. Para baguhin ang mga letrang sumasagot sa mga option ng command (`P` para sa Polar sa {{cmd:ARRAY}}), tingnan ang [Bigyan ang mga command option ng sarili nilang letra](topic:option-letters).

## Mga keyboard shortcut para sa anumang command

Ang alias ay tina-type; ang shortcut ay isang key. Para bigyan ng sarili nilang key ang isang command:

1. I-click ang {{ui:View}} › {{ui:Higit pa}} › {{ui:Mga keyboard shortcut…}}, o i-type ang `KEYS` at pindutin ang {{key:Enter}}.
2. I-click ang kahon ng {{ui:Key}} at pindutin ang mga key, halimbawa {{key:Alt+Shift+C}}.
3. Sa {{ui:Pinapatakbo}}, isulat ang command, at kung gusto mo, ang ita-type pagkatapos nito: `CIRCLE`, o `ZOOM E`.
4. I-click ang {{ui:Idagdag}}.

Kailangan ng key ng {{key:Mod}} o {{key:Alt}} kasama ang letra o digit, o isang bakanteng function key ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Tinatanggihan ang mga key na gamit na ng CadCraft, ng app o ng browser, at ang mga key na may button na My tools (tingnan ang [Mga button na sarili mo](topic:my-tools)); ipinapaliwanag ito ng kahon. Nakatago ang mga shortcut sa browser na ito (o sa desktop app); inaalis ang isa sa pamamagitan ng {{ui:Alisin}}.
