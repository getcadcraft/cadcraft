---
title: Vaateakna klassi erandid
summary: Lehel peida klass või anna sellele ühes vaateaknas teine värv, joone paksus või täide; mudel ja teised vaateaknad jäävad samaks.
keywords: vaateaken, klassi erand, vaateakna erand, peida klass vaateaknas, leht, paigutus, VPLAYER, plot, Vectorworks
from: c1a2b51f
---

Leht näitab sageli sama mudelit mitu korda: plaani koos mööbliga ja plaani ilma selleta, või valgustusplaani, kus värviliselt on ainult valgustid. Vaateakna klassi erand muudab ühe [klassi](topic:classes) kuvamist **ainult selles vaateaknas**.

1. Ava leht ja vali üks vaateaken.
2. Ava klasside paneel (`CLASSES`) ja vali klass.
3. Jaotises {{ui:Selles vaateaknas}} märgi {{ui:Hide in this viewport}} või sea {{ui:Color here}}, {{ui:Lineweight here}} või {{ui:Fill here}}.

Allpool olev loend näitab iga klassi, mida see vaateaken muudab. {{ui:Clear this viewport's overrides}} eemaldab need kõik. Iga muudatus on üks tagasivõtmise samm.

## Mida erand muudab

- **Peida** peidab selles vaateaknas klassi ja kõik selle all olevad klassid.
- **Värv, joone paksus ja täide** muudavad selle klassi objekte, mille väärtust ei ole objektile endale seatud, see tähendab objekte, mis võtavad selle klassi või kihi järgi. Objekt, millel on oma värv, jääb selle juurde, nagu ka vaateakna kihi erandi puhul.

Erandid kuvatakse ekraanil ning plottides ja PDF-ides, sealhulgas PDF-ks avaldatud lehtede komplektis. Need töötavad koos vaateakna külmutatud kihtide ja kihieranditega.

Erandid salvestatakse joonisega DWG- ja DXF-vormingus (koos klassiloendiga plokis `CADCRAFT_CLASSES`) ning need tulevad samale vaateaknale tagasi, kui fail avatakse CadCraftis.
