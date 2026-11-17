---
title: I-edit ang command aliases
summary: Itago ang sarili mong command aliases sa isang text file sa pamilyar na format, mag-import at mag-export ng .pgp file, at i-reload ito gamit ang REINIT.
keywords: alias, aliases, aliasedit, pgp, shortcut, maikling pangalan, reinit, keyboard, i-customize, i-edit ang aliases
from: 6ab6fa0e
---

## Ano ang matututunan mo

Paano magdagdag ng sarili mong maikling pangalan para sa mga command, halimbawa `LL` para sa {{cmd:LINE}}, lahat sa iisang text file.

## Magdagdag ng alias

1. Buksan ang {{ui:View}} › {{ui:Higit pa}} › {{ui:I-edit ang aliases…}}, o i-type ang {{cmd:ALIASEDIT}} at pindutin ang {{key:Enter}}.
2. Magdagdag ng linya na may alias, kuwit, at ang command pagkatapos ng bituin:

```
LL,     *LINE
```

3. I-click ang {{ui:I-save}}. Sinasabi ng command line kung ilan sa iyong alias ang ginagamit.
4. I-type ang `LL` at pindutin ang {{key:Enter}}: magsisimula ang LINE.

Nasa ibabaw ng sarili ng CadCraft ang iyong mga alias. Nananaig ang linya mo sa built-in na alias na may parehong pangalan; tanggalin ang linya mo at babalik ang built-in.

## Mga linyang tinatanggihan ng CadCraft

Inililista ng editor ang bawat problema kasama ang numero ng linya habang nagta-type ka:

- wala ang command;
- ang alias ay pangalan na ng command (ang `LINE, *CIRCLE` ay magtatago ng LINE);
- ang linya ay hindi `ALIAS, *COMMAND`;
- nasa dalawang linya ang parehong alias (ang huling linya ang mananaig).

Ang mga linyang nagsisimula ng program sa iyong computer, gaya ng `NOTEPAD, START, 1, *File to edit: ,`, ay nilalaktawan na may babala: hindi maaaring magsimula ng program ang app sa browser.

## Dalhin ang iyong mga alias mula sa ibang program

1. Sa alias editor, i-click ang {{ui:I-import ang .pgp…}} at piliin ang file. Maaari mo ring i-drop ang `.pgp` file sa drawing.
2. Suriin ang mga problemang nakalista (tinatanggihan ang mga command na wala sa CadCraft, gumagana ang iba).
3. I-click ang {{ui:I-save}}.

Ang {{ui:I-export ang .pgp}} ay nagse-save ng mga alias ng CadCraft at ng iyo bilang iisang file sa parehong format.

## I-reload ang file

I-type ang {{cmd:REINIT}} at pindutin ang {{key:Enter}} para ilapat muli ang iyong aliases file. Itinatago ito sa browser na ito; ilalagay ito ng desktop app sa sarili nitong folder, at isi-sync ito ng cloud service.

## Mga keyboard shortcut para sa anumang command

Ang alias ay tina-type; ang shortcut ay key. Para bigyan ang command ng sarili mong key:

1. I-click ang {{ui:View}} › {{ui:Higit pa}} › {{ui:Mga keyboard shortcut…}}, o i-type ang `KEYS` at pindutin ang {{key:Enter}}.
2. I-click ang kahong {{ui:Key}} at pindutin ang mga key, halimbawa {{key:Alt+Shift+C}}.
3. Sa {{ui:Pinapatakbo}}, isulat ang command, at kung gusto mo, ang ita-type pagkatapos nito: `CIRCLE`, o `ZOOM E`.
4. I-click ang {{ui:Idagdag}}.

Kailangan ng key ang {{key:Mod}} o {{key:Alt}} kasama ng letra o digit, o isang libreng function key ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Tinatanggihan ang mga key na gamit na ng CadCraft, ng app o ng browser, at ng mga button na My tools (tingnan ang [Mga sariling button](topic:my-tools)), at sinasabi ng kahon kung bakit. Nananatili ang mga shortcut sa browser na ito (o desktop app); inaalis ito ng {{ui:Alisin}}.
