---
title: Nastavitve CadCraft
summary: Nastavitve, ki spadajo k risarski aplikaciji: velikost kurzorja, od kod visi prilepljena kopija, kaj klik naredi z izborom, koliko vrstic uporablja orodna vrstica, kje je ukazna vrstica in kako visoka je, kompaktno zgornje območje ter indikator v kotu.
keywords: ukazna vrstica, lebdeča ukazna vrstica, lebdenje, pripenjanje, ena vrstica, f2, zgodovina ukazov, commandline, cmdline, toparea, zgornje območje, kompaktno, cursorsize, kurzor čez celoten zaslon, rob do roba, vrstice orodne vrstice, prikaz orodne vrstice, ctrl f1, nastavitve, prednastavitve, možnosti, indikator v kotu, kocka pogleda, ikona osi, ucs ikona, kurzor, navzkrižje, okvir izbire, točka lepljenja, izhodiščna točka, klik na objekte, izbor, pickadd, shift, ponastavi
from: 0896eb42
---

Odprite {{ui:Nastavitve}} z zobnikom v vrstici aplikacije ali z {{key:Mod+,}}. Prvi zavihek, {{ui:CadCraft}}, vsebuje nastavitve, ki spadajo k tej aplikaciji; {{ui:Splošno}} vsebuje tiste, ki si jih delijo vse aplikacije družine (tema, velikost in širina besedila plošč, videz in vrstni red orodne vrstice). Nastavitve CadCraft veljajo samo v tej aplikaciji: spremenite jih tukaj, ta brskalnik pa si jih zapomni. {{ui:Ponastavi nastavitve CadCraft}} vrne vsako na začetno vrednost.

## Kurzor

**Majhen**, **Srednji** (začetna), **Velik** ali **Celozaslonski način**: velikost navzkrižja in okvirja izbire v risbi. Večji okvir izbire izbere objekte tudi z malo večje razdalje, kar pomaga na zaslonu na dotik ali pri zelo natančni risbi.

**Celozaslonski način** raztegne obe črti navzkrižja od roba do roba risbe, tudi kadar ni tekočega ukaza, tako da lahko s pogledom preverite, ali se dve stvari ujemata čez ves pogled. Pri razdeljenem pogledu črte ostanejo v podoknu, v katerem delate. Enako kot {{cmd:CURSORSIZE}} 100 v AutoCAD-u: vnesite {{cmd:CURSORSIZE}} in 100 za celozaslonski način; manjša številka izbere najbližjo velikost (pod 5 Majhen, 5 do 9 Srednji, 10 do 99 Velik).

## Točka lepljenja

Kje visi prilepljena kopija pod kurzorjem po {{key:Mod+V}} ({{cmd:PASTECLIP}}), dokler ne kliknete:

- **Spodnji levi vogal** (začetna): spodnji levi vogal razsežnosti kopiranih objektov, kot v AutoCAD-u.
- **Središče**: sredina njihove razsežnosti. Uporabno za ročno postavitev simbola.

Kopija, narejena z `COPYBASE`, vedno visi od izhodiščne točke, ki ste jo izbrali. {{ui:Prilepi na isto mesto}} ({{key:Mod+Shift+V}}) prezre to nastavitev: ohrani prvotne koordinate. Glejte [Kopiraj, prilepi in podvoji](topic:copy-paste).

## Klikanje objektov

Kaj klik v risbi naredi z izborom, kadar ni tekočega ukaza:

- **Doda k izboru** (začetna): vsak klik ali okno doda objekte; {{key:Shift}}+klik ali {{key:Shift}}+okno jih odstrani.
- **Zamenja izbor**: klik ali okno izbere samo tisto, kar zajame. {{key:Shift}}+klik doda objekt ali odstrani tistega, ki je že izbran; {{key:Shift}}+okno doda.

Pri pozivu `Izberite objekte:` znotraj ukaza kliki vedno dodajajo (in {{key:Shift}} odstranjuje), ne glede na to nastavitev. Glejte [Izbira objektov](topic:select-objects).

## Klik na prazno mesto

Kaj naredi klik tam, kjer ni objekta, kadar ni tekočega ukaza. V obeh primerih začne okno izbire (drugi klik ga dokonča).

- **Počisti izbor** (začetna): kar je bilo izbrano, se spusti. Držite {{key:Shift}} med klikom, da ga obdržite.
- **Ohrani izbor**: izbor ostane, kot v drugih risarskih programih; okno ga dopolni. Pritisnite {{key:Esc}}, da počistite izbor.

## Vlečenje za izbiro

Kaj naredi pritisk in vlečenje na praznem mestu:

- **Lasso** (začetna): prosto narisan obris. Če se najprej premaknete desno, izberete vse, kar leži v celoti znotraj, če najprej levo, pa vse, česar se dotika; {{key:Space}} med vlečenjem preklaplja med oknom, križanjem in ograjo.
- **Pravokotnik**: okvir, kot ga narišeta klik in drugi klik.

{{cmd:LASSOMODE}} `1` ali `0` nastavi enako. Glejte [Izbira z lassom](topic:lasso-selection).

## Vlečenje za obrezovanje in podaljševanje

Kaj naredi pritisk na praznem mestu in vlečenje v {{cmd:TRIM}} in {{cmd:EXTEND}}:

- **Pot** (začetna): prosto narisana pot; vsak kos, ki ga prečka, se obreže (ali podaljša).
- **Okno**: okvir; vsak kos, ki se ga dotakne, se obreže, kot to naredi možnost `C`.

Glejte [Obreži in podaljšaj](topic:trim-and-extend).

## Položaj orodne vrstice

{{ui:CadCraft}} › {{ui:Položaj orodne vrstice}}: **Zgoraj** (začetna, kot je bilo vedno), **Spodaj**, **Levo** ali **Desno**. Na levi ali desni se skupine orodij zložijo v stolpec, ki se pomika, kadar je višji od okna, gumbi pa se prelomijo po dva ali tri v vrsti. Izbira se shrani z vašimi nastavitvami, {{cmd:TOOLBARDOCK}} (`TBDOCK`) pa jo nastavi iz ukazne vrstice. {{ui:Splošno}} › {{ui:Ponastavi razporeditev}} vrne orodno vrstico na vrh.

Vrstice slogov menija so znotraj orodne vrstice in se premikajo z njo, slog {{ui:Trak}} pa je narejen za potek čez vrh ali dno: na strani dobi ozek stolpec, ki se pomika. Na telefonu orodna vrstica ostane tam, kamor jo postavi postavitev za telefon.

## Vrstice orodne vrstice

Koliko vrstic orodij uporabljajo nad risbo, v orodni vrstici CadCraft ter v slogih {{ui:Klasični risarski slog}} in {{ui:Trak}}:

- **Prelomi do širine** (začetna): orodja se prelomijo do širine okna.
- **2 vrstici**: največ dve vrstici. Če se orodja pri tej širini prelomijo na dve vrstici ali manj, se samo prelomijo; sicer so v dveh vrsticah, ki se pomikata vodoravno.
- **1 vrstica**: ena vrstica, ki se vodoravno pomika, kar risbi pusti največ prostora.

{{key:Shift+Ctrl+F1}} preklaplja med tremi, {{cmd:TOOLBARROWS}} pa nastavi eno. Kaj gumbi prikazujejo (ikone in besedilo, samo ikone ali samo besedilo), je nastavitev {{ui:Splošno}} › {{ui:Orodna vrstica}}; {{key:Ctrl+F1}} preklaplja med njimi, {{cmd:TOOLBAR}} pa jo nastavi.

## Ukazna vrstica

Ukazna vrstica lahko ostane pripeta pod risbo, kot je bila vedno, ali lebdi nad njo, lahko pa je tanka kot ena vrstica.

- **Naredite jo lebdečo.** Povlecite prijemalnik na njenem levem koncu v risbo ali izberite {{ui:Lebdi nad risbo}} v njenem meniju {{ui:Možnosti ukazne vrstice}} (tri pike na desnem koncu). Ponovno povlecite prijemalnik, da jo premaknete; njen položaj se ohrani, ko se spremeni velikost okna. Povlecite njen desni rob, da jo razširite ali zožite. Spustite jo na vrstico stanja ali izberite {{ui:Zasidraj spodaj}}, da jo znova pripnete.
- **Naredite jo tanjšo ali višjo.** Povlecite njen zgornji rob: vsak korak je ena vrstica zgodovine. Do nič vrstic je **ukazna vrstica z eno vrstico**: samo poziv in tisto, kar vnesete, nova sporočila pa se za trenutek pokažejo nad njo. Dvojni klik na zgornji rob preklopi med eno vrstico in višino, ki ste jo imeli.
- **Zgodovina.** {{key:F2}} ali gumb ure na ukazni vrstici ({{ui:Zgodovina ukazov (F2)}}) odpre celotno zgodovino nad vrstico (pod njo, kadar lebdi blizu vrha okna). Vnašanje še vedno gre v ukazno vrstico; {{key:PageUp}} in {{key:PageDown}} pomikata zgodovino, {{key:Esc}}, {{key:F2}} ali klik kjerkoli drugje pa jo zapre. Tipka F2, ki ste jo dodelili sami, ima prednost.
- **Z tipkovnico.** Prijemalnik je gumb: ko je v fokusu, puščične tipke premaknejo lebdečo ukazno vrstico (s {{key:Shift}} v večjih korakih); {{key:Up}} naredi pripeto vrstico lebdečo, {{key:Down}} na spodnjem robu pa jo pripne. Zgornji rob je ločilnik: {{key:Up}} in {{key:Down}} dodajata ali odvzemata vrstico, {{key:Home}} jo naredi ene vrstice, {{key:End}} pa najvišjo. Bralniki zaslona še vedno slišijo vsako sporočilo, tudi v ukazni vrstici z eno vrstico.

{{ui:CadCraft}} › {{ui:Ukazna vrstica}} ima enake izbire: {{ui:Pripeta na dnu}} ali {{ui:Lebdeča}}, {{ui:Prikazane vrstice zgodovine}} (0 do 12) in {{ui:Standardna višina}}. {{cmd:COMMANDLINE}} (`CMDLINE`) jih nastavi iz ukazne vrstice. Mesto in višina se za CadCraft hranita v tem brskalniku skupaj z ostalo postavitvijo, tako da ju shranjeno delovno okolje prenese; {{ui:Splošno}} › {{ui:Ponastavi razporeditev}} pripne ukazno vrstico nazaj na standardno višino. Na telefonu ostane ukazna vrstica pripeta z eno vrstico zgodovine; gumb zgodovine tam deluje prav tako.

Kadar je okno nizko in preverjanje postavitve ponudi strnjeno postavitev, njen {{ui:Da}} tudi ukazno vrstico nastavi na eno vrstico, če je risba še vedno prekratka po orodnih vrsticah.

## Zgornje območje

{{ui:CadCraft}} › {{ui:Zgornje območje}}: **Standardno** (začetna) ali **Kompaktno**. Kompaktno ohrani vrstice nad risbo majhne v vsakem slogu menija: izpustijo se imena skupin in besedila pod ikonami (namigi in bralniki zaslona jih še vedno imajo), gumbi pa so tesnejši. Deluje skupaj z [Vrsticami orodne vrstice](topic:settings#toolbar-rows): Kompaktno in **1 vrstica** risbi pustita največ prostora. {{cmd:TOPAREA}} to nastavi.

## Indikator v kotu

Kaj sedi v kotu risbe:

- **Samodejno** (začetna): ikona osi na zavihku {{ui:Model}} in kocka pogleda na zavihku {{ui:3D}}.
- **Ikona osi**: oznaka X in Y v spodnjem levem kotu zavihka {{ui:Model}}, na zavihku {{ui:3D}} pa majhna oznaka X, Y in Z.
- **Kocka pogleda**: kocka v zgornjem desnem kotu obeh zavihkov. Na zavihku {{ui:Model}} prikazuje risbo od zgoraj; klik na drugo ploskev, rob ali vogal pa odpre zavihek {{ui:3D}}, ki gleda z tega mesta. Na zavihku 3D se vrti s pogledom: kliknite, da pogledate z ene strani, povlecite za kroženje, ikona hiške pa vrne izometrični pogled. Glejte [Model v 3D](topic:3d-solids).
- **Brez**: nič v kotu.

Listi ne prikazujejo nobene od obeh.

## Dolžina in površina izbora

- **V vrstici stanja** (začetna): ko so objekti izbrani, vrstica stanja prikaže njihovo skupno dolžino in skupno površino zaprtih. Glejte [Skupne vrednosti izbora](topic:properties-panel#totals-of-a-selection).
- **Skrito**: vrstica stanja jih izpusti. Lastnosti jih še vedno prikazujejo za več objektov.

## Mreža, Orto in lovljenja

Teh ni v pogovornem oknu: gumbi {{ui:Mreža}}, {{ui:Orto}} in {{ui:Lovljenje}} v vrstici stanja (ali {{key:F7}}, {{key:F8}}, {{key:F3}}) in seznam lovljenj objektov poleg njih se ohranijo, ko jih pustite. Glejte [Lovljenje na točke na objektih](topic:object-snaps).
