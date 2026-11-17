---
title: Dokumente en hersienings (die kluis)
summary: 'n Stap-vir-stap-deurloop van een regte werk: plaas 'n projekvouer onder beheer, neem 'n tekening uit, verander dit, lewer dit in met 'n nota, stuur dit vir nasien, keur dit goed en stel dit vry, sien die geskiedenis en wat dit gebruik, wat 'n tweede persoon sien terwyl jy dit hou, en hoe dit met wolkvouers werk.
keywords: kluis, dokumente, deurloop, tutoriaal, uitneem, inlewer, hersiening, vrystelling, goedkeur, slot, geskiedenis, waar gebruik, wolkvouer, projekvouer, dokumentbestuur, pdm, twee mense, gedeelde vouer
from: 3829528d
---

## Wat jy gaan doen

Jy is Ana, en jy werk aan die Riverside Clinic saam met 'n kollega, Ben. Die projek se tekeninge woon in een vouer wat julle albei bereik ('n gedeelde skyf, 'n gesinkroniseerde vouer, of 'n wolkvouer). Teen die einde het een lêer van sy eerste kopie na vrygestelde hersiening **A** gegaan, is weer verander as **B.1**, jy het gesien wie wat gedoen het, en jy het gesien wat Ben sien wanneer jy die lêer hou.

Alles word in 'n versteekte `.ccvault`-vouer langs jou lêers gehou: geen bediener, niks word opgelaai nie ('n wolkvouer is die uitsondering, sien die laaste stap). Vir elke knoppie en reël op een plek, sien die onderwerp *Dokumente: uitneem, hersienings en vrystelling* waar jou toepassing dit het.

## 1. Stel die projekvouer op

1. Kies {{ui:Dokumente…}} in die **Aansig**-oortjie se **Meer**-kieslys, of tik `DOCUMENTS` (of `DOCS`) en druk {{key:Enter}}.
2. Kies {{ui:Kies die projekvouer}} en kies die vouer wat die projek se tekeninge hou. (Projekvouers werk in Studio en in blaaiers wat 'n vouer kan oopmaak, soos Chrome en Edge. In ander blaaiers sê die paneel dit.)
3. Kies {{ui:Verander}} langs **Jy:** en tik jou naam, `Ana` (as dit vra, ook die naam van hierdie rekenaar). Die paneel sê nou *Jy: Ana op* en jou rekenaar. Jou naam gaan op alles wat jy doen.
4. Kies {{ui:Begin 'n kluis in hierdie vouer}} en tik die projek se naam, `Riverside clinic`. Die paneel sê *Kluis begin vir Riverside clinic.*

## 2. Bring 'n lêer onder beheer

1. Maak **Lêers nie in die kluis nie** oop en kies {{ui:Voeg by}} langs `plans/A-101.dxf`.
2. Dit verskyn onder **Lêers in die kluis** by hersiening **A.1**, toestand **Werk aan die gang**. A.1 is sy eerste kopie; die kluis hou 'n kopie van elke hersiening.

## 3. Neem uit, verander, lewer in

1. Kies {{ui:Maak oop}} langs `plans/A-101.dxf`. Die tekening maak oop in CadCraft en die paneel sluit sodat jy dit kan sien. Die paneel is steeds een opdrag weg: `DOCUMENTS`.
2. Maak die paneel weer oop en kies {{ui:Neem uit}}. Die ry sê nou **Uitgeneem aan jou**. 'n Slotlêer is in `.ccvault/locks` gemaak; niemand anders kan hierdie lêer uitneem voordat jy dit inlewer nie.
3. Teken iets: voeg 'n lyn by, skuif 'n muur. Niks wat jy doen, kan oor die kluis se lêer gestoor word nie, tensy die tekening aan jou uitgeneem is; Stoor as werk altyd vir 'n kopie van jou eie.
4. Maak die paneel oop, kies {{ui:Lewer in}} en tik wat verander het (`Die deur geskuif`). Die paneel sê *ingelewer as A.2*. Die lêer in die projekvouer is nou die tekening wat jy oop gehad het, en die slot is weg. Inlewer sonder enige verandering hou die hersiening.

As jy van plan verander, gee {{ui:Ontdoen uitneem}} die lêer terug sonder 'n nuwe hersiening.

## 4. Nasien en vrystel

1. Kies {{ui:Stuur vir nasien}}. Die toestand word **Vir nasien** en die lêer is slegs-lees.
2. Voordat jy goedkeur, kies {{ui:Projekinstellings}} en lys wie mag goedkeur (een naam per reël), byvoorbeeld `Ben` en `Carla`, en merk die reël dat die goedkeurder iemand anders as die outeur moet wees. Kies {{ui:Stoor instellings}}. Nou weier die kluis self enigiemand anders.
3. Ben (of Carla) kies {{ui:Keur goed}} en tik die goedkeurder se naam. Die toestand word **Vrygestel** en die hersiening word **A**, met *goedgekeur deur* en die naam. 'n Vrygestelde lêer is slegs-lees. {{ui:Stuur terug}} sou dit terug na Werk aan die gang gestuur het, met 'n rede.

Die goedkeurder se naam is die naam wat in die paneel getik is; dit is 'n rekord van wie onderteken het, nie 'n bewys van identiteit nie.

## 5. 'n Nuwe hersiening

1. Op die vrygestelde lêer, kies {{ui:Nuwe hersiening}}. Jy hou dit vir die volgende letter.
2. Verander dit, en kies dan {{ui:Lewer in}}. Die hersiening is **B.1**, werk aan die gang. Stel dit op dieselfde manier vry en dit word **B**. {{ui:Ontdoen uitneem}} voor die eerste inlewering laat dit op **A**.

Hersieningsletters loop A, B … Z, AA, AB. As jou standaard sommige letters uitlaat, sal die projekinstelling *Gebruik die ASME Y14.35-volgorde* I, O, Q, S, X en Z vir die volgende hersienings oorslaan.

## 6. Sien wat gebeur het

Kies die lêer se naam om sy besonderhede oop te maak:

- **{{ui:Geskiedenis}}**: elke gebeurtenis, nuutste eerste, met wie, watter rekenaar en wanneer: *Ingelewer A.2* deur Ana, *Vrygestel* deur Ben, en so meer.
- **{{ui:Hersienings}}**: die hersieningstabel. {{ui:Maak kopie oop}} maak 'n hersiening oop as 'n gewone kopie wat nie die kluis se lêer kan oorskryf nie; {{ui:Vergelyk met}} lys wat bygevoeg, verwyder en verander is teenoor die hersiening voor dit, of enige ander.
- **{{ui:Gebruik}}**: die tekeninge waarna dit skakel (xrefs).
- **{{ui:Gebruik deur}}**: Gebruik deur lys elke ander tekening in die kluis wat hierheen skakel: verander 'n basisplan en jy weet watter blaaie om na te gaan.

## Hersiening op die blad

Met die tekening oop (en 'n uitleg daarin), kies {{ui:Hersieningsblok}}: 'n tabel van die vrygestelde hersienings word bo-regs op die blad geteken. Kies {{ui:Vul titelblokke in}} om titelblokkenmerke wat as `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` of `APPROVED_BY` gemerk is, te vul met die lêer se hersiening, toestand, datum en goedkeurder. Wanneer jy die volgende vrystelling goedkeur, word die hersieningsblok bygewerk.

## 7. Wat Ben sien terwyl jy die lêer hou

Neem nou die lêer weer uit, en vra Ben om dieselfde projekvouer op sy rekenaar oop te maak en die paneel oop te maak. Op die lêer se ry sien hy **Uitgeneem deur Ana op** jou rekenaar **sedert** die tyd, en geen {{ui:Neem uit}}-knoppie nie. As hy tog probeer, weier die kluis: die slot is 'n lêer wat die stelsel nie twee keer sal maak nie, so twee mense kan nie albei die lêer hou nie, selfs in dieselfde sekonde, wanneer die vouer op skyf in Studio is. (In 'n blaaier laat die vouer slegs 'n beste poging toe, en die paneel sê so onder **Vouer**.)

As Ana weg is en Ben die lêer nodig het, maak {{ui:Breek uitneem}} dit vry. Hy moet 'n rede tik; dit gaan in die logboek saam met wie se uitneem dit was. Wanneer die projek admins lys, kan net hulle dit doen. 'n Uitneem ouer as die verouderingsgrens (standaard 14 dae) word gemerk *lank geleden*. Ná die breek word Ana se laat inlewering geweier, sodat julle twee mekaar nie kan oorskryf nie.

## 8. Wolkvouers

'n Wolkvouer is 'n projekvouer wat in jou span se wolkberging gehou word, so die span het geen gedeelde skyf nodig nie. In Studio, aangemeld by jou CadCraft-rekening, wys die paneel {{ui:Maak 'n wolkvouer oop}} langs {{ui:Kies die projekvouer}}. Kies dit en kies die vouer, gelys as werkruimte / vouer. 'n Werkruimte-eienaar maak die vouer eers, en die span se wolkberging moet in werking wees. Alles hierbo werk dieselfde; die bediener maak die slot, wat streng is oor mense heen. As jy nie aangemeld is nie, sê die paneel om aan te meld. In 'n gewone blaaier-oortjie word die wolkknoppie nie aangebied nie; gebruik Studio.

## Probeer dit

Doen die agt stappe hierbo met 'n kopie van 'n regte lêer. Vir die twee-persoon-stappe het jy nog 'n persoon nodig, of twee vensters met twee name. As jy dit met 'n regte gedeelde vouer probeer, lys die Gemeenskapstoetsbladsy 'n toets wat presies dit vra, en neem resultate.
