---
title: Koristi CadCraft s AI asistentom
summary: Neka tvoj AI asistent ili skripta rade s CadCraftom: šta smiju raditi, kako povezati bilo koji MCP klijent i kako ostaješ u kontroli (dozvole, poništavanje, dnevnik aktivnosti, Prekini vezu).
keywords: ai, asistent, agent, mcp, model context protocol, skripta, automatizacija, komandna linija, cli, json, token, dozvole, prekini vezu, aktivnost, folderi, putanje, svg, serija
from: 06ba4ef6
---

## Šta ćeš naučiti

Kako pustiti AI asistenta (ili skriptu koju si napisao) da pogleda crtež, pokreće CadCraftove komande, iscrta i spasi, te kako odlučiti šta smije da dira.

CadCraft nema **sopstvenu AI** i ništa ne šalje nigdje. Ti dovodiš asistenta: bilo koji program koji govori Model Context Protocol (MCP). CadCraft mu daje samo alate, a ti biraš koje.

Postoje dva načina ulaska:

- **Crtež koji imaš otvoren.** Asistent radi u ovom prozoru, pored tebe, kroz CadCraft Studio na tvom računaru. Za ovo služi {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Asistenti}}.
- **Crteži na tvom računaru, bez otvaranja aplikacije.** CadCraft MCP server i komanda `cadcraft` čitaju i pišu DWG i DXF datoteke u folderima koje navedeš. Pogledaj "Rad s datotekama bez otvaranja CadCrafta" niže.

## Uključi

1. Otvori {{ui:Postavke}} (zupčanik u traci aplikacije, ili {{key:Mod+,}}) i idi na karticu {{ui:CadCraft}}.
2. Pod {{ui:Asistenti}} označi **Dozvoli AI asistentima i skriptama da koriste CadCraft**. Isključeno je dok to ne uradiš.
3. Odaberi šta smije. **Čitanje** je označeno na početku; ostale označi samo kad ti zatrebaju.

| Dozvola | Šta asistent može da radi |
|---|---|
| Čitanje | Pogleda crtež: opiše ga, navede i pronađe objekte, vidi izbor, opiše pogled i snimi sliku, provjeri ga prema pravilima za slojeve i crtanje |
| Uređivanje | Pokreće komande nad crtežom i mijenja izbor. Svaka radnja je jedan korak koji možeš poništiti |
| Spasi | Spasi crtež (na radnoj površini, u njegovu datoteku; u pregledniku, kao preuzimanje) |
| Izvoz | Iscrta u PDF i pravi druge datoteke |

## Pusti ga da koristi datoteke u folderima koje izabereš

U CadCraft Studiju asistent može otvarati, spašavati i iscrtavati datoteke po imenu umjesto dijaloga za datoteke, ali samo unutar folder-a koje dodaš pod {{ui:Asistenti}} › {{ui:Folderi koje smije koristiti}}:

1. Izaberi {{ui:Dodaj folder…}} i odaberi folder u Studiovom vlastitom dijalogu.
2. Asistent sada može navesti datoteke u njemu (`files_list`), otvoriti crtež (`drawing_open`), spasiti ga tamo u DWG verziji ili kao DXF, iscrtati u PDF ili SVG datoteku, učitati LISP datoteku i dati komandi datoteku koju ona traži (`INSERT` `F`, `XATTACH`, datoteka tačaka) ili reći gdje ide datoteka komande (CSV iz `COUNT`, `PUBLISH`).
3. {{ui:Ukloni}} odmah vraća folder. Putanje bilo gdje drugdje se odbijaju, a datoteka koja već postoji zamjenjuje se samo kad to asistent zatraži ili kad ju je sam napisao.

Otvaranje i dalje traži **Čitanje**; pisanje crteža traži **Spasi**; svaka druga datoteka traži **Izvoz**.

Alati van dozvola koje si označio asistentu se uopšte ne nude, a ako ih ipak zatraži, CadCraft ga odbija i upisuje u dnevnik aktivnosti. Isključivanje prekidača prekida sve veze odjednom. {{ui:Vrati postavke CadCrafta}} ga također isključuje.

## Poveži asistenta

Asistenti se povezuju kroz **CadCraft Studio** na tvom računaru: on pokreće mali server kojem može pristupiti samo ovaj računar (adresa `127.0.0.1`), zaštićen tokenom koji Studio pravi svaki put kad se pokrene. Otvori Studio, izaberi {{ui:Poveži asistenta}} i kopiraj adresu i token.

- U svom asistentu dodaj MCP server tipa HTTP s adresom (izgleda kao `http://127.0.0.1:47615/mcp`) i zaglavljem `Authorization: Bearer <token>`. Studio prikazuje postavke koje treba zalijepiti.

{{ui:Novi token}} u Studiju natjera svakog povezanog asistenta da se ponovo poveže s novim tokenom. Nikad ne dijeli token: svako ko ga ima može koristiti aplikacije koje si uključio, dokle god je Studio pokrenut.

:::note
Kartica preglednika ne može otvoriti vezu za asistenta: u aplikacijama u pregledniku prekidač nema efekta dok ne koristiš CadCraft Studio na svom računaru.
:::

## Ostaješ u kontroli

- **Svaka radnja je jedan korak poništavanja**, označen imenom asistenta za nju, na primjer "Asistent: LINE". Pritisni {{key:Mod+Z}} da vratiš cijelu posljednju radnju asistenta.
- **Vidiš šta radi.** Njegove komande se pojavljuju u historiji komandi s **[Asistent]** ispred, a crtež se iscrtava dok radi.
- **Čeka tebe.** Dok si usred komande, asistent može čitati, ali ne može mijenjati crtež; rečeno mu je da pokuša ponovo kad završiš.
- **Znaš kad je povezan.** Dugme u traci aplikacije imenuje asistenta dok je povezan. Klikni ga da vidiš šta smije ili da ga **Prekineš**.
- **Aktivnost.** {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Asistenti}} › {{ui:Aktivnost}} navodi svaki poziv: kada, koji alat, da li je završen ili odbijen i koji korak poništavanja je napravio. {{ui:Sačuvaj dnevnik}} čuva kopiju.

## Šta asistent može zatražiti

| Alat | Dozvola | Šta radi |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Čitanje | Ime crteža, jedinice, slojevi, blokovi, listovi; šta je na ekranu |
| `files_list`, `drawing_open` | Čitanje | Studio: datoteke u tvojim folderima; otvara jednu u ovom prozoru |
| `objects_list`, `object_get`, `selection_get` | Čitanje | Objekti s geometrijom, dužinom i površinom (ili samo koliko ih ima, po tipu i sloju); izbor |
| `drawing_check` | Čitanje | Pravila kao dozvoljeni slojevi, ništa na sloju 0, boje ByLayer, visine teksta |
| `view_screenshot` | Čitanje | Slika crteža kako je prikazan |
| `command_run` | Uređivanje | Kuca na komandnoj liniji: `LINE 0,0 @100,0 @0,50 ` čita se kao što bi ti kucao (razmak završava odgovor), ili lista s po jednim odgovorom. Može ostaviti komandu otvorenu i nastaviti u sljedećem pozivu |
| `script_run` | Uređivanje | Skriptu (`.scr`) ili LISP datoteku, kako je učitava {{ui:APPLOAD}} |
| `block_insert` | Uređivanje | Postavlja blok s vrijednostima atributa u jednom koraku |
| `selection_set`, `undo` | Uređivanje | Bira objekte za sljedeću komandu; poništava vlastite korake |
| `drawing_save` | Spasi | {{ui:Spasi}} u CadCraftu, ili {{ui:Spasi kao}} u jedan od tvojih folder-a |
| `drawing_plot` | Izvoz | PDF ili SVG lista ili modela, u razmjeri ili uklopljen (PDF podloge se ovako još ne štampaju) |

Dok asistent pokreće komandu, CadCraft mu postavlja pitanja u komandnoj liniji umjesto u dijalogu (na primjer, da li umetnuti cijeli crtež ili jedan blok), pa asistent može odgovoriti. Biblioteka i Pronađi i dalje traže tebe; asistentu je rečeno da te pita.

## Rad s datotekama bez otvaranja CadCrafta

CadCraft MCP server (`cadcraft-mcp`) i komanda `cadcraft` pokreću CadCraftov vlastiti kod za crteže u Node.js, bez prozora. Trebaju im Node.js 20 ili noviji.

- **MCP server** radi samo unutar folder-a koje navedeš, i samo s dozvolama koje mu daš: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Bez `--root` ne može otvoriti nijednu datoteku; bez `--allow` može samo čitati. Može čitati i IFC modele, predmjere i označavanja u PDF setovima.
- **Komanda `cadcraft`** je za tvoje vlastite skripte: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Više datoteka odjednom: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Dodaj `--json` za izlaz koji program može čitati.

:::note
Ako `npx @getcadcraft/mcp` kaže da paket nije pronađen, još nije objavljen. Vijesti na getcadcraft.com će reći kad bude.
:::

## Ako nešto ne radi

- **Asistent ne vidi CadCraft alate:** provjeri da je prekidač uključen u ovom prozoru i da je prozor otvoren u Studiju.
- **„treba dozvola za uređivanje“:** označi **Uređivanje** pod {{ui:Asistenti}}, pa ponovo zatraži.
- **„van folder-a koje asistenti smiju koristiti“:** dodaj taj folder pod {{ui:Asistenti}} › {{ui:Folderi koje smije koristiti}}, ili zatraži od asistenta da koristi datoteku u folderu koji već imaš.
- **Greške „401“ ili „token“:** token se promijenio (Studio se restartovao, ili {{ui:Novi token}}). Kopiraj novi u postavke asistenta.
- **Njegova promjena je pogrešna:** pritisni {{key:Mod+Z}}. Jedan pritisak vraća jednu cijelu radnju asistenta.

## Pogledaj i

- [Recepti za AI asistente](common:assistants-recipes): radni primjeri, svaki sa alatima koje poziva.
