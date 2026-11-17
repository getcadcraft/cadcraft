---
title: Përzgjidh objektet
summary: Zgjidh objekte një nga një, me një dritare ose kryqëzim, para ose gjatë një komande, dhe hiq objekte nga një përzgjedhje.
keywords: përzgjedhje, dritare, kryqëzim, emër-folje, folje-emër, zgjidh, të gjitha, e fundit, paraardhësi, gardh, hiq, shto, tab, cikël, mbivendosur, qselect, përzgjedhje e shpejtë, filtër, përzgjidh të ngjashmet, selectsimilar, shift, heq përzgjedhjen, ctrl+a, pickfirst
from: 676508c7
---

## Çfarë do të mësoni

Si zgjidhen objektet mbi të cilët vepron një komandë. CadCraft ka dy mënyra pune, dhe të dyja janë në rregull:

- **Përzgjidh së pari, pastaj komanda** (emër-folje). Përzgjidh objektet, pastaj shkruaj `M` për Zhvendos. Komanda e merr përzgjedhjen tuaj dhe shkon direkt te pyetja e radhës.
- **Komanda së pari, pastaj përzgjedhja** (folje-emër). Shkruaj `M`; komanda shfaq `Select objects:`; ti përzgjedh, pastaj shtyp {{key:Enter}}.

## Zgjidh një objekt në një herë

1. Pa komandë që po punon, kliko një vijë. Ajo theksohet dhe shfaqen dorezat e saj (katrorët e vegjël). Paneli i djathtë shfaq vetitë e saj.
2. Kliko një objekt tjetër. Shtohet në përzgjedhje.
3. Mbaj {{key:Shift}} dhe kliko një objekt të përzgjedhur. Hiqet nga përzgjedhja.
4. Shtyp {{key:Esc}}. Asnjë objekt nuk është i përzgjedhur.

## Dritare dhe kryqëzim

Kliko një herë në një hapësirë të zbrazët, lëviz, dhe kliko sërish: një drejtkëndësh. Shtypja dhe tërheqja vizaton në vend të kësaj një laso të lirë, me të njëjtat dy lloje (shih [Përzgjedhja me laso](topic:lasso-selection); Cilësimet mund ta bëjnë tërheqjen të vizatojë drejtkëndëshin). Cilët objekte merrni varet nga drejtimi:

| Ti lëviz | Kutia | Përzgjedh |
|---|---|---|
| Nga e majta në të djathtë | Dritare | Vetëm objektet **tërësisht brenda** kutisë |
| Nga e djathta në të majtë | Kryqëzim | Objektet brenda kutisë **dhe** objektet që ajo prek |

1. Vizato disa vija dhe rrathë që mbivendosen.
2. Kliko në hapësirën e zbrazët në të majtë të disa objekteve, lëviz djathtas, dhe kliko sërish. Përzgjidhen vetëm objektet që janë tërësisht brenda.
3. Shtyp {{key:Esc}}.
4. Kliko në hapësirën e zbrazët në të djathtë, lëviz majtas përmes disa objekteve, dhe kliko sërish. Përzgjidhet gjithçka që prek kutia.
5. Mbaj {{key:Shift}} dhe vizato një kuti ose laso mbi disa objekte të përzgjedhura. Ato dalin nga përzgjedhja.

## Përzgjidh, pastaj ekzekuto një komandë

1. Përzgjidh dy rrathë.
2. Shkruaj `M` dhe shtyp {{key:Enter}}.

Historiku thotë `2 found`, dhe kërkesa shkon direkt te `Specify base point`. Përfundo zhvendosjen (shih [Zhvendos, kopjo, rrotullo, shkallëzo dhe pasqyro](topic:modify-objects)).

Kur mbaron një komandë, përzgjedhja pastrohet, që komanda tjetër të nisë nga e para.

Komandat që pranojnë një përzgjedhje në këtë mënyrë: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} dhe {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} dhe {{cmd:CHAMFER}} kërkojnë gjithmonë të zgjidhni objektet një nga një; {{cmd:TRIM}} dhe {{cmd:EXTEND}} pranojnë një zgjedhje ose një shteg që tërhiqni nëpër pjesët (shih [Prerje dhe zgjatje](topic:trim-and-extend)).

## Ekzekuto një komandë, pastaj përzgjidh

1. Sigurohu që asgjë të mos jetë e përzgjedhur ({{key:Esc}}).
2. Shkruaj `E` dhe shtyp {{key:Enter}}. Kërkesa thotë `Select objects:`.
3. Kliko objekte, ose tërhiq dritare dhe kryqëzime. Historiku numëron çdo zgjedhje (`1 found`, `3 found`).
4. Shtyp {{key:Enter}}, shtyp {{key:Space}} ose kliko me të djathtën për të përfunduar zgjedhjen.

Objektet fshihen dhe historiku thotë sa.

Te kërkesa `Select objects:` mund të shkruani edhe:

- `ALL`, pastaj {{key:Enter}}: çdo objekt që mund ta redaktoni në skedën e hapur.
- `L` (ose `LAST`), pastaj {{key:Enter}}: objekti i vizatuar më së fundi.
- `P` (Paraardhësi): objektet mbi të cilat punoi komanda e fundit, nëse janë ende aty.
- `F` (Gardh): kliko ose shkruaj pika përgjatë një vije; çdo objekt që kalon vija shtohet. Shtyp {{key:Enter}} për të mbyllur gardhin; `U` heq pikën e fundit.
- `W` (Dritare) ose `C` (Kryqëzim): dy qoshe, në çfarëdo drejtimi tërhiqni.
- `R` (Hiq): nga tani e tutje, klikimet, dritaret dhe gardhet **heqin** objekte. Kërkesa thotë `Remove objects:`. `A` (Shto) kthen mbrapsht.
- `?`: lista e këtyre në historik.

Këto opsione nuk shfaqen te kërkesa, si në AutoCAD.

## Zgjidh njërin nga disa objekte të mbivendosur

Aty ku objektet mbivendosen ose prekin njëri-tjetrin, një klikim merr më të afërtin. Për të marrë një tjetër:

1. Mbaje kursorin të palëvizur mbi vendin.
2. Shtyp {{key:Tab}}. Objekti tjetër atje theksohet, dhe shiriti i statusit thotë cili është ("2 nga 3: Vijë në shtresën Mure").
3. Shtyp {{key:Tab}} sërish derisa të theksohet ai që dëshironi, pastaj kliko pa lëvizur.

Lëvizja e kursorit e nis përsëri. Kjo punon pa komandë që po ekzekutohet, te `Select objects:` dhe kudo ku një komandë kërkon të zgjidhni një objekt.

## Përzgjidh sipas një rregulli: Përzgjedhje e shpejtë

{{cmd:QSELECT}} (`QS`, ose {{ui:Redakto}} › {{ui:Më shumë}} › {{ui:Përzgjedhje e shpejtë}}) përzgjedh çdo objekt që përputhet me një rregull, si çdo rreth me rreze nën 50, ose çdo referencë bllok e quajtur DOOR-900.

1. Hap {{ui:Përzgjedhje e shpejtë}}.
2. Zgjidh {{ui:Lloji i objektit}} (lista numëron çdo lloj), pastaj {{ui:Veti}}: {{ui:Shtresa}}, {{ui:Ngjyra}}, dhe për disa lloje {{ui:Gjatësia}}, {{ui:Rreze}}, {{ui:Sipërfaqe}}, {{ui:Lartësia e tekstit}}, {{ui:Përmbajtja e tekstit}}, {{ui:Emri i bllokut}} ose {{ui:Motivi i vijëzimit}}.
3. Zgjidh {{ui:Operatori}} dhe {{ui:Vlera}}. `*` përputhet me karaktere të përgjithshme (`DOOR-*`); {{ui:Përzgjidh të gjitha}} merr çdo objekt të llojit. Numërimi në fund tregon sa përputhen ndërsa zgjidhni.
4. {{ui:Si të zbatohet}}: përfshi përputhjet, ose gjithçka tjetër. {{ui:Zbato për}} {{ui:Përzgjedhja aktuale}} ngushton atë që kishit përzgjedhur; {{ui:Shto te përzgjedhja aktuale}} shton në të.
5. Kliko {{ui:Përzgjidh}}. Pastaj ekzekuto komandën që dëshiron: ajo përdor përzgjedhjen.

## Përzgjidh të ngjashmet

Përzgjidh një ose më shumë objekte dhe shkruaj {{cmd:SELECTSIMILAR}} (`SIM`), ose zgjidh {{ui:Redakto}} › {{ui:Më shumë}} › {{ui:Përzgjidh të ngjashmet}}. Përzgjidhet çdo objekt i të njëjtit lloj, në të njëjtën shtresë dhe me të njëjtën ngjyrë; referencat e blloqeve kërkojnë edhe të njëjtin bllok, vijëzimet të njëjtin motiv. Shkruaj `SE` te kërkesa `Select objects` për të zgjedhur çfarë duhet të përputhet.

## Përzgjidh tani, përdor më vonë

Shkruaj `SELECT` dhe shtyp {{key:Enter}}, zgjidh objekte me ndonjë nga mënyrat më lart, dhe shtyp {{key:Enter}}. Ato mbeten të përzgjedhura për komandën e radhës, dhe `P` i zgjedh përsëri te një kërkesë `Select objects:` më vonë.

## Përzgjidh gjithçka

Pa komandë që po punon, shtyp {{key:Mod+A}}, ose zgjidh {{ui:Përzgjidh të gjitha}} në menynë {{ui:Redakto}} › {{ui:Më shumë}} të shiritit të veglave, për të përzgjedhur çdo objekt që mund ta redaktoni në skedën e hapur. Nëse keni shkruar diçka në rreshtin e komandës, {{key:Mod+A}} zgjedh atë tekst: shtyp {{key:Esc}} për ta pastruar së pari. Te një kërkesë `Select objects:`, shkruaj `ALL`. {{ui:Mos përzgjidh asnjë}} në të njëjtën meny, ose {{key:Esc}}, pastron përzgjedhjen.

:::tip
Nëse preferoni që çdo klikim të zëvendësojë përzgjedhjen (dhe {{key:Shift}} ta shtojë), vendos {{ui:Klikimi i objekteve}} në {{ui:Zëvendëson përzgjedhjen}} te [Cilësimet e CadCraft](topic:settings).
:::

## Çfarë nuk mund të përzgjidhet

- Objekte në një shtresë që është **e fikur**, **e ngrirë** ose **e kyçur**. Objektet e kyçura mbeten të dukshme, dhe ende mund të kapeni te to, por s’mund t’i përzgjidhni ose ndryshoni.
- Në një skedë fletë, modeli i shfaqur brenda një dritareje pamjeje. Përzgjidhni objektet e vetë fletës (blloku i titullit, shënimet, kornizat e dritareve të pamjes). Për të redaktuar modelin, shkoni te skeda {{ui:Modeli}}.

## Fshi shpejt

Përzgjidh objekte, pastaj shtyp {{key:Delete}} (ose {{key:Backspace}} kur rreshti i komandës nuk ka kursorin). Në një tastierë Mac, tasti i etiketuar delete punon pasi keni klikuar në vizatim; ndërsa rreshti i komandës ka kursorin, shtyp fn dhe delete bashkë. Kjo ekzekuton {{cmd:ERASE}} mbi përzgjedhjen. Nëse s’ndodh asgjë, keni shkruar diçka në rreshtin e komandës: shtyp {{key:Esc}}, ose shkruaj `E` dhe shtyp {{key:Enter}} në vend të kësaj.

## Gabimet e zakonshme

- **Dritarja mori shumë pak.** Tërhoqët nga e majta në të djathtë, që merr vetëm atë që është tërësisht brenda. Tërhiqni nga e djathta në të majtë për një kryqëzim.
- **Një klikim në hapësirë të zbrazët nisi një kuti.** Një klikim në hapësirë të zbrazët nis një dritare; klikimi i dytë e përfundon. Shtyp {{key:Esc}} ose kliko me të djathtën për ta hequr.
- **Një klikim në hapësirë të zbrazët e la të lirë përzgjedhjen.** Po, përveç nëse mbani {{key:Shift}}. Për ta mbajtur përzgjedhjen në një klikim të tillë dhe ta pastroni vetëm me {{key:Esc}}, vendos {{ui:Klikimi në një vend bosh}} në {{ui:Mban përzgjedhjen}} te [Cilësimet e CadCraft](topic:settings#clicking-an-empty-spot).
- **Komanda përdori objekte që nuk donit.** Diçka ishte ende e përzgjedhur kur e nisët. Shtyp {{key:Esc}} para një komande për të filluar me asgjë të përzgjedhur.
- **Asgjë nuk është e përzgjedhur pas një komande.** Kjo është e qëllimshme: një komandë e mbaruar pastron përzgjedhjen.
