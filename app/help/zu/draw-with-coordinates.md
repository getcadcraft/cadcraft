---
title: Dweba ngama-coordinate
summary: Dweba umphetho omaphakathi wegumbi ngokubhala ama-coordinate aphelele, ahlobene nowe-polar, nangokufaka ibanga eliqondile.
keywords: umugqa, pline, iphola-layini, ama-coordinate, ahlobene, polar, aphelele, ibanga eliqondile, @, ukubhala amaphoyinti, ngokunembile, ortho
from: 19e82350
---

## Okuzokwenza

Umphetho wegumbi elinesimo se-L, nge-6000 nge-4500 nesikhala esingu-2000 nge-1500, sidwetshwe ngokunembile, kanye nodonga oluyizi-30 degrees. Uzosebenzisa zonke izindlela ezine zokubhala iphoyinti. Sebenza ngamamilimitha: iyunithi eyodwa yomdwebo imelela umamilimitha owodwa.

Isifinyezo esisheshayo sawo wonke amafomethi sitholakala ku-[Ukufakwa kwama-coordinate nebanga](topic:coordinate-entry).

## Ngaphambi kokuqala

1. Vula CadCraft. Uma umdwebo uvulekile, chofoza kuqala {{ui:Okusha}}.
2. Cindezela {{key:Esc}} ukuze kungakhethwa lutho. Iphaneli yesokudla ifunda {{ui:Izilungiselelo zamanje}}.
3. Setha {{ui:Amayunithi}} ku-{{ui:Amamilimitha}}. Akukho okulinganiswa kabusha; lokhu kutshela amashidi nemishicilelo ukuthi iyunithi isho ni.

## Ama-coordinate aphelele: iphoyinti lokuqala

I-coordinate ephelele iyindawo ekalwe kusuka emvelaphini, ibhalwa njenge `x,y`.

1. Bhala `L` bese ucindezela {{key:Enter}}. Umyalezo uthi `Specify first point:`.
2. Bhala `0,0` bese ucindezela {{key:Enter}}.

Umugqa manje uyanwebeka kusuka emvelaphini uye esikhombisini sokuhlola. Ama-coordinate esilawuli esisesimweni (status bar) abonisa ibanga nengosi kusuka ephoyintini lokuqala njengoba uhamba.

## Ama-coordinate ahlobene: @dx,dy

I-coordinate ehlobene ibhalwa njenge `@dx,dy`: kude kangakanani ngokuhamba ngakwesokudla, kude kangakanani phezulu, kusuka ephoyintini lokugcina. Izinombolo ezingaphansi kwezeru ziya kwesokunxele noma phansi.

3. Bhala `@6000,0` bese ucindezela {{key:Enter}}. Umugqa ongu-6000 uya kwesokudla.
4. Bhala `@0,3000` bese ucindezela {{key:Enter}}.
5. Bhala `@-2000,0` bese ucindezela {{key:Enter}}.
6. Bhala `@0,1500` bese ucindezela {{key:Enter}}.

Kufanele ubone imigqa emine exhunyiwe ikhuphuka eceleni kwesokudla legumbi.

## Ukufakwa kwebanga eliqondile: inombolo eyodwa

Uma ubhala inombolo eyodwa, i-CadCraft ihamba leli banga ngokuqondene nesikhombisi sokuhlola. Vula Ortho ukuze inqondo ibambelele ngokuthambile noma ngokuma.

7. Cindezela {{key:F8}}, noma uchofoze {{ui:Ortho}} kusilawuli sesimo (status bar). Ibha yesimo ithi "Ortho ivuliwe".
8. Hambisa isikhombisi sokuhlola ngakwesokunxele kwephoyinti lokugcina. Umugqa ogxumayo uhlala uthambile.
9. Bhala `4000` bese ucindezela {{key:Enter}}. Umugqa uhamba ibanga elingu-4000 ngakwesokunxele.
10. Hambisa isikhombisi sokuhlola ngaphansi kwephoyinti lokugcina.
11. Bhala `4500` bese ucindezela {{key:Enter}}. Ubuyele ephoyintini lokuqala.
12. Cindezela {{key:Enter}} kumyalezo ongenalutho ukuze uphelise umyalo.

:::mac
F8 ingalawula ukudlala kwemidiya kukhibhodi ye-Mac. Bamba **fn** bese ucindezela F8, noma uchofoze {{ui:Ortho}}. Bona [Okhiye, imausi namaphedi okuthinta](common:keys).
:::

Manje unomphetho ovaliwe we-L owenziwe ngemigqa eyisithupha ehlukene.

13. Chofoza {{ui:Konke}} ukuze ubone konke.

## Ama-coordinate ye-polar: @ibanga<ingosi

I-coordinate ye-polar ibhalwa njenge `@distance<angle`. Izingosi zikalwa ngama-degree, zikalwa ngokuphambene nokuzungeza iwotshi kusuka enqondweni elungile ye-X: 0 ingakwesokudla, 90 iphezulu, 180 ingakwesokunxele, 270 (noma -90) iphansi.

14. Bhala `L` bese ucindezela {{key:Enter}}.
15. Bhala `6000,0` bese ucindezela {{key:Enter}} ukuze uqale ekhoneni elingaphansi elingakwesokudla.
16. Bhala `@2500<-30` bese ucindezela {{key:Enter}}. Umugqa ongu-2500 uphuma ekhoneni, uqondise phansi uye ngakwesokudla ngama-degree angu-30 ngaphansi kwendawo ethambile.
17. Cindezela {{key:Enter}} ukuze uphelise umyalo.

I-coordinate ye-polar engenayo `@`, njengo `2500<30`, ikalwa emvelaphini esikhundleni sokukalwa kusuka ephoyintini lokugcina.

## Umphetho ofanayo njengephola-layini eyodwa

Imigqa eyisithupha ehlukene iyanele emisebenzini eminingi, kodwa iphola-layini yinto eyodwa: iyagudluka, ilinganiswe futhi ikhethwe njengento ephelele. Sebenzisa {{cmd:PLINE}} ngokufakwa okufanayo.

1. Bhala `PL` bese ucindezela {{key:Enter}}.
2. Bhala `0,-6000` bese ucindezela {{key:Enter}} ukuze uqale ngaphansi komphetho wokuqala.
3. Bhala `@6000,0`, bese ucindezela {{key:Enter}}.
4. Bhala `@0,3000`, bese ucindezela {{key:Enter}}.
5. Bhala `@-2000,0`, bese ucindezela {{key:Enter}}.
6. Bhala `@0,1500`, bese ucindezela {{key:Enter}}.
7. Bhala `@-4000,0`, bese ucindezela {{key:Enter}}.
8. Bhala `C` bese ucindezela {{key:Enter}}. Iphola-layini iyavaleka futhi umyalo uyaphela.
9. Chofoza umphetho omusha. Iphaneli yesokudla ibonisa "Iphola-layini", {{ui:Amakhona}}, {{ui:Ubude}} futhi, ngoba ivaliwe, {{ui:Indawo}} yayo.

Indawo kufanele ifunde 24000000 (amamilimitha ayisikwele, okungu-24 wamamitha ayisikwele).

## Ukhetho ngesikhathi sokudweba

- Ku-{{cmd:LINE}} nasku-{{cmd:PLINE}}, bhala `U` bese ucindezela {{key:Enter}} ukuze uthathe kabusha ingxenye yokugcina ngaphandle kokuphuma kumyalo.
- Ku-{{cmd:LINE}}, `C` ivala ibuyele ephoyintini lokuqala uma kukhona izingxenye ezimbili noma ngaphezulu.
- Ku-{{cmd:PLINE}}, `A` ishintshela ezingxenyeni zemisnsalo (umsnsalo ngamunye uqhubeka ngokuthambile kusuka engxenyeni edlule), bese `L` ibuyela kumigqa. Kumodi yemisnsalo, ukukhetha kokuvala yi `CL`.
- Ukucindezela {{key:Enter}} ku-`Specify first point:` ku-{{cmd:LINE}} kuqala kusuka ephoyintini lokugcina owalinikeza, ukuze uqhubeke lapho ume khona.

## Amaphutha ajwayelekile

- **Ukubhala `6000,0` lapho ubusho `@6000,0`.** Ngaphandle kwe-`@`, iphoyinti likalwa emvelaphini, hhayi ekugcineni, ngakho umugqa uphuma ndawo engalindelekile. Ku-CadCraft, `x,y` ihlala iphelele. Cindezela `U` bese {{key:Enter}} ukuze uyithathe kabusha.
- **Ukubhala ikhoma njengephoyinti lamadesimali.** Amadesimali asebenzisa iphoyinti: `1250.5`. Ikhoma lihlala lihlukanisa u-X no-Y.
- **Ibanga eliqondile lihambe ngendlela engafanele.** Inombolo eyodwa ilandela isikhombisi sokuhlola. Hambisa isikhombisi sokuhlola ohlangothini ofuna ukuya kulo ngaphambi kokucindezela {{key:Enter}}, bese uvula {{ui:Ortho}} ukuze uthole imigqa eqondile.
- **"Point or option keyword required."** Kudingeka iphoyinti noma igama lokukhetha. I-CadCraft ayiqondanga okubhalile. Hlola izikhala ngaphakathi kwenombolo noma ikhoma elingekho, bese ubhala futhi.
- **Amafidi namainshi.** I-CadCraft ifunda izinombolo ezilula kuphela. Bhala `150` ngo-12'-6" emdwebeni wamainshi, noma `12.5` emdwebeni wamafidi.
