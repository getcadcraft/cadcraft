---
title: Format muri, prerje, zhvendosje dhe kyçje për muret 2D
summary: Vizato muret si drejtkëndësha, shumëkëndësha dhe harqe, ndaji dhe bashkoji ato, zhvendosi sipas një përmase, dhe kyç një mur me një tjetër ose me një vijë rrjete. Të njëjtat vegla si muret e BimCraft.
keywords: mur, muret, shiriti i mureve, butonat e mureve, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, stili i bashkimit, mitër, prerë, I prerë, grip, tërhiq skajin, rrotullo, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, bashko, ndalo bashkimin, kyç, vijë rrjete, ndaj, hapësirë, zhvendosje, vijë vendndodhjeje
from: 49044181
---

Këto vegla punojnë me muret 2D nga `WALL` (shih "Vizato mure, dyer dhe dritare të zgjuara në 2D"). Përdorin të njëjtat rregulla si veglat e mureve në BimCraft, kështu që një mur sillet njësoj në të dyja.

## Ku janë veglat

- Te shiriti i veglave, grupi {{ui:Muret}} ka {{ui:Mur}}, {{ui:Drejtkëndësh}}, {{ui:Ndaj}} dhe {{ui:Zhvendos}}. Menuja e saj {{ui:Më shumë}} ka çdo vegël tjetër muri, çdonjëra me ikonën e vet.
- Në stilet e menusë shirit, skeda {{ui:Muret}} ka panelet {{ui:Vizato muret}}, {{ui:Prerje}}, {{ui:Cakto dhe ndrysho}}, {{ui:Mbaj}} dhe {{ui:Bashko}}.
- Në një paraqitje, rreshtat e veglave dhe kutia e veglave tregojnë të njëjtin grup {{ui:Muret}}.
- Mund të shkruash edhe çdo komandë të emërtuar më poshtë.

## Bashkimet ruhen

Kur skaji i një muri bie mbi një mur tjetër, CadCraft e ruan atë bashkim me të dy muret. Nuk i llogarit më bashkimet nga vendi ku rastësisht ndodhen skajet. Pra:

- Muret e bashkuara me një mur që zhvendos ndjekin dhe mbeten të bashkuara. Skajet e tyre rrëshqasin përgjatë vijave të veta, kështu që asgjë nuk kthehet.
- Tërhiq një skaj të një muri me grip-in e tij dhe muri i bashkuar aty mban drejtimin e vet. Skaji i tij rrëshqet përgjatë vijës së vet për t'u takuar me murin e tërhequr, kështu që skaji i tërhequr zbret mbi atë vijë, jo gjithmonë nën kursor. Pamja paraprake tregon ku. Një mur që ngul skajin në murin e tërhequr ndjek përgjatë vijës së vet. Tërheqja e skajit drejt përgjatë murit ndryshon gjatësinë e tij, dhe muri i bashkuar aty lëviz me të.
- `ROTATE` mbi një mur të bashkuar punon në të njëjtën mënyrë: skajet e fqinjëve rrëshqasin përgjatë vijave të tyre deri te muri i rrotulluar.
- Për të lëvizur një qoshe, zgjidh të dy muret që takohen aty dhe tërhiq grip-in mbi qoshe. Të dy muret mbeten në qoshe dhe të dy rrotullohen. Muret më larg mbeten ashtu si ishin.
- Mbaj {{key:Alt}} kur kliko vendin e ri të grip-it për të prishur bashkimet qëllimisht: muri shkon aty ku e vendose dhe asgjë nuk e ndjek.
- Nëse një tërheqje do ta kthente një mur të bashkuar prapa përmes skajit të vet të largët, refuzohet dhe asgjë nuk ndryshon.
- Një mur që vizaton me {{ui:Ndalo bashkimin}} (`D` në `WALL`), ose që fiket te Vetitë ({{ui:Mos lejo lidhjen në fillim}}, {{ui:Mos lejo lidhjen në fund}}), mbetet i lirë në atë skaj, edhe nëse prek një mur tjetër, derisa ta lejosh përsëri.
- `WALLDISJOIN` ({{ui:Ndalo bashkimin}} te grupi {{ui:Muret}}) e bën të njëjtën gjë me një klikim: kliko një mur pranë njërit skaj për të ndaluar bashkimet në atë skaj, dhe kliko përsëri për t'i lejuar.
- Një vizatim i vjetër nuk ka ende bashkime të ruajtura. Ndryshimi i parë që bën i gjen një herë, nga mënyra si ishin muret përpara ndryshimit, dhe i ruan. `WALLJOINS` e bën menjëherë.
- Skedarët DWG dhe DXF mbajnë bashkimet brenda çdo muri. CadCraft i lexon ato ashtu si u ruajtën. Një program që nuk mban të dhëna shtesë i shfaq muret si blloqe të thjeshta dhe heq bashkimet, dhe një bashkim, muret e të cilit u zhvendosën në një program tjetër, hiqet herën tjetër që ndryshon ndonjë nga dy muret.

## Stili i bashkimit të një qoshe

Një qoshe ku takohen dy muret skaj më skaj vizatohet si mitër, përveç nëse zgjedh një stil tjetër.

- `WALLJOINSTYLE` ({{ui:Stili i bashkimit}} te grupi {{ui:Muret}}): kliko qoshen. Çdo klikim kalon te stili tjetër: {{ui:Mitër}}, {{ui:Butt}}, {{ui:I prerë}}, dhe pastaj sërish {{ui:Mitër}}. Shkruaj `T` për të ndërruar cili nga të dy muret kalon përmes qoshes që klikove së fundi. Shtyp {{key:Enter}} për të përfunduar. Një ekzekutim i komandës është një hap zhbërjeje.
- {{ui:Butt}}: njëri mur kalon deri te faqja e largët e tjetrit, dhe tjetri ndalon te ana e tij. {{ui:I prerë}}: e njëjta gjë, por muri që kalon përmes mbaron katror me veten. Në kënd të drejtë të dy duken të njëjtë.
- Te Vetitë e një muri: {{ui:Stili i bashkimit në fillim}}, {{ui:Stili i bashkimit në fund}}, dhe {{ui:Kalon në fillim}}, {{ui:Kalon në fund}}.
- Stili ruhet me të dy muret dhe udhëton në skedarët DWG dhe DXF. Një kopje e murit fillon pa të.
- Një bashkim T nuk ka stil për të zgjedhur: muri ana e të cilit takohet kalon. Një qoshe ku takohen tre ose më shumë mure mbetet mitër. Po kështu një qoshe shumë e mprehtë (nën rreth 30 gradë) dhe dy mure në një vijë.

## Vizato forma muri

Secila krijon muret në një hap zhbërjeje, me qoshet e bashkuara. Në `WALL`, `O` vendos një zhvendosje (sa larg majtas nga klikimet e tua shkon muri), dhe `D` e fik bashkimin për muret që vizaton më pas.

- `WALLRECT` (`WR`): dy qoshe të kundërta, si `RECTANG`.
- `WALLROT`: krahu i parë, pastaj sa larg del krahu tjetër, për një drejtkëndësh me çfarëdo kënd.
- `WALLPOLY` (`WP`): numri i brinjëve (3 deri 64), qendra, `I` për të brendashkruar ose `C` për të rrethshkruar, pastaj rrezja, si `POLYGON`: kliko, ose shkruaje (një rreze e shkruar shkon drejt treguesit, ose përgjatë X kur treguesi është akoma te qendra).
- `WALLARC` (`WARC`): qendra, fillimi, fundi. `D` e kthen harkun në drejtim tjetër.
- `WALLTAN`: kliko pranë skajit të një muri, pastaj skajin e harkut, që del përgjatë atij muri.
- `WALLPICK`: kliko një vijë ose polivijë dhe thuaj nëse do të marrësh edhe vijat e bashkuara me të.
- `WALLTRACE`: kliko brenda një zone të mbyllur vijash dhe murësh për të vendosur mure rreth më të voglës.

Muret e planit janë të drejta, kështu që një hark vizatohet si mure të shkurtra të drejta 15 gradë secili. Ato bashkohen si çdo qoshe.

## Prit muret

- `WALLSPLIT` (`WS`): kliko murin, pastaj pikën. `C` pret aty ku e kryqëzon një mur tjetër, `G` lë një hapësirë mes pjesëve, `F` i bën skajet e prera të lira në vend se të bashkuara. Pjesa e parë mban vendin e murit në vizatim, dhe dyert dhe dritaret shkojnë me pjesën e tyre. Një prerje përmes një dere ose dritareje refuzohet.
- `WALLSPLITGAP` ({{ui:Ndaj me hapësirë}}): e njëjta ndarje, por kërkon fillimisht hapësirën.
- `WALLDELSEG`: kliko murin, pastaj dy skajet e pjesës për ta fshirë.
- `WALLREJOIN`: kliko dy pjesë të një muri për t'i bërë një mur sërish.

## Zhvendos muret sipas distancës

- `WALLDIM` ({{ui:Ndrysho sipas përmasës}}): kliko një përmasë lineare ose e përputhur që shkon nga një mur te një tjetër, pastaj shkruaj vlerën e re. Muri në skajin e largët zhvendoset katror me veten, muri në skajin e parë mbetet, dhe muret e bashkuara me të ndjekin. Pika e largët e përmasës lëviz me murin e vet, kështu që përmasa tregon vlerën që shkrove.
- `WALLOFFSET` (`WO`): kliko një mur, pastaj anën ku ta zhvendosësh (`D` shkruan një distancë, `C` bën kopje në vend të saj).
- `WALLSTRETCH`: një dritare rreth skajeve të murit, pastaj një pikë bazë dhe një pikë të dytë.
- Te Vetitë, një {{ui:Gjatësi}} e shkruar mban fillimin dhe merr me vete murin e bashkuar në skajin e largët, dhe një {{ui:Trashësi}} e re rritet larg nga {{ui:Vija e vendndodhjes}} që zgjodhe (faqja e majtë, faqja e djathtë ose qendra).

## Përmasa mes vijave qendrore të mureve

Vija qendrore e një muri nuk vizatohet, por kapja e objekteve e gjen. Me kapjen e objekteve aktive ({{key:F3}}), lëviz kursorin mbi mesin e trashësisë së murit: shenja thotë `Wall center: endpoint` ose `Wall center: midpoint`, dhe vija qendrore shfaqet si vijë me viza ndërsa shenja është mbi të. Me {{ui:Pingule}} ose {{ui:Më i afërti}} të ndezur te lista e kapjeve, ato funksionojnë edhe mbi vijën qendrore.

1. Nis `DIMLINEAR` (ose `DIMALIGNED`).
2. Kliko muri i parë aty ku shenja thotë `Wall center: midpoint` ose `Wall center: endpoint`.
3. Kliko muri i dytë në të njëjtën mënyrë, pastaj kliko ku shkon vija e përmasës.
4. Për të ndryshuar distancën, nis `WALLDIM`, kliko përmasën dhe shkruaj vlerën e re. Muri i dytë zhvendoset.

Kapja në vijën qendrore funksionon në çdo komandë që kërkon një pikë.

## Kyç muret

Një kyçje qëndron me murin në skedar. Nëse zhvendos një mur të kyçur, tjetri e ndjek. Nëse një ndryshim zhvendos të dy muret në mënyrë të ndryshme, refuzohet dhe asgjë nuk ndryshon.

- `WALLHOLD`: kyç një mur me një mur tjetër. `A` e zhvendos së pari mbi vijën e murit tjetër, `K` mban distancën që ka.
- `WALLHOLDDIM`: kyç distancën mes dy mureve paralele.
- `WALLGRID`: kyç një mur me një vijë rrjete (një vijë në një shtresë rrjete me etiketën e saj në tekst në njërin skaj), ose gjatë saj ose me një skaj mbi të. Një mur i kyçur gjatë vijës mban distancën që ka prej saj. Zhvendos vijën e rrjetës me `GRIDMOVE` dhe muri e ndjek të tërin, me muret e bashkuara me të. Një mur që shtrihet gjatë një vije rrjete lëviz i tërë me të edhe pa kyçje, dhe një mur që vetëm mbaron në vijë shtrihet nga ai skaj.
- `WALLHOLDS` liston kyçjet. `WALLUNHOLD` heq kyçjet nga një mur.
- Çdo kyçje shfaq një katenaci të vogël në plan: pranë mesit të murit të kyçur, ose pranë skajit që është kyçur me një vijë rrjete. Kliko një katenaci për ta hequr atë kyçje.

## Çfarë nuk ka ende

Kyçjet përdorin vijat qendrore të mureve. Muret këtu nuk kanë shtresa, kështu që nuk ka prioritet shtrese në një kryqëzim, dhe muret nuk kthehen (shih harqet më lart). Askush nuk i ka provuar këto vegla në një vizatim të madh, dhe nuk janë kontrolluar në një program tjetër CAD.
