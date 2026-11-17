---
title: Vlastita dugmad (Moji alati)
summary: Dodajte dugmad na traku alata koja pokreću vaše makroe, dajte im prečice, dijelite ih kao datoteku i prenesite dugmad iz CUIx datoteke za prilagođavanje.
keywords: moji alati, prilagođena dugmad, dugmad na traci alata, makro, makroi, cui, cuix, prilagodi, meni, prečice, tipkovne prečice, diesel, ^c^c, uvoz dugmadi, izvoz dugmadi
from: 36618802
---

## Šta ćete naučiti

Kako staviti vlastita dugmad na traku alata, pri čemu svako pokreće makro napisan onako kako ga piše AutoCAD, kako dodijeliti dugmetu tipku i kako prenijeti dugmad iz CUIx datoteke.

## Dodajte dugme

1. Otvorite {{ui:Settings}} ({{key:Mod+,}}) i ostanite na kartici {{ui:CadCraft}}. Pomaknite se do {{ui:My tools}}.
2. Kliknite {{ui:Add a button…}}.
3. Popunite okvir:
   - {{ui:Group}}: grupa na traci alata u koju ide, na primjer `Moji alati`. Novi naziv pravi novu grupu.
   - {{ui:Label}}: riječi na dugmetu.
   - {{ui:Macro}}: šta se ukuca, na primjer `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Shortcut key}}: kliknite u okvir i pritisnite tipke, na primjer {{key:Ctrl+Alt+B}}.
   - {{ui:Icon}}: PNG ili SVG slika najviše 64 KB, ili ništa (prikazuje se zvjezdica).
4. Kliknite {{ui:Save}}.

Dugme se pojavi na kraju trake alata, u svojoj grupi. Kliknite ga, ili pritisnite njegovu tipku, da ga pokrenete. {{ui:Edit}} i {{ui:Delete}} u spisku mijenjaju ga ili uklanjaju.

## Napišite makro

Makro je ono što biste ukucali u komandnoj liniji, uz nekoliko znakova:

| Znak | Znači |
|---|---|
| `^C` | Prekini ono što se izvršava (`^C^C` je uobičajen početak) |
| `;` ili razmak | {{key:Enter}} |
| `\` | Čekaj vas: klik ili ukucani odgovor, pa makro nastavlja |
| `_` ili `.` ispred naredbe | Prihvata se i ignoriše (međunarodni i ugrađeni nazivi) |
| `*` na samom početku | Ponovo se izvršava svaki put kad završi, dok ne pritisnete {{key:Esc}} |
| `^O`, `^G` | Uključuje ili isključuje Ortogonalno, mrežu |
| `$M=` | Ostatak je DIESEL. Čitaju se samo `$(if,…)`, `$(getvar,…)`, `$(=,…)` i `$(eq,…)`; dugme koje koristi nešto drugo to kaže i ne radi ništa |

Primjeri:

- `^C^C_line;0,0;@100,0;;` crta liniju dužine 100 iz ishodišta.
- `^C^C_circle;\25;` traži centar, zatim crta krug poluprečnika 25 na njemu.
- `^C^C_turnright` okreće pogled 90° udesno.

## Prečice

Prečica mora imati {{key:Mod}} (Ctrl, ili Cmd na Macu) ili {{key:Alt}} uz slovo ili cifru, ili jedan od slobodnih funkcijskih tastera {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Slova sama po sebi idu u komandnu liniju. Tipke koje već koriste CadCraft, aplikacija ili preglednik (kao {{key:Ctrl+S}} ili {{key:Ctrl+Z}}) i tipke koje već koristi drugo dugme se odbijaju, a okvir kaže zašto.

## Dijelite svoja dugmad

- {{ui:Export…}} čuva svaku grupu i dugme (sa ikonama i tipkama) kao `my-tools.json`.
- {{ui:Import…}} dodaje grupe iz takve datoteke iza vaših. Naziv grupe koji već koristite dobija "(2)"; tipka koja bi se sukobila se izostavlja, a panel to kaže.

## Prenesite dugmad iz CUIx datoteke

1. Kliknite {{ui:Import CUIx…}} i izaberite `.cuix` datoteku.

Njene trake alata i panele trake postaju grupe, a svako dugme dolazi sa svojim makroom i slikom (PNG, ili BMP pretvoren u PNG). Njene prečice dolaze u zasebnoj grupi, sa svojom tipkom uz svako dugme; nazivi naredbi koje može nositi dolaze u grupu {{ui:Aliases}}. Panel navodi šta je preneseno.

:::note
Datoteka se samo čita. Naredbe koje CadCraft nema navode se po nazivu, a ne pogađaju se: njihova dugmad to kažu kad se klikne. DIESEL izvan nekoliko funkcija iznad, meniji, dugmad miša i radni prostori se ne čitaju.
:::

## Korisno znati

- Dugmad se čuvaju u ovom pregledniku (ili u ovoj desktop aplikaciji), a ne u crtežima.
- Dugme radi kroz komandnu liniju, pa se poništava kao i sve što ukucate: po jedan {{key:Mod+Z}} za svaku naredbu koju je izvršilo.
