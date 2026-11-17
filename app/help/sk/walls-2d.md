---
title: Kreslenie inteligentných múrov, dverí a okien v 2D
summary: Kreslite múry ako lomenú čiaru, čisto ich spájajte a vkladajte dvere a okná, ktoré sa pohybujú spolu s múrom. Všetko v 2D, bez 3D modelu.
keywords: múr, múry, WALL, WA, dvere, DOOR, DR, okno, WINDOW, WN, DELOPENING, inteligentný múr, pôdorys, otváranie, záves, otvor
from: 45845d49
---

Múry tu sú 2D objekty kreslenia. Nevytvárajú 3D model, takže pôdorys zostáva taký ľahký ako kresba čiarami. Pre stavebný model použite BimCraft.

## Kreslenie múrov

Napíšte `WALL` (`WA`) alebo zvoľte {{ui:Múr}} v ponuke {{ui:Viac}} skupiny {{ui:Kreslenie}}, potom klikajte body ako pri lomenej čiare. Dokončite stlačením {{key:Enter}} alebo napíšte `C`, ak chcete miestnosť uzavrieť.

- `T` nastaví hrúbku.
- `J` určí, čoho sa vaše kliknutia držia: stredu múru, alebo jeho ľavej či pravej plochy.
- `F` nastaví výplň: žiadna, plná alebo šrafovanie.

Rohy sa samy skosia. Múr, ktorý končí v hrúbke iného múru, sa k nemu čisto napojí ako T a múry, ktoré sa kríži, sa navzájom otvoria. Spojenia sa ukladajú spolu s múrmi. Obdĺžniky, mnohouholníky, oblúky, rozdeľovanie, zámky a ostatné nájdete v časti "Tvary, rezy, odsadenia a zámky 2D múrov".

## Pridanie dverí a okien

Napíšte `DOOR` (`DR`) alebo `WINDOW` (`WN`) a kliknite na múr. Dvere sa otvárajú na tú stranu múru, na ktorú kliknete. `W` nastaví šírku, `Y` typ a `H` stranu závesu. Ďalej klikajte, ak chcete umiestniť ďalšie, a dokončite stlačením {{key:Enter}}. Dvere môžu byť jednokrídlové, dvojkrídlové, posuvné alebo ako otvorený prechod. Okná môžu byť pevné, výklopné alebo posuvné.

## Úprava

Vyberte múr, aby ste videli jeho úchyty:

- Koncové úchyty natiahnu múr. Múry k nemu spojené ho nasledujú.
- Stredný úchyt posúva múr.
- Úchyt na otvore ho posúva pozdĺž múru.
- Šípky prepnú záves a smer otvárania dverí.

{{ui:Vlastnosti}} zobrazuje hrúbku, výplň a každý otvor: typ, šírku, polohu, záves, otváranie, zobrazenie otvorené alebo zatvorené a {{ui:Odstrániť}}. `DELOPENING` odstráni otvor najbližšie k miestu, na ktoré kliknete.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` a `ERASE` fungujú ako obvykle. Dvere a okná idú so svojím múrom, spojené múry si zachovávajú svoje spojenia a jedno {{ui:Späť}} to všetko vráti.

## V iných programoch

Každý múr sa ukladá ako bežný blok, takže ho iné CAD programy zobrazia správne a môžu ho posúvať, ale nemôžu ho upravovať ako múr. `EXPLODE` premení múr na obyčajné úsečky a oblúky a prestane byť múrom.
