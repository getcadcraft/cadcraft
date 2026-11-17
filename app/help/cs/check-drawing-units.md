---
title: Zjištění jednotek výkresu
summary: Zjistěte, zda je otevřený výkres v milimetrech, palcích nebo jiné jednotce, ověřte to měřením a zjistěte, proč může jiný program u stejného DXF uvádět jiné jednotky.
keywords: jednotky, jaké jednotky, které jednotky, kontrola jednotek, milimetry, mm, palce, metrické, imperiální, jednotky DXF, STEP do DXF, špatné jednotky, palce nebo mm, INSUNITS, MEASUREMENT, jednotky výkresu, PartCraft DXF
from: c0ee75bb
---

## Co uděláte

Zjistěte, co znamená jedna jednotka v otevřeném výkresu, a ujistěte se, že čísla, která čtete, odpovídají velikosti, kterou čekáte.

## Postup

1. Otevřete výkres a stiskněte {{key:Esc}}, aby nic nebylo vybráno, na kartě {{ui:Model}}.
2. V pravém panelu pod {{ui:Aktuální nastavení}} přečtěte {{ui:Jednotky}}. Říká, co znamená jedna jednotka výkresu: {{ui:Milimetry}}, {{ui:Palce}}, {{ui:Stopy}} a tak dále. DXF uložené z PartCraftu uvádí {{ui:Milimetry}}.
3. Ověřte to měřením něčeho, jehož velikost znáte. Napište {{cmd:DIST}} a vyberte dva konce hrany nebo otvoru. Pokud známá součást o velikosti 25 mm ukáže `25`, je výkres v milimetrech; pokud ukáže přibližně `0.98`, je v palcích.

{{ui:Bez jednotek}} znamená, že soubor to neuvádí. CadCraft pak použije jednotku papíru (milimetry na papíru ISO, palce na papíru US) a čísla jsou jen tak správná, jak správný je program, který je zapsal.

## Pokud jsou jednotky špatně

Změna {{ui:Jednotky}} **nic nepřepočítá**: čísla zůstanou stejná a mění se jen to, co znamenají. Nastavte ji proto jen tak, aby říkala, čím výkres skutečně je. Pokud jsou čísla v milimetrech a {{ui:Jednotky}} uvádí {{ui:Palce}}, vyberte {{ui:Milimetry}}. Pokud potřebujete samotnou geometrii v jiných jednotkách, změňte ji příkazem {{cmd:SCALE}} (25.4 z palců na milimetry, 1/25.4 opačným směrem) a potom nastavte {{ui:Jednotky}}.

Způsob zápisu délek (desetinně, stopy a palce, zlomky) je samostatné nastavení, {{ui:Formát délek}}: viz [Jednotky, formáty papíru a měřítka](topic:units-papers-scales).

## Proč jiný program uvádí palce

DXF uvádí své jednotky ve své hlavičce. Nejstarší druh DXF, R12, žádnou proměnnou pro jednotky neměl, takže program, který čte R12 přísně, ji zapsanou hodnotu ignoruje a použije vlastní výchozí, která bývá často palce. Geometrie v souboru je přitom v obou případech stejná: liší se jen označení. PartCraft zapisuje své soubory DXF jako R12 a uvádí milimetry dvěma způsoby (`$INSUNITS` 4 a `$MEASUREMENT` 1), aby je více programů četlo správně. Pokud program stále uvádí palce, nastavte při otevření souboru jeho jednotky na milimetry.

Vložení souboru do výkresu (místo jeho otevření) převádí jeho jednotky: viz [Jednotky při importu](topic:units-on-import).
