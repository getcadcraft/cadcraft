---
title: Afritun, líming og tvöföldun
summary: Afritaðu hluti á klippiborð CadCraft, límdu þá þar sem þú smellir eða á sama stað, tvöfaldaðu með bendlinum og færðu verk úr annarri teikningu eða flipa.
keywords: afrita, klippa, líma, líma á sama stað, tvöfalda, klippiborð, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, milli teikninga, annar flipi, grunnpunktur
from: 4b9f29d3
---

## Hvað þú lærir

Hvernig þú afritar hluti á klippiborðið, límir þá þar sem þú smellir, límir þá á eigin hnit, tvöfaldar þá með bendlinum, klippir þá og færir þá yfir í aðra teikningu. Allt þetta er líka í hópnum {{ui:Breyta}} á tækjastikunni: {{ui:Afrita}}, {{ui:Líma}} og valmyndin {{ui:Meira}}.

## Afritaðu og límdu þar sem þú smellir

1. Veldu hlutina: smelltu á þá, eða dragðu glugga.
2. Ýttu á {{key:Mod+C}}, eða smelltu á {{ui:Afrita}} í hópnum {{ui:Breyta}}. Skipanalínan segir hve marga hluti var afritað. Þeir haldast valdir.
3. Ýttu á {{key:Mod+V}}, eða smelltu á {{ui:Líma}}. Afritið birtist við bendilinn og hangir frá neðra vinstra horni afritaðra hluta.
4. Smelltu þar sem það horn á að fara, eða skrifaðu punkt eins og `2000,500` og ýttu á {{key:Enter}}. Hlutafestingar og {{ui:Lóðrétt/lárétt}} virka eins og venjulega.

Límdu hlutirnir eru valdir, svo þú getur strax fært þá eða breytt þeim. Eitt {{key:Mod+Z}} tekur allt límið í burtu.

:::tip
Viltu að afritið hangi frá punkti sem þú velur, eins og horni veggjar? Skrifaðu `COPYBASE`, smelltu á grunnpunktinn, veldu hlutina og ýttu á {{key:Enter}}. Líming setur þá punktinn þar sem þú smellir. Til að hengja hvert afrit frá miðju sinni í stað neðra vinstra horns, breyttu {{ui:Límingarpunktur}} í [CadCraft stillingum](topic:settings).
:::

## Líma á sama stað

Ýttu á {{key:Mod+Shift+V}}, eða veldu {{ui:Líma á sama stað}} í valmyndinni {{ui:Meira}}. Afritið fer nákvæmlega á þau hnit sem það var afritað frá, án smells. Notaðu það til að flytja hluti í aðra teikningu á sama stað, eða af einu blaði á annað.

## Tvöfalda og færa

1. Veldu hlutina.
2. Ýttu á {{key:Mod+D}}, eða veldu {{ui:Tvöfalda og færa}} í valmyndinni {{ui:Meira}}.
3. Afrit liggur ofan á upprunalega og hreyfist með bendlinum. Smelltu þar sem það á að fara. Þú getur líka skrifað tilfærslu eins og `@0,-600`, eða fjarlægð í átt að bendlinum.

{{key:Esc}} áður en smellt er skilur ekkert eftir. Tvöföldunin er eitt afturköllunarskref og snertir ekki klippiborðið.

## Klippa

Ýttu á {{key:Mod+X}}, eða veldu {{ui:Klippa}} í valmyndinni {{ui:Meira}}. Hlutirnir fara á klippiborðið og eru eyddir úr teikningunni, í einu afturköllunarskrefi. Límdu þá aftur með {{key:Mod+V}} eða {{key:Mod+Shift+V}}.

## Á milli teikninga og flipa

Klippiborðið geymir afritið þegar þú opnar aðra teikningu, og það er sameiginlegt fyrir alla CadCraft-flipa í þessum vafra. Afritaðu í einum flipa, og ýttu síðan á {{key:Mod+V}} í öðrum.

- Blokkir sem hlutirnir nota fylgja með. Ef teikningin sem þú límir í er þegar með blokk með sama nafni, er hennar eigin skilgreining notuð, eins og í AutoCAD.
- Lög sem hlutirnir nota bætast við, með þeim lit og stillingum sem þeir höfðu.
- Afritið er ekki skalað ef teikningarnar tvær nota mismunandi einingar: CadCraft segir frá því, og þú getur notað {{cmd:SCALE}} á eftir.
- Sýnigluggar haldast á blaði sínu og eru skildir eftir í afriti.

:::note
Klippiborðið er CadCraft-eigið. Þú getur ekki límt CadCraft-hluti í annað forrit, né límt úr öðru forriti í CadCraft: vistaðu sem DWG eða DXF í staðinn. Mjög stórt afrit gæti verið of stórt til að deila milli flipa; skipanalínan segir þá aðeins að þessi flipi geti límt það.
:::

## Algeng mistök

- **{{key:Mod+V}} límdi texta í skipanalínuna.** Þú hafðir skrifað eitthvað þar, svo takkarnir unnu á textanum. Ýttu á {{key:Esc}} til að hreinsa hann, og ýttu síðan á {{key:Mod+V}} aftur.
- **Ekkert gerðist, og stöðustikan segir að ljúka núverandi skipun.** Önnur skipun er í gangi. Ýttu fyrst á {{key:Esc}}.
- **Límingin lenti langt í burtu.** Hún hangir frá neðra vinstra horni þess sem þú afritaðir, sem gæti verið fjarlægur hlutur sem þú valdir óvart. Notaðu {{ui:Líma á sama stað}}, eða afritaðu með `COPYBASE`.
- **„Nothing pasted“ með ástæðu.** Það sem annar flipi skildi eftir á klippiborðinu var ekki hægt að lesa (það var skemmt, eða breytt með höndunum). Afritaðu hlutina aftur.

Sjá allan listann af tökkum í [Lyklaborð og mús](topic:keyboard), og hverja spurningu í [Skipanaskránni](topic:commands#clipboard).
