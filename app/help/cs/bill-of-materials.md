---
title: Kusovníky podle zón
summary: Označte oblasti výkresu jako zóny a umístěte pro každou tabulku, která počítá bloky uvnitř. Tabulky sledují výkres, jak pracujete, a vy volíte, které sloupce každá ukazuje.
keywords: kusovník, BOM, seznam dílů, rozpis, zóna, oblast, tabulka, počet, atribut, sloupce, číslo položky, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

**Zóna** je pojmenovaná oblast výkresu. **Tabulka kusovníku** vypisuje, co leží uvnitř jedné zóny, nebo v celém výkrese: každý blok s jeho množstvím a hodnotami atributů. Výkres může mít tolik zón a tabulek, kolik potřebujete, a jedna zóna může mít několik tabulek s různými sloupci.

Nástroje jsou na kartě Bloky pod {{ui:Kusovník}}, v nabídce {{ui:Více}} ve skupině Bloky, a lze je napsat.

## Vytvořte zónu

Napište {{cmd:BOMZONE}} a buď

- klikněte na dva protilehlé rohy obdélníku,
- zvolte {{ui:Mnohoúhelník}}, klikněte na každý roh a stiskněte Enter pro uzavření, nebo
- zvolte {{ui:Objekt (O)}} a vyberte uzavřenou polylinii, kružnici, elipsu nebo uzavřený spline. Její obrys se zkopíruje; objekt zůstane beze změny.

Potom napište název zóny. Zóna se nakreslí jako čárkovaný obrys s názvem nad levým horním rohem, na vrstvě `BOM-ZONES`, která se nevykresluje. Chcete-li zóny na papíře, zapněte pro tuto vrstvu vykreslování.

Zóna je běžná uzavřená polylinie: přesouvejte ji, natahujte nebo táhněte za její úchyty a její název následuje. Chcete-li zónu přejmenovat, upravte text názvu, nebo použijte {{cmd:BOMZONE}} a {{ui:Přejmenovat}}. {{ui:Zóny}} vypisuje každou zónu a kolik má tabulek.

## Umístěte tabulku

Napište {{cmd:BOMTABLE}} (nebo {{cmd:BOM}}), vyberte obrys zóny nebo její název, zadejte výšku textu a klikněte, kam má přijít levý horní roh tabulky. Stiskněte Enter místo výběru zóny, nebo zvolte {{ui:Celé}}, pro tabulku celého výkresu.

Nová tabulka ukazuje číslo položky, množství, název bloku a sloupec pro každý atribut, který bloky nesou (prvních šest; ostatní jsou nabídnuty nezaškrtnuté). Bloky se stejným názvem a stejnými hodnotami atributů sdílejí jeden řádek.

## Co se počítá jako uvnitř

- Blok se počítá do zóny, která obsahuje jeho **vkládací bod**.
- Čára, oblouk, kružnice, polylinie, elipsa, spline nebo šrafa se počítá **celá** do zóny, která obsahuje střed jejího rozsahu (u čáry její střed). Její délka se na okraji zóny nedělí.
- Bod přesně na okraji je uvnitř.
- Zóny se mohou překrývat. Každá zóna se počítá sama za sebe, takže objekt v překryvu je v obou tabulkách.

## Tabulky sledují výkres

Když přidáte, přesunete, zkopírujete nebo smažete blok, upravíte atribut, nebo přetvoříte či přesunete zónu, každá tabulka se překreslí ve stejném kroku. Zpět vrátí vaši úpravu i změnu tabulky najednou.

Chcete-li, aby tabulka přestala sledovat, zaškrtněte {{ui:Zmrazené}} v jejím nastavení. Zmrazená tabulka se mění jen tehdy, když upravíte její nastavení, nebo napíšete {{cmd:BOMUPDATE}}, který aktualizuje všechny tabulky hned.

## Volba sloupců

Vyberte tabulku a napište {{cmd:BOMEDIT}}. V dialogu:

- **Sloupce**: zaškrtněte ty, které mají být vidět (položka, množství, název, vrstva, délka, plocha, poznámky a každý atribut), napište vlastní nadpis pro kterýkoli z nich a posouvejte je nahoru nebo dolů.
- {{ui:Seskupit řádky podle}}: název bloku a hodnoty atributů, jen název bloku, vrstva, nebo jeden atribut. Ve sloučeném řádku hodnota, která se mezi bloky liší, ukazuje „různé“.
- {{ui:Řadit podle}} libovolného sloupce, vzestupně nebo sestupně.
- {{ui:Nadpis}}, {{ui:Zobrazit nadpis}} a {{ui:Řádek součtů}}.
- {{ui:Počítat čáry podle vrstvy}} přidá jeden řádek pro každou vrstvu s počtem objektů, jejich celkovou délkou a u uzavřených tvarů jejich celkovou plochou, v jednotkách výkresu.
- **Poznámky**: zaškrtněte sloupec Poznámky a potom napište poznámku pro kterýkoli řádek do spodní části dialogu.

Každá tabulka si ponechává vlastní volby.

## Čísla položek

Řádek si ponechá své číslo položky, dokud je v tabulce. Nový řádek dostane další volné číslo a číslo, které bylo jednou přiděleno, se znovu nepoužije, takže bublinky a poznámky, které číslo citují, zůstanou správné. {{ui:Přečíslovat položky}} je očísluje od 1 v zobrazeném pořadí.

Řádek je poznán podle toho, co seskupuje: změníte-li způsob seskupení, nebo změníte-li hodnotu atributu, kterou seskupení používá, řádek se počítá jako nový.

## Export a jiné programy

{{cmd:BOMEXPORT}}, nebo {{ui:Exportovat CSV}} v dialogu, uloží tabulku jako soubor .csv pro tabulkový procesor.

V souboru DWG nebo DXF je tabulka běžným blokem čar a textu, takže ji jiné programy zobrazí a vykreslí tak, jak byla nakreslena. Tam není tabulkovým objektem a v jiných programech se neaktualizuje. Odkaz na její zónu se uchovává v souboru jako rozšiřující data, která CadCraft čte zpět, takže tabulka je znovu živá, když výkres otevřete znovu v CadCraftu. R12 DXF výkresu bez listu neuchovává nastavení zóny „nevykreslovat“ pro vrstvu zóny.

Rozložení tabulky ji promění v samostatné čáry a text a ukončí odkaz.
