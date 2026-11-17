---
title: Teken slim mure, deure en vensters in 2D
summary: Teken mure soos 'n poliylyn, voeg hulle netjies saam, en plaas deure en vensters wat saam met die muur beweeg. Alles 2D, sonder 'n 3D-model.
keywords: muur, mure, WALL, WA, deur, DOOR, DR, venster, WINDOW, WN, DELOPENING, slim muur, vloerplan, swaai, skarnier, opening
from: 45845d49
---

Mure hier is 2D-tekenvoorwerpe. Hulle maak geen 3D-model nie, so 'n plan bly so lig soos 'n lyntekening. Vir 'n boumodel, gebruik BimCraft.

## Teken mure

Tik `WALL` (`WA`), of kies {{ui:Wall}} in die {{ui:More}}-kieslys van die {{ui:Draw}}-groep, en klik punte soos vir 'n poliylyn. Druk {{key:Enter}} om klaar te maak, of tik `C` om die vertrek te sluit.

- `T` stel die dikte.
- `J` sê waarvoor jou klikke gevolg word: die middel van die muur, of sy linker- of regterkant.
- `F` stel die vulling: geen, massief of arsering.

Hoeke word vanself skuinssnitte. 'n Muur wat binne 'n ander muur se dikte eindig, sluit daarby aan in 'n netjiese T, en mure wat kruis, maak oop vir mekaar. Die verbindings word saam met die mure gestoor. Vir reghoeke, veelhoeke, boë, verdeling, slotte en die res, sien "Muurvorms, snitte, afsette en slotte vir 2D-mure".

## Voeg deure en vensters by

Tik `DOOR` (`DR`) of `WINDOW` (`WN`) en klik op 'n muur. 'n Deur swaai na die kant van die muur waarop jy klik. `W` stel die breedte, `Y` die tipe en `H` die skarnierkant. Hou aan klik om meer te plaas, en druk {{key:Enter}} om klaar te maak. Deure kan enkel, dubbel, skuifdeur of 'n oop deuropening wees. Vensters kan vas, draai- of skuifvensters wees.

## Verander hulle

Kies 'n muur om sy handvatsels te sien:

- Die eindhandvatsels rek die muur. Mure wat daaraan gekoppel is, volg.
- Die middelhandvatsel skuif die muur.
- 'n Handvatsel op 'n opening skuif dit langs die muur.
- Die pyltjies draai 'n deur se skarnier en swaai.

Eienskappe wys die dikte, die vulling en elke opening: tipe, breedte, posisie, skarnier, swaai, oop of toe gewys, en {{ui:Remove}}. `DELOPENING` haal die opening uit wat die naaste is aan waar jy klik.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` en `ERASE` werk soos gewoonlik. Deure en vensters gaan saam met hul muur, gekoppelde mure behou hul verbindings, en een {{ui:Undo}} neem alles terug.

## In ander programme

Elke muur word as 'n gewone blok gestoor, sodat ander CAD-programme dit korrek wys en dit kan skuif, maar hulle kan dit nie as 'n muur wysig nie. `EXPLODE` verander 'n muur in gewone lyne en boë, en dan hou dit op om 'n muur te wees.
