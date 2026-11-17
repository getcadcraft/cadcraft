---
title: Nastavení písma a velikosti textu pomocí stylů textu
summary: Vytvořte pojmenované styly textu s písmem, výškou, šířkou a sklonem, nastavte jeden jako aktuální pro nový text a změnou stylu změníte veškerý text, který jej používá.
keywords: styl textu, styl, STYLE, ST, TEXTSTYLE, -STYLE, písmo, výška textu, faktor šířky, sklon, úhel sklonu, změnit písmo, standardní styl, použít styl, DDSTYLE
from: bd5a4883
---

## Co uděláte

Vytvoříte styl textu nazvaný `Notes` s vlastním písmem a výškou, použijete jej pro nový text a později změníte styl, takže se všechny poznámky, které jej používají, změní najednou.

## Postup

1. Napište {{cmd:STYLE}} (`ST`) a stiskněte {{key:Enter}}, nebo klikněte na {{ui:Styl textu}} na panelu nástrojů {{ui:Kreslení}}. Dialog {{ui:Styl textu}} vypisuje styly ve výkresu. Každý výkres má `Standard`.
2. Klikněte na {{ui:Nový…}}, napište `Notes` jako název nového stylu a klikněte na {{ui:OK}}. Stavový řádek hlásí "Styl textu Notes byl vytvořen a nastaven jako aktuální."
3. V {{ui:Písmo}} vyberte nebo napište název písma. Nastavte {{ui:Výška (0 = zadávat pokaždé)}} na číslo, například `2.5`, aby každý nový text měl tuto výšku. Ponechte `0`, abyste byli pokaždé dotázáni.
4. Nastavte {{ui:Faktor šířky}} a {{ui:Úhel sklonu (°)}}, chcete-li užší, širší nebo šikmá písmena. Ukázková řádka ukáže výsledek.
5. Klikněte na {{ui:Zavřít (C)}}. Text kreslete příkazem {{cmd:TEXT}} nebo {{cmd:MTEXT}}: nový text přebírá aktuální styl.
6. Chcete-li použít styl, který už máte, otevřete dialog znovu, vyberte jej v seznamu a klikněte na {{ui:Nastavit aktuální}}.
7. Chcete-li dát styl už nakreslenému textu, vyberte text, otevřete dialog, zvolte styl a klikněte na {{ui:Použít na vybraný text}}.

## Změna stylu později

Změníte-li v dialogu písmo, výšku, šířku nebo sklon stylu, všechny texty, které jej používají, se přizpůsobí v jednom kroku zpět ({{key:Mod+Z}}). Stavový řádek ukáže, kolik textů se přizpůsobilo.

## Poznámky

- {{ui:Smazat}} odmítne `Standard` a styl, který ještě používá text: nejdřív přepněte ten text na jiný styl.
- Styly se ukládají do tabulky STYLE výkresu, takže je uchovávají soubory DXF i DWG.
- Na řádku příkazů dělá `-STYLE` totéž s volbami (Aktuální, Nový, Písmo, Výška, Šířka, Sklon, Smazat, Seznam).
- Písmo, které není v počítači, na kterém se výkres čte, se zobrazí jiným písmem.
