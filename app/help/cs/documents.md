---
title: Documents: vyřazení, revize a vydání
summary: Udržujte výkresy ve složce projektu pod kontrolou: vyřaďte soubor, aby ho nikdo jiný neměnil, zařaďte ho jako novou revizi, pošlete ho ke kontrole a vydejte ho se jménem schvalovatele; historie, co co používá, kusovník a razítka, která ukazují revizi.
keywords: nastavení projektu, schvalovatelé, správci, písmena revizí, ASME, jen pro čtení, porovnat revize, otevřít kopii, partcraft, bimcraft, documents, DOCUMENTS, DOCS, trezor, správa dokumentů, pdm, vyřadit, zařadit, check out, check in, checkout, checkin, zamknout, revize, rev, písmeno revize, vydání, vydáno, schválit, schválení, kontrola, zastaralý, kde se používá, bom, kusovník, razítko, tabulka revizí, složka projektu
from: ee938722
---

## Co vytvoříte

Složku projektu, kde má každý výkres revizi (A.1, A.2 … pak A, B …) a stav (Rozpracováno, Ke kontrole, Vydáno, Zastaralé), kde může soubor v jednu chvíli měnit jen jedna osoba a kde je zapsáno každé vyřazení, zařazení, schválení a zrušené vyřazení, včetně toho, kdo je provedl a kdy.

Vše je uloženo ve složce samotné, ve skryté složce `.ccvault` vedle vašich výkresů. Pro celý tým funguje složka na sdíleném disku nebo synchronizovaná složka. Žádný server neexistuje a nic se nenahrává.

## Otevřete Documents

Napište `DOCUMENTS` (nebo `DOCS`) a stiskněte {{key:Enter}}. Panel se otevře vedle výkresu.

Zvolte {{ui:Vyberte složku projektu}} a vyberte složku, která obsahuje výkresy projektu. Složky projektu fungují v CadCraft Studio a v prohlížečích, které umějí otevřít složku (Chrome, Edge). V ostatních prohlížečích to panel oznámí.

Při prvním použití zadejte své jméno (připojuje se ke všemu, co děláte) a název tohoto počítače. Pokud jste přihlášeni, vaše jméno je už vyplněno.

## Založení trezoru

Složka, která ještě není trezorem, nabízí {{ui:Založit trezor v této složce}}. Zadejte název projektu. Potom otevřete {{ui:Soubory mimo trezor}} a u každého souboru, který chcete převzít pod kontrolu, zvolte {{ui:Přidat}}. Přidaný soubor začíná na revizi **A.1**, Rozpracováno.

## Změna výkresu

1. U výkresu zvolte {{ui:Otevřít}}. Otevře se v CadCraft. Pokud není vyřazen na vás, pouze si ho prohlédněte a neměňte ho: Uložit přepsání odmítne a řekne proč (pro vlastní kopii použijte Uložit jako).
2. Zvolte {{ui:Vyřadit}}. Nikdo jiný ho teď nemůže vyřadit; panel ukáže, kdo ho má, na kterém počítači a od kdy.
3. Kreslete.
4. Zvolte {{ui:Zařadit}} a napište, co se změnilo. Otevřený výkres se uloží do složky projektu ve svém vlastním formátu a stane se další revizí (A.1, potom A.2). Zařazení bez změny ponechá revizi.

{{ui:Zrušit vyřazení}} vrátí soubor bez nové revize.

## Kontrola a vydání

- {{ui:Poslat ke kontrole}}: během kontroly je soubor jen pro čtení.
- {{ui:Schválit}}: zadejte jméno schvalovatele. A.3 se změní na **A**, Vydáno. Vydané soubory jsou jen pro čtení.
- {{ui:Vrátit}}: zpět do stavu Rozpracováno s uvedením důvodu.
- {{ui:Nová revize}} u vydaného souboru ho vyřadí pro další písmeno: jeho první zařazení bude **B.1**. {{ui:Zrušit vyřazení}} před tím ho nechá na A.
- {{ui:Označit za zastaralý}} vyřadí vydaný soubor z používání.

Projekt si může vést seznam těch, kdo smějí schvalovat, a může vyžadovat, aby schvalovatel nebyl osobou, která soubor zařadila (viz Nastavení projektu níže).

## Nastavení projektu

V panelu otevřete {{ui:Nastavení projektu}}:

- **Schvalovatelé**: jedno jméno na řádek. Pokud jsou nějací, mohou vydání schválit jen oni.
- **Schvalovatel musí být jiná osoba než autor**: pravidlo „čtyř očí“.
- **Správci**: jedno jméno na řádek. Pokud jsou nějací, mohou jen oni zrušit cizí vyřazení nebo měnit toto nastavení.
- **Písmena revizí, která se vynechají**: {{ui:Použít posloupnost ASME Y14.35}} přeskočí I, O, Q, S, X a Z, nebo zadejte vlastní písmena. Již přidělená písmena zůstanou; volba platí pro další revize.
- **Vyřazení se považuje za zastaralé po**: počet dnů (výchozí hodnota je 14).

Zvolte {{ui:Uložit nastavení}}. Změna se zapíše do záznamu i s tím, kdo ji provedl.

## Soubor zůstal vyřazený

{{ui:Zrušit vyřazení}} uvolní soubor, který vyřadil někdo jiný (je pryč nebo jeho počítač přestal fungovat). Musíte zadat důvod: zapíše se do záznamu spolu s tím, čí vyřazení to bylo. Pokud má projekt správce, může to udělat jen oni. Vyřazení starší než 14 dnů je označeno jako dlouhodobé.

## Historie, revize, použití, používá se v

Zvolte název souboru a uvidíte:

- {{ui:Historie}}: každou událost, od nejnovější, s uvedením osoby, počítače a času.
- {{ui:Revize}}: každou uchovanou revizi. Kopie každé revize je v trezoru (stejný obsah se uchovává jen jednou). {{ui:Otevřít kopii}} otevře tuto revizi jako prostou kopii, která nemůže přepsat soubor v trezoru. {{ui:Porovnat s}} vypíše, co bylo mezi touto revizí a předchozí (nebo jinou, kterou zvolíte) přidáno, odstraněno a změněno, a zvýrazní to na výkresu.
- {{ui:Používá}}: výkresy, na které odkazuje (externí odkazy, xref), dokumenty, na které ukazuje model IFC, a části sestavy PartCraft.
- {{ui:Používá se v}}: každý soubor v trezoru, který tento soubor používá.

{{ui:Kusovník (CSV)}} uloží seznam všeho, co soubor používá, po úrovních, s množstvím, revizemi a stavy, do tabulky.

## Tabulka revizí na listu

Otevřete výkres, který má rozvržení, a zvolte {{ui:Tabulka revizí}}. Tabulka vydaných revizí (revize, datum, kdo, schváleno, popis) se nakreslí vpravo nahoře na listu, který si prohlížíte. Když schválíte vydání, tabulka se aktualizuje.

## Revize v razítku

Přidejte atributům svého razítka jednu z těchto značek a na otevřeném výkresu zvolte {{ui:Vyplnit razítka}}:

| Značka | Vyplní se |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | revize (B, nebo B.2 během práce na ní) |
| `VAULT.STATE` | stav (Vydáno …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | datum poslední revize |
| `VAULT.APPROVER`, `APPROVED_BY` | kdo schválil poslední vydání |

## PartCraft a BimCraft

PartCraft a BimCraft mají stejný panel Documents pro své vlastní soubory: díly a sestavy v PartCraft, modely IFC v BimCraft. Zařazení uloží otevřený model do složky projektu a sestava ukazuje, které díly používá, a kusovník.

## Dobré vědět

- Dva lidé na stejné sdílené složce nemohou vyřadit stejný soubor oba: vyřazení je soubor, který systém nedovolí vytvořit dvakrát. V prohlížeči a ve Studiu se starší verzí shellu, než je tato funkce, je to tak přísné, jak složka dovolí: dvě vyřazení ve stejné vteřině mohou uspět oba. Panel říká, které platí.
- Složku `.ccvault` neupravujte ani nemažte ručně. Záznam v ní je evidence; trezor si podle něj seznam v případě potřeby znovu sestaví.
- Změna souboru ve složce bez jeho vyřazení se zobrazí jako {{ui:Změněno ve složce bez vyřazení}}.
