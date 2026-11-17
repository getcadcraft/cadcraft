---
title: Utilizarea CadCraft cu un asistent AI
summary: Lăsați asistentul AI sau scriptul propriu să lucreze cu CadCraft: ce poate face, cum conectați orice client MCP și cum rămâneți în control (permisiuni, anulare, jurnalul de activitate, Deconectare).
keywords: ai, asistent, agent, mcp, model context protocol, script, automatizare, linie de comandă, cli, json, token, permisiuni, deconectare, activitate, dosare, căi, svg, lot
from: 06ba4ef6
---

## Ce veți învăța

Cum lăsați un asistent AI (sau un script scris de dvs.) să vadă un desen, să execute comenzile CadCraft, să traseze și să salveze și cum decideți ce are voie să atingă.

CadCraft **nu are o IA proprie** și nu trimite nimic nicăieri. Aduceți asistentul: orice program care vorbește Model Context Protocol (MCP). CadCraft îi oferă doar unelte, iar alegerea acestora aparține utilizatorului.

Există două moduri de a intra:

- **Desenul deschis.** Asistentul lucrează în această fereastră, lângă utilizator, prin CadCraft Studio de pe computer. Pentru aceasta există {{ui:Setări}} › {{ui:CadCraft}} › {{ui:Asistenți}}.
- **Desene de pe computer, fără a deschide aplicația.** Serverul MCP CadCraft și linia de comandă `cadcraft` citesc și scriu fișiere DWG și DXF din dosarele pe care le numiți. Vezi „Lucrul cu fișierele fără deschiderea CadCraft” mai jos.

## Activarea

1. Deschideți {{ui:Setări}} (roata din bara aplicației sau {{key:Mod+,}}) și mergeți la fila {{ui:CadCraft}}.
2. Sub {{ui:Asistenți}}, bifați **Permiteți asistenților AI și scripturilor să folosească CadCraft**. Este dezactivat până la bifare.
3. Alegeți ce are voie să facă. **Citire** este bifată de la început; bifați celelalte doar când aveți nevoie.

| Permisiune | Ce poate face asistentul |
|---|---|
| Citire | Vede desenul: îl descrie, listează și caută obiecte, vede selecția, descrie vizualizarea și face o fotografie a ei, verifică desenul după regulile de straturi și de desenare |
| Editare | Execută comenzi pe desen și modifică selecția. Fiecare acțiune este un singur pas, pe care îl puteți anula |
| Salvare | Salvează desenul (pe desktop, în fișierul său; într-un browser, ca descărcare) |
| Export | Trasează în PDF și creează alte fișiere |

## Lăsați-l să folosească fișiere din dosarele alese

În CadCraft Studio, un asistent poate deschide, salva și trasa fișiere după nume, în loc să folosească casetele de dialog pentru fișiere, dar numai în dosarele adăugate sub {{ui:Asistenți}} › {{ui:Dosare pe care le poate folosi}}:

1. Alegeți {{ui:Adăugare dosar…}} și selectați dosarul în propria casetă de dialog a Studio.
2. Asistentul poate acum să listeze fișierele de acolo (`files_list`), să deschidă un desen (`drawing_open`), să-l salveze acolo într-o versiune DWG sau ca DXF, să traseze un fișier PDF sau SVG, să încarce un fișier LISP și să dea unei comenzi fișierul pe care îl cere (`INSERT` `F`, `XATTACH`, un fișier de puncte) sau să indice unde ajunge fișierul unei comenzi (fișierul CSV generat de `COUNT`, `PUBLISH`).
3. {{ui:Eliminare (R)}} scoate imediat un dosar din listă. Căile din afara dosarelor adăugate sunt refuzate, iar un fișier care există deja este înlocuit doar dacă asistentul o cere sau dacă el a scris fișierul.

Deschiderea necesită în continuare **Citire**; scrierea unui desen necesită **Salvare**; orice alt fișier necesită **Export**.

Instrumentele din afara permisiunilor bifate nu sunt oferite deloc asistentului. Dacă le cere totuși, CadCraft le refuză și scrie refuzul în jurnalul de activitate. Dezactivarea comutatorului încheie imediat toate conexiunile. {{ui:Resetare setări CadCraft}} îl dezactivează și pe el.

## Conectați asistentul

Asistenții se conectează prin **CadCraft Studio** de pe computer: acesta pornește un server mic, pe care îl poate atinge doar acest computer (adresa `127.0.0.1`), protejat de un token pe care Studio îl creează de fiecare dată când pornește. Deschideți Studio, alegeți {{ui:Conectare asistent}} și copiați adresa și tokenul.

- În asistent adăugați un server MCP de tip HTTP cu adresa (arată ca `http://127.0.0.1:47615/mcp`) și antetul `Authorization: Bearer <token>`. Studio afișează setările de lipit.

{{ui:Token nou}} din Studio face ca fiecare asistent conectat să se reconecteze cu noul token. Nu partajați niciodată tokenul: oricine îl are poate folosi aplicațiile pe care le-ați activat, atât timp cât Studio rulează.

:::note
Un tab de browser nu poate deschide o conexiune pentru un asistent: în aplicațiile din browser, comutatorul nu are efect până nu folosiți CadCraft Studio de pe computer.
:::

## Rămâneți în control

- **Fiecare acțiune este un singur pas de anulare**, etichetat cu numele pe care i-l dă asistentul, de exemplu „Asistent: LINE”. Apăsați {{key:Mod+Z}} ca să anulați ultima acțiune a asistentului în întregime.
- **Vedeți ce face.** Comenzile lui apar în istoricul comenzilor, cu **[Asistent]** în față, iar desenul se redesenează pe măsură ce lucrează.
- **Așteaptă după utilizator.** Cât timp sunteți în mijlocul unei comenzi, asistentul poate citi, dar nu poate modifica desenul; i se spune să încerce din nou când terminați.
- **Se știe când există unul conectat.** Un buton din bara aplicației numește asistentul cât timp este conectat. Faceți clic pe el ca să vedeți ce are voie să facă sau ca să-l **Deconectați**.
- **Activitatea.** {{ui:Setări}} › {{ui:CadCraft}} › {{ui:Asistenți}} › {{ui:Activitate}} listează fiecare apel: când, ce unealtă, dacă a fost realizat sau refuzat și pasul de anulare pe care l-a făcut. {{ui:Salvarea jurnalului}} păstrează o copie.

## Ce poate cere un asistent

| Unealtă | Permisiune | Ce face |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Citire | Numele desenului, unitățile, straturile, blocurile, foile; ce este pe ecran |
| `files_list`, `drawing_open` | Citire | Studio: fișierele din dosarele dvs.; deschide unul în această fereastră |
| `objects_list`, `object_get`, `selection_get` | Citire | Obiecte cu geometria, lungimea și aria lor (sau doar câte sunt, pe tip și strat); selecția |
| `drawing_check` | Citire | Reguli precum straturile permise, nimic pe stratul 0, culori DupăStrat, înălțimi de text |
| `view_screenshot` | Citire | O imagine a desenului așa cum apare |
| `command_run` | Editare | Scrie pe linia de comandă: `LINE 0,0 @100,0 @0,50 ` se citește ca și cum l-ați scrie (un spațiu încheie un răspuns), sau o listă cu câte un răspuns fiecare. Poate lăsa o comandă deschisă și o poate continua la apelul următor |
| `script_run` | Editare | Un script (`.scr`) sau un fișier LISP, așa cum îl încarcă {{ui:APPLOAD}} |
| `block_insert` | Editare | Plasează un bloc cu valorile atributelor sale, într-un singur pas |
| `selection_set`, `undo` | Editare | Selectează obiecte pentru următoarea comandă; anulează propriii pași |
| `drawing_save` | Salvare | {{ui:Salvare}} propriu al CadCraft sau {{ui:Salvare ca}} într-unul dintre dosarele dvs. |
| `drawing_plot` | Export | Un PDF sau SVG al unei foi sau al modelului, la o scară sau încadrat (suprapunerile PDF nu sunt tipărite astfel încă) |

Cât timp un asistent rulează o comandă, CadCraft își pune întrebările pe linia de comandă în loc de casetă de dialog (de exemplu, dacă să insereze un desen întreg sau un singur bloc), ca asistentul să poată răspunde. Biblioteca și Căutarea încă necesită prezența dvs.; asistentului i se spune să vă întrebe.

## Lucrul cu fișierele fără deschiderea CadCraft

Serverul MCP CadCraft (`cadcraft-mcp`) și linia de comandă (`cadcraft`) rulează codul de desen propriu CadCraft în Node.js, fără fereastră. Au nevoie de Node.js 20 sau mai nou.

- **Serverul MCP** lucrează doar în dosarele pe care le numiți și doar cu permisiunile date: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Fără `--root` nu poate deschide niciun fișier; fără `--allow` poate doar citi. Poate citi și modele IFC, extragerile de cantități și adnotările din seturile PDF.
- **Linia de comandă** este pentru scripturile proprii: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Mai multe fișiere deodată: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Adăugați `--json` pentru o ieșire pe care o poate citi un program.

:::note
Dacă `npx @getcadcraft/mcp` spune că pachetul nu a fost găsit, el nu a fost publicat încă. Noutățile de pe getcadcraft.com vor spune când va fi.
:::

## Dacă ceva nu funcționează

- **Asistentul nu vede unelte CadCraft:** verificați că este pornit comutatorul în această fereastră și că fereastra este deschisă în Studio.
- **„necesită permisiunea de editare”:** bifați **Editare** sub {{ui:Asistenți}}, apoi cereți din nou.
- **„în afara dosarelor pe care le pot folosi asistenții”:** adăugați acel dosar sub {{ui:Asistenți}} › {{ui:Dosare pe care le poate folosi}}, sau cereți asistentului să folosească un fișier dintr-un dosar deja adăugat.
- **Erori „401” sau „token”:** tokenul s-a schimbat (Studio a fost repornit sau s-a folosit {{ui:Token nou}}). Copiați noul token în setările asistentului.
- **Modificarea asistentului a fost greșită:** apăsați {{key:Mod+Z}}. O apăsare anulează un pas întreg al asistentului.

## Vezi și

- [Rețete pentru asistenții AI](common:assistants-recipes): exemple lucrate, fiecare cu uneltele pe care le apelează.
