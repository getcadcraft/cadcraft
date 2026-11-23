---
title: Nastavitve CadCraft
summary: Nastavitve, ki pripadajo risarski aplikaciji: velikost kazalca, od kod visi prilepljena kopija pod kazalcem, kaj klik naredi z izborom, koliko vrstic uporablja orodna vrstica, kje je ukazna vrstica in kako je visoka, kompaktno zgornje območje in indikator v kotu.
keywords: ukazna vrstica, lebdeča ukazna vrstica, lebdeča, pripeta, ena vrstica, f2, zgodovina ukazov, commandline, cmdline, toparea, zgornje območje, kompaktno, cursorsize, križec za celoten zaslon, kazalec čez cel zaslon, vrstice orodne vrstice, prikaz orodne vrstice, ctrl f1, nastavitve, preference, možnosti, indikator v kotu, kocka pogleda, ikona osi, ucs, kazalec, križec, izbirni okvir, točka prilepljanja, osnovna točka, klik na predmete, izbor, pickadd, shift, ponastavi
from: ae1a81db
---

Nastavitve odprete z zobnikom v vrstici aplikacije ali z {{key:Mod+,}}. Prvi zavihek, {{ui:CadCraft}}, vsebuje nastavitve, ki pripadajo tej aplikaciji; {{ui:Splošno}} vsebuje tiste, ki jih delijo vse aplikacije družine (tema, velikost besedila in širina podoken, videz in vrstni red orodne vrstice). Nastavitve CadCraft obstajajo samo v aplikaciji: spremenite jih tukaj, ta brskalnik si jih zapomni. {{ui:Ponastavi nastavitve CadCraft}} vrne vsako na začetek.

## Kazalec

**Majhen**, **Srednji** (začetni), **Velik** ali **Celozaslonski**: velikost križca in izbirnega okvirja v risbi. Večji izbirni okvir izbere predmete tudi z malo večje razdalje, kar pomaga na zaslonu na dotik ali pri zelo fini risbi.

**Celozaslonski** potegne obe črti križca od roba do roba risbe, tudi ko noben ukaz ne teče, da z očmi preverite, ali se dve stvari poravnata čez ves pogled. Ko je pogled razdeljen, črte ostanejo v podoknu, v katerem delate. Enako kot {{cmd:CURSORSIZE}} 100 v AutoCAD: vnesite {{cmd:CURSORSIZE}} in 100 za celozaslonski način; manjša številka izbere najbližjo velikost (pod 5 Majhen, 5 do 9 Srednji, 10 do 99 Velik).

## Točka prilepljanja

Kje visi prilepljena kopija od kazalca po {{key:Mod+V}} ({{cmd:PASTECLIP}}), dokler ne kliknete:

- **Spodnji levi kot** (začetni): spodnji levi kot obsega kopiranih predmetov, kot v AutoCAD.
- **Središče**: sredina njihovega obsega. Uporabno za postavljanje simbola z očmi.

Kopija, narejena z `COPYBASE`, vedno visi od osnovne točke, ki ste jo izbrali. {{ui:Prilepi na isto mesto}} ({{key:Mod+Shift+V}}) to nastavitev prezre: ohrani prvotne koordinate. Glejte [Kopiraj, prilepi in podvoji](topic:copy-paste).

## Klik na predmete

Kaj klik v risbi naredi z izborom, ko ne teče noben ukaz:

- **Doda k izboru** (začetni): vsak klik ali okno doda predmete; {{key:Shift}}+klik ali {{key:Shift}}+okno jih odvzame.
- **Zamenja izbor**: klik ali okno izbere samo to, kar zajame. {{key:Shift}}+klik doda predmet ali odvzame tistega, ki je že izbran; {{key:Shift}}+okno doda.

Pri pozivu `Select objects:` znotraj ukaza kliki vedno dodajajo (in {{key:Shift}} odstranjuje), ne glede na to nastavitev. Glejte [Izbira predmetov](topic:select-objects).

## Klik na prazno mesto

Kaj naredi klik tam, kjer ni predmeta, ko ne teče noben ukaz. V obeh primerih začne izbirno okno (drugi klik ga konča).

- **Počisti izbor** (začetni): izbrano se spusti. Držite {{key:Shift}} med klikom, da ohranite.
- **Ohrani izbor**: izbor ostane, kot v drugih programih za risanje; okno ga dopolni. Pritisnite {{key:Esc}}, da počistite izbor.

## Povlecite za izbor

Kaj pritisk in vlečenje na prazno mesto nariše:

- **Lasso** (začetni): prosto narisan obris. Če vlečete najprej desno, izberete, kar je povsem znotraj, če najprej levo, izberete, kar se dotika; {{key:Space}} med vlečenjem preklaplja med oknom, sekanjem in ograjo.
- **Pravokotnik**: okvir, kot ga narišeta klik in drugi klik.

{{cmd:LASSOMODE}} `1` ali `0` nastavi isto. Glejte [Izbira z lasom](topic:lasso-selection).

## Povlecite za obrezovanje in podaljševanje

Kaj pritisk na prazno mesto in vlečenje naredita v {{cmd:TRIM}} in {{cmd:EXTEND}}:

- **Pot** (začetni): prosto narisana pot; vsak kos, ki ga prečka, se obreže (ali podaljša).
- **Okno**: okvir; vsak kos, ki se ga dotakne, se obreže, kot to naredi možnost `C`.

Glejte [Obrezovanje in podaljševanje](topic:trim-and-extend).

## Položaj orodne vrstice

{{ui:CadCraft}} › {{ui:Položaj orodne vrstice}}: **Zgoraj** (začetni, kot je bilo vedno), **Spodaj**, **Levo** ali **Desno**. Na levi ali desni se skupine orodij zložijo v stolpec, ki se pomika, če je višji od okna, gumbi pa se prelomijo v dve ali tri v vrsto. Izbira se shrani z vašimi nastavitvami, {{cmd:TOOLBARDOCK}} (`TBDOCK`) pa jo nastavi iz ukazne vrstice. {{ui:Splošno}} › {{ui:Ponastavi razporeditev}} postavi orodno vrstico nazaj zgoraj.

Vrstice menijskih slogov so znotraj orodne vrstice in se z njo premikajo, slog {{ui:Trak}} pa je narejen za zagon čez vrh ali dno: na strani dobi ozek stolpec, ki se pomika. Na telefonu ostane orodna vrstica tam, kamor jo postavi telefonska postavitev.

## Vrstice orodne vrstice

Koliko vrstic orodja uporabljajo nad risbo, v orodni vrstici CadCraft in v slogih {{ui:Klasični risarski slog}} in {{ui:Trak}}:

- **Prelomi, da se prilega** (začetni): orodja se prelomijo v širino okna.
- **2 vrstici**: največ dve vrstici. Ko se orodja pri tej širini prelomijo v dve vrstici ali manj, se preprosto prelomijo; sicer so v dveh vrsticah, ki se pomikata vstran.
- **1 vrstica**: ena vrstica, ki se pomika vstran, kar risbi pusti največ prostora.

{{key:Shift+Ctrl+F1}} preklaplja med tremi, {{cmd:TOOLBARROWS}} pa nastavi eno. Kaj gumbi prikazujejo (ikone in besedilo, samo ikone ali samo besedilo) je nastavitev {{ui:Splošno}} › {{ui:Orodna vrstica}}; {{key:Ctrl+F1}} preklaplja med njimi, {{cmd:TOOLBAR}} pa jo nastavi.

## Ukazna vrstica

Ukazna vrstica lahko ostane pripeta pod risbo, kot je bilo vedno, ali lebdi nad njo, in je lahko tanka kot ena vrstica.

- **Naredite jo lebdečo.** Povlecite ročico na njenem levem koncu v risbo ali izberite {{ui:Plavaj nad risbo}} v njenem meniju {{ui:Možnosti ukazne vrstice}} (tri pike na njenem desnem koncu). Ponovno povlecite ročico, da jo premaknete; njen položaj ostane, ko se spremeni velikost okna. Povlecite njen desni rob, da jo naredite širšo ali ožjo. Spustite jo na vrstico stanja ali izberite {{ui:Zasidraj spodaj}}, da jo spet pripnete.
- **Naredite jo tanjšo ali višjo.** Povlecite njen zgornji rob: vsak korak je ena vrstica zgodovine. Do nič vrstic je **ukazna vrstica z eno vrstico**: samo poziv in tisto, kar vtipkate, nova sporočila pa se za trenutek pokažejo nad njo. Dvojni klik na zgornjem robu preklopi med eno vrstico in višino, ki ste jo imeli.
- **Zgodovina.** {{key:F2}} ali gumb ure v ukazni vrstici ({{ui:Zgodovina ukazov (F2)}}) odpre celotno zgodovino nad vrstico (pod njo, kadar lebdi blizu vrha okna). Vtipkavanje še vedno gre v ukazno vrstico; {{key:PageUp}} in {{key:PageDown}} pomikata zgodovino, {{key:Esc}}, {{key:F2}} ali klik drugje jo zapre. Tipka po meri na F2 ima prednost pred tem.
- **Z tipkovnico.** Ročica je gumb: ko je izbran, puščične tipke premikajo lebdečo ukazno vrstico (s {{key:Shift}} v večjih korakih); {{key:Up}} naredi pripeto lebdečo, {{key:Down}} na spodnjem robu pa jo pripne. Zgornji rob je ločilo: {{key:Up}} in {{key:Down}} dodajata ali jemljeta vrstice, {{key:Home}} jo naredi eno vrstico, {{key:End}} najvišjo. Bralniki zaslona še slišijo vsako sporočilo, tudi v ukazni vrstici z eno vrstico.

{{ui:CadCraft}} › {{ui:Ukazna vrstica}} ima enake izbire: {{ui:Pripeta na dnu}} ali {{ui:Lebdeča}}, {{ui:Prikazane vrstice zgodovine}} (0 do 12) in {{ui:Standardna višina}}. {{cmd:COMMANDLINE}} (`CMDLINE`) jih nastavi iz ukazne vrstice. Mesto in višina se za CadCraft hranita v tem brskalniku skupaj z ostalo razporeditvijo, zato ju shranjeno delovno okolje prenese; {{ui:Splošno}} › {{ui:Ponastavi razporeditev}} ukazno vrstico znova pripne na standardno višino. Na telefonu ostane ukazna vrstica pripeta z eno vrstico zgodovine; gumb zgodovine tam deluje prav tako.

{{ui:CadCraft}} › {{ui:Črke možnosti}} hrani črke, ki ste jih izbrali za možnosti ukazov: {{ui:Uredi…}} odpre datoteko, {{ui:Uvozi…}} jo nadomesti z datoteko, ki jo izberete, in {{ui:Izvozi}} jo shrani. Glejte [Dajte možnostim ukazov lastne črke](topic:option-letters).

Ko je okno kratko in postavitvena preverjanja ponudijo bolj stisnjeno postavitev, njihov {{ui:Da}} tudi ukazno vrstico naredi eno vrstico, če je risba še vedno prekratka po orodnih vrsticah.

## Zgornje območje

{{ui:CadCraft}} › {{ui:Zgornje območje}}: **Standardno** (začetno) ali **Kompaktno**. Kompaktno ohrani vrstice nad risbo majhne v vseh menijskih slogih: imena skupin in besedilo pod ikonami izginejo (namigi in bralniki zaslona jih še imajo), gumbi pa so bolj strnjeni. Deluje s [Vrsticami orodne vrstice](topic:settings#toolbar-rows): Kompaktno in **1 vrstica** pustita risbi največ prostora. {{cmd:TOPAREA}} to nastavi.

## Indikator v kotu

Kaj sedi v kotu risbe:

- **Samodejno** (začetni): ikona osi na zavihku {{ui:Model}} in kocka pogleda na zavihku {{ui:3D}}.
- **Ikona osi**: oznaka X in Y v spodnjem levem kotu zavihka {{ui:Model}} in majhna oznaka X, Y in Z na zavihku {{ui:3D}}.
- **Kocka pogleda**: kocka v zgornjem desnem kotu obeh zavihkov. Na zavihku {{ui:Model}} prikaže risbo od zgoraj, klik na drugo ploskev, rob ali oglišče pa odpre zavihek {{ui:3D}}, ki gleda z njega. Na zavihku 3D se obrača s pogledom: kliknite, da gledate s strani, povlecite, da krožite, in hiša se vrne v izometrični pogled. Glejte [Model v 3D](topic:3d-solids).
- **Brez**: nič v kotu.

Listi nobenega od obeh ne prikazujejo.

## Dolžina in površina izbora

- **V vrstici stanja** (začetni): ko so predmeti izbrani, vrstica stanja prikaže njihovo skupno dolžino in skupno površino zaprtih. Glejte [Skupaj za izbor](topic:properties-panel#totals-of-a-selection).
- **Skrito**: vrstica stanja jih izpusti. Lastnosti jih še vedno prikažejo za več predmetov.

## Mreža, ortogonalno in lovljenja

Tega ni v pogovornem oknu: gumbi {{ui:Mreža}}, {{ui:Orto}} in {{ui:Lovljenje}} v vrstici stanja (ali {{key:F7}}, {{key:F8}}, {{key:F3}}) in seznam lovljenj predmetov poleg njih se pomnijo, ko jih pustite. Glejte [Lovljenje na točke na predmetih](topic:object-snaps).
