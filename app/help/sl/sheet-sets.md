---
title: Kompleti listov
summary: Zberite liste iz mnogih risb v en oštevilčen seznam, izpolnite njihove glave risb iz kompleta, celoten komplet objavite kot en PDF in komplet arhivirajte kot zip.
keywords: komplet listov, upravljalnik kompleta listov, ssm, sheetset, ccsheets, dst, seznam listov, kazalo listov, glava risbe, polja, objavi, preštevilči, arhiviraj, etransmit, transmittal, podkompleti, naslovni list, seznam risb
from: 2c855720
---

## Kaj se boste naučili

Kako zbrati liste (postavitve) iz več datotek risb v **komplet listov**, jih oštevilčiti in poimenovati, da se njihove glave risb izpolnijo samodejno, celoten komplet objaviti kot en PDF in vse spakirati v en zip za pošiljanje.

Komplet listov živi v majhni lastni datoteki, `<ime>.ccsheets`, v mapi, ki vsebuje risbe. Datoteka kompleta našteva liste s potmi od te mape, tako da lahko premaknete ali kopirate celotno mapo.

:::note
Za odpiranje mape za branje in pisanje potrebujete Chrome ali Edge (lahko dovolita strani, da dela v mapi, ki jo izberete), ali namizno aplikacijo. Drugi brskalniki odprejo komplet samo za branje: lahko si ga ogledate in objavite, datoteka kompleta pa se prenese namesto shranjevanja.
:::

## Ustvarite komplet

1. Poiščite razdelek {{ui:Komplet listov}} v levi plošči in odprite njegov meni {{ui:Komplet}}. Vnos {{cmd:SHEETSET}} (ali `SSM`) vas prav tako pripelje tja.
2. Izberite {{ui:Nov komplet …}}. Dajte kompletu ime in, če želite, ime in številko projekta.
3. Izberite mapo, ki vsebuje risbe. Datoteka kompleta se shrani tja.

Za odpiranje kompleta pozneje izberite {{ui:Odpri komplet …}} in izberite isto mapo. Če mapa vsebuje več kompletov, CadCraft vpraša, kateri.

## Dodajanje listov

1. Izberite {{ui:Dodaj liste iz risbe …}} in izberite eno od risb v mapi.
2. CadCraft prebere to risbo v ozadju (ne odpre se na zaslonu) in našteje njene liste. Označite tiste, ki jih želite, in kliknite {{ui:V redu}}.
3. Izberite list in pritisnite {{key:F2}} (ali {{ui:Preimenuj in preštevilči …}}), da mu dodelite številko in naslov, na primer `A-101` in `Tloris etaže`.

{{ui:Nov list iz predloge …}} ustvari novo risbo iz lista druge risbe (njene glave risbe in pogledna okna), poimenovano po novem listu, in ga doda. Komplet si zapomni risbo, ki ste jo uporabili kot predlogo.

## Uredite komplet

- **Podkompleti** združijo liste, na primer Arhitektura › Tlorisi: izberite, kam sodijo, in izberite {{ui:Nov podkomplet …}}.
- **Vrstni red**: povlecite list na drugo mesto v seznamu ali na podkomplet, da ga tja premaknete. S tipkovnico ga izberite in pritisnite {{key:Alt+Up}} ali {{key:Alt+Down}}.
- **Odprite list**: dvakrat kliknite nanj (ali pritisnite {{key:Enter}}). Njegova risba se odpre na lastnem zavihku, na tistem listu.
- **Odstranite**: izberite ga in pritisnite {{key:Delete}}. Sama risba se ne spremeni.
- **Razveljavite**: {{ui:Razveljavi spremembo kompleta}} in {{ui:Uveljavi spremembo kompleta}} se premikata skozi to, kar ste spremenili v kompletu.
- **Preštevilčite**: {{ui:Preštevilči liste …}} oštevilči vsak list ali vsak podkomplet po vrstnem redu seznama: predpona, začetek in korak (`A-` in `101` dasta A-101, A-102 …).

Vsaka sprememba se takoj shrani v datoteko kompleta.

## Številke listov iz njihovih polj

Namesto ročnega oštevilčenja naj pravilo sestavi vsako številko iz polj lista, tako da list, ki se premakne na drugo etažo ali v drugo panogo, dobi novo številko sam od sebe.

1. Vsak list dobi svoja polja: izberite ga, kliknite {{ui:Preimenuj…}} in v {{ui:Polja tega lista}} napišite eno na vrstico, na primer `DISCIPLINE = A` in `LEVEL = 1`. Polje, ki ga deli cel komplet (na primer `DISCIPLINE = A`), lahko namesto tega vnesete v {{ui:Lastnosti…}} kompleta.
2. Odprite meni podokna in kliknite {{ui:Pravilo oštevilčenja …}}.
3. Napišite pravilo, na primer `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` šteje navzgor med listi, katerih druga polja so enaka, tako da etaža 1 dobi A-101, A-102, etaža 2 pa spet začne pri A-201. `{SEQ:2}` jo zapiše z dvema številkama; `{SUBSET}` je ime podkompleta, v katerem je list.
4. Izberite, kaj se zgodi, ko se polje spremeni: {{ui:Ponovno oštevilči liste}} po vsaki spremembi drži številke v skladu s pravilom; druga izbira jih oštevilči enkrat, zdaj.

Pravilo se shrani v datoteko kompleta. Medtem ko se samodejno preštevilči, spreminjajte polja lista, ne njegove številke.

## Izpolnite glave risb iz kompleta

Glava risbe dobi svoje besedilo iz kompleta, kadar so njeni atributi označeni z imenom polja:

| Oznaka | Kaj prikaže |
|---|---|
| `SHEETNUMBER` (ali `SHEET_NO`, `DWG_NO`) | Številka lista |
| `SHEETTITLE` (ali `TITLE`, `SHEET_TITLE`) | Naslov lista |
| `SHEETDESC` | Opis lista |
| `PROJECTNAME` (ali `PROJECT`) | Ime projekta |
| `PROJECTNUMBER` (ali `PROJECT_NO`, `JOB_NO`) | Številka projekta |
| `SHEETSETNAME` | Ime kompleta |
| `SHEETINDEX`, `SHEETCOUNT` | „3 od 12“ in 12 |
| Vaše lastno, na primer `CLIENT` | Kar ste zanj vpisali v {{ui:Nastavi polja …}} |

{{ui:Nastavi polja …}} vsebuje ime projekta in številko ter vaša lastna polja, po eno na vrstico kot `IME = vrednost`.

{{ui:Posodobi risbe}} zapiše številke, naslove in polja v glave risb vsake risbe v kompletu ter preimenuje zavihek postavitve vsakega lista, kot določa komplet (privzeto številka in naslov, na primer `A-101 Tloris etaže`; {{ui:Nastavi polja …}} › {{ui:Imena zavihkov postavitev}} to spremeni). Vsaka risba se shrani na svojem mestu, v svojem formatu in različici. Po preštevilčenju ali preimenovanju listov ga zaženite znova, in zavihki ter glave risb sledijo.

## Seznam listov na naslovnem listu

Izberite naslovni list na seznamu in izberite {{ui:Postavi seznam listov na ta list}}. Tabela vseh listov (številka in naslov, pod podkompletom) gre v zgornji levi kot lista. {{ui:Posodobi risbe}} in {{ui:Objavi v PDF}} jo ohranjata posodobljeno. To je en blok, `CC_SHEETLIST`: premaknite ga kot vsako sklicevanje na blok.

## Objavite komplet

{{ui:Objavi v PDF}} naredi en PDF s stranjo na list, v vrstnem redu kompleta, pri vsakem papirju svoje velikosti, z zaznamkom za vsak list („A-101 — Tloris etaže“). Če je izbran podkomplet, CadCraft vpraša, ali naj objavi samo ta podkomplet. Glave risb v PDF-ju se izpolnijo iz kompleta, tudi preden posodobite risbe; objava sama risb ne spremeni. PDF se prenese.

{{ui:Objavi v DWG…}} zapiše vsak list kot lastno DWG (DWG 2018): model in ta en list, z glavo risbe, izpolnjeno iz kompleta, poimenovano po številki in naslovu (`A-101 Level 1 floor plan.dwg`). Izberite {{ui:DWG}} ali {{ui:DWG + PDF}} za PDF kompleta poleg njih. `publish.json` našteje vsako datoteko z velikostjo in SHA-256. Kadar mapo kompleta lahko pišete (CadCraft Studio ali mapa, ki ste jo izbrali v brskalniku), datoteke gredo v mapo `<ime kompleta> - objavljeno`; sicer se prenesejo kot en zip. [Prepisi razredov pogledov](topic:viewport-overrides) gredo v vsak DWG.

## Arhivirajte komplet

{{ui:Arhiviraj kot zip}} spakira datoteko kompleta, vsako risbo, ki jo uporablja, in kar te risbe povezujejo (povezane risbe, in njihove naprej, ter slike), ohrani njihove mape in doda `Transmittal.txt`, ki našteje vsako datoteko. Povezava, ki ni v mapi kompleta, je tam navedena kot manjkajoča. Povezave se najdejo po poti od risbe, nato po imenu datoteke kjerkoli v mapi.

## Datoteka kompleta

Datoteka `.ccsheets` je JSON, ki ga lahko preberete v katerem koli urejevalniku besedila:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside Clinic",
  "properties": { "PROJECTNAME": "Riverside Clinic", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Plans", "sheets": [
    { "id": "p1", "file": "plans/Level 1.dwg", "layout": "A-101 Level 1 floor plan", "number": "A-101", "title": "Level 1 floor plan" }
  ] } ]
}
```

Poti so relativne glede na mapo kompleta, z `/` med mapami. CadCraft preveri datoteko, ko jo odpre: absolutna pot, list brez datoteke ali postavitve ali besedilo, ki ni čisto navadno besedilo, se izpusti, zgodovina pa to pove.

## Odpravljanje težav

| Kaj vidite | Zakaj | Kaj storiti |
|---|---|---|
| „Ta mapa je tukaj samo za branje“ | Brskalnik ne more pisati v mapo | Uporabite Chrome ali Edge ali namizno aplikacijo; medtem {{ui:Prenesi datoteko kompleta}} ohrani vaše spremembe |
| List je izpuščen iz PDF-ja: „nima postavitve z imenom …“ | Postavitev lista je bila v risbi preimenovana ali odstranjena | Odprite risbo in preverite njene zavihke; odstranite list in ga znova dodajte |
| Glava risbe ostane prazna | Njeni atributi imajo druge oznake | Preimenujte oznake atributov v zgornja imena polj (BEDIT) |
| „že ima postavitev z imenom … zato zavihek ni bil preimenovan“ | Dva lista ene risbe bi dobila isto ime zavihka | Enemu dajte drugo številko ali naslov |
