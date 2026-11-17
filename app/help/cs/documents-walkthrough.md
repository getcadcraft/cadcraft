---
title: Dokumenty a revize (trezor)
summary: Krok za krokem jedna skutečná zakázka: dejte projektovou složku pod kontrolu, vyřaďte výkres, změňte ho, zařaďte ho s poznámkou, pošlete ke kontrole, schvalte a vydejte, sledujte historii a to, co ho používá, co vidí druhá osoba, když je soubor zamčený, a jak to funguje s cloudovými složkami.
keywords: trezor, dokumenty, průvodce, návod, vyřadit, zařadit, revize, vydání, schválit, zamknout, historie, kde použito, cloudová složka, projektová složka, správa dokumentů, pdm, dva lidé, sdílená složka
from: 3829528d
---

## Co uděláte

Jste Ana a pracujete na Riverside Clinic s kolegou Benem. Výkresy projektu jsou v jedné složce, kterou oba máte k dispozici (sdílený disk, synchronizovaná složka, nebo cloudová složka). Na konci jeden soubor přejde od své první kopie k vydané revizi **A**, pak se změní znovu jako **B.1**, uvidíte, kdo co udělal, a uvidíte, co vidí Ben, když soubor držíte.

Vše se uchovává ve skryté složce `.ccvault` vedle vašich souborů: žádný server, nic se nenahrává (výjimkou je cloudová složka, viz poslední krok). Všechna tlačítka a pravidla na jednom místě najdete v tématu *Dokumenty: vyřazení, revize a vydání*, pokud je vaše aplikace má.

## 1. Nastavte projektovou složku

1. Vyberte {{ui:Dokumenty…}} v nabídce **Více** na kartě **Zobrazení**, nebo napište `DOCUMENTS` (nebo `DOCS`) a stiskněte {{key:Enter}}.
2. Vyberte {{ui:Vyberte složku projektu}} a zvolte složku, která drží výkresy projektu. (Projektové složky fungují ve Studiu a v prohlížečích, které umějí otevřít složku, například Chrome a Edge. V ostatních prohlížečích to panel řekne.)
3. Vyberte {{ui:Změnit}} vedle **Vy:** a napište své jméno, `Ana` (pokud se zeptá, i jméno tohoto počítače). Panel nyní říká *Vy: Ana na* a váš počítač. Vaše jméno jde ke všemu, co uděláte.
4. Vyberte {{ui:Založit trezor v této složce}} a napište název projektu, `Riverside clinic`. Panel říká *Trezor založen pro Riverside clinic.*

## 2. Dejte soubor pod kontrolu

1. Otevřete **Soubory mimo trezor** a vyberte {{ui:Přidat}} vedle `plans/A-101.dxf`.
2. Objeví se pod **Soubory v trezoru** jako revize **A.1**, stav **Probíhá práce**. A.1 je jeho první kopie; trezor uchovává kopii každé revize.

## 3. Vyřaďte, změňte, zařaďte

1. Vyberte {{ui:Otevřít}} vedle `plans/A-101.dxf`. Výkres se otevře v CadCraftu a panel se zavře, abyste ho viděli. Panel je pořád o jeden příkaz daleko: `DOCUMENTS`.
2. Otevřete panel znovu a vyberte {{ui:Vyřadit}}. Řádek nyní říká **Vyřazeno vám**. V `.ccvault/locks` vznikl zamykací soubor; nikdo jiný tento soubor nemůže vyřadit, dokud ho nezařadíte.
3. Nakreslete něco: přidejte čáru, přesuňte stěnu. Nic, co uděláte, nelze uložit přes soubor trezoru, pokud není výkres vyřazen na vás; Uložit jako vždy funguje pro vaši vlastní kopii.
4. Otevřete panel, vyberte {{ui:Zařadit}} a napište, co se změnilo (`Moved the door`). Panel říká *zařazeno jako A.2*. Soubor v projektové složce je nyní výkres, který jste měli otevřený, a zámek zmizel. Zařazení bez změny ponechá revizi.

Pokud si to rozmyslíte, {{ui:Zrušit vyřazení}} vrátí soubor zpět bez nové revize.

## 4. Kontrola a vydání

1. Vyberte {{ui:Poslat ke kontrole}}. Stav se změní na **Ke kontrole** a soubor je jen pro čtení.
2. Před schválením vyberte {{ui:Nastavení projektu}} a vypište, kdo smí schvalovat (jedno jméno na řádek), například `Ben` a `Carla`, a zaškrtněte pravidlo, že schvalovatel musí být někdo jiný než autor. Vyberte {{ui:Uložit nastavení}}. Teď trezor sám odmítne kohokoli jiného.
3. Ben (nebo Carla) vybere {{ui:Schválit}} a napíše jméno schvalovatele. Stav se změní na **Vydáno** a revize na **A**, s *schválil* a jménem. Vydaný soubor je jen pro čtení. {{ui:Vrátit}} by ho vrátilo do stavu Probíhá práce, s důvodem.

Jméno schvalovatele je jméno napsané v panelu; je to záznam o tom, kdo podepsal, ne důkaz totožnosti.

## 5. Nová revize

1. U vydaného souboru vyberte {{ui:Nová revize}}. Držíte ji pro další písmeno.
2. Změňte ji, pak {{ui:Zařadit}}. Revize je **B.1**, probíhá práce. Vydejte ji stejným způsobem a stane se z ní **B**. {{ui:Zrušit vyřazení}} před prvním zařazením ji ponechá na **A**.

Revizní písmena jdou A, B … Z, AA, AB. Pokud váš standard některá písmena vynechává, projektové nastavení *Použít posloupnost ASME Y14.35* přeskočí I, O, Q, S, X a Z pro další revize.

## 6. Podívejte se, co se stalo

Vyberte název souboru a otevřete jeho podrobnosti:

- **{{ui:Historie}}**: každá událost, nejnovější nahoře, s kým, na kterém počítači a kdy: *Zařazeno A.2* od Any, *Vydáno* od Bena, a tak dále.
- **{{ui:Revize}}**: tabulka revizí. {{ui:Otevřít kopii}} otevře revizi jako prostou kopii, která nemůže přepsat soubor trezoru; {{ui:Porovnat s}} vypíše, co bylo přidáno, odebráno a změněno oproti revizi před ní, nebo oproti jiné.
- **{{ui:Používá}}**: výkresy, na které odkazuje (xrefy).
- **{{ui:Používá se v}}**: vypíše každý další výkres v trezoru, který odkazuje na tento: změníte-li půdorys základu, víte, které listy zkontrolovat.

## Revize na listu

S otevřeným výkresem (a rozvržením v něm) vyberte {{ui:Tabulka revizí}}: tabulka vydaných revizí se nakreslí vpravo nahoře na listu. Vyberte {{ui:Vyplnit razítka}}, aby se atributy razítka označené `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` nebo `APPROVED_BY` vyplnily revizí, stavem, datem a schvalovatelem souboru. Až schválíte další vydání, tabulka revizí se aktualizuje.

## 7. Co Ben vidí, když soubor držíte

Nyní soubor znovu vyřaďte a požádejte Bena, ať na svém počítači otevře stejnou projektovou složku a panel. Na řádku souboru uvidí **Vyřazeno uživatelem Ana na** váš počítač **od** času, a žádné tlačítko {{ui:Vyřadit}}. Pokud to zkusí přesto, trezor to odmítne: zámek je soubor, který systém nevytvoří dvakrát, takže dva lidé nemohou držet soubor ani ve stejném zlomku sekundy, je-li složka na disku ve Studiu. (V prohlížeči složka zaručuje jen nejlepší úsilí a panel to řekne pod **Složka**.)

Pokud je Ana pryč a Ben soubor potřebuje, {{ui:Zrušit vyřazení}} ho uvolní. Musí napsat důvod; zapíše se do záznamu spolu s tím, čí vyřazení to bylo. Pokud projekt uvádí správce, může to udělat jen oni. Vyřazení starší než limit zastarání (ve výchozím nastavení 14 dní) je označeno *dlouho*. Po zrušení je Anino pozdní zařazení odmítnuto, takže se nemůžete přepsat navzájem.

## 8. Cloudové složky

Cloudová složka je projektová složka uložená v cloudovém úložišti vašeho týmu, takže tým nepotřebuje sdílený disk. Ve Studiu, přihlášeni k svému účtu CadCraftu, panel ukazuje {{ui:Otevřít cloudovou složku}} vedle {{ui:Vyberte složku projektu}}. Vyberte ji a zvolte složku, uvedenou jako pracovní prostor / složka. Vlastník pracovního prostoru nejprve složku vytvoří a cloudové úložiště týmu musí být v platnosti. Vše výše funguje stejně; zámek vytváří server a je přísný napříč lidmi. Pokud nejste přihlášeni, panel vás vyzve k přihlášení. V běžné záložce prohlížeče se tlačítko cloudu nenabízí; použijte Studio.

## Vyzkoušejte

Proveďte osm kroků výše s kopií skutečného souboru. Pro kroky se dvěma lidmi potřebujete další osobu, nebo dvě okna se dvěma jmény. Pokud to zkusíte se skutečnou sdílenou složkou, stránka Komunitní testování obsahuje kontrolu, která přesně tohle ověřuje, a přijímá výsledky.
