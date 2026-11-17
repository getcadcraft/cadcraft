---
title: Yhdistä kahden henkilön muokkaukset samaan piirustukseen
summary: Anna git-, Fossil- tai Mercurial-ohjelman yhdistää kaksi DWG- tai DXF-tiedoston kopiota kohde kerrallaan CadCraftin jokaisessa kohteessa pitämän avaimen avulla.
keywords: yhdistä, git, fossil, mercurial, versionhallinta, diff, ristiriita, kolmisuuntainen, CadCraft-yhdistäminen, avain, gitattributes, DWG, DXF
from: 71482bf9
---

Kaksi henkilöä muokkaa samaa piirustusta. Jos he muuttivat eri kohteita, yhdistäminen voi tapahtua automaattisesti: mitään ei tarvitse tehdä uudelleen käsin.

## Mikä saa sen toimimaan

CadCraft antaa jokaiselle piirtämällesi kohteelle lyhyen **avaimen**, joka ei koskaan muutu eikä koskaan anneta kahdelle kohteelle. Se tallennetaan kohteen mukana DWG- tai DXF-tiedostoon (lisätietona, jonka muut ohjelmat säilyttävät). Yhdistäminen etsii kohteet tämän avaimen perusteella, ei niiden paikan perusteella tiedostossa, koska jokainen ohjelma numeroi paikat uudelleen tallentaessaan. Poista tämä käytöstä kohdassa Asetukset › CadCraft › Yhdistämiseen sopivat tiedostot, jos et koskaan yhdistä; tiedostot ovat noin 10 prosenttia pienempiä.

Piirustus, joka on tallennettu ennen avaimia, yhdistyy silti: sen kohteet saavat avaimen paikastaan tiedostossa, ja sama avain tulee kaikille, jotka sen avaavat.

## Asetus

Git tarvitsee kaksi riviä kerran jokaista tietovarastoa kohti:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# kerran, jokaisella tietokoneella
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Ilman gitiä aja se käsin: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil ja Mercurial ottavat samat kolme tiedostoa omassa yhdistystyökalun asetuksessaan.

## Säännöt

- Kohde, joka on muuttunut vain toisella puolella, otetaan. Sama muutos molemmilla puolilla otetaan kerran.
- Sama ominaisuus muuttunut kahdella tavalla on **ristiriita**: oma puolesi säilyy, ja raportti luettelee molemmat arvot. Avaa tulos, tarkastele kohdetta ja korjaa se käsin.
- Kumman tahansa puolen lisäämä kohde säilyy. Kohde, joka on poistettu toisella puolella ja jota toinen puoli ei ole koskenut, poistetaan. Poistettu toisella puolella ja muutettu toisella: poistetaan ja ilmoitetaan.
- Tasot, lohkot, teksti- ja mitoitustyylit, arkit ja nimetyt näkymät yhdistyvät samalla tavalla. Rajoitteet seuraavat kohteita, joita ne nimeävät.
- Tulos kirjoitetaan samassa tiedostomuodossa ja versiossa kuin omasi.

Ei yhdistetä: piirtojärjestys on omasi, sitten toisen puolen lisäämät kohteet. Saman lohkomääritelmän muutokset molemmilla puolilla ovat ristiriita, eikä niitä koskaan sekoiteta. Mitään ei lähetetä; kaikki toimii tietokoneellasi.
