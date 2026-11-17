---
title: Naudokite CadCraft su DI asistentu
summary: Leiskite savo DI asistentui ar scenarijui dirbti su CadCraft: ką jis gali daryti, kaip prijungti bet kurį MCP klientą ir kaip išlieka jūsų kontrolė (leidimai, anuliavimas, veiklos žurnalas, Atjungti).
keywords: DI, asistentas, agentas, mcp, modelio konteksto protokolas, scenarijus, automatizavimas, komandų eilutė, cli, json, raktas, leidimai, atjungti, veikla, aplankai, keliai, svg, paketinis
from: 06ba4ef6
---

## Ką išmoksite

Kaip leisti DI asistentui (arba jūsų parašytam scenarijui) peržiūrėti brėžinį, vykdyti CadCraft komandas, spausdinti ir įrašyti bei nuspręsti, ką jis gali keisti.

CadCraft **neturi jokio DI** ir niekur nieko nesiunčia. Asistentą pasirenkate patys: bet kurią programą, kuri kalba Modelio konteksto protokolu (MCP). CadCraft jam tik suteikia įrankius, o pasirenkate, kuriuos, jūs.

Yra du būdai:

- **Atidarytas brėžinys.** Asistentas dirba šiame lange, šalia jūsų, per CadCraft Studio jūsų kompiuteryje. Tam skirta {{ui:Parametrai}} › {{ui:CadCraft}} › {{ui:Asistentai}}.
- **Brėžiniai jūsų kompiuteryje, neatidarant programos.** CadCraft MCP serveris ir `cadcraft` komandų eilutė skaito ir rašo DWG bei DXF failus aplankuose, kuriuos nurodote. Žr. toliau „Dirbti su failais neatidarius CadCraft“.

## Įjunkite

1. Atverkite {{ui:Parametrai}} (krumpliaratis programos juostoje arba {{key:Mod+,}}) ir eikite į skirtuką {{ui:CadCraft}}.
2. Skiltyje {{ui:Asistentai}} pažymėkite **Leisti DI asistentams ir scenarijams naudoti CadCraft**. Kol to nepadarysite, jungiklis išjungtas.
3. Pasirinkite, ką jis gali daryti. **Skaitymas** pažymėtas iš pradžių; kitus pažymėkite tik tada, kai jų prireiks.

| Leidimas | Ką gali daryti asistentas |
|---|---|
| Skaitymas | Peržiūrėti brėžinį: aprašyti jį, išvardyti ir rasti objektus, matyti pasirinkimą, aprašyti vaizdą ir padaryti jo nuotrauką, tikrinti pagal sluoksnių ir braižymo taisykles |
| Redagavimas | Vykdyti komandas brėžinyje ir keisti pasirinkimą. Kiekvienas veiksmas yra vienas žingsnis, kurį galite anuliuoti |
| Įrašymas | Įrašyti brėžinį (darbalaukyje – į jo failą; naršyklėje – kaip atsisiuntimą) |
| Eksportas | Spausdinti į PDF ir kurti kitus failus |

## Leiskite naudoti failus pasirinktuose aplankuose

CadCraft Studio asistentas gali atidaryti, įrašyti ir spausdinti failus pagal pavadinimą, o ne per failų dialogus, bet tik aplankuose, kuriuos pridedate skiltyje {{ui:Asistentai}} › {{ui:Aplankai, kuriuos jis gali naudoti}}:

1. Pasirinkite {{ui:Pridėti aplanką…}} ir Studio dialoge pasirinkite aplanką.
2. Dabar asistentas gali išvardyti jame esančius failus (`files_list`), atidaryti brėžinį (`drawing_open`), įrašyti jį ten DWG versija arba kaip DXF, spausdinti į PDF ar SVG failą, įkelti LISP failą ir pateikti komandai failą, kurio ji prašo (`INSERT` `F`, `XATTACH`, taškų failas), arba nurodyti, kur komandos failas turi būti (`COUNT` CSV, `PUBLISH`).
3. {{ui:Šalinti}} iš karto atima aplanką. Keliai bet kur kitur atmetami, o failas, kuris jau ten yra, perrašomas tik tada, kai asistentas to paprašo arba pats jį įrašė.

Atidarymui reikia **Skaitymo**; brėžinio įrašymui – **Įrašymo**; bet kuriam kitam failui – **Eksporto**.

Įrankiai, kurių leidimų neįjungėte, asistentui visai nepasiūlomi. Jei jis vis tiek jų prašo, CadCraft atsisako ir užrašo tai veiklos žurnale. Išjungus jungiklį, visi ryšiai nutrūksta iš karto. {{ui:Atstatyti CadCraft parametrus}} taip pat jį išjungia.

## Prijunkite asistentą

Asistentai jungiasi per **CadCraft Studio** jūsų kompiuteryje: ji paleidžia nedidelį serverį, kurį pasiekia tik šis kompiuteris (adresas `127.0.0.1`), ir jį saugo prieigos raktas, kurį Studio sukuria kiekvieną kartą paleidžiant. Atverkite Studio, pasirinkite {{ui:Prijungti asistentą}} ir nukopijuokite adresą bei raktą.

- Savo asistente pridėkite HTTP tipo MCP serverį su adresu (atrodo kaip `http://127.0.0.1:47615/mcp`) ir antraštę `Authorization: Bearer <token>`. Studio parodo nustatymus, kuriuos reikia įklijuoti.

{{ui:Naujas prieigos raktas}} Studio privers visus prijungtus asistentus prisijungti iš naujo su nauju raktu. Niekada nesidalykite raktu: kas jį turi, gali naudoti jūsų įjungtas programas tol, kol veikia Studio.

:::note
Naršyklės skirtukas negali atidaryti ryšio asistentui: naršyklės programose jungiklis neveikia, kol nenaudojate CadCraft Studio savo kompiuteryje.
:::

## Jūs išlaikote kontrolę

- **Kiekvienas veiksmas yra vienas anuliavimo žingsnis**, pažymėtas asistento pavadinimu, pavyzdžiui „Asistentas: LINE“. Paspauskite {{key:Mod+Z}}, kad atšauktumėte visą paskutinį asistento veiksmą.
- **Matote, ką jis daro.** Jo komandos atsiranda komandų istorijoje su **[Asistentas]** priekyje, o brėžinys perbraižomas, kol jis dirba.
- **Jis laukia jūsų.** Kol vykdote komandą, asistentas gali skaityti, bet ne keisti brėžinio; jam pasakoma bandyti dar kartą, kai baigsite.
- **Žinote, kada jis prijungtas.** Programos juostos mygtukas rodo asistento pavadinimą, kol jis prijungtas. Spustelėkite jį, kad pamatytumėte, ką jis gali, arba kad jį **Atjungtumėte**.
- **Veikla.** {{ui:Parametrai}} › {{ui:CadCraft}} › {{ui:Asistentai}} › {{ui:Veikla}} išvardija kiekvieną iškvietimą: kada, kuris įrankis, ar įvykdytas, ar atmestas, ir kokį anuliavimo žingsnį sukūrė. {{ui:Įrašyti žurnalą}} išsaugo kopiją.

## Ko gali prašyti asistentas

| Įrankis | Leidimas | Ką daro |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Skaitymas | Brėžinio pavadinimas, vienetai, sluoksniai, blokai, lapai; kas matoma ekrane |
| `files_list`, `drawing_open` | Skaitymas | Studio: failai jūsų aplankuose; atidaro vieną iš jų šiame lange |
| `objects_list`, `object_get`, `selection_get` | Skaitymas | Objektai su geometrija, ilgiu ir plotu (arba tik kiekiu pagal tipą ir sluoksnį); pasirinkimas |
| `drawing_check` | Skaitymas | Taisyklės, pavyzdžiui, leidžiami sluoksniai, nieko ant 0 sluoksnio, spalvos pagal sluoksnį, teksto aukščiai |
| `view_screenshot` | Skaitymas | Brėžinio paveikslėlis, toks, koks rodomas |
| `command_run` | Redagavimas | Įveda komandų eilutėje: `LINE 0,0 @100,0 @0,50 ` skaitoma taip, kaip rašytumėte jūs (tarpas baigia atsakymą), arba sąrašas su vienu atsakymu kiekvienai komandai. Ji gali palikti komandą atvirą ir tęsti kitame iškvietime |
| `script_run` | Redagavimas | Scenarijus (`.scr`) arba LISP failas, kaip jį įkelia {{ui:APPLOAD}} |
| `block_insert` | Redagavimas | Įdeda bloką su jo atributų reikšmėmis vienu žingsniu |
| `selection_set`, `undo` | Redagavimas | Pasirenka objektus kitai komandai; anuliuoja savo paties žingsnius |
| `drawing_save` | Įrašymas | CadCraft savo {{ui:Įrašyti}}, arba {{ui:Įrašyti kaip}} į vieną iš jūsų aplankų |
| `drawing_plot` | Eksportas | PDF arba SVG lapo ar modelio, pagal mastelį arba pritaikytą (PDF pagrindai šiuo būdu dar nespausdinami) |

Kai asistentas vykdo komandą, CadCraft savo klausimus užduoda komandų eilutėje, o ne dialoge (pavyzdžiui, ar įterpti visą brėžinį, ar vieną bloką), kad asistentas galėtų atsakyti. {{ui:Biblioteka}} ir Ieškoti vis tiek reikalauja jūsų; asistentui nurodyta jūsų klausti.

## Dirbti su failais neatidarius CadCraft

CadCraft MCP serveris (`cadcraft-mcp`) ir komandų eilutė (`cadcraft`) vykdo CadCraft brėžinių kodą Node.js aplinkoje, be lango. Jiems reikia Node.js 20 ar naujesnės versijos.

- **MCP serveris** veikia tik aplankuose, kuriuos nurodote, ir tik su leidimais, kuriuos suteikiate: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Be `--root` jis negali atidaryti jokio failo; be `--allow` gali tik skaityti. Jis taip pat gali skaityti IFC modelius, kiekių skaičiavimus ir žymėjimus PDF rinkiniuose.
- **Komandų eilutė** skirta jūsų pačių scenarijams: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Keli failai vienu metu: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Pridėkite `--json`, kad gautumėte išvestį, kurią gali skaityti programa.

:::note
Jei `npx @getcadcraft/mcp` praneša, kad paketas nerastas, jis dar nepaskelbtas. Naujienos getcadcraft.com pasakys, kada.
:::

## Jei kas nors neveikia

- **Asistentas nemato CadCraft įrankių:** patikrinkite, ar jungiklis įjungtas šiame lange ir ar langas atidarytas Studio.
- **„reikia redagavimo leidimo“:** pažymėkite **Redagavimas** skiltyje {{ui:Asistentai}}, tada paprašykite dar kartą.
- **„už aplankų, kuriuos asistentai gali naudoti, ribų“:** pridėkite tą aplanką skiltyje {{ui:Asistentai}} › {{ui:Aplankai, kuriuos jis gali naudoti}}, arba paprašykite asistento naudoti failą aplanke, kurį jau pridėjote.
- **Klaidos „401“ arba „token“:** raktas pasikeitė (Studio buvo perkrautas arba paspaustas {{ui:Naujas prieigos raktas}}). Įklijuokite naują raktą į asistento nustatymus.
- **Jo pakeitimas buvo neteisingas:** paspauskite {{key:Mod+Z}}. Vienas paspaudimas atšaukia vieną visą asistento veiksmą.

## Taip pat žr.

- [Receptai DI asistentams](common:assistants-recipes): pavyzdžiai su įrankiais, kuriuos jie iškviečia.
