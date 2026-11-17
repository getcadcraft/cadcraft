---
title: Konstrukční přímky a polopřímky
summary: Kreslete přímky bez konce (XLINE) nebo od bodu jedním směrem (RAY), aby se věci zarovnaly, a ořízněte je na běžné čáry.
keywords: xline, ray, konstrukční přímka, konstrukční přímky, nekonečná přímka, vodicí přímka, referenční přímka, půlení úhlu, odsazená přímka, pomocné přímky, xl
from: b6c398bc
---

## Co se naučíte

Jak kreslit konstrukční přímky pro zarovnání během kreslení: skrz dva body, vodorovně nebo svisle, pod úhlem, v půli mezi dvěma směry nebo v nastavené vzdálenosti od přímky. A jak je oříznout na běžné čáry, až splní svůj účel.

## Dva druhy

- **Konstrukční přímka** ({{cmd:XLINE}}) běží bez konce oběma směry.
- **Polopřímka** ({{cmd:RAY}}) začíná v bodě a běží bez konce jedním směrem.

Obě se kreslí přes celou kreslicí plochu bez ohledu na přiblížení, v rozdělené obrazovce i ve výřezech na listu. {{ui:Rozsah}} je vynechá, takže přiblížení na výkres stále přizpůsobí to, co jste nakreslili.

## Kreslení konstrukčních přímek

1. Klikněte na {{ui:Kreslení}} › {{ui:Více}} › {{ui:Konstrukční přímka}}, nebo napište `XL` a stiskněte {{key:Enter}}.
2. Klikněte na bod. Každé další kliknutí přidá konstrukční přímku skrz první bod a bod, na který kliknete.
3. Stiskněte {{key:Enter}} pro dokončení.

Místo prvního bodu můžete napsat volbu:

| Volba | Co dělá |
|---|---|
| `H` (vodorovně) | Vodorovné přímky, jedna skrz každý bod, na který kliknete. |
| `V` (svisle) | Svislé přímky skrz každý bod. |
| `A` (úhel) | Přímky v úhlu, který napíšete (stupně, proti směru hodinových ručiček od osy X), skrz každý bod. `R` (reference) měří úhel od přímky, kterou vyberete. |
| `B` (půlení) | Klikněte na roh, pak na bod podél jedné strany: každý bod, na který kliknete podél druhé strany, přidá přímku v polovině mezi oběma. |
| `O` (odsazení) | Napište vzdálenost, vyberte přímku a klikněte na stranu: konstrukční přímka v této vzdálenosti od ní, rovnoběžná. `T` (skrz) ji místo toho umístí skrz bod, na který kliknete. Vzdálenost si příkaz zapamatuje pro příště. |

## Kreslení polopřímek

1. Klikněte na {{ui:Kreslení}} › {{ui:Více}} › {{ui:Polopřímka}}, nebo napište `RAY` a stiskněte {{key:Enter}}.
2. Klikněte tam, kde polopřímky začínají.
3. Klikněte na bod, kterým má každá polopřímka procházet. Stiskněte {{key:Enter}} pro dokončení.

## Uchopení a oříznutí

Konstrukční přímky a polopřímky se uchopují na nejbližší bod, kolmý a průsečík. Nemají konce ani střed, takže Koncový bod a Střed na nich nic nenajdou.

Řežou i jsou řezány jako ostatní čáry v {{cmd:TRIM}} a {{cmd:BREAK}}:

- Oříznete-li jeden konec konstrukční přímky, stane se z ní polopřímka začínající v řezu.
- Oříznete-li vzdálenou část polopřímky, stane se z ní běžná čára.
- Rozdělíte-li konstrukční přímku v jednom bodě, dostanete dvě polopřímky.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} a {{cmd:STRETCH}} fungují s nimi také. Výběr oknem je nikdy nevybere, protože žádné okno nemůže obsáhnout celou nekonečnou přímku; výběr křížením nebo kliknutím ano.

:::note
DWG (každá verze) a DXF 2000 je uchovávají jako konstrukční přímky. DXF R12 je nemá, takže se tam změní na přímky přes celý výkres a uložení to oznámí. Tisk nebo PDF je vykreslí jen přes to, co se tiskne.
:::
