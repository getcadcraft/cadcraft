---
title: Sopstvena dugmad (Moji alati)
summary: Dodaj dugmad na traku sa alatima koja pokreću tvoje makroe, dodeli im prečice, podeli ih kao datoteku i prenesi dugmad iz CUIx datoteke za prilagođavanje.
keywords: moji alati, prilagođena dugmad, dugmad na traci, makro, makroi, cui, cuix, prilagodi, meni, prečice, tasterske prečice, diesel, ^c^c, uvoz dugmadi, izvoz dugmadi
from: 36618802
---

## Šta ćeš naučiti

Kako da na traku sa alatima staviš sopstvena dugmad, od kojih svako pokreće makro napisan onako kako ga piše AutoCAD, kako dugmetu dodeliti taster i kako preneti dugmad iz CUIx datoteke.

## Dodaj dugme

1. Otvori {{ui:Podešavanja}} ({{key:Mod+,}}) i ostani na kartici {{ui:CadCraft}}. Pomeri se do {{ui:Moji alati}}.
2. Klikni {{ui:Dodaj dugme…}}.
3. Popuni okvir:
   - {{ui:Grupa}}: grupa na traci u koju ide, na primer `Moji alati`. Novo ime pravi novu grupu.
   - {{ui:Natpis}}: reči na dugmetu.
   - {{ui:Makro}}: šta kuca, na primer `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Prečica}}: klikni u okvir i pritisni tastere, na primer {{key:Ctrl+Alt+B}}.
   - {{ui:Ikona}}: PNG ili SVG slika najviše 64 KB, ili ništa (prikazuje se zvezda).
4. Klikni {{ui:Sačuvaj}}.

Dugme se pojavljuje na kraju trake, u svojoj grupi. Klikni ga, ili pritisni njegov taster, da ga pokreneš. {{ui:Uređivanje}} i {{ui:Izbriši}} na listi menjaju ili uklanjaju dugme.

## Napiši makro

Makro je ono što bi ukucao u komandnoj liniji, uz nekoliko znakova:

| Znak | Znači |
|---|---|
| `^C` | Prekida ono što se izvršava (`^C^C` je uobičajen početak) |
| `;` ili razmak | {{key:Enter}} |
| `\` | Čeka tebe: klik ili upisani odgovor, pa makro nastavlja |
| `_` ili `.` ispred komande | Prihvata se i ignoriše (međunarodna i ugrađena imena) |
| `*` na samom početku | Ponovo se izvršava kad se završi, dok ne pritisneš {{key:Esc}} |
| `^O`, `^G` | Uključuje ili isključuje {{ui:Ortogonalno}} i mrežu |
| `$M=` | Ostatak je DIESEL. Čitaju se samo `$(if,…)`, `$(getvar,…)`, `$(=,…)` i `$(eq,…)`; dugme koje koristi nešto drugo to kaže i ne radi ništa |

Primeri:

- `^C^C_line;0,0;@100,0;;` crta liniju dužine 100 iz koordinatnog početka.
- `^C^C_circle;\25;` traži od tebe centar, pa crta krug poluprečnika 25 tu.
- `^C^C_turnright` okreće pogled 90° udesno.

## Tasteri za prečice

Taster mora imati {{key:Mod}} (Ctrl, ili Cmd na Mac-u) ili {{key:Alt}} sa slovom ili ciframa, ili jedan od slobodnih funkcijskih tastera {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Slova sama po sebi idu u komandnu liniju. Tasteri koje CadCraft, aplikacija ili pregledač već koriste (kao {{key:Ctrl+S}} ili {{key:Ctrl+Z}}) i tasteri koje već koristi drugo dugme se odbijaju, a okvir kaže zašto.

## Podeli dugmad

- {{ui:Izvezi…}} čuva svaku grupu i dugme (sa ikonama i tasterima) kao `my-tools.json`.
- {{ui:Uvezi…}} dodaje grupe takve datoteke posle tvojih. Ime grupe koje već koristiš dobija „(2)“; taster koji bi se sukobio se izostavlja, a panel to kaže.

## Prenesi dugmad iz CUIx datoteke

1. Klikni {{ui:Uvezi CUIx…}} i izaberi `.cuix` datoteku.

Njegove trake sa alatima i paneli trake postaju grupe, svako dugme sa svojim makroom i svojom slikom (PNG, ili BMP pretvoren u PNG). Njegovi tasteri za prečice dolaze u sopstvenu grupu, svako dugme sa svojim tasterom; aliasi komandi koje može da nosi dolaze u grupu {{ui:Aliasi}}. Panel prikazuje šta je preneto.

:::note
Datoteka se samo čita. Komande koje CadCraft nema navode se po imenu, a ne pogađaju se: njihova dugmad to kažu kad se klikne. DIESEL van nekoliko gore navedenih funkcija, menija, tastera miša i radnih prostora se ne čita.
:::

## Dobro je znati

- Dugmad se čuvaju u ovom pregledaču (ili u ovoj desktop aplikaciji), a ne u crtežima.
- Dugme se izvršava kroz komandnu liniju, pa se opoziva kao sve što ukucaš: jedan {{key:Mod+Z}} po komandi koju je izvršilo.
