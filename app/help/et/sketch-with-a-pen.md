---
title: Visandamine pliiatsiga ja täpse geomeetria saamine
summary: Joonista pliiatsi, hiire või sõrmega vabakäe ja iga joon muutub puhtaks joooneks, ringiks, kaareks, ristkülikuks või polyjooneks, kui tõstad pliiatsi, joonisele püütuna, suurus valmis ülekirjutamiseks.
keywords: visand, pliiats, vabakäe, sõrm, puhasta, täpne, püüdmine, SKETCHLIVE, SKETCHFIX, suurus, üle kirjutada, rõhk, joonepaksus, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Käivita {{cmd:SKETCHLIVE}} (või vali **Joonista › Veel › Visand pliiatsiga**) ja joonista joon vajutades ja lohistades. Kui tõstad pliiatsi, loeb CadCraft, mida mõtlesid, ja paneb selle joonisele:

| Sinu joon | Mida saad |
|---|---|
| Peaaegu sirge | Joon. Peaaegu horisontaalne või vertikaalne joon muudetakse täpselt horisontaalseks või vertikaalseks. |
| Suletud ja ümmargune | Ring |
| Osa ümarast kujust | Kaar |
| Suletud nelja täisnurgaga nurgaga | Ristkülik |
| Mis tahes muu | Polyjoon ruudustatud külgedega |

Joone otsad tõmmatakse joonisel juba oleva lähima otsa külge, nii et visandatud sein kohtub kõrvaloleva seinaga.

## Suuruse ülekirjutamine

Pärast iga joont näitab käsurida selle suurust (joone **pikkus**, ringi või kaare **raadius**, ristküliku **laius**) vaikeväärtusena. Vajuta {{key:Enter}}, et see alles jätta, või sisesta arv või pikkus nagu `12'6"`, et see asendada. Joon säilitab oma esimese otsa, ring oma keskpunkti, ristkülik oma esimese nurga.

Vajuta tühjal küsimusel {{key:Enter}}, et lõpetada, või sisesta `U`, et viimane joon tagasi võtta. Kogu seanss on üks tagasivõtmise samm.

## Mitme joone korraga puhastamine

{{cmd:SKETCHFIX}} kogub jooni ja teeb need kõik täpseks, kui vajutad {{key:Enter}}; see sobib kiiresti joonistatud karkeks paigutuseks.

:::note
Kõik arvutatakse sinu arvutis reeglite järgi, ilma mudeli ja saatmiseta kuhugi.
:::

## Rõhk määrab joonepaksuse

Kus pliiats on rakenduste jaoks sisse lülitatud (Sätted › Üldine › Sisendseadmed › Pliiats), kannab pliiatsiga joonistatud joon iga punkti, mille pliiats andis, ja selle rõhu. Kerge joon teeb õhukese objekti ja tugev paksu: joone keskmine rõhk valib 0,18, 0,25, 0,35 või 0,50 mm, ja käsurida ütleb, milline. Hiire või sõrmega joonistatud jooned võtavad praeguse joonepaksuse nagu varem. {{cmd:PENPRESSURE}} lülitab selle välja (või uuesti sisse); valik jääb sellesse brauserisse.
