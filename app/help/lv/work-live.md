---
title: Darbs pie viena rasējuma kopā ar Live TeamWork
summary: Kas mainās CadCraft, kamēr atrodaties Live TeamWork sesijā no CadCraft Studio: citu cilvēku kursori un atlases, objekti, ko kāds rediģē, saimnieka bloķējumi, jūsu pašu atsaukšana un pievienošanās no pārlūkprogrammas tajā pašā tīklā.
keywords: live, live teamwork, studio live, kopā, sadarbība, kopīga rediģēšana, sesija, kopīgot tiešraidē, pievienoties, kursors, turēt, rediģē, bloķējums, livelock, liveunlock, livehold, slāņa turēšana, apgabala turēšana, piekaramā atslēga, atsaukt, saimnieks, asistents, tas pats fails, daudz cilvēku, lēns, ierobežojums, kas mainīja, pēdējās izmaiņas, rediģēšanas žurnāls
from: 0497d2a3
---

## Ko jūs uzzināsiet

Ko jūs redzat un kas notiek ar jūsu rediģējumiem, kamēr vairāki cilvēki vienlaikus strādā pie viena rasējuma. CadCraft Studio sāk un pievienojas Live TeamWork sesijai (Kopīgot tiešraidē, Pievienoties); šī lapa ir par pašu rasējumu.

## Visi zīmē vienlaikus

Zīmējiet un rediģējiet kā parasti. Jūsu paša rediģējumi parādās uzreiz, pat pirms citi tos saņem, un citu rediģējumi parādās jūsu ekrānā tūlīt pēc tam, kad tie tos izdara. Katra komanda darbojas: zīmēšana, modificēšana, slāņi, bloki, lapas, izmēri, ierobežojumi.

Divi cilvēki var mainīt vienu un to pašu objektu. Kad maināt dažādas lietas, piemēram, vienas līnijas krāsu un galapunktu, abas izmaiņas tiek saglabātas. Kad maināt to pašu lietu, uzvar vēlākā izmaiņa.

Tikai jums paliek: pašreizējais slānis, krāsa un teksta augstums jauniem objektiem, jūsu izmēru iestatījumi, jūsu skats, sadalītais ekrāns un UCS. Rasējums ir kopīgs; tas, kā jūs uz to skatāties, nav.

## Citi cilvēki jūsu rasējumā

- **Kursori:** katra cilvēka rādītājs rādās ar viņa vārdu viņa paša krāsā un komandu, ko tas izpilda. Jūs redzat to cilvēku kursorus, kas strādā tuvu tam, kas ir jūsu ekrānā.
- **Atlases:** tas, ko kāds ir atlasījis, ir iezīmēts ar viņa krāsu.
- **Tiek rediģēts:** objektam, ko kāds ir atlasījis, ir uzraksts, piemēram, „Ana rediģē”. Jūs joprojām varat mainīt tā krāsu vai pārvietot to, bet nevarat dzēst, sadalīt vai pārrakstīt tekstu, kamēr tie to neatlaiž. Atlasot to, redzat, kam tas pieder.
- **Kas to mainīja pēdējo:** atlasiet vienu objektu, ko kāds cits šajā sesijā ir mainījis, un komandrindā parādīsies, kurš un kāda bija izmaiņa („Ben to mainīja pēdējo: CIRCLE.”). Studio Dzīvais panelis uzskaita katru nesen veikto rediģējumu sadaļā {{ui:Recent edits}}. Nekas no tā netiek saglabāts rasējumā: tas pastāv, kamēr ilgst sesija.

## Turiet slāni vai apgabalu, kamēr strādājat tur

Lielā rasējumā ar vairākiem cilvēkiem norādiet, kura daļa pagaidām ir jūsu:

1. Ierakstiet `LIVEHOLD` un nospiediet {{key:Enter}}.
2. Izvēlieties `L` un ierakstiet slāņa nosaukumu ({{key:Enter}} paturē pašreizējo slāni) vai izvēlieties `A` un norādiet divus apgabala stūrus.
3. Citu rediģējumi tajā slānī vai objektiem tajā apgabalā tiek atsaukti, un viņiem tiek paziņots, ka jūs tur strādājat. Jūs redzat savu apgabalu kā punktētu rāmi; citi to redz jūsu krāsā ar jūsu vārdu, un slāņi, ko turat, uzskaitīti viņu rasējuma augšējā kreisajā stūrī.
4. `LIVEHOLD`, tad `R`, atbrīvo visu, ko turat. Arī izejot no sesijas, tas tiek atbrīvots.

Jebkurš sesijā var turēt, arī saimnieks; saimnieka bloķējumi joprojām darbojas virs tā. Turēšana nekad netiek saglabāta failā.

## Kad rediģējums tiek atsaukts

Saimnieka rasējuma kopija pārbauda katru rediģējumu. Daži nevar tikt iekļauti, un CadCraft tos atsauc jūsu ekrānā un komandrindā pasaka, kāpēc, piemēram:

- kāds izdzēsa objektu vai slāni vai bloku, kas tam vajadzīgs, tieši pirms jums;
- kāds rediģē šo objektu vai tur slāni vai apgabalu, kurā tas atrodas;
- saimnieks to bloķēja;
- bloks, ko novietojat, tika notīrīts, vai slānis, ko dzēšat, vēl satur objektus.

## Atsaukšana atsauc jūsu pašu darbu

{{key:Mod+Z}} un {{ui:Undo}} atsauc jūsu pašu pēdējo komandu, visu, un atstāj citu darbu nepieskartu. Ja kāds kopš tā laika ir mainījis to pašu, nekas netiek atsaukts, un komandrindā tiek pateikts, kas to mainīja. {{key:Mod+Y}} atkārto.

## Bloķējumi (saimnieks)

Saimnieks var aizsargāt objektus vai visu slāni, lai neviens tos nemainītu, arī saimnieks pats, līdz tie tiek atbloķēti:

1. Atlasiet objektus, tad ierakstiet `LIVELOCK` un nospiediet {{key:Enter}}. Vai ierakstiet `LIVELOCK`, kad nekas nav atlasīts, un izvēlieties `L`, lai bloķētu slāni pēc nosaukuma: vēlāk šim slānim pievienotie objekti arī ir bloķēti.
2. Bloķētie objekti tiek zīmēti punktēti ar uzrakstu „Bloķējis saimnieks” visu ekrānos.
3. `LIVEUNLOCK` atbloķē tos tādā pašā veidā.

Bloķējumi pieder sesijai: tie beidzas, kad tā beidzas, un nekad netiek saglabāti failā.

## Pievienojieties ar to pašu failu

Ja atvērāt tieši to failu, ko atvēra saimnieks (no kopīgas mapes vai tās pašas kopijas), pievienojieties no sava CadCraft loga Studio: atveriet {{ui:Live}} paneli un izmantojiet {{ui:Join here}} ar saimnieka kodu. Tiek pārsūtītas tikai izmaiņas, kas veiktas kopš saimnieks atvēra failu, tāpēc liels rasējums ir gatavs uzreiz. Ja jūsu fails ir cits, saimnieka rasējums aizstāj to jūsu ekrānā (jūsu fails paliek, kāds bija). Tas darbojas tikai tad, kad jūsu rasējums nav mainīts kopš tā atvēršanas.

## Asistenti tiešraides sesijā

Asistents, kas pieslēgts jūsu CadCraft logam (skatiet palīdzību par darbu ar MI asistentiem), pievienojas sesijai kā savs dalībnieks, ko visi redz kā „Asistents (caur <jūsu vārds>)”. Saimnieks to ielaiž, kā cilvēku; saimnieka paša asistents pievienojas uzreiz. Tā izmaiņām ir sava atsaukšana: jūsu {{key:Mod+Z}} atsauc jūsu darbu, un asistenta atsaukšana atsauc tikai tā paša. Tas aiziet no sesijas, kad jūs to atvienojat vai izejat, un var strādāt sesijā tikai tad, kamēr jūs varat rediģēt.

## Pievienoties no pārlūkprogrammas

Komandas biedrs bez Studio var noskenēt attēlu ar saimnieka kodu ar tālruni, planšetdatoru vai datoru tajā pašā tīklā. CadCraft atveras pārlūkprogrammā, komandrindā lūdz jūsu vārdu un piepildās ar saimnieka rasējumu, kad saimnieks jūs ielaiž. Uzaicinājuma saite ļauj kādam pievienoties no cita tīkla: saimniekam vajag Team Cloud Plan vietu lietotnei, visi pārējie pievienojas bez maksas, un saite darbojas tikai tik ilgi, cik saimnieka sesija ir atvērta.

## Daudz cilvēku vienā rasējumā

Katrs rediģējums nonāk pie visiem sesijā, tāpēc jo vairāk cilvēku, jo ilgāk katra izmaiņa sasniedz katru no viņiem, un lēnāki klēpjdatori un savienojumi atpaliek pirmie. Sesijas parastais izmērs ir 20 cilvēki; saimnieks vienai sesijai var atļaut vairāk (skatiet palīdzību par kopīgu darbu tiešraidē). Ja rasējums jūtas lēns ar daudziem cilvēkiem, palīdz mazāk cilvēku, mazāk rediģētāju vienlaikus vai labāks savienojums.

## Kad sesija beidzas

Rasējumu saglabā tikai saimnieks. Kad saimnieks beidz sesiju, visi pārējie paliek ar nesaglabātu kopiju: saglabājiet to, ja vēlaties to paturēt.

:::note
Kaut kas atsaukts tiek zīmēts virs apkārtējiem objektiem jūsu pašu ekrānā, līdz atkal atverat rasējumu. Šrafējumi un aizpildīti objekti, kas pārklājas, var izskatīties citādi nekā saimnieka kopijā; pats rasējums ir tas pats.
:::
