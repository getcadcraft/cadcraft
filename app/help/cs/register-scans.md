---
title: Registrace více skenů do jednoho
summary: Umístěte skeny pořízené z různých stanovišť do jednoho rámce pomocí zvolených dvojic bodů nebo zadaných cílů, zpřesněte je metodou ICP, uložte registraci jako projekt a exportujte registrovaný bodový mrak jako LAS nebo E57. Příkaz je REGISTERSCANS.
keywords: registrace, registrovat, skeny, bodový mrak, icp, iterativní nejbližší bod, cíle, dvojice bodů, tuhá transformace, zarovnat, sloučit, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Co uděláte

Několik skenů jednoho místa (každý z vlastního stanoviště skeneru) je zpočátku v souřadnicích svého souboru. Zaregistrujte je: každému skenu přiřaďte jedno umístění, aby všechny ležely v jednom rámci, pak to uložte jako projekt a zapište registrovaný bodový mrak do jednoho souboru LAS nebo E57.

## Umístění skenů

1. Otevřete dialog (napište `REGISTERSCANS` (nebo `REGSCAN`)). {{ui:Přidat skeny…}} přijímá soubory LAS, LAZ, E57, PLY, PCD, PTX, PTS nebo XYZ, nebo je přetáhněte na dialog. Skeny, které používají různé jednotky, se odmítnou s upozorněním: nejprve jeden převeďte.
2. Zvolte {{ui:Sken k přesunutí}} a {{ui:Umístit vůči}}. Obrázek zobrazí každý sken v rámci v jeho aktuální poloze, každý jinou barvou: {{ui:Půdorys}}, {{ui:Čelní}} nebo {{ui:Boční}}; tažením posouvejte, kolečkem přibližujte.
3. **Podle dvojic bodů.** Klikněte na {{ui:Vybrat dvojici}}, pak na bod na skenu, který se přesouvá, a potom na stejné místo na jiném skenu (roh, cíl, pata sloupu). Udělejte to alespoň třikrát, s body, které neleží v jedné přímce a jsou od sebe rozmístěny. Klikněte na {{ui:Umístit podle dvojic}}: sken se umístí metodou nejmenších čtverců a **Zbytek** ukáže, jak daleko každá dvojice ještě nesedí. Dvojice s velkým číslem je špatně zvolená: odeberte ji křížkem a umístěte znovu.
4. **Podle cílů.** Jsou-li známy skutečné souřadnice bodu (zaměřené cíle), klikněte na {{ui:Vybrat, pak zadat cíl}}, klikněte na bod na jeho skenu a zadejte X, Y a Z cíle do řádku. Dvojice a zadané cíle lze libovolně kombinovat.

## Zpřesnění metodou ICP

Dvojice dají hrubé umístění. {{ui:Zpřesnit}} posouvá sken, dokud jeho plochy nesednou na plochy druhého skenu: nejprve **bod k bodu**, pak **bod k rovině**. Tabulka uvádí každý krok s jeho chybou a počtem shodných bodů; čára nad ní ukazuje, jak chyba klesá. {{ui:Zastavit}} ukončí běh po právě probíhajícím kroku a ponechá dosažený stav. {{ui:Zpět}} vezme zpět celý běh (nebo poslední umístění); {{ui:Obnovit}} vrátí sken na souřadnice ze souboru.

Aby to na notebooku běželo rychle, ICP pracuje s podílem bodů ({{ui:Použité body}}, 5,000 až 60,000) a ignoruje shody vzdálenější než {{ui:Největší vzdálenost shody}} (ve výchozím nastavení 5 % velikosti skenu, s postupným zmenšováním při ustalování). Nejprve potřebuje hrubé umístění: skeny, které se sotva překrývají, nahlásí, že je nelze sladit. Plochy, které jsou jen rovinné nebo jen přímé, nemohou opravit polohu podél sebe; v takovém případě přidejte dvojice.

## Uložení a export

- {{ui:Uložit projekt}} zapíše malý soubor `.ccscans.json`: název každého skenu, jeho velikost a otisk prvních 64 KB spolu s jeho transformací. Body neobsahuje. {{ui:Otevřít projekt…}} najde soubory skenů podle těchto odkazů (soubory musí být nejprve přidány) a vrátí každou transformaci na místo.
- {{ui:Exportovat LAS}} a {{ui:Exportovat E57}} zapíší jeden soubor se všemi skeny na jejich registrovaném místě. Body v originálech se nikdy nepřepisují; transformace se použije při exportu. Je-li zapnuto {{ui:Číst každý bod ze souborů}}, každý soubor se pro každý bod čte znovu (až 20 milionů na sken); je-li vypnuto, zapíší se jen body zobrazené v prohlížeči.
- {{ui:Zobrazit registrovaný mrak}} (CadCraft) zapíše LAS a připojí jej pod výkres na jeho vlastní souřadnice, jako každý mrak.

:::note
Nic se nenahrává. Registrace pracuje v jednotkách souborů a zachovává milimetry: LAS se zapisuje s měřítkem, které se hodí (až do 0.1 mm), E57 s typem double. Souřadnicový systém se přenese do LAS jen tehdy, když každý sken uvádí stejný kód EPSG. Zapisovač E57 je náš vlastní; je ověřen čtením jeho souborů zpět touto čtečkou a knihovnou libE57Format.
:::
