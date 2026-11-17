---
title: Vlastiti gumbi (Moji alati)
summary: Dodajte gumbe na alatnu traku koji pokreću vaše makronaredbe, dodijelite im tipke prečaca, dijelite ih kao datoteku i prenesite gumbe iz datoteke za prilagodbu CUIx.
keywords: moji alati, prilagođeni gumbi, gumbi alatne trake, makro, makronaredbe, cui, cuix, prilagodba, izbornik, tipke prečaca, prečaci tipkovnice, diesel, ^c^c, uvoz gumba, izvoz gumba
from: 36618802
---

## Što ćete naučiti

Kako staviti vlastite gumbe na alatnu traku, a svaki pokreće makro napisan onako kako ga piše AutoCAD. Kako dodijeliti gumbu tipku i kako prenijeti gumbe iz datoteke CUIx.

## Dodajte gumb

1. Otvorite {{ui:Postavke}} ({{key:Mod+,}}) i ostanite na kartici {{ui:CadCraft}}. Pomaknite se do {{ui:Moji alati}}.
2. Kliknite {{ui:Dodaj gumb…}}.
3. Ispunite okvir:
   - {{ui:Skupina}}: skupina alatne trake u koju ide, na primjer `Moji alati`. Novi naziv stvara novu skupinu.
   - {{ui:Oznaka}}: riječi na gumbu.
   - {{ui:Makro}}: što upisuje, na primjer `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Tipka prečaca}}: kliknite okvir i pritisnite tipke, na primjer {{key:Ctrl+Alt+B}}.
   - {{ui:Ikona}}: PNG ili SVG slika do 64 KB, ili nijedna (tada se prikazuje zvjezdica).
4. Kliknite {{ui:Spremi}}.

Gumb se pojavljuje na kraju alatne trake, u svojoj skupini. Kliknite ga ili pritisnite njegovu tipku da ga pokrenete. {{ui:Uređivanje}} i {{ui:Izbriši}} na popisu mijenjaju ga ili uklanjaju.

## Napišite makro

Makro je ono što biste upisali u naredbeni redak, uz nekoliko znakova:

| Znak | Znači |
|---|---|
| `^C` | Prekida što god se izvodi (`^C^C` je uobičajen početak) |
| `;` ili razmak | {{key:Enter}} |
| `\` | Čeka vas: klik ili upisani odgovor, zatim makro nastavlja |
| `_` ili `.` ispred naredbe | Prihvaća se i zanemaruje (međunarodni i ugrađeni nazivi) |
| `*` na samom početku | Ponavlja se svaki put kad završi, dok ne pritisnete {{key:Esc}} |
| `^O`, `^G` | Uključuje ili isključuje Orto i mrežu |
| `$M=` | Ostatak je DIESEL. Čitaju se samo `$(if,…)`, `$(getvar,…)`, `$(=,…)` i `$(eq,…)`; gumb koji koristi bilo što drugo to kaže i ne radi ništa |

Primjeri:

- `^C^C_line;0,0;@100,0;;` crta liniju duljine 100 iz ishodišta.
- `^C^C_circle;\25;` traži od vas središte, zatim crta kružnicu radijusa 25 na njemu.
- `^C^C_turnright` zakreće prikaz za 90° udesno.

## Tipke prečaca

Tipka treba {{key:Mod}} (Ctrl, ili Cmd na Macu) ili {{key:Alt}} sa slovom ili znamenkom, ili jednu od slobodnih funkcijskih tipki {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Slova sama po sebi idu u naredbeni redak. Tipke koje već koriste CadCraft, aplikacija ili preglednik (kao {{key:Ctrl+S}} ili {{key:Ctrl+Z}}), i tipke koje već koristi drugi gumb, se odbijaju, a okvir kaže zašto.

## Dijelite svoje gumbe

- {{ui:Izvezi…}} sprema svaku skupinu i gumb (s ikonama i tipkama) kao `my-tools.json`.
- {{ui:Uvezi…}} dodaje skupine takve datoteke iza vaših. Naziv skupine koji već koristite dobiva „(2)“; tipka koja bi se sukobila se izostavlja, a ploča to kaže.

## Uvezite gumbe iz datoteke CUIx

1. Kliknite {{ui:Uvezi CUIx…}} i odaberite datoteku `.cuix`.

Njezine alatne trake i ploče vrpce postaju skupine, a svaki gumb dolazi sa svojim makroom i slikom (PNG, ili BMP pretvoren u PNG). Njezine tipke prečaca dolaze u vlastitoj skupini, svaka s pripadajućim gumbom; aliasi naredbi koje može sadržavati dolaze u skupinu {{ui:Aliasi}}. Ploča navodi što je došlo.

:::note
Datoteka se samo čita. Naredbe koje CadCraft nema navode se po nazivu, ne pogađaju se: njihovi gumbi to kažu kad se klikne na njih. DIESEL osim nekoliko funkcija navedenih gore, izbornici, tipke miša i radni prostori se ne čitaju.
:::

## Korisno znati

- Gumbi se čuvaju u ovom pregledniku (ili u ovoj desktop aplikaciji), a ne u crtežima.
- Gumb radi kroz naredbeni redak, pa se poništava kao sve što upišete: jedan {{key:Mod+Z}} po naredbi koju je pokrenuo.
