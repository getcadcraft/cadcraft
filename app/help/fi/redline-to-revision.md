---
title: Muuta merkintä revisioksi
summary: Lue MarkupCraftin kirjoittama punamerkintäpaketti, hyväksy tai hylkää jokainen muutos, aseta hyväksytyille revisiopilvi ja revisiolokitus, ja tallenna vastaustiedosto, jonka MarkupCraft lukee takaisin.
keywords: punamerkintä, muutos, merkintä, revisio, pilvi, revisiopilvi, revisiolokitus, hyväksy, hylkää, markupcraft, katselmointi, punamerkintäpaketti, vastaukset, REDLINE
from: cdb3fafe
---

Katselija merkitsee tasosarjan MarkupCraftissa ja lähettää sinulle **punamerkintäpaketin**, tiedoston, jonka pääte on `.redline.json`. Tässä käyt paketin läpi muutos kerrallaan. Hyväksytyistä muutoksista tulee revisiopilviä piirustukseen.

## Käy muutokset läpi

Kirjoita {{cmd:REDLINE}} (`RDL`) ja valitse paketti. Valitse:

- {{ui:List}} (Luettele): jokainen muutos numeroineen, tilaineen, arkkineen, lajineen, pyytäjineen ja kirjoituksineen.
- {{ui:Accept}} (Hyväksy), {{ui:Reject}} (Hylkää), {{ui:Done}} (Valmis): kirjoita numerot (`1,3-5`, tai `All`) ja valinnainen huomautus vastaustiedostoon. {{ui:Reopen}} (Avaa uudelleen) palauttaa muutokset avoimiksi.
- {{ui:Frame}} (Kehä): se osa piirustusta, jonka merkitty arkki näyttää. Napsauta kahta kulmaa. Paina {{key:Enter}} koko piirustukselle. Muutokset sijoitetaan sen mukaan, missä ne olivat arkilla, joten tämä linjaa ne oikein.
- {{ui:Apply}} (Käytä): piirtää revisiopilven (taso `REV-CLOUD`, revisiokirjaimen kanssa) jokaisen hyväksytyn tai valmiin muutoksen ympärille. Lisäksi se piirtää piirustuksen oikealle puolelle revisiolokituksen (taso `REV-LOG`). Se on viivoitettu taulukko hyväksytyistä muutoksista huomautuksinesi. Yksi kumoamisvaihe.
- {{ui:Save}} (Tallenna): kirjoittaa tiedoston `<project>-<revision>.redline-answers.json`. Avaa se MarkupCraftissa, niin merkinnät sulkeutuvat: Hyväksytty, Hylätty tai Valmis, ja huomautuksesi näkyvät kommentteina.

## Mitä tietää

Katselijan kirjoittama näytetään sellaisena kuin se on kirjoitettu. CadCraft ei koskaan seuraa paketista löytyviä ohjeita. Se vain näyttää ne sinulle.

Hylätyt ja avoimet muutokset eivät lisää piirustukseen mitään. Paketti luetaan tietokoneellasi, eikä mitään lähetetä.

Jos avustajasi on yhdistetty, se voi lukea paketin, kirjata päätökset ja käyttää ne työkaluilla `redline_read`, `redline_decide`, `redline_apply` ja `redline_answers`. Piirustuksen muutos tapahtuu yhdellä kumoamisvaiheella, nimeltään "Avustaja: Muuta merkintä revisioksi".
