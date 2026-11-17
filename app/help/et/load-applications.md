---
title: Rakenduste laadimine (APPLOAD)
summary: Laadi LISP-rutiinid ja nende dialoogifailid, tühista laadimine, laadi need uuesti ajaloost ning hoia kasutatavaid rutiine käivitussviidis.
keywords: appload, ap, laadi rakendus, lisp, lsp, dcl, rutiin, käivitussviit, tühista laadimine, ajalugu, lohista, laadi, kohanda, halda
from: 89e0ee95
---

## Mida sa õpid

Kuidas laadida LISP-rutiin (`.lsp`-fail) nii, et selle käsud CadCraftis töötavad, kuidas seda tühistada ning kuidas panna see laadima iga kord, kui CadCraft käivitub.

## Rutiini laadimine

1. Ava {{ui:Vaade}} › {{ui:Veel}} › {{ui:Laadi rakendus…}} või sisesta {{cmd:APPLOAD}} (või `AP`) ja vajuta {{key:Enter}}.
2. Klõpsa {{ui:Laadi fail…}} ja vali üks või mitu `.lsp`-faili. Rutiin, mis avab dialoogi, tuleb tavaliselt koos `.dcl`-failiga: vali see ka.
3. Dialoog ütleb, mida iga fail tegi, näiteks „Laaditud delblocks.lsp: 1 käsk, DELBLOCKS.“
4. Klõpsa {{ui:Sulge}}, sisesta rutiini käsk ja vajuta {{key:Enter}}.

Võid ka lohistada `.lsp`- ja `.dcl`-failid joonisele või dialoogile „Laadi rakendused“: need laaditakse kohe.

Fail loetakse siin, sinu brauseris. Midagi ei laadita üles.

:::tip
Vajuta tühjal käsureal {{key:Enter}}, et rutiini käsk uuesti käivitada, nagu iga teine käsk. Ka sinu käsualiased pääsevad sinna ligi: vt „Käsualiaste muutmine“.
:::

## Rutiini tühistamine

Dialoogis {{ui:Laadi rakendused}} all {{ui:Laaditud rakendused}} klõpsa faili kõrval {{ui:Tühista laadimine}}. Käsud, mida see tegi, kaovad, kuni laadid faili uuesti.

## Rutiini laadimine iga CadCraft'i käivitamisel

1. Laadi rutiin.
2. Jaotises {{ui:Laaditud rakendused}} klõpsa selle kõrval {{ui:Lisa käivitussviiti}}.

Alates sellest hetkest laadib see end ise, kui CadCraft selles brauseris käivitub. Selle lõpetamiseks klõpsa jaotises {{ui:Käivitussviit}} selle kõrval {{ui:Eemalda}}.

Käivitussviit hoiab selle brauseri salvestusruumis koopiat igast failist. Kui muudad rutiini, laadi uus fail ja lisa see uuesti.

## Laadi acad.lsp ja acaddoc.lsp toetuskaustast (Studio)

Rakenduses CadCraft Studio võtab dialoogi {{ui:Laadi rakendused}} väli {{ui:Toetuskaust}} kausta sinu arvutis. Klõpsa {{ui:Vali kaust…}}. CadCraft'i käivitumisel loeb see kaustast `acad.lsp` ja seejärel `acaddoc.lsp` (failinimede suurtähed ja väiketähed ei loe), laadib need ning laadib seejärel käivitussviidi. `acaddoc.lsp` loetakse uuesti iga kord, kui avaneb uus joonise vahekaart. Kausta teisi faile ei loeta ning üle 2 MB suurused failid jäetakse teatega vahele.

Kui fail määratleb funktsiooni nimega `S::STARTUP`, käivitub see üks kord pärast failide laadimist (ka pärast käivitussviiti). {{ui:Laadi kohe}} teeb sama nõudmisel; {{ui:Tühjenda}} unustab kausta.

Brauseris ei saa leht kausta hoida, seega toetuskausta seal ei ole: kasuta ülal kirjeldatud käivitussviiti. Kompileeritud `.fas`- ja `.vlx`-failid ning natiivsed programmid jäävad keelatuks.

## Laadi fail ajaloost uuesti

{{ui:Ajalugu}} loetleb selles brauseris laaditud failid, uuemad enne. Klõpsa ühe kõrval {{ui:Laadi}}, et see uuesti laadida, ilma et seda oma arvutist otsiksid.

## Failid, mida CadCraft ei saa laadida

| Fail | Mis see on | Mida teha |
|---|---|---|
| `.fas`, `.vlx` | kompileeritud või kaitstud LISP | laadi selle asemel `.lsp`-lähtekood |
| `.arx`, `.crx`, `.dbx` | natiivsed Windowsi programmid | neid ei saa CadCraftis käivitada |
| `.dvb` | VBA-projekt | neid ei saa CadCraftis käivitada |
| `.craft`, `.lua`, `.py` | CraftScripti skriptid | ava need PartCrafti skriptitööruumis |

Dialoog „Laadi rakendused“ ütleb faili valimisel, millisesse neist kategooriatest see kuulub.

## Rutiini peatamine

Vajuta {{key:Esc}}. Rutiini ühe küsimuse juures tühistab Esc selle nii, nagu rutiin ette näeb (selle enda koristus käivitub). Kui rutiin on hõivatud ega küsi midagi, peatab Esc selle kohe ja ütleb seda; sinu laaditud rutiinid jäävad laaditud.

:::note
Kõik, mida rutiin joonisel muudab, on üks samm: üks {{key:Mod+Z}} võtab kõik tagasi.
:::
