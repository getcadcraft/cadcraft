---
title: Lietojumprogrammu ielāde (APPLOAD)
summary: Ielādējiet LISP rutīnas un to dialogu failus, izlādējiet tās, ielādējiet vēlreiz no vēstures un glabājiet tās, ko izmantojat, startēšanas komplektā.
keywords: appload, ap, ielādēt lietojumprogrammu, lisp, lsp, dcl, rutīna, startēšanas komplekts, izlādēt, vēsture, ievilkt, ielādēt, pielāgot, pārvaldīt
from: 89e0ee95
---

## Ko iemācīsieties

Kā ielādēt LISP rutīnu (`.lsp` failu), lai tās komandas darbotos CadCraft, kā to izlādēt un kā panākt, lai tā ielādējas katru reizi, kad CadCraft startē.

## Ielādēt rutīnu

1. Atveriet {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Ielādēt lietojumprogrammu…}}, vai ierakstiet {{cmd:APPLOAD}} (vai `AP`) un nospiediet {{key:Enter}}.
2. Noklikšķiniet uz {{ui:Ielādēt failu…}} un izvēlieties vienu vai vairākus `.lsp` failus. Rutīna, kas atver dialoglodziņu, parasti nāk kopā ar `.dcl` failu: izvēlieties arī to.
3. Dialoglodziņš saka, ko katrs fails izveidoja, piemēram, "Ielādēts delblocks.lsp: 1 komanda, DELBLOCKS."
4. Noklikšķiniet uz {{ui:Aizvērt}}, ierakstiet rutīnas komandu un nospiediet {{key:Enter}}.

Varat arī ievilkt `.lsp` un `.dcl` failus zīmējumā vai dialogā Ielādēt lietojumprogrammas: tie tiek ielādēti uzreiz.

Fails tiek nolasīts šeit, jūsu pārlūkā. Nekas netiek augšupielādēts.

:::tip
Nospiediet {{key:Enter}} tukšā komandrindā, lai palaistu rutīnas komandu vēlreiz, tāpat kā jebkuru citu komandu. Arī jūsu komandu aizstājvārdi var to sasniegt: skatiet "Rediģēt komandu aizstājvārdus".
:::

## Izlādēt rutīnu

Dialogā {{ui:Ielādēt lietojumprogrammas}}, sadaļā {{ui:Ielādētās lietojumprogrammas}}, noklikšķiniet uz {{ui:Izlādēt}} blakus failam. Komandas, ko tas izveidoja, pazūd, līdz to ielādēsiet vēlreiz.

## Ielādēt rutīnu katru reizi, kad CadCraft startē

1. Ielādējiet rutīnu.
2. Sadaļā {{ui:Ielādētās lietojumprogrammas}} noklikšķiniet uz {{ui:Pievienot startēšanas komplektam}} blakus tai.

No šī brīža tā ielādējas pati, kad CadCraft startē šajā pārlūkā. Lai to apturētu, sadaļā {{ui:Startēšanas komplekts}} noklikšķiniet uz {{ui:Noņemt}} blakus tai.

Startēšanas komplekts glabā katra faila kopiju šī pārlūka krātuvē. Ja maināt rutīnu, ielādējiet jauno failu un pievienojiet to vēlreiz.

## Ielādēt acad.lsp un acaddoc.lsp no atbalsta mapes (Studio)

CadCraft Studio dialogā {{ui:Ielādēt lietojumprogrammas}} {{ui:Atbalsta mape}} ļauj izvēlēties mapi jūsu datorā. Noklikšķiniet uz {{ui:Izvēlēties mapi…}}. Kad CadCraft startē, tā no šīs mapes nolasa `acad.lsp` un pēc tam `acaddoc.lsp` (neatkarīgi no nosaukumu reģistra), ielādē tos un pēc tam ielādē startēšanas komplektu. `acaddoc.lsp` tiek nolasīts vēlreiz katru reizi, kad atveras jauna zīmējuma cilne. Nekas cits mapē netiek nolasīts, un fails, kas lielāks par 2 MB, tiek izlaists ar paziņojumu.

Ja fails definē funkciju ar nosaukumu `S::STARTUP`, tā izpildās vienreiz pēc failu ielādes (arī pēc startēšanas komplekta). {{ui:Ielādēt tagad}} dara to pēc pieprasījuma; {{ui:Notīrīt}} aizmirst mapi.

Pārlūkā lapa nevar saglabāt mapi, tāpēc atbalsta mapes tajā nav: izmantojiet augstāk minēto startēšanas komplektu. Kompilētie `.fas` un `.vlx` faili un vietējās programmas joprojām tiek noraidīti.

## Ielādēt failu vēlreiz no vēstures

{{ui:Vēsture}} uzskaita failus, ko ielādējāt šajā pārlūkā, jaunākos vispirms. Noklikšķiniet uz {{ui:Ielādēt}} blakus failam, lai to ielādētu vēlreiz, nemeklējot to datorā.

## Faili, ko CadCraft nevar ielādēt

| Fails | Kas tas ir | Ko darīt |
|---|---|---|
| `.fas`, `.vlx` | kompilēts vai aizsargāts LISP | ielādējiet `.lsp` pirmkodu |
| `.arx`, `.crx`, `.dbx` | vietējās Windows programmas | CadCraft šos nevar palaist |
| `.dvb` | VBA projekts | CadCraft šos nevar palaist |
| `.craft`, `.lua`, `.py` | CraftScript skripti | atveriet tos PartCraft Script darba vietā |

Dialogā Ielādēt lietojumprogrammas tiek norādīts, kāds ir fails, kad to izvēlaties.

## Apturēt rutīnu

Nospiediet {{key:Esc}}. Vienā no rutīnas uzvednēm {{key:Esc}} to atceļ tā, kā rutīna to sagaida (tiek izpildīta pati rutīnas tīrīšana). Ja tā ir aizņemta un neko nejautā, {{key:Esc}} to apstādina uzreiz un par to paziņo; jūsu ielādētās rutīnas paliek ielādētas.

:::note
Viss, ko rutīna maina zīmējumā, ir viens solis: viens {{key:Mod+Z}} atsauc visu.
:::
