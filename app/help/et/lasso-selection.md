---
title: Lasso-valik
summary: Vajuta ja lohista vabakäelist joont objektide ümber, et neid valida aknana, ristumisvalikuna või piirdeaiana; joont lohistades vaheta valikut klahviga Space.
keywords: lasso, lassomode, lohistamine, vabakäeline, vali, valik, aken, ristumine, piirdeaed, Space, hulknurk, puuteekraan, pliiats, ristkülik
from: 9ec6154d
---

## Mida sa õpid

Kuidas valida objekte nende ümber joonistades ja kuidas vajadusel saada tagasi ristkülikuline valik.

## Lasso joonistamine

1. Joonista mõned jooned ja ringid lähestikku.
2. Kui ühtegi käsku ei käi, vajuta hiire nuppu tühjal kohal ja lohista nende ümber, liikudes esmalt **paremale**.
3. Lase lahti.

Valitakse ainult need objektid, mis on täielikult joone sees. Joon on lohistamise ajal pidev: see on aknalasso.

## Aken, ristumine ja piirdeaed

Milliseid objekte saad, sõltub lohistamise esimesest liigutusest ja klahvist {{key:Space}}:

| Lohistad | Lasso | Valib |
|---|---|---|
| Esmalt paremale | Aken (pidev joon) | Ainult **täielikult sees** olevad objektid |
| Esmalt vasakule | Ristumine (katkendlik, roheline) | Sees olevad objektid **ja** need, keda joon puudutab |
| Vajuta {{key:Space}} lohistamise ajal | Aken, seejärel ristumine, seejärel piirdeaed | Piirdeaed (katkendlik tee, mitte suletud): ainult need objektid, mida tee läbib |

1. Vajuta tühjal kohal ja lohista mõnede objektide ümber, liikudes esmalt **vasakule**. Kõik, mida joon puudutab, valitakse samuti.
2. Vajuta {{key:Esc}}.
3. Vajuta ja lohista uuesti; nuppu all hoides vajuta üks kord {{key:Space}}. Joon muutub ristumiseks; vajuta {{key:Space}} uuesti piirdeaia jaoks.

{{key:Shift}} lahtilaskmisel eemaldab objektid hoopis valikust (kui sätetes on „Objektide klõpsamine: Lisa“).

## Käsu sees

Lasso töötab kõikjal, kus CadCraft küsib `Select objects`: joonista see ja lõpetamiseks vajuta {{key:Enter}}. {{cmd:STRETCH}} kasutab ristumislassot oma aknana, nii et saad joonise L-kujulise osa venitada ühe korraga.

{{cmd:TRIM}} ja {{cmd:EXTEND}} kasutavad lohistamist teisiti: seal kärbitakse (või pikendatakse) iga tükki, mida tee läbib. Vt [Kärbi ja pikenda](topic:trim-and-extend).

## Ristkülik

Klõps tühjal kohal, liigutus ja teine klõps joonistavad alati ristküliku akna (vasakult paremale) või ristumise (paremalt vasakule).

Et lohistamine joonistaks taas ristküliku, ava {{ui:Sätted}} › {{ui:CadCraft}} › {{ui:Valimine lohistamisega}} ja vali {{ui:Ristkülik}}, või sisesta {{cmd:LASSOMODE}} ja seejärel `0`. Lasso jaoks sisesta {{cmd:LASSOMODE}} ja seejärel `1`. Valik jääb sellesse brauserisse alles.

:::touch
Lohista sõrme või pliiatsiga samamoodi. Puudutus valib ikka ühe objekti.
:::

## Levinud vead

- **Midagi ei valitud.** Lasso oli aken ja ükski objekt ei jäänud täielikult sisse. Alusta lohistamist vasakule või vajuta lohistamise ajal {{key:Space}}.
- **Lohistamine liigutas käepidet.** Valitud objekti käepidemele vajutamine liigutab käepidet. Alusta lasso tühjal kohal.
- **Space lõpetas käsu.** {{key:Space}} vahetab lassot ainult siis, kui nupp on all; muidu on see {{key:Enter}}.
