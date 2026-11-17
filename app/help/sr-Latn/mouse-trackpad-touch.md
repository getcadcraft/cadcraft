---
title: Miš, tačpad i dodir
summary: Kako uvećati, pomerati pogled, desno kliknuti i birati u CadCraft-u mišem sa točkićem, Mac ili PC tačpadom ili ekranom osetljivim na dodir, i šta se razlikuje među pregledačima.
keywords: tačpad, touchpad, magic mouse, dodir, tablet, ipad, pomeranje pogleda, zumiranje, štipanje, desni klik, dva prsta, srednje dugme, pregledač, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft je napravljen za miš sa točkićem. Sve radi i sa tačpadom, uz nekoliko navika koje treba naučiti. Ekrani osetljivi na dodir rade za biranje, uz ograničenja.

## Miš sa točkićem

- **Zumiranje:** okreni točkić. Crtež se uvećava oko krstića, zato pokaži na ono što želiš da vidiš.
- **Pomeranje pogleda:** drži točkić pritisnut i prevuci, ili prevuci desnim dugmetom.
- **Zumiranje na sve:** dvaput klikni točkić, ili klikni {{ui:Granice}}.
- **Nazad na prethodni pogled:** klikni {{ui:Prethodni}} u grupi Pogled, ili ukucaj `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Niz koraka točkića broji se kao jedan pogled, pa jedan {{ui:Prethodni}} sve to poništava. Sačuvaj poglede kojima se često vraćaš pomoću {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** desni klik.

## Tačpad

:::mac
- **Pomeranje pogleda:** pomeri dva prsta po tačpadu, u bilo kom smeru: crtež prati tvoje prste. Možeš i prevući uz držanje dva prsta na kliku (prevlačenje desnim dugmetom).
- **Zumiranje:** štipni sa dva prsta. Zumiranje prati krstić.
- **Desni klik (Enter):** klikni sa dva prsta. Uključi „Secondary click“ u **System Settings**, pa **Trackpad**, ako ništa ne radi. Control-klik u CadCraft-u može se računati kao obični klik, a ne kao desni, zato koristi klik sa dva prsta.
- **Zumiranje na oblast:** klikni {{ui:Prozor (W)}} u grupi Pogled i klikni dva ugla.
:::

:::windows linux
- **Pomeranje pogleda:** pomeri dva prsta po tačpadu, u bilo kom smeru: crtež prati prste. Možeš i prevući uz držanje desnog dugmeta.
- **Zumiranje:** štipni sa dva prsta. Zumiranje prati krstić.
- **Desni klik (Enter):** klikni sa dva prsta, ili klikni donji desni ugao tačpada, zavisno od podešavanja tačpada.
- **Zumiranje na oblast:** klikni {{ui:Prozor (W)}} u grupi Pogled i klikni dva ugla.
:::

Držanje {{key:Space}} i prevlačenje **ne** pomera pogled u CadCraft-u: {{key:Space}} je Enter.

Točkić miša i dalje uvećava, korak po korak. Tačpad koji šalje skrolovanje u celim koracima, kao točkić, zumira dvoprstnim skrolovanjem umesto da pomera: udalji pogled, pokaži na oblast koju želiš i ponovo uvećaj. Karticu 3D zadržava svoje tačpad pokrete (videti [Model u 3D](topic:3d-solids#look-around)).

## Ekrani osetljivi na dodir i tableti

CadCraft prihvata prst kao klik mišem:

- Dodir bira tačku ili objekat, ili označava izbor.
- Prevlačenje prsta po praznom prostoru crta lasso (pomeranje udesno najpre daje prozor, ulevo ukrštanje; videti [Lasso izbor](topic:lasso-selection)).
- U {{cmd:TRIM}} i {{cmd:EXTEND}}, prevlačenje prsta preko delova ih seče ili produžava sve.
- Prevlačenje hvatišta izabranog objekta pomera hvatište (hvatišta i kvadrat za biranje su veći za prst).
- **Štipanje** sa dva prsta uvećava oko tačke između njih; pomeranje dva prsta zajedno **pomera pogled**. Drugi prst poništava ono što je započeo prvi, pa štipanje nikad ne ostavi trag.
- **Dugi pritisak** (držanje mirno oko pola sekunde) je desni klik: {{key:Enter}}. Završava komandu, završava izbor ili ponavlja poslednju komandu.

Ispod komandne linije pojavljuje se **red tipki**: {{ui:Esc}}, {{ui:Opozovi}}, {{ui:Ponovi}}, znakovi koje tablet tastatura skriva (`@` `,` `<` `'` `"` `-`), {{ui:Hvatanje}}, {{ui:Ortogonalno}}, dugme za tastaturu i veliki {{ui:Enter}}. Dodirni dugme za tastaturu (ili komandnu liniju) da ukucaš komandu ili broj.

Nema lebdenja, pa se oznake hvatanja pojavljuju samo tamo gde je prst.

:::touch
Koristite ekran osetljiv na dodir. Za nešto više od brzog pregleda, spoljna tastatura i miš ili tačpad čine CadCraft mnogo lakšim za rad.
:::

## Pregledači

CadCraft radi isto u Chrome, Edge, Firefox i Safari, na Mac, Windows i Linux. Razlike su male:

| Tema | Šta treba znati |
|---|---|
| Otvaranje DWG-a | Veliki crteži se čitaju nekoliko sekundi u svakom pregledaču; statusna linija tada prikazuje „Čitanje …“ |
| Preuzimanja | Svaki pregledač odlučuje gde idu preuzimanja i da li prvo pita; videti [Pregledači i računari](common:browsers) |
| Otvori za štampanje | Otvara PDF u novoj kartici. Ako pregledač blokira iskačuće prozore, CadCraft preuzima PDF |
| F7 | Firefox može ponuditi pregledanje kursorom; izaberi Ne |
| Napuštanje sa nesačuvanim izmenama | Svaki pregledač prikazuje svoje pitanje „Napustiti sajt?“, što CadCraft ne može da promeni |

:::safari
U Safari, PDF otvoren sa {{ui:Otvori za štampanje}} može se prikazati u kartici bez štampanja: koristi **File**, pa **Print**.
:::

:::firefox
Firefox može pitati šta da uradi sa svakim preuzimanjem. Izaberi da sačuvaš datoteku, ili to jednom promeni u Firefox-ovim podešavanjima, u delu Downloads.
:::
