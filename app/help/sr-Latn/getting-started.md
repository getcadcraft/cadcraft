---
title: Početak rada sa CadCraft-om
summary: Šta radi aplikacija za crtanje CadCraft, gde radi i vaš prvi crtež, od praznog ekrana do sačuvane datoteke.
keywords: početak, prvi crtež, novo, otvori, sačuvaj, sačuvaj kao, počni, vodič, uvod, brzi početak
from: 1a56c575
---

CadCraft je aplikacija za 2D crtanje. Crtate i uređujete linije, lukove, polilinije, tekst, kote i blokove, postavljate listove sa tablicama natpisa i prozorima pogleda, i štampate ih u PDF. Otvara DWG i DXF crteže i čuva ih kao DWG ili DXF.

Radi u vašem internet pregledaču. Ne treba ništa instalirati: sajt vam daje adresu, a cela aplikacija se učitava u stranicu. Vaši crteži se otvaraju sa vašeg računara i čuvaju nazad na njega. **Ništa se ne šalje na server.**

Ako ste već crtali, pročitajte [Dolazak iz drugog softvera za crtanje](topic:coming-from) nakon ove stranice. Većina navika se prenosi, a nekoliko onih koje se ne prenose navedeno je tamo.

## Radije biste vođeni?

Ukucajte `TOUR` (ili kliknite {{ui:Pređi obilazak}} na početnoj kartici, ili {{ui:Podešavanja}} › {{ui:CadCraft}} › {{ui:Ponovo pređi obilazak}}). Šest kratkih koraka u okviru preko crteža: nacrtajte liniju i krug, pomerite je, obrežite, nešto izbrišite i kotirajte. Svaki korak se završava kada ga uradite, a možete preskočiti korak ili ceo obilazak. Počinje sam samo prvi put. [Brzi pregled](topic:cheat-sheet) ima 40 komandi koje ćete najčešće koristiti, a [mapa komandi](topic:command-map) svaku komandu.

## Šta vam treba

- Nedavni Chrome, Edge, Firefox ili Safari na računaru sa Mac, Windows ili Linux operativnim sistemom. Pogledajte [Pregledači i platforme](common:browsers).
- Miš sa točkićem je najudobniji. Tačpad radi; pogledajte [Miš, tačpad i dodir](topic:mouse-trackpad-touch).
- Tastatura. CadCraft se upravlja otkucanim komandama, kao i većina programa za crtanje.

## Ideja u jednom pasusu

Ukucate komandu (ili kliknete njeno dugme), a komandna linija na dnu postavlja pitanja jedno po jedno: „Zadaj prvu tačku“, „Zadaj sledeću tačku“. Odgovarate na svako pitanje klikom u crtežu ili unosom vrednosti, pa pritiskom na {{key:Enter}}. {{key:Esc}} otkazuje. To je ceo model interakcije; sve ostalo su detalji.

## Vaš prvi crtež

Nacrtaćete pravougaonik 4000 sa 3000 od linija, staviti krug u sredinu i sačuvati datoteku.

1. Otvorite CadCraft. Komandna linija na dnu prikazuje `Command:`, a površina za crtanje prikazuje kratku karticu „Početak crtanja“.
2. Ukucajte `L` i pritisnite {{key:Enter}}. Ne morate prvo kliknuti na komandnu liniju: kucanje bilo gde ide tamo.
3. Pitanje se menja u `Specify first point:`. Ukucajte `0,0` i pritisnite {{key:Enter}}.
4. Ukucajte `@4000,0` i pritisnite {{key:Enter}}. Pojavljuje se linija koja ide udesno. `@` znači „od poslednje tačke“.
5. Ukucajte `@0,3000` i pritisnite {{key:Enter}}.
6. Ukucajte `@-4000,0` i pritisnite {{key:Enter}}.
7. Ukucajte `C` i pritisnite {{key:Enter}}. `C` je opcija Zatvori: poslednja linija se vraća na prvu tačku i komanda se završava.
8. Kliknite {{ui:Granice}} u grupi Pogled na traci sa alatkama. Pravougaonik ispunjava ekran.

Sada biste trebalo da vidite četiri linije koje čine pravougaonik, a istorija iznad komandne linije navodi šta ste ukucali.

9. Ukucajte `C` i pritisnite {{key:Enter}} da pokrenete komandu za krug.
10. Ukucajte `2000,1500` i pritisnite {{key:Enter}} za centar.
11. Ukucajte `500` i pritisnite {{key:Enter}} za poluprečnik.

Pojavljuje se krug u sredini pravougaonika.

12. Pritisnite {{key:Mod+S}}, ili kliknite {{ui:Sačuvaj}} u grupi Datoteka.

Pregledač preuzima `Drawing1.dwg` u uobičajenu fasciklu za preuzimanja, a istorija kaže da je sačuvana kopija kao DWG. Ta datoteka se ponovo otvara u CadCraft-u i u većini drugih CAD programa. (Ako ste ranije u ovom pregledaču izabrali DXF u {{ui:Sačuvaj kao}}, novi crtež se umesto toga čuva kao `Drawing1.dxf`.)

:::tip
Pritisnite {{key:Enter}} na praznoj komandnoj liniji da ponovite poslednju komandu. Pritisnite {{key:Space}} umesto {{key:Enter}} ako vam tako odgovara: van teksta radi isto.
:::

## Otvaranje postojećeg crteža

1. Pritisnite {{key:Mod+O}}, ili kliknite {{ui:Otvori}}.
2. Izaberite datoteku `.dwg` ili `.dxf` u birač datoteka.

Možete i prevući DWG ili DXF datoteku sa {{pick:mac=Finder|windows=File Explorer|linux=vašim upravljačem datotekama}} i ispustiti je na površinu za crtanje. Datoteka se čita u stranici; nikada ne napušta vaš računar.

Pogledajte [Datoteke: šta se otvara, šta se čuva](topic:files) za ono što se zadržava i šta se pretvara.

## Čuvanje: šta očekivati

Čuvanje u pregledaču radi drugačije nego u desktop programu:

- {{ui:Sačuvaj}} uvek **preuzima novu kopiju**. Ne prepisuje datoteku koju ste otvorili. Ako datoteka istog naziva već postoji u vašoj fascikli za preuzimanja, pregledač obično dodaje broj, na primer `Drawing1 (1).dwg`.
- {{ui:Sačuvaj}} koristi format crteža: DWG ako ste otvorili DWG, DXF ako ste otvorili DXF. Za izbor pritisnite {{key:Mod+Shift+S}} ili kliknite {{ui:Sačuvaj kao}}, pa izaberite {{ui:DWG}} (i njegovu verziju), {{ui:DXF R12}} ili {{ui:DXF 2000}}. Pogledajte [Čuvanje](topic:files#saving).
- Datoteka koju ste otvorili se nikada ne menja.
- Otvaranje druge datoteke, ili {{ui:Novo}}, stavlja je na sopstvenu karticu iznad površine za crtanje, pa ništa što imate otvoreno ne bude zatvoreno. Ako zatvorite karticu crteža ili napustite stranicu sa nesačuvanim izmenama, CadCraft prvo pita: {{ui:Prvo sačuvaj kopiju}}, odbaci ili {{ui:Otkaži}}. Zatvaranje kartice pregledača prikazuje pitanje pregledača „Napusti sajt?“.

Čuvanje u oblaku još nije dostupno. Gde idu vaše datoteke i zašto ostaju privatne objašnjeno je u [Vaše datoteke i privatnost](common:your-files).

## Gde dalje

Pritisnite {{key:F1}} ili kliknite {{ui:Pomoć}} u traci na vrhu da u bilo kom trenutku otvorite ovu pomoć pored crteža. Radi bez veze.

- [Ekran CadCraft-a](topic:workspace) imenuje svaku traku i panel.
- [Crtanje sa koordinatama](topic:draw-with-coordinates) je najbolji prvi vodič.
- [Tastatura i miš](topic:keyboard) navodi svaki taster.
- Ukucajte `HELP` u komandnoj liniji za spisak svih komandi, ili pročitajte [Referenca komandi](topic:commands).
