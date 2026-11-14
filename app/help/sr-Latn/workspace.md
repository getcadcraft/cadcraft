---
title: Ekran CadCraft-a
summary: Obilazak svake trake, panela i kartice u aplikaciji za crtanje, po imenu koje ima na ekranu.
keywords: ekran, interfejs, traka sa alatkama, traka sa karticama, paneli, komandna linija, statusna traka, kartice, kartice listova, svojstva, panel slojeva, obilazak
from: b5a33388
---

Ekran ima sedam delova. Od vrha ka dnu: traka aplikacije, traka sa alatkama, površina za crtanje sa panelom na svakoj strani, kartice ispod crteža, komandna linija i statusna traka.

## Traka aplikacije

Tanka traka na samom vrhu pripada sajtu, a ne crtežu. Prikazuje CadCraft oznaku, naziv aplikacije, koju verziju pokrećete, vezu ka stranici aplikacije, dugme {{ui:Pomoć}} (ili {{key:F1}}), dugme {{ui:Sačuvaj za rad van mreže}}, dugme {{ui:Ceo ekran}} i dva dugmeta za teme, {{ui:Papir}} i {{ui:Model}}.

Dugme {{ui:Podešavanja}} (zupčanik) sadrži CadCraft-ova sopstvena podešavanja i ona koja dele sve aplikacije: pogledajte [Podešavanja CadCraft-a](topic:settings).

{{ui:Sačuvaj za rad van mreže}} čuva kopiju CadCraft-a, uključujući njegov DWG čitač, u ovom pregledaču da se otvara bez veze. Njegova oznaka pokazuje stanje: „Čuvanje N od M“, „Spremno za rad van mreže“, „Nije moguće sačuvati“ ili „Rad van mreže nije dostupan“. Pogledajte [Rad van mreže](common:offline).

:::note
Dugmad {{ui:Papir}} i {{ui:Model}} u traci aplikacije samo menjaju boje ekrana: {{ui:Papir}} je svetla tema, a {{ui:Model}} tamna. Nemaju veze sa karticom {{ui:Model}} ispod crteža, koja prebacuje između crteža i njegovih listova.
:::

{{ui:Ceo ekran}}, ili {{key:Ctrl+Shift+F}} (taster Control na svakom računaru, uključujući Mac), prolazi kroz tri režima ekrana: normalan, ceo ekran i ceo ekran sa sakrivenim trakama. Kada su trake sakrivene, pomerite pokazivač do gornje ivice ekrana da se vrate.

## Traka sa alatkama

Ispod trake aplikacije je traka sa alatkama. Svako dugme pokreće komandu, tačno kao da ste je ukucali, pa komandna linija postavlja ista pitanja na oba načina. Zadržite pokazivač na dugmetu da vidite alias komande. Grupe su:

| Grupa | Dugmad |
|---|---|
| Datoteka | {{ui:Novo}}, {{ui:Otvori}}, {{ui:Sačuvaj}}, {{ui:Sačuvaj kao}}, {{ui:Štampaj}} |
| Crtanje | {{ui:Linija}}, {{ui:Polilinija}}, {{ui:Krug}}, {{ui:Luk}}, {{ui:Pravougaonik}}, {{ui:Poligon}}, {{ui:Elipsa}}, {{ui:Tekst}}, {{ui:Pasus}}, {{ui:Šrafura}}, i {{ui:Više}}: {{ui:Tačka}}, {{ui:Konstrukciona linija}} i {{ui:Zraka}} (pogledajte [Konstrukcione linije i zrake](topic:construction-lines)) |
| Uređivanje (Modify) | {{ui:Premesti}}, {{ui:Kopiraj}}, {{ui:Rotiraj}}, {{ui:Razmera}}, {{ui:Ogledalo}}, {{ui:Istegni}}, {{ui:Ofset}}, {{ui:Obreži}}, {{ui:Produži}}, {{ui:Zaobljenje}}, {{ui:Obaranje ivice}}, {{ui:Rastavi}}, {{ui:Izbriši}}, i {{ui:Više}}: {{ui:Niz}}, {{ui:Spoji}}, {{ui:Usklađivanje svojstava}}, {{ui:Prekini}} i {{ui:Produži}} |
| Anotacije | {{ui:Linearna}}, {{ui:Poravnata}}, {{ui:Ugao}}, {{ui:Poluprečnik}}, {{ui:Prečnik}} (kote), {{ui:Pokazna linija}} (višestruka oznaka), i {{ui:Više}}: {{ui:Nastavi kotu}}, {{ui:Kota od osnove}} i {{ui:Oblak revizije}} |
| Parametarski | {{ui:Auto}}, {{ui:Ograniči}}, {{ui:Kota}}, {{ui:Parametri}}, i {{ui:Više}} uz svako ograničenje (pogledajte [Ograničavanje crteža](topic:constraints)) |
| Blokovi | {{ui:Napravi}}, {{ui:Umetni}}, {{ui:Biblioteka}}, i {{ui:Više}}: {{ui:Izmeni blok}} i {{ui:Definiši atribut}} |
| Listovi | {{ui:Novi list}}, {{ui:Prozor pogleda}} |
| Uređivanje (Edit) | {{ui:Opozovi}}, {{ui:Ponovi}}, {{ui:Kopiraj}} (u međuspremnik), {{ui:Nalepi}}, i {{ui:Više}}: meni sa {{ui:Iseci}}, {{ui:Kopiraj}}, {{ui:Nalepi}}, {{ui:Nalepi na mesto}}, {{ui:Dupliraj i pomeri}}, {{ui:Izbriši}}, {{ui:Izaberi sve}}, {{ui:Ukloni izbor}}, {{ui:Brzi izbor}}, {{ui:Izaberi slične}} i {{ui:Pronađi i zameni}}, svako sa svojim tasterom |
| Pogled | {{ui:Granice}}, {{ui:Prozor (W)}}, {{ui:Prethodni}}, i {{ui:Više}}: {{ui:Izmeri rastojanje}}, {{ui:Površina}}, {{ui:Izmeri (poluprečnik, ugao …)}}, i podela ekrana: {{ui:Podeli jedno pored drugog}}, {{ui:Podeli jedno iznad drugog}}, {{ui:Četiri okna}}, {{ui:Jedno okno}} (pogledajte [Podela ekrana](topic:split-screen)), i {{ui:Okreni pogled 90° ulevo}}, {{ui:Okreni pogled 90° udesno}}, {{ui:Nazad na svet}} (pogledajte [Okretanje pogleda](topic:ucs-and-turned-view)) |

{{ui:Kopiraj}} u grupi Uređivanje (Modify) je komanda {{cmd:COPY}} (osnovna tačka, pa gde ide svaka kopija); {{ui:Kopiraj}} u grupi Uređivanje (Edit) stavlja objekte u međuspremnik za {{ui:Nalepi}}. Pogledajte [Kopiranje, lepljenje i dupliranje](topic:copy-paste). Dugme komande koja se izvršava ostaje istaknuto dok komanda ne završi. Opisi (tooltip) navode Windows prečice („Ctrl+O“); na Mac-u radi i {{key:Mod+O}}.

Na kratkom prozoru (na primer laptop sa ekranom skaliranim na 125 % ili više) traka sa alatkama nikada ne uzima mesto crteža: kada bi crtež dobio premalo visine, dugmad izostavljaju reči ispod ikona i nazive grupa (zadržite pokazivač na dugme za njegov naziv), a ako to nije dovoljno, traka postaje jedan red koji se pomera u stranu. Viši prozor vraća reči.

## Levi panel

Panel sa leve strane ima tri odeljka.

- **{{ui:Slojevi}}.** Svaki sloj u crtežu, sa popunjenom tačkom uz trenutni. Kliknite na naziv da taj sloj postane trenutni. Svaki red ima kvadratić boje (kliknite da izaberete boju) i četiri dugmeta: uključeno/isključeno (oko), zamrzavanje (pahulja), zaključavanje (lokot) i štampanje (štampač). {{ui:Novi sloj}} otvara okvir za dodavanje jednog. Pogledajte [Organizujte crtež slojevima](topic:layers).
- **{{ui:Blokovi}}.** Blokovi definisani u crtežu, koliko puta se svaki koristi, i dugme {{ui:Umetni}} za svaki. Pogledajte [Pravljenje i umetanje blokova](topic:blocks).
- **{{ui:Crtež}}.** Činjenice o otvorenoj datoteci: naziv (uz „(izmenjeno)“ kada ima nesačuvanih izmena), format, veličina, jedinice, broj objekata, slojeva, blokova i listova. Nakon što otvorite datoteku, okvir „O ovoj datoteci“ navodi sve što CadCraft nije mogao da prikaže ili je morao da pretvori.

## Površina za crtanje

Sredina ekrana je crtež. Pokazivač je krstić. Kada CadCraft želi tačku, mali marker i oznaka („Kraj“, „Sredina“) pokazuju gde će hvatanje objekta pasti. Kada želi objekte, krstić ima kvadrat za izbor i objekti ispod njega se osvetle.

Kada je crtež prazan, kartica „Početak crtanja“ prikazuje nekoliko prvih komandi. Nestaje čim pokrenete komandu ili otvorite datoteku. Datoteku DWG ili DXF možete ispustiti bilo gde na ovoj površini da je otvorite.

## Kartice ispod crteža

Ispod crteža su kartice: najpre {{ui:Model}}, zatim {{ui:3D}}, pa jedna kartica po listu, pa dugme {{ui:+}}.

- {{ui:Model}} je sam crtež, u punoj veličini, u jedinicama crteža.
- {{ui:3D}} prikazuje crtež koji leži na zemlji i solide napravljene od njega. Dok je prikazan, traka sa alatkama ima grupu {{ui:3D}} umesto grupa za crtanje. Pogledajte [Model u 3D](topic:3d-solids).
- Svaka kartica lista je list papira sa tablicom natpisa i prozorima pogleda na model. Ono što tu nacrtate je u jedinicama papira (milimetri ili inči). Dvaput kliknite unutar prozora pogleda da radite na modelu kroz njega (pogledajte [Rad na modelu kroz prozor pogleda](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Dugačak naziv lista se na kartici skraćuje; zadržite pokazivač na kartici za ceo naziv. Kada je listova mnogo, {{ui:Podešavanja}} › {{ui:CadCraft}} › {{ui:Kartice listova}} › {{ui:Samo brojevi listova}} prikazuje na kartici samo broj svakog lista (A-101).
- {{ui:+}} pravi novi list sa okvirom, tablicom natpisa i jednim prozorom pogleda. Isto je kao komanda {{cmd:LAYOUT}}.
- Dvaput kliknite karticu lista da je preimenujete. Kada je kartica u fokusu, {{key:Left}} i {{key:Right}} pomeraju se između kartica.

Svaka kartica čuva svoj zum i pomeranje. Pogledajte [Podešavanje lista](topic:sheets-and-viewports).

## Desni panel: Svojstva

Panel sa desne strane se menja u zavisnosti od onoga što je izabrano.

- **Ništa nije izabrano, na kartici {{ui:Model}}:** naslov glasi {{ui:Trenutna podešavanja}}. Ovde postavljate {{ui:Sloj}}, {{ui:Boju}} i {{ui:Visinu teksta}} za nove objekte, {{ui:Jedinice}} crteža, i veličine za nove kote ({{ui:Visina teksta}}, {{ui:Veličina strelice}}, {{ui:Decimale}}, {{ui:Ukupna razmera}}).
- **Ništa nije izabrano, na listu:** naslov glasi „List:“ i naziv lista. Možete preimenovati list, promeniti {{ui:Papir}} i {{ui:Orijentaciju}}, {{ui:Odštampaj ovaj list}} ili {{ui:Izbriši ovaj list}}. Podešavanja za nove objekte slede ispod.
- **Jedan objekat izabran:** njegov tip kao naslov (Linija, Krug, Tekst, Kota, Prozor pogleda …), zatim njegov sloj, boja i geometrija. Ukucajte novu vrednost i pritisnite {{key:Enter}} da je promenite.
- **Više objekata izabrano:** koliko ih je, i njihov zajednički {{ui:Sloj}} i {{ui:Boja}}. Promena bilo kog menja sve njih. „Varira“ znači da se razlikuju.

Pogledajte [Uređivanje hvataljkama i Svojstvima](topic:grips-and-properties).

Ispod toga, panel {{ui:Parametri}} se otvara kada izaberete {{ui:Parametri}} ili ukucate {{cmd:PARAMETERS}}: svaki parametar i dimenzionalno ograničenje u jednoj tablici. Pogledajte [Korišćenje parametara i jednačina](topic:parameters).

## Komandna linija

Na dnu je komandna linija: istorija onoga što ste radili, a ispod nje prompt.

- Oznaka prompta glasi `Command:` kada ništa ne radi. Dok komanda radi, prikazuje pitanje, njene opcije u uglastim zagradama i podrazumevanu vrednost u ošiljastim, na primer `Specify radius of circle [Diameter] <500>:`.
- Dok kucate naziv komande, savet desno predlaže odgovarajuće komande. Pritisnite {{key:Tab}} da prihvatite prvu. „Nema takve komande“ znači da ništa ne odgovara.
- {{key:Up}} i {{key:Down}} vraćaju redove koje ste ranije ukucali.
- Istorija čuva poslednjih 400 redova. Poruke komandi, merenja iz {{cmd:DIST}} i {{cmd:LIST}}, i izveštaji o čuvanju i štampanju pojavljuju se ovde.

## Statusna traka

Najniži red je statusna traka.

- **Koordinate** levo: X i Y krstića. Dok komanda ima osnovnu tačku, prikazuje i rastojanje i ugao od nje, na primer `Δ 1200 < 90°`.
- **Poruke** u sredini, kao „Ortogonalno uključeno“ ili „Trenutni sloj: Zidovi“. Nestaju posle nekoliko sekundi.
- **{{ui:Mreža}}**, **{{ui:Ortogonalno}}**, **{{ui:Polarno}}**, **{{ui:Hvatanje}}**, **{{ui:Praćenje}}**, **{{ui:Dinam}}** i **{{ui:LWT}}** desno. Svako je prekidač; pritisnuto dugme je uključeno. {{ui:LWT}} prikazuje debljine linija na ekranu (pogledajte [Debljine linija i tipovi linija](topic:units-papers-scales#line-weights-and-linetypes)). Mala strelica uz {{ui:Hvatanje}} otvara {{ui:Hvatanja objekata}}, gde štiklirate koja hvatanja su aktivna. Pogledajte [Hvatanje tačaka na objektima](topic:object-snaps).

## Dijalog Štampaj u PDF

{{ui:Štampaj}} (ili {{key:Mod+P}}) otvara dijalog {{ui:Štampaj u PDF}}, sa podešavanjima levo i pregledom uživo desno. Pogledajte [Štampanje u PDF](topic:plot-pdf).

## Pomoć

{{key:F1}} ili dugme {{ui:Pomoć}} otvara ovu pomoć kao bočni panel; crtež ostaje upotrebljiv pored nje. Radi bez veze. Ponovo {{key:F1}}, ili {{key:Esc}} unutar panela, zatvara je. Pogledajte [Korišćenje ove pomoći](common:help).
