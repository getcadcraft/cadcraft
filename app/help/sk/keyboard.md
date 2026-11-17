---
title: Klávesnica a myš
summary: Každá klávesa, akcia myši a klávesa riadku príkazov v kresliacej aplikácii CadCraft, tak ako ich spracováva kód.
keywords: klávesnica, skratky, klávesy, myš, koliesko, posun, zväčšenie, pravé tlačidlo, stredné tlačidlo, f3, f7, f8, ctrl, klávesa Command, horúce klávesy, kopírovať, vystrihnúť, prilepiť, duplikovať, schránka, vybrať všetko
from: a2608a29
---

Skratky sú zobrazené pre váš počítač. Na Macu každá skratka {{key:Mod}} používa klávesu Command, funguje však aj klávesa Control. Ako sa klávesy zapisujú a ako na Macu používať klávesy F, je v [Klávesy, myši a touchpady](common:keys).

## Zadávanie príkazov

| Klávesa | Čo robí |
|---|---|
| Ľubovoľné písmeno, číslica alebo znak | Ide do riadku príkazov, nech je ukazovateľ kdekoľvek, pokiaľ nemá kurzor žiadne pole v paneli |
| {{key:Enter}} | Odošle, čo ste napísali. Na prázdnej výzve: zopakuje posledný príkaz, ukončí príkaz, dokončí výber alebo prijme predvolenú hodnotu v `<…>` |
| {{key:Space}} | Rovnako ako {{key:Enter}}, okrem prípadu, keď CadCraft žiada text (text, názvy blokov, text kóty), kde vloží medzeru |
| {{key:Esc}} | Zruší príkaz. Keď nebeží žiadny príkaz: zruší presun úchytu alebo výberový rámik, potom zruší výber |
| {{key:Tab}} | Prijme navrhovaný príkaz zobrazený vpravo od riadku príkazov. Keď nič nie je napísané a ukazovateľ je nad prekrývajúcimi sa objektami: zvýrazní ďalší z nich (kliknutím ho vyberiete) |
| {{key:Up}} {{key:Down}} | Prechádza riadkami, ktoré ste zadali skôr (posledných 100) |

## Kreslenie a úpravy

| Klávesa | Čo robí |
|---|---|
| {{key:Mod+Z}} | Vráti späť posledný príkaz |
| {{key:Mod+Y}} alebo {{key:Mod+Shift+Z}} | Znova |
| {{key:Mod+A}} | Vyberie každý objekt, ktorý možno upraviť, na otvorenej karte ({{cmd:SELECTALL}}). Ak ste niečo zadali do riadku príkazov, vyberie tento text |
| {{key:Delete}} | Zmaže vybrané objekty ({{cmd:ERASE}}), pokiaľ ste niečo nezadali do riadku príkazov |
| {{key:Backspace}} | Zmaže vybrané objekty, keď riadok príkazov nemá kurzor; v riadku príkazov zmaže to, čo ste zadali |
| {{key:Esc}} | Keď nebeží žiadny príkaz: zruší výber ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Uloží kópiu vo formáte výkresu (DWG alebo DXF) |
| {{key:Mod+Shift+S}} | Uložiť ako: vyberte DWG alebo DXF a potom uložte kópiu |
| {{key:Mod+O}} | Otvorí DWG alebo DXF |
| {{key:Mod+P}} | Vykresliť do PDF |

Späť, znova, vybrať všetko a vykresliť nefungujú, kým beží príkaz: najprv stlačte {{key:Esc}}.

## Kopírovanie, vystrihnutie a prilepenie

| Klávesa | Čo robí |
|---|---|
| {{key:Mod+C}} | Skopíruje výber do schránky ({{cmd:COPYCLIP}}). Ak nič nie je vybrané: CadCraft vyžiada objekty |
| {{key:Mod+X}} | Vystrihnúť: skopíruje výber a potom ho zmaže ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Prilepiť: kópia sa pohybuje za kurzorom; kliknite alebo zadajte bod, aby ste ju umiestnili ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Prilepiť na rovnaké miesto: na súradnice, z ktorých bola skopírovaná ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Duplikovať: kópia výberu sa pohybuje s ukazovateľom; kliknutím ju umiestnite, {{key:Esc}} nezanechá nič ({{cmd:DUPLICATE}}) |

Rovnaké akcie sú v skupine {{ui:Upraviť}} na paneli nástrojov ({{ui:Kopírovať}}, {{ui:Prilepiť}}) a v jeho ponuke {{ui:Viac}}. Kým beží iný príkaz, dokončite ho alebo najprv stlačte {{key:Esc}}; stlačenie {{key:Mod+V}} alebo {{key:Mod+D}} znova, keď kópia sleduje kurzor, začne odznova. Keď ste niečo zadali do riadku príkazov alebo keď príkaz žiada text, tieto klávesy kopírujú, vystrihujú a prilepujú tento text. Pozri [Kopírovanie, prilepenie a duplikovanie](topic:copy-paste).

## Prepínače

| Klávesa | Prepínač | Tlačidlo stavového riadka |
|---|---|---|
| {{key:F3}} | Uchopenie objektu zapnuté alebo vypnuté | {{ui:Uchopenie}} |
| {{key:F7}} | Mriežka zapnutá alebo vypnutá | {{ui:Mriežka}} |
| {{key:F8}} | Ortho zapnuté alebo vypnuté | {{ui:Ortho}} |
| {{key:F10}} | Polárne sledovanie zapnuté alebo vypnuté | {{ui:Polárne}} |
| {{key:F11}} | Sledovanie uchopenia objektu zapnuté alebo vypnuté | {{ui:Sledovanie}} |
| {{key:F12}} | Dynamické zadávanie zapnuté alebo vypnuté | {{ui:Dyn}} |

:::mac
Na Macu sú F3, F7 a F8 zvyčajne klávesy Mission Control a médií. Držte s nimi **fn** alebo zapnite štandardné funkčné klávesy v Nastaveniach systému, ako je popísané v [Klávesy, myši a touchpady](common:keys). Tlačidlá stavového riadka fungujú vždy.
:::

:::firefox
F7 vo Firefoxe môže tiež ponúknuť zapnutie prehliadania s kurzorom. Vyberte **Nie** a ak sa to opakuje, použite tlačidlo {{ui:Mriežka}}.
:::

## Pomocník

| Klávesa | Čo robí |
|---|---|
| {{key:F1}} | Otvorí alebo zavrie túto pomoc vedľa výkresu. Funguje aj počas behu príkazu a nikdy sa nedostane do riadku príkazov. |
| {{key:Esc}} | Keď je kurzor v paneli pomocníka: vymaže hľadanie alebo zavrie panel |

Tlačidlo {{ui:Pomocník}} na hornom paneli robí to isté ako {{key:F1}}. Kým píšete do vyhľadávacieho poľa pomoci, nič sa nedostane do riadku príkazov. Kliknutím na výkres vrátite klávesy aplikácii CadCraft; panel zostane otvorený vedľa neho.

:::mac
Na klávesnici Macu podržte **fn** a stlačte F1, alebo kliknite na {{ui:Pomocník}}.
:::

## Obrazovka

| Klávesa | Čo robí |
|---|---|
| {{key:Ctrl+Shift+F}} | Prepína normálny režim, celú obrazovku a celú obrazovku so skrytými panelmi. Používa kláves Control na každom počítači vrátane Macu. |
| {{key:Left}} {{key:Right}} | Keď je pod výkresom zamerená karta: predchádzajúca alebo nasledujúca karta |

V celej obrazovke môže prehliadač použiť prvé {{key:Esc}} na ukončenie celej obrazovky. Na zrušenie príkazu stlačte {{key:Esc}} znova.

## Dialógy

| Klávesa | Čo robí |
|---|---|
| {{key:Esc}} | Zavrie dialóg ({{ui:Vykresliť do PDF}}, alebo otázku ako "Neuložené zmeny", kde znamená {{ui:Zrušiť}}) |
| {{key:Tab}} | Prechádza medzi nastaveniami a tlačidlami dialógu |

Kým je dialóg otvorený, klávesy výkresu sú vypnuté.

## Polia v paneli

V poli na pravom alebo ľavom paneli:

| Klávesa | Čo robí |
|---|---|
| {{key:Enter}} | Použije hodnotu a opustí pole |
| {{key:Esc}} | Vráti pôvodnú hodnotu a opustí pole |
| {{key:Tab}} | Použije hodnotu a prejde na ďalšie pole |

Kým má pole kurzor, písmená sa zapisujú do neho, nie do riadku príkazov.

## Myš

| Akcia | Čo robí |
|---|---|
| Kliknutie | Vyberie bod, keď o to príkaz žiada; vyberie objekt, keď žiada objekty; inak vyberie objekt alebo úchyt |
| Shift+kliknutie | Odstráni vybraný objekt z výberu (ak je v [Nastaveniach](topic:settings) {{ui:Kliknutie na objekty}} nastavené na {{ui:Nahrádza výber}}, objekt pridá). Pri výbere bodu: ignoruje uchopenie objektu pre toto kliknutie |
| Kliknutie na prázdne miesto, potom ďalšie kliknutie | Výberový rámik: zľava doprava je okno, sprava doľava prekríženie |
| Potiahnutie na prázdnom mieste | Lasso: pohyb najprv doprava je okno, najprv doľava prekríženie; {{key:Space}} počas ťahania prepína okno, prekríženie a ohradu; {{key:Esc}} ho zruší (LASSOMODE 0 alebo Nastavenia ho znova urobia obdĺžnikom) |
| Potiahnutie cez časti v TRIM alebo EXTEND | Orezáva (alebo predlžuje) každú časť, ktorou dráha prechádza; podržte {{key:Shift}} pre druhú možnosť |
| Potiahnutie úchytu | Presunie úchyt (alebo kliknite na úchyt a potom kliknite, kam má ísť) |
| Dvojklik na text | Vyberie ho a umiestni kurzor do jeho poľa {{ui:Text}} na pravom paneli |
| Pravé kliknutie | Enter. Počas presunu úchytu alebo výberového rámika: zruší ho |
| Potiahnutie pravým tlačidlom | Posúva (pan) |
| Koliesko | Priblíži a oddiali okolo krížového kurzora |
| Potiahnutie kolieskom (stredné tlačidlo) | Posúva |
| Dvojklik na koliesko | Zväčší na celý výkres (rozsah) |
| Pustenie DWG alebo DXF na výkres | Otvorí ho |

Na touchpade alebo dotykovej obrazovke pozri [Myš, touchpad a dotyk](topic:mouse-trackpad-touch).

## Klávesy, ktoré si ponecháva prehliadač

{{key:Mod+N}}, {{key:Mod+W}} a {{key:Mod+T}} vždy patria prehliadaču. CadCraft ich nepoužíva: na nový výkres použite {{ui:Nová}} alebo zadajte `NEW`. Schránka CadCraftu je vlastná: {{key:Mod+C}} a {{key:Mod+V}} kopírujú objekty medzi výkresmi a kartami CadCraftu, nie do iných programov a z nich.

:::mac
Ak {{key:Mod+Y}} otvorí históriu prehliadača namiesto znova, použite {{key:Mod+Shift+Z}} alebo tlačidlo {{ui:Znova}}.
:::

## Kde sa nachádza Presunúť

Presun je príkaz `MOVE` (kláves {{key:M}}): vyberte objekty, potom základný bod a druhý bod alebo zadajte vzdialenosť. `ALIGN` a `DISTRIBUTE` sú tiež k dispozícii. BimCraft používa rovnaké názvy na rovnaké úlohy na stavebných prvkoch, ale jeho {{key:M}} je Merať: jeho Presunúť je {{key:Shift+M}}.
