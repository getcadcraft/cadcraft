---
title: Prvi koraci s CadCraftom
summary: Što aplikacija za crtanje CadCraft radi, gdje se pokreće i vaš prvi crtež od praznog zaslona do spremljene datoteke.
keywords: početak, prvi crtež, novo, otvori, spremi, spremi kao, početi, vodič, uvod, brzi početak
from: 1a56c575
---

CadCraft je aplikacija za 2D crtanje. Crtate i uređujete linije, lukove, polilinije, tekst, kote i blokove, postavljate listove sa zaglavljima i viewportima te ih plotate u PDF. Otvara DWG i DXF crteže i sprema ih kao DWG ili DXF.

Pokreće se u vašem web-pregledniku. Ništa se ne instalira: web-mjesto vam daje adresu, a cijela se aplikacija učitava na stranicu. Vaši se crteži otvaraju s vašeg računala i spremaju natrag na njega. **Ništa se ne učitava.**

Ako ste već crtali, pročitajte [Dolazite iz drugog softvera za crtanje](topic:coming-from) nakon ove stranice. Većina navika se prenosi, a rijetke koje se ne prenose ondje su navedene.

## Želite li da vas netko vodi?

Upišite `TOUR` (ili kliknite {{ui:Pokreni vodič}} na početnoj kartici, ili {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Ponovno pokreni vodič}}). Šest kratkih koraka u okviru preko crteža: nacrtajte liniju i kružnicu, pomaknite je, skratite je, nešto izbrišite i kotirajte. Svaki korak završava kada ga izvedete, a možete preskočiti korak ili cijeli vodič. Sam se pokreće samo prvi put. [Podsjetnik](topic:cheat-sheet) ima 40 naredbi koje ćete najčešće koristiti, a [karta naredbi](topic:command-map) sve naredbe koje postoje.

## Što vam treba

- Aktualni Chrome, Edge, Firefox ili Safari na Mac, Windows ili Linux računalu. Vidi [Preglednici i platforme](common:browsers).
- Miš s kotačićem je najugodniji. Trackpad radi; vidi [Miš, trackpad i dodir](topic:mouse-trackpad-touch).
- Tipkovnica. CadCraftom se upravlja upisanim naredbama, kao i većinom programa za crtanje.

## Ideja u jednom odlomku

Upišete naredbu (ili kliknete njezin gumb), a naredbeni redak pri dnu postavlja pitanja jedno po jedno: „Odredite prvu točku“, „Odredite sljedeću točku“. Na svako odgovarate klikom u crtežu ili upisom vrijednosti, a zatim pritiskom na {{key:Enter}}. {{key:Esc}} odustaje. To je cijeli model interakcije; sve ostalo su pojedinosti.

## Vaš prvi crtež

Nacrtat ćete pravokutnik 4000 puta 3000 od linija, staviti kružnicu u sredinu i spremiti datoteku.

1. Otvorite CadCraft. Naredbeni redak pri dnu prikazuje `Command:`, a područje crtanja kratku karticu „Počnite crtati“.
2. Upišite `L` i pritisnite {{key:Enter}}. Ne trebate prvo kliknuti naredbeni redak: ono što upisujete bilo gdje završava ondje.
3. Upit se mijenja u `Specify first point:`. Upišite `0,0` i pritisnite {{key:Enter}}.
4. Upišite `@4000,0` i pritisnite {{key:Enter}}. Pojavljuje se linija koja ide udesno. `@` znači „od posljednje točke“.
5. Upišite `@0,3000` i pritisnite {{key:Enter}}.
6. Upišite `@-4000,0` i pritisnite {{key:Enter}}.
7. Upišite `C` i pritisnite {{key:Enter}}. `C` je opcija Close: posljednja linija vraća se na prvu točku i naredba završava.
8. Kliknite {{ui:Opseg}} u skupini Pogled na alatnoj traci. Pravokutnik ispunjava zaslon.

Sada biste trebali vidjeti četiri linije koje čine pravokutnik, a povijest iznad naredbenog retka navodi što ste upisali.

9. Upišite `C` i pritisnite {{key:Enter}} da pokrenete naredbu za kružnicu.
10. Upišite `2000,1500` i pritisnite {{key:Enter}} za središte.
11. Upišite `500` i pritisnite {{key:Enter}} za radijus.

Kružnica se pojavljuje u sredini pravokutnika.

12. Pritisnite {{key:Mod+S}} ili kliknite {{ui:Spremi}} u skupini Datoteka.

Preglednik preuzima `Drawing1.dwg` u vašu uobičajenu mapu preuzimanja, a povijest kaže da je kopija spremljena kao DWG. Ta se datoteka ponovno otvara u CadCraftu i u većini drugih CAD programa. (Ako ste ranije u ovom pregledniku u {{ui:Spremi kao}} odabrali DXF, novi se crtež umjesto toga sprema kao `Drawing1.dxf`.)

:::tip
Pritisnite {{key:Enter}} na praznom naredbenom retku da ponovite posljednju naredbu. Pritisnite {{key:Space}} umjesto {{key:Enter}} ako vam je draže: izvan teksta radi isto.
:::

## Otvaranje postojećeg crteža

1. Pritisnite {{key:Mod+O}} ili kliknite {{ui:Otvori}}.
2. Odaberite `.dwg` ili `.dxf` datoteku u biraču datoteka.

DWG ili DXF datoteku možete povući i iz {{pick:mac=Findera|windows=Explorera|linux=vašeg upravitelja datoteka}} te je ispustiti na područje crtanja. Datoteka se čita na stranici; nikada ne napušta vaše računalo.

Vidi [Datoteke: što se otvara, a što sprema](topic:files) za ono što se zadržava i što se pretvara.

## Spremanje: što očekivati

Spremanje u pregledniku radi drukčije nego u stolnom programu:

- {{ui:Spremi}} uvijek **preuzima novu kopiju**. Ne piše preko datoteke koju ste otvorili. Ako datoteka istog naziva već postoji u mapi preuzimanja, preglednik obično dodaje broj, primjerice `Drawing1 (1).dwg`.
- {{ui:Spremi}} koristi format crteža: DWG ako ste otvorili DWG, DXF ako ste otvorili DXF. Za izbor pritisnite {{key:Mod+Shift+S}} ili kliknite {{ui:Spremi kao}}, a zatim odaberite {{ui:DWG}} (i njegovu verziju), {{ui:DXF R12}} ili {{ui:DXF 2000}}. Vidi [Spremanje](topic:files#saving).
- Datoteka koju ste otvorili nikada se ne mijenja.
- Otvaranje druge datoteke ili {{ui:Novo}} stavlja je u vlastitu karticu preko crteža, pa se ništa što imate otvoreno ne zatvara. Ako zatvorite karticu crteža ili napustite stranicu s nespremljenim promjenama, CadCraft prvo pita: {{ui:Prvo spremi kopiju}}, odbaci ili {{ui:Odustani}}. Zatvaranje kartice preglednika umjesto toga prikazuje pitanje samog preglednika „Napustiti web-mjesto?“.

Spremanje u oblaku još nije dostupno. Kamo idu vaše datoteke i zašto ostaju privatne objašnjeno je u [Vaše datoteke i privatnost](common:your-files).

## Kamo dalje

Pritisnite {{key:F1}} ili kliknite {{ui:Pomoć}} na traci pri vrhu da ovu pomoć u svakom trenutku otvorite pored crteža. Radi bez veze.

- [CadCraft zaslon](topic:workspace) imenuje svaku traku i ploču.
- [Crtanje koordinatama](topic:draw-with-coordinates) je najbolji prvi prolaz.
- [Tipkovnica i miš](topic:keyboard) navodi svaku tipku.
- Upišite `HELP` u naredbeni redak za popis svih naredbi ili pročitajte [Referencu naredbi](topic:commands).
