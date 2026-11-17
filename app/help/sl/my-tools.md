---
title: Lastni gumbi (Moja orodja)
summary: Dodajte gumbe orodne vrstice, ki zaženejo vaše lastne makre, jim dodelite bližnjične tipke, jih delite kot datoteko in prenesete gumbe iz datoteke CUIx za prilagajanje.
keywords: moja orodja, gumbi po meri, gumbi orodne vrstice, makro, makri, cui, cuix, prilagajanje, meni, bližnjične tipke, diesel, ^c^c, uvoz gumbov, izvoz gumbov
from: 36618802
---

## Kaj se boste naučili

Kako na orodno vrstico postavite svoje gumbe, pri čemer vsak zažene makro, napisan tako, kot ga pišejo v AutoCADu, kako gumbu dodelite tipko in kako prenesete gumbe iz datoteke CUIx.

## Dodajte gumb

1. Odprite {{ui:Nastavitve}} ({{key:Mod+,}}) in ostanite na zavihku {{ui:CadCraft}}. Pomaknite se do {{ui:Moja orodja}}.
2. Kliknite {{ui:Dodaj gumb …}}.
3. Izpolnite okno:
   - {{ui:Skupina}}: skupina orodne vrstice, v katero gre, na primer `Moja orodja`. Novo ime ustvari novo skupino.
   - {{ui:Oznaka}}: besedilo na gumbu.
   - {{ui:Makro}}: kar vtipka, na primer `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Bližnjična tipka}}: kliknite polje in pritisnite tipke, na primer {{key:Ctrl+Alt+B}}.
   - {{ui:Ikona}}: slika PNG ali SVG, največ 64 KB, ali nič (prikaže se zvezdica).
4. Kliknite {{ui:Shrani}}.

Gumb se pojavi na koncu orodne vrstice, v svoji skupini. Kliknite ga ali pritisnite njegovo tipko, da ga zaženete. {{ui:Urejanje}} in {{ui:Izbriši}} na seznamu spremenita ali odstranita gumb.

## Napišite makro

Makro je tisto, kar bi vtipkali v ukazno vrstico, z nekaj znaki:

| Znak | Pomeni |
|---|---|
| `^C` | Prekliče, kar teče (`^C^C` je običajen začetek) |
| `;` ali presledek | {{key:Enter}} |
| `\` | Počaka na vas: klik ali vtipkan odgovor, nato makro nadaljuje |
| `_` ali `.` pred ukazom | Sprejeto in prezrto (mednarodna in vgrajena imena) |
| `*` na samem začetku | Ponovi se ob vsakem koncu, dokler ne pritisnete {{key:Esc}} |
| `^O`, `^G` | Vklopi ali izklopi Orto oziroma mrežo |
| `$M=` | Ostalo je DIESEL. Berejo se samo `$(if,…)`, `$(getvar,…)`, `$(=,…)` in `$(eq,…)`; gumb, ki uporablja kaj drugega, to pove in ne naredi ničesar |

Primeri:

- `^C^C_line;0,0;@100,0;;` nariše 100 dolgo črto iz izhodišča.
- `^C^C_circle;\25;` od vas zahteva središče, nato tam nariše krožnico s polmerom 25.
- `^C^C_turnright` zasuče pogled za 90° v desno.

## Bližnjične tipke

Tipka potrebuje {{key:Mod}} (Ctrl ali Cmd na Macu) ali {{key:Alt}} s črko ali številko, ali eno od prostih funkcijskih tipk {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Črke same po sebi gredo v ukazno vrstico. Tipke, ki jih CadCraft, aplikacija ali brskalnik že uporabljajo (kot {{key:Ctrl+S}} ali {{key:Ctrl+Z}}), in tipke, ki jih že ima drug gumb, so zavrnjene, okno pa pove zakaj.

## Delite svoje gumbe

- {{ui:Izvozi …}} shrani vse skupine in gumbe (z ikonami in tipkami) kot `my-tools.json`.
- {{ui:Uvozi…}} doda skupine take datoteke za vašimi. Ime skupine, ki ga že uporabljate, dobi „(2)“; tipka, ki bi povzročila konflikt, se izpusti, plošča pa to pove.

## Prenesite gumbe iz datoteke CUIx

1. Kliknite {{ui:Uvozi CUIx …}} in izberite datoteko `.cuix`.

Njene orodne vrstice in plošče traku postanejo skupine, vsak gumb s svojim makrom in svojo sliko (PNG ali BMP, pretvorjen v PNG). Njene bližnjične tipke pridejo v svojo skupino, vsak gumb s svojo tipko; vzdevki ukazov, ki jih morda vsebuje, pridejo v skupino {{ui:Vzdevki}}. Plošča našteje, kaj je prišlo.

:::note
Datoteka se samo prebere. Ukazi, ki jih CadCraft nima, so navedeni z imenom, ne ugibani: njihovi gumbi to pokažejo ob kliku. DIESEL onkraj nekaj zgoraj navedenih funkcij, meniji, tipke miške in delovna okolja se ne berejo.
:::

## Dobro je vedeti

- Gumbi se hranijo v tem brskalniku (ali v tem namiznem programu), ne v risbah.
- Gumb teče skozi ukazno vrstico, zato ga lahko razveljavite kot vse, kar vtipkate: en {{key:Mod+Z}} na vsak ukaz, ki ga je zagnal.
