---
title: Komandu opcijām savi burti
summary: Atbildiet uz komandas opcijām ar burtiem, ko izvēlaties, jebkurā valodā, no viena teksta faila, ko varat rediģēt, importēt un eksportēt.
keywords: opciju burti, optionkeys, optkeys, opcijas atslēgvārds, atslēgvārds, pārkartot, kartējums, pielāgot, pielāgoti burti, polārs, masīvs, P, PO, valoda, tulkot opcijas, īsā forma, importēt, eksportēt, neviennozīmīgs
from: 7c8328c6
---

## Ko jūs uzzināsiet

Kā mainīt burtus, ko ierakstāt, lai atbildētu uz komandas opcijām. Piemēram, {{cmd:ARRAY}} jautā `[Taisnstūra/POlārs]` un pieņem `PO` polārajam; varat padarīt `P` vai jebkurus citus burtus par to pašu, pat savā valodā, ja vēlaties.

## Kā tiek atbildēts uz opcijām

Kad komanda rāda opcijas kvadrātiekavās, lielie burti ir tie, ko rakstīt: `POlārs` ir `PO`, `Iziet` ir `X`.

Varat ierakstīt arī mazāk burtu. Ja ierakstītais atbilst tikai vienai no parādītajām opcijām, CadCraft to pieņem: ar `[Taisnstūra/POlārs]` vienīgais `P` ir Polārs. Ja tas atbilst divām, komandrinda tās nosauc un jautā vēlreiz:

```
C could be COUnt, COLumns. Type more letters.
```

Skaitļi nekad netiek minēti: ierakstīts attālums vai skaits vienmēr tiek lasīts kā skaitlis.

## Pievienojiet savus burtus

Katra komanda paturē savus iebūvētos burtus. Jūs pievienojat savus virsū, tāpēc jūsu saraksts satur tikai to, ko mainījāt.

1. Atveriet {{ui:Iestatījumi}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Opciju burti}} un noklikšķiniet uz {{ui:Rediģēt…}}. Vai ierakstiet {{cmd:OPTIONKEYS}} un nospiediet {{key:Enter}}.
2. Sadaļā {{ui:Komanda}} izvēlieties komandu, piemēram, `ARRAY`. Saraksts satur katru komandu, kas jautā opcijas, un sākas ar komandu, ko izmantojāt pēdējo.
3. Sadaļā {{ui:Opcija}} izvēlieties opciju. Katra rāda savus iebūvētos burtus kvadrātiekavās, piemēram, `POlārs (PO)`.
4. Lodziņā {{ui:Jūsu burti}} ierakstiet burtus, ko vēlaties, piemēram, `P`, un noklikšķiniet uz {{ui:Pievienot}}.
5. Opcija tagad parādās sadaļā {{ui:Jūsu burti}} ar saviem iebūvētajiem burtiem un jūsējiem. Noklikšķiniet uz {{ui:Saglabāt}}.

Sāciet {{cmd:ARRAY}}, atlasiet objektu un nospiediet {{key:Enter}}. Uzvedne rāda jūsu burtus aiz opcijas, `POlārs (P)`, un `P` uz to atbild.

Lai noņemtu vienu, noklikšķiniet uz x rindas beigās un pēc tam uz {{ui:Saglabāt}}. Opcija atkal atgriežas pie saviem iebūvētajiem burtiem.

## Burti, ko nevar izmantot

Redaktors noraida burtus, kas paslēptu kaut ko, ko komandrinda jau lasa, un pasaka, kāpēc:

- citas tās pašas komandas opcijas iebūvētos burtus (`R` Polārajam `ARRAY`, kur `R` ir Taisnstūra);
- objekta piesaistes vārdu no trim vai vairāk burtiem, piemēram, `END`, `MID` vai `CEN`, un vārdus `ALL` un `LAST`;
- vieniem un tiem pašiem burtiem divām dažādām vienas komandas opcijām.

Kamēr kaut kas ir uzskaitīts sarkanā krāsā, {{ui:Saglabāt}} ir izslēgts: izlabojiet rindu vai izņemiet to, un tas atkal ieslēdzas. Uzvednes iebūvētie burti vienmēr uzvar jūsējos, tāpēc jūsu saraksts nekad nevar apturēt iebūvētu atbildi no darbības. Burti, kas nejauši ir komandas nosaukums, piemēram, `L` vai `C`, ir pieļaujami: opcijas uzvednē komandrinda lasa atbildi, nevis sāk komandu.

Komandai uzskaitītās opcijas nāk no komandām, kas dala tās pašas uzvednes, tāpēc reizēm komanda uzskaita opciju, ko tā jautā tikai dažos gadījumos.

## Viena izvēle katrai komandai

Sadaļā {{ui:Komanda}} izvēlieties {{ui:Katra komanda}}. Opcijas tad ir katra opcija, ko jebkura komanda ietver, piemēram, Iziet vai Atsaukt. Burti, ko tur pievienojat, atbild uz šo opciju katrā komandā, kas to piedāvā. Burti, kas pievienoti vienai komandai, uzvar šos.

## Burti jūsu valodā

Burti var būt no jebkura alfabēta, tāpēc varat atbildēt uz opcijām, nemainot tastatūras izkārtojumu: pievienojiet `З` Close sadaļā {{ui:Katra komanda}}, vai `П` POlārs `ARRAY`.

CadCraft nāk tikai ar angļu burtiem. Jūsu pašu saraksts ir tas, kā jūs, jūsu birojs vai cilvēki, kas dala jūsu valodu, sakārtojat pārējo, un {{ui:Eksportēt}} izveido failu, ko var nodot tālāk.

## Rediģēt kā tekstu

{{ui:Rediģēt kā tekstu}} redaktorā parāda to pašu sarakstu kā teksta rindas, vienu katrai opcijai, un tas ir tas, ko {{ui:Eksportēt}} saglabā:

```
ARRAY.PO,  P
*.X,       Q
```

Katra rinda ir komanda, punkts, opcijas iebūvētie burti, komats un jūsu burti. Zvaigznīte komandas vietā nozīmē katru komandu. Rinda, kas sākas ar `;`, ir piezīme.

## Kas paliek tāds pats

- Iebūvētie burti turpina darboties blakus jūsējiem.
- Rutīnas un rīkjoslas pogas turpina lietot iebūvētos burtus, tāpēc nekas, ko ielādējāt, nesalūst. Lai ierakstītu iebūvētos burtus pats, kur jūsu burti traucētu, ieliekiet priekšā pasvītrojumu: `_PO`.
- Komandas īsais nosaukums ir kas cits: skatiet [Komandu aliasu rediģēšana](topic:command-aliases).

## Rindas, ko CadCraft noraida

Kad rediģējat kā tekstu vai importējat failu, redaktors uzskaita katru problēmu ar rindas numuru:

- komanda neeksistē (komandas alias ir kārtībā: `AR.PO` tiek lasīts kā `ARRAY.PO`);
- rindiņa nav formā `KOMANDA.OPCIJA, BURTI`;
- burtiem ir atstarpe vai zīme (tikai burti un cipari, ne vairāk kā 16);
- vieniem un tiem pašiem burtiem atbild divas dažādas vienas komandas opcijas.

## Importēt un eksportēt

{{ui:Eksportēt}} saglabā jūsu burtus teksta failā, lai to paturētu vai dotu kādam citam. {{ui:Importēt…}} to nolasa. Abi ir redaktorā un {{ui:Iestatījumi}} › {{ui:CadCraft}} › {{ui:Opciju burti}}.

Iestatījumos {{ui:Importēt…}} aizstāj jūsu failu ar izvēlētu. Fails ar rindu, kas konfliktē vai nav lietojama, netiek pieņemts; atveriet redaktoru un importējiet to tur, lai redzētu rindas. Redaktorā tas tikai piepilda lodziņu: nekas nemainās, līdz noklikšķināt uz {{ui:Saglabāt}}.

## Pārlādēt vai noņemt

Ierakstiet {{cmd:REINIT}} un nospiediet {{key:Enter}}, lai atkal piemērotu savu failu. Lai noņemtu burtu, dzēsiet tā rindu un noklikšķiniet uz {{ui:Saglabāt}}.

## Jūsu burti seko jūsu kontam

Kad esat pierakstījies getcadcraft.com, jūsu burti tiek glabāti ar jūsu kontu. Atveriet CadCraft citā pārlūkprogrammā vai citā datorā ar to pašu kontu, un tie ierodas paši; komandrinda rāda `Opciju burti no jūsu konta`. Ja tos mainījāt divās vietās, jaunākā kopija uzvar, un iepriekšējā tiek paturēta vienu reizi.

{{ui:Iestatījumi}} › {{ui:CadCraft}} › {{ui:Opciju burti}} pasaka, kur tie atrodas. Ja neesat pierakstījies vai neesat tiešsaistē, tie paliek šajā pārlūkprogrammā un tiek nosūtīti jūsu kontam nākamreiz, kad tos saglabājat, esot pierakstījies.

Saistītie: [Komandu aliasu rediģēšana](topic:command-aliases) · [CadCraft iestatījumi](topic:settings) · [Komandas](topic:commands)
