---
title: Nastavenia CadCraftu
summary: Nastavenia patriace k aplikácii na kreslenie: veľkosť kurzora, kde visí vložená kópia od kurzora, čo klik urobí s výberom, koľko riadkov používa panel nástrojov, kde je riadok príkazov a aká je vysoká, kompaktná horná oblasť a indikátor rohu.
keywords: riadok príkazov, plávajúci riadok príkazov, plávať, ukotviť, jeden riadok, f2, história príkazov, commandline, cmdline, toparea, horná oblasť, kompaktný, cursorsize, kurzor na celú obrazovku, od okraja po okraj, riadky panela nástrojov, zobrazenie panela nástrojov, ctrl f1, nastavenia, predvoľby, voľby, indikátor rohu, pohľad z hora, os, ikona UCS, kurzor, zameriavač, výberový štvorček, bod vloženia, základný bod, klik na objekty, výber, pickadd, shift, obnoviť
from: ae1a81db
---

Otvorte {{ui:Nastavenia}} ozubeným kolieskom na lište aplikácie alebo klávesom {{key:Mod+,}}. Prvá karta, {{ui:CadCraft}}, obsahuje nastavenia patriace tejto aplikácii; {{ui:Všeobecné}} obsahuje tie, ktoré zdieľajú všetky aplikácie rodiny (téma, veľkosť textu panelov a šírky, vzhľad a poradie panela nástrojov). Nastavenia CadCraftu existujú iba v aplikácii: meníte ich tu a tento prehliadač si ich zapamätá. {{ui:Obnoviť nastavenia CadCraftu}} vráti každé z nich na začiatok.

## Kurzor

**Malý**, **Stredný** (začiatočný), **Veľký** alebo **Celá obrazovka**: veľkosť zameriavača a výberového štvorčeka v kresbe. Väčší výberový štvorček vyberá objekty aj z trochu väčšej vzdialenosti, čo pomáha na dotykovej obrazovke alebo pri veľmi jemnom výkrese.

**Celá obrazovka** vedie dve čiary zameriavača od okraja k okraju výkresu, aj keď nebeží žiadny príkaz, takže môžete očami overiť, že dve veci sedia v rovnej línii cez celý pohľad. Keď je pohľad rozdelený, čiary zostanú v tabuli, s ktorou pracujete. To isté ako {{cmd:CURSORSIZE}} 100 v AutoCAD: napíšte {{cmd:CURSORSIZE}} a 100 pre celú obrazovku; menšie číslo vyberie najbližšiu veľkosť (pod 5 Malý, 5 až 9 Stredný, 10 až 99 Veľký).

## Bod vloženia

Kde visí vložená kópia od kurzora po {{key:Mod+V}} ({{cmd:PASTECLIP}}), kým neklepnete:

- **Ľavý dolný roh** (začiatočný): ľavý dolný roh rozsahu skopírovaných objektov, ako v AutoCAD.
- **Stred**: stred ich rozsahu. Hodí sa na umiestnenie symbolu od oka.

Kópia urobená príkazom `COPYBASE` vždy visí od základného bodu, ktorý ste vybrali. {{ui:Prilepiť na rovnaké miesto}} ({{key:Mod+Shift+V}}) toto nastavenie ignoruje: zachová pôvodné súradnice. Pozrite [Kopírovanie, vkladanie a duplikovanie](topic:copy-paste).

## Klikanie na objekty

Čo klik v kresbe urobí s výberom, keď nebeží žiadny príkaz:

- **Pridá do výberu** (začiatočný): každý klik alebo okno pridá objekty; {{key:Shift}}+klik alebo {{key:Shift}}+okno ich vyberie von.
- **Nahradí výber**: klik alebo okno vyberie iba to, čo zachytí. {{key:Shift}}+klik pridá objekt alebo odoberie ten, ktorý je už vybraný; {{key:Shift}}+okno pridá.

Pri výzve `Select objects:` vnútri príkazu kliky vždy pridávajú (a {{key:Shift}} odoberá), nech hovorí toto nastavenie čokoľvek. Pozrite [Výber objektov](topic:select-objects).

## Klik na prázdne miesto

Čo klik tam, kde nie je žiadny objekt, urobí, keď nebeží žiadny príkaz. V každom prípade spustí výberové okno (druhý klik ho dokončí).

- **Zruší výber** (začiatočný): čokoľvek bolo vybrané, sa pustí. Podržte {{key:Shift}} pri kliku, aby sa ponechalo.
- **Ponechá výber**: výber zostane, ako v iných programoch na kreslenie; okno ho dopĺňa. Stlačte {{key:Esc}}, aby ste výber zrušili.

## Ťahanie na výber

Čo stlačenie a ťahanie na prázdnom mieste nakreslí:

- **Lasso** (začiatočný): voľný obrys. Ak ťaháte najprv doprava, vyberie to, čo leží celé vnútri, ak najprv doľava, to, ččo sa dotýka; {{key:Space}} počas ťahania prepína medzi oknom, prekrížením a plotom.
- **Obdĺžnik**: rámček, ako keď kliknete a druhým kliknutím ho nakreslíte.

{{cmd:LASSOMODE}} `1` alebo `0` nastaví to isté. Pozrite [Výber lassom](topic:lasso-selection).

## Ťahanie na orezanie a predĺženie

Čo stlačenie na prázdnom mieste a ťahanie robí v {{cmd:TRIM}} a {{cmd:EXTEND}}:

- **Dráha** (začiatočná): voľná dráha; každý kus, ktorý pretína, sa orezáva (alebo predlžuje).
- **Okno**: rámček; každý kus, ktorého sa dotýka, sa orezáva, ako to robí voľba `C`.

Pozrite [Orezanie a predĺženie](topic:trim-and-extend).

## Poloha panela nástrojov

{{ui:CadCraft}} › {{ui:Poloha panela nástrojov}}: **Hore** (začiatočná, ako to bolo vždy), **Dole**, **Vľavo** alebo **Vpravo**. Vľavo alebo vpravo sa skupiny nástrojov skladajú do stĺpca, ktorý sa posúva, keď je vyšší než okno, a tlačidlá sa zalamujú po dvoch alebo troch na riadok. Voľba sa uloží s vašimi nastaveniami a {{cmd:TOOLBARDOCK}} (`TBDOCK`) ju nastaví z riadku príkazov. {{ui:Všeobecné}} › {{ui:Obnoviť rozloženie}} vráti panel nástrojov na vrch.

Lišty štýlov ponuky sú vnútri panela nástrojov a pohybujú sa s ním, ale štýl {{ui:Pás kariet}} je určený na beh pozdĺž hornej alebo dolnej hrany: na strane dostane úzky stĺpec, ktorý sa posúva. Na telefóne zostáva panel nástrojov tam, kam ho umiestni rozloženie pre telefón.

## Riadky panela nástrojov

Koľko riadkov nástroje používajú nad kresbou, v paneli nástrojov CadCraft a v štýloch {{ui:Klasické kreslenie}} a {{ui:Pás kariet}}:

- **Zalomiť podľa šírky** (začiatočné): nástroje sa zalomia podľa šírky okna.
- **2 riadky**: najviac dva riadky. Keď sa nástroje pri tejto šírke zalomia na dva riadky alebo menej, iba sa zalomia; inak sú v dvoch riadkoch, ktoré sa posúvajú do strán.
- **1 riadok**: jeden riadok, ktorý sa posúva do strán, čo kresbe dá najviac miesta.

{{key:Shift+Ctrl+F1}} prepína medzi tromi, a {{cmd:TOOLBARROWS}} nastaví jeden. Čo tlačidlá ukazujú (ikony a text, iba ikony alebo iba text), je nastavenie {{ui:Všeobecné}} › {{ui:Panel nástrojov}}; {{key:Ctrl+F1}} prepína medzi nimi a {{cmd:TOOLBAR}} ich nastaví.

## Riadok príkazov

Riadok príkazov môže zostať ukotvený pod kresbou, ako vždy, alebo sa plávať nad ňou, a môže byť tenký ako jeden riadok.

- **Plávajúci.** Potiahnite úchyt na jeho ľavom konci do kresby alebo vyberte {{ui:Plávať nad výkresom}} v jeho ponuke {{ui:Možnosti riadku príkazov}} (tri bodky na pravom konci). Úchyt znova potiahnite, aby ste ho presunuli; jeho miesto sa zachová, keď sa zmení veľkosť okna. Potiahnite jeho pravý okraj, aby bol širší alebo užší. Pustite ho na stavový riadok alebo vyberte {{ui:Ukotviť dole}}, aby sa znova ukotvil.
- **Tenší alebo vyšší.** Potiahnite jeho horný okraj: každý krok je jeden riadok histórie. Na nulu riadkov je to **jednoriadkový riadok príkazov**: iba výzva a to, čo píšete, a nová správa sa na chvíľu zobrazí nad ním. Dvojklik na hornom okraji prepína medzi jedným riadkom a výškou, akú ste mali.
- **História.** {{key:F2}} alebo hodinový gombík na riadku príkazov ({{ui:História príkazov (F2)}}) otvorí celú históriu nad riadkom (pod ním, keď riadok pláva blízko hornej časti okna). Písanie stále ide na riadok príkazov; {{key:PageUp}} a {{key:PageDown}} posúvajú históriu a {{key:Esc}}, {{key:F2}} alebo klik inde ju zatvoria. Váš vlastný kláves na F2 má prednosť pred tým.
- **Z klávesnice.** Úchyt je tlačidlo: keď je zameraný, šípky posúvajú plávajúci riadok (so {{key:Shift}} väčšími krokmi); {{key:Up}} vysunie ukotvený riadok a {{key:Down}} na dolnom okraji ho ukotví. Horný okraj je oddeľovač: {{key:Up}} a {{key:Down}} pridávajú alebo uberajú riadok, {{key:Home}} ho urobí jednoriadkovým, {{key:End}} najvyšším. Čítačky obrazovky stále počujú každú správu, aj v jednoriadkovom riadku príkazov.

{{ui:CadCraft}} › {{ui:Riadok príkazov}} má rovnaké voľby: {{ui:Ukotvený dole}} alebo {{ui:Plávajúci}}, {{ui:Zobrazené riadky histórie}} (0 až 12) a {{ui:Štandardná výška}}. {{cmd:COMMANDLINE}} (`CMDLINE`) ich nastaví z riadku príkazov. Miesto a výška sa pre CadCraft uchovávajú v tomto prehliadači spolu s ostatným rozložením, takže uložené pracovné prostredie ich zachová; {{ui:Všeobecné}} › {{ui:Obnoviť rozloženie}} ukotví riadok príkazov znova na jeho štandardnú výšku. Na telefóne riadok príkazov zostáva ukotvený s jedným riadkom histórie; tlačidlo histórie tam funguje tiež.

{{ui:CadCraft}} › {{ui:Písmená možností}} uchováva písmená, ktoré ste si zvolili pre voľby príkazov: {{ui:Upraviť…}} otvorí súbor, {{ui:Importovať…}} ho nahradí súborom, ktorý vyberiete, a {{ui:Exportovať}} ho uloží. Pozrite [Dajte voľbám príkazov vlastné písmená](topic:option-letters).

Keď je okno krátke a kontrola rozloženia ponúkne tesnejšie rozloženie, jej {{ui:Áno}} tiež prepne riadok príkazov na jeden riadok, ak je kresba po paneloch stále krátka.

## Horná oblasť

{{ui:CadCraft}} › {{ui:Horná oblasť}}: **Štandardná** (začiatočná) alebo **Kompaktná**. Kompaktná udrží lišty nad kresbou malé vo všetkých štýloch ponuky: názvy skupín a slová pod ikonami zmiznú (popisy a čítačky obrazovky ich majú stále) a tlačidlá sú tesnejšie. Funguje spolu s [Riadky panela nástrojov](topic:settings#toolbar-rows): Kompaktná a **1 riadok** dajú kresbe najviac miesta. {{cmd:TOPAREA}} to nastaví.

## Indikátor rohu

Čo sedí v rohu kresby:

- **Automaticky** (začiatočný): ikona osí na karte {{ui:Model}} a pohľadová kocka na karte {{ui:3D}}.
- **Ikona osí**: značka X a Y v ľavom dolnom rohu karty {{ui:Model}} a malá značka X, Y a Z na karte {{ui:3D}}.
- **Pohľadová kocka**: kocka v pravom hornom rohu oboch kariet. Na karte {{ui:Model}} zobrazuje výkres zhora a klik na inú stranu, hranu alebo roh otvorí kartu {{ui:3D}} pozerajúcu odtiaľ. Na karte 3D sa otáča s pohľadom: klikom sa pozriete z boku, ťahaním obiehate a dom sa vráti na izometrický pohľad. Pozrite [Model v 3D](topic:3d-solids).
- **Žiadny**: v rohu nič nie je.

Listy nezobrazujú ani jedno.

## Dĺžka a plocha výberu

- **Na stavovom riadku** (začiatočné): keď sú objekty vybrané, stavový riadok zobrazuje ich celkovú dĺžku a celkovú plochu uzavretých. Pozrite [Súčty výberu](topic:properties-panel#totals-of-a-selection).
- **Skryté**: stavový riadok ich vynechá. Vlastnosti ich stále ukazujú pre viac objektov.

## Mriežka, ortogonálne a uchopenia

Tieto nie sú v dialógovom okne: tlačidlá {{ui:Mriežka}}, {{ui:Ortogonálne}} a {{ui:Uchopenie}} na stavovom riadku (alebo {{key:F7}}, {{key:F8}}, {{key:F3}}) a zoznam uchopení objektov vedľa nich sa zapamätajú, keď ich opustíte. Pozrite [Uchopenie na body na objektoch](topic:object-snaps).
