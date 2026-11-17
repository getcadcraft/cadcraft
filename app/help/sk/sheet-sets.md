---
title: Súbory listov
summary: Zozbierajte listy z mnohých výkresov do jedného očíslovaného zoznamu, vyplňte ich popisové polia zo súboru, publikujte celý súbor ako jedno PDF a archivujte ho ako zip.
keywords: súbor listov, správca súboru listov, ssm, sheetset, ccsheets, dst, zoznam listov, register listov, popisové pole, polia, publikovať, prečíslovať, archivovať, etransmit, transmittal, podskupiny, titulný list, zoznam výkresov
from: 2c855720
---

## Čo sa naučíte

Ako zbierať listy (rozloženia) z viacerých súborov výkresov do **súboru listov**, očíslovať ich a pomenovať, nechať automaticky vyplniť ich popisové polia, publikovať celý súbor ako jedno PDF a zabaliť všetko do jedného zipu na odoslanie.

Súbor listov žije v malom vlastnom súbore `<name>.ccsheets` v priečinku, ktorý drží výkresy. Súbor súboru listov uvádza listy s cestami od toho priečinka, takže môžete celý priečinok presúvať alebo kopírovať.

:::note
Otvorenie priečinka na čítanie a zápis vyžaduje Chrome alebo Edge (môžu povoliť stránke pracovať v priečinku, ktorý vyberiete), alebo aplikáciu pre počítač. Ostatné prehliadače otvoria súbor len na čítanie: môžete si ho prezrieť a publikovať, a súbor súboru sa stiahne namiesto uloženia.
:::

## Začnite súbor

1. Nájdite sekciu {{ui:Súbor listov}} v ľavom paneli a otvorte jej ponuku {{ui:Súbor}}. Zadanie {{cmd:SHEETSET}} (alebo `SSM`) vás tiež sem dostane.
2. Zvoľte {{ui:Nový súbor listov…}}. Zadajte názov súboru a, ak chcete, názov a číslo projektu.
3. Vyberte priečinok, ktorý drží výkresy. Súbor súboru sa uloží tam.

Súbor neskôr otvoríte tak, že zvolíte {{ui:Otvoriť súbor listov…}} a vyberiete ten istý priečinok. Ak priečinok obsahuje viac súborov, CadCraft sa spýta, ktorý.

## Pridanie listov

1. Zvoľte {{ui:Pridať listy z výkresu…}} a vyberte jeden z výkresov v priečinku.
2. CadCraft prečíta výkres na pozadí (neotvára sa na obrazovke) a vypíše jeho listy. Označte tie, ktoré chcete, a kliknite na {{ui:OK}}.
3. Vyberte list a stlačte {{key:F2}} (alebo {{ui:Premenovať a prečíslovať…}}), aby ste mu dali číslo a názov, napríklad `A-101` a `Pôdorys podlažia`.

{{ui:Nový list zo šablóny…}} vytvorí nový výkres zo listu iného výkresu (jeho popisové pole a výrezy), pomenovaný podľa nového listu, a pridá ho. Súbor si zapamätá výkres, ktorý ste použili ako šablónu.

## Usporiadanie súboru

- **Podskupiny** zoskupujú listy, napríklad Architektúra › Pôdorysy: vyberte, kam to patrí, a zvoľte {{ui:Nová podskupina…}}.
- **Poradie**: potiahnite list na iné miesto v zozname alebo na podskupinu, aby sa tam presunul. Klávesnicou ho vyberte a stlačte {{key:Alt+Up}} alebo {{key:Alt+Down}}.
- **Otvorenie listu**: dvojklik na ňom (alebo stlačte {{key:Enter}}). Jeho výkres sa otvorí na vlastnej karte, na tomto liste.
- **Odstrániť**: vyberte ho a stlačte {{key:Delete}}. Samotný výkres sa nezmení.
- **Späť**: {{ui:Vrátiť zmenu súboru}} a {{ui:Zopakovať zmenu súboru}} prechádzajú tým, čo ste v súbore zmenili.
- **Prečíslovanie**: {{ui:Prečíslovať listy…}} očísluje každý list alebo listy jednej podskupiny v poradí zoznamu: predpona, začiatok a krok (`A-` a `101` dajú A-101, A-102 …).

Každá zmena sa hneď uloží do súboru listov.

## Čísla listov z ich polí

Namiesto ručného číslovania nechajte pravidlo zostaviť každé číslo z polí listu, aby list, ktorý sa presunie na iné podlažie alebo disciplínu, dostal nové číslo sám.

1. Dajte každému listu jeho polia: vyberte ho, kliknite na {{ui:Premenovať…}} a do {{ui:Polia tohto listu}} napíšte jedno na riadok, napríklad `DISCIPLINE = A` a `LEVEL = 1`. Pole, ktoré má celý súbor spoločné (napríklad `DISCIPLINE = A`), môže byť v {{ui:Vlastnosti…}} súboru.
2. Otvorte ponuku panela a kliknite na {{ui:Pravidlo číslovania…}}.
3. Napíšte pravidlo, napríklad `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` počíta nahor medzi listami, ktorých ostatné polia majú rovnaký údaj, takže podlažie 1 dostane A-101, A-102 a podlažie 2 začína znova pri A-201. `{SEQ:2}` ho zapíše dvoma číslicami; `{SUBSET}` je názov podskupiny, v ktorej je list.
4. Zvoľte, čo sa stane, keď sa pole zmení: {{ui:Prečíslovať listy}} udrží čísla podľa pravidla po každej zmene; druhá voľba ich očísluje raz, hneď.

Pravidlo sa ukladá v súbore listov. Kým sa čísluje samo, meňte polia listu, nie jeho číslo.

## Vyplnenie popisových polí zo súboru

Popisové pole dostane svoj text zo súboru, keď sú jeho atribúty označené názvom poľa:

| Značka | Čo zobrazí |
|---|---|
| `SHEETNUMBER` (alebo `SHEET_NO`, `DWG_NO`) | Číslo listu |
| `SHEETTITLE` (alebo `TITLE`, `SHEET_TITLE`) | Názov listu |
| `SHEETDESC` | Popis listu |
| `PROJECTNAME` (alebo `PROJECT`) | Názov projektu |
| `PROJECTNUMBER` (alebo `PROJECT_NO`, `JOB_NO`) | Číslo projektu |
| `SHEETSETNAME` | Názov súboru |
| `SHEETINDEX`, `SHEETCOUNT` | „3 z 12“ a 12 |
| Vaše vlastné, napríklad `CLIENT` | Čo ste pre ne napísali v {{ui:Polia súboru…}} |

{{ui:Polia súboru…}} obsahuje názov a číslo projektu a vaše vlastné polia, jedno na riadok ako `NAME = value`.

{{ui:Aktualizovať výkresy}} zapíše čísla, názvy a polia do popisových polí každého výkresu v súbore a premenuje záložku rozloženia každého listu podľa toho, čo súbor hovorí (štandardne číslo a názov, napríklad `A-101 Pôdorys podlažia`; {{ui:Polia súboru…}} › {{ui:Názvy kariet rozloženia}} to mení). Každý výkres sa uloží na mieste, vo vlastnom formáte a verzii. Po prečíslovaní alebo premenovaní listov ho spustite znova a karty aj popisové polia sa podľa toho upravia.

## Zoznam listov na titulnom liste

Vyberte titulný list v zozname a zvoľte {{ui:Dať zoznam listov na tento list}}. Tabuľka všetkých listov (číslo a názov, pod ich podskupinou) sa umiestni do ľavého horného rohu listu. {{ui:Aktualizovať výkresy}} a {{ui:Publikovať do PDF}} ju udržiavajú aktuálnu. Je to jeden blok, `CC_SHEETLIST`: presúvajte ho ako každý odkaz na blok.

## Publikovanie súboru

{{ui:Publikovať do PDF}} vytvorí jedno PDF so stranou na každý list, v poradí súboru, na papieri vlastnej veľkosti každého listu, so záložkou pre každý list („A-101 — Pôdorys podlažia“). Keď je vybraná podskupina, CadCraft sa spýta, či publikovať len ju. Popisové polia v PDF sa vyplnia zo súboru aj predtým, než aktualizujete výkresy; samotné výkresy publikovanie nemení. PDF sa stiahne.

{{ui:Publikovať do DWG…}} zapíše každý list ako vlastný DWG (DWG 2018): model a ten jeden list, s popisovým poľom vyplneným zo súboru, pomenovaný podľa čísla a názvu (`A-101 Level 1 floor plan.dwg`). Zvoľte {{ui:DWG}}, alebo {{ui:DWG + PDF}} pre PDF súboru vedľa nich. `publish.json` uvádza každý súbor s jeho veľkosťou a SHA-256. Keď sa do priečinka súboru dá zapisovať (CadCraft Studio alebo priečinok, ktorý ste vybrali v prehliadači), súbory sa uložia do priečinka `<name> - published`; inak sa stiahnu ako jeden zip. [Prepísania tried](topic:viewport-overrides) výrezov sa prenesú do každého DWG.

## Archivovanie súboru

{{ui:Archivovať ako zip}} zabalí súbor listov, každý výkres, ktorý používa, a to, na čo tieto výkresy odkazujú (prepojené výkresy, a ich výkresy zase, a obrázky), pričom zachová ich priečinky, plus `Transmittal.txt`, ktorý uvádza každý súbor. Odkaz, ktorý nie je v priečinku súboru, sa tam uvedie ako chýbajúci. Odkazy sa nájdu podľa ich cesty z výkresu, potom podľa ich názvu súboru kdekoľvek v priečinku.

## Súbor listov

Súbor `.ccsheets` je JSON, ktorý si môžete prečítať v ľubovoľnom textovom editore:

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

Cesty sú relatívne k priečinku súboru, s `/` medzi priečinkami. CadCraft kontroluje súbor pri jeho otvorení: absolútna cesta, list bez súboru alebo rozloženia alebo text, ktorý nie je čistý, sa vynechá a história to uvedie.

## Riešenie problémov

| Čo vidíte | Prečo | Čo robiť |
|---|---|---|
| „Tento priečinok je tu len na čítanie“ | Prehliadač nemôže zapisovať do priečinka | Použite Chrome alebo Edge, alebo aplikáciu pre počítač; medzitým {{ui:Stiahnuť súbor súboru listov}} uchová vaše zmeny |
| List chýba v PDF: „nemá rozloženie s názvom …“ | Rozloženie listu bolo v jeho výkrese premenované alebo odstránené | Otvorte výkres a skontrolujte jeho karty; odstráňte list a pridajte ho znova |
| Popisové pole zostane prázdne | Jeho atribúty majú iné značky | Premenujte značky atribútov na názvy polí uvedené vyššie (BEDIT) |
| „už má rozloženie s názvom … takže karta nebola premenovaná“ | Dva listy jedného výkresu by dostali rovnaký názov karty | Jednému z nich dajte iné číslo alebo názov |
