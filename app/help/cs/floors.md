---
title: Skládání podlaží v jednom výkresu
summary: Nakreslete první podlaží nad přízemí ve stejných souřadnicích a vypněte každé podlaží, bez externích odkazů (Xref).
keywords: podlaží, FLOORS, FLR, FLOOR, FLOORLAYERS, patro, úroveň, skládání, návrhová vrstva, prostor modelu, podklad, xref
from: 7440fc87
---

Podlaží vám umožní skládat půdorysy v jednom prostoru modelu. Každé podlaží má své vlastní objekty a vrstvy fungují napříč všemi. Stěna na `P-Walls` může být na kterémkoli podlaží.

## Začátek

Napište `FLOORS` (`FLR`), nebo zvolte {{ui:Podlaží…}} v nabídce {{ui:Více}} ve skupině {{ui:Pohled}} a potom zvolte {{ui:Začít s podlažími}}. Co jste zatím nakreslili, zůstane v přízemí.

## Kreslení na podlaží

Podlaží vyberete kulatým tlačítkem v panelu. Nové objekty se vloží na něj.

Ostatní podlaží, která jsou zapnutá, se zobrazí zeslabeně pod ním. Můžete se na ně přichycovat, takže první podlaží se zarovná s přízemím, ale nemůžete je měnit, dokud je neuděláte aktivními. Oko podlaží vypne. Stěny se spojují jen se stěnami na svém vlastním podlaží.

Chcete-li začít podlaží od podlaží pod ním, vyberte, co chcete, zvolte podlaží v panelu a stiskněte {{ui:Kopírovat tam}}.

## Umístění podlaží na listy

Vyberte výřez na listu a v Vlastnostech zvolte jeho podlaží pod {{ui:Zobrazené podlaží}}. Výřez, u kterého není zvoleno podlaží, ukazuje všechna zapnutá podlaží.

## Poslání souboru jinému

Jiné CAD programy o podlažích nevědí, takže zobrazí všechna podlaží dohromady. Před odesláním souboru zvolte v panelu {{ui:Převést podlaží na vrstvy}} nebo napište `FLOORLAYERS`. Každý objekt se přesune na vrstvu pojmenovanou podle svého podlaží, například `Ground floor-P-Walls` (přízemí-P-Walls), takže můžete každé podlaží stále vypnout. Zpět to vrátí Zpět. CadCraft ukládá podlaží v souboru DWG nebo DXF, který uloží.
