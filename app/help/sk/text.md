---
title: Pridanie textu a popisov
summary: Umiestnite popisky miestností jednoriadkovým textom, napíšte zalamované poznámky odsekovým textom priamo na mieste a neskôr upravte text.
keywords: text, dtext, mtext, mleader, multileader, vynášacia čiara, revcloud, revízny oblak, oblak, nájsť, nahradiť, nájsť a nahradiť, odsek, zalomenie, riadkovanie, popisok, poznámka, anotácia, výška, zarovnanie, textmask, maska pozadia, maska, wipeout, otočenie, upraviť text, ddedit, textedit, písmo
from: 4b76be99
---

## Čo vytvoríte

Dva popisky miestností, vycentrované v ich miestnostiach, poznámku, ktorá sa zalomí podľa svojej šírky, a potom opravu jedného z popiskov.

## Výška textu a mierka výkresu

Výška textu sa udáva v jednotkách výkresu. Vo výkrese v milimetroch, ktorý sa bude vykresľovať v mierke 1:50, musí mať text vysoký 2.5 mm na papieri v modeli výšku 2.5 × 50 = 125 jednotiek. Na karte listu kreslíte v jednotkách papiera, takže 2.5 tam znamená 2.5 mm na papieri.

## Umiestnenie vycentrovaného popisku

1. Napíšte `DT` a stlačte {{key:Enter}} (alebo kliknite na {{ui:Text}} na paneli nástrojov). Výzva je `Specify start point of text [Justify]:`.
2. Napíšte `J` a stlačte {{key:Enter}}.
3. Pri výzve `Enter an option [Left/Center/Right/Middle/TL/MC] <L>:` napíšte `MC` a stlačte {{key:Enter}}.
4. Pri výzve `Specify insertion point of text` kliknite do stredu miestnosti.
5. Pri výzve `Specify height` napíšte `250` a stlačte {{key:Enter}}.
6. Pri výzve `Specify rotation angle of text <0>` stlačte {{key:Enter}}.
7. Pri výzve `Enter text` napíšte `KITCHEN` a stlačte {{key:Enter}}.

Popisok sa zobrazí vycentrovaný na bode, na ktorý ste klikli.

8. Na prázdnej výzve `Enter text` stlačte {{key:Enter}}, čím ukončíte príkaz.

## Napísanie poznámky so zalomením

Odsekový text ({{cmd:MTEXT}}) sa zalamuje na šírku a píše sa priamo do výkresu.

1. Napíšte `T` a stlačte {{key:Enter}}, alebo kliknite na {{ui:Odsek}} na paneli nástrojov.
2. Pri výzve `Specify first corner` kliknite na miesto, kam patrí ľavý horný roh poznámky.
3. Ak chcete najskôr zmeniť výšku, napíšte `H`, stlačte {{key:Enter}}, napíšte `250` a stlačte {{key:Enter}}.
4. Pri výzve `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]` kliknite napravo od prvého rohu. Vzdialenosť naprieč je šírka, na ktorú sa text zalamuje; to, ako ďaleko nadol kliknete, ju neobmedzuje.
5. Nad výkresom sa otvorí okno s kurzorom v ňom. Napíšte `ALL DIMENSIONS ARE IN MILLIMETERS UNLESS NOTED`. Slová sa pri písaní zalamujú na tejto šírke.
6. Stlačte {{key:Enter}}, čím začnete nový odsek, a napíšte `CHECK ON SITE`.
7. Stlačte {{key:Mod+Enter}}, kliknite na {{ui:OK}} alebo kamkoľvek mimo okna. Poznámka je jeden objekt.

Lišta nad oknom počas písania mení {{ui:Výška}}, {{ui:Riadkovanie}} (1 je normálne, 1.5 je o polovicu viac), {{ui:Šírka}} (0 = bez zalamovania) a {{ui:Zarovnanie}}. {{key:Esc}} alebo {{ui:Zrušiť}} okno zatvorí bez pridania čohokoľvek.

Možnosti pri druhom rohu: `H` výška, `J` zarovnanie (`TL` ľavý horný … `BR` pravý dolný: roh alebo stred okna, ktorý zostáva na mieste), `L` riadkovanie, `R` otočenie, `W` zadaná šírka namiesto druhého rohu.

:::note
Kým je okno otvorené, {{key:Space}} napíše medzeru a {{key:Enter}} začne nový odsek. Uložený DWG súbor uchováva odsekový text ako MTEXT; DXF R12 odsekový text nepozná, takže sa každý riadok uloží ako samostatný text.
:::

### Namiesto toho niekoľko samostatných riadkov

{{cmd:TEXT}} (`DT`) pýta jeden riadok naraz: každé {{key:Enter}} začne ďalší riadok, o 1.667-násobok výšky textu nižšie, a každý riadok je samostatný objekt. Na ukončenie stlačte {{key:Enter}} na prázdnom riadku.

## Možnosti zarovnania

| Možnosť | Bod, na ktorý kliknete, je |
|---|---|
| Vľavo (predvolené) | Ľavý koniec základnej čiary |
| Stred | Stred základnej čiary |
| Vpravo | Pravý koniec základnej čiary |
| Stred, MC | Stred textu vodorovne aj zvislo |
| TL | Ľavý horný roh |

## Úprava textu

1. Dvakrát kliknite na textový objekt. Otvorí sa v rovnakom okne ako nový odsekový text, s kurzorom na konci.
2. Zmeňte slová.
3. Stlačte {{key:Mod+Enter}} alebo kliknite mimo okna. Text vo výkrese sa zmení; {{key:Esc}} ho ponechá, ako bol.

{{cmd:TEXTEDIT}} (`ED`) robí to isté: vyberajte jeden text za druhým a po skončení stlačte {{key:Enter}}.

Ak chcete text zmeniť v pravom paneli, vyberte ho a upravte: {{ui:Text}}, {{ui:Výška}}, {{ui:Šírka zalomenia}} (0 = bez zalamovania), {{ui:Riadkovanie}}, {{ui:Otočenie}}, polohu X a Y a {{ui:Zarovnanie}}. Zoznam {{ui:Zarovnanie}} ponúka aj možnosť {{ui:Vľavo dole}}, ktorú niekedy používa text z iných programov.

## Formátovanie v odsekovom texte z iných programov

Odsekový text v DWG alebo DXF môže obsahovať kódy: farby po slovách, tučné a kurzíva, podčiarknutie, nadčiarknutie a prečiarknutie, zlomky zapísané nad sebou, napríklad 1/2, a inú výšku pre jedno slovo. CadCraft tieto kódy zachováva, kreslí ich (na obrazovke aj vo vykreslenom PDF) a uloží späť nezmenené.

Keď upravujete takýto text (dvojklikom, {{cmd:TEXTEDIT}}, poľom Text v pravom paneli alebo {{cmd:FIND}} s nahradením), upravujete jeho obyčajné slová. Slovo, ktoré napíšete, ide do úseku vedľa neho a prevezme jeho farbu a štýl; ostatné kódy zostanú na svojom mieste. Ak prepíšete čísla zlomku zapísaného nad sebou, tento zlomok sa stane obyčajným textom. Nastavenie celého textu z poľa Text zachová kódy len tam, kde sa dá rozpoznať, ktoré slová zostali.

Názvy písiem (`\F`) sa zachovajú a uložia, ale všetko sa kreslí v jednom písme v štýle Helvetica. Panel nástrojov na písanie kódov zatiaľ neexistuje.

## Ukázanie na niečo: viacnásobné vynášacie čiary

{{ui:Vynášacia čiara}} v skupine {{ui:Popisy}} ({{cmd:MLEADER}}, `MLD`) nakreslí šípku, vynášaciu čiaru, krátky zlom a poznámku ako jeden objekt.

1. Kliknite na {{ui:Vynášacia čiara}}. Pri výzve `Specify leader arrowhead location` kliknite na to, čoho sa poznámka týka.
2. Pri výzve `Specify leader landing location` kliknite na miesto, kam poznámka patrí. Zlom sa otočí na stranu, na ktorú ste klikli.
3. Napíšte poznámku do okna, ktoré sa otvorí, a stlačte {{key:Mod+Enter}}.

`A` a `L` pri prvej otázke nastavujú veľkosť šípky a dĺžku zlomu; výška textu pochádza z {{ui:Výška textu}} pre nové kóty, vynásobenej {{ui:Celková mierka}}. Dvojklikom na viacnásobnú vynášaciu čiaru zmeníte jej slová. Úchyty posúvajú šípku a zlom; poznámka nasleduje zlom. Vo {{ui:Vlastnosti}}: {{ui:Text}}, {{ui:Výška}}, {{ui:Šírka zalomenia}}, {{ui:Veľkosť šípky}} a {{ui:Dĺžka zlomu}}.

:::note
Viacnásobné vynášacie čiary sa v DWG ukladajú ako skutočné viacnásobné vynášacie čiary. DXF v R12 ani 2000 viacnásobnú vynášaciu čiaru nepozná, preto sa tam uložia ako čiary, šípka a text, ktoré kreslia.
:::

## Označenie zmien revíznym oblakom

{{ui:Popisy}} › {{ui:Viac}} › {{ui:Revízny oblak}} ({{cmd:REVCLOUD}}, `RC`) nakreslí oblak oblúkov okolo zmeneného miesta. História zobrazuje dĺžku oblúka a typ, ktorý použije.

- **Obdĺžnikový** (prvýkrát): kliknite na dva rohy.
- `P` **Mnohouholníkový**: kliknite na rohy, {{key:Enter}} oblak uzavrie.
- `F` **Voľnou rukou**: kliknite, kde sa začína, a pohybujte ukazovateľom okolo oblasti bez klikania; každá dĺžka oblúka pridá oblúk. Kliknutím alebo stlačením {{key:Enter}} ho uzavriete.
- `O` **Objekt**: vyberte uzavretú polyčiaru, kružnicu alebo elipsu (alebo úsečku, oblúk či otvorenú polyčiaru); stane sa z nej oblak. `Reverse direction?` `Y` otočí oblúky dovnútra.
- `A` **Dĺžka oblúka**: dĺžka každého oblúka. Zvoľte takú, ktorá zodpovedá mierke vykreslenia.

Oblak je uzavretá polyčiara z oblúkov, takže sa uloží v každom formáte.

## Hľadanie a nahrádzanie slov

{{ui:Upraviť}} › {{ui:Viac}} › {{ui:Hľadať a nahradiť}} ({{cmd:FIND}}) prehľadá text, hodnoty atribútov blokov a text kót na otvorenej karte (alebo len vo vybratých objektoch).

1. Napíšte slová do poľa {{ui:Hľadať}}. Zoznam ukazuje každé miesto, kde sa nachádzajú, a ich počet.
2. Ak je to potrebné, zvoľte {{ui:Rozlišovať veľkosť písmen}}, {{ui:Iba celé slová}} alebo {{ui:Použiť zástupné znaky (* a ?)}} a odznačte to, v čom nechcete hľadať.
3. Kliknite na {{ui:Vybrať nájdené}} a vyberte tieto objekty, alebo napíšte nové slová do {{ui:Nahradiť za}} (zoznam ukazuje, čím sa každé stane) a kliknite na {{ui:Nahradiť všetko}}. Jedno {{key:Mod+Z}} vráti späť každé nahradenie.

Nameraná hodnota kóty nie je text, takže sa nikdy nenahrádza: v `<> TYP.` sa dá nahradiť len `TYP.`.

## Skrytie čiar za popiskom

1. Vyberte texty, napíšte {{cmd:TEXTMASK}} a stlačte {{key:Enter}}.
2. `B` nakreslí pozadie výkresu za nimi; `C` vyžiada číslo farby. `O` masku odstráni.
3. `Border offset factor`: {{key:Enter}} ponechá 1.5, teda polovicu výšky textu okolo textu.

Maska zakrýva čiary pod textom, na obrazovke aj pri vykresľovaní. DWG 2004 alebo novší a DXF 2000 ju zachovávajú; formát DWG 2000 a DXF R12 nie, a pri uložení sa to oznámi.

## Písmo

Všetok text sa kreslí v písme v štýle Helvetica, na obrazovke aj v PDF. Text z otvorených výkresov zachováva svoje slová, výšku a polohu, ale nie pôvodné písmo (názov písma vnútri odsekového textu sa v súbore zachová, pozri vyššie).

Vo vykreslených PDF sa text v ľubovoľnom európskom písme, cyriliky alebo gréčtine vytlačí tak, ako je (PDF obsahuje písmená, ktoré potrebuje, a text môžete stále vybrať a vyhľadávať). Čínsky, japonský a kórejský text sa tiež vytlačí tak, ako je (vykreslenie pri prvom použití načíta väčšie písmo). Arabský, perzský, urdský a hebrejský text sa tiež vytlačí tak, ako je (pozri ďalšiu časť). Znaky, pre ktoré žiadne písmo nemá písmeno, sa vytlačia ako "?" a história uvedie, koľko ich bolo.

## Text sprava doľava: arabčina, perzština, urdčina, hebrejčina

Zadajte text ako kdekoľvek inde: {{cmd:TEXT}} a {{cmd:MTEXT}} kreslia každý riadok v smere čítania. Riadok, ktorého prvé písmeno je arabské alebo hebrejské, sa číta sprava doľava; čísla a latinské slová v ňom zachovávajú svoje poradie zľava doprava a písmená arabského písma sú spojené. Riadok, ktorý začína latinským písmenom, zostáva zľava doprava a slová sprava doľava sú v ňom na svojom mieste. Každý odsek viacriadkového textu má vlastný smer a zalomený odsek si ho zachová na každom riadku.

Text sa uloží tak, ako ste ho napísali, takže súbory DWG a DXF si ho s inými programami vymieňajú nezmenený. Vkladací bod a zarovnanie ({{ui:Vľavo}}, {{ui:Stred}}, {{ui:Vpravo}}) znamenajú rovnakú stranu ako pri akomkoľvek inom texte: poznámka sprava doľava, ktorá má visieť z pravého konca, potrebuje {{ui:Vpravo}}.

Na obrazovke sa písmená berú z písiem vášho systému. Vo vykreslenom PDF hebrejčina používa to isté vložené písmo ako latinský text; text arabským písmom spôsobí, že vykreslenie načíta ešte jedno písmo (menej ako 1 MB, iba raz) a celé PDF sa potom vytlačí týmto písmom. Toto písmo nemá vlastný tvar pre tri urdské znaky (heh goal, yeh barree a urdská bodka): vytlačia sa v tvare najbližšieho arabského písmena. Výkres, ktorý obsahuje text arabským písmom aj čínsky, japonsky alebo kórejsky, vytlačí jeden z nich ako "?", pretože vykreslenie nesie jedno písmo. Text v načítanom písme SHX sa zoradí a spojí, ak písmo drží písmená na ich Unicode miestach; pri starých písmach, ktorých písmená sú už tvarované, použite {{ui:Obrátiť}} v {{cmd:SHXFONTS}} ako predtým.

## Časté chyby

- **Text je príliš malý na to, aby bol vidieť.** Výška je v jednotkách výkresu. Vo veľkom výkrese použite veľkú výšku (pozri vyššie), alebo priblížte.
- **Príkaz sa skončil po jednom riadku.** Stlačili ste {{key:Enter}} na prázdnom riadku v {{cmd:TEXT}}. Spustite ho znova, alebo použite odsekový text (`T`), kde {{key:Enter}} začína nový odsek.
- **`T` otvorilo okno namiesto výzvy na riadok.** Ako v AutoCAD je `T` odsekový text ({{cmd:MTEXT}}); jednoriadkový text je `DT`.
- **Text sa v AutoCAD zalomí na inom mieste.** CadCraft zalamuje podľa šírok písmen Helvetica; iné písmo sa do riadku môže zmestiť o slovo viac alebo menej.
- **Text v zrkadlenej kópii.** Je umiestnený zrkadlovo, ale zostáva čitateľný zľava doprava.
