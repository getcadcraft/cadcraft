---
title: Hlanganisa izinguquko zabantu ababili zomdwebo owodwa
summary: Vumela i-git, i-Fossil noma i-Mercurial zihlanganise amakhophi amabili e-DWG noma e-DXF into ngento, zisebenzisa ukhiye i-CadCraft egcina kuyo yonke into.
keywords: hlanganisa, merge, git, fossil, mercurial, ukulawula iweshini, version control, diff, ukungqubuzana, conflict, okuthathu, three-way, cadcraft merge, ukhiye, key, gitattributes, DWG, DXF
from: 71482bf9
---

Abantu ababili bahlela umdwebo ofanayo. Uma beshintsha izinto ezahlukene, ukuhlanganisa kungazenzakalela: akukho okudingeka ukuthi wenze ngesandla.

## Okwenza kusebenze

I-CadCraft inika yonke into oyidwebayo **ukhiye** omfushane ongaguquki futhi ongaze unikezwe izinto ezimbili. Ugcinwa nento ku-DWG noma DXF (njengedatha eyengeziwe ezinye izinhlelo ziyigcinayo). Ukuhlanganisa kufuna izinto ngalolu khiye, hhayi ngendawo yazo efayeleni, ngoba zonke izinhlelo zibala kabusha izindawo lapho zigcina. Vala lokhu ku-{{ui:Izilungiselelo}} › CadCraft › Amafayela ahlanganisekayo uma ungakaze uhlanganise; amafayela ancipha ngamaphesenti angu-10 cishe.

Umdwebo ogcinwe ngaphambi kokuba kube khona okhiye usahlanganiswa: izinto zawo zithola ukhiye ngendawo yazo efayeleni, okufanayo kubo bonke abayivulayo.

## Yisetha

Ku-git kudingeka imigqa emibili kanye ngerepositori ngayinye:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# kanye, kwikhompyutha ngayinye
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Ngaphandle kwe-git, yisebenzise ngesandla: `cadcraft merge <base> <ours> <theirs> -o <result>`. I-Fossil ne-Mercurial zithatha amafayela amathathu afanayo ezilungiselelweni zazo zethuluzi lokuhlanganisa.

## Imithetho

- Into eshintshwe ohlangothini olulodwa kuphela iyathathwa. Ushintsho olufanayo ezinhlangothini zombili luthathwa kanye.
- Impahla efanayo eshintshwe ngezindlela ezimbili ibizwa ngokuthi **ukungqubuzana**: uhlangothi lwakho luyahlala futhi umbiko ubhala zombili izinani. Vula umphumela, bheka leyo nto, ulungise ngesandla.
- Into engezwe ohlangothini noma luphi ulugcinwa. Into esuswe ohlangothini olulodwa futhi engashintshwanga kolunye iyasuswa. Esuswe ohlangothini olulodwa futhi eshintshwe kolunye: iyasuswa, futhi iyabikwa.
- Izingqimba, amabhulokhi, izitayela zombhalo nezilinganiso, amashidi nemibono enegama ahlanganiswa ngendlela efanayo. Izivimbelo zilandela izinto ezizibiza.
- Umphumela ubhalwa ngefomethi yefayela nenguqulo efanayo nowakho.

Akuhlanganisiwe: indlela izinto ezidwetshwa ngayo ingeyakho, bese izinto ezengezwe ngohlangothi lolunye. Izinguquko ebhulokhini elifanayo ngapha nangapha ziba ukungqubuzana, azixutshwa ndawonye. Akukho okulayishwa; konke kusebenza kukhompyutha yakho.
