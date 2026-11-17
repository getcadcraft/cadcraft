---
title: Nastavenia CadCraft
summary: Nastavenia patriace k aplikácii na kreslenie: veľkosť kurzora, kam visí prilepená kópia od kurzora, čo klik robí s výberom, koľko riadkov používa panel nástrojov, kde je riadok príkazov a aká je vysoký, kompaktná horná oblasť a indikátor rohu.
keywords: riadok príkazov, plávajúci riadok príkazov, plávať, ukotviť, jeden riadok, f2, história príkazov, commandline, cmdline, horná oblasť, horná oblasť, kompaktné, veľkosť kurzora, celá obrazovka, kurzor cez celú obrazovku, od okraja k okraju, riadky panela nástrojov, zobrazenie panela nástrojov, ctrl f1, nastavenia, predvoľby, možnosti, indikátor rohu, kocka pohľadu, ikona osí, ikona súradníc, kurzor, kríž, výberový štvorček, bod prilepenia, základný bod, klikanie na objekty, výber, pickadd, shift, obnoviť
from: 0896eb42
---

Otvorte {{ui:Nastavenia}} ozubeným kolieskom v paneli aplikácie alebo {{key:Mod+,}}. Prvá karta, {{ui:CadCraft}}, obsahuje nastavenia patriace tejto aplikácii; {{ui:Všeobecné}} obsahuje tie, ktoré zdieľajú všetky aplikácie rodiny (motív, veľkosť textu a šírka panelov, vzhľad a poradie panela nástrojov). Nastavenia CadCraft existujú len v aplikácii: meníte ich tu a tento prehliadač si ich zapamätá. {{ui:Obnoviť nastavenia CadCraft}} vráti každé z nich na začiatok.

## Kurzor

**Malý**, **Stredný** (na začiatku), **Veľký** alebo **Celá obrazovka**: veľkosť kríža a výberového štvorčeka vo výkrese. Väčší výberový štvorček vyberie objekty aj z trochu väčšej vzdialenosti, čo pomáha na dotykovej obrazovke alebo pri veľmi jemnom výkrese.

**Celá obrazovka** vedie dve čiary kríža od okraja k okraju výkresu, aj keď nebeží žiadny príkaz, takže môžete okom skontrolovať, že dve veci sedia v línii cez celý pohľad. Pri rozdelenom pohľade čiary zostanú v okne, v ktorom pracujete. Rovnako ako {{cmd:CURSORSIZE}} 100 v AutoCAD: zadajte {{cmd:CURSORSIZE}} a 100 pre celú obrazovku; menšie číslo vyberie najbližšiu veľkosť (pod 5 Malý, 5 až 9 Stredný, 10 až 99 Veľký).

## Bod prilepenia

Kam visí prilepená kópia od kurzora po {{key:Mod+V}} ({{cmd:PASTECLIP}}), kým nekliknete:

- **Ľavý dolný roh** (na začiatku): ľavý dolný roh rozsahu kopírovaných objektov, ako v AutoCAD.
- **Stred**: stred ich rozsahu. Vhodné na umiestnenie symbolu od oka.

Kópia vytvorená príkazom `COPYBASE` vždy visí od základného bodu, ktorý ste zvolili. {{ui:Prilepiť na rovnaké miesto}} ({{key:Mod+Shift+V}}) toto nastavenie ignoruje: ponechá pôvodné súradnice. Pozrite [Kopírovanie, prilepenie a duplikovanie](topic:copy-paste).

## Klikanie na objekty

Čo klik v kresbe robí s výberom, keď nebeží žiadny príkaz:

- **Pridáva k výberu** (na začiatku): každý klik alebo okno pridá objekty; {{key:Shift}}+klik alebo {{key:Shift}}+okno ich odoberie.
- **Nahrádza výber**: klik alebo okno vyberie len to, čo zachytí. {{key:Shift}}+klik pridá objekt alebo odoberie ten, ktorý už je vybraný; {{key:Shift}}+okno pridá.

Pri výzve `Select objects:` vnútri príkazu kliky vždy pridávajú (a {{key:Shift}} odoberá), bez ohľadu na toto nastavenie. Pozrite [Výber objektov](topic:select-objects).

## Kliknutie na prázdne miesto

Čo spraví klik tam, kde nie je objekt, keď nebeží žiadny príkaz. V oboch prípadoch začne výberové okno (druhý klik ho dokončí).

- **Vymaže výber** (na začiatku): to, čo bolo vybrané, sa uvoľní. Podržte {{key:Shift}} pri kliku, aby ste ho zachovali.
- **Ponechá výber**: výber zostane, ako v iných programoch na kreslenie; okno pridá k nemu. Stlačte {{key:Esc}}, aby ste výber vyčistili.

## Ťahanie pri výbere

Čo stlačenie a ťahanie na prázdnom mieste nakreslí:

- **Laso** (na začiatku): voľný obrys. Ak ťaháte najprv doprava, vyberie sa to, čo leží úplne vnútri, ak najprv doľava, to, čoho sa dotýka; {{key:Space}} počas ťahania prepína medzi oknom, prekrížením a ohradou.
- **Obdĺžnik**: rámček, ako ho kreslí klik a druhý klik.

{{cmd:LASSOMODE}} `1` alebo `0` nastavuje to isté. Pozrite [Výber lasom](topic:lasso-selection).

## Ťahanie pri orezaní a predĺžení

Čo stlačenie na prázdnom mieste a ťahanie robí v {{cmd:TRIM}} a {{cmd:EXTEND}}:

- **Cesta** (na začiatku): voľná cesta; každý kúsok, ktorý pretína, sa orezá (alebo predĺži).
- **Okno**: rámček; každý kúsok, ktorého sa dotkne, sa orezá, ako to robí možnosť `C`.

Pozrite [Orezať a predĺžiť](topic:trim-and-extend).

## Pozícia panela nástrojov

{{ui:CadCraft}} › {{ui:Pozícia panela nástrojov}}: **Hore** (na začiatku, ako to bolo vždy), **Dole**, **Vľavo** alebo **Vpravo**. Vľavo alebo vpravo sa skupiny nástrojov skladajú do stĺpca, ktorý sa posúva, keď je vyšší ako okno, a tlačidlá sa zalamujú po dva alebo tri na riadok. Voľba sa ukladá spolu s vašimi nastaveniami a {{cmd:TOOLBARDOCK}} (`TBDOCK`) ju nastaví z riadku príkazov. {{ui:Všeobecné}} › {{ui:Obnoviť rozloženie}} vráti panel nástrojov navrch.

Lišty štýlov ponuky sú vnútri panela nástrojov a pohybujú sa s ním, ale štýl {{ui:Pás kariet}} je určený na beh cez hornú alebo dolnú časť: na boku dostane úzky stĺpec, ktorý sa posúva. Na telefóne panel nástrojov zostáva tam, kam ho umiestni rozloženie telefónu.

## Riadky panela nástrojov

Koľko riadkov nástroje zaberajú nad výkresom, v paneli nástrojov CadCraft a v štýloch {{ui:Klasické kreslenie}} a {{ui:Pás kariet}}:

- **Zalomiť podľa šírky** (na začiatku): nástroje sa zalamujú podľa šírky okna.
- **2 riadky**: najviac dva riadky. Keď sa nástroje pri tejto šírke zalomia na dva riadky alebo menej, len sa zalomia; inak sú v dvoch riadkoch, ktoré sa posúvajú do strán.
- **1 riadok**: jeden riadok, ktorý sa posúva do strán, čo výkresu dáva najviac miesta.

{{key:Shift+Ctrl+F1}} prepína medzi tromi možnosťami a {{cmd:TOOLBARROWS}} jednu nastaví. To, čo tlačidlá zobrazujú (ikony a text, len ikony alebo len text), je nastavenie {{ui:Všeobecné}} › {{ui:Panel nástrojov}}; {{key:Ctrl+F1}} prepína medzi nimi a {{cmd:TOOLBAR}} ho nastaví.

## Riadok príkazov

Riadok príkazov môže zostať ukotvený pod výkresom, ako vždy, alebo sa vznášať nad ním, a môže byť tenký ako jeden riadok.

- **Plávajúci riadok.** Potiahnite úchyt na jeho ľavom konci do výkresu, alebo zvoľte {{ui:Plávať nad výkresom}} v jeho ponuke {{ui:Možnosti riadku príkazov}} (tri bodky na jeho pravom konci). Úchyt znova potiahnite a presuňte ho; jeho miesto sa zachová, keď sa zmení veľkosť okna. Potiahnite jeho pravý okraj a zúžte alebo rozšírte ho. Pustite ho na stavový riadok alebo zvoľte {{ui:Ukotviť dole}}, aby sa znova ukotvil.
- **Tenší alebo vyšší.** Potiahnite jeho horný okraj: každý krok je jeden riadok histórie. Až na nulu riadkov je to **riadok príkazov s jedným riadkom**: len výzva a to, čo napíšete, a nová správa sa na chvíľu zobrazí nad ním. Dvojklik na hornom okraji prepína medzi jedným riadkom a výškou, ktorú ste mali.
- **História.** {{key:F2}}, alebo tlačidlo hodín na riadku príkazov ({{ui:História príkazov (F2)}}), otvorí celú históriu nad riadkom (pod ním, keď je plávajúci riadok blízko hornej časti okna). Písanie stále ide na riadok príkazov; {{key:PageUp}} a {{key:PageDown}} posúvajú históriu a {{key:Esc}}, {{key:F2}} alebo klik inde ju zavrú. Vlastná klávesa na F2 má prednosť.
- **Z klávesnice.** Úchyt je tlačidlo: keď je zameraný, šípky posúvajú plávajúci riadok príkazov (so {{key:Shift}} väčšími krokmi); {{key:Up}} ukotvený riadok uvoľní a {{key:Down}} na spodnom okraji ho ukotví. Horný okraj je oddeľovač: {{key:Up}} a {{key:Down}} pridávajú alebo uberajú riadok, {{key:Home}} ho zmení na jeden riadok, {{key:End}} na najvyšší. Čítačky obrazovky stále počujú každú správu, aj v riadku príkazov s jedným riadkom.

{{ui:CadCraft}} › {{ui:Riadok príkazov}} má rovnaké voľby: {{ui:Ukotvený dole}} alebo {{ui:Plávajúci}}, {{ui:Zobrazené riadky histórie}} (0 až 12) a {{ui:Štandardná výška}}. {{cmd:COMMANDLINE}} (`CMDLINE`) ich nastaví z riadku príkazov. Miesto a výška sa pre CadCraft ukladajú v tomto prehliadači spolu s ostatným rozložením, takže uložené pracovné prostredie ich zachová; {{ui:Všeobecné}} › {{ui:Obnoviť rozloženie}} ukotví riadok príkazov znova na jeho štandardnej výške. Na telefóne riadok príkazov zostáva ukotvený s jedným riadkom histórie; tlačidlo histórie tam tiež funguje.

Keď je okno krátke a kontrola rozloženia ponúkne tesnejšie rozloženie, jej {{ui:Áno}} tiež prepne riadok príkazov na jeden riadok, ak je výkres stále krátky po paneloch nástrojov.

## Horná oblasť

{{ui:CadCraft}} › {{ui:Horná oblasť}}: **Štandardné** (na začiatku) alebo **Kompaktné**. Kompaktné udrží lišty nad výkresom malé vo všetkých štýloch ponuky: názvy skupín a slová pod ikonami zmiznú (popisky a čítačky obrazovky ich stále majú) a tlačidlá sú tesnejšie. Funguje to s [riadkami panela nástrojov](topic:settings#toolbar-rows): Kompaktné a **1 riadok** dávajú výkresu najviac miesta. {{cmd:TOPAREA}} to nastaví.

## Indikátor rohu

Čo sedí v rohu výkresu:

- **Automaticky** (na začiatku): ikona osí na karte {{ui:Model}} a kocka pohľadu na karte {{ui:3D}}.
- **Ikona osí**: značka X a Y v ľavom dolnom rohu karty {{ui:Model}} a malá značka X, Y a Z na karte {{ui:3D}}.
- **Kocka pohľadu**: kocka v pravom hornom rohu oboch kariet. Na karte {{ui:Model}} ukazuje výkres zhora a klik na inú stenu, hranu alebo roh otvorí kartu {{ui:3D}} pozerajúcu odtiaľ. Na karte 3D sa otáča s pohľadom: kliknite, aby ste sa pozreli zo strany, ťahajte na obiehanie a domček sa vráti do izometrického pohľadu. Pozrite [Model v 3D](topic:3d-solids).
- **Žiadna**: nič v rohu.

Listy neukazujú nič z toho.

## Dĺžka a plocha výberu

- **V stavovom riadku** (na začiatku): keď sú objekty vybrané, stavový riadok zobrazuje ich celkovú dĺžku a celkovú plochu uzavretých. Pozrite [Súčty výberu](topic:properties-panel#totals-of-a-selection).
- **Skryté**: stavový riadok ich vynechá. Vlastnosti ich stále zobrazia pre viac objektov.

## Mriežka, ortogonálne a uchopenia

Tieto nie sú v dialógu: tlačidlá {{ui:Mriežka}}, {{ui:Ortho}} a {{ui:Uchopenie}} v stavovom riadku (alebo {{key:F7}}, {{key:F8}}, {{key:F3}}) a zoznam uchopení objektu vedľa nich si zapamätajú, ako ich necháte. Pozrite [Uchopenie k bodom na objektoch](topic:object-snaps).
