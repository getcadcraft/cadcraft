---
title: Upotreba CadCrafta s AI pomoćnikom
summary: Neka vaš AI pomoćnik ili skripta rade s CadCraftom: što smiju raditi, kako povezati bilo koji MCP klijent i kako ostajete u kontroli (dopuštenja, poništavanje, dnevnik aktivnosti, Odspoji).
keywords: ai, pomoćnik, agent, mcp, model context protocol, skripta, automatizacija, naredbeni redak, cli, json, token, dopuštenja, odspoji, aktivnost, mape, putanje, svg, grupna obrada
from: 06ba4ef6
---

## Što ćete naučiti

Kako pustiti AI pomoćnika (ili skriptu koju ste napisali) da pogleda crtež, pokreće CadCraftove naredbe, plotira i sprema te kako odlučiti što smije dirati.

CadCraft **nema vlastitu AI** i ništa ne šalje nigdje. Vi donosite pomoćnika: bilo koji program koji govori Model Context Protocol (MCP). CadCraft mu daje samo alate, a vi birate koje.

Postoje dva načina:

- **Crtež koji imate otvoren.** Pomoćnik radi u ovom prozoru, uz vas, preko CadCraft Studija na vašem računalu. Za to služi {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Pomoćnici}}.
- **Crteži na vašem računalu, bez otvaranja aplikacije.** CadCraft MCP poslužitelj i naredbeni redak `cadcraft` čitaju i zapisuju DWG i DXF datoteke u mapama koje navedete. Vidi „Rad s datotekama bez otvaranja CadCrafta“ u nastavku.

## Uključite ga

1. Otvorite {{ui:Postavke}} (zupčanik u traci aplikacije ili {{key:Mod+,}}) i idite na karticu {{ui:CadCraft}}.
2. Pod {{ui:Pomoćnici}} označite **Dopusti AI pomoćnicima i skriptama da koriste CadCraft**. Isključeno je dok to ne učinite.
3. Odaberite što smiju raditi. **Čitanje** je na početku označeno; ostalo označite samo kad vam treba.

| Dopuštenje | Što pomoćnik može raditi |
|---|---|
| Čitanje | Pogledati crtež: opisati ga, popisati i pronaći objekte, vidjeti odabir, opisati pogled i snimiti njegovu sliku, provjeriti ga prema pravilima slojeva i crtanja |
| Uređivanje | Pokretati naredbe nad crtežom i mijenjati odabir. Svaka radnja je jedan korak koji možete poništiti |
| Spremanje | Spremiti crtež (na računalu, u njegovu datoteku; u pregledniku, kao preuzimanje) |
| Izvoz | Plotati u PDF i praviti druge datoteke |

## Dopustite mu korištenje datoteka u mapama koje odaberete

U CadCraft Studiju pomoćnik može otvarati, spremati i plotati datoteke po imenu umjesto korištenjem dijaloških okvira za datoteke, ali samo unutar mapa koje dodate pod {{ui:Pomoćnici}} › {{ui:Mape koje smije koristiti}}:

1. Odaberite {{ui:Dodaj mapu…}} i odaberite mapu u vlastitom dijaloškom okviru Studija.
2. Pomoćnik sada može popisati datoteke u njoj (`files_list`), otvoriti crtež (`drawing_open`), spremiti ga tamo u DWG verziji ili kao DXF, plotirati u PDF ili SVG datoteku, učitati LISP datoteku i naredbi dati datoteku koju traži (`INSERT` `F`, `XATTACH`, datoteka točaka) ili reći gdje ide datoteka naredbe (CSV iz `COUNT`, `PUBLISH`).
3. {{ui:Ukloni (R)}} odmah uklanja mapu. Putanje bilo gdje drugdje se odbijaju, a datoteka koja već postoji zamjenjuje se samo kad to pomoćnik zatraži ili kad ju je sam napisao.

Otvaranje traži **Čitanje**; pisanje crteža traži **Spremanje**; svaka druga datoteka traži **Izvoz**.

Alati izvan dopuštenja koja ste označili pomoćniku se uopće ne nude, a ako ih ipak zatraži, CadCraft odbija i to zapisuje u dnevnik aktivnosti. Isključivanje prekidača prekida sve veze odjednom. {{ui:Vrati postavke CadCrafta na zadano}} također ga isključuje.

## Povežite pomoćnika

Pomoćnici se povezuju preko **CadCraft Studija** na vašem računalu: on pokreće mali poslužitelj kojem može pristupiti samo ovo računalo (adresa `127.0.0.1`), zaštićen tokenom koji Studio stvara svaki put kad se pokrene. Otvorite Studio, odaberite {{ui:Poveži pomoćnika}} i kopirajte adresu i token.

- U svom pomoćniku dodajte MCP poslužitelj vrste HTTP s adresom (izgleda kao `http://127.0.0.1:47615/mcp`) i zaglavljem `Authorization: Bearer <token>`. Studio prikazuje postavke za lijepljenje.

{{ui:Novi token}} u Studiju tjera svakog povezanog pomoćnika da se ponovno poveže s novim tokenom. Nikada ne dijelite token: tko ga ima, može koristiti aplikacije koje ste uključili, dokle god je Studio pokrenut.

:::note
Kartica preglednika ne može otvoriti vezu za pomoćnika: u aplikacijama u pregledniku prekidač nema učinka dok ne upotrebljavate CadCraft Studio na računalu.
:::

## Vi ostajete u kontroli

- **Svaka radnja je jedan korak poništavanja**, označen imenom pomoćnika za nju, na primjer „Pomoćnik: LINE“. Pritisnite {{key:Mod+Z}} da poništite cijelu posljednju radnju pomoćnika.
- **Vidite što radi.** Njegove naredbe pojavljuju se u povijesti naredbi s **[Pomoćnik]** ispred, a crtež se iscrtava dok radi.
- **Čeka vas.** Dok ste usred naredbe, pomoćnik može čitati, ali ne može mijenjati crtež; kad završite, dobije poruku da pokuša ponovno.
- **Znate kad je povezan.** Gumb u traci aplikacije imenuje pomoćnika dok je povezan. Kliknite ga da vidite što smije raditi ili da ga **Odspojite**.
- **Aktivnost.** {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Pomoćnici}} › {{ui:Aktivnost}} popisuje svaki poziv: kada, koji alat, je li izvršen ili odbijen te korak poništavanja koji je napravio. {{ui:Spremi zapisnik}} sprema kopiju.

## Što pomoćnik smije tražiti

| Alat | Dopuštenje | Što radi |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Čitanje | Naziv crteža, jedinice, slojevi, blokovi, listovi; što je na zaslonu |
| `files_list`, `drawing_open` | Čitanje | Studio: datoteke u vašim mapama; otvara jednu u ovom prozoru |
| `objects_list`, `object_get`, `selection_get` | Čitanje | Objekti s geometrijom, duljinom i površinom (ili samo koliko ih ima, po vrsti i sloju); odabir |
| `drawing_check` | Čitanje | Pravila kao dopušteni slojevi, ništa na sloju 0, boje ByLayer, visine teksta |
| `view_screenshot` | Čitanje | Slika crteža onakvog kakav je prikazan |
| `command_run` | Uređivanje | Upisuje na naredbeni redak: `LINE 0,0 @100,0 @0,50 ` čita se kao što biste upisali (razmak završava odgovor), ili popis s jednim odgovorom za svaki. Može ostaviti naredbu otvorenu i nastaviti u sljedećem pozivu |
| `script_run` | Uređivanje | Skripta (`.scr`) ili LISP datoteka, onako kako je učitava {{ui:APPLOAD}} |
| `block_insert` | Uređivanje | Umeće blok s vrijednostima atributa u jednom koraku |
| `selection_set`, `undo` | Uređivanje | Odabire objekte za sljedeću naredbu; poništava vlastite korake |
| `drawing_save` | Spremanje | CadCraftov {{ui:Spremi}} ili {{ui:Spremi kao}} u jednu od vaših mapa |
| `drawing_plot` | Izvoz | PDF ili SVG lista ili modela, u mjerilu ili prilagođen (PDF podloge se ovako još ne ispisuju) |

Dok pomoćnik izvodi naredbu, CadCraft svoja pitanja postavlja na naredbeni redak umjesto u dijaloškom okviru (na primjer, treba li umetnuti cijeli crtež ili jedan blok), pa im pomoćnik može odgovoriti. {{ui:Knjižnica}} i Pronađi i dalje trebaju vas; pomoćniku je rečeno da vas pita.

## Rad s datotekama bez otvaranja CadCrafta

CadCraft MCP poslužitelj (`cadcraft-mcp`) i naredbeni redak (`cadcraft`) pokreću vlastiti kod za crteže CadCrafta u Node.js-u, bez prozora. Trebaju Node.js 20 ili noviji.

- **MCP poslužitelj** radi samo unutar mapa koje navedete i samo s dopuštenjima koja mu date: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Bez `--root` ne može otvoriti nijednu datoteku; bez `--allow` može samo čitati. Može čitati i IFC modele, predmjere i oznake u PDF setovima.
- **Naredbeni redak** služi vašim skriptama: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Više datoteka odjednom: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Dodajte `--json` za izlaz koji program može čitati.

:::note
Ako `npx @getcadcraft/mcp` javi da paket nije pronađen, još nije objavljen. Vijesti na getcadcraft.com reći će kad bude.
:::

## Ako nešto ne radi

- **Pomoćnik ne vidi CadCraft alate:** provjerite je li prekidač uključen u ovom prozoru i je li prozor otvoren u Studiju.
- **„treba dopuštenje za uređivanje“:** označite {{ui:Uređivanje}} pod {{ui:Pomoćnici}}, zatim ponovno zatražite.
- **„izvan mapa koje pomoćnici smiju koristiti“:** dodajte tu mapu pod {{ui:Pomoćnici}} › {{ui:Mape koje smije koristiti}}, ili zamolite pomoćnika da koristi datoteku u mapi koju ste već dodali.
- **Pogreške „401“ ili „token“:** token se promijenio (Studio se ponovno pokrenuo ili je odabrano {{ui:Novi token}}). Kopirajte novi u postavke pomoćnika.
- **Njegova promjena je pogrešna:** pritisnite {{key:Mod+Z}}. Jedan pritisak poništava jednu cijelu radnju pomoćnika.

## Vidi također

- [Recepti za AI pomoćnike](common:assistants-recipes): primjeri s objašnjenjem, svaki s alatima koje zove.
