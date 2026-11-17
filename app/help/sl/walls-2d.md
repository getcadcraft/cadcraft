---
title: Pametni zidovi, vrata in okna v 2D
summary: Riši zidove kot polilinijo, lepo jih spajaj in vstavljaj vrata ter okna, ki se premikajo z zidom. Vse v 2D, brez 3D modela.
keywords: zid, zidovi, WALL, WA, vrata, DOOR, DR, okno, WINDOW, WN, DELOPENING, pameten zid, tloris, odpiranje krila, tečaj, odprtina
from: 45845d49
---

Zidovi tukaj so 2D risalni objekti. Ne ustvarjajo 3D modela, zato je tloris lahek kakor črtna risba. Za model stavbe uporabite BimCraft.

## Riši zidove

Vtipkajte `WALL` (`WA`) ali izberite {{ui:Zid}} v meniju {{ui:Več}} skupine {{ui:Risanje}}, nato klikajte točke, kakor bi za polilinijo. Za konec pritisnite {{key:Enter}} ali vtipkajte `C`, da zaprete prostor.

- `T` nastavi debelino.
- `J` pove, čemu sledijo vaši kliki: središču zidu ali njegovi levi ali desni ploskvi.
- `F` nastavi polnilo: brez, polno ali šrafura.

Vogali se sami zarežejo. Zid, ki se konča znotraj debeline drugega zidu, se spoji v čist T, zidovi, ki se križajo, pa se odprejo drug proti drugemu. Spoji se shranijo z zidovi. Za pravokotnike, mnogokotnike, loke, rezanje, zaklepe in ostalo glejte „Oblike zidov, rezi, odmiki in zaklepi za 2D zidove“.

## Dodajte vrata in okna

Vtipkajte `DOOR` (`DR`) ali `WINDOW` (`WN`) in kliknite na zid. Vrata se odprejo na stran zidu, na katero kliknete. `W` nastavi širino, `Y` vrsto in `H` stran tečaja. Še naprej klikajte, da postavite več, za konec pritisnite {{key:Enter}}. Vrata so lahko enojna, dvojna, drsna ali kot odprt prehod. Okna so lahko fiksna, krilna ali drsna.

## Spremenite jih

Izberite zid, da vidite njegove ročice:

- Ročice na koncih raztegnejo zid. Zidovi, pripeti nanj, sledijo.
- Srednja ročica premakne zid.
- Ročica na odprtini jo drsi vzdolž zidu.
- Puščice obrnejo tečaj vrat in smer odpiranja.

Lastnosti prikažejo debelino, polnilo in vsako odprtino: vrsto, širino, položaj, tečaj, odpiranje, ali je prikazana odprta ali zaprta, in {{ui:Odstrani (R)}}. `DELOPENING` odstrani odprtino, najbližjo mestu, kamor kliknete.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` in `ERASE` delujejo kakor običajno. Vrata in okna gredo s svojim zidom, pripeti zidovi ohranijo svoje spoje, en {{ui:Razveljavi}} pa vse povrne.

## V drugih programih

Vsak zid se shrani kot navaden blok, zato ga drugi CAD programi prikažejo pravilno in ga lahko premikajo, vendar ga ne morejo urejati kot zid. `EXPLODE` pretvori zid v navadne črte in loke, zid pa preneha biti zid.
