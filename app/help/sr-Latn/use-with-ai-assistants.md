---
title: Koristite CadCraft sa AI asistentom
summary: Neka vaš AI asistent ili skripta rade sa CadCraft-om: šta smeju da rade, kako da povežete bilo koji MCP klijent i kako ostajete u kontroli (dozvole, opozivanje, dnevnik aktivnosti, Prekini vezu).
keywords: ai, asistent, agent, mcp, model context protocol, skripta, automatizacija, komandna linija, cli, json, token, dozvole, prekini vezu, aktivnost, fascikle, putanje, svg, grupna obrada
from: 06ba4ef6
---

## Šta ćete naučiti

Kako da pustite AI asistenta (ili skriptu koju ste napisali) da pogleda crtež, pokreće CadCraft komande, štampa i čuva, i kako da odlučite čega smeju da se dotaknu.

CadCraft nema **sopstvenu veštačku inteligenciju** i ništa ne šalje nikuda. Vi donosite asistenta: bilo koji program koji podržava Model Context Protocol (MCP). CadCraft mu daje samo alate, a vi birate koje.

Postoje dva načina:

- **Crtež koji imate otvoren.** Asistent radi u ovom prozoru, pored vas, preko CadCraft Studija na vašem računaru. Za ovo služi {{ui:Podešavanja}} › {{ui:CadCraft}} › {{ui:Asistenti}}.
- **Crteži na vašem računaru, bez otvaranja aplikacije.** CadCraft MCP server i `cadcraft` komandna linija čitaju i pišu DWG i DXF datoteke u fasciklama koje navedete. Pogledajte „Rad sa datotekama bez otvaranja CadCraft-a” ispod.

## Uključite

1. Otvorite {{ui:Podešavanja}} (zupčanik u traci aplikacije, ili {{key:Mod+,}}) i idite na karticu {{ui:CadCraft}}.
2. Pod {{ui:Asistenti}} štiklirajte **Dozvoli AI asistentima i skriptama da koriste CadCraft**. Dok to ne uradite, isključeno je.
3. Izaberite šta smeju da rade. **Čitanje** je na početku štiklirano; ostale štiklirajte samo kada su vam potrebne.

| Dozvola | Šta asistent može da radi |
|---|---|
| Čitanje | Pogleda crtež: opiše ga, navede i nađe objekte, vidi izbor, opiše pogled i napravi njegovu sliku, proveri ga prema pravilima za slojeve i crtanje |
| Uređivanje | Pokreće komande nad crtežom i menja izbor. Svaka radnja je jedan korak koji možete opozvati |
| Čuvanje | Čuva crtež (na radnoj površini, u njegovu datoteku; u pregledaču, kao preuzimanje) |
| Izvoz | Štampa u PDF i pravi druge datoteke |

## Dozvolite mu da koristi datoteke u fasciklama koje birate

U CadCraft Studiju asistent može da otvara, čuva i štampa datoteke po imenu umesto preko dijaloga za datoteke, ali samo unutar fascikli koje dodate pod {{ui:Asistenti}} › {{ui:Fascikle koje sme da koristi}}:

1. Izaberite {{ui:Dodaj fasciklu…}} i izaberite fasciklu u sopstvenom dijalogu Studija.
2. Asistent sada može da napravi spisak datoteka u njoj (`files_list`), otvori crtež (`drawing_open`), sačuva ga tamo u DWG verziji ili kao DXF, štampa u PDF ili SVG datoteku, učita LISP datoteku, i da komandi datoteku koju ona traži (`INSERT` `F`, `XATTACH`, datoteku tačaka) ili kaže gde ide datoteka komande (`COUNT`-ov CSV, `PUBLISH`).
3. {{ui:Ukloni (R)}} odmah vraća fasciklu. Putanje van nje se odbijaju, a datoteka koja već postoji zamenjuje se samo kada to asistent zatraži ili kada ju je sam napisao.

Otvaranje i dalje traži **Čitanje**; pisanje crteža traži **Čuvanje**; svaka druga datoteka traži **Izvoz**.

Alat van dozvola koje ste štiklirali asistentu se uopšte ne nudi, a ako ga ipak zatraži, CadCraft ga odbija i beleži u dnevniku aktivnosti. Isključivanje prekidača prekida sve veze odjednom. {{ui:Vrati CadCraft podešavanja na podrazumevano}} ga takođe isključuje.

## Povežite asistenta

Asistenti se povezuju preko **CadCraft Studija** na vašem računaru: on pokreće mali server kome može da pristupi samo ovaj računar (adresa `127.0.0.1`), zaštićen tokenom koji Studio pravi svaki put kada se pokrene. Otvorite Studio, izaberite {{ui:Poveži asistenta}} i kopirajte adresu i token.

- U svom asistentu dodajte MCP server tipa HTTP sa adresom (izgleda kao `http://127.0.0.1:47615/mcp`) i zaglavljem `Authorization: Bearer <token>`. Studio prikazuje podešavanja koja treba nalepiti.

{{ui:Novi token}} u Studiju čini da se svi povezani asistenti ponovo povežu novim tokenom. Nikada ne delite token: ko ga ima može da koristi aplikacije koje ste uključili, dokle god je Studio pokrenut.

:::note
Kartica pregledača ne može da otvori vezu za asistenta: u aplikacijama u pregledaču prekidač nema efekta dok ne koristite CadCraft Studio na svom računaru.
:::

## Vi ostajete u kontroli

- **Svaka radnja je jedan korak opoziva**, označen imenom asistenta za nju, na primer „Asistent: LINE”. Pritisnite {{key:Mod+Z}} da poništite asistentovu poslednju radnju u celini.
- **Vidite šta radi.** Njegove komande se pojavljuju u istoriji komandi sa **[Asistent]** ispred, a crtež se ponovo iscrtava dok radi.
- **Čeka vas.** Dok ste usred komande, asistent može da čita, ali ne i da menja crtež; dobija poruku da pokuša ponovo kada završite.
- **Znate kada je neko povezan.** Dugme u traci aplikacije imenuje asistenta dok je povezan. Kliknite ga da vidite šta sme, ili da **Prekinete vezu**.
- **Aktivnost.** {{ui:Podešavanja}} › {{ui:CadCraft}} › {{ui:Asistenti}} › {{ui:Aktivnost}} navodi svaki poziv: kada, koji alat, da li je završen ili odbijen, i korak opoziva koji je napravio. {{ui:Sačuvaj dnevnik}} čuva kopiju.

## Šta asistent može da traži

| Alat | Dozvola | Šta radi |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Čitanje | Naziv crteža, jedinice, slojevi, blokovi, listovi; šta je na ekranu |
| `files_list`, `drawing_open` | Čitanje | Studio: datoteke u vašim fasciklama; otvara jednu u ovom prozoru |
| `objects_list`, `object_get`, `selection_get` | Čitanje | Objekti sa geometrijom, dužinom i površinom (ili samo koliko ih ima, po tipu i sloju); izbor |
| `drawing_check` | Čitanje | Pravila kao što su dozvoljeni slojevi, ništa na sloju 0, boje ByLayer, visine teksta |
| `view_screenshot` | Čitanje | Slika crteža kakav se prikazuje |
| `command_run` | Uređivanje | Kuca u komandnu liniju: `LINE 0,0 @100,0 @0,50 ` se čita kao što biste vi ukucali (razmak završava odgovor), ili spisak sa po jednim odgovorom. Može da ostavi komandu otvorenu i nastavi u sledećem pozivu |
| `script_run` | Uređivanje | Skripta (`.scr`) ili LISP datoteka, kako je učitava {{ui:APPLOAD}} |
| `block_insert` | Uređivanje | Postavlja blok sa vrednostima atributa u jednom koraku |
| `selection_set`, `undo` | Uređivanje | Bira objekte za sledeću komandu; poništava sopstvene korake |
| `drawing_save` | Čuvanje | CadCraft-ovo {{ui:Sačuvaj}}, ili {{ui:Sačuvaj kao}} u jednu od vaših fascikli |
| `drawing_plot` | Izvoz | PDF ili SVG lista ili modela, u razmeri ili prilagođeno (PDF podloge se za sada ovako ne štampaju) |

Dok asistent pokreće komandu, CadCraft postavlja njene pitanja u komandnu liniju umesto u dijalog (na primer, da li da ubaci ceo crtež ili jedan blok), pa asistent može da odgovori. Biblioteka i pronalaženje i dalje traže vas; asistent dobija uputstvo da vas pita.

## Rad sa datotekama bez otvaranja CadCraft-a

CadCraft MCP server (`cadcraft-mcp`) i komandna linija (`cadcraft`) pokreću sopstveni kod za crteže CadCraft-a u Node.js-u, bez prozora. Treba im Node.js 20 ili noviji.

- **MCP server** radi samo unutar fascikli koje navedete i samo sa dozvolama koje mu date: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Bez `--root` ne može da otvori nijednu datoteku; bez `--allow` može samo da čita. Može da čita i IFC modele, predmere i oznake u PDF setovima.
- **Komandna linija** je za vaše sopstvene skripte: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Više datoteka odjednom: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Dodajte `--json` za izlaz koji program može da pročita.

:::note
Ako `npx @getcadcraft/mcp` kaže da paket nije pronađen, još nije objavljen. Vesti na getcadcraft.com će reći kada bude.
:::

## Ako nešto ne radi

- **Asistent ne vidi CadCraft alate:** proverite da je prekidač uključen u ovom prozoru i da je prozor otvoren u Studiju.
- **„needs the edit permission”:** štiklirajte **Uređivanje** pod {{ui:Asistenti}}, pa pitajte ponovo.
- **„outside the folders assistants may use”:** dodajte tu fasciklu pod {{ui:Asistenti}} › {{ui:Fascikle koje sme da koristi}}, ili zamolite asistenta da koristi datoteku u fascikli koju ste već dodali.
- **Greške „401” ili „token”:** token se promenio (Studio je ponovo pokrenut, ili {{ui:Novi token}}). Kopirajte novi u podešavanja asistenta.
- **Njegova izmena je pogrešna:** pritisnite {{key:Mod+Z}}. Jedan pritisak vraća jednu celu radnju asistenta.

## Pogledajte i

- [Recepti za AI asistente](common:assistants-recipes): obrađeni primeri, svaki sa alatima koje poziva.
