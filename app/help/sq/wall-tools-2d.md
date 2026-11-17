---
title: Forma muresh, prerje, zhvendosje dhe kyçje për muret 2D
summary: Vizatoni muret si drejtkëndësha, shumëkëndësha dhe harqe, ndajini dhe bashkojini përsëri, zhvendosini sipas një përmase, dhe kyçni një mur me një tjetër ose me një vijë rrjeti. Të njëjtat mjete si muret e BimCraft.
keywords: mur, shiriti i mureve, butonat e murit, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, stil bashkimi, mitër, i prerë, katenac, kapëse, tërhiq skajin, rrotullo, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, bashkim, ndalo bashkimin, kyç, vijë rrjeti, ndaj, hapësirë, zhvendosje, vijë vendndodhjeje
from: f41e7433
---

Këto mjete punojnë me muret 2D nga `WALL` (shih "Vizato mure, dyer dhe dritare inteligjente 2D"). Ato përdorin të njëjtat rregulla si mjetet e mureve në BimCraft, kështu që një mur sillet njësoj në të dyja.

## Ku janë mjetet

- Në shiritin e veglave, grupi {{ui:Muret}} ka {{ui:Mur}}, {{ui:Drejtkëndësh}}, {{ui:Ndaj}} dhe {{ui:Zhvendos}}. Menyja e tij {{ui:Më shumë}} ka çdo mjet tjetër të murit, secili me ikonën e vet.
- Në stilet e menusë me shirit, skeda {{ui:Muret}} ka panelet {{ui:Vizato muret}}, {{ui:Prit}}, {{ui:Cakto dhe ndrysho}}, {{ui:Mbaj}} dhe {{ui:Bashko}}.
- Në një paraqitje, rreshtat e veglave dhe kutia e veglave shfaqin të njëjtin grup {{ui:Muret}}.
- Mund të shkruani çdo komandë të emëruar më poshtë.

## Bashkimet ruhen

Kur fundi i një muri arrin mbi një mur tjetër, CadCraft e ruan atë bashkim me të dy muret. Nuk e llogarit më bashkimet nga pozicioni ku ndodhen fundet. Pra:

- Muret e bashkuar me një mur që zhvendosni e ndjekin atë dhe mbeten të bashkuar. Fundet e tyre rrëshqasin përgjatë vijave të tyre, kështu që asgjë nuk rrotullohet.
- Tërhiqni një skaj të murit nga kapëza e tij dhe muri i bashkuar aty e ruan drejtimin e vet. Skaji i tij rrëshqet përgjatë vijës së vet për t'u takuar me murin e tërhequr, kështu që skaji i tërhequr zbret në atë vijë, jo gjithmonë nën kursor. Pamja paraprake tregon ku. Një mur që futet në murin e tërhequr ndjek vijën e vet. Tërheqja drejt e përgjatë murit ndryshon gjatësinë e tij, dhe muri i bashkuar aty lëviz me të.
- `ROTATE` mbi një mur të bashkuar punon në të njëjtën mënyrë: fundet e fqinjëve rrëshqasin përgjatë vijave të tyre deri te muri i rrotulluar.
- Për të zhvendosur një qoshe, përzgjidhni të dy muret që takohen aty dhe tërhiqni kapëzën në qoshe. Të dy muret mbeten në qoshe dhe të dy rrotullohen. Muret më larg mbeten ashtu siç ishin.
- Mbani {{key:Alt}} kur klikoni vendin e ri të kapëzës për të prishur qëllimisht bashkimet: muri shkon aty ku e vendosni dhe asgjë nuk e ndjek.
- Nëse një tërheqje do ta rrotullonte një mur të bashkuar prapa përmes fundit të vet më larg, refuzohet dhe asgjë nuk ndryshon.
- Një mur që vizatoni me {{ui:Ndalo bashkimin}} (`D` në `WALL`), ose që e fikni në Vetitë ({{ui:Mos lejo lidhjen në fillim}}, {{ui:Mos lejo lidhjen në fund}}), mbetet i lirë në atë skaj, edhe nëse prek një mur tjetër, derisa ta lejoni përsëri.
- `WALLDISJOIN` ({{ui:Ndalo bashkimin}} në grupin {{ui:Muret}}) bën të njëjtën gjë me një klik: klikoni mbi një mur pranë njërit skaj për të ndaluar bashkimet në atë skaj, dhe klikojeni përsëri për t'i lejuar.
- Një vizatim më i vjetër nuk ka ende bashkime të ruajtura. Ndryshimi i parë që bëni i gjen një herë, nga mënyra si ishin muret para ndryshimit, dhe i ruan. `WALLJOINS` e bën menjëherë.
- Skedarët DWG dhe DXF mbajnë bashkimet brenda çdo muri. CadCraft i lexon ato përsëri ashtu si u ruajtën. Një program që nuk mban të dhëna shtesë i shfaq muret si blloqe të thjeshta dhe i heq bashkimet, dhe një bashkim, muret e të cilit janë zhvendosur në një program tjetër, hiqet herën tjetër që ndryshoni njërin nga muret.

## Bashkimi i një qoshe

Një qoshe ku dy mure takohen skaj më skaj vizatohet si mitër, përveç nëse zgjidhni një stil tjetër.

- `WALLJOINSTYLE` ({{ui:Stili i bashkimit}} në grupin {{ui:Muret}}): klikoni qoshen. Çdo klikim kalon te stili i radhës: {{ui:Mitër}}, {{ui:I prerë}}, {{ui:I prerë}}, pastaj {{ui:Mitër}} përsëri. Shkruani `T` për të ndërruar cili nga dy muret kalon përmes qoshes ku klikuat së fundmi. Shtypni {{key:Enter}} për ta mbyllur. Një ekzekutim i komandës është një hap zhbërjeje.
- {{ui:I prerë}}: një mur kalon deri te fytyra e largët e tjetrit, dhe tjetri ndalet pranë anës së tij. {{ui:I prerë}} (katror): e njëjta gjë, por muri që kalon përfundon katror me vetveten. Në një kënd të drejtë të dyja duken njëlloj.
- Në Vetitë e murit: {{ui:Stili i bashkimit në fillim}}, {{ui:Stili i bashkimit në fund}}, dhe {{ui:Kalon në fillim}}, {{ui:Kalon në fund}}.
- Stili ruhet me të dy muret dhe udhëton në skedarët DWG dhe DXF. Një kopje e murit fillon pa të.
- Një bashkim T nuk ka stil për të zgjedhur: muri, ana e të cilit takohet, kalon. Një qoshe ku takohen tre ose më shumë mure mbetet mitër. Po ashtu edhe një qoshe shumë e mprehtë (nën rreth 30 gradë) dhe dy mure në një vijë.

## Vizato forma muresh

Secila prej tyre krijon muret në një hap zhbërjeje, me qoshet e bashkuara. Në `WALL`, `O` vendos një zhvendosje pozicionimi (sa në të majtë të klikimeve tuaja shkon muri) dhe `D` e fik bashkimin për muret që vizatoni më pas.

- `WALLRECT` (`WR`): dy qoshe të kundërta, si `RECTANG`.
- `WALLROT`: ana e parë, pastaj sa larg del ana tjetër, për një drejtkëndësh në çdo kënd.
- `WALLPOLY` (`WP`): numri i brinjëve (3 deri në 64), qendra, `I` për të brendashkruar ose `C` për të rrethshkruar, pastaj rrezja, si `POLYGON`.
- `WALLARC` (`WARC`): qendra, fillimi, fundi. `D` e kthen harkun në drejtim tjetër.
- `WALLTAN`: klikoni pranë fundit të një muri, pastaj fundin e harkut, që del përgjatë atij muri.
- `WALLPICK`: klikoni një vijë ose polivijë dhe thoni nëse të merren edhe vijat e bashkuara me të.
- `WALLTRACE`: klikoni brenda një zone të mbyllur vijash dhe mureve për të vendosur mure rreth më të voglës.

Muret e planit janë të drejta, kështu që një hark vizatohet si mure të shkurtra të drejta, nga 15 gradë secili. Ato bashkohen si çdo qoshe.

## Pritini muret

- `WALLSPLIT` (`WS`): klikoni murin, pastaj pikën. `C` pret aty ku kryqëzohet një mur tjetër, `G` lë një hapësirë midis pjesëve, `F` i bën skajet e prerjes të lira në vend që të bashkuara. Pjesa e parë mban vendin e murit në vizatim, dhe dyert dhe dritaret shkojnë me pjesën e tyre. Një prerje përmes një dere ose dritareje refuzohet.
- `WALLSPLITGAP` ({{ui:Ndaj me hapësirë}}): e njëjta ndarje, por kërkon hapësirën së pari.
- `WALLDELSEG`: klikoni murin, pastaj dy skajet e pjesës për ta fshirë.
- `WALLREJOIN`: klikoni dy pjesë të të njëjtit mur për t'i bërë përsëri një.

## Zhvendosni muret sipas distancës

- `WALLDIM`: klikoni një përmasë lineare ose të përafruar që shkon nga një mur te një tjetër, pastaj shkruani vlerën e re. Muri në skajin më të largët zhvendoset katror me vetveten, muri në skajin e parë mbahet, dhe muret e bashkuara me të e ndjekin.
- `WALLOFFSET` (`WO`): klikoni një mur, pastaj anën ku ta zhvendosni (`D` shkruan një distancë, `C` bën një kopje në vend të kësaj).
- `WALLSTRETCH`: një dritare rreth skajeve të murit, pastaj një pikë bazë dhe një pikë e dytë.
- Në Vetitë, një {{ui:Gjatësia}} e shkruar mban fillimin dhe e merr me vete murin e bashkuar në skajin më të largët, dhe një {{ui:Trashësi}} e re rritet larg {{ui:Vijës së vendndodhjes}} që keni zgjedhur (faqja e majtë, faqja e djathtë ose qendra).

## Kyçni muret

Një kyçje qëndron me murin në skedar. Nëse zhvendosni një mur të kyçur, tjetri e ndjek. Nëse një ndryshim i vetëm i zhvendos të dy muret ndryshe, refuzohet dhe asgjë nuk ndryshon.

- `WALLHOLD`: kyç një mur me një mur tjetër. `A` e zhvendos së pari mbi vijën e murit tjetër, `K` mban distancën që ka.
- `WALLHOLDDIM`: kyç distancën midis dy mureve paralelë.
- `WALLGRID`: kyç një mur me një vijë rrjeti (një vijë në një shtresë rrjeti me etiketën e vet në tekst në një skaj), ose përgjatë saj ose me një skaj mbi të. Një mur i kyçur përgjatë vijës mban distancën që ka nga ajo. Zhvendoseni vijën e rrjetit me `GRIDMOVE` dhe muri e ndjek tërësisht, me muret e bashkuara me të. Një mur që shtrihet përgjatë një vijë rrjeti zhvendoset tërësisht me të edhe pa kyçje, dhe një mur që vetëm mbaron në vijë shtrihet nga ai skaj.
- `WALLHOLDS` liston kyçjet. `WALLUNHOLD` heq kyçjet nga një mur.
- Çdo kyçje shfaqet në plan si një katenac i vogël: pranë mesit të murit të kyçur, ose pranë skajit që është kyçur me një vijë rrjeti. Klikoni një katenac për ta hequr atë kyçje.

## Çfarë nuk është këtu ende

Kyçjet përdorin vijat qendrore të mureve. Muret këtu nuk kanë shtresa, kështu që nuk ka prioritet shtresash në një kryqëzim, dhe muret nuk lakohen (shih harqet më lart). Askush nuk i ka provuar këto mjete në një vizatim të madh, dhe nuk janë kontrolluar në një program tjetër CAD.
