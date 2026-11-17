---
title: Sady listů
summary: Sestavte listy z mnoha výkresů do jednoho očíslovaného seznamu, vyplňte jejich razítka ze sady, publikujte je jako jedno PDF a archivujte sadu jako zip.
keywords: sada listů, správce sad listů, ssm, sheetset, ccsheets, dst, seznam listů, rejstřík listů, razítko, pole, publikovat, přečíslovat, archivovat, etransmit, transmittal, podmnožiny, titulní list, seznam výkresů
from: 2c855720
---

## Co se naučíte

Jak sbírat listy (rozvržení) z několika souborů výkresů do **sady listů**, číslovat a pojmenovat je, nechat jejich razítka vyplnit za vás, publikovat celou sadu jako jedno PDF a zabalit vše do jednoho zipu k odeslání.

Sada listů žije v malém vlastním souboru `<name>.ccsheets` ve složce, která drží výkresy. Soubor sady uvádí listy s cestami od této složky, takže můžete přesunout nebo kopírovat celou složku.

:::note
Otevření složky pro čtení a zápis vyžaduje Chrome nebo Edge (mohou nechat stránku pracovat ve složce, kterou vyberete), nebo desktopovou aplikaci. Jiné prohlížeče otevřou sadu jen pro čtení: můžete ji prohlížet a publikovat, a soubor sady se stáhne místo uložení.
:::

## Založení sady

1. Najděte sekci {{ui:Sada listů}} v levém panelu a otevřete její nabídku {{ui:Sada}}. Napsání {{cmd:SHEETSET}} (nebo `SSM`) vás tam také dovede.
2. Zvolte {{ui:Nová sada…}}. Dejte sadě název a, chcete-li, název projektu a číslo.
3. Vyberte složku, která drží výkresy. Soubor sady se uloží tam.

Sadu otevřete později volbou {{ui:Otevřít sadu…}} a výběrem stejné složky. Obsahuje-li složka více sad, CadCraft se zeptá, kterou.

## Přidání listů

1. Zvolte {{ui:Přidat listy z výkresu…}} a vyberte jeden z výkresů ve složce.
2. CadCraft přečte výkres na pozadí (neotevře se na obrazovce) a vypíše jeho listy. Zaškrtněte ty, které chcete, a klikněte na {{ui:OK}}.
3. Vyberte list a stiskněte {{key:F2}} (nebo {{ui:Přejmenovat a přečíslovat…}}), abyste mu dali číslo a název, například `A-101` a `Půdorys podlaží`.

{{ui:Nový list ze šablony…}} vytvoří nový výkres z listu jiného výkresu (jeho razítka a výřezy), pojmenovaný podle nového listu, a přidá jej. Sada si pamatuje výkres, který jste použili jako šablonu.

## Uspořádání sady

- **Podmnožiny** seskupují listy, například Architektura › Půdorysy: vyberte, kam to patří, a zvolte {{ui:Nová podmnožina…}}.
- **Pořadí**: přetáhněte list na jiné místo v seznamu, nebo na podmnožinu, abyste jej tam přesunuli. Klávesnicí jej vyberte a stiskněte {{key:Alt+Up}} nebo {{key:Alt+Down}}.
- **Otevření listu**: dvojklik na něj (nebo {{key:Enter}}). Jeho výkres se otevře ve vlastní kartě, na tomto listu.
- **Odebrání**: vyberte jej a stiskněte {{key:Delete}}. Samotný výkres se nezmění.
- **Zpět**: {{ui:Zpět změnu sady}} a {{ui:Znovu změnu sady}} procházejí tím, co jste v sadě změnili.
- **Přečíslování**: {{ui:Přečíslovat listy…}} očísluje každý list, nebo listy jedné podmnožiny, podle pořadí v seznamu: předpona, začátek a krok (`A-` a `101` dají A-101, A-102 …).

Každá změna se hned uloží do souboru sady.

## Číslování listů z jejich polí

Místo ručního číslování nechte pravidlo sestavit každé číslo z polí listu, takže list, který přejde na jinou úroveň nebo obor, dostane nové číslo sám.

1. Dejte každému listu jeho pole: vyberte jej, klikněte na {{ui:Přejmenovat…}} a do {{ui:Pole tohoto listu}} napište jedno na řádek, například `DISCIPLINE = A` a `LEVEL = 1`. Pole sdílené celou sadou (třeba `DISCIPLINE = A`) může jít do {{ui:Vlastnosti…}} sady.
2. Otevřete nabídku panelu a klikněte na {{ui:Pravidlo číslování…}}.
3. Napište pravidlo, například `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` počítá mezi listy, jejichž ostatní pole se shodují, takže úroveň 1 dostane A-101, A-102 a úroveň 2 začne znovu od A-201. `{SEQ:2}` jej zapíše se dvěma číslicemi; `{SUBSET}` je název podmnožiny, ve které list je.
4. Zvolte, co se stane, když se pole změní: {{ui:Přečíslovat listy}} udržuje čísla podle pravidla po každé změně; druhá volba je očísluje jednou, hned.

Pravidlo se uloží do souboru sady. Dokud se přečíslovává samo, měňte pole listu, ne jeho číslo.

## Vyplnění razítek ze sady

Razítko dostane svůj text ze sady, když jsou jeho atributy označeny názvem pole:

| Značka | Co zobrazuje |
|---|---|
| `SHEETNUMBER` (nebo `SHEET_NO`, `DWG_NO`) | Číslo listu |
| `SHEETTITLE` (nebo `TITLE`, `SHEET_TITLE`) | Název listu |
| `SHEETDESC` | Popis listu |
| `PROJECTNAME` (nebo `PROJECT`) | Název projektu |
| `PROJECTNUMBER` (nebo `PROJECT_NO`, `JOB_NO`) | Číslo projektu |
| `SHEETSETNAME` | Název sady |
| `SHEETINDEX`, `SHEETCOUNT` | „3 z 12“ a 12 |
| Vaše vlastní, například `CLIENT` | Co jste pro něj napsali v {{ui:Nastavit pole…}} |

{{ui:Nastavit pole…}} drží název a číslo projektu a vlastní pole, jedno na řádek ve tvaru `NAME = value`.

{{ui:Aktualizovat výkresy}} zapíše čísla, názvy a pole do razítek každého výkresu v sadě a přejmenuje záložku rozvržení každého listu podle toho, co sada říká (ve výchozím stavu číslo a název, například `A-101 Půdorys podlaží`; {{ui:Nastavit pole…}} › {{ui:Názvy karet rozvržení}} to změní). Každý výkres se uloží na místě, ve svém formátu a verzi. Po přečíslování nebo přejmenování listů to spusťte znovu a karty i razítka se přizpůsobí.

## Seznam listů na titulním listu

Vyberte titulní list v seznamu a zvolte {{ui:Umístit seznam listů na tento list}}. Tabulka všech listů (číslo a název, pod svou podmnožinou) se vloží do levého horního rohu listu. {{ui:Aktualizovat výkresy}} a {{ui:Publikovat do PDF}} ji udržují aktuální. Je to jeden blok, `CC_SHEETLIST`: přesuňte jej jako každý odkaz na blok.

## Publikování sady

{{ui:Publikovat do PDF}} vytvoří jedno PDF se stránkou na list, v pořadí sady, v každém vlastním formátu papíru, s záložkou u každého listu („A-101 — Půdorys podlaží“). Je-li vybrána podmnožina, CadCraft se zeptá, zda publikovat jen ji. Razítka v PDF se vyplní ze sady, i než aktualizujete výkresy; výkresy samotné publikováním nemění. PDF se stáhne.

{{ui:Publikovat do DWG…}} zapíše každý list jako vlastní DWG (DWG 2018): model a ten jeden list s razítkem vyplněným ze sady, pojmenovaný podle čísla a názvu (`A-101 Level 1 floor plan.dwg`). Zvolte {{ui:DWG}}, nebo {{ui:DWG + PDF}} pro PDF sady vedle nich. `publish.json` vypíše každý soubor s jeho velikostí a SHA-256. Když lze do složky sady zapisovat (CadCraft Studio, nebo složka, kterou jste vybrali v prohlížeči), soubory se uloží do složky `<set name> - published`; jinak se stáhnou jako jeden zip. Přepsání tříd výřezů ([class overrides](topic:viewport-overrides)) se přenesou do každého DWG.

## Archivace sady

{{ui:Archivovat jako zip}} zabalí soubor sady, každý výkres, který používá, a to, na co ty výkresy odkazují (propojené výkresy a jejich odkazy zase, a obrázky), se zachováním jejich složek, a také `Transmittal.txt`, který vypisuje každý soubor. Odkaz, který není ve složce sady, je tam uveden jako chybějící. Odkazy se hledají podle cesty od výkresu, pak podle názvu souboru kdekoli ve složce.

## Soubor sady

Soubor `.ccsheets` je JSON, který můžete přečíst v libovolném textovém editoru:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside Clinic",
  "properties": { "PROJECTNAME": "Riverside Clinic", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Plans", "sheets": [
    { "id": "p1", "file": "plans/Level 1.dwg", "layout": "A-101 Level 1 floor plan", "number": "A-101", "title": "Level 1 floor plan" }
  ] } ]
}
```

Cesty jsou relativní ke složce sady, s `/` mezi složkami. CadCraft soubor při otevření zkontroluje: absolutní cesta, list bez souboru nebo rozvržení, nebo text, který není prostý, se vynechá a historie to řekne.

## Řešení potíží

| Co vidíte | Proč | Co dělat |
|---|---|---|
| „This folder is read only here“ | Prohlížeč nemůže zapisovat do složky | Použijte Chrome nebo Edge, nebo desktopovou aplikaci; mezitím {{ui:Stáhnout soubor sady}} uchová vaše změny |
| List chybí v PDF: „has no layout named …“ | Rozvržení listu bylo ve výkresu přejmenováno nebo odstraněno | Otevřete výkres a zkontrolujte jeho karty; odstraňte list a přidejte jej znovu |
| Razítko zůstane prázdné | Jeho atributy mají jiné značky | Přejmenujte značky atributů na názvy polí výše (BEDIT) |
| „already has a layout named … so that tab was not renamed“ | Dva listy jednoho výkresu by dostaly stejný název karty | Dejte jednomu z nich jiné číslo nebo název |
