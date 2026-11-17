---
title: Zhvendos, kopjo, rrotullo, shkalloj, pasqyro, shtrij dhe grup
summary: Vendos mobilje në një dhomë me komandat bazë të ndryshimit, duke përdorur pika bazë, distanca të shkruara dhe zhbërje.
keywords: zhvendos, kopjo, rrotullo, shkalloj, pasqyro, shtrij, grup, bashko, matchprop, përputh vetitë, painter, arrayrect, arraypolar, grup polar, erase, explode, zhbëj, ribëj, pikë bazë, zhvendosje, ndrysho, përputh, rreshto, shpërndaj në mënyrë të barabartë
from: 8eaeee6c
---

## Çfarë do të bësh

Një tavolinë me një karrige, e kopjuar rreth tavolinës, e rrotulluar, e pasqyruar dhe me përmasa të ndryshuara. Gjatë punës përdor {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} dhe {{cmd:UNDO}}.

## Vizato pjesët

1. Shkruaj `REC` dhe shtyp {{key:Enter}}, shkruaj `0,0` dhe shtyp {{key:Enter}}, pastaj shkruaj `@1800,900` dhe shtyp {{key:Enter}}. Kjo është tavolina.
2. Shkruaj `REC` dhe shtyp {{key:Enter}}, shkruaj `300,-700` dhe shtyp {{key:Enter}}, pastaj shkruaj `@450,450` dhe shtyp {{key:Enter}}. Kjo është një karrige, poshtë tavolinës.
3. Kliko {{ui:Shtrirje}}.

## Zhvendos: pika bazë, pastaj pika e dytë

Çdo zhvendosje, kopjim, rrotullim dhe shkallëzim fillon nga një **pikë bazë**: pika që merret me vete, ose rreth së cilës kthehet.

1. Kliko karrigen për ta përzgjedhur.
2. Shkruaj `M` dhe shtyp {{key:Enter}}. Historiku thotë `1 found`.
3. Te `Specify base point`, kapu te qoshja e sipërme majtas e karriges (Pika fundore) dhe kliko.
4. Te `Specify second point`, shkruaj `@0,200` dhe shtyp {{key:Enter}}.

Karrigia lëviz lart për 200, më afër tavolinës.

:::tip
Shkruaj `D` te `Specify base point` për të dhënë në vend një zhvendosje: CadCraft pastaj pyet `Specify displacement`, dhe ti shkruan sa larg horizontalisht dhe vertikalisht, si `0,200` (pa nevojë për `@`).
:::

## Kopjo, sa herë të duash

1. Kliko karrigen.
2. Shkruaj `CO` dhe shtyp {{key:Enter}}.
3. Kapu te qoshja e poshtme majtas e karriges dhe kliko si pikë bazë.
4. Shkruaj `@600,0` dhe shtyp {{key:Enter}}. Shfaqet një kopje 600 djathtas.
5. Shkruaj përsëri `@600,0` dhe shtyp {{key:Enter}}. Shfaqet një kopje e dytë, 1200 djathtas nga origjinali.
6. Shtyp {{key:Enter}} për të mbaruar komandën.

{{cmd:COPY}} vazhdon deri sa të shtypësh {{key:Enter}}. Çdo kopje vendoset sipas distancës nga pika bazë deri te pika që jep. Një pikë `@` numërohet nga pika e fundit që ke futur, që pas kopjes së parë është pika e asaj kopjeje, kështu që `@600,0` dy herë jep kopje në 600 dhe 1200. Shkruaj `U` dhe shtyp {{key:Enter}} për të hequr kopjen e fundit pa dalë nga komanda.

Duhet të shohësh tre karrige njëra pas tjetrës nën tavolinë.

:::tip
{{cmd:COPY}} është për kopje brenda një vizatimi, të vendosura sipas një pike bazë. Për të dërguar objekte në një vizatim ose skedë tjetër, ose për t'i ngjitur më vonë, përdor kujtesën e ndërmjetme: {{key:Mod+C}}, pastaj {{key:Mod+V}}. {{key:Mod+D}} bën një kopje që lëviz me treguesin. Shih [Kopjo, ngjit dhe dyfisho](topic:copy-paste).
:::

## Pasqyro rreshtin në anën tjetër

1. Tërhiq një kuadër nga e djathta në të majtë mbi tre karriget, pa prekur tavolinën.
2. Shkruaj `MI` dhe shtyp {{key:Enter}}.
3. Te `Specify first point of mirror line`, kapu te Pika e mesit të anës së majtë të tavolinës dhe kliko.
4. Te `Specify second point of mirror line`, kapu te Pika e mesit të anës së djathtë të tavolinës dhe kliko.
5. Te `Erase source objects? [Yes/No] <N>`, shtyp {{key:Enter}} për t'i mbajtur.

Duhet të shohësh tre karrige nën tavolinë dhe tre karrige të pasqyruara mbi të. Teksti në një përzgjedhje të pasqyruar mbetet i lexueshëm: vendoset i pasqyruar, por nuk shkruhet prapa.

## Rrotullo një karrige

1. Kliko karriges më të djathtë nën tavolinë.
2. Shkruaj `RO` dhe shtyp {{key:Enter}}.
3. Kapu te qoshja e poshtme djathtas e karriges dhe kliko si pikë bazë.
4. Shkruaj `90` dhe shtyp {{key:Enter}}.

Karrigia kthehet 90 gradë në drejtim të kundërt të akrepave të orës rreth pikës bazë. Një kënd negativ kthehet në drejtim të akrepave. Në vend që të shkruash, mund të klikosh një pikë të dytë: këndi matet nga pika bazë deri te ajo pikë.

## Shkalloj tavolinën

1. Përzgjidh tavolinën.
2. Shkruaj `SC` dhe shtyp {{key:Enter}}.
3. Kapu te qoshja e poshtme majtas e tavolinës dhe kliko si pikë bazë.
4. Shkruaj `1.2` dhe shtyp {{key:Enter}}.

Tavolina është 20% më e madhe, duke u zgjeruar larg pikës bazë. Një faktor nën 1 e bën më të vogël.

:::note
Nëse klikon një pikë në vend që të shkruash faktorin e shkallës, faktori është distanca nga pika bazë deri te ajo pikë. Klikimi një njësi vizatimi larg jep faktor 1. Shkrimi i numrit është zakonisht ajo që duhet.
:::

## Zhbëj dhe ribëj

- {{key:Mod+Z}}, butoni {{ui:Zhbëj}}, ose `U` pastaj {{key:Enter}} zhbën komandën e fundit. Një komandë e tërë është një hap: zhbërja e një {{cmd:COPY}} që bëri pesë kopje heq të pesta.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, butoni {{ui:Ribëj}}, ose `REDO` e kthen përsëri.
- Historiku thotë çfarë u zhbë ("U zhbë COPY").

CadCraft mban 500 hapat e fundit. Cilësimet e shtresave (të ndezura, të ngrira, të kyçura, ngjyra) janë cilësime, jo ndryshime, dhe nuk zhbëhen.

## Shtrije një dhomë më të gjerë

{{cmd:STRETCH}} (`S`, ose {{ui:Shtrij}}) zhvendos vetëm atë që shtrihet brenda një dritareje kryqëzuese: qoshet dhe skajet e vijave brenda saj lëvizin, gjithçka tjetër qëndron, kështu që dhoma bëhet më e gjerë në vend që të zhvendoset.

1. Shkruaj `S` dhe shtyp {{key:Enter}}.
2. Tërhiq një dritare nga e djathta në të majtë mbi murin e djathtë, që të mbulojë qoshet e murit dhe skajet e çdo gjëje që takon atë.
3. Shtyp {{key:Enter}}.
4. Kliko një pikë bazë, pastaj shkruaj `@600,0` dhe shtyp {{key:Enter}}.

Drejtkëndëshi është 600 më i gjerë; vijat që mbaronin te muri mbeten aty. Një hark me një skaj brenda mban lartësinë e tij, rrathët dhe tekstet zhvendosen kur qendra ose pika e futjes e tyre është brenda, dhe një përmasë mat gjatësinë e re. Objektet e zgjedhura një nga një, pa dritare, thjesht zhvendosen.

Mund të përzgjedhësh edhe më parë: tërhiq dritaren kryqëzuese (ose lasso kryqëzuese) mbi murin pa asnjë komandë në punë, pastaj shkruaj `S`. STRETCH e merr atë përzgjedhje dhe shtrin atë që mbajnë dritaret e saj, pikërisht sikur t'i kishe tërhequr te kërkesa e vet.

## Grup: rreshta dhe kolona, ose rreth një qendre

{{cmd:ARRAY}} (`AR`, ose {{ui:Grup}}) kopjon përzgjedhjen në rrjet ose në rreth.

1. Përzgjidh një karrige, shkruaj `AR` dhe shtyp {{key:Enter}}. Shtyp {{key:Enter}} për Drejtkëndësh.
2. Shfaqet një pamje paraprake e 4 kolonave dhe 3 rreshtave. Shkruaj `COU`, shtyp {{key:Enter}}, pastaj `5` për kolonat dhe `2` për rreshtat.
3. Shkruaj `S`, shtyp {{key:Enter}}, pastaj `600` ndërmjet kolonave dhe `-900` ndërmjet rreshtave (negativi shkon poshtë).
4. Shtyp {{key:Enter}} për të bërë kopjet.

Për një unazë karrigesh rreth një tavoline, zgjidh `PO` (Polar) në vend të kësaj, kliko qendrën e tavolinës, dhe cakto `I` (elemente), `F` (kënd mbushjeje: 360 për gjithë rrethin, 180 për gjysmën) dhe `ROT` (nëse kopjet rrotullohen për t'u kthyer nga qendra). {{cmd:ARRAYRECT}} dhe {{cmd:ARRAYPOLAR}} e kapërcejnë pyetjen.

## Bashko pjesët në një polivijë

{{cmd:JOIN}} (`J`, ose {{ui:Modify}} › {{ui:More}} › {{ui:Join}}): përzgjidh vija, harqe dhe polivijë të hapura, skajet e të cilave takohen, dhe shtyp {{key:Enter}}. Ato bëhen një polivijë, e mbyllur kur shkojnë gjithë rrethin, që pastaj mund ta ofsetosh në një lëvizje. Vijat që shtrihen në një drejtëz bëhen një vijë, edhe me hapësira ndërmjet tyre; harqet e një rrethi bëhen një hark, ose rrethi.

## Përputh vetitë

{{cmd:MATCHPROP}} (`MA`, ose {{ui:Modify}} › {{ui:More}} › {{ui:Match properties}}): kliko objektin pamja e të cilit të duhet, pastaj përzgjidh objektet që do të ndryshosh dhe shtyp {{key:Enter}}. Ato marrin shtresën dhe ngjyrën e tij; një tekst merr lartësinë e tij, një përmasë madhësitë e saj, një vijëzim modelin e tij. Te pyetja e dytë, zgjidh opsionin Cilësimet (S) për ta fikur ndonjërën prej këtyre.

## Përputh objektet

**Sipas pikave.** {{cmd:ALIGN}} (`AL`, ose {{ui:Modify}} › {{ui:More}} › {{ui:Align}}): përzgjidh objektet dhe shtyp {{key:Enter}}, pastaj kliko një pikë mbi ta (burimi) dhe vendin ku duhet të shkojë (destinacioni).

- Një çift i zhvendos. Shtyp {{key:Enter}} te `Specify second source point` për të ndalur atje.
- Dy çifte i rrotullojnë gjithashtu, kështu që vija ndërmjet dy pikave burim shtrihet përgjatë vijës ndërmjet dy pikave destinacion. CadCraft pastaj pyet `Scale objects based on alignment points?`: `Y` i bën edhe ato aq më të mëdha ose më të vogla.
- Një çift i tretë i pasqyron kur dy pikat e tij janë në anë të kundërta të asaj vije.

**Skajet dhe hapësira.** {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}} (ose `ALIGNPANEL`) hap një panel të vogël mbi vizatim. Përzgjidh objektet, pastaj:

- zgjidh me çfarë të përputhet te {{ui:Align to}} (e tërë përzgjedhja, objekti i parë ose i fundit që zgjodhe, ose një pikë që klikon) dhe kliko {{ui:Left}}, {{ui:Center}}, {{ui:Right}}, {{ui:Top}}, {{ui:Middle}} ose {{ui:Bottom}};
- ose zgjidh {{ui:Equal gaps}} ose {{ui:Equal centres}} dhe kliko {{ui:Across}} ose {{ui:Up and down}}: dy objektet e jashtme mbeten, pjesa tjetër shpërndahet në mënyrë të barabartë mes tyre (të paktën tre objekte).

Çdo klikim është një hap zhbërjeje, dhe përzgjedhja mbetet, kështu që mund të provosh një tjetër. Çdo objekt llogaritet sipas kutisë së tij kufitare, në UCS kur është vendosur një. Në rreshtin e komandave e njëjta gjë është {{cmd:ALIGNTO}} dhe {{cmd:DISTRIBUTE}}.

## Fshi dhe shpërbëj

- {{cmd:ERASE}} (`E`, ose {{key:Delete}}) heq objektet e përzgjedhura.
- {{cmd:EXPLODE}} (`X`) e thyen një polivijë në vija dhe harqe, një referencë blloku në objektet e saj, dhe një përmasë në vija, shigjeta dhe tekst. Përmasat e shpërbëra nuk matin më vetveten.

## Gabime të zakonshme

- **Shkruarja e një distance pa `@` te pika e dytë.** `600,0` është pika absolute 600,0, jo "600 djathtas". Përdor `@600,0`, ose një `600` të thjeshtë me kryqin drejtuar nga e duhura.
- **Rrotullimi shkoi në drejtim të gabuar.** Këndet pozitive kthehen në drejtim të kundërt të akrepave të orës.
- **Zhbërja hoqi më shumë se pritej.** Një zhbërje merr mbrapsht të tërën e komandës së fundit, duke përfshirë çdo kopje që ka bërë.
- **Komanda nuk pyeti për të përzgjedhur objekte.** Objektet ishin përzgjedhur më parë, kështu që i përdori. Shtyp {{key:Esc}} më parë për të filluar pa asnjë përzgjedhje.
