---
title: Miš, trackpad i dodir
summary: Kako zumirati, pomicati, desno klikati i birati u CadCraftu s kotačićem miša, trackpadom Mac ili PC računala ili zaslonom osjetljivim na dodir, te što se razlikuje među preglednicima.
keywords: touchpad, trackpad, magic mouse, dodir, tablet, ipad, pomicanje, zumiranje, štipanje, desni klik, dva prsta, srednja tipka, preglednik, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft je zamišljen za miš s kotačićem. Sve radi i s trackpadom, uz nekoliko navika koje treba naučiti. Zasloni osjetljivi na dodir rade za odabir, uz ograničenja.

## Miš s kotačićem

- **Zumiranje:** okrenite kotačić. Crtež se zumira oko križića, pa pokažite na ono što želite vidjeti.
- **Pomicanje:** držite kotačić pritisnutim i povucite, ili povucite desnom tipkom.
- **Zumiranje na sve:** dvaput kliknite kotačić ili kliknite {{ui:Opseg}}.
- **Natrag na prethodni prikaz:** kliknite {{ui:Prethodno (P)}} u grupi Prikaz ili upišite `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Niz koraka kotačića broji se kao jedan prikaz, pa jedan {{ui:Prethodno (P)}} poništava cijeli niz. Prikaze kojima se vraćate spremite pomoću {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** desni klik.

## Trackpad

:::mac
- **Pomicanje:** pomaknite dva prsta po trackpadu, u bilo kojem smjeru: crtež prati vaše prste. Možete i povlačiti dok držite klik s dva prsta (povlačenje desnom tipkom).
- **Zumiranje:** raširite ili stisnite dva prsta. Zumiranje prati križić.
- **Desni klik (Enter):** kliknite s dva prsta. Uključite „Secondary click“ u **System Settings**, zatim **Trackpad**, ako ne radi ništa. Control-klik se u CadCraftu može računati kao obični klik, a ne kao desni, pa koristite klik s dva prsta.
- **Zumiranje na područje:** kliknite {{ui:Prozor (W)}} u grupi Prikaz i kliknite dva kuta.
:::

:::windows linux
- **Pomicanje:** pomaknite dva prsta po touchpadu, u bilo kojem smjeru: crtež prati vaše prste. Možete i povlačiti dok držite desnu tipku.
- **Zumiranje:** raširite ili stisnite dva prsta. Zumiranje prati križić.
- **Desni klik (Enter):** kliknite s dva prsta ili kliknite donji desni kut touchpada, ovisno o postavkama touchpada.
- **Zumiranje na područje:** kliknite {{ui:Prozor (W)}} u grupi Prikaz i kliknite dva kuta.
:::

Držanje {{key:Space}} i povlačenje **ne** pomiče crtež u CadCraftu: {{key:Space}} je Enter.

Kotačić miša i dalje zumira, korak po korak. Touchpad koji šalje pomicanje u cijelim koracima, kao kotačić, zumira dvoprstnim pomicanjem umjesto da pomiče prikaz: umanjite, pokažite na područje koje želite i opet uvećajte. Kartica 3D zadržava vlastite pokrete trackpadom (pogledajte [Model u 3D](topic:3d-solids#look-around)).

## Zasloni osjetljivi na dodir i tableti

CadCraft prihvaća prst kao klik mišem:

- Dodir odabire točku ili objekt, ili bira.
- Povlačenje prstom po praznom prostoru crta laso (povlačenje najprije udesno daje prozor, a najprije ulijevo prozor križanja; pogledajte [Laso odabir](topic:lasso-selection)).
- U {{cmd:TRIM}} i {{cmd:EXTEND}} povlačenje prstom preko dijelova skraćuje ili produljuje sve njih.
- Povlačenje ručke odabranog objekta pomiče ručku (ručke i okvir za odabir veći su za prst).
- **Štipanje** dvama prstima za zumiranje oko točke između njih; pomaknite dva prsta zajedno za **pomicanje**. Drugi prst poništava ono što je započeo prvi, pa štipanje nikad ne ostavlja trag.
- **Dugo pritiskanje** (držite mirno oko pola sekunde) je desni klik: {{key:Enter}}. Završava naredbu, završava odabir ili ponavlja posljednju naredbu.

Ispod naredbenog retka pojavljuje se **redak tipki**: {{ui:Esc}}, Poništi, Ponovi, znakovi koje tablet tipkovnica skriva (`@` `,` `<` `'` `"` `-`), {{ui:Hvatanje}}, {{ui:Orto}}, gumb tipkovnice i veliki {{ui:Enter}}. Dodirnite gumb tipkovnice (ili naredbeni redak) za upisivanje naredbe ili broja.

Nema lebdenja, pa se oznake hvatanja prikazuju samo tamo gdje je vaš prst.

:::touch
Koristite zaslon osjetljiv na dodir. Za sve osim brzog pregleda, priključena tipkovnica i miš ili trackpad čine CadCraft mnogo lakšim za rad.
:::

## Preglednici

CadCraft radi jednako u Chromeu, Edgeu, Firefoxu i Safariju, na Macu, Windowsu i Linuxu. Razlike su male:

| Tema | Što treba znati |
|---|---|
| Otvaranje DWG-a | Veliki crteži trebaju nekoliko sekundi za čitanje u svakom pregledniku; redak statusa u međuvremenu prikazuje „Čitanje …“ |
| Preuzimanja | Svaki preglednik odlučuje gdje idu preuzimanja i hoće li prije pitati; pogledajte [Preglednici i računala](common:browsers) |
| Otvori za ispis | Otvara PDF u novoj kartici. Ako preglednik blokira skočne prozore, CadCraft umjesto toga preuzima PDF |
| F7 | Firefox može ponuditi pregledavanje kursorom; odaberite Ne |
| Odlazak s nespremljenim promjenama | Svaki preglednik prikazuje vlastito pitanje „Napustiti stranicu?“, što CadCraft ne može promijeniti |

:::safari
U Safariju PDF otvoren pomoću {{ui:Otvori za ispis}} može se prikazati u kartici bez ispisivanja: upotrijebite **Datoteka**, zatim **Ispis**.
:::

:::firefox
Firefox može pitati što učiniti sa svakim preuzimanjem. Odaberite spremanje datoteke ili to jednom promijenite u postavkama Firefoxa, pod Preuzimanja.
:::
