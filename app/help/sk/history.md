---
title: História: verzie a čo sa zmenilo
summary: Pozrite si verzie výkresu (kópie, ktoré Studio uchováva pri uložení, a verzie z cloudu), otvorte alebo obnovte jednu a porovnajte dve so zmenami zobrazenými farbou.
keywords: história, verzie, história verzií, obnoviť, predchádzajúca verzia, vrátiť uloženie, porovnať, porovnať výkresy, dwgcompare, zmeny, pridané, odstránené, zmenené, snímka, záloha, verzie v cloude
from: 141d37b3
---

## Čo vytvoríte

Pohľad na skoršiu verziu výkresu a zoznam rozdielov oproti súčasnosti: čo bolo pridané, čo odstránené a čo zmenené, označené farbou na výkrese.

## Otvorenie histórie

Zadajte `HISTORY` (alebo `HIST`) a stlačte {{key:Enter}}, alebo vyberte {{ui:História…}} v ponuke {{ui:Viac}} skupiny {{ui:Pohľad}}. Panel sa otvorí vedľa výkresu a zostane otvorený, kým pracujete, takže môžete posúvať a zväčšovať výkres s farbami na ňom.

História funguje v CadCraft Studio. V prehliadači panel to iba oznámi.

## Odkiaľ pochádzajú verzie

- **V tomto počítači.** Pri každom otvorení výkresu zo súboru v Studiu a pri každom jeho uložení Studio uchová kópiu súboru vo svojom úložisku v tomto počítači. Prvá kópia je {{ui:Pri otvorení}}: súbor taký, aký bol pred vaším prvým uložením cez neho. Studio uchováva najnovších 25 kópií každého výkresu a najstaršie sa odstránia ako prvé, keď všetky kópie spolu presiahnu 400 MB. Uloženie, ktoré nič nezmení, nič neuchová. Nič sa nenahráva.
- **V cloude.** Keď otvoríte výkres zo svojich cloudových súborov v Studiu, panel tiež vypíše {{ui:V cloude}}: každú verziu, ktorú cloud drží, s jej číslom, tým, kto ju uložil, a poznámkou. Panel ich iba číta. CadCraft zatiaľ neposiela svoje uloženia do cloudu, takže ide o verzie uložené z iných zariadení a z webu. Ak Studio oznámi, že prihlásenie vypršalo, prihláste sa v Studiu znova.

Výkres, ktorý ste ešte neuložili, nemá kópie: najprv ho uložte.

## Otvorenie alebo obnovenie verzie

- {{ui:Otvoriť}} dá túto verziu na vlastnú kartu. Váš výkres sa nedotkne.
- {{ui:Obnoviť}} nahradí tento výkres touto verziou. Najprv sa opýta. Pred tým Studio uchová kópiu výkresu v jeho aktuálnom stave v histórii (označenú {{ui:Pred obnovením}}) a do súboru sa nič nezapíše, kým ho neuložíte. Obnovenie sa nedá vrátiť klávesom {{key:Mod+Z}}; použite túto kópiu.

## Porovnanie

1. Kliknite na {{ui:Porovnať}} pri verzii. Porovná sa s {{ui:Výkres tak, ako je teraz}}; ak ju chcete porovnať s inou verziou, najprv ju vyberte v {{ui:Porovnať s}}.
2. Prečítajte si výsledok pod zoznamom: koľko objektov bolo pridaných, odstránených a zmenených, a ich zoznam. Kliknutím na položku v zozname presuniete pohľad na ňu.
3. Na výkrese:
   - **zelené** objekty boli pridané,
   - **červené** objekty boli odstránené (sú iba v staršej verzii),
   - **oranžové** objekty boli zmenené: nový tvar je plný a starý prerušovaný.
4. {{ui:Zobraziť vo výkrese}} farby zapína a vypína; {{ui:Zrušiť farby}} výsledok odstráni. Zatvorenie panela ich tiež zruší.

Zoznam hovorí, čo sa zmenilo na zmenenom objekte: jeho text, že sa presunul, jeho tvar, jeho hladina, farba, typ čiary alebo hrúbka čiary. Každý list sa porovnáva samostatne; farby sa zobrazujú na liste, ktorý je otvorený.

:::note
Výkres nemá trvalé číslo pre každý objekt, takže CadCraft objekty páruje podľa toho, čím sú: ten istý objekt na oboch stranách je nezmenený; objekt rovnakého typu a hladiny, ktorý leží v rámci svojej veľkosti od starého objektu, je ten istý objekt, zmenený; čo zostane, je pridané alebo odstránené. Objekt presunutý ďaleko od pôvodnej polohy sa zobrazí ako odstránený na jednom mieste a pridaný na druhom. Odkaz na blok sa počíta podľa obsahu svojho bloku.
:::

## Časté chyby

- **"Zatiaľ žiadne kópie."** Studio uchováva kópiu pri každom otvorení a uložení výkresu, ktorý má súbor v tomto počítači. Výkres otvorený z karty prehliadača alebo nikdy neuložený žiadnu nemá.
- **Zoznam z cloudu chýba.** Objaví sa pri výkrese otvorenom z cloudu v Studiu; súbor otvorený z disku nie je cloudový výkres.
- **Všetko vyzerá ako zmenené.** Dve verzie uložené rôznymi programami zapisujú ten istý výkres rôznymi spôsobmi (názvy anonymných blokov, zaokrúhľovanie). Porovnávajte verzie uložené programom CadCraft.
