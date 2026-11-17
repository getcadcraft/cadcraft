---
title: Miš, trackpad i ekran osjetljiv na dodir
summary: Kako zumirati, pomjerati pogled, kliknuti desnim dugmetom i birati u CadCraftu mišem sa točkićem, trackpadom na Macu ili PC-u ili ekranom osjetljivim na dodir, i šta se razlikuje među preglednicima.
keywords: trackpad, touchpad, magic mouse, dodir, tablet, ipad, pomjeranje pogleda, zumiranje, štipanje, desni klik, dva prsta, srednje dugme, preglednik, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft je zamišljen za miš sa točkićem. Sve radi i s trackpadom, uz nekoliko navika koje treba naučiti. Ekrani osjetljivi na dodir rade za biranje, uz ograničenja.

## Miš sa točkićem

- **Zumiranje:** okrenite točkić. Crtež se zumira oko križnog kursora, pa pokažite na ono što želite vidjeti.
- **Pomjeranje pogleda:** držite točkić pritisnut i prevucite, ili prevucite desnim dugmetom.
- **Zumiraj sve:** dvaput kliknite točkić ili kliknite {{ui:Extents}}.
- **Nazad na prethodni pogled:** kliknite {{ui:Previous}} u grupi Pogled, ili ukucajte `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Niz koraka točkićem računa se kao jedan pogled, pa jedan {{ui:Previous}} to poništi. Poglede kojima se vraćate sačuvajte pomoću {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** desni klik.

## Trackpad

:::mac
- **Pomjeranje pogleda:** pomjerajte dva prsta na trackpadu, u bilo kojem smjeru: crtež prati vaše prste. Možete i prevući uz držanje dva prsta na kliku (prevlačenje desnim dugmetom).
- **Zumiranje:** štipnite dvama prstima. Zumiranje prati križni kursor.
- **Desni klik (Enter):** kliknite dvama prstima. Uključite "Sekundarni klik" u **Postavkama sistema**, zatim **Trackpad**, ako ništa ne radi. Klik s Control-tipkom može se u CadCraftu računati kao običan klik, a ne kao desni, pa koristite klik dvama prstima.
- **Zumiranje na područje:** kliknite {{ui:Window}} u grupi Pogled i kliknite dva ugla.
:::

:::windows linux
- **Pomjeranje pogleda:** pomjerajte dva prsta na touchpadu, u bilo kojem smjeru: crtež prati prste. Možete i prevući uz držanje desnog dugmeta.
- **Zumiranje:** štipnite dvama prstima. Zumiranje prati križni kursor.
- **Desni klik (Enter):** kliknite dvama prstima ili kliknite donji desni ugao touchpada, zavisno od postavki touchpada.
- **Zumiranje na područje:** kliknite {{ui:Window}} u grupi Pogled i kliknite dva ugla.
:::

Držanje {{key:Space}} i prevlačenje **ne** pomjera pogled u CadCraftu: {{key:Space}} je Enter.

Točkić miša i dalje zumira, korak po korak. Touchpad koji šalje pomicanje u cijelim koracima, kao točkić, zumira dvoprstnim pomicanjem umjesto da pomjera pogled: smanjite prikaz, pokažite područje koje želite i ponovo ga uvećajte. Kartica 3D zadržava svoje pokrete trackpadom (pogledajte [Model u 3D](topic:3d-solids#look-around)).

## Ekrani osjetljivi na dodir i tableti

CadCraft čita prst kao klik mišem:

- Dodir bira tačku ili objekat, ili odabire.
- Prevlačenje prsta po praznom prostoru crta lazo (prevlačenje udesno prvo daje prozor, a ulijevo prvo ukršteni okvir; pogledajte [Lazo odabir](topic:lasso-selection)).
- U {{cmd:TRIM}} i {{cmd:EXTEND}}, prevlačenje prsta preko dijelova ih obreže ili produži sve.
- Prevlačenje hvatišta odabranog objekta pomjera hvatište (hvatišta i okvir za odabir veći su za prst).
- **Štipanje** dvama prstima zumira oko tačke između njih; pomicanje dva prsta zajedno **pomjera pogled**. Drugi prst poništava ono što je započeo prvi, pa štipanje nikad ne ostavi trag.
- **Dugi pritisak** (držite mirno oko pola sekunde) je desni klik: {{key:Enter}}. Završava naredbu, završava odabir ili ponavlja posljednju naredbu.

Ispod komandne linije pojavljuje se **red tipki**: {{ui:Esc}}, {{ui:Undo}}, {{ui:Redo}}, znakovi koje tastatura tableta skriva (`@` `,` `<` `'` `"` `-`), {{ui:Snap}}, {{ui:Ortho}}, dugme tastature i veliki {{ui:Enter}}. Dodirnite dugme tastature (ili komandnu liniju) da ukucate naredbu ili broj.

Nema lebdenja, pa se oznake hvatanja pokazuju samo tamo gdje je vaš prst.

:::touch
Koristite ekran osjetljiv na dodir. Za sve osim brzog pregleda, priključena tastatura i miš ili trackpad čine CadCraft mnogo lakšim za upotrebu.
:::

## Preglednici

CadCraft radi isto u Chromeu, Edgeu, Firefoxu i Safariju, na Macu, Windowsu i Linuxu. Razlike su male:

| Tema | Šta treba znati |
|---|---|
| Otvaranje DWG-a | Veliki crteži se čitaju nekoliko sekundi u svakom pregledniku; statusna linija tada piše "Čitanje …" |
| Preuzimanja | Svaki preglednik odlučuje gdje idu preuzimanja i da li prvo pita; pogledajte [Preglednici i računari](common:browsers) |
| Otvori za štampu | Otvara PDF u novoj kartici. Ako preglednik blokira iskačuće prozore, CadCraft umjesto toga preuzima PDF |
| F7 | Firefox može ponuditi pregledanje kursorom; izaberite Ne |
| Napuštanje s nesačuvanim izmjenama | Svaki preglednik prikazuje svoje pitanje "Napustiti sajt?", koje CadCraft ne može promijeniti |

:::safari
U Safariju, PDF otvoren sa {{ui:Open to print}} može se prikazati u kartici bez štampanja: koristite **Datoteka**, pa **Štampaj**.
:::

:::firefox
Firefox može pitati šta da radi sa svakim preuzimanjem. Izaberite da sačuva datoteku, ili to jednom promijenite u postavkama Firefoxa pod Preuzimanja.
:::
