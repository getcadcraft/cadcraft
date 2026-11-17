---
title: Dodavanje teksta i oznaka
summary: Postavite oznake prostorija jednoretčanim tekstom, pišite prelomljene bilješke tekstom odlomka upisanim na mjestu i naknadno uređujte tekst.
keywords: tekst, dtext, mtext, mleader, multileader, vodilica, revcloud, revizijski oblak, oblak, pronađi, zamijeni, pronađi i zamijeni, odlomak, prelamanje, razmak redaka, oznaka, bilješka, anotacija, visina, poravnanje, textmask, maska pozadine, maska, wipeout, prekrivanje, rotacija, uređivanje teksta, ddedit, textedit, font
from: 4b76be99
---

## Što ćete izraditi

Dvije oznake prostorija, središnje u njihovim prostorijama, bilješku koja se prelama prema svojoj širini, zatim ispravak jedne od oznaka.

## Visina teksta i mjerilo crteža

Visina teksta izražena je u jedinicama crteža. U crtežu u milimetrima koji će se ispisati u mjerilu 1:50, tekst visine 2.5 mm na papiru mora u modelu biti visok 2.5 × 50 = 125 jedinica. Na kartici lista crtate u jedinicama papira, pa je 2.5 tamo 2.5 mm na papiru.

## Postavljanje središnje oznake

1. Upišite `DT` i pritisnite {{key:Enter}} (ili kliknite {{ui:Tekst}} na alatnoj traci). Upit glasi `Specify start point of text [Justify]:`.
2. Upišite `J` i pritisnite {{key:Enter}}.
3. Na upitu `Enter an option [Left/Center/Right/Middle/TL/MC] <L>:` upišite `MC` i pritisnite {{key:Enter}}.
4. Na upitu `Specify insertion point of text` kliknite središte prostorije.
5. Na upitu `Specify height` upišite `250` i pritisnite {{key:Enter}}.
6. Na upitu `Specify rotation angle of text <0>` pritisnite {{key:Enter}}.
7. Na upitu `Enter text` upišite `KITCHEN` i pritisnite {{key:Enter}}.

Oznaka se pojavljuje, središnje u točki na koju ste kliknuli.

8. Pritisnite {{key:Enter}} na praznom upitu `Enter text` da završite naredbu.

## Pisanje bilješke koja se prelama

Tekst odlomka ({{cmd:MTEXT}}) prelama se prema širini i upisuje se izravno na crtež.

1. Upišite `T` i pritisnite {{key:Enter}} ili kliknite {{ui:Odlomak}} na alatnoj traci.
2. Na upitu `Specify first corner` kliknite mjesto gornjeg lijevog kuta bilješke.
3. Ako želite prije promijeniti visinu, upišite `H`, pritisnite {{key:Enter}}, upišite `250` i pritisnite {{key:Enter}}.
4. Na upitu `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]` kliknite desno od prvog kuta. Udaljenost u širinu je širina prema kojoj se tekst prelama; koliko dolje kliknete, to ga ne ograničava.
5. Nad crtežom se otvara okvir s kursorom u njemu. Upišite `ALL DIMENSIONS ARE IN MILLIMETERS UNLESS NOTED`. Riječi se prelamaju po širini dok tipkate.
6. Pritisnite {{key:Enter}} za novi odlomak i upišite `CHECK ON SITE`.
7. Pritisnite {{key:Mod+Enter}}, kliknite {{ui:U redu}} ili kliknite bilo gdje izvan okvira. Bilješka je jedan objekt.

Traka iznad okvira tijekom tipkanja mijenja {{ui:Visina}}, {{ui:Razmak redaka}} (1 je normalno, 1.5 je za polovicu više), {{ui:Širina}} (0 = bez prelamanja) i {{ui:Poravnanje}}. {{key:Esc}} ili {{ui:Odustani}} zatvara je bez dodavanja ičega.

Opcije na drugom kutu: `H` visina, `J` poravnanje (`TL` gore lijevo … `BR` dolje desno: kut ili sredina okvira koji ostaje na mjestu), `L` razmak redaka, `R` rotacija, `W` upisana širina umjesto drugog kuta.

:::note
Dok je okvir otvoren, {{key:Space}} upisuje razmak, a {{key:Enter}} počinje novi odlomak. Spremljeni DWG čuva tekst odlomka kao MTEXT; DXF R12 nema tekst odlomka, pa se svaki redak sprema kao zaseban tekst.
:::

### Umjesto toga više pojedinačnih redaka

{{cmd:TEXT}} (`DT`) traži jedan redak po jedan: svaki {{key:Enter}} počinje sljedeći redak, 1.667 puta niže od visine teksta, a svaki redak je zaseban objekt. Za završetak pritisnite {{key:Enter}} na praznom retku.

## Opcije poravnanja

| Opcija | Točka na koju kliknete je |
|---|---|
| Lijevo (zadano) | Lijevi kraj osnovne linije |
| Središte | Sredina osnovne linije |
| Desno | Desni kraj osnovne linije |
| Sredina, MC | Sredina teksta, i vodoravno i okomito |
| TL | Gornji lijevi kut |

## Uređivanje teksta

1. Dvaput kliknite tekstualni objekt. Otvara se u istom okviru kao novi tekst odlomka, s kursorom na kraju.
2. Promijenite riječi.
3. Pritisnite {{key:Mod+Enter}} ili kliknite izvan okvira. Tekst na crtežu se mijenja; {{key:Esc}} ostavlja ga kakav je bio.

{{cmd:TEXTEDIT}} (`ED`) radi isto: birajte jedan tekst za drugim i pritisnite {{key:Enter}} kad završite.

Umjesto toga odaberite tekst i promijenite ga na desnoj ploči: {{ui:Tekst}}, {{ui:Visina}}, {{ui:Širina prelamanja}} (0 = bez prelamanja), {{ui:Razmak redaka}}, {{ui:Rotacija}}, položaj X i Y te {{ui:Poravnanje}}. Popis {{ui:Poravnanje}} nudi i Dolje lijevo, koje tekst iz drugih programa ponekad koristi.

## Oblikovanje unutar teksta odlomka iz drugih programa

Tekst odlomka u DWG ili DXF može sadržavati kodove: boje po riječi, podebljano i kurziv, podcrtavanje, nadcrtavanje i precrtavanje, složene razlomke poput 1/2 te drugačiju visinu za riječ. CadCraft zadržava te kodove, crta ih (na zaslonu i u ispisanom PDF-u) i sprema ih natrag nepromijenjene.

Kad uređujete takav tekst (dvostrukim klikom, {{cmd:TEXTEDIT}}, poljem Tekst na desnoj ploči ili {{cmd:FIND}} sa zamjenom), uređujete njegove obične riječi. Riječ koju upišete ide u dio teksta uz nju i preuzima njezinu boju i stil; ostali kodovi ostaju na svojim mjestima. Ako ponovno upišete brojeve složenog razlomka, taj razlomak postaje običan tekst. Postavljanje cijelog teksta iz polja Tekst zadržava kodove samo tamo gdje može prepoznati koje su riječi ostale.

Nazivi fontova (`\F`) zadržavaju se i spremaju, ali se sve crta jednim fontom u stilu Helvetice. Za upisivanje kodova još nema alatne trake.

## Ukazivanje na nešto: višestruke vodilice

{{ui:Vodilica}} u grupi {{ui:Bilješke}} ({{cmd:MLEADER}}, `MLD`) crta strelicu, vodilicu, kratki nastavak i bilješku, kao jedan objekt.

1. Kliknite {{ui:Vodilica}}. Na upitu `Specify leader arrowhead location` kliknite ono na što se bilješka odnosi.
2. Na upitu `Specify leader landing location` kliknite gdje ide bilješka. Nastavak se okreće prema strani na koju ste kliknuli.
3. Upišite bilješku u okvir koji se otvori i pritisnite {{key:Mod+Enter}}.

`A` i `L` na prvom pitanju postavljaju veličinu strelice i duljinu nastavka; visina teksta dolazi iz {{ui:Visina teksta}} za nove kote, pomnožena s {{ui:Ukupno mjerilo}}. Dvaput kliknite višestruku vodilicu da promijenite njezine riječi. Ručke pomiču strelicu i nastavak; bilješka prati nastavak. U {{ui:Svojstva}}: {{ui:Tekst}}, {{ui:Visina}}, {{ui:Širina prelamanja}}, {{ui:Veličina strelice}} i {{ui:Udaljenost nastavka}}.

:::note
Višestruke vodilice spremaju se kao prave višestruke vodilice u DWG. DXF u R12 i 2000 nema višestruke vodilice, pa se tamo spremaju kao linije, strelica i tekst koje crtaju.
:::

## Označavanje promjena revizijskim oblakom

{{ui:Bilješke}} › {{ui:Više}} › {{ui:Revizijski oblak}} ({{cmd:REVCLOUD}}, `RC`) crta oblak lukova oko onoga što se promijenilo. Povijest prikazuje duljinu luka i vrstu koju će koristiti.

- **Pravokutni** (prvi put): kliknite dva kuta.
- `P` **Poligonalni**: kliknite kuteve, {{key:Enter}} zatvara oblak.
- `F` **Slobodni oblik**: kliknite gdje počinje i pomičite pokazivač oko područja bez klikanja; dodaje se luk svake duljine luka. Kliknite ili pritisnite {{key:Enter}} za zatvaranje.
- `O` **Objekt**: odaberite zatvorenu polilinija, kružnicu ili elipsu (ili liniju, luk ili otvorenu polilinija); postaje oblak. `Reverse direction?` `Y` okreće lukove prema unutra.
- `A` **Duljina luka**: duljina svakog luka. Odaberite onu koja odgovara mjerilu ispisa.

Oblak je zatvorena polilinija lukova, pa se sprema u svim formatima.

## Pronalaženje i zamjena riječi

{{ui:Uređivanje}} › {{ui:Više}} › {{ui:Pronađi i zamijeni}} ({{cmd:FIND}}) pretražuje tekst, vrijednosti atributa blokova i tekst kota na otvorenoj kartici (ili samo u odabranim objektima).

1. Upišite riječi u {{ui:Pronađi}}. Popis prikazuje svako mjesto gdje se nalaze i broj.
2. Odaberite {{ui:Razlikuj velika i mala slova}}, {{ui:Samo cijele riječi}} ili {{ui:Koristi zamjenske znakove (* i ?)}} ako ih trebate, i odznačite ono gdje ne želite tražiti.
3. Kliknite {{ui:Odaberi pronađeno}} da odaberete te objekte ili upišite nove riječi u {{ui:Zamijeni s}} (popis prikazuje u što se svaka pretvara) i kliknite {{ui:Zamijeni sve}}. Jedan {{key:Mod+Z}} poništava sve zamjene.

Izmjerena vrijednost kote nije tekst, pa se nikad ne zamjenjuje: u `<> TYP.` može se zamijeniti samo `TYP.`.

## Skrivanje linija iza oznake

1. Odaberite tekstove, upišite {{cmd:TEXTMASK}} i pritisnite {{key:Enter}}.
2. `B` boji pozadinu crteža iza njih; `C` traži broj boje. `O` uklanja masku.
3. `Border offset factor`: {{key:Enter}} zadržava 1.5, pola visine teksta oko teksta.

Maska prekriva linije ispod teksta, na zaslonu i pri ispisu. DWG 2004 ili noviji i DXF 2000 je zadržavaju; format DWG 2000 i DXF R12 ne mogu, i spremanje to javlja.

## Font

Sav tekst crta se fontom u stilu Helvetice, na zaslonu i u PDF-ovima. Tekst iz otvorenih crteža zadržava riječi, visinu i položaj, ali ne i izvorni font (naziv fonta unutar teksta odlomka zadržava se u datoteci, vidi gore).

U ispisanim PDF-ovima tekst na bilo kojem europskom pismu, ćirilici ili grčkom ispisuje se kao sam sebe (PDF nosi slova koja su mu potrebna, a tekst i dalje možete odabrati i tražiti). Kineski, japanski i korejski tekst također se ispisuje kao sam sebe (ispis pri prvoj potrebi preuzima veći font). Tekst na arapskom, perzijskom, urdu i hebrejskom također se ispisuje kao sam sebe (vidi sljedeći odjeljak). Znakovi za koje nijedan font nema slovo ispisuju se kao „?“, a povijest kaže koliko ih je bilo.

## Tekst zdesna nalijevo: arapski, perzijski, urdu, hebrejski

Upisujte tekst kao i bilo gdje drugdje: {{cmd:TEXT}} i {{cmd:MTEXT}} crtaju svaki redak po redoslijedu čitanja. Redak čije je prvo slovo arapsko ili hebrejsko čita se zdesna nalijevo; brojevi i latinske riječi unutar njega zadržavaju svoj redoslijed slijeva nadesno, a slova arapskog pisma su povezana. Redak koji počinje latiničnim slovom ostaje slijeva nadesno, a riječi zdesna nalijevo su na svojim mjestima unutar njega. Svaki odlomak višeretčanog teksta ima svoj smjer, a prelomljeni odlomak ga zadržava u svakom retku.

Tekst se sprema onako kako ste ga upisali, pa ga DWG i DXF datoteke razmjenjuju s drugim programima nepromijenjenog. Točka umetanja i poravnanje ({{ui:Lijevo}}, {{ui:Središte}}, {{ui:Desno}}) znače istu stranu kao i za svaki tekst: bilješka zdesna nalijevo koja treba visjeti s desnog kraja treba {{ui:Desno}}.

Na zaslonu slova dolaze iz fontova vašeg sustava. U ispisanom PDF-u hebrejski koristi isti ugrađeni font kao latinički tekst; tekst arapskog pisma pri ispisu preuzima još jedan font (manji od 1 MB, jednom), a cijeli PDF se tada ispisuje tim fontom. Taj font nema vlastiti oblik za tri znaka urdua (heh goal, yeh barree i urdu točku): ispisuju se u obliku najbližeg arapskog slova. Crtež koji ima i tekst arapskog pisma i kineski, japanski ili korejski tekst ispisuje jedno od ta dva kao „?“, jer ispis nosi jedan font. Tekst u učitanom SHX fontu se slaže i povezuje kad font ima slova na njihovim Unicode mjestima; za stare fontove čija su slova već oblikovana koristite {{ui:Obrni (R)}} u {{cmd:SHXFONTS}} kao i prije.

## Česte pogreške

- **Tekst je premalen da bi se vidio.** Visina je u jedinicama crteža. U velikom crtežu upotrijebite veliku visinu (vidi gore) ili uvećajte prikaz.
- **Naredba je završila nakon jednog retka.** Pritisnuli ste {{key:Enter}} na praznom retku u {{cmd:TEXT}}. Pokrenite je ponovno ili upotrijebite tekst odlomka (`T`), gdje {{key:Enter}} počinje novi odlomak.
- **`T` je otvorio okvir umjesto da traži redak.** Kao u AutoCAD-u, `T` je tekst odlomka ({{cmd:MTEXT}}); jednoretčani tekst je `DT`.
- **Tekst se u AutoCAD-u prelama na drugom mjestu.** CadCraft prelama prema širinama fonta Helvetica; drugi font može stati jednu riječ više ili manje u redak.
- **Tekst u zrcalnoj kopiji.** Postavlja se zrcalno, ali ostaje čitljiv slijeva nadesno.
