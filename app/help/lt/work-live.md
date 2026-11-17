---
title: Darbas su vienu brėžiniu kartu naudojant Live TeamWork
summary: Kas keičiasi CadCraft programoje, kai esate Live TeamWork sesijoje iš CadCraft Studio: kitų žmonių žymekliai ir pasirinkimai, objektai, kuriuos kas nors redaguoja, šeimininko užraktai, jūsų pačių anuliavimas ir prisijungimas iš naršyklės tame pačiame tinkle.
keywords: live, live teamwork, studio live, kartu, bendradarbiauti, bendras redagavimas, sesija, dalintis gyvai, prisijungti, žymeklis, laikoma, redaguojama, užraktas, livelock, liveunlock, livehold, laikyti sluoksnį, laikyti sritį, spynelė, anuliavimas, šeimininkas, asistentas, tas pats failas, daug žmonių, lėtas, riba, kas pakeitė, naujausi pakeitimai, keitimų žurnalas
from: 0497d2a3
---

## Ką išmoksite

Ką matote ir kas nutinka jūsų pakeitimams, kai kelios žmonės dirba su vienu brėžiniu tuo pačiu metu. CadCraft Studio pradeda ir prisijungia prie Live TeamWork sesijos (Dalintis gyvai, Prisijungti); šis puslapis apie patį brėžinį.

## Visi piešia vienu metu

Braižykite ir redaguokite kaip įprastai. Jūsų pakeitimai matomi iš karto, net prieš tai, kai kiti juos gauna, o kitų pakeitimai pasirodo jūsų ekrane po akimirkos, kai jie juos atlieka. Veikia visos komandos: braižymas, keitimas, sluoksniai, blokai, lapai, matmenys, apribojimai.

Du žmonės gali pakeisti tą patį objektą. Kai keičiate skirtingus dalykus, pavyzdžiui, linijos spalvą ir galinį tašką, abu pakeitimai išsaugomi. Kai keičiate tą patį dalyką, paskutinis pakeitimas laimi.

Tik jums lieka: dabartinis sluoksnis, spalva ir teksto aukštis naujiems objektams, jūsų matmenų nustatymai, jūsų vaizdas, padalytas ekranas ir UCS. Brėžinys bendras; tai, kaip į jį žiūrite, – ne.

## Kiti žmonės jūsų brėžinyje

- **Žymekliai:** kiekvieno žmogaus žymeklis rodomas su jo vardu jo spalva ir komanda, kurią jis vykdo. Matote žymeklius žmonių, kurie dirba netoli to, kas rodoma jūsų ekrane.
- **Pasirinkimai:** tai, ką kas nors pasirinko, nubrėžta jo spalva.
- **Redaguojama:** objektas, kurį kas nors pasirinko, turi etiketę, pavyzdžiui, „Ana redaguoja“. Galite vis dar pakeisti jo spalvą ar perkelti, bet negalite jo ištrinti, suskaidyti ar perrašyti, kol jie jo nepaleidžia. Pasirinkus jį, sužinote, kas jį turi.
- **Kas pakeitė paskutinį:** pasirinkite vieną objektą, kurį kitas žmogus pakeitė šioje sesijoje, ir komandų eilutė pasako, kas ir koks buvo pakeitimas („Paskutinį šį pakeitė Ben: CIRCLE.“). Studio skydelis {{ui:Kintama}} išvardija kiekvieną naujausią pakeitimą skiltyje {{ui:Naujausi pakeitimai}}. Nieko iš to neįrašoma brėžinyje: tai tęsiasi tiek, kiek trunka sesija.

## Laikykite sluoksnį ar sritį, kol dirbate ten

Didelis brėžinys su keliais žmonėmis – pasakykite, kuri dalis dabar jūsų:

1. Įveskite `LIVEHOLD` ir paspauskite {{key:Enter}}.
2. Pasirinkite `L` ir įveskite sluoksnio pavadinimą (Enter palieka dabartinį sluoksnį), arba pasirinkite `A` ir nurodykite dvi sritį ribojančias viršūnes.
3. Kitų žmonių pakeitimai tame sluoksnyje ar objektams toje srityje atšaukiami, ir jiems pranešama, kad dirbate ten. Jūsų sritis matoma kaip brūkšninis rėmelis; kiti mato ją jūsų spalva su jūsų vardu, o sluoksniai, kuriuos laikote, išvardijami viršuje kairėje jų brėžinio.
4. `LIVEHOLD`, tada `R`, paleidžia visa, ką laikote. Išeinant iš sesijos taip pat paleidžiama.

Bet kas sesijoje gali laikyti, įskaitant šeimininką; šeimininko užraktai taikomi viršum to. Laikymas niekada neįrašomas į failą.

## Kai pakeitimas atšaukiamas

Šeimininko brėžinio kopija tikrina kiekvieną pakeitimą. Kai kurie negali įeiti; tada CadCraft juos atšaukia jūsų ekrane ir komandų eilutėje pasako, kodėl, pavyzdžiui:

- kažkas ištrynė objektą, sluoksnį ar bloką, kurio jis reikėjo, prieš pat jus;
- kažkas redaguoja tą objektą arba laiko jo sluoksnį ar sritį, kurioje jis yra;
- šeimininkas jį užrakino;
- blokas, kurį dedate, buvo išvalytas, arba sluoksnis, kurį trinate, dar turi objektų.

## Anuliavimas atšaukia tik jūsų darbą

{{key:Mod+Z}} ir {{ui:Anuliuoti}} anuliuoja jūsų paskutinę komandą, visą, ir palieka visų kitų darbą nuošalyje. Kai kas nors po to pakeitė tą patį, nieko neanuliuojama, o komandų eilutė pasako, kas tai pakeitė. {{key:Mod+Y}} atlieka iš naujo.

## Užraktai (šeimininkas)

Šeimininkas gali apsaugoti objektus ar visą sluoksnį, kad niekas jų nekeistų, įskaitant patį šeimininką, kol jie neatrakinti:

1. Pasirinkite objektus, tada įveskite `LIVELOCK` ir paspauskite {{key:Enter}}. Arba įveskite `LIVELOCK` be pasirinkimo ir pasirinkite `L`, kad užrakintumėte sluoksnį pagal pavadinimą: vėliau į tą sluoksnį pridėti objektai taip pat užrakinami.
2. Užrakinti objektai nubrėžiami brūkšniuotai su etikete „Užrakino šeimininkas“ visų ekranuose.
3. `LIVEUNLOCK` atrakina juos tuo pačiu būdu.

Užraktai priklauso sesijai: jie baigiasi, kai ji baigiasi, ir niekada neįrašomi į failą.

## Prisijunkite prie to paties failo

Jei atidarėte tą patį failą, kurį atidarė šeimininkas (iš bendro aplanko ar tos pačios kopijos), prisijunkite iš savo CadCraft lango Studio: atverkite skydelį {{ui:Kintama}} ir naudokite {{ui:Prisijungti čia}} su šeimininko kodu. Keliauja tik pakeitimai, padaryti nuo to laiko, kai šeimininkas atidarė failą, todėl didelis brėžinys pasiruošia iš karto. Jei jūsų failas kitas, šeimininko brėžinys pakeičia jį jūsų ekrane (jūsų failas lieka kaip buvo). Tai veikia tik tada, kai jūsų brėžinys nepakeistas nuo to laiko, kai jį atidarėte.

## Asistentai gyvoje sesijoje

DI asistentas, prijungtas prie jūsų CadCraft lango (žr. pagalbą apie darbą su DI asistentais), prisijungia prie sesijos kaip savarankiškas dalyvis, kuris visiems rodomas kaip „Asistentas (per <jūsų vardas>)“. Šeimininkas jį įleidžia kaip ir žmogų; šeimininko asistentas prisijungia iš karto. Jo pakeitimai turi savo anuliavimą: jūsų {{key:Mod+Z}} anuliuoja jūsų darbą, o asistento anuliavimas – tik jo paties. Jis išeina iš sesijos, kai jį atjungiate ar išeinate, ir gali dirbti sesijoje tik tol, kol jūs galite redaguoti.

## Prisijunkite iš naršyklės

Bendradarbis be Studio gali nuskaityti šeimininko kodu po paveikslėliu telefonu, planšete ar kompiuteriu tame pačiame tinkle. CadCraft atsidaro naršyklėje, komandų eilutėje paprašo jūsų vardo ir užpildomas šeimininko brėžiniu, kai šeimininkas jus įleidžia. Pakvietimo nuoroda leidžia prisijungti iš kito tinklo: šeimininkui reikia Team Cloud Plan vietos programai, kiti prisijungia nemokamai, o nuoroda veikia tik tol, kol šeimininko sesija atidaryta.

## Daug žmonių viename brėžinyje

Kiekvienas pakeitimas nueina visiems sesijoje, todėl kuo daugiau žmonių, tuo ilgiau kiekvienas pakeitimas pasiekia kiekvieną iš jų, o lėtesni nešiojamieji ir ryšiai atsilieka pirmi. Įprastas sesijos dydis yra 20 žmonių; šeimininkas gali leisti daugiau vienai sesijai (žr. pagalbą apie bendrą darbą gyvai). Jei brėžinys jaučiasi lėtas su daugeliu žmonių, padeda mažiau žmonių, mažiau redaguojančių tuo pačiu metu arba geresnis ryšys.

## Kai sesija baigiasi

Brėžinį išsaugo tik šeimininkas. Kai šeimininkas baigia sesiją, visi kiti išlaiko neišsaugotą kopiją: įrašykite ją, jei norite ją išsaugoti.

:::note
Atšauktas pakeitimas nubraižomas virš aplinkinių objektų jūsų ekrane, kol iš naujo neatidarote brėžinio. Persidengiantys brėžiniai ir užpildyti objektai gali atrodyti kitaip nei šeimininko kopijoje; brėžinys pats tas pats.
:::
