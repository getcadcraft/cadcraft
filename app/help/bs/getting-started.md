---
title: Početak rada s CadCraftom
summary: Šta radi aplikacija za crtanje CadCraft, gdje radi, i vaš prvi crtež od praznog ekrana do spašene datoteke.
keywords: početak, prvi crtež, nova, otvori, spasi, spasi kao, počni, vodič, uvod, brzi početak
from: 1a56c575
---

CadCraft je aplikacija za 2D crtanje. Crtate i uređujete linije, lukove, polilinije, tekst, kote i blokove, pravite listove sa natpisnim blokovima i prozorima pregleda, i štampate ih u PDF. Otvara DWG i DXF crteže, a spašava ih kao DWG ili DXF.

Radi u vašem web pregledniku. Ništa se ne instalira: sajt vam daje adresu, a cijela aplikacija se učitava u stranicu. Vaši crteži se otvaraju s vašeg računara i spašavaju nazad na njega. **Ništa se ne šalje.**

Ako ste ranije crtali, pročitajte [Dolazak iz drugog softvera za crtanje](topic:coming-from) nakon ove stranice. Većina navika se prenosi, a nekoliko koje se ne prenose navedeno je tamo.

## Radije biste da vas vodimo?

Upišite `TOUR` (ili kliknite {{ui:Pogledaj obilazak}} na početnoj kartici, ili {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Ponovi obilazak}}). Šest kratkih koraka u okviru preko crteža: nacrtajte liniju i krug, pomjerite je, skratite, obrišite nešto i kotirajte. Svaki korak se završava kad ga uradite, a možete preskočiti korak ili cijeli obilazak. Počinje sam samo prvi put. [Brzi pregled](topic:cheat-sheet) ima 40 komandi koje ćete najviše koristiti, a [karta komandi](topic:command-map) svaku komandu.

## Šta vam treba

- Noviji Chrome, Edge, Firefox ili Safari na računaru sa Mac, Windows ili Linux operativnim sistemom. Vidi [Preglednici i platforme](common:browsers).
- Miš sa točkićem je najudobniji. Touchpad radi; vidi [Miš, touchpad i dodir](topic:mouse-trackpad-touch).
- Tastatura. CadCraft se upravlja upisanim komandama, kao većina programa za crtanje.

## Ideja u jednom pasusu

Upišete komandu (ili kliknete njeno dugme), a komandna linija na dnu postavlja pitanja jedno po jedno: „Zadaj prvu tačku“, „Zadaj sljedeću tačku“. Odgovarate klikom u crtežu ili upisivanjem vrijednosti, pa pritiskom na {{key:Enter}}. {{key:Esc}} otkazuje. To je cijeli model interakcije; sve ostalo su detalji.

## Vaš prvi crtež

Nacrtaćete pravougaonik 4000 sa 3000 od linija, staviti krug u sredinu i spasiti datoteku.

1. Otvorite CadCraft. Komandna linija na dnu pokazuje `Command:`, a područje crtanja prikazuje kratku karticu „Počni crtanje“.
2. Upišite `L` i pritisnite {{key:Enter}}. Ne morate prvo kliknuti na komandnu liniju: upisivanje bilo gdje ide tamo.
3. Pitanje se mijenja u `Specify first point:`. Upišite `0,0` i pritisnite {{key:Enter}}.
4. Upišite `@4000,0` i pritisnite {{key:Enter}}. Pojavljuje se linija koja ide udesno. `@` znači „od posljednje tačke“.
5. Upišite `@0,3000` i pritisnite {{key:Enter}}.
6. Upišite `@-4000,0` i pritisnite {{key:Enter}}.
7. Upišite `C` i pritisnite {{key:Enter}}. `C` je opcija [Zatvori (C)]: posljednja linija se vraća na prvu tačku i komanda se završava.
8. Kliknite {{ui:Granice}} u grupi {{ui:Pogled}} na traci sa alatima. Pravougaonik ispunjava ekran.

Sada vidite četiri linije koje čine pravougaonik, a istorija iznad komandne linije navodi šta ste upisali.

9. Upišite `C` i pritisnite {{key:Enter}} da pokrenete komandu kruga.
10. Upišite `2000,1500` i pritisnite {{key:Enter}} za centar.
11. Upišite `500` i pritisnite {{key:Enter}} za poluprečnik.

Pojavljuje se krug u sredini pravougaonika.

12. Pritisnite {{key:Mod+S}}, ili kliknite {{ui:Spasi}} u grupi {{ui:Datoteka}}.

Preglednik preuzima `Drawing1.dwg` u vašu uobičajenu fasciklu za preuzimanja, a istorija kaže da je spašena kopija kao DWG. Ta datoteka se ponovo otvara u CadCraft-u i u većini drugih CAD programa. (Ako ste ranije u ovom pregledniku izabrali DXF u {{ui:Spasi kao}}, novi crtež se spašava kao `Drawing1.dxf`.)

:::tip
Pritisnite {{key:Enter}} na praznoj komandnoj liniji da ponovite posljednju komandu. Pritisnite {{key:Space}} umjesto {{key:Enter}} ako želite: van teksta radi isto.
:::

## Otvaranje postojećeg crteža

1. Pritisnite {{key:Mod+O}}, ili kliknite {{ui:Otvori}}.
2. Izaberite `.dwg` ili `.dxf` datoteku u biraču datoteka.

Možete i prevući DWG ili DXF datoteku iz {{pick:mac=Finder|windows=File Explorer|linux=upravitelja datotekama}} i pustiti je na područje crtanja. Datoteka se čita u stranici; nikad ne napušta vaš računar.

Vidi [Datoteke: šta se otvara, šta se spašava](topic:files) za ono što se zadržava i pretvara.

## Spašavanje: šta očekivati

Spašavanje u pregledniku radi drugačije nego u desktop programu:

- {{ui:Spasi}} uvijek **preuzima novu kopiju**. Ne prepisuje datoteku koju ste otvorili. Ako datoteka istog imena već postoji u vašoj fascikli za preuzimanja, preglednik obično doda broj, na primjer `Drawing1 (1).dwg`.
- {{ui:Spasi}} koristi format crteža: DWG ako ste otvorili DWG, DXF ako ste otvorili DXF. Da birate, pritisnite {{key:Mod+Shift+S}} ili kliknite {{ui:Spasi kao}}, pa izaberite {{ui:DWG}} (i njegovu verziju), {{ui:DXF R12}} ili {{ui:DXF 2000}}. Vidi [Spašavanje](topic:files#saving).
- Datoteka koju ste otvorili nikad se ne mijenja.
- Otvaranje druge datoteke, ili {{ui:Nova}}, stavlja je u svoju karticu iznad crteža, pa ništa što imate otvoreno nije zatvoreno. Ako zatvorite karticu crteža ili napustite stranicu sa nesačuvanim izmjenama, CadCraft prvo pita: {{ui:Prvo snimi kopiju}}, odbaci ili {{ui:Otkaži}}. Zatvaranje kartice preglednika prikazuje pitanje preglednika „Napustiti sajt?“.

Spašavanje u oblaku još nije dostupno. Gdje idu vaše datoteke i zašto ostaju privatne objašnjeno je u [Vaše datoteke i privatnost](common:your-files).

## Dalje

Pritisnite {{key:F1}} ili kliknite {{ui:Pomoć}} u traci na vrhu da otvorite ovu pomoć pored crteža u bilo kom trenutku. Radi bez veze.

- [Ekran CadCraft-a](topic:workspace) imenuje svaku traku i panel.
- [Crtanje pomoću koordinata](topic:draw-with-coordinates) je najbolji prvi vodič.
- [Tastatura i miš](topic:keyboard) navodi svaku tipku.
- Upišite `HELP` u komandnoj liniji za spisak svake komande, ili pročitajte [Referencu komandi](topic:commands).
