---
title: Izmantot CadCraft ar MI asistentu
summary: Ļaujiet savam MI asistentam vai skriptam strādāt ar CadCraft: ko tas drīkst darīt, kā pieslēgt jebkuru MCP klientu un kā jūs paliekat vadībā (atļaujas, atsaukšana, aktivitāšu žurnāls, Atvienot).
keywords: mi, asistents, aģents, mcp, model context protocol, skripts, automatizācija, komandrinda, cli, json, pilnvara, atļaujas, atvienot, aktivitāte, mapes, ceļi, svg, pakešu apstrāde
from: 06ba4ef6
---

## Ko jūs uzzināsiet

Kā ļaut MI asistentam (vai jūsu uzrakstītam skriptam) apskatīt rasējumu, izpildīt CadCraft komandas, izdrukāt un saglabāt, un kā izlemt, ko tas drīkst mainīt.

CadCraft pats **nav MI** un nekur neko nenosūta. Asistentu atnesat jūs: jebkuru programmu, kas runā protokolā Model Context Protocol (MCP). CadCraft tikai dod tam rīkus, bet izvēlaties jūs.

Ir divi veidi, kā sākt:

- **Atvērtais rasējums.** Asistents strādā šajā logā blakus jums, izmantojot CadCraft Studio jūsu datorā. Tam paredzēts {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}}.
- **Rasējumi jūsu datorā, neatverot lietotni.** CadCraft MCP serveris un `cadcraft` komandrinda lasa un raksta DWG un DXF failus mapēs, ko nosaucat. Skatiet zemāk „Darbs ar failiem, neatverot CadCraft”.

## Ieslēgšana

1. Atveriet {{ui:Settings}} (zobrats lietotnes joslā vai {{key:Mod+,}}) un dodieties uz cilni {{ui:CadCraft}}.
2. Sadaļā {{ui:Assistants}} atzīmējiet **Ļaut MI asistentiem un skriptiem izmantot CadCraft**. Līdz tam tas ir izslēgts.
3. Izvēlieties, ko tas drīkst darīt. **Lasīt** ir sākumā atzīmēta; atzīmējiet pārējās tikai tad, kad tās vajag.

| Atļauja | Ko asistents var darīt |
|---|---|
| Lasīt | Apskatīt rasējumu: aprakstīt to, uzskaitīt un atrast objektus, redzēt atlasi, aprakstīt skatu un uzņemt tā attēlu, pārbaudīt to pēc slāņu un zīmēšanas noteikumiem |
| Rediģēt | Izpildīt komandas rasējumā un mainīt atlasi. Katra darbība ir viens solis, ko var atsaukt |
| Saglabāt | Saglabāt rasējumu (darbvirsmā — tā failā; pārlūkprogrammā — kā lejupielādi) |
| Eksportēt | Plotēt PDF formātā un veidot citus failus |

## Ļaut tam izmantot failus jūsu izvēlētās mapēs

CadCraft Studio asistents var atvērt, saglabāt un plotēt failus pēc nosaukuma, nevis izmantojot failu dialogus, bet tikai mapēs, ko pievienojat sadaļā {{ui:Assistants}} › {{ui:Folders it may use}}:

1. Izvēlieties {{ui:Add a folder…}} un norādiet mapi Studio paša dialogā.
2. Asistents tagad var uzskaitīt tur esošos failus (`files_list`), atvērt rasējumu (`drawing_open`), saglabāt to tur DWG versijā vai kā DXF, plotēt PDF vai SVG failā, ielādēt LISP failu un dot komandai failu, ko tā pieprasa (`INSERT` `F`, `XATTACH`, punktu fails), vai norādīt, kur jāieraksta komandas fails (`COUNT` CSV, `PUBLISH`).
3. {{ui:Remove}} uzreiz atņem mapi. Ceļi citur tiek noraidīti, un fails, kas tur jau ir, tiek aizstāts tikai tad, ja to pieprasa asistents vai pats to ir ierakstījis.

Atvēršanai joprojām vajag **Lasīt**; rasējuma ierakstīšanai — **Saglabāt**; jebkuram citam failam — **Eksportēt**.

Rīki ārpus atzīmētajām atļaujām asistentam vispār netiek piedāvāti, un, ja tas tomēr pieprasa kādu no tiem, CadCraft to noraida un ieraksta aktivitāšu žurnālā. Izslēdzot slēdzi, uzreiz beidzas visi savienojumi. {{ui:Reset CadCraft settings}} to izslēdz arī.

## Pieslēdziet savu asistentu

Asistenti pieslēdzas caur **CadCraft Studio** jūsu datorā: tas palaiž nelielu serveri, ko var sasniegt tikai šis dators (adrese `127.0.0.1`), aizsargātu ar pilnvaru, ko Studio izveido katru reizi, kad sākas. Atveriet Studio, izvēlieties {{ui:Connect an assistant}} un nokopējiet adresi un pilnvaru.

- Savā asistentā pievienojiet MCP serveri ar HTTP tipu, norādot adresi (tā izskatās kā `http://127.0.0.1:47615/mcp`) un galveni `Authorization: Bearer <token>`. Studio parāda iestatījumus, ko ielīmēt.

Studio {{ui:New token}} liek katram pieslēgtajam asistentam pieslēgties no jauna ar jauno pilnvaru. Nekad nekopīgojiet pilnvaru: ikviens, kam tā ir, var izmantot jūsu ieslēgtās lietotnes, kamēr darbojas Studio.

:::note
Pārlūkprogrammas cilne nevar atvērt savienojumu asistentam: pārlūkprogrammas lietotnēs slēdzim nav nekādas ietekmes, kamēr neizmantojat CadCraft Studio savā datorā.
:::

## Jūs joprojām esat vadībā

- **Katra darbība ir viens atsaukšanas solis**, kas apzīmēts ar asistenta nosaukumu, piemēram, „Asistents: LINE”. Nospiediet {{key:Mod+Z}}, lai atsauktu asistenta pēdējo darbību kopumā.
- **Jūs redzat, ko tas dara.** Tā komandas komandu vēsturē parādās ar **[Asistents]** priekšā, un rasējums tiek pārzīmēts, kamēr tas strādā.
- **Tas gaida jūs.** Kamēr esat vidū komandai, asistents var lasīt, bet ne mainīt rasējumu; tam tiek pateikts mēģināt vēlreiz, kad esat pabeidzis.
- **Jūs zināt, kad kāds ir pieslēgts.** Lietotnes joslas poga nosauc asistentu, kamēr tas ir pieslēgts. Noklikšķiniet uz tās, lai redzētu, ko tas drīkst darīt, vai lai **atvienotu** to.
- **Aktivitāte.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Activity}} uzskaita katru izsaukumu: kad, kuru rīku, izpildīts vai noraidīts, un atsaukšanas soli, ko tas izveidoja. {{ui:Save the log}} saglabā kopiju.

## Ko asistents var pieprasīt

| Rīks | Atļauja | Ko tas dara |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Lasīt | Rasējuma nosaukums, vienības, slāņi, bloki, lapas; kas ir ekrānā |
| `files_list`, `drawing_open` | Lasīt | Studio: faili jūsu mapēs; atvērt vienu šajā logā |
| `objects_list`, `object_get`, `selection_get` | Lasīt | Objekti ar to ģeometriju, garumu un laukumu (vai tikai cik ir, pēc tipa un slāņa); atlase |
| `drawing_check` | Lasīt | Noteikumi, piemēram, atļautie slāņi, nekas slānī 0, krāsas ByLayer, teksta augstumi |
| `view_screenshot` | Lasīt | Rasējuma attēls, kā tas redzams |
| `command_run` | Rediģēt | Raksta komandrindā: `LINE 0,0 @100,0 @0,50 ` tiek nolasīts tā, kā jūs to ierakstītu (atstarpe beidz atbildi), vai saraksts ar vienu atbildi katrai. Tas var atstāt komandu atvērtu un turpināt nākamajā izsaukumā |
| `script_run` | Rediģēt | Skripts (`.scr`) vai LISP fails, kā to ielādē {{ui:APPLOAD}} |
| `block_insert` | Rediģēt | Ievieto bloku ar tā atribūtu vērtībām vienā solī |
| `selection_set`, `undo` | Rediģēt | Atlasa objektus nākamajai komandai; atsauc savus soļus |
| `drawing_save` | Saglabāt | CadCraft pašas {{ui:Save}} vai {{ui:Save as}} vienā no jūsu mapēm |
| `drawing_plot` | Eksportēt | PDF vai SVG lapai vai modelim noteiktā mērogā vai pielāgots (PDF pamatnes šādi vēl netiek drukātas) |

Kamēr asistents izpilda komandu, CadCraft jautājumus uzdod komandrindā, nevis dialogā (piemēram, vai ievietot visu rasējumu vai vienu bloku), lai asistents varētu tiem atbildēt. Bibliotēkai un Atrast joprojām vajadzīgs jūs; asistents tiek lūgts jautāt jums.

## Darbs ar failiem, neatverot CadCraft

CadCraft MCP serveris (`cadcraft-mcp`) un komandrinda (`cadcraft`) izpilda CadCraft pašu rasējumu kodu Node.js vidē, bez loga. Tām vajag Node.js 20 vai jaunāku versiju.

- **MCP serveris** darbojas tikai mapēs, ko nosaucat, un tikai ar atļaujām, ko piešķirat: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Bez `--root` tas nevar atvērt nevienu failu; bez `--allow` tas var tikai lasīt. Tas var lasīt arī IFC modeļus, apjomu aprēķinus un atzīmes PDF komplektos.
- **Komandrinda** ir paredzēta jūsu pašu skriptiem: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Vairāki faili vienlaikus: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Lai iegūtu izvadi, ko var nolasīt programma, pievienojiet `--json`.

:::note
Ja `npx @getcadcraft/mcp` ziņo, ka pakotne nav atrasta, tā vēl nav publicēta. Ziņas vietnē getcadcraft.com pateiks, kad tā būs.
:::

## Ja kaut kas nedarbojas

- **Asistents neredz nevienu CadCraft rīku:** pārbaudiet, vai slēdzis ir ieslēgts šajā logā un vai logs ir atvērts Studio.
- **„needs the edit permission”:** sadaļā {{ui:Assistants}} atzīmējiet **Rediģēt** un pēc tam lūdziet vēlreiz.
- **„outside the folders assistants may use”:** pievienojiet šo mapi sadaļā {{ui:Assistants}} › {{ui:Folders it may use}} vai lūdziet asistentam izmantot failu mapē, ko jau esat pievienojis.
- **Kļūdas „401” vai „token”:** pilnvara mainījās (Studio tika restartēts vai {{ui:New token}}). Ierakstiet jauno asistenta iestatījumos.
- **Tā izmaiņa bija nepareiza:** nospiediet {{key:Mod+Z}}. Viens nospiedums atsauc vienu pilnu asistenta darbību.

## Skatiet arī

- [Ieteikumi MI asistentiem](common:assistants-recipes): darba piemēri, katrs ar rīkiem, ko tas izsauc.
