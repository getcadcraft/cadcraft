---
title: Uporaba CadCraft s pomočnikom z umetno inteligenco
summary: Naj vaš lastni pomočnik z umetno inteligenco ali skript dela s CadCraftom: kaj sme početi, kako povežete poljuben odjemalec MCP in kako ostanete v nadzoru (dovoljenja, razveljavitev, dnevnik dejavnosti, Prekini povezavo).
keywords: pomočnik, asistent, agent, mcp, model context protocol, skript, avtomatizacija, ukazna vrstica, cli, json, žeton, dovoljenja, prekini povezavo, dejavnost, mape, poti, svg, serija
from: 06ba4ef6
---

## Kaj se boste naučili

Kako lahko pomočnik z umetno inteligenco (ali skript, ki ste ga napisali) pogleda risbo, zažene ukaze CadCrafta, izriše in shrani ter kako se odločite, česa se sme dotakniti.

CadCraft **nima lastne umetne inteligence** in ničesar ne pošilja nikamor. Pomočnika prinesete sami: poljuben program, ki govori Model Context Protocol (MCP). CadCraft mu da le orodja, izbirate pa vi.

Obstajata dva načina:

- **Risba, ki jo imate odprto.** Pomočnik deluje v tem oknu, ob vas, prek CadCraft Studia v vašem računalniku. Za to je namenjeno {{ui:Nastavitve}} › {{ui:CadCraft}} › {{ui:Pomočniki}}.
- **Risbe v vašem računalniku brez odpiranja aplikacije.** Strežnik CadCraft MCP in ukazna vrstica `cadcraft` berejo in pišejo datoteke DWG in DXF v mapah, ki jih navedete. Glejte „Delo z datotekami brez odpiranja CadCrafta“ spodaj.

## Vklop

1. Odprite {{ui:Nastavitve}} (zobnik v orodni vrstici aplikacije ali {{key:Mod+,}}) in pojdite na zavihek {{ui:CadCraft}}.
2. Pod {{ui:Pomočniki}} označite **Dovoli pomočnikom z umetno inteligenco in skriptom uporabo CadCrafta**. Dokler tega ne storite, je izklopljeno.
3. Izberite, kaj sme početi. **Branje** je na začetku označeno; druge označite samo, kadar jih potrebujete.

| Dovoljenje | Kaj lahko pomočnik počne |
|---|---|
| Branje | Pogleda risbo: jo opiše, našteje in poišče objekte, vidi izbor, opiše pogled in ga posname, preveri jo glede na pravila za sloje in risanje |
| Urejanje | Zažene ukaze v risbi in spremeni izbor. Vsako dejanje je en korak, ki ga lahko razveljavite |
| Shranjevanje | Shrani risbo (na namizju v njeno datoteko; v brskalniku kot prenos) |
| Izvoz | Izriše v PDF in naredi druge datoteke |

## Dovolite uporabo datotek v mapah, ki jih izberete

V CadCraft Studiu lahko pomočnik odpre, shrani in izriše datoteke po imenu, namesto da uporablja pogovorna okna za datoteke, vendar le znotraj map, ki jih dodate pod {{ui:Pomočniki}} › {{ui:Mape, ki jih sme uporabljati}}:

1. Izberite {{ui:Dodaj mapo…}} in mapo izberite v lastnem pogovornem oknu Studia.
2. Pomočnik lahko zdaj našteje datoteke v njej (`files_list`), odpre risbo (`drawing_open`), jo tam shrani v različici DWG ali kot DXF, izriše v datoteko PDF ali SVG, naloži datoteko LISP ter ukazu poda datoteko, ki jo zahteva (`INSERT` `F`, `XATTACH`, datoteka s točkami), ali pove, kam gre datoteka ukaza (CSV ukaza `COUNT`, `PUBLISH`).
3. {{ui:Odstrani (R)}} mapo takoj odvzame. Poti zunaj teh map so zavrnjene, datoteka, ki je že tam, pa se nadomesti le, če to zahteva pomočnik ali je datoteko zapisal sam.

Odpiranje še vedno zahteva **Branje**; pisanje risbe zahteva **Shranjevanje**; katero koli drugo datoteko zahteva **Izvoz**.

Orodja, ki so izven označenih dovoljenj, pomočniku sploh niso ponujena, in če jih kljub temu zahteva, CadCraft zahtevo zavrne in jo zapiše v dnevnik dejavnosti. Izklop stikala prekine vse povezave naenkrat. {{ui:Ponastavi nastavitve CadCraft}} ga prav tako izklopi.

## Povežite pomočnika

Pomočniki se povežejo prek **CadCraft Studia** v vašem računalniku: ta zažene majhen strežnik, do katerega lahko dostopa samo ta računalnik (naslov `127.0.0.1`), zaščiten z žetonom, ki ga Studio ustvari ob vsakem zagonu. Odprite Studio, izberite {{ui:Poveži pomočnika}} in kopirajte naslov ter žeton.

- V svojem pomočniku dodajte strežnik MCP tipa HTTP z naslovom (izgleda kot `http://127.0.0.1:47615/mcp`) in glavo `Authorization: Bearer <token>`. Studio prikaže nastavitve, ki jih prilepite.

{{ui:Nov žeton}} v Studiu povzroči, da se vsi povezani pomočniki ponovno povežejo z novim žetonom. Žetona nikoli ne delite: kdor ga ima, lahko uporablja aplikacije, ki ste jih vklopili, dokler Studio teče.

:::note
Zavihek brskalnika ne more odpreti povezave za pomočnika: v aplikacijah v brskalniku stikalo nima učinka, dokler ne uporabite CadCraft Studia v svojem računalniku.
:::

## Ostanete v nadzoru

- **Vsako dejanje je en korak razveljavitve,** označen z imenom, ki ga pomočnik zanj uporablja, na primer „Pomočnik: LINE“. Pritisnite {{key:Mod+Z}}, da v celoti razveljavite zadnje dejanje pomočnika.
- **Vidite, kaj počne.** Njegovi ukazi se pojavijo v zgodovini ukazov s **[Pomočnik]** pred njimi, risba pa se med delom osvežuje.
- **Počaka na vas.** Med vašim ukazom pomočnik lahko bere, ne more pa spreminjati risbe; naročeno mu je, naj poskusi znova, ko boste končali.
- **Veste, kdaj je povezan.** Gumb v orodni vrstici aplikacije med povezavo navede pomočnika. Kliknite ga, da vidite, kaj sme početi, ali da ga **prekinete** (Prekini povezavo).
- **Dejavnost.** {{ui:Nastavitve}} › {{ui:CadCraft}} › {{ui:Pomočniki}} › {{ui:Dejavnost}} izpiše vsak klic: kdaj, katero orodje, opravljen ali zavrnjen in korak razveljavitve, ki ga je naredil. {{ui:Shrani dnevnik}} shrani kopijo.

## Kaj lahko pomočnik zahteva

| Orodje | Dovoljenje | Kaj počne |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Branje | Ime risbe, enote, sloji, bloki, listi; kaj je na zaslonu |
| `files_list`, `drawing_open` | Branje | Studio: datoteke v vaših mapah; odpre eno v tem oknu |
| `objects_list`, `object_get`, `selection_get` | Branje | Objekti z geometrijo, dolžino in površino (ali samo koliko jih je, po vrsti in sloju); izbor |
| `drawing_check` | Branje | Pravila, na primer dovoljeni sloji, nič na sloju 0, barve ByLayer, višine besedila |
| `view_screenshot` | Branje | Slika risbe, kakršna je prikazana |
| `command_run` | Urejanje | Tipka v ukazno vrstico: `LINE 0,0 @100,0 @0,50 ` se bere, kakor bi jo vtipkali vi (presledek konča odgovor), ali seznam z enim odgovorom za vsak ukaz. Lahko pusti ukaz odprt in nadaljuje v naslednjem klicu |
| `script_run` | Urejanje | Skript (`.scr`) ali datoteka LISP, kakor jo naloži {{ui:APPLOAD}} |
| `block_insert` | Urejanje | Vstavi blok z vrednostmi atributov v enem koraku |
| `selection_set`, `undo` | Urejanje | Izbere objekte za naslednji ukaz; razveljavi lastne korake |
| `drawing_save` | Shranjevanje | {{ui:Shrani}} CadCrafta ali {{ui:Shrani kot}} v eno od vaših map |
| `drawing_plot` | Izvoz | PDF ali SVG lista ali modela, v merilu ali prilagojeno (podloge PDF se tako še ne izrišejo) |

Med zagonom ukaza pomočnika CadCraft postavlja vprašanja v ukazni vrstici namesto v pogovornem oknu (na primer, ali naj vstavi celotno risbo ali en blok), tako da jih lahko pomočnik odgovori. {{ui:Knjižnica}} in Najdi še vedno potrebujeta vas; pomočnik je obveščen, naj vas vpraša.

## Delo z datotekami brez odpiranja CadCrafta

Strežnik CadCraft MCP (`cadcraft-mcp`) in ukazna vrstica (`cadcraft`) poganjata lastno kodo za risbe CadCrafta v Node.js, brez okna. Potrebujeta Node.js 20 ali novejši.

- **Strežnik MCP** deluje le znotraj map, ki jih navedete, in le z dovoljenji, ki jih dodelite: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Brez `--root` ne more odpreti nobene datoteke; brez `--allow` lahko le bere. Prebere lahko tudi modele IFC, predizmere in označbe v nizih PDF.
- **Ukazna vrstica** je za vaše lastne skripte: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Več datotek naenkrat: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Dodajte `--json` za izpis, ki ga lahko bere program.

:::note
Če `npx @getcadcraft/mcp` pove, da paketa ni mogoče najti, še ni objavljen. Novice na getcadcraft.com bodo to povedale, ko bo.
:::

## Če kaj ne deluje

- **Pomočnik ne vidi orodij CadCrafta:** preverite, ali je stikalo vklopljeno v tem oknu in ali je okno odprto v Studiu.
- **„potrebuje dovoljenje za urejanje“:** pod {{ui:Pomočniki}} označite **Urejanje**, nato znova vprašajte.
- **„zunaj map, ki jih pomočniki smejo uporabljati“:** dodajte to mapo pod {{ui:Pomočniki}} › {{ui:Mape, ki jih sme uporabljati}} ali prosite pomočnika, naj uporabi datoteko v mapi, ki ste jo že dodali.
- **Napake „401“ ali „token“:** žeton se je spremenil (Studio se je znova zagnal ali pa ste uporabili {{ui:Nov žeton}}). Novi žeton kopirajte v nastavitve pomočnika.
- **Njegova sprememba je bila napačna:** pritisnite {{key:Mod+Z}}. Ena pritisk povrne eno celotno dejanje pomočnika.

## Glejte tudi

- [Recepti za pomočnike](common:assistants-recipes): obdelani primeri, vsak s orodji, ki jih kliče.
