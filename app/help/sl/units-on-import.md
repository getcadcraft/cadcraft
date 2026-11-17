---
title: Enote pri uvozu: datoteka navede svoje enote ali vas najprej vprašamo
summary: Ko datoteka, ki jo uvozite v risbo, navede svoje enote, jo CadCraft pretvori in to pove. Če jih ne navede, CadCraft vpraša, preden kaj postavi, in si zapomni vaš odgovor za to datoteko.
keywords: enote, uvoz, vstavi, xref, pripni, XATTACH, INSERT, OBJ, DWG, DXF, oblak točk, element knjižnice, milimetri, metri, palci, čevlji, merilo, napačna velikost, prevelik, premajhen, 1000-krat, vprašaj, zapomnjeno, INSUNITS
from: 558f1293
---

## Kaj boste naredili

Datoteko uvozite v risbo in se prepričate, da pride v pravi velikosti.

## Koraki

1. Datoteko uvozite kot običajno: `INSERT` › Datoteka, `XATTACH`, `POINTCLOUDATTACH` ali {{ui:Files}} v podoknu Knjižnica.
2. Če datoteka navede svoje enote, ničesar ne vprašamo. Ukazna vrstica pove, katere enote datoteka navede, in merilo, uporabljeno, kadar se razlikujejo od enot risbe.
3. Če jih ne navede, se prikaže pogovorno okno, ki vpraša **Enote datoteke**. Izberite, kaj pomeni ena enota v datoteki, in kliknite {{ui:Use these units}}. Ničesar ne postavi, dokler ne odgovorite.
4. {{ui:Cancel}} (ali {{key:Esc}}) ne uvozi ničesar.

## Katere datoteke navedejo svoje enote

- **DWG in DXF**: vstavitvene enote risbe (`$INSUNITS`). Datoteka brez njih se vpraša.
- **Oblaki točk**: LAS in LAZ s koordinatnim sistemom, E57, PTX in PLY navedejo svoje. Druge se vprašajo.
- **OBJ**: nikoli ne navede enot. Vprašani ste.
- **glTF in GLB**: metri, po pravilu formata.
- **Slike**: nimajo lastne velikosti. `IMAGEATTACH` vpraša za širino in ponudi širino, ki ste jo prej dali tej datoteki.
- **Skeniranja**: skeniranje, ki navede svojo gostoto (pik na palec), se uvozi v pravi velikosti v enotah risbe; `SCANATTACH` še vedno vpraša za širino.
- **Dodatek Oblaki točk**: vpraša, ko zgradite oblak, katerega datoteka ne navede enote, in števila oblaka označi z enoto, ki jo nosi.

## Dobro je vedeti

- Odpiranje DWG ali DXF kot samostojne risbe ničesar ne vpraša: ukazna vrstica pove, katere enote datoteka navede ali da nobenih. {{ui:Properties}} nastavijo enote risbe.
- Če tudi ta risba nima enot, datoteke ni mogoče pretvoriti: postavi se številka za številko, ukazna vrstica pa to pove.
- Odgovor je za to datoteko zapomnjen na tem računalniku v vseh aplikacijah CadCraft. Ko pride spet, vas ne vprašajo, ukazna vrstica pa pove, da so bile uporabljene zapomnjene enote.
- Če želite, da vas spet vpraša: paleta ukazov ({{key:Mod+K}}) › **Ponovno vprašaj za enote uvoženih datotek**.
