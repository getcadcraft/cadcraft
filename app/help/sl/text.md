---
title: Dodajanje besedila in oznak
summary: Postavite oznake prostorov z enovrstičnim besedilom, napišite prelomljene opombe z odstavčnim besedilom, vtipkanim na mestu, in pozneje uredite besedilo.
keywords: besedilo, dtext, mtext, mleader, multileader, vodilka, revcloud, revizijski oblak, oblak, poišči, zamenjaj, poišči in zamenjaj, odstavek, prelom, razmik vrstic, oznaka, opomba, označba, višina, poravnava, textmask, maska ozadja, maska, izbris, zasuk, uredi besedilo, ddedit, textedit, pisava
from: 4b76be99
---

## Kaj boste naredili

Dve oznaki prostorov, centrirani v svojih prostorih, opomba, ki se prelomi na svojo širino, nato popravek ene od oznak.

## Višina besedila in merilo risbe

Višina besedila je v enotah risbe. V risbi v milimetrih, ki bo izrisana v merilu 1:50, je besedilo visoko 2.5 mm na papirju 2.5 × 50 = 125 enot v modelu. Na zavihku lista rišete v enotah papirja, zato je 2.5 tam 2.5 mm na papirju.

## Postavite središčno oznako

1. Vtipkajte `DT` in pritisnite {{key:Enter}} (ali kliknite {{ui:Besedilo}} na orodni vrstici). Poziv se glasi `Določite začetno točko besedila [Poravnava (J)]:`.
2. Vtipkajte `J` in pritisnite {{key:Enter}}.
3. Pri pozivu `Vnesite možnost [Levo (L)/Središče (C)/Desno (R)/Sredina (MC)/TL/MC] <L>:` vtipkajte `MC` in pritisnite {{key:Enter}}.
4. Pri pozivu `Določite vstavitveno točko besedila` kliknite sredino prostora.
5. Pri pozivu `Določite višino` vtipkajte `250` in pritisnite {{key:Enter}}.
6. Pri pozivu `Določite kot zasuka besedila <0>` pritisnite {{key:Enter}}.
7. Pri pozivu `Vnesite besedilo` vtipkajte `KITCHEN` in pritisnite {{key:Enter}}.

Oznaka se prikaže, središčno na točki, ki ste jo kliknili.

8. Na praznem pozivu `Vnesite besedilo` pritisnite {{key:Enter}}, da zaključite ukaz.

## Napišite prelomljeno opombo

Odstavčno besedilo ({{cmd:MTEXT}}) se prelomi na določeno širino in se vtipka neposredno v risbo.

1. Vtipkajte `T` in pritisnite {{key:Enter}}, ali kliknite {{ui:Odstavek}} na orodni vrstici.
2. Pri pozivu `Določite prvi kot` kliknite, kam naj pride zgornji levi kot opombe.
3. Če želite najprej spremeniti višino, vtipkajte `H`, pritisnite {{key:Enter}}, vtipkajte `250` in pritisnite {{key:Enter}}.
4. Pri pozivu `Določite nasprotni kot [Višina (H)/Poravnava (J)/Razmik vrstic (L)/Zasuk (R)/Širina (W)]` kliknite desno od prvega kota. Razdalja v širino je širina, na katero se besedilo prelomi; to, kako globoko kliknete navzdol, ne omejuje besedila.
5. Nad risbo se odpre okno s kazalcem v njem. Vtipkajte `ALL DIMENSIONS ARE IN MILLIMETERS UNLESS NOTED`. Besede se med tipkanjem prelomijo na določeni širini.
6. Pritisnite {{key:Enter}}, da začnete nov odstavek, in vtipkajte `CHECK ON SITE`.
7. Pritisnite {{key:Mod+Enter}}, kliknite {{ui:V redu}} ali kliknite kjerkoli zunaj okna. Opomba je en objekt.

Vrstica nad oknom med tipkanjem spreminja {{ui:Višina}}, {{ui:Razmik vrstic}} (1 je običajno, 1.5 je za polovico več), {{ui:Širina}} (0 = brez prelamljanja) in {{ui:Poravnava}}. {{key:Esc}} ali {{ui:Prekliči}} okno zapre, ne da bi karkoli dodalo.

Možnosti pri drugem kotu: `H` višina, `J` poravnava (`TL` zgoraj levo … `BR` spodaj desno: kot ali sredina okna, ki ostane na mestu), `L` razmik vrstic, `R` zasuk, `W` vtipkana širina namesto drugega kota.

:::note
Ko je okno odprto, {{key:Space}} vtipka presledek, {{key:Enter}} pa začne nov odstavek. Shranjena datoteka DWG ohrani odstavčno besedilo kot MTEXT; DXF R12 nima odstavčnega besedila, zato je vsaka vrstica shranjena kot samostojno besedilo.
:::

### Več posameznih vrstic namesto tega

{{cmd:TEXT}} (`DT`) zahteva eno vrstico naenkrat: vsak {{key:Enter}} začne naslednjo vrstico, 1.667-krat nižje od višine besedila, in vsaka vrstica je svoj objekt. Za zaključek pritisnite {{key:Enter}} na prazni vrstici.

## Možnosti poravnave

| Možnost | Točka, ki jo kliknete, je |
|---|---|
| Levo (privzeto) | Levi konec osnovne črte |
| Središče | Sredina osnovne črte |
| Desno | Desni konec osnovne črte |
| Sredina, MC | Sredina besedila, po širini in navpično |
| TL | Zgornji levi kot |

## Uredite besedilo

1. Dvokliknite besedilni objekt. Odpre se v istem oknu kot novo odstavčno besedilo, s kazalcem na koncu.
2. Spremenite besede.
3. Pritisnite {{key:Mod+Enter}} ali kliknite zunaj okna. Besedilo v risbi se spremeni; {{key:Esc}} pusti, kakor je bilo.

{{cmd:TEXTEDIT}} (`ED`) naredi enako: izberete eno besedilo za drugim, ob koncu pa pritisnete {{key:Enter}}.

Če želite besedilo spremeniti v desnem podoknu, ga izberite: {{ui:Besedilo}}, {{ui:Višina}}, {{ui:Širina preloma}} (0 = brez prelamljanja), {{ui:Razmik vrstic}}, {{ui:Zasuk}}, položaj X in Y ter {{ui:Poravnava}}. Seznam {{ui:Poravnava}} ponuja tudi Spodaj levo, ki ga včasih uporablja besedilo iz drugih programov.

## Oblikovanje v odstavčnem besedilu iz drugih programov

Odstavčno besedilo v DWG ali DXF lahko vsebuje kode: barve po besedah, krepko in poševno, podčrtano, nadčrtano in prečrtano, zložene ulomke, kot je 1/2, in drugačno višino posamezne besede. CadCraft te kode ohrani, jih izriše (na zaslonu in v izrisanem PDF) in jih shrani nespremenjene.

Ko takšno besedilo urejate (dvoklik, {{cmd:TEXTEDIT}}, polje Besedilo v desnem podoknu ali {{cmd:FIND}} z zamenjavo), urejate njegove navadne besede. Beseda, ki jo vtipkate, gre v run ob njej in prevzame njeno barvo in slog; druge kode ostanejo, kjer so. Če znova vtipkate številke zloženega ulomka, ta ulomek postane navadno besedilo. Nastavitev celotnega besedila iz polja Besedilo ohrani kode samo tam, kjer lahko ugotovi, katere besede so ostale.

Imena pisav (`\F`) se ohranijo in shranijo, vse pa se riše v eni pisavi v slogu Helvetica. Za vtipkavanje kod še ni orodne vrstice.

## Kažite na nekaj: večkratne vodilke

{{ui:Vodilka}} v skupini {{ui:Opombe}} ({{cmd:MLEADER}}, `MLD`) nariše puščico, vodilno črto, kratek vodoravni del in opombo kot en objekt.

1. Kliknite {{ui:Vodilka}}. Pri pozivu `Določite lokacijo puščice vodilke` kliknite, na kaj se opomba nanaša.
2. Pri pozivu `Določite lokacijo vodoravnega dela vodilke` kliknite, kam naj gre opomba. Vodoravni del se obrne proti strani, ki ste jo kliknili.
3. Vtipkajte opombo v okno, ki se odpre, in pritisnite {{key:Mod+Enter}}.

`A` in `L` pri prvem vprašanju nastavita velikost puščice in dolžino vodoravnega dela; višina besedila je {{ui:Višina besedila}} za nove kote, pomnožena z {{ui:Skupno merilo}}. Za spremembo besed dvokliknite večkratno vodilko. Ročice premikajo puščico in vodoravni del; opomba sledi vodoravnemu delu. V {{ui:Lastnosti}}: {{ui:Besedilo}}, {{ui:Višina}}, {{ui:Širina preloma}}, {{ui:Velikost puščice}} in {{ui:Dolžina vodoravnega dela}}.

:::note
Večkratne vodilke se v DWG shranijo kot prave večkratne vodilke. DXF v R12 ali 2000 nima večkratnih vodilk, zato so tam shranjene kot črte, puščica in besedilo, ki jih rišejo.
:::

## Označite spremembe z revizijskim oblakom

{{ui:Opombe}} › {{ui:Več}} › {{ui:Revizijski oblak}} ({{cmd:REVCLOUD}}, `RC`) nariše oblak lokov okoli spremenjenega. Zgodovina prikaže dolžino loka in vrsto, ki jo bo uporabil.

- **Pravokotni** (prvič): kliknite dva kota.
- `P` **Večkotni**: kliknite kote, {{key:Enter}} zaključi oblak.
- `F` **Prostoročni**: kliknite, kjer se začne, in premikajte kazalec okoli območja brez klikanja; lok se doda vsako dolžino loka. Kliknite ali pritisnite {{key:Enter}}, da ga zaključite.
- `O` **Objekt**: izberite zaprto polilinijo, krožnico ali elipso (ali črto, lok ali odprto polilinijo); postane oblak. `Obrni smer?` `Da (Y)` obrne loke navznoter.
- `A` **Dolžina loka**: dolžina vsakega loka. Izberite tako, ki ustreza merilu izrisa.

Oblak je zaprta polilinija iz lokov, zato se shrani v vseh formatih.

## Poiščite in zamenjajte besede

{{ui:Urejanje}} › {{ui:Več}} › {{ui:Poišči in zamenjaj}} ({{cmd:FIND}}) pregleda besedilo, vrednosti atributov blokov in besedilo kot na odprtem zavihku (ali samo v izbranih objektih).

1. Vtipkajte besede v {{ui:Poišči}}. Seznam prikaže vsako mesto, kjer se pojavijo, in število.
2. Izberite {{ui:Razlikuj velike in male črke}}, {{ui:Samo cele besede}} ali {{ui:Uporabi nadomestne znake (* in ?)}}, če jih potrebujete, in odznačite, kar naj ne bo pregledano.
3. Kliknite {{ui:Izberi najdeno}}, da izberete te objekte, ali vtipkajte nove besede v {{ui:Zamenjaj z}} (seznam prikaže, v kaj se vsaka spremeni) in kliknite {{ui:Zamenjaj vse}}. En {{key:Mod+Z}} razveljavi vse zamenjave.

Izmerjena vrednost kote ni besedilo, zato se nikoli ne zamenja: v `<> TYP.` lahko zamenjate samo `TYP.`.

## Skrijte črte za oznako

1. Izberite besedila, vtipkajte {{cmd:TEXTMASK}} in pritisnite {{key:Enter}}.
2. `B` nariše ozadje risbe za njimi; `C` zahteva številko barve. `O` odstrani masko.
3. `Faktor odmika obrobe`: {{key:Enter}} ohrani 1.5, pol višine besedila okoli besedila.

Maska prekrije črte pod besedilom, na zaslonu in pri izrisu. DWG 2004 ali novejši in DXF 2000 jo ohranijo; format DWG 2000 in DXF R12 ne moreta, shranjevanje pa to pove.

## Pisava

Vse besedilo se riše v pisavi v slogu Helvetica, na zaslonu in v PDF. Besedilo iz odprtih risb ohrani svoje besede, višino in položaj, ne pa prvotne pisave (ime pisave v odstavčnem besedilu se v datoteki ohrani, glejte zgoraj).

V izrisanih PDF se besedilo v katerikoli evropski pisavi, cirilici ali grščini izriše kot samo sebe (PDF nosi črke, ki jih potrebuje, in besedilo lahko še vedno izberete in iščete). Kitajsko, japonsko in korejsko besedilo se prav tako izriše kot samo sebe (izris ob prvi potrebi pridobi večjo pisavo). Arabsko, perzijsko, urdu in hebrejsko besedilo se prav tako izriše kot samo sebe (glejte naslednji razdelek). Znaki, za katere nobena pisava nima črke, se izrišejo kot „?“, zgodovina pa pove, koliko jih je bilo.

## Desnosmerno besedilo: arabščina, perzijščina, urdu, hebrejščina

Besedilo vtipkajte kot kjerkoli drugje: {{cmd:TEXT}} in {{cmd:MTEXT}} vsako vrstico narišeta v bralnem vrstnem redu. Vrstica, katere prva črka je arabska ali hebrejska, se bere od desne proti levi; števila in latinske besede v njej ohranijo svoj vrstni red od leve proti desni, črke arabskega pisma pa so povezane. Vrstica, ki se začne z latinsko črko, ostane od leve proti desni, z desnosmernimi besedami na svojih mestih znotraj nje. Vsak odstavek večvrstičnega besedila ima svojo smer, prelomljen odstavek pa to smer ohrani na vsaki vrstici.

Besedilo se shrani tako, kot ste ga vtipkali, zato datoteke DWG in DXF izmenjujejo z drugimi programi nespremenjeno. Vstavitvena točka in poravnava ({{ui:Levo}}, {{ui:Središče}}, {{ui:Desno}}) pomenita isto stran kot pri vsakem besedilu: desnosmerna opomba, ki naj visi z desnega konca, potrebuje {{ui:Desno}}.

Na zaslonu črke pridejo iz pisav vašega sistema. V izrisanem PDF hebrejščina uporabi isto vdelano pisavo kot latinsko besedilo; arabsko pisano besedilo sproži pridobitev še ene pisave (manj kot 1 MB, enkrat), nato se celoten PDF izriše v tej pisavi. Ta pisava nima lastne oblike za tri znake urdu (heh goal, yeh barree in urdu polna pika): izrišejo se v obliki najbližje arabske črke. Risba, ki ima tako arabsko pisano kot kitajsko, japonsko ali korejsko besedilo, izriše eno od obeh kot „?“, ker izris nosi eno pisavo. Besedilo v naloženi pisavi SHX se razvrsti in poveže, če pisava ima črke na njihovih Unicode mestih; za stare pisave, katerih črke so že oblikovane, uporabite {{ui:Obrni}} v {{cmd:SHXFONTS}} kot prej.

## Pogoste napake

- **Besedilo je premajhno, da bi ga videli.** Višina je v enotah risbe. V veliki risbi uporabite veliko višino (glejte zgoraj) ali povečajte prikaz.
- **Ukaz se je končal po eni vrstici.** Na prazni vrstici v {{cmd:TEXT}} ste pritisnili {{key:Enter}}. Ukaz zaženite znova ali uporabite odstavčno besedilo (`T`), kjer {{key:Enter}} začne nov odstavek.
- **`T` je odprl okno namesto poziva za vrstico.** Kot v AutoCADu je `T` odstavčno besedilo ({{cmd:MTEXT}}); enovrstično besedilo je `DT`.
- **Besedilo se v AutoCADu prelomi na drugem mestu.** CadCraft prelamlja z širinami znakov pisave Helvetica; druga pisava lahko besedo spravi na vrstico nekoliko drugače.
- **Besedilo v zrcalni kopiji.** Postavljeno je zrcalno, vendar ostane berljivo od leve proti desni.
