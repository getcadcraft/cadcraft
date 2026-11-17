---
title: Historie: verze a co se změnilo
summary: Prohlédněte si verze výkresu (kopie, které Studio ukládá při uložení, a verze v cloudu), otevřete nebo obnovte jednu z nich a porovnejte dvě s barevně označenými změnami.
keywords: historie, verze, historie verzí, obnovit, předchozí verze, zpět uložení, porovnat, porovnat výkresy, dwgcompare, změny, přidáno, odstraněno, změněno, snímek, záloha, verze v cloudu
from: 141d37b3
---

## Co vytvoříte

Pohled na starší verzi výkresu a seznam rozdílů oproti současnému stavu: co přibylo, co se odstranilo a co se změnilo, označeno barvou ve výkresu.

## Otevření historie

Napište `HISTORY` (nebo `HIST`) a stiskněte {{key:Enter}}, nebo vyberte {{ui:Historie…}} v nabídce {{ui:Více}} skupiny {{ui:Pohled}}. Panel se otevře vedle výkresu a zůstane otevřený při práci, takže můžete posouvat a přibližovat výkres s barvami na něm.

Historie funguje v CadCraft Studio. V prohlížeči panel jen to oznámí.

## Odkud verze pocházejí

- **V tomto počítači.** Pokaždé, když v Studiu otevřete výkres ze souboru, a pokaždé, když ho uložíte, Studio si ve svém úložišti na tomto počítači uchová kopii souboru. První kopie je {{ui:Jak byl otevřen}}: soubor tak, jak byl před vaším prvním přepsáním. Studio uchovává nejnovějších 25 kopií každého výkresu a nejstarší jdou pryč, když všechny kopie dohromady přesáhnou 400 MB. Uložení, které nic nemění, nic neuchová. Nic se nenahrává.
- **V cloudu.** Když v Studiu otevřete výkres ze svých cloudových souborů, panel navíc uvede {{ui:V cloudu}}: každou verzi, kterou cloud drží, s jejím číslem, tím, kdo ji uložil, a poznámkou. Panel je jen čte. CadCraft zatím své uložení do cloudu neposílá, takže jde o verze uložené z jiných zařízení a z webu. Pokud Studio hlásí, že přihlášení vypršelo, přihlaste se v něm znovu.

Výkres, který jste ještě neuložili, žádné kopie nemá: nejprve ho uložte.

## Otevření nebo obnovení verze

- {{ui:Otevřít}} dá tuto verzi do vlastní karty. Váš výkres se nedotkne.
- {{ui:Obnovit}} nahradí tento výkres touto verzí. Nejprve se zeptá. Studio před tím uchová kopii výkresu v takovém stavu, v jakém je nyní, v Historii (označenou {{ui:Před obnovením}}), a do souboru se nic nezapíše, dokud ho neuložíte. Obnovení nejde vrátit klávesou {{key:Mod+Z}}; použijte tu kopii.

## Porovnání

1. Klikněte na {{ui:Porovnat}} u verze. Porovná se s {{ui:Výkres tak, jak je nyní}}; chcete-li ji porovnat s jinou verzí, nejprve ji vyberte v {{ui:Porovnat s}}.
2. Přečtěte si výsledek pod seznamem: kolik objektů přibylo, kolik se odstranilo a kolik se změnilo, a seznam těchto objektů. Kliknutím na položku v seznamu přesunete pohled na ni.
3. Ve výkresu:
   - **zelené** objekty přibyly,
   - **červené** objekty byly odstraněny (jsou jen ve starší verzi),
   - **oranžové** objekty se změnily: nový tvar je plný a starý čárkovaný.
4. {{ui:Zobrazit ve výkresu}} barvy zapíná a vypíná; {{ui:Smazat barvy}} výsledek odstraní. Zavření panelu barvy také smaže.

Seznam uvádí, co se u změněného objektu změnilo: text, to, že se posunul, jeho tvar, vrstva, barva, typ čáry nebo tloušťka čáry. Každý list se porovnává samostatně; barvy se ukazují na listu, který je otevřený.

:::note
Výkres nemá trvalé číslo každého objektu, takže CadCraft objekty páruje podle toho, čím jsou: stejný objekt v obou verzích je nezměněný; objekt téhož typu a vrstvy, který leží v rámci své vlastní velikosti od starého objektu, je týž objekt, změněný; co zbude, je přidané nebo odstraněné. Objekt posunutý daleko od původního místa se ukáže jako odstraněný na jednom místě a přidaný na druhém. Odkaz na blok se počítá podle obsahu svého bloku.
:::

## Časté chyby

- **"Zatím žádné kopie."** Studio uchová kopii při každém otevření a uložení výkresu, který má soubor na tomto počítači. Výkres otevřený z karty prohlížeče nebo nikdy neuložený žádné kopie nemá.
- **Seznam z cloudu chybí.** Objeví se u výkresu otevřeného z cloudu ve Studiu; soubor otevřený z disku není cloudový výkres.
- **Všechno vypadá jako změněné.** Dvě verze uložené různými programy zapisují stejný výkres různě (názvy anonymních bloků, zaokrouhlování). Porovnávejte verze uložené programem CadCraft.
