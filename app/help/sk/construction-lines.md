---
title: Konštrukčné čiary a lúče
summary: Kreslite čiary, ktoré bez konca pokračujú (XLINE) alebo z bodu jedným smerom (RAY), aby ste veci zarovnali, a orezajte ich na obyčajné čiary.
keywords: xline, ray, konštrukčná čiara, konštrukčné čiary, nekonečná čiara, vodiaca čiara, referenčná čiara, rozpoliť, odsadená čiara, čiary rozloženia, xl
from: b6c398bc
---

## Čo sa naučíte

Ako kresliť konštrukčné čiary na zarovnanie počas kreslenia: cez dva body, vodorovne alebo zvisle, pod uhlom, uprostred medzi dvoma smermi alebo v nastavenej vzdialenosti od čiary. A ako ich orezať na obyčajné čiary, keď splnia svoju úlohu.

## Dva druhy

- **Konštrukčná čiara** ({{cmd:XLINE}}) pokračuje bez konca oboma smermi.
- **Lúč** ({{cmd:RAY}}) začína v bode a pokračuje bez konca jedným smerom.

Obe sa kreslia cez celú plochu výkresu bez ohľadu na zväčšenie, v rozdelenej obrazovke aj vo výrezoch na liste. {{ui:Rozsah}} ich vynechá, takže zväčšenie na rozsah stále zodpovedá tomu, čo ste nakreslili.

## Kreslenie konštrukčných čiar

1. Kliknite na {{ui:Kreslenie}} › {{ui:Viac}} › {{ui:Konštrukčná čiara}}, alebo napíšte `XL` a stlačte {{key:Enter}}.
2. Kliknite na bod. Každé ďalšie kliknutie pridá konštrukčnú čiaru cez prvý bod a bod, na ktorý kliknete.
3. Dokončite stlačením klávesu {{key:Enter}}.

Namiesto prvého bodu môžete napísať voľbu:

| Voľba | Čo robí |
|---|---|
| `H` (Vod) | Vodorovné čiary, jedna cez každý bod, na ktorý kliknete. |
| `V` (Zvi) | Zvislé čiary cez každý bod. |
| `A` (Uhol) | Čiary pod uhlom, ktorý napíšete (stupne, proti smeru hodinových ručičiek od osi X), cez každý bod. `R` (referencia) meria uhol od čiary, ktorú vyberiete. |
| `B` (Rozp) | Kliknite na roh, potom na bod pozdĺž jednej strany: každý bod, na ktorý kliknete pozdĺž druhej strany, pridá čiaru v polovici medzi nimi. |
| `O` (Odsad) | Napíšte vzdialenosť, vyberte čiaru a potom kliknite na stranu: konštrukčná čiara v tejto vzdialenosti od nej, rovnobežná. `T` (cez) ju umiestni cez bod, na ktorý kliknete namiesto toho. Vzdialenosť sa zapamätá na ďalší raz. |

## Kreslenie lúčov

1. Kliknite na {{ui:Kreslenie}} › {{ui:Viac}} › {{ui:Lúč}}, alebo napíšte `RAY` a stlačte {{key:Enter}}.
2. Kliknite tam, kde lúče začínajú.
3. Kliknite na bod, ktorým má každý lúč prechádzať. Dokončite stlačením {{key:Enter}}.

## Prichytávanie k nim a ich orezávanie

Konštrukčné čiary a lúče sa prichytávajú k najbližšiemu, kolmici a priesečníku. Nemajú konce ani stred, takže koncový bod a stred úsečky na nich nič nenájdu.

Režú a sú rezané ako ostatné čiary pri {{cmd:TRIM}} a {{cmd:BREAK}}:

- Orezaním jedného konca konštrukčnej čiary sa stane lúčom, ktorý začína v reze.
- Orezaním vzdialenej časti lúča sa stane obyčajnou čiarou.
- Prerušením konštrukčnej čiary v jednom bode dostanete dva lúče.

Na nich fungujú aj {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} a {{cmd:STRETCH}}. Výber oknom ich nikdy nevyberie, lebo žiadne okno nedokáže obsiahnuť celú nekonečnú čiaru; vyberie ich prekríženie alebo kliknutie.

:::note
Súbory DWG (všetky verzie) a DXF 2000 ich uchovajú ako konštrukčné čiary. DXF R12 ich nemá, takže sa tam stanú čiarami cez celý výkres a uloženie to oznámi. Vykreslenie alebo PDF ich nakreslí len cez to, čo sa tlačí.
:::
