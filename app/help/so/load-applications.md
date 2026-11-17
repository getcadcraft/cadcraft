---
title: Soo rar codsiyada (APPLOAD)
summary: Soo rar habraacyada LISP iyo faylalkooda dialog-ka, ka saar, dib uga soo rar taariikhda, oo kuwa aad isticmaasho ku hay Startup Suite.
keywords: appload, ap, soo rar codsi, lisp, lsp, dcl, habraac, startup suite, ka saar, taariikh, dhig, soo rar, habayn, maamul
from: 89e0ee95
---

## Waxa aad baran doontid

Sida loo soo raro habraac LISP (fayl `.lsp`) si amarradiisu u shaqeeyaan CadCraft-ka, sida loo ka saaro, iyo sida ay mar kasta u soo rari doonto markii CadCraft bilaabmo.

## Soo rar habraac

1. Fur {{ui:View}} › {{ui:More}} › {{ui:Load application…}}, ama ku qor {{cmd:APPLOAD}} (ama `AP`) oo riix {{key:Enter}}.
2. Guji {{ui:Load a file…}} oo dooro hal ama dhowr fayl `.lsp`. Habraac ku furma dialog caadi ahaan wuxuu la socdaa fayl `.dcl`: dooro sidoo kale.
3. Dialog-ku wuxuu sheegayaa waxa fayl kasta sameeyay, tusaale ahaan "Waa la soo rartay delblocks.lsp: 1 amar, DELBLOCKS."
4. Guji {{ui:Close}}, ku qor amarka habraacka oo riix {{key:Enter}}.

Waxaad sidoo kale fayllada `.lsp` iyo `.dcl` ku dhigi kartaa naqshadda, ama dialog-ka Load applications: waxay soo rari doonaan isla markiiba.

Faylka halkan waxaa lagu akhriyaa browser-kaaga. Waxba lama soo gelin.

:::tip
Riix {{key:Enter}} sadar amar oo madhan si aad habraacka amarkiisa mar kale u fuliso, sida amar kasta oo kale. Magacyada gaagaaban ee amarrada (aliases) ayaa sidoo kale gaari kara: eeg "Wax ka beddel magacyada gaagaaban ee amarrada".
:::

## Ka saar habraac

Hoosta {{ui:Loaded applications}}, ku dhufo {{ui:Load applications}}, guji {{ui:Unload}} xagga faylka. Amarradii uu sameeyay way baxaan ilaa aad mar kale soo rarto.

## Soo rar habraac mar kasta oo CadCraft bilaabmo

1. Soo rar habraaca.
2. Hoosta {{ui:Loaded applications}}, guji {{ui:Add to Startup Suite}} xagga.

Hadda isagu wuu isu soo raraa mar kasta oo CadCraft ku bilaabmo browser-kan. Si aad u joojiso, guji {{ui:Remove}} xagga hoosta {{ui:Startup Suite}}.

Startup Suite wuxuu hayaa nuqul fayl kasta oo ku jira kaydinta browser-kan. Haddii aad habraaca beddesho, soo rar faylka cusub oo mar kale ku dar.

## Soo rar acad.lsp iyo acaddoc.lsp folder taageero (Studio)

CadCraft Studio-ga, {{ui:Support folder}} ku jira dialog-ka {{ui:Load applications}} wuxuu qaadaa folder kumbiyuutarkaaga. Guji {{ui:Choose folder…}}. Markii CadCraft bilaabmo, wuxuu akhrisaa `acad.lsp` kadibna `acaddoc.lsp` folderkaas (xarafkoodu weyn ama yar yahay ha ahaadee), soo rartaa, kadibna soo rartaa Startup Suite. `acaddoc.lsp` mar kasta oo naqshad cusub la furo ayaa dib loo akhriyaa. Waxa kale ee folderka ku jira looma akhriyo, faylka ka weyn 2 MB waa la dhaafaa oo fariin ayaa la siiyaa.

Haddii fayl uu qeexo function magaciisu yahay `S::STARTUP`, wuxuu hal mar shaqeeyaa kadib markii faylalka la soo rarto (sidoo kale kadib Startup Suite). {{ui:Load now}} wuxuu isla sidaas sameeyaa marka la codsado; {{ui:Clear}} wuxuu ilaaway folderka.

Browser-ka bog ma haysan karo folder, sidaas darteed ma jiro support folder: isticmaal Startup Suite kor ku xusan. Faylasha la ururiyey ee `.fas` iyo `.vlx` iyo barnaamijyada asalka ah weli waa la diidaa.

## Dib u soo rar fayl taariikhda

{{ui:History}} wuxuu liistaa faylasha aad soo rartay browser-kan, kan ugu dambeeya marka hore. Guji {{ui:Load}} xagga mid si aad dib u soo rarto, adigoo aan ku raadinayn kumbiyuutarkaaga.

## Faylasha CadCraft ma soo rari karo

| Fayl | Waa maxay | Waxa la sameeyo |
|---|---|---|
| `.fas`, `.vlx` | LISP la ururiyey ama la ilaaliyay | soo rar isha `.lsp` |
| `.arx`, `.crx`, `.dbx` | barnaamijyada asalka ah ee Windows | ma jiro hab lagu fuliyo CadCraft-ka |
| `.dvb` | mashruuc VBA | ma jiro hab lagu fuliyo CadCraft-ka |
| `.craft`, `.lua`, `.py` | qoraallada CraftScript | ka fur goobta Script-ka ee PartCraft |

Dialog-ka Load applications wuxuu sheegaa faylka mid ka mid ah markii aad doorato.

## Jooji habraac

Riix {{key:Esc}}. Markii habraacku weydiiyo wax, Esc wuxuu joojiyaa siduu habraacku rabo (nadiifintiisa ayaa socota). Haddii ay mashquul tahay oo aanay wax weydiinin, Esc wuu joojiyaa si toos ah oo wuu sheegaa; habraacyada la soo rartay ayaa weli soo rarnaan.

:::note
Waxa kasta oo habraacku beddelo naqshadda waa hal tallaabo: hal {{key:Mod+Z}} ayaa dhammaan ka celin kara.
:::
