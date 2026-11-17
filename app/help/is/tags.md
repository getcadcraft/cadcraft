---
title: Merki: eigindi sem mata lista
summary: Skilgreindu merki (gerð þess, gildin sem það má taka, blokkirnar sem það á við um), settu það á blokkatilvísanir, og birtu tilvísanirnar sem lista sem þú getur vistað sem CSV.
keywords: merki, eigind, eiginleiki, listi, gagnaútdráttur, eign, brunaþol, vallisti, blokkatilvísun, TAGS, csv
from: 9b90bacc
---

**Merki** er blokkareigind með skilgreiningu: hvaða tegund gildis það geymir, hvaða gildi eru leyfð, og hvaða blokkir það á við um. Gildin eru venjulegar blokkareigindir, þannig að hvert annað forrit les þau og {{cmd:ATTEDIT}} sýnir þau. Aðeins skilgreiningarnar eru nýjar, og þær eru geymdar í teikningunni.

## Skilgreina og setja

Skrifaðu {{cmd:TAGS}} og veldu:

- {{ui:Skilgreina}}: nafn (bókstafir, tölustafir, bil, `_ . -`), tegund (`text`, `number`, `integer`, `yesno`, `length`, `angle`), leyfð gildi aðskilin með `;` (skildu eftir tómt fyrir hvaða sem er), og heiti blokkanna sem það á við um (`DOOR*` passar við hverja blokk sem byrjar á DOOR; tómt þýðir hverja blokk).
- {{ui:Sett}}: með valdar blokkatilvísanir, skrifaðu `FireRating=60 min; Width=850`. Gildi utan leyfðs lista, eða ekki tala fyrir talnamerki, er hafnað og sagt frá því. Eitt skref í afturköllun. Blokk sem hefur ekki eigindið fær það sem falið eigindi.
- {{ui:Listi}}: sérhver tilvísun í blokk sem merki á við um, valfrjálst flokkuð eftir merki eða blokkaheiti, prentuð og vistuð sem CSV.
- {{ui:Fjarlægja}}: gleymir skilgreiningu; gildin verða eftir á tilvísunum.

Endurnefning merkis endurnefnir gildi þess á hverri tilvísun. Heiti merkja eru ekki hástafanæm, eins og eigindaheiti eru ekki.
