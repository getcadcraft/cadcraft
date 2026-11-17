---
title: Isku dar wax ka beddelka laba qof oo naqshad mid ah
summary: Ogolow git, Fossil ama Mercurial inay isku daraan laba nuqul oo DWG ama DXF shay shay ah, iyadoo la isticmaalayo furaha CadCraft ku hayo shay kasta.
keywords: isku dar, git, fossil, mercurial, maamulka nooca, farqi, isku dhac, saddex dhinac, cadcraft merge, fur, gitattributes, DWG, DXF
from: 71482bf9
---

Laba qof ayaa wax ka beddelaya isla naqshad. Haddii ay beddeleen shay kala duwan, isku darku wuu toos u shaqeeyaa: wax dib ugu samayn gacanta ma jiro.

## Waxa shaqeeya

CadCraft wuxuu shay kasta oo aad sawirto siinayaa **fur** gaaban oo weligeed isbedelin oo aan loo siin laba shay. Waxaa lagu kaydiyaa shayga DWG ama DXF (xog dheeraad ah oo barnaamijyada kale hayaan). Isku darku wuxuu shayada ka raadiyaa furahooda, ma aha booskooda faylka, sababtoo ah barnaamij kasta wuu dib u lambarkaa markii uu kaydiyo. Ka demi tan {{ui:Dejinta}} › CadCraft › Faylasha u fudud isku darka haddii aadan waligaa isku darin; faylashu waxay yaraanayaan qiyaastii 10 boqolkiiba.

Naqshad la kaydiyay ka hor intaan furaha la yeelan ayaa weli isku dhegta: shayadooda waxaa loo siiyaa fur ku salaysan meesha ay ku taal faylka, oo isku mid ah qof kasta oo furta.

## Diyaari

Git wuxuu u baahan yahay laba sadar mar kasta repository:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# hal mar, kombiyuutar kasta
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Git la'aantii, ku socod gacanta: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil iyo Mercurial waxay qaataan saddexda fayl isku mid ah dejintooda qalabka isku darka.

## Xeerarka

- Shay la beddelay hal dhinac oo keliya ayaa la qaataa. Isla beddelka labada dhinac waa la qaataa hal mar.
- Sifo isku mid ah oo laba siyaabood la beddelay waa **isku dhac**: dhinacaaga ayaa sii jira, warbixintuna waxay liisanaysaa labada qiime. Fur natiijada, eeg shaygaas, oo gacanta ku hagaaji.
- Shay lagu daray dhinac kasta waa la ilaaliyaa. Shay laga saaray hal dhinac oo aan dhinaca kale la beddelin waa la saaraa. Laga saaray hal dhinac oo dhinaca kale lagu beddelay: waa la saaray, waana la sheegaa.
- Lakabyada, blocks-ka, qoraalka iyo qaababka cabbirka, xaashiyada iyo aragtiyada magacaaban waxay si la mid ah isugu dhacaan. Qaybaha (constraints) waxay raacaan shayada ay magacabiyaan.
- Natiijada waxaa lagu qoraa isla qaabka faylka iyo nooca sida kaaga.

Lama isku dareyn: dalabka shayada naqshaddaada lagu sawiro waa kaaga, shayada dhinaca kale lagu daray ayaa kadib imanaysa. Beddelaadka isla block definition-ka labada dhinac waa isku dhac, marna isku ma qasmaan. Wax kasta waxa ku dhaca kombiyuutarkaaga; waxba lama soo gelin.
