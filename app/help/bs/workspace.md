---
title: Ekran CadCraft-a
summary: Obilazak svake trake, panela i kartice u aplikaciji za crtanje, po nazivu koji ima na ekranu.
keywords: ekran, sučelje, traka sa alatima, paneli, komandna linija, statusna traka, kartice, kartice listova, svojstva, panel slojeva, obilazak
from: b5a33388
---

Ekran ima sedam dijelova. Od vrha do dna: traka aplikacije, traka sa alatima, područje crtanja sa panelom sa svake strane, kartice ispod crteža, komandna linija i statusna traka.

## Traka aplikacije

Tanka traka na samom vrhu pripada sajtu, a ne crtežu. Prikazuje CadCraft oznaku, naziv aplikacije, koju verziju pokrećete, link na stranicu aplikacije, dugme {{ui:Pomoć}} (ili {{key:F1}}), dugme {{ui:Spasi za rad van mreže}}, dugme {{ui:Preko cijelog ekrana}} i dva dugmeta za temu, {{ui:Papir}} i {{ui:Model}}.

Dugme {{ui:Postavke}} (zupčanik) sadrži CadCraft-ove vlastite postavke i one koje dijele sve aplikacije: vidi [Postavke CadCraft-a](topic:settings).

{{ui:Spasi za rad van mreže}} čuva kopiju CadCraft-a, uključujući njegov čitač DWG-a, u ovom pregledniku da se otvara bez veze. Njegova oznaka pokazuje stanje: „Spašavanje N od M“, „Spremno za rad van mreže“, „Nije moguće spasiti“ ili „Rad van mreže nije dostupan“. Vidi [Rad van mreže](common:offline).

:::note
Dugmad {{ui:Papir}} i {{ui:Model}} u traci aplikacije samo mijenjaju boje ekrana: {{ui:Papir}} je svijetla tema, {{ui:Model}} tamna. Nemaju nikakve veze sa karticom {{ui:Model}} ispod crteža, koja prebacuje između crteža i njegovih listova.
:::

Dugme {{ui:Preko cijelog ekrana}}, ili {{key:Ctrl+Shift+F}} (tipka Control na svakom računaru, uključujući Mac), prolazi kroz tri režima ekrana: normalan, preko cijelog ekrana, i preko cijelog ekrana sa sakrivenim trakama. Sa sakrivenim trakama, pomjerite pokazivač na gornju ivicu ekrana da ih vratite.

## Traka sa alatima

Ispod trake aplikacije je traka sa alatima. Svako dugme pokreće komandu, baš kao da ste je upisali, pa komandna linija postavlja ista pitanja u oba slučaja. Pređite pokazivačem preko dugmeta da vidite njegov alias komande. Grupe su:

| Grupa | Dugmad |
|---|---|
| {{ui:Datoteka}} | {{ui:Nova}}, {{ui:Otvori}}, {{ui:Spasi}}, {{ui:Spasi kao}}, {{ui:Štampaj}} |
| {{ui:Crtanje}} | {{ui:Linija}}, {{ui:Polilinija}}, {{ui:Krug}}, {{ui:Luk}}, {{ui:Pravougaonik}}, {{ui:Poligon}}, {{ui:Elipsa}}, {{ui:Tekst}}, {{ui:Pasus}}, {{ui:Šrafura}}, i {{ui:Više}}: {{ui:Tačka}}, {{ui:Pomoćna linija}} i {{ui:Zraka}} (vidi [Pomoćne linije i zrake](topic:construction-lines)) |
| {{ui:Izmjena}} | {{ui:Premjesti}}, {{ui:Kopiraj}}, {{ui:Rotiraj}}, {{ui:Razmjera}}, {{ui:Zrcaljenje}}, {{ui:Rastegni}}, {{ui:Odmak}}, {{ui:Skrati}}, {{ui:Produženje}}, {{ui:Zaobljenje}}, {{ui:Skošenje}}, {{ui:Rastavi}}, {{ui:Izbriši}}, i {{ui:Više}}: {{ui:Niz}}, {{ui:Spoji}}, {{ui:Usklađivanje svojstava}}, {{ui:Prekini}} i {{ui:Produži}} |
| Anotacije | {{ui:Linearna}}, {{ui:Poravnata}}, {{ui:Ugao}}, {{ui:Poluprečnik}}, {{ui:Prečnik}} (kote), {{ui:Vodilica}} (multivođica), i {{ui:Više}}: {{ui:Nastavi kotu}}, {{ui:Bazna kota}} i {{ui:Revizioni oblak}} |
| Parametarski | {{ui:Auto}}, {{ui:Ograniči}}, {{ui:Kota}}, {{ui:Parametri}}, i {{ui:Više}} uz svako ograničenje (vidi [Ograničenje crteža](topic:constraints)) |
| {{ui:Blokovi}} | {{ui:Napravi}}, {{ui:Umetni}}, {{ui:Biblioteka}}, i {{ui:Više}}: {{ui:Uredi blok}} i {{ui:Definiši atribut}} |
| {{ui:Listovi}} | {{ui:Novi list}}, {{ui:Prozor pregleda}} |
| {{ui:Uređivanje}} | {{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}} (na međuspremnik), {{ui:Zalijepi}}, i {{ui:Više}}: meni sa {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Zalijepi na mjesto}}, {{ui:Dupliraj i pomjeri}}, {{ui:Izbriši}}, {{ui:Odaberi sve}}, {{ui:Poništi odabir}}, {{ui:Brzi odabir}}, {{ui:Odaberi slične}} i {{ui:Pronađi i zamijeni}}, svaki sa svojom tipkom |
| {{ui:Pogled}} | {{ui:Granice}}, {{ui:Prozor}}, {{ui:Prethodni}}, i {{ui:Više}}: {{ui:Izmjeri razmak}}, {{ui:Površina}}, {{ui:Izmjeri (poluprečnik, ugao …)}}, i podijeljen ekran: {{ui:Podijeli jedno pored drugog}}, {{ui:Podijeli jedno iznad drugog}}, {{ui:Četiri okna}}, {{ui:Jedno okno}} (vidi [Podijeli ekran](topic:split-screen)), i {{ui:Okreni pogled 90° ulijevo}}, {{ui:Okreni pogled 90° udesno}}, {{ui:Nazad na svijet}} (vidi [Okretanje pogleda](topic:ucs-and-turned-view)) |

{{ui:Kopiraj}} u grupi {{ui:Izmjena}} je komanda {{cmd:COPY}} (osnovna tačka, pa gdje ide svaka kopija); {{ui:Kopiraj}} u grupi {{ui:Uređivanje}} stavlja objekte na međuspremnik za {{ui:Zalijepi}}. Vidi [Kopiraj, zalijepi i dupliraj](topic:copy-paste). Dugme komande koja se izvršava ostaje označeno dok komanda ne završi. Opisi alata navode Windows prečice („Ctrl+O“); na Mac-u radi i {{key:Mod+O}}.

Na kratkom prozoru (laptop sa ekranom skaliranim na 125 % ili više, na primjer) traka sa alatima nikad ne uzima mjesto crteža: kad bi crtež dobio premalo visine, dugmad izbace riječi ispod ikona i nazive grupa (pređite preko dugmeta da vidite njegov naziv), a ako ni to nije dovoljno, traka postaje jedan red koji se pomjera u stranu. Viši prozor vraća riječi.

## Lijevi panel

Panel lijevo ima tri odjeljka.

- **{{ui:Slojevi}}.** Svaki sloj u crtežu, s punom tačkom uz trenutni. Kliknite naziv da taj sloj postane trenutni. Svaki red ima kvadratić boje (kliknite ga da izaberete boju) i četiri dugmeta: uključeno/isključeno (oko), zamrzavanje (pahuljica), zaključavanje (katanac) i štampanje (štampač). {{ui:Novi sloj}} otvara okvir za dodavanje. Vidi [Organizacija crteža slojevima](topic:layers).
- **{{ui:Blokovi}}.** Blokovi definisani u crtežu, koliko puta se svaki koristi, i dugme {{ui:Umetni}} uz svaki. Vidi [Pravljenje i umetanje blokova](topic:blocks).
- **{{ui:Crtež}}.** Činjenice o otvorenoj datoteci: naziv (sa „(promijenjeno)“ kad ima nespašenih izmjena), format, veličina, jedinice, broj objekata, slojeva, blokova i listova. Nakon što otvorite datoteku, okvir „O ovoj datoteci“ navodi sve što CadCraft nije mogao prikazati ili je morao pretvoriti.

## Područje crtanja

Sredina ekrana je crtež. Pokazivač je ukrštena nit. Kad CadCraft traži tačku, mali marker i oznaka („Kraj“, „Sredina“) pokazuju gdje će hvatanje objekta sletjeti. Kad traži objekte, ukrštena nit ima okvir za izbor, a objekti ispod njega se osvjetljavaju.

Kad je crtež prazan, kartica „Počni crtanje“ prikazuje nekoliko prvih komandi. Nestaje čim pokrenete komandu ili otvorite datoteku. Možete prevući DWG ili DXF datoteku bilo gdje na ovo područje da je otvorite.

## Kartice ispod crteža

Ispod crteža su kartice: {{ui:Model}} prva, zatim {{ui:3D}}, pa jedna kartica po listu (rasporedu), pa dugme {{ui:+}}.

- {{ui:Model}} je sam crtež, u punoj veličini, u jedinicama crteža.
- {{ui:3D}} prikazuje crtež koji leži na zemlji i solide napravljene iz njega. Dok je prikazan, traka sa alatima ima grupu {{ui:3D}} umjesto grupa za crtanje. Vidi [Model u 3D](topic:3d-solids).
- Svaka kartica lista je list papira sa natpisnim blokom i prozorima pregleda na model. Ono što tu nacrtate je u jedinicama papira (milimetri ili inči). Dvaput kliknite unutar prozora pregleda da radite na modelu kroz njega (vidi [Rad na modelu kroz prozor pregleda](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Dugačak naziv lista se skraćuje na kartici; pređite preko kartice za cijeli naziv. Kod mnogo listova, {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Kartice listova}} › {{ui:Samo brojevi listova}} prikazuje na kartici samo broj svakog lista (A-101).
- {{ui:+}} pravi novi list sa okvirom, natpisnim blokom i jednim prozorom pregleda. Isto je kao komanda {{cmd:LAYOUT}}.
- Dvaput kliknite karticu lista da je preimenujete. Kad je kartica izabrana, {{key:Left}} i {{key:Right}} prelaze između kartica.

Svaka kartica zadržava svoj zum i pomjeranje pogleda. Vidi [Postavljanje lista](topic:sheets-and-viewports).

## Desni panel: Svojstva

Panel desno se mijenja sa onim što je izabrano.

- **Ništa nije izabrano, na kartici {{ui:Model}}:** naslov glasi {{ui:Trenutne postavke}}. Ovdje postavljate {{ui:Sloj}}, {{ui:Boju}} i {{ui:Visinu teksta}} za nove objekte, {{ui:Jedinice}} crteža, i veličine za nove kote ({{ui:Visina teksta}}, {{ui:Veličina strelice}}, {{ui:Decimale}}, {{ui:Opšta razmjera}}).
- **Ništa nije izabrano, na listu:** naslov glasi „List:“ i naziv lista. Možete preimenovati list, promijeniti mu {{ui:Papir}} i {{ui:Orijentacija}}, {{ui:Ispiši ovaj list}} ili {{ui:Obriši ovaj list}}. Postavke za nove objekte slijede ispod.
- **Jedan objekat izabran:** njegova vrsta kao naslov ({{ui:Linija}}, {{ui:Krug}}, {{ui:Tekst}}, {{ui:Kota}}, {{ui:Prozor pregleda}} …), zatim sloj, boja i geometrija. Upišite novu vrijednost i pritisnite {{key:Enter}} da je promijenite.
- **Više objekata izabrano:** koliko ih je, i njihov zajednički {{ui:Sloj}} i {{ui:Boja}}. Promjena bilo kojeg mijenja ih sve. „Različito“ znači da se razlikuju.

Vidi [Uređivanje hvataljkama i svojstvima](topic:grips-and-properties).

Ispod njega se otvara panel {{ui:Parametri}} kad izaberete {{ui:Parametri}} ili upišete {{cmd:PARAMETERS}}: svaki parametar i dimenziono ograničenje u jednoj tabeli. Vidi [Korištenje parametara i jednačina](topic:parameters).

## Komandna linija

Na dnu je komandna linija: historija onoga što ste radili, a ispod nje upit.

- Oznaka upita glasi `Command:` kad ništa ne radi. Dok komanda radi, pokazuje pitanje, njene opcije u uglastim zagradama i podrazumijevanu vrijednost u oštrim zagradama, na primjer `Specify radius of circle [Diameter] <500>:`.
- Dok kucate naziv komande, savjet desno predlaže odgovarajuće komande. Pritisnite {{key:Tab}} da prihvatite prvu. „No such command“ znači da ništa ne odgovara, odnosno „Nema takve komande“.
- {{key:Up}} i {{key:Down}} vraćaju redove koje ste ranije upisali.
- Historija čuva posljednjih 400 redova. Poruke komandi, mjerenja iz {{cmd:DIST}} i {{cmd:LIST}}, te izvještaji o spašavanju i štampanju pojavljuju se ovdje.

## Statusna traka

Samo dno je statusna traka.

- **Koordinate** lijevo: X i Y ukrštene niti. Dok komanda ima osnovnu tačku, prikazuje i udaljenost i ugao od nje, na primjer `Δ 1200 < 90°`.
- **Poruke** u sredini, kao „Ortogonalno uključeno“ ili „Trenutni sloj: Zidovi“. Blijede nakon nekoliko sekundi.
- **{{ui:Mreža}}**, **{{ui:Ortogonalno}}**, **{{ui:Polar}}**, **{{ui:Hvatanje}}**, **{{ui:Prati}}**, **{{ui:Dyn}}** i **{{ui:LWT}}** desno. Svaki je prekidač; pritisnuto dugme je uključeno. {{ui:LWT}} prikazuje debljine linija na ekranu (vidi [Debljine linija i tipovi linija](topic:units-papers-scales#line-weights-and-linetypes)). Mala strelica pored {{ui:Hvatanje}} otvara {{ui:Hvatanja objekata}}, gdje označite koja su hvatanja aktivna. Vidi [Hvatanje za tačke na objektima](topic:object-snaps).

## Dijalog Štampaj u PDF

{{ui:Štampaj}} (ili {{key:Mod+P}}) otvara dijalog {{ui:Štampaj u PDF}}, sa postavkama lijevo i pregledom uživo desno. Vidi [Štampaj u PDF](topic:plot-pdf).

## Pomoć

{{key:F1}} ili dugme {{ui:Pomoć}} otvara ovu pomoć kao bočni panel; crtež ostaje upotrebljiv pored nje. Radi bez veze. Ponovo {{key:F1}}, ili {{key:Esc}} unutar panela, zatvara je. Vidi [Korištenje ove pomoći](common:help).
