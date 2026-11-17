---
title: Tunnisteet: attribuutit, jotka syöttävät luetteloita
summary: Määritä tunniste (sen laji, arvot joita se voi saada, lohkot, joihin se kohdistuu), aseta se lohkoviittauksiin ja listaa viittaukset luetteloksi, jonka voit tallentaa CSV-tiedostona.
keywords: tunnisteet, tunniste, attribuutti, luettelo, tiedonkeruu, ominaisuus, palonkestävyys, valintalista, lohkoviittaus, TAGS, csv
from: 9b90bacc
---

**Tunniste** on lohkon attribuutti, jolla on määritelmä: minkälaista arvoa se pitää, mitkä arvot ovat sallittuja ja mihin lohkoihin se kohdistuu. Arvot ovat tavallisia lohkon attribuutteja, joten mikä tahansa muu ohjelma lukee ne ja {{cmd:ATTEDIT}} näyttää ne. Vain määritelmät ovat uusia, ja ne säilytetään piirustuksessa.

## Määritä ja aseta

Kirjoita {{cmd:TAGS}} ja valitse:

- {{ui:Määritä}}: nimi (kirjaimet, numerot, väli, `_ . -`), laji (`text`, `number`, `integer`, `yesno`, `length`, `angle`), sallitut arvot erotettuna `;`-merkillä (jätä tyhjäksi kaikille arvoille) ja lohkojen nimet, joihin se kohdistuu (`DOOR*` vastaa jokaista lohkoa, joka alkaa sanalla DOOR; tyhjä tarkoittaa kaikkia lohkoja).
- {{ui:Sarja}}: kun lohkoviittaukset on valittu, kirjoita `FireRating=60 min; Width=850`. Sallitun listan ulkopuolinen arvo tai numerotunnisteelle ei-numeerinen arvo hylätään ja siitä ilmoitetaan. Yksi kumoamisvaihe. Lohko, jolla ei ole attribuuttia, saa sen piilotettuna attribuuttina.
- {{ui:Luettelo (C)}}: jokainen viittaus lohkoon, johon tunniste kohdistuu, valinnaisesti ryhmiteltynä tunnisteen tai lohkon nimen mukaan, tulostettuna ja tallennettuna CSV-muodossa.
- {{ui:Poista}}: unohtaa määritelmän; arvot säilyvät viittauksissa.

Tunnisteen uudelleennimeäminen nimeää myös sen arvot uudelleen jokaisessa viittauksessa. Tunnisteiden nimet eivät ole isoista ja pienistä kirjaimista riippuvia, kuten eivät attribuuttien nimetkään.
