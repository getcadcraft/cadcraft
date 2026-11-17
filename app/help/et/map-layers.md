---
title: Kaardikihid joonise all
summary: Näita tänavakaarte, õhufotosid või pilti maailmafailiga mudeliruumi all, paigutatuna joonise koordinaatsüsteemi järgi.
keywords: kaart, kaardikihid, maplayers, ml, geokaart, aluskaart, aerofoto, satelliit, plaadid, xyz, wms, wmts, kaarditeenus, maailmafail, koordinaatsüsteem, epsg, riigi tasandikoordinaadid, utm, georefereerimine, asendiplaan, geolokatsioon, geograafiline asukoht, geoandmed, salvestatud, dwg, dxf
from: f103045f
---

## Mida sa valmistad

Asendiplaani, mis on joonistatud aerofoto või tänavakaardi peale, kumbki õiges kohas.

## Ütle CadCraftile, kus joonis asub

1. Määra joonise ühikud jaotises {{ui:Omadused}} › {{ui:Ühikud}} (näiteks jalad või meetrid).
2. Sisesta {{cmd:MAPLAYERS}} (või `ML`) ja vajuta {{key:Enter}}.
3. Jaotises {{ui:Kus joonis asub}} sisesta nimi või EPSG-kood väljale {{ui:Otsi süsteemi}} (näiteks `2277` või `Texas Central`) ja vali see väljal {{ui:Süsteem}}.
4. Kui joonis on joonistatud selle süsteemi enda koordinaatides, jäta paigutus nulliks. Kui ei, anna üks joonise punkt ({{ui:Joonise X}}, {{ui:Joonise Y}}), kus see punkt asub kaardivõrgus ({{ui:Idakoordinaat}}, {{ui:Põhjakoordinaat}}), ja kui palju on joonis idast pööratud ({{ui:Pööratud (°)}}).
5. Klõpsa {{ui:Kasuta seda süsteemi}}.

## Lisa kiht

1. Lülita dialoogi ülaosas sisse {{ui:Kaardikihid internetist}}. Kuni see on sees, ei küsita ühelt serverilt midagi; kui see on sisse lülitatud, näevad lisatud serverid ekraanil olevat ala ja sinu internetiaadressi, mitte kunagi sinu joonist.
2. Jaotises {{ui:Lisa kiht}} vali, kust see tuleb:
   - **Plaadid (XYZ)**: plaadi aadress koos `{z}`, `{x}` ja `{y}`-ga, nimi ja pakkuja nõutav tunnustus.
   - **WMS**, **WMTS** või **ArcGIS**: teenuse aadress, seejärel {{ui:Hangi kihid}} ja vali üks.
   - **Pilt**: PNG või JPEG koos selle maailmafailiga (ja selle `.prj`-failiga, kui see on olemas).
3. Kiht kuvatakse joonise all. Selle tunnustus kuvatakse joonise paremas alanurgas.

Loendi iga kihti saab peita, muuta rohkem või vähem läbipaistvaks, üles või alla liigutada või eemaldada.

Iga süsteemi või kihtide muutus on üks {{cmd:UNDO}} samm.

## Salvestatakse joonisega

Koordinaatsüsteem ja kihtide loend salvestatakse joonisesse, kui salvestad DWG- või DXF-formaadis, ning need tulevad tagasi, kui avad joonise mis tahes arvutis. Failidest pärit pilte ei salvestata: lisa need pärast avamist uuesti. Lüliti {{ui:Kaardikihid internetist}} ei salvestu joonisesse: see kuulub sellele brauserile, nii et saadetud joonis ei päri ühegi serveri käest midagi enne, kui sina selle ise sisse lülitad.

Mida näevad teised programmid:

| Salvestatud kujul | Joonise asukoht | Kaardikihid |
|---|---|---|
| DWG 2010, 2013 või 2018, DXF 2000 | Kirjutatud standardviisil, nagu programmid loevad joonise geograafilist asukohta: süsteemi EPSG-kood, üks joonise punkt ja selle asukoht kaardivõrgus, ühikud ja põhjasuund. | Ainult CadCraft |
| DWG 2000, 2004 või 2007, DXF R12 | Ainult CadCraft (CadCraft ütleb seda salvestamisel) | Ainult CadCraft |

- **Kontrollitud:** ODA File Converter loeb asukoha vigadeta ja DXF-teek ezdxf loeb EPSG-koodi ning paigutuse täpselt.
- **Veel kontrollimata:** kas teised joonestusprogrammid tunnevad süsteemi selle EPSG-koodi järgi. Programm, mis peab oma süsteemide loendit teiste nimedega, võib joonise näidata ilma asukohata.
- Teised programmid näitavad plokkide loendis plokki nimega `CADCRAFT_GEO`. See on CadCraftile oma koopia süsteemist ja kihtidest; seda ei paigutata joonisele. Jäta see sinna.

## Teiste programmide joonised

Kui teisest programmist pärit joonisel on geograafiline asukoht, loeb CadCraft selle:

- Kui see nimetab EPSG-koodi, näitab {{ui:Kus joonis asub}} seda süsteemi ning kaardikihid paigutatakse selle järgi.
- Kui CadCraft ei tunne süsteemi (teise programmi oma nimi, kohalik võrk või mõõtkava korrutaja), asukohta ei kasutata, aga see säilitatakse ja salvestatakse tagasi nii, nagu see oli, et teine programm seda ikka leiaks. Asenda see, valides süsteemi jaotises {{ui:Kus joonis asub}}.

:::note
Kaardikihid joonistatakse ainult ekraanile: neid ei prindita. Kasuta ainult kaarditeenuseid, mille tingimused seda lubavad, ja hoia nende tunnustus nähtaval.
:::
