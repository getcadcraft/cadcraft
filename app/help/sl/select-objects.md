---
title: Izbira objektov
summary: Izberite objekte enega za drugim, z oknom ali s križanjem, pred ali med ukazom, in odstranite objekte iz izbora.
keywords: izberi, izbor, okno, križanje, samostalnik-glagol, izberi, vse, zadnji, prejšnji, ograja, odstrani, dodaj, tab, kroženje, prekrivanje, qselect, hitra izbira, filter, izberi podobne, selectsimilar, shift, prekliči izbor, ctrl+a, pickfirst
from: 676508c7
---

## Kaj se boste naučili

Kako izbrati objekte, na katere ukaz deluje. CadCraft ima dva načina dela, oba sta v redu:

- **Najprej izberite, nato ukaz** (samostalnik-glagol). Izberite objekte, nato vnesite `M` za premik. Ukaz vzame vaš izbor in se takoj preide na naslednje vprašanje.
- **Najprej ukaz, nato izbira** (glagol-samostalnik). Vnesite `M`; ukaz vpraša `Izberite objekte:`; izberete, nato pritisnete {{key:Enter}}.

## Izberite en objekt naenkrat

1. Brez tekočega ukaza kliknite črto. Označi se in pojavijo se njeni prijemalniki (majhni kvadratki). Desna plošča prikazuje njene lastnosti.
2. Kliknite drug objekt. Doda se k izboru.
3. Držite {{key:Shift}} in kliknite izbrani objekt. Odstrani se iz izbora.
4. Pritisnite {{key:Esc}}. Nič ni izbrano.

## Okno in križanje

Kliknite enkrat na prazen prostor, premaknite se in spet kliknite: nastane pravokotnik. Pritisk in vlečenje namesto tega nariše prosto roko lasso, z enakima dvema vrstama (glejte [Izbira z lassom](topic:lasso-selection); Nastavitve lahko nastavijo, da vlečenje nariše pravokotnik). Kateri objekti so izbrani, je odvisno od smeri:

| Premaknete | Okvir | Izbere |
|---|---|---|
| Od leve proti desni | Okno | Samo objekte **popolnoma znotraj** okvirja |
| Od desne proti levi | Križanje | Objekte znotraj okvirja **in** objekte, ki se ga dotikajo |

1. Narišite nekaj prekrivajočih se črt in krogov.
2. Kliknite prazen prostor levo od nekaterih objektov, premaknite se desno in spet kliknite. Izberejo se samo objekti, ki so povsem znotraj.
3. Pritisnite {{key:Esc}}.
4. Kliknite prazen prostor desno, premaknite se levo čez nekaj objektov in spet kliknite. Izbere se vse, česar se okvir dotakne.
5. Držite {{key:Shift}} in narišite okvir ali lasso čez nekaj izbranih objektov. Ti izstopijo iz izbora.

## Izberite, nato zaženite ukaz

1. Izberite dva kroga.
2. Vnesite `M` in pritisnite {{key:Enter}}.

Zgodovina pravi `Najdeno: 2`, poziv pa takoj preide na `Določite izhodiščno točko`. Dokončajte premik (glejte [Premakni, kopiraj, zasukaj, spremeni merilo in zrcali](topic:modify-objects)).

Ko se ukaz konča, se izbor izbriše, da se naslednji ukaz začne na novo.

Ukazi, ki na ta način sprejmejo izbor: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} in {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} in {{cmd:CHAMFER}} vedno zahtevajo, da izberete objekte enega za drugim; {{cmd:TRIM}} in {{cmd:EXTEND}} sprejmeta klik ali pot, ki jo povlečete čez kose (glejte [Obreži in podaljšaj](topic:trim-and-extend)).

## Zaženite ukaz, nato izberite

1. Poskrbite, da nič ni izbrano ({{key:Esc}}).
2. Vnesite `E` in pritisnite {{key:Enter}}. Poziv se glasi `Izberite objekte:`.
3. Kliknite objekte ali povlecite okna in križanja. Zgodovina šteje vsak izbor (`Najdeno: 1`, `Najdeno: 3`).
4. Pritisnite {{key:Enter}}, {{key:Space}} ali desni klik, da končate izbiranje.

Objekti so izbrisani, zgodovina pa pove, koliko jih je.

Pri pozivu `Izberite objekte:` lahko vnesete tudi:

- `ALL`, nato {{key:Enter}}: vsak objekt, ki ga lahko urejate na odprtem zavihku.
- `L` (ali `LAST`), nato {{key:Enter}}: nazadnje narisani objekt.
- `P` (Prejšnji): objekti, na katerih je delal zadnji ukaz, če so še tam.
- `F` (Ograja): kliknite ali vnesite točke vzdolž črte; dodan je vsak objekt, ki ga črta seka. Pritisnite {{key:Enter}}, da končate ograjo; `U` odvzame njeno zadnjo točko.
- `W` (Okno) ali `C` (Križanje): dva vogala, ne glede na smer vlečenja.
- `R` (Odstrani): od zdaj naprej kliki, okna in ograje objekte **odstranjujejo**. Poziv se glasi `Odstranite objekte:`. `A` (Dodaj) preklopi nazaj.
- `?`: seznam teh v zgodovini.

Te možnosti niso prikazane v pozivu, kot v AutoCAD-u.

## Izberite enega izmed več objektov, ki ležijo drug na drugem

Kjer se objekti prekrivajo ali dotikajo, klik vzame najbližjega. Za drugega:

1. Držite kazalec mirno nad mestom.
2. Pritisnite {{key:Tab}}. Naslednji objekt tam je označen, vrstica stanja pa pove, kateri je ("2 od 3: Črta na sloju Zidovi").
3. Ponovno pritisnite {{key:Tab}}, dokler ni označen tisti, ki ga želite, nato kliknite brez premika.

Premik kazalca začne znova. To deluje brez tekočega ukaza, pri pozivu `Izberite objekte:` in kjerkoli ukaz zahteva izbiro enega objekta.

## Izbor po pravilu: hitra izbira

{{cmd:QSELECT}} (`QS`, ali {{ui:Urejanje}} › {{ui:Več}} › {{ui:Hitra izbira}}) izbere vsak objekt, ki ustreza pravilu, na primer vsak krog s polmerom pod 50 ali vsako sklicevanje na blok z imenom DOOR-900.

1. Odprite {{ui:Hitra izbira}}.
2. Izberite {{ui:Vrsta objekta}} (seznam šteje vsako vrsto), nato {{ui:Lastnost}}: {{ui:Sloj}}, {{ui:Barva}} in za nekatere vrste {{ui:Dolžina}}, {{ui:Polmer}}, {{ui:Površina}}, {{ui:Višina besedila}}, {{ui:Vsebina besedila}}, {{ui:Ime bloka}} ali {{ui:Vzorec šrafure}}.
3. Izberite {{ui:Operator}} in {{ui:Vrednost}}. `*` se ujema z nadomestnimi znaki (`DOOR-*`); {{ui:Izberi vse}} vzame vsak objekt vrste. Števec na dnu kaže, koliko se ujema, medtem ko izbirate.
4. {{ui:Način uporabe}}: vključi ujemanja ali vse ostalo. {{ui:Uporabi na}} {{ui:Trenutni izbor}} zoži, kar ste imeli izbrano; {{ui:Dodaj trenutnemu izboru}} doda k njemu.
5. Kliknite {{ui:Izberi}}. Nato zaženite želeni ukaz: uporabi izbor.

## Izberi podobne

Izberite enega ali več objektov in vnesite {{cmd:SELECTSIMILAR}} (`SIM`), ali izberite {{ui:Urejanje}} › {{ui:Več}} › {{ui:Izberi podobne}}. Izberejo se vsi objekti iste vrste na istem sloju in iste barve; sklicevanja na bloke morajo imeti tudi isti blok, šrafure pa isti vzorec. Vnesite `SE` pri pozivu `Izberite objekte`, da izberete, kaj se mora ujemati.

## Izberite zdaj, uporabite kasneje

Vnesite `SELECT` in pritisnite {{key:Enter}}, izberite objekte na katerikoli od zgoraj naštetih načinov in pritisnite {{key:Enter}}. Ostanejo izbrani za naslednji ukaz, `P` pa jih pri naslednjem pozivu `Izberite objekte:` znova izbere.

## Izberite vse

Brez tekočega ukaza pritisnite {{key:Mod+A}} ali izberite {{ui:Izberi vse}} v meniju {{ui:Urejanje}} › {{ui:Več}} orodne vrstice, da izberete vsak objekt, ki ga lahko urejate na odprtem zavihku. Če ste v ukazno vrstico nekaj vnesli, {{key:Mod+A}} izbere to besedilo: najprej pritisnite {{key:Esc}}, da ga počistite. Pri pozivu `Izberite objekte:` vnesite `ALL`. {{ui:Prekliči izbor}} v istem meniju ali {{key:Esc}} izbor počisti.

:::tip
Če želite, da vsak klik nadomesti izbor (in {{key:Shift}} doda k njemu), nastavite {{ui:Klikanje objektov}} na {{ui:Zamenja izbor}} v [nastavitvah CadCraft](topic:settings).
:::

## Česa ni mogoče izbrati

- Objekti na sloju, ki je **izklopljen**, **zamrznjen** ali **zaklenjen**. Zaklenjeni objekti ostanejo vidni in se nanje lahko lovite, vendar jih ne morete izbrati ali spremeniti.
- Na zavihku lista model, prikazan znotraj pogleda. Izberete lastne objekte lista (glavo risbe, opombe, okvirje pogledov). Za urejanje modela pojdite na zavihek {{ui:Model}}.

## Hitro brisanje

Izberite objekte in pritisnite {{key:Delete}} (ali {{key:Backspace}}, kadar ukazna vrstica nima kazalca). Na tipkovnici Mac deluje tipka, označena delete, ko kliknete v risbo; medtem ko ima kazalec ukazna vrstica, pritisnite fn in delete skupaj. To požene {{cmd:ERASE}} na izboru. Če se nič ne zgodi, ste nekaj vnesli v ukazno vrstico: pritisnite {{key:Esc}} ali vnesite `E` in pritisnite {{key:Enter}}.

## Pogoste napake

- **Okno je zajelo premalo.** Vlekli ste od leve proti desni, kar zajame samo tisto, kar je popolnoma znotraj. Za križanje vlecite od desne proti levi.
- **Klik na prazen prostor je začel okvir.** En klik na prazen prostor začne okno; drugi klik ga dokonča. Pritisnite {{key:Esc}} ali desni klik, da ga opustite.
- **Klik na prazen prostor je spustil izbor.** Tako je, razen če držite {{key:Shift}}. Če želite pri takem kliku obdržati izbor in ga počistiti samo z {{key:Esc}}, nastavite {{ui:Klik na prazno mesto}} na {{ui:Ohrani izbor}} v [nastavitvah CadCraft](topic:settings#clicking-an-empty-spot).
- **Ukaz je uporabil objekte, ki jih niste mislili.** Nekaj je bilo še izbrano, ko ste ukaz začeli. Pred ukazom pritisnite {{key:Esc}}, da začnete z ničemer izbranim.
- **Po ukazu ni nič izbrano.** To je namenoma: dokončan ukaz izbor počisti.
