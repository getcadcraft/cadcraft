---
title: Ühikud importimisel: fail ütleb oma ühikud või sinult küsitakse esmalt
summary: Kui fail, mille tood joonisesse, ütleb oma ühikud, teisendab CadCraft selle ja ütleb seda. Kui ei ütle, küsib CadCraft enne midagi paigutamist ja jätab sinu vastuse selle faili jaoks meelde.
keywords: ühikud, import, insert, xref, attach, XATTACH, INSERT, OBJ, DWG, DXF, punktipilv, teegi üksus, millimeetrid, meetrid, tollid, jalad, mõõtkava, vale suurus, liiga suur, liiga väike, 1000 korda, küsi, meeles, INSUNITS
from: 558f1293
---

## Mida teed

Too fail joonisesse ja veendu, et see tuleb sisse õiges suuruses.

## Sammud

1. Too fail sisse nagu tavaliselt: `INSERT` › Fail, `XATTACH`, `POINTCLOUDATTACH` või {{ui:Failid}} teegi paneelil.
2. Kui fail ütleb oma ühikud, ei küsita midagi. Käsurida ütleb, millised ühikud fail ütleb, ning mõõtkava, mida kasutati, kui need erinevad joonise omadest.
3. Kui ei ütle, küsib dialoog **Faili ühikud**. Vali, mis on üks ühik failis, ja klõpsa {{ui:Kasuta neid ühikuid}}. Midagi ei paigutata enne sinu vastust.
4. {{ui:Loobu}} (või {{key:Esc}}) ei too midagi sisse.

## Millised failid ütlevad oma ühikud

- **DWG ja DXF**: joonise sisestusühikud (`$INSUNITS`). Faili kohta, millel neid pole, küsitakse.
- **Punktipilved**: LAS ja LAZ koordinaatsüsteemiga, E57, PTX ja PLY ütlevad oma ühikud. Teiste kohta küsitakse.
- **OBJ**: ei ütle kunagi ühikuid. Sinult küsitakse.
- **glTF ja GLB**: meetrites formaadi enda reegli järgi.
- **Pildid**: neil ei ole oma suurust. `IMAGEATTACH` küsib laiust ja pakub laiust, mille andsid sellele failile varem.
- **Skannid**: skann, mis ütleb oma tiheduse (punkti tollis), tuleb sisse oma tegeliku suurusega joonise ühikutes; `SCANATTACH` küsib siiski laiust.
- **Punktipilvede lisandmoodul**: küsib, kui koostad pilve, mille fail ei ütle ühikut, ja märgistab pilve arvud ühikuga, mida see kannab.

## Hea teada

- DWG või DXF avamine eraldi joonisena ei küsi midagi: käsurida ütleb, millised ühikud fail ütleb, või et ühikuid ei ütle. Omadused seab joonise ühikud.
- Kui sellel joonisel pole samuti ühikuid, ei saa faili teisendada: see paigutatakse number-numbri haaval ja käsurida ütleb seda.
- Vastus jäetakse selle faili jaoks sellesse arvutisse meelde, kõigis CadCraft-i rakendustes. Järgmisel korral, kui see fail tuleb sisse, ei küsita sind ja käsurida ütleb, et kasutati meeldejäetud ühikuid.
- Et küsitaks uuesti: käsupalett ({{key:Mod+K}}) › **Küsi imporditud failide ühikuid uuesti**.
