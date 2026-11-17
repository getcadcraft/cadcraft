---
title: Apuviivat ja säteet
summary: Piirrä viivoja, jotka jatkuvat ilman päätä (XLINE) tai kulkevat pisteestä yhteen suuntaan (RAY), jotta asiat asettuvat linjaan, ja typistä ne tavallisiksi viivoiksi.
keywords: xline, ray, apuviiva, apuviivat, rakennusviiva, ääretön viiva, ohjausviiva, viitesuora, puolittaa, siirtymäviiva, asettelulinjat, xl
from: b6c398bc
---

## Mitä opit

Miten piirretään apuviivoja, jotka asettavat asiat linjaan piirtäessä: kahden pisteen kautta, vaakasuoraan tai pystysuoraan, tietyssä kulmassa, kahden suunnan puolivälissä tai tietyn etäisyyden päässä viivasta. Ja miten ne typistetään tavallisiksi viivoiksi, kun ne ovat täyttäneet tehtävänsä.

## Kaksi lajia

- **Apuviiva** ({{cmd:XLINE}}) jatkuu ilman päätä molempiin suuntiin.
- **Säde** ({{cmd:RAY}}) alkaa pisteestä ja jatkuu ilman päätä yhteen suuntaan.

Molemmat piirtyvät koko piirustusalueen yli zoomauksesta riippumatta, jaetussa näkymässä ja arkin näkymäruuduissa. {{ui:Laajuus}} jättää ne pois, joten piirustukseen zoomaaminen sovittaa silti vain sen, minkä piirsit.

## Piirrä apuviivoja

1. Napsauta {{ui:Piirrä}} › {{ui:Lisää}} › {{ui:Apuviiva}} tai kirjoita `XL` ja paina {{key:Enter}}.
2. Napsauta pistettä. Jokainen seuraava napsautus lisää apuviivan ensimmäisen pisteen ja napsauttamasi pisteen kautta.
3. Lopeta painamalla {{key:Enter}}.

Ensimmäisen pisteen sijaan voit kirjoittaa vaihtoehdon:

| Vaihtoehto | Mitä se tekee |
|---|---|
| `H` (Hor) | Vaakasuorat viivat, yksi jokaisen napsauttamasi pisteen kautta. |
| `V` (Ver) | Pystysuorat viivat jokaisen pisteen kautta. |
| `A` (Ang) | Viivat kirjoittamassasi kulmassa (asteina, vastapäivään X-akselista), jokaisen pisteen kautta. `R` (Reference) mittaa kulman valitsemastasi viivasta. |
| `B` (Bisect) | Napsauta kulmaa ja sitten pistettä yhden sivun varrella: jokainen toisen sivun varrella napsauttamasi piste lisää viivan kahden suunnan puoliväliin. |
| `O` (Offset) | Kirjoita etäisyys, valitse viiva ja napsauta puolta: apuviiva sen etäisyyden päässä, yhdensuuntainen. `T` (Through) asettaa sen napsauttamasi pisteen kautta. Etäisyys muistetaan seuraavaa kertaa varten. |

## Piirrä säteitä

1. Napsauta {{ui:Piirrä}} › {{ui:Lisää}} › {{ui:Säde}} tai kirjoita `RAY` ja paina {{key:Enter}}.
2. Napsauta kohtaa, josta säteet alkavat.
3. Napsauta jokaiselle säteelle pistettä, jonka kautta sen tulee kulkea. Lopeta painamalla {{key:Enter}}.

## Tartu niihin ja typistä ne

Apuviivat ja säteet tarttuvat kohteisiin Lähin, Kohtisuora ja Leikkauspiste. Niillä ei ole päätä eikä keskikohtaa, joten Päätepiste ja Keskikohta eivät löydä niistä mitään.

Ne leikkaavat ja tulevat leikatuiksi kuten muut viivat komennoissa {{cmd:TRIM}} ja {{cmd:BREAK}}:

- Typistä apuviivan toinen pää pois, niin siitä tulee säde, joka alkaa leikkauskohdasta.
- Typistä säteen kaukainen osa pois, niin siitä tulee tavallinen viiva.
- Katkaise apuviiva yhdestä pisteestä, niin saat kaksi sädettä.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} ja {{cmd:STRETCH}} toimivat niihin myös. Ikkunavalinta ei koskaan poimi niitä, koska mikään ikkuna ei voi sisältää koko päättymätöntä viivaa; leikkaava ikkuna tai napsautus poimii.

:::note
DWG (kaikki versiot) ja DXF 2000 säilyttävät ne apuviivoina. DXF R12:ssa niitä ei ole, joten siellä niistä tulee viivoja koko piirustuksen yli, ja tallennus kertoo siitä. Tulostus tai PDF piirtää ne vain sen alueen yli, joka tulostuu.
:::
